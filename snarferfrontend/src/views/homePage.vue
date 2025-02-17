<script setup>
import { ref, onMounted } from 'vue'
import mapView from './mapView.vue'
import { DotLottieVue } from '@lottiefiles/dotlottie-vue'

const showMap = ref(false);

onMounted(() => {
  const hasSeenAnimation = sessionStorage.getItem('seenAnimation');

  if (hasSeenAnimation) {
    // If user has already seen the animation in this session, show map immediately
    showMap.value = true;
  } else {
    // Mark animation as seen
    sessionStorage.setItem('seenAnimation', 'true');

    // Play animation, then show map
    setTimeout(() => {
      showMap.value = true;
    }, 4000); // Adjust duration of loading animation
  }
});
</script>

<template>
  <div v-if="!showMap">
    <DotLottieVue 
      style="height: 500px; width: 500px" 
      autoplay 
      :loop="false" 
      src="https://lottie.host/1e651585-5d7f-4bd2-b022-05129d36f688/pkxKTclkmM.lottie"
    />
  </div>
  <mapView v-else />
</template>

<style scoped>
</style>
