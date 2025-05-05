  <template>
    <div class="container">
      <img
        src="../assets/images/ici.png"
        alt="Erreurs à éviter en vente"
        class="header-image"
      />

      <h1>5 erreurs classiques que tout jeune vendeur doit éviter</h1>

      <p>
        S'engager dans les métiers de la vente constitue une entreprise stimulante, bien que non exempte de défis.
        Au sein de <strong>VendeurPro</strong>, où nous accompagnons quotidiennement de jeunes talents, nous avons identifié les écueils les plus fréquemment rencontrés.
        La reconnaissance de ces erreurs représente déjà un premier pas vers leur évitement.
      </p>

      <ol>
        <li>
          <strong>1. Insuffisance de la connaissance du produit ou service</strong><br />
          Avant de chercher à persuader un client, il est impératif de maîtriser de manière exhaustive l'offre proposée.
          Un manque d'information ou des hésitations sur des aspects techniques peuvent nuire considérablement à la crédibilité.
        </li>

        <li>
          <strong>2. Excès de parole et déficit d'écoute</strong><br />
          Nombre de vendeurs novices estiment nécessaire d'impressionner par un discours élaboré.
          Or, l'écoute attentive du client constitue l'atout majeur d'un vendeur compétent.
          Il est recommandé de privilégier les questions ouvertes et de manifester une curiosité sincère.
        </li>

        <li>
          <strong>3. Préparation préalable insuffisante aux rencontres</strong><br />
          Se présenter devant un client sans une connaissance préalable de ses besoins, de son entreprise ou de son secteur d'activité constitue une erreur majeure.
          Une préparation adéquate représente déjà la moitié du succès de la vente.
        </li>

        <li>
          <strong>4. Réticence à aborder les aspects financiers</strong><br />
          Il est fréquent que de jeunes vendeurs éprouvent des difficultés à présenter les tarifs ou les modalités de vente.
          Il est essentiel d'assumer la valeur de son produit ou service, ce qui témoigne de votre confiance et de professionnalisme.
        </li>

        <li>
          <strong>5. Négligence du suivi post-vente</strong><br />
          Un client satisfait est susceptible de devenir un client fidèle et un ambassadeur de la marque.
          Négliger le suivi post-vente revient à perdre des opportunités précieuses.
        </li>
      </ol>

      <p class="conclusion">
        L'évitement de ces erreurs ne garantit pas un succès immédiat, mais il augmente de manière significative les chances de bâtir une carrière solide dans le domaine de la vente.
        Chez <strong>VendeurPro</strong>, nous nous engageons à vous guider dans leur évitement dès vos premiers pas.
      </p>
    </div>
  </template>

  <script>
  export default {
    name: 'ActuHView'
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