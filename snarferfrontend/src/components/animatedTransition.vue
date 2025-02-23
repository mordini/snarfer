<script setup>
import { ref, onMounted, defineProps } from 'vue'
import { DotLottieVue } from '@lottiefiles/dotlottie-vue'

const props = defineProps({
  src: String, // Lottie animation source
  pageKey: String, // Unique key to track the page session
  duration: { type: Number, default: 5000 } // Animation duration (default: 5s)
});

const showAnimation = ref(false);
const showContent = ref(false);
const contentVisible = ref(false); // Controls fade-in effect

onMounted(() => {
  // Get the last time the page was opened
  const lastOpened = sessionStorage.getItem(`lastOpened_${props.pageKey}`);
  const currentTime = new Date().getTime();

  // Check if it's been more than 5 minutes since the last visit
  if (lastOpened && currentTime - lastOpened > 5 * 60 * 1000) {
    // More than 5 minutes since last visit, show animation
    showAnimation.value = true;
    sessionStorage.setItem(`seen_${props.pageKey}`, 'true');
    sessionStorage.setItem(`lastOpened_${props.pageKey}`, currentTime.toString());
  } else if (!lastOpened) {
    // First visit or no lastOpened value, show animation
    showAnimation.value = true;
    sessionStorage.setItem(`seen_${props.pageKey}`, 'true');
    sessionStorage.setItem(`lastOpened_${props.pageKey}`, currentTime.toString());
  } else {
    // Less than 5 minutes since the last visit, show content directly
    showContent.value = true;
    contentVisible.value = true;
  }

  // Handle animation duration and content display
  if (showAnimation.value) {
    setTimeout(() => {
      showAnimation.value = false;
      showContent.value = true;

      // Add a slight delay before fading in content
      setTimeout(() => {
        contentVisible.value = true;
      }, 200);
    }, props.duration);
  }
});
</script>

<template>
  <div v-if="showAnimation" class="animation-container">
    <DotLottieVue 
      class="animation"
      autoplay 
      :loop="false"
      :src="src"
    />
  </div>
  
  <div v-if="showContent" :class="{'fade-in': contentVisible, 'hidden': !contentVisible}">
    <slot />
  </div>
</template>


<style scoped>
/* Animation container */
.animation-container {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 100vh;
  background-color: rgb(160, 94, 8);
}

/* Lottie animation size */
.animation {
  width: 500px;
  height: 500px;
}

/* Fade-in effect */
.fade-in {
  opacity: 1;
  transition: opacity 1s ease-in-out;
}

.hidden {
  opacity: 0;
}
</style>
