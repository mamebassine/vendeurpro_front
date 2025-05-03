<template>
    <section id="webinaires">
      <!-- 🎯 HERO SECTION -->
      <div class="hero">
        <div class="text-content">
          <h1> Apprenez les Secrets des Pros de la Vente avec Nos Webinaires Gratuits</h1>
          <p>Découvrez des techniques éprouvées pour booster vos ventes et transformez votre business.</p>
          <!-- <button class="cta-button">🎓 Inscrivez-vous au Prochain Webinaire</button> -->

          <router-link to="/contact" class="cta-button">🎓 Inscrivez-vous au Prochain Webinaire</router-link>

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

        <router-link to="/contact" class="cta-button">Inscrivez-vous Maintenant</router-link>

      </div>
  
      <!-- 🎯 PROCHAINS WEBINAIRES -->
      <div class="section upcoming-webinaires">
        <h2>Découvrez nos prochains webinaires</h2>
        <div class="webinaire-list">
          <div v-for="(webinaire, index) in webinaires" :key="index" class="webinaire-card">
            <h3>{{ webinaire.title }}</h3>
            <p><strong>🕒 Date :</strong> {{ webinaire.date }}</p>
            <p><strong>⏳ Durée :</strong> {{ webinaire.duration }}</p>

            <router-link to="/contact" class="cta-button">📝 S'inscrire</router-link>

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
  
  // 🔹 Pourquoi participer ?
  const whyPoints = ref([
  { icon: "fas fa-comments", title: "Interactivité", text: "Posez vos questions en direct et obtenez des réponses personnalisées." },
  { icon: "fas fa-user-graduate", title: "Expertise", text: "Des formateurs expérimentés et reconnus." },
  { icon: "fas fa-gift", title: "Gratuité", text: "Accédez à des conseils de qualité sans engagement." },
  { icon: "fas fa-tools", title: "Contenu Pratique", text: "Des techniques immédiatement applicables." }

  ]);
  
  // 🔹 Prochains webinaires
  const webinaires = ref([
    { title: "Les 5 Techniques pour Booster Vos Ventes", date: "09 Juin 2025, 21h", duration: "1h" },
    { title: "Comment Vendre en Ligne comme un Pro", date: "11 Juillet 2024, 21h", duration: "1h" },
    { title: "Les Secrets de la Vente B2B", date: "29 Aout 2024, 21h", duration: "1h" }
  ]);
  
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
  padding: 60px 8%;
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
  background: #ffeb3b;
  color: #003366;
  padding: 12px 25px;
  font-size: 1.2rem;
  font-weight: bold;
  border-radius: 8px;
  border: none;
  cursor: pointer;
  transition: 0.3s;
  /* margin-top: 12%; */
}

.hero .cta-button:hover {
  background: #ffd600;
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






/* 🔹 POURQUOI PARTICIPER */
.why-list {
  display: flex;   /* Utilisation de Grid pour un agencement flexible */
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); /* Ajustement automatique des colonnes */

  justify-content: center;  /* Centrer les cartes horizontalement */
  /* flex-wrap: wrap; */
  margin-top: 70px;  /* Espacement au-dessus de la section */

  gap: 60px;/* Espacement entre les cartes */
}

.why-card {
  background: white;
  padding: 35px; /* Ajout d'espace intérieur pour l'aération */
  border-radius: 20px; /* Coins arrondis pour un design plus doux */
  box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.1);
  text-align: center;
  min-width: 300px; /* Empêche les cartes de devenir trop petites */
  transition: transform 0.3s ease-in-out;
}
.why-card:hover {
  transform: translateY(-5px); /* Légère élévation de la carte pour un effet dynamique */
}
.why-card i {
  font-size: 3.6rem; /* Icône plus grande pour attirer l'attention */
  color: #ff7f00;
  margin-bottom: 16px; /* Espacement sous l'icône */
}
/* 🔹 Titre de la carte */
.why-card h3 {
  font-size: 1.7rem;
  color: #003366;
  margin-bottom: 15px;
  font-weight: bold;
}

/* 🔹 Texte de la carte */
.why-card p {
  font-size: 1rem;
  color: #555;
  line-height: 1.6;
}


/* 🔹 PROCHAINS WEBINAIRES - Conteneur des cartes */
.webinaire-list {
  display: grid; /* Utilisation de Grid pour un alignement uniforme */
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); /* Cartes flexibles */
  gap: 40px; /* Espacement plus grand entre les cartes */
  justify-content: center;
  margin-top: 40px;
  padding: 20px; /* Ajout d'un peu d'espace autour */
}

/* 🔹 Style des cartes */
.webinaire-card {
  background: white;
  padding: 30px; /* Plus d’espace à l’intérieur */
  border-radius: 20px; /* Coins arrondis pour un effet moderne */
  box-shadow: 0px 6px 16px rgba(0, 0, 0, 0.1); /* Ombre plus douce */
  text-align: center;
  transition: transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out;
  min-width: 100px;
  max-width: 310px; /* Taille limite pour un rendu uniforme */
  border: 2px solid transparent; /* Bordure discrète */
}

