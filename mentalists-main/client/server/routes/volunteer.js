const express = require("express")
const nodemailer = require("nodemailer")
const Volunteer = require("../models/Volunteer")
const router = express.Router()

// Create transporter (same as contact form)
const createTransporter = () => {
  console.log("🔧 Creating email transporter for volunteer applications...")

  if (!process.env.EMAIL_USER || !process.env.EMAIL_PASS) {
    throw new Error("Email credentials not found in environment variables")
  }

  return nodemailer.createTransporter({
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
    ccae: "Child Care and Education (CCAE)",
    csaa: "Community Service and Awareness (CSAA)",
    csii: "Community Skills and Income Initiative (CSII)",
    general: "General Volunteer",
  }
  return initiatives[code] || code
}

// GET route to view all volunteer applications (for admin)
router.get("/applications", async (req, res) => {
  try {
    const applications = await Volunteer.find().sort({ appliedAt: -1 })

    res.status(200).json({
      success: true,
      count: applications.length,
      data: applications,
    })
  } catch (error) {
    console.error("Error fetching volunteer applications:", error)
    res.status(500).json({
      success: false,
      message: "Failed to fetch volunteer applications",
    })
  }
})

// GET route to view single volunteer application
router.get("/applications/:id", async (req, res) => {
  try {
    const application = await Volunteer.findById(req.params.id)

    if (!application) {
      return res.status(404).json({
        success: false,
        message: "Volunteer application not found",
      })
    }

    res.status(200).json({
      success: true,
      data: application,
    })
  } catch (error) {
    console.error("Error fetching volunteer application:", error)
    res.status(500).json({
      success: false,
      message: "Failed to fetch volunteer application",
    })
  }
})

// PUT route to update volunteer application status
router.put("/applications/:id", async (req, res) => {
  try {
    const { status, priority, adminNotes } = req.body

    const updateData = {}
    if (status) updateData.status = status
    if (priority) updateData.priority = priority
    if (adminNotes) updateData.adminNotes = adminNotes
    if (status === "reviewed" || status === "accepted" || status === "rejected") {
      updateData.reviewedAt = new Date()
    }

    const application = await Volunteer.findByIdAndUpdate(req.params.id, updateData, { new: true })

    if (!application) {
      return res.status(404).json({
        success: false,
        message: "Volunteer application not found",
      })
    }

    res.status(200).json({
      success: true,
      data: application,
    })
  } catch (error) {
    console.error("Error updating volunteer application:", error)
    res.status(500).json({
      success: false,
      message: "Failed to update volunteer application",
    })
  }
})

// POST route to handle volunteer application submission
router.post("/join", async (req, res) => {
  console.log("🎯 Volunteer join route hit!")
  console.log("📝 Request body:", req.body)

  try {
    const {
      name,
      email,
      phone,
      age,
      city,
      state,
      initiative,
      motivation,
      skills,
      experience,
      availability,
      hoursPerWeek,
    } = req.body

    // Validate required fields
    if (
      !name ||
      !email ||
      !phone ||
      !age ||
      !city ||
      !state ||
      !initiative ||
      !motivation ||
      !skills ||
      !availability ||
      !hoursPerWeek
    ) {
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

    // Validate age
    if (age < 16 || age > 100) {
      console.log("❌ Validation failed: Invalid age")
      return res.status(400).json({
        success: false,
        message: "Age must be between 16 and 100",
      })
    }

    // Validate initiative
    const validInitiatives = ["ccae", "csaa", "csii", "general"]
    if (!validInitiatives.includes(initiative)) {
      console.log("❌ Validation failed: Invalid initiative")
      return res.status(400).json({
        success: false,
        message: "Please select a valid initiative",
      })
    }

    // Save to database
    console.log("💾 Saving volunteer application to database...")
    const newVolunteer = new Volunteer({
      name,
      email,
      phone,
      age,
      city,
      state,
      initiative,
      motivation,
      skills,
      experience: experience || "",
      availability,
      hoursPerWeek,
    })

    const savedVolunteer = await newVolunteer.save()
    console.log("✅ Volunteer application saved to database with ID:", savedVolunteer._id)

    console.log("✅ Validation passed, creating transporter...")
    const transporter = createTransporter()

    // 📧 EMAIL 1: TO SWIS INSTITUTE - New volunteer application notification
    const instituteNotificationEmail = {
      from: `"SWIS NGO Volunteer Application" <${process.env.EMAIL_USER}>`,
      to: "swisinstitute@gmail.com",
      subject: `🙋‍♂️ New Volunteer Application - ${getInitiativeName(initiative)}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; border: 1px solid #ddd; border-radius: 8px; overflow: hidden;">
          <!-- Header -->
          <div style="background: linear-gradient(135deg, #28a745, #1e7e34); color: white; padding: 20px; text-align: center;">
            <h1 style="margin: 0; font-size: 24px;">🙋‍♂️ New Volunteer Application</h1>
            <p style="margin: 5px 0 0 0; opacity: 0.9;">SWIS Foundation - Join Us Form</p>
          </div>
          
          <!-- Personal Details -->
          <div style="padding: 20px; background-color: #f8f9fa;">
            <h2 style="color: #28a745; margin-top: 0; border-bottom: 2px solid #28a745; padding-bottom: 10px;">
              👤 Personal Information
            </h2>
            <div style="background: white; padding: 15px; border-radius: 5px; margin: 10px 0;">
              <p style="margin: 8px 0;"><strong>📛 Name:</strong> ${name}</p>
              <p style="margin: 8px 0;"><strong>📧 Email:</strong> <a href="mailto:${email}" style="color: #28a745;">${email}</a></p>
              <p style="margin: 8px 0;"><strong>📞 Phone:</strong> <a href="tel:${phone}" style="color: #28a745;">${phone}</a></p>
              <p style="margin: 8px 0;"><strong>🎂 Age:</strong> ${age} years</p>
              <p style="margin: 8px 0;"><strong>🏙️ Location:</strong> ${city}, ${state}</p>
              <p style="margin: 8px 0;"><strong>🆔 Application ID:</strong> ${savedVolunteer._id}</p>
            </div>
          </div>
          
          <!-- Initiative & Availability -->
          <div style="padding: 20px;">
            <h2 style="color: #007bff; margin-top: 0; border-bottom: 2px solid #007bff; padding-bottom: 10px;">
              🎯 Initiative & Availability
            </h2>
            <div style="background-color: #f8f9fa; padding: 15px; border-radius: 5px; margin: 10px 0;">
              <p style="margin: 8px 0;"><strong>🎯 Initiative:</strong> <span style="background: #28a745; color: white; padding: 4px 8px; border-radius: 4px; font-size: 14px;">${getInitiativeName(initiative)}</span></p>
              <p style="margin: 8px 0;"><strong>📅 Availability:</strong> ${availability}</p>
              <p style="margin: 8px 0;"><strong>⏰ Hours per week:</strong> ${hoursPerWeek} hours</p>
            </div>
          </div>
          
          <!-- Motivation -->
          <div style="padding: 20px; background-color: #f8f9fa;">
            <h2 style="color: #dc3545; margin-top: 0; border-bottom: 2px solid #dc3545; padding-bottom: 10px;">
              💭 Why They Want to Join
            </h2>
            <div style="background-color: #fff; padding: 20px; border: 1px solid #dee2e6; border-radius: 5px; border-left: 4px solid #dc3545;">
              <p style="line-height: 1.6; color: #333; margin: 0; font-size: 16px;">${motivation}</p>
            </div>
          </div>
          
          <!-- Skills & Experience -->
          <div style="padding: 20px;">
            <h2 style="color: #6f42c1; margin-top: 0; border-bottom: 2px solid #6f42c1; padding-bottom: 10px;">
              🛠️ Skills & Experience
            </h2>
            <div style="background-color: #f8f9fa; padding: 15px; border-radius: 5px; margin: 10px 0;">
              <h4 style="color: #6f42c1; margin-top: 0;">Skills:</h4>
              <p style="margin: 5px 0; color: #333;">${skills}</p>
              ${
                experience
                  ? `
                <h4 style="color: #6f42c1; margin-top: 15px; margin-bottom: 5px;">Previous Experience:</h4>
                <p style="margin: 5px 0; color: #333;">${experience}</p>
              `
                  : ""
              }
            </div>
          </div>
          
          <!-- Action Buttons -->
          <div style="padding: 20px; background-color: #f8f9fa; text-align: center;">
            <a href="mailto:${email}?subject=Re: Your volunteer application to SWIS Foundation&body=Dear ${name},%0A%0AThank you for your interest in volunteering with SWIS Foundation for ${getInitiativeName(initiative)}.%0A%0A" 
               style="display: inline-block; background-color: #28a745; color: white; padding: 12px 24px; text-decoration: none; border-radius: 5px; margin: 5px;">
              📧 Contact ${name}
            </a>
            <a href="tel:${phone}" 
               style="display: inline-block; background-color: #007bff; color: white; padding: 12px 24px; text-decoration: none; border-radius: 5px; margin: 5px;">
              📞 Call ${name}
            </a>
          </div>
          
          <!-- Footer -->
          <div style="padding: 15px; background-color: #e9ecef; text-align: center; font-size: 12px; color: #6c757d;">
            <p style="margin: 0;">📅 Applied on: ${new Date().toLocaleString()}</p>
            <p style="margin: 5px 0 0 0;">🌐 From: SWIS NGO Join Us Form</p>
          </div>
        </div>
      `,
    }

    // 📧 EMAIL 2: TO VOLUNTEER - Application acknowledgment
    const volunteerAcknowledgmentEmail = {
      from: `"SWIS Foundation" <${process.env.EMAIL_USER}>`,
      to: email,
      subject: "🎉 Volunteer Application Received - SWIS Foundation",
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; border: 1px solid #ddd; border-radius: 8px; overflow: hidden;">
          <!-- Header -->
          <div style="background: linear-gradient(135deg, #28a745, #1e7e34); color: white; padding: 20px; text-align: center;">
            <h1 style="margin: 0; font-size: 24px;">🎉 Application Received!</h1>
            <p style="margin: 5px 0 0 0; opacity: 0.9;">Welcome to the SWIS Foundation Family</p>
          </div>
          
          <!-- Personal Greeting -->
          <div style="padding: 20px;">
            <h2 style="color: #28a745; margin-top: 0;">Dear ${name},</h2>
            <p style="font-size: 16px; line-height: 1.6; color: #333;">
              Thank you for your interest in volunteering with <strong>SWIS Foundation</strong>! We are thrilled to receive your application for <strong>${getInitiativeName(initiative)}</strong>.
            </p>
            <p style="background-color: #f8f9fa; padding: 10px; border-radius: 5px; margin: 15px 0;">
              <strong>Your Application Reference ID:</strong> ${savedVolunteer._id}
            </p>
          </div>
          
          <!-- Application Summary -->
          <div style="padding: 0 20px 20px 20px;">
            <div style="background-color: #f8f9fa; padding: 15px; border-radius: 5px; border-left: 4px solid #28a745;">
              <h3 style="color: #28a745; margin-top: 0;">📋 Your Application Summary:</h3>
              <p style="margin: 5px 0;"><strong>Initiative:</strong> ${getInitiativeName(initiative)}</p>
              <p style="margin: 5px 0;"><strong>Availability:</strong> ${availability}</p>
              <p style="margin: 5px 0;"><strong>Time Commitment:</strong> ${hoursPerWeek} hours per week</p>
              <p style="margin: 5px 0;"><strong>Location:</strong> ${city}, ${state}</p>
            </div>
          </div>
          
          <!-- What Happens Next -->
          <div style="padding: 0 20px 20px 20px;">
            <h3 style="color: #007bff;">🔄 What happens next?</h3>
            <ul style="color: #333; line-height: 1.6;">
              <li>✅ Our volunteer coordinator will review your application</li>
              <li>📞 We will contact you within 3-5 business days</li>
              <li>🤝 If selected, we'll schedule an orientation session</li>
              <li>🎯 You'll be matched with projects that fit your skills and interests</li>
              <li>🌟 Start making a difference in your community!</li>
            </ul>
          </div>
          
          <!-- Initiative Information -->
          <div style="padding: 20px; background-color: #f8f9fa;">
            <h3 style="color: #007bff; margin-top: 0;">📚 About ${getInitiativeName(initiative)}</h3>
            <div style="background: white; padding: 15px; border-radius: 5px;">
              ${
                initiative === "ccae"
                  ? `
                <p style="margin: 0; color: #333;">Child Care and Education focuses on providing quality education and care for underprivileged children, ensuring they have access to learning opportunities and a safe environment.</p>
              `
                  : initiative === "csaa"
                    ? `
                <p style="margin: 0; color: #333;">Community Service and Awareness works on creating awareness about social issues and organizing community service activities to address local challenges.</p>
              `
                    : initiative === "csii"
                      ? `
                <p style="margin: 0; color: #333;">Community Skills and Income Initiative focuses on skill development and creating income opportunities for community members to achieve financial independence.</p>
              `
                      : `
                <p style="margin: 0; color: #333;">As a general volunteer, you'll have the opportunity to contribute to various initiatives based on your interests and our current needs across all our programs.</p>
              `
              }
            </div>
          </div>
          
          <!-- Contact Info -->
          <div style="padding: 20px;">
            <h3 style="color: #007bff; margin-top: 0;">📞 Questions?</h3>
            <div style="background: #f8f9fa; padding: 15px; border-radius: 5px;">
              <p style="margin: 8px 0;"><strong>📧 Email:</strong> swisinstitute@gmail.com</p>
              <p style="margin: 8px 0;"><strong>📞 Phone:</strong> +91 848 200 4559</p>
              <p style="margin: 8px 0;"><strong>🏢 Address:</strong> 1-24-607/1, First Floor, Road No. 5, Maruthi Nagar Colony, Lothkunta, Hyderabad 500015, Telangana - India</p>
            </div>
          </div>
          
          <!-- Footer -->
          <div style="padding: 20px; background-color: #e9ecef; text-align: center;">
            <p style="margin: 0; color: #333; font-weight: bold;">Welcome to the SWIS Family!</p>
            <p style="margin: 5px 0; color: #28a745; font-weight: bold;">SWIS Foundation Team</p>
            <p style="margin: 10px 0 0 0; font-size: 12px; color: #6c757d;">
              This is an automated acknowledgment. Please do not reply to this email.
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
      message: "Volunteer application submitted successfully! We will contact you soon.",
      applicationId: savedVolunteer._id,
    })
  } catch (error) {
    console.error("❌ Detailed Error:", error)

    let errorMessage = "Failed to submit volunteer application. Please try again later."

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
