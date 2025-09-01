<template>
  <p>Déconnexion en cours...</p>
</template>

<script setup>
import { onMounted } from 'vue'
import { logoutUser } from '@/services/userService'
import { useRouter } from 'vue-router'

const router = useRouter()

onMounted(async () => {
  await logoutUser()
  router.push('/auth_user/userlogin')
})
</script>

<style scoped>
p {
  text-align: center;
  margin-top: 2em;
  font-style: italic;
}
</style>
