<template>
    <section id="hero">
       <div class="text-content">
           <h1>Devenez un expert de la vente et boostez vos revenus !</h1>
               <p>Des formations pratiques, adaptées au marché local, pour réussir dans la vente de produits et services</p>
               <p>Formations sectorielles, bootcamps intensifs et coaching personnalisé pour booster vos ventes.</p>
         <button>  
           
           <a href="produit" class="voirplus">Découvrir nos offres</a>
   
             <div class="bubble"></div>
             <div class="bubble"></div>
             <div class="bubble"></div>
             <div class="bubble"></div>
           
         </button>
       </div>
        <img src="../assets/images/baniere.jpeg" alt="">
   </section>
   
   <!--ici 1ere section  -->



 <!-- Section Pourquoi choisir VendeurPro -->
 <section id="why-vendeurpro">
    <h2>Pourquoi Nos Formations Font la Différence</h2>

    <div class="why-container">
      <div class="why-item">
        <i class="fas fa-chart-line"></i>
        <h3>Expertise sectorielle</h3>
        <p>Des formations adaptées à votre métier.</p>
      </div>

      <div class="why-item">
        <i class="fas fa-tools"></i>
        <h3>Pédagogie pratique</h3>
        <p>70% de pratique : ateliers, études de cas.</p>
      </div>

      <div class="why-item">
        <i class="fas fa-bolt"></i>
        <h3>Résultats garantis</h3>
        <p>Des techniques immédiatement applicables.</p>
      </div>

      <div class="why-item">
        <i class="fas fa-user-check"></i>
        <h3>Coaching personnalisé</h3>
        <p>Accompagnement individuel pour réussir.</p>
      </div>
    </div>

    <button class="cta-button">En savoir plus</button>
  </section>





   
   <!-- SECTION FORMATION -->
   
   <section id="formations" class="formations-section">
       <div class="formations-container">
         <h2 class="formations-title">Découvrez Nos Formation</h2>
         <span class="nav-arrow nav-arrow-left">&#10094;</span> 
   
         <div class="formations-content">
           <div class="formation-card">
             <img src="../assets/images/baniere.jpeg" alt="Formation 1" class="formation-image"/>
             <h3 class="formation-card-title">Formation en Ecommerce</h3>
             <p class="formation-card-text">Apprenez les bases du développement web et devenez un expert en front-end.</p>
            
           </div>
   
           <div class="formation-card">
             <img src="../assets/images/baniere.jpeg" alt="Formation 2" class="formation-image"/>
             <h3 class="formation-card-title">Formation BoostezJOb</h3>
             <p class="formation-card-text">Maîtrisez le développement backend avec des technologies modernes.</p>
             
           </div>
   
           <div class="formation-card">
             <img src="../assets/images/baniere.jpeg" alt="Formation 3" class="formation-image"/>
             <h3 class="formation-card-title">Formation vente en ligne</h3>
             <p class="formation-card-text">Découvrez comment créer des applications mobiles performantes.</p>
             
           </div>
           <span class="nav-arrow nav-arrow-right">&#10095;</span>
   
         </div>
   
         <button class="voir-formations-btn">
           <a href="formations">Voir les formations</a>
         </button>
       </div>
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

    <button class="cta-button">Contactez-Nous</button>
  </section>
   
   
   
   
   <!-- Section Témoignages -->
   <section id="testimonials" class="testimonials-section">
    <h2 class="title">Ils Ont Transformé Leurs Ventes avec VendeurPro</h2>

    <div class="testimonials-wrapper">
      <button @click="prevTestimonial" class="nav-btn">❮</button>

      <div class="testimonials-container">
        <div
          v-for="(testimonial, index) in testimonials"
          :key="index"
          class="testimonial"
          :class="{ active: index === currentIndex }"
        >
          <img v-if="testimonial.img" :src="testimonial.img" alt="Photo Témoignage">
          <video v-if="testimonial.video" :src="testimonial.video" controls></video>
          <p>"{{ testimonial.text }}"</p>
          <h4>- {{ testimonial.author }}</h4>
          <span class="testimonial-result">{{ testimonial.result }}</span>
        </div>
      </div>

      <button @click="nextTestimonial" class="nav-btn">❯</button>
    </div>

    <div class="pagination-dots">
      <span
        v-for="(testimonial, index) in testimonials"
        :key="index"
        @click="currentIndex = index"
        :class="{ active: index === currentIndex }"
      ></span>
    </div>

    <button class="cta-button">Rejoignez-les</button>
  </section>
   
   
   
   
   
   <!-- Section Nos Partenaires -->
   <section id="partners" class="partners-section">
       <h2 class="partenairelogo">Nos Partenaires</h2>
       <div class="partners-container">
           <img src="../assets/images/baniere.jpeg" alt="Partenaire 1" class="partner-logo">
           <img src="../assets/images/baniere.jpeg" alt="Partenaire 2" class="partner-logo">
           <img src="../assets/images/baniere.jpeg" alt="Partenaire 3" class="partner-logo">
           <img src="../assets/images/baniere.jpeg" alt="Partenaire 1" class="partner-logo">
           <img src="../assets/images/baniere.jpeg" alt="Partenaire 2" class="partner-logo">
       </div>
   </section>
   
   


