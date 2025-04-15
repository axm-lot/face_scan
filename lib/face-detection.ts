// // This is a simplified version for demonstration purposes
// // In a real application, you would use a proper face detection library like face-api.js or TensorFlow.js

// export async function detectFaceShape(imageData: string): Promise<string> {
//   // Simulate processing time
//   await new Promise((resolve) => setTimeout(resolve, 2000))

//   // In a real implementation, this function would:
//   // 1. Use a face detection library to identify facial landmarks
//   // 2. Calculate ratios between key points (jawline, cheekbones, forehead, etc.)
//   // 3. Determine face shape based on these measurements

//   // For demo purposes, we'll return a random face shape
//   const faceShapes = ["oval", "round", "square", "heart", "diamond", "oblong"]
//   const randomIndex = Math.floor(Math.random() * faceShapes.length)
//   return faceShapes[randomIndex]
// }

// // In a production app, you would implement actual face detection logic
// // Example with face-api.js (commented out as it's just for reference):
// /*
// import * as faceapi from 'face-api.js';

// export async function detectFaceShape(imageData: string): Promise<string> {
//   // Load models
//   await faceapi.nets.ssdMobilenetv1.loadFromUri('/models');
//   await faceapi.nets.faceLandmark68Net.loadFromUri('/models');
  
//   // Create image element
//   const img = new Image();
//   img.src = imageData;
//   await new Promise(resolve => { img.onload = resolve });
  
//   // Detect face landmarks
//   const detections = await faceapi.detectSingleFace(img).withFaceLandmarks();
  
//   if (!detections) {
//     throw new Error('No face detected');
//   }
  
//   // Calculate face measurements
//   const landmarks = detections.landmarks;
//   const jawWidth = calculateDistance(landmarks.getJawContour()[0], landmarks.getJawContour()[16]);
//   const cheekboneWidth = calculateDistance(landmarks.getJawContour()[4], landmarks.getJawContour()[12]);
//   const foreheadWidth = calculateDistance(landmarks.getJawContour()[0], landmarks.getJawContour()[16]);
//   const faceLength = calculateDistance(landmarks.getNose()[0], landmarks.getJawContour()[8]);
  
//   // Determine face shape based on ratios
//   // ... logic to determine face shape ...
  
//   return faceShape;
// }

// function calculateDistance(point1, point2) {
//   return Math.sqrt(Math.pow(point2.x - point1.x, 2) + Math.pow(point2.y - point1.y, 2));
// }
// */

"use client";

import * as tf from '@tensorflow/tfjs';

// Prevent TensorFlow.js initialization issues in server-side rendering
if (typeof window !== 'undefined') {
  tf.setBackend('webgl').catch(() => tf.setBackend('cpu'));
}

// Define a light-weight face detection method using simple image analysis
// This avoids dependency on face-api.js which has Node.js dependencies
export async function detectFaceShape(imageData: string): Promise<string> {
  try {
    console.log('Starting face shape detection');
    
    // Load the image
    const img = await loadImage(imageData);
    
    // Simulate analysis delay
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    // Analyze the image to determine face shape
    const faceShape = await analyzeFaceShape(img);
    
    console.log('Face shape detected:', faceShape);
    return faceShape;
  } catch (error) {
    console.error('Error in face shape detection:', error);
    throw new Error('Face detection failed. Please try again with a clearer photo.');
  }
}

// Helper function to load an image from data URL
function loadImage(imageData: string): Promise<HTMLImageElement> {
  return new Promise((resolve, reject) => {
    const img = new Image();
    img.onload = () => resolve(img);
    img.onerror = () => reject(new Error('Failed to load image'));
    img.src = imageData;
  });
}

// Face shape analysis using image processing techniques
async function analyzeFaceShape(img: HTMLImageElement): Promise<string> {  
  // Create a canvas to analyze the image
  const canvas = document.createElement('canvas');
  const ctx = canvas.getContext('2d');
  if (!ctx) {
    throw new Error('Could not get canvas context');
  }
  
  // Set canvas dimensions
  canvas.width = img.width;
  canvas.height = img.height;
  
  // Draw image to canvas
  ctx.drawImage(img, 0, 0, canvas.width, canvas.height);
  
  // Get image data
  const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
  const { data, width, height } = imageData;
  
  // Apply basic edge detection to find the face outline
  const edges = detectEdges(data, width, height);
  
  // Analyze the edges to determine face dimensions
  const dimensions = analyzeEdges(edges, width, height);
  
  // Determine face shape based on dimensions
  return determineFaceShape(dimensions);
}

