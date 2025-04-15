"use client"

import type React from "react"

import { useState, useRef } from "react"
import Link from "next/link"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ArrowLeft, Upload } from "lucide-react"
import { detectFaceShape } from "@/lib/face-detection"

export default function UploadPage() {
  const router = useRouter()
  const fileInputRef = useRef<HTMLInputElement>(null)
  const [selectedImage, setSelectedImage] = useState<string | null>(null)
  const [isAnalyzing, setIsAnalyzing] = useState(false)

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0]
    if (file) {
      const reader = new FileReader()
      reader.onload = (e) => {
        setSelectedImage(e.target?.result as string)
      }
      reader.readAsDataURL(file)
    }
  }

  const triggerFileInput = () => {
    fileInputRef.current?.click()
  }

  const resetImage = () => {
    setSelectedImage(null)
    if (fileInputRef.current) {
      fileInputRef.current.value = ""
    }
  }

  const analyzePhoto = async () => {
    if (selectedImage) {
      setIsAnalyzing(true)

      try {
        const faceShape = await detectFaceShape(selectedImage)

        // Store the result and navigate to results page
        localStorage.setItem("faceShape", faceShape)
        localStorage.setItem("faceImage", selectedImage)
        router.push("/results")
      } catch (error) {
        console.error("Error analyzing face:", error)
        setIsAnalyzing(false)
      }
    }
  }

  return (
    <div className="container max-w-4xl mx-auto px-4 py-8">
      <div className="flex items-center mb-6">
        <Link href="/">
          <Button variant="ghost" size="sm">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Home
          </Button>
        </Link>
        <h1 className="text-2xl font-bold ml-4">Upload Photo</h1>
      </div>

      <Card className="mb-6">
        <CardContent className="p-6">
          <div className="flex flex-col items-center">
            <input type="file" ref={fileInputRef} onChange={handleFileChange} accept="image/*" className="hidden" />

            <div className="relative w-full max-w-md mx-auto overflow-hidden rounded-lg border">
              {selectedImage ? (
                <img src={selectedImage || "/placeholder.svg"} alt="Uploaded face" className="w-full h-auto" />
              ) : (
                <div className="flex flex-col items-center justify-center h-64 bg-gray-50">
                  <Upload className="h-12 w-12 text-gray-400 mb-2" />
                  <p className="text-gray-500">Click to upload a photo</p>
                </div>
              )}
            </div>

            <div className="flex gap-4 mt-6">
              {!selectedImage ? (
                <Button onClick={triggerFileInput}>
                  <Upload className="mr-2 h-4 w-4" />
                  Select Photo
                </Button>
              ) : (
                <>
                  <Button variant="outline" onClick={resetImage}>
                    Choose Different Photo
                  </Button>
                  <Button onClick={analyzePhoto} disabled={isAnalyzing}>
                    {isAnalyzing ? "Analyzing..." : "Analyze Face Shape"}
                  </Button>
                </>
              )}
            </div>
          </div>
        </CardContent>
      </Card>

      <div className="bg-gray-50 p-6 rounded-lg">
        <h2 className="text-lg font-medium mb-4">Tips for Best Results</h2>
        <ul className="space-y-2">
          <li className="flex items-start gap-2">
            <span className="bg-primary text-white rounded-full w-5 h-5 flex items-center justify-center text-xs mt-0.5">
              ✓
            </span>
            <span>Upload a front-facing photo with neutral expression</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="bg-primary text-white rounded-full w-5 h-5 flex items-center justify-center text-xs mt-0.5">
              ✓
            </span>
            <span>Choose a well-lit photo with clear visibility of your face</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="bg-primary text-white rounded-full w-5 h-5 flex items-center justify-center text-xs mt-0.5">
              ✓
            </span>
            <span>Photos without glasses and with hair pulled back work best</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="bg-primary text-white rounded-full w-5 h-5 flex items-center justify-center text-xs mt-0.5">
              ✓
            </span>
            <span>Your face should be the main focus of the image</span>
          </li>
        </ul>
      </div>
    </div>
  )
}
