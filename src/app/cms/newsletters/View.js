'use client'

import React from 'react'

import Content from '@/components/layout/Content'
import { useAuth } from '@/providers/AuthProvider'
import useFetch from '@/hooks/useFetch'
import Stack from '@/components/layout/Stack'

export default function View() {
  const { isAuthenticated } = useAuth()

  const { data } = useFetch([`/cms/newsletters`])
  console.log(data)

  if (!isAuthenticated) return null

  return (
    <Content>
      <Stack>
        <div className="flex items-center justify-between">
          <h1 className="text-2xl">Newsletters</h1>
        </div>

        <div className="border border-gray-500">
          <table className="table-auto w-full">
            <thead>
              <tr>
                <th className="bg-gray-700 border-b border-gray-500 p-2" align="left">ID</th>
                <th className="bg-gray-700 border-b border-gray-500 p-2" align="left">Nome</th>
                <th className="bg-gray-700 border-b border-gray-500 p-2" align="left">E-mail</th>
                <th className="bg-gray-700 border-b border-gray-500 p-2" align="left">Data</th>
              </tr>
            </thead>
            <tbody>
              {!data?.length && (
                <tr className="hover:bg-gray-800">
                  <td className="border-b border-gray-500 p-2" colSpan={4}>Sem contatos</td>
                </tr>
              )}
              {data?.map(contact => (
                <tr className="hover:bg-gray-800" key={contact.id}>
                  <td className="border-b border-gray-500 p-2">{contact.id}</td>
                  <td className="border-b border-gray-500 p-2">{contact.name}</td>
                  <td className="border-b border-gray-500 p-2">{contact.email}</td>
                  <td className="border-b border-gray-500 p-2">{contact.created_at}</td>
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
