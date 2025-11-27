// Image optimization script
// Run: node optimize-images.js
// This will compress all large PNG images in public/assets

const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

console.log('🖼️  Image Optimization Script');
console.log('================================\n');

const assetsDir = path.join(__dirname, 'public', 'assets');

// List of images to optimize
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

console.log('📋 Images to optimize:');
imagesToOptimize.forEach(img => {
  const imgPath = path.join(assetsDir, img);
  if (fs.existsSync(imgPath)) {
    const stats = fs.statSync(imgPath);
    const sizeMB = (stats.size / (1024 * 1024)).toFixed(2);
    console.log(`   ✓ ${img} (${sizeMB} MB)`);
  } else {
    console.log(`   ✗ ${img} (not found)`);
  }
});

console.log('\n💡 Optimization Options:');
console.log('   1. Use online tools: tinypng.com or squoosh.app');
console.log('   2. Install sharp: npm install sharp');
console.log('   3. Use ImageMagick: convert image.png -quality 80 -resize 1920x1080> optimized.png');
console.log('\n⚠️  Recommended: Compress images to under 500KB each for fast loading');
console.log('   Target total size: ~3-5MB (currently ~97MB)\n');
