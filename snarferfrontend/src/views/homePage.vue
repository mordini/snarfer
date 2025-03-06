<script setup>
import { useRouter } from 'vue-router';
import profileComponent from '../components/profileComponent.vue';


const router = useRouter();

const goToMap = () => {
  router.push('/map');
}
const goToProfileView = () => {
  router.push('/profile');
}
</script>

<template>
  <div class="home-container">
    <button @click="goToMap">Map</button>
    <button @click="goToProfileView">Profile</button>
  </div>
  <div>
    <profileComponent />
  </div>
</template>

<style scoped>
/* Center button */
.home-container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
}

button {
  padding: 10px 20px;
  font-size: 16px;
  background-color: #4CAF50;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}

button:hover {
  background-color: #45a049;
}
</style>
