import axios from 'axios'

const baseURL = 'http://localhost:5000'

const request = axios.create({
  baseURL: baseURL,
})

request.interceptors.request.use((config) => {
  return config
})

request.interceptors.response.use(
  (response) => {
    return response.data
  },
  (err) => {
    return Promise.reject(err)
  }
)

export default request
