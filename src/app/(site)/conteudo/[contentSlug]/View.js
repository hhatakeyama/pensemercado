'use client'

import { useParams } from 'next/navigation'
import React from 'react'

import Card from '@/components/layout/Card'

export default function View() {
  const params = useParams()

  // const { data } = useSWR(params?.ticker ? `https://brapi.dev/api/quote/${params.ticker}` : null, fetcher)
  const data = {
    title: "Comércio varejista volta a cair em agosto e reforça perda de fôlego da atividade",
    author: "Rodrigo Fávaro",
    description: "<p>O varejo nacional voltou a apresentar queda em agosto (1,5%), após um resultado de melhora parcial em julho, segundo o relatório do Índice do Varejo Stone (IVS). A retração deste mês se observa tanto no comparativo mensal, quanto no anual (3,3%), e também se reflete nas pioras observadas nas análises setorial e regional. A perda de fôlego da atividade varejista reforça a percepção de que a economia segue em processo de acomodação e desaceleração.</p>",
    content: `<p>O varejo nacional voltou a apresentar queda em agosto (1,5%), após um resultado de melhora parcial em julho, segundo o relatório do Índice do Varejo Stone (IVS). A retração deste mês se observa tanto no comparativo mensal, quanto no anual (3,3%), e também se reflete nas pioras observadas nas análises setorial e regional. A perda de fôlego da atividade varejista reforça a percepção de que a economia segue em processo de acomodação e desaceleração.</p><br />
      <p>Entre os segmentos analisados, praticamente todos tiveram queda em agosto. A única exceção foi o setor de Hipermercados, supermercados, produtos alimentícios, bebidas e fumo, que registrou uma alta mensal de 1,7%. Por outro lado, no comparativo anual, o segmento teve uma retração de 1,1%. Mas ele não foi o único: todos os setores registraram queda em relação ao mesmo período do ano passado, com destaque para o resultado de -6,7% nas vendas do segmento de Móveis e Eletrodomésticos.</p><br />
      <p>O cenário de queda generalizada no comparativo anual aponta que o varejo vem operando abaixo dos níveis registrados em 2024, o que respalda o entendimento de desaceleração da atividade econômica.</p><br />
      <p>Na análise regional a piora também é perceptível. Enquanto julho parecia trazer um alívio com um aumento de estados com crescimento no varejo, agosto voltou a reduzir esse número. Neste mês, apenas seis estados da federação tiveram alta no volume de vendas. Além disso, as altas registradas foram mais modestas do que as do mês anterior.</p><br />
      <p>Dentre os destaques positivos estão o crescimento de 3,2% no Amapá, de 1,9% no Tocantins e de 1,7% no Mato Grosso. Vale ressaltar que os dois últimos estados sustentaram a tendência de crescimento observada em julho, se mantendo entre os melhores resultados regionais pelo segundo mês consecutivo. Por outro lado, o único estado com alta no volume de vendas do varejo no sudeste foi São Paulo (0,6%), enquanto as regiões sul e nordeste não tiveram nenhum resultado positivo.</p>`,
    published_at: "2025-09-20T10:00:00Z"
  }

  return (
    <main className="py-10">
      <div className="container mx-auto px-5">
        <div className="flex flex-col gap-5">
          <h1 className="text-4xl font-bold">{data.title}</h1>

          <Card>
            <div className="flex flex-col gap-4">
              <div className="flex gap-4">
                <span className="inline-block text-xs uppercase tracking-widest text-indigo-200 bg-blue-500/10 px-3 py-2 border border-blue-500/35 rounded-full">
                  Por {data.author}
                </span>
                <span className="inline-block text-xs uppercase tracking-widest text-indigo-200 bg-blue-500/10 px-3 py-2 border border-blue-500/35 rounded-full">
                  Publicado em {new Date(data.published_at).toLocaleString()}
                </span>
              </div>
              <hr />

              <div dangerouslySetInnerHTML={{ __html: data.content }}></div>
            </div>
          </Card>
        </div>
      </div>
    </main>
  )
}
