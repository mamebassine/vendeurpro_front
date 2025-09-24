<template>
  <div class="login-container">
    <h2>Connexion</h2>
    <form @submit.prevent="login" class="login-form">
      <input v-model="email" type="email" placeholder="Email" />
      <input v-model="password" type="password" placeholder="Mot de passe" />
      <button type="submit">Se connecter</button>
    </form>
    <p v-if="error" class="error-message">{{ error }}</p>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import { useRouter } from 'vue-router';
import authService from '@/services/authService';

const email = ref('');
const password = ref('');
const error = ref('');
const router = useRouter();

const login = async () => {
  try {
    const credentials = {
      email: email.value,
      password: password.value,
    };

    const response = await authService.login(credentials);

    localStorage.setItem('token', response.data.token);
    localStorage.setItem('user', JSON.stringify(response.data.user));

    router.push('/dashboard');
  } catch (err) {
    error.value = err.response?.data?.message || "Échec de la connexion.";
  }
};
</script>

<style scoped>

.login-container {
  max-width: 400px;
  margin: 80px auto;
  padding: 30px;
    background-color: #ff7f00;

  /* background-color: #f7f7f7; */
  border-radius: 12px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  text-align: center;
    margin-top: 15%;

}

h2 {
  margin-bottom: 20px;
  color: #343f69;
}

.login-form {
  display: flex;
  flex-direction: column;
  gap: 15px;
  margin-top: 8%;

}

.login-form input {
  padding: 12px;
  border: 1px solid #ccc;
  border-radius: 8px;
  font-size: 16px;
}

.login-form input:focus {
  outline: none;
  border-color: #343f69;
  box-shadow: 0 0 5px rgba(52, 63, 105, 0.3);
}

.login-form button {
  padding: 12px;
  background-color: #343f69;
  color: white;
  border: none;
  border-radius: 8px;
  font-size: 16px;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

.login-form button:hover {
  background-color: #2b3254;
}

.error-message {
  margin-top: 15px;
  color: red;
  font-weight: bold;
}
</style>













