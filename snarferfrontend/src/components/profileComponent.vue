<script setup>
import { useUserStore } from '@/stores/userStore';
import { computed } from 'vue';

const userStore = useUserStore();
const currentUser = computed(() => userStore.currentUser);
</script>

<template>
  <div v-if="currentUser" class="profile-container">
    <div class="profile-banner">
      <img :src=currentUser.profilePic alt="Avatar" class="avatar" />
      <div class="user-info">
        <h1>{{ currentUser.username }}</h1>
        <p>🏆 Level: {{ currentUser.level }}</p>
      </div>
    </div>

    <div class="badges">
        <span v-for="badge in currentUser.badges" :key="badge.id" class="badge">🏅 {{ badge.name }}</span>
    </div>
  </div>
  
</template>

<style scoped>
.profile-container {
  background-size: cover;
  padding: 20px;
  border-radius: 10px;
}

.profile-banner {
  display: flex;
  align-items: center;
  gap: 15px;
  padding: 15px;
  background: rgba(255, 255, 255, 0.8);
  border-radius: 10px;
}

.avatar {
  width: 80px;
  height: 80px;
  border-radius: 50%;
  border: 2px solid gold;
}

.user-info h1 {
  font-size: 1.5rem;
  color: #4a3f35;
}


.badges {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
}

.badge {
  background: gold;
  padding: 5px 10px;
  border-radius: 5px;
}
</style>
