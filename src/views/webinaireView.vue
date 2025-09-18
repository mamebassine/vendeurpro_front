<template>
    <section id="webinaires">
      <!-- 🎯 HERO SECTION -->
      <div class="hero">
        <div class="text-content">
          <h1> Apprenez les Secrets des Pros de la Vente avec Nos Webinaires Gratuits</h1>
          <p>Découvrez des techniques éprouvées pour booster vos ventes et transformez votre business.</p>
          <!-- <button class="cta-button">🎓 Inscrivez-vous au Prochain Webinaire</button> -->

          <router-link to="/AjoutCandidat" class="cta-button">Inscrivez-vous au Prochain Webinaire</router-link>

        </div>
        <img src="../assets/images/photo8.jpg" alt="Webinaire en action" class="hero-image" />
      </div>
  
      <!-- 🎯 POURQUOI PARTICIPER -->
      <div class="section why-webinaires">
        <h2>Pourquoi nos webinaires font la différence ?</h2>
        <div class="why-list">
          <div class="why-card" v-for="(point, index) in whyPoints" :key="index">
            <i :class="point.icon"></i>
            <h3>{{ point.title }}</h3>
            <p>{{ point.text }}</p>
          </div>
        </div>
        <!-- <button class="cta-button">📢 Inscrivez-vous Maintenant</button> -->

        <router-link to="/AjoutCandidat" class="cta-button">Inscrivez-vous Maintenant</router-link>

      </div>
  
      <!-- 🎯 PROCHAINS WEBINAIRES -->
      <!-- <div class="section upcoming-webinaires">
        <h2>Découvrez nos prochains webinaires</h2>
        <div class="webinaire-list">
          <div v-for="(webinaire, index) in webinaires" :key="index" class="webinaire-card">
            <h3>{{ webinaire.title }}</h3>
            <p><strong>Date :</strong> {{ webinaire.date }}</p>
            <p><strong>Durée :</strong> {{ webinaire.duration }}</p>

            <router-link to="/AjoutCandidat" class="cta-button">S'inscrire</router-link>

          </div>
        </div>
      </div> -->
  

<div class="section upcoming-webinaires"> 
    <h2>Découvrez nos prochains webinaires</h2>
    
    <div class="webinaire-list">
      <div v-if="webinaires.length === 0">
        <p>Aucun webinaire à venir pour le moment.</p>
      </div>
<div v-for="(webinaire, index) in webinairesAFicher" :key="index" class="webinaire-card">

<!-- <div v-for="(webinaire, index) in webinaires.slice(0, 3)" :key="index" class="webinaire-card"> -->
<h2>{{ webinaire.titre }}</h2>
<p v-if="webinaire.date_debut && isValidDate(webinaire.date_debut)">
  <strong>Date :</strong> {{ formatDate(webinaire.date_debut) }}
</p>
<p v-else>Date non disponible</p>


<p><strong>Durée :</strong> {{ webinaire.duree }} h</p>

<router-link
              :to="{ path: '/AjoutCandidat', query: { formation_id: webinaire.id } }"
              class="cta-button"
              @click="() => console.log('➡️ ID webinaire envoyé :', webinaire.id)"
            >
              S'inscrire
            </router-link>

      </div>
    </div>
  </div>

  <!-- 🎯 TÉMOIGNAGES -->
      <div class="section temoignages">
        <h2> Ce que disent nos participants</h2>
        <div class="testimonial-container">
          <button @click="prevTestimonial" class="nav-btn">❮</button>
          <div class="testimonial-card">
            <img :src="testimonials[currentIndex].img" alt="Témoignage" class="testimonial-img" />
            <p>"{{ testimonials[currentIndex].text }}"</p>
            <h4>- {{ testimonials[currentIndex].author }}</h4>
          </div>
          <button @click="nextTestimonial" class="nav-btn">❯</button>
        </div>
        <!-- <button class="cta-button">🚀 Rejoignez-les</button> -->

        <router-link to="/contact" class="cta-button">Rejoignez-les</router-link>

      </div>
  
   <!-- 🎯 FAQ  n2--> 
