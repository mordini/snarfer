<script setup>
import { onMounted } from 'vue';
import { useRouter } from 'vue-router';
import { initializeMap, addMapClickListener} from '@/components/useMap';


const router = useRouter();
let map;

onMounted(() => {
  map = initializeMap('map', router);

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
