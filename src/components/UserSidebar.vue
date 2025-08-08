<template> 
  <aside class="sidebar">
    <!-- LOGO -->
    <!-- <div class="sidebar-logo">
      <router-link to="/">
        <img src="@/assets/images/logo1.jpg" alt="Logo" class="logo" />
      </router-link>
    </div> -->
<div class="logo-container">
  <router-link to="/">
        <img src="@/assets/images/logo1.jpg" alt="Logo" class="logo" />
  </router-link>
</div>

    <!-- LIENS DE NAVIGATION -->
    <nav class="sidebar-nav">
      <ul>
        <li><router-link to="/auth_user/userdashboard">Accueil</router-link></li>
        <li><router-link to="/auth_user/filleuls">Les candidats parrainées</router-link></li>
        <li><router-link to="/auth_user/commissions">Mes Commissions</router-link></li>
      </ul>
    </nav>

    <!-- BOUTON DECONNEXION EN BAS -->
    <div class="sidebar-footer">
      <button @click="logout" class="logout-btn">Déconnexion</button>
    </div>
  </aside>
</template>

<script setup>
import { useRouter } from 'vue-router'

const router = useRouter()

const logout = () => {
  router.push('/userlogin')
}
</script>

<style scoped>
.sidebar {
  position: fixed;
  top: 0;
  left: 0;
  width: 220px;
  height: 100vh;
  background-color: #fff;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  box-shadow: 2px 0 5px rgba(0, 0, 0, 0.1);
  overflow: hidden;
}

/* LOGO */
/* .sidebar-logo {
display: flex;
  justify-content: center;
  align-items: center;
  padding: 1.5rem 0;
  border-bottom: 1px solid #e5e7eb;
}

.sidebar-logo img {
  width: 100%;
  height: auto;
  display: block;
} */

/* LOGO */
.logo-container {
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 1.5rem 0;
  border-bottom: 1px solid #e5e7eb;
}

.logo {
  height: 4rem;
  width: auto;
}

/* NAVIGATION */
.sidebar-nav {
  flex-grow: 1;
  padding: 1rem 0;
  overflow-y: auto;
}



/* NAVIGATION */
.sidebar-nav {
  flex-grow: 1;
  padding: 1rem 0;
  overflow-y: auto;
}

.sidebar-nav ul {
  list-style: none;
  padding: 0;
  margin: 0;
}

.sidebar-nav li {
  margin: 0.5rem 0;
}

.sidebar-nav a {
  display: block;
  padding: 0.75rem 1rem;
  color: #343f69;
  text-decoration: none;
  transition: background 0.3s;
  border-left: 4px solid transparent;
}

.sidebar-nav a:hover,
.sidebar-nav a.router-link-active {
  background-color: #343f69;
  color: white;
  border-left: 4px solid #2c2f59;
}

/* FOOTER */
.sidebar-footer {
  padding: 1rem;
  border-top: 1px solid #ddd;
}

.logout-btn {
  width: 100%;
  background-color: transparent;
  color: #2c2f59;
  /* border: 1px solid #2c2f59; */
  padding: 0.6rem;
  border-radius: 4px;
  cursor: pointer;
  transition: all 0.3s;
}

.logout-btn:hover {
  background-color: #2c2f59;
  color: white;
}
</style>
