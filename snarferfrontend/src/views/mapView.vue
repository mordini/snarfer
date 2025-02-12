<script setup>
// TODO:A. create/edit mode. Users can click on a point and make it a POI. Or click on a POI and edit it. Permissions required.
//  B. navigation mode. Current location updated frequently. POIs are hidden. 
//  C. explore POIs mode. POIs and "conquered" areas are shown(color coded). Users can click on a POI to see details.
import { onMounted } from 'vue'
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
  initializeMap('map', router); // Pass router for navigation
});

</script>



<template>
    
  <div id="map"></div>

</template>

<style scoped>
html, body {
    height: 100%;
    margin: 0;
    padding: 0;
    overflow: hidden;
}

#map {
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
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
