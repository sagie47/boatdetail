const ffmpeg = require('fluent-ffmpeg');
const path = require('path');
const fs = require('fs');

const videos = [
  {
    input: path.join(__dirname, '../public/images/boat-detailing-video.mp4'),
    output: path.join(__dirname, '../public/images/thumbvid1.png')
  }
];

// Function to generate a single thumbnail
function generateThumbnail(videoPath, outputPath) {
  return new Promise((resolve, reject) => {
    console.log(`Generating thumbnail for ${path.basename(videoPath)}...`);
    
    ffmpeg(videoPath)
      .screenshots({
        timestamps: ['00:00:01'], // Take a screenshot at 1 second
        filename: path.basename(outputPath),
        folder: path.dirname(outputPath),
        size: '640x360' // You can adjust the size as needed
      })
      .on('end', () => {
        console.log(`Thumbnail created: ${outputPath}`);
        resolve();
      })
      .on('error', (err) => {
        console.error(`Error generating thumbnail for ${videoPath}:`, err);
        reject(err);
      });
  });
}

// Process all videos
async function generateAllThumbnails() {
  try {
    for (const video of videos) {
      if (fs.existsSync(video.input)) {
        await generateThumbnail(video.input, video.output);
      } else {
        console.warn(`Video not found: ${video.input}`);
      }
    }
    console.log('All thumbnails generated successfully!');
  } catch (error) {
    console.error('Error generating thumbnails:', error);
    process.exit(1);
  }
}

generateAllThumbnails();
