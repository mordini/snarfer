<script setup>
import { ref } from 'vue';
import { useRouter } from 'vue-router';
import { useUserStore } from '@/stores/userStore';

const userStore = useUserStore();
const router = useRouter();

const username = ref('');
const password = ref('');
const errorMessage = ref('');

const handleLogin = () => {
  try {
    userStore.loginUser(username.value, password.value);
    router.push('/homePage'); // Navigate to home page
  } catch (error) {
    errorMessage.value = error.message;
  }
};

const goToCreateAccountPage = () => {
  router.push('/createAccount'); // Navigate to create account page
};
</script>

<template>
  <header>
    <div class="wrapper">
      <h1>Log in to Snarfer</h1>
    </div>
  </header>

  <main>
    <div class="login-container">
      <input type="text" v-model="username" placeholder="Username" class="input-box" />
      <input type="password" v-model="password" placeholder="Password" class="input-box" />
      <button class="login-button" @click="handleLogin">Login</button>
      <p v-if="errorMessage" class="error-message">{{ errorMessage }}</p>
    </div>
    <div class="register-container">
      <button class="register-button" @click="goToCreateAccountPage">Create New Account</button>
    </div>
  </main>
</template>

<style scoped>
header {
  line-height: 1.5;
  text-align: center;
}

h1 {
  font-size: 1.8rem;
  color: #35495e;
}

.login-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  max-width: 300px;
  margin: 50px auto;
}

.input-box {
  width: 100%;
  padding: 10px;
  margin: 10px 0;
  font-size: 16px;
  border: 1px solid #ccc;
  border-radius: 5px;
  text-align: center;
}

.login-button {
  width: 100%;
  padding: 10px;
  font-size: 16px;
  color: white;
  background-color: #42b883;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s ease;
  margin-top: 10px;
}

.login-button:hover {
  background-color: #35495e;
}

.error-message {
  color: red;
  font-size: 14px;
  margin-top: 10px;
}

.register-container {
  margin-top: 20px;
}
</style>
