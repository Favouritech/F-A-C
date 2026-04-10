import pool from "../config/db.js";
import nodemailer from "nodemailer";

export const createAppointment = async (req, res) => {
  const { name, email, phone, appointmentTime } = req.body;

  if (!name || !email || !phone || !appointmentTime) {
    return res.status(400).json({ message: "All fields are required" });
  }

  try {
    // 1. Save to DB FIRST (important)
    await pool.query(
      "INSERT INTO appointments(name, email, phone, appointment_time) VALUES($1,$2,$3,$4)",
      [name, email, phone, appointmentTime]
    );

    console.log("✅ Saved to DB");

    // 2. Email transporter (FIXED CONFIG)
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

    // 3. Send email
    await transporter.sendMail({
      from: `"Booking System" <${process.env.EMAIL_USER}>`,
      to: process.env.EMAIL_USER,
      subject: "New Appointment Booking",
      html: `
        <h3>New Appointment Booking</h3>
        <p><b>Name:</b> ${name}</p>
        <p><b>Email:</b> ${email}</p>
        <p><b>Phone:</b> ${phone}</p>
        <p><b>Time:</b> ${appointmentTime}</p>
      `,
    });

    console.log("📩 Email sent");

    return res.status(201).json({
      message: "Appointment booked successfully",
    });

  } catch (error) {
    console.error("❌ ERROR:", error.message);

    return res.status(500).json({
      message: "Appointment saved but email failed",
    });
  }
};