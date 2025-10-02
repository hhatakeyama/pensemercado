'use client'

import { useEffect, useState } from "react"
import Link from "next/link"

import { useFetchPolygon } from "@/hooks/useFetch"

export default function Spotlight({ open, setOpen }) {
  const [search, setSearch] = useState('')
  const [debouncedSearch, setDebouncedSearch] = useState('');

  const { data } = useFetchPolygon([debouncedSearch ? `/tickers` : null, { locale: 'global', market: 'stocks', active: true, search: debouncedSearch }])
  console.log(data)

  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedSearch(search)
    }, 800)

    return () => clearTimeout(handler)
  }, [search])

  if (!open) return null

  return (
    <div
      className="fixed inset-0 flex items-center justify-center p-4 md:p-10 z-50 backdrop-blur-sm bg-black/40"
      onClick={() => setOpen(false)}
    >
      <div
        className="w-full max-w-xl bg-white dark:bg-gray-800 rounded-lg shadow-2xl overflow-hidden transition-all transform-gpu scale-100 opacity-100"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="p-2 border-b border-gray-200 dark:border-gray-700">
          <input
            type="text"
            name="search"
            autoComplete="off"
            className="px-4 py-3 rounded-xl border border-white/10 text-slate-900 focus:outline-none focus:ring-2 focus:ring-blue-500 w-full"
            placeholder="Buscar ações, FIIs, ETFs, BDRs, índices"
            value={search}
            onChange={e => setSearch(e.target.value)}
          />
        </div>
        <ul className="top-0 p-2 max-h-80 overflow-y-auto">
          {data?.results?.length > 0 ? (
            data.results.map((item, index) => (
              <li key={index}>
                <Link
                  className="flex p-3 my-1 rounded-md cursor-pointer hover:bg-gray-100 dark:hover:bg-gray-700 text-black transition-colors"
                  href={`/quotes/${item.ticker}`} onClick={() => setOpen(false)}>
                  {item.ticker} - {item.name}
                </Link>
              </li>
            ))
          ) : (
            <li className="p-3 text-gray-500 dark:text-gray-400 text-center">
              Nenhum resultado encontrado.
            </li>
          )}
        </ul>
      </div>
    </div>
  )
}