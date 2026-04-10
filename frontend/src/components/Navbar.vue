<script setup>
import { ref } from 'vue';
import logo from '../assets/logo.png';

const isSidebarOpen = ref(false);

const toggleSidebar = () => {
  isSidebarOpen.value = !isSidebarOpen.value;
};

const closeSidebar = () => {
  isSidebarOpen.value = false;
};
</script>

<template>
  <nav class="my-nav">

    <!-- Logo -->
    <router-link to="/" class="logo">
      <!-- <img :src="logo" alt="Logo" class="logo-image" /> -->
      <span>Favouritech Auto Concepts</span>
    </router-link>

    <!-- Hamburger (ONLY MOBILE) -->
    <button class="nav-toggle mobile-only" @click="toggleSidebar">
      <i class="bx bx-menu-alt-right"></i>
    </button>

    <!-- Desktop Menu -->
    <ul class="nav-links desktop-only">
      <li><router-link to="/" class="top">Home</router-link></li>
      <li><router-link to="/about" class="top">About Us</router-link></li>
      <!-- Services Dropdown -->
<li class="nav-item dropdown">
  <a
    class="top dropdown-toggle"
    href="#"
    id="servicesDropdown"
    role="button"
    data-bs-toggle="dropdown"
    aria-expanded="false"
  >
    Services
  </a>
  <ul class="dropdown-menu" aria-labelledby="servicesDropdown">
    <li>
      <router-link to="/carinfotainment" class="dropdown-item top">
        Car Infotainment
      </router-link>
    </li>
    <li>
      <router-link to="/vehicletracking" class="dropdown-item top">
        Vehicle Tracking
      </router-link>
    </li>
    <li>
      <router-link to="/fleetmanagement" class="dropdown-item top ">
        Fleet Management
      </router-link>
    </li>
    <li>
      <router-link to="/CCTV" class="dropdown-item top">
        CCTV
      </router-link>
    </li>
  </ul>
</li>
      <li><router-link to="/contact" class="top">Contact Us</router-link></li>
    </ul>

    <!-- Sidebar (MOBILE) -->
    <div 
      class="sidebar-overlay"
      v-if="isSidebarOpen"
      @click="closeSidebar"
    ></div>

    <ul 
      class="sidebar"
      :class="{ active: isSidebarOpen }"
    >
      <!-- Close Button -->
      <button class="nav-toggle close-btn" @click="closeSidebar">
        <i class="bx bx-x"></i>
      </button>
      <div class="lists">
        <li><router-link to="/" @click="closeSidebar" class="top">Home</router-link></li>
        <li><router-link to="/about" @click="closeSidebar" class="top">About Us</router-link></li>
        <li><router-link to="/services" @click="closeSidebar" class="top">Services</router-link></li>

        <li><router-link to="/contact" @click="closeSidebar" class="top">Contact Us</router-link></li>
      </div>

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
    </ul>

  </nav>
</template>