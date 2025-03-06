<script>
import { onMounted, ref } from "vue";
import L from "leaflet";
import { displayPredefinedPOIs} from '@/components/useMap';

export default {
  name: "MapPreview",
  setup() {
    const mapContainer = ref(null);

    onMounted(() => {
      if (mapContainer.value) {
        const map = L.map(mapContainer.value, {
            // Raleigh NC
          center: [35.7796, -78.6382],
          zoom: 13,
          scrollWheelZoom: false,
          zoomControl: false,
        });

        L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
          attribution: "© OpenStreetMap contributors",
        }).addTo(map);

        displayPredefinedPOIs(map);

        // Subtle zoom animation
        setTimeout(() => {
          map.setZoom(14);
        }, 800);
      }
    });

    return { mapContainer };
  },
};
</script>

<template>
  <section class="map-preview">
    <h2>Adventure Map Preview</h2>
    <p>Discover hidden locations and embark on epic quests.</p>
    <div ref="mapContainer" class="map-container"></div>
  </section>
</template>

<style scoped>
.map-preview {
  background-color: #e9dac1; /* Soft parchment color */
  padding: 80px 20px;
  text-align: center;
  color: #4e3b31;
  border-bottom: 10px solid #d17a22;
}

.map-preview h2 {
  font-family: "Pirata One", cursive;
  font-size: 3rem;
  margin-bottom: 15px;
}

.map-preview p {
  font-family: "Lora", serif;
  font-size: 1.3rem;
  margin-bottom: 20px;
}

.map-container {
  width: 90%;
  max-width: 800px;
  height: 400px;
  margin: 0 auto;
  border-radius: 15px;
  overflow: hidden;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.3);
  animation: fadeInUp 1s ease-out;
}

/* Fade-in animation */
@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
</style>
