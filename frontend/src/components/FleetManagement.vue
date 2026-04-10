<script setup>
import heroImage from '../assets/fleet.jpg';    
import Appointment from './Appointment.vue';
</script>

<template>
  <section 
    class="hero fleet"
    :style="{ backgroundImage: `url(${heroImage})` }"
  >
    <div class="overlay"></div>

    <div class="hero-container">

      <div class="hero-content">
        <h1>
          Fleet Management
        </h1>

        <p>
          Here at Favouritech Auto Concepts, we ensure that your vehicles are safe and that there're proper record and timing for your fleet.

        </p>

        <div class="hero-buttons">
          <router-link to="/popup" class="cta-button primary">
            Book Us Today
          </router-link>
        </div>
      </div>

      <div class="socials">
        <div class="socials">
      <a href="#" target="_blank" rel="noopener noreferrer">
        <i class="bx bxl-facebook"></i>
      </a>
      <a href="#" target="_blank" rel="noopener noreferrer">
        <i class="bx bxl-twitter"></i>
      </a>
      <a href="#" target="_blank" rel="noopener noreferrer">
        <i class="bx bxl-instagram"></i>
      </a>
    </div>
      </div>

    </div>
  </section>

  <Appointment />
</template>

<style scoped>

</style>