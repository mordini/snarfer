<script>
import HeroSection from "@/components/heroSection.vue"; // Make sure the path is correct

export default {
  name: "Splashy",
  components: {
    HeroSection,
  },
};
</script>


<template>
  <div class="splashy-page">
    <!-- Hero Section -->
    <HeroSection />

    <!-- How It Works Section -->
    <section class="how-it-works">
      <h2>How It Works</h2>
      <div class="features">
        <div class="feature">
          <img src="@/assets/compass.png" alt="Quest" class="feature-icon" />
          <p>Complete Quests</p>
        </div>
        <div class="feature">
          <img src="@/assets/compass.png" alt="POIs" class="feature-icon" />
          <p>Discover POIs</p>
        </div>
        <div class="feature">
          <img src="@/assets/compass.png" alt="Mastery" class="feature-icon" />
          <p>Master Territories</p>
        </div>
        <div class="feature">
          <img src="@/assets/compass.png" alt="Badges" class="feature-icon" />
          <p>Earn Badges</p>
        </div>
      </div>
      <div class="step-by-step">
        <!-- Add visual or animation of step-by-step process -->
        <p>Step-by-step guide of exploration.</p>
      </div>
    </section>

    <!-- Adventure Map Preview -->
    <section class="map-preview">
      <h2>Adventure Map Preview</h2>
      <div class="map">
        <!-- You can add a map component or placeholder here -->
        <p>Interactive map with sample POIs and markers.</p>
      </div>
    </section>

    <!-- Call to Action Section -->
    <section class="cta">
      <div class="cta-box">
        <h3>Join the Guild!</h3>
        <button class="cta-btn">Create Your Explorer Account</button>
        <button class="cta-btn">Log In to Your Journey</button>
      </div>
    </section>

    <!-- Footer Section -->
    <footer class="footer">
      <ul>
        <li><a href="#">About</a></li>
        <li><a href="#">Contact</a></li>
        <li><a href="#">Terms</a></li>
      </ul>
      <div class="stamp">
        <img src="@/assets/compass.png" alt="Stamp" />
      </div>
    </footer>
  </div>
</template>


<style scoped>
.splashy-page {
  font-family: 'Lora', serif;
  color: #4b2a00;
}

.how-it-works {
  background: #f1e1c6;
  padding: 50px;
}

.features {
  display: flex;
  justify-content: space-around;
}

.feature {
  text-align: center;
}

.feature img {
  width: 50px;
  height: 50px;
}

.map-preview {
  background: #c9b28a;
  padding: 50px;
}

.cta {
  background: #9f5822;
  color: white;
  padding: 30px;
  text-align: center;
}

.cta-btn {
  background-color: #d17a22;
  padding: 10px 20px;
  border: none;
  color: white;
  cursor: pointer;
}

.cta-btn:hover {
  background-color: #9f5822;
}

.footer {
  background: #4b2a00;
  color: white;
  text-align: center;
  padding: 20px;
}

.footer ul {
  list-style: none;
  padding: 0;
}

.footer ul li {
  display: inline;
  margin: 0 10px;
}

.footer .stamp {
  margin-top: 10px;
}
</style>
