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



// const login = async () => {
//   try {
//     const res = await authService.login({
//       email: email.value,
//       password: password.value,
//     });

//     localStorage.setItem('token', res.data.token);
//     router.push('/dashboard');
//   } catch (err) {
//     error.value = err.response?.data?.message || "Échec de la connexion.";
//   }
// };
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













<!-- <template>
  <div class="login-wrapper">
    <div class="image-container">
      <img src="../assets/images/vendeur11.jpg" alt="Illustration de connexion" />
    </div>

    <div class="login-container">
      <h2>Connexion</h2>
      <form @submit.prevent="login" class="login-form">
        <input v-model="email" type="email" placeholder="Email" />
        <input v-model="password" type="password" placeholder="Mot de passe" />
        <button type="submit">Se connecter</button>
      </form>
      <p v-if="error" class="error-message">{{ error }}</p>
    </div>
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
    const res = await authService.login({
      email: email.value,
      password: password.value,
    });

    localStorage.setItem('token', res.data.token);
    router.push('/dashboard');
  } catch (err) {
    error.value = err.response?.data?.message || "Échec de la connexion.";
  }
};
</script>

<style scoped>
.login-wrapper {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: stretch;
  height: 100vh;
  background-color: #f0f0f0;
}

.image-container {
  flex: 1;
  background-color: #e0e0e0;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
}

.image-container img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.login-container {
  flex: 1;
  max-width: 500px;
  padding: 60px 40px;
  background-color: #ffffff;
  display: flex;
  flex-direction: column;
  justify-content: center;
}

h2 {
  margin-bottom: 20px;
  color: #343f69;
  text-align: center;
}

.login-form {
  display: flex;
  flex-direction: column;
  gap: 15px;
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
  text-align: center;
}
</style> -->





