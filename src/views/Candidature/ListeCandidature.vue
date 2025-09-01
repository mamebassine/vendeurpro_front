<template>
  <div class="list">
    <div class="header">
      <h2>Liste des Candidatures</h2>
      <router-link to="/dashboard/ajouterCandidature" class="btn-add">+ Ajouter une candidature</router-link>
    </div>

    <table>
      <thead>
        <tr>
          <th>ID</th>
          <th>Candidat</th>
          <th>Formation</th>
          <th>Statut</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="c in candidatures" :key="c.id">
          <td>{{ c.id }}</td>
          <td>{{ c.candidat?.nom }} {{ c.candidat?.prenom }}</td>
          <td>{{ c.formation?.titre }}</td>
          <td>{{ c.statut }}</td>
          <td>
            <router-link :to="`/dashboard/Voirdetail/candidature/${c.id}`" class="btn-view">
              Voir
            </router-link>
            <router-link :to="`/dashboard/modifierCandidature/${c.id}`" class="btn-edit">
              Modifier
            </router-link>
            <button @click="supprimer(c.id)" class="btn-delete">
              Supprimer
            </button>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import candidatureService from '@/services/candidatureService'

const candidatures = ref([])

const chargerCandidatures = async () => {
  const res = await candidatureService.getAll()
  candidatures.value = res.data.data || res.data // .data.data si paginée
}

const supprimer = async (id) => {
  if (confirm('Confirmer la suppression ?')) {
    await candidatureService.delete(id)
    await chargerCandidatures()
  }
}

onMounted(() => {
  chargerCandidatures()
})
</script>

<style scoped>
.list {
  max-width: 1000px;
  margin: auto;
  padding: 1rem;
}

.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1rem;
}

.btn-add {
  background-color: #343F69;
  color: white;
  padding: 0.5rem 1rem;
  text-decoration: none;
  border-radius: 5px;
}

table {
  width: 100%;
  border-collapse: collapse;
}

th,
td {
  padding: 0.6rem;
  border: 1px solid #ddd;
  text-align: center;
}

th {
  background-color: #343F69;
  color: white;
}

.btn-view,
.btn-edit,
.btn-delete {
  padding: 0.4rem 0.7rem;
  border-radius: 3px;
  color: white;
  text-decoration: none;
  margin-right: 5px;
  font-size: 0.9rem;
}

.btn-view {
  background-color: #3498db;
}

.btn-edit {
  background-color: #f39c12;
}

.btn-delete {
  background-color: #e74c3c;
  border: none;
  cursor: pointer;
}
</style>
