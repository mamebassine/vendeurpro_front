
import axios from 'axios'

const api = axios.create({
  baseURL: 'http://localhost:8000/api', // adapte selon ton backend
  headers: {
    'Accept': 'application/json',
  },
})

api.interceptors.request.use((config) => {
  const token = localStorage.getItem('token')
  if (token) {
    config.headers.Authorization = `Bearer ${token}`
  }
  return config
})

export async function loginUser(credentials) {
  const response = await api.post('/login', credentials)
  const token = response.data.token
  if (token) {
    localStorage.setItem('token', token)
  }
  return response.data // contient user et token
}

export async function fetchUserProfile() {
  const response = await api.get('/profile')
  return response.data.data
}

export async function logoutUser() {
  try {
    await api.post('/logout')
  } catch (err) {
    console.warn('Erreur logout', err)
  }
  localStorage.removeItem('token')
}
