<script setup>
import heroImage from '../assets/v-tracking.jpg';    
import Appointment from './Appointment.vue';
</script>

<template>
  <section 
    class="hero cctv"
    :style="{ backgroundImage: `url(${heroImage})` }"
  >
    <div class="overlay"></div>

    <div class="hero-container">

      <div class="hero-content">
        <h1>
          Vehicle Tracking
        </h1>

        <p>
          We ensure your vehicle is safe and you also motinor it right from your palms, no long processes, ome installation: you're good.
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