<template>
    <section id="formations">
      <!-- 🎯 HERO SECTION -->
      <div class="hero">
        <div class="text-content">
          <h1>Nos Formations pour Devenir un Pro de la Vente</h1>
          <h3>🚀 Formez-vous aux Techniques de Vente Modernes avec <span>VendeurPro</span></h3>
          <p>🎯 Bootcamps intensifs, formation certifiante et modules à la carte pour booster vos compétences en vente.</p>
        </div>
        <img src="../assets/images/baniere.jpeg" alt="Formation en vente" class="hero-image" />
      </div>
      </section>

    <!-- 🎯 NOS FORMATIONS -->

<section class="formations">
  <h2>✨ Choisissez la Formation qui Vous Correspond</h2>
  <p>📘 Découvrez nos bootcamps, notre formation certifiante et nos modules à la carte.</p>
  
  <div class="formation-list">
    <div v-for="(formation, index) in formations" :key="index" class="formation-card">
      <img :src="formation.img" alt="Formation en vente" class="formation-image" />
      <div class="formation-content">
        <h3>{{ formation.title }}</h3>
        <p><strong>Objectifs :</strong> {{ formation.objective }}</p>
        <p><strong>Public cible :</strong> {{ formation.audience }}</p>
        <p><strong>Durée :</strong> {{ formation.duration }}</p>
        <!-- <button class="cta-button">📖 Voir le Programme</button> -->

       <!-- 🔗 Bouton de navigation vers la page du programme détaillé -->

        <router-link to="/actualites" class="cta-button">📖 Voir le Programme</router-link>


</div>
    </div>
     </div>
</section>

<!-- 🎤 TÉMOIGNAGES -->
<section class="temoignages">
  <h2>🚀 Ils Ont Transformé Leurs Ventes avec VendeurPro</h2>
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
  <router-link to="/contact" class="cta-button">🚀 Rejoignez-les</router-link>


</section>

<!-- ❓ FAQ -->
<section class="faq">
  <h2>❓ Questions Fréquentes</h2>
  <div class="faq-container">
    <div v-for="(item, index) in faqItems" :key="index" class="faq-item">
      <h3 @click="toggleFAQ(index)" class="faq-title">{{ item.question }}</h3>
      <transition name="fade">
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

// 🔹 Données réactives
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



// const formations = ref([
//   { img: "/images/baniere.jpeg", title: "Bootcamp : L'Art de Vendre", description: "💡 Techniques essentielles pour booster vos ventes." },
//   { img: "/images/baniere.jpeg", title: "Vente Digitale et E-commerce", description: "🛒 Maîtrisez la vente en ligne et le e-commerce." },
//   { img: "/images/baniere.jpeg", title: "Vente B2B : Techniques avancées", description: "📈 Apprenez à vendre aux entreprises efficacement." },
//   { img: "/images/baniere.jpeg", title: "Modules à la Carte : Vente & Négociation", description: "📊 Formation flexible sur la prospection, négociation et plus encore." },
// ]);

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
    border-radius: 20px;
    box-shadow: 5px 5px 15px rgba(0, 0, 0, 0.2);
  }
/* ✅ Stylisation des Titres */
.hero h1 , h2{
    font-size: 2.4em;
    font-weight: bold;
    text-transform: uppercase;
    letter-spacing: 1px;
    margin-bottom: 10px;
    text-align: center;
}


.hero h3 {
    font-size: 2em;
    font-weight: 600;
    color: white;
    margin-bottom: 10px;
}

.hero h3 span {
    color: #ffeb3b;
    font-weight: bold;
}

/* ✅ Stylisation du Paragraphe */
.hero p {
    font-size: 1.2em;
    font-weight: 500;
    line-height: 1.6;
    max-width: 600px;
    margin: 0 auto;
}

.formation , p {
  text-align: center;
  font-size: 1.2em;



}

/*cartes Formations  */
  
  .formation-list {
  display: grid;
  grid-template-columns: repeat(3, 1fr); /* 3 colonnes */
  gap: 20px;
  justify-items: center;
  margin-top: 3%;
  
}
.formation-card {
  background: white;
  padding: 15px;
  border-radius: 15px;
  box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.1);
  text-align: center;
  max-width: 280px;
  width: 100%;
  transition: transform 0.3s ease-in-out;
  text-align: left;
  

  display: flex;
  flex-direction: column;
  justify-content: space-between; /* Équilibre le contenu */
  height: 100%; /* Assure une hauteur uniforme */
}

.formation-image {
  width: 100%;
  max-height: 150px;
  object-fit: cover;
  border-radius: 10px;
}

.formation-card h3 {
  flex-grow: 1; /* Permet aux titres de s'adapter dynamiquement */
  font-size: 1.2em;
  margin: 10px 0;
  margin-left: 5%;
}

.formation-card p {
  flex-grow: 1; /* Assure une hauteur homogène pour les descriptions */
  font-size: 1em;
  margin-left: 5%;

}

.cta-button {
  background: #ff7f00;
  padding: 12px 20px;
  color: white;
  border: none;
  cursor: pointer;
  font-size: 1.1em;
  border-radius: 8px;
  transition: background 0.3s ease-in-out;
  margin-top: auto; /* Force le bouton à rester en bas */
  margin-left: 7%;



  text-decoration: none; /* Supprime le soulignement */
  display: inline-block; /* Évite le léger décalage vertical */
  text-align: center; /* Centre le texte */
}

.cta-button:hover {
  background: #003366;
}

.formation-card:hover{
background: #d5a371;

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

.testimonial {
  background: white;
  color: black;
  padding: 90px;
  border-radius: 10px;
  max-width: 400%;
  text-align: center;
}

.testimonial img {
  width: 80px;
  height: 80px;
  border-radius: 50%;
  object-fit: cover;
}

.nav-btn {
  background: transparent;
  border: none;
  font-size: 2em;
  color: white;
  cursor: pointer;
  transition: transform 0.2s;
}

.nav-btn:hover {
  transform: scale(1.2);
}

/* 🔹 FAQ */
.faq {
  text-align: center;
  padding: 60px 5%;
  margin-top: 3%;

}

.faq-container {
  max-width: 700px;
  margin: auto;
}

.faq-item {
  background: white;
  padding: 15px;
  border-radius: 8px;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
  margin: 10px 0;
  cursor: pointer;
}

.faq-title {
  font-size: 1.2em;
  color: #003366;
}

.faq-answer {
  margin-top: 10px;
  color: #555;
  font-size: 1em;
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
  