<div class="section faq">
  <h2> Questions fréquentes</h2>
  <div class="faq-container">
    <div v-for="(item, index) in faqItems" :key="index" class="faq-item">
      <h3 @click="toggleFAQ(index)" class="faq-title">
        <span>{{ item.question }}</span>
        <!-- Icône comme dans FAQ n°1 -->
        <i :class="{'fas fa-chevron-down': !item.isOpen, 'fas fa-chevron-up': item.isOpen}"></i>
      </h3>
      <transition name="fade">
        <p v-if="item.isOpen" class="faq-answer">{{ item.answer }}</p>
      </transition>
    </div>
  </div>

  <!-- <button class="cta-button">📩 Inscrivez-vous Maintenant</button> -->
  <router-link to="/contact" class="cta-button">📩 Inscrivez-vous Maintenant</router-link>
</div>

  </section>
  </template>
  
  <script setup>
  import { ref, onMounted, onUnmounted } from "vue";
  import api from '@/services/api'; // Remplace par le bon chemin de ton instance axios

  // 🔹 Pourquoi participer ?
  const whyPoints = ref([
  { icon: "fas fa-comments", title: "Interactivité", text: "Posez vos questions en direct et obtenez des réponses personnalisées." },
  { icon: "fas fa-user-graduate", title: "Expertise", text: "Des formateurs expérimentés et reconnus." },
  { icon: "fas fa-gift", title: "Gratuité", text: "Accédez à des conseils de qualité sans engagement." },
  { icon: "fas fa-tools", title: "Contenu Pratique", text: "Des techniques immédiatement applicables." }

  ]);
  
  // 🔹 Prochains webinaires
//   const webinaires = ref([
//   { title: "Les 5 Techniques pour Booster Vos Ventes", date: "09 Juin 2025, 21h GMT", duration: "1h" },
//   { title: "Comment Vendre en Ligne comme un Pro", date: "11 Juillet 2025, 21h GMT", duration: "1h" },
//   { title: "Les Secrets de la Vente B2B", date: "29 Août 2025, 21h GMT", duration: "1h" }
// ])

  
const webinaires = ref([]);

// Exemple simple de formatDate
import { defineProps } from 'vue';
const props = defineProps(['webinaire']);

const isValidDate = (dateStr) => {
  const date = new Date(dateStr);
  return date instanceof Date && !isNaN(date);
};

const formatDate = (dateStr) => {
  const date = new Date(dateStr);
  const jour = date.getDate().toString().padStart(2, '0');
  const mois = date.toLocaleDateString('fr-FR', { month: 'long' });
  const annee = date.getFullYear();
  const heure = date.getHours().toString().padStart(2, '0');
  return `${jour} ${mois} ${annee}, ${heure}h GMT`;
};



const getWebinaires = async () => {
  try {
    const res = await api.get('/webinaire');

    console.log("Tous les webinaires reçus :", res.data); // 👈 vérifie ici

    const allWebinaires = res.data.map(f => {
      console.log("Catégorie du webinaire :", f.categorie?.nom); // 👈 vérifie ici aussi
      return { ...f, expanded: false };
    });

    // ✅ Filtrage tolérant
    webinaires.value = allWebinaires.filter(f =>
      f.categorie?.nom?.toLowerCase().includes('webinaire')
    );

  } catch (e) {
    console.error("Erreur lors du chargement des webinaires :", e);
    alert("Erreur lors du chargement des webinaires");
  }
};

onMounted(() => {
  getWebinaires();
});




import { computed } from 'vue';

