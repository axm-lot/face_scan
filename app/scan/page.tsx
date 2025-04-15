"use client"

import { useState, useRef, useEffect } from "react"
import Link from "next/link"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ArrowLeft, Camera } from "lucide-react"
import { detectFaceShape } from "@/lib/face-detection"

export default function ScanPage() {
  const router = useRouter()
  const videoRef = useRef<HTMLVideoElement>(null)
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const [isStreaming, setIsStreaming] = useState(false)
  const [isCaptured, setIsCaptured] = useState(false)
  const [isAnalyzing, setIsAnalyzing] = useState(false)
  const [cameraError, setCameraError] = useState<string | null>(null)

  useEffect(() => {
    const startCamera = async () => {
      try {
        const stream = await navigator.mediaDevices.getUserMedia({
          video: { facingMode: "user", width: 640, height: 480 },
          audio: false,
        })

        if (videoRef.current) {
          videoRef.current.srcObject = stream
          
          // Make sure we wait for the video to be fully loaded
          videoRef.current.onloadedmetadata = () => {
            if (videoRef.current) {
              videoRef.current.play()
                .then(() => {
                  console.log("Video is playing")
                  setIsStreaming(true)
                })
                .catch((error) => {
                  console.error("Error playing video:", error)
                  setCameraError("Error starting video stream")
                })
            }
          }
        }
      } catch (err) {
        console.error("Error accessing camera:", err)
        setCameraError("Error accessing camera. Please ensure you've granted camera permissions.")
      }
    }

    startCamera()

    return () => {
      // Clean up by stopping all tracks when component unmounts
      if (videoRef.current && videoRef.current.srcObject) {
        const tracks = (videoRef.current.srcObject as MediaStream).getTracks()
        tracks.forEach((track) => track.stop())
      }
    }
  }, [])

  const captureImage = () => {
    if (!videoRef.current || !canvasRef.current) {
      console.error("Video or canvas refs not available")
      return
    }

    const video = videoRef.current
    const canvas = canvasRef.current

    // Check if video is actually ready
    if (!video.videoWidth || !video.videoHeight || video.readyState < 2) {
      console.error("Video not ready yet. Current readyState:", video.readyState)
      return
    }

    const context = canvas.getContext("2d")
    if (!context) {
      console.error("Could not get canvas context")
      return
    }

    // Set canvas dimensions to match the video
    canvas.width = video.videoWidth
    canvas.height = video.videoHeight

    // Draw the current video frame onto the canvas
    console.log(`Drawing video (${video.videoWidth}x${video.videoHeight}) to canvas`)
    context.drawImage(video, 0, 0, canvas.width, canvas.height)
    
    // Verify that image data exists
    try {
      const imageData = context.getImageData(0, 0, canvas.width, canvas.height)
      if (imageData.data.length === 0) {
        console.error("Canvas captured empty image data")
        return
      }
      
      setIsCaptured(true)
      console.log("Image successfully captured to canvas")
    } catch (err) {
      console.error("Error verifying canvas data:", err)
    }
  }

  const retakePhoto = () => {
    setIsCaptured(false)
  }

  const analyzePhoto = async () => {
    if (!canvasRef.current) {
      console.error("Canvas ref not available")
      return
    }

    setIsAnalyzing(true)

    try {
      // Convert canvas to base64 image
      const imageData = canvasRef.current.toDataURL("image/jpeg")
      
      // Verify we have image data before proceeding
      if (!imageData || imageData === "data:,") {
        throw new Error("Failed to get image data from canvas")
      }
      
      const faceShape = await detectFaceShape(imageData)

      // Store the result and navigate to results page
      localStorage.setItem("faceShape", faceShape)
      localStorage.setItem("faceImage", imageData)
      router.push("/results")
    } catch (error) {
      console.error("Error analyzing face:", error)
      setIsAnalyzing(false)
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
        <h1 className="text-2xl font-bold ml-4">Face Scan</h1>
      </div>

      <Card className="mb-6">
        <CardContent className="p-6">
          <div className="flex flex-col items-center">
            <div className="relative w-full max-w-md mx-auto overflow-hidden rounded-lg border">
              {cameraError ? (
                <div className="bg-red-50 p-4 text-red-800 rounded-lg">
                  {cameraError}
                </div>
              ) : (
                <>
                  <video 
                    ref={videoRef} 
                    autoPlay 
                    playsInline 
                    muted 
                    className="w-full h-auto" 
                    style={{ display: isCaptured ? 'none' : 'block' }}
                  />
                  <canvas 
                    ref={canvasRef} 
                    className="w-full h-auto" 
                    style={{ display: isCaptured ? 'block' : 'none' }}
                  />
                </>
              )}
            </div>

            <div className="flex gap-4 mt-6">
              {!isCaptured ? (
                <Button 
                  onClick={captureImage} 
                  disabled={!isStreaming || !!cameraError}
                >
                  <Camera className="mr-2 h-4 w-4" />
                  Capture Photo
                </Button>
              ) : (
                <>
                  <Button variant="outline" onClick={retakePhoto}>
                    Retake Photo
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
            <span>Face the camera directly with neutral expression</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="bg-primary text-white rounded-full w-5 h-5 flex items-center justify-center text-xs mt-0.5">
              ✓
            </span>
            <span>Ensure good lighting on your face</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="bg-primary text-white rounded-full w-5 h-5 flex items-center justify-center text-xs mt-0.5">
              ✓
            </span>
            <span>Remove glasses and pull hair away from face</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="bg-primary text-white rounded-full w-5 h-5 flex items-center justify-center text-xs mt-0.5">
              ✓
            </span>
            <span>Position your face to fill most of the frame</span>
          </li>
        </ul>
      </div>
    </div>
  )
}