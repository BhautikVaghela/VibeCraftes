// Automated image compression using sharp
const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const assetsDir = path.join(__dirname, 'public', 'assets');
const backupDir = path.join(__dirname, 'public', 'assets-backup');

// Create backup directory
if (!fs.existsSync(backupDir)) {
  fs.mkdirSync(backupDir);
}

const imagesToOptimize = [
  'MICE Final.png',
  'New Year Final.png',
  'Customise Solution Final.png',
  'Corporate Offsite 2 final.png',
  'Diwali Final.png',
  'Independence Day Final.png',
  'Navratri Final.png',
  'Ganpati Final.png',
  'Holi Final.png',
  'Uttrayan Final.png'
];

async function compressImage(filename) {
  const inputPath = path.join(assetsDir, filename);
  const backupPath = path.join(backupDir, filename);
  
  if (!fs.existsSync(inputPath)) {
    console.log(`❌ ${filename} not found`);
    return;
  }

  // Backup original
  fs.copyFileSync(inputPath, backupPath);
  
  const inputStats = fs.statSync(inputPath);
  const inputSizeMB = (inputStats.size / (1024 * 1024)).toFixed(2);
  
  console.log(`\n🔄 Processing: ${filename} (${inputSizeMB} MB)`);

  try {
    // Compress and resize image
    await sharp(inputPath)
      .resize(1920, 1080, { // Max dimensions
        fit: 'inside',
        withoutEnlargement: true
      })
      .jpeg({ // Convert to JPEG for better compression
        quality: 85,
        progressive: true
      })
      .toFile(inputPath.replace('.png', '.jpg'));

    // Remove old PNG if JPEG created successfully
    const jpgPath = inputPath.replace('.png', '.jpg');
    if (fs.existsSync(jpgPath)) {
      const outputStats = fs.statSync(jpgPath);
      const outputSizeMB = (outputStats.size / (1024 * 1024)).toFixed(2);
      const reduction = ((1 - outputStats.size / inputStats.size) * 100).toFixed(1);
      
      console.log(`✅ Compressed: ${filename.replace('.png', '.jpg')} (${outputSizeMB} MB) - ${reduction}% reduction`);
      
      // Remove original PNG
      fs.unlinkSync(inputPath);
    }
  } catch (error) {
    console.error(`❌ Error processing ${filename}:`, error.message);
  }
}

async function compressAll() {
  console.log('🖼️  Starting Image Compression...\n');
  console.log('📁 Backup folder:', backupDir);
  console.log('📁 Assets folder:', assetsDir);
  console.log('━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━');
  
  for (const image of imagesToOptimize) {
    await compressImage(image);
  }
  
  console.log('\n━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━');
  console.log('✨ Compression Complete!');
  console.log('⚠️  Remember to update image paths from .png to .jpg in your code');
}

compressAll();
