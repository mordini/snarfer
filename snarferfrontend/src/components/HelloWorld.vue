<script setup>
import { useRouter } from 'vue-router'

defineProps({
  msg: {
    type: String,
    required: true,
  },
})

const router = useRouter()

const goToLoginPage = () => {
  router.push('/login') // Navigate to LoginPage
}
const goToCreateAccountPage = () => {
  router.push('/createAccount') // Navigate to createAccount page
}
</script>

<template>
  <div class="greetings">
    <h1 class="green">{{ msg }}</h1>
    
    <!-- Login Page Button -->
    <button class="loginPage-button" @click="goToLoginPage">Existing User</button>
    <!-- CreateAccountPage Button -->
    <button class="createAccountPage-button" @click="goToCreateAccountPage">New User</button>
  </div>
</template>

<style scoped>
h1 {
  font-weight: 500;
  font-size: 2.6rem;
  position: relative;
  top: -10px;
}

h3 {
  font-size: 1.2rem;
}

.greetings h1,
.greetings h3 {
  text-align: center;
}

.loginPage-button {
  display: block;
  margin: 20px auto;
  padding: 10px 20px;
  font-size: 1rem;
  color: white;
  background-color: #42b883;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

.loginPage-button:hover {
  background-color: #35495e;
}

.createAccountPage-button {
  display: block;
  margin: 20px auto;
  padding: 10px 20px;
  font-size: 1rem;
  color: white;
  background-color: #077443;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

.createAccountPage-button:hover {
  background-color: #35495e;
}

@media (min-width: 1024px) {
  .greetings h1,
  .greetings h3 {
    text-align: left;
  }
}
</style>
