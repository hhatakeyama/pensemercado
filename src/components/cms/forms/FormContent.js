import React, { useState } from "react"

import api from "@/utils/api"

import Stack from "@/components/layout/Stack"
import { slugify } from "@/utils/text"

export default function FormContent({ values }) {
  const [status, setStatus] = useState(null)
  const [formValues, setFormValues] = useState({
    title: values?.title || '',
    slug: values?.slug || '',
    author: values?.author || '',
    description: values?.description || '',
    content: values?.content || '',
    image: values?.image || '',
  })

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!formValues.name || !formValues.email || !formValues.message) {
      return false
    }

    api
      .post('/api/cms/content', data)
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
    <form onSubmit={handleSubmit} className="p-5 rounded-2xl bg-gradient-to-b from-white/5 to-white/2 border border-white/10 shadow-md shadow-slate-950">
      <Stack>
        <div>
          <label className="block text-slate-400 text-sm mb-1" htmlFor="ctTitle">Título *</label>
          <input
            id="ctTitle"
            name="title"
            placeholder="Título"
            className="w-full px-4 py-3 rounded-xl bg-slate-900 border border-white/10 text-slate-200 focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
            value={formValues.title}
            onChange={e => setFormValues(prevState => ({ ...prevState, title: e.target.value, slug: slugify(e.target.value) }))}
          />
        </div>
        <div>
          <label className="block text-slate-400 text-sm mb-1" htmlFor="ctSlug">Slug *</label>
          <input
            id="ctSlug"
            name="slug"
            type="text"
            className="w-full px-4 py-3 rounded-xl bg-slate-900 border border-white/10 text-slate-200 focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Slug"
            required
            value={formValues.slug}
            onChange={e => setFormValues(prevState => ({ ...prevState, slug: e.target.value }))}
          />
          <p className="text-sm italic">A URL vai ficar assim: https://pensemercado.com.br/conteudo/{formValues.slug}</p>
        </div>
        <div>
          <label className="block text-slate-400 text-sm mb-1" htmlFor="ctDescription">Descrição</label>
          <textarea
            id="ctDescription"
            name="message"
            className="w-full px-4 py-3 rounded-xl bg-slate-900 border border-white/10 text-slate-200 focus:outline-none focus:ring-2 focus:ring-blue-500"
            rows="2"
            placeholder="Descrição"
            value={formValues.description}
            onChange={e => setFormValues(prevState => ({ ...prevState, description: e.target.value }))}>
          </textarea>
        </div>
        <div>
          <label className="block text-slate-400 text-sm mb-1" htmlFor="ctContent">Conteúdo *</label>
          <textarea
            id="ctContent"
            name="message"
            className="w-full px-4 py-3 rounded-xl bg-slate-900 border border-white/10 text-slate-200 focus:outline-none focus:ring-2 focus:ring-blue-500"
            rows="10"
            placeholder="Conteúdo"
            required
            value={formValues.content}
            onChange={e => setFormValues(prevState => ({ ...prevState, content: e.target.value }))}>
          </textarea>
        </div>
        <button
          type="submit"
          className="w-full px-4 py-3 rounded-xl bg-gradient-to-br from-green-500 to-green-600 text-white font-extrabold mt-4 transition hover:brightness-105">
          Cadastrar
        </button>
        {status === "success" && <p className="mt-3 text-emerald-400">✅ Conteúdo cadastrado com sucesso!</p>}
        {status === "error" && <p className="mt-3 text-red-500">⚠️ Oops, verifique os dados e tente novamente.</p>}
      </Stack>
    </form>
  )
}