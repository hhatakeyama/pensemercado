'use client'

import React from 'react'

import useFetch from '@/hooks/useFetch'
import { useAuth } from '@/providers/AuthProvider'

import Content from '@/components/layout/Content'
import Stack from '@/components/layout/Stack'
import ButtonLink from '@/components/layout/ButtonLink'
import FormContent from '@/components/cms/forms/FormContent'

export default function View() {
  const { isAuthenticated } = useAuth()

  const { data } = useFetch([`/cms/content`])

  if (!isAuthenticated) return null

  return (
    <Content>
      <Stack>
        <div className="flex items-center justify-between">
          <h1 className="text-2xl">Novo Conteúdo</h1>
          <ButtonLink href="/cms/conteudos">Voltar</ButtonLink>
        </div>

        <FormContent />
      </Stack>
    </Content>
  )
}
