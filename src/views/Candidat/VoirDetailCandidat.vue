<template>
  <div class="detail-container" v-if="candidat">
    <h2>Détail du Candidat</h2>
    <ul>
      <li><strong>ID :</strong> {{ candidat.id }}</li>
      <li><strong>Nom :</strong> {{ candidat.nom }}</li>
      <li><strong>Prénom :</strong> {{ candidat.prenom }}</li>
      <li><strong>Email :</strong> {{ candidat.email }}</li>
      <li><strong>Téléphone :</strong> {{ candidat.telephone }}</li>
      <li><strong>Adresse :</strong> {{ candidat.adresse }}</li>
      <li><strong>Genre :</strong> {{ candidat.genre }}</li>
      <!-- <li><strong>User ID :</strong> {{ candidat.user_id }}</li> -->
    </ul>
    <router-link to="/dashboard/listeCandidat" class="btn-retour">⬅️ Retour à la liste</router-link>
  </div>

  <div v-else>
    <p>Chargement en cours...</p>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { useRoute } from 'vue-router'
import candidatService from '../../services/candidatService'

const route = useRoute()
const candidat = ref(null)

const chargerCandidat = async () => {
  try {
    const res = await candidatService.getOne(route.params.id)
    candidat.value = res.data
  } catch (error) {
    console.error('Erreur lors du chargement du candidat :', error)
  }
}

onMounted(() => {
  chargerCandidat()
})
</script>

<style scoped>
.detail-container {
  max-width: 600px;
  margin: auto;
  background-color: #f9f9f9;
  padding: 1.5rem;
  border-radius: 10px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
}

ul {
  list-style: none;
  padding: 0;
}

li {
  margin-bottom: 0.75rem;
}

.btn-retour {
  display: inline-block;
  margin-top: 1rem;
  background-color: #343f69;
  color: white;
  padding: 0.5rem 1rem;
  border-radius: 6px;
  text-decoration: none;
}
</style>
