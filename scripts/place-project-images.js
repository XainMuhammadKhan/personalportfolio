/*
Helper script to copy/rename images from a source folder into `public/projects/`
Usage:
  node scripts/place-project-images.js /path/to/source

The script will try to match each repo slug listed below against filenames
in the source folder (case-insensitive). When a match is found, it copies the
file into `public/projects/<slug>.<ext>`.

This is a convenience tool because attachments uploaded in the chat are not
automatically placed in the workspace. Run this locally where your image files
are available.
*/

import fs from 'fs';
import path from 'path';

const repoSlugs = [
  'Al-Furqan',
  'Waves',
  'Tasq',
  'Academix-LMS-An-AI-powered-LMS',
  'Fitjorn-Flutter',
  'Quotify-Flutter',
  'Quizzora-Flutter',
  'Grocery-app-project',
  'periodic-table-html-css',
  'flutter-covid-tracker-app',
  'weather-app-flutter'
];

const destDir = path.join(process.cwd(), 'public', 'projects');

function usage() {
  console.log('Usage: node scripts/place-project-images.js /path/to/source');
}

function findMatch(filename) {
  const low = filename.toLowerCase();
  return repoSlugs.find((slug) => low.includes(slug.toLowerCase()));
}

async function main() {
  const src = process.argv[2];
  if (!src) {
    usage();
    process.exit(1);
  }
  const absSrc = path.isAbsolute(src) ? src : path.join(process.cwd(), src);
  if (!fs.existsSync(absSrc) || !fs.statSync(absSrc).isDirectory()) {
    console.error('Source folder not found or not a directory:', absSrc);
    process.exit(1);
  }

  if (!fs.existsSync(destDir)) fs.mkdirSync(destDir, { recursive: true });

  const files = fs.readdirSync(absSrc).filter((f) => /\.(png|jpe?g|webp)$/i.test(f));
  if (!files.length) {
    console.log('No image files found in source folder.');
    return;
  }

  let copied = 0;
  for (const f of files) {
    const match = findMatch(f);
    if (!match) continue;
    const ext = path.extname(f);
    const srcPath = path.join(absSrc, f);
    const destPath = path.join(destDir, `${match}${ext}`);
    fs.copyFileSync(srcPath, destPath);
    console.log(`Copied ${f} -> ${path.relative(process.cwd(), destPath)}`);
    copied++;
  }

  console.log(`Done. ${copied} files copied to ${path.relative(process.cwd(), destDir)}`);
}

main().catch((err) => { console.error(err); process.exit(1); });
