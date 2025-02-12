<script setup>
import { ref, onMounted } from 'vue';
import { useRoute, useRouter } from 'vue-router';

const route = useRoute();
const router = useRouter();

// Check if we are editing an existing POI or creating a new one
const poiId = ref(route.query.poiId || null);
const lat = ref(route.query.lat || '');
const lng = ref(route.query.lng || '');

// Form fields
const poiName = ref('');
const poiDescription = ref('');

onMounted(() => {
  if (poiId.value) {
    // Fetch existing POI details (Placeholder data)
    poiName.value = `POI ${poiId.value}`;
    poiDescription.value = `Description for POI ${poiId.value}`;
  } else if (lat.value && lng.value) {
    // If coming from map click, pre-fill lat/lng but leave name/description empty
    poiName.value = `New POI at ${lat.value}, ${lng.value}`;
  }
});

// Save function (placeholder logic)
const saveChanges = () => {
  console.log(`Saving POI:`, {
    name: poiName.value,
    description: poiDescription.value,
    lat: lat.value,
    lng: lng.value,
  });

  // Redirect back to map after saving
  router.push('/homePage');
};
</script>

<template>
  <div class="container">
    <h1>{{ poiId ? `Edit POI ${poiId}` : "Create a New POI" }}</h1>

    <label>POI Name:</label>
    <input v-model="poiName" type="text" placeholder="Enter POI name" />

    <label>Description:</label>
    <textarea v-model="poiDescription" placeholder="Enter details"></textarea>

    <label v-if="lat && lng">Coordinates:</label>
    <p v-if="lat && lng">Lat: {{ lat }}, Lng: {{ lng }}</p>

    <button @click="saveChanges">Save POI</button>
    <button @click="router.push('/homePage')">Cancel</button>
  </div>
</template>

<style scoped>
.container {
  max-width: 400px;
  margin: 50px auto;
  padding: 20px;
  background: #f9f9f9;
  border-radius: 8px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  text-align: center;
}

h1 {
  font-size: 1.5rem;
  margin-bottom: 15px;
}

label {
  display: block;
  text-align: left;
  margin-top: 10px;
}

input, textarea {
  width: 100%;
  padding: 8px;
  margin-top: 5px;
  border: 1px solid #ccc;
  border-radius: 5px;
}

textarea {
  height: 100px;
  resize: none;
}

button {
  margin: 10px 5px;
  padding: 10px 15px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}

button:first-of-type {
  background-color: #42b883;
  color: white;
}

button:last-of-type {
  background-color: #ccc;
}
</style>
