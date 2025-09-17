<template>
  <div class="dashboard-page px-4 py-6">
    <!-- Titre -->
    <h1 class="text-3xl font-bold text-gray-800 mb-4 text-center sm:text-left">
      📊 Bienvenue administrateur {{ user.prenom }} {{ user.name }}
    </h1>
    <p class="text-gray-500 mb-6 text-center sm:text-left">
      Voici un aperçu de votre espace d'administration. Utilisez la barre latérale pour naviguer.
    </p>

    <!-- Cartes -->
    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
      <div class="card border-l-4 border-blue-500">
        <h2 class="title text-blue-600">Formations</h2>
        <div class="value text-blue-800">{{ stats.formations }}</div>
      </div>
      <div class="card border-l-4 border-green-500">
        <h2 class="title text-green-600">Candidats</h2>
        <div class="value text-green-800">{{ stats.candidats }}</div>
      </div>
      <div class="card border-l-4 border-orange-500">
        <h2 class="title text-orange-600">Candidatures</h2>
        <div class="value text-orange-800">{{ stats.candidatures }}</div>
      </div>
    </div>

    <!-- Graphique -->
    <div class="mt-8 bg-white rounded-xl shadow-lg p-4 max-w-3xl mx-auto">
      <h2 class="text-xl font-semibold text-gray-700 mb-2 text-center">
        Aperçu visuel
      </h2>
      <div class="w-full h-64">
        <Bar :data="chartData" :options="chartOptions" />
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, computed } from 'vue'
import { fetchUserProfile } from '@/services/userService'
import { useRouter } from 'vue-router'
import api from '@/services/api'

// Import Chart.js & vue-chartjs
import { Chart as ChartJS, Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale } from 'chart.js'
import { Bar } from 'vue-chartjs'

// Enregistrement des composants Chart.js
ChartJS.register(Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale)

const user = ref({})
const stats = ref({
  formations: 0,
  candidats: 0,
  candidatures: 0
})
const router = useRouter()

const loadStats = async () => {
  try {
    const res = await api.get('/dashboard/stats')
    stats.value = res.data
  } catch (err) {
    console.error('Erreur lors du chargement des statistiques', err)
  }
}

// Préparer les données du graphique
const chartData = computed(() => ({
  labels: ['Formations', 'Candidats', 'Candidatures'],
  datasets: [
    {
      label: 'Statistiques',
      data: [stats.value.formations, stats.value.candidats, stats.value.candidatures],
      backgroundColor: ['#3B82F6', '#10B981', '#F59E0B']
    }
  ]
}))

const chartOptions = {
  responsive: true,
  maintainAspectRatio: false,
  plugins: {
    legend: {
      position: 'bottom'
    }
  },
  scales: {
    y: {
      beginAtZero: true
    }
  }
}

onMounted(async () => {
  try {
    const profil = await fetchUserProfile()
    if (profil.role !== 'admin') {
      router.push('/auth_user/userdashboard')
      return
    }
    user.value = profil
    await loadStats()
  } catch (err) {
    console.error('Erreur profil admin', err)
    router.push('/userlogin')
  }
})
</script>

<style scoped>
.dashboard-page {
  background-color: #f3f4f6;
  min-height: 100vh;
  overflow-x: hidden;
}

/* Cartes */
.card {
  background-color: white;
  padding: 12px;
  border-radius: 0.5rem;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.08);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  transition: transform 0.2s, box-shadow 0.2s;
}

.card:hover {
  transform: translateY(-2px);
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.12);
}

/* Textes */
.title {
  font-size: 0.9rem;
  font-weight: 600;
  margin-bottom: 4px;
  text-align: center;
}

.value {
  font-size: 1.2rem;
  font-weight: 700;
  text-align: center;
}
</style>
