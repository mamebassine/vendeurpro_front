<template>
  <div class="page-container">
    <section class="card">
      <h1 class="card-title">Détails de la Formation</h1>

      <div v-if="formation">
        <p><strong>Titre :</strong> {{ formation.titre }}</p>
        <p><strong>Description :</strong> {{ formation.description }}</p>

        <!-- 🎯 POUR QUI ? -->
        <h3 class="section-title">🎯 Pour qui ?</h3>
        <p>{{ formation.public_vise }}</p>

        
<!-- 📚 OBJECTIFS -->
<h3 class="section-title">📚 Objectifs :</h3>
<p v-html="formatObjectifs(formation.objectifs)"></p>

 <!-- 📆 DURÉE, CERTIFICATION & FORMAT -->
        <h3 class="section-title">📆 Durée, Certification & Format</h3>
        <p><strong>Certification :</strong> {{ formation.certifiante ? 'Oui' : 'Non' }}</p>
        <p><strong>Format :</strong> {{ formation.format }}</p>
        <p><strong>Durée :</strong> {{ formation.duree }} jours</p>

        <p><strong>Début des candidatures :</strong> {{ formatDate(formation.date_debut_candidature) }}</p>
        <p><strong>Date limite de dépôt :</strong> {{ formatDate(formation.date_limite_depot) }}</p>
        <p><strong>Début de la formation :</strong> {{ formatDate(formation.date_debut) }}</p>
        <p><strong>Fin de la formation :</strong> {{ formatDate(formation.date_fin) }}</p>
        <p><strong>Heure :</strong> {{ formatHeure(formation.heure) }}</p>
        <p><strong>Prix :</strong> {{ Number(formation.prix).toLocaleString('fr-FR') }} FCFA</p>
        <p><strong>Type :</strong> {{ formation.type }}</p>
        <p><strong>Lieu :</strong> {{ formation.lieu }}</p>
        <p><strong>Catégorie :</strong> {{ formation.categorie?.nom || 'N/A' }}</p>

        <div class="button-container">
          <button class="cta-button" @click="postuler(formation.id)">Postuler</button>
        </div>
      </div>

      

      
    </section>
  </div>
</template>


<script setup>
import { ref, onMounted } from 'vue';
import { useRoute, useRouter } from 'vue-router';
import api from '@/services/api';

const route = useRoute();
const router = useRouter();
const formation = ref(null);

const fetchFormation = async () => {
  try {
    const id = route.params.id;
    const res = await api.get(`/formations/${id}`);
    formation.value = res.data;
  } catch (error) {
    console.error("Erreur lors du chargement des détails :", error);
  }
};

const formatDate = (dateStr) => {
  if (!dateStr) return '';
  return new Date(dateStr).toLocaleDateString('fr-FR');
};

const formatHeure = (heure) => {
  if (!heure) return '';
  return new Date(`1970-01-01T${heure}`).toLocaleTimeString('fr-FR', {
    hour: '2-digit',
    minute: '2-digit'
  });
};

const postuler = (idFormation) => {
  router.push({ name: 'AjoutCandidat', query: { formation_id: idFormation } });
};

onMounted(() => {
  fetchFormation();
});


const formatObjectifs = (text) => {
  if (!text) return '';

  return (
    text
      .replace(/([•\-●▪︎]|[.])\s*/g, '||') // transforme les puces/points en séparateurs
      .split('||') // on découpe selon ces séparateurs
      .map(line => line.trim()) // on nettoie les espaces
      .filter(line => line.length > 2) // on ignore les lignes vides ou trop courtes
      .filter((item, index, arr) => arr.indexOf(item) === index) // supprime les doublons
      .map(line => `• ${line}`) // ajoute proprement la puce
      .join('<br>') // joint avec <br>
  );
};


</script>

<style scoped>
.page-container {
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #f3f4f6;
  padding: 20px;
  margin-top: 9%;
}

.card {
  background-color: white;
  padding: 40px;
  border-radius: 20px;
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.08);
  max-width: 800px;
  width: 100%;
}

.card-title {
  font-size: 2.5rem;
  font-weight: 800;
  color: #1f2937;
  margin-bottom: 24px;
}

p {
  font-size: 1.05rem;
  color: #374151;
  margin-bottom: 10px;
}

.button-container {
  text-align: center;
  margin-top: 30px;
  display: flex;
  justify-content: center;
  gap: 15px;
}

.cta-button {
  background-color: #ff7f00;
  color: white;
  padding: 14px 32px;
  border-radius: 8px;
  font-size: 1.125rem;
  font-weight: 600;
  border: none;
  cursor: pointer;
  transition: background-color 0.3s ease;
  box-shadow: 0 4px 12px rgba(37, 99, 235, 0.4);
}

.cta-button:hover {
  background-color: #003366;
}




.section-title {
  margin-top: 24px;
  font-size: 1.2rem;
  font-weight: 700;
  color: #111827;
}
</style>
