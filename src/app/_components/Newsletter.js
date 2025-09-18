import React, { useState } from "react"

import Section from "@/components/layout/Section"

export default function Newsletter() {
  const [status, setStatus] = useState(null)

  const handleSubmit = (e) => {
    e.preventDefault()
    const formData = new FormData(e.target)
    const data = Object.fromEntries(formData.entries())
    const emailRegex = /^[^@\s]+@[^@\s]+\.[^@\s]+$/
    if (!data.email || !emailRegex.test(data.email)) {
      setStatus("error")
      return
    }

    try {
      const existingLeads = JSON.parse(localStorage.getItem('pm_leads') || '[]')
      existingLeads.push({
        nome: data.nome || '',
        email: data.email,
        utm: data.utm || localStorage.getItem('pm_utm') || '',
        ts: Date.now()
      })
      localStorage.setItem('pm_leads', JSON.stringify(existingLeads))
      setStatus("success")
      e.target.reset()
    } catch (err) {
      console.error("Failed to save to local storage:", err)
      setStatus("error")
    }
  }

  return (
    <Section id="assine" title="Assine e receba o e‑book + planilhas" subtitle="Entre para a lista gratuita. Sem spam. Você pode sair quando quiser.">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-[1.2fr_.8fr] gap-5 items-center">
        <div className="p-5 rounded-2xl border border-dashed border-white/20 bg-gradient-to-br from-green-500/10 to-blue-500/10">
          <h3 className="text-3xl font-bold text-white mb-2">📬 Assine e receba o e‑book + planilhas</h3>
          <p className="text-slate-400 mb-4">Entre para a lista gratuita. Sem spam. Você pode sair quando quiser.</p>
          <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2 mt-4" autoComplete="on">
            <input className="px-4 py-3 rounded-xl bg-slate-900 border border-white/10 text-slate-200 focus:outline-none focus:ring-2 focus:ring-blue-500" name="nome" type="text" placeholder="Seu nome" required />
            <input className="px-4 py-3 rounded-xl bg-slate-900 border border-white/10 text-slate-200 focus:outline-none focus:ring-2 focus:ring-blue-500" name="email" type="email" placeholder="Seu melhor e‑mail" required />
            <button className="px-4 py-3 rounded-xl bg-gradient-to-br from-green-500 to-green-600 text-slate-950 font-extrabold transition hover:brightness-105" type="submit">Quero receber</button>
            <input type="hidden" name="utm" defaultValue="" />
          </form>
          {status === "success" && <p className="mt-3 text-emerald-400">✅ Pronto! Confira seu e‑mail (olhe o spam também).</p>}
          {status === "error" && <p className="mt-3 text-red-500">⚠️ Oops, verifique os dados e tente novamente.</p>}
        </div>
        <div className="p-5 rounded-2xl bg-gradient-to-b from-white/5 to-white/2 border border-white/10 shadow-md shadow-slate-950">
          <div className="flex gap-4 items-center mb-3">
            <div className="w-10 h-10 rounded-xl grid place-items-center bg-gradient-to-br from-green-500/20 to-blue-500/20 border border-white/10">🔐</div>
            <h3 className="text-xl font-bold text-white">Proteção de dados</h3>
          </div>
          <p className="text-slate-400 opacity-90 text-sm">Seus dados são usados apenas para enviar nossos conteúdos. Nada de vender lista ou encher sua caixa. Você controla tudo.</p>
          <div className="h-px bg-white/10 my-4" />
          <div className="flex gap-4 items-center mb-3">
            <div className="w-10 h-10 rounded-xl grid place-items-center bg-gradient-to-br from-green-500/20 to-blue-500/20 border border-white/10">🧪</div>
            <h3 className="text-xl font-bold text-white">Transparência</h3>
          </div>
          <p className="text-slate-400 opacity-90 text-sm">Nada de promessas milagrosas. Risco existe, e a ideia é aprender a gerenciar. Educação financeira acima de tudo.</p>
        </div>
      </div>
    </Section>
  )
}