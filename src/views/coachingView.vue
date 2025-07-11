<template> 
  <section id="coaching">
    <!-- 🎯 HERO SECTION -->
    <div class="hero">
      <div class="text-content">
        <h1>Boostez Vos Compétences avec un Coaching Personnalisé</h1>
        <p> Atteignez vos objectifs de vente avec un accompagnement sur mesure.</p>
        <!-- <button class="cta-button">📅 Réserver une Séance</button> -->

        <router-link to="/AjoutCandidat" class="cta-button">Réserver une Séance</router-link>

      </div>
      <img src="../assets/images/photobi2.png" alt="Coaching Vente" class="hero-image" />
    </div>

  <!-- 🎯 PROGRAMMES DE COACHING --> 
   <div class="section coaching-list">
  <h2 class="titrecoaaching">Choisissez Votre Coaching</h2>

  <div class="coaching-container">
    <div v-if="coachingOptions.length === 0">
      <p>Aucun programme de coaching trouvé pour le moment.</p>
    </div>

<div v-for="(coaching, index) in coachingOptions.slice(0, 3)" :key="index" class="coaching-card">
      <h3>{{ coaching.titre }}</h3>
<p><strong>Public :</strong> {{ coaching.public_vise }}</p>

<ul>
  <li v-for="(obj, i) in coaching.objectifs" :key="i">✔️ {{ obj }}</li>
</ul>

<div class="card-footer">
  <p><strong>Durée :</strong> {{ coaching.duree }} sessions</p>

        <router-link to="/AjoutCandidat" class="cta-button">📞 Réserver une Séance</router-link>
      </div>
    </div>
  </div>
</div>






    <!-- 🎯 FAQ -->
    <section id="faq" class="faq-section">
    <h2>Questions Fréquentes</h2>
    <div class="faq-container">
      <div v-for="(item, index) in faqItems" :key="index" class="faq-item">
        <h3 @click="toggleFAQ(index)" class="faq-title">
          <span>{{ item.question }}</span>
          <i :class="{'fas fa-chevron-down': !item.isOpen, 'fas fa-chevron-up': item.isOpen}"></i>
        </h3>
        <transition name="slide">
          <p v-show="item.isOpen" class="faq-answer">{{ item.answer }}</p>
        </transition>
      </div>
      <router-link to="/contact" class="cta-button">📩 Contactez-Nous</router-link>
    </div>
  </section>
  
  </section>
</template>



<script setup>
import { ref, onMounted } from 'vue' 
import api from '@/services/api' 

const coachingOptions = ref([]);
const message = ref('');

const getCoachings = async () => {
  try {
    const res = await api.get('/coaching');
    console.log('Coachings reçus ✅:', res.data);

coachingOptions.value = res.data.map(coaching => {
  let objectifs = coaching.objectifs;

  if (typeof objectifs === 'string') {
    try {
      const parsed = JSON.parse(objectifs);
      objectifs = Array.isArray(parsed) ? parsed : [objectifs];
    } catch (e) {
      objectifs = [objectifs]; // Texte simple non JSON
    }
  }

  return {
    ...coaching,
    objectifs
  };
});


  } catch (e) {
    console.error('❌ Erreur lors du chargement des coachings:', e);
    message.value = "Erreur lors du chargement des coachings";
  }
};

onMounted(() => {
  message.value = 'Bienvenue dans le coaching';
  getCoachings();
});





// // 🔹 Coaching Options
// const coachingOptions = ref([
//   {
//     title: "Coaching pour Commerçants & Prestataires",
//     public: "Commerçants (boutiques, marchés) & Prestataires (coiffeurs, consultants...)",
//     objectives: ["Améliorer les techniques de vente", "Augmenter le chiffre d'affaires", "Fidéliser la clientèle"],
//     duration: "3 à 6 sessions",
//     // price: "150 000 FCFA - 300 000 FCFA"
//   },
//   {
//     title: "Coaching pour Porteurs de Projets ",
//      public: "Entrepreneurs, startups, freelances, innovateurs, créateurs",
//     objectives: ["Structurer son idée de business", "Définir une stratégie commerciale", "Préparer le lancement"],
//     duration: "4 à 8 sessions",
//     // price: "200 000 FCFA - 400 000 FCFA"
//   },
//   {
//     title: "Coaching pour Étudiants & Reconversion",
//     public: "Étudiants, chômeurs, personnes en reconversion",
//     objectives: ["Acquérir les bases de la vente", "Se préparer à l'emploi", "Développer une expertise"],
//     duration: "3 à 6 sessions",
//     // price: "100 000 FCFA - 200 000 FCFA"
//   }
// ]);

