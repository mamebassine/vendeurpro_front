<template>
  <div class="container">
    <!-- Titre principal -->
    <div class="header-top">
          <h1 class="main-title">Les trois compétences maîtresses que tout vendeur de qualité doit posséder
    </h1>
    </div>

 <!-- DATE + intro -->
    <div class="intro-block">
      <div class="date-block">
        <span class="date">14 mai 2025 - 09:00</span>
      </div>
      <div class="vertical-divider"></div>
<!-- Paragraphe d’introduction -->

    <div class="intro-text">
      <p>
      L'acte de vente dépasse la simple présentation d'un produit ou d'un service.
      Il s'agit essentiellement de comprendre, de persuader et de guider un client tout au long de son parcours d'achat.
      Chez <strong>VendeurPro</strong>, nous sommes convaincus que trois compétences fondamentales distinguent un vendeur ordinaire d'un vendeur exceptionnel.
    </p>
</div>
</div>
 <!-- AUTEUR + SHARE -->
    <div class="author-share-block">
      <div class="author-info">
        <img src="../assets/images/clair2.png" alt="Auteur" class="author-img" />
        <div class="author-text">
          <p class="author-name">Mamadou Ndiaye</p>
          <p class="author-role">Coach en Vente</p>
        </div>
      </div>

      <div class="share-button" @click="shareArticle">
        <span class="share-icon">🔗</span>
        <span class="share-text">Partager</span>
      </div>
    </div>

<!-- Image d’en-tête -->
    <img
      src="../assets/images/former4.jpg"
      alt="Compétences en vente"
      class="header-image" />

    <!-- Liste des compétences -->
    <div class="benefits-wrapper">
      <!-- Compétence 1 -->
      <div class="benefit-item">
        <h3>1. L'écoute active</h3>
        <p>
          L'écoute active se définit par :
        </p>
        <ul>
          <li>Une concentration totale sur le discours du client</li>
          <li>L'identification de ses besoins explicites et implicites</li>
          <li>La reformulation des propos afin de témoigner de sa compréhension</li>
        </ul>
        <p>
          Un vendeur qui pratique une écoute attentive optimise ses ventes, car il est en mesure de proposer une offre qui correspond précisément aux attentes du client.
        </p>
      </div>

      <!-- Compétence 2 -->
      <div class="benefit-item">
        <h3>2. L'art de poser les bonnes questions</h3>
        <p>
          Un vendeur compétent oriente son client par le biais de questions ouvertes :
        </p>
        <blockquote>
          « Quel critère est le plus déterminant pour vous dans cette sélection ? »<br />
          « Quelles difficultés avez-vous rencontrées jusqu'à présent ? »<br />
          « Quelles sont vos attentes vis-à-vis d'une solution idéale ? »
        </blockquote>
        <p>
          Chaque réponse du client constitue une information précieuse pour adapter au mieux son argumentation.
        </p>
      </div>

      <!-- Compétence 3 -->
      <div class="benefit-item">
        <h3>3. La conclusion de vente éthique</h3>
        <p>La conclusion de vente ne doit jamais être forcée :</p>
        <ul>
          <li>Elle accompagne naturellement le client vers une prise de décision</li>
          <li>Elle dissipe les dernières hésitations avec bienveillance</li>
          <li>Elle suggère un engagement clair, sans pression</li>
        </ul>
        <p>
          Une conclusion réussie est le fruit d’un accompagnement cohérent et respectueux.
        </p>
      </div>
    </div>

    <!-- Conclusion -->
    <p class="conclusion">
      La maîtrise de ces trois compétences — écoute active, questionnement stratégique et conclusion éthique — est indispensable pour bâtir une carrière solide dans la vente.
      Chez <strong>VendeurPro</strong>, nous nous engageons à développer ces atouts grâce à des camps d'entraînement, des formations certifiantes et des accompagnements personnalisés intensifs.
    </p>
  </div>
</template>

<script>
export default {
  name: 'CompetencesVenteView',
};
</script>

<style scoped>
.container {
  margin: 50px auto;
  padding: 30px;
  max-width: 1000px;
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  color: #2e2e2e;
}

.header-top {
    margin-top: 3%;

  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
}

.main-title {
  font-size: 3.2rem;
  color: #003366;
  margin: 0;
}

/* DATE PARAGRAPHE  */

.intro-block {
  margin-top: 5%;
  display: flex;
  align-items: center;
  gap: 20px;
  margin-bottom: 24px;
  flex-wrap: wrap;
  
  
}

.date-block {
  font-size: 14px;
  color: #555;
  white-space: nowrap;
 
}

.vertical-divider {
  width: 1px;
  height: 40px;
  background-color: #ccc;
}

.intro-text {
  flex: 1;
  font-size: 16px;
  min-width: 200px;
}

/*  */
.author-share-block {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 20px 0;
  flex-wrap: wrap;
  gap: 10px;
}

.author-info {
  display: flex;
  align-items: center;
  gap: 12px;
}

.author-img {
  width: 50px;
  height: 50px;
  border-radius: 50%;
  object-fit: cover;
}

.author-text {
  display: flex;
  flex-direction: column;
}

.author-name {
  font-weight: bold;
  font-size: 16px;
  margin: 0;
}

.author-role {
  font-size: 14px;
  color: #555;
  margin: 0;
}

.share-button {
  display: flex;
  align-items: center;
  gap: 6px;
  background-color: #003366;
  color: white;
  padding: 8px 12px;
  border-radius: 6px;
  cursor: pointer;
  font-size: 14px;
  transition: background-color 0.3s ease;
}

.share-button:hover {
  background-color: #ff7f00;
}
/*  */

.header-image {
  width: 100%;
  height: auto;
  margin: 24px 0;
  max-height: 350px;
  object-fit: cover;
  border-radius: 6px;
}


/* Wrapper des bénéfices */
.benefits-wrapper {
  display: flex;
  flex-direction: column;
  gap: 24px;
}

.benefit-item {
  background-color: #f9f9f9;
  border-left: 5px solid #003366;
  padding: 16px 20px;
  border-radius: 8px;
  transition: transform 0.3s ease;
}

.benefit-item:hover {
  transform: translateY(-2px);
}

.benefit-item h3 {
  font-size: 20px;
  color: #003366;
  margin-bottom: 10px;
}

.benefit-item p {
  font-size: 15px;
  line-height: 1.6;
  margin-bottom: 10px;
}

.benefit-item ul {
  padding-left: 20px;
  list-style: disc;
  margin-bottom: 10px;
}

.benefit-item ul li {
  margin-bottom: 6px;
}

blockquote {
  font-style: italic;
  color: #555;
  padding-left: 20px;
  border-left: 3px solid #ccc;
  margin: 12px 0;
}

.conclusion {
  background-color: #f3d0ad;
  padding: 18px;
  border-left: 6px solid #003366;
  border-radius: 6px;
  font-style: italic;
  font-size: 16px;
  margin-top: 30px;
  color: #2c3e50;
}
</style>
