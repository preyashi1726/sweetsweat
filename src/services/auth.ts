import { supabase } from '@/lib/supabase'
import { UserModel } from '@/types/models'
import { v4 as uuidv4 } from 'uuid'

function generateInviteCode(): string {
  return uuidv4().slice(0, 6).toUpperCase()
}

export const authService = {
  async signUp(email: string, password: string, displayName: string): Promise<UserModel> {
    const { data, error } = await supabase.auth.signUp({ email, password })
    if (error) throw error
    if (!data.user) throw new Error('Signup failed')

    const user: UserModel = {
      id: data.user.id,
      email,
      displayName,
      inviteCode: generateInviteCode(),
      createdAt: new Date().toISOString(),
    }

    await supabase.from('users').insert([user])
    return user
  },

  async signIn(email: string, password: string): Promise<UserModel> {
    const { data, error } = await supabase.auth.signInWithPassword({ email, password })
    if (error) throw error

    const { data: userData } = await supabase
      .from('users')
      .select()
      .eq('id', data.user!.id)
      .single()

    return userData as UserModel
  },

  async signOut(): Promise<void> {
    await supabase.auth.signOut()
  },

  async getCurrentUser(): Promise<UserModel | null> {
    const { data: { user } } = await supabase.auth.getUser()
    if (!user) return null

    const { data } = await supabase
      .from('users')
      .select()
      .eq('id', user.id)
      .single()

    return data as UserModel
  },
}
