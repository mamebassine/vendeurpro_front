<template>
  <div class="page-wrapper">
    <!-- Bouton Ajouter -->
    <div class="top-actions">
      <button @click="openModal" class="btn btn-add">+ Ajouter une actualité</button>
    </div>

    <!-- MODAL POPUP -->
    <div v-if="showModal" class="modal-overlay">
      <div class="modal-container">
        <h2 class="modal-title">{{ isEditing ? 'Modifier' : 'Ajouter' }} une actualité</h2>
        <form @submit.prevent="handleSubmit" class="actualites-form">
          <div class="form-group">
            <label for="titre">Titre</label>
            <input v-model="form.titre" id="titre" type="text" required />
          </div>

          <div class="form-group">
            <label for="contenu">Contenu</label>
            <textarea v-model="form.contenu" id="contenu" required></textarea>
          </div>

          <div class="form-group">
            <label for="auteur">Auteur</label>
            <input v-model="form.auteur" id="auteur" type="text" required />
          </div>

          <div class="form-group">
            <label for="fonction">Fonction</label>
            <input v-model="form.fonction" id="fonction" type="text" />
          </div>

          <div class="form-group">
            <label for="image">Image (locale)</label>
            <input @change="handleImageUpload" id="image" type="file" accept="image/*" />
          </div>

          <!-- Prévisualisation -->
          <div v-if="previewImage" class="image-preview">
            <img :src="previewImage" alt="Prévisualisation" />
          </div>

          <div class="form-group">
            <label for="date">Date de publication</label>
            <input v-model="form.date_publication" id="date" type="date" required />
          </div>

          <div class="form-group">
            <label for="points">Points (chapitre)</label>
            <textarea v-model="form.points" id="points"></textarea>
          </div>


          <div class="form-group">
            <label for="conclusion">Conclusion</label>
            <textarea v-model="form.conclusion" id="conclusion"></textarea>
          </div>

          <div class="form-buttons">
            <button type="submit" class="btn btn-primary">
              {{ isEditing ? 'Mettre à jour' : 'Ajouter' }}
            </button>
            <button @click="closeModal" type="button" class="btn btn-secondary">
              Fermer
            </button>
          </div>
        </form>
      </div>
    </div>

    <!-- LISTE -->
    <h3 class="table-title">📌 Liste des actualités</h3>

  <table class="actualites-table">
  <thead>
    <tr>
      <th>Image</th>
      <th>Titre</th>
      <th>Contenu</th>
      <th>Auteur</th>
      <th>Date</th>
      <th>Points</th>
      <th>Conclusion</th>
      <th>Actions</th>
    </tr>
  </thead>

<tbody>
  <tr v-for="item in actualites" :key="item.id">
    <td>
      <img :src="getImageUrl(item.image)" alt="Image" class="actualite-image" />
    </td>
    <td><strong>{{ item.titre || 'Titre manquant' }}</strong></td>
    <td class="content-cell">{{ item.contenu || 'Contenu manquant' }}</td>
    <td>{{ item.auteur || 'Auteur manquant' }}</td>
    <td>{{ item.date_publication || 'Date manquante' }}</td>
    <td class="points-cell">{{ truncateText(item.points, 50) || 'Points manquants' }}</td>

    <td class="conclusion-cell">{{ item.conclusion || 'Conclusion manquante' }}</td>
    <td>
      <div class="action-buttons">
        <button @click="editActualite(item)" class="btn btn-warning">✏</button>
        <router-link :to="{ name: 'VoirDetailActualite', params: { id: item.id } }" class="btn btn-info">👁</router-link>
        <button @click="deleteActualite(item.id)" class="btn btn-danger">🗑</button>
      </div>
    </td>
  </tr>
</tbody>


</table>

  
  </div>
</template>

<script>
import actualitesService from '@/services/actualitesService';

