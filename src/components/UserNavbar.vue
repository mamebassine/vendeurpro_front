<template>
  <nav class="navbar">
    <!-- LOGO -->
    <div class="logo">UserDashboard</div>

    <!-- ACTIONS À DROITE -->
    <div class="nav-actions">
      <!-- Barre de recherche -->
      <input
        v-model="search"
        type="text"
        placeholder="Rechercher..."
        class="search-input"
      />

      <!-- Icône notification -->
<!-- Icône notification -->
<div class="notification-icon" aria-label="Notifications" role="button">
  <i class="fas fa-bell" aria-hidden="true"></i>
  <span class="notification-badge" aria-label="3 nouvelles notifications">3</span>
</div>


      <!-- <div class="notification-icon">
        <i class="fas fa-bell"></i>
                <span class="notification-badge">3</span>

      </div> -->

      <!-- Nom prénom -->
      <!-- <span class="user-name">{{ fullName }}</span> -->
      <h1 class="text-4xl font-bold text-gray-800 mb-6">
  📊 Bienvenue user {{ user.prenom }} {{ user.name }}
</h1>

      <!-- Image utilisateur -->
      <img :src="avatar" alt="Avatar utilisateur" class="user-avatar" />
    </div>
  </nav>
</template>

<script setup>
import { ref } from 'vue'

const search = ref('')
// const fullName = ref('Jean Dupont') // à remplacer dynamiquement
// const avatar = ref('/avatar.png')   // image utilisateur (par défaut ou dynamique)
</script>

<style scoped>
.navbar {
  height: 60px;
  background-color: #343f69;
  color: white;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 2rem;
}

.logo {
  font-weight: bold;
  font-size: 1.2rem;
}

.nav-actions {
  display: flex;
  align-items: center;
  gap: 1rem;
}

.search-input {
  padding: 0.4rem 0.8rem;
  border-radius: 4px;
  border: none;
  font-size: 0.9rem;
}

.notification-icon {
  font-size: 1.2rem;
  cursor: pointer;
}

.notification-icon:hover {
  color: #ff7f00;
}

.user-name {
  font-weight: 500;
}

.user-avatar {
  width: 35px;
  height: 35px;
  border-radius: 50%;
  object-fit: cover;
}
.notification-icon {
  position: relative;
  display: inline-block;
  font-size: 1.25rem; /* adapte la taille de l'icône */
  cursor: pointer;
}

.notification-badge {
  position: absolute;
  top: -6px;
  right: -6px;
  background-color: #9d0808;
  color: white;
  font-size: 0.55rem;
  line-height: 1;
  border-radius: 9999px;
  padding: 4px 7px;
  min-width: 18px;
  height: 18px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 600;
  box-shadow: 0 0 0 2px white; /* pour contraste si sur fond sombre/claire */
}
</style>