<!-- SECTION CONTACTER -->
   <section id="contact" class="contact-section">
    <h2>Prêt à Booster Vos Ventes ?</h2>

    <div class="contact-container">
      <!-- Formulaire de contact -->
      <div class="contact-form">
        <h3>Contactez-nous</h3>
        <form @submit.prevent="submitForm">
          <div class="input-group">
            <input type="text" v-model="form.nom" placeholder="Nom" required />
            <input type="text" v-model="form.prenom" placeholder="Prénom" required />
          </div>
          <input type="email" v-model="form.email" placeholder="Email" required />
          <input type="tel" v-model="form.telephone" placeholder="Téléphone" required />
          <textarea v-model="form.message" placeholder="Votre message..." required></textarea>
          <button type="submit" class="cta-button">Inscrivez-vous Maintenant</button>
        </form>
      </div>

     
    </div>
  </section>

   </template>
   
   
   
   
   
   
   
   
   
   
   <script setup>
   
   import { ref, onMounted, onUnmounted } from 'vue';
   
   // <!--ici 1ere section  -->
   
   // Tableau des formations
   const formations = ref([
     { img: "../assets/images/baniere.jpeg", title: "Formation en Ecommerce", text: "Apprenez les bases du développement web et devenez un expert en front-end." },
     { img: "../assets/images/baniere.jpeg", title: "Formation BoostezJOb", text: "Maîtrisez le développement backend avec des technologies modernes." },
     { img: "../assets/images/baniere.jpeg", title: "Formation vente en ligne", text: "Découvrez comment créer des applications mobiles performantes." },
   ]);
   
   // Index actuel de la formation visible
   const currentFormationIndex = ref(0);
   
   // Fonction pour passer à la formation suivante
   const nextFormation = () => {
     currentFormationIndex.value = (currentFormationIndex.value + 1) % formations.value.length;
   };
   
   // Fonction pour passer à la formation précédente
   const prevFormation = () => {
     currentFormationIndex.value = (currentFormationIndex.value - 1 + formations.value.length) % formations.value.length;
   };
   
   // Défilement automatique des formations toutes les 3 secondes
   let formationInterval = null;
   onMounted(() => {
     formationInterval = setInterval(nextFormation, 3000); // Changer toutes les 3 secondes
   });
   
   // Nettoyage de l'intervalle lors de la destruction du composant
   onUnmounted(() => {
     clearInterval(formationInterval);
   });
   
   
   
   
   
   
   // Liste des questions fréquentes
const faqItems = ref([
  { question: "Qui peut participer à vos formations ?", answer: "Nos formations sont ouvertes à tous : vendeurs, entrepreneurs, commerçants, et toute personne souhaitant améliorer ses compétences en vente.", isOpen: false },
  { question: "Quel est le format des formations (en présentiel ou en ligne) ?", answer: "Nous proposons des formations en présentiel dans nos centres et en ligne via notre plateforme e-learning.", isOpen: false },
  { question: "Y a-t-il un suivi après la formation ?", answer: "Oui, un accompagnement post-formation est disponible sous forme de coaching et de sessions de mise en pratique.", isOpen: false },
  { question: "Comment puis-je m'inscrire ?", answer: "Cliquez sur le bouton 'Inscrivez-vous Maintenant' et remplissez le formulaire en ligne. Vous serez contacté par un conseiller.", isOpen: false }
]);

