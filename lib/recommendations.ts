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

export function getFaceShapeRecommendations(faceShape: string): Recommendation {
  const recommendations: Record<string, Recommendation> = {
    oval: {
      description:
        "Oval faces are well-balanced and considered the ideal face shape. You can wear almost any style, but some choices will particularly enhance your natural symmetry.",
      glasses: [
        {
          name: "Rectangular",
          description:
            "Rectangular frames feature straight lines and angles that add definition to your naturally soft features. These frames typically have a width greater than their height and create a nice contrast with the curved lines of your oval face.",
        },
        {
          name: "Wayfarer",
          description:
            "Wayfarer glasses have a distinctive trapezoidal shape with a broader upper portion that tapers toward the bottom. This iconic style adds character to your balanced oval face while maintaining proportion with your features.",
        },
        {
          name: "Aviator",
          description:
            "Aviator frames feature a teardrop shape with a thin metal frame. Originally designed for pilots, these glasses complement oval faces by following the natural curve of your cheekbones while adding a touch of classic style.",
        },
        {
          name: "Cat-Eye",
          description:
            "Cat-eye glasses have distinctive upswept outer edges, creating a shape reminiscent of a cat's eye. They often have a vintage or retro feel, with various frame materials including plastic and metal, and they can come in a variety of colors and patterns.",
        },
      ],
      haircuts: [
        {
          name: "Pixie Cut",
          description:
            "A pixie cut is a short hairstyle that features short layers all over with slightly longer hair on top. This style works beautifully with oval faces as it highlights your facial features and draws attention to your eyes while maintaining balance.",
        },
        {
          name: "Bob",
          description:
            "The bob is a straight, typically jaw-length cut that can be worn with or without bangs. This versatile style frames an oval face perfectly, accentuating the jawline while maintaining the natural balance of your facial proportions.",
        },
        {
          name: "Long Layers",
          description:
            "Long layered cuts feature varying lengths throughout the hair, creating movement and dimension. This style complements oval faces by softly framing your features while the layers add volume and texture that enhance your natural symmetry.",
        },
        {
          name: "Side-Swept Bangs",
          description:
            "Side-swept bangs cut at an angle across the forehead add asymmetry and interest to oval faces. This style can be incorporated into various hair lengths and draws attention to your eyes while maintaining your face's natural balance.",
        },
      ],
      collars: [
        {
          name: "V-Neck",
          description:
            "V-neck collars create a vertical line that elongates the neck and draws the eye downward. This style complements oval faces by maintaining the natural balance of your features while adding a slimming effect to the upper body.",
        },
        {
          name: "Crew Neck",
          description:
            "Crew necks are rounded collars that sit at the base of the neck. This classic style works well with oval faces as it maintains the natural symmetry of your features without overwhelming your balanced proportions.",
        },
        {
          name: "Boat Neck",
          description:
            "Boat necks (also called bateau necks) feature a wide, straight cut that runs across the collarbone from shoulder to shoulder. This elegant style complements oval faces by creating a horizontal line that balances your face's vertical length.",
        },
        {
          name: "Collared Shirts",
          description:
            "Traditional collared shirts with points that frame the neck add structure that complements oval faces. These versatile collars create clean lines that enhance your natural symmetry while adding a touch of formality or casual sophistication.",
        },
      ],
    },
    round: {
      description:
        "Round faces have soft features with a rounded chin and fuller cheeks. The width and length of the face are roughly equal, with no sharp angles or prominent jawline.",
      glasses: [
        {
          name: "Rectangle",
          description:
            "Rectangular frames feature straight, angular lines that contrast with the soft curves of a round face. These frames typically have a width greater than their height, which helps create the illusion of a longer, thinner face and adds definition to your features.",
        },
        {
          name: "Square",
          description:
            "Square glasses have equal width and height with sharp, defined corners. These frames add angles and structure to round faces, creating contrast with your soft features and helping to make your face appear longer and more defined.",
        },
        {
          name: "Geometric",
          description:
            "Geometric frames feature unique angular shapes like hexagons or octagons. These distinctive styles add interesting lines and angles to round faces, creating visual interest and contrast that helps balance the softness of your facial features.",
        },
        {
          name: "Angular Frames",
          description:
            "Angular frames with strong lines and sharp corners create definition for round faces. These styles often feature upswept corners or bold browlines that add structure and help elongate the face while drawing attention upward.",
        },
      ],
      haircuts: [
        {
          name: "Long Layers",
          description:
            "Long layered cuts with face-framing layers create vertical lines that elongate round faces. The varying lengths add dimension and movement while the longer overall length helps slim the face and create the illusion of length.",
        },
        {
          name: "Side Part",
          description:
            "A side part creates asymmetry that helps break up the roundness of your face. This versatile styling technique can be incorporated into various haircuts and adds angles that contrast with your soft features while creating the appearance of length.",
        },
        {
          name: "Asymmetrical Bob",
          description:
            "An asymmetrical bob features one side cut shorter than the other, creating diagonal lines that add angles to round faces. This modern style helps offset fullness in the cheeks while the diagonal lines create the illusion of a more oval shape.",
        },
        {
          name: "Volume on Top",
          description:
            "Styles with added height and volume at the crown create vertical length for round faces. These cuts typically feature shorter sides with longer, voluminous hair on top, creating a lengthening effect that balances the width of your face.",
        },
      ],
      collars: [
        {
          name: "V-Neck",
          description:
            "V-neck collars create a strong vertical line that elongates round faces. This flattering neckline draws the eye downward, creating the illusion of length while the angular shape contrasts beautifully with the soft curves of your face.",
        },
        {
          name: "Deep V",
          description:
            "Deep V-necklines extend further down the chest, creating an even stronger vertical line. This dramatic style is particularly flattering for round faces as it maximizes the lengthening effect and draws attention away from the fullness of your cheeks.",
        },
        {
          name: "Button-Up",
          description:
            "Button-up shirts with collars create structure and vertical lines that complement round faces. The vertical placket of buttons creates length, while the collar frames your face and adds angles that contrast with your soft features.",
        },
        {
          name: "Vertical Patterns",
          description:
            "Garments with vertical stripes or patterns create visual lines that elongate round faces. These designs draw the eye up and down rather than side to side, creating the illusion of a longer, narrower face shape.",
        },
      ],
    },
    square: {
      description:
        "Square faces have a strong jawline and forehead of similar width. The sides of the face are straight, creating a boxy appearance with defined angles.",
      glasses: [
        {
          name: "Round",
          description:
            "Round frames feature soft, curved lines that contrast with the angular features of square faces. These circular or oval-shaped glasses soften strong jawlines and add balance by introducing curves that complement your straight features.",
        },
        {
          name: "Oval",
          description:
            "Oval glasses have a rounded shape that's slightly wider than it is tall. These frames soften the angular lines of square faces while their balanced proportions complement your strong features without overwhelming them.",
        },
        {
          name: "Rimless",
          description:
            "Rimless glasses have no visible frame around the lenses, creating a lightweight, minimalist look. This subtle style softens square faces by removing harsh lines and allowing your natural features to show through without added structure.",
        },
        {
          name: "Semi-Rimless",
          description:
            "Semi-rimless frames have a frame on the top half of the lenses with no rim on the bottom. This style balances square faces by adding structure at the browline while the rimless bottom softens the appearance of a strong jawline.",
        },
      ],
      haircuts: [
        {
          name: "Side-Swept Bangs",
          description:
            "Side-swept bangs cut at an angle add softness to square faces. This versatile style introduces diagonal lines that contrast with your angular features while partially covering the forehead to reduce the appearance of width.",
        },
        {
          name: "Layered Cuts",
          description:
            "Layered haircuts with soft, feathered edges soften the angular lines of square faces. These styles add movement and texture around your face, creating a more rounded appearance that balances your strong jawline.",
        },
        {
          name: "Soft Waves",
          description:
            "Hairstyles with soft waves or curls add roundness that contrasts with the straight lines of square faces. These styles soften angular features while adding volume at the sides that balances the width of your jawline and forehead.",
        },
        {
          name: "Textured Crop",
          description:
            "A textured crop features short, piece-y layers with movement on top. This style softens square faces by adding texture and dimension that breaks up the angular lines while maintaining a modern, low-maintenance look.",
        },
      ],
      collars: [
        {
          name: "Round Neck",
          description:
            "Round necklines create a soft curve that contrasts with the angular lines of square faces. This simple style softens your strong jawline and adds balance by introducing curves that complement your straight features.",
        },
        {
          name: "Scoop Neck",
          description:
            "Scoop necks feature a deep, U-shaped curve that softens square faces. This feminine style creates a beautiful contrast with your angular features while the open neckline draws attention away from the jawline.",
        },
        {
          name: "Cowl Neck",
          description:
            "Cowl necks have soft, draped fabric that gathers around the neck. This flowing style adds softness to square faces by creating gentle curves and movement that contrast with your defined jawline and straight features.",
        },
        {
          name: "Soft Collars",
          description:
            "Shirts and blouses with soft, rounded collars without sharp points complement square faces. These styles add curves near your face that balance your angular features while maintaining a polished, put-together look.",
        },
      ],
    },
    heart: {
      description:
        "Heart-shaped faces have a wider forehead and cheekbones with a narrow chin. The face tapers from the temples to a defined point at the chin, creating a heart-like silhouette.",
      glasses: [
        {
          name: "Bottom-Heavy Frames",
          description:
            "Bottom-heavy frames have more substantial lower portions that balance heart-shaped faces. These styles add visual weight to the lower part of your face, creating equilibrium with your wider forehead and drawing attention away from your narrow chin.",
        },
        {
          name: "Oval",
          description:
            "Oval glasses feature a balanced, rounded rectangular shape. These versatile frames soften the angles of heart-shaped faces while their curved lines complement your cheekbones and create harmony with your facial proportions.",
        },
        {
          name: "Light-Colored Frames",
          description:
            "Frames in lighter colors or translucent materials create a softer look for heart-shaped faces. These subtle styles minimize the contrast between your glasses and face, creating a balanced appearance that doesn't emphasize your wider forehead.",
        },
        {
          name: "Rimless",
          description:
            "Rimless glasses have no visible frame around the lenses, creating an almost invisible look. This minimalist style works well with heart-shaped faces as it doesn't add visual weight to any particular area, allowing your natural features to shine.",
        },
      ],
      haircuts: [
        {
          name: "Side-Swept Bangs",
          description:
            "Side-swept bangs cut at an angle soften the width of the forehead on heart-shaped faces. This flattering style creates diagonal lines that draw attention away from your forehead while framing your face and highlighting your cheekbones.",
        },
        {
          name: "Chin-Length Bob",
          description:
            "A bob cut at chin length adds volume around the jawline of heart-shaped faces. This balanced style creates the illusion of width in the lower part of your face, harmonizing with your wider forehead and creating a more oval appearance.",
        },
        {
          name: "Long Layers",
          description:
            "Long layered cuts with face-framing layers that start at the chin or below balance heart-shaped faces. These styles add volume around your jawline while the longer length creates vertical lines that complement your facial structure.",
        },
        {
          name: "Medium-Length Cuts",
          description:
            "Medium-length styles that hit at or below the chin add width to the lower part of heart-shaped faces. These versatile cuts can incorporate layers or waves that create volume around your jawline, balancing your wider forehead.",
        },
      ],
      collars: [
        {
          name: "Boat Neck",
          description:
            "Boat necks (also called bateau necks) feature a wide, straight cut that runs across the collarbone. This horizontal line balances heart-shaped faces by creating width at the shoulders that harmonizes with your wider forehead.",
        },
        {
          name: "Scoop Neck",
          description:
            "Scoop necklines create a gentle U-shape that softens heart-shaped faces. This open style draws attention downward from your forehead while the curved line complements the tapering shape of your face.",
        },
        {
          name: "Cowl Neck",
          description:
            "Cowl necks have soft, draped fabric that gathers around the neck. This textured style adds visual interest to the upper body of heart-shaped faces, creating balance with your wider forehead while the soft folds add a flattering frame.",
        },
        {
          name: "Detailed Collars",
          description:
            "Collars with interesting details, embellishments, or unique shapes draw attention to the neckline of heart-shaped faces. These eye-catching styles redirect focus from your forehead to your neckline, creating a balanced overall appearance.",
        },
      ],
    },
    diamond: {
      description:
        "Diamond faces have narrow foreheads and jawlines with wider cheekbones. The face is widest at the cheekbones, creating a diamond-like shape with defined angles.",
      glasses: [
        {
          name: "Cat-Eye",
          description:
            "Cat-eye glasses have distinctive upswept outer edges that align with the high cheekbones of diamond faces. These frames highlight your strongest feature while their curved lines soften the angular aspects of your face shape.",
        },
        {
          name: "Oval",
          description:
            "Oval frames feature a balanced, rounded rectangular shape that softens the angles of diamond faces. These versatile glasses complement your facial structure by adding curves that contrast with your defined cheekbones.",
        },
        {
          name: "Rimless",
          description:
            "Rimless glasses have no visible frame around the lenses, creating a lightweight, minimalist look. This subtle style works well with diamond faces as it doesn't add bulk to your already prominent cheekbones.",
        },
        {
          name: "Frames with Detailing",
          description:
            "Glasses with decorative elements at the temples or browline draw attention upward on diamond faces. These styles balance your narrow forehead by adding visual interest at the top of the frame while complementing your striking cheekbones.",
        },
      ],
      haircuts: [
        {
          name: "Side-Swept Bangs",
          description:
            "Side-swept bangs add width to the narrow forehead of diamond faces. This flattering style creates fullness at the top of your face while the diagonal line softens your angular features and highlights your eyes.",
        },
        {
          name: "Chin-Length",
          description:
            "Cuts that hit at the chin add width to the narrow jawline of diamond faces. These styles balance your prominent cheekbones by creating volume at the bottom of your face, resulting in a more harmonious overall appearance.",
        },
        {
          name: "Textured Pixie",
          description:
            "A pixie cut with textured layers on top adds volume to the narrow forehead of diamond faces. This short style creates fullness where you need it while the layers soften your angular features and highlight your striking cheekbones.",
        },
        {
          name: "Volume at Forehead",
          description:
            "Styles with volume and fullness at the forehead balance diamond faces. These cuts typically feature layers or bangs that add width to your narrower upper face, creating harmony with your wider cheekbones.",
        },
      ],
      collars: [
        {
          name: "Boat Neck",
          description:
            "Boat necks feature a wide, straight cut that runs across the collarbone from shoulder to shoulder. This horizontal line balances diamond faces by creating width at the shoulders that harmonizes with your prominent cheekbones.",
        },
        {
          name: "Cowl Neck",
          description:
            "Cowl necks have soft, draped fabric that gathers around the neck. This textured style adds fullness to the upper body of diamond faces, balancing your prominent cheekbones while the soft folds create a flattering frame.",
        },
        {
          name: "Collared Shirts",
          description:
            "Traditional collared shirts add structure and width to the narrow jawline of diamond faces. These versatile styles create clean lines that complement your angular features while adding balance to your overall silhouette.",
        },
        {
          name: "Detailed Necklines",
          description:
            "Necklines with interesting details, embellishments, or unique shapes draw attention away from the cheekbones of diamond faces. These eye-catching styles create visual interest that balances your prominent facial features.",
        },
      ],
    },
    oblong: {
      description:
        "Oblong faces are longer than they are wide with a long straight cheek line. The forehead, cheeks, and jawline are similar in width, creating an elongated oval shape.",
      glasses: [
        {
          name: "Round",
          description:
            "Round frames feature circular or oval shapes that add width to oblong faces. These glasses create the illusion of a shorter, wider face by introducing horizontal emphasis through their curved lines and balanced proportions.",
        },
        {
          name: "Square",
          description:
            "Square glasses have equal width and height with defined corners. These frames add width to oblong faces while their strong horizontal lines help break up the length of your face and create the appearance of more balanced proportions.",
        },
        {
          name: "Oversized",
          description:
            "Oversized frames that extend beyond the widest part of your face add width to oblong faces. These bold styles create the illusion of a wider face while their substantial size helps minimize the appearance of length.",
        },
        {
          name: "Decorative Temples",
          description:
            "Glasses with decorative elements or thickness at the temples create horizontal emphasis for oblong faces. These styles draw the eye outward rather than up and down, adding perceived width to your longer face shape.",
        },
      ],
      haircuts: [
        {
          name: "Side Bangs",
          description:
            "Side bangs create horizontal lines that add width to oblong faces. This versatile style breaks up the length of your face while adding volume at the sides that creates the illusion of a wider, more balanced face shape.",
        },
        {
          name: "Layers",
          description:
            "Layered cuts with volume at the sides add width to oblong faces. These styles create fullness at the cheeks and jawline, helping to balance your face's length while adding movement and dimension that draws the eye horizontally.",
        },
        {
          name: "Waves or Curls",
          description:
            "Hairstyles with waves or curls add width and volume to the sides of oblong faces. These textured styles create horizontal expansion that balances your face's length while the movement adds softness to your features.",
        },
        {
          name: "Medium Length",
          description:
            "Medium-length cuts that hit between the chin and shoulders are ideal for oblong faces. These styles avoid adding height while creating width at the sides, resulting in a more balanced appearance that complements your facial structure.",
        },
      ],
      collars: [
        {
          name: "Crew Neck",
          description:
            "Crew necks create a horizontal line that adds width to oblong faces. This classic style breaks up the vertical length of your face while the rounded shape adds softness that complements your elongated features.",
        },
        {
          name: "Boat Neck",
          description:
            "Boat necks feature a wide, straight cut that runs across the collarbone from shoulder to shoulder. This strong horizontal line is particularly flattering for oblong faces as it maximizes width at the shoulders, balancing your face's length.",
        },
        {
          name: "Turtleneck",
          description:
            "Turtlenecks create a continuous vertical line from your chin to your chest, which can be balanced with wider shoulders or horizontal details. When styled correctly, this sophisticated neckline adds elegance while maintaining proportion.",
        },
        {
          name: "Horizontal Patterns",
          description:
            "Garments with horizontal stripes or patterns create visual width that complements oblong faces. These designs draw the eye side to side rather than up and down, creating the illusion of a wider, more balanced face shape.",
        },
      ],
    },
  }

  // Default to oval if the face shape is not recognized
  return recommendations[faceShape.toLowerCase()] || recommendations.oval
}
