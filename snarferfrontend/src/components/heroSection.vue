<script>
import { useRouter } from 'vue-router'

export default {
  name: 'HeroSection',
  setup() {
    const router = useRouter()

    const logIn = () => {
      router.push('/login')
    }
    
    const signUp = () => {
      router.push('/createAccount')
    }

    return {
      logIn,
      signUp
    }
  }
}
</script>

<template>
  <section class="hero-section">
    <div class="hero-content">
      <h1>Welcome to Snarfari!</h1>
      <p>Where history and mapmaking converge to create the ultimate adventure.</p>
      <div class="buttons">
        <button @click="signUp" class="primary-btn">Sign Up</button>
        <button @click="logIn" class="secondary-btn">Log In</button>
      </div>
    </div>
  </section>
</template>

<style scoped>
.hero-section {
  position: relative;
  background-color: #4e3b31; /* Rich earthy brown, fitting the adventure theme */
  padding: 100px 20px; /* Increased padding for more breathing room */
  color: white; /* Text will be white to contrast well with the dark background */
  text-align: center;
  border-bottom: 10px solid #d17a22; /* Adding a subtle border at the bottom to break up sections */
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.2); /* Adds a soft shadow to create depth */
}

.hero-section .hero-content h1 {
  font-family: 'Pirata One', cursive;
  font-size: 4rem; /* Larger title for emphasis */
  margin-bottom: 15px;
  text-transform: uppercase; /* To make the title feel more epic */
  letter-spacing: 2px; /* Adds a bit more spacing for style */
  text-shadow: 3px 3px 4px rgba(0, 0, 0, 0.5); /* Subtle text shadow to make the text stand out against the dark background */
}

.hero-section .hero-content p {
  font-family: 'Lora', serif;
  font-size: 1.6rem; /* Slightly larger text for better readability */
  max-width: 700px;
  margin: 0 auto 30px auto; /* Center the description and add bottom spacing */
  line-height: 1.5; /* Increases line height for readability */
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.3); /* A mild shadow to enhance readability */
}

.hero-section .buttons {
  margin-top: 30px;
}

.hero-section .buttons button {
  margin: 10px;
  padding: 15px 30px;
  border: none;
  border-radius: 25px; /* Rounder corners for a softer look */
  font-size: 1.2rem;
  cursor: pointer;
  transition: all 0.3s ease;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1); /* Adds a slight shadow on buttons */
}

.primary-btn {
  background-color: #d17a22;
  color: white;
}

.secondary-btn {
  background-color: transparent;
  border: 2px solid #d17a22;
  color: #d17a22;
}

.primary-btn:hover {
  background-color: #9f5822;
  transform: translateY(-2px); /* Slightly raise the button to indicate interaction */
}

.secondary-btn:hover {
  background-color: #d17a22;
  color: white;
  transform: translateY(-2px); /* Slightly raise the button to indicate interaction */
}
</style>
