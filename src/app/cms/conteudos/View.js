'use client'

import React from 'react'

import useFetch from '@/hooks/useFetch'
import { useAuth } from '@/providers/AuthProvider'

import Content from '@/components/layout/Content'
import Stack from '@/components/layout/Stack'
import ButtonLink from '@/components/layout/ButtonLink'
import Link from 'next/link'
import { IconEdit } from '@tabler/icons-react'
import { defaultParseDate, formattedDate, formattedDateTimezone, localeDate } from '@/utils/formatter'

export default function View() {
  const { isAuthenticated } = useAuth()

  const { data } = useFetch([`/cms/contents`])

  if (!isAuthenticated) return null

  return (
    <Content>
      <Stack>
        <div className="flex items-center justify-between">
          <h1 className="text-2xl">Conteúdos</h1>
          <ButtonLink href="/cms/conteudos/novo">Adicionar conteúdo</ButtonLink>
        </div>

        <div className="border border-gray-500">
          <table className="table-auto w-full">
            <thead>
              <tr>
                <th className="bg-gray-700 border-b border-gray-500 p-2" align="left">ID</th>
                <th className="bg-gray-700 border-b border-gray-500 p-2" align="left">Título</th>
                <th className="bg-gray-700 border-b border-gray-500 p-2" align="left">Descrição</th>
                <th className="bg-gray-700 border-b border-gray-500 p-2" align="left">Data de Cadastro</th>
                <th className="bg-gray-700 border-b border-gray-500 p-2" align="left">Data de Atualização</th>
                <th className="bg-gray-700 border-b border-gray-500 p-2" align="left">Ações</th>
              </tr>
            </thead>
            <tbody>
              {!data?.length && (
                <tr className="hover:bg-gray-800">
                  <td className="border-b border-gray-500 p-2" colSpan={6}>Sem conteúdos</td>
                </tr>
              )}
              {data?.map(content => (
                <tr className="hover:bg-gray-800" key={content.id}>
                  <td className="border-b border-gray-500 p-2">{content.id}</td>
                  <td className="border-b border-gray-500 p-2">{content.title}</td>
                  <td className="border-b border-gray-500 p-2">{content.description || '--'}</td>
                  <td className="border-b border-gray-500 p-2">{localeDate(content.created_at).toLocaleString()}</td>
                  <td className="border-b border-gray-500 p-2">{localeDate(content.updated_at).toLocaleString()}</td>
                  <td className="border-b border-gray-500 p-2">
                    <div className="flex">
                      <ButtonLink href={`/cms/conteudos/${content.id}`}>
                        <IconEdit />
                      </ButtonLink>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
            <tfoot>
              <tr>
                <td colSpan={3} className="p-2"></td>
              </tr>
            </tfoot>
          </table>
        </div>
      </Stack>
    </Content>
  )
}
