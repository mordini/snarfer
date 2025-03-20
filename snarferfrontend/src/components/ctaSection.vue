<script>
import { useRouter } from "vue-router";

export default {
  name: "CtaSection",
  setup() {
    const router = useRouter();

    const signUp = () => {
      router.push("/createAccount");
    };

    const logIn = () => {
      router.push("/login");
    };

    return { signUp, logIn };
  },
};
</script>

<template>
  <section class="cta-section">
    <div class="cta-content">
      <h2>Join the Guild of Explorers!</h2>
      <p>Embark on epic quests, discover hidden treasures, and carve your name in history.</p>
      <div class="buttons">
        <button @click="signUp" class="cta-btn">Create Your Explorer Account</button>
        <button @click="logIn" class="cta-btn secondary">Log In to Your Journey</button>
      </div>
    </div>
  </section>
</template>

<style scoped>
.cta-section {
  background: #9f5822; /* Burnt orange for strong contrast */
  color: white;
  padding: 80px 20px;
  text-align: center;
}

.cta-content {
  max-width: 800px;
  margin: 0 auto;
}

.cta-content h2 {
  font-family: "Pirata One", cursive;
  font-size: 3rem;
  margin-bottom: 15px;
  text-transform: uppercase;
  letter-spacing: 2px;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.3);
}

.cta-content p {
  font-family: "Lora", serif;
  font-size: 1.5rem;
  margin-bottom: 30px;
  line-height: 1.5;
}

.buttons {
  margin-top: 30px;
}

.cta-btn {
  background-color: #d17a22; /* Golden amber */
  padding: 15px 30px;
  border: none;
  color: white;
  cursor: pointer;
  font-size: 1.2rem;
  border-radius: 25px;
  transition: all 0.3s ease;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  margin: 10px;
}

.cta-btn:hover {
  background-color: #9f5822; /* Matches section background */
  transform: scale(1.05);
}

.secondary {
  background-color: transparent;
  border: 2px solid white;
}

.secondary:hover {
  background-color: white;
  color: #9f5822;
}
</style>
