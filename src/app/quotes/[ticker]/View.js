'use client'

import React, { useEffect, useState } from 'react'
import useSWR from 'swr'

import fetcher from '@/utils/fetcher'

import Card from '@/components/layout/Card'
import { useParams } from 'next/navigation'
import Graphic from './_components/Graphic'
import Technical from './_components/Technical'
import Profile from './_components/Profile'
import Tape from './_components/Tape'

export default function View() {
  const params = useParams()

  const { data } = useSWR(params?.ticker ? `https://brapi.dev/api/quote/${params.ticker}` : null, fetcher)

  return (
    <main className="py-10">
      <div className="container mx-auto px-5">
        <div className="flex flex-col gap-5">
          <header className="flex justify-between">
            <div className="text-4xl"><strong>{params?.ticker}</strong></div>
            <span className="inline-block text-xs uppercase tracking-widest text-indigo-200 bg-blue-500/10 px-3 py-2 border border-blue-500/35 rounded-full">
              Dados exibidos com 30min de delay
            </span>
          </header>

          <Card
            title={`Cotação ${params?.ticker} hoje`}
            text="Gráfico avançado, análise técnica e perfil da empresa — tudo em uma única página leve e otimizada para SEO."
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            <div className="col-span-1 lg:col-span-2">
              <Card title="Gráfico Avançado">
                <Graphic ticker={params?.ticker} />
              </Card>
            </div>
            <div className="">
              <Card title="Visão Rápida e Técnica">
                <Technical ticker={params?.ticker} />
                <Profile ticker={params?.ticker} />
              </Card>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="">
              <Card title="Resumo do Ativo">
                <p className="muted" id="summary">Use o seletor acima para trocar o ticker. Ex.: <strong>MGLU3</strong>, <strong>PETR4</strong>, <strong>VALE3</strong>, <strong>WEGE3</strong>. Para ações dos EUA, digite o ticker (ex.: <strong>AAPL</strong>, <strong>MSFT</strong>). O script ajusta automaticamente a bolsa quando possível.</p>
                <p style={{ fontSize: "12px", color: "#93c5fd" }}>Dica SEO: adicione um parágrafo explicando <em>o que a empresa faz</em>, setor, drivers de resultado e links internos para conteúdos do Pense Mercado.</p>
              </Card>
            </div>
            <div className="">
              <Card title="Mercado agora">
                <Tape ticker={params?.ticker} />
              </Card>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}