// Basic edge detection function
function detectEdges(data: Uint8ClampedArray, width: number, height: number): boolean[][] {
  // Create an array to store edge detection results
  const edges: boolean[][] = Array(height).fill(0).map(() => Array(width).fill(false));
  
  // Simple Sobel edge detection
  const threshold = 30; // Edge detection threshold
  
  for (let y = 1; y < height - 1; y++) {
    for (let x = 1; x < width - 1; x++) {
      // Get the pixel and its neighbors
      const idx = (y * width + x) * 4;
      
      // Calculate horizontal and vertical gradients using Sobel operator
      const gx = 
        -1 * data[((y-1) * width + (x-1)) * 4] +
        -2 * data[((y) * width + (x-1)) * 4] +
        -1 * data[((y+1) * width + (x-1)) * 4] +
        1 * data[((y-1) * width + (x+1)) * 4] +
        2 * data[((y) * width + (x+1)) * 4] +
        1 * data[((y+1) * width + (x+1)) * 4];
      
      const gy = 
        -1 * data[((y-1) * width + (x-1)) * 4] +
        -2 * data[((y-1) * width + (x)) * 4] +
        -1 * data[((y-1) * width + (x+1)) * 4] +
        1 * data[((y+1) * width + (x-1)) * 4] +
        2 * data[((y+1) * width + (x)) * 4] +
        1 * data[((y+1) * width + (x+1)) * 4];
      
      // Calculate gradient magnitude
      const magnitude = Math.sqrt(gx * gx + gy * gy);
      
      // Apply threshold
      if (magnitude > threshold) {
        edges[y][x] = true;
      }
    }
  }
  
  return edges;
}

// Analyze edges to determine face dimensions
function analyzeEdges(edges: boolean[][], width: number, height: number): {
  widthToHeightRatio: number;
  jawWidth: number;
  foreheadWidth: number;
  cheekboneWidth: number;
  chinWidth: number;
} {
  // Determine face boundaries (basic approximation)
  const topBoundary = height * 0.2; // Approximate forehead position
  const bottomBoundary = height * 0.8; // Approximate chin position
  const middleY = height * 0.5; // Middle of the face
  const eyeLevel = height * 0.35; // Eye level approximation
  const jawLevel = height * 0.7; // Jaw level approximation
  
  // Calculate face width at different positions
  let foreheadWidth = 0;
  let cheekboneWidth = 0;
  let jawWidth = 0;
  let chinWidth = 0;
  
  // Detect face width at forehead level
  for (let x = Math.floor(width * 0.2); x < Math.floor(width * 0.8); x++) {
    if (edges[Math.floor(topBoundary)][x]) {
      foreheadWidth++;
    }
  }
  
  // Detect face width at cheekbone level
  for (let x = Math.floor(width * 0.2); x < Math.floor(width * 0.8); x++) {
    if (edges[Math.floor(eyeLevel)][x]) {
      cheekboneWidth++;
    }
  }
  
  // Detect face width at jaw level
  for (let x = Math.floor(width * 0.2); x < Math.floor(width * 0.8); x++) {
    if (edges[Math.floor(jawLevel)][x]) {
      jawWidth++;
    }
  }
  
  // Detect face width at chin level
  for (let x = Math.floor(width * 0.2); x < Math.floor(width * 0.8); x++) {
    if (edges[Math.floor(bottomBoundary)][x]) {
      chinWidth++;
    }
  }
  
  // Normalize to prevent zero values
  foreheadWidth = Math.max(foreheadWidth, 10);
  cheekboneWidth = Math.max(cheekboneWidth, 10);
  jawWidth = Math.max(jawWidth, 10);
  chinWidth = Math.max(chinWidth, 5);
  
  // Calculate face height
  const faceHeight = bottomBoundary - topBoundary;
  
  // Use the maximum width as the face width
  const faceWidth = Math.max(foreheadWidth, cheekboneWidth, jawWidth);
  
  // Calculate width-to-height ratio
  const widthToHeightRatio = faceWidth / faceHeight;
  
  return {
    widthToHeightRatio,
    jawWidth,
    foreheadWidth,
    cheekboneWidth,
    chinWidth
  };
}

