interface Recommendation {
  glasses: string[]
  haircuts: string[]
  collars: string[]
  description: string
}

export function getFaceShapeRecommendations(faceShape: string): Recommendation {
  const recommendations: Record<string, Recommendation> = {
    oval: {
      description: "Oval faces are well-balanced and considered the ideal face shape. You can wear almost any style.",
      glasses: ["Rectangular", "Wayfarer", "Aviator", "Cat-Eye"],
      haircuts: ["Pixie Cut", "Bob", "Long Layers", "Side-Swept Bangs"],
      collars: ["V-Neck", "Crew Neck", "Boat Neck", "Collared Shirts"],
    },
    round: {
      description: "Round faces have soft features with a rounded chin and fuller cheeks.",
      glasses: ["Rectangle", "Square", "Geometric", "Angular Frames"],
      haircuts: ["Long Layers", "Side Part", "Asymmetrical Bob", "Volume on Top"],
      collars: ["V-Neck", "Deep V", "Button-Up", "Vertical Patterns"],
    },
    square: {
      description: "Square faces have a strong jawline and forehead of similar width.",
      glasses: ["Round", "Oval", "Rimless", "Semi-Rimless"],
      haircuts: ["Side-Swept Bangs", "Layered Cuts", "Soft Waves", "Textured Crop"],
      collars: ["Round Neck", "Scoop Neck", "Cowl Neck", "Soft Collars"],
    },
    heart: {
      description: "Heart-shaped faces have a wider forehead and cheekbones with a narrow chin.",
      glasses: ["Bottom-Heavy Frames", "Oval", "Light-Colored Frames", "Rimless"],
      haircuts: ["Side-Swept Bangs", "Chin-Length Bob", "Long Layers", "Medium-Length Cuts"],
      collars: ["Boat Neck", "Scoop Neck", "Cowl Neck", "Detailed Collars"],
    },
    diamond: {
      description: "Diamond faces have narrow foreheads and jawlines with wider cheekbones.",
      glasses: ["Cat-Eye", "Oval", "Rimless", "Frames with Detailing"],
      haircuts: ["Side-Swept Bangs", "Chin-Length", "Textured Pixie", "Volume at Forehead"],
      collars: ["Boat Neck", "Cowl Neck", "Collared Shirts", "Detailed Necklines"],
    },
    oblong: {
      description: "Oblong faces are longer than they are wide with a long straight cheek line.",
      glasses: ["Round", "Square", "Oversized", "Decorative Temples"],
      haircuts: ["Side Bangs", "Layers", "Waves or Curls", "Medium Length"],
      collars: ["Crew Neck", "Boat Neck", "Turtleneck", "Horizontal Patterns"],
    },
  }

  // Default to oval if the face shape is not recognized
  return recommendations[faceShape.toLowerCase()] || recommendations.oval
}
