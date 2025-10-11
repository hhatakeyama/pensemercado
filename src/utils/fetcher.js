import api from "./api"

export async function serverApiFetcher(url) {
  return fetch(`${process.env.NEXT_PUBLIC_ROOT_URL}${url}`).then(res => res.json())
}

export async function apiFetcher(url) {
  return await fetch(url).then(res => res.json())
}

export default async function fetcher(url) {
  const { data } = await api.get(url)
  return data
}
