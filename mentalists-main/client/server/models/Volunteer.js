const mongoose = require("mongoose")

const volunteerSchema = new mongoose.Schema(
  {
    // Personal Information
    name: {
      type: String,
      required: [true, "Name is required"],
      trim: true,
      maxlength: [100, "Name cannot exceed 100 characters"],
    },
    email: {
      type: String,
      required: [true, "Email is required"],
      trim: true,
      lowercase: true,
      validate: {
        validator: (v) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v),
        message: "Please enter a valid email address",
      },
    },
    phone: {
      type: String,
      required: [true, "Phone number is required"],
      trim: true,
      validate: {
        validator: (v) => /^[+]?[1-9][\d]{0,15}$/.test(v),
        message: "Please enter a valid phone number",
      },
    },
    dateOfBirth: {
      type: Date,
      required: [true, "Date of birth is required"],
      validate: {
        validator: (v) => {
          const age = Math.floor((Date.now() - v.getTime()) / (365.25 * 24 * 60 * 60 * 1000))
          return age >= 16 && age <= 100
        },
        message: "Age must be between 16 and 100 years",
      },
    },
    gender: {
      type: String,
      required: [true, "Gender is required"],
      enum: {
        values: ["male", "female", "other", "prefer-not-to-say"],
        message: "Gender must be one of: male, female, other, prefer-not-to-say",
      },
    },
    address: {
      street: {
        type: String,
        required: [true, "Street address is required"],
        trim: true,
        maxlength: [200, "Street address cannot exceed 200 characters"],
      },
      city: {
        type: String,
        required: [true, "City is required"],
        trim: true,
        maxlength: [50, "City name cannot exceed 50 characters"],
      },
      state: {
        type: String,
        required: [true, "State is required"],
        trim: true,
        maxlength: [50, "State name cannot exceed 50 characters"],
      },
      pincode: {
        type: String,
        required: [true, "Pincode is required"],
        trim: true,
        validate: {
          validator: (v) => /^[1-9][0-9]{5}$/.test(v),
          message: "Please enter a valid 6-digit pincode",
        },
      },
    },

    // Location Preference
    preferredLocation: {
      type: String,
      required: [true, "Preferred location is required"],
      enum: {
        values: ["hyderabad", "bangalore", "mumbai", "delhi", "chennai", "pune", "remote", "any"],
        message: "Please select a valid location preference",
      },
    },

    // Initiative Selection
    initiative: {
      type: String,
      required: [true, "Initiative selection is required"],
      enum: {
        values: ["ccae", "csaa", "csii", "general"],
        message: "Please select a valid initiative",
      },
    },

    // Professional Information
    education: {
      type: String,
      required: [true, "Education qualification is required"],
      trim: true,
      maxlength: [200, "Education details cannot exceed 200 characters"],
    },
    occupation: {
      type: String,
      required: [true, "Occupation is required"],
      trim: true,
      maxlength: [100, "Occupation cannot exceed 100 characters"],
    },
    organization: {
      type: String,
      trim: true,
      default: "",
      maxlength: [100, "Organization name cannot exceed 100 characters"],
    },

    // Experience and Skills
    pastExperience: {
      type: String,
      required: [true, "Past experience is required"],
      trim: true,
      maxlength: [1000, "Past experience cannot exceed 1000 characters"],
    },
    skills: {
      type: String,
      required: [true, "Skills are required"],
      trim: true,
      maxlength: [500, "Skills cannot exceed 500 characters"],
    },
    languagesSpoken: {
      type: [String],
      required: [true, "At least one language is required"],
      validate: {
        validator: (v) => v && v.length > 0,
        message: "Please select at least one language",
      },
    },

    // Motivation and Commitment
    whyJoinUs: {
      type: String,
      required: [true, "Motivation is required"],
      trim: true,
      maxlength: [1000, "Motivation cannot exceed 1000 characters"],
    },
    longTermCommitment: {
      type: String,
      required: [true, "Commitment duration is required"],
      enum: {
        values: ["3-months", "6-months", "1-year", "2-years", "long-term"],
        message: "Please select a valid commitment duration",
      },
    },

    // Availability
    availability: {
      type: String,
      required: [true, "Availability is required"],
      enum: {
        values: ["weekdays", "weekends", "both", "flexible"],
        message: "Please select a valid availability option",
      },
    },
    hoursPerWeek: {
      type: String,
      required: [true, "Hours per week is required"],
      enum: {
        values: ["1-5", "6-10", "11-20", "20+"],
        message: "Please select valid hours per week",
      },
    },
    preferredWorkingHours: {
      type: String,
      required: [true, "Preferred working hours is required"],
      enum: {
        values: ["morning", "afternoon", "evening", "flexible"],
        message: "Please select valid working hours",
      },
    },

    // Emergency Contact
    emergencyContact: {
      name: {
        type: String,
        required: [true, "Emergency contact name is required"],
        trim: true,
        maxlength: [100, "Emergency contact name cannot exceed 100 characters"],
      },
      relationship: {
        type: String,
        required: [true, "Emergency contact relationship is required"],
        trim: true,
        maxlength: [50, "Relationship cannot exceed 50 characters"],
      },
      phone: {
        type: String,
        required: [true, "Emergency contact phone is required"],
        trim: true,
        validate: {
          validator: (v) => /^[+]?[1-9][\d]{0,15}$/.test(v),
          message: "Please enter a valid emergency contact phone number",
        },
      },
    },

    // Additional Information
    hasTransportation: {
      type: Boolean,
      required: [true, "Transportation information is required"],
    },
    specialAccommodations: {
      type: String,
      trim: true,
      default: "",
      maxlength: [500, "Special accommodations cannot exceed 500 characters"],
    },
    references: {
      name: {
        type: String,
        trim: true,
        default: "",
        maxlength: [100, "Reference name cannot exceed 100 characters"],
      },
      contact: {
        type: String,
        trim: true,
        default: "",
        maxlength: [100, "Reference contact cannot exceed 100 characters"],
      },
      relationship: {
        type: String,
        trim: true,
        default: "",
        maxlength: [50, "Reference relationship cannot exceed 50 characters"],
      },
    },

    // Resume and Documents
    resumeUrl: {
      type: String,
      trim: true,
      default: "",
    },

    // Agreements
    backgroundCheckConsent: {
      type: Boolean,
      required: [true, "Background check consent is required"],
    },
    termsAccepted: {
      type: Boolean,
      required: [true, "Terms acceptance is required"],
    },

    // Application Status
    status: {
      type: String,
      enum: ["pending", "under-review", "interview-scheduled", "accepted", "rejected", "on-hold"],
      default: "pending",
    },
    priority: {
      type: String,
      enum: ["low", "medium", "high", "urgent"],
      default: "medium",
    },

    // Timestamps
    appliedAt: {
      type: Date,
      default: Date.now,
    },
    reviewedAt: {
      type: Date,
    },
    interviewDate: {
      type: Date,
    },

    // Admin Notes
    adminNotes: {
      type: String,
      default: "",
      maxlength: [1000, "Admin notes cannot exceed 1000 characters"],
    },
    interviewNotes: {
      type: String,
      default: "",
      maxlength: [1000, "Interview notes cannot exceed 1000 characters"],
    },

    // Additional tracking
    ipAddress: {
      type: String,
      default: "",
    },
    userAgent: {
      type: String,
      default: "",
    },
  },
  {
    timestamps: true,
    // Add indexes for better query performance
    indexes: [
      { email: 1 },
      { status: 1 },
      { initiative: 1 },
      { preferredLocation: 1 },
      { appliedAt: -1 },
      { createdAt: -1 },
    ],
  },
)

