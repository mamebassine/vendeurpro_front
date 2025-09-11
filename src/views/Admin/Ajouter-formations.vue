<template>
  <div class="page-container">
    <h1>Gestion des Formations</h1>

    <div v-if="message" :class="{'success': success, 'error': !success}" class="message">
      {{ message }}
    </div>

    <button class="btn-ajouter" @click="showModal = true">Ajouter une formation</button>

    <transition name="modal">
      <div v-if="showModal" class="modal-overlay">
        <div class="modal-content">
          <form @submit.prevent="saveFormation" class="form-grid" novalidate>

            <!-- 🟠 Catégorie en haut -->
            <div class="form-field-full">
              <label for="id_categorie">Catégorie</label>
              <select id="id_categorie" v-model="form.id_categorie" required>
                <option disabled value="">-- Catégorie --</option>
                <option v-for="cat in categories" :key="cat.id" :value="cat.id">{{ cat.nom }}</option>
              </select>
            </div>

            <!-- ✅ Bloc FORMATION -->
            <div v-if="selectedCategoryName === 'formation'">
              <div class="form-row">
                <div class="form-field">
                  <label for="titre">Titre</label>
                  <input id="titre" v-model="form.titre" type="text" required maxlength="50" />
                </div>
              </div>

              <div class="form-field-full">
                <label for="public_vise">🎯 Pour qui ?</label>
                <textarea id="public_vise" v-model="form.public_vise"></textarea>
              </div>

              <div class="form-field-full">
                <label for="objectifs">📚 Objectifs :</label>
                <textarea id="objectifs" v-model="form.objectifs"></textarea>
              </div>

              <div class="form-row">
                <div class="form-field">
                  <label for="certifiante">Certification</label>
                  <select id="certifiante" v-model="form.certifiante">
                    <option :value="true">Oui</option>
                    <option :value="false">Non</option>
                  </select>
                </div>
                <div class="form-field">
                  <label for="format">Format</label>
                  <select id="format" v-model="form.format">
                    <option disabled value="">-- Choisir un format --</option>
                    <option>Présentiel</option>
                    <option>En ligne</option>
                    <option>Hybride</option>
                  </select>
                </div>
              </div>

              <div class="form-row">
                <div class="form-field">
                  <label for="lieu">Lieu</label>
                  <input id="lieu" v-model="form.lieu" type="text" maxlength="50" />
                </div>
                <div class="form-field">
                  <label for="prix">Prix (F cfa)</label>
                  <input id="prix" v-model.number="form.prix" type="number" min="0" step="0.01" />
                </div>
              </div>

              <div class="form-row">
                <div class="form-field">
                  <label for="date_debut_candidature">Début candidature</label>
                  <input id="date_debut_candidature" v-model="form.date_debut_candidature" type="date" />
                </div>
                <div class="form-field">
                  <label for="date_limite_depot">Limite dépôt</label>
                  <input id="date_limite_depot" v-model="form.date_limite_depot" type="date" />
                </div>
                <div class="form-field">
                  <label for="date_debut">Début formation</label>
                  <input id="date_debut" v-model="form.date_debut" type="date" />
                </div>
              </div>

              <div class="form-row">
                <div class="form-field">
                  <label for="date_fin">Fin formation</label>
                  <input id="date_fin" v-model="form.date_fin" type="date" />
                </div>
                <div class="form-field">
                  <label for="heure">Heure</label>
                  <input id="heure" v-model="form.heure" type="time" />
                </div>
                <div class="form-field">
                  <label for="duree">Durée (jours)</label>
                  <input id="duree" v-model.number="form.duree" type="number" min="1" />
                </div>
              </div>

              <div class="form-row">
                <div class="form-field">
                  <label for="type">Type</label>
                  <select id="type" v-model="form.type" required>
                    <option disabled value="">-- Type de formation --</option>
                    <option>Bootcamps</option>
                    <option>Formations certifiantes</option>
                    <option>Modules à la carte</option>
                  </select>
                </div>
              </div>

              <div class="form-field-full">
                <label for="description">Description</label>
                <textarea id="description" v-model="form.description" required></textarea>
              </div>
            </div>

            <!-- ✅ Bloc WEBINAIRE SIMPLIFIÉ (sans lien) -->
<div v-if="selectedCategoryName === 'webinaire'">
  <div class="form-field-full">
    <label for="titre">Titre</label>
    <input id="titre" v-model="form.titre" type="text" required placeholder="Les 5 Techniques pour Booster Vos Ventes" />
  </div>

  <div class="form-row">
    <div class="form-field">
      <label for="date_debut">Date</label>
      <input id="date_debut" v-model="form.date_debut" type="date" />
    </div>
    <div class="form-field">
      <label for="heure">Heure</label>
      <input id="heure" v-model="form.heure" type="time" />
    </div>
    <div class="form-field">
      <label for="duree">Durée</label>
      <input id="duree" v-model="form.duree" type="text" placeholder="1h" />
    </div>
  </div>
