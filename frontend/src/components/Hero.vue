<script setup>
import heroImage from '../assets/hero.jpg';
</script>

<template>
  <section 
    class="hero"
    :style="{ backgroundImage: `url(${heroImage})` }"
  >
    <div class="overlay"></div>

    <div class="hero-container">

      <div class="hero-content">
        <h1>
          Drive Better with <br><span>Favouritech Auto Concepts</span>
        </h1>

        <p>
          Discover high-quality automotive parts, accessories, and services 
          designed to keep your car performing at its best.
        </p>

        <div class="hero-buttons">
          <router-link to="/products" class="cta-button primary">
            Shop Now
          </router-link>

          <router-link to="/services" class="cta-button secondary">
            Learn More
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
</template>

<style scoped>

</style>