export default {
  data() {
    return {
      actualites: [],
      showModal: false,
      isEditing: false,
      editId: null,
      previewImage: null,
      imageFile: null,
      form: {
        titre: '',
        contenu: '',
        auteur: '',
        fonction: '',
        image: '',
        date_publication: '',
        points: '',
        conclusion: ''
      }
    };
  },
  methods: {
    async fetchActualites() {
      const res = await actualitesService.getAll();
      this.actualites = res.data;
      // this.actualites.forEach(item => {
      //   item.image = this.getImageUrl(item.image);
      // });
    console.log('Actualités chargées:', this.actualites);
    
    },
    handleImageUpload(event) {
      const file = event.target.files[0];
      if (file) {
        this.imageFile = file;
        const reader = new FileReader();
        reader.onload = (e) => {
          this.previewImage = e.target.result;
          
        };
        reader.readAsDataURL(file);
      }
    },
    async handleSubmit() {
      const formData = new FormData();
      for (const key in this.form) {
        formData.append(key, this.form[key]);
      }
      if (this.imageFile) {
        formData.append('image', this.imageFile);
      }

      if (this.isEditing) {
        await actualitesService.update(this.editId, formData);
      } else {
        await actualitesService.create(formData);
      }

      this.closeModal();
      this.fetchActualites();
    },
    openModal() {
      this.showModal = true;
    },
    closeModal() {
      this.showModal = false;
      this.resetForm();
    },
    editActualite(item) {
      this.form = {
        ...item,
        date_publication: item.date_publication
          ? item.date_publication.substring(0, 10)
          : ''
      };
      this.isEditing = true;
      this.editId = item.id;
      this.previewImage = this.getImageUrl(item.image);
      this.openModal();
    },
    async deleteActualite(id) {
      if (confirm('Supprimer cette actualité ?')) {
        await actualitesService.delete(id);
        this.fetchActualites();
      }
    },
    resetForm() {
      this.form = {
        titre: '',
        contenu: '',
        auteur: '',
        fonction: '',
        image: '',
        date_publication: '',
        points: '',
        conclusion: ''
      };
      this.isEditing = false;
      this.editId = null;
      this.imageFile = null;
      this.previewImage = null;
    },
   
    getImageUrl(image) {
  if (!image) return '/default-image.jpg';

  // Si c’est déjà une URL complète (par ex. Pexels ou autre CDN)
  if (image.startsWith('http')) return image;

  // Si l’image vient de Laravel storage (chemin relatif depuis la BDD)
  if (image.startsWith('actualites/')) {
    return `http://localhost:8000/storage/${image}`;
  }

  // Si l’image commence déjà par /storage/
  if (image.startsWith('/storage/')) {
    return `http://localhost:8000${image}`;
  }

  // Autres cas (par exemple /images/frommagep.jpeg)
  return image.startsWith('/')
    ? `http://localhost:8000${image}`
    : `http://localhost:8000/${image}`;
},

  truncateText(text, maxLength = 50) {
    if (!text) return '';
    if (text.length <= maxLength) return text;
    return text.substring(0, maxLength) + '...';
  }
},

mounted() {
    this.fetchActualites();
  },
};
</script>

<style scoped>
.page-wrapper {
  padding: 30px;
  background: #f4f4f4;
  font-family: 'Segoe UI', sans-serif;
}

.top-actions {
  text-align: right;
  margin-bottom: 15px;
}

.btn-add {
  background: #ff7f00;
  color: white;
  padding: 10px 20px;
  font-weight: bold;
  border-radius: 6px;
  border: none;
  cursor: pointer;
}
.btn-add:hover {
  background: #e66f00;
}

/* MODAL */
.modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.6);
  display: flex;
  justify-content: center;
  align-items: center;
}
.modal-container {
  background: white;
  padding: 16px;
  border-radius: 10px;
  width: 420px;
  max-width: 95%;
  animation: popUp 0.3s ease-in-out;
}
@keyframes popUp {
  from {
    transform: scale(0.7);
    opacity: 0;
  }
  to {
    transform: scale(1);
    opacity: 1;
  }
}
.modal-title {
  text-align: center;
  font-size: 20px;
  color: #003366;
  margin-bottom: 12px;
}

/* FORM */
.form-group label {
  font-weight: bold;
  font-size: 13px;
  color: #003366;
}
.form-group input,
.form-group textarea {
  width: 100%;
  padding: 8px;
  font-size: 13px;
  border: 1.5px solid #003366;
  border-radius: 5px;
  margin-bottom: 10px;
}
.form-group input:focus,
.form-group textarea:focus {
  border-color: #ff7f00;
  background: #fffaf5;
}

/* PREVIEW */
.image-preview img {
  width: 80px;
  height: auto;
  margin-top: 8px;
  border-radius: 5px;
  border: 1.5px solid #ccc;
}

/* BUTTONS */
.btn {
  padding: 6px 12px;
  font-size: 13px;
  border-radius: 5px;
  font-weight: bold;
  color: #fff;
  border: none;
  cursor: pointer;

  
}
.btn-primary {
  background: #003366;
  
}
.btn-secondary {
  background: #999;
}
.btn-warning {
  background: #ff7f00;
  color: #000;
}
.btn-danger {
  background: #dc6c78;
}
.btn-info {
  background: #ff7f00;
}

/* TABLE */
.table-title {
  color: #333;
  text-align: center;
  margin: 20px 0;
  font-size: 18px;
  font-weight: bold;
}
.actualites-table {
  width: 100%;
  background: #fff;
  border-radius: 8px;
  border-collapse: collapse;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.08);
}
.actualites-table th {
  background: #003366;
  color: #fff;
  padding: 8px;
}
.actualites-table td {
  padding: 6px;
  border-bottom: 1px solid #ddd;
  font-size: 13px;
}
.actualite-image {
  width: 50px;
  height: 50px;
  object-fit: cover;
  border-radius: 5px;
}
.content-cell,
.conclusion-cell {
  max-width: 120px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}
.action-buttons {
  display: flex;
  gap: 15px;
}

.form-buttons {
  display: flex;
  justify-content: center;
  gap: 12px; /* Ajoute un espacement entre les boutons */
  margin-top: 10px;
}
.points-cell {
  max-width: 150px;
  white-space: pre-line; /* pour respecter les retours à la ligne */
  overflow-wrap: break-word;
  font-size: 13px;
}


</style>
