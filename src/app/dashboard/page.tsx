'use client'

import { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'
import { supabase } from '@/lib/supabase'
import { authService } from '@/services/auth'
import { UserModel } from '@/types/models'

export default function DashboardPage() {
  const router = useRouter()
  const [user, setUser] = useState<UserModel | null>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const loadUser = async () => {
      try {
        const currentUser = await authService.getCurrentUser()
        if (!currentUser) {
          router.push('/auth/login')
        } else {
          setUser(currentUser)
        }
      } catch (error) {
        router.push('/auth/login')
      } finally {
        setLoading(false)
      }
    }

    loadUser()
  }, [router])

  const handleLogout = async () => {
    await authService.signOut()
    router.push('/')
  }

  if (loading) {
    return (
      <div className="flex h-screen items-center justify-center">
        <p>Loading...</p>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gray-50 p-4">
      <div className="mx-auto max-w-2xl">
        <div className="flex items-center justify-between rounded-lg bg-white p-6 shadow">
          <div>
            <h1 className="text-2xl font-bold text-gray-900">Welcome, {user?.displayName}!</h1>
            <p className="mt-1 text-gray-600">Your invite code: {user?.inviteCode}</p>
          </div>
          <button
            onClick={handleLogout}
            className="rounded-lg bg-red-500 px-4 py-2 font-semibold text-white hover:bg-red-600"
          >
            Logout
          </button>
        </div>

        <div className="mt-6 grid gap-4">
          <div className="rounded-lg bg-white p-6 shadow">
            <h2 className="text-lg font-semibold text-gray-900">Account Status</h2>
            <p className="mt-2 text-gray-600">
              {user?.coupleId ? 'Paired with partner' : 'Not paired yet. Go to onboarding to pair with your partner.'}
            </p>
            {!user?.coupleId && (
              <button
                onClick={() => router.push('/onboarding/pair')}
                className="mt-4 rounded-lg bg-pink-500 px-4 py-2 font-semibold text-white hover:bg-pink-600"
              >
                Pair with Partner
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
