<script setup>
import { useRouter } from 'vue-router';

const router = useRouter();

const goBack = () => {
  router.back();
};
const goToCreateQuest = () => {
  router.push('/createQuest');
};
</script>

<template>
  <div class="admin-container">
    <h1>🛠️ Admin Panel</h1>
    <p>Welcome to the admin panel. Select an action below.</p>

    <div class="button-container">
      <button @click="goBack" class="back-btn">⬅️ Back</button>
      <button @click="goToCreateQuest" class="create-quest-btn">📜 Create Quest</button>
    </div>
  </div>
</template>

<style scoped>
.admin-container {
  text-align: center;
  padding: 40px;
}

.button-container {
  margin-top: 20px;
  display: flex;
  justify-content: center;
  gap: 15px;
}

/* Back Button */
.back-btn {
  padding: 10px 20px;
  font-size: 16px;
  background-color: #ccc;
  color: #333;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  transition: 0.3s ease-in-out;
}

.back-btn:hover {
  background-color: #999;
}

/* Create Quest Button */
.create-quest-btn {
  padding: 10px 20px;
  font-size: 16px;
  background-color: #0077cc;
  color: white;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  transition: 0.3s ease-in-out;
}

.create-quest-btn:hover {
  background-color: #005999;
}
</style>
