<template>
    <section id="formations">
      <!-- 🎯 HERO SECTION -->
      <div class="hero">
        <div class="text-content">
          <h1>Nos Formations pour Devenir un Pro de la Vente</h1>
<strong>
  <h3>Formez-vous aux Techniques de Vente Modernes avec
    <br>
  <span>VendeurPro</span></h3>
</strong>          
<p>Bootcamps intensifs, formation certifiante et modules à la carte pour booster <br> vos compétences en vente.</p>
        </div>
        <img src="../assets/images/baniere.jpeg" alt="Formation en vente" class="hero-image" />
      </div>
      </section>

    <!-- 🎯 NOS FORMATIONS -->

<section class="formations">
  <h2>Choisissez la Formation qui Vous Correspond</h2>
  <p>📘 Découvrez nos bootcamps, notre formation certifiante et nos modules à la carte.</p>
  
  <!-- <div class="formation-list">
    <div v-for="(formation, index) in formations" :key="index" class="formation-card">
      <img :src="formation.img" alt="Formation en vente" class="formation-image" />
      <div class="formation-content">
        <h3>{{ formation.title }}</h3>
        <p><strong>Objectifs :</strong> {{ formation.objective }}</p>
        <p><strong>Public cible :</strong> {{ formation.audience }}</p>
        <p><strong>Durée :</strong> {{ formation.duration }}</p>


        <router-link to="/actualites" class="cta-button">📖 Voir le Programme</router-link>
</div>
    </div>
     </div> -->



     <div class="container">
    <!-- Bootcamps -->
    <section>
      <h4>Botcamp</h4>
      <div class="card-grid">
        <div class="card">
          <h3>L'Art de Vendre</h3>
          <p>
            <strong>
              Objectifs :
            </strong>
            Acquérir les techniques de vente essentielles pour booster vos ventes.
          </p>
        </div>
        
        <div class="card">
          <h3>Vente Digitale et E-commerce</h3>
          <p>
            <strong>
              Objectifs :
            </strong>
            
            Maîtrisez la vente en ligne et le e-commerce.</p>
        </div>
        <div class="card">
          <h3>Vente de Produits</h3>
          <p>
            <strong>
              Objectifs :
            </strong>
            Apprenez à vendre efficacement aux entreprises.</p>
        </div>
      </div>
    </section>

    <!-- Formations Certifiantes -->
    <section>
      <h4>Formations Certifiantes (90 jours)</h4>
      <div class="card-grid">
        <div class="card">
          <h3>Pro Vendeur BtoC</h3>
          <p>Maîtrisez la vente en boutique, sur les réseaux sociaux et WhatsApp.</p>
        </div>
        <div class="card">
          <h3>Closer BtoB</h3>
          <p>Devenez un expert en vente aux entreprises et prospection commerciale.</p>
        </div>
        <div class="card">
          <h3>Social Selling Master</h3>
          <p>Maîtrisez la vente via TikTok, WhatsApp et autres canaux digitaux.</p>
        </div>
      </div>
    </section>

    <!-- Modules à la Carte -->
    <section>
      <h4>Modules à la Carte</h4>
      <div class="card-grid">
        <div class="card">
          <h3>Négociation Commerciale</h3>
          <p>Améliorez vos techniques de persuasion et d’accord gagnant-gagnant.</p>
        </div>
        <div class="card">
          <h3>Répondre aux Objections</h3>
          <p>Savoir transformer un « non » en opportunité de vente.</p>
        </div>
        <div class="card">
          <h3>Prospection terrain</h3>
          <p>Stratégies de terrain pour trouver et convertir des clients locaux.</p>
        </div>
        <div class="card">
          <h3>Utilisation de WhatsApp</h3>
          <p>Utiliser WhatsApp comme outil de vente et de relation client.</p>
        </div>
        <div class="card">
          <h3>Pitch Commercial</h3>
          <p>Créer un pitch percutant pour convaincre en moins d’une minute.</p>
        </div>
        <div class="card">
          <h3>Fidélisation Client</h3>
          <p>Construire une relation solide et durable après la première vente.</p>
        </div>
      </div>
    </section>
  </div>



     
    </section>



<!-- 🎤 TÉMOIGNAGES -->
<section class="temoignages">
  <h2> Ils Ont Transformé Leurs Ventes avec VendeurPro</h2>
  <div class="testimonial-container">
    <button @click="prevTestimonial" class="nav-btn">❮</button>
    <div class="testimonial">
      <img :src="testimonials[currentIndex].img" alt="Témoignage" />
      <p>"{{ testimonials[currentIndex].text }}"</p>
      <h4>- {{ testimonials[currentIndex].author }}</h4>
    </div>
    <button @click="nextTestimonial" class="nav-btn">❯</button>
  </div>
  <!-- <button class="cta-button">🚀 Rejoignez-les</button> -->
  <router-link to="/contact" class="cta-button"> Rejoignez-les</router-link>
</section>

<!-- Section FAQ -->
<section id="faq" class="faq-section">
  <h2>Questions Fréquentes</h2>
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
  <!-- <button class="cta-button">📩 Contactez-Nous</button> -->
   
  <router-link to="/contact" class="cta-button">📩 Contactez-Nous</router-link>

</section>
</template>
 
<script setup>
import { ref, onMounted, onUnmounted } from "vue";


