<template>
  <section class="about py-5">
    <div class="container about-container">

      <h2 class="mb-4 text-center" data-aos="fade-down">About Us</h2>

      <p class="mb-5 text-center" data-aos="fade-up">
        At Favouritech Auto Concepts, we are passionate about providing high-quality automotive parts, accessories, 
        and services to car enthusiasts and everyday drivers alike. Our mission is to help you drive better by offering 
        a wide range of products that enhance your vehicle's performance, style, and functionality.
      </p>

      <!-- FEATURES GRID -->
      <div class="row features g-4" data-aos="zoom-in" data-aos-delay="200">
        <div class="col-md-4 col-sm-6" v-for="(feature, index) in features" :key="index">
          <div class="feature text-center p-4 h-100 bg-light rounded shadow-sm" data-aos="fade-right">
            <i :class="feature.icon" style="font-size: 2.5rem; color: var(--red);"></i>
            <h3 class="mt-3">{{ feature.title }}</h3>
            <p>{{ feature.description }}</p>
          </div>
        </div>
      </div>

    </div>
  </section>
</template>

<script setup>
const features = [
  {
    icon: 'bx bxs-car',
    title: 'Wide Selection',
    description: 'Explore our extensive range of automotive products, from performance parts to stylish accessories.'
  },
  {
    icon: 'bx bxs-cog',
    title: 'High Quality',
    description: 'We provide only top-quality products that enhance the performance and longevity of your vehicle.'
  },
  {
    icon: 'bx bxs-key',
    title: 'Vehicle Security',
    description: 'We ensure the security of your vehicle with our range of locks, alarms, and tracking devices to keep your car safe.'
  },
  {
    icon: 'bx bxs-smile',
    title: 'Customer Support',
    description: 'Our friendly support team is always ready to help you with your automotive needs.'
  },
  // Add more features here if needed
];
</script>

<style scoped>
.feature i {
  display: block;
}
.feature h3 {
  font-weight: 700;
}
</style>