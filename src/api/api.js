import axios from 'axios'
// proxy api request
const Axios = axios.create({
  baseURL: '/api',
  headers: { 'Content-Type': 'application/json' },
  withCredentials: true,
})

export default Axios
