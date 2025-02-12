<script setup>
// TODO:A. create/edit mode. Users can click on a point and make it a POI. Or click on a POI and edit it. Permissions required.
//  B. navigation mode. Current location updated frequently. POIs are hidden. 
//  C. explore POIs mode. POIs and "conquered" areas are shown(color coded). Users can click on a POI to see details.
import { onMounted } from 'vue';
import { useRouter } from 'vue-router';
import { initializeMap, createMarker, addMapClickListener } from '@/components/useMap';

const router = useRouter();
let map;

onMounted(() => {
  map = initializeMap('map'); // Step 1: Initialize map

  // Populate map with predefined markers. TEMPORARY. FIX THIS by adding markers from the database
  createMarker(map, 35.7, -78.6, 1, router);
  createMarker(map, 35.8, -78.7, 2, router);
  createMarker(map, 35.75, -78.65, 3, router);

  // Add click listener to create new POIs
  addMapClickListener(map);
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

</style>
