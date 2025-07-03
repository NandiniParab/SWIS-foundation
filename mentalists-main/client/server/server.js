const express = require("express")
const cors = require("cors")
const dotenv = require("dotenv")
const mongoose = require("mongoose")

// Load environment variables first
dotenv.config()

const app = express()
const PORT = process.env.PORT || 5000

// MongoDB Connection
const connectDB = async () => {
  try {
    console.log("🔗 Connecting to MongoDB...")

    const conn = await mongoose.connect(process.env.MONGODB_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })

    console.log(`✅ MongoDB Connected: ${conn.connection.host}`)
    console.log(`📊 Database Name: ${conn.connection.name}`)
  } catch (error) {
    console.error("❌ MongoDB Connection Error:", error.message)
    process.exit(1)
  }
}

// Connect to MongoDB
connectDB()

// Middleware
app.use(
  cors({
    origin: "http://localhost:3000",
    credentials: true,
  }),
)

app.use(express.json({ limit: "10mb" }))
app.use(express.urlencoded({ extended: true, limit: "10mb" }))

// Import routes
const contactRoutes = require("./routes/contact")
const volunteerSimpleRoutes = require("./routes/volunteer-simple")
const volunteerRoutes = require("./routes/volunteer")

// Use routes
app.use("/api", contactRoutes)
app.use("/api", volunteerSimpleRoutes)
app.use("/api", volunteerRoutes)

// Health check route
app.get("/api/health", (req, res) => {
  console.log("✅ Health check route hit!")
  res.status(200).json({
    success: true,
    message: "SWIS Foundation Server is running!",
    database: mongoose.connection.readyState === 1 ? "Connected" : "Disconnected",
    endpoints: {
      contact: "/api/contact",
      volunteerSimple: "/api/volunteer-simple",
      volunteer: "/api/join",
      queries: "/api/queries",
      applications: "/api/applications",
    },
    timestamp: new Date().toISOString(),
  })
})

// 404 handler
app.use("*", (req, res) => {
  res.status(404).json({
    success: false,
    message: "Route not found",
  })
})

// Error handling middleware
app.use((err, req, res, next) => {
  console.error("❌ Server Error:", err.stack)
  res.status(500).json({
    success: false,
    message: "Internal server error",
    error: process.env.NODE_ENV === "development" ? err.message : undefined,
  })
})

// Graceful shutdown
process.on("SIGINT", async () => {
  console.log("\n🔄 Shutting down gracefully...")
  await mongoose.connection.close()
  console.log("✅ MongoDB connection closed.")
  process.exit(0)
})

// Start server
app.listen(PORT, () => {
  console.log(`🚀 SWIS Foundation Server running on http://localhost:${PORT}`)
  console.log(`🔗 Health check: http://localhost:${PORT}/api/health`)
  console.log(`📧 Contact endpoint: http://localhost:${PORT}/api/contact`)
  console.log(`🙋‍♂️ Volunteer Simple endpoint: http://localhost:${PORT}/api/volunteer-simple`)
  console.log(`🙋‍♂️ Volunteer Full endpoint: http://localhost:${PORT}/api/join`)
  console.log(`📁 Environment: ${process.env.NODE_ENV || "development"}`)
  console.log(`🗄️ Database: ${mongoose.connection.readyState === 1 ? "Connected" : "Connecting..."}`)
})
