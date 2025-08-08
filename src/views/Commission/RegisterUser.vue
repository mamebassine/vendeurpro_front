<template> 
  <div class="register-form">
    <!-- Bouton pour ouvrir la modale -->
    <button class="add-btn" @click="showModal = true">Ajouter un parrain</button>

    <!-- Tableau des utilisateurs -->
    <div v-if="users.length">
      <h1><strong>Liste des utilisateurs inscrits</strong></h1>
      <table>
        <thead>
          <tr>
            <th>Nom</th>
            <th>Prénom</th>
            <th class="action-col">Actions</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="user in users" :key="user.id">
            <td>{{ user.name }}</td>
            <td>{{ user.prenom }}</td>
            <td class="action-col">
              <button class="btn btn-view" @click="viewUser(user)">👁</button>
              <button class="btn btn-edit" @click="editUser(user)">✏️</button>
              <button class="btn btn-delete" @click="deleteUser(user.id)">🗑</button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>

   <!-- Modale d'inscription -->
<div v-if="showModal" class="inscription-modal-overlay" @click.self="closeModal">
  <div class="inscription-modal-content">
    <h2><strong>Inscription</strong></h2>
    <form @submit.prevent="register">
      <div class="inscription-form-group">
        <label>Nom</label>
        <input v-model="form.name" type="text" required />
      </div>
      <div class="inscription-form-group">
        <label>Prénom</label>
        <input v-model="form.prenom" type="text" required />
      </div>
      <div class="inscription-form-group">
        <label>Email</label>
        <input v-model="form.email" type="email" required />
      </div>
      <div class="inscription-form-group">
        <label>Mot de passe</label>
        <input v-model="form.password" type="password" required />
      </div>
      <div class="inscription-form-group">
        <label>Téléphone</label>
        <input v-model="form.phone" type="text" required />
      </div>
      <div class="inscription-form-group">
        <label>Adresse</label>
        <input v-model="form.address" type="text" />
      </div>

      <div class="inscription-form-buttons">
        <button class="inscription-btn-submit" type="submit">S'inscrire</button>
        <button class="inscription-btn-close" type="button" @click="closeModal">❌</button>
      </div>

      <p v-if="error" class="inscription-error">{{ error }}</p>
      <p v-if="success" class="inscription-success">{{ success }}</p>
    </form>
  </div>
</div>


    <!-- Modale détails utilisateur -->
    <div v-if="selectedUser" class="modal-overlay" @click.self="closeModal">
      <div class="modal-content">
        <h3 class="modal-title">👤 <strong>Détails du user {{ selectedUser.name }} {{ selectedUser.prenom }}</strong></h3>
        <div class="detail-grid">
          <p><strong>Nom :</strong> {{ selectedUser.name }}</p>
          <p><strong>Prénom :</strong> {{ selectedUser.prenom }}</p>
          <p><strong>Email :</strong> {{ selectedUser.email }}</p>
          <p><strong>Téléphone :</strong> {{ selectedUser.phone }}</p>
          <p><strong>Adresse :</strong> {{ selectedUser.address || 'Non renseignée' }}</p>
          <p><strong>Rôle :</strong> {{ selectedUser.role || 'Non renseigné' }}</p>
          <p><strong>Code parrainage :</strong> {{ selectedUser.code_parrainage || 'Aucun' }}</p>
          <p>
            <strong>Image :</strong><br />
            <img v-if="selectedUser.image" :src="selectedUser.image" alt="Image utilisateur" class="user-image" />
            <span v-else>Aucune image</span>
          </p>
        </div>

       <div v-if="selectedCandidatures && selectedCandidatures.length" class="candidature-block-container">
  <h4><strong>Candidatures parrainées reçues :</strong></h4>
  <div v-for="(candidature, index) in selectedCandidatures" :key="candidature.id" class="candidature-block">
    <p><strong>#{{ index + 1 }} - Statut :</strong> {{ candidature.statut }}</p>
    <p><strong>Candidat :</strong> {{ candidature.candidat.nom }} {{ candidature.candidat.prenom }}</p>

    <div v-if="candidature.formation">
      <h5><em>Formation postulée :</em></h5>
      <p><strong>Nom :</strong> {{ candidature.formation.titre }}</p>
      <p><strong>Description :</strong> {{ candidature.formation.description }}</p>
      <p><strong>Durée :</strong> {{ candidature.formation.duree }} jours</p>
    </div>
    <hr />
  </div>
