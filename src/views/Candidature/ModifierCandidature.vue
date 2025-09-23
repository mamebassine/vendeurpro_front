<template>
  <div class="modifier-candidature">
    <button @click="retourPage" class="btn-retour">
  ← Retour
</button>

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

    <!-- Toast -->
    <div
      v-if="toast.visible"
      :class="['toast', toast.type === 'success' ? 'toast-success' : 'toast-error']"
    >
      {{ toast.message }}
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import candidatureService from '@/services/candidatureService'

const route = useRoute()
const router = useRouter()

const form = ref({ statut: '' })
const idFormation = ref(null)

// Gestion du toast
const toast = ref({
  visible: false,
  message: '',
  type: 'success' // 'success' ou 'error'
})

const showToast = (message, type = 'success', duration = 3000) => {
  toast.value = { visible: true, message, type }
  setTimeout(() => {
    toast.value.visible = false
  }, duration)
}

const chargerCandidature = async () => {
  try {
    const res = await candidatureService.getById(route.params.id)
    form.value = { statut: res.data.statut }
    idFormation.value = res.data.formation?.id ?? res.data.formation_id
  } catch (error) {
    console.error('Erreur chargement candidature :', error)
    showToast("Erreur lors du chargement de la candidature.", "error")
  }
}

const mettreAJourCandidature = async () => {
  try {
    await candidatureService.update(route.params.id, form.value)
    
    // Message spécifique selon le statut choisi
    let message = ""
    switch(form.value.statut) {
      case "acceptée":
        message = "La candidature a été acceptée avec succès."
        break
      case "refusée":
        message = "La candidature a été refusée avec succès."
        break
      case "en attente":
        message = "La candidature est désormais en attente."
        break
      default:
        message = "Le statut de la candidature a été mis à jour avec succès."
    }

    showToast(message, "success")

    // Redirection après 1,5s pour laisser voir le toast
    setTimeout(() => {
      router.push(`/admin/formationsdetail/${idFormation.value}`)
    }, 1500)

    
  } catch (error) {
    console.error('Erreur mise à jour :', error)
    showToast("Une erreur est survenue lors de la mise à jour.", "error")
  }
}

onMounted(() => {
  chargerCandidature()
})

const retourPage = () => {
  // Retour à la page précédente
  router.back()
}

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

/* Toast styles */
.toast {
  position: fixed;
  top: 20px;
  right: 20px;
  padding: 0.8rem 1.2rem;
  border-radius: 8px;
  box-shadow: 0 4px 12px rgba(0,0,0,0.15);
  font-weight: bold;
  z-index: 1000;
  color: white;
}

.toast-success {
  background-color: #28a745;
}

.toast-error {
  background-color: #dc3545;
}


.btn-retour {
  display: inline-block;
  margin-bottom: 1rem;
  background-color: #f0f0f0;
  color: #343F69;
  padding: 0.4rem 0.8rem;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-weight: bold;
  transition: 0.3s;
}

.btn-retour:hover {
  background-color: #e0e0e0;
}

</style>
