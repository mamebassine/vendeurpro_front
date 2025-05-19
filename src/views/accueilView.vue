<template>
    <section id="hero">
       <div class="text-content">
           <h1>Devenez un expert de la vente et boostez vos revenus !</h1>
            <strong>
              <h5>Des formations pratiques, adaptées au marché local, pour réussir dans la vente de produits et services</h5>
            </strong>               
            <p>Formations sectorielles, bootcamps intensifs et coaching personnalisé pour booster vos ventes.</p>
              <button>  
              <router-link to="/formations" class="voirplus"> 
                Découvrir nos offres
              </router-link>

            <div class="bubble"></div>
             <div class="bubble"></div>
             <div class="bubble"></div>
             <div class="bubble"></div>
           </button>
       </div>
       
        <img src="../assets/images/vendeur10a.png" alt="">
   </section>

<!-- Section Pourquoi choisir VendeurPro -->
 <section id="why-vendeurpro">
    <h2>Pourquoi Nos formations font la différence</h2>

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
    <router-link to="/formations" class="cta-button">En savoir plus</router-link>
  </section>

<!-- SECTION FORMATION -->
<section id="formations" class="formations-section">
  <div class="formations-container">
    <h2 class="formations-title">Découvrez nos formations</h2>

    <div class="formations-wrapper">
      <span class="nav-arrow nav-arrow-left" @click="prevFormation">&#10094;</span>

      <div class="formations-content">
        <router-link
          v-for="(formation, index) in visibleFormations"
          :key="index"
          :to="formation.route"
          class="formation-card"
        >
          <img :src="formation.img" :alt="formation.title" class="formation-image" />
          <h3 class="formation-card-title"><strong>{{ formation.title }}</strong></h3>
          <p class="formation-card-text">{{ formation.text }}</p>
        </router-link>
      </div>

      <span class="nav-arrow nav-arrow-right" @click="nextFormation">&#10095;</span>
    </div>

    <router-link
      to="/formations"
      class="inline-block px-6 py-3 bg-[#ff7f00] text-white font-bold rounded hover:bg-[#002855] transition duration-400"
    >
      Voir les formations
    </router-link>
  </div>
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
   
  <!-- Section Témoignages -->
   <section id="testimonials" class="testimonials-section">
  <h2 class="title">Ils ont transformé leurs ventes avec VendeurPro</h2>
  <div class="testimonials-wrapper">
  <button @click="prevTestimonial" class="nav-btn">❮</button>
  <div class="testimonials-container">
  <div v-for="(testimonial, index) in testimonials"
          :key="index"
          class="testimonial"
          :class="{ active: index === currentIndex }">

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

   <router-link to="/contact" class="cta-button">📩 Contactez-nous</router-link>

  </section>
  <!-- Section Nos Partenaires -->
