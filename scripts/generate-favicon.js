import sharp from 'sharp';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Ensure the public directory exists
const publicDir = path.join(__dirname, '../public');
if (!fs.existsSync(publicDir)) {
     fs.mkdirSync(publicDir);
}

// SVG content for the logo
const svgContent = `
<svg width="512" height="512" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="gradientA" x1="0%" y1="0%" x2="100%" y2="0%">
      <stop offset="0%" style="stop-color:#3b82f6" />
      <stop offset="100%" style="stop-color:#8b5cf6" />
    </linearGradient>
    <linearGradient id="gradientF" x1="0%" y1="0%" x2="100%" y2="0%">
      <stop offset="0%" style="stop-color:#8b5cf6" />
      <stop offset="100%" style="stop-color:#ec4899" />
    </linearGradient>
    <linearGradient id="gradientX" x1="0%" y1="0%" x2="100%" y2="0%">
      <stop offset="0%" style="stop-color:#ec4899" />
      <stop offset="100%" style="stop-color:#3b82f6" />
    </linearGradient>
  </defs>
  
  <rect width="512" height="512" fill="white" />
  
  <text x="128" y="320" font-size="160" font-weight="bold" fill="url(#gradientA)">A</text>
  <text x="384" y="320" font-size="160" font-weight="bold" fill="url(#gradientF)">F</text>
  <text x="640" y="320" font-size="160" font-weight="bold" fill="url(#gradientX)">X</text>
  
  <circle cx="896" cy="128" r="64" fill="url(#gradientA)" opacity="0.5" />
  <circle cx="128" cy="896" r="64" fill="url(#gradientF)" opacity="0.5" />
</svg>
`;

// Generate favicon files
async function generateFavicons() {
     try {
          // Generate favicon-16x16.png
          await sharp(Buffer.from(svgContent))
               .resize(16, 16)
               .png()
               .toFile(path.join(publicDir, 'favicon-16x16.png'));

          // Generate favicon-32x32.png
          await sharp(Buffer.from(svgContent))
               .resize(32, 32)
               .png()
               .toFile(path.join(publicDir, 'favicon-32x32.png'));

          // Generate apple-touch-icon.png
          await sharp(Buffer.from(svgContent))
               .resize(180, 180)
               .png()
               .toFile(path.join(publicDir, 'apple-touch-icon.png'));

          // Generate android-chrome-192x192.png
          await sharp(Buffer.from(svgContent))
               .resize(192, 192)
               .png()
               .toFile(path.join(publicDir, 'android-chrome-192x192.png'));

          // Generate android-chrome-512x512.png
          await sharp(Buffer.from(svgContent))
               .resize(512, 512)
               .png()
               .toFile(path.join(publicDir, 'android-chrome-512x512.png'));

          // Generate logo.png for Open Graph
          await sharp(Buffer.from(svgContent))
               .resize(1200, 630)
               .png()
               .toFile(path.join(publicDir, 'logo.png'));

          console.log('Favicon files generated successfully!');
     } catch (error) {
          console.error('Error generating favicon files:', error);
     }
}

generateFavicons(); 