<template>
    <section id="webinaires">
      <!-- 🎯 HERO SECTION -->
      <div class="hero">
        <div class="text-content">
          <h1>📢 Apprenez les Secrets des Pros de la Vente avec Nos Webinaires Gratuits</h1>
          <p>🚀 Découvrez des techniques éprouvées pour booster vos ventes et transformez votre business.</p>
          <!-- <button class="cta-button">🎓 Inscrivez-vous au Prochain Webinaire</button> -->

          <router-link to="/contact" class="cta-button">🎓 Inscrivez-vous au Prochain Webinaire</router-link>

        </div>
        <img src="../assets/images/baniere.jpeg" alt="Webinaire en action" class="hero-image" />
      </div>
  
      <!-- 🎯 POURQUOI PARTICIPER -->
      <div class="section why-webinaires">
        <h2>✨ Pourquoi Nos Webinaires Font la Différence ?</h2>
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
        <h2>🎤 Ce Que Disent Nos Participants</h2>
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
        <!-- <button class="cta-button">📩 Inscrivez-vous Maintenant</button> -->

        <router-link to="/contact" class="cta-button">📩 Inscrivez-vous Maintenant</router-link>

      </div>
  
      <!-- 🎯 CONTACT -->
      <div class="section contact">
        <h2>📞 Vous Avez des Questions ? Contactez-Nous !</h2>
        <form @submit.prevent="sendMessage" class="contact-form">
          <input type="text" v-model="form.fullName" placeholder="Nom complet" required />
          <input type="email" v-model="form.email" placeholder="Email" required />
          <input type="tel" v-model="form.phone" placeholder="Téléphone" required />
          <textarea v-model="form.message" placeholder="Votre message"></textarea>
          <!-- <button type="submit" class="cta-button">📤 Envoyer un Message</button> -->

          <router-link to="/contact" class="cta-button">📤 Envoyer un Message</router-link>

        </form>
      </div>
    </section>
  </template>
  
  <script setup>
  import { ref, onMounted, onUnmounted } from "vue";
  
  // 🔹 Pourquoi participer ?
  const whyPoints = ref([
    { icon: "fas fa-user-graduate", title: "Expertise", text: "Des formateurs expérimentés et reconnus." },
    { icon: "fas fa-tools", title: "Contenu Pratique", text: "Des techniques immédiatement applicables." },
    { icon: "fas fa-gift", title: "Gratuité", text: "Accédez à des conseils de qualité sans engagement." },
    { icon: "fas fa-comments", title: "Interactivité", text: "Posez vos questions en direct et obtenez des réponses personnalisées." }
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
 
    font-size: 2.3rem;
  line-height: 1.3;
  margin-top: 2%;
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
  display: flex;
  justify-content: center;
  gap: 30px;
  flex-wrap: wrap;
  margin-top: 30px;
}

.why-card {
  background: white;
  padding: 30px;
  border-radius: 15px;
  box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.1);
  text-align: center;
  max-width: 280px;
  transition: transform 0.3s ease-in-out;
}

.why-card:hover {
  transform: scale(1.05);
}

.why-card i {
  font-size: 2.5rem;
  color: #ff7f00;
  margin-bottom: 10px;
}

/* 🔹 PROCHAINS WEBINAIRES */
.webinaire-list {
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
}

/* 🔹 TÉMOIGNAGES */
.testimonial-container {
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
}

/* 🔹 FAQ */
.faq-container {
  max-width: 800px;
  margin: auto;
  text-align: left;
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
  align-items: center;
}

.faq-answer {
  margin-top: 10px;
  font-size: 1rem;
}

.faq-item:hover {
  background: #f1f1f1;
}

/* 🔹 FORMULAIRE DE CONTACT */
.contact-form {
  max-width: 500px;
  margin: auto;
  display: flex;
  flex-direction: column;
  gap: 15px;
}

.contact-form input,
.contact-form textarea {
  width: 100%;
  padding: 12px;
  border: 2px solid #ddd;
  border-radius: 8px;
  font-size: 1rem;
}

.contact-form textarea {
  height: 120px;
  resize: none;
}

.contact-form button {
  background: #ff7f00;
  color: white;
  padding: 12px 20px;
  font-size: 1.2rem;
  font-weight: bold;
  border-radius: 8px;
  border: none;
  cursor: pointer;
  transition: 0.3s;
}

.contact-form button:hover {
  background: #003366;
}

/* 🔹 BOUTONS GÉNÉRAUX */
.cta-button {
    margin-top: 15px;

  background: #ff7f00;
  color: white;
  padding: 12px 20px;
  font-size: 1.2rem;
  border-radius: 8px;
  border: none;
  cursor: pointer;
  transition: 0.3s;


  

text-decoration: none; /* Supprime le soulignement */
  display: inline-block; /* Évite le léger décalage vertical */
  text-align: center; /* Centre le texte */
}

.cta-button:hover {
  background: #003366;
}

/* 🔹 RESPONSIVE DESIGN */
@media (max-width: 900px) {
  .hero {
    flex-direction: column;
    text-align: center;
  }
  .hero img {
    max-width: 80%;
    margin-top: 20px;
  }
  .why-list,
  .webinaire-list {
    flex-direction: column;
    align-items: center;
  }
}

  </style>
  