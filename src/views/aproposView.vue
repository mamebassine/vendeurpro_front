<template>
<section class="lamission w-full bg-white py-1">
  <div class="relative max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
    
    <!-- Marge top ajoutée ici pour descendre l’image -->
    <!-- <div id="map" class="relative h-[700px] mt-18 overflow-hidden bg-cover bg-[70%] bg-recovert"> -->

    <div class="bg-cover bg-center rounded-2xl shadow-lg overflow-hidden bg-cover bg-[70%] mx-auto mt-16" 
      style="min-height: 500px; background-image: url('/images/photo26.png');"
      title="Woman holding a mug">
    </div>

    <div class="relative z-10 max-w-3xl mx-auto bg-[#d1d5db] rounded-xl shadow-lg p-6 sm:p-10 mt-[-80px]">
      <h1 class="text-gray-900 font-bold text-3xl mb-4">
        Notre Mission : Former les Vendeurs de Demain
      </h1>
      <p class="text-gray-700 text-sm mb-4">
        Avec des formations :
        <a href="#" class="font-bold text-orange-500 hover:underline">utiles</a>,
        <a href="#" class="font-bold text-orange-500 hover:underline">pratiques</a>,
        <a href="#" class="font-bold text-orange-500 hover:underline">et d'actualités aussi</a>.
      </p>
      <p class="text-base leading-relaxed text-gray-800">
        Chez <strong>VendeurPro</strong>, nous croyons que la vente est un métier passionnant et accessible à tous. 
        Notre mission est de former les commerçants, consultants, étudiants, chômeurs, 
        porteurs de projets et toute personne désireuse d'acquérir des compétences en vente ou
        de se lancer dans le métier de vendeur, que ce soit en boutique ou en B2B.
        <br /><br />
        Nous vous accompagnons pour maîtriser les techniques de vente modernes,
        booster vos résultats et réussir dans votre projet professionnel.
      </p>
    </div>
  </div>
</section>






<!-- SECTION NOTRE ÉQUIPE -->
<section class="team">
  <h2 class="title">LE STUDIO PEDAGOGIQUE</h2>
  <div class="team-members">

    <div class="member">
      <img src="/images/vendeura.jpg" alt="Moro Laetitia" class="styled-card-image" />
      <h3> Moro Laetitia</h3>
      <p>Expert en vente B2B avec 15 ans d'expérience dans la négociation commerciale.</p>
      <a href="https://www.linkedin.com/in/laetitia-moro-36434b292/">Profil LinkedIn</a>
    </div>
    
    <div class="member">
      <img src="/images/vendeurb.png" alt="Diarra Arona" class="styled-card-image" />
      <h3> Diarra Arona</h3>
      <p>Coach en vente et en développement personnel, spécialiste en retail.</p>
      <a href="https://www.linkedin.com/in/aronadiarra/">Profil LinkedIn</a>
    </div>
    <div class="member">
      <img src="/images/Ndiaye Andrien.png" alt="Ndiaye Andrien" class="styled-card-image" />
      <h3> Ndiaye Andrien</h3>
      <p>Formatrice en techniques de persuasion et fidélisation client.</p>
      <a href="https://www.linkedin.com/company/effective-leadership/posts/?feedView=all">Profil LinkedIn</a>
    </div>

    <div class="member">
      <img src="/images/vendeurd.png" alt="Diarra Keba" class="styled-card-image" />
      <h3> Diarra Keba</h3>
      <p>Consultant en stratégie de vente digitale, expert en e-commerce.</p>
      <a href="https://www.linkedin.com/in/keba-diarra-405b3123/">Profil LinkedIn</a>
    </div>
  </div>
  <p class="team-values">
  <span class="values-title">Valeurs :</span> Expertise, Pragmatisme, Accompagnement Personnalisé, Accessibilité.
</p>
</section>



<!-- SECTION NOTRE HISTOIRE -->
<!-- <section class="history">
  <h2 class="title">Notre Histoire</h2>
  <div class="history-content">
    <div class="history-text">
      <p>
        VendeurPro a été créé en 2024 pour répondre à un besoin crucial : combler le déficit de formations dans les
        métiers de la vente au Sénégal. Face à l'utilisation majoritaire de méthodes de vente traditionnelles et à la
        difficulté de trouver des jeunes capables de vendre des solutions, nous avons décidé d'agir.
      </p>
      <p>
        Depuis, nous avons formé des dizaines de professionnels et accompagné un grand nombre d'entreprises dans leur
        croissance, tout en aidant des étudiants, des chômeurs et des porteurs de projets à se lancer dans le métier de
        vendeur.
      </p>
    </div>
    <div class="history-image">
      <img src="/images/baniere.jpeg" alt="Illustration de notre histoire" />
    </div>
  </div>

  <div class="stats">
    <div class="stat-item">
      <img src="/images/baniere.jpeg" alt="Participants formés" />
      <p><strong>50+</strong> participants formés</p>
    </div>
    <div class="stat-item">
      <img src="/images/baniere.jpeg" alt="Taux de satisfaction" />
      <p><strong>90%</strong> de satisfaction</p>
    </div>
    <div class="stat-item">
      <img src="/images/baniere.jpeg" alt="Entreprises accompagnées" />
      <p>De nombreuses entreprises accompagnées</p>
    </div>
  </div>
