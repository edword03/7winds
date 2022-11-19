import axios from 'axios'

export const api = axios.create({
  baseURL: process.env.REACT_APP_API_URL,
})
api.defaults.headers.common['Content-Type'] = 'application/json';

export default api