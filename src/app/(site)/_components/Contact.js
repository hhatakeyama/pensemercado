import React, { useState } from "react"

import Section from "@/components/layout/Section"
import Link from "next/link"
import api from "@/utils/api"

export default function Contact() {
  const [status, setStatus] = useState(null)

  const handleSubmit = (e) => {
    e.preventDefault()
    const formData = new FormData(e.target)
    const data = Object.fromEntries(formData.entries())
    if (!data.name || !data.email || !data.message) {
      return false
    }

    api
      .post('/api/contact', data)
      .then(response => {
        console.log(response)
        e.target.reset()
        setStatus("success")
      })
      .catch(err => {
        console.log(err)
        setStatus("error")
      })
  }

  return (
    <Section id="contato" title="Contato" subtitle="Fale com a gente para parcerias, ideias de conteúdo e dúvidas.">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        <form onSubmit={handleSubmit} className="p-5 rounded-2xl bg-gradient-to-b from-white/5 to-white/2 border border-white/10 shadow-md shadow-slate-950">
          <div className="flex gap-4 items-center mb-3">
            <div className="w-10 h-10 rounded-xl grid place-items-center bg-gradient-to-br from-green-500/20 to-blue-500/20 border border-white/10">✉️</div>
            <h3 className="text-xl font-bold text-white">Envie uma mensagem</h3>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-slate-400 text-sm mb-1" htmlFor="ctNome">Nome</label>
              <input id="ctNome" name="name" className="w-full px-4 py-3 rounded-xl bg-slate-900 border border-white/10 text-slate-200 focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="Seu nome" required />
            </div>
            <div>
              <label className="block text-slate-400 text-sm mb-1" htmlFor="ctEmail">E‑mail</label>
              <input id="ctEmail" name="email" type="email" className="w-full px-4 py-3 rounded-xl bg-slate-900 border border-white/10 text-slate-200 focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="voce@email.com" required />
            </div>
          </div>
          <label className="block text-slate-400 text-sm mt-4 mb-1" htmlFor="ctMsg">Mensagem</label>
          <textarea id="ctMsg" name="message" className="w-full px-4 py-3 rounded-xl bg-slate-900 border border-white/10 text-slate-200 focus:outline-none focus:ring-2 focus:ring-blue-500" rows="3" placeholder="Como podemos ajudar?" required></textarea>
          <button
            type="submit"
            className="w-full px-4 py-3 rounded-xl bg-gradient-to-br from-green-500 to-green-600 text-white font-extrabold mt-4 transition hover:brightness-105">
            Enviar
          </button>
          {status === "success" && <p className="mt-3 text-emerald-400">✅ Mensagem registrada! Responderemos em breve.</p>}
        </form>
        <div className="p-5 rounded-2xl bg-gradient-to-b from-white/5 to-white/2 border border-white/10 shadow-md shadow-slate-950">
          <div className="flex gap-4 items-center mb-3">
            <div className="w-10 h-10 rounded-xl grid place-items-center bg-gradient-to-br from-green-500/20 to-blue-500/20 border border-white/10 mb-3">📍</div>
            <h3 className="text-xl font-bold text-white mb-2">Onde estamos</h3>
          </div>
          <p className="text-slate-400 text-sm">São José do Rio Preto &bull; SP &bull; Brasil</p><br />
          <div className="h-px bg-white/10 my-4" />
          <div className="flex gap-4 items-center mb-3">
            <div className="w-10 h-10 rounded-xl grid place-items-center bg-gradient-to-br from-green-500/20 to-blue-500/20 border border-white/10 mb-3">🔗</div>
            <h3 className="text-xl font-bold text-white mb-2">Links</h3>
          </div>
          <div className="flex flex-wrap gap-2">
            <a className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-slate-900 border border-white/10 text-slate-200 transition hover:bg-slate-800" href="https://www.instagram.com/pensemercado" target="_blank" rel="noopener noreferrer">Instagram</a>
            <a className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-slate-900 border border-white/10 text-slate-200 transition hover:bg-slate-800" href="https://www.youtube.com/@pensemercado" target="_blank" rel="noopener noreferrer">YouTube</a>
            <Link className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-slate-900 border border-white/10 text-slate-200 transition hover:bg-slate-800" href="/" rel="noopener noreferrer">Site</Link>
          </div>
        </div>
      </div>
    </Section>
  )
}