</section> -->


 <!-- SECTION NOTRE HISTOIRE -->


 <section class="history">
    <h2 class="title">Notre Histoire</h2>
    <div class="history-content">
      <div class="history-text">
        <p>
          <strong>VendeurPro</strong> a été créé en 2024 pour répondre à un besoin crucial : combler le déficit de formations dans les
        métiers de la vente au Sénégal. Face à l'utilisation majoritaire de méthodes de vente traditionnelles et à la
        difficulté de trouver des jeunes capables de vendre des solutions, nous avons décidé d'agir.
        </p>
        <p>
          Depuis, nous avons formé des dizaines de professionnels et accompagné un grand nombre d'entreprises dans leur
        croissance, tout en aidant des étudiants, des chômeurs et des porteurs de projets à se lancer dans le métier de
        vendeur.       
       </p>
      </div>
      <div class="history-image">
        <img src="/images/photo15.jpg" alt="Illustration de notre histoire" />
      </div>
    </div>

    <div class="stats">
  <div class="stat-item">
    <i class="fas fa-user-graduate fa-3x"></i>
    <p><strong>+{{ participants }}</strong> participants formés</p>
  </div>
  <div class="stat-item">
    <i class="fas fa-smile-beam fa-3x"></i>
    <p><strong>{{ satisfaction }}%</strong> de satisfaction</p>
  </div>
  <div class="stat-item">
    <i class="fas fa-building fa-3x"></i>
    <p><strong>+{{ entreprises }}</strong> entreprises accompagnées</p>
  </div>
</div>

  </section>


<!-- SECTION TÉMOIGNAGES --> 
<section class="testimonials">
  <h2 class="title">Ils Ont Transformé Leurs Ventes avec VendeurPro</h2>
  <div class="testimonial-slider">
    <div class="testimonial">
      <div class="testimonial-content">
        <img src="/images/image4.jpeg" alt="Témoignage" class="styled-card-image" />
        <p class="testimonial-text">"+30% de ventes en 3 mois grâce à VendeurPro !"</p>
      </div>
      <span class="testimonial-name">- Khadijatou Barry</span>
    </div>
    <div class="testimonial">
      <div class="testimonial-content">
        <img src="/images/aproposa.jpeg" alt="Témoignage" class="styled-card-image" />
        <p class="testimonial-text">"Grâce à cette formation, j'ai trouvé un nouvel emploi dans la vente !"</p>
      </div>
      <span class="testimonial-name">-Ahmed Sy</span>
    </div>
    <div class="testimonial">
      <div class="testimonial-content">
        <img src="/images/image5.jpeg" alt="Témoignage" class="styled-card-image" />
        <p class="testimonial-text">"Fidélisation accrue de mes clients et augmentation de mes revenus !"</p>
      </div>
      <span class="testimonial-name">- Marie Emmanuelle N'diaye</span>
    </div>
  </div>
  <button class="cta-button">Rejoignez-les</button>
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
    <router-link to="/contact" class="cta-button">📩 Contactez-Nous</router-link>
</section>
</template>




<script setup>
import { ref, onMounted } from 'vue'

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

// SECTION NOTRE HISTOIRE 

const participants = ref(0)
const satisfaction = ref(0)
const entreprises = ref(0)

function animateCounter(refVar, target, duration = 1000) {
  const stepTime = 20
  const steps = duration / stepTime
  const increment = target / steps
  let count = 0

  const interval = setInterval(() => {
    count += increment
    if (count >= target) {
      refVar.value = target
      clearInterval(interval)
    } else {
      refVar.value = Math.floor(count)
    }
  }, stepTime)
}

onMounted(() => {
  animateCounter(participants, 100)
  animateCounter(satisfaction, 90)
  animateCounter(entreprises, 75) // par exemple
})
// SECTION TÉMOIGNAGES 
</script>