const webinairesAFicher = computed(() => {
  if (webinaires.value.length <= 3) {
    return webinaires.value;
  }

  const firstTwo = webinaires.value.slice(0, 2);
  const last = webinaires.value[webinaires.value.length - 1];

  // Empêche les doublons si le dernier est déjà parmi les deux premiers
  const alreadyIncluded = firstTwo.some(w => w.id === last.id);
  return alreadyIncluded ? firstTwo : [...firstTwo, last];
});





  // 🔹 Témoignages avec slider automatique
  const testimonials = ref([
    { img: "/images/photo2.jpg", text: "J'ai augmenté mes ventes de 20% après ce webinaire !", author: "Sophie L." },
    { img: "/images/baniere2.jpeg", text: "Des conseils très pratiques et applicables.", author: "Marc D." },
    { img: "/images/vendeur22.jpg", text: "Je recommande à tous les entrepreneurs.", author: "Fatou N." }
  ]);
  
  const currentIndex = ref(0);
  
  const nextTestimonial = () => {
    currentIndex.value = (currentIndex.value + 1) % testimonials.value.length;
  };
  
  const prevTestimonial = () => {
    currentIndex.value = (currentIndex.value - 1 + testimonials.value.length) % testimonials.value.length;
  };
  
  let interval = null;
  onMounted(() => {
    interval = setInterval(nextTestimonial, 5000);
  });
  onUnmounted(() => {
    clearInterval(interval);
  });
  
  // 🔹 FAQ interactive
  const faqItems = ref([
    { question: "Les webinaires sont-ils vraiment gratuits ?", answer: "Oui, ils sont entièrement gratuits.", isOpen: false },
    { question: "Dois-je avoir de l'expérience en vente ?", answer: "Non, ils sont ouverts à tous.", isOpen: false },
    { question: "Comment puis-je m'inscrire ?", answer: "Remplissez simplement le formulaire d'inscription.", isOpen: false },
    { question: "Que se passe-t-il après le webinaire ?", answer: "Vous recevrez un enregistrement et des ressources.", isOpen: false }
  ]);
  
  const toggleFAQ = (index) => {
    faqItems.value = faqItems.value.map((item, i) => ({
      ...item,
      isOpen: i === index ? !item.isOpen : false
    }));
  };
  
  // 🔹 Formulaire de contact
  const form = ref({
    fullName: "",
    email: "",
    phone: "",
    message: ""
  });
  
  const sendMessage = () => {
    alert("Message envoyé !");
    form.value = { fullName: "", email: "", phone: "", message: "" };
  };
  </script>

  
  
 <style scoped>
  
  #webinaires{
    margin-top: 9%;
  }

  .why-card, .webinaire-card, .testimonial-card {
    min-height: 280px;
}
/* 🔹 Styles Généraux */
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font-family: "Poppins", sans-serif;
  background-color: #f4f7fc;
  color: #333;
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
.hero h1 {
  font-size: 2.4em; /* Taille du titre */
  margin: 0 0 20px 0; /* Espacement sous le titre */
     font-weight: bold; /* Gras pour le titre */
     margin-bottom: 5px;
}
h2{
 /* font-size: 2.3rem;
  line-height: 1.3;
  margin-bottom: 2%; */
font-size: 2em;
  color: #003366;
  margin-bottom: 30px;
  font-weight: bold;
}

.hero p {
  font-size: 17px; /* Taille du texte du paragraphe */
     margin: 20px 0; /* Espacement vertical entre les paragraphes */
     font-weight: arial; /* Gras pour le titre */

}

.hero .cta-button {
  background: #ff7f00;
  color: #fff;
  padding: 12px 25px;
  font-size: 1rem;
  font-weight: bold;
  border-radius: 8px;
  border: none;
  cursor: pointer;
  transition: 0.3s;
  /* margin-top: 12%; */
}

.hero .cta-button:hover {
  background: #003366;
}

.cta-button{
      margin-top: 2%;

}

.hero img {
  max-width: 54%;
  border-radius: 20px;
  box-shadow: 5px 5px 15px rgba(0, 0, 0, 0.2);
}

/* 🔹 SECTIONS GÉNÉRALES */
.section {
  padding: 50px 10%;
  text-align: center;
}

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
    text-align: center;
    padding: 40px 6%;
  }

  .hero img {
    max-width: 80%;
    margin-top: 30px;
  }

  .hero h1 {
    font-size: 2em;
  }

  .hero p {
    font-size: 16px;
  }

  .hero .cta-button {
    font-size: 1rem;
    padding: 10px 20px;
  }

  .section {
    padding: 40px 6%;
  }

  .why-card, .webinaire-card, .testimonial-card {
    min-height: auto;
  }
}

