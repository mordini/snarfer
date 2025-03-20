<script setup>
import { ref } from 'vue';
import { useRouter } from 'vue-router';

const router = useRouter();

// Dummy function to handle form submission
const createQuest = () => {
  console.log("Quest creation submitted (dummy function)");
  alert("Quest creation is not yet implemented.");
};

// Dummy state for form fields
const questName = ref("");
const questDescription = ref("");
const questType = ref("");
</script>

<template>
  <div class="create-quest-container">
    <h2>Create a New Quest</h2>
    
    <form @submit.prevent="createQuest">
      <label>Quest Name:</label>
      <input v-model="questName" type="text" placeholder="Enter quest name" />
      
      <label>Quest Description:</label>
      <textarea v-model="questDescription" placeholder="Enter quest details"></textarea>
      
      <label>Quest Type:</label>
      <select v-model="questType">
        <option value="location">Visit Locations</option>
        <option value="mastery">Master an Area</option>
        <option value="leaderboard">Place on Leaderboard</option>
        <option value="purchase">Buy Something</option>
      </select>
      
      <button type="submit" class="submit-btn">Create Quest</button>
    </form>
    
    <button @click="router.push('/admin')" class="back-btn">Back to Admin</button>
  </div>
</template>

<style scoped>
.create-quest-container {
  max-width: 500px;
  margin: auto;
  padding: 20px;
  background: rgba(255, 255, 255, 0.9);
  border-radius: 10px;
}

label {
  display: block;
  margin-top: 10px;
  font-weight: bold;
}

input, textarea, select {
  width: 100%;
  padding: 8px;
  margin-top: 5px;
  border: 1px solid #ccc;
  border-radius: 5px;
}

.submit-btn, .back-btn {
  margin-top: 15px;
  padding: 10px 15px;
  font-size: 16px;
  background-color: #0077cc;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: 0.3s;
}

.submit-btn:hover {
  background-color: #005999;
}

.back-btn {
  background-color: #d17a22;
}

.back-btn:hover {
  background-color: #a55a15;
}
</style>
