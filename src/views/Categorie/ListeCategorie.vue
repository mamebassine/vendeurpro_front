<template>
  <div class="container">
    <h1>Gestion des Catégories</h1>

    <!-- Formulaire d'ajout/modification -->
    <form @submit.prevent="soumettreCategorie" class="form">
      <input
        v-model="nouvelleCategorie.nom"
        type="text"
        placeholder="Nom de la catégorie"
        required
      />
      <button type="submit">
        {{ categorieEnEdition ? 'Enregistrer la modification' : 'Ajouter' }}
      </button>
      <button
        v-if="categorieEnEdition"
        type="button"
        class="btn-annuler"
        @click="annulerModification"
      >
        Annuler
      </button>
    </form>

    <!-- Tableau des catégories -->
    <table class="categorie-table">
      <thead>
        <tr>
          <th>#</th>
          <th>Nom</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(categorie, index) in categories" :key="categorie.id">
          <td>{{ index + 1 }}</td>
          <td>{{ categorie.nom }}</td>
          <td>
            <div class="btn-group">
              <button class="btn-modifier" @click="activerEdition(categorie)">
                Modifier
              </button>
              <button class="btn-supprimer" @click="supprimerCategorie(categorie.id)">
                Supprimer
              </button>
            </div>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import categorieService from '@/services/categorieService'

const categories = ref([])
const nouvelleCategorie = ref({ nom: '' })
const categorieEnEdition = ref(null)

const chargerCategories = async () => {
  try {
    const res = await categorieService.getAll()
    categories.value = res.data
  } catch (error) {
    console.error('Erreur de chargement', error)
  }
}

const soumettreCategorie = async () => {
  if (!nouvelleCategorie.value.nom.trim()) return

  try {
    if (categorieEnEdition.value) {
      // modification
      await categorieService.update(categorieEnEdition.value, { nom: nouvelleCategorie.value.nom })
      categorieEnEdition.value = null
    } else {
      // ajout
      await categorieService.create(nouvelleCategorie.value)
    }
    nouvelleCategorie.value.nom = ''
    await chargerCategories()
  } catch (error) {
    console.error('Erreur lors de la soumission', error)
  }
}

const activerEdition = (categorie) => {
  categorieEnEdition.value = categorie.id
  nouvelleCategorie.value.nom = categorie.nom
}

const annulerModification = () => {
  categorieEnEdition.value = null
  nouvelleCategorie.value.nom = ''
}

const supprimerCategorie = async (id) => {
  if (!confirm('Voulez-vous vraiment supprimer cette catégorie ?')) return
  try {
    await categorieService.delete(id)
    await chargerCategories()
  } catch (error) {
    console.error('Erreur lors de la suppression', error)
  }
}

onMounted(() => {
  chargerCategories()
})
</script>

<style scoped>
.container {
  max-width: 600px;
  margin: auto;
  padding: 20px;
}
h1 {
  text-align: center;
  margin-bottom: 20px;
}
.form {
  display: flex;
  gap: 10px;
  margin-bottom: 20px;
}
.form button {
  background-color: #343f69;
  color: white;
  padding: 6px 12px;
  border-radius: 4px;
  border: none;
  cursor: pointer;
}
.form button.btn-annuler {
  background-color: gray;
}
.form button.btn-annuler:hover {
  background-color: darkgray;
}
input[type="text"], input {
  flex: 1;
  padding: 8px;
}
.categorie-table {
  width: 100%;
  border-collapse: collapse;
}
.categorie-table th,
.categorie-table td {
  border: 1px solid #ccc;
  padding: 10px;
  text-align: left;
}
.btn-supprimer {
  background-color: crimson;
  border: none;
  color: white;
  padding: 6px 8px;
  cursor: pointer;
  border-radius: 4px;
}
.btn-supprimer:hover {
  background-color: darkred;
}
.btn-modifier {
  background-color: #343f69;
  border: none;
  color: white;
  padding: 6px 8px;
  cursor: pointer;
  border-radius: 4px;
}
.btn-modifier:hover {
  background-color: #2c335a;
}
.btn-group {
  display: flex;
  gap: 12px;
}
</style>