// Virtual for age calculation
volunteerSchema.virtual("age").get(function () {
  if (!this.dateOfBirth) return null
  const today = new Date()
  const birthDate = new Date(this.dateOfBirth)
  let age = today.getFullYear() - birthDate.getFullYear()
  const monthDiff = today.getMonth() - birthDate.getMonth()
  if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birthDate.getDate())) {
    age--
  }
  return age
})

// Method to get initiative full name
volunteerSchema.methods.getInitiativeName = function () {
  const initiatives = {
    ccae: "Child Care and Education (CCAE)",
    csaa: "Community Service and Awareness (CSAA)",
    csii: "Community Skills and Income Initiative (CSII)",
    general: "General Volunteer",
  }
  return initiatives[this.initiative] || this.initiative
}

// Method to get location name
volunteerSchema.methods.getLocationName = function () {
  const locations = {
    hyderabad: "Hyderabad, Telangana",
    bangalore: "Bangalore, Karnataka",
    mumbai: "Mumbai, Maharashtra",
    delhi: "Delhi NCR",
    chennai: "Chennai, Tamil Nadu",
    pune: "Pune, Maharashtra",
    remote: "Remote/Online",
    any: "Any Location",
  }
  return locations[this.preferredLocation] || this.preferredLocation
}

// Pre-save middleware
volunteerSchema.pre("save", function (next) {
  // Ensure email is lowercase
  if (this.email) {
    this.email = this.email.toLowerCase()
  }

  // Set reviewedAt when status changes from pending
  if (this.isModified("status") && this.status !== "pending" && !this.reviewedAt) {
    this.reviewedAt = new Date()
  }

  next()
})

module.exports = mongoose.model("Volunteer", volunteerSchema)
