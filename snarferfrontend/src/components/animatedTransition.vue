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
    // The following section is commented out so that I can see the animation working every time. 
  /*const hasSeenPage = sessionStorage.getItem(`seen_${props.pageKey}`);

  if (hasSeenPage) {
    showContent.value = true;
    contentVisible.value = true;
  } else {*/
    // Show animation first
    showAnimation.value = true;
    sessionStorage.setItem(`seen_${props.pageKey}`, 'true');

    setTimeout(() => {
      showAnimation.value = false;
      showContent.value = true;

      // Add a slight delay before fading in content
      setTimeout(() => {
        contentVisible.value = true;
      }, 200);
    }, props.duration);
  }
);

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
