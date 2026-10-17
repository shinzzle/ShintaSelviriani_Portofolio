/**
 * Build Script for Shinta Selviriani Portfolio
 * Zero-dependency static compiler for HTML partials & CSS modules.
 *
 * Usage:
 *   node build.js           # Single build
 *   node build.js --watch   # Watch mode (auto-rebuild on file changes)
 */

const fs = require('fs');
const path = require('path');

const ROOT_DIR = __dirname;
const SRC_DIR = path.join(ROOT_DIR, 'src');
const SECTIONS_DIR = path.join(SRC_DIR, 'sections');
const CSS_DIR = path.join(SRC_DIR, 'css');

const OUT_HTML = path.join(ROOT_DIR, 'index.html');
const OUT_CSS = path.join(ROOT_DIR, 'style.css');

function compileHtml() {
  const templatePath = path.join(SRC_DIR, 'index.html');
  if (!fs.existsSync(templatePath)) {
    throw new Error(`Template not found at: ${templatePath}`);
  }

  let template = fs.readFileSync(templatePath, 'utf-8');

  // Regex to match <!-- @include "path/to/file.html" --> or <!-- include "..." -->
  const includeRegex = /<!--\s*@?include\s*["']([^"']+)["']\s*-->/g;

  template = template.replace(includeRegex, (match, includePath) => {
    const fullPath = path.join(SRC_DIR, includePath);
    if (!fs.existsSync(fullPath)) {
      console.warn(`[WARN] Included file not found: ${fullPath}`);
      return `<!-- MISSING: ${includePath} -->`;
    }
    return fs.readFileSync(fullPath, 'utf-8');
  });

  fs.writeFileSync(OUT_HTML, template, 'utf-8');
}

function compileCss() {
  if (!fs.existsSync(CSS_DIR)) {
    throw new Error(`CSS directory not found at: ${CSS_DIR}`);
  }

  const cssFiles = fs.readdirSync(CSS_DIR)
    .filter(f => f.endsWith('.css') && f !== 'main.css')
    .sort();

  const combinedCss = cssFiles.map(file => {
    const content = fs.readFileSync(path.join(CSS_DIR, file), 'utf-8');
    return `/* ==================================================== */\n/* FILE: src/css/${file} */\n/* ==================================================== */\n${content}\n`;
  }).join('\n');

  fs.writeFileSync(OUT_CSS, combinedCss, 'utf-8');
}

function build() {
  const start = Date.now();
  try {
    compileHtml();
    compileCss();
    const duration = Date.now() - start;
    const timeStr = new Date().toLocaleTimeString();
    console.log(`[${timeStr}] Built index.html & style.css successfully in ${duration}ms`);
  } catch (err) {
    console.error(`[ERROR] Build failed:`, err.message);
  }
}

// Check arguments
const isWatch = process.argv.includes('--watch') || process.argv.includes('-w');

// Initial build
build();

if (isWatch) {
  console.log('\nWatching for changes in src/ directory... (Press Ctrl+C to stop)\n');

  let debounceTimer = null;
  fs.watch(SRC_DIR, { recursive: true }, (eventType, filename) => {
    if (!filename) return;
    clearTimeout(debounceTimer);
    debounceTimer = setTimeout(() => {
      console.log(`\nChange detected in ${filename}, rebuilding...`);
      build();
    }, 100);
  });
}
