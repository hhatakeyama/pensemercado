'use client'

import Image from 'next/image'
import { useRouter } from 'next/navigation'
import React, { useEffect, useState } from 'react'

import Section from '@/components/layout/Section'
import Card from '@/components/layout/Card'
import { useAuth } from '@/providers/AuthProvider'

export default function View() {
  const { isAuthenticated, login } = useAuth()
  const router = useRouter()

  const [credentials, setCredentials] = useState({
    email: '',
    password: '',
  })
  const [error, setError] = useState('')

  const handleSubmit = e => {
    setError('')
    e.preventDefault()
    login(credentials).catch(err => setError(err?.response?.data?.message))
  }

  useEffect(() => {
    if (isAuthenticated) router.push("/cms/dashboard")
  }, [isAuthenticated, router])

  return (
    <Section>
      <div className="flex flex-col items-center justify-center gap-15">
        <Image alt="Pense Mercado" src="/logo.png" width={180} height={45} />
        <div className="w-full max-w-xl">
          <Card>
            <div className="flex flex-col items-center justify-center gap-4">
              <div className="flex flex-col items-center justify-center">
                <h1 className="text-2xl font-bold">Login</h1>
                <p>Entre com seu e-mail e senha</p>
              </div>
              <form onSubmit={handleSubmit} className="flex flex-col gap-5 w-full">
                <div>
                  <label className="block text-slate-400 text-sm mb-1" htmlFor="ctEmail">E‑mail</label>
                  <input
                    id="ctEmail"
                    name="email"
                    type="email"
                    placeholder="voce@email.com"
                    required
                    className="w-full px-4 py-3 rounded-xl bg-slate-900 border border-white/10 text-slate-200 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    onChange={e => setCredentials(prevState => ({ ...prevState, email: e.target.value }))}
                  />
                </div>
                <div>
                  <label className="block text-slate-400 text-sm mb-1" htmlFor="ctPassword">Senha</label>
                  <input
                    id="ctPassword"
                    type="password"
                    name="password"
                    placeholder="Senha"
                    required
                    value={credentials.password}
                    className="w-full px-4 py-3 rounded-xl bg-slate-900 border border-white/10 text-slate-200 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    onChange={e => setCredentials(prevState => ({ ...prevState, password: e.target.value }))}
                  />
                </div>
                {!!error && <div className='bg-red-200 border-1 rounded text-red-700 p-2'>{error}</div>}
                <button
                  type="submit"
                  className="w-full px-4 py-3 rounded-xl bg-gradient-to-br from-green-500 to-green-600 text-white font-extrabold mt-4 transition hover:brightness-105">
                  Login
                </button>
              </form>
            </div>
          </Card>
        </div>
      </div>
    </Section>
  )
}
