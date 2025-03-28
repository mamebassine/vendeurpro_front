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
        <img src="../assets/images/baniere.jpeg" alt="Webinaire en action" class="hero-image" />
      </div>
  
      <!-- 🎯 POURQUOI PARTICIPER -->
      <div class="section why-webinaires">
        <h2>Pourquoi Nos Webinaires Font la Différence ?</h2>
        <div class="why-list">
          <div class="why-card" v-for="(point, index) in whyPoints" :key="index">
            <i :class="point.icon"></i>
            <h3>{{ point.title }}</h3>
            <p>{{ point.text }}</p>
          </div>
        </div>
        <!-- <button class="cta-button">📢 Inscrivez-vous Maintenant</button> -->

        <router-link to="/contact" class="cta-button">📢 Inscrivez-vous Maintenant</router-link>

      </div>
  
      <!-- 🎯 PROCHAINS WEBINAIRES -->
      <div class="section upcoming-webinaires">
        <h2>📅 Découvrez Nos Prochains Webinaires</h2>
        <div class="webinaire-list">
          <div v-for="(webinaire, index) in webinaires" :key="index" class="webinaire-card">
            <h3>{{ webinaire.title }}</h3>
            <p><strong>🕒 Date :</strong> {{ webinaire.date }}</p>
            <p><strong>⏳ Durée :</strong> {{ webinaire.duration }}</p>
            <!-- <button class="cta-button">📝 S'inscrire</button> -->

            <router-link to="/contact" class="cta-button">📝 S'inscriret</router-link>

          </div>
        </div>
      </div>
  
      <!-- 🎯 TÉMOIGNAGES -->
      <div class="section temoignages">
        <h2> Ce Que Disent Nos Participants</h2>
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

        <router-link to="/contact" class="cta-button">🚀 Rejoignez-les</router-link>

      </div>
  
      <!-- 🎯 FAQ -->
      <div class="section faq">
        <h2> Questions Fréquentes</h2>
        <div class="faq-container">
          <div v-for="(item, index) in faqItems" :key="index" class="faq-item">
            <h3 @click="toggleFAQ(index)" class="faq-title">
              {{ item.question }} <span class="arrow">{{ item.isOpen ? '▲' : '▼' }}</span>
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
    { title: "Les 5 Techniques pour Booster Vos Ventes", date: "10 Avril 2024, 18h", duration: "1h" },
    { title: "Comment Vendre en Ligne comme un Pro", date: "15 Avril 2024, 19h", duration: "1h" },
    { title: "Les Secrets de la Vente B2B", date: "20 Avril 2024, 20h", duration: "1h" }
  ]);
  
  // 🔹 Témoignages avec slider automatique
  const testimonials = ref([
    { img: "/images/baniere.jpeg", text: "J'ai augmenté mes ventes de 20% après ce webinaire !", author: "Sophie L." },
    { img: "/images/baniere.jpeg", text: "Des conseils très pratiques et applicables.", author: "Marc D." },
    { img: "/images/baniere.jpeg", text: "Je recommande à tous les entrepreneurs.", author: "Fatou N." }
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
  background: linear-gradient(120deg, #003366, #ff7f00);
  color: white;
  border-radius: 0 0 30px 30px;
}

.hero h1 {
  font-size: 1.8rem;
  line-height: 1.3;
  margin-bottom: 15px;
}
h2{
 
    /* font-size: 2.3rem;
  line-height: 1.3;
  margin-bottom: 2%; */

  font-size: 2.5em;
  color: #003366;
  margin-bottom: 30px;
  font-weight: bold;
}

.hero p {
  font-size: 1.2rem;
  margin-bottom: 20px;
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
  max-width: 45%;
  border-radius: 20px;
  box-shadow: 5px 5px 15px rgba(0, 0, 0, 0.2);
}

/* 🔹 SECTIONS GÉNÉRALES */
.section {
  padding: 50px 10%;
  text-align: center;
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
  font-size: 3rem; /* Icône plus grande pour attirer l'attention */
  color: #ff7f00;
  margin-bottom: 15px; /* Espacement sous l'icône */
}





/* 🔹 PROCHAINS WEBINAIRES */

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
  min-width: 300px;
  max-width: 350px; /* Taille limite pour un rendu uniforme */
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
  font-size: 1.4rem;
  color: #333;
  margin-bottom: 10px;
}

.webinaire-card p {
  font-size: 1rem;
  color: #555;
  margin: 5px 0;
}

/* 🔹 Bouton d'inscription */
.cta-button {
  display: inline-block;
  background: #ff7f00;
  color: white;
  padding: 12px 25px;
  border-radius: 10px;
  font-size: 1.1rem;
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




/* .webinaire-list {
  display: flex;
  justify-content: center;
  gap: 30px;
  flex-wrap: wrap;
  margin-top: 30px;
}

.webinaire-card {
  background: white;
  padding: 20px;
  border-radius: 15px;
  box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.1);
  text-align: center;
  max-width: 320px;
  transition: transform 0.3s ease-in-out;
}

.webinaire-card:hover {
  transform: scale(1.05);
} */








/* 🔹 TÉMOIGNAGES */

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
  padding: 40px;
  border-radius: 15px;
  text-align: center;
  box-shadow: 0px 8px 18px rgba(0, 0, 0, 0.1);
  max-width: 1000px; /* ✅ Largeur maximale définie */
  min-width: 320px; /* ✅ Évite que la carte soit trop petite */
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

/* .testimonial-container {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 80px;
  margin-top: 40px;
}

.testimonial-card {
  background: white;
  padding: 70px;
  border-radius: 10px;
  text-align: center;
  box-shadow: 5px 4px 12px rgba(0, 0, 0, 0.1);
  max-width: 1000%;
  transition: transform 0.3s;
}

.testimonial-card:hover {
  transform: scale(1.05);
}

.testimonial-img {
  width: 40%;
  border-radius: 30%;
  margin-bottom: 34px;
} */



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
  font-size: 18px;
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
  