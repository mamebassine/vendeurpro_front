<template>
  <div class="dashboard-page p-8">
    <h1 class="text-4xl font-bold text-gray-800 mb-6">📊 Bienvenue sur le Dashboard</h1>
    <p class="text-gray-500 mb-8">
      Voici un aperçu de votre espace d'administration. Utilisez la barre latérale pour naviguer.
    </p>

    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
      <div class="card border-l-8 border-blue-500">
        <h2 class="title text-blue-600">Formations</h2>
        <div class="value text-blue-800">{{ stats.formations }}</div>
      </div>
      <div class="card border-l-8 border-green-500">
        <h2 class="title text-green-600">Candidats</h2>
        <div class="value text-green-800">{{ stats.candidats }}</div>
      </div>
      <div class="card border-l-8 border-orange-500">
        <h2 class="title text-orange-600">Candidatures</h2>
        <div class="value text-orange-800">{{ stats.candidatures }}</div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import api from '@/services/api'

const stats = ref({
  formations: 0,
  candidats: 0,
  candidatures: 0
})

const loadStats = async () => {
  try {
    const res = await api.get('/dashboard/stats')
    stats.value = res.data
  } catch (err) {
    console.error('Erreur lors du chargement des statistiques', err)
  }
}

onMounted(loadStats)
</script>

<style scoped>
.dashboard-page {
  background-color: #f3f4f6;
  min-height: 100vh;
}

.card {
  background-color: white;
  padding: 32px;
  border-radius: 1rem;
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.08);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  transition: transform 0.2s, box-shadow 0.2s;
}

.card:hover {
  transform: scale(1.03);
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.1);
}

.title {
  font-size: 1.5rem;
  font-weight: 600;
  margin-bottom: 10px;
}

.value {
  font-size: 3rem;
  font-weight: 700;
  text-align: center;
}
</style>
