const express = require("express")
const nodemailer = require("nodemailer")
const router = express.Router()

// Create transporter for email
const createTransporter = () => {
  console.log("🔧 Creating email transporter...")

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

// Helper function to get initiative full name
const getInitiativeName = (code) => {
  const initiatives = {
    ccae: "CCAE - Child Care and Education",
    csii: "CSII - Community Skills and Income Initiative",
    csaa: "CSAA - Community Service and Awareness",
    general: "General Volunteer",
  }
  return initiatives[code] || code
}

// POST route to handle simple volunteer application submission
router.post("/volunteer-simple", async (req, res) => {
  console.log("🎯 Simple volunteer application route hit!")
  console.log("📝 Request body:", req.body)

  try {
    const { domain, firstName, lastName, contact, dateOfBirth, email, whyJoinUs, questionsForUs, resumeFileName } =
      req.body

    // Validate required fields
    if (!domain || !firstName || !lastName || !contact || !dateOfBirth || !email || !whyJoinUs) {
      console.log("❌ Validation failed: Missing required fields")
      return res.status(400).json({
        success: false,
        message: "All required fields must be filled",
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

    // Calculate age from date of birth
    const birthDate = new Date(dateOfBirth)
    const today = new Date()
    let age = today.getFullYear() - birthDate.getFullYear()
    const monthDiff = today.getMonth() - birthDate.getMonth()
    if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birthDate.getDate())) {
      age--
    }

    if (age < 16 || age > 100) {
      console.log("❌ Validation failed: Invalid age")
      return res.status(400).json({
        success: false,
        message: "Applicant must be between 16 and 100 years old",
      })
    }

    // Generate a simple application ID
    const applicationId = `SWIS-${Date.now()}-${Math.random().toString(36).substr(2, 9).toUpperCase()}`
    console.log("✅ Generated Application ID:", applicationId)

    console.log("✅ Validation passed, creating transporter...")
    const transporter = createTransporter()

    // 📧 EMAIL 1: TO SWIS INSTITUTE - Volunteer application notification
    const instituteNotificationEmail = {
      from: `"SWIS NGO Volunteer Application" <${process.env.EMAIL_USER}>`,
      to: "parabnandini7412@gmail.com",
      subject: `🙋‍♂️ New Volunteer Application - ${firstName} ${lastName} (${getInitiativeName(domain)})`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; border: 1px solid #ddd; border-radius: 12px; overflow: hidden;">
          <!-- Header -->
          <div style="background: linear-gradient(135deg, #1e40af, #3b82f6); color: white; padding: 25px; text-align: center;">
            <h1 style="margin: 0; font-size: 28px;">🙋‍♂️ New Volunteer Application</h1>
            <p style="margin: 8px 0 0 0; opacity: 0.9; font-size: 16px;">SWIS Foundation - Join Us Application</p>
          </div>
          
          <!-- Personal Information -->
          <div style="padding: 25px; background-color: #f8fafc;">
            <h2 style="color: #1e40af; margin-top: 0; border-bottom: 3px solid #1e40af; padding-bottom: 10px;">
              👤 Applicant Information
            </h2>
            <div style="background: white; padding: 20px; border-radius: 8px; margin: 15px 0; border-left: 4px solid #3b82f6;">
              <p style="margin: 8px 0;"><strong>📛 Name:</strong> ${firstName} ${lastName}</p>
              <p style="margin: 8px 0;"><strong>🎂 Age:</strong> ${age} years</p>
              <p style="margin: 8px 0;"><strong>📧 Email:</strong> <a href="mailto:${email}" style="color: #1e40af;">${email}</a></p>
              <p style="margin: 8px 0;"><strong>📞 Contact:</strong> <a href="tel:${contact}" style="color: #1e40af;">${contact}</a></p>
              <p style="margin: 8px 0;"><strong>📅 Date of Birth:</strong> ${new Date(dateOfBirth).toLocaleDateString()}</p>
              <p style="margin: 8px 0;"><strong>🎯 Domain:</strong> <span style="background: #3b82f6; color: white; padding: 4px 12px; border-radius: 6px; font-size: 14px;">${getInitiativeName(domain)}</span></p>
              <p style="margin: 8px 0;"><strong>🆔 Application ID:</strong> ${applicationId}</p>
              ${resumeFileName ? `<p style="margin: 8px 0;"><strong>📄 Resume:</strong> ${resumeFileName}</p>` : ""}
            </div>
          </div>
          
          <!-- Motivation -->
          <div style="padding: 25px;">
            <h2 style="color: #3b82f6; margin-top: 0; border-bottom: 3px solid #3b82f6; padding-bottom: 10px;">
              💭 Why They Want to Join
            </h2>
            <div style="background-color: #f8fafc; padding: 20px; border-radius: 8px; margin: 15px 0; border-left: 4px solid #3b82f6;">
              <p style="line-height: 1.6; color: #333; margin: 0; font-size: 16px;">${whyJoinUs}</p>
            </div>
          </div>
          
          ${
            questionsForUs
              ? `
          <!-- Questions -->
          <div style="padding: 25px; background-color: #f8fafc;">
            <h2 style="color: #1e40af; margin-top: 0; border-bottom: 3px solid #1e40af; padding-bottom: 10px;">
              ❓ Questions for Us
            </h2>
            <div style="background: white; padding: 20px; border-radius: 8px; margin: 15px 0; border-left: 4px solid #3b82f6;">
              <p style="line-height: 1.6; color: #333; margin: 0; font-size: 16px;">${questionsForUs}</p>
            </div>
          </div>
          `
              : ""
          }
          
          <!-- Action Buttons -->
          <div style="padding: 25px; background-color: #e5e7eb; text-align: center;">
            <a href="mailto:${email}?subject=Re: Your volunteer application to SWIS Foundation&body=Dear ${firstName},%0A%0AThank you for your application to SWIS Foundation for ${getInitiativeName(domain)}.%0A%0A" 
               style="display: inline-block; background: linear-gradient(135deg, #1e40af, #3b82f6); color: white; padding: 15px 30px; text-decoration: none; border-radius: 8px; margin: 8px; font-weight: bold;">
              📧 Contact ${firstName}
            </a>
            <a href="tel:${contact}" 
               style="display: inline-block; background: linear-gradient(135deg, #3b82f6, #60a5fa); color: white; padding: 15px 30px; text-decoration: none; border-radius: 8px; margin: 8px; font-weight: bold;">
              📞 Call ${firstName}
            </a>
          </div>
          
          <!-- Footer -->
          <div style="padding: 20px; background-color: #1e40af; text-align: center; color: white;">
            <p style="margin: 0; font-size: 14px;">📅 Applied on: ${new Date().toLocaleString()}</p>
            <p style="margin: 8px 0 0 0; font-size: 14px; opacity: 0.8;">🌐 From: SWIS NGO Join Us Form</p>
          </div>
        </div>
      `,
    }

    // 📧 EMAIL 2: TO VOLUNTEER - Acknowledgment
    const volunteerAcknowledgmentEmail = {
      from: `"SWIS Foundation" <${process.env.EMAIL_USER}>`,
      to: email,
      subject: "🎉 Application Received - SWIS Foundation",
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; border: 1px solid #ddd; border-radius: 12px; overflow: hidden;">
          <!-- Header -->
          <div style="background: linear-gradient(135deg, #1e40af, #3b82f6); color: white; padding: 25px; text-align: center;">
            <h1 style="margin: 0; font-size: 28px;">🎉 Application Received!</h1>
            <p style="margin: 8px 0 0 0; opacity: 0.9; font-size: 16px;">Welcome to the SWIS Foundation Family</p>
          </div>
          
          <!-- Personal Greeting -->
          <div style="padding: 25px; background-color: #f8fafc;">
            <h2 style="color: #1e40af; margin-top: 0;">Dear ${firstName},</h2>
            <p style="font-size: 16px; line-height: 1.6; color: #333;">
              Thank you for your interest in volunteering with <strong>SWIS Foundation</strong>! 
              We have successfully received your application for <strong>${getInitiativeName(domain)}</strong>.
            </p>
            <div style="background: linear-gradient(135deg, #3b82f6, #93c5fd); padding: 15px; border-radius: 8px; margin: 20px 0;">
              <p style="margin: 0; font-weight: bold; color: white;">
                <strong>Your Application Reference ID:</strong> ${applicationId}
              </p>
            </div>
          </div>
          
          <!-- Application Summary -->
          <div style="padding: 0 25px 25px 25px;">
            <div style="background: white; padding: 20px; border-radius: 8px; border-left: 4px solid #1e40af;">
              <h3 style="color: #1e40af; margin-top: 0;">📋 Your Application Summary:</h3>
              <p style="margin: 5px 0;"><strong>Domain:</strong> ${getInitiativeName(domain)}</p>
              <p style="margin: 5px 0;"><strong>Age:</strong> ${age} years</p>
              <p style="margin: 5px 0;"><strong>Contact:</strong> ${contact}</p>
              <p style="margin: 5px 0;"><strong>Email:</strong> ${email}</p>
              ${resumeFileName ? `<p style="margin: 5px 0;"><strong>Resume:</strong> ${resumeFileName}</p>` : ""}
            </div>
          </div>
          
          <!-- What Happens Next -->
          <div style="padding: 0 25px 25px 25px;">
            <h3 style="color: #3b82f6;">🔄 What happens next?</h3>
            <div style="background-color: #f8fafc; padding: 20px; border-radius: 8px; border-left: 4px solid #3b82f6;">
              <ul style="color: #333; line-height: 1.8; margin: 0; padding-left: 20px;">
                <li>✅ Our team will review your application</li>
                <li>📞 We will contact you within 3-5 business days</li>
                <li>🤝 If selected, we'll schedule an orientation session</li>
                <li>🎯 You'll be matched with projects that fit your interests</li>
                <li>🌟 Start making a difference in your community!</li>
              </ul>
            </div>
          </div>
          
          <!-- Contact Info -->
          <div style="padding: 25px; background-color: #f8fafc;">
            <h3 style="color: #1e40af; margin-top: 0;">📞 Questions?</h3>
            <div style="background: white; padding: 20px; border-radius: 8px; border-left: 4px solid #3b82f6;">
              <p style="margin: 8px 0;"><strong>📧 Email:</strong> <a href="mailto:swisinstitute@gmail.com" style="color: #1e40af;">swisinstitute@gmail.com</a></p>
              <p style="margin: 8px 0;"><strong>📞 Phone:</strong> <a href="tel:+918482004559" style="color: #1e40af;">+91 848 200 4559</a></p>
            </div>
          </div>
          
          <!-- Footer -->
          <div style="padding: 25px; background: linear-gradient(135deg, #1e40af, #3b82f6); text-align: center; color: white;">
            <p style="margin: 0; font-weight: bold; font-size: 18px;">Welcome to the SWIS Family!</p>
            <p style="margin: 8px 0; font-weight: bold; color: #93c5fd;">SWIS Foundation Team</p>
            <p style="margin: 15px 0 0 0; font-size: 12px; opacity: 0.8;">
              This is an automated acknowledgment. Please save this email for your records.
            </p>
          </div>
        </div>
      `,
    }

    console.log("📧 Sending emails...")

    // Send notification to institute
    console.log("📤 Sending volunteer application notification to institute...")
    await transporter.sendMail(instituteNotificationEmail)
    console.log("✅ Volunteer application notification sent to institute!")

    // Send acknowledgment to volunteer
    console.log("📤 Sending acknowledgment to volunteer...")
    await transporter.sendMail(volunteerAcknowledgmentEmail)
    console.log("✅ Acknowledgment sent to volunteer!")

    res.status(200).json({
      success: true,
      message:
        "Thank you for your application! We have received your submission and will contact you within 3-5 business days.",
      applicationId: applicationId,
    })
  } catch (error) {
    console.error("❌ Detailed Error:", error)

    let errorMessage = "Failed to submit application. Please try again later."

    if (error.code === "EAUTH") {
      errorMessage = "Email authentication failed. Please check your Gmail app password."
    } else if (error.code === "ESOCKET" || error.code === "ECONNECTION") {
      errorMessage = "Connection error. Please check your internet connection."
    } else if (error.code === "ETIMEDOUT") {
      errorMessage = "Connection timeout. Please try again."
    } else if (error.message.includes("certificate")) {
      errorMessage = "SSL certificate error. Please try again."
    }

    res.status(500).json({
      success: false,
      message: errorMessage,
      error: process.env.NODE_ENV === "development" ? error.message : undefined,
    })
  }
})

module.exports = router
