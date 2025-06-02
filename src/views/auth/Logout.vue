<template>
  <div class="logout-page">
    <p>Déconnexion en cours...</p>
  </div>
</template>

<script setup>
import { onMounted } from 'vue' 
import { useRouter } from 'vue-router'
import authService from '@/services/authService' 

const router = useRouter()

onMounted(async () => {
  try {
    await authService.logout() // Déconnexion côté serveur
    router.push('/login') // Redirection vers la page de login
  } catch (error) {
    console.error("Erreur lors de la déconnexion :", error)
  }
})
</script>


<style scoped>
.logout-page {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  font-size: 18px;
  color: #333;
}
</style>
