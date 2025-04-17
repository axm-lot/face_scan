// This file would contain mappings for actual haircut images in a production app

interface HaircutImage {
    type: string
    imagePath: string
    altText: string
  }
  
  // In a real application, you would replace these with actual image paths
  export const haircutImages: HaircutImage[] = [
    {
      type: "Pixie Cut",
      imagePath: "/images/haircuts/pixie-cut.png",
      altText: "Pixie cut with short layers all over and slightly longer hair on top",
    },
    {
      type: "Bob",
      imagePath: "/images/haircuts/bob.png",
      altText: "Bob haircut with straight, jaw-length cut",
    },
    {
      type: "Long Layers",
      imagePath: "/images/haircuts/long-layers.png",
      altText: "Long layered haircut with varying lengths creating movement and dimension",
    },
    {
      type: "Side-Swept Bangs",
      imagePath: "/images/haircuts/side-swept.png",
      altText: "Hairstyle with side-swept bangs cut at an angle across the forehead",
    },
    {
      type: "Side Part",
      imagePath: "/images/haircuts/side-part.jpg",
      altText: "Hairstyle with a defined side part creating asymmetry",
    },
    {
      type: "Asymmetrical Bob",
      imagePath: "/images/haircuts/asymmetrical-bob.jpg",
      altText: "Asymmetrical bob with one side cut shorter than the other",
    },
    {
      type: "Volume on Top",
      imagePath: "/images/haircuts/volume-on-top.jpg",
      altText: "Hairstyle with added height and volume at the crown",
    },
    {
      type: "Layered Cuts",
      imagePath: "/images/haircuts/layered-cuts.jpg",
      altText: "Layered haircut with soft, feathered edges",
    },
    {
      type: "Soft Waves",
      imagePath: "/images/haircuts/soft-waves.jpg",
      altText: "Hairstyle with soft waves or curls adding roundness",
    },
    {
      type: "Textured Crop",
      imagePath: "/images/haircuts/textured-crop.jpg",
      altText: "Textured crop with short, piece-y layers with movement on top",
    },
    {
      type: "Chin-Length",
      imagePath: "/images/haircuts/chin-length.jpg",
      altText: "Haircut that hits at the chin adding width to the jawline",
    },
    {
      type: "Textured Pixie",
      imagePath: "/images/haircuts/textured-pixie.jpg",
      altText: "Pixie cut with textured layers on top adding volume",
    },
    {
      type: "Volume at Forehead",
      imagePath: "/images/haircuts/volume-at-forehead.jpg",
      altText: "Hairstyle with volume and fullness at the forehead",
    },
    {
      type: "Side Bangs",
      imagePath: "/images/haircuts/side-bangs.jpg",
      altText: "Hairstyle with side bangs creating horizontal lines",
    },
    {
      type: "Layers",
      imagePath: "/images/haircuts/layers.jpg",
      altText: "Layered haircut with volume at the sides",
    },
    {
      type: "Waves or Curls",
      imagePath: "/images/haircuts/waves-or-curls.jpg",
      altText: "Hairstyle with waves or curls adding width and volume",
    },
    {
      type: "Medium Length",
      imagePath: "/images/haircuts/medium-length.jpg",
      altText: "Medium-length cut that hits between the chin and shoulders",
    },
  ]
  
  // Function to get the image for a specific haircut type
  export function getHaircutImage(haircutType: string): HaircutImage | undefined {
    return haircutImages.find((image) => image.type.toLowerCase() === haircutType.toLowerCase())
  }
  