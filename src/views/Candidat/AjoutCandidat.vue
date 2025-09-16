<template>
  <div class="form">
    <!-- Flèche retour discrète -->
    <span class="back-arrow" @click="router.back()">← Retour</span>

    <h2>Ajouter un Candidat</h2>

    <form v-if="formVisible" @submit.prevent="ajouterCandidat" novalidate>
      <div class="form-group" v-for="(label, key) in fields" :key="key">
        <label :for="key">{{ label }}</label>

        <!-- champ genre -->
        <select
          v-if="key === 'genre'"
          :id="key"
          v-model="form.genre"
          aria-label="Genre"
        >
          <option value="" disabled>-- Choisissez un genre --</option>
          <option value="homme">Homme</option>
          <option value="femme">Femme</option>
        </select>

        <!-- autres champs -->
        <input
          v-else
          :id="key"
          v-model="form[key]"
          :placeholder="label"
          :type="key === 'email' ? 'email' : 'text'"
          :required="key !== 'code_parrainage'"
          autocomplete="off"
        />
      </div>

      <!-- <button type="submit" :disabled="isSubmitting">
        {{ isSubmitting ? 'Envoi...' : 'Ajouter' }}
      </button> -->
       <!-- bouton centré -->
  <div class="button-container">
    <button type="submit" :disabled="isSubmitting">
      {{ isSubmitting ? 'Envoi...' : 'Ajouter' }}
    </button>
  </div>
    </form>

    <transition name="fade">
      <div v-if="message" class="confirmation" role="alert">
        {{ message }}
        <button @click="fermerMessage" aria-label="Fermer le message" class="close-btn">×</button>
      </div>
    </transition>

    <div v-if="errors.length" class="error-messages" role="alert">
      <ul>
        <li v-for="(err, index) in errors" :key="index">{{ err }}</li>
      </ul>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { useRouter, useRoute } from 'vue-router'
import candidatService from '../../services/candidatService'

const router = useRouter()
const route = useRoute()

const form = ref({
  nom: '',
  prenom: '',
  email: '',
  telephone: '',
  adresse: '',
  genre: '',
  // code_parrainage: '',
  // formation_id: route.query.formation_id || null
  code_parrainage: route.query.ref || localStorage.getItem('ref') || '',
  formation_id: route.query.formation_id || null

// code_parrainage: '',  
  // formation_id: null
})

const message = ref('')
const errors = ref([])
const formVisible = ref(true)
const isSubmitting = ref(false)

const fields = {
  nom: 'Nom',
  prenom: 'Prénom',
  email: 'Email',
  telephone: 'Téléphone',
  adresse: 'Adresse',
  genre: 'Genre',
  code_parrainage: 'Code de parrainage (optionnel)'
}

// ✅ Récupération auto du code parrainage depuis l’URL
onMounted(() => {
  const refCode = route.query.ref || localStorage.getItem('ref') || ''
  form.value.code_parrainage = refCode

  console.log("formation_id reçu:", route.query.formation_id);
  console.log("code de parrainage reçu:", route.query.ref || localStorage.getItem('ref'));
})

// onMounted(() => {
//   // Vérifie d'abord le query param dans l'URL
//   let refCode = route.query.ref || localStorage.getItem('ref') || ''
  
//   // Remplir le champ
//   form.value.code_parrainage = refCode
//   form.value.formation_id = route.query.formation_id || null
  
//   console.log("Code de parrainage récupéré :", refCode)
// })

// onMounted(() => {
//   const code = route.query.code
//   if (code) {
//     form.value.code_parrainage = code
//   }
// })

