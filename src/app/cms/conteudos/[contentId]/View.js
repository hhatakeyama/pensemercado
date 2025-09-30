'use client'

import React from 'react'

import { useAuth } from '@/providers/AuthProvider'

import Content from '@/components/layout/Content'
import Stack from '@/components/layout/Stack'
import ButtonLink from '@/components/layout/ButtonLink'
import FormContent from '@/components/cms/forms/FormContent'
import useFetch from '@/hooks/useFetch'
import { useParams } from 'next/navigation'

export default function View() {
  const { isAuthenticated } = useAuth()
  const { contentId } = useParams()

  const { data, mutate } = useFetch([contentId ? `/cms/contents/${contentId}` :  null])

  if (!isAuthenticated) return null

  return (
    <Content>
      <Stack>
        <div className="flex items-center justify-between">
          <h1 className="text-2xl">Editar Conteúdo</h1>
          <ButtonLink href="/cms/conteudos">Voltar</ButtonLink>
        </div>

        <FormContent mutate={mutate} values={data} />
      </Stack>
    </Content>
  )
}
