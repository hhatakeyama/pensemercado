'use client'

import React, { useEffect, useState } from 'react'
import useSWR from 'swr'

import fetcher from '@/utils/fetcher'

import Card from '@/components/layout/Card'

export default function View() {
  const [ticker, setTicker] = useState("")
  const [searchTicker, setSearchTicker] = useState("")

  const { data, error, isLoading } = useSWR(searchTicker ? `https://brapi.dev/api/available?search=${searchTicker}` : null, fetcher)
  console.log(data)
  const loading = !data && !error

  useEffect(() => {
    // Set a new message after 3 seconds
    const timer = setTimeout(() => {
      setSearchTicker(ticker)
    }, 2000)

    // Cleanup the timer if the component unmounts
    return () => clearTimeout(timer)
  }, [ticker])

  return (
    <main className="py-10">
      <div className="container mx-auto px-5">
        <div className="flex flex-col gap-5">
          <header className="flex justify-between">
            <div className="brand"><span className="dot"></span><strong>Pense Mercado</strong></div>
            <span className="inline-block text-xs uppercase tracking-widest text-indigo-200 bg-blue-500/10 px-3 py-2 border border-blue-500/35 rounded-full">
              Dados exibidos com 30min de delay
            </span>
          </header>

          <form className="flex gap-4">
            <input
              type="text"
              className="px-4 py-3 rounded-xl bg-white border border-white/10 text-black focus:outline-none focus:ring-2 focus:ring-slate-500 w-md"
              placeholder="Ex.: B3SA3, PETR4, AAPL"
              disabled={isLoading}
              onChange={e => setTicker(e.target.value)}
            />
            {ticker}
            <button
              type="submit"
              disabled={isLoading}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-gradient-to-br from-green-500 to-green-600 text-white font-bold shadow-lg shadow-slate-900 transition hover:brightness-105">
              Aplicar
            </button>
          </form>

          <Card
            title={`Cotação {TICKER} hoje`}
            text="Gráfico avançado, análise técnica e perfil da empresa — tudo em uma única página leve e otimizada para SEO."
          />
        </div>
      </div>
    </main>
  )
}