<style scoped>

.lamission{
  margin-top: 2%;
background-color: #b6aeae52;
  padding: 20px 5%; /* Uniformiser l’espacement interne */
  min-height: 300px; /* Ajuste selon ton besoin */
}
.mission, .team, .history, .testimonials, .faq {
  margin-top: 5%;
  background: rgba(0, 51, 102, 0.2);
  padding: 60px 20px;
  text-align: center;
  border-radius: 15px;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
  animation: fadeIn 1s ease-in-out;
}
.mission-content {
  display: flex;
  align-items: center;
  justify-content: space-between;
  text-align: left;
  max-width: 1200px;
  margin: auto;
}

.mission-text {
  width: 55%;
  padding-right: 20px;
}

.mission img {
  width: 40%;
  max-width: 500px;
  border-radius: 15px;
  box-shadow: 0 5px 10px rgba(0, 0, 0, 0.2);
}

.title {
  font-size: 36px;
  font-weight: bold;
  color: #000;
  margin-bottom: 30px;
  text-transform: uppercase;
  position: relative;
}

.title::after {
  content: "";
  width: 60px;
  height: 5px;
  background: linear-gradient(90deg, #ff8c00, #ff2d55, #6c5ce7);
  display: block;
  margin: 10px auto;
  border-radius: 10px;
}



/* NOTRE EQUIPE */
.team {
  text-align: center;
  background: rgba(0, 51, 102, 0.2);
  padding: 60px 20px;
  border-radius: 15px;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
  animation: fadeIn 1s ease-in-out;
  
}
.team-members {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 105px;
  margin-top: 30px;
}


.styled-card-image {
  width: 120px;
  height: 140px;
  border-radius: 50%;   /* Forme parfaitement ronde */
  margin: 0 auto 5px auto;  /* Centre l'image et ajoute une marge en bas */
  display: block;
  object-fit: cover;         /* Remplit sans déformer */
  border: 3px solid #ff7f00; /* Optionnel : une bordure propre */
}

.member {
  background: white;
  padding: 18px;
  border-radius: 25px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  width: 250px;              /* Taille fixe des cartes */
  text-align: center;
  transition: transform 0.3s ease;
}

.member:hover {
  transform: translateY(-5px); /* Légère élévation au survol */
}


.team-values {
  margin-top: 30px;
  font-weight: bold;
  color: #003366;
}

.member h3 {
  font-size: 1.5rem;
  color: #003366;
  margin-bottom: 15px;
  font-weight: bold;
}

.member p {
  font-size: 1rem;
  color: #444;
  margin-bottom: 12px;
  line-height: 1.4;
}

.member a {
  text-decoration: none;
  color: #ff7f00;
  font-weight: bold;
  transition: color 0.3s ease;
}

.member a:hover {
  color: #fff;
  background-color: #000;

  padding: 12px 24px;
border-radius: 25%;

}
/* Phrase et titre en bas */
.team-values {
  margin-top: 35px;
  font-weight: 500;
  color: #003366;
  font-size: 1rem;
  max-width: 700px;
  margin-inline: auto;
  line-height: 1.6;
}

.team-values .values-title {
  font-weight: bold;
  font-size: 1.3rem;
  color: #000;
  text-transform: uppercase;
  margin-right: 8px;
}

/* NOTRE HISTOIRE */

.history {
  margin-top: 5%;
  background: rgba(0, 51, 102, 0.1);
  padding: 60px 20px;
  text-align: center;
  border-radius: 20px;
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.08);
  animation: fadeIn 1s ease-in-out;
}

.history .title {
  font-size: 2rem;
  color: #003366;
  margin-bottom: 40px;
  text-transform: uppercase;
  letter-spacing: 1px;
}

.history-content {
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
  max-width: 1200px;
  margin: auto;
  gap: 40px;
  text-align: left;
}

.history-text {
  flex: 1 1 50%;
  font-size: 1.05rem;
  line-height: 1.8;
  color: #333;
  padding-right: 20px;
}

.history-image img {
  width: 100%;
  max-width: 800px; /* augmenté */
  height: 420px;     /* augmenté */
  border-radius: 20px;
  box-shadow: 0 6px 16px rgba(0, 0, 0, 0.15);
  flex: 1 1 40%;
}

/* Stats */
/* ICI */
.stats {
  display: flex;
  justify-content: space-around;
  align-items: center;
  flex-wrap: wrap;
  gap: 2rem;
  padding: 2rem 0;
}

.stat-item {
  text-align: center;
  max-width: 200px;
}

.stat-item i {
  color: #003366;
  margin-bottom: 0.5rem;
}