// 🔹 FAQ interactive
const faqItems = ref([
  { question: "Qui peut bénéficier du coaching ?", answer: "Tout le monde : commerçants, entrepreneurs, étudiants...", isOpen: false },
  { question: "Comment réserver une séance ?", answer: "Cliquez sur le bouton et remplissez le formulaire de contact.", isOpen: false },
  { question: "Le coaching est-il disponible en ligne ?", answer: "Oui, vous pouvez choisir entre un coaching en ligne ou en présentiel.", isOpen: false },
]);

const toggleFAQ = (index) => {
  faqItems.value = faqItems.value.map((item, i) => ({
    ...item,
    isOpen: i === index ? !item.isOpen : false
  }));
};
</script>

<style scoped>
/* 🔹 GLOBAL */
#coaching{
    margin-top: 9%;
  }
.section {
  padding: 80px 8%;
  text-align: center;
}
/* 🔹 HERO SECTION */
.hero {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 60px 10%;
  background: linear-gradient(120deg, #003366, #fff);
  color: white;
  border-radius: 0 0 30px 30px;
}
.titrecoaaching{
  font-size: 2.5em;
  color: #003366;
  margin-bottom: 30px;
  font-weight: bold;
}
.questionsFréquentes{
    font-size: 2.5em;
  color: #003366;
  margin-bottom: 30px;
  font-weight: bold;
}
.hero h1 {
  font-size: 2.4em; /* Taille du titre */
  margin: 0 0 5px 0; /* Espacement sous le titre */
     font-weight: bold; /* Gras pour le titre */
     margin-bottom: 5px;
}
.hero p {
  font-size: 17px; /* Taille du texte du paragraphe */
     margin: 20px 0; /* Espacement vertical entre les paragraphes */
     font-weight: arial; /* Gras pour le titre */
}

.hero-image {
  max-width: 48%;
  border-radius: 45px;
  box-shadow: 5px 5px 15px rgba(0, 0, 0, 0.2);
}

  /* border-radius: 8px;
  margin-left: 21px;
  margin-top: 20px;

  
  max-width: 600px;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2);
  clip-path: polygon(
    0% 0%, 
    100% 0%, 
    100% 80%, 
    50% 100%, 
    0% 80%
  );

  border: 6px solid #e5c6a8;
  border-radius: 0 0 150px 155px; */




/* responsive */
@media (max-width: 1024px) {
 .hero img {
    display: none !important;
  }
}
@media (max-width: 1024px) {
  .hero {
    margin-top:22%; 
    flex-direction: column;
    padding: 40px 6%;
    text-align: center;
  }

  .hero-image {
    margin-left: 0;
    margin-top: 30px;
    max-width: 100%;
  }

  .hero h1 {
    font-size: 2em;
  }

  .hero p {
    font-size: 16px;
  }
}

@media (max-width: 768px) {
  .section {
    padding: 60px 5%;
  }

  .titrecoaaching,
  .questionsFréquentes {
    font-size: 2em;
  }

  .hero h1 {
    font-size: 1.7em;
  }

  .hero p {
    font-size: 15px;
  }

  .hero-image {
    border-radius: 0 0 120px 120px;
    clip-path: polygon(
      0% 0%, 
      100% 0%, 
      100% 85%, 
      50% 100%, 
      0% 85%
    );
  }
}

@media (max-width: 480px) {
  .hero {
    padding: 30px 4%;
  }

  .titrecoaaching,
  .questionsFréquentes {
    font-size: 1.6em;
  }

  .hero h1 {
    font-size: 1.4em;
  }

  .hero p {
    font-size: 14px;
  }

  .hero-image {
    border-radius: 0 0 100px 100px;
    clip-path: polygon(
      0% 0%, 
      100% 0%, 
      100% 90%, 
      50% 100%, 
      0% 90%
    );
  }
}

/* Les cartes */
/* 🔹 COACHING CARDS */
.coaching-container {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); /* Crée une grille réactive */
  gap: 5%;  /* Espacement entre les cartes */
  margin-top: 3%;
  justify-items: center; /* Centre les cartes dans leur cellule */
}
/* Style des cartes */
.coaching-card {
  background: white;
  padding: 30px; /* Espacement intérieur */
  border-radius: 15px;
  box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.1);
  text-align: center; /* Centrer le texte par défaut pour tout */
  width: 100%; /* Utilise la largeur de la cellule */
  min-height: 350px; /* Hauteur minimale pour uniformiser */
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  transition: transform 0.3s ease; /* Ajout d'une transition fluide */
}
.coaching-card h3 {
  font-size: 1.3rem;            /* Taille du texte */
  font-weight: bold;            /* Texte en gras */
  text-align: center;           /* Centrer le texte */
  
  margin-top: 0;                /* Pas de marge au-dessus */
  margin-bottom: 30px;          /* Plus d'espace en dessous */
  
  max-width: 90%;               /* Largeur max relative */
  margin-left: auto;
  margin-right: auto;           /* Centrage horizontal avec marge automatique */
  
  /* Limiter à 2 lignes max avec "..." si trop long */
  display: -webkit-box;
  -webkit-box-orient: vertical;
  overflow: hidden;             /* Cacher le dépassement */
  text-overflow: ellipsis;      /* Ajouter les "..." */
  white-space: normal;          /* Permet la coupure sur plusieurs lignes */
}

