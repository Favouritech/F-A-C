<script setup>
import heroImage from '../assets/cctv.jpg';    
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
          CCTV INSTALLATIONS
        </h1>

        <p>
          We sell and install the best CCTV cameras for securing all your environment, Book our service below
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