<!-- <section id="partners" class="partners-section">
       <h2 class="partenairelogo">Nos Partenaires</h2>
       <div class="partners-container">
           <img src="../assets/images/baniere.jpeg" alt="Partenaire 1" class="partner-logo">
           <img src="../assets/images/baniere.jpeg" alt="Partenaire 2" class="partner-logo">
           <img src="../assets/images/baniere.jpeg" alt="Partenaire 3" class="partner-logo">
           <img src="../assets/images/baniere.jpeg" alt="Partenaire 1" class="partner-logo">
           <img src="../assets/images/baniere.jpeg" alt="Partenaire 2" class="partner-logo">
       </div>
   </section> -->


  <!-- SECTION CONTACTER -->
   <section id="contact" class="contact-section">
   <h2>Prêt à booster vos ventes ?</h2>
   <div class="contact-container">
      <!-- Formulaire de contact -->
      <div class="contact-form">
        <h3>Contactez-nous</h3>
        <form @submit.prevent="submitForm">
          <div class="input-group">
            <input type="text" v-model="form.nom" placeholder="Votre nom" required />
            <input type="text" v-model="form.prenom" placeholder="Votre prénom" required />
          </div>
          <input type="email" v-model="form.email" placeholder="Votre email" required />
          <input type="tel" v-model="form.telephone" placeholder="Votre téléphone" required />
          <textarea v-model="form.message" placeholder="Votre message..." required></textarea>
          <button type="submit" class="cta-button">Inscrivez-vous maintenant</button>
        </form>
      
    </div>

    <!-- Image de contact -->
    <div class="contact-image">
      <img src="../assets/images/vendeur9a.png" alt="">

    </div>
  </div>
  </section>

   </template>
   
   
        <script setup>
        import { ref, computed, onMounted, onUnmounted } from 'vue';
        
        // 👉 Déclaration globale des intervalles (noms uniques)
        let formationInterval = null;
        let testimonialInterval = null;
        
        // =========================
        // 🚀 Formations Carousel
        // =========================
            const formations = ref([
      {
        img: new URL('@/assets/images/vendeurp4.jpg', import.meta.url).href,
        title: "Vente de produits",
        text: "Apprenez à vendre efficacement aux entreprises.",
        route: "/bootcamp-produits"
      },
      {
        img: new URL('@/assets/images/vendeur5.jpg', import.meta.url).href,
        title: "Closer BtoB",
        text: "Devenez un expert en vente aux entreprises et prospection commerciale.",
        route: "/formation-btob"
      },
      {
        img: new URL('@/assets/images/vendeura1.jpg', import.meta.url).href,
        title: "Social Selling Master",
        text: "Maîtrisez la vente via TikTok, WhatsApp et autres canaux digitaux.",
        route: "/formation-vente-digitale"
      },
      {
        img: new URL('@/assets/images/vendeur3.jpg', import.meta.url).href,
        title: "L'Art de vendre",
        text: "Acquérir les techniques de vente essentielles pour booster vos ventes.",
        route: "/bootcamp-vendeur"
      },
      {
        img: new URL('@/assets/images/photo7.png', import.meta.url).href,
        title: "Pro vendeur BtoC",
        text: "Maîtrisez la vente en boutique, sur les réseaux sociaux et WhatsApp.",
        route: "/formation-vente-directe"
      },
      {
        img: new URL('@/assets/images/vendeur5.jpg', import.meta.url).href,
        title: "Vente digitale et E-commerce",
        text: "Créez des applications mobiles performantes.",
        route: "/bootcamp-services"
      }
    ]);

        
        const currentFormationIndex = ref(0);
        
        const visibleFormations = computed(() => {
          const start = currentFormationIndex.value;
          const visibleCount = 3;
          const total = formations.value.length;
          return Array.from({ length: visibleCount }, (_, i) => formations.value[(start + i) % total]);
        });
        
        const nextFormation = () => {
          currentFormationIndex.value = (currentFormationIndex.value + 1) % formations.value.length;
        };
        
        const prevFormation = () => {
          currentFormationIndex.value =
            (currentFormationIndex.value - 1 + formations.value.length) % formations.value.length;
        };
        
        // =========================
        // ❓ FAQ
        // =========================
        const faqItems = ref([
          { question: "Qui peut participer à vos formations ?", answer: "Nos formations sont ouvertes à tous : vendeurs, entrepreneurs, commerçants, et toute personne souhaitant améliorer ses compétences en vente.", isOpen: false },
          { question: "Quel est le format des formations (en présentiel ou en ligne) ?", answer: "Nous proposons des formations en présentiel dans nos centres et en ligne via notre plateforme e-learning.", isOpen: false },
          { question: "Y a-t-il un suivi après la formation ?", answer: "Oui, un accompagnement post-formation est disponible sous forme de coaching et de sessions de mise en pratique.", isOpen: false },
          { question: "Comment puis-je m'inscrire ?", answer: "Cliquez sur le bouton 'Inscrivez-vous Maintenant' et remplissez le formulaire en ligne. Vous serez contacté par un conseiller.", isOpen: false }
        ]);
        
        const toggle = (index) => {
          faqItems.value = faqItems.value.map((item, i) => ({
            ...item,
            isOpen: i === index ? !item.isOpen : false
          }));
        };
        
        // =========================
        // 💬 Témoignages
        // =========================
        const testimonials = ref([
          { img: "/images/temoin9.jpg", text: "Grâce à VendeurPro, mes ventes ont augmenté de 30% en 3 mois !", author: "Fanta Bah", result: "+30% de ventes" },
          { img: "/images/vendeur23.jpg", text: "J'ai appris des techniques de vente qui ont transformé mon commerce.", author: "Sophie Ly", result: "Transformation des ventes" },
          { img: "/images/temoin11.jpg", text: "J'ai appris des techniques de vente qui ont transformé mon commerce.", author: "Sophie Ly", result: "Transformation des ventes" },
          { img: "/images/image7.jpeg", text: "Le coaching personnalisé a été un vrai plus pour mon entreprise.", author: "Pa Matar Niane", result: "Coaching efficace" }
        ]);
        
        const currentIndex = ref(0);
        
        const nextTestimonial = () => {
          currentIndex.value = (currentIndex.value + 1) % testimonials.value.length;
        };
        
        const prevTestimonial = () => {
          currentIndex.value = (currentIndex.value - 1 + testimonials.value.length) % testimonials.value.length;
        };
        
        // =========================
        // 📨 Formulaire
        // =========================
        const form = ref({
          nom: "",
          prenom: "",
          email: "",
          telephone: "",
          message: ""
        });
        
        const submitForm = () => {
          if (!form.value.nom || !form.value.prenom || !form.value.email || !form.value.telephone || !form.value.message) {
            alert("Veuillez remplir tous les champs.");
            return;
          }
        
          console.log("Formulaire soumis :", form.value);
          alert("Votre demande a été envoyée avec succès !");
        
          form.value = { nom: "", prenom: "", email: "", telephone: "", message: "" };
        };
        
        // =========================
        // 🔁 Lifecycle hooks
        // =========================
        onMounted(() => {
          formationInterval = setInterval(nextFormation, 3000);
          testimonialInterval = setInterval(nextTestimonial, 5000);
        });
        
        onUnmounted(() => {
          clearInterval(formationInterval);
          clearInterval(testimonialInterval);
        });
        </script>
        
   
   
