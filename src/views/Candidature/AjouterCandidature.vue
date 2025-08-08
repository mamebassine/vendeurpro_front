<template>
  <div class="form">
    <h2>{{ isEditMode ? 'Modifier la Candidature' : 'Ajouter une Candidature' }}</h2>

    <form @submit.prevent="soumettre">
      <input v-model="form.id_candidat" placeholder="ID Candidat" required />
      <input v-model="form.id_formation" placeholder="ID Formation" required />
      <select v-model="form.statut" required>
        <option value="">-- Choisir un statut --</option>
        <option value="en attente">En attente</option>
        <option value="acceptée">Acceptée</option>
        <option value="refusée">Refusée</option>
      </select>


      <!-- Champ code_parrainage facultatif -->
      <input
        v-model="form.code_parrainage"
        placeholder="Code parrainage (facultatif)"
        type="text"
      />

      <button type="submit">{{ isEditMode ? 'Mettre à jour' : 'Soumettre' }}</button>
    </form>

    <!-- Confirmation -->
    <div v-if="message" class="confirmation">
      {{ message }}
      <button @click="message = ''">Fermer</button>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import candidatureService from '@/services/candidatureService'

const route = useRoute()
const router = useRouter()

const form = ref({
  id_candidat: '',
  id_formation: '',
  statut: '',

  code_parrainage: '',  // <- ajouté ici

})

const message = ref('')
const isEditMode = ref(false)
const id = route.params.id

const chargerCandidature = async () => {
  if (id) {
    isEditMode.value = true
    try {
      const res = await candidatureService.getById(id)
      form.value = {
        id_candidat: res.data.id_candidat,
        id_formation: res.data.id_formation,
        statut: res.data.statut,

        code_parrainage: res.data.code_parrainage || '', // gérer null possible

      }
    } catch (error) {
      message.value = 'Erreur lors du chargement de la candidature.'
    }
  }
}

const soumettre = async () => {
  try {
    if (isEditMode.value) {
      await candidatureService.update(id, form.value)
      message.value = 'Candidature modifiée avec succès !'
    } else {
      await candidatureService.create(form.value)
      message.value = 'Candidature ajoutée avec succès !'
    }

    setTimeout(() => {
      message.value = ''
      router.push('/dashboard/listeCandidatures') // Redirection vers la liste
    }, 2000)
  } catch (error) {
    console.error(error)
    message.value = error.response?.data?.message || 'Erreur lors de l’opération.'
  }
}

onMounted(() => {
  chargerCandidature()
})
</script>

<style scoped>
.form {
  max-width: 500px;
  margin: auto;
  padding: 1.5rem;
  border: 1px solid #ddd;
  border-radius: 10px;
  background: #f9f9f9;
  margin-top: 5%;
}

input,
select {
  display: block;
  width: 100%;
  padding: 0.6rem;
  margin-bottom: 12px;
  border-radius: 5px;
  border: 1px solid #ccc;
}

button {
  background-color: #343F69;
  color: white;
  padding: 0.7rem;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  width: 100%;
}

.confirmation {
  margin-top: 1rem;
  background: #d4edda;
  color: #155724;
  padding: 1rem;
  border-radius: 5px;
}
</style>
