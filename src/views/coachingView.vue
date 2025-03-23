<template> 
  <section id="coaching">
    <!-- 🎯 HERO SECTION -->
    <div class="hero">
      <div class="text-content">
        <h1>🚀 Boostez Vos Compétences avec un Coaching Personnalisé</h1>
        <p>🎯 Atteignez vos objectifs de vente avec un accompagnement sur mesure.</p>
        <button class="cta-button">📅 Réserver une Séance</button>
      </div>
      <img src="../assets/images/baniere.jpeg" alt="Coaching Vente" class="hero-image" />
    </div>

    <!-- 🎯 PROGRAMMES DE COACHING -->
    <div class="section coaching-list">
      <h2>✨ Choisissez Votre Coaching</h2>
      <div class="coaching-container">
        <div v-for="(coaching, index) in coachingOptions" :key="index" class="coaching-card">
          <h3>{{ coaching.title }}</h3>
          <p><strong>🎯 Public :</strong> {{ coaching.public }}</p>
          <ul>
            <li v-for="(obj, i) in coaching.objectives" :key="i">✔️ {{ obj }}</li>
          </ul>
          <p><strong>📅 Durée :</strong> {{ coaching.duration }}</p>
          <p><strong>💰 Tarif :</strong> {{ coaching.price }}</p>
          <button class="cta-button">📞 Réserver une Séance</button>
        </div>
      </div>
    </div>

    <!-- 🎯 FAQ -->
    <div class="section faq">
      <h2>❓ Questions Fréquentes</h2>
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
      <button class="cta-button">📩 Contactez-Nous</button>
    </div>
  </section>
</template>

<script setup>
import { ref } from "vue";

// 🔹 Coaching Options
const coachingOptions = ref([
  {
    title: "📈 Coaching pour Commerçants & Prestataires",
    public: "Commerçants (boutiques, marchés) & Prestataires (coiffeurs, consultants...)",
    objectives: ["Améliorer les techniques de vente", "Augmenter le chiffre d'affaires", "Fidéliser la clientèle"],
    duration: "3 à 6 sessions",
    price: "150 000 FCFA - 300 000 FCFA"
  },
  {
    title: "🚀 Coaching pour Porteurs de Projets",
    public: "Entrepreneurs, startups, freelances",
    objectives: ["Structurer son idée de business", "Définir une stratégie commerciale", "Préparer le lancement"],
    duration: "4 à 8 sessions",
    price: "200 000 FCFA - 400 000 FCFA"
  },
  {
    title: "🎓 Coaching pour Étudiants & Reconversion",
    public: "Étudiants, chômeurs, personnes en reconversion",
    objectives: ["Acquérir les bases de la vente", "Se préparer à l'emploi", "Développer une expertise"],
    duration: "3 à 6 sessions",
    price: "100 000 FCFA - 200 000 FCFA"
  }
]);

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
  padding: 50px 8%;
  text-align: center;
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
  font-size: 2.5rem;
  line-height: 1.3;
}

.hero p {
  font-size: 1.2rem;
  margin-bottom: 20px;
}

.hero-image {
  max-width: 400px;
  border-radius: 20px;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2);
}

/* 🔹 COACHING CARDS */
.coaching-container {
  display: flex;
  justify-content: center;
  gap: 25px;
  flex-wrap: wrap;
  margin-top: 20px;
}

.coaching-card {
  background: white;
  padding: 20px;
  border-radius: 15px;
  box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.1);
  text-align: center;
  max-width: 310px;
  transition: transform 0.3s;
}

.coaching-card:hover {
  transform: scale(1.05);
}

/* 🔹 FAQ */
.faq-container {
  max-width: 750px;
  margin: auto;
}

.faq-item {
  background: white;
  padding: 15px;
  border-radius: 8px;
  cursor: pointer;
  margin-bottom: 10px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
}

.faq-title {
  font-size: 1.2rem;
  display: flex;
  justify-content: space-between;
}

/* 🔹 BOUTONS */
.cta-button {
  background: #ff7f00;
  color: white;
  padding: 10px 18px;
  font-size: 1.1rem;
  border-radius: 8px;
  transition: 0.3s;
}

.cta-button:hover {
  background: #003366;
}

/* 🔹 RESPONSIVE */
@media (max-width: 900px) {
  .hero {
    flex-direction: column;
    text-align: center;
    padding: 50px 6%;
  }

  .hero-image {
    max-width: 100%;
    margin-top: 20px;
  }

  .coaching-container {
    flex-direction: column;
    align-items: center;
  }
}
</style>