<style scoped>
/* Section Hero*/
   .body {
     font-family: 'Roboto', sans-serif;
     margin: 0;
     padding: 0;
     overflow-x: hidden; /* Empêche le débordement horizontal global */
     }
   /* #hero::before,
   #hero::after {
     content: "welcome";
     color: #000;
     position: absolute;
     width: 80px;
     height: 80px;
     border-radius: 50%;
     background-color: #ff7f00;
     animation: glognote 1s infinite alternate;
     display: flex; 
     align-items: center; 
     justify-content: center; 
     font-size: 0.8em; 
   } */
   /* Positionnement des bulles principales
   #hero::before {
     top: 21%;
     left: 54%;
   }
   #hero::after {
     bottom: 20%;
     right: 10%;
   } */
   /* Animation des bulles principales */
   /* @keyframes glognote {
     0% {
       opacity: 0.6;
       transform: scale(1);
     }
     100% {
       opacity: 1;
       transform: scale(1.2);
     }} */
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
     margin-left: 1px;

     /* background: linear-gradient(120deg, #e5c6a8, #fff); */
margin-top: 5px;
   }
   
   #hero .text-content {
     max-width: 70%; /* Limiter la largeur du texte pour permettre de l'espace pour l'image */
     margin-top: 16%;
     
     margin-left:5%;

   }
   #hero h1 {
     font-size: 2.4em; /* Taille du titre */
     margin: 0 0 20px 0; /* Espacement sous le titre */
     font-weight: bold; /* Gras pour le titre */
     margin-top: -16%;


    }
   h5{
    font-size: 18px; /* Taille du texte du paragraphe */
     margin: 20px 0; /* Espacement vertical entre les paragraphes */
     font-weight: arial; /* Gras pour le titre */ 
   }
   #hero p {
     font-size: 17px; /* Taille du texte du paragraphe */
     margin: 20px 0; /* Espacement vertical entre les paragraphes */
     font-weight: arial; /* Gras pour le titre */
     color: #333;
}

   h3{
    font-size: 1.6em; /* Taille du titre */
    font-weight: bold; /* Gras pour le titre */ 
   }
   
   #hero img {

     margin-top: 11%;
     margin-left: 8%; 
     margin-right: 6%; 

     max-width: 80%;   /* Limiter la largeur de l'image */
     object-fit: cover; /* Couvrir l'espace sans déformer l'image */
    border-radius: 20px;   /*  Arrondir le coin supérieur gauche */
    background: linear-gradient(120deg, #003366, #fff);

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
     margin-top:20px;
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



   /* responsive */
   @media (max-width: 1024px) {
  #hero::before,
  #hero::after,
  .bubble,
  #hero img {
    display: none !important;
  }
}


   @media (max-width: 1024px) {
  #hero {
    margin-top: 22%;
    flex-direction: column;
    text-align: center;
    padding: 40px 20px;
  }

  #hero .text-content {
    max-width: 100%;
    margin: 0 auto;
    margin-top: 40px;
  }

  #hero img {
    max-width: 85%;
    margin: 30px auto 0;
    border-bottom-left-radius: 100px;
  }

  #hero h1 {
    font-size: 2em;
    margin-top: 0;
  }

  h5,
  #hero p {
    font-size: 16px;
  }

  button {
    font-size: 1em;
    padding: 10px 20px;
  }
}

