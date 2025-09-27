'use client'

import Link from 'next/link'
import React from 'react'

import Section from "@/components/layout/Section"
import Card from "@/components/layout/Card"
import Newsletter from '@/components/forms/Newsletter'
import Contact from '@/components/forms/Contact'

import Hero from "./_components/Hero"

export default function View() {
  return (
    <>
      <Hero />
      <Section id="para-quem" title="Para quem é" subtitle="Se você quer aprender com clareza, sem promessas fáceis, este projeto é para você.">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <Card icon="🧭" title="Iniciantes" text="Entenda conceitos como CDI, IPCA e como isso afeta seu dinheiro." />
          <Card icon="💼" title="Empreendedores" text="Precificação, fluxo de caixa e indicadores simples para manter seu negócio saudável." />
          <Card icon="🌎" title="Diversificação" text="Por que considerar dólares e ETFs globais, e como equilibrar risco x retorno." />
        </div>
      </Section>
      <Section id="conteudos" title="Conteúdos" subtitle="Gratuito para começar, premium para ir além.">
        <div className="flex flex-col gap-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            <Card icon="📝" title="Artigos" text="Tutoriais práticos, notícias explicadas e análises com linguagem direta." cta="Receber no e-mail" href="#assine" />
            <Card icon="🎥" title="Vídeos" text="YouTube com roteiros objetivos e exemplos reais para acelerar seu aprendizado." cta="Ir para o canal" href="https://www.youtube.com/@pensemercado" ctaProps={{ target: "_blank" }} />
            <Card icon="📊" title="Planilhas" text="Orçamento, reserva, carteira e metas - tudo pronto para você copiar e usar." cta="Baixar modelos" href="#assine" />
            <Card icon="🔒" title="Premium Club" text="Conteúdos exclusivos, aulões e modelos avançados para acelerar resultados." cta="Ver benefícios" href="#premium" />
            <Card icon="📬" title="Newsletter" text="Resumo semanal com o essencial do mercado e dicas práticas." cta="Assinar grátis" href="#assine" />
            <Card icon="🤝" title="Consultoria" text="Mentoria pontual para organizar finanças pessoais ou do seu negócio." cta="Falar comigo" href="#contato" />
          </div>
          <div>
            <Link href="/conteudo" className="inline-flex items-center gap-2 px-4 py-3 rounded-xl font-bold bg-gradient-to-br from-blue-500 to-blue-400 text-white transition hover:brightness-105">
              Ver Conteúdos
            </Link>
          </div>
        </div>
      </Section>
      <Newsletter />
      <Section id="premium" title="Pense Mercado Premium (em breve)" subtitle="Para quem quer acelerar: materiais avançados, modelos extras e encontros ao vivo.">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <Card icon="📚" title="Biblioteca" text="Modelos e planilhas exclusivas com passo a passo." />
          <Card icon="🧭" title="Trilhas" text="Roteiros organizados para iniciantes, empreendedores e investidores." />
          <Card icon="🎤" title="Mentorias" text="Encontros em grupo para tirar dúvidas e construir junto." />
        </div>
      </Section>
      <Section id="sobre" title="Sobre o projeto" subtitle="Criado para ajudar quem quer sair do zero e evoluir com consistência.">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <Card icon="👨‍💻" title="Quem está por trás" text="Rodrigo Favaro é empreendedor e criador de conteúdo. Apaixonado por educação financeira e negócios, produz materiais com linguagem simples, baseados em fatos e experiências reais. *Este site não oferece recomendação de investimento.*" />
          <Card icon="🧭" title="Missão" text="Ensinar finanças e investimentos com clareza e responsabilidade, para que mais pessoas tomem decisões melhores no dia a dia e no longo prazo." />
        </div>
      </Section>
      <Section id="faq" title="Perguntas frequentes" subtitle="">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <details className="bg-white/5 border border-white/10 rounded-xl p-4">
              <summary className="cursor-pointer font-bold text-white">O conteúdo é gratuito?</summary>
              <p className="text-slate-400 mt-2">Sim. Temos materiais gratuitos (artigos, vídeos, planilhas básicas) e, em breve, uma área premium para quem quiser avançar mais rápido.</p>
            </details>
            <details className="bg-white/5 border border-white/10 rounded-xl p-4 mt-3">
              <summary className="cursor-pointer font-bold text-white">É recomendação de investimento?</summary>
              <p className="text-slate-400 mt-2">Não. É educação financeira. Investir envolve riscos. Sempre faça sua própria análise.</p>
            </details>
          </div>
          <div>
            <details className="bg-white/5 border border-white/10 rounded-xl p-4">
              <summary className="cursor-pointer font-bold text-white">Posso cancelar a newsletter?</summary>
              <p className="text-slate-400 mt-2">Sim, basta clicar no link de descadastro no rodapé de qualquer e-mail.</p>
            </details>
            <details className="bg-white/5 border border-white/10 rounded-xl p-4 mt-3">
              <summary className="cursor-pointer font-bold text-white">Como falar com vocês?</summary>
              <p className="text-slate-400 mt-2">Use o WhatsApp flutuante ou envie uma mensagem pela sessão de contato.</p>
            </details>
          </div>
        </div>
      </Section>
      <Contact />
    </>
  )
}
