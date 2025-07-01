<template>
  <div class="page-container">
    <h1>Gestion des Formations</h1>

    <div v-if="message" :class="{'success': success, 'error': !success}" class="message">
      {{ message }}
    </div>

    <!-- Formulaire -->
    <form @submit.prevent="saveFormation" class="form-grid" novalidate>
      <div class="form-row">
        <div class="form-field">
          <label for="titre">Titre</label>
          <input id="titre" v-model="form.titre" type="text" required maxlength="50" placeholder="Titre de la formation" />
        </div>
        <div class="form-field">
          <label for="lieu">Lieu</label>
          <input id="lieu" v-model="form.lieu" type="text" maxlength="50" placeholder="Ex: Dakar" />
        </div>
        <div class="form-field">
          <label for="prix">Prix (F cfa)</label>
          <input id="prix" v-model.number="form.prix" type="number" min="0" step="0.01" placeholder="0.00" />
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
          <input id="duree" v-model.number="form.duree" type="number" min="1" placeholder="Nombre de jours" />
        </div>
      </div>

      <div class="form-row">
        <div class="form-field">
          <label for="type">Type</label>
          <select id="type" v-model="form.type" required>
            <option disabled value="">-- Type de formation --</option>
            <option value="Bootcamps">Bootcamps</option>
            <option value="Formations certifiantes">Formations certifiantes</option>
            <option value="Modules à la carte">Modules à la carte</option>
          </select>
        </div>
        <div class="form-field">
          <label for="id_categorie">Catégorie</label>
          <select id="id_categorie" v-model="form.id_categorie" required>
            <option disabled value="">-- Catégorie --</option>
            <option v-for="cat in categories" :key="cat.id" :value="cat.id">
              {{ cat.nom }}
            </option>
          </select>
        </div>
      </div>

      <div class="form-field-full">
        <label for="description">Description</label>
        <textarea id="description" v-model="form.description" required placeholder="Description de la formation"></textarea>
      </div>

      <button type="submit">{{ form.id ? 'Modifier' : 'Créer' }}</button>
    </form>

    <!-- Liste des formations -->
    <h1>Liste des Formations</h1>
    <table class="table" v-if="formations.length">
      <thead>
        <tr>
            <th>Titre</th>
            <th>Description</th>
            <th>Durée</th>
            <th>Prix</th>
            <th>Type</th>
            <th>Lieu</th>
            <th>Catégorie</th>
            <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="f in formations" :key="f.id">
          <td><strong>{{ f.titre }}</strong></td>
          <td>{{ f.description }}</td>
          
          <td>{{ f.duree }}</td>
          <td>{{ Number(f.prix).toLocaleString('fr-FR') }} FCFA</td>
          <td>{{ f.type }}</td>
          <td>{{ f.lieu }}</td>
          <td>{{ f.categorie?.nom || 'N/A' }}</td>
          <!-- <td>{{ f.user?.name || 'N/A' }} {{ f.user?.prenom || 'N/A' }}</td> -->

          <td>
            <button @click="editFormation(f)" title="Modifier"><i class="fas fa-pen"></i></button>
            <button @click="deleteFormation(f.id)" title="Supprimer"><i class="fas fa-trash"></i></button>
            <button @click="viewDetails(f.id)" title="Détails"><i class="fas fa-eye"></i></button>
          </td>
        </tr>
      </tbody>
    </table>
    <p v-else>Aucune formation disponible.</p>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import { useRouter } from 'vue-router';
import api from '@/services/api';

const router = useRouter();
const formations = ref([]);
const categories = ref([]);
const message = ref('');
const success = ref(true);

const form = ref({
  id: null,
  titre: '',
  description: '',
  date_debut_candidature: '',
  date_debut: '',
  date_fin: '',
  date_limite_depot: '',
  heure: '',
  duree: null,
  prix: null,
  lieu: '',
  type: '',
  id_categorie: ''
});

const getFormations = async () => {
  try {
    const res = await api.get('/formations');
    formations.value = res.data;
  } catch {
    showMessage("Erreur lors du chargement des formations", false);
  }
};

const getCategories = async () => {
  try {
    const res = await api.get('/categories');
    categories.value = res.data;
  } catch {
    showMessage("Erreur lors du chargement des catégories", false);
  }
};

const saveFormation = async () => {
  try {
    if (form.value.id) {
      await api.put(`/formations/${form.value.id}`, form.value);
      showMessage("Formation modifiée avec succès");
    } else {
      await api.post('/formations', form.value);
      showMessage("Formation créée avec succès");
    }
    resetForm();
    getFormations();
  } catch (error) {
    if (error.response?.data?.errors) {
      const errors = Object.values(error.response.data.errors).flat();
      showMessage(errors.join('\n'), false);
    } else {
      showMessage("Erreur lors de l'enregistrement", false);
    }
  }
};

const editFormation = (f) => {
  form.value = {
    ...f,
    heure: f.heure ? f.heure.slice(0, 5) : ''
  };
};

const deleteFormation = async (id) => {
  if (confirm("Supprimer cette formation ?")) {
    try {
      await api.delete(`/formations/${id}`);
      showMessage("Formation supprimée");
      getFormations();
    } catch {
      showMessage("Erreur lors de la suppression", false);
    }
  }
};

const viewDetails = (id) => {
  router.push({ name: 'Voirdetail-formations', params: { id } });
};

const resetForm = () => {
  form.value = {
    id: null,
    titre: '',
    description: '',
    date_debut_candidature: '',
    date_debut: '',
    date_fin: '',
    date_limite_depot: '',
    heure: '',
    duree: null,
    prix: null,
    lieu: '',
    type: '',
    id_categorie: ''
  };
};

const showMessage = (msg, isSuccess = true) => {
  message.value = msg;
  success.value = isSuccess;
  setTimeout(() => (message.value = ''), 3000);
};

const formatDate = (dateStr) => {
  if (!dateStr) return '';
  return new Date(dateStr).toLocaleDateString('fr-FR');
};

const formatHeure = (dateStr) => {
  if (!dateStr) return '';
  const d = new Date(`1970-01-01T${dateStr}`);
  return d.toLocaleTimeString('fr-FR', { hour: '2-digit', minute: '2-digit' });
};

onMounted(() => {
  getFormations();
  getCategories();
});
</script>

<style scoped>
.page-container {
  padding: 20px;
  margin-top: 5%;
  max-width: 1000px;
  margin-left: auto;
  margin-right: auto;
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

form {
  background: #f7f7f7;
  padding: 20px;
  border-radius: 10px;
  margin-bottom: 30px;
}

.form-grid {
  display: flex;
  flex-direction: column;
  gap: 1rem;
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
  display: flex;
  flex-direction: column;
  margin-top: 1rem;
}

input, select, textarea {
  padding: 8px;
  border: 1px solid #ccc;
  border-radius: 5px;
}

button {
  margin-top: 10px;
  padding: 10px 15px;
  background-color: #343f69;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}

button i {
  pointer-events: none;
}

button:hover {
  background-color: #2a3157;
}

.table {
  width: 100%;
  border-collapse: collapse;
  margin-top: 1rem;
}

.table th, .table td {
  border: 1px solid #ddd;
  padding: 8px;
  text-align: center;
}

.table th {
  background-color: #343f69;
  color: white;
}
</style>
