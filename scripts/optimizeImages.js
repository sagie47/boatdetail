const Jimp = require('jimp');
const fs = require('fs');
const path = require('path');

const inputDir = path.join(__dirname, '../public/images');
const outputDir = path.join(__dirname, '../public/images/optimized');

// Ensure output directory exists
if (!fs.existsSync(outputDir)) {
  fs.mkdirSync(outputDir, { recursive: true });
}

// Image optimization settings
const optimizationSettings = {
  jpeg: { quality: 80 },
  png: { quality: 80 },
};

async function optimizeImage(inputPath, filename) {
  const ext = path.extname(filename).toLowerCase();
  const baseName = path.basename(filename, ext);

  try {
    const image = await Jimp.read(inputPath);

    console.log(`Optimizing ${filename}...`);

    // Optimize original format
    if (ext === '.jpg' || ext === '.jpeg') {
      await image
        .quality(optimizationSettings.jpeg.quality)
        .writeAsync(path.join(outputDir, filename));
    } else if (ext === '.png') {
      await image
        .quality(optimizationSettings.png.quality)
        .writeAsync(path.join(outputDir, filename));
    }

    // Generate responsive sizes for hero images
    if (filename.includes('hero') || filename.includes('boat')) {
      const sizes = [640, 768, 1024, 1280, 1920];

      for (const size of sizes) {
        if (image.bitmap.width > size) {
          await image
            .resize(size, Jimp.AUTO)
            .quality(optimizationSettings.jpeg.quality)
            .writeAsync(path.join(outputDir, `${baseName}-${size}w.jpg`));
        }
      }
    }

    console.log(`✓ Optimized ${filename}`);
  } catch (error) {
    console.error(`Error optimizing ${filename}:`, error);
  }
}

async function optimizeAllImages() {
  try {
    const files = fs.readdirSync(inputDir);
    const imageFiles = files.filter(file =>
      /\.(jpg|jpeg|png)$/i.test(file) &&
      !file.startsWith('.')
    );

    console.log(`Found ${imageFiles.length} images to optimize...`);

    for (const file of imageFiles) {
      const inputPath = path.join(inputDir, file);
      await optimizeImage(inputPath, file);
    }

    console.log('\n✅ All images optimized successfully!');
    console.log(`Optimized images saved to: ${outputDir}`);
  } catch (error) {
    console.error('Error during optimization:', error);
    process.exit(1);
  }
}

// Run if called directly
if (require.main === module) {
  optimizeAllImages();
}

module.exports = { optimizeImage, optimizeAllImages };