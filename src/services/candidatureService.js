import api from './api' // ton axios instance déjà existante

export default {
  // getAll() {
  //   return api.get('/candidatures')
  // },

  // getById(id) {
  //   return api.get(`/candidatures/${id}`)
  // },

  // create(data) {
  //   return api.post('/candidatures', data)
  // },

  // update(id, data) {
  //   return api.put(`/candidatures/${id}`, data)
  // },

  // delete(id) {
  //   return api.delete(`/candidatures/${id}`)
  // }

  getAll() {
    return api.get('/candidatures')
  },

  getById(id) {
    return api.get(`/candidatures/${id}`)
  },

  create(data) {
    return api.post('/candidatures', data)
  },

  update(id, data) {
    return api.put(`/candidatures/${id}`, data)
  },

  delete(id) {
    return api.delete(`/candidatures/${id}`)
  }
}

