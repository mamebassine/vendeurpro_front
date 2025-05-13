<!-- <template>
    <form @submit.prevent="submitForm" class="form-container">
      <div class="form-group">
        <label for="nom">Nom</label>
        <input type="text" v-model="form.nom" id="nom" required />
      </div>
  
      <div class="form-group">
        <label for="prenom">Prénom</label>
        <input type="text" v-model="form.prenom" id="prenom" required />
      </div>
  
      <div class="form-group">
        <label for="email">Email</label>
        <input type="email" v-model="form.email" id="email" required />
      </div>
  
      <div class="form-group">
        <label for="telephone">Téléphone</label>
        <input type="text" v-model="form.telephone" id="telephone" required />
      </div>
  
      <div class="form-group">
        <label for="adresse">Adresse</label>
        <input type="text" v-model="form.adresse" id="adresse" required />
      </div>
  
      <div class="form-group">
        <label>Genre</label>
        <select v-model="form.genre" required>
          <option disabled value="">-- Sélectionnez --</option>
          <option value="homme">Homme</option>
          <option value="femme">Femme</option>
        </select>
      </div>
  
      <button type="submit">Envoyer</button>
    </form>
  </template>
  
  <script setup>
  import { reactive } from 'vue'
  import axios from 'axios'
  
  const form = reactive({
    nom: '',
    prenom: '',
    email: '',
    telephone: '',
    adresse: '',
    genre: ''
  })
  
  const submitForm = async () => {
    try {
      await axios.post('/api/candidats', form)
      alert('Candidat enregistré avec succès !')
      // Réinitialiser le formulaire
      form.nom = ''
      form.prenom = ''
      form.email = ''
      form.telephone = ''
      form.adresse = ''
      form.genre = ''
    } catch (error) {
      alert('Erreur lors de la soumission du formulaire.')
      console.error(error)
    }
  }
  </script>
  
  <style scoped>
  .form-container {
    max-width: 500px;
    margin: auto;
    padding: 2rem;
    border: 1px solid #ddd;
    border-radius: 8px;
  }
  
  .form-group {
    margin-bottom: 1rem;
  }
  
  label {
    display: block;
    margin-bottom: 0.25rem;
    font-weight: bold;
  }
  
  input,
  select {
    width: 100%;
    padding: 0.5rem;
    border: 1px solid #ccc;
    border-radius: 4px;
  }
  
  button {
    background-color: #343f69;
    color: white;
    padding: 0.75rem 1.5rem;
    border: none;
    border-radius: 4px;
    cursor: pointer;
  }
  
  button:hover {
    background-color: #2c3559;
  }
  </style>
   -->


   <template>
    <div class="form-wrapper">
      <div class="form-header">
        <h2>Inscrivez-vous à notre formation</h2>
        <p>Devenez Vendeur Pro.</p>
      </div>
  
      <form @submit.prevent="submitForm" class="form-container">
        <div class="form-group">
          <label for="nom">Nom</label>
          <input type="text" v-model="form.nom" id="nom" required />
        </div>
  
        <div class="form-group">
          <label for="prenom">Prénom</label>
          <input type="text" v-model="form.prenom" id="prenom" required />
        </div>
  
        <div class="form-group">
          <label for="email">Email</label>
          <input type="email" v-model="form.email" id="email" required />
        </div>
  
        <div class="form-group">
          <label for="telephone">Téléphone</label>
          <input type="text" v-model="form.telephone" id="telephone" required />
        </div>
  
        <div class="form-group">
          <label for="adresse">Adresse</label>
          <input type="text" v-model="form.adresse" id="adresse" required />
        </div>
  
        <div class="form-group">
          <label>Genre</label>
          <select v-model="form.genre" required>
            <option disabled value="">-- Sélectionnez --</option>
            <option value="homme">Homme</option>
            <option value="femme">Femme</option>
          </select>
        </div>
  
        <button type="submit">Envoyer</button>
      </form>
    </div>
  </template>
  
  <script setup>
  import { reactive } from 'vue'
  
  const form = reactive({
    nom: '',
    prenom: '',
    email: '',
    telephone: '',
    adresse: '',
    genre: ''
  })
  
  const submitForm = () => {
    alert('Formulaire rempli avec succès !')
    console.log('Données soumises :', form)
  
    // Réinitialiser les champs
    form.nom = ''
    form.prenom = ''
    form.email = ''
    form.telephone = ''
    form.adresse = ''
    form.genre = ''
  }
  </script>
  
  <style scoped>
  .form-wrapper {
    max-width: 700px;
    margin: auto;
    margin-top: 7%;
  }
  
  .form-header {
    text-align: center;
    margin-bottom: 2rem;
  }
  
  .form-header h2 {
    font-size: 1.8rem;
    color: #343f69;
    margin-bottom: 0.5rem;
  }
  
  .form-header p {
    font-size: 1rem;
    color: #555;
  }
  
  .form-container {
    padding: 2rem;
    border: 1px solid #ddd;
    border-radius: 8px;
  }
  
  .form-group {
    margin-bottom: 1rem;
  }
  
  label {
    display: block;
    margin-bottom: 0.25rem;
    font-weight: bold;
  }
  
  input,
  select {
    width: 100%;
    padding: 0.5rem;
    border: 1px solid #ccc;
    border-radius: 4px;
  }
  
  button {
    background-color: #343f69;
    color: white;
    padding: 0.75rem 1.5rem;
    border: none;
    border-radius: 4px;
    cursor: pointer;
  }
  
  button:hover {
    background-color: #2c3559;
  }
  </style>
  