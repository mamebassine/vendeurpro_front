import apiClient from './api'

export default {
  getAll() {
    return apiClient.get('/candidats')
  },
  getOne(id) {
    return apiClient.get(`/candidats/${id}`)
  },
  create(candidat) {
    return apiClient.post('/candidats', candidat)
  },
  createPublic(data) {
    return apiClient.post('/public-candidature', data) // << fonctionne car baseURL est déjà "http://localhost:8000/api"
  },
  
  update(id, candidat) {
    return apiClient.put(`/candidats/${id}`, candidat)
  },
  remove(id) {
    return apiClient.delete(`/candidats/${id}`)
  }

//   createPublic(data) {
//   return axios.post('/api/public-candidature', data)
// }

}
