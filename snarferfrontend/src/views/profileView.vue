<script setup>
import { useUserStore } from '@/stores/userStore';

const userStore = useUserStore();
</script>

<template>
  <div v-if="userStore.currentUser">
    <h1>{{ userStore.currentUser.username }}'s Profile</h1>
    <p>Rank: {{ userStore.currentUser.rank }}</p>
  </div>
  <div v-else>
    <p>No user loaded. Please log in.</p>
  </div>
</template>
