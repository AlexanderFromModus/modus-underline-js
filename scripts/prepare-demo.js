/**
 * Prepare demo files for hosting
 * Copies necessary files to a demo/ directory
 */

const fs = require('fs');
const path = require('path');

const demoDir = path.join(__dirname, '..', 'demo');

// Create demo directory
if (!fs.existsSync(demoDir)) {
  fs.mkdirSync(demoDir, { recursive: true });
}

// Files/directories to copy
const filesToCopy = [
  { src: 'index.html', dest: 'index.html' },
  { src: 'dist', dest: 'dist' },
  { src: 'assets/css', dest: 'assets/css' }
];

// Copy files
filesToCopy.forEach(({ src, dest }) => {
  const srcPath = path.join(__dirname, '..', src);
  const destPath = path.join(demoDir, dest);
  
  if (fs.statSync(srcPath).isDirectory()) {
    // Copy directory recursively
    copyDir(srcPath, destPath);
  } else {
    // Copy file
    const destDir = path.dirname(destPath);
    if (!fs.existsSync(destDir)) {
      fs.mkdirSync(destDir, { recursive: true });
    }
    fs.copyFileSync(srcPath, destPath);
  }
});

console.log('✓ Demo files prepared in demo/ directory');

function copyDir(src, dest) {
  if (!fs.existsSync(dest)) {
    fs.mkdirSync(dest, { recursive: true });
  }
  
  const entries = fs.readdirSync(src, { withFileTypes: true });
  
  for (const entry of entries) {
    const srcPath = path.join(src, entry.name);
    const destPath = path.join(dest, entry.name);
    
    if (entry.isDirectory()) {
      copyDir(srcPath, destPath);
    } else {
      fs.copyFileSync(srcPath, destPath);
    }
  }
}

