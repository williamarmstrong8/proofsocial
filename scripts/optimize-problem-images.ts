import sharp from 'sharp';
import path from 'path';
import fs from 'fs';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// All images used in the Problem section
const inputImages = [
  'src/assets/problem/image1.jpg',
  'src/assets/problem/image2.jpeg',
  'src/assets/problem/image3.jpg',
  'src/assets/problem/image4.jpg',
  'src/assets/problem/image5.jpg',
  'src/assets/problem/image6.jpg',
  'src/assets/problem/image7.jpg',
  'src/assets/problem/image9.jpg',
  'src/assets/problem/image10.jpg',
  'src/assets/problem/image11.jpg',
  'src/assets/problem/image12.jpg',
  'src/assets/problem/image13.jpg',
  'src/assets/problem/image14.JPG',
  'src/assets/problem/image15.JPG',
  'src/assets/problem/image16.jpeg',
  'src/assets/problem/image17.JPG',
  'src/assets/problem/image18.JPG',
  'src/assets/problem/image19.jpg',
  'src/assets/problem/image20.jpeg',
];

const OUTPUT_DIR = path.join(__dirname, '..', 'src/assets/problem/optimized');

async function optimize() {
  // Create output directory if it doesn't exist
  if (!fs.existsSync(OUTPUT_DIR)) {
    fs.mkdirSync(OUTPUT_DIR, { recursive: true });
    console.log(`Created output directory: ${OUTPUT_DIR}`);
  }

  console.log(`Optimizing ${inputImages.length} images...\n`);

  for (const inputPath of inputImages) {
    const fullInputPath = path.join(__dirname, '..', inputPath);
    
    // Check if input file exists
    if (!fs.existsSync(fullInputPath)) {
      console.warn(`⚠️  File not found: ${fullInputPath}`);
      continue;
    }

    // Get base filename without extension
    const basename = path.basename(inputPath, path.extname(inputPath));
    
    // Get original file size
    const originalStats = fs.statSync(fullInputPath);
    const originalSizeKB = (originalStats.size / 1024).toFixed(1);

    try {
      // Create sharp instance and resize
      const image = sharp(fullInputPath).resize({
        width: 1400,
        withoutEnlargement: true, // Don't enlarge smaller images
        fit: 'inside', // Maintain aspect ratio
      });

      // Generate WebP version
      const webpPath = path.join(OUTPUT_DIR, `${basename}.webp`);
      await image
        .webp({ quality: 75 })
        .toFile(webpPath);

      const webpStats = fs.statSync(webpPath);
      const webpSizeKB = (webpStats.size / 1024).toFixed(1);
      const reduction = ((1 - webpStats.size / originalStats.size) * 100).toFixed(1);

      console.log(`✅ ${basename}: ${originalSizeKB}KB → ${webpSizeKB}KB (${reduction}% reduction)`);
    } catch (error) {
      console.error(`❌ Error processing ${basename}:`, error);
    }
  }

  console.log(`\n✨ Optimization complete! Optimized images saved to: ${OUTPUT_DIR}`);
}

optimize().catch((err) => {
  console.error('Fatal error:', err);
  process.exit(1);
});