//Données réactives pour formations


const formations = ref([
      {
        img: "/images/baniere.jpeg",
        title: "Bootcamp : L'Art de Vendre",
        objective: "Acquérir les techniques de vente essentielles pour booster vos ventes.",
        audience: "Commerçants, freelances, porteurs de projets",
        duration: "3 jours intensifs"
      },
      {
        img: "/images/baniere.jpeg",
        title: "Vente Digitale et E-commerce",
        objective: "Maîtrisez la vente en ligne et le e-commerce.",
        audience: "Commerçants en ligne, entrepreneurs digitaux",
        duration: "3 jours intensifs"
      },
      {
        img: "/images/baniere.jpeg",
        title: "Vente B2B : Techniques pour Vendre aux Entreprises",
        objective: "Apprenez à vendre efficacement aux entreprises.",
        audience: "Vendeurs B2B, consultants",
        duration: "3 jours intensifs"
      },
      {
        img: "/images/baniere.jpeg",
        title: "Formation Certifiante : Devenez un Expert en Vente",
        objective: "Maîtriser toutes les techniques de vente modernes.",
        audience: "Vendeurs, commerciaux, entrepreneurs",
        duration: "3 mois"
      },
      {
        img: "/images/baniere.jpeg",
        title: "Modules à la Carte : Vente & Négociation",
        objective: "Formation flexible sur la prospection, négociation et plus encore.",
        audience: "Tout public",
        duration: "1 journée par module"
      },


      {
    img: "/images/baniere.jpeg",
    title: "Coaching Vente et Persuasion",
    objective: "Améliorez vos compétences en persuasion et en closing.",
    audience: "Entrepreneurs, commerciaux, négociateurs",
    duration: "2 jours intensifs"
  }
    ]);
    
    const voirProgramme = (title) => {
      alert(`Vous allez voir le programme de la formation : ${title}`);
    };


const testimonials = ref([
  { img: "/images/baniere.jpeg", text: "J'ai augmenté mes ventes de 30% en 3 mois !", author: "Mamadou Diallo" },
  { img: "/images/baniere.jpeg", text: "Une formation ultra-pratique qui a boosté mon business.", author: "Aminata Sow" },
  { img: "/images/baniere.jpeg", text: "Enfin une formation qui enseigne des techniques concrètes.", author: "Serigne Ndiaye" },
]);

const currentIndex = ref(0);
const faqItems = ref([
  { question: "Qui peut participer à vos formations ?", answer: "Nos formations sont ouvertes à tous.", isOpen: false },
  { question: "Quel est le format des formations ?", answer: "Nous proposons des formations en ligne et en présentiel.", isOpen: false },
  { question: "Y a-t-il un suivi après la formation ?", answer: "Oui, nous offrons du coaching après la formation.", isOpen: false },
  { question: "Comment puis-je m'inscrire ?", answer: "Inscrivez-vous via notre site ou contactez-nous.", isOpen: false },
]);








// 🔹 Fonctions pour gérer les témoignages
const nextTestimonial = () => {
  currentIndex.value = (currentIndex.value + 1) % testimonials.value.length;
};

const prevTestimonial = () => {
  currentIndex.value = (currentIndex.value - 1 + testimonials.value.length) % testimonials.value.length;
};

// 🔹 Fonction pour gérer la FAQ
const toggleFAQ = (index) => {
  faqItems.value = faqItems.value.map((item, i) => ({
    ...item,
    isOpen: i === index ? !item.isOpen : false,
  }));
};

// 🔹 Gestion du slider automatique des témoignages
let interval = null;
onMounted(() => {
  interval = setInterval(nextTestimonial, 5000);
});
onUnmounted(() => {
  clearInterval(interval);
});
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
    gap: 40px;
    background: linear-gradient(to right, #003366, #ff7f00);
    color: white;
    padding: 60px 5%;
    
  }
.hero-image {
    max-width: 45%;
    /* border-radius: 20px; */
    box-shadow: 5px 5px 15px rgba(0, 0, 0, 0.2);
  
    border-bottom-left-radius: 190px; /* Arrondir le coin supérieur gauche */

    padding: 15px; /* Réduit l'espace interne de l'image */
  }
/* ✅ Stylisation des Titres */
.hero h1{
  color: #fff;
  font-size: 2.8em; /* Taille du titre */
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

.formation , p {
  text-align: center;
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
  color: #222;
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
}

.card:hover {
  transform: translateY(-4px);
  box-shadow: 0 12px 24px rgba(0, 0, 0, 0.1);
}

.card h3 {
  margin-bottom: 0.75rem;
  font-size: 1.2rem;
  color: #000
}

.card p {
  color: #555;
  font-size: 15px;
  line-height: 1.2;
  text-align: justify;
}









/* 🔹 TÉMOIGNAGES */
.temoignages {
  text-align: center;
  padding: 60px 5%;
  background: #003366;
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

  font-weight: bold; /* Gras pour le titre */
  margin: 10px 0; /* Espacement vertical entre les paragraphes */

}
.testimonial {
  background: white;
  color: black;
  padding: 90px;
  border-radius: 10px;
  max-width: 400%;
  text-align: center;
}
.testimonial img {
  width: 100px;
  height: 100px;
  border-radius: 50%;
  object-fit: cover;

  margin-left: 43%;
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
  