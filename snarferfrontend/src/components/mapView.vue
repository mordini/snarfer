<script setup>
import { onMounted, ref } from 'vue'
import L from 'leaflet'

const mapContainer = ref(null)

onMounted(() => {
  const map = L.map(mapContainer.value).setView([40.7128, -74.0060], 13)

  L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; OpenStreetMap contributors'
  }).addTo(map)
})
</script>

<template>
  <div ref="mapContainer" class="map-container"></div>
</template>

<style scoped>

</style>
