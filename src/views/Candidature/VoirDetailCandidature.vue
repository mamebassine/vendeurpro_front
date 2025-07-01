<template>
  <div class="container-candidature">
    <h2 class="title">Détail de la candidature</h2>

    <div v-if="candidature">
      <!-- Formation -->
      <section class="section">
        <h3 class="section-title">🎓 Formation</h3>
        <ul class="info-list">
          <li><strong>Titre :</strong> {{ candidature.formation.titre }}</li>
          <li><strong>Description :</strong> {{ candidature.formation.description }}</li>
          <li><strong>Date début candidature :</strong> {{ formatDate(candidature.formation.date_debut_candidature) }}</li>
          <li><strong>Date début :</strong> {{ formatDate(candidature.formation.date_debut) }}</li>
          <li><strong>Date fin :</strong> {{ formatDate(candidature.formation.date_fin) }}</li>
          <li><strong>Date limite dépôt :</strong> {{ formatDate(candidature.formation.date_limite_depot) }}</li>
          <li><strong>Heure :</strong> {{ candidature.formation.heure_formate || candidature.formation.heure }}</li>
          <li><strong>Durée (jours) :</strong> {{ candidature.formation.duree }}</li>
          <li><strong>Prix :</strong> {{ candidature.formation.prix }} FCFA</li>
          <li><strong>Lieu :</strong> {{ candidature.formation.lieu }}</li>
          <li><strong>Type :</strong> {{ candidature.formation.type }}</li>
        </ul>
      </section>

      <!-- Candidat -->
      <section class="section">
        <h3 class="section-title">👤 Candidat</h3>
        <ul class="info-list">
          <li><strong>Nom :</strong> {{ candidature.candidat.nom }}</li>
          <li><strong>Prénom :</strong> {{ candidature.candidat.prenom }}</li>
          <li><strong>Email :</strong> {{ candidature.candidat.email }}</li>
          <li><strong>Téléphone :</strong> {{ candidature.candidat.telephone }}</li>
          <li><strong>Adresse :</strong> {{ candidature.candidat.adresse }}</li>
          <li><strong>Genre :</strong> {{ candidature.candidat.genre }}</li>
        </ul>
      </section>

      <!-- Infos Candidature -->
      <section class="section">
        <h3 class="section-title">📋 Informations candidature</h3>
        <ul class="info-list">
          <li><strong>Statut :</strong> {{ candidature.statut }}</li>
          <li><strong>Créée le :</strong> {{ formatDateTime(candidature.created_at) }}</li>
          <li><strong>Dernière mise à jour :</strong> {{ formatDateTime(candidature.updated_at) }}</li>
        </ul>
      </section>
    </div>

    <div v-else class="loading">
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

<style scoped>
.container-candidature {
  max-width: 900px;
  margin: 40px auto;
  padding: 30px;
  background-color: #ffffff;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08);
  border-radius: 12px;
  font-family: 'Segoe UI', sans-serif;
  color: #333;
}

.title {
  text-align: center;
  font-size: 28px;
  color: #2c3e50;
  margin-bottom: 30px;
  font-weight: bold;
}

.section {
  margin-bottom: 30px;
}

.section-title {
  font-size: 20px;
  color: #1a237e;
  margin-bottom: 15px;
  border-bottom: 2px solid #ccc;
  padding-bottom: 5px;
}

.info-list {
  list-style: none;
  padding-left: 0;
}

.info-list li {
  margin-bottom: 8px;
  line-height: 1.5;
}

.loading {
  text-align: center;
  font-style: italic;
  color: #777;
}


</style>
