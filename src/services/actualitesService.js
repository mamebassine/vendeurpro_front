// src/services/actualitesService.js

import apiClient from './api'

export default {
  // 🔍 Récupérer toutes les actualités
  getAll() {
    return apiClient.get('/actualites')
  },

  // 🔍 Récupérer une actualité par ID
  getById(id) {
    return apiClient.get(`/actualites/${id}`)
  },

  // ➕ Ajouter une actualité
  create(data) {
    return apiClient.post('/actualites', data)
  },

  // ✏️ Modifier une actualité
  // update(id, data) {
  //   return apiClient.put(`/actualites/${id}`, data)
  // },
  update(id, data) {
  data.append('_method', 'PUT'); // 👈 On simule une requête PUT
  return apiClient.post(`/actualites/${id}`, data); // 👈 On utilise POST
},


  // ❌ Supprimer une actualité
  delete(id) {
    return apiClient.delete(`/actualites/${id}`)
  }
}
