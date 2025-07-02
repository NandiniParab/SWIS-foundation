"use client"

import type React from "react"
import { useState } from "react"
import axios from "axios"

interface FormData {
  name: string
  phone: string
  email: string
  message: string
}

interface FormStatus {
  submitting: boolean
  submitted: boolean
  error: string | null
  success: string | null
}

const ContactPage: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    phone: "",
    email: "",
    message: "",
  })

  const [status, setStatus] = useState<FormStatus>({
    submitting: false,
    submitted: false,
    error: null,
    success: null,
  })

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))

    if (status.error || status.success) {
      setStatus((prev) => ({ ...prev, error: null, success: null }))
    }
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    setStatus({ submitting: true, submitted: false, error: null, success: null })

    try {
      const response = await axios.post("http://localhost:5000/api/contact", formData, {
        headers: {
          "Content-Type": "application/json",
        },
        timeout: 10000,
      })

      if (response.data.success) {
        setStatus({
          submitting: false,
          submitted: true,
          error: null,
          success: response.data.message || "Thank you for your message! We will get back to you soon.",
        })

        setFormData({
          name: "",
          phone: "",
          email: "",
          message: "",
        })
      }
    } catch (error: any) {
      console.error("Contact form error:", error)

      let errorMessage = "Something went wrong. Please try again."

      if (error.code === "ECONNABORTED") {
        errorMessage = "Request timeout. Please check your connection."
      } else if (error.code === "ERR_NETWORK") {
        errorMessage = "Cannot connect to server. Make sure backend is running on port 5000."
      } else if (error.response) {
        errorMessage = error.response.data?.message || `Server error: ${error.response.status}`
      } else if (error.request) {
        errorMessage = "No response from server. Check if backend is running."
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
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Left Column - Contact Info */}
          <div className="space-y-8">
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h2 className="text-xl font-bold text-gray-900 mb-4">Registered Office</h2>
              <div className="space-y-2 text-gray-600">
                <p className="font-medium">SWIS Foundation:</p>
                <p>1-24-607/1, First Floor, Road No. 5,</p>
                <p>Maruthi Nagar Colony, Lothkunta,</p>
                <p>Hyderabad 500015, Telangana - India</p>
                <div className="mt-4 space-y-1">
                  <p>
                    <strong>Email:</strong> swisinstitute@gmail.com
                  </p>
                  <p>
                    <strong>Mobile:</strong> +91 848 200 4559
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-lg font-bold text-gray-900 mb-3">FOR CORPORATE PARTNERSHIPS</h3>
              <div className="space-y-1 text-gray-600">
                <p>Parul Sharma - 9266740073</p>
                <p className="text-blue-600">cp@smilefoundationindia.org</p>
              </div>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-lg font-bold text-gray-900 mb-3">DONATION RELATED QUERIES</h3>
              <div className="mb-4">
                <h4 className="font-semibold text-gray-800 mb-2">FOR NEW DONORS</h4>
                <div className="space-y-1 text-gray-600">
                  <p>Aakanksha Wahi - 7042128777</p>
                  <p className="text-blue-600">donation@smilefoundationindia.org</p>
                </div>
              </div>
              <div>
                <h4 className="font-semibold text-gray-800 mb-2">FOR EXISTING DONORS</h4>
                <div className="space-y-1 text-gray-600">
                  <p>Parul Kapoor - 8882517003</p>
                  <p className="text-blue-600">donorcare@smilefoundationindia.org</p>
                </div>
              </div>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-lg font-bold text-gray-900 mb-3">FOR ALL GENERAL QUERIES</h3>
              <p className="text-blue-600">info@smilefoundationindia.org</p>
            </div>
          </div>

          {/* Right Column - Form */}
          <div className="bg-white p-8 rounded-lg shadow-sm">
            <div className="mb-6">
              <h2 className="text-2xl font-bold text-gray-900 mb-2">HELPDESK</h2>
              <p className="text-gray-600">For any grievance, suggestions and queries kindly write to us.</p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                  Name <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
                  placeholder="Name"
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                    Phone <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
                    placeholder="Phone"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                    Email <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
                    placeholder="Email"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                  Message <span className="text-red-500">*</span>
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                  rows={6}
                  className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors resize-vertical"
                  placeholder="Message"
                />
              </div>

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

              <button
                type="submit"
                disabled={status.submitting}
                className={`w-full py-3 px-6 rounded-md font-medium text-white transition-colors ${
                  status.submitting
                    ? "bg-gray-400 cursor-not-allowed"
                    : "bg-blue-600 hover:bg-blue-700 focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
                }`}
              >
                {status.submitting ? "Sending..." : "Send Message"}
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ContactPage
