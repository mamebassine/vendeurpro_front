<template>
  <div class="page-container">

    <!-- BOUTON RETOUR EN HAUT À DROITE -->
    <div class="retour-wrapper">
      <button @click="$router.go(-1)" class="btn-retour">← Retour</button>
    </div>

    <h2 class="page-title">Détail de l'actualité</h2>

    <div v-if="actualite" class="card-actualite">
      <img :src="getImageUrl(actualite.image)" alt="Image actualité" class="image-actualite" />

      <div class="card-content">
        <p><span class="label">Titre :</span> {{ actualite.titre }}</p>
        <p><span class="label">Contenu :</span> {{ actualite.contenu }}</p>
        <p><span class="label">Auteur :</span> {{ actualite.auteur }}</p>
        <p><span class="label">Fonction :</span> {{ actualite.fonction }}</p>
        <p><span class="label">Date de publication :</span> {{ formatDate(actualite.date_publication) }}</p>

        <!-- ✅ Bloc pour afficher les points clés -->
        <div v-if="actualite.points && actualite.points.length > 0">
          <h3 class="label">📝 Points clés de l’actualité</h3>

          <div
            v-for="(point, index) in actualite.points"
            :key="index"
            class="point-bloc"
            style="margin-bottom: 20px;"
          >
            <p><strong>{{ point.titre }}</strong></p>

            <ul v-if="Array.isArray(point.explications)">
              <li v-for="(explication, i) in point.explications" :key="i">
                {{ explication }}
              </li>
            </ul>

            <p v-if="point.conclusion_bloc" v-html="formatTexte(point.conclusion_bloc)"></p>
          </div>
        </div>

        <!-- Si aucun point n'est disponible -->
        <p v-else><span class="label">Points :</span> Aucun point disponible</p>

        <p><span class="label">Conclusion :</span> {{ actualite.conclusion }}</p>
      </div>
    </div>

    <div v-else class="loading">Chargement...</div>

  </div>
</template>

<script>
import actualitesService from '@/services/actualitesService'

export default {
  data() {
    return {
      actualite: {
        points: []
      },
    };
  },

  methods: {
    getImageUrl(image) {
      if (!image) return '/default-image.jpg';
      if (image.startsWith('http')) return image;
      return `http://localhost:8000/storage/${image}`;
    },

    formatDate(datetime) {
      if (!datetime) return '';
      const date = new Date(datetime);
      return date.toLocaleDateString('fr-FR', {
        day: '2-digit',
        month: '2-digit',
        year: 'numeric',
        hour: '2-digit',
        minute: '2-digit'
      });
    },

    formatTexte(texte) {
      return texte ? texte.replace(/\n/g, '<br>') : '';
    }
  },

  async created() {
    const id = this.$route.params.id;
    try {
      const res = await actualitesService.getById(id);
      this.actualite = res.data;

      // Si les points sont une chaîne JSON (en cas d’erreur d'encodage côté backend)
      if (typeof this.actualite.points === 'string') {
        this.actualite.points = JSON.parse(this.actualite.points);
      }

      // Débogage
      console.log("🟢 Donnée reçue :", res.data);
      console.log("🔵 actualite.points :", this.actualite.points);
    } catch (error) {
      console.error('❌ Erreur lors du chargement des détails :', error);
    }
  }
};
</script>

<style scoped>
:root {
  --orange: #ff7f00;
  --bleu: #003366;
  --blanc: #ffffff;
  --gris-clair: #f8f8f8;
}

.page-container {
  max-width: 700px;
  margin: auto;
  padding: 30px 20px;
  background-color: var(--gris-clair);
  min-height: 100vh;
  font-family: 'Segoe UI', sans-serif;
  position: relative;
}

/* Wrapper pour placer le bouton en haut à droite */
.retour-wrapper {
  display: flex;
  justify-content: flex-end;
  margin-bottom: 10px;
}

.btn-retour {
  background-color: var(--orange);
  color: var(--blanc);
  border: none;
  padding: 10px 18px;
  border-radius: 8px;
  font-size: 15px;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

.btn-retour:hover {
  background-color: #e66f00;
}

.page-title {
  color: var(--bleu);
  font-size: 28px;
  text-align: center;
  margin-bottom: 30px;
  font-weight: bold;
}

.card-actualite {
  background-color: var(--blanc);
  border-radius: 16px;
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.1);
  overflow: hidden;
  padding: 20px;
  animation: fadeIn 0.4s ease-in-out;
}

.image-actualite {
  width: 100%;
  max-height: 300px;
  object-fit: cover;
  border-radius: 12px;
  margin-bottom: 20px;
  border: 4px solid var(--orange);
}

.card-content p {
  margin-bottom: 12px;
  font-size: 16px;
  line-height: 1.5;
}

.label {
  font-weight: bold;
  color: var(--bleu);
}

.loading {
  text-align: center;
  color: var(--bleu);
  font-size: 18px;
}

@keyframes fadeIn {
  from { opacity: 0; transform: translateY(20px); }
  to { opacity: 1; transform: translateY(0); }
}

@media (max-width: 600px) {
  .page-title {
    font-size: 22px;
  }

  .card-content p {
    font-size: 15px;
  }

  .retour-wrapper {
    justify-content: center;
  }
}
</style>
