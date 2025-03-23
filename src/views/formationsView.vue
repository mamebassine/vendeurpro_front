<template>
    <section id="formations">
      <!-- 🎯 HERO SECTION -->
      <div class="hero">
        <div class="text-content">
          <h1>🚀 Formez-vous aux Techniques de Vente Modernes avec <span>VendeurPro</span></h1>
          <p>🎯 Bootcamps intensifs, formation certifiante et modules à la carte pour booster vos compétences en vente.</p>
          <button class="cta-button">🎓 Découvrez Nos Formations</button>
        </div>
        <img src="../assets/images/baniere.jpeg" alt="Formation en vente" class="hero-image" />
      </div>
  
      <!-- 🎯 NOS FORMATIONS -->
      <div class="section formations">
        <h2>✨ Choisissez la Formation qui Vous Correspond</h2>
        <p>📘 Découvrez nos bootcamps, notre formation certifiante et nos modules à la carte.</p>
  
        <div class="formation-list">
          <div v-for="(formation, index) in formations" :key="index" class="formation-card">
            <img src="../assets/images/baniere.jpeg" alt="Formation en vente" class="hero-image" />
            <h3>{{ formation.title }}</h3>
            <p>{{ formation.description }}</p>
            <button class="cta-button">📖 Voir le Programme</button>
          </div>
        </div>
      </div>









  
      <!-- 🎯 TÉMOIGNAGES -->
      <div class="section temoignages">
        <h2>🎤 Ils Ont Transformé Leurs Ventes avec VendeurPro</h2>
        <div class="testimonial-container">
          <button @click="prevTestimonial" class="nav-btn">❮</button>
          <div class="testimonial">
            <img :src="testimonials[currentIndex].img" alt="Témoignage" />
            <p>"{{ testimonials[currentIndex].text }}"</p>
            <h4>- {{ testimonials[currentIndex].author }}</h4>
          </div>
          <button @click="nextTestimonial" class="nav-btn">❯</button>
        </div>
        <button class="cta-button">🚀 Rejoignez-les</button>
      </div>
  
      <!-- 🎯 FAQ -->
      <div class="section faq">
        <h2>❓ Questions Fréquentes</h2>
        <div class="faq-container">
          <div v-for="(item, index) in faqItems" :key="index" class="faq-item">
            <h3 @click="toggleFAQ(index)" class="faq-title">{{ item.question }}</h3>
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
  import { ref, onMounted, onUnmounted } from "vue";
  
  // 🔹 Liste des formations dynamiques
  const formations = ref([
    {
      img: "../assets/images/baniere.jpeg",
      title: "Bootcamp : L'Art de Vendre",
      description: "💡 Acquérez les techniques de vente essentielles pour booster vos ventes.",
    },
    {
      img: "../assets/images/baniere.jpeg",
      title: "Vente Digitale et E-commerce",
      description: "🛒 Maîtrisez la vente en ligne et les stratégies e-commerce modernes.",
    },
    {
      img: "../assets/images/baniere.jpeg",
      title: "Vente B2B : Techniques avancées",
      description: "📈 Apprenez à vendre aux entreprises et à négocier efficacement.",
    },
    {
      img: "../assets/images/baniere.jpeg",
      title: "Modules à la Carte : Vente & Négociation",
      description: "📊 Formation flexible sur la prospection, les objections et plus encore.",
    },
  ]);
  
  
  // 🔹 Témoignages avec slider automatique
  const testimonials = ref([
    { img: "/images/baniere.jpeg", text: "J'ai augmenté mes ventes de 30% en 3 mois !", author: "Mamadou Diallo" },
    { img: "/images/baniere.jpeg", text: "Une formation ultra-pratique qui a boosté mon business.", author: "Aminata Sow" },
    { img: "/images/baniere.jpeg", text: "Enfin une formation qui enseigne des techniques concrètes.", author: "Serigne Ndiaye" },
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
    { question: "Qui peut participer à vos formations ?", answer: "Nos formations sont ouvertes à tous.", isOpen: false },
    { question: "Quel est le format des formations ?", answer: "Nous proposons des formations en ligne et en présentiel.", isOpen: false },
    { question: "Y a-t-il un suivi après la formation ?", answer: "Oui, nous offrons du coaching après la formation.", isOpen: false },
    { question: "Comment puis-je m'inscrire ?", answer: "Inscrivez-vous via notre site ou contactez-nous.", isOpen: false },
  ]);
  
  const toggleFAQ = (index) => {
    faqItems.value = faqItems.value.map((item, i) => ({
      ...item,
      isOpen: i === index ? !item.isOpen : false,
    }));
  };
  </script>
  
  <style scoped>
#formations{
    margin-top: 9%;
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
  
  .hero h1 span {
    color: #ffeb3b;
  }
  
  .hero-image {
    max-width: 45%;
    border-radius: 20px;
    box-shadow: 5px 5px 15px rgba(0, 0, 0, 0.2);
  }
  
  /* 🔹 FORMATIONS */
  .formation-list {
    display: flex;
    justify-content: center;
    gap: 30px;
    flex-wrap: wrap;
  }
  
  .formation-card {
    background: white;
    padding: 20px;
    border-radius: 15px;
    box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.1);
    text-align: center;
    max-width: 280px;
    transition: transform 0.3s ease-in-out;
  }
  
  .formation-card:hover {
    transform: scale(1.05);
  }
  
  .formation-image {
    width: 100%;
    border-radius: 15px;
    margin-bottom: 15px;
  }





  
  /* 🔹 TÉMOIGNAGES */
  .testimonial-container {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 20px;
  }
  
  .testimonial img {
    width: 80px;
    border-radius: 50%;
    margin-bottom: 10px;
  }
  
  /* 🔹 BOUTONS CTA */
  .cta-button {
    background: #ff7f00;
    padding: 12px 20px;
    color: white;
    border: none;
    cursor: pointer;
    font-size: 1.1em;
    border-radius: 8px;
    transition: background 0.3s ease-in-out;
  }
  
  .cta-button:hover {
    background: #003366;
  }
  
  /* 🔹 RESPONSIVE */
  @media (max-width: 900px) {
    .hero {
      flex-direction: column;
      text-align: center;
    }
    .hero-image {
      max-width: 80%;
    }
  }
  </style>
  