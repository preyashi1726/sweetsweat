'use client'

import { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'
import { supabase } from '@/lib/supabase'

export default function Home() {
  const router = useRouter()
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const checkAuth = async () => {
      const {
        data: { session },
      } = await supabase.auth.getSession()

      if (session) {
        router.push('/dashboard')
      } else {
        setLoading(false)
      }
    }

    checkAuth()
  }, [router])

  if (loading) {
    return (
      <div className="flex h-screen items-center justify-center">
        <p>Loading...</p>
      </div>
    )
  }

  return (
    <div className="flex min-h-screen flex-col items-center justify-center gap-8 bg-gradient-to-br from-pink-50 to-purple-50 p-4">
      <div className="text-center">
        <h1 className="text-4xl font-bold text-gray-900">sweetsweat</h1>
        <p className="mt-2 text-lg text-gray-600">Motivate your partner. Earn rewards together.</p>
      </div>

      <div className="flex flex-col gap-4">
        <button
          onClick={() => router.push('/auth/login')}
          className="rounded-lg bg-pink-500 px-8 py-3 font-semibold text-white hover:bg-pink-600"
        >
          Login
        </button>
        <button
          onClick={() => router.push('/auth/register')}
          className="rounded-lg border-2 border-pink-500 px-8 py-3 font-semibold text-pink-500 hover:bg-pink-50"
        >
          Sign Up
        </button>
      </div>
    </div>
  )
}
