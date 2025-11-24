const fs = require('fs');
const path = require('path');

// Copy JS file to dist
const jsSource = path.join(__dirname, '../src/js/underline.js');
const jsDest = path.join(__dirname, '../dist/underline.js');

fs.copyFileSync(jsSource, jsDest);
console.log('✓ JavaScript file copied to dist/');

// Copy SVG file to dist
const svgSource = path.join(__dirname, '../src/svg/underlines.svg');
const svgDest = path.join(__dirname, '../dist/underlines.svg');

fs.copyFileSync(svgSource, svgDest);
console.log('✓ SVG file copied to dist/');

console.log('Build complete!');

