<template>
  <div class="liste">
    <h2>Liste des Candidats</h2>
    <router-link to="/AjoutCandidat" class="ajout-btn">Ajouter un candidat</router-link>

    <table v-if="candidats && candidats.length">
      <thead>
        <tr>
          <!-- <th>ID</th> -->
          <th>Nom</th>
          <th>Prénom</th>
          <th>Email</th>
          <th>Téléphone</th>
          <th>Adresse</th>
          <th>Genre</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="candidat in candidats" :key="candidat?.id">
          <!-- <td>{{ candidat?.id ?? 'ID non disponible' }}</td> -->
          <td>{{ candidat?.nom ?? 'Nom inconnu' }}</td>
          <td>{{ candidat?.prenom ?? 'Prénom inconnu' }}</td>
          <td>{{ candidat?.email ?? 'Email inconnu' }}</td>
          <td>{{ candidat?.telephone ?? 'Téléphone inconnu' }}</td>
          <td>{{ candidat?.adresse ?? 'Adresse inconnue' }}</td>
          <td>{{ candidat?.genre ?? 'Genre inconnu' }}</td>
          <td>
            <button @click="remplirForm(candidat)">✏️</button>
            <button @click="supprimerCandidat(candidat?.id)">🗑️</button>
            <router-link :to="`/dashboard/voirdetail/candidat/${candidat?.id}`" class="action-btn">👁️ Voir</router-link>
          </td>
        </tr>
      </tbody>
    </table>

    <p v-else>Aucun candidat disponible.</p>

    <div v-if="formVisible" class="form-update">
      <h3>Modifier le Candidat</h3>
      <form @submit.prevent="modifierCandidat">
        <input v-model="form.nom" placeholder="Nom" required />
        <input v-model="form.prenom" placeholder="Prénom" required />
        <input v-model="form.email" placeholder="Email" required />
        <input v-model="form.telephone" placeholder="Téléphone" required />
        <input v-model="form.adresse" placeholder="Adresse" required />
        <select v-model="form.genre" required>
          <option value="">-- Genre --</option>
          <option value="homme">Homme</option>
          <option value="femme">Femme</option>
        </select>
        <button type="submit">Mettre à jour</button>
        <button type="button" @click="annulerModification">Annuler</button>
      </form>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import candidatService from '../../services/candidatService'

const candidats = ref([])
const formVisible = ref(false)
const selectedId = ref(null)

const form = ref({
  nom: '',
  prenom: '',
  email: '',
  telephone: '',
  adresse: '',
  genre: '',
})

const chargerCandidats = async () => {
  try {
    const res = await candidatService.getAll()
    console.log("Données récupérées :", res.data) // Vérifier les données API
    candidats.value = res.data?.data ?? [] // Corrige l'accès aux candidats
  } catch (error) {
    console.error('Erreur chargement candidats :', error)
    candidats.value = [] // Évite l'erreur `null`
  }
}

const supprimerCandidat = async (id) => {
  if (confirm('Supprimer ce candidat ?')) {
    try {
      await candidatService.remove(id)
      await chargerCandidats()
    } catch (error) {
      console.error('Erreur suppression :', error)
      alert("Erreur lors de la suppression.")
    }
  }
}

const remplirForm = (candidat) => {
  if (!candidat) return;
  selectedId.value = candidat?.id
  form.value = { ...candidat }
  formVisible.value = true
}

const modifierCandidat = async () => {
  try {
    if (!selectedId.value) return;
    const userId = localStorage.getItem('user_id')
    const formData = { ...form.value, user_id: userId }
    await candidatService.update(selectedId.value, formData)
    formVisible.value = false
    form.value = {
      nom: '',
      prenom: '',
      email: '',
      telephone: '',
      adresse: '',
      genre: '',
    }
    await chargerCandidats()
  } catch (error) {
    console.error('Erreur modification :', error)
    alert("Erreur lors de la modification.")
  }
}

const annulerModification = () => {
  formVisible.value = false
  selectedId.value = null
}

onMounted(() => {
  chargerCandidats()
})
</script>

<style scoped>
.liste {
  max-width: 95%;
  margin: auto;
}

.ajout-btn {
  display: inline-block;
  margin-bottom: 1rem;
  background-color: #343f69;
  color: white;
  padding: 0.5rem 1rem;
  border-radius: 8px;
  text-decoration: none;
}

table {
  width: 100%;
  border-collapse: collapse;
  margin-top: 1rem;
}

th, td {
  border: 1px solid #ccc;
  padding: 0.5rem;
  text-align: left;
}

button {
  margin-right: 5px;
  padding: 4px 8px;
  cursor: pointer;
}

.form-update {
  margin-top: 2rem;
  padding: 1rem;
  border: 1px solid #ddd;
  background-color: #f9f9f9;
}

.action-btn {
  display: inline-block;
  margin-right: 5px;
  padding: 4px 8px;
  background-color: #e0e0e0;
  border: 1px solid #ccc;
  border-radius: 4px;
  text-decoration: none;
  color: black;
  cursor: pointer;
}
</style>