const ajouterCandidat = async () => {
  errors.value = []

  // validation frontale du code_parrainage
  if (form.value.code_parrainage && form.value.code_parrainage.length > 12) {
    errors.value.push('Le code de parrainage ne doit pas dépasser 12 caractères.');
    return
  }

  isSubmitting.value = true

  try {
    const response = await candidatService.createPublic({ ...form.value })

    if (response.status === 201) {
      message.value = '✅ Candidat ajouté avec succès.'
    } else if (response.status === 200) {
      message.value = response.data.message || '⚠️ Candidat existait déjà.'
    }

    formVisible.value = false

    // Réinitialiser le formulaire
    form.value = {
      nom: '',
      prenom: '',
      email: '',
      telephone: '',
      adresse: '',
      genre: '',
      code_parrainage: '',
      formation_id: route.query.formation_id || null
    }

// Redirection automatique après 2 secondes si succès
    if (response.status === 201) {
      setTimeout(() => {
        router.push('/formations')
      }, 2000)
    }

    // setTimeout(() => {
    //   router.push('/formations')
    // }, 2000)

  } catch (error) {
    // erreurs de validation (ex: champ obligatoire)
    if (error.response?.status === 422) {
      const apiErrors = error.response.data.errors
      errors.value = Object.values(apiErrors).flat()
    } 
    // conflit (email ou téléphone déjà utilisé)
    else if (error.response?.status === 409) {
      errors.value = [error.response.data.message || '⚠️ Email ou téléphone déjà utilisé.']
    } 
    // autres erreurs serveur
    else {
      errors.value = ['❌ Une erreur est survenue. Veuillez réessayer.']
      console.error(error)
    }
  } finally {
    isSubmitting.value = false
  }
}


const fermerMessage = () => {
  message.value = ''
  formVisible.value = true
  errors.value = []
}
</script>

<style scoped>
.form {
  max-width: 600px;
  margin: 3rem auto;
  padding: 3rem;
  background: #fff;
  border-radius: 8px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  font-family: Arial, sans-serif;
  color: #222;
}

h2 {
  text-align: center;
  color: #222;
  font-weight: 600;
  margin-bottom: 1.5rem;
}

.form-group {
  margin-bottom: 1rem;
}

label {
  display: block;
  font-weight: 600;
  margin-bottom: 4px;
  color: #333;
}

input,
select {
  width: 100%;
  padding: 0.5rem 0.8rem;
  font-size: 1rem;
  border: 1px solid #ccc;
  border-radius: 6px;
  background-color: #fff;
  color: #222;
  transition: border-color 0.3s ease;
}

input:focus,
select:focus {
  outline: none;
  border-color: #ff7f00;
}

/* button {
  width: 18%;
  padding: 0.7rem;
  font-size: 1.1rem;
  font-weight: 600;
  color: #fff;
  background-color: #ff7f00;
  border: none;
  border-radius: 6px;
  cursor: pointer;
  transition: background-color 0.3s ease;
  text-align: center;
} */
.button-container {
  text-align: center; /* centre horizontalement */
  margin-top: 1.5rem;
}

button {
  width: auto; /* pour que le bouton ne prenne pas toute la largeur */
  min-width: 150px; /* taille minimale pour l’équilibre */
  padding: 0.7rem 1.5rem;
  font-size: 1.1rem;
  font-weight: 600;
  color: #fff;
  background-color: #ff7f00;
  border: none;
  border-radius: 6px;
  cursor: pointer;
  transition: background-color 0.3s ease;
  text-align: center;
}



button:disabled {
  background-color: #a6c8ff;
  cursor: not-allowed;
}

button:hover:not(:disabled) {
  background-color: #003366;
}

.confirmation {
  margin-top: 1rem;
  padding: 1rem;
  background-color: #d1e7dd;
  color: #0f5132;
  border-radius: 6px;
  font-weight: 600;
  position: relative;
  text-align: center;
}

.close-btn {
  position: absolute;
  top: 8px;
  right: 12px;
  background: none;
  border: none;
  font-size: 1.2rem;
  color: #0f5132;
  cursor: pointer;
}

.close-btn:hover {
  color: #0a3620;
}

.error-messages {
  margin-top: 1rem;
  padding: 0.8rem 1rem;
  background-color: #f8d7da;
  color: #842029;
  border-radius: 6px;
  font-weight: 600;
  font-size: 0.9rem;
}

.error-messages ul {
  margin: 0;
  padding-left: 1.2rem;
}

.error-messages li {
  margin-bottom: 0.25rem;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.4s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

/* Flèche retour discrète  */

.back-arrow {
  display: inline-block;
  font-size: 0.9rem;
  color: #6b7280; /* gris clair */
  cursor: pointer;
  margin-bottom: 1rem;
  transition: color 0.2s ease;
}

.back-arrow:hover {
  color: #111827; /* plus foncé au hover */
}

</style>
