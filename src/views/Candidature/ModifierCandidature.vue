<template>
  <div class="modifier-candidature">
    <h2>Modifier la Candidature</h2>

    <form @submit.prevent="mettreAJourCandidature">
      <div class="form-group">
        <label for="statut">Statut</label>
        <select id="statut" v-model="form.statut" required>
          <option value="en attente">En attente</option>
          <option value="acceptée">Acceptée</option>
          <option value="refusée">Refusée</option>
        </select>
      </div>

      <button type="submit" class="btn-submit">Mettre à jour</button>
    </form>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import candidatureService from '@/services/candidatureService'

const route = useRoute()
const router = useRouter()
const form = ref({
  statut: ''
})

const chargerCandidature = async () => {
  try {
    const res = await candidatureService.getById(route.params.id)
    form.value = {
      statut: res.data.statut
    }
  } catch (error) {
    console.error('Erreur chargement candidature :', error)
  }
}

const mettreAJourCandidature = async () => {
  try {
    await candidatureService.update(route.params.id, form.value)
    alert('Candidature mise à jour avec succès.')
    router.push('/dashboard/listecandidature')
  } catch (error) {
    console.error('Erreur mise à jour :', error)
  }
}

onMounted(() => {
  chargerCandidature()
})
</script>

<style scoped>
.modifier-candidature {
  max-width: 600px;
  margin: 2rem auto;
  padding: 2rem;
  background: white;
  border-radius: 10px;
  box-shadow: 0 0 12px rgba(0, 0, 0, 0.1);
}

h2 {
  text-align: center;
  margin-bottom: 1.5rem;
  color: #343F69;
}

.form-group {
  margin-bottom: 1rem;
}

label {
  display: block;
  margin-bottom: 0.5rem;
  font-weight: bold;
}

select {
  width: 100%;
  padding: 0.5rem;
  border-radius: 5px;
  border: 1px solid #ccc;
}

.btn-submit {
  display: block;
  margin-top: 1rem;
  background-color: #343F69;
  color: white;
  padding: 0.6rem 1.2rem;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}
</style>
