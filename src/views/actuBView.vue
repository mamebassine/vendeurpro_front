<template>
  <div class="container">
   <div class="header-top">
  <h1 class="main-title">5 erreurs classiques que tout jeune vendeur doit évitere Succès</h1>
</div>

<!-- DATE + intro -->
<div class="intro-block">
  <div class="date-block">
    <span class="date">16 mai 2025 - 08:00</span>
  </div>

  <div class="vertical-divider"></div>

  <div class="intro-text">
    <p>
      S'engager dans les métiers de la vente constitue une entreprise stimulante, bien que non exempte de défis.
        Au sein de <strong>VendeurPro</strong>, où nous accompagnons quotidiennement de jeunes talents, nous avons identifié les écueils les plus fréquemment rencontrés.
        La reconnaissance de ces erreurs représente déjà un premier pas vers leur évitement.
    </p>
  </div>
</div>

<!-- BLOC AUTEUR + SHARE ICON -->
<div class="author-share-block">
  <!-- Gauche : image + nom + fonction -->
  <div class="author-info">
    <img src="../assets/images/vendeur2.jpg" alt="Auteur" class="author-img" />
    <div class="author-text">
      <p class="author-name">Demba BAH</p>
      <p class="author-role">Coach en Vente</p>
    </div>
  </div>

  <!-- Droite : icône + texte Share -->
  <div class="share-button" @click="shareArticle">
    <span class="share-icon">🔗</span>
    <span class="share-text">Partager</span>
  </div>
</div>

<img src="../assets/images/vendeur2.jpg" alt="Carrière dans la vente" class="header-image" />

<!-- article -->
   <h2 class="section-title">
  Voici une liste d’opportunités spécifiques qu’offrent les métiers de la vente.
</h2>

<div class="benefits-wrapper">
  <div class="benefit-item">
    <h3>1. Insuffisance de la connaissance du produit ou service</h3>
    <p>
                Avant de chercher à persuader un client, il est impératif de maîtriser de manière exhaustive l'offre proposée.
          Un manque d'information ou des hésitations sur des aspects techniques peuvent nuire considérablement à la crédibilité.
    </p>
  </div>

  <div class="benefit-item">
    <h3>2. Excès de parole et déficit d'écoute</h3>
    <p>Nombre de vendeurs novices estiment nécessaire d'impressionner par un discours élaboré.
          Or, l'écoute attentive du client constitue l'atout majeur d'un vendeur compétent.
          Il est recommandé de privilégier les questions ouvertes et de manifester une curiosité sincère.</p>
    <!-- <ul>
      <li>Communication persuasive</li>
      <li>Gestion du stress</li>
      <li>Négociation</li>
      <li>Résolution de problèmes</li>
    </ul> -->
  </div>

  <div class="benefit-item">
    <h3>Préparation préalable insuffisante aux rencontres</h3>
    <p>          Se présenter devant un client sans une connaissance préalable de ses besoins, de son entreprise ou de son secteur d'activité constitue une erreur majeure.
          Une préparation adéquate représente déjà la moitié du succès de la vente.</p>
    <!-- <ul>
      <li>Le sens des responsabilités</li>
      <li>L'aptitude à influencer positivement</li>
      <li>La capacité à atteindre des objectifs</li>
    </ul> -->
  </div>

  <div class="benefit-item">
    <h3>4.  Réticence à aborder les aspects financiers</h3>
    <p>
      Il est fréquent que de jeunes vendeurs éprouvent des difficultés à présenter les tarifs ou les modalités de vente.
          Il est essentiel d'assumer la valeur de son produit ou service, ce qui témoigne de votre confiance et de professionnalisme.
    </p>
  </div>


  <div class="benefit-item">
    <h3>5. Négligence du suivi post-vente</h3>
    <p>
        Un client satisfait est susceptible de devenir un client fidèle et un ambassadeur de la marque.
        Négliger le suivi post-vente revient à perdre des opportunités précieuses.
    </p>
  </div>

</div>

<p class="conclusion">
   L'évitement de ces erreurs ne garantit pas un succès immédiat, mais il augmente de manière significative les chances de bâtir une carrière solide dans le domaine de la vente.
        Chez <strong>VendeurPro</strong>, nous nous engageons à vous guider dans leur évitement dès vos premiers pas.
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
    margin-top: 5%;

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
    margin-top: 27px;

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