// Fonction pour ouvrir/fermer les questions
const toggle = (index) => {
  faqItems.value = faqItems.value.map((item, i) => ({
    ...item,
    isOpen: i === index ? !item.isOpen : false
  }));
};
   
   
   // SECTION TEMOIGNAGE

// Témoignages avec images, vidéos et résultats
const testimonials = ref([
  { 
    // img: "../assets/images/baniere.jpeg
    img: "/images/baniere.jpeg",
    text: "Grâce à VendeurPro, mes ventes ont augmenté de 30% en 3 mois !", 
    author: "Fouta Bah", 
    result: "+30% de ventes"
  },
  { 
    video: "/videos/temoignage2.mp4", 
    text: "Une formation ultra-pratique qui m'a permis de fidéliser mes clients.", 
    author: "Jean Michel Mendy", 
    result: "Fidélisation accrue"
  },
  { 
    img: "/images/baniere.jpeg",
    text: "J'ai appris des techniques de vente qui ont transformé mon commerce.", 
    author: "Sophie Ly", 
    result: "Transformation des ventes"
  },
  { 
    img: "/images/baniere.jpeg",
    text: "Le coaching personnalisé a été un vrai plus pour mon entreprise.", 
    author: "Paul Niane", 
    result: "Coaching efficace"
  }
]);

// Défilement automatique des témoignages
const currentIndex = ref(0);
let interval = null;

const nextTestimonial = () => {
  currentIndex.value = (currentIndex.value + 1) % testimonials.value.length;
};

const prevTestimonial = () => {
  currentIndex.value = (currentIndex.value - 1 + testimonials.value.length) % testimonials.value.length;
};

onMounted(() => {
  interval = setInterval(nextTestimonial, 5000); // Changement toutes les 5 secondes
});

onUnmounted(() => {
  clearInterval(interval);
});
   
   
   
   




// Données du formulaire
const form = ref({
  nom: "",
  prenom: "",
  email: "",
  telephone: "",
  message: ""
});

