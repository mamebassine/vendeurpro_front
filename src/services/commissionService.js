import apiClient from './api' // ton instance axios déjà configurée

export default {
  // Récupérer toutes les commissions
  getAll() {
    return apiClient.get('/commissions')
  },

  // Récupérer une commission par ID
  getOne(id) {
    return apiClient.get(`/commissions/${id}`)
  },

  // Valider une commission
  valider(id) {
    return apiClient.post(`/commissions/${id}/valider`)
  },

  // Supprimer une commission
  remove(id) {
    return apiClient.delete(`/commissions/${id}`)
  }
}
