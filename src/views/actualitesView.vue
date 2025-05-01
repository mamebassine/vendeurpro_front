<template>
    <section class="competences-section">
            <h2 class="section-title">Les clés pour Réussir dans la Vente</h2>
                    <div class="cards-container">
                                <div
                                v-for="(card, index) in cards"
                                :key="index"
                                class="card">
                                
                                <img :src="card.image" :alt="card.title" class="card-image"/>
                                
                                <router-link :to="card.route" class="card-title-link">
                                    <h3 class="card-title">{{ card.title }}</h3>
                                </router-link>
                        
                                <p class="card-date">{{ card.date }}</p>
                        
                                <p class="card-description">{{ card.description }}</p>
                                </div>
                    </div>
    </section>
  </template>
  
  <script setup>
  import image1 from '@/assets/images/photo5.png';
  import image2 from '@/assets/images/photo5.png';
  import image3 from '@/assets/images/photo5.png';
  
  const cards = [
    {
      title: "Carrières dans la Vente au Sénégal : Plus qu'un Métier, une Voie Royale vers le Succès",
      description: `Au Sénégal, le secteur de la vente se distingue par ses opportunités d'insertion professionnelle rapide, bien qu'il soit parfois sous-estimé. Chez VendeurPro, nous considérons la vente non seulement comme une profession, mais aussi comme une voie vers l'épanouissement personnel et professionnel.
  
  Voici une liste d’opportunités spécifiques qu’offrent les métiers de la vente.`,
      image: image1,
      route: '/actualites-a',
      date: 'Publié le 28 Avril 2025'
    },
    {
      title: '5 erreurs classiques que tout jeune vendeur doit éviter',
      description: `S'engager dans les métiers de la vente constitue une entreprise stimulante, bien que non exempte de défis. Au sein de VendeurPro, où nous accompagnons quotidiennement de jeunes talents, nous avons identifié les écueils les plus fréquemment rencontrés. La reconnaissance de ces erreurs représente déjà un premier pas vers leur évitement.`,
      image: image2,
      route: '/actualites-b',
      date: 'Publié le 27 Avril 2025'
    },
    {
      title: 'Les trois compétences maîtresses que tout vendeur de qualité doit posséder',
      description: `L'acte de vente dépasse la simple présentation d'un produit ou d'un service. Il s'agit essentiellement de comprendre, de persuader et de guider un client tout au long de son parcours d'achat. Chez VendeurPro, nous sommes convaincus que trois compétences fondamentales distinguent un vendeur ordinaire d'un vendeur exceptionnel.`,
      image: image3,
      route: '/actualites-c',
      date: 'Publié le 26 Avril 2025'
    }


    // les autres cartes


    







  ];
  </script>
  
  <style scoped>
  .competences-section {
    padding: 60px 20px;
    max-width: 1100px;
    margin: 0 auto;
    font-family: Arial, sans-serif;
    background-color: #f4f4f4;
    margin-top: 10%;
  }
  
  .section-title {
    text-align: center;
    font-size: 2em;
    margin-bottom: 40px;
    color: #222;
  }
  
  .cards-container {
    display: flex;
    flex-direction: column;
    gap: 10px;
  }
  
  .card {
    background: #fff;
    border-radius: 16px;
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
    overflow: hidden;
    transition: transform 0.3s ease;
  }
  
  .card:hover {
    transform: translateY(-5px);
  }
  
  .card-image {
    width: 100%;
    height: 200px;
    object-fit: cover;
  }
  
  .card-title {
    font-size: 1.5em;
    margin: 20px;
  }
  
  .card-date {
    font-size: 0.85em;
    margin: 0 20px;
    color: #888;
    font-style: italic;
  }
  
  .card-description {
    font-size: 1em;
    margin: 10px 20px 20px;
    color: #555;
    line-height: 1.5;
  }
  
  .card-button {
    display: inline-block;
    margin: 0 20px 20px;
    padding: 10px 16px;
    background-color: #0077cc;
    color: white;
    border: none;
    border-radius: 6px;
    cursor: pointer;
    font-size: 0.95em;
    transition: background-color 0.3s ease;
  }
  
  .card-button:hover {
    background-color: #003366;
  }
  
  .card-title-link {
    text-decoration: none;
    color: #a5cdf6;
  }
  
  .card-title-link:hover .card-title {
    color: #ff7f00;
  }
  
  @media (min-width: 768px) {
    .cards-container {
      flex-direction: row;
    }
  
    .card {
      flex: 1;
    }
  }
  </style>
  