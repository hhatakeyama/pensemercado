import fetcher from '@/utils/fetcher'
import useSWR from 'swr'

function useFetch(...args) {
  const [params, options] = args
  const [url, query = {}] = params

  const queryObject = new URLSearchParams(query)
  const newQuery = queryObject.toString()
  const newUrl = `/api${newQuery ? `${url}?${newQuery}` : url}`

  const { data, error, isValidating, mutate } = useSWR(url ? newUrl : null, { ...options, fetcher: fetcher })

  return { data, error, isValidating, mutate }
}

export default useFetch
