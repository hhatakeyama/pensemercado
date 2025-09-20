'use client'

import { useParams } from 'next/navigation'
import React from 'react'

import Card from '@/components/layout/Card'
import Image from 'next/image'
import Link from 'next/link'

export default function View() {
  const params = useParams()

  // const { data } = useSWR(params?.ticker ? `https://brapi.dev/api/quote/${params.contentSlug}` : null, fetcher)
  const data = [
    {
      id: 1,
      title: "Comércio varejista volta a cair em setembro",
      slug: "comercio-varejista-volta-a-cair-em-setembro-10-10-2025",
      author: "Rodrigo Fávaro",
      image: "/a8929c53057c7371e70d89b9cacb807b.jpg",
      description: `O varejo nacional voltou a apresentar queda em setembro (1,5%), após um resultado de melhora parcial em agosto`,
      published_at: "2025-10-10T10:00:00Z"
    },
    {
      id: 2,
      title: "Comércio varejista volta a cair em agosto e reforça perda de fôlego da atividade",
      slug: "comercio-varejista-volta-a-cair-em-agosto-e-reforca-perda-de-folego-da-atividade-20-09-2025",
      author: "Rodrigo Fávaro",
      image: "/a8929c53057c7371e70d89b9cacb807b.jpg",
      description: `O varejo nacional voltou a apresentar queda em agosto (1,5%), após um resultado de melhora parcial em julho`,
      published_at: "2025-09-20T10:00:00Z"
    },
  ]

  return (
    <main className="py-10">
      <div className="container mx-auto px-5">
        <div className="flex flex-col gap-5">
          <h1 className="text-4xl font-bold">{data.title}</h1>

          <div className="flex flex-col gap-4">
            <h2 className="text-4xl font-bold">Notícias</h2>
            {data.map(noticia => (
              <Link key={noticia.id} href={`/conteudo/${noticia.slug}`}>
                <Card>
                  <div className="flex gap-4">
                    <div className="flex flex-col gap-4">
                      <Image alt={noticia.title} src={noticia.image} width={100} height={100} />
                    </div>
                    <div className="flex flex-col gap-4">
                      <h2 className="text-2xl font-bold">{noticia.title}</h2>
                      {noticia.description}
                    </div>
                  </div>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </main>
  )
}
