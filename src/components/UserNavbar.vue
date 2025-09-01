<template>
  <nav class="navbar">
    <div class="logo">UserDashboard</div>

    <div class="nav-actions">
      <input v-model="search" type="text" placeholder="Rechercher..." class="search-input" />

      <div class="notification-icon" aria-label="Notifications" role="button">
        <i class="fas fa-bell" aria-hidden="true"></i>
        <span class="notification-badge" aria-label="3 nouvelles notifications">3</span>
      </div>

      <!-- Nom complet dynamique -->
      <span class="user-name">{{ fullName }}</span>

      <!-- Avatar dynamique -->
      <img :src="avatar" alt="Avatar utilisateur" class="user-avatar" />
    </div>
  </nav>
</template>

<script setup>
import { ref, computed, onMounted } from 'vue'
import axios from 'axios'

const search = ref('')

// Utilisateur connecté
const user = ref({
  prenom: '',
  name: '',
  avatar: ''
})

// Nom complet dynamique
const fullName = computed(() => `${user.value.prenom} ${user.value.name}`)

// Avatar dynamique avec fallback
const avatar = computed(() => user.value.avatar || '/avatar.png')

// Créer une instance axios avec token si existant
const api = axios.create({
  baseURL: 'http://127.0.0.1:8000/api',
  headers: {
    'Content-Type': 'application/json',
    Authorization: `Bearer ${localStorage.getItem('token') || ''}`
  }
})

// Récupérer l’utilisateur connecté au montage
onMounted(async () => {
  try {
    const res = await api.get('/profile')
    console.log('Réponse API profile:', res.data)
    if (res.data && res.data.data) {
      user.value = {
        prenom: res.data.data.prenom,
        name: res.data.data.name,
        avatar: res.data.data.image // null si pas d'image
      }
    }
  } catch (err) {
    console.error('Erreur lors de la récupération de l’utilisateur', err)
  }
})
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
  font-size: 1.25rem;
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
  box-shadow: 0 0 0 2px white;
}
</style>
