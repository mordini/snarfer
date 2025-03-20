<script setup>
import { useUserStore } from '@/stores/userStore';
import { useRouter } from 'vue-router';
import { computed } from 'vue';
import profileComponent from '../components/profileComponent.vue';

const userStore = useUserStore();
const router = useRouter();

const currentUser = computed(() => userStore.currentUser);

const handleLogout = () => {
  router.replace('/');
};


const goToAdminPanel = () => {
  router.push('/admin');
};
</script>

<template>
  <div v-if="currentUser">
    <profileComponent />

    <!-- Quests Section -->
    <div class="quests-section">
      <h2>📜 Quests</h2>
      <div class="quests">
        <div class="quest-list">
          <h3>✅ Completed Quests</h3>
          <ul>
            <li v-for="quest in currentUser?.questsCompleted" :key="quest.id">📜 {{ quest.name }}</li>
          </ul>
        </div>
      </div>
    </div>

    <!-- POIs Section -->
    <div class="pois-section">
      <h2>🗺️ Mastery & Created POIs</h2>
      <p>Mastered Locations: {{ currentUser?.masteredLocations }}</p>
      <p>Created POIs: {{ currentUser?.poisCreated }}</p>
      <p>Edited POIs: {{ currentUser?.poisEdited }}</p>
    </div>

    <!-- Leaderboard Section -->
    <div class="leaderboard-section">
      <h2>🏆 Leaderboard Placement</h2>
      <p>Your Position: {{ currentUser?.leaderboardPosition ?? 'Unranked' }}</p>
    </div>

      <!-- Is Admin Section -->
    <div v-if=true>
      <h2>🛠️ Admin Panel active</h2>
      <p>You have admin privileges.</p>
      <!-- Admin Panel Button -->
      <button @click="goToAdminPanel" class="admin-btn">Admin View</button>
    </div>
  </div>


  
  <div v-else>
    <p>No user loaded. Please log in.</p>
  </div>


  <!-- Logout Button -->
  <button @click="handleLogout" class="logout-btn">Logout</button>
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

/* Admin Button Styling */
.admin-btn {
  position: fixed;
  bottom: 80px; /* Above logout button */
  left: 50%;
  transform: translateX(-50%);
  width: 200px;
  padding: 15px;
  font-size: 18px;
  background-color: #0077cc;
  color: white;
  border: none;
  border-radius: 10px;
  cursor: pointer;
  transition: all 0.3s ease-in-out;
}

.admin-btn:hover {
  background-color: #005999;
  transform: translateX(-50%) translateY(-3px);
}

/* Logout Button Styling */
.logout-btn {
  position: fixed;
  bottom: 20px;
  left: 50%;
  transform: translateX(-50%);
  width: 200px;
  padding: 15px;
  font-size: 18px;
  background-color: #d17a22;
  color: white;
  border: none;
  border-radius: 10px;
  cursor: pointer;
  transition: all 0.3s ease-in-out;
}

.logout-btn:hover {
  background-color: #a55a15;
  transform: translateX(-50%) translateY(-3px);
}
</style>
