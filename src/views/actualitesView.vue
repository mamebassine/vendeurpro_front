<template>
  <section class="competences-section">
    <h2 class="section-title">Les clés pour Réussir dans la Vente</h2>
    <div class="cards-container">
      <div
        v-for="(card, index) in cards"
        :key="index"
        class="card"
      >
        <img :src="card.image" :alt="card.title" class="card-image" />

        <!-- Lien dynamique vers la page de détails -->
        <router-link
          :to="{ name: 'actualites-voir-detail', params: { id: card.id } }"
          class="card-title-link"
        >
          <h3 class="card-title">{{ card.title }}</h3>
        </router-link>

        <!-- <p class="card-date">{{ card.date }}</p> -->

        <p class="card-date">{{ card.formattedDate }}</p>


        <p class="card-description">{{ truncateText(card.description, 100) }}</p>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import axios from 'axios'

const cards = ref([])

onMounted(async () => {
  try {
    const response = await axios.get('http://localhost:8000/api/actualites')
    cards.value = response.data.map((item) => ({
      id: item.id,
      title: item.titre,
      description: item.contenu,
      image: getImageUrl(item.image),
      formattedDate: `Publié le ${formatDate(item.date_publication)}` // ✅ plus clair
    }))
  } catch (error) {
    console.error('Erreur lors du chargement des actualités:', error)
  }
})

function truncateText(text, maxLength) {
  if (!text) return ''
  return text.length > maxLength
    ? text.substring(0, maxLength).trim() + '...'
    : text
}

function formatDate(dateStr) {
  const date = new Date(dateStr)
  return date.toLocaleDateString('fr-FR', {
    day: '2-digit',
    month: 'long',
    year: 'numeric',
    hour: '2-digit',
    minute: '2-digit'
  })
}

function getImageUrl(image) {
  if (!image) return '/default.jpg'
  return image.startsWith('http')
    ? image
    : `http://localhost:8000/storage/${image}`
}
</script>

<style scoped>
/* Pas modifié, tout est bon ici */
.competences-section {
  padding: 60px 20px;
  max-width: 1100px;
  margin: 0 auto;
  font-family: Arial, sans-serif;
  background-color: #f4f4f4;
  margin-top: 10%;
}

.section-title {
  text-align: center;
  font-size: 2em;
  margin-bottom: 40px;
  color: #222;
}

.cards-container {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
}

.card {
  background: #fff;
  border-radius: 16px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
  overflow: hidden;
  transition: transform 0.3s ease;
  width: 100%;
}

.card:hover {
  transform: translateY(-5px);
}

.card-image {
  width: 100%;
  height: 200px;
  object-fit: cover;
}

.card-title {
  font-size: 1.5em;
  margin: 20px;
}

.card-date {
  font-size: 0.85em;
  margin: 0 20px;
  color: #888;
  font-style: italic;
}

.card-description {
  font-size: 1em;
  margin: 10px 20px 20px;
  color: #555;
  line-height: 1.5;
}

.card-button {
  display: inline-block;
  margin: 0 20px 20px;
  padding: 10px 16px;
  background-color: #0077cc;
  color: white;
  border: none;
  border-radius: 6px;
  cursor: pointer;
  font-size: 0.95em;
  transition: background-color 0.3s ease;
}

.card-button:hover {
  background-color: #003366;
}

.card-title-link {
  text-decoration: none;
  color: #003366;
}

.card-title-link:hover .card-title {
  color: #ff7f00;
}

@media (max-width: 1024px) {
  .cards-container {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (max-width: 768px) {
  .cards-container {
    grid-template-columns: 1fr;
    gap: 16px;
  }

  .card {
    max-width: 100%;
  }

  .card-image {
    height: 180px;
  }

  .card-title {
    font-size: 1.3em;
    margin: 16px;
  }

  .card-description {
    margin: 10px 16px 16px;
  }

  .card-button {
    margin: 0 16px 16px;
    font-size: 0.9em;
  }
}

@media (max-width: 480px) {
  .section-title {
    font-size: 1.6em;
    margin-bottom: 30px;
    margin-top: 22%;
  }

  .card-image {
    height: 160px;
  }

  .card-title {
    font-size: 1.2em;
  }

  .card-description,
  .card-date {
    font-size: 0.95em;
  }

  .card-button {
    font-size: 0.85em;
    padding: 8px 14px;
  }
}
</style>
