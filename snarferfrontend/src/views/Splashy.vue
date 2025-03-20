<script>
import HeroSection from "@/components/heroSection.vue";
import howItWorks from "@/components/howItWorks.vue";
import mapPreview from "@/components/mapPreview.vue";
import ctaSection from "@/components/ctaSection.vue";
import splashFooter from "@/components/splashFooter.vue";

export default {
  name: "Splashy",
  components: {
    HeroSection,
    howItWorks,
    mapPreview,
    ctaSection,
    splashFooter,
  },
};
</script>


<template>
  <div class="splashy-page">
    <HeroSection />
    <howItWorks />
    <mapPreview />
    <ctaSection />
    <splashFooter />
  </div>
</template>


<style scoped>
.splashy-page {
  font-family: 'Lora', serif;
  color: #4b2a00;
}


</style>
