<template>
  <div class="container">
    <div class="retour-wrapper">
      <button @click="$router.go(-1)" class="btn-retour">← Retour</button>
    </div>

    <!-- TITRE PRINCIPAL -->
    <div class="header-top">
      <h1 class="main-title">{{ actualite?.titre }}</h1>
    </div>

    <!-- DATE + intro -->
    <div class="intro-block" v-if="actualite">
      <div class="date-block">
        <span class="date">{{ actualite.formattedDate }}</span>
      </div>

      <div class="vertical-divider"></div>

      <div class="intro-text">
        <p>{{ actualite.contenu }}</p>
      </div>
    </div>

    <!-- AUTEUR + PARTAGE -->
    <div class="author-share-block">
      <div class="author-info">
        <img :src="getImageUrl(actualite.image)" alt="Auteur" class="author-img" />
        <div class="author-text">
          <p class="author-name">{{ actualite.auteur }}</p>
          <p class="author-role">{{ actualite.fonction }}</p>
        </div>
      </div>

      <div class="share-button" @click="shareArticle">
        <span class="share-icon">🔗</span>
        <span class="share-text">Partager</span>
      </div>
    </div>
<!-- Image -->
    <img :src="getImageUrl(actualite.image)" alt="Image Actualité" class="header-image" />
<!-- POINTS -->
<h2 class="section-title">Points clés de l’actualité</h2>
<div class="benefits-wrapper">
  <div 
    class="benefit-item" 
    v-for="(point, index) in actualite.points" 
    :key="index"
  >
    <h3>{{ point.titre }}</h3>
    <ul>
      <li v-for="(exp, i) in point.explications" :key="i">
        {{ exp }}
      </li>
    </ul>
    <p><em>{{ point.conclusion_bloc }}</em></p>
  </div>
</div>
<!-- CONCLUSION -->
    <p class="conclusion">{{ actualite.conclusion }}</p>
  </div>
</template>

<script>
import actualitesService from '@/services/actualitesService'

// ➕ Fonction pour formater la date
function formatDate(dateString) {
  const date = new Date(dateString)

  const options = {
    day: '2-digit',
    month: 'long',
    year: 'numeric',
    hour: '2-digit',
    minute: '2-digit',
  }

  return date.toLocaleString('fr-FR', options)
}

export default {
  data() {
    return {
      actualite: null
    }
  },
  methods: {
    getImageUrl(image) {
      if (!image) return '/default-image.jpg'
      if (image.startsWith('http')) return image
      return `http://localhost:8000/storage/${image}`
    },
    shareArticle() {
      const url = window.location.href
      navigator.clipboard.writeText(url)
      alert('Lien copié dans le presse-papier !')
    }
  },
  async created() {
    const id = this.$route.params.id
    try {
      const res = await actualitesService.getById(id)
      this.actualite = res.data
      console.log('Actualité chargée:', this.actualite.points);
      if (typeof this.actualite.points === 'string') {
  try {
    this.actualite.points = JSON.parse(this.actualite.points)
  } catch (e) {
    console.error('Erreur de parsing JSON des points:', e)
    this.actualite.points = []
  }
}
      // ➕ Ajout du champ de date formatée
      this.actualite.formattedDate = `Publié le ${formatDate(res.data.date_publication)}`
    } catch (error) {
      console.error('Erreur lors du chargement des détails :', error)
    }
  }
}
</script>

<style scoped>
.container {
  margin: 50px auto;
  padding: 30px;
  max-width: 1000px;
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  color: #2e2e2e;
}

.header-top {
    margin-top: 5%;

  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
}

.main-title {
  font-size: 3.2rem;
  color: #003366;
  margin: 0;
}

/* DATE PARAGRAPHE  */

.intro-block {
  display: flex;
  align-items: center;
  gap: 20px;
  margin-bottom: 24px;
  flex-wrap: wrap;
}

.date-block {
  font-size: 14px;
  color: #555;
  white-space: nowrap;
}

.vertical-divider {
  width: 1px;
  height: 40px;
  background-color: #ccc;
}

.intro-text {
  flex: 1;
  font-size: 16px;
  min-width: 200px;
}

/*  */
.author-share-block {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 20px 0;
  flex-wrap: wrap;
  gap: 10px;
}

.author-info {
  display: flex;
  align-items: center;
  gap: 12px;
}

.author-img {
  width: 50px;
  height: 50px;
  border-radius: 50%;
  object-fit: cover;
}

.author-text {
  display: flex;
  flex-direction: column;
}

.author-name {
  font-weight: bold;
  font-size: 16px;
  margin: 0;
}

.author-role {
  font-size: 14px;
  color: #555;
  margin: 0;
}

.share-button {
  display: flex;
  align-items: center;
  gap: 6px;
  background-color: #003366;
  color: white;
  padding: 8px 12px;
  border-radius: 6px;
  cursor: pointer;
  font-size: 14px;
  transition: background-color 0.3s ease;
}

.share-button:hover {
  background-color: #ff7f00;
}
/*  */

.header-image {
  width: 100%;
  height: auto;
  margin: 24px 0;
  max-height: 350px;
  object-fit: cover;
  border-radius: 6px;
}
/* article */
/* TITRE DE SECTION */
.section-title {
  font-size: 22px;
  color: #003366;
  margin: 30px 0 20px;
  font-weight: bold;
  text-align: center;
}

/* CONTAINER DE TOUS LES POINTS */
.benefits-wrapper {
  display: flex;
  flex-direction: column;
  gap: 24px;
}

/* CHAQUE BLOC D’OPPORTUNITÉ */
.benefit-item {
  background-color: #f9f9f9;
  border-left: 5px solid #003366;
  padding: 16px 20px;
  border-radius: 8px;
  transition: transform 0.3s ease;
}

.benefit-item:hover {
  transform: translateY(-2px);
}

/* SOUS-TITRE D’UN POINT */
.benefit-item h3 {
  font-size: 18px;
  color: #003366;
  margin-bottom: 10px;
}

/* PARAGRAPHES */
.benefit-item p {
  font-size: 15px;
  line-height: 1.6;
  margin-bottom: 10px;
  color: #333;
}

/* LISTES À PUCE */
.benefit-item ul {
  list-style-type: disc;
  padding-left: 20px;
}

.benefit-item ul li {
  font-size: 15px;
  margin-bottom: 6px;
}

/* BLOC CONCLUSION */
.conclusion {
  background-color: #f3d0ad;
  padding: 18px;
  border-left: 6px solid #003366;
  border-radius: 6px;
  font-style: italic;
  font-size: 16px;
  margin-top: 30px;
  color: #2c3e50;
}

.retour-wrapper {
  text-align: right;
  margin-bottom: 20px;
}

.btn-retour {
  margin-top: 4%;
  background-color: #003366;
  color: white;
  padding: 4px 5px;
  border: none;
  border-radius: 6px;
  cursor: pointer;
  font-size: 10px;
  transition: background-color 0.3s ease;
}

.btn-retour:hover {
  background-color: #ff7f00;
}


</style>