'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'

export default function PairPage() {
  const router = useRouter()
  const [mode, setMode] = useState<'create' | 'join' | null>(null)
  const [inviteCode, setInviteCode] = useState('')

  const handleCreateCouple = async () => {
    // TODO: Implement couple creation
    router.push('/dashboard')
  }

  const handleJoinCouple = async () => {
    if (!inviteCode) {
      alert('Please enter an invite code')
      return
    }
    // TODO: Implement couple joining
    router.push('/dashboard')
  }

  if (!mode) {
    return (
      <div className="flex min-h-screen flex-col items-center justify-center gap-8 bg-gradient-to-br from-pink-50 to-purple-50 p-4">
        <div className="text-center">
          <h1 className="text-3xl font-bold text-gray-900">Let's Get Started</h1>
          <p className="mt-2 text-lg text-gray-600">How do you want to proceed?</p>
        </div>

        <div className="flex flex-col gap-4">
          <button
            onClick={() => setMode('create')}
            className="rounded-lg bg-pink-500 px-8 py-3 font-semibold text-white hover:bg-pink-600"
          >
            Create New Couple
          </button>
          <button
            onClick={() => setMode('join')}
            className="rounded-lg border-2 border-pink-500 px-8 py-3 font-semibold text-pink-500 hover:bg-pink-50"
          >
            Join with Invite Code
          </button>
        </div>
      </div>
    )
  }

  if (mode === 'create') {
    return (
      <div className="flex min-h-screen flex-col items-center justify-center gap-8 bg-gradient-to-br from-pink-50 to-purple-50 p-4">
        <div className="w-full max-w-md rounded-lg bg-white p-8 shadow-lg">
          <h1 className="text-2xl font-bold text-gray-900">Create a Couple Account</h1>
          <p className="mt-2 text-gray-600">Your partner can join using your invite code</p>

          <div className="mt-6 space-y-4">
            <button
              onClick={handleCreateCouple}
              className="w-full rounded-lg bg-pink-500 py-2 font-semibold text-white hover:bg-pink-600"
            >
              Create Couple
            </button>
            <button
              onClick={() => setMode(null)}
              className="w-full rounded-lg border-2 border-gray-300 py-2 font-semibold text-gray-600 hover:bg-gray-50"
            >
              Back
            </button>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="flex min-h-screen flex-col items-center justify-center gap-8 bg-gradient-to-br from-pink-50 to-purple-50 p-4">
      <div className="w-full max-w-md rounded-lg bg-white p-8 shadow-lg">
        <h1 className="text-2xl font-bold text-gray-900">Join Your Partner</h1>
        <p className="mt-2 text-gray-600">Enter the invite code your partner shared</p>

        <div className="mt-6 space-y-4">
          <input
            type="text"
            value={inviteCode}
            onChange={(e) => setInviteCode(e.target.value.toUpperCase())}
            placeholder="e.g., ABC123"
            maxLength={6}
            className="w-full rounded border border-gray-300 px-3 py-2 text-center text-2xl font-bold tracking-widest"
          />

          <button
            onClick={handleJoinCouple}
            className="w-full rounded-lg bg-pink-500 py-2 font-semibold text-white hover:bg-pink-600"
          >
            Join
          </button>
          <button
            onClick={() => setMode(null)}
            className="w-full rounded-lg border-2 border-gray-300 py-2 font-semibold text-gray-600 hover:bg-gray-50"
          >
            Back
          </button>
        </div>
      </div>
    </div>
  )
}
