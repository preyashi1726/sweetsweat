export default function Home() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-gradient-to-br from-pink-50 to-purple-50">
      <div className="text-center">
        <h1 className="text-5xl font-bold text-gray-900">sweetsweat</h1>
        <p className="mt-4 text-xl text-gray-600">Motivate your partner. Earn rewards together.</p>
        <div className="mt-8 flex gap-4 justify-center">
          <a href="/auth/login" className="rounded-lg bg-pink-500 px-8 py-3 font-semibold text-white hover:bg-pink-600">Login</a>
          <a href="/auth/register" className="rounded-lg border-2 border-pink-500 px-8 py-3 font-semibold text-pink-500 hover:bg-pink-50">Sign Up</a>
        </div>
      </div>
    </div>
  )
}
