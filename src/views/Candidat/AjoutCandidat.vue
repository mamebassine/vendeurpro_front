<template>
  <div class="form">
    <h2>Ajouter un Candidat</h2>

    <!-- Formulaire -->
    <form v-if="formVisible" @submit.prevent="ajouterCandidat">
      <input v-model="form.nom" placeholder="Nom" required />
      <input v-model="form.prenom" placeholder="Prénom" required />
      <input v-model="form.email" type="email" placeholder="Email" required />
      <input v-model="form.telephone" placeholder="Téléphone" required />
      <input v-model="form.adresse" placeholder="Adresse" required />
      <select v-model="form.genre" required>
        <option value="">-- Genre --</option>
        <option value="homme">Homme</option>
        <option value="femme">Femme</option>
      </select>
      <button type="submit">Ajouter</button>
    </form>

    <!-- Message de confirmation -->
    <transition name="fade">
      <div v-if="message" class="confirmation">
        {{ message }}
        <button @click="fermerMessage" class="close-btn">Fermer</button>
      </div>
    </transition>

    <!-- Affichage erreurs validation sous le formulaire -->
    <div v-if="errors.length" class="error-messages">
      <ul>
        <li v-for="(err, index) in errors" :key="index">{{ err }}</li>
      </ul>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { useRoute } from 'vue-router'
import candidatService from '../../services/candidatService'

// Récupérer l'id formation dans l'URL
const route = useRoute()

// Données du formulaire
const form = ref({
  nom: '',
  prenom: '',
  email: '',
  telephone: '',
  adresse: '',
  genre: '',
  formation_id: route.query.formation_id || null
})

const message = ref('')
const errors = ref([])  // tableau pour stocker les erreurs de validation
const formVisible = ref(true)

const ajouterCandidat = async () => {
  errors.value = []  // reset erreurs
  try {
    // Préparer les données à envoyer (pas besoin du user_id pour ton backend)
    const formData = { ...form.value }

    await candidatService.createPublic(formData)


    // Réinitialiser formulaire sauf formation_id
    form.value = {
      nom: '',
      prenom: '',
      email: '',
      telephone: '',
      adresse: '',
      genre: '',
      formation_id: form.value.formation_id
    }

    // Message succès
    message.value = 'Formulaire envoyé, merci !'
    formVisible.value = false

    setTimeout(() => {
      message.value = ''
      formVisible.value = true
    }, 5000)
  } catch (error) {
    // Gestion des erreurs de validation Laravel
    if (error.response && error.response.status === 422) {
      const apiErrors = error.response.data.errors
      errors.value = Object.values(apiErrors).flat()
    } else {
      alert('Erreur lors de l’ajout du candidat.')
      console.error(error)
    }
  }
}

const fermerMessage = () => {
  message.value = ''
  formVisible.value = true
  errors.value = []
}
</script>

<style scoped>
/* .form {
  max-width: 500px;
  margin: auto;
  padding: 2rem;
  background-color: #f9f9f9;
  border: 1px solid #ccc;
  border-radius: 10px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
} */
.form {
  margin-top: 150px;
  margin-bottom: 100px; /* ✅ Ajout de marge en bas */
  max-width: 500px;
  margin-left: auto;
  margin-right: auto;
  padding: 2rem;
  background-color: #f9f9f9;
  border: 1px solid #ccc;
  border-radius: 10px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
}



h2 {
  text-align: center;
  color: #003366;
  margin-bottom: 1.5rem;
}

input,
select {
  width: 100%;
  margin-bottom: 12px;
  padding: 0.6rem;
  border: 1px solid #ccc;
  border-radius: 5px;
  font-size: 1rem;
}

input:focus,
select:focus {
  border-color: #ff7f00;
  outline: none;
  box-shadow: 0 0 5px rgba(255, 127, 0, 0.5);
}

button {
  width: 100%;
  padding: 0.7rem;
  font-size: 1rem;
  font-weight: bold;
  color: white;
  background-color: #ff7f00;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

button:hover {
  background-color: #e06600;
}

.confirmation {
  margin-top: 1rem;
  padding: 1rem;
  background-color: #d4edda;
  color: #155724;
  border: 1px solid #c3e6cb;
  border-radius: 5px;
  position: relative;
  text-align: center;
  font-weight: bold;
}

.close-btn {
  background: none;
  border: none;
  color: #155724;
  font-weight: bold;
  margin-left: 1rem;
  cursor: pointer;
}

.error-messages {
  margin-top: 1rem;
  padding: 1rem;
  background-color: #f8d7da;
  color: #842029;
  border: 1px solid #f5c2c7;
  border-radius: 5px;
  font-weight: bold;
}

.error-messages ul {
  padding-left: 1.2rem;
  margin: 0;
}

/* Animation fade */
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s ease;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
