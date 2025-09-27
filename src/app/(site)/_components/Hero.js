import React, { useEffect, useState } from "react"

export default function Hero() {
  const [utm, setUtm] = useState("")

  useEffect(() => {
    const params = new URLSearchParams(window.location.search)
    const utmKeys = ['utm_source', 'utm_medium', 'utm_campaign', 'utm_content', 'utm_term']
    const utmObject = {}
    utmKeys.forEach(k => {
      if (params.get(k)) {
        utmObject[k] = params.get(k)
      }
    })
    const utmString = Object.keys(utmObject).length ? JSON.stringify(utmObject) : ''
    setUtm(utmString)
    try {
      localStorage.setItem('pm_utm', utmString)
    } catch (e) { }
  }, [])

  return (
    <main id="inicio" className="py-16 md:py-24">
      <div className="container mx-auto px-5">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-[1.2fr_.8fr] gap-8 md:gap-14 items-center">
          <div>
            <span className="inline-block text-xs uppercase tracking-widest text-indigo-200 bg-blue-500/10 px-3 py-2 border border-blue-500/35 rounded-full">
              FINANÇAS &bull; INVESTIMENTOS &bull; EMPREENDEDORISMO
            </span>
            <h2 className="mt-4 mb-4 text-3xl md:text-4xl leading-tight font-bold text-slate-50">
              Finanças, investimentos e negócios sem enrolação. Do básico ao avançado, com exemplos do mundo real.
            </h2>
            <p className="mb-6 text-slate-300">
              Conteúdos gratuitos e premium para quem quer organizar a vida financeira, aprender a investir e montar fontes de renda. Linguagem direta, termos técnicos explicados e muito pé no chão.
            </p>
            <div className="flex flex-wrap gap-3">
              <a className="inline-flex items-center gap-2 px-4 py-3 rounded-xl font-bold bg-gradient-to-br from-blue-500 to-blue-400 text-white transition hover:brightness-105" href="#assine">📥 Baixar E-book grátis</a>
              <a className="inline-flex items-center gap-2 px-4 py-3 rounded-xl border border-white/10 bg-slate-900 text-slate-200 transition hover:bg-slate-800" href="#conteudos">Ver conteúdos</a>
              <a className="inline-flex items-center gap-2 px-4 py-3 rounded-xl border border-white/10 bg-slate-900 text-slate-200 transition hover:bg-slate-800" href="https://wa.me/5511973747005?text=Quero%20entrar%20no%20grupo%20Pense%20Mercado" target="_blank" rel="noopener noreferrer">Entrar no WhatsApp</a>
            </div>
            <div className="flex flex-wrap gap-2 mt-5 text-sm text-slate-300">
              <span className="px-3 py-1 border border-white/10 rounded-full bg-white/5">Artigos &bull; Vídeos &bull; Planilhas</span>
              <span className="px-3 py-1 border border-white/10 rounded-full bg-white/5">Glossário simples</span>
              <span className="px-3 py-1 border border-white/10 rounded-full bg-white/5">Sem promessas milagrosas</span>
            </div>
          </div>
          <aside className="p-4 rounded-3xl bg-gradient-to-b from-slate-800 to-slate-900 border border-white/10 shadow-lg shadow-slate-950 relative overflow-hidden" aria-label="Destaques do conteúdo">
            <div className="absolute inset-[-1px] rounded-3xl bg-[radial-gradient(600px_200px_at_-20%_-40%,rgba(34,197,94,.18),transparent_70%),radial-gradient(600px_200px_at_120%_-60%,rgba(59,130,246,.18),transparent_70%)] -z-10" />
            <div className="rounded-xl overflow-hidden border border-white/10">
              <header className="bg-slate-900/80 border-b border-white/10 p-4">
                <strong className="block text-slate-200 font-semibold text-lg">O que você vai encontrar</strong>
              </header>
              <div className="p-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-1 lg:grid-cols-2 gap-4">
                <div className="p-4 rounded-xl bg-slate-800 border border-white/10 shadow-lg shadow-slate-950">
                  <div className="flex gap-4 items-center mb-3">
                    <div className="w-10 h-10 rounded-xl grid place-items-center bg-gradient-to-br from-green-500/20 to-blue-500/20 border border-white/10">💡</div>
                    <h3 className="font-semibold text-lg text-white">Passo a passo</h3>
                  </div>
                  <p className="text-slate-400 text-sm">Guia para sair das dívidas, montar reserva e começar a investir.</p>
                </div>
                <div className="p-4 rounded-xl bg-slate-800 border border-white/10 shadow-lg shadow-slate-950">
                  <div className="flex gap-4 items-center mb-3">
                    <div className="w-10 h-10 rounded-xl grid place-items-center bg-gradient-to-br from-green-500/20 to-blue-500/20 border border-white/10">📈</div>
                    <h3 className="font-semibold text-lg text-white">Investimentos</h3>
                  </div>
                  <p className="text-slate-400 text-sm">Entenda CDI, Selic, ações, FIIs e ETFs — com comparativos objetivos.</p>
                </div>
                <div className="p-4 rounded-xl bg-slate-800 border border-white/10 shadow-lg shadow-slate-950">
                  <div className="flex gap-4 items-center mb-3">
                    <div className="w-10 h-10 rounded-xl grid place-items-center bg-gradient-to-br from-green-500/20 to-blue-500/20 border border-white/10">🧰</div>
                    <h3 className="font-semibold text-lg text-white">Ferramentas</h3>
                  </div>
                  <p className="text-slate-400 text-sm">Planilhas e checklists para aplicar na prática, sem complicação.</p>
                </div>
                <div className="p-4 rounded-xl bg-slate-800 border border-white/10 shadow-lg shadow-slate-950">
                  <div className="flex gap-4 items-center mb-3">
                    <div className="w-10 h-10 rounded-xl grid place-items-center bg-gradient-to-br from-green-500/20 to-blue-500/20 border border-white/10">🎯</div>
                    <h3 className="font-semibold text-lg text-white">Estratégia</h3>
                  </div>
                  <p className="text-slate-400 text-sm">Como definir metas e criar uma carteira alinhada ao seu perfil.</p>
                </div>
              </div>
            </div>
          </aside>
        </div>
      </div>
    </main>
  )
}