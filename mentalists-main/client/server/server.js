const express = require("express")
const cors = require("cors")
const dotenv = require("dotenv")
const contactRoutes = require("./routes/contact")

// Load environment variables
dotenv.config()

const app = express()
const PORT = process.env.PORT || 5000

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

// Health check route
app.get("/api/health", (req, res) => {
  console.log("✅ Health check route hit!")
  res.status(200).json({ message: "Server is running!" })
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
})
