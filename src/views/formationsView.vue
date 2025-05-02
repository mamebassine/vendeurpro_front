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
        <img src="../assets/images/vendeur27.jpg" alt="Formation en vente" class="hero-image" />
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
            <h4>Bootcamps</h4>
            <div class="card-grid">
              
              <router-link to="/bootcamp-vendeur" class="card">
                <h3>L'Art de Vendre</h3>
                <p>
                  <strong>Objectifs :</strong>
                  Acquérir les techniques de vente essentielles pour booster vos ventes.
                </p>
              </router-link>

              <router-link to="/bootcamp-services" class="card">
                <h3>Vente Digitale et E-commerce</h3>
                <p>
                  <strong>Objectifs :</strong>
                  Maîtrisez la vente en ligne et le e-commerce.
                </p>
              </router-link>

              <router-link to="/bootcamp-produits" class="card">
                <h3>Vente de Produits</h3>
                <p>
                  <strong>Objectifs :</strong>
                  Apprenez à vendre efficacement aux entreprises.
                </p>
              </router-link>

            </div>
          </section>

          <!-- Formations Certifiantes -->
          <section>
            <h4>Formations Certifiantes</h4>
            <div class="card-grid">

              <router-link to="/formation-vente-directe" class="card">
                <h3>Pro Vendeur BtoC</h3>
                <p>
                  <strong>Objectifs :</strong>

                  Maîtrisez la vente en boutique, sur les réseaux sociaux et WhatsApp.</p>
              </router-link>

              <router-link to="/formation-btob" class="card">
                <h3>Closer BtoB</h3>
                <p>
                  <strong>Objectifs :</strong>

                  Devenez un expert en vente aux entreprises et prospection commerciale.</p>
              </router-link>

              <router-link to="/formation-vente-digitale" class="card">
                <h3>Social Selling Master</h3>
                <p>
                  <strong>Objectifs :</strong>

                  Maîtrisez la vente via TikTok, WhatsApp et autres canaux digitaux.</p>
              </router-link>

            </div>
          </section>

          <!-- Modules de 6 Cartes -->
            <section>
                <h4>Modules à la Carte pour une Formation Continue</h4>

                    <div class="flex flex-wrap gap-6">
                      <div
  v-for="(module, index) in modules"
  :key="index"
  class="border border-gray-300 rounded-xl shadow p-6 relative bg-white transition-all duration-500 ease-in-out overflow-hidden md:w-[48%] md:h-[38%] w-full"
>
                         <div class="flex justify-between items-center">
                          <!-- Supprimé le numéro ici -->
                          <h3 class="text-lg font-semibold text-gray-800">
                            {{ module.title }}
                          </h3>
                          <button @click="toggleModule(index)">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              :class="{ 'rotate-180': expanded === index }"
                              class="h-6 w-6 transition-transform text-orange-500"
                              fill="none"
                              viewBox="0 0 24 24"
                              stroke="currentColor"
                            >
                              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                d="M19 9l-7 7-7-7" />
                            </svg>
                          </button>
                        </div>

                        <!-- Court résumé affiché par défaut -->
                        <p class="mt-2 text-sm text-gray-600">
                          {{ module.objectif }}
                        </p>

                        <!-- Affichage des détails seulement si cliqué -->
                        <transition name="fade">
                          <div v-if="expanded === index" class="mt-4 text-gray-700 space-y-3">
                            <div>
                              <strong>👥 À qui s’adresse ce module ?</strong>
                              <ul class="list-disc list-inside text-sm mt-1">
                                <li v-for="(aud, i) in module.audience" :key="i">{{ aud }}</li>
                              </ul>
                            </div>
                            <div>
                              <strong>📘 Ce que vous apprendrez :</strong>
                              <ul class="list-disc list-inside text-sm mt-1">
                                <li v-for="(item, i) in module.apprentissages" :key="i">{{ item }}</li>
                              </ul>
                            </div>
                            <div>
                              <strong>⏱ Durée :</strong> {{ module.duree }}<br />
                              <strong>💻 Mode :</strong> {{ module.mode }}<br />
                              <span v-if="module.date"><strong>📅 Prochaine session :</strong> {{ module.date }}</span>
                            </div>
                          </div>
                        </transition>
                      </div>
                    </div>
          </section>

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
  <!-- <button class="cta-button">🚀 Rejoignez-les</button> -->
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
  <!-- <button class="cta-button">📩 Contactez-Nous</button> -->
   
  <router-link to="/contact" class="cta-button">📩 Contactez-Nous</router-link>

</section>
</template>
 
<!-- <script setup>
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

//  LES 6 CARTES
const expanded = ref(null) // Un seul module ouvert à la fois