</div>

        <div v-else>
          <p>Aucune candidature reçue.</p>
        </div>

        <div class="form-buttons">
          <button class="btn-close" @click="closeModal">❌</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import authService from '@/services/authService'
import api from '@/services/api'

export default {
  name: 'Register',
  data() {
    return {
      form: {
        name: '',
        prenom: '',
        email: '',
        password: '',
        phone: '',
        address: '',
        code_parrainage: ''
      },
      users: [],
      selectedUser: null,
      selectedCandidatures: [],  // Pluriel pour toutes les candidatures reçues
      showModal: false,
      success: '',
      error: ''
    }
  },
  mounted() {
    const code = this.$route.query.parrain
    if (code) {
      this.form.code_parrainage = code
    }
    this.getUsers()
  },
  methods: {
    async register() {
      try {
        const data = await authService.register(this.form)
        this.success = data.message
        this.error = ''
        this.form = {
          name: '',
          prenom: '',
          email: '',
          password: '',
          phone: '',
          address: '',
          code_parrainage: ''
        }
        this.getUsers()
        this.showModal = false
      } catch (err) {
        this.success = ''
        this.error = err.message
      }
    },
    async getUsers() {
      try {
        const res = await api.get('/users')
        const allUsers = res.data.users || res.data
        // Filtrer uniquement les utilisateurs avec le rôle 'user'
        this.users = allUsers.filter(user => user.role === 'user')
      } catch (error) {
        console.error('Erreur lors de la récupération des utilisateurs', error)
      }
    },
    async viewUser(user) {
      this.selectedUser = user

      // Si le user a des candidatures reçues comme parrain, on récupère toutes ces candidatures
      if (user.candidatures_parrain && user.candidatures_parrain.length > 0) {
        this.selectedCandidatures = user.candidatures_parrain
      } else {
        this.selectedCandidatures = []
      }

      this.showModal = true
    },
    closeModal() {
      this.showModal = false
      this.selectedUser = null
      this.selectedCandidatures = []
    },
    editUser(user) {
      this.form = { ...user, password: '' }
      this.success = ''
      this.error = ''
      this.showModal = true
    },
    async deleteUser(userId) {
      if (confirm('Voulez-vous vraiment supprimer cet utilisateur ?')) {
        try {
          await api.delete(`/users/${userId}`)
          this.getUsers()
          alert('Utilisateur supprimé avec succès')
        } catch (error) {
          alert('Erreur lors de la suppression')
        }
      }
    }
  }
}
</script>

<style scoped>



.register-form {
  max-width: 600px;
  margin: 30px auto;
  padding: 15px;
  font-family: Arial, sans-serif;
  color: #333;
}

.add-btn {
  background-color: #ff7f00; /* bleu vif */
  color: white;
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  font-weight: bold;
  cursor: pointer;
  transition: background-color 0.3s ease;
  margin-bottom: 25px;
}
.add-btn:hover {
  background-color: #003366;
}

table {
  width: 100%;
  border-collapse: collapse;
  font-size: 15px;
}

th, td {
  border: 1px solid #ddd;
  padding: 10px 12px;
  text-align: left;
}

th {
  background-color: #003366; /* turquoise vif */
  color: white;
  font-weight: 600;
}

.action-col {
  width: 180px;
  text-align: center;
}

/* Boutons d'action */
.btn {
  font-size: 16px;
  margin: 0 5px;
  cursor: pointer;
  border: none;
  padding: 6px 10px;
  border-radius: 4px;
  font-weight: 600;
  transition: all 0.25s ease;
}

/* Voir détails - bouton plus visible */
.btn-view {
  background-color: #ff7f00; /* vert */
  color: white;
  box-shadow: 0 2px 6px rgba(40, 55, 167, 0.4);
}
.btn-view:hover {
  background-color: #003366;
  box-shadow: 0 4px 10px rgba(33,136,56,0.6);
  transform: scale(1.05);
}

/* Modifier */
.btn-edit {
  background-color: #ff7f00; /* jaune/orangé */
  color: #212529;
}
.btn-edit:hover {
  background-color: #003366;
}

/* Supprimer */
.btn-delete {
  background-color: #dc3545; /* rouge */
  color: white;
}
.btn-delete:hover {
  background-color: #bd2130;
}


/*  */
.candidature-block-container h4 {
  margin: 20px 0; /* 20px en haut et en bas, ajustable */
}



