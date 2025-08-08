// // src/services/userService.js
// import axios from 'axios'

// // Crée une instance avec baseURL (ajuste selon ton backend)
// const api = axios.create({
//   baseURL: 'http://localhost:8000/api', // <-- adapte : http vs https, nom de domaine, port
//   headers: {
//     'Accept': 'application/json',
//   },
// })

// // Intercepteur pour ajouter le token automatiquement si présent
// api.interceptors.request.use((config) => {
//   const token = localStorage.getItem('token')
//   if (token) {
//     config.headers.Authorization = `Bearer ${token}`
//   }
//   return config
// }, (error) => Promise.reject(error))

// // Connexion
// export async function loginUser(credentials) {
//   const response = await api.post('/login', credentials)
//   const token = response.data.token
//   if (token) {
//     localStorage.setItem('token', token)
//   }
//   return response.data
// }

// // Déconnexion
// export async function logoutUser() {
//   try {
//     await api.post('/logout')
//   } catch (err) {
//     console.warn('Erreur logout', err)
//   }
//   localStorage.removeItem('token')
// }

// // Récupérer le profil
// export async function fetchUserProfile() {
//   const response = await api.get('/profile')
//   return response.data.data
// }





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
