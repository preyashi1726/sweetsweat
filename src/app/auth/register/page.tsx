export default function RegisterPage() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-gradient-to-br from-pink-50 to-purple-50 p-4">
      <div className="w-full max-w-md rounded-lg bg-white p-8 shadow-lg">
        <h1 className="text-2xl font-bold text-gray-900">Create Account</h1>
        <p className="mt-2 text-gray-600">Join sweetsweat</p>
        <form className="mt-6 space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700">Name</label>
            <input type="text" placeholder="Your name" className="mt-1 w-full rounded border border-gray-300 px-3 py-2" />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Email</label>
            <input type="email" placeholder="you@example.com" className="mt-1 w-full rounded border border-gray-300 px-3 py-2" />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Password</label>
            <input type="password" placeholder="••••••••" className="mt-1 w-full rounded border border-gray-300 px-3 py-2" />
          </div>
          <button type="submit" className="w-full rounded-lg bg-pink-500 py-2 font-semibold text-white hover:bg-pink-600">Sign Up</button>
        </form>
        <p className="mt-4 text-center text-gray-600">
          Already have an account? <a href="/auth/login" className="font-semibold text-pink-500 hover:underline">Login</a>
        </p>
      </div>
    </div>
  )
}
