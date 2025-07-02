const express = require("express")
const nodemailer = require("nodemailer")
const router = express.Router()

// Create transporter optimized for Node.js 22
const createTransporter = () => {
  console.log("🔧 Creating email transporter for Node.js 22...")
  console.log("📧 Email user:", process.env.EMAIL_USER)
  console.log("🔑 Email pass exists:", !!process.env.EMAIL_PASS)

  if (!process.env.EMAIL_USER || !process.env.EMAIL_PASS) {
    throw new Error("Email credentials not found in environment variables")
  }

  return nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 587,
    secure: false,
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
    tls: {
      ciphers: "SSLv3",
      rejectUnauthorized: false,
    },
    connectionTimeout: 60000,
    greetingTimeout: 30000,
    socketTimeout: 60000,
  })
}

router.post("/contact", async (req, res) => {
  console.log("🎯 Contact route hit!")
  console.log("📝 Request body:", req.body)

  try {
    const { name, phone, email, message } = req.body

    // Validate required fields
    if (!name || !phone || !email || !message) {
      console.log("❌ Validation failed: Missing fields")
      return res.status(400).json({
        success: false,
        message: "All fields are required",
      })
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(email)) {
      console.log("❌ Validation failed: Invalid email")
      return res.status(400).json({
        success: false,
        message: "Please provide a valid email address",
      })
    }

    console.log("✅ Validation passed, creating transporter...")
    const transporter = createTransporter()

    // 📧 EMAIL 1: TO YOU (INSTITUTE) - Query notification with person's details
    const instituteNotificationEmail = {
      from: `"SWIS NGO Contact Form" <${process.env.EMAIL_USER}>`,
      to: "gudhakaj@gmail.com", // Your institute email
      subject: `🔔 New Query from ${name} - Contact Form`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; border: 1px solid #ddd; border-radius: 8px; overflow: hidden;">
          <!-- Header -->
          <div style="background: linear-gradient(135deg, #007bff, #0056b3); color: white; padding: 20px; text-align: center;">
            <h1 style="margin: 0; font-size: 24px;">🔔 New Contact Query</h1>
            <p style="margin: 5px 0 0 0; opacity: 0.9;">SWIS Foundation Contact Form</p>
          </div>
          
          <!-- Person's Details -->
          <div style="padding: 20px; background-color: #f8f9fa;">
            <h2 style="color: #007bff; margin-top: 0; border-bottom: 2px solid #007bff; padding-bottom: 10px;">
              👤 Person Details
            </h2>
            <div style="background: white; padding: 15px; border-radius: 5px; margin: 10px 0;">
              <p style="margin: 8px 0;"><strong>📛 Name:</strong> ${name}</p>
              <p style="margin: 8px 0;"><strong>📞 Phone:</strong> ${phone}</p>
              <p style="margin: 8px 0;"><strong>📧 Email:</strong> <a href="mailto:${email}" style="color: #007bff;">${email}</a></p>
            </div>
          </div>
          
          <!-- Query Message -->
          <div style="padding: 20px;">
            <h2 style="color: #007bff; margin-top: 0; border-bottom: 2px solid #007bff; padding-bottom: 10px;">
              💬 Their Query
            </h2>
            <div style="background-color: #fff; padding: 20px; border: 1px solid #dee2e6; border-radius: 5px; border-left: 4px solid #007bff;">
              <p style="line-height: 1.6; color: #333; margin: 0; font-size: 16px;">${message}</p>
            </div>
          </div>
          
          <!-- Action Buttons -->
          <div style="padding: 20px; background-color: #f8f9fa; text-align: center;">
            <a href="mailto:${email}?subject=Re: Your query to SWIS Foundation&body=Dear ${name},%0A%0AThank you for contacting SWIS Foundation.%0A%0A" 
               style="display: inline-block; background-color: #007bff; color: white; padding: 12px 24px; text-decoration: none; border-radius: 5px; margin: 5px;">
              📧 Reply to ${name}
            </a>
            <a href="tel:${phone}" 
               style="display: inline-block; background-color: #28a745; color: white; padding: 12px 24px; text-decoration: none; border-radius: 5px; margin: 5px;">
              📞 Call ${name}
            </a>
          </div>
          
          <!-- Footer -->
          <div style="padding: 15px; background-color: #e9ecef; text-align: center; font-size: 12px; color: #6c757d;">
            <p style="margin: 0;">📅 Received on: ${new Date().toLocaleString()}</p>
            <p style="margin: 5px 0 0 0;">🌐 From: SWIS NGO Contact Form</p>
          </div>
        </div>
      `,
      text: `
        🔔 NEW CONTACT QUERY - SWIS FOUNDATION
        
        👤 PERSON DETAILS:
        Name: ${name}
        Phone: ${phone}
        Email: ${email}
        
        💬 THEIR QUERY:
        ${message}
        
        📅 Received: ${new Date().toLocaleString()}
        
        Reply to them at: ${email}
        Call them at: ${phone}
      `,
    }

    // 📧 EMAIL 2: TO PERSON - Acknowledgment that query was received
    const acknowledgmentEmail = {
      from: `"SWIS Foundation" <${process.env.EMAIL_USER}>`,
      to: email, // Person who filled the form
      subject: "✅ Query Received - SWIS Foundation",
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; border: 1px solid #ddd; border-radius: 8px; overflow: hidden;">
          <!-- Header -->
          <div style="background: linear-gradient(135deg, #28a745, #1e7e34); color: white; padding: 20px; text-align: center;">
            <h1 style="margin: 0; font-size: 24px;">✅ Query Received!</h1>
            <p style="margin: 5px 0 0 0; opacity: 0.9;">Thank you for contacting SWIS Foundation</p>
          </div>
          
          <!-- Personal Greeting -->
          <div style="padding: 20px;">
            <h2 style="color: #28a745; margin-top: 0;">Dear ${name},</h2>
            <p style="font-size: 16px; line-height: 1.6; color: #333;">
              Thank you for reaching out to <strong>SWIS Foundation</strong>! We have successfully received your query and appreciate you taking the time to contact us.
            </p>
          </div>
          
          <!-- Query Summary -->
          <div style="padding: 0 20px 20px 20px;">
            <div style="background-color: #f8f9fa; padding: 15px; border-radius: 5px; border-left: 4px solid #28a745;">
              <h3 style="color: #28a745; margin-top: 0;">📝 Your Query Summary:</h3>
              <p style="font-style: italic; color: #555; margin: 0;">"${message}"</p>
            </div>
          </div>
          
          <!-- What Happens Next -->
          <div style="padding: 0 20px 20px 20px;">
            <h3 style="color: #007bff;">🔄 What happens next?</h3>
            <ul style="color: #333; line-height: 1.6;">
              <li>✅ Our team will review your query carefully</li>
              <li>📞 We will get back to you within 24-48 hours</li>
              <li>💬 You may receive a call or email response</li>
              <li>🤝 We're here to help with your needs</li>
            </ul>
          </div>
          
          <!-- Contact Info -->
          <div style="padding: 20px; background-color: #f8f9fa;">
            <h3 style="color: #007bff; margin-top: 0;">📞 Need Immediate Help?</h3>
            <div style="background: white; padding: 15px; border-radius: 5px;">
              <p style="margin: 8px 0;"><strong>📧 Email:</strong> swisinstitute@gmail.com</p>
              <p style="margin: 8px 0;"><strong>📞 Phone:</strong> +91 848 200 4559</p>
              <p style="margin: 8px 0;"><strong>🏢 Address:</strong> 1-24-607/1, First Floor, Road No. 5, Maruthi Nagar Colony, Lothkunta, Hyderabad 500015, Telangana - India</p>
            </div>
          </div>
          
          <!-- Footer -->
          <div style="padding: 20px; background-color: #e9ecef; text-align: center;">
            <p style="margin: 0; color: #333; font-weight: bold;">Best regards,</p>
            <p style="margin: 5px 0; color: #007bff; font-weight: bold;">SWIS Foundation Team</p>
            <p style="margin: 10px 0 0 0; font-size: 12px; color: #6c757d;">
              This is an automated acknowledgment. Please do not reply to this email.
            </p>
          </div>
        </div>
      `,
      text: `
        ✅ QUERY RECEIVED - SWIS FOUNDATION
        
        Dear ${name},
        
        Thank you for contacting SWIS Foundation!
        
        Your Query: "${message}"
        
        WHAT HAPPENS NEXT:
        ✅ Our team will review your query
        📞 We'll respond within 24-48 hours
        💬 You'll receive a call or email
        
        NEED IMMEDIATE HELP?
        📧 Email: swisinstitute@gmail.com
        📞 Phone: +91 848 200 4559
        
        Best regards,
        SWIS Foundation Team
        
        (This is an automated acknowledgment)
      `,
    }

    console.log("📧 Sending emails...")

    // Send notification to institute (YOU)
    console.log("📤 Sending query notification to institute...")
    await transporter.sendMail(instituteNotificationEmail)
    console.log("✅ Query notification sent to institute!")

    // Send acknowledgment to person
    console.log("📤 Sending acknowledgment to person...")
    await transporter.sendMail(acknowledgmentEmail)
    console.log("✅ Acknowledgment sent to person!")

    res.status(200).json({
      success: true,
      message: "Message sent successfully! We will get back to you soon.",
    })
  } catch (error) {
    console.error("❌ Detailed Error:", error)
    console.error("❌ Error Code:", error.code)
    console.error("❌ Error Command:", error.command)

    let errorMessage = "Failed to send message. Please try again later."

    if (error.code === "EAUTH") {
      errorMessage = "Email authentication failed. Please check your Gmail app password."
      console.error("🔑 Gmail authentication failed!")
    } else if (error.code === "ESOCKET" || error.code === "ECONNECTION") {
      errorMessage = "Connection error. Please check your internet connection."
      console.error("🌐 Network connection error!")
    } else if (error.code === "ETIMEDOUT") {
      errorMessage = "Connection timeout. Please try again."
      console.error("⏰ Connection timeout!")
    } else if (error.message.includes("certificate")) {
      errorMessage = "SSL certificate error. Please try again."
      console.error("🔒 SSL certificate error!")
    }

    res.status(500).json({
      success: false,
      message: errorMessage,
      error: process.env.NODE_ENV === "development" ? error.message : undefined,
    })
  }
})

module.exports = router
