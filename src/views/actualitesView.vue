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
  import image1 from '@/assets/images/baniere7.jpg';
  import image2 from '@/assets/images/vendeur21.jpg';
  import image3 from '@/assets/images/photo4.jpg';

  import image4 from '@/assets/images/vendeur28.jpg';
  import image5 from '@/assets/images/photo14.jpg';
  import image6 from '@/assets/images/vendeur20.jpg';
  
  const cards = [
    {
      title: "Carrières dans la Vente au Sénégal : Plus qu'un Métier, une Voie Royale vers le Succès",
      description: `Au Sénégal, le secteur de la vente se distingue par ses opportunités d'insertion professionnelle rapide, bien qu'il soit parfois sous-estimé.`,
      image: image1,
      route: '/actualites-a',
      date: 'Publié le 28 Avril 2025'
    },
    {
      title: '5 erreurs classiques que tout jeune vendeur doit éviter',
      description: `S'engager dans les métiers de la vente constitue une entreprise stimulante, bien que non exempte de défis.`,
      image: image2,
      route: '/actualites-b',
      date: 'Publié le 27 Avril 2025'
    },
    {
      title: 'Les trois compétences maîtresses que tout vendeur de qualité doit posséder',
      description: `L'acte de vente dépasse la simple présentation d'un produit ou d'un service.`,
      image: image3,
      route: '/actualites-c',
      date: 'Publié le 26 Avril 2025'
    },


    // les autres cartes


    {
      title: "Comment une formation intensive en vente peut révolutionner votre carrière ?",
      description: `Une formation intensive se distingue d'une formation conventionnelle.`,
      image: image4,
      route: '/actualites-d',
      date: 'Publié le 28 Avril 2025'
    },
    {
      title: 'Achanger apres 5 erreurs classiques que tout jeune vendeur doit éviter',
      description: `S'engager dans les métiers de la vente constitue une entreprise stimulante, bien que non exempte de défis.`,
      image: image5,
      route: '/actualites-e',
      date: 'Publié le 27 Avril 2025'
    },
    {
      title: 'Achanger apres Les trois compétences maîtresses que tout vendeur de qualité doit posséder',
      description: `L'acte de vente dépasse la simple présentation d'un produit ou d'un service. `,
      image: image6,
      route: '/actualites-f',
      date: 'Publié le 26 Avril 2025'
    },

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
  display: grid;
  grid-template-columns: repeat(3, 1fr); /* 3 colonnes égales */
  gap: 20px;
}


.card {
  background: #fff;
  border-radius: 16px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
  overflow: hidden;
  transition: transform 0.3s ease;
  width: 100%; /* occupe la totalité de sa colonne */
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

  /* RESPONSIVE */

  @media (max-width: 1024px) {
  .cards-container {

   grid-template-columns: repeat(2, 1fr); /* 2 colonnes sur tablette */
  }
}

@media (max-width: 768px) {
  .cards-container {
    grid-template-columns: 1fr; /* 1 colonne sur mobile */
    gap: 16px;
  }

  .card {
    max-width: 100%;
  }

  .card-image {
    height: 180px;
  }

  .card-title {
    font-size: 1.3em;
    margin: 16px;
  }

  .card-description {
    margin: 10px 16px 16px;
  }

  .card-button {
    margin: 0 16px 16px;
    font-size: 0.9em;
  }
}

@media (max-width: 480px) {
  .section-title {
    font-size: 1.6em;
    margin-bottom: 30px;

    margin-top: 22%;
  }

  .card-image {
    height: 160px;
  }

  .card-title {
    font-size: 1.2em;
  }

  .card-description,
  .card-date {
    font-size: 0.95em;
  }

  .card-button {
    font-size: 0.85em;
    padding: 8px 14px;
  }
}

  </style>
  