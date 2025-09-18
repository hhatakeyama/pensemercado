import React from 'react'

import View from './View'
import Script from 'next/script'

export default function Ticker({ params }) {
  console.log(params)
  const pageSchema = {
    "@context": "https://schema.org",
    "@type": "FinancialProduct",
    "name": "Cotação `{TICKER}`",
    "description": "Cotação e gráfico avançado de {TICKER} com API Brapi.",
    "url": "https://pensemercado.com/cotacao.html",
    "brand": { "@type": "Brand", "name": "Pense Mercado" }
  }

  return (
    <>
      <Script
        id="jsonld"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(pageSchema) }}
      />
      <View />
    </>
  )
}
