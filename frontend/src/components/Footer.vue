<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue';


const showButton = ref(false);

const handleScroll = () => {
  showButton.value = window.scrollY > 300;
};

const scrollToTop = () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth',
  });
};

onMounted(() => {
  window.addEventListener('scroll', handleScroll);
});

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll);
});
// No additional script required
</script>


<template>
  <footer class="footer  py-5">
    <div class="container">
      <div class="row">

        <!-- Brand & About -->
        <div class="col-md-4 mb-4">
          <h4 class="footer-brand">Favouritech Auto Concepts</h4>
          <p>
            Your one-stop shop for automotive solutions. Explore our products, services, and stay connected with us.
          </p>
        </div>

        <!-- Quick Links -->
        <div class="col-md-4 mb-4">
          <h5>Quick Links</h5>
          <ul class="list-unstyled">
            <li>
              <router-link to="/" class="footer-link">Home</router-link>
            </li>
            <li>
              <router-link to="/about" class="footer-link">About Us</router-link>
            </li>
            <li>
              <router-link to="/services" class="footer-link">Services</router-link>
            </li>
            <li>
              <router-link to="/contact" class="footer-link">Contact Us</router-link>
            </li>
          </ul>
        </div>

        <!-- Services Preview -->
        <div class="col-md-4 mb-4">
          <h5>Our Services</h5>
          <ul class="list-unstyled">
            <li>
              <router-link to="/services/fleet-management" class="footer-link">Fleet Management</router-link>
            </li>
            <li>
              <router-link to="/services/vehicle-security" class="footer-link">Vehicle Security</router-link>
            </li>
            <li>
              <router-link to="/services/cctv" class="footer-link">CCTV Installation</router-link>
            </li>
            <li>
              <router-link to="/services/car-infotainment" class="footer-link">Car Infotainment</router-link>
            </li>
          </ul>
        </div>

      </div>

      <!-- Social Links -->
      <div class="text-center mt-4">
        <a href="#" target="_blank" class="me-3 text-light">
          <i class="bx bxl-facebook" style="font-size: 1.5rem;"></i>
        </a>
        <a href="#" target="_blank" class="me-3 text-light">
          <i class="bx bxl-twitter" style="font-size: 1.5rem;"></i>
        </a>
        <a href="#" target="_blank" class="text-light">
          <i class="bx bxl-instagram" style="font-size: 1.5rem;"></i>
        </a>
      </div>

      <!-- Copyright -->
      <div class="text-center mt-3 small credits">
        &copy; {{ new Date().getFullYear() }} Favouritech Auto Concepts. All rights reserved.
      </div>


      <!-- Scroll to Top Button -->
       <button
  v-show="showButton"
  class="back-to-top"
  @click="scrollToTop"
>
  <i class="bx bx-up-arrow-alt"></i>
</button>
    </div>
  </footer>
</template>



<style scoped>

</style>