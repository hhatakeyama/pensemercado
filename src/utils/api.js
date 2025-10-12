import axios from 'axios'

const api = axios.create({
  baseURL: `${process.env.NEXT_PUBLIC_API_DOMAIN}`,
  withCredentials: true,
})

// api.interceptors.request.use(
//   config => {
//     const apiToken = process.env.BRAPI_API_TOKEN
//     console.log("aq", apiToken)
//     console.log(config)
//     if (
//       apiToken &&
//       (!config.headers?.Authorization || !config.headers?.authorization) &&
//       config.headers
//     ) {
//     console.log("a222q", apiToken)
//       config.headers.Authorization = `Bearer ${apiToken}`
//     }

//     return config
//   },
//   error => Promise.reject(error)
// )

// api.interceptors.response.use(
//   function (response) {
//     return response
//   },
//   function (error) {
//     return Promise.reject(error)
//   }
// )

export default api
