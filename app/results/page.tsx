"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { ArrowLeft, Glasses, Scissors, Shirt } from "lucide-react"
import { getFaceShapeRecommendations } from "@/lib/recommendations"

interface Recommendation {
  glasses: string[]
  haircuts: string[]
  collars: string[]
  description: string
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
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {recommendations.glasses.map((style, index) => (
                    <div key={index} className="flex items-start gap-3 p-3 border rounded-lg">
                      <div className="w-16 h-16 bg-gray-100 rounded-md flex items-center justify-center">
                        <Glasses className="h-8 w-8 text-gray-400" />
                      </div>
                      <div>
                        <h4 className="font-medium">{style}</h4>
                        <p className="text-sm text-gray-500">Perfect complement for your {faceShape} face shape</p>
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
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {recommendations.haircuts.map((style, index) => (
                    <div key={index} className="flex items-start gap-3 p-3 border rounded-lg">
                      <div className="w-16 h-16 bg-gray-100 rounded-md flex items-center justify-center">
                        <Scissors className="h-8 w-8 text-gray-400" />
                      </div>
                      <div>
                        <h4 className="font-medium">{style}</h4>
                        <p className="text-sm text-gray-500">Enhances the features of your {faceShape} face shape</p>
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
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {recommendations.collars.map((style, index) => (
                    <div key={index} className="flex items-start gap-3 p-3 border rounded-lg">
                      <div className="w-16 h-16 bg-gray-100 rounded-md flex items-center justify-center">
                        <Shirt className="h-8 w-8 text-gray-400" />
                      </div>
                      <div>
                        <h4 className="font-medium">{style}</h4>
                        <p className="text-sm text-gray-500">Flattering neckline for your {faceShape} face shape</p>
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
