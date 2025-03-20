<script setup>
import { ref } from 'vue';
import { useRouter } from 'vue-router';
import { useUserStore } from '@/stores/userStore';

const userStore = useUserStore();
const router = useRouter();

const username = ref('');
const password = ref('');
const message = ref('');

const createUser = () => {
  try {
    userStore.createUser(username.value, password.value);
    message.value = '🛡️ Account successfully created!';
    setTimeout(() => router.push('/login'), 2000); // Redirect after success
  } catch (error) {
    message.value = `⚠️ ${error.message}`;
  }
};

const goBackHome = () => {
  router.push('/');
};
</script>

<template>
  <div class="container">
    <div class="card">
      <h1>🗺️ Create Your Explorer Account</h1>
      <p class="description">Begin your journey with Snarfari! Choose your name wisely, traveler.</p>

      <input v-model="username" placeholder="🖋️ Username" class="input-box" />
      <input v-model="password" type="password" placeholder="🔑 Password" class="input-box" />
      
      <button @click="createUser" class="create-button">⚔️ Create Account</button>
      <button @click="goBackHome" class="back-button">🏠 Return Home</button>

      <p v-if="message" class="message">{{ message }}</p>
    </div>
  </div>
</template>

<style scoped>
/* Background Styling */
.container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-size: cover;
}

/* Card Styling */
.card {
  background: rgba(255, 248, 220, 0.9);
  padding: 30px;
  border-radius: 15px;
  text-align: center;
  max-width: 400px;
  border: 3px solid #8B4513;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.3);
}

/* Title Styling */
h1 {
  font-family: 'Pirata One', cursive;
  font-size: 24px;
  color: #4B3B2A;
  text-shadow: 2px 2px 2px rgba(0, 0, 0, 0.3);
}

/* Description */
.description {
  font-style: italic;
  font-size: 14px;
  color: #6B4226;
}

/* Input Fields */
.input-box {
  width: 100%;
  padding: 10px;
  margin: 10px 0;
  font-size: 16px;
  border: 2px solid #8B4513;
  border-radius: 5px;
  background-color: #FAEBD7;
  color: #4B3B2A;
  text-align: center;
  font-family: 'IM Fell English', serif;
}

/* Buttons */
.create-button, .back-button {
  width: 100%;
  padding: 10px;
  margin: 10px 5px;
  font-size: 16px;
  font-family: 'IM Fell English', serif;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  transition: 0.3s;
}

.create-button {
  background: #D2691E;
  color: white;
  box-shadow: 0 4px #8B4513;
}

.create-button:hover {
  background: #8B4513;
  box-shadow: 0 2px #5A3222;
  transform: translateY(2px);
}

.back-button {
  background: #6B4226;
  color: white;
  box-shadow: 0 4px #4B2A1A;
}

.back-button:hover {
  background: #4B2A1A;
  box-shadow: 0 2px #2A180E;
  transform: translateY(2px);
}

/* Message */
.message {
  margin-top: 10px;
  font-weight: bold;
  font-size: 14px;
  color: #D2691E;
}
</style>
