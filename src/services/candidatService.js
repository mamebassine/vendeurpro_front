
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
    return apiClient.post('/public-candidature', data)
  },
  update(id, candidat) {
    return apiClient.put(`/candidats/${id}`, candidat)
  },
  remove(id) {
    return apiClient.delete(`/candidats/${id}`)
  },
  getCandidatsParraines() {
    return apiClient.get('/candidats-parraines')
  }
}
