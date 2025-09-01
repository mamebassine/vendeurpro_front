<template>
    <section id="formations">
      <!-- 🎯 HERO SECTION -->
      <div class="hero">
        <div class="text-content">
          <h1>Nos formations pour devenir un pro de la vente</h1>
<strong>
  <h3>Formez-vous aux techniques de vente modernes avec
    <br>
  <span>VendeurPro</span></h3>
</strong>          
<p>Bootcamps intensifs, formation certifiante et modules à la carte pour booster <br> vos compétences en vente.</p>
<router-link to="/AjoutCandidat" class="cta-button">Inscrivez-vous</router-link>

        </div>
        <img src="../assets/images/photobi1.png" alt="Formation en vente" class="hero-image" />
      </div>
      
      </section>

    <!-- 🎯 NOS FORMATIONS -->
<section class="formations">
  <h2>Choisissez la formation qui vous correspond</h2>
  <p>Découvrez nos bootcamps, notre formation certifiante et nos modules à la carte.</p>

  <!-- Message d'erreur ou de succès -->
  <div v-if="message" :class="{'success': success, 'error': !success}" class="message">
    {{ message }}
  </div>

<!-- Liste des formations -->
<div v-if="Object.keys(formationsGroupes).length" class="container">
  <div v-for="(groupFormations, type) in formationsGroupes" :key="type" class="type-group">
    <h3>{{ type }}</h3>
    <div class="card-grid">
     <div
  v-for="f in type === 'Modules à la carte' ? groupFormations.slice(0, 6) : groupFormations.slice(0, 3)"
  :key="f.id"
  class="card"
  :style="{ cursor: type === 'Modules à la carte' ? 'default' : 'pointer', position: 'relative' }"
  @click="type !== 'Modules à la carte' && viewDetails(f)"
>
  <span
    v-if="type === 'Modules à la carte'"
    @click.stop="viewDetails(f)"
    class="chevron"
  >
    <svg xmlns="http://www.w3.org/2000/svg" fill="#FF8000" width="20" height="20" viewBox="0 0 16 16">
      <path fill-rule="evenodd" d="M6.646 1.646a.5.5 0 0 1 .708 0L11.207 6.5a.5.5 0 0 1 0 .707l-3.853 3.854a.5.5 0 0 1-.708-.708L10.293 7 6.646 3.354a.5.5 0 0 1 0-.708z"/>
    </svg>
  </span>

  <h2 class="card-title">{{ f.titre }}</h2>
  <p class="objectifs">
    <strong>Objectifs :</strong> {{ f.description }}
  </p>

<!-- ICI COMMENCE MODULES A LA CARTES -->



  <!-- ✅ Détails affichés seulement si f.expanded est vrai -->
  <div v-if="f.expanded" class="details">
    <p><strong>Titre :</strong> {{ f.titre }}</p>
  <p><strong>Description :</strong> {{ f.description }}</p>
  <p><strong>Durée :</strong> {{ f.duree }} jours</p>
  <p><strong>Prix :</strong> {{ Number(f.prix).toLocaleString('fr-FR') }} FCFA</p>

  <!-- 🎯 POUR QUI ? -->
  <h3 class="section-title">🎯 Pour qui ?</h3>
  <p>{{ f.public_vise }}</p>

  <!-- 📚 OBJECTIFS -->
  <h3 class="section-title">📚 Objectifs :</h3>
  <p v-html="formatObjectifs(f.objectifs)"></p>

  <!-- 📆 DURÉE, CERTIFICATION & FORMAT -->
  <h3 class="section-title">📆 Durée, Certification & Format</h3>
  <p><strong>Certification :</strong> {{ f.certifiante ? 'Oui' : 'Non' }}</p>
  <p><strong>Format :</strong> {{ f.format }}</p>

  <p><strong>Début des candidatures :</strong> {{ formatDate(f.date_debut_candidature) }}</p>
  <p><strong>Date limite de dépôt :</strong> {{ formatDate(f.date_limite_depot) }}</p>
  <p><strong>Début de la formation :</strong> {{ formatDate(f.date_debut) }}</p>
  <p><strong>Fin de la formation :</strong> {{ formatDate(f.date_fin) }}</p>
  <p><strong>Heure :</strong> {{ formatHeure(f.heure) }}</p>
  <p><strong>Type :</strong> {{ f.type }}</p>
  <p><strong>Lieu :</strong> {{ f.lieu }}</p>
  <p><strong>Catégorie :</strong> {{ f.categorie?.nom || 'N/A' }}</p>