@media (max-width: 768px) {
  #hero h1 {
    font-size: 1.7em;
  }

  h3 {
    font-size: 1.2em;
  }

  h5,
  #hero p {
    font-size: 15px;
  }

  #hero img {
    max-width: 90%;
    margin-top: 20px;
  }
}

@media (max-width: 480px) {
  #hero h1 {
    font-size: 1.5em;
  }

  h5,
  #hero p {
    font-size: 14px;
  }

  #hero .text-content {
    margin-top: 20px;
  }

  button {
    font-size: 1em;
    padding: 10px 16px;
  }

  #hero img {
    max-width: 95%;
    border-bottom-left-radius: 60px;
  }
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

  text-decoration: none; /* Supprime le soulignement */
  display: inline-block; /* Évite le léger décalage vertical */
  text-align: center; /* Centre le texte */

}
.cta-button:hover {
  background-color: #003366;
  color: white;
  transform: scale(1.05);
}



 /* DEBUT FORMATION */

 /* Section NOS FORMATIONS */
.formations-section {
  background: linear-gradient(5deg, #fff, #003366, #fff);
  color: white;
  padding: 50px 0;
  margin-top: 5%;
  width: 100%;
  box-sizing: border-box;
}
.formations-title {
  text-align: center;
  font-size: 2.3em;
  margin-bottom: 5%;
  color: #ffffff;
}
.formations-container {
  width: 90%;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
}
/* Nouvelle structure : wrapper autour du carousel */
.formations-wrapper {
  position: relative;
  width: 100%;
  max-width: 1200px;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 40px;
}
/* Conteneur carousel */
.formations-content {
  display: flex;
  gap: 30px;
  transition: transform 0.5s ease;
  justify-content: center;
  flex-wrap: nowrap;
}
.formation-card {
flex: 1;
  max-width: 300px;
  min-width: 250px;
  padding: 15px;
  background-color: #333;
  border-radius: 8px;
  text-align: center;
  transition: transform 0.3s ease;
  margin: 36px;

  display: flex;
  flex-direction: column;
  justify-content: space-between;


  /* flex: 1;
  background-color: #333;
  border-radius: 8px;
  text-align: center;
  transition: transform 0.3s ease;

  max-width: 300px; 
  min-width: 250px;
  padding: 15px; */



}
.formation-card:hover {
  transform: scale(1.05);
}
.formation-image {
  width: 100%;
  height: 300px; /* fixe la hauteur de l’image */
  object-fit: cover; /* ou "contain" si tu veux voir l’image entière sans crop */
  border-radius: 8px;
  background-color: #222; /* utile si image transparente ou contient du vide */
}
.formation-card-title {
  font-family: 'Arial Black', Impact, sans-serif; /* police très visible */
  font-size: 1em;
  margin-top: 15px;
  max-height: 2.5em; /* 2 lignes max */
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
line-clamp: 2; /* Ajoute cette ligne */
  -webkit-line-clamp: 2;  
  -webkit-box-orient: vertical;
}

.formation-card-text {
  font-size: 1em;
  margin-top: 10px;
  max-height: 4.5em; /* 3 lignes max */
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
line-clamp: 3; /* Ajoute cette ligne */
  -webkit-line-clamp: 3;  
  -webkit-box-orient: vertical;
}

/* Flèches navigation */
.nav-arrow {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  font-size: 2.5em;
  color: white;
  cursor: pointer;
  transition: transform 0.3s ease, color 0.3s ease;
  z-index: 2;
  background: transparent;
  border: none;
  padding: 0 10px;
}
.nav-arrow-left {
  left: 10px;
}
.nav-arrow-right {
  right: 10px;
}
.nav-arrow:hover {
  color: #ff7f00;
  transform: scale(1.2);
}
/* Responsive */
@media (max-width: 1024px) {
  .formations-content {
    flex-direction: column;
    gap: 20px;
  }
.nav-arrow {
    display: none;
  }
}
@media (max-width: 768px) {
  .formations-title {
    font-size: 1.8em;
    margin-bottom: 30px;
  }

  .formation-card {
    width: 90%;
    margin: 0 auto;
  }
}

@media (max-width: 480px) {
  .formations-title {
    font-size: 1.5em;
  }

  .formation-card-title {
    font-size: 1.2em;
  }

  .formation-card-text {
    font-size: 0.95em;
  }
}
/*ICI FINI FORMATION  */




   
/* --- Section FAQ --- */
.faq-section {
  padding: 60px 5%;
  text-align: center;
  
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
     font-size: 2.5rem;
     font-weight: bold;
     margin-bottom: 20px;
     color: #003366;
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
     width: 130px;
     height: 130px;
     border-radius: 50%;
     margin-bottom: 10px;
}
  /* --- Texte --- */
   .testimonial p {
     font-style: italic;
     color: #000;
     font-size: 18px; /* Augmente la taille de l'écriture */
     margin-top: 14px;
     margin: 0 0 20px 0; /* Espacement sous le titre */
}
.testimonial h4 {
    font-size: 1.5rem; /* Augmente la taille de l'écriture */
    margin-top: 14px;
    color: #000;
    font-weight: bold; /* Texte en gras */
}
.testimonial-result{
  margin-top: 14px;
  font-size: 14px; /* Augmente la taille de l'écriture */
    color: #787676;
    font-weight: bold; /* Texte en gras */
}
   
   /* --- Boutons de navigation --- */
   .nav-btn {
     background: none;
     border: none;
     font-size: 24px;
     cursor: pointer;
     color: #ff7f00;
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

/* --- Section Contact & Inscription --- */
.contact-section {
  padding: 60px 5%;
  text-align: center;
  background: linear-gradient(to bottom, #f4f4f4, #ffffff);
}

.contact-section h2 {
  font-size: 2.5em;
  color: #003366;
  margin-bottom: 30px;
  font-weight: bold;
}

/* --- Conteneur principal --- */
.contact-container {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 40px; /* Espace entre le formulaire et l'image */
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
  border: 1.5px solid #003366;
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

/* Assurer un espacement uniforme entre les sections */
.section {
  padding: 20px 5%; /* Uniformiser l’espacement interne */
  min-height: 300px; /* Ajuste selon ton besoin */
}

h2 {
  font-size: 30%;
  color: #003366;
  margin-bottom: 30px;
  font-weight: bold;
}

/* --- Image de contact à droite (hauteur égale au formulaire) --- */
.contact-image {
  flex: 1;
  min-width: 450px;
  max-width: 400px;
  display: flex;
  justify-content: center;
  align-items: stretch;
  margin-left: 20px; /* Espace entre l'image et le formulaire */
}

.contact-image img {
  width: 100%;
  height: 100%; /* Ajustement pour que l'image soit égale en hauteur */
  object-fit: cover; /* Pour que l'image garde une bonne apparence */
  border-radius: 10px;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);

  clip-path: ellipse(90% 70% at 90% 60%);

background: linear-gradient(120deg, #003366, #fff);

}

</style>
   