// Fonction pour soumettre le formulaire
const submitForm = () => {
  if (!form.value.nom || !form.value.prenom || !form.value.email || !form.value.telephone || !form.value.message) {
    alert("Veuillez remplir tous les champs.");
    return;
  }

  console.log("Formulaire soumis :", form.value);
  alert("Votre demande a été envoyée avec succès !");
  
  // Réinitialiser le formulaire après soumission
  form.value = { nom: "", prenom: "", email: "", telephone: "", message: "" };
};
   
   </script>
   
   
   
   
   
   
   
   
   
   
   
   <style scoped>



   
   /* Section Hero*/
   .body {
     font-family: 'Roboto', sans-serif;
     margin: 0;
     padding: 0;
     overflow-x: hidden; /* Empêche le débordement horizontal global */
     }
   #hero::before,
   #hero::after {
     content: "welcome";
     color: #000;
     position: absolute;
     width: 80px;
     height: 80px;
     border-radius: 50%;
     background-color: #ff7f00;
     animation: glognote 1s infinite alternate;
     display: flex; /* Permet de centrer le contenu */
     align-items: center; /* Centre verticalement le texte */
     justify-content: center; /* Centre horizontalement le texte */
     font-size: 0.8em; /* Ajustez la taille du texte si nécessaire */
   }
   /* Positionnement des bulles principales */
   #hero::before {
     top: 21%;
     left: 54%;
   }
   #hero::after {
     bottom: 20%;
     right: 10%;
   }
   /* Animation des bulles principales */
   @keyframes glognote {
     0% {
       opacity: 0.6;
       transform: scale(1);
     }
     100% {
       opacity: 1;
       transform: scale(1.2);
     }}
   /* Styles pour les petites bulles */
   .bubble {
     position: absolute;
     width: 25px;
     height: 25px;
     border-radius: 50%;
     background-color: #003366; /* Couleur de la petite bulle */
     animation: float 1.5s infinite ease-out;
   }
   /* Animation des petites bulles */
   @keyframes float {
     0% {
       transform: scale(0.5) translate(0, 0);
       opacity: 1;
     }
     100% {
       transform: scale(1) translate(calc(-50px + 100px * var(--x)), calc(-50px + 100px * var(--y)));
       opacity: 0;
     }
   }
   /* Positions aléatoires des petites bulles autour de la bulle principale */
   .bubble:nth-child(1) { --x: -1; --y: -1; }
   .bubble:nth-child(2) { --x: 5; --y: 11; }
   .bubble:nth-child(3) { --x: -1; --y: 14; }
   .bubble:nth-child(4) { --x: 1; --y: -1; }
   #hero {
    display: flex; /* Utilisation de Flexbox pour aligner les éléments */
     align-items: center; /* Alignement vertical des éléments */
     justify-content: space-between; /* Répartir les éléments sur toute la largeur */
     padding: 10px 10px; /* Espacement intérieur */
     margin-left: 3%;
   }
   
   #hero .text-content {
     max-width: 70%; /* Limiter la largeur du texte pour permettre de l'espace pour l'image */
     margin-top: 16%;
   }
   #hero h1 {
     font-size: 2.5em; /* Taille du titre */
     margin: 0 0 20px 0; /* Espacement sous le titre */
     font-weight: bold; /* Gras pour le titre */
   }
   #hero p {
     font-size: 2em; /* Taille du texte du paragraphe */
     margin: 20px 0; /* Espacement vertical entre les paragraphes */
   }
   #hero img {
     margin-top: 11%;
     /* margin-left: 10%;  Marge à gauche */
     margin-right: 3%; /* Marge à droite */
     max-width: 190%;   /* Limiter la largeur de l'image */
     height: auto;      /* Conserver les proportions de l'image */
     object-fit: cover; /* Couvrir l'espace sans déformer l'image */
     border-bottom-left-radius: 150px; /* Arrondir le coin supérieur gauche */
     border-top-right-radius: 50px; 
   }
   button {
     position: relative;
     background-color: #ff7f00; /* Orange principal */
     color: white;
     border: none;
     padding: 12px 24px;
     font-size: 1.2em;
     font-weight: bold;
     border-radius: 8px;
     cursor: pointer;
     overflow: hidden;
     transition: background-color 0.3s ease, transform 0.2s ease;
   }
   
   button:hover {
     background-color: #003366; /* Orange plus foncé au survol */
     transform: scale(1.05);
   }
   
   button a {
     color: white;
     text-decoration: none;
     display: inline-block;
     width: 100%;
     height: 100%;
   }
   button:active {
     transform: scale(0.95);
   }
   /* Effet de bulles au survol */
   button::before {
     content: "";
     position: absolute;
     top: -10px;
     left: -10px;
     width: 0;
     height: 0;
     background: rgba(255, 255, 255, 0.3);
     border-radius: 50%;
     transition: width 0.3s ease, height 0.3s ease;
   }
   button:hover::before {
     width: 200px;
     height: 200px;
     opacity: 0;
     transition: width 0.6s ease, height 0.6s ease, opacity 0.6s ease;
   }
   
   
   
   



/* Section Pourquoi choisir VendeurPro */
#why-vendeurpro {
  text-align: center;
  padding: 60px 5%;
  background: white;
  color: #003366;
}

#why-vendeurpro h2 {
  font-size: 2.5em;
  margin-bottom: 30px;
  font-weight: bold;
}

/* Conteneur des items */
.why-container {
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 20px;
}

/* Carte individuelle */
.why-item {
  flex: 1;
  background: #003366;
  padding: 30px;
  border-radius: 8px;
  color: white;
  text-align: center;
  transition: transform 0.3s, background 0.3s;
  min-width: 250px;
}

/* Icônes */
.why-item i {
  font-size: 2.5em;
  color: #ff7f00;
  margin-bottom: 10px;
}

/* Effet au survol */
.why-item:hover {
  transform: scale(1.05);
  background: #ff7f00;
}

