// This file would contain mappings for actual glasses images in a production app

interface GlassesImage {
    type: string
    imagePath: string
    altText: string
  }
  
  // In a real application, you would replace these with actual image paths
  export const glassesImages: GlassesImage[] = [
    {
      type: "Rectangular",
      imagePath: "/images/glasses/rectangular.jpg",
      altText: "Rectangular glasses with straight lines and angles",
    },
    {
      type: "Wayfarer",
      imagePath: "/images/glasses/wayfarer.jpg",
      altText: "Wayfarer glasses with distinctive trapezoidal shape",
    },
    {
      type: "Aviator",
      imagePath: "/images/glasses/aviator.jpg",
      altText: "Aviator glasses with teardrop shape and thin metal frame",
    },
    {
      type: "Cat-Eye",
      imagePath: "/images/glasses/cat-eye.jpg",
      altText: "Cat-eye glasses with upswept outer edges",
    },
    {
      type: "Round",
      imagePath: "/images/glasses/round.jpg",
      altText: "Round glasses with circular frames",
    },
    {
      type: "Square",
      imagePath: "/images/glasses/square.jpg",
      altText: "Square glasses with equal width and height",
    },
    {
      type: "Geometric",
      imagePath: "/images/glasses/geometric.jpg",
      altText: "Geometric glasses with unique angular shapes",
    },
    {
      type: "Angular Frames",
      imagePath: "/images/glasses/angular.jpg",
      altText: "Angular glasses with strong lines and sharp corners",
    },
    {
      type: "Oval",
      imagePath: "/images/glasses/oval.jpg",
      altText: "Oval glasses with balanced, rounded rectangular shape",
    },
    {
      type: "Rimless",
      imagePath: "/images/glasses/rimless.jpg",
      altText: "Rimless glasses with no visible frame around the lenses",
    },
    {
      type: "Semi-Rimless",
      imagePath: "/images/glasses/semi-rimless.jpg",
      altText: "Semi-rimless glasses with frame on top half only",
    },
    {
      type: "Bottom-Heavy Frames",
      imagePath: "/images/glasses/bottom-heavy.jpg",
      altText: "Bottom-heavy glasses with substantial lower portions",
    },
    {
      type: "Light-Colored Frames",
      imagePath: "/images/glasses/light-colored.jpg",
      altText: "Light-colored glasses frames in subtle tones",
    },
    {
      type: "Frames with Detailing",
      imagePath: "/images/glasses/detailed.jpg",
      altText: "Glasses with decorative elements at the temples or browline",
    },
    {
      type: "Oversized",
      imagePath: "/images/glasses/oversized.jpg",
      altText: "Oversized glasses that extend beyond the face",
    },
    {
      type: "Decorative Temples",
      imagePath: "/images/glasses/decorative-temples.jpg",
      altText: "Glasses with decorative elements at the temples",
    },
  ]
  
  // Function to get the image for a specific glasses type
  export function getGlassesImage(glassesType: string): GlassesImage | undefined {
    return glassesImages.find((image) => image.type.toLowerCase() === glassesType.toLowerCase())
  }
  