const toggle = (index) => {
  expanded.value = expanded.value === index ? null : index
}



const modules = ref([
  {
    title: "Maîtriser l’art du pitch commercial",
    objectif: "Savoir convaincre rapidement avec un discours clair, structuré et captivant.",
    audience: ["Vendeurs terrain ou boutique", "Entrepreneurs", "Toute personne amenée à présenter une offre ou un projet"],
    apprentissages: [
      "Construire un pitch en 3 temps",
      "Utiliser les émotions et l’effet de surprise",
      "Adapter son message à son interlocuteur",
      "Exprimer de la valeur en peu de mots"
    ],
    duree: "1 journée (7 heures)",
    mode: "Présentiel (Dakar)",
    date: ""
  },
  {
    title: "Vendre avec WhatsApp et les réseaux sociaux",
    objectif: "Développer ses ventes en maîtrisant les canaux les plus utilisés au Sénégal.",
    audience: ["Commerçants et e-commerçants", "Auto-entrepreneurs", "Community managers"],
    apprentissages: [
      "Utiliser WhatsApp Business pour la vente",
      "Créer du contenu vendeur sur Facebook, Instagram, TikTok",
      "Répondre efficacement aux messages et commentaires",
      "Mettre en place un mini tunnel de vente via les réseaux"
    ],
    duree: "1 journée (7 heures)",
    mode: "Présentiel (Dakar)",
    date: "[Date à définir]"
  },
  {
    title: "Techniques de relance et suivi client",
    objectif: "Convertir plus grâce à un suivi client régulier, humain et stratégique.",
    audience: ["Commerciaux", "Freelances et prestataires de service", "Vendeurs en ligne ou boutique"],
    apprentissages: [
      "Les 5 types de relances efficaces",
      "Que dire et quand le dire",
      "Automatiser certaines étapes sans perdre l’humain",
      "Fidéliser par le suivi régulier"
    ],
    duree: "1 journée (7 heures)",
    mode: "Présentiel (Dakar)",
    date: "[Date à définir]"
  },
  {
    title: "Conclure ses ventes plus facilement",
    objectif: "Apprendre à bien finir le processus de vente avec assurance et efficacité.",
    audience: ["Vendeurs", "Agents immobiliers, commerciaux B2B", "Chargés de clientèle"],
    apprentissages: [
      "Identifier les signaux d’achat",
      "Lever les objections finales",
      "Formuler une proposition de conclusion claire",
      "Techniques de closing adaptées au B2C et B2B"
    ],
    duree: "1 journée (7 heures)",
    mode: "Présentiel (Dakar)",
    date: "[Date à définir]"
  },
  {
    title: "Valoriser ses produits comme un pro",
    objectif: "Savoir mettre en avant ses produits pour susciter l’envie d’acheter.",
    audience: ["Commerçants", "Vendeurs en ligne ou en boutique", "Présentateurs de produits/services"],
    apprentissages: [
      "Les règles du storytelling produit",
      "Techniques d’exposition physique ou digitale",
      "Comment créer une fiche produit convaincante",
      "Parler bénéfices plutôt que caractéristiques"
    ],
    duree: "1 journée (7 heures)",
    mode: "Présentiel (Dakar)",
    date: "[Date à définir]"
  },
  {
    title: "Gérer son portefeuille client efficacement",
    objectif: "Organiser, classer et exploiter son portefeuille client pour vendre plus.",
    audience: ["Commerciaux terrain ou télévente", "Entrepreneurs avec une base client", "Agents immobiliers, prestataires de service"],
    apprentissages: [
      "Segmentation et priorisation",
      "Mise en place d’un tableau de bord client",
      "Suivi des opportunités de vente",
      "Réactivation des clients dormants"
    ],
    duree: "1 journée (7 heures)",
    mode: "Présentiel (Dakar)",
    date: "[Date à définir]"
  }
]);

const expanded = ref(null);

const toggle = (index) => {
  expanded.value = expanded.value === index ? null : index;
};




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
</script> -->


<script setup>
import { ref, onMounted, onUnmounted } from "vue";

