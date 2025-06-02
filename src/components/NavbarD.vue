<!-- <template>
  <nav class="navbar">
    <div class="navbar-left">
      <button class="add-button">
        <svg xmlns="http://www.w3.org/2000/svg" class="icon" fill="none"
             viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                d="M12 4v16m8-8H4" />
        </svg>
        Ajouter
      </button>
    </div>

    <div class="navbar-right">
      <button class="icon-button">
        <svg xmlns="http://www.w3.org/2000/svg" class="icon" fill="none"
             viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                d="M21 21l-4.35-4.35M16.65 16.65A7.5 7.5 0 1116.65 2.35a7.5 7.5 0 010 14.3z" />
        </svg>
      </button>

      <button class="icon-button notification-button">
        <svg xmlns="http://www.w3.org/2000/svg" class="icon" fill="none"
             viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
        </svg>
        <span class="notification-badge">3</span>
      </button>

      <img :src="avatar" alt="avatar" class="avatar" />
    </div>
  </nav>
</template>

<script setup>
import avatar from '@/assets/images/forme11.png'
</script>

<style scoped>
.navbar {
  background-color: white;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  padding: 16px 24px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
}

.navbar-left,
.navbar-right {
  display: flex;
  align-items: center;
  gap: 16px;
}

.add-button {
  display: flex;
  align-items: center;
  background-color: #0d9488;
  color: white;
  padding: 8px 12px;
  border: none;
  border-radius: 4px;
  font-size: 14px;
  cursor: pointer;
  transition: background-color 0.2s ease;
}

.add-button:hover {
  background-color: #0f766e;
}

.icon-button {
  background: none;
  border: none;
  cursor: pointer;
  color: #4b5563;
  position: relative;
  transition: color 0.2s ease;
}

.icon-button:hover {
  color: #1f2937;
}

.icon {
  width: 24px;
  height: 24px;
}

.notification-badge {
  position: absolute;
  top: -4px;
  right: -4px;
  background-color: #ef4444;
  color: white;
  font-size: 10px;
  border-radius: 9999px;
  padding: 2px 6px;
}

.avatar {
  width: 32px;
  height: 32px;
  border-radius: 50%;
  border: 2px solid #d1d5db;
  object-fit: cover;
}
</style> -->



<template>
  <nav class="navbar">
    <!-- Zone gauche (vide pour le moment) -->
    <div class="navbar-left"></div>

    <!-- Zone droite -->
    <div class="navbar-right">
      <!-- Recherche -->
      <button class="icon-button" aria-label="Recherche">
        <svg xmlns="http://www.w3.org/2000/svg" class="icon" fill="none"
             viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                d="M21 21l-4.35-4.35M16.65 16.65A7.5 7.5 0 1116.65 2.35a7.5 7.5 0 010 14.3z" />
        </svg>
      </button>

      <!-- Notification -->
      <button class="icon-button notification-button" aria-label="Notifications">
        <svg xmlns="http://www.w3.org/2000/svg" class="icon" fill="none"
             viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 
                0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0
                .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
        </svg>
        <span class="notification-badge">3</span>
      </button>

      <!-- Nom et prénom sur la même ligne -->
      <div class="user-fullname">
        {{ lastName }} {{ firstName }}
      </div>

      <!-- Avatar -->
      <img :src="avatar" alt="Avatar utilisateur" class="avatar" />
    </div>
  </nav>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import avatarDefault from '@/assets/images/forme11.png'
import authService from '@/services/authService'

const avatar = ref(avatarDefault)
const lastName = ref('Nom')
const firstName = ref('Prénom')

const fetchUserData = async () => {
  try {
    const response = await authService.getProfile()
    const data = response.data.data

    avatar.value = data.image || avatarDefault
    lastName.value = data.name || 'Nom'
    firstName.value = data.prenom || 'Prénom'
  } catch (error) {
    console.error('Erreur lors du chargement de l’utilisateur :', error)
  }
}
onMounted(() => {
  fetchUserData()
})
</script>


<style scoped>
.navbar {
  background-color: white;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  padding: 16px 24px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
}

.navbar-left,
.navbar-right {
  display: flex;
  align-items: center;
  gap: 16px;
}

.icon-button {
  background: none;
  border: none;
  cursor: pointer;
  color: #4b5563;
  position: relative;
  transition: color 0.2s ease;
}

.icon-button:hover {
  color: #1f2937;
}

.icon {
  width: 24px;
  height: 24px;
}

.notification-badge {
  position: absolute;
  top: -4px;
  right: -4px;
  background-color: #ef4444;
  color: white;
  font-size: 10px;
  border-radius: 9999px;
  padding: 2px 6px;
}

.user-fullname {
  font-weight: 600;
  color: #1f2937;
  white-space: nowrap;
}

.avatar {
  width: 32px;
  height: 32px;
  border-radius: 50%;
  border: 2px solid #d1d5db;
  object-fit: cover;
}
</style>
