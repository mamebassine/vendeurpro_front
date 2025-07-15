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
  <table class="candidature-table">
    <thead>
      <tr>
        <th>Nom du candidat</th>
        <th>Email</th>
        <th>Statut</th>
        <th>Date de candidature</th>
        <th>Actions</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="candidature in formation.candidatures" :key="candidature.id">
        <td>{{ candidature.candidat.nom }}</td>
        <td>{{ candidature.candidat.email }}</td>
        <td>{{ candidature.statut }}</td>
        <td>{{ formatDate(candidature.created_at) }}</td>
        <td>
  <div class="action-buttons">
    <router-link :to="`/dashboard/modifierCandidature/${candidature.id}`" class="btn-modifier"> 
      Modifier
    </router-link>
    <button @click="supprimerCandidature(candidature.id)" class="btn-supprimer">
      Supprimer
    </button>
  </div>
</td>
 <!-- <button @click="modifierCandidature(candidature.id)" class="btn-modifier">Modifier</button> -->
</tr>
    </tbody>
  </table>
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




const modifierCandidature = (id) => {
  // Exemple : redirection vers une page de modification
  router.push({ name: 'ModifierCandidature', params: { id } });
};

const supprimerCandidature = async (id) => {
  if (confirm("Voulez-vous vraiment supprimer cette candidature ?")) {
    try {
      await api.delete(`/candidatures/${id}`);
      // Retirer la candidature de la liste localement sans recharger la page
      formation.value.candidatures = formation.value.candidatures.filter(c => c.id !== id);
      alert("Candidature supprimée avec succès.");
    } catch (error) {
      console.error("Erreur lors de la suppression :", error);
      alert("Erreur lors de la suppression de la candidature.");
    }
  }
};

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



.candidature-table {
  width: 100%;
  border-collapse: collapse;
  margin-top: 15px;
}

.candidature-table th,
.candidature-table td {
  border: 1px solid #ddd;
  padding: 10px;
  text-align: left;
  vertical-align: middle;
}

.candidature-table th {
  background-color: #ff7f00;
  color: white;
  font-weight: 800;
}

.action-buttons {
  display: flex;
  gap: 10px; /* espace entre les boutons */
}

.btn-modifier,
.btn-supprimer {
  padding: 6px 12px;
  margin-right: 8px;
  border: none;
  border-radius: 6px;
  font-weight: 600;
  cursor: pointer;
  transition: background-color 0.3s ease;
      margin-right: 10px; /* 👈 Espace entre les boutons */

}

.btn-modifier {
  background-color: #ff7f00; /* bleu */
  color: white;
}

.btn-modifier:hover {
  background-color: #003366;
}

.btn-supprimer {
  background-color: #d56f6f; /* rouge */
  color: white;
}

.btn-supprimer:hover {
  background-color: #b91c1c;
}

@media screen and (max-width: 600px) {
  .candidature-table th,
  .candidature-table td {
    font-size: 0.85rem;
    padding: 8px;
  }

  .btn-modifier,
  .btn-supprimer {
    padding: 5px 8px;
    font-size: 0.85rem;
    margin-right: 5px;
  }
}

</style>
