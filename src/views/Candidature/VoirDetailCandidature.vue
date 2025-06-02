<template>
  <div>
    <h2>Détail de la candidature</h2>
    <div v-if="candidature">
      <h3>Formation</h3>
      <p><strong>Titre :</strong> {{ candidature.formation.titre }}</p>
      <p><strong>Description :</strong> {{ candidature.formation.description }}</p>
      <p><strong>Date début candidature :</strong> {{ formatDate(candidature.formation.date_debut_candidature) }}</p>
      <p><strong>Date début :</strong> {{ formatDate(candidature.formation.date_debut) }}</p>
      <p><strong>Date fin :</strong> {{ formatDate(candidature.formation.date_fin) }}</p>
      <p><strong>Date limite dépôt :</strong> {{ formatDate(candidature.formation.date_limite_depot) }}</p>
      <p><strong>Heure :</strong> {{ candidature.formation.heure_formate || candidature.formation.heure }}</p>
      <p><strong>Durée (jours) :</strong> {{ candidature.formation.duree }}</p>
      <p><strong>Prix :</strong> {{ candidature.formation.prix }} FCFA</p>
      <p><strong>Lieu :</strong> {{ candidature.formation.lieu }}</p>
      <p><strong>Type :</strong> {{ candidature.formation.type }}</p>

      <h3>Candidat</h3>
      <p><strong>Nom :</strong> {{ candidature.candidat.nom }}</p>
      <p><strong>Prénom :</strong> {{ candidature.candidat.prenom }}</p>
      <p><strong>Email :</strong> {{ candidature.candidat.email }}</p>
      <p><strong>Téléphone :</strong> {{ candidature.candidat.telephone }}</p>
      <p><strong>Adresse :</strong> {{ candidature.candidat.adresse }}</p>
      <p><strong>Genre :</strong> {{ candidature.candidat.genre }}</p>

      <h3>Informations candidature</h3>
      <p><strong>Statut :</strong> {{ candidature.statut }}</p>
      <p><strong>Créée le :</strong> {{ formatDateTime(candidature.created_at) }}</p>
      <p><strong>Dernière mise à jour :</strong> {{ formatDateTime(candidature.updated_at) }}</p>
    </div>
    <div v-else>
      Chargement...
    </div>
  </div>
</template>

<script setup>
import { onMounted, ref } from 'vue'
import { useRoute } from 'vue-router'
import candidatureService from '@/services/candidatureService'

const route = useRoute()
const candidature = ref(null)

// Simple formatteur de date (yyyy-mm-dd)
function formatDate(dateString) {
  if (!dateString) return ''
  return new Date(dateString).toLocaleDateString()
}

// Formatteur date + heure locale
function formatDateTime(dateString) {
  if (!dateString) return ''
  return new Date(dateString).toLocaleString()
}

onMounted(async () => {
  try {
    const id = route.params.id
    const response = await candidatureService.getById(id)
    candidature.value = response.data
  } catch (error) {
    console.error("Erreur lors du chargement :", error)
  }
})
</script>
