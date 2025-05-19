<template>
  <div class="container">
    <!-- TITRE -->
    <div class="header-top">
      <h1 class="main-title">Comment une formation intensive en vente peut révolutionner votre carrière ?</h1>
    </div>

    <!-- DATE + intro -->
    <div class="intro-block">
      <div class="date-block">
        <span class="date">14 mai 2025 - 09:00</span>
      </div>
      <div class="vertical-divider"></div>
      <div class="intro-text">
        <p>
          Une formation intensive se distingue d'une formation conventionnelle. Elle représente une immersion complète, 
          conçue pour accroître de manière significative votre assurance, vos aptitudes commerciales et votre progression 
          de carrière dans un délai restreint. Nous sommes convaincus que l'engagement intensif constitue le principal catalyseur de succès.
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

    <!-- IMAGE -->
    <img src="../assets/images/former6.png" alt="Formation intensive en vente" class="header-image" />

<!-- SECTION 2 : Apports spécifiques de la formation intensive -->
<h2 class="section-title">Comment une formation intensive peut transformer votre carrière ?</h2>

<div class="benefits-wrapper">

  <div class="benefit-item">
    <h3>1. Dépassement rapide de sa zone de confort</h3>
    <p>La participation à une formation intensive implique :</p>
    <ul>
      <li>Une immersion dans des exercices pratiques soutenus</li>
      <li>Un encouragement à surmonter des défis commerciaux spécifiques</li>
      <li>Un appui grâce à une dynamique de groupe solide et motivante</li>
    </ul>
    <p>Ce qui est perçu comme une difficulté initiale devient alors une opportunité de développement.</p>
  </div>

  <div class="benefit-item">
    <h3>2. Acquisition de compétences par la pratique</h3>
    <p>Chez VendeurPro, nos formations intensives sont fondées sur le principe suivant :</p>
    <blockquote>« 70% de pratique, 30% de théorie. »</blockquote>
    <p>Jeux de rôle, simulations de ventes réelles, mises en situation immédiates :<br>
    L'apprentissage se fait par l'action, plutôt que par une écoute passive.</p>
  </div>

  <div class="benefit-item">
    <h3>3. Rétroaction immédiate et constructive</h3>
    <p>Chaque action et chaque présentation est suivie de :</p>
    <ul>
      <li>Conseils personnalisés</li>
      <li>Retours constructifs</li>
      <li>Accompagnement en temps réel</li>
    </ul>
    <p>La progression devient ainsi manifeste.</p>
  </div>

  <div class="benefit-item">
    <h3>4. Développement de son réseau professionnel</h3>
    <p>Au-delà des compétences, une formation intensive permet de :</p>
    <ul>
      <li>Rencontrer d'autres jeunes talents</li>
      <li>Établir des relations professionnelles</li>
      <li>Partager des expériences</li>
    </ul>
    <p>Votre futur réseau professionnel prend forme ici.</p>
  </div>

  <div class="benefit-item">
    <h3>5. Renforcement significatif de la confiance en soi</h3>
    <p>En trois jours, vous :</p>
    <ul>
      <li>Découvrez votre capacité à réussir</li>
      <li>Gagnez en assurance</li>
      <li>Êtes prêt à affronter les défis commerciaux du marché</li>
    </ul>
  </div>

</div>

<!-- CONCLUSION -->
<p class="conclusion">
        Une formation intensive représente bien plus qu'une simple formation : c'est une transformation profonde. Nous mettons à votre disposition tous les outils nécessaires pour révéler votre potentiel commercial 
        et faire de votre talent un véritable projet de carrière.
</p>


  </div>
</template>


<script>
export default {
  name: 'CarriereVenteView'
}
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
/* article */
/* TITRE DE SECTION */
.section-title {
  font-size: 22px;
  color: #003366;
  margin: 30px 0 20px;
  font-weight: bold;
  text-align: center;
}

/* CONTAINER DE TOUS LES POINTS */
.benefits-wrapper {
  display: flex;
  flex-direction: column;
  gap: 24px;
}

/* CHAQUE BLOC D’OPPORTUNITÉ */
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

/* SOUS-TITRE D’UN POINT */
.benefit-item h3 {
  font-size: 18px;
  color: #003366;
  margin-bottom: 10px;
}

/* PARAGRAPHES */
.benefit-item p {
  font-size: 15px;
  line-height: 1.6;
  margin-bottom: 10px;
  color: #333;
}

/* LISTES À PUCE */
.benefit-item ul {
  list-style-type: disc;
  padding-left: 20px;
}

.benefit-item ul li {
  font-size: 15px;
  margin-bottom: 6px;
}

/* BLOC CONCLUSION */
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
