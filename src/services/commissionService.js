import apiClient from './api'; // ton instance axios déjà configurée

export default {
  // Récupérer toutes les commissions du parrain connecté
  getAll() {
    return apiClient.get('/mes-commissions'); // <-- modifié pour l'API connectée
  },

  // Récupérer le total des commissions du parrain connecté
  getTotal() {
    return apiClient.get('/mes-commissions/total'); // <-- ajouté
  },

  // Récupérer une commission par ID
  getOne(id) {
    return apiClient.get(`/commissions/${id}`);
  },

  // Valider une commission
  valider(id) {
    return apiClient.post(`/commissions/${id}/valider`);
  },

  // Supprimer une commission
  remove(id) {
    return apiClient.delete(`/commissions/${id}`);
  }
};
