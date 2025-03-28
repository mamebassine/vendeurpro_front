<template>
    <nav class="navbar">
    <div class="container">
      <!-- Logo -->
      <!-- <div class="logo">
        <img :src="logo" alt="Logo">
      </div> -->

      <div class="logo">
  <router-link to="/">
    <img :src="logo" alt="Logo">
  </router-link>
</div>

<!-- Menu -->
      <ul class="menu">
        <li v-for="(item, index) in menuItems" :key="index">
          <router-link :to="item.link" :class="{ active: activeSection === item.link }">
            {{ item.name }}
          </router-link>
        </li>
      </ul>
    </div>
  </nav>
  </template>
  
  <script setup>
  import { ref, onMounted, watch } from 'vue';
import { useRoute } from 'vue-router';
import logo from '@/assets/images/logo1.jpg';

// import logo from '../assets/images/logo1.jpg';

const activeSection = ref("/");
const route = useRoute();

// Liste des menus avec les routes
const menuItems = [
  // { name: "Accueil", link: "/" },
  { name: "Se former", link: "/formations" },
  { name: "Coaching Pro", link: "/coaching" },
  { name: "Webinaire", link: "/webinaire" },
  { name: "Le lab", link: "/actualites" },
  { name: "Notre ADN", link: "/apropos" },

  { name: "?", link: "/contact" },
];

// Mettre à jour la section active
watch(route, () => {
  activeSection.value = route.path;
});


</script> 



  
  <style scoped>
  /* Styles de la barre de navigation */
  .navbar {
    position: fixed;  /* Ajouté pour fixer le header en haut */
    top: 0;
    left: 0;
    width: 100%;
    background-color: #ffffff;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    padding: 1rem 0;
    z-index: 1000;  /* Assure que le header reste au-dessus des autres éléments */
  }
  
  /* Ajuste l'espace en dessous du header pour éviter qu'il masque le contenu */
  body {
    padding-top: 80px;  /* Marge ajoutée pour compenser la hauteur du header */
  }
  
  .container {
    display: flex;
    justify-content: space-between;
    align-items: center;
    max-width: 1200px;
    margin: auto;
    padding: 0 1rem;
    
  }
  
  /* Logo */
  .logo img {
    height: 83px;
  }
  
  /* Menu */
  .menu {
    display: flex;
    gap: 2rem;
    list-style: none;
    margin: 0 auto;
  }
  
  .menu li a {
    text-decoration: none;
    color:#ff7f00 ;
    font-weight: 600px;
    font-size: 1.5rem;
    transition: color 0.3s ease-in-out;
    padding: 0.5rem 1rem;

  }

/* Lien actif */
.menu li a.active {
  color:  #003366;
  border-bottom: 2px solid #ff7f00;
}
  
  .menu li a:hover {
    color: #ff7f00;
  }
  
  /* Responsive */
  @media (max-width: 768px) {
    .container {
      flex-direction: column;
    }
  
    .menu {
      flex-direction: column;
      text-align: center;
      margin-top: 1rem;
    }
  }
  </style>
  