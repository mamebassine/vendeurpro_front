<template>
  <div class="dashboard">
    <p v-if="loading">Chargement du profil...</p>
    <div v-else>
<h1 class="text-4xl font-bold text-gray-800 mb-6">
  📊 Bienvenue user {{ user.prenom }} {{ user.name }}
</h1>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { fetchUserProfile } from '@/services/userService'
import { useRouter } from 'vue-router'

const user = ref({})
const loading = ref(true)
const router = useRouter()

onMounted(async () => {
  try {
    const profil = await fetchUserProfile()
    if (profil.role === 'admin') {
      router.push('/admin/dashboard')
      return
    }
    user.value = profil
  } catch (err) {
    console.error('Erreur chargement profil', err)
    router.push('/userlogin')
  } finally {
    loading.value = false
  }
})
</script>

<style scoped>
.dashboard {
  max-width: 600px;
  margin: auto;
  padding: 1em;
  /* background-color: #fff; */
  border-radius: 8px;
  box-shadow: 0 2px 8px rgba(0,0,0,0.1);
}
</style>
