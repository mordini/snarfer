<script setup>
import { useRouter } from 'vue-router'


const router = useRouter()

const goToMap = () => {
  router.push('/map')
}
</script>

<template>
  <div class="home-container">
    <button @click="goToMap">Map</button>
  </div>>
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
