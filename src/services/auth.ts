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

    const { error: dbError } = await supabase.from('users').insert([user])
    if (dbError) throw dbError

    return user
  },

  async signIn(email: string, password: string): Promise<UserModel> {
    const { data, error } = await supabase.auth.signInWithPassword({ email, password })
    if (error) throw error
    if (!data.user) throw new Error('Login failed')

    const { data: userData, error: fetchError } = await supabase
      .from('users')
      .select()
      .eq('id', data.user.id)
      .single()

    if (fetchError) throw fetchError
    return userData as UserModel
  },

  async signOut(): Promise<void> {
    const { error } = await supabase.auth.signOut()
    if (error) throw error
  },

  async getCurrentUser(): Promise<UserModel | null> {
    const { data: { user } } = await supabase.auth.getUser()
    if (!user) return null

    const { data, error } = await supabase
      .from('users')
      .select()
      .eq('id', user.id)
      .single()

    if (error) return null
    return data as UserModel
  },

  async updateProfile(displayName?: string, photoUrl?: string): Promise<void> {
    const updates: Record<string, any> = {}
    if (displayName) updates.displayName = displayName
    if (photoUrl) updates.photoUrl = photoUrl

    const { data: { user } } = await supabase.auth.getUser()
    if (!user) throw new Error('Not authenticated')

    const { error } = await supabase.from('users').update(updates).eq('id', user.id)
    if (error) throw error
  },
}
