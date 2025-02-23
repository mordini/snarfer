<script setup>
import WelcomeItem from './WelcomeItem.vue'
import DocumentationIcon from './icons/IconDocumentation.vue'
import ToolingIcon from './icons/IconTooling.vue'
import EcosystemIcon from './icons/IconEcosystem.vue'
import CommunityIcon from './icons/IconCommunity.vue'

const openReadmeInEditor = () => fetch('/__open-in-editor?file=README.md')
</script>

<template>
  <WelcomeItem>
    <template #icon>
      <DocumentationIcon />
    </template>
    <template #heading>Learn about local history in a fun way</template>
    Dive into the rich history of your surroundings. With each quest, you'll unlock fascinating stories, 
    shocking facts, and insider knowledge about the places that make your community unique. 
    History has never been this engaging!
  </WelcomeItem>

  <WelcomeItem>
    <template #icon>
      <ToolingIcon />
    </template>
    <template #heading>Earn rewards as you explore</template>

    The more you explore, the more you earn! Collect badges, level up, and gain ranks as you visit new locations
     and contribute to the History Catalog. Snarfer turns your discoveries into achievements, so the more you
      explore, the more you gain!
    
    <br />


  </WelcomeItem>

  <WelcomeItem>
    <template #icon>
      <EcosystemIcon />
    </template>
    <template #heading>Support Local Businesses</template>

    Discover local businesses and make a positive impact on your community. Every quest brings you closer to the
     local economy by encouraging visits to shops, cafes, and more. Explore and support your town—every purchase
      counts!
     If you are a business owner, check out our 
    <a href="https://github.com/vuejs/awesome-vue" target="_blank" rel="noopener">Business Page</a>
    to join our network.
  </WelcomeItem>

  <WelcomeItem>
    <template #icon>
      <CommunityIcon />
    </template>
    <template #heading>Contribute to Your Community's History</template>

    Your knowledge matters! Contribute to the History Catalog by sharing insights, photos, and stories about the 
    places you explore. Be a part of the growing community of explorers who help document the history of your town 
    for future generations.
  </WelcomeItem>
</template>
