<template>
  <div class="container">
    <img
    src="../assets/images/clair2.png"  alt="Carrière dans la vente" class="header-image"/>

    <h1>Carrières dans la Vente au Sénégal : Plus qu'un Métier, une Voie Royale vers le Succès</h1>

    <p>
      Au Sénégal, le secteur de la vente se distingue par ses opportunités d'insertion professionnelle rapide, bien qu'il soit parfois sous-estimé.
      Chez <strong>VendeurPro</strong>, nous considérons la vente non seulement comme une profession, mais aussi comme une voie vers l'épanouissement personnel et professionnel.
    </p>

    <p>Voici une liste d’opportunités spécifiques qu’offrent les métiers de la vente.</p>

    <ol>
      <li>
        <strong>1. Le marché de la vente : un vivier d'opportunités immédiates</strong><br />
        Dans divers domaines tels que le commerce, les télécommunications, l'immobilier et les services, les compétences commerciales sont très recherchées.
        Même sans diplôme supérieur, il est possible d'intégrer une équipe de vente et de construire rapidement une carrière professionnelle.
      </li>

      <li>
        <strong>2. Acquisition de compétences transférables et durables</strong><br />
        La maîtrise de la vente permet d'acquérir des compétences essentielles, notamment :
        <ul>
          <li>Communication persuasive</li>
          <li>Gestion du stress</li>
          <li>Négociation</li>
          <li>Résolution de problèmes</li>
        </ul>
      </li>

      <li>
        <strong>3. La vente : une formation au leadership</strong><br />
        Un vendeur compétent développe :
        <ul>
          <li>Le sens des responsabilités</li>
          <li>L'aptitude à influencer positivement</li>
          <li>La capacité à atteindre des objectifs</li>
        </ul>
      </li>

      <li>
        <strong>4. VendeurPro : un tremplin vers le monde professionnel</strong><br />
        Grâce à nos formations intensives, nos certifications et nos programmes de coaching, VendeurPro offre aux jeunes Africains une opportunité concrète de réussir dans le domaine de la vente.
      </li>
    </ol>

    <p class="conclusion">
      Choisir la vente représente une décision en faveur de l'action, de la confiance et de l'évolution.
      Nous valorisons votre potentiel et nous nous engageons à vous accompagner à chaque étape de votre parcours.
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
  padding: 34px;
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  color: #2e2e2e;
  
}

.header-image {
  margin-top: 4%;
  background-color: #003366;

  /* background-color: #254f09; */

 width: 100%;
  height: auto;
  object-fit: contain; /* Affiche l'image en entier */
  border-radius: 1%;
  margin-bottom: 24px;
  display: block;
  max-height: 350px; /* Hauteur maximale fixée */

}

h1 {
  font-size: 28px;
  color: #003366;
  margin-bottom: 16px;
  line-height: 1.3;
}

p {
  line-height: 1.7;
  margin-bottom: 18px;
  font-size: 16px;
}

ol {
  padding-left: 22px;
  margin-bottom: 28px;
}

li {
  margin-bottom: 20px;
  font-size: 16px;
}

ul {
  margin-top: 10px;
  padding-left: 22px;
}

ul li {
  list-style-type: disc;
  margin-bottom: 6px;
}

strong {
  color: #003366;
}

.conclusion {
  font-style: italic;
  background-color: #e8f7ee;
  padding: 18px;
  border-left: 6px solid #003366;
  border-radius: 6px;
  font-size: 16px;
}
</style>




