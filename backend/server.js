import express from "express";
import cors from "cors";
import pkg from "pg";
import nodemailer from "nodemailer";
import dotenv from "dotenv";

dotenv.config();

const { Pool } = pkg;

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// PostgreSQL connection
const pool = new Pool({
  user: process.env.DB_USER,
  host: process.env.DB_HOST,
  database: process.env.DB_NAME,
  password: process.env.DB_PASSWORD,
  port: process.env.DB_PORT,
});

// Test DB connection
pool.connect()
  .then(() => console.log("✅ Connected to PostgreSQL"))
  .catch(err => console.error("❌ DB connection error:", err));

// ✅ FIXED Email transporter (NO MORE 465 ERROR)
const transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 587,
  secure: false,
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
  tls: {
    rejectUnauthorized: false,
  },
});

// API route
app.post("/api/appointments", async (req, res) => {
  console.log("🔥 Incoming request:", req.body);

  const { name, email, phone, appointmentTime, service } = req.body;

  // Validation
  if (!name || !email || !phone || !appointmentTime || !service) {
    return res.status(400).json({ message: "All fields are required" });
  }

  try {
    // Save to DB
    await pool.query(
      "INSERT INTO appointments(name, email, phone, appointment_time, service) VALUES($1,$2,$3,$4,$5)",
      [name, email, phone, appointmentTime, service]
    );

    console.log("✅ Data inserted into DB");

    // Send email
    await transporter.sendMail({
      from: `"Appointment System" <${process.env.EMAIL_USER}>`,
      to: process.env.EMAIL_USER,
      subject: "📅 New Appointment Booking",
      html: `
        <h2>New Appointment Booking</h2>
        <p><b>Name:</b> ${name}</p>
        <p><b>Email:</b> ${email}</p>
        <p><b>Phone:</b> ${phone}</p>
        <p><b>Time:</b> ${appointmentTime}</p>
        <p><b>Service:</b> ${service}</p>
      `,
    });

    console.log("📩 Email sent");

    res.status(201).json({
      message: "Appointment saved and email sent successfully",
    });

  } catch (error) {
    console.error("❌ ERROR:", error.message);

    // IMPORTANT: still return success if DB worked but email failed
    res.status(500).json({
      message: "Appointment saved but email failed",
    });
  }
});

// Start server
app.listen(5000, () => {
  console.log("🚀 Server running on http://localhost:5000");
});