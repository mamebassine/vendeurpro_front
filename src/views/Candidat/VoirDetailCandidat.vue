<template>
  <div class="detail-container" v-if="candidat">
    <h2>Détail du Candidat</h2>

    <!-- Tableau des informations du candidat -->
    <table class="candidat-table">
      <tbody>
        <!-- <tr><th>ID :</th><td>{{ candidat.id }}</td></tr> -->
        <tr><th>Nom :</th><td>{{ candidat.nom }}</td></tr>
        <tr><th>Prénom :</th><td>{{ candidat.prenom }}</td></tr>
        <tr><th>Email :</th><td>{{ candidat.email }}</td></tr>
        <tr><th>Téléphone :</th><td>{{ candidat.telephone }}</td></tr>
        <tr><th>Adresse :</th><td>{{ candidat.adresse }}</td></tr>
        <tr><th>Genre :</th><td>{{ candidat.genre }}</td></tr>
      </tbody>
    </table>

    <!-- Formations -->
    <div class="formations-section" v-if="candidat.formations && candidat.formations.length">
      <h3>Formations Candidatées</h3>
      <table class="formations-table">
        <thead>
          <tr>
            <th>Titre</th>
            <th>Statut</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="formation in candidat.formations" :key="formation.id">
            <td>{{ formation.titre }}</td>
            <td>{{ formation.pivot.statut }}</td>
          </tr>
        </tbody>
      </table>
    </div>

    <div v-else class="no-formation">
      <p>Aucune formation liée.</p>
    </div>

    <!-- Bouton retour -->
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
  max-width: 800px;
  margin: 2rem auto;
  background-color: #fff;
  padding: 2rem;
  border-radius: 12px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
  font-family: Arial, sans-serif;
}

h2, h3 {
  text-align: center;
  color: #343f69;
  margin-bottom: 1rem;
}

.candidat-table,
.formations-table {
  width: 100%;
  border-collapse: collapse;
  margin-bottom: 2rem;
}

.candidat-table th,
.formations-table th {
  background-color: #343f69;
  color: white;
  padding: 10px;
  text-align: left;
  width: 30%;
}

.candidat-table td,
.formations-table td {
  padding: 10px;
  border-bottom: 1px solid #ddd;
}

.formations-section {
  margin-top: 2rem;
}

.no-formation {
  text-align: center;
  color: #777;
  font-style: italic;
}

.btn-retour {
  display: block;
  width: fit-content;
  margin: 2rem auto 0;
  background-color: #343f69;
  color: white;
  padding: 0.7rem 1.6rem;
  border-radius: 8px;
  text-decoration: none;
  font-weight: bold;
  transition: background-color 0.3s ease;
}

.btn-retour:hover {
  background-color: #2c3458;
}
</style>
