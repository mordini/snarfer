<script setup>
import { onMounted } from 'vue'
import L from 'leaflet'
import "leaflet/dist/leaflet.css"; // Import Leaflet's CSS
import { useRouter } from 'vue-router'
import { initializeMap } from '@/components/useMap' // Import the map logic

defineProps({
  msg: {
    type: String,
    required: true,
  },
})

const router = useRouter()

// Initialize map
onMounted(() => {
  initializeMap('map');
});

const goToCatEditPage = () => {
  router.push('/catEdit') // Navigate to catEdit page to edit this catalog entry
}

</script>



<template>
    
  <div id="map"></div>

  <main>
    <div>
      <button class="edit-button" @click="goToCatEditPage">Catalog Page For this exact point you done clicked on</button>
    </div>
  </main>
</template>

<style scoped>
#map { 
  width: 100%;
  height: 900px; /* Adjust this as needed */
}
#edit-button {
  display: block;
  margin: 20px auto;
  padding: 10px 20px;
  font-size: 1rem;
  color: white;
  background-color: #42b883;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s ease;
}
#edit-button:hover {
  background-color: #35495e;
}

</style>
