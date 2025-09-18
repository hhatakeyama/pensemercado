'use client'

import React from 'react'

import Section from "@/components/layout/Section"
import Card from "@/components/layout/Card"

export default function View() {
  return (
    <>
      <Section id="para-quem" title="Para quem é" subtitle="Se você quer aprender com clareza, sem promessas fáceis, este projeto é para você.">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <Card icon="🧭" title="Iniciantes" text="Entenda conceitos como CDI, IPCA e como isso afeta seu dinheiro." />
          <Card icon="💼" title="Empreendedores" text="Precificação, fluxo de caixa e indicadores simples para manter seu negócio saudável." />
          <Card icon="🌎" title="Diversificação" text="Por que considerar dólares e ETFs globais, e como equilibrar risco x retorno." />
        </div>
      </Section>
    </>
  )
}