// 🔹 Données réactives pour formations
const formations = ref([
  {
    img: "/images/banierea.jpg",
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


// 🔹 Modules (6 cartes)
const expanded = ref(null); // Un seul module ouvert à la fois
const toggleModule = (index) => {
  expanded.value = expanded.value === index ? null : index;
};

const modules = ref([
  {
    title: "Maîtriser l’art du pitch commercial",
    objectif: "Savoir convaincre rapidement avec un discours clair, structuré et captivant.",
    audience: ["Vendeurs terrain ou boutique", "Entrepreneurs", "Toute personne amenée à présenter une offre ou un projet"],
    apprentissages: [
      "Construire un pitch en 3 temps",
      "Utiliser les émotions et l’effet de surprise",
      "Adapter son message à son interlocuteur",
      "Exprimer de la valeur en peu de mots"
    ],
    duree: "1 journée (7 heures)",
    mode: "Présentiel (Dakar)",
    date: ""
  },
  {
    title: "Vendre avec WhatsApp et les réseaux sociaux",
    objectif: "Développer ses ventes en maîtrisant les canaux les plus utilisés au Sénégal.",
    audience: ["Commerçants et e-commerçants", "Auto-entrepreneurs", "Community managers"],
    apprentissages: [
      "Utiliser WhatsApp Business pour la vente",
      "Créer du contenu vendeur sur Facebook, Instagram, TikTok",
      "Répondre efficacement aux messages et commentaires",
      "Mettre en place un mini tunnel de vente via les réseaux"
    ],
    duree: "1 journée (7 heures)",
    mode: "Présentiel (Dakar)",
    date: "[Date à définir]"
  },
  {
    title: "Techniques de relance et suivi client",
    objectif: "Convertir plus grâce à un suivi client régulier, humain et stratégique.",
    audience: ["Commerciaux", "Freelances et prestataires de service", "Vendeurs en ligne ou boutique"],
    apprentissages: [
      "Les 5 types de relances efficaces",
      "Que dire et quand le dire",
      "Automatiser certaines étapes sans perdre l’humain",
      "Fidéliser par le suivi régulier"
    ],
    duree: "1 journée (7 heures)",
    mode: "Présentiel (Dakar)",
    date: "[Date à définir]"
  },
  {
    title: "Conclure ses ventes plus facilement",
    objectif: "Apprendre à bien finir le processus de vente avec assurance et efficacité.",
    audience: ["Vendeurs", "Agents immobiliers, commerciaux B2B", "Chargés de clientèle"],
    apprentissages: [
      "Identifier les signaux d’achat",
      "Lever les objections finales",
      "Formuler une proposition de conclusion claire",
      "Techniques de closing adaptées au B2C et B2B"
    ],
    duree: "1 journée (7 heures)",
    mode: "Présentiel (Dakar)",
    date: "[Date à définir]"
  },
  {
    title: "Valoriser ses produits comme un pro",
    objectif: "Savoir mettre en avant ses produits pour susciter l’envie d’acheter.",
    audience: ["Commerçants", "Vendeurs en ligne ou en boutique", "Présentateurs de produits/services"],
    apprentissages: [
      "Les règles du storytelling produit",
      "Techniques d’exposition physique ou digitale",
      "Comment créer une fiche produit convaincante",
      "Parler bénéfices plutôt que caractéristiques"
    ],
    duree: "1 journée (7 heures)",
    mode: "Présentiel (Dakar)",
    date: "[Date à définir]"
  },
  {
    title: "Gérer son portefeuille client efficacement",
    objectif: "Organiser, classer et exploiter son portefeuille client pour vendre plus.",
    audience: ["Commerciaux terrain ou télévente", "Entrepreneurs avec une base client", "Agents immobiliers, prestataires de service"],
    apprentissages: [
      "Segmentation et priorisation",
      "Mise en place d’un tableau de bord client",
      "Suivi des opportunités de vente",
      "Réactivation des clients dormants"
    ],
    duree: "1 journée (7 heures)",
    mode: "Présentiel (Dakar)",
    date: "[Date à définir]"
  }
]);

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
    gap: 50px;
    background: linear-gradient(120deg, #003366, #fff);
    color: white;
    padding: 17px 4%;
    
  }
.hero-image {
    max-width: 49%;
    border-radius: 20px;
    /* box-shadow: 5px 5px 13px rgba(0, 0, 0, 0.2); */

    /* border-top-left-radius: 797px; 
    border-top-left-radius: 460px;

border-bottom-right-radius: 260px;
    border-bottom-left-radius: 60px; */
padding: 5px; 

border-top-left-radius: 707px; 
    /* border-bottom-right-radius: 10px;  */
    background-color: #003366;
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
/* responsive */
/* Responsiveness HERO + FORMATIONS */
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

.card:hover, h3 p {
  transform: translateY(-4px);
background-color:#003366 ; 
/* box-shadow: 0 12px 24px rgba(0, 0, 0, 0.1); */
}

.card:hover h3,
.card:hover p {
  color: #ff7f00;
}

.card h3 {
  margin-bottom: 0.75rem;
  font-size: 1.2rem;
  color: #000;

  font-weight: bold; /* Gras pour le titre */

  
}

.card p {
  color: #555;
  font-size: 15px;
  line-height: 1.2;
  text-align: justify;
}


/* POUR LES 6 DERNIERS CARTES EN BAS */
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
  