.why-item:hover i {
  color: white;
}

/* Bouton */
.cta-button {
  background-color: #ff7f00;
  color: white;
  padding: 12px 24px;
  font-size: 1.2em;
  font-weight: bold;
  border: none;
  border-radius: 5px;
  margin-top: 30px;
  cursor: pointer;
  transition: background-color 0.3s, transform 0.2s;
}

.cta-button:hover {
  background-color: #003366;
  color: white;
  transform: scale(1.05);
}

/* Responsive */
@media (max-width: 768px) {
  .why-container {
    flex-direction: column;
    align-items: center;
  }

  .why-item {
    width: 80%;
  }
}




   
   /* Section NOS FORMATIONS */
   .formations-section {
     background-color: #000;
     color: white;
     padding: 50px 0;
     margin-top: 5%;
   }
   
   .formations-title {
     text-align: center;
     font-size: 2.5em;
     margin-bottom: 9%;
   }
   
   .formations-container {
     display: flex;
     flex-direction: column;
     align-items: center;
   }
   
   .formations-content {
     display: flex;
     justify-content: space-between;
     gap: 70px;
     margin-bottom: 20px;
     transition: transform 0.5s ease;
   }
   
   .formation-card {
     flex: 1;
     max-width: 370px;
     background-color: #333;
     padding: 20px;
     border-radius: 8px;
     text-align: center;
     transition: transform 0.3s ease;
   }
   
   .formation-card:hover {
     transform: scale(1.05);
   }
   
   .formation-image {
     max-width: 100%;
     height: auto;
     border-radius: 8px;
   }
   
   .formation-card-title {
     font-size: 1.5em;
     margin-top: 15px;
   }
   
   .formation-card-text {
     font-size: 1em;
     margin-top: 10px;
   }
   
   .nav-arrow {
     font-size: 2.5em;
     color: white;
     cursor: pointer;
     transition: transform 0.3s ease, color 0.3s ease;
     padding: 10px;
   }
   
   .nav-arrow-left {
     margin-right: 90%;
     margin-bottom: -170px;
   }
   
   .nav-arrow-right {
     margin-left: -60px;
     margin-top: 90px;
   }
   
   .nav-arrow:hover {
     color: #ff7f00;
     transform: scale(1.2);
   }
   
   /* Animation pour rendre le contenu fluide lors du changement */
   .formations-content {
     display: flex;
     transition: transform 0.3s ease-in-out;
   }
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   /* --- Section FAQ --- */
.faq-section {
  padding: 60px 5%;
  text-align: center;
  background-color: #f9f9f9;
}

.faq-section h2 {
  font-size: 2.2em;
  margin-bottom: 20px;
  color: #003366;
}

/* --- Conteneur des questions --- */
.faq-container {
  max-width: 800px;
  margin: auto;
}

