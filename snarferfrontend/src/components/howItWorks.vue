<script>
export default {
  name: 'HowItWorks'
};
</script>

<template>
  <section class="how-it-works">
    <h2>How It Works</h2>
    <div class="steps">
      <div class="step">
        <img src="@/assets/boot1.png" alt="Complete Quests" />
        <h3>Complete Quests</h3>
        <p>Visit locations, solve challenges, and progress in your journey.</p>
      </div>

      <div class="step">
        <img src="@/assets/obeliskCard.png" alt="Discover POIs" />
        <h3>Discover POIs</h3>
        <p>Find historical and unique places waiting to be explored.</p>
      </div>

      <div class="step">
        <img src="@/assets/map1.png" alt="Master Territories" />
        <h3>Master Territories</h3>
        <p>Compete to control streets and POIs, claiming mastery.</p>
      </div>

      <div class="step">
        <img src="@/assets/first_badge.png" alt="Earn Badges" />
        <h3>Earn Badges</h3>
        <p>Gain rewards and climb the ranks as you explore.</p>
      </div>
    </div>
  </section>
</template>

<style scoped>
.how-it-works {
  background-color: #f3e0c7; /* Parchment-like background */
  padding: 80px 20px;
  text-align: center;
  color: #4e3b31; /* Earthy brown text */
  border-bottom: 10px solid #d17a22;
}

.how-it-works h2 {
  font-family: 'Pirata One', cursive;
  font-size: 3rem;
  margin-bottom: 30px;
  text-transform: uppercase;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.3);
}

.steps {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 40px;
  max-width: 1000px;
  margin: 0 auto;
}

.step {
  background: #fff;
  border-radius: 15px;
  padding: 20px;
  width: 220px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  transition: transform 0.3s ease;
}

.step:hover {
  transform: scale(1.05);
}

.step img {
  width: 60px;
  height: 60px;
  margin-bottom: 15px;
}

.step h3 {
  font-family: 'Lora', serif;
  font-size: 1.5rem;
  margin-bottom: 10px;
}

.step p {
  font-size: 1rem;
  line-height: 1.4;
}
</style>
