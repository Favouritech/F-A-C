import { createRouter, createWebHistory } from 'vue-router';
import Home from '../pages/Home.vue';
import About from '../components/About.vue';
import Contact from '../components/Contact.vue';
import Services from '../components/Services.vue';
import Appointment from '../components/Appointment.vue';
import CCTV from '../components/CCTV.vue';
import FleetManagement from '../components/FleetManagement.vue';  
import CarInfotainment from '../components/CarInfotainment.vue';
import VehicleTracking from '../components/VehicleTracking.vue';
import Popup from '../components/Popup.vue';


const routes = [
  { path: '/', component: Home },
  { path: '/about', component: About },
  { path: '/contact', component: Contact },
  { path: '/services', component: Services },
  { path: '/appointment', component: Appointment },
  { path: '/CCTV', component: CCTV},
  { path: '/fleetmanagement', component: FleetManagement },
  { path: '/carinfotainment', component: CarInfotainment },
  { path: '/vehicletracking', component: VehicleTracking },
  { path: '/popup', component: Popup },

];

export default createRouter({
  history: createWebHistory(),
  routes,
});
