<!-- <template>
  <div class="login-container">
    <h2>Connexion</h2>
    <form @submit.prevent="login">
      <div class="form-group">
        <label for="email">Email :</label>
        <input id="email" v-model="email" type="email" required />
      </div>
      <div class="form-group">
        <label for="password">Mot de passe :</label>
        <input id="password" v-model="password" type="password" required />
      </div>
      <button type="submit" class="login-btn">Se connecter</button>
    </form>
    <p v-if="error" class="error">{{ error }}</p>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import { loginUser } from '@/services/userService'

const router = useRouter()
const email = ref('')
const password = ref('')
const error = ref('')

const login = async () => {
  try {
    await loginUser({ email: email.value, password: password.value })
    router.push('/auth_user/userdashboard')
  } catch (err) {
    error.value = err.response?.data?.error || 'Erreur de connexion'
  }
}
</script>

<style scoped>
.login-container {
  max-width: 400px;
  margin: 4rem auto;
  padding: 2rem;
  background-color: #f7f9fc;
  border-radius: 10px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);

  margin-top: 12%;
}

h2 {
  text-align: center;
  color: #343f69;
  margin-bottom: 1.5rem;
}

.form-group {
  margin-bottom: 1.2rem;
}

label {
  display: block;
  font-weight: 600;
  margin-bottom: 0.4rem;
  color: #333;
}

input {
  width: 100%;
  padding: 0.7rem;
  border: 1px solid #ccc;
  border-radius: 6px;
  font-size: 1rem;
  transition: border-color 0.3s;
}

input:focus {
  outline: none;
  border-color: #343f69;
  box-shadow: 0 0 0 2px rgba(52, 63, 105, 0.1);
}

.login-btn {
  width: 100%;
  padding: 0.8rem;
  background-color: #ff7f00;
  color: white;
  border: none;
  border-radius: 6px;
  font-weight: bold;
  font-size: 1rem;
  cursor: pointer;
  transition: background-color 0.3s;
}

.login-btn:hover {
  background-color: #2c3559;
}

.error {
  color: #e74c3c;
  margin-top: 1rem;
  text-align: center;
  font-weight: 500;
}
</style> -->




<template>
  <div class="login-container">
    <h2>Connexion</h2>
    <form @submit.prevent="login">
      <div class="form-group">
        <label for="email">Email :</label>
        <input id="email" v-model="email" type="email" required />
      </div>
      <div class="form-group">
        <label for="password">Mot de passe :</label>
        <input id="password" v-model="password" type="password" required />
      </div>
      <button type="submit" class="login-btn">Se connecter</button>
    </form>
    <p v-if="error" class="error">{{ error }}</p>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import { loginUser } from '@/services/userService'

const router = useRouter()
const email = ref('')
const password = ref('')
const error = ref('')

const login = async () => {
  try {
    const data = await loginUser({ email: email.value, password: password.value })
    const role = data.user?.role || 'user'

    if (role === 'admin') {
      router.push('/dashboard')
    } else {
      router.push('/auth_user/userdashboard')
    }
  } catch (err) {
    console.error('Erreur login complète :', err.response?.data || err)
    error.value = err.response?.data?.error || 'Erreur de connexion'
  }
}
</script>

<style scoped>
.login-container {
  max-width: 400px;
  margin: 4rem auto;
  padding: 2rem;
  background-color: #f7f9fc;
  border-radius: 10px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  margin-top: 12%;
}

h2 {
  text-align: center;
  color: #343f69;
  margin-bottom: 1.5rem;
}

.form-group {
  margin-bottom: 1.2rem;
}

label {
  display: block;
  font-weight: 600;
  margin-bottom: 0.4rem;
  color: #333;
}

input {
  width: 100%;
  padding: 0.7rem;
  border: 1px solid #ccc;
  border-radius: 6px;
  font-size: 1rem;
  transition: border-color 0.3s;
}

input:focus {
  outline: none;
  border-color: #343f69;
  box-shadow: 0 0 0 2px rgba(52, 63, 105, 0.1);
}

.login-btn {
  width: 100%;
  padding: 0.8rem;
  background-color: #ff7f00;
  color: white;
  border: none;
  border-radius: 6px;
  font-weight: bold;
  font-size: 1rem;
  cursor: pointer;
  transition: background-color 0.3s;
}

.login-btn:hover {
  background-color: #2c3559;
}

.error {
  color: #e74c3c;
  margin-top: 1rem;
  text-align: center;
  font-weight: 500;
}
</style>
