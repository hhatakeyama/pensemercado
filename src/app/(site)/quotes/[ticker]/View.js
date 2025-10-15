'use client'

import Card from '@/components/layout/Card'
import Graphic from './_components/Graphic'
import Technical from './_components/Technical'
import Profile from './_components/Profile'
import Tape from './_components/Tape'

export default function View({ data, ticker }) {
  const tickerArray = ticker?.split('.')
  const symbol = tickerArray[0] || ''
  const bolsa = tickerArray[1] !== 'SA' ? 'NASDAQ' : 'BMFBOVESPA'

  return (
    <main className="py-10">
      <div className="container mx-auto px-5">
        <div className="flex flex-col gap-5">
          <header className="flex justify-between">
            <h2 className="text-4xl font-bold">{symbol}</h2>
            <span className="inline-block text-xs uppercase tracking-widest text-indigo-200 bg-blue-500/10 px-3 py-2 border border-blue-500/35 rounded-full">
              Dados exibidos com até 30min de delay
            </span>
          </header>

          <Card
            title={`Cotação ${symbol} hoje`}
            text="Gráfico avançado, análise técnica e perfil da empresa — tudo em uma única página leve e otimizada para SEO."
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            <div className="col-span-1 lg:col-span-2">
              <div className="flex flex-col gap-5">
                <Card title="Gráfico Avançado">
                  <Graphic bolsa={bolsa} ticker={symbol} />
                </Card>
                <Card title="Detalhes">
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    <div className="col-span-1 lg:col-span-2">
                    </div>
                  </div>
                </Card>
              </div>
            </div>
            <div className="">
              <Card title="Visão Rápida e Técnica">
                <Technical bolsa={bolsa} ticker={symbol} />
                <Profile bolsa={bolsa} ticker={symbol} />
              </Card>
            </div>
          </div>
          <div className="">
            <Card title="Mercado agora">
              <Tape ticker={symbol} />
            </Card>
          </div>
        </div>
      </div>
    </main>
  )
}