</div>


            <!-- ✅ Bloc COACHING -->
<div v-if="selectedCategoryName === 'coaching'">
  <div class="form-field-full">
    <label for="titre">Titre</label>
    <input id="titre" v-model="form.titre" type="text" required />
  </div>

  <div class="form-field-full">
    <label for="public_vise">🎯 Public visé</label>
    <textarea id="public_vise" v-model="form.public_vise" placeholder="Ex : Entrepreneurs, freelances..."></textarea>
  </div>

  <div class="form-field-full">
    <label for="objectifs">✔️ Objectifs</label>
    <textarea id="objectifs" v-model="form.objectifs" placeholder="Objectifs du coaching (séparés par des points ou tirets)"></textarea>
  </div>

  <div class="form-field">
    <label for="duree">Durée (en séances)</label>
    <input id="duree" v-model="form.duree" type="text" placeholder="Ex: 4 à 8 séances" />
  </div>
</div>

<div class="btn-container">
  <button type="submit" class="btn-creer">{{ form.id ? 'Modifier' : 'Créer' }}</button>
  <button type="button" @click="closeModal" class="btn-fermer">Fermer</button>
</div>

</form>
</div>
</div>
</transition>

    <!-- Liste des formations -->
    <h1>Liste des Formations</h1>
    <table class="table" v-if="formations.length">
      <thead>
        <tr>
          <th>Titre</th>
          <!-- <th>Description</th> -->
          <th>Durée</th>
          <!-- <th>Prix</th> -->
          <!-- <th>Type</th> -->
          <!-- <th>Lieu</th> -->
          <th>Catégorie</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="f in formations" :key="f.id">
          <td><strong>{{ f.titre }}</strong></td>
          <!-- <td>{{ f.description }}</td> -->
          <td>{{ f.duree }}</td>
          <!-- <td>{{ Number(f.prix).toLocaleString('fr-FR') }} FCFA</td> -->
          <!-- <td>{{ f.type }}</td> -->
          <!-- <td>{{ f.lieu }}</td> -->
          <td>{{ f.categorie?.nom || 'N/A' }}</td>
          <td>
            <button @click="editFormation(f)"><i class="fas fa-pen"></i></button>
            <button @click="deleteFormation(f.id)"><i class="fas fa-trash"></i></button>
            <button @click="viewDetails(f.id)"><i class="fas fa-eye"></i></button>
          </td>
        </tr>
      </tbody>
    </table>
    <p v-else>Aucune formation disponible.</p>
  </div>
</template>



<script setup>
import { ref, watch, onMounted } from 'vue'
import { useRouter } from 'vue-router'
import api from '@/services/api'

const router = useRouter()
const formations = ref([])
const categories = ref([])
const message = ref('')
const success = ref(true)
const showModal = ref(false)

const selectedCategoryName = ref('')

const form = ref({
  id: null,
  titre: '',
  description: '',
  public_vise: '',
  objectifs: '',
  certifiante: false,
  format: '',
  date_debut_candidature: '',
  date_limite_depot: '',
  date_debut: '',
  date_fin: '',
  heure: '',
  duree: null,
  prix: null,
  lieu: '',
  type: '',
  id_categorie: '',
  lien_webinaire: ''
})

watch(() => form.value.id_categorie, (newVal) => {
  const selected = categories.value.find(cat => cat.id === newVal)
  selectedCategoryName.value = selected ? selected.nom.toLowerCase() : ''
})

const getFormations = async () => {
  try {
    const res = await api.get('/formations')
    formations.value = res.data
  } catch {
    showMessage("Erreur chargement formations", false)
  }
}

const getCategories = async () => {
  try {
    const res = await api.get('/categories')
    categories.value = res.data
  } catch {
    showMessage("Erreur chargement catégories", false)
  }
}

const saveFormation = async () => {
  try {
    let url = '/formations' // par défaut
    if (selectedCategoryName.value === 'webinaire') {
      url = '/ajouter-webinaire'
    } else if (selectedCategoryName.value === 'coaching') {
      url = '/ajouter-coaching'
    }

    if (form.value.id) {
      await api.put(`${url}/${form.value.id}`, form.value)
      showMessage("Formation modifiée avec succès")
    } else {
      const response = await api.post(url, form.value)
      formations.value.push(response.data)
      showMessage("Formation créée avec succès")
    }

    resetForm()
    getFormations()
    showModal.value = false
  } catch (error) {
    const errors = error.response?.data?.errors
    showMessage(errors ? Object.values(errors).flat().join('\n') : "Erreur d'enregistrement", false)
  }
}




const editFormation = (f) => {
  form.value = {
    ...f,
    heure: f.heure ? f.heure.slice(0, 5) : '',
    lien_webinaire: f.lien_webinaire || ''
  }
  showModal.value = true
}

