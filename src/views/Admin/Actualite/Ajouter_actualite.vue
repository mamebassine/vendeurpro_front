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
          <!-- TITRE -->
          <div class="form-group">
            <label for="titre">Titre</label>
            <input v-model="form.titre" id="titre" type="text" required />
          </div>

          <!-- CONTENU INTRO -->
          <div class="form-group">
            <label for="contenu">Contenu</label>
            <textarea v-model="form.contenu" id="contenu" required></textarea>
          </div>

          <!-- AUTEUR -->
          <div class="form-group">
            <label for="auteur">Auteur</label>
            <input v-model="form.auteur" id="auteur" type="text" required />
          </div>

          <!-- FONCTION -->
          <div class="form-group">
            <label for="fonction">Fonction</label>
            <input v-model="form.fonction" id="fonction" type="text" />
          </div>

          <!-- IMAGE -->
          <div class="form-group">
            <label for="image">Image (locale)</label>
            <input @change="handleImageUpload" id="image" type="file" accept="image/*" />
          </div>

          <!-- Prévisualisation -->
          <div v-if="previewImage" class="image-preview">
            <img :src="previewImage" alt="Prévisualisation" />
          </div>

          <!-- POINTS DYNAMIQUES (CHAPITRES) -->
          <div class="form-group">
            <label for="points">Points (chapitre)</label>

            <div
              v-for="(point, index) in form.points"
              :key="index"
              style="margin-bottom: 12px; border:1px solid #ccc; padding:8px; border-radius:4px;"
            >
              <!-- NUMÉRO -->
              <div style="font-weight:bold; margin-bottom:4px;">
                {{ index + 1 }} :
              </div>

              <!-- TITRE DU POINT (sans numéro) -->
              <input
                type="text"
                v-model="point.titre"
                :placeholder="`Titre du point ${index+1}`"
                style="margin-bottom:4px;"
              />

              <!-- LISTE D'EXPLICATIONS -->
              <div style="margin-bottom:4px;">
                <div
                  v-for="(exp, i) in point.explications"
                  :key="i"
                  style="display:flex; align-items:center; gap:4px; margin-bottom:4px;"
                >
                  <span style="font-weight:bold;">•</span>
                  <input
                    type="text"
                    v-model="point.explications[i]"
                    :placeholder="`Explication ${i+1}`"
                    style="flex:1;"
                  />
                  <button
                    type="button"
                    class="btn btn-danger"
                    style="padding:2px 6px; font-size:11px;"
                    @click="removeExplication(index, i)"
                  >
                    
                  </button>
                </div>

                <button
                  type="button"
                  class="btn btn-info"
                  style="padding:2px 6px; font-size:11px;"
                  @click="addExplication(index)"
                >
                  + Ajouter une explication
                </button>
              </div>

              <!-- CONCLUSION DU BLOC -->
              <textarea
                v-model="point.conclusion_bloc"
                :placeholder="`Phrase de conclusion du point ${index+1}`"
                rows="2"
              ></textarea>

              <!-- SUPPRIMER BLOC -->
              <button
                type="button"
                class="btn btn-danger"
                style="margin-top:4px;"
                @click="removePoint(index)"
              >
                Supprimer ce bloc
              </button>
            </div>

            <!-- AJOUTER NOUVEAU BLOC -->
            <button type="button" class="btn btn-info" @click="addPoint">
              + Ajouter un bloc
            </button>
          </div>

          <!-- CONCLUSION GLOBALE -->
          <div class="form-group">
            <label for="conclusion">Conclusion</label>
            <textarea v-model="form.conclusion" id="conclusion"></textarea>
          </div>

          <!-- ACTIONS FORM -->
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
            <img :src="getImageUrl(item.image)" alt="Ici Image" class="actualite-image" />
          </td>
          <td><strong>{{ item.titre || 'Titre manquant' }}</strong></td>
          <td class="content-cell">{{ item.contenu || 'Contenu manquant' }}</td>
          <td>{{ item.auteur || 'Auteur manquant' }}</td>
          <td>
            {{ item.date_publication ? new Date(item.date_publication).toLocaleDateString('fr-FR') : 'Date manquante' }}
          </td>
          <!-- On affiche les titres numérotés -->
          <td class="points-cell">
            {{ truncateText(formatPointsForList(item.points), 50) || 'Points manquants' }}
          </td>
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
        points: [], // [{titre:'', explications:[''], conclusion_bloc:''}]
        conclusion: ''
      }
    };
  },

  methods: {
    /* ----------- FETCH ----------- */
    async fetchActualites() {
      try {
        const res = await actualitesService.getAll();
        this.actualites = res.data;
      } catch (e) {
        console.error('Erreur chargement actualités:', e);
      }
    },

    /* ----------- IMAGE ----------- */
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

    /* ----------- SUBMIT ----------- */
    async handleSubmit() {
      try {
        const formData = new FormData();

        // sérialiser points en JSON
        for (const key in this.form) {
          if (key === 'points') {
            formData.append('points', JSON.stringify(this.form.points));
          } else {
            formData.append(key, this.form[key]);
          }
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
        await this.fetchActualites();
      } catch (error) {
        console.error('Erreur soumission:', error);
        if (error.response) console.error('Réponse serveur:', error.response.data);
      }
    },

    /* ----------- POINTS (BLOC) ----------- */
    addPoint() {
      this.form.points.push({
        titre: '',
        explications: [''],
        conclusion_bloc: ''
      });
    },
    removePoint(index) {
      this.form.points.splice(index, 1);
    },

    /* ----------- EXPLICATIONS DANS UN BLOC ----------- */
    addExplication(pointIndex) {
      this.form.points[pointIndex].explications.push('');
    },
    removeExplication(pointIndex, expIndex) {
      this.form.points[pointIndex].explications.splice(expIndex, 1);
      // si plus rien, garder au moins un champ vide
      if (!this.form.points[pointIndex].explications.length) {
        this.form.points[pointIndex].explications.push('');
      }
    },

    /* ----------- MODAL ----------- */
    openModal() {
      this.showModal = true;
    },
    closeModal() {
      this.showModal = false;
      this.resetForm();
    },

    /* ----------- EDIT ----------- */
    editActualite(item) {
      let pointsParsed = [];
      try {
        const raw = typeof item.points === 'string' ? JSON.parse(item.points) : item.points;
        // normaliser en structure {titre, explications[], conclusion_bloc}
        pointsParsed = Array.isArray(raw)
          ? raw.map(p => ({
              titre: p.titre ?? (p.title ?? ''),
              explications: Array.isArray(p.explications)
                ? p.explications
                : (p.contenu ? [p.contenu] : []),
              conclusion_bloc: p.conclusion_bloc ?? ''
            }))
          : [];
      } catch (e) {
        console.error('Erreur parsing points:', e);
      }

      this.form = {
        ...item,
        points: pointsParsed,
        date_publication: item.date_publication
          ? item.date_publication.substring(0, 10)
          : ''
      };
      this.isEditing = true;
      this.editId = item.id;
      this.previewImage = this.getImageUrl(item.image);
      this.openModal();
    },

    /* ----------- DELETE ----------- */
    async deleteActualite(id) {
      if (confirm('Supprimer cette actualité ?')) {
        await actualitesService.delete(id);
        this.fetchActualites();
      }
    },

    /* ----------- RESET ----------- */
    resetForm() {
      this.form = {
        titre: '',
        contenu: '',
        auteur: '',
        fonction: '',
        image: '',
        date_publication: '',
        points: [],
        conclusion: ''
      };
      this.isEditing = false;
      this.editId = null;
      this.imageFile = null;
      this.previewImage = null;
    },

    /* ----------- HELPERS ----------- */
    // getImageUrl(image) {
    //   if (!image) return '/default-image.jpg';
    //   if (image.startsWith('http')) return image;
    //   if (image.startsWith('actualites/')) {
    //     return `http://localhost:8000/storage/${image}`;
    //   }
    //   if (image.startsWith('/storage/')) {
    //     return `http://localhost:8000${image}`;
    //   }
    //   return image.startsWith('/')
    //     ? `http://localhost:8000${image}`
    //     : `http://localhost:8000/${image}`;
    // },


getImageUrl(image) {
  if (!image) return '/default-image.jpg'; // image par défaut si aucune
  // supprime les slashes en début pour éviter double slash
  const cleanImage = image.replace(/^\/+/, '');
  return `http://localhost:8000/storage/${cleanImage}`;
},




    truncateText(text, maxLength = 50) {
      if (!text) return '';
      return text.length <= maxLength ? text : text.substring(0, maxLength) + '...';
    },

    // utilisé pour la colonne liste
    formatPointsForList(rawPoints) {
      try {
        const arr = typeof rawPoints === 'string' ? JSON.parse(rawPoints) : rawPoints;
        if (!Array.isArray(arr)) return '';
        return arr
          .map((p, i) => `${i + 1} : ${(p.titre || '').trim()}`)
          .join(' | ');
      } catch {
        return '';
      }
    }
  },

  mounted() {
    this.fetchActualites();

    // ✅ Debug rapide pour une image fixe
  console.log(this.getImageUrl('actualites/Rv1eePsDDqavArJ9e8dYlLhqqkDmt5dMJazeCwd5.jpg'));
  }
};
</script>

<style scoped>
/* Ton CSS d'origine intact */
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
  padding: 4px;
  font-size: 13px;
  border: 1.5px solid #003366;
  border-radius: 5px;
  margin-bottom: 1px;
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
  gap: 12px;
  margin-top: 10px;
}
.points-cell {
  max-width: 150px;
  white-space: pre-line;
  overflow-wrap: break-word;
  font-size: 13px;
}



/* SCROLL POUR DESCENDRE ET MONTER */
.modal-container {
  background: white;
  padding: 16px;
  border-radius: 10px;

  max-height: 80vh;   /* limite hauteur */
  overflow-y: auto;   /* scroll vertical si besoin */

  width: 90%;
  max-width: 700px;
}

</style>
