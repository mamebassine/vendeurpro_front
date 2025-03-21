<template>
    <div>
      <h1>A propos de nous</h1>
    </div>
    <!-- A PROPOS SECTIOM -->

<section class="about-us">
    <div class="container">
      <h2 class="title">À propos de nous</h2>
      <div class="content">
        <!-- Section texte -->
        <div class="text-section">
          <p class="description">
            Nous sommes une équipe passionnée par l'entrepreneuriat et la vente, dédiée à accompagner les entrepreneurs et commerçants à maximiser leur potentiel. Grâce à notre formation
            <strong>"Maîtriser l'art de la vente & booster ses revenus"</strong>, nous offrons des stratégies éprouvées pour vendre efficacement, adaptées aux réalités du marché ouest-africain.
          </p>
          <p class="mission">
            Notre mission est de vous fournir les outils et techniques nécessaires pour structurer votre offre, attirer plus de clients et augmenter vos ventes, que vous vendiez des produits physiques ou des services.
          </p>
          <p class="contact">
            📲 Contactez-nous via WhatsApp ou téléphone au <strong>77 619 89 82</strong>.
          </p>
        </div>

        <!-- Section vidéo -->
        <div class="media-section">
          <video class="promo-video" controls>
            <source src="../assets/videos.promo.mp4" type="video/mp4" />
            Votre navigateur ne supporte pas la vidéo.
          </video>
        </div>
      </div>

      <!-- Image en bas avec effet arc-en-ciel -->
      <div class="image-container">
        <img src="../assets/images/baniere.jpeg" alt="Notre équipe" class="team-image" />
      </div>
    </div>
  </section>
  </template>
  
  <script>
  export default {
    name: "ContactView",
  };
  </script>



<style scoped>

/* ICI SECTION A PROPOS */
.about-us {
  margin-top: 5%;   /*Fais descendre*/

  background: rgba(0, 51, 102, 0.2); /* Fond bleu très transparent */
  padding: 60px 20px;
  text-align: center;
  border-radius: 15px;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
  animation: fadeIn 1s ease-in-out;
}

.container {
  max-width: 1000px;
  margin: auto;
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

.content {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
  gap: 20px;
}

.text-section {
  flex: 1;
  text-align: left;
  padding: 20px;
}

.description, .mission, .contact {
  font-size: 18px;
  line-height: 1.6;
  color: #555;
  margin-bottom: 15px;
}

.media-section {
  flex: 1;
  text-align: center;
  position: relative;
  top: -5px; /* Superposition légère */
}

.promo-video {
  width: 100%;
  max-width: 400%;
  border-radius: 5px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);
  margin-bottom: 45%;
  margin-left: 54%;

}

.image-container {
  margin-top: 30px;
  position: relative;
  display: flex;
  justify-content: center;
}

.team-image {
  width: 50%;
  max-width: 100%;
  border-radius: 10px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);
  animation: rainbow-border 3s infinite alternate;
}

/* Effet arc-en-ciel */
@keyframes rainbow-border {
  0% { box-shadow: 0 0 15px #ff8c00; }
  50% { box-shadow: 0 0 15px #ff2d55; }
  100% { box-shadow: 0 0 15px #6c5ce7; }
}

@keyframes fadeIn {
  from { opacity: 0; transform: translateY(-20px); }
  to { opacity: 1; transform: translateY(0); }
}
</style>