import React from 'react'

import View from './View'
import Script from 'next/script'

async function getTicker({ ticker }) {
  const res = await fetch(`${process.env.NEXT_PUBLIC_ROOT_URL}/api/ticker/${ticker}`, {
    // next: { revalidate: 3600 } -> Revalida os dados a cada hora
  });

  if (!res.ok) {
    throw new Error('Falha ao buscar os dados da API.');
  }

  return res.json();
}

export default async function Ticker({ params }) {
  const { ticker } = await params
  const pageSchema = {
    "@context": "https://schema.org",
    "@type": "FinancialProduct",
    "name": `Cotação ${ticker}`,
    "description": `Cotação e gráfico avançado de ${ticker}.`,
    "url": `https://pensemercado.com/quotes/${ticker}`,
    "brand": { "@type": "Brand", "name": "Pense Mercado" }
  }

  // const tickerArray = ticker?.split('.')
  const response = null // await getTicker({ ticker: tickerArray[0] })

  return (
    <>
      <Script
        id="jsonld"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(pageSchema) }}
      />
      <View data={response} ticker={ticker} />
    </>
  )
}
