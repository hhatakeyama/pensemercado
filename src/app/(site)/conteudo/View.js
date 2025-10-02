'use client'

import { useParams } from 'next/navigation'
import React from 'react'

import Card from '@/components/layout/Card'
import Image from 'next/image'
import Link from 'next/link'
import useFetch from '@/hooks/useFetch'
import { localeDate } from '@/utils/formatter'

export default function View() {
  const { data } = useFetch(['/contents'])

  return (
    <main className="py-10">
      <div className="container mx-auto px-5">
        <div className="flex flex-col gap-5">
          <h1 className="text-4xl font-bold">Conteúdos</h1>

          <div className="flex flex-col gap-4">
            {data?.map(conteudo => (
              <Link key={conteudo.id} href={`/conteudo/${conteudo.slug}`}>
                <Card>
                  <div className="flex gap-4">
                    <div className="flex flex-col gap-4">
                      {conteudo.image ? (
                        <Image alt={conteudo.title} src={`${process.env.NEXT_PUBLIC_API_DOMAIN}/storage/${conteudo.id}/120x120-${conteudo.image}`} width={100} height={100} />
                      ) : (
                        <></>
                      )}
                    </div>
                    <div className="flex flex-col gap-2">
                      <h2 className="text-xl font-bold">{conteudo.title}</h2>
                      {conteudo.description}

                      <div className="flex gap-2">
                        <span className="inline-block text-xs uppercase tracking-widest text-indigo-200 bg-blue-500/10 px-3 py-2 border border-blue-500/35 rounded-full">
                          {conteudo.author}
                        </span>
                        <span className="inline-block text-xs uppercase tracking-widest text-indigo-200 bg-blue-500/10 px-3 py-2 border border-blue-500/35 rounded-full">
                          {localeDate(conteudo.updated_at).toLocaleString()}
                        </span>
                      </div>
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
