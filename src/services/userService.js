// userservice.js
import apiClient from './api'  // ton api.js centralisé avec baseURL et interceptors

/**
 * Connexion d'un utilisateur
 * @param {Object} credentials - { email, password }
 */
export async function loginUser(credentials) {
  const response = await apiClient.post('/login', credentials)
  const token = response.data.token
  if (token) {
    localStorage.setItem('token', token)
  }
  return response.data // contient user et token
}

/**
 * Récupérer le profil de l'utilisateur connecté
 */
export async function fetchUserProfile() {
  const response = await apiClient.get('/profile')
  return response.data.data
}

/**
 * Déconnexion
 */
export async function logoutUser() {
  try {
    await apiClient.post('/logout')
  } catch (err) {
    console.warn('Erreur logout', err)
  }
  localStorage.removeItem('token')
}

/**
 * 🔓 Supprimer un utilisateur/parrain (admin)
 * @param {number} userId
 */
export async function deleteUser(userId) {
  if (!confirm('Voulez-vous vraiment supprimer cet utilisateur ?')) return;

  try {
    const response = await apiClient.delete(`/users/${userId}`)
    alert('Utilisateur supprimé avec succès')
    return response.data
  } catch (error) {
    console.error('Erreur lors de la suppression :', error.response || error)
    alert(error.response?.data?.message || 'Erreur lors de la suppression')
    throw error
  }
}
