<template>
  <section id="about">
    <!-- 🔹 Section Notre Mission -->
    <div class="section mission">
      <div class="text-content">
        <h2>Notre Mission : Former les Vendeurs de Demain</h2>
        <p>
          Chez <strong>VendeurPro</strong>, nous croyons que la vente est un métier passionnant et accessible à tous.
          Notre mission est de former les commerçants, consultants, étudiants, chômeurs, porteurs de projets et toute personne 
          désireuse d'acquérir des compétences en vente. Nous vous accompagnons pour maîtriser les techniques modernes de vente et 
          booster vos résultats professionnels.
        </p>
      </div>
      <img src="../assets/images/baniere.jpeg" alt="Notre équipe en action" class="mission-image" />
    </div>

    <!-- 🔹 Section Notre Équipe -->
    <div class="section equipe">
      <h2>Rencontrez Notre Équipe d'Experts en Vente</h2>
      <div class="team-container">
        <div v-for="(coach, index) in team" :key="index" class="team-card">
          <!-- <img :src="/images/baniere.jpeg" :alt="coach.nom" class="team-photo" /> -->
          <img :src="'/images/baniere.jpeg'" :alt="coach.nom" class="team-photo" />

          <h3>{{ coach.nom }}</h3>
          <p>{{ coach.titre }}</p>
          <p class="bio">{{ coach.bio }}</p>
          <a v-if="coach.linkedin" :href="coach.linkedin" target="_blank" class="linkedin-btn">LinkedIn</a>
        </div>
      </div>
    </div>

    <!-- 🔹 Section Notre Histoire -->
    <div class="section histoire">
      <h2>Notre Histoire</h2>
      <p>
        <strong>VendeurPro</strong> a été créé en 2024 pour combler le manque de formations en vente au Sénégal.
        Depuis, nous avons formé plus de <strong>50 professionnels</strong> et accompagné des entreprises pour améliorer leurs performances commerciales.
      </p>
      <ul class="chiffres-cles">
        <li><strong>50+</strong> participants formés</li>
        <li><strong>90%</strong> de satisfaction</li>
      </ul>
    </div>

    <!-- 🔹 Section Témoignages -->
    <div class="section temoignages">
      <h2>Ils Ont Transformé Leurs Ventes avec VendeurPro</h2>
      <div class="testimonial-container">
        <button @click="prevTestimonial" class="nav-btn">❮</button>
        <div class="testimonial">
          <img :src="testimonials[currentIndex].img" alt="Témoignage" />
          <p>"{{ testimonials[currentIndex].text }}"</p>
          <h4>- {{ testimonials[currentIndex].author }}</h4>
        </div>
        <button @click="nextTestimonial" class="nav-btn">❯</button>
      </div>
      <button class="cta-button">Rejoignez-les</button>
    </div>

    <!-- 🔹 Section FAQ -->
    <div class="section faq">
      <h2>Questions Fréquentes</h2>
      <div class="faq-container">
        <div v-for="(item, index) in faqItems" :key="index" class="faq-item">
          <h3 @click="toggleFAQ(index)" class="faq-title">{{ item.question }}</h3>
          <transition name="fade">
            <p v-if="item.isOpen" class="faq-answer">{{ item.answer }}</p>
          </transition>
        </div>
      </div>
      <button class="cta-button">Contactez-Nous</button>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from "vue";

// 🔹 Équipe
const team = ref([
  {
    nom: "Aliou Ba",
    titre: "Expert en Vente B2B",
    bio: "10 ans d'expérience dans la vente aux entreprises et le coaching.",
    photo: "../assets/images/baniere.jpeg",
    linkedin: "https://linkedin.com/in/aliouba",
  },
  {
    nom: "Fatou Ndiaye",
    titre: "Coach en Techniques de Vente",
    bio: "Spécialiste en retail et e-commerce, elle accompagne les entrepreneurs dans leur croissance.",
    photo: "../assets/images/baniere.jpeg",
    linkedin: "https://linkedin.com/in/fatoundiaye",
  },
]);

// 🔹 Témoignages avec slider
const testimonials = ref([
  
  { img: "/images/baniere.jpeg", text: "Grâce à VendeurPro, j'ai augmenté mes ventes de 30% en 3 mois !", author: "Mamadou Diallo" },
  { img: "/images/baniere.jpeg", text: "Une formation ultra-pratique qui a boosté mon business.", author: "Aminata Sow" },
  { img: "/images/baniere.jpeg", text: "Enfin une formation qui enseigne des techniques concrètes et applicables.", author: "Serigne Ndiaye" },
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
  { question: "Qui peut participer à vos formations ?", answer: "Nos formations s'adressent à tous ceux qui veulent apprendre la vente.", isOpen: false },
  { question: "Quel est le format des formations ?", answer: "Nous proposons des formations en présentiel et en ligne.", isOpen: false },
  { question: "Y a-t-il un suivi après la formation ?", answer: "Oui, nous proposons du coaching individuel.", isOpen: false },
  { question: "Comment puis-je m'inscrire ?", answer: "Remplissez le formulaire d'inscription sur notre site.", isOpen: false },
]);

const toggleFAQ = (index) => {
  faqItems.value = faqItems.value.map((item, i) => ({
    ...item,
    isOpen: i === index ? !item.isOpen : false,
  }));
};
</script>

<style scoped>
#about{
  margin-top: 10%;

}


/* Styles généraux */
.section {
  padding: 60px 5%;
  text-align: center;
  background: #f9f9f9;
  margin-bottom: 40px;
}

/* --- Mission --- */
.mission {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 40px;
}
.mission img {
  max-width: 40%;
}

/* --- Équipe --- */
.team-container {
  display: flex;
  justify-content: center;
  gap: 20px;
}

/* --- Témoignages --- */
.testimonial-container {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 20px;
}

/* --- FAQ --- */
.faq-item {
  background: white;
  padding: 15px;
  border-radius: 8px;
  cursor: pointer;
  transition: all 0.3s ease;
}
.faq-title {
  font-size: 1.2em;
}
.faq-answer {
  margin-top: 10px;
  font-size: 1em;
}

/* --- CTA --- */
.cta-button {
  background: #ff7f00;
  padding: 12px 20px;
  font-size: 1.2em;
  color: white;
  border: none;
  cursor: pointer;
}
.cta-button:hover {
  background: #003366;
}
</style>