.coaching-card ul {
  text-align: left;       /* Aligne le texte des <li> à droite */
  list-style-position: inside; /* Positionne les puces à l’intérieur pour meilleur contrôle */
  padding-left: 0;         /* Supprime l'espace à gauche */
  margin-left: 0;   
  margin-bottom: 15px;
  /* Supprime la marge à gauche */
}
.coaching-card li {
  margin-bottom: 15px;
}
.coaching-card p:last-of-type {
  margin-bottom: 20px; /* ou 1rem selon ton goût */
}
.coaching-card p {
  flex-grow: 1;
  font-size: 18px;
  text-align: left; /* Aligner le texte du paragraphe à droite */
}

.coaching-card button {
  margin-top: auto; /* Positionne le bouton en bas de la carte */
  text-align: right; /* Aligner le bouton à droite */
padding: 8px 14px;
  font-size: 0.85rem;
  border-radius: 6px;
}

.coaching-card:hover {
  transform: scale(1.05); /* Effet de survol */
}

/* --- Responsive --- */

@media (max-width: 1024px) {
  .coaching-container {
    gap: 5%; /* Réduction de l'espacement pour les écrans plus petits */
  }
}

@media (max-width: 768px) {
  .coaching-container {
    grid-template-columns: 1fr; /* Une seule colonne sur petits écrans */
    gap: 10px; /* Moins d'espace entre les cartes */
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
  transition: max-height 0.3s ease-out, opacity 0.3s ease-out;
  overflow: hidden;
}
/* Quand on entre */
.slide-enter-from, .slide-leave-to {
  max-height: 0;
  opacity: 0;
}
/* Quand on quitte */
.slide-enter-to, .slide-leave-from {
  max-height: 200px; /* Ajustez cette valeur selon la hauteur du contenu */
  opacity: 1;
}
/* 🔹 BOUTONS */
.cta-button {
  background: #ff7f00;
  color: white;
  padding: 10px 18px;
  font-size: 1.2rem;
  border-radius: 8px;
  transition: 0.4s;
  text-decoration: none; /* Supprime le soulignement */
  display: inline-block; /* Évite le léger décalage vertical */
  text-align: center; /* Centre le texte */
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