const deleteFormation = async (id) => {
  if (confirm("Supprimer cette formation ?")) {
    try {
      await api.delete(`/formations/${id}`)
      showMessage("Formation supprimée")
      getFormations()
    } catch {
      showMessage("Erreur suppression", false)
    }
  }
}

const viewDetails = (id) => {
  router.push({ name: 'AdminformationsDetails', params: { id } })
}

const resetForm = () => {
  form.value = {
    id: null,
    titre: '',
    description: '',
    public_vise: '',
    objectifs: '',
    certifiante: false,
    format: '',
    date_debut_candidature: '',
    date_limite_depot: '',
    date_debut: '',
    date_fin: '',
    heure: '',
    duree: null,
    prix: null,
    lieu: '',
    type: '',
    id_categorie: '',
    lien_webinaire: ''
  }
  selectedCategoryName.value = ''
}

const closeModal = () => {
  showModal.value = false
  resetForm()
}

const showMessage = (msg, isSuccess = true) => {
  message.value = msg
  success.value = isSuccess
  setTimeout(() => (message.value = ''), 3000)
}

onMounted(() => {
  getFormations()
  getCategories()
})
</script>


<style scoped>
/* modal */
.modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(52, 63, 105, 0.7);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
}

.modal-content {
  background: #fff;
  padding: 2rem;
  width: 90%;
  max-width: 800px;
  border-radius: 10px;
  box-shadow: 0 5px 15px rgba(0,0,0,0.3);
  max-height: 90vh;
  overflow-y: auto;
}

.modal-enter-active, .modal-leave-active {
  transition: opacity 0.4s ease;
}
.modal-enter-from, .modal-leave-to {
  opacity: 0;
}

/* btns */
.btn-ajouter {
  background-color: #ff7f00;
  color: white;
  padding: 10px 18px;
  border: none;
  border-radius: 5px;
  margin-bottom: 20px;
  cursor: pointer;
}
.btn-ajouter:hover {
  background-color: #003366;
}

.btn-container {
  display: flex;
  justify-content: center; /* centre horizontalement */
  gap: 15px; /* espace entre les boutons */
  margin-top: 20px;
}

.btn-creer,
.btn-fermer {
  width: 15%;
  min-width: 100px; /* 👈 pour éviter que le bouton soit trop petit */
}


.btn-fermer {
  width: 15%;;
  background-color: #c3b0b2;
  color: white;
  padding: 8px 12px;
  border: none;
  border-radius: 5px;
  margin-top: 10px;
  margin-left: 10px;
  cursor: pointer;
}
.btn-fermer:hover {
  background-color: #f4d4d7;
}

/* autres styles inchangés */
.page-container {
  padding: 10px;
  margin-top: 5%;
  max-width: 1000px;
  margin: auto;
  font-family: Arial, sans-serif;
}
h1 {
  margin-top: 20px;
  font-size: 1.8rem;
  color: #343f69;
}
.message {
  padding: 10px;
  margin-bottom: 10px;
  border-radius: 5px;
}
.success {
  background-color: #d4edda;
  color: #155724;
}
.error {
  background-color: #f8d7da;
  color: #721c24;
}
.form-grid {
  display: flex;
  flex-direction: column;
  gap: 15px;
}
.form-row {
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
}
.form-field {
  flex: 1;
  display: flex;
  flex-direction: column;
}
.form-field-full {
  width: 100%;
  display: flex;
  flex-direction: column;
}
button {
  background-color: #ff7f00;
  color: white;
  padding: 8px 18px;
  border: none;
  border-radius: 6px;
  cursor: pointer;
  margin-top: 10px;
    margin-right: 10px; /* 👈 Espace entre les boutons */

}
button:hover {
  background-color: #2a3155;
}
table {
  width: 100%;
  border-collapse: collapse;
  margin-top: 20px;
}
th, td {
  border: 1px solid #ccc;
  padding: 10px;
  text-align: left;
}
th {
  background-color: #343f69;
  color: white;
}



/* Style général pour tous les champs de formulaire */
input[type="text"],
input[type="number"],
input[type="date"],
input[type="time"],
select,
textarea {
  border: 2px solid #343F69; /* couleur bleu foncé */
  border-radius: 6px;
  padding: 8px;
  width: 100%;
  box-sizing: border-box;
  outline: none;
  transition: border-color 0.3s ease;
}

/* Effet au focus */
input:focus,
select:focus,
textarea:focus {
  border-color: #5562a2; /* couleur plus claire au focus */
  box-shadow: 0 0 0 2px rgba(52, 63, 105, 0.2);
}

/* Optionnel : ajouter un fond clair pour plus de visibilité */
textarea {
  min-height: 80px;
  resize: vertical;
  background-color: #f9f9f9;
}

</style>
