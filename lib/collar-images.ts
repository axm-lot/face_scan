// This file would contain mappings for actual collar images in a production app

interface CollarImage {
    type: string
    imagePath: string
    altText: string
  }
  
  // In a real application, you would replace these with actual image paths
  export const collarImages: CollarImage[] = [
    {
      type: "V-Neck",
      imagePath: "/images/collars/v-neck.jpg",
      altText: "V-neck collar creating a vertical line that elongates the neck",
    },
    {
      type: "Crew Neck",
      imagePath: "/images/collars/crew-neck.jpg",
      altText: "Crew neck collar with rounded shape sitting at the base of the neck",
    },
    {
      type: "Boat Neck",
      imagePath: "/images/collars/boat-neck.jpg",
      altText: "Boat neck (bateau neck) with wide, straight cut across the collarbone",
    },
    {
      type: "Collared Shirts",
      imagePath: "/images/collars/collared-shirts.jpg",
      altText: "Traditional collared shirt with points framing the neck",
    },
    {
      type: "Deep V",
      imagePath: "/images/collars/deep-v.jpg",
      altText: "Deep V-neckline extending further down the chest",
    },
    {
      type: "Button-Up",
      imagePath: "/images/collars/button-up.jpg",
      altText: "Button-up shirt with collar creating structure and vertical lines",
    },
    {
      type: "Vertical Patterns",
      imagePath: "/images/collars/vertical-patterns.jpg",
      altText: "Garment with vertical stripes or patterns creating visual lines",
    },
    {
      type: "Round Neck",
      imagePath: "/images/collars/round-neck.jpg",
      altText: "Round neckline creating a soft curve",
    },
    {
      type: "Scoop Neck",
      imagePath: "/images/collars/scoop-neck.jpg",
      altText: "Scoop neck with deep, U-shaped curve",
    },
    {
      type: "Cowl Neck",
      imagePath: "/images/collars/cowl-neck.jpg",
      altText: "Cowl neck with soft, draped fabric gathering around the neck",
    },
    {
      type: "Soft Collars",
      imagePath: "/images/collars/soft-collars.jpg",
      altText: "Shirt with soft, rounded collar without sharp points",
    },
    {
      type: "Detailed Collars",
      imagePath: "/images/collars/detailed-collars.jpg",
      altText: "Collar with interesting details, embellishments, or unique shapes",
    },
    {
      type: "Detailed Necklines",
      imagePath: "/images/collars/detailed-necklines.jpg",
      altText: "Neckline with interesting details, embellishments, or unique shapes",
    },
    {
      type: "Turtleneck",
      imagePath: "/images/collars/turtleneck.jpg",
      altText: "Turtleneck creating a continuous vertical line from chin to chest",
    },
    {
      type: "Horizontal Patterns",
      imagePath: "/images/collars/horizontal-patterns.jpg",
      altText: "Garment with horizontal stripes or patterns creating visual width",
    },
  ]
  
  // Function to get the image for a specific collar type
  export function getCollarImage(collarType: string): CollarImage | undefined {
    return collarImages.find((image) => image.type.toLowerCase() === collarType.toLowerCase())
  }
  