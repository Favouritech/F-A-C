<template>
  <section class="services py-5">
    <div class="container">
      <h2 class="text-center mb-5">Our Services</h2>

      <div class="row g-4">
        <div class="col-md-4" v-for="service in services" :key="service.id">
          <div class="service-card p-4 text-center shadow-sm rounded h-100">
            <i :class="service.icon" style="font-size: 2.5rem; color: var(--red)"></i>
            <h3 class="mt-3">{{ service.name }}</h3>
            <p>{{ service.description }}</p>
            <router-link :to="service.link" class="btn btn-primary mt-2">
              Learn More
            </router-link>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
const services = [
  {
    id: 1,
    name: 'Car Infotainment and Accessories',
    description: 'Upgrade your driving experience with our advanced car infotainment systems and premium vehicle accessories. From smart dashboards and seamless connectivity to high-quality audio and essential add-ons, we provide everything you need to enhance comfort, entertainment, and control on the road.',
    icon: 'bx bxs-car',
    link: '/fleetmanagement' // points to FleetManagement.vue
  },
  {
    id: 2,
    name: 'Vehicle Security And Tracking',
    description: 'Protect your vehicles with advanced security systems designed to give you complete peace of mind. Our solutions include real-time tracking, smart surveillance, remote monitoring, and instant alerts to keep you informed at all times.',
    icon: 'bx bxs-shield',
    link: '/vehicletracking' // points to VehicleSecurity.vue
  },
  {
    id: 3,
    name: 'Fleet Management',
    description: 'Streamline your operations with smart fleet management solutions. Monitor vehicle performance, track locations in real time, and optimize routes to improve efficiency, reduce costs, and stay in full control of your fleet.',
    icon: 'bx bxs-wrench',
    link: '/fleetmanagement' // points to Maintenance.vue
  },
  {
    id: 4,
    name: 'CCTV Installation',
    description: 'Enhance your security with professional CCTV installation. Monitor your space in real time, deter threats, and keep your property safe with reliable surveillance systems.',
    icon: 'bx bxs-tools',
    link: '/CCTV' // points to Installation.vue
  }
];
</script>