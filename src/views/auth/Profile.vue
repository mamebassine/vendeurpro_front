<template>
  <div>
    <h2>Mon profil</h2>
    
    <div v-if="user">
      <!-- 👇 Affichage de la photo de profil -->
      <div v-if="user.image">
        <img :src="user.image" alt="Photo de profil" style="width: 100px; border-radius: 50%;" />
      </div>

      <!-- Infos utilisateur -->
      <p><strong>Nom:</strong> {{ user.name }}</p>
      <p><strong>Email:</strong> {{ user.email }}</p>
      <p><strong>Téléphone:</strong> {{ user.phone }}</p>
      <p><strong>Adresse:</strong> {{ user.address }}</p>
    </div>

    <p v-if="!user && !error">Chargement du profil...</p>
    <p v-if="error">Erreur : {{ error }}</p>

    <button @click="logout">Déconnexion</button>
  </div>
</template>


<script setup>
import { ref, onMounted } from 'vue';
import authService from '@/services/authService';
import { useRouter } from 'vue-router';

const user = ref(null);
const router = useRouter();
const error = ref(null); // <-- Manquait dans ton code. À ajouter !

onMounted(async () => {
  try {
    const response = await authService.getProfile();
    user.value = response.data;
  } catch (err) {
    error.value = 'Impossible de charger le profil.';
  }
});




// onMounted(async () => {
//   try {
//     const response = await authService.getProfile();
//     user.value = response.data; // Ici on récupère les données utilisateurs
//   } catch (error) {
//     console.error('Erreur lors de la récupération du profil:', error);
//   }
// });
// const error = ref(null)

// try {
//   const response = await authService.getProfile()
//   user.value = response.data
// } catch (err) {
//   error.value = 'Impossible de charger le profil.'
// }


</script>

