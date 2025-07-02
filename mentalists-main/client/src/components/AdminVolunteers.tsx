"use client"

import type React from "react"
import { useState, useEffect } from "react"
import axios from "axios"

interface VolunteerApplication {
  _id: string
  name: string
  email: string
  phone: string
  age: number
  city: string
  state: string
  initiative: string
  motivation: string
  skills: string
  experience: string
  availability: string
  hoursPerWeek: string
  status: "pending" | "reviewed" | "accepted" | "rejected"
  priority: "low" | "medium" | "high"
  appliedAt: string
  reviewedAt?: string
  adminNotes: string
}

const AdminVolunteers: React.FC = () => {
  const [applications, setApplications] = useState<VolunteerApplication[]>([])
  const [loading, setLoading] = useState(true)
  const [selectedApplication, setSelectedApplication] = useState<VolunteerApplication | null>(null)
  const [filter, setFilter] = useState<"all" | "pending" | "reviewed" | "accepted" | "rejected">("all")

  useEffect(() => {
    fetchApplications()
  }, [])

  const fetchApplications = async () => {
    try {
      const response = await axios.get("http://localhost:5000/api/applications")
      setApplications(response.data.data)
      setLoading(false)
    } catch (error) {
      console.error("Error fetching volunteer applications:", error)
      setLoading(false)
    }
  }

  const updateApplicationStatus = async (id: string, status: string, adminNotes?: string) => {
    try {
      await axios.put(`http://localhost:5000/api/applications/${id}`, { status, adminNotes })
      fetchApplications() // Refresh the list
      setSelectedApplication(null)
    } catch (error) {
      console.error("Error updating application:", error)
    }
  }

  const getInitiativeName = (code: string) => {
    const initiatives = {
      ccae: "Child Care and Education (CCAE)",
      csaa: "Community Service and Awareness (CSAA)",
      csii: "Community Skills and Income Initiative (CSII)",
      general: "General Volunteer",
    }
    return initiatives[code as keyof typeof initiatives] || code
  }

  const filteredApplications = applications.filter((app) => (filter === "all" ? true : app.status === filter))

  const getStatusColor = (status: string) => {
    switch (status) {
      case "pending":
        return "bg-yellow-100 text-yellow-800"
      case "reviewed":
        return "bg-blue-100 text-blue-800"
      case "accepted":
        return "bg-green-100 text-green-800"
      case "rejected":
        return "bg-red-100 text-red-800"
      default:
        return "bg-gray-100 text-gray-800"
    }
  }

  const getInitiativeColor = (initiative: string) => {
    switch (initiative) {
      case "ccae":
        return "bg-purple-100 text-purple-800"
      case "csaa":
        return "bg-blue-100 text-blue-800"
      case "csii":
        return "bg-green-100 text-green-800"
      case "general":
        return "bg-gray-100 text-gray-800"
      default:
        return "bg-gray-100 text-gray-800"
    }
  }

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-green-600"></div>
          <p className="mt-4 text-gray-600">Loading volunteer applications...</p>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gray-50 py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900">Volunteer Applications Dashboard</h1>
          <p className="mt-2 text-gray-600">Manage all volunteer applications and recruitment</p>
        </div>

        {/* Filter Buttons */}
        <div className="mb-6 flex flex-wrap gap-2">
          {["all", "pending", "reviewed", "accepted", "rejected"].map((status) => (
            <button
              key={status}
              onClick={() => setFilter(status as any)}
              className={`px-4 py-2 rounded-md font-medium ${
                filter === status ? "bg-green-600 text-white" : "bg-white text-gray-700 hover:bg-gray-50"
              }`}
            >
              {status.charAt(0).toUpperCase() + status.slice(1)}
              <span className="ml-2 bg-gray-200 text-gray-800 px-2 py-1 rounded-full text-xs">
                {status === "all" ? applications.length : applications.filter((a) => a.status === status).length}
              </span>
            </button>
          ))}
        </div>

        {/* Applications List */}
        <div className="bg-white shadow overflow-hidden sm:rounded-md">
          <ul className="divide-y divide-gray-200">
            {filteredApplications.map((application) => (
              <li key={application._id}>
                <div className="px-4 py-4 sm:px-6 hover:bg-gray-50">
                  <div className="flex items-center justify-between">
                    <div className="flex-1">
                      <div className="flex items-center justify-between">
                        <p className="text-lg font-medium text-green-600 truncate">{application.name}</p>
                        <div className="flex space-x-2">
                          <span
                            className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${getStatusColor(application.status)}`}
                          >
                            {application.status}
                          </span>
                          <span
                            className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${getInitiativeColor(application.initiative)}`}
                          >
                            {getInitiativeName(application.initiative)}
                          </span>
                        </div>
                      </div>
                      <div className="mt-2 sm:flex sm:justify-between">
                        <div className="sm:flex">
                          <p className="flex items-center text-sm text-gray-500">📧 {application.email}</p>
                          <p className="mt-2 flex items-center text-sm text-gray-500 sm:mt-0 sm:ml-6">
                            📞 {application.phone}
                          </p>
                          <p className="mt-2 flex items-center text-sm text-gray-500 sm:mt-0 sm:ml-6">
                            🎂 {application.age} years
                          </p>
                        </div>
                        <div className="mt-2 flex items-center text-sm text-gray-500 sm:mt-0">
                          📍 {application.city}, {application.state}
                        </div>
                      </div>
                      <div className="mt-2 flex items-center text-sm text-gray-500">
                        <span className="mr-4">⏰ {application.availability}</span>
                        <span>📊 {application.hoursPerWeek} hours/week</span>
                      </div>
                      <div className="mt-2">
                        <p className="text-sm text-gray-600 line-clamp-2">{application.motivation}</p>
                      </div>
                    </div>
                  </div>
                  <div className="mt-4 flex space-x-3">
                    <button
                      onClick={() => setSelectedApplication(application)}
                      className="text-green-600 hover:text-green-900 text-sm font-medium"
                    >
                      View Details
                    </button>
                    <a
                      href={`mailto:${application.email}?subject=Re: Your volunteer application to SWIS Foundation&body=Dear ${application.name},%0A%0AThank you for your interest in volunteering with SWIS Foundation.%0A%0A`}
                      className="text-blue-600 hover:text-blue-900 text-sm font-medium"
                    >
                      Email
                    </a>
                    <a
                      href={`tel:${application.phone}`}
                      className="text-purple-600 hover:text-purple-900 text-sm font-medium"
                    >
                      Call
                    </a>
                    {application.status === "pending" && (
                      <>
                        <button
                          onClick={() => updateApplicationStatus(application._id, "accepted")}
                          className="text-green-600 hover:text-green-900 text-sm font-medium"
                        >
                          Accept
                        </button>
                        <button
                          onClick={() => updateApplicationStatus(application._id, "rejected")}
                          className="text-red-600 hover:text-red-900 text-sm font-medium"
                        >
                          Reject
                        </button>
                      </>
                    )}
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>

        {filteredApplications.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-500">No volunteer applications found for the selected filter.</p>
          </div>
        )}
      </div>

      {/* Application Detail Modal */}
      {selectedApplication && (
        <div className="fixed inset-0 bg-gray-600 bg-opacity-50 overflow-y-auto h-full w-full z-50">
          <div className="relative top-10 mx-auto p-5 border w-11/12 md:w-3/4 lg:w-2/3 shadow-lg rounded-md bg-white max-h-screen overflow-y-auto">
            <div className="mt-3">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-lg font-medium text-gray-900">Volunteer Application Details</h3>
                <button onClick={() => setSelectedApplication(null)} className="text-gray-400 hover:text-gray-600">
                  ✕
                </button>
              </div>

              <div className="space-y-6">
                {/* Personal Information */}
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-3">Personal Information</h4>
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700">Name</label>
                      <p className="mt-1 text-sm text-gray-900">{selectedApplication.name}</p>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700">Age</label>
                      <p className="mt-1 text-sm text-gray-900">{selectedApplication.age} years</p>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700">Email</label>
                      <p className="mt-1 text-sm text-gray-900">{selectedApplication.email}</p>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700">Phone</label>
                      <p className="mt-1 text-sm text-gray-900">{selectedApplication.phone}</p>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700">City</label>
                      <p className="mt-1 text-sm text-gray-900">{selectedApplication.city}</p>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700">State</label>
                      <p className="mt-1 text-sm text-gray-900">{selectedApplication.state}</p>
                    </div>
                  </div>
                </div>

                {/* Initiative & Availability */}
                <div className="bg-green-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-3">Initiative & Availability</h4>
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700">Initiative</label>
                      <p className="mt-1 text-sm text-gray-900">{getInitiativeName(selectedApplication.initiative)}</p>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700">Status</label>
                      <span
                        className={`mt-1 inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${getStatusColor(selectedApplication.status)}`}
                      >
                        {selectedApplication.status}
                      </span>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700">Availability</label>
                      <p className="mt-1 text-sm text-gray-900">{selectedApplication.availability}</p>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700">Hours per Week</label>
                      <p className="mt-1 text-sm text-gray-900">{selectedApplication.hoursPerWeek}</p>
                    </div>
                  </div>
                </div>

                {/* Motivation */}
                <div>
                  <label className="block text-sm font-medium text-gray-700">Motivation</label>
                  <p className="mt-1 text-sm text-gray-900 bg-gray-50 p-3 rounded-md">
                    {selectedApplication.motivation}
                  </p>
                </div>

                {/* Skills */}
                <div>
                  <label className="block text-sm font-medium text-gray-700">Skills</label>
                  <p className="mt-1 text-sm text-gray-900 bg-gray-50 p-3 rounded-md">{selectedApplication.skills}</p>
                </div>

                {/* Experience */}
                {selectedApplication.experience && (
                  <div>
                    <label className="block text-sm font-medium text-gray-700">Previous Experience</label>
                    <p className="mt-1 text-sm text-gray-900 bg-gray-50 p-3 rounded-md">
                      {selectedApplication.experience}
                    </p>
                  </div>
                )}

                {/* Timestamps */}
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700">Applied At</label>
                    <p className="mt-1 text-sm text-gray-900">
                      {new Date(selectedApplication.appliedAt).toLocaleString()}
                    </p>
                  </div>
                  {selectedApplication.reviewedAt && (
                    <div>
                      <label className="block text-sm font-medium text-gray-700">Reviewed At</label>
                      <p className="mt-1 text-sm text-gray-900">
                        {new Date(selectedApplication.reviewedAt).toLocaleString()}
                      </p>
                    </div>
                  )}
                </div>
              </div>

              <div className="mt-6 flex space-x-3">
                <a
                  href={`mailto:${selectedApplication.email}?subject=Re: Your volunteer application to SWIS Foundation&body=Dear ${selectedApplication.name},%0A%0AThank you for your interest in volunteering with SWIS Foundation.%0A%0A`}
                  className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700"
                >
                  Send Email
                </a>
                <a
                  href={`tel:${selectedApplication.phone}`}
                  className="bg-green-600 text-white px-4 py-2 rounded-md hover:bg-green-700"
                >
                  Call
                </a>
                {selectedApplication.status === "pending" && (
                  <>
                    <button
                      onClick={() => updateApplicationStatus(selectedApplication._id, "accepted")}
                      className="bg-green-600 text-white px-4 py-2 rounded-md hover:bg-green-700"
                    >
                      Accept Application
                    </button>
                    <button
                      onClick={() => updateApplicationStatus(selectedApplication._id, "rejected")}
                      className="bg-red-600 text-white px-4 py-2 rounded-md hover:bg-red-700"
                    >
                      Reject Application
                    </button>
                  </>
                )}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default AdminVolunteers