@media (max-width: 768px) {
  .hero h1 {
    font-size: 1.8em;
  }

  .hero p {
    font-size: 15px;
  }

  h2 {
    font-size: 1.7em;
  }

  .hero img {
    max-width: 90%;
  }

  .hero .cta-button {
    font-size: 0.95rem;
    padding: 10px 18px;
  }
}

@media (max-width: 480px) {
  .hero {
    padding: 30px 4%;
  }

  .hero h1 {
    font-size: 1.5em;
  }

  .hero p {
    font-size: 14px;
  }

  .hero .cta-button {
    font-size: 0.9rem;
    padding: 8px 16px;
  }

  h2 {
    font-size: 1.5em;
  }

  .hero img {
    max-width: 100%;
  }
}

/* 🔹 Pourquoi nos webinaires font la différence ? */

/* 🔹 Conteneur des cartes Pourquoi participer */
/* 🔹 Conteneur des cartes Pourquoi participer */
.why-list { 
  display: flex;
  flex-wrap: wrap; 
  justify-content: center;
  gap: 20px; 
  margin-top: 30px;
  padding: 0 10px; 
  box-sizing: border-box;
}

/* 🔹 Style des cartes */
.why-card {
  background: white;
  padding: 15px 15px 15px; /* padding uniforme */
  border-radius: 20px;
  box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.1);
  text-align: center;
  flex: 0 1 240px;
  max-width: 300px;
  box-sizing: border-box;
  transition: transform 0.3s ease-in-out;

  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
}

/* 🔹 Icône */
.why-card i {
  font-size: 3rem;
  color: #ff7f00;
  margin-bottom: 12px; /* espace icône → titre */
}

/* 🔹 Titre */
.why-card h3 {
  font-size: 1.1rem;
  color: #003366;
  margin-bottom: 10px; /* espace titre → texte */
  font-weight: bold;
  text-align: center;
}

/* 🔹 Texte */
.why-card p {
  font-size: 0.95rem;
  color: #555;
  line-height: 1.4;
  text-align: center;
  margin: 0; /* pas de marge en bas */
}

/* 🔹 Responsive */
@media (max-width: 768px) {
  .why-card {
    flex: 1 1 90%;
    max-width: 100%;
    padding: 12px;
  }

  .why-card i {
    margin-bottom: 10px;
  }

  .why-card h3 {
    margin-bottom: 8px;
  }
}



/* 🔹 PROCHAINS WEBINAIRES - Conteneur des cartes */
.webinaire-list {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 30px; /* réduit le gap pour éviter débordement */
  margin-top: 40px;
  padding: 0 10px; /* padding horizontal pour éviter le débordement */
  box-sizing: border-box;
}