/* .stats {
  display: flex;
  justify-content: space-evenly;
  flex-wrap: wrap;
  gap: 30px;
  margin-top: 50px;
} */

.stat-item {
  text-align: center;
  background: #fff;
  padding: 30px 2px;
  border-radius: 15px;
  box-shadow: 0 6px 12px rgba(0, 0, 0, 0.08);
  max-width: 320px;
  flex: 1 1 200px;
  transition: transform 0.3s ease;
}

.stat-item:hover {
  transform: translateY(-5px);
}

.stat-item img {
  width: 120px;
  height: 420px;
  object-fit: cover;
  border-radius: 50%;
  margin-bottom: 15px;
  border: 2px solid #003366;
margin-left: 20%;
}

.stat-item p {
  font-size: 1.2rem;
  color: #003366;
}

.stat-item strong {
  font-size: 1.8rem;
  display: block;
  margin-bottom: 5px;
  color: #ff7f00;
}
.team h2{
  font-size: 1.8em;
  font-weight: bold;
  color: #003366;
}

/* --- Section FAQ --- */
.faq-section {
  padding: 60px 5%;
  text-align: center;
  background-color: #f9f9f9;
}

.faq-section h2 {
  font-size: 1.8em;
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

/* SECTION TÉMOIGNAGES */
.testimonials {
  margin-top: 5%;
  background: linear-gradient(135deg, #e0f7fa, #fbe9e7);
  padding: 60px 20px;
  text-align: center;
  border-radius: 20px;
  box-shadow: 0 6px 20px rgba(0, 0, 0, 0.1);
  animation: fadeIn 1s ease-in-out;
}

.testimonials .title {
  font-size: 1.8rem;
  color: #003366;
  margin-bottom: 40px;
  text-transform: uppercase;
  letter-spacing: 1px;
  position: relative;
}

.testimonial-slider {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 30px;
  margin-bottom: 40px;
}

.testimonial {
  background: #fff;
  border-radius: 15px;
  padding: 25px 20px;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.08);
  max-width: 300px;
  flex: 1 1 280px;
  transition: transform 0.3s ease;
}

.testimonial:hover {
  transform: translateY(-5px);
}

.testimonial-content {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.testimonial-content img {
  width: 100px;
  height: 100px;
  object-fit: cover;
  border-radius: 50%;
  margin-bottom: 15px;
  border: 2px solid #ff7f00;
}

.testimonial-text {
  font-size: 1rem;
  color: #333;
  font-style: italic;
  line-height: 1.6;
  margin-bottom: 15px;
}

.testimonial-name {
  font-weight: bold;
  color: #003366;
  font-size: 0.95rem;
}

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
  background-color: #003366;
  color: #fff;
}



/* responsive */

@media (max-width: 1024px) {
  .mission-content,
  .history-content {
    flex-direction: column;
    text-align: center;
    
  }

  .mission-text,
  .history-text {
    width: 100%;
    padding: 0;
    text-align: left;
  }

  .mission img,
  .history-image img {
    width: 100%;
    max-width: 100%;
    height: auto;
    margin-top: 29px;
  }

  .team-members {
    flex-direction: row;
    justify-content: center;
  }

  .stat-item img {
    margin-left: auto;
    margin-right: auto;
  }

  .faq-container {
    max-width: 100%;
  }
}

@media (max-width: 768px) {
  .title {
    font-size: 1.8rem;
    
  }

  .mission,
  .team,
  .history,
  .testimonials,
  .faq {
    padding: 40px 15px;
  }

  .member,
  .stat-item,
  .testimonial {
    max-width: 100%;
  }

  .mission-content,
  .history-content {
    gap: 30px;
  }

  .testimonial-slider {
    flex-direction: column;
  }

  .faq-title {
    font-size: 1rem;
  }

  .faq-answer {
    font-size: 0.9rem;
  }

  .cta-button {
    font-size: 1rem;
    padding: 10px 20px;
  }

  .styled-card-image {
    height: auto;
  }
}

@media (max-width: 480px) {
  .title {
    font-size: 1.6rem;
  }

  .member h3 {
    font-size: 1.2rem;
  }

  .member p,
  .stat-item p,
  .testimonial-text {
    font-size: 0.9rem;
  }

  .testimonial-content img {
    width: 80px;
    height: 80px;
  }

  .faq-title {
    font-size: 0.95rem;
  }

  .faq-answer {
    font-size: 0.85rem;
  }

  .cta-button {
    font-size: 0.95rem;
    padding: 10px 18px;
  }
}

</style>