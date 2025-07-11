<template>
  <nav class="navbar">
    <div class="container">
      <!-- Logo -->
      <div class="logo">
        <router-link to="/">
          <img :src="logo" alt="Logo">
        </router-link>
      </div>

      <!-- Bouton Hamburger Mobile -->
      <div class="burger" @click="isMenuOpen = !isMenuOpen">
        ☰
      </div>

      <!-- Menu -->
      <ul class="menu" :class="{ open: isMenuOpen }">
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
import { ref, watch } from 'vue';
import { useRoute } from 'vue-router';
import logo from '@/assets/images/logo2.png';

const activeSection = ref("/");
const route = useRoute();
const isMenuOpen = ref(false);

const menuItems = [
  { name: "Se former", link: "/formations" },
  { name: "Coaching Pro", link: "/coaching" },
  { name: "Webinaire", link: "/webinaire" },
  { name: "Le lab", link: "/actualites" },
  { name: "Notre ADN", link: "/apropos" },
  { name: "Un projet ?", link: "/contact" },
];

watch(route, () => {
  activeSection.value = route.path;
  isMenuOpen.value = false; // Fermer menu après navigation
});
</script>

<style scoped >

body {
  padding-top: 110px; /* sinon le contenu passe sous la navbar */
}
.navbar {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  background-color: #ffffff;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  z-index: 1000;
  /* padding: 0.5rem 0; */

/* ICI LE REGLER LE MENU */
  height: 115px; /* ou une valeur plus grande selon ton besoin */
  padding: 1.9rem 0; /* augmente le haut/bas (1.5rem = ~24px) */

  
}

.container {
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 1400px;
  margin: auto;
  padding: 0 1rem;
}

/* .logo img {
  height: 125px;
} */
.logo {
  display: flex;
  align-items: center; /* Aligne le logo verticalement */
}

.logo img {
  height: 100px; /* Ajuste à une hauteur raisonnable, par exemple 60px */
  object-fit: contain; /* Garde les proportions */
  margin: 0; /* Supprime tout décalage éventuel */
}



.menu {
  display: flex;
  gap: 1rem;
  list-style: none;
  margin: 0;
  padding: 0;

  transition: all 0.3s ease;
}

.menu li a {
  text-decoration: none;
  color: #003366;
  font-size: 17px;
  font-weight: bold;
  transition: color 0.3s;
  padding: 0.5rem 0.75rem;
}

.menu li a.active {
  color: #003366;
  border-bottom: 2px solid #ff7f00;
}

.menu li a:hover {
  color: #ff7f00;
}

/* Burger (mobile) */
.burger {
  display: none;
  font-size: 2rem;
  cursor: pointer;
  padding: 0.5rem;

  color: #003366;

}

/* RESPONSIVE */
@media (max-width: 768px) {
  .burger {
    display: block;
  }

  .menu {
    display: none;
    flex-direction: column;
    width: 100%;
    background: white;
    position: absolute;
    top: 70px;
    left: 0;
    padding: 1rem 0;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  }

  .menu.open {
    display: flex;
  }

  .menu li {
    text-align: center;
  }

  .container {
    flex-wrap: wrap;
  }
  .logo img {
  height: 80px;
}
}


</style>