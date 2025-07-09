"use client"

import type React from "react"
import { useState } from "react"

interface VolunteerFormData {
  domain: string
  firstName: string
  lastName: string
  contact: string
  dateOfBirth: string
  email: string
  whyJoinUs: string
  questionsForUs: string
}

interface FormStatus {
  submitting: boolean
  submitted: boolean
  error: string | null
  success: string | null
}

const VolunteerForm: React.FC = () => {
  const [formData, setFormData] = useState<VolunteerFormData>({
    domain: "",
    firstName: "",
    lastName: "",
    contact: "",
    dateOfBirth: "",
    email: "",
    whyJoinUs: "",
    questionsForUs: "",
  })

  const [selectedFile, setSelectedFile] = useState<File | null>(null)
  const [status, setStatus] = useState<FormStatus>({
    submitting: false,
    submitted: false,
    error: null,
    success: null,
  })

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))

    if (status.error || status.success) {
      setStatus((prev) => ({ ...prev, error: null, success: null }))
    }
  }

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    console.log("🔍 FILE CHANGE EVENT:")
    console.log("  - Event target:", e.target)
    console.log("  - Files array:", e.target.files)
    console.log("  - Files length:", e.target.files?.length)
    console.log("  - Selected file:", file)

    if (file) {
      console.log("✅ FILE SELECTED:")
      console.log("  - Name:", file.name)
      console.log("  - Size:", file.size, "bytes")
      console.log("  - Type:", file.type)
      console.log("  - Last modified:", new Date(file.lastModified))

      // Validate file type
      if (file.type !== "application/pdf") {
        console.log("❌ INVALID FILE TYPE:", file.type)
        setStatus((prev) => ({ ...prev, error: "Please select a PDF file only." }))
        setSelectedFile(null)
        return
      }

      // Validate file size (5MB limit)
      if (file.size > 5 * 1024 * 1024) {
        console.log("❌ FILE TOO LARGE:", file.size)
        setStatus((prev) => ({ ...prev, error: "File size must be less than 5MB." }))
        setSelectedFile(null)
        return
      }

      console.log("✅ VALID PDF FILE ACCEPTED")
      setSelectedFile(file)
      setStatus((prev) => ({ ...prev, error: null }))
    } else {
      console.log("❌ NO FILE SELECTED")
      setSelectedFile(null)
    }
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    console.log("🚀 FORM SUBMISSION STARTED")
    console.log("📝 Form data:", formData)
    console.log("📄 Selected file before submission:", selectedFile)

    if (selectedFile) {
      console.log("📄 FILE DETAILS BEFORE SUBMISSION:")
      console.log("  - Name:", selectedFile.name)
      console.log("  - Size:", selectedFile.size)
      console.log("  - Type:", selectedFile.type)
      console.log("  - Constructor:", selectedFile.constructor.name)
    }

    setStatus({ submitting: true, submitted: false, error: null, success: null })

    try {
      // Create FormData object for multipart/form-data
      console.log("📦 CREATING FORMDATA OBJECT...")
      const submitData = new FormData()

      // Add all form fields
      console.log("📝 ADDING FORM FIELDS:")
      Object.entries(formData).forEach(([key, value]) => {
        submitData.append(key, value)
        console.log(`  ✅ ${key}: ${value}`)
      })

      // Add file if selected - CRITICAL SECTION
      if (selectedFile) {
        console.log("📎 ADDING FILE TO FORMDATA:")
        console.log("  - File object:", selectedFile)
        console.log("  - File name:", selectedFile.name)
        console.log("  - File size:", selectedFile.size)
        console.log("  - File type:", selectedFile.type)

        // Add file with explicit field name
        submitData.append("resume", selectedFile, selectedFile.name)
        console.log("  ✅ FILE ADDED TO FORMDATA WITH KEY 'resume'")

        // Verify file was added (this won't work in all browsers but let's try)
        console.log("🔍 VERIFYING FORMDATA CONTENTS:")
        try {
          // Try to access the file from FormData
          const fileFromFormData = submitData.get("resume")
          console.log("  - File retrieved from FormData:", fileFromFormData)
          console.log("  - Is File instance?", fileFromFormData instanceof File)
          if (fileFromFormData instanceof File) {
            console.log("  - Retrieved file name:", fileFromFormData.name)
            console.log("  - Retrieved file size:", fileFromFormData.size)
          }
        } catch (error) {
          console.log("  - Cannot verify FormData contents in this browser")
        }
      } else {
        console.log("⚠️ NO FILE TO ADD - selectedFile is null/undefined")
      }

      console.log("📤 SENDING REQUEST TO SERVER...")
      console.log("  - URL: http://localhost:5000/api/volunteer-simple")
      console.log("  - Method: POST")
      console.log("  - Body: FormData object")
      console.log("  - Content-Type: (auto-set by browser)")

      const response = await fetch("http://localhost:5000/api/volunteer-simple", {
        method: "POST",
        body: submitData,
        // DO NOT set Content-Type header - let browser set it with boundary
      })

      console.log("📥 RESPONSE RECEIVED:")
      console.log("  - Status:", response.status)
      console.log("  - Status text:", response.statusText)
      console.log("  - Headers:", response.headers)

      const responseData = await response.json()
      console.log("📥 RESPONSE DATA:", responseData)

      if (responseData.success) {
        setStatus({
          submitting: false,
          submitted: true,
          error: null,
          success: responseData.message || "Thank you for your application! We will contact you soon.",
        })

        // Reset form
        setFormData({
          domain: "",
          firstName: "",
          lastName: "",
          contact: "",
          dateOfBirth: "",
          email: "",
          whyJoinUs: "",
          questionsForUs: "",
        })
        setSelectedFile(null)

        // Reset file input
        const fileInput = document.getElementById("resume") as HTMLInputElement
        if (fileInput) {
          fileInput.value = ""
        }
      } else {
        throw new Error(responseData.message || "Application submission failed")
      }
    } catch (error: any) {
      console.error("❌ APPLICATION SUBMISSION ERROR:", error)

      let errorMessage = "Something went wrong. Please try again."

      if (error.message.includes("fetch")) {
        errorMessage = "Cannot connect to server. Make sure backend is running on port 5000."
      } else if (error.message) {
        errorMessage = error.message
      }

      setStatus({
        submitting: false,
        submitted: false,
        error: errorMessage,
        success: null,
      })
    }
  }

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <div className="bg-white p-8 rounded-lg shadow-sm">
          <div className="mb-8">
            <h1 className="text-3xl font-bold text-gray-900 mb-2">Join SWIS Foundation</h1>
            <p className="text-gray-600">Become a volunteer and make a difference in your community</p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Domain Selection */}
            <div>
              <label htmlFor="domain" className="block text-sm font-medium text-gray-700 mb-2">
                Volunteer Domain <span className="text-red-500">*</span>
              </label>
              <select
                id="domain"
                name="domain"
                value={formData.domain}
                onChange={handleInputChange}
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
              >
                <option value="">Select a domain</option>
                <option value="ccae">CCAE - Child Care and Education</option>
                <option value="csii">CSII - Community Skills and Income Initiative</option>
                <option value="csaa">CSAA - Community Service and Awareness</option>
                <option value="general">General Volunteer</option>
              </select>
            </div>

            {/* Name Fields */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 mb-2">
                  First Name <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  id="firstName"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
                  placeholder="First Name"
                />
              </div>
              <div>
                <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 mb-2">
                  Last Name <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  id="lastName"
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
                  placeholder="Last Name"
                />
              </div>
            </div>

            {/* Contact and Date of Birth */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label htmlFor="contact" className="block text-sm font-medium text-gray-700 mb-2">
                  Contact Number <span className="text-red-500">*</span>
                </label>
                <input
                  type="tel"
                  id="contact"
                  name="contact"
                  value={formData.contact}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
                  placeholder="Contact Number"
                />
              </div>
              <div>
                <label htmlFor="dateOfBirth" className="block text-sm font-medium text-gray-700 mb-2">
                  Date of Birth <span className="text-red-500">*</span>
                </label>
                <input
                  type="date"
                  id="dateOfBirth"
                  name="dateOfBirth"
                  value={formData.dateOfBirth}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
                />
              </div>
            </div>

            {/* Email */}
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                Email Address <span className="text-red-500">*</span>
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
                placeholder="Email Address"
              />
            </div>

            {/* Resume Upload - ENHANCED */}
            <div>
              <label htmlFor="resume" className="block text-sm font-medium text-gray-700 mb-2">
                Resume (PDF only) <span className="text-gray-500">(Optional)</span>
              </label>
              <input
                type="file"
                id="resume"
                name="resume"
                accept=".pdf,application/pdf"
                onChange={handleFileChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors file:mr-4 file:py-2 file:px-4 file:rounded-md file:border-0 file:text-sm file:font-medium file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100"
              />
              {selectedFile && (
                <div className="mt-2 p-3 bg-green-50 border border-green-200 rounded-md">
                  <p className="text-sm text-green-700">
                    ✅ Selected: {selectedFile.name} ({(selectedFile.size / 1024).toFixed(2)} KB)
                  </p>
                  <p className="text-xs text-green-600">Type: {selectedFile.type}</p>
                </div>
              )}
              <p className="mt-1 text-xs text-gray-500">Upload your resume in PDF format (max 5MB)</p>
            </div>

            {/* Why Join Us */}
            <div>
              <label htmlFor="whyJoinUs" className="block text-sm font-medium text-gray-700 mb-2">
                Why do you want to join us? <span className="text-red-500">*</span>
              </label>
              <textarea
                id="whyJoinUs"
                name="whyJoinUs"
                value={formData.whyJoinUs}
                onChange={handleInputChange}
                required
                rows={4}
                className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors resize-vertical"
                placeholder="Tell us why you want to volunteer with SWIS Foundation..."
              />
            </div>

            {/* Questions for Us */}
            <div>
              <label htmlFor="questionsForUs" className="block text-sm font-medium text-gray-700 mb-2">
                Any questions for us? <span className="text-gray-500">(Optional)</span>
              </label>
              <textarea
                id="questionsForUs"
                name="questionsForUs"
                value={formData.questionsForUs}
                onChange={handleInputChange}
                rows={3}
                className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors resize-vertical"
                placeholder="Any questions or additional information you'd like to share..."
              />
            </div>

            {/* Status Messages */}
            {status.error && (
              <div className="p-4 bg-red-50 border border-red-200 rounded-md">
                <p className="text-red-600 text-sm">{status.error}</p>
              </div>
            )}

            {status.success && (
              <div className="p-4 bg-green-50 border border-green-200 rounded-md">
                <p className="text-green-600 text-sm">{status.success}</p>
              </div>
            )}

            {/* Submit Button */}
            <button
              type="submit"
              disabled={status.submitting}
              className={`w-full py-3 px-6 rounded-md font-medium text-white transition-colors ${
                status.submitting
                  ? "bg-gray-400 cursor-not-allowed"
                  : "bg-blue-600 hover:bg-blue-700 focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
              }`}
            >
              {status.submitting ? "Submitting Application..." : "Submit Application"}
            </button>
          </form>

          {/* Debug Info */}
          {selectedFile && (
            <div className="mt-8 p-4 bg-blue-50 border border-blue-200 rounded-md">
              <h3 className="font-bold text-blue-800 mb-2">🔍 Debug Info:</h3>
              <p className="text-sm text-blue-700">File selected: {selectedFile.name}</p>
              <p className="text-sm text-blue-700">File size: {selectedFile.size} bytes</p>
              <p className="text-sm text-blue-700">File type: {selectedFile.type}</p>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default VolunteerForm