.modal-overlay {
  position: fixed;
  top: 0; left: 0; right: 0; bottom: 0;
  background: rgba(0,0,0,0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 9999;
  padding: 20px;
}

.modal-content {
  background: #fff;
  border-radius: 12px;
  padding: 30px 30px 25px;
  width: 100%;
  max-width: 600px;
  max-height: 85vh;
  overflow-y: auto;
  box-shadow: 0 12px 35px rgba(0,0,0,0.25);
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  font-size: 16px;
  color: #333;
}

/* Titre centré avec couleur et taille */
.modal-content h3 {
  margin-bottom: 25px;
  color: #0056b3;
  text-align: center;
  font-weight: 700;
  font-size: 1.8rem;
}

/* Grille des détails */
.detail-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
  gap: 20px 30px;
  margin-bottom: 25px;
}

.detail-grid p {
  background: #f9f9f9;
  padding: 12px 15px;
  border-radius: 8px;
  box-shadow: inset 0 0 6px rgba(0,0,0,0.05);
  font-weight: 600;
  color: #444;
}

/* Style image utilisateur */
.user-image {
  max-width: 100px;
  max-height: 100px;
  border-radius: 50%;
  object-fit: cover;
  border: 3px solid #0056b3;
  box-shadow: 0 4px 10px rgba(0,86,179,0.3);
  margin-top: 10px;
}

/* Bloc candidatures */
.candidature-block {
  background: #eef6ff;
  border-left: 4px solid #0056b3;
  padding: 15px 18px;
  margin-bottom: 15px;
  border-radius: 8px;
  font-size: 15px;
  color: #222;
}

.candidature-block h5 {
  margin-top: 12px;
  font-style: italic;
  color: #0056b3;
}

/* Ligne de séparation */
hr {
  border: none;
  border-top: 1px solid #ddd;
  margin: 15px 0;
}

/* Bouton fermer */
.form-buttons {
  display: flex;
  justify-content: center;
}

.btn-close {
  background-color: #0056b3;
  color: white;
  padding: 12px 25px;
  border-radius: 25px;
  border: none;
  cursor: pointer;
  font-weight: 700;
  font-size: 16px;
  transition: background-color 0.3s ease;
  box-shadow: 0 4px 12px rgba(0,86,179,0.5);
}

.btn-close:hover {
  background-color: #003d80;
}

.error {
  color: #dc3545;
  margin-top: 12px;
  font-weight: 700;
}

.success {
  color: #28a745;
  margin-top: 12px;
  font-weight: 700;
}

.user-image {
  max-width: 90px;
  max-height: 90px;
  border-radius: 50%;
  object-fit: cover;
  margin-top: 10px;
}

/* INSCRIPTION */

/* Overlay */
.inscription-modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
}

/* Contenu de la modale */
.inscription-modal-content {
  background: #fff;
  padding: 25px 30px;
  border-radius: 8px;
  width: 480px;
  max-width: 90%;
  box-shadow: 0 4px 15px rgba(0,0,0,0.3);
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
}

.inscription-modal-content h2 {
  margin-bottom: 20px;
  text-align: center;
  color: #333;
}

/* Groupe de champs */
.inscription-form-group {
  margin-bottom: 15px;
  display: flex;
  flex-direction: column;
}

.inscription-form-group label {
  margin-bottom: 6px;
  font-weight: 600;
  color: #444;
}

.inscription-form-group input {
  padding: 8px 10px;
  border: 1.8px solid #bbb;
  border-radius: 5px;
  font-size: 1rem;
  transition: border-color 0.3s;
}

.inscription-form-group input:focus {
  border-color: #4caf50;
  outline: none;
}

/* Boutons */
.inscription-form-buttons {
  display: flex;
  justify-content: space-between;
  margin-top: 20px;
}

.inscription-btn-submit {
  background-color: #ff7f00;
  color: white;
  border: none;
  padding: 10px 18px;
  border-radius: 5px;
  cursor: pointer;
  font-weight: 600;
  transition: background-color 0.3s;
}

.inscription-btn-submit:hover {
  background-color: #003366;
}

.inscription-btn-close {
  background-color: #e74c3c;
  color: white;
  border: none;
  padding: 10px 18px;
  border-radius: 5px;
  cursor: pointer;
  font-weight: 600;
  transition: background-color 0.3s;
}

.inscription-btn-close:hover {
  background-color: #c0392b;
}

/* Messages */
.inscription-error {
  margin-top: 15px;
  color: #e74c3c;
  font-weight: 600;
  text-align: center;
}

.inscription-success {
  margin-top: 15px;
  color: #27ae60;
  font-weight: 600;
  text-align: center;
}

</style>
