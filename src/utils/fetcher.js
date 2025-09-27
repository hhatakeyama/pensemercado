import api from "./api"

export const brapiFetcher = async (url) => {
  await fetch(url, {
    headers: {
      'Authorization': `Bearer ${process.env.NEXT_PUBLIC_BRAPI_API_TOKEN}`
    }
  })
    .then((res) => res.json())
}

export const avFetcher = async (params) => {
  // A SWR key será um objeto de parâmetros, por isso a desestruturação
  const queryParams = new URLSearchParams({
    ...params,
    apikey: process.env.NEXT_PUBLIC_ALPHA_VANTAGE_API_TOKEN, // Adiciona a chave de API como parâmetro de URL
  }).toString()

  const url = `${process.env.NEXT_PUBLIC_ALPHA_VANTAGE_API_URL}?${queryParams}`

  const res = await fetch(url)

  if (!res.ok) {
    const error = new Error('Erro ao buscar dados da Alpha Vantage.')
    error.info = await res.json()
    error.status = res.status
    throw error
  }

  return res.json()
}

export default async function fetcher(url) {
  const { data } = await api.get(url)
  return data
}
