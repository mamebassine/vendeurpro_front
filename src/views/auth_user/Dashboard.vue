<template>
  <div class="dashboard">
    <div v-if="loading" class="loading">
      ⏳ Chargement du profil...
    </div>

    <div v-else>
      <!-- Message de bienvenue -->
      <div class="welcome-card">
        <h1>👋 Bienvenue, {{ selectedUser.name }} {{ selectedUser.prenom }} !</h1>
        <p>Heureux de vous revoir sur votre espace personnel.</p>
        <p>Code parrainage : <strong>{{ selectedUser.code_parrainage }}</strong></p>
      </div>

      <!-- Statistiques principales -->
      <div class="stats-grid">
        <div class="stat-card">
          <h2>{{ stats.filleulsCount }}</h2>
          <p>Filleuls inscrits</p>
        </div>
        <div class="stat-card">
          <h2>{{ stats.candidaturesEnAttente }}</h2>
          <p>Candidatures en attente</p>
        </div>
        <div class="stat-card">
          <h2>{{ stats.commissionsTotales }} FCFA</h2>
          <p>Commissions gagnées</p>
        </div>
      </div>

      <!-- Call-to-action avec lien direct -->
      <div class="cta-card" v-if="selectedUser.code_parrainage">
        <h3>🚀 Invitez de nouveaux filleuls</h3>
        <p>Partagez votre lien de parrainage pour agrandir votre réseau et augmenter vos commissions.</p>

        <!-- Bouton pour copier le lien -->
        <button class="cta-btn" @click="copierLienParrainage">
          Copier mon lien
        </button>

        <!-- Lien cliquable direct vers le formulaire -->
        <p style="margin-top: 10px;">
          Ou 
          <router-link 
            :to="{ path: '/formations', query: { ref: selectedUser.code_parrainage } }"
            class="parrain-link">
            postuler via mon lien
          </router-link>
        </p>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";
import { getParrainDashboard } from "@/services/dashboardparrainService.js";

const loading = ref(true);
const selectedUser = ref({}); // 🔹 Utilisation de selectedUser
const stats = ref({});
const candidatures = ref([]);

onMounted(async () => {
  try {
    const data = await getParrainDashboard();
    selectedUser.value = data.parrain; // 🔹 On remplit selectedUser
    stats.value = data.stats;
    candidatures.value = data.candidatures;
  } catch (error) {
    console.error("Impossible de charger le dashboard", error);
  } finally {
    loading.value = false;
  }
});

// Copier le lien dans le presse-papier
const copierLienParrainage = () => {
  // 🔹 Lien fixe pour localhost avec le code parrainage dynamique
  const url = `http://localhost:5173/formations?code=${selectedUser.value.code_parrainage}`;
  navigator.clipboard.writeText(url);
  alert("Lien de parrainage copié dans le presse-papier ! 🚀");
};

</script>

<style scoped>
.dashboard {
  padding: 30px;
  font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
  color: #333;
}

.welcome-card {
  background: linear-gradient(135deg, #ff7f00, #003366, #fff);

  /* background: linear-gradient(135deg, #003366, #003366); */

  color: white;
  padding: 25px;
  border-radius: 12px;
  text-align: center;
  margin-bottom: 30px;
  box-shadow: 0 6px 15px rgba(0, 0, 0, 0.2);
}

.welcome-card h1 {
  margin-bottom: 10px;
  font-size: 2rem;
  font-weight: 700;
}

.stats-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
  gap: 20px;
  margin-bottom: 30px;
}

.stat-card {
  background: #fff;
  border-radius: 12px;
  padding: 25px;
  text-align: center;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08);
  transition: transform 0.3s ease;
}

.stat-card:hover {
  transform: translateY(-5px);
}

.stat-card h2 {
  font-size: 2rem;
  color: #ff7f00;
  margin-bottom: 8px;
}

.stat-card p {
  font-weight: 600;
  color: #555;
}

.cta-card {
  background: #f9f9f9;
  border: 2px dashed #ff7f00;
  border-radius: 12px;
  padding: 25px;
  text-align: center;
  margin-bottom: 30px;
}

.cta-card h3 {
  margin-bottom: 10px;
  font-size: 1.4rem;
  color: #003366;
}

.cta-card p {
  margin-bottom: 15px;
  color: #555;
}

.cta-btn {
  background-color: #ff7f00;
  color: white;
  border: none;
  padding: 12px 25px;
  border-radius: 8px;
  font-size: 1rem;
  font-weight: bold;
  cursor: pointer;
  transition: background 0.3s ease;
}

.cta-btn:hover {
  background-color: #003366;
}

.loading {
  font-size: 1.2rem;
  text-align: center;
  padding: 50px 0;
}

.parrain-link {
  color: #ff7f00;
  font-weight: 600;
  text-decoration: none;
  transition: color 0.3s ease, transform 0.2s ease;
}
.parrain-link:hover {
  color: #003366;
  transform: scale(1.05);
}
</style>
