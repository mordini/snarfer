<script setup>
import { onMounted } from 'vue'
import L from 'leaflet'
import "leaflet/dist/leaflet.css"; // Import Leaflet's CSS
import { useRouter } from 'vue-router'

defineProps({
  msg: {
    type: String,
    required: true,
  },
})

const router = useRouter()

// Initialize map
onMounted(() => {
  const map = L.map('map').setView([51.505, -0.09], 13); // Initialize map AFTER DOM is ready

  L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
  }).addTo(map);

  // Define Objects to add to map. Must happen inside of onMounted, after map is initialized
  var marker = L.marker([51.5, -0.09]).addTo(map);

  var circle = L.circle([51.508, -0.11], {
    color: 'red',
    fillColor: '#f03',
    fillOpacity: 0.5,
    radius: 500
  }).addTo(map);

  var polygon = L.polygon([
    [51.509, -0.08],
    [51.503, -0.06],
    [51.51, -0.047]
  ]).addTo(map);

  // Add Popups to Objects
  marker.bindPopup("<b>Hello world!</b><br>I am a popup.").openPopup();
  circle.bindPopup("I am a circle.");
  polygon.bindPopup("I am a polygon.");

  // Add Click Event to Map
  var popup = L.popup();

  function onMapClick(e) {
    popup
        .setLatLng(e.latlng)
        .setContent("You clicked the map at " + e.latlng.toString())
        .openOn(map);
  }

  map.on('click', onMapClick);

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
