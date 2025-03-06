<script setup>
import { useUserStore } from '@/stores/userStore';
import { computed } from 'vue';
import profileComponent from '../components/profileComponent.vue';

const userStore = useUserStore();
const currentUser = computed(() => userStore.currentUser);
</script>

<template>
  <div v-if="currentUser">

    <profileComponent />

    <div class="quests-section">
      <h2>📜 Quests</h2>
      <div class="quests">
        <div class="quest-list">
          <h3>✅ Completed Quests</h3>
          <ul>
            <li v-for="quest in currentUser.questsCompleted" :key="quest.id">📜 {{ quest.name }}</li>
          </ul>
        </div>
      </div>
    </div>

    <!-- POIs Section -->
    <div class="pois-section">
      <h2>🗺️ Mastery & Created POIs</h2>
      <p>Mastered Locations: {{ currentUser.masteredLocations }}</p>
      <p>Created POIs: {{ currentUser.poisCreated }}</p>
    </div>

    <!-- Leaderboard Section -->
    <div class="leaderboard-section">
      <h2>🏆 Leaderboard Placement</h2>
      <p>Your Position: {{ currentUser.leaderboardPosition ?? 'Unranked' }}</p>
    </div>

  </div>
  
  <div v-else>
    <p>No user loaded. Please log in.</p>
  </div>
  <div> 
    <button @click="userStore.logoutUser">Logout</button>
  </div>
</template>

<style scoped>



.quests-section, .pois-section, .leaderboard-section {
  margin-top: 20px;
  padding: 15px;
  background: rgba(255, 255, 255, 0.8);
  border-radius: 10px;
}

.quest-list ul {
  list-style: none;
  padding: 0;
}

.quest-list li {
  padding: 5px;
  background: #f8e9c1;
  border-radius: 5px;
  margin-top: 5px;
}
</style>
