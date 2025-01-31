<script setup>
import { onMounted } from 'vue'
import L from 'leaflet'
import "leaflet/dist/leaflet.css"; // Import Leaflet's CSS

onMounted(() => {
  const map = L.map('map').setView([51.505, -0.09], 13); // Initialize map AFTER DOM is ready

  L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
  }).addTo(map);
});
</script>

<template>
  <div id="map"></div>
</template>

<style scoped>
#map { 
  width: 100%;
  height: 500px; /* Adjust this as needed */
}
</style>
