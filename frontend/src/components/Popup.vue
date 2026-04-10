<template>
  <section class="appointment reveal">
    <div class="container">
      <h2 data-aos="fade-down">Book an Appointment</h2>
      <p data-aos="fade-up">
        Schedule a visit with our experts to discuss your automotive needs.
      </p>

      <div class="appointment-form" data-aos="fade-right">
        <h3>Fill out the form below</h3>
        <form @submit.prevent="scheduleAppointment">
          <input type="text" v-model="name" placeholder="Your Name" required />
          <input
            type="email"
            v-model="email"
            placeholder="Your Email"
            required
          />
          <input
            type="tel"
            v-model="phone"
            placeholder="Your Phone Number"
            required
          />
          <input
            type="datetime-local"
            v-model="appointmentTime"
            placeholder="Select Date and Time"
            required
          />

          <div class="app-type">
            <label for="services">Choose a service:</label>
            <br />
            <select v-model="service">
              <option value="">-- Select a service --</option>
              <option value="fleet">Fleet Management</option>
              <option value="cctv">CCTV Installation</option>
              <option value="infotainment">Car Infotainment</option>
              <option value="tracking">Vehicle Tracking</option>
            </select>
          </div>
          <button type="submit" class="cta-button primary">
            Schedule Appointment
          </button>
        </form>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref } from "vue";

const name = ref("");
const email = ref("");
const phone = ref("");
const appointmentTime = ref("");
const service = ref("");

const scheduleAppointment = () => {
  console.log("Appointment scheduled:", {
    name: name.value,
    email: email.value,
    phone: phone.value,
    appointmentTime: appointmentTime.value,
    service: service.value, // ✅ added
  });

  if (!service.value) {
    alert("Please select a service");
    return;
  }

  alert("Thank you! Your appointment has been scheduled.");

  name.value = "";
  email.value = "";
  phone.value = "";
  appointmentTime.value = "";
  service.value = ""; // reset
};
</script>

<style scoped>
select {
  padding: 10px;
  width: 200px;
  border-radius: 6px;
  border: 1px solid #ccc;
}
</style>
