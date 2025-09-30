'use client'

import { useParams } from 'next/navigation'
import React from 'react'

import useFetch from '@/hooks/useFetch'

import Card from '@/components/layout/Card'
import Image from 'next/image'

export default function View() {
  const { contentSlug } = useParams()

  const { data } = useFetch([contentSlug ? `/contents/${contentSlug}` : null])

  if (!data) return null

  return (
    <main className="py-10">
      <div className="container mx-auto px-5">
        <div className="flex flex-col gap-5">
          <h1 className="text-4xl font-bold">{data.title}</h1>

          <Card>
            <div className="flex flex-col gap-4">
              <div className="flex gap-4">
                {!!data.image && (
                  <Image
                    alt={data.image}
                    src={`${process.env.NEXT_PUBLIC_API_DOMAIN}/storage/${data.id}/350x350-${data.image}`}
                    width={120}
                    height={120}
                  />
                )}
                <div className="flex flex-col items-start justify-center gap-4">
                  {!!data.author && (
                    <span className="inline-block text-xs uppercase tracking-widest text-indigo-200 bg-blue-500/10 px-3 py-2 border border-blue-500/35 rounded-full">
                      Por {data.author}
                    </span>
                  )}
                  <span className="inline-block text-xs uppercase tracking-widest text-indigo-200 bg-blue-500/10 px-3 py-2 border border-blue-500/35 rounded-full">
                    Publicado em {new Date(data.updated_at).toLocaleString()}
                  </span>
                </div>
              </div>
              <hr />

              <div className="col-span-4" dangerouslySetInnerHTML={{ __html: data.content.replaceAll("\r", "<br />") }}></div>
            </div>
          </Card>
        </div>
      </div>
    </main>
  )
}