/* 🔹 Style des cartes */
.webinaire-card {
  background: white;
  padding: 20px;
  border-radius: 20px;
  box-shadow: 0px 6px 16px rgba(0, 0, 0, 0.1);
  text-align: center;
  transition: transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out;
  width: 100%;
  max-width: 300px; /* limite la largeur */
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

/* 🔹 Bordure légère au clic */
.webinaire-card:active {
  border-color: #ff7f00;
  box-shadow: 0px 6px 16px rgba(255, 127, 0, 0.4);
}

/* 🔹 Titre */
.webinaire-card h2 {
  font-size: 1rem;
  color: #000;
  margin-bottom: 8px;
  font-weight: bold;
  word-wrap: break-word; /* permet au texte long de revenir à la ligne */
}

/* 🔹 Texte */
.webinaire-card p {
  font-size: 0.85rem; /* corrigé O -> 0 */
  color: #000;
  margin: 5px 0;
  text-align: left;
  word-wrap: break-word; /* texte long ne déborde plus */
}

/* 🔹 Bouton */
.cta-button {
  display: inline-block;
  background: #ff7f00;
  color: white;
  padding: 10px 15px;
  border-radius: 10px;
  font-size: 0.85rem;
  margin-top: 10px;
  text-decoration: none;
  font-weight: bold;
  transition: background 0.3s, transform 0.2s;
  word-wrap: break-word;
}

.cta-button:hover {
  background: #003366;
  transform: scale(1.05);
}

/* 🔹 Responsive */
@media (max-width: 768px) {
  .webinaire-card {
    max-width: 90%; /* prend 90% de la largeur sur mobile */
    padding: 15px;
  }
  .webinaire-list {
    gap: 20px;
    padding: 0 5%;
  }
}



/* 🔹 TÉMOIGNAGES - Conteneur principal */





/* 🔹 CONTENEUR TÉMOIGNAGES */
.testimonial-container {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 30px;
  margin-top: 40px;
  flex-wrap: wrap; /* pour responsive */
  padding: 0 10px;
  box-sizing: border-box;
}

/* 🔹 CARTE DE TÉMOIGNAGE */
.testimonial-card {
  background: white;
  padding: 15px 60px; /* ➕ plus d’espace intérieur */
  border-radius: 20px;
  text-align: center;
  box-shadow: 0px 8px 18px rgba(0, 0, 0, 0.1);
  width: 100%;
   max-width: 1016px; /* 🔹 encore plus large (avant 700px) */
  min-width: 350px; /* garde un minimum correct sur petit écran */
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  box-sizing: border-box;
  transition: transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out;
}

.testimonial-card:hover {
  transform: translateY(-5px) scale(1.02);
  box-shadow: 0px 12px 24px rgba(0, 0, 0, 0.15);
}

/* 🔹 IMAGE DU TÉMOIGNAGE */
.testimonial-img {
  width: 160px;
  height: 160px;
  border-radius: 50%;
  object-fit: cover;
  margin: 0 auto 20px auto; /* centré avec marge en bas */
  border: 2px solid #ff7f00;
  display: block;
}

/* 🔹 TEXTE DU TÉMOIGNAGE */
.testimonial-card p {
  font-size: 1.2rem;
  color: #555;
  font-style: italic;
  margin-bottom: 15px;
  text-align: center;
  line-height: 1.6;
  max-width: 600px; /* 🔹 garde un texte lisible au centre */
}

/* 🔹 AUTEUR DU TÉMOIGNAGE */
.testimonial-card h4 {
  font-size: 1.15rem;
  color: #333;
  font-weight: bold;
  margin-top: 0;
}

/* 🔹 BOUTONS NAVIGATION */
.nav-btn {
  background: transparent;
  border: none;
  font-size: 2rem;
  cursor: pointer;
  color: #ff7f00;
  transition: color 0.3s, transform 0.2s;
}

.nav-btn:hover {
  color: #e06b00;
  transform: scale(1.2);
}

/* 🔹 BOUTON CTA */
.cta-button {
  display: inline-block;
  background: #ff7f00;
  color: white;
  padding: 12px 25px;
  border-radius: 10px;
  font-size: 1.1rem;
  margin-top: 20px;
  text-decoration: none;
  font-weight: bold;
  transition: background 0.3s, transform 0.2s;
}

.cta-button:hover {
  background: #003366;
  transform: scale(1.05);
}

/* 🔹 RESPONSIVE */
@media (max-width: 1024px) {
  .testimonial-container {
    flex-direction: column;
    gap: 25px;
  }

  .testimonial-card {
    max-width: 600px;
    min-width: 300px;
    padding: 25px 40px;
    margin: 0 auto;
  }

  .testimonial-img {
    width: 140px;
    height: 140px;
  }
}

@media (max-width: 768px) {
  .testimonial-card {
    width: 100%;
    max-width: 100%;
    padding: 20px;
  }

  .testimonial-img {
    width: 120px;
    height: 120px;
  }

  .cta-button {
    font-size: 1rem;
    padding: 12px 20px;
  }
}

@media (max-width: 480px) {
  .testimonial-card p {
    font-size: 1rem;
  }

  .testimonial-card h4 {
    font-size: 1rem;
  }

  .nav-btn {
    font-size: 1.6rem;
  }

  .cta-button {
    font-size: 0.9rem;
    padding: 10px 16px;
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





/* Assurer un espacement uniforme entre les sections */
.section {
  padding: 20px 5%; /* Uniformiser l’espacement interne */
  min-height: 300px; /* Ajuste selon ton besoin */
}



  </style>
  