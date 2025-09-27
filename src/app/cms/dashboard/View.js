'use client'

import React from 'react'

import { useAuth } from '@/providers/AuthProvider'
import Content from '@/components/layout/Content'
import Stack from '@/components/layout/Stack'
import Link from 'next/link'

export default function View() {
  const { userData } = useAuth()

  return (
    <Content>
      <Stack>
        <h1 className="text-2xl">Dashboard</h1>
        Bem-vindo {userData?.name}, acesse os dados no menu abaixo:
        
        <div className="flex gap-2">
          <Link className="block px-3 py-2 rounded-lg text-slate-300 bg-slate-800 hover:bg-slate-600" href="/cms/conteudos">Conteúdos</Link>
          <Link className="block px-3 py-2 rounded-lg text-slate-300 bg-slate-800 hover:bg-slate-600" href="/cms/contatos">Contatos</Link>
          <Link className="block px-3 py-2 rounded-lg text-slate-300 bg-slate-800 hover:bg-slate-600" href="/cms/newsletters">Newsletters</Link>
        </div>
      </Stack>
    </Content>
  )
}