// Determine face shape based on dimensions
function determineFaceShape(dimensions: {
  widthToHeightRatio: number;
  jawWidth: number;
  foreheadWidth: number;
  cheekboneWidth: number;
  chinWidth: number;
}): string {
  const { widthToHeightRatio, jawWidth, foreheadWidth, cheekboneWidth, chinWidth } = dimensions;
  
  // Calculate ratios
  const foreheadToJawRatio = foreheadWidth / jawWidth;
  const cheekboneToJawRatio = cheekboneWidth / jawWidth;
  const chinToJawRatio = chinWidth / jawWidth;
  
  console.log('Face ratios:', {
    widthToHeightRatio, 
    foreheadToJawRatio, 
    cheekboneToJawRatio, 
    chinToJawRatio
  });
  
  // Determine face shape based on ratios
  if (widthToHeightRatio > 0.85) {
    // Face is relatively wide compared to height
    if (foreheadToJawRatio > 1.1 && chinToJawRatio < 0.85) {
      return "heart";
    } else if (jawWidth >= cheekboneWidth * 0.98) {
      return "square";
    } else {
      return "round";
    }
  } else {
    // Face is relatively long compared to width
    if (cheekboneToJawRatio > 1.1) {
      if (foreheadToJawRatio > 1.1 && chinToJawRatio < 0.8) {
        return "diamond";
      } else {
        return "oval";
      }
    } else {
      return "oblong";
    }
  }
}

// Function to provide tips based on face shape
export function getFaceShapeTips(faceShape: string): {
  description: string;
  hairstyles: string[];
  glasses: string[];
  accessories: string[];
} {
  const tips = {
    oval: {
      description: "Oval faces are well-balanced with a slightly narrower forehead and jawline compared to cheekbones.",
      hairstyles: ["Layered cuts", "Shoulder-length bobs", "Side-swept bangs", "Most styles work well"],
      glasses: ["Any shape works well", "Try aviators or rectangular frames"],
      accessories: ["Statement earrings", "Almost any hat style"]
    },
    round: {
      description: "Round faces have soft curves with nearly equal width and length measurements.",
      hairstyles: ["Layered cuts with volume on top", "Side-parted styles", "Long bobs", "Avoid full bangs"],
      glasses: ["Rectangular frames", "Angular glasses", "Avoid round shapes"],
      accessories: ["Drop earrings", "V-neck tops", "Angular hats"]
    },
    square: {
      description: "Square faces have a strong, angular jawline with forehead, cheekbones, and jawline of similar width.",
      hairstyles: ["Layered cuts", "Side-swept bangs", "Waves or curls", "Avoid blunt cuts"],
      glasses: ["Round or oval frames", "Rimless styles", "Avoid square shapes"],
      accessories: ["Round earrings", "Scarves", "Soft-brimmed hats"]
    },
    heart: {
      description: "Heart-shaped faces have a wider forehead and cheekbones with a narrow, pointed chin.",
      hairstyles: ["Chin-length bobs", "Side-parted styles", "Layered cuts", "Full or side-swept bangs"],
      glasses: ["Bottom-heavy frames", "Aviators", "Cat-eye glasses"],
      accessories: ["Drop earrings", "Chunky necklaces", "Wide-brimmed hats"]
    },
    diamond: {
      description: "Diamond faces have narrow foreheads and jawlines with prominent cheekbones.",
      hairstyles: ["Chin-length styles", "Side bangs", "Texture on top", "Volume at the forehead"],
      glasses: ["Oval frames", "Rimless styles", "Cat-eye glasses"],
      accessories: ["Stud earrings", "Chunky necklaces", "Beanies or close-fitting hats"]
    },
    oblong: {
      description: "Oblong faces are longer than they are wide with a straight cheek line.",
      hairstyles: ["Side bangs", "Layers around the face", "Voluminous styles", "Avoid long straight cuts"],
      glasses: ["Round or square frames", "Decorative temples", "Avoid narrow frames"],
      accessories: ["Bold, round earrings", "Choker necklaces", "Berets or wide-brimmed hats"]
    }
  };
  
  return tips[faceShape as keyof typeof tips] || tips.oval;
}