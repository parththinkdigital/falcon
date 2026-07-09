'use client'
import { useState } from 'react'
import { useRouter } from 'next/navigation'

export default function AdminLoginPage() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const router = useRouter()

  const handleSubmit = async (e) => {
    e.preventDefault()
    setError('')

    try {
      const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL || 'http://localhost:5000/api'}/auth/login`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password }),
      })
      const data = await res.json()
      if (!res.ok) throw new Error(data.message || 'Login failed')
      localStorage.setItem('adminToken', data.token)
      router.push('/admin/dashboard')
    } catch (err) {
      setError(err.message)
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-industrial-50">
      <div className="w-full max-w-md bg-white p-8 shadow-lg">
        <div className="flex items-center gap-2 mb-8 justify-center">
          <div className="w-10 h-10 rounded-sm bg-accent-500 flex items-center justify-center font-heading font-bold text-white text-xl">F</div>
          <span className="font-heading font-semibold text-xl text-primary-500">Admin Login</span>
        </div>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div><label className="block text-sm font-medium text-industrial-700 mb-1">Email</label><input type="email" required className="w-full px-4 py-2.5 border border-industrial-200 rounded-sm text-sm focus:outline-none focus:border-accent-500" value={email} onChange={e => setEmail(e.target.value)} /></div>
          <div><label className="block text-sm font-medium text-industrial-700 mb-1">Password</label><input type="password" required className="w-full px-4 py-2.5 border border-industrial-200 rounded-sm text-sm focus:outline-none focus:border-accent-500" value={password} onChange={e => setPassword(e.target.value)} /></div>
          {error && <p className="text-sm text-red-600">{error}</p>}
          <button type="submit" className="btn-primary w-full justify-center">Sign In</button>
        </form>
      </div>
    </div>
  )
}
