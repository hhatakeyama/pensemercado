'use client'

import React, { useEffect } from 'react'

import Content from '@/components/layout/Content'
import Stack from '@/components/layout/Stack'
import api from '@/utils/api'

export default function View() {
  useEffect(() => {
    api
      .post('/api/cms/logout')
      .finally(() => {
        window.location = "/cms"
      })
  }, [])

  return (
    <Content>
      <Stack>
        <p>Logout</p>
      </Stack>
    </Content>
  )
}