<button @click="postuler(f)">Postuler</button>
  </div>
</div>




    </div>
  </div>
</div>
<p v-else>Aucune formation disponible.</p>


  <!-- Détails de la formation sélectionnée -->
  <div v-if="formationSelectionnee" class="formation-details" style="margin-top: 30px; padding: 20px; border: 1px solid #ccc;">
    <h2>{{ formationSelectionnee.titre }}</h2>
    <p><strong>Description :</strong> {{ formationSelectionnee.description }}</p>
    <p><strong>Durée :</strong> {{ formationSelectionnee.duree }}</p>
    <p><strong>Prix :</strong> {{ formationSelectionnee.prix }} €</p>
    <button @click="formationSelectionnee = null">Fermer</button>
  </div>
</section>

 
  

<!-- 🎤 TÉMOIGNAGES -->
<section class="temoignages">
  <h2> Ils ont transformé leurs ventes avec vendeurPro</h2>
  <div class="testimonial-container">
    <button @click="prevTestimonial" class="nav-btn">❮</button>
    <div class="testimonial">
      <img :src="testimonials[currentIndex].img" alt="Témoignage" />
      <p>"{{ testimonials[currentIndex].text }}"</p>
      <h4>- {{ testimonials[currentIndex].author }}</h4>
    </div>
    <button @click="nextTestimonial" class="nav-btn">❯</button>
  </div>
  <router-link to="/contact" class="cta-button"> Rejoignez-les</router-link>
</section>

<!-- Section FAQ -->
<section id="faq" class="faq-section">
  <h2>Questions fréquentes</h2>
  <div class="faq-container">
      <div v-for="(item, index) in faqItems" :key="index" class="faq-item">
        <h3 @click="toggle(index)" class="faq-title">
          <span>{{ item.question }}</span>
          <i :class="{'fas fa-chevron-down': !item.isOpen, 'fas fa-chevron-up': item.isOpen}"></i>
        </h3>
        <transition name="slide">
          <p v-if="item.isOpen" class="faq-answer">{{ item.answer }}</p>
        </transition>
      </div>
    </div>
   
  <router-link to="/contact" class="cta-button">📩 Contactez-nous</router-link>

</section>
</template>
 
<script setup>
import { ref, computed, onMounted, onUnmounted } from "vue";

import { useRouter } from 'vue-router';
import api from '@/services/api';

const router = useRouter();
const formations = ref([]);
const message = ref('');
const success = ref(true);
const formationSelectionnee = ref(null);

// Récupération des formations depuis l'API

// const getFormations = async () => {
//   try {
//     const res = await api.get('/formations');
//     formations.value = res.data;
//     console.log("Formations récupérées :", formations.value);
//   } catch (e) {
//     console.error(e);
//     showMessage("Erreur lors du chargement des formations", false);
//   }
// };

const getFormations = async () => {
  try {
    const res = await api.get('/formation');
    // Ajouter une propriété "expanded" à chaque formation
    formations.value = res.data.map(f => ({ ...f, expanded: false }));
  } catch (e) {
    console.error(e);
    showMessage("Erreur lors du chargement des formations", false);
  }
};

// const viewDetails = (formation) => {
//   if (formation.type === 'Modules à la carte') {
//     formationSelectionnee.value =
//       formationSelectionnee.value && formationSelectionnee.value.id === formation.id
//         ? null
//         : formation;
//   } else if (formation.id) {
//     router.push({ name: 'Voirdetail-formations', params: { id: formation.id } });
//   }
// };
const viewDetails = (formation) => {
  if (formation.type === 'Modules à la carte') {
    // Ferme les autres cartes d'abord
    formations.value.forEach(f => {
      if (f.id !== formation.id) {
        f.expanded = false;
      }
    });
    // Toggle l’état de la carte actuelle
    formation.expanded = !formation.expanded;
  } else if (formation.id) {
    router.push({ name: 'Voirdetail-formations', params: { id: formation.id } });
  }
};


const showMessage = (msg, isSuccess = true) => {
  message.value = msg;
  success.value = isSuccess;
  setTimeout(() => (message.value = ''), 3000);
};

