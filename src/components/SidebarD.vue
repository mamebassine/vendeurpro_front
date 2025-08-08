<template>
  <aside class="sidebar">
    <!-- Haut : logo + navigation -->
    <div>
      <!-- Logo -->
      <div class="logo-container">
        <router-link to="/">
          <img src="@/assets/images/logo1.jpg" alt="Logo" class="logo" />
        </router-link>
    </div>
<!-- Navigation -->
      <ul class="nav-list">
        <li class="nav-item">
          <a href="/dashboard" class="nav-link">
            <svg class="icon" fill="none" stroke="currentColor" stroke-width="2"
              viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round">
              <path d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-4 0h4" />
            </svg>
            <span>Accueil</span>
          </a>
        </li>

        <li class="nav-item">
  <router-link to="/dashboard/Ajouter-formations" class="nav-link">
    <svg class="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
      stroke-linecap="round" stroke-linejoin="round">
      <path d="M12 14l9-5-9-5-9 5 9 5z" />
      <path d="M12 14l6.16-3.422a12.083 12.083 0 01.84 6.262L12 20l-7-3.16a12.083 12.083 0 01.84-6.262L12 14z" />
    </svg>
    <span>Formations</span>
  </router-link>
</li>


        <!-- <li class="nav-item">
          <a href="/dashboard/webinaires" class="nav-link">
            <svg class="icon" fill="none" stroke="currentColor" stroke-width="2"
              viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round">
              <path d="M15 10l4.553-2.276A1 1 0 0020 7H4a1 1 0 00-.553 1.724L8 10m7 0v6a1 1 0 01-1 1H10a1 1 0 01-1-1v-6m2-1h2" />
            </svg>
            <span>Webinaires</span>
          </a>
        </li>

        <li class="nav-item">
          <a href="/dashboard/coaching" class="nav-link">
            <svg class="icon" fill="none" stroke="currentColor" stroke-width="2"
              viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round">
              <path d="M5.121 17.804A4 4 0 016.343 16H17.657a4 4 0 011.222 1.804M15 11a3 3 0 10-6 0 3 3 0 006 0z" />
            </svg>
            <span>Coaching</span>
          </a>
        </li> -->

        <!-- Candidats -->
        <li class="nav-item">
  <router-link to="/dashboard/listeCandidat" class="nav-link">
    <svg class="icon" fill="none" stroke="currentColor" stroke-width="2"
      viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round">
      <path d="M20 21v-2a4 4 0 00-3-3.87M4 21v-2a4 4 0 013-3.87M12 12a4 4 0 100-8 4 4 0 000 8z" />
    </svg>
    <span>Candidats</span>
  </router-link>
</li>


        <!-- Candidatures -->
       <!-- <li class="nav-item">
  <router-link to="/dashboard/ListeCandidature" class="nav-link">
    <svg class="icon" fill="none" stroke="currentColor" stroke-width="2"
      viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round">
      <path d="M3 7h18M3 7v10a2 2 0 002 2h14a2 2 0 002-2V7M3 7l9 6 9-6" />
    </svg>
    <span>Candidatures</span>
  </router-link>
</li> -->

<li class="nav-item">
  <router-link to="/dashboard/listecategorie" class="nav-link">
    <svg class="icon" fill="none" stroke="currentColor" stroke-width="2"
      viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round">
      <path d="M20 12H4" />
      <path d="M14 6l-6 6 6 6" />
    </svg>
    <span>Catégories</span>
  </router-link>
</li>


<li class="nav-item">
  <router-link to="/dashboard/actualites/Ajouter" class="nav-link">
    <svg class="icon" fill="none" stroke="currentColor" stroke-width="2"
      viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round">
      <path d="M19 21H5a2 2 0 01-2-2V7a2 2 0 012-2h14a2 2 0 012 2v12a2 2 0 01-2 2z" />
      <path d="M3 10h18M7 6v4M11 6v4M15 6v4" />
    </svg>
    <span>Actualités</span>
  </router-link>
</li>

<!-- Les parrains -->
   <li class="nav-item">
  <router-link to="/userregister" class="nav-link">
    <svg class="icon" fill="none" stroke="currentColor" stroke-width="2"
      viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round">
      <path d="M17 20h5v-2a4 4 0 00-3-3.87M9 20H4v-2a4 4 0 013-3.87M16 7a4 4 0 11-8 0 4 4 0 018 0z" />
    </svg>
    <span>Parrains</span>
  </router-link>
</li>


</ul>
</div>

    <!-- Déconnexion en bas -->
    <div class="logout-section">
      <button class="logout-button" @click="logout">
        <svg class="icon" fill="none" stroke="currentColor" stroke-width="2"
          viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round">
          <path d="M17 16l4-4m0 0l-4-4m4 4H7" />
          <path d="M3 12h4" />
        </svg>
        <span>Déconnexion</span>
      </button>
    </div>
  </aside>
</template>

<script setup>
import logo from '@/assets/images/logo1.jpg'

import { useRouter } from 'vue-router'

const router = useRouter()

function logout() {
  router.push('/login')
}
</script>

<style>
/* Style général sidebar */
.sidebar {
  width: 16rem;
  height: 100vh;
  background-color: white;
  color: #003366;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  box-shadow: 0 2px 4px rgba(0,0,0,0.1);
}

/* .logo-container {
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 1.5rem 0;
  border-bottom: 1px solid #e5e7eb;
}

.logo {
  height: 4rem;
  width: auto;
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





.nav-list {
  padding: 3rem 5rem 0 2rem;
  list-style: none;
}

.nav-item {
  margin-bottom: 2rem;
}

.nav-link {
  display: flex;
  align-items: center;
  gap: 2rem;
  color: #003366;
  text-decoration: none;
  transition: color 0.3s ease;
}

.nav-link:hover {
  color: #ff7f00;
}

/* Uniformiser la taille des icônes partout dans la sidebar */
.sidebar svg.icon {
  width: 1.25rem;
  height: 1.25rem;
}

/* Pour l’élément actif */
.nav-link.router-link-active,
.nav-link.active {
  font-weight: bold;
  background-color: #f0f4f8;
  border-radius: 0.5rem;
  padding: 0.5rem;
}

/* Déconnexion */
.logout-section {
  padding: 0 1rem 1.5rem 1rem;
}

.logout-button {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  color: #dc2626;
  background: none;
  border: none;
  cursor: pointer;
  width: 100%;
  text-align: left;
  font-size: 1rem;
  transition: color 0.3s ease;
}

.logout-button:hover {
  color: #991b1b;
}

/* Animation légère au survol */
.nav-link:hover .icon {
  transform: scale(1.1);
  transition: transform 0.2s ease-in-out;
}

/* Responsive : sidebar en bas sur mobile */
@media (max-width: 768px) {
  .sidebar {
    width: 100%;
    height: auto;
    position: fixed;
    bottom: 0;
    left: 0;
    right: 0;
    flex-direction: row;
    justify-content: space-around;
    padding: 0.5rem 0;
    box-shadow: 0 -2px 5px rgba(0, 0, 0, 0.1);
    z-index: 100;
  }

  .logo-container {
    display: none;
  }

  .nav-list {
    display: flex;
    flex-direction: row;
    gap: 1rem;
    padding: 0;
  }

  .nav-item {
    margin-bottom: 0;
  }

  .logout-section {
    display: none;
  }

  .nav-link span {
    display: none;
  }

  .icon {
    width: 1.5rem;
    height: 1.5rem;
  }
}
</style>
