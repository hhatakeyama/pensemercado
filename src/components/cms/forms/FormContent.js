import React, { useState } from "react"

import api from "@/utils/api"

import Stack from "@/components/layout/Stack"
import { slugify } from "@/utils/text"
import Image from "next/image"

export default function FormContent({ mutate, values }) {
  const [status, setStatus] = useState(null)
  const [uploadImage, setUploadImage] = useState(null)
  const [previewUrl, setPreviewUrl] = useState('')
  const [formValues, setFormValues] = useState({
    title: values?.title || '',
    slug: values?.slug || '',
    description: values?.description || '',
    content: values?.content || '',
  })

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!formValues.title || !formValues.slug || !formValues.content) {
      return false
    }

    const formData = new FormData()
    formData.append('title', formValues.title)
    formData.append('slug', formValues.slug)
    formData.append('description', formValues.description)
    formData.append('content', formValues.content)
    if (uploadImage) {
      formData.append('file', uploadImage)
      formData.append('fileName', uploadImage.name)
      if (uploadImage?.size >= 5242880) {
        return false
      }
    }
    api
      .post(
        `/api/cms/contents${values?.id ? `/${values.id}` : ''}`,
        formData,
        { headers: { 'Content-Type': 'multipart/form-data' } }
      )
      .then(() => {
        e.target.reset()
        mutate?.()
        setStatus("success")
      })
      .catch(err => {
        console.log(err)
        setStatus("error")
      })
  }

  const handleFileChange = (event) => {
    const file = event.target.files[0]

    if (file) {
      // Cria um leitor de arquivos
      const reader = new FileReader()

      // Configura o que fazer quando a leitura terminar
      reader.onload = (e) => {
        // 3. Atualiza o estado com a URL de dados (e.g., "data:image/jpegbase64,...")
        setPreviewUrl(e.target.result)
      }

      // Inicia a leitura do arquivo
      reader.readAsDataURL(file)
    } else {
      // Limpa a visualização se nenhum arquivo for selecionado
      setPreviewUrl('')
    }
    setUploadImage(file)
  }
  
  const backgroundStyle = {
    // Se previewUrl tiver um valor, use-o; caso contrário, será uma string vazia
    backgroundImage: previewUrl ? `url('${previewUrl}')` : 'none',
  };

  return (
    <form onSubmit={handleSubmit} className="p-5 rounded-2xl bg-gradient-to-b from-white/5 to-white/2 border border-white/10 shadow-md shadow-slate-950">
      <Stack>
        <div>
          <label className="block text-slate-400 text-sm mb-1" htmlFor="ctTitle">Imagem (120x120px)</label>
          <input
            type="file"
            accept="image/png, image/jpeg"
            className="block px-3 py-2 rounded-lg text-slate-300 bg-slate-800 hover:bg-slate-600 mb-4"
            onChange={handleFileChange}
          />
          {!!previewUrl && (
            <div className={`w-[120px] h-[120px] bg-cover bg-center`} style={backgroundStyle}></div>
          )}
          {!previewUrl && !!values?.image && (
            <Image
              alt={values.image}
              src={`${process.env.NEXT_PUBLIC_API_DOMAIN}/storage/${values.id}/120x120-${values.image}`}
              width={120}
              height={120}
            />
          )}
        </div>
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
          {values ? "Editar" : "Cadastrar"}
        </button>
        {status === "success" && <p className="mt-3 text-emerald-400">✅ Conteúdo {values ? "editado" : "cadastrado"} com sucesso!</p>}
        {status === "error" && <p className="mt-3 text-red-500">⚠️ Oops, verifique os dados e tente novamente.</p>}
      </Stack>
    </form>
  )
}