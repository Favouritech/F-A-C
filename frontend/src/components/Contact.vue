<script setup>
import { ref } from "vue";
import Appointment from "./Appointment.vue";

const name = ref("");
const email = ref("");
const message = ref("");
const loading = ref(false);

const sendMessage = async () => {
  loading.value = true;

  try {
    const res = await fetch("http://localhost:5000/send-message", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: name.value,
        email: email.value,
        message: message.value,
      }),
    });

    const data = await res.json();

    if (res.ok) {
      alert("✅ Message sent successfully!");
      name.value = "";
      email.value = "";
      message.value = "";
    } else {
      alert(data.message || "❌ Failed to send message");
    }
  } catch (error) {
    console.error(error);
    alert("⚠️ Server error. Please try again.");
  } finally {
    loading.value = false;
  }
};
</script>

<template>
  <section class="contact reveal">
    <div class="container">
      <h2 data-aos="fade-down">Contact Us</h2>
      <p data-aos="fade-up">
        Have questions or want to know more? Reach out to us!
      </p>

      <div class="contact-grid" data-aos="zoom-in">
        <!-- Contact Form -->
        <div class="contact-form" data-aos="fade-right">
          <h3>Send us a message</h3>
          <form @submit.prevent="sendMessage">
            <input
              type="text"
              v-model="name"
              placeholder="Your Name"
              required
            />
            <input
              type="email"
              v-model="email"
              placeholder="Your Email"
              required
            />
            <textarea
              v-model="message"
              placeholder="Your Message"
              rows="5"
              required
            ></textarea>
            <button
              type="submit"
              class="cta-button primary"
              :disabled="loading"
            >
              {{ loading ? "Sending..." : "Send Message" }}
            </button>
          </form>
        </div>

        <!-- Location & Contact Info -->
        <div class="contact-info" data-aos="fade-left">
          <h3>Our Location</h3>
          <p>Fagba Automobile Market opp. AP filing station Lagos, Nigeria</p>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3960.6234092088323!2d3.379206075155281!3d6.524379025116593!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x103bfed52b1b0c3f%3A0x7f504c2ed7db01d!2sFavouritech%20Auto%20Concepts!5e0!3m2!1sen!2sus!4v1700000000000!5m2!1sen!2sus"
            width="100%"
            height="300"
            style="border: 0"
            allowfullscreen=""
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
          ></iframe>
          <h3>Email & Phone</h3>
          <p>Email: info@favouritechauto.com</p>
          <p>Phone: +234 800 123 4567</p>
        </div>
      </div>
    </div>
  </section>
  <Appointment />
</template>

<style scoped>

</style>
