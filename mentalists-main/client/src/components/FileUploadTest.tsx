"use client"

import { useState, ChangeEvent } from "react"

const FileUploadTest = () => {
  const [selectedFile, setSelectedFile] = useState<File | null>(null)
  const [result, setResult] = useState<any>(null)

  const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    console.log("🧪 Test - File selected:", file)
    setSelectedFile(file || null)
  }

  const testUpload = async () => {
    if (!selectedFile) {
      alert("Please select a file first")
      return
    }

    console.log("🧪 Testing file upload...")
    console.log("📄 File details:", {
      name: selectedFile.name,
      size: selectedFile.size,
      type: selectedFile.type,
    })

    const formData = new FormData()
    formData.append("resume", selectedFile, selectedFile.name)
    formData.append("name", "Test User")

    console.log("📤 FormData created, sending to test endpoint...")

    try {
      const response = await fetch("http://localhost:5000/api/test-upload", {
        method: "POST",
        body: formData,
      })

      const data = await response.json()
      console.log("📥 Test response:", data)
      setResult(data)
    } catch (error: any) {
      console.error("❌ Test upload error:", error)
      setResult({ error: error.message })
    }
  }

  return (
    <div className="min-h-screen bg-gray-50 p-8">
      <div className="max-w-2xl mx-auto bg-white p-6 rounded-lg shadow">
        <h1 className="text-2xl font-bold mb-6">🧪 File Upload Test</h1>

        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium mb-2">Select PDF File:</label>
            <input
              type="file"
              accept=".pdf,application/pdf"
              onChange={handleFileChange}
              className="w-full p-2 border border-gray-300 rounded"
            />
          </div>

          {selectedFile && (
            <div className="p-3 bg-green-50 border border-green-200 rounded">
              <p className="text-sm text-green-700">
                ✅ Selected: {selectedFile.name} ({(selectedFile.size / 1024).toFixed(2)} KB)
              </p>
              <p className="text-xs text-green-600">Type: {selectedFile.type}</p>
            </div>
          )}

          <button
            onClick={testUpload}
            disabled={!selectedFile}
            className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 disabled:bg-gray-400"
          >
            🧪 Test Upload
          </button>

          {result && (
            <div className="mt-4 p-4 bg-gray-50 border rounded">
              <h3 className="font-bold mb-2">Test Result:</h3>
              <pre className="text-xs overflow-auto">{JSON.stringify(result, null, 2)}</pre>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default FileUploadTest
