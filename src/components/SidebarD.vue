<template>
  <aside class="sidebar">
    <!-- Haut : logo + navigation -->
    <div>
      <!-- Logo -->
      <div class="logo-container">
        <img src="@/assets/images/logo1.jpg" alt="Logo" class="logo" />
      </div>

      <!-- Navigation -->
      <ul class="nav-list">
        <li class="nav-item">
          <a href="/" class="nav-link">
            <svg class="icon" fill="none" stroke="currentColor" stroke-width="2"
              viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round">
              <path d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-4 0h4" />
            </svg>
            <span>Accueil</span>
          </a>
        </li>

        <li class="nav-item">
          <a href="/dashboard/formations" class="nav-link">
            <svg class="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
              stroke-linecap="round" stroke-linejoin="round">
              <path d="M12 14l9-5-9-5-9 5 9 5z" />
              <path d="M12 14l6.16-3.422a12.083 12.083 0 01.84 6.262L12 20l-7-3.16a12.083 12.083 0 01.84-6.262L12 14z" />
            </svg>
            <span>Formations</span>
          </a>
        </li>

        <li class="nav-item">
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
        </li>
      </ul>
    </div>

    <!-- Déconnexion en bas -->
    <div class="logout-section">
      <button class="logout-button">
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
</script>

<style>
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

.nav-list {
  padding: 3rem 5rem 0 2rem;
  list-style: none;
}

.nav-item {
  margin-bottom: 2rem; /* Espace entre chaque lien */
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

.icon {
  width: 1.25rem;
  height: 1.25rem;
}

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
</style>