/* --- Question en accordéon --- */
.faq-item {
  background: white;
  padding: 15px 20px;
  margin: 10px 0;
  border-radius: 8px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
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

/* --- Bouton Contact --- */
.cta-button {
  background-color: #ff7f00;
  color: white;
  padding: 12px 24px;
  font-size: 1.2em;
  font-weight: bold;
  border: none;
  border-radius: 5px;
  margin-top: 30px;
  cursor: pointer;
  transition: background-color 0.3s, transform 0.2s;
}

.cta-button:hover {
  background-color: #003366;
  color: white;
  transform: scale(1.05);
}

/* --- Responsive --- */
@media (max-width: 768px) {
  .faq-container {
    width: 90%;
  }

  .faq-title {
    font-size: 16px;
  }

  .faq-answer {
    font-size: 14px;
  }

  .cta-button {
    font-size: 1em;
  }
}

   
   
   
   
   
   
   
   
   /* TEMOIGNAGE SECTION */
   /* --- Styles généraux --- */
   .testimonials-section {
     text-align: center;
     padding: 50px 20px;
     background: linear-gradient(to right, #a29f9f, #ffffff);
     border-radius: 10px;
     box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.2);
   }
   
   /* --- Titre --- */
   .title {
     font-size: 2rem;
     font-weight: bold;
     margin-bottom: 20px;
     color: #000;
   }
   
   /* --- Wrapper des témoignages --- */
   .testimonials-wrapper {
     display: flex;
     align-items: center;
     justify-content: center;
     position: relative;
   }
   
   /* --- Conteneur des témoignages --- */
   .testimonials-container {
     display: flex;
     overflow: hidden;
     width: 450%;
     height: 900%;
     position: relative;
   }
   
   .testimonial {
     display: none;
     flex-direction: column;
     align-items: center;
     justify-content: center;
     width: 400%;
     padding: 20px;
     background: white;
     border-radius: 10px;
     box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
     transition: opacity 0.5s ease-in-out;
   }
   
   .testimonial.active {
     display: flex;
   }
   
   /* --- Image de profil --- */
   .testimonial img {
     width: 90px;
     height: 90px;
     border-radius: 50%;
     margin-bottom: 10px;
   }
   
   /* --- Texte --- */
   .testimonial p {
     font-style: italic;
     color: #555;
   }
   
   .testimonial h4 {
     margin-top: 10px;
     color: #333;
   }
   
   /* --- Boutons de navigation --- */
   .nav-btn {
     background: none;
     border: none;
     font-size: 24px;
     cursor: pointer;
     color: #003366;
     transition: transform 0.2s;
   }
   
   .nav-btn:hover {
     transform: scale(1.2);
   }
   
   /* --- Pagination --- */
   .pagination-dots {
     margin-top: 15px;
   }
   
   .pagination-dots span {
     height: 10px;
     width: 10px;
     margin: 0 5px;
     /* background-color: #003366; */
   
     background-color: #ffffff;
     border-radius: 50%;
     display: inline-block;
     cursor: pointer;
     transition: background-color 0.3s;
   }
   
   .pagination-dots .active {
     background-color: #ff7f00;
   }
   
   
   
   
   /* Nos Partenaires */
   .partners-section{
     margin-bottom: 25px;
   }
   
   .partenairelogo{
     text-align: center;
     font-size: 2.5em;
     margin-bottom: 2%;
     margin-top: 4%;
   
   }
   .partners-container {
       display: flex;
       justify-content: center;
       gap: 20px;
   }
   .partner-logo {
       width: 250px;
       height: auto;
       transition: transform 0.3s ease;
   }
   .partner-logo:hover {
       transform: scale(1.1);
   }
   




/* --- Section Contact & Inscription --- */
.contact-section {
  padding: 60px 5%;
  text-align: center;
  background: linear-gradient(to bottom, #f4f4f4, #ffffff);
}

.contact-section h2 {
  font-size: 2.4em;
  color: #003366;
  margin-bottom: 35px;
  font-weight: bold;
}

/* --- Conteneur principal --- */
.contact-container {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 40px;
}

/* --- Formulaire de contact avec plus d'espace --- */
.contact-form {
  flex: 1;
  min-width: 100px;
  max-width: 550px;
  background: white;
  padding: 30px;
  border-radius: 10px;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease;
}

.contact-form:hover {
  transform: translateY(-3px);
}

.contact-form h3 {
  font-size: 1.6em;
  margin-bottom: 15px;
  color: #003366;
  font-weight: bold;
}

/* --- Champs de saisie mieux espacés --- */
.input-group {
  display: flex;
  gap: 5px;
}

input,
textarea {
  width: 100%;
  padding: 8px;  /* DIMINUER LES INPUT */
  margin-bottom: 8px; /* Ajout d’espace entre les champs */
  border: 1.5px solid #ccc;
  border-radius: 6px;
  font-size: 1em;
  transition: border-color 0.3s;
}

input:focus,
textarea:focus {
  border-color: #ff7f00;
  outline: none;
}

textarea {
  height: 60px;
  resize: none;
}

/* --- Bouton CTA --- */
.cta-button {
  background: #ff7f00;
  color: white;
  padding: 12px 24px;
  font-size: 1.1em;
  font-weight: bold;
  border: none;
  border-radius: 6px;
  cursor: pointer;
  margin-top: 15px;
  transition: background 0.3s, transform 0.2s;
}

.cta-button:hover {
  background: #003366;
  transform: scale(1.05);
}





   </style>
   