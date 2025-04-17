"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { ArrowLeft, Glasses, Scissors, Shirt } from "lucide-react"
import { getFaceShapeRecommendations } from "@/lib/recommendations"

interface StyleDescription {
  name: string
  description: string
}

interface Recommendation {
  glasses: StyleDescription[]
  haircuts: StyleDescription[]
  collars: StyleDescription[]
  description: string
}

// Helper function to get the image path for glasses types
function getGlassesImagePath(glassesType: string): string {
  // Convert the glasses type to a URL-friendly format
  const formattedType = glassesType.toLowerCase().replace(/\s+/g, "-")

  return `/images/glasses/${formattedType}.jpg?text=${formattedType}-glasses&width=120&height=120`
}

// Helper function to get the image path for haircut types
function getHaircutImagePath(haircutType: string): string {
  // Convert the haircut type to a URL-friendly format
  const formattedType = haircutType.toLowerCase().replace(/\s+/g, "-")

  // In a production app, you would have actual images for each type
  // For now, we'll use placeholder images
  return `/images/haircuts/${formattedType}.png?text=${formattedType}-haircut&width=120&height=120`
}

// Helper function to get the image path for collar types
function getCollarImagePath(collarType: string): string {
  // Convert the collar type to a URL-friendly format
  const formattedType = collarType.toLowerCase().replace(/\s+/g, "-")

  // In a production app, you would have actual images for each type
  // For now, we'll use placeholder images
  return `/images/collars/${formattedType}.jpg?text=${formattedType}-collar&width=120&height=120`
}

export default function ResultsPage() {
  const [faceShape, setFaceShape] = useState<string | null>(null)
  const [faceImage, setFaceImage] = useState<string | null>(null)
  const [recommendations, setRecommendations] = useState<Recommendation | null>(null)

  useEffect(() => {
    // Get data from localStorage
    const storedFaceShape = localStorage.getItem("faceShape")
    const storedFaceImage = localStorage.getItem("faceImage")

    if (storedFaceShape) {
      setFaceShape(storedFaceShape)

      // Get recommendations based on face shape
      const recs = getFaceShapeRecommendations(storedFaceShape)
      setRecommendations(recs)
    }

    if (storedFaceImage) {
      setFaceImage(storedFaceImage)
    }
  }, [])

  if (!faceShape || !recommendations) {
    return (
      <div className="container max-w-4xl mx-auto px-4 py-8 text-center">
        <h1 className="text-2xl font-bold mb-4">Loading Results...</h1>
        <p>If you're seeing this for too long, please try scanning your face again.</p>
        <Link href="/" className="mt-4 inline-block">
          <Button>Return to Home</Button>
        </Link>
      </div>
    )
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
        <h1 className="text-2xl font-bold ml-4">Your Style Recommendations</h1>
      </div>

      <div className="grid md:grid-cols-[300px_1fr] gap-6 mb-8">
        <Card>
          <CardContent className="p-6">
            <div className="flex flex-col items-center">
              {faceImage && (
                <div className="relative w-full aspect-square mb-4 overflow-hidden rounded-lg border">
                  <img src={faceImage || "/placeholder.svg"} alt="Your face" className="object-cover w-full h-full" />
                </div>
              )}
              <div className="text-center">
                <h2 className="text-xl font-bold mb-2">Your Face Shape</h2>
                <div className="inline-block bg-primary/10 text-primary px-4 py-2 rounded-full font-medium">
                  {faceShape.charAt(0).toUpperCase() + faceShape.slice(1)}
                </div>
                <p className="mt-4 text-gray-500 text-sm">{recommendations.description}</p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Tabs defaultValue="glasses">
          <TabsList className="grid grid-cols-3 mb-6">
            <TabsTrigger value="glasses" className="flex items-center gap-2">
              <Glasses className="h-4 w-4" />
              <span>Glasses</span>
            </TabsTrigger>
            <TabsTrigger value="haircuts" className="flex items-center gap-2">
              <Scissors className="h-4 w-4" />
              <span>Haircuts</span>
            </TabsTrigger>
            <TabsTrigger value="collars" className="flex items-center gap-2">
              <Shirt className="h-4 w-4" />
              <span>Collars</span>
            </TabsTrigger>
          </TabsList>

          <TabsContent value="glasses">
            <Card>
              <CardContent className="p-6">
                <h3 className="text-lg font-medium mb-4">Recommended Glasses Styles</h3>
                <div className="grid grid-cols-1 gap-4">
                  {recommendations.glasses.map((style, index) => (
                    <div key={index} className="flex items-center gap-3 p-4 border rounded-lg">
                      <div className="w-24 h-24 bg-gray-50 rounded-md flex items-center justify-center shrink-0 overflow-hidden">
                        <img
                          src={getGlassesImagePath(style.name) || "/placeholder.svg"}
                          alt={`${style.name} glasses`}
                          className="object-contain w-full h-full p-2"
                        />
                      </div>
                      <div>
                        <h4 className="font-medium">{style.name}</h4>
                        <p className="text-sm text-gray-500 mt-1">{style.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="haircuts">
            <Card>
              <CardContent className="p-6">
                <h3 className="text-lg font-medium mb-4">Recommended Haircut Styles</h3>
                <div className="grid grid-cols-1 gap-4">
                  {recommendations.haircuts.map((style, index) => (
                    <div key={index} className="flex items-center gap-3 p-4 border rounded-lg">
                      <div className="w-24 h-24 bg-gray-50 rounded-xl flex items-center justify-center shrink-0 overflow-hidden">
                        <img
                          src={getHaircutImagePath(style.name) || "/placeholder.svg"}
                          alt={`${style.name} haircut`}
                          className="object-contain w-full h-full p-2 rounded-2xl"
                        />
                      </div>
                      <div>
                        <h4 className="font-medium">{style.name}</h4>
                        <p className="text-sm text-gray-500 mt-1">{style.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="collars">
            <Card>
              <CardContent className="p-6">
                <h3 className="text-lg font-medium mb-4">Recommended Collar Styles</h3>
                <div className="grid grid-cols-1 gap-4">
                  {recommendations.collars.map((style, index) => (
                    <div key={index} className="flex items-center gap-3 p-4 border rounded-lg">
                      <div className="w-24 h-24 bg-gray-50 rounded-2xl flex items-center justify-center shrink-0 overflow-hidden">
                        <img
                          src={getCollarImagePath(style.name) || "/placeholder.svg"}
                          alt={`${style.name} collar`}
                          className="object-contain w-full h-full p-2 rounded-2xl"
                        />
                      </div>
                      <div>
                        <h4 className="font-medium">{style.name}</h4>
                        <p className="text-sm text-gray-500 mt-1">{style.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>

      <div className="flex justify-center">
        <Link href="/">
          <Button variant="outline" size="lg">
            Start New Analysis
          </Button>
        </Link>
      </div>
    </div>
  )
}
