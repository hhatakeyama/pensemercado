'use client'

import React, { useState } from 'react'

import Section from '@/components/layout/Section'
import { useAuth } from '@/providers/AuthProvider'
import useSWR from 'swr'
import { avFetcher } from '@/utils/fetcher'

export default function View() {
  const { isAuthenticated } = useAuth()

  const [search, setSearch] = useState('')

  const { data } = useSWR(search ? {
    function: 'SYMBOL_SEARCH',
    keywords: search,
  } : null, avFetcher)
  console.log(data)

  return (
    <Section>
      <input type="text" className="border-red-100" value={search} onChange={e => setSearch(e.target.value)} />
      {isAuthenticated ? "Logado" : "Não"}
    </Section>
  )
}
