import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const iconsDir = path.join(__dirname, 'src/assets/icons');

// Read all traffic SVG files
const svgFiles = fs.readdirSync(iconsDir).filter(file => 
  file.endsWith('.svg') && file.startsWith('traffic-')
);

console.log(`Normalizing viewBox for ${svgFiles.length} traffic SVG files...`);

svgFiles.forEach(file => {
  const filePath = path.join(iconsDir, file);
  let content = fs.readFileSync(filePath, 'utf8');
  
  // Extract current viewBox
  const viewBoxMatch = content.match(/viewBox="([^"]*)"/);
  if (viewBoxMatch) {
    const currentViewBox = viewBoxMatch[1];
    console.log(`${file}: ${currentViewBox} -> 0 0 16 16`);
    
    // Replace with standardized viewBox
    content = content.replace(/viewBox="[^"]*"/, 'viewBox="0 0 16 16"');
    
    fs.writeFileSync(filePath, content, 'utf8');
    console.log(`✅ Normalized: ${file}`);
  } else {
    console.log(`⚠️  No viewBox found in ${file}`);
  }
});

console.log('All traffic SVG files normalized to viewBox="0 0 16 16"!');