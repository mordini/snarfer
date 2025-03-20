<script setup>
import { ref, onMounted } from 'vue';
import { useRoute, useRouter } from 'vue-router';
import { addPOI, updatePOI, getAllPOIs } from '@/components/useMap';
import { useUserStore } from '@/stores/userStore';


const userStore = useUserStore();
const route = useRoute();
const router = useRouter();

const poiId = ref(route.query.poiId || null);
const lat = ref(route.query.lat || '');
const lng = ref(route.query.lng || '');
const isEditing = ref(false);

// Form fields
const poiName = ref('');
const poiDescription = ref('');
const poiCategory = ref('');

onMounted(() => {
  if (poiId.value) {
    isEditing.value = true;
    const poiData = getAllPOIs();
    //We see poiId has a value, so this must be editing. Below we are finding the POI that we are editing.
    const poi = poiData.features.find(poi => poi.id == poiId.value);
    if (poi) {
      // poi exists. Now we reassign the values
      poiName.value = poi.properties.name;
      poiDescription.value = poi.properties.description;
      poiCategory.value = poi.properties.category || '';
      lat.value = poi.geometry.coordinates[1];
      lng.value = poi.geometry.coordinates[0];
    } else {
      console.error("POI not found.");
    }
  }
});

const saveChanges = () => {
  if (!poiName.value.trim() || !poiDescription.value.trim()) {
    alert("Please enter a name and description for the POI.");
    return;
  }

  if (isEditing.value) {
    // Create the object with updated data
    const updatedPOI = {
      name: poiName.value,
      description: poiDescription.value,
      category: poiCategory.value
    };

    updatePOI(poiId.value, updatedPOI);
    userStore.incrementPoisEdited();
    
  } else {
    addPOI(lat.value, lng.value, poiName.value, poiDescription.value, poiCategory.value, userStore.currentUser.username);
    userStore.incrementPoisCreated();
  }
  setTimeout(() => {
  alert("POI saved successfully!");
  router.push('/map');
}, 500);


};

</script>

<template>
  <div class="container">
    <h1>{{ isEditing ? `Edit POI` : "Create a New POI" }}</h1>

    <label>POI Name:</label>
    <input v-model="poiName" type="text" placeholder="Enter POI name" />

    <label>Description:</label>
    <textarea v-model="poiDescription" placeholder="Enter details"></textarea>

    <label>Category:</label>
    <select v-model="poiCategory">
      <option value="market">Store</option>
      <option value="landmark">Landmark</option>
      <option value="restaurant">Restaurant</option>
      <option value="park">Park</option>
      <option value="arena">Arena</option>
      <option value="brewery">Brewery</option>
      <option value="mystery">Mystery</option>
      <option value="ritual">Ritual</option>
      <option value="battle">Battle</option>
      <option value="historical_event">Historical Event</option>

    </select>


    <label v-if="lat && lng">Coordinates:</label>
    <p v-if="lat && lng">Lat: {{ lat }}, Lng: {{ lng }}</p>

    <button @click="saveChanges">{{ isEditing ? "Edit Changes" : "Save POI" }}</button>
    <button @click="router.push('/map')">Cancel</button>
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