// Computed pour grouper les formations par type
const formationsGroupes = computed(() => {
  return formations.value.reduce((group, formation) => {
    const type = formation.type || 'Non défini';
    if (!group[type]) {
      group[type] = [];
    }
    group[type].push(formation);
    return group;
  }, {});
});

onMounted(() => {
  getFormations();
});

// const postuler = (id) => {
//   router.push({ name: 'Voirdetail-formations', params: { id } });
// };

const postuler = (formation) => {
  router.push({ name: 'AjoutCandidat', query: { formation_id: formation.id } });
};


// 🔹 Témoignages
const testimonials = ref([
  { img: "/images/temoin.jpg", text: "J'ai augmenté mes ventes de 30% en 3 mois !", author: "Mamadou Diallo" },
  { img: "/images/temoin13.jpg", text: "Une formation ultra-pratique qui a boosté mon business.", author: "Aminata Sow" },
  { img: "/images/temoin2.jpg", text: "Enfin une formation qui enseigne des techniques concrètes.", author: "Serigne Ndiaye" },
]);

const currentIndex = ref(0);

// 🔹 FAQ
const faqItems = ref([
  { question: "Qui peut participer à vos formations ?", answer: "Nos formations sont ouvertes à tous.", isOpen: false },
  { question: "Quel est le format des formations ?", answer: "Nous proposons des formations en ligne et en présentiel.", isOpen: false },
  { question: "Y a-t-il un suivi après la formation ?", answer: "Oui, nous offrons du coaching après la formation.", isOpen: false },
  { question: "Comment puis-je m'inscrire ?", answer: "Inscrivez-vous via notre site ou contactez-nous.", isOpen: false },
])

function toggle(index) {
  faqItems.value[index].isOpen = !faqItems.value[index].isOpen
}
// 🔹 Témoignages : navigation
const nextTestimonial = () => {
  currentIndex.value = (currentIndex.value + 1) % testimonials.value.length;
};

const prevTestimonial = () => {
  currentIndex.value = (currentIndex.value - 1 + testimonials.value.length) % testimonials.value.length;
};

// 🔹 FAQ : toggle
const toggleFAQ = (index) => {
  faqItems.value = faqItems.value.map((item, i) => ({
    ...item,
    isOpen: i === index ? !item.isOpen : false,
  }));
};

// 🔹 Témoignages : slider automatique
let interval = null;
onMounted(() => {
  interval = setInterval(nextTestimonial, 5000);
});
onUnmounted(() => {
  clearInterval(interval);
});



const formatObjectifs = (text) => {
  return text ? text.replace(/\n/g, '<br>') : '';
};

const formatDate = (date) => {
  if (!date) return 'Non défini';
  const d = new Date(date);
  return d.toLocaleDateString('fr-FR');
};

const formatHeure = (heure) => {
  if (!heure) return 'Non défini';
  const [h, m] = heure.split(':');
  return `${h}h${m}`;
};

</script>




<style scoped>
#formations{
    margin-top: 9%;
}

.formations{
    margin-top: 3%;
}

