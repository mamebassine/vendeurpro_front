<template>
  <div>
    <h2>Inscription</h2>
    <form @submit.prevent="register" enctype="multipart/form-data">
      <input v-model="form.firstname" placeholder="Prénom" />
      <input v-model="form.name" placeholder="Nom complet" />
      <input v-model="form.email" type="email" placeholder="Email" />
      <input v-model="form.password" type="password" placeholder="Mot de passe" />
      <input v-model="form.phone" placeholder="Téléphone" />
      <input v-model="form.address" placeholder="Adresse" />
      <input type="file" @change="handleFileUpload" />
      <button type="submit">S'inscrire</button>
    </form>
    <p v-if="message">{{ message }}</p>
  </div>
</template>

<script setup>
import { reactive, ref } from 'vue';
import authService from '@/services/authService';

const form = reactive({
  firstname: '',
  name: '',
  email: '',
  password: '',
  phone: '',
  address: '',
  image: null
});
const message = ref('');

const handleFileUpload = (event) => {
  form.image = event.target.files[0];
};

const register = async () => {
  try {
    const formData = new FormData();
    for (const key in form) {
      if (form[key]) {
        formData.append(key, form[key]);
      }
    }

    const res = await authService.register(formData);
    message.value = res.data.message;
  } catch (err) {
    message.value = err.response?.data?.message || 'Erreur lors de l’inscription';
  }
};
</script>
