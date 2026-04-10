import { createApp } from 'vue'
import AOS from 'aos'
import './style.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min.js'
import 'boxicons/css/boxicons.min.css'
import 'aos/dist/aos.css'

import App from './App.vue'
import router from './router' // ✅ import router

createApp(App)
  .use(router)   // ✅ connect router
  .mount('#app')

// Initialize AOS
AOS.init({
  duration: 800, // Animation duration in milliseconds
  once: true,    // Whether animation should happen only once - while scrolling down
})