/* 🔹 HERO SECTION */
  .hero {
    display: flex;
    align-items: center;
    justify-content: space-between;
    background: linear-gradient(120deg, #003366, #fff);
    color: white;
  padding: 60px 10%;
  
    
  }
.hero-image {

  max-width: 47%;
  border-radius: 40px;
  box-shadow: 5px 5px 15px rgba(0, 0, 0, 0.2);


  }
/* ✅ Stylisation des Titres */
.hero h1{
  color: #fff;
  font-size: 2.4em; /* Taille du titre */
  margin: 0 0 20px 0; /* Espacement sous le titre */
     font-weight: bold; /* Gras pour le titre */
     margin-bottom: 5px;
}

h2{
    font-size: 2em;
    font-weight: bold;
    text-transform: uppercase;
    letter-spacing: 1px;
    margin-bottom: 10px;
    text-align: center;
}
.hero h3 {
  font-size: 22px; /* Taille du texte du paragraphe */
     margin: 20px 0; /* Espacement vertical entre les paragraphes */
     font-weight: arial; /* Gras pour le titre */ }

.hero h3 span {
    color: #ff7f00;
    font-weight: bold;
}

/* ✅ Stylisation du Paragraphe POUR LE PETITE TEXYT */
.hero p {
  font-size: 15px; /* Taille du texte du paragraphe */
     margin: 20px 0; /* Espacement vertical entre les paragraphes */
     font-weight: arial; /* Gras pour le titre */
     color: #fff;
     text-align: left;

}
/* TITRE BI JE CROIS */
.formation , p {
  text-align: center;
} 

/* Responsiveness HERO + FORMATIONS */
@media (max-width: 1024px) {
 .hero img {
    display: none !important;
  }
}

@media (max-width: 1024px) {
  .hero {
    margin-top: 22%;
    flex-direction: column;
    text-align: center;
    gap: 30px;
    padding: 40px 5%;
  }

  .hero-image {
    max-width: 90%;
    margin: 0 auto;
    border-top-left-radius: 300px;
  }

  .hero h1 {
    font-size: 2em;
  }

  .hero h3 {
    font-size: 18px;
  }

  .hero p {
    font-size: 15px;
    text-align: center;
  }
}

@media (max-width: 768px) {
  .hero h1 {
    font-size: 1.8em;
  }

  .hero h3 {
    font-size: 16px;
  }

  .hero p {
    font-size: 14px;
  }

  .hero-image {
    max-width: 95%;
    border-top-left-radius: 180px;
  }

  h2 {
    font-size: 1.6em;
  }
}

@media (max-width: 480px) {
  .hero h1 {
    font-size: 1.5em;
  }

  .hero h3 {
    font-size: 14px;
  }

  .hero p {
    font-size: 13px;
  }

  .hero-image {
    max-width: 100%;
    padding: 0;
    border-radius: 20px;
  }

  h2 {
    font-size: 1.4em;
  }
}




/* PARTIE F0RMATIONS */

.container {
  padding: 2rem;
  max-width: 1200px;
  margin: 0 auto;
}

section {
  margin-bottom: 3rem;
  
}

h4{
  font-size: 1.8rem;
  margin-bottom: 1.5rem;
  color: #ff7f00;
  text-align: left
}

.card-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  gap: 1.5rem;
}

.card {
  background-color: #fff;
  border-radius: 12px;
  padding: 1.5rem;
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.08);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  position: relative;
  
  
}

.card:hover {
  transform: translateY(-4px);
  background-color: #003366;
}

.card:hover .card-title,
.card:hover .objectifs {
  color: #ff7f00;
}

.card-title {
  margin-bottom: 0.75rem;
  font-size: 1.2rem;
  color: #000;
  font-weight: bold;
  text-align: left;
}

.objectifs {
  color: #555;
  font-size: 15px;
  line-height: 1.2;
  text-align: justify;
}

.details-button {
  margin-top: 1rem;
  background-color: #ff7f00;
  color: #fff;
  border: none;
  padding: 0.5rem 1rem;
  border-radius: 6px;
  cursor: pointer;
  transition: background-color 0.3s ease;
}
.type-group > h3 {
  color: #ff7f00;
  font-weight: bold;
  text-transform: uppercase;
  margin: 2rem 0; /* 2rem en haut ET en bas */
  font-size: 1.5rem;
}



.details-button:hover {
  background-color: #cc6600;
}


/* POUR LES 6 DERNIERS CARTES EN BAS */

.card {
  background: #fff;
  border-radius: 16px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.05);
  padding: 1.5rem;
  transition: transform 0.2s ease;
  position: relative;
  overflow: hidden;
}

.chevron {
  position: absolute;
  top: 10px;
  right: 10px;
  width: 32px;
  height: 32px;
  background: white;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
  cursor: pointer;
}

.details {
  background-color: #f5f5f5;
  margin-top: 1rem;
  padding: 1rem;
  border-radius: 12px;
  font-size: 0.95rem;
}

.details p {
  margin: 0.5rem 0;
}

.details button {
  background-color: #FF8000;
  color: white;
  border: none;
  padding: 0.6rem 1.2rem;
  border-radius: 8px;
  cursor: pointer;
  margin-top: 1rem;
  transition: background 0.3s ease;
}

.details button:hover {
  background-color: #e67000;
}



.fade-enter-active, .fade-leave-active {
  transition: opacity 0.3s ease;
}
.fade-enter-from, .fade-leave-to {
  opacity: 0;
}

.card {
  position: relative;
  padding-bottom: 40px; /* Pour laisser de la place à l’icône */
}

