<template>
  <div class="page-container">
    <section class="card">
      <h1 class="card-title">📘 Détails de la Formation</h1>

      <div v-if="formation">
        <div class="info-block">
          <p><strong>Titre :</strong> {{ formation.titre }}</p>
          <p><strong>Description :</strong> {{ formation.description }}</p>
        </div>

        <div class="info-block">
          <h3 class="section-title">🎯 Pour qui ?</h3>
          <p>{{ formation.public_vise }}</p>
        </div>

        <div class="info-block">
          <h3 class="section-title">📚 Objectifs</h3>
          <p v-html="formatObjectifs(formation.objectifs)"></p>
        </div>

        <div class="info-block">
          <h3 class="section-title">📆 Durée, Certification & Format</h3>
          <p><strong>Certification :</strong> {{ formation.certifiante ? 'Oui' : 'Non' }}</p>
          <p><strong>Format :</strong> {{ formation.format }}</p>
          <p><strong>Durée :</strong> {{ formation.duree }} jours</p>
          <p><strong>Heure :</strong> {{ formatHeure(formation.heure) }}</p>
        </div>

        <div class="info-block">
          <h3 class="section-title">📅 Dates importantes</h3>
          <p><strong>Début des candidatures :</strong> {{ formatDate(formation.date_debut_candidature) }}</p>
          <p><strong>Date limite de dépôt :</strong> {{ formatDate(formation.date_limite_depot) }}</p>
          <p><strong>Début de la formation :</strong> {{ formatDate(formation.date_debut) }}</p>
          <p><strong>Fin de la formation :</strong> {{ formatDate(formation.date_fin) }}</p>
        </div>

        <div class="info-block">
          <p><strong>Prix :</strong> {{ Number(formation.prix).toLocaleString('fr-FR') }} FCFA</p>
          <p><strong>Type :</strong> {{ formation.type }}</p>
          <p><strong>Lieu :</strong> {{ formation.lieu }}</p>
          <p><strong>Catégorie :</strong> {{ formation.categorie?.nom || 'N/A' }}</p>
        </div>

        <div class="button-container">
          <button class="cta-button" @click="postuler(formation.id)">📨 Postuler</button>
        </div>
      </div>

      <div v-if="formation && formation.candidatures?.length" class="info-block">
        <h3 class="section-title">📋 Candidatures</h3>
        <ul class="candidature-list">
          <li v-for="candidature in formation.candidatures" :key="candidature.id">
      <p><strong>Nom du candidat :</strong> {{ candidature.candidat.nom }}</p>
      <p><strong>Email :</strong> {{ candidature.candidat.email }}</p>
      <p><strong>Statut :</strong> {{ candidature.statut }}</p>
      <p><strong>Date de candidature :</strong> {{ formatDate(candidature.created_at) }}</p>

          </li>
        </ul>
      </div>
      <div v-else>
        <p>Aucune candidature pour cette formation.</p>
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

const formatObjectifs = (text) => {
  if (!text) return '';
  return (
    text
      .replace(/([•\-●▪︎]|[.])\s*/g, '||')
      .split('||')
      .map(line => line.trim())
      .filter(line => line.length > 2)
      .filter((item, index, arr) => arr.indexOf(item) === index)
      .map(line => `• ${line}`)
      .join('<br>')
  );
};

onMounted(() => {
  fetchFormation();
});
</script>

<style scoped>
.page-container {
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  background-color: #f9fafb;
  padding: 30px 15px;
}

.card {
  background-color: white;
  padding: 40px 30px;
  border-radius: 20px;
  box-shadow: 0 12px 28px rgba(0, 0, 0, 0.1);
  max-width: 900px;
  width: 100%;
}

.card-title {
  font-size: 2.3rem;
  font-weight: 800;
  color: #1f2937;
  margin-bottom: 24px;
  text-align: center;
}

.section-title {
  margin-top: 20px;
  font-size: 1.4rem;
  font-weight: 700;
  color: #111827;
  border-left: 4px solid #ff7f00;
  padding-left: 10px;
}

.info-block {
  margin-bottom: 20px;
  padding-bottom: 12px;
  border-bottom: 1px solid #e5e7eb;
}

p {
  font-size: 1.05rem;
  color: #374151;
  margin: 8px 0;
  line-height: 1.6;
}

ul.candidature-list {
  padding-left: 20px;
  list-style: none;
}

.candidature-list li {
  background: #f3f4f6;
  padding: 10px;
  margin-bottom: 10px;
  border-radius: 10px;
}

.button-container {
  text-align: center;
  margin-top: 30px;
}

.cta-button {
  background-color: #ff7f00;
  color: white;
  padding: 12px 28px;
  border-radius: 10px;
  font-size: 1.125rem;
  font-weight: 600;
  border: none;
  cursor: pointer;
  transition: background-color 0.3s ease, transform 0.2s;
  box-shadow: 0 4px 14px rgba(0, 0, 0, 0.1);
}

.cta-button:hover {
  background-color: #003366;
  transform: scale(1.02);
}

@media screen and (max-width: 600px) {
  .card {
    padding: 20px;
  }

  .card-title {
    font-size: 1.8rem;
  }

  .section-title {
    font-size: 1.2rem;
  }

  p {
    font-size: 1rem;
  }

  .cta-button {
    width: 100%;
  }
}
</style>
