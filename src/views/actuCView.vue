    <template>
      <div class="container">
        <img
          src="../assets/images/former4.jpg"
          alt="Compétences en vente"
          class="header-image"
        />

        <h1>Les trois compétences maîtresses que tout vendeur de qualité doit posséder</h1>

        <p>
          L'acte de vente dépasse la simple présentation d'un produit ou d'un service. Il s'agit essentiellement de comprendre, de persuader et de guider un client tout au long de son parcours d'achat.
          Chez <strong>VendeurPro</strong>, nous sommes convaincus que trois compétences fondamentales distinguent un vendeur ordinaire d'un vendeur exceptionnel.
        </p>

        <ol>
          <li>
            <strong>L'écoute active</strong><br />
            L'écoute active se définit par :
            <ul>
              <li>Une concentration totale sur le discours du client</li>
              <li>L'identification de ses besoins explicites et implicites</li>
              <li>La reformulation des propos afin de témoigner de sa compréhension</li>
            </ul>
            Un vendeur qui pratique une écoute attentive optimise ses ventes, car il est en mesure de proposer une offre qui correspond précisément aux attentes du client.
          </li>

          <li>
            <strong>L'art de poser les questions appropriées</strong><br />
            Un vendeur compétent oriente son client par le biais de questions ouvertes :
            <blockquote>
              « Quel critère est le plus déterminant pour vous dans cette sélection ? »<br />
              « Quelles difficultés avez-vous rencontrées jusqu'à présent ? »<br />
              « Quelles sont vos attentes vis-à-vis d'une solution idéale ? »
            </blockquote>
            Chaque réponse du client constitue une information précieuse pour adapter au mieux son argumentation.
          </li>

          <li>
            <strong>La conclusion de vente éthique</strong><br />
            La conclusion de vente ne doit en aucun cas s'apparenter à une pression :
            <ul>
              <li>Il s'agit d'accompagner naturellement le client vers une prise de décision</li>
              <li>Il s'agit de dissiper ses dernières hésitations avec bienveillance</li>
              <li>Il s'agit de suggérer un engagement clair, sans insister de manière intrusive</li>
            </ul>
            Une conclusion de vente réussie est le résultat logique d'un accompagnement de qualité.
          </li>
        </ol>

        <p class="conclusion">
          La maîtrise de ces trois compétences — écoute active, questionnement stratégique et conclusion de vente éthique — est indispensable pour bâtir une carrière solide dans le domaine de la vente.
          Chez <strong>VendeurPro</strong>, nous nous engageons à développer ces atouts grâce à des camps d'entraînement, des formations certifiantes et des accompagnements personnalisés intensifs.
        </p>
      </div>
    </template>

    <script>
    export default {
      name: 'CompetencesVendeurView'
    }
    </script>

<style scoped>
.container {
  margin: 90px auto;
  padding: 34px;
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  color: #2e2e2e;
  
}

.header-image {
  margin-top: 6%;
  background-color: #9fa1a3;


  width: 100%;
  height: auto;
  max-height: 350px;
  object-fit: cover;
  border-radius: 8px;
  margin-bottom: 24px;
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