.icon-bottom {
  position: absolute;
  bottom: 10px;
  right: 10px;
  font-size: 25px;
  color: #ff7f00; /* ou n’importe quelle couleur qui va bien avec ton thème */

}





/* 🔹 TÉMOIGNAGES */
.temoignages {
  text-align: center;
  padding: 30px 2%;
  background-color: #003366;
  color: white;

  margin-top: 3%;
}
.testimonial-container {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 20px;
  margin-top: 20px;
}
.testimonial h4 {
  color: #000;
text-align: center;
  font-weight: bold; /* Gras pour le titre */
  /* margin: 10px 0;  */
  /* Espacement vertical entre les paragraphes */

}
.testimonial {
  background: white;
  color: black;
  /* Pour diminuer la grandeur */
  padding: 60px;
  border-radius: 10px;
  max-width: 40%;
  text-align: center;

  /* max-width: 600px;
width: 100%; */


  max-width: 9500px; 
  min-width: 1310px;
}
.testimonial img {
  width: 180px;
  height: 170px;
  border-radius: 200%;
  object-fit: cover;

  /* margin-left: 44%; */

  margin-left: auto;
margin-right: auto;
display: block;

}
.nav-btn {
  background: transparent;
  border: none;
  font-size: 2em;
  color: #ff7f00;
  cursor: pointer;
  transition: transform 0.2s;
}

.nav-btn:hover {
  transform: scale(1.2);
}

/* responsive */

@media (max-width: 1024px) {
  .testimonial-container {
    flex-direction: column;
    gap: 30px;
  }

  .testimonial {
    min-width: auto;
    max-width: 90%;
    padding: 40px;
  }

  .testimonial img {
    margin-left: auto;
    margin-right: auto;
    display: block;
  }
}

@media (max-width: 768px) {
  .temoignages {
    padding: 20px 5%;
  }

  .testimonial {
    padding: 30px;
  }

  .testimonial img {
    width: 80px;
    height: 80px;
  }

  .nav-btn {
    font-size: 1.8em;
  }
}

@media (max-width: 480px) {
  .testimonial {
    padding: 20px;
  }

  .testimonial img {
    width: 70px;
    height: 70px;
  }

  .testimonial h4 {
    font-size: 1em;
  }

  .nav-btn {
    font-size: 1.5em;
  }
}




/* --- Section FAQ --- */
.faq-section {
  padding: 60px 5%;
  text-align: center;
  background-color: #f9f9f9;
}

.faq-section h2 {
  font-size: 2.5em;
  margin-bottom: 30px;
  font-weight: bold;
  color: #003366;
}

/* --- Conteneur des questions --- */
.faq-container {
  max-width: 280%; /*Augmenter le input  */
  margin: auto;
}

/* --- Question en accordéon --- */
.faq-item {
  background: white;
  padding: 15px 20px;
  margin: 16px 0; /* espace entre les input */
  border-radius: 8px;
  box-shadow: 0 5px 10px rgba(0, 0, 0, 0.1);
  cursor: pointer;
  transition: all 0.3s ease;
  border-left: 5px solid #ff7f00;
}

.faq-item:hover {
  transform: translateY(-2px);
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.2);
}

/* --- Titre de la question --- */
.faq-title {
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 16px;
  font-weight: bold;
  color: #003366;
  margin: 0;
}

.faq-title i {
  font-size: 1.2em;
  transition: transform 0.3s ease;
}

/* --- Réponse --- */
.faq-answer {
  margin-top: 10px;
  color: #666;
  font-size: 16px;
  text-align: left;
}

/* --- Animation Slide pour ouverture des réponses --- */
.slide-enter-active, .slide-leave-active {
  transition: max-height 0.5s ease-out, opacity 0.5s ease-out;
}

.slide-enter, .slide-leave-to {
  max-height: 0;
  opacity: 0;
}

/* 🔹 CTA BUTTON */
.cta-button {
  background: #ff7f00;
  padding: 12px 20px;
  color: white;
  border: none;
  cursor: pointer;
  font-size: 1.1em;
  border-radius: 8px;
  transition: background 0.3s ease-in-out;
  display: inline-block;
  margin-top: 20px;
}

.cta-button:hover {
  background: #003366;
}

/* Assurer un espacement uniforme entre les sections */
.section {
  padding: 20px 5%; /* Uniformiser l’espacement interne */
  min-height: 300px; /* Ajuste selon ton besoin */
}
  </style>
  