const express = require("express")
const cors = require("cors")
const dotenv = require("dotenv")
const mongoose = require("mongoose")
const contactRoutes = require("./routes/contact")
const volunteerRoutes = require("./routes/volunteer")

// Load environment variables
dotenv.config()

const app = express()
const PORT = process.env.PORT || 5000

// Connect to MongoDB
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost:27017/swis-ngo", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})

mongoose.connection.on("connected", () => {
  console.log("✅ Connected to MongoDB")
})

mongoose.connection.on("error", (err) => {
  console.error("❌ MongoDB connection error:", err)
})

// Middleware
app.use(
  cors({
    origin: "http://localhost:3000",
    credentials: true,
  }),
)

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

// Routes
app.use("/api", contactRoutes)
app.use("/api", volunteerRoutes)

// Health check route
app.get("/api/health", (req, res) => {
  console.log("✅ Health check route hit!")
  res.status(200).json({
    message: "Server is running!",
    endpoints: {
      contact: "/api/contact",
      queries: "/api/queries",
      volunteer: "/api/join",
      applications: "/api/applications",
    },
  })
})

// Error handling middleware
app.use((err, req, res, next) => {
  console.error("❌ Server Error:", err.stack)
  res.status(500).json({
    success: false,
    message: "Something went wrong!",
  })
})

// Start server
app.listen(PORT, () => {
  console.log(`🚀 Server running on http://localhost:${PORT}`)
  console.log(`🔗 Health check: http://localhost:${PORT}/api/health`)
  console.log(`📧 Contact endpoint: http://localhost:${PORT}/api/contact`)
  console.log(`📋 View queries: http://localhost:${PORT}/api/queries`)
  console.log(`🙋‍♂️ Volunteer endpoint: http://localhost:${PORT}/api/join`)
  console.log(`👥 View applications: http://localhost:${PORT}/api/applications`)
})
