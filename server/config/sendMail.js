// sendEmail.js
import nodemailer from "nodemailer";
import dotenv from "dotenv";
import welcomeEmailTemplate from "../utils/welcomeEmailTemplate.js";

dotenv.config();

const transporter = nodemailer.createTransport({
  host: "smtp-relay.brevo.com", // Brevo's SMTP server
  port: 587,
  secure: false, // true for 465, false for other ports like 587
  auth: {
    user: process.env.BREVO_USER, // Your Brevo email
    pass: process.env.BREVO_PASS, // Your Brevo SMTP key
  },
});

// 2. Define a function to send the email
export async function sendMail({ sendTo, subject, html }) {
  const mailOptions = {
    from: "anventerprises11@gmail.com", // Important: Use an email from a domain you own/control
    to: sendTo, // The recipient's email address
    subject: subject, // Subject line

    html: html, // HTML body
  };

  try {
    // 3. Send the email
    const info = await transporter.sendMail(mailOptions);
    console.log("Email sent successfully!");
    console.log("Message ID:", info.messageId);
    return info;
  } catch (error) {
    console.error("Error sending email:", error);
    throw error;
  }
}

// Function to send welcome email
export async function sendWelcomeEmail({ sendTo, name, verifyUrl }) {
  const welcomeHtml = welcomeEmailTemplate({ name, verifyUrl });

  return await sendMail({
    sendTo,
    subject: "Welcome to ANV Enterprise - Please Verify Your Email",
    html: welcomeHtml,
  });
}

// Legacy Resend implementation (commented out for backup)
/*
import { Resend } from "resend";

if (!process.env.RESEND_API) {
  throw new Error("RESEND_API is required");
}
const resend = new Resend(process.env.RESEND_API);

const sendMail = async ({ sendTo, subject, html }) => {
  try {
    const { data, error } = await resend.emails.send({
      from: "ANV Enterprise <onboarding@resend.dev>",
      to: [sendTo],
      subject: subject,
      html: html,
    });
    if (error) {
      return console.error({ error });
    }
    console.log({ data });
  } catch (error) {
    console.log(error);
  }
};

export default sendMail;
*/