/* 🔹 Effet de survol interactif */
.webinaire-card:hover {
  transform: translateY(-5px) scale(1.03); /* Légère élévation et agrandissement */
  box-shadow: 0px 8px 18px rgba(0, 0, 0, 0.15); /* Ombre plus marquée */
  border-color: #ff7f00; /* Mise en valeur avec une bordure colorée */
}

/* 🔹 Style du texte */
.webinaire-card h3 {
  font-size: 1.2rem;
  color: #000;
  margin-bottom: 10px;
  text-align: center;

  font-weight: bold; /* Gras pour le titre */

}

.webinaire-card p {
  font-size: 1rem;
  color: #000;
  margin: 5px 0;
}

/* 🔹 Bouton d'inscription */
.cta-button {
  display: inline-block;
  background: #ff7f00;
  color: white;
  padding: 10px 20px;
  border-radius: 10px;
  font-size: 0.6rem;
  margin-top: 15px;
  text-decoration: none;
  font-weight: bold;
  transition: background 0.3s, transform 0.2s;
}

/* 🔹 Effet au survol du bouton */
.cta-button:hover {
  background: #e06b00;
  transform: scale(1.05);
}


/* 🔹 TÉMOIGNAGES - Conteneur principal */
.testimonial-container {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 40px; /* Espacement équilibré */
  margin-top: 40px;
}

/* 🔹 Carte de témoignage */
.testimonial-card {
  background: white;
  padding: 10px;
  border-radius: 15px;
  text-align: center;
  box-shadow: 0px 8px 18px rgba(0, 0, 0, 0.1);
  max-width: 9500px; /* ✅ Largeur maximale définie */
  min-width: 1310px; /* ✅ Évite que la carte soit trop petite */
  width: 100%; /* ✅ S’adapte aux écrans plus petits */
  transition: transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out;

  align-items: center; /* ✅ Centre tous les éléments horizontalement */
  flex-direction: column; /* ✅ Assure un alignement vertical */

}

/* 🔹 Effet au survol */
.testimonial-card:hover {
  transform: translateY(-5px) scale(1.03);
  box-shadow: 0px 12px 24px rgba(0, 0, 0, 0.15);
}

/* 🔹 Image du témoignage */
.testimonial-img {
  width: 160px;
  height: 160px;
  border-radius: 50%; /* Cercle parfait */
  margin-bottom: 15px;
  border: 2px solid #ff7f00; /* Bordure colorée pour l’effet visuel */
  object-fit: cover;
  display: block; /* ✅ Assure que l’image reste un bloc centré */
margin-left: 42%;
}

/* 🔹 Texte du témoignage */
.testimonial-card p {
  font-size: 1.2rem;
  color: #555;
  font-style: italic;
  margin-bottom: 10px;
}

/* 🔹 Auteur du témoignage */
.testimonial-card h4 {
  font-size: 1.1rem;
  color: #333;
  font-weight: bold;
}

/* 🔹 Boutons de navigation */
.nav-btn {
  background: transparent;
  border: none;
  font-size: 2rem;
  cursor: pointer;
  color: #ff7f00;
  transition: color 0.3s, transform 0.2s;
}

/* 🔹 Effet au survol des boutons */
.nav-btn:hover {
  color: #e06b00;
  transform: scale(1.2);
}

/* 🔹 Bouton d'inscription */
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

/* 🔹 Effet au survol du bouton */
.cta-button:hover {
  background: #e06b00;
  transform: scale(1.05);
}
/* RESPONSIVES POUR LES DEUX */
@media (max-width: 1024px) {
  .testimonial-container {
    flex-direction: column;
    gap: 30px;
    padding: 0 20px;
  }

  .testimonial-card {
    min-width: 90%;
    margin: 0 auto;
  }

  .testimonial-img {
    margin-left: auto;
    margin-right: auto;
  }

  .why-list {
    flex-direction: column;
    align-items: center;
    gap: 40px;
  }

  .webinaire-list {
    grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
    padding: 10px;
    gap: 30px;
  }
}

@media (max-width: 768px) {
  .why-list,
  .testimonial-container {
    flex-direction: column;
    align-items: center;
    padding: 0 5%;
  }

  .why-card,
  .webinaire-card,
  .testimonial-card {
    width: 100%;
    min-width: auto;
    max-width: 100%;
    padding: 20px;
  }

  .testimonial-img {
    width: 120px;
    height: 120px;
    margin-left: auto;
    margin-right: auto;
  }

  .why-card h3,
  .webinaire-card h3,
  .testimonial-card h4 {
    font-size: 1.3rem;
  }

  .webinaire-card {
    max-width: 100%;
  }

  .cta-button {
    font-size: 0.95rem;
    padding: 10px 18px;
  }
}

@media (max-width: 480px) {
  .why-list,
  .testimonial-container {
    gap: 20px;
  }

  .why-card i {
    font-size: 2.5rem;
  }

  .why-card h3,
  .webinaire-card h3,
  .testimonial-card h4 {
    font-size: 1.1rem;
  }

  .why-card p,
  .webinaire-card p,
  .testimonial-card p {
    font-size: 0.95rem;
  }

  .cta-button {
    font-size: 0.85rem;
    padding: 8px 16px;
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
  