#!/usr/bin/env node
// Downloads the US Census Bureau county boundary map for a given state
// from Wikimedia Commons (CC0 / public domain, courtesy of the
// standardized "cb_500k" locator map series - the same file family used
// for every US state, e.g.:
//   https://commons.wikimedia.org/wiki/File:Tennessee_county_map,_cb_500k.svg
//   https://commons.wikimedia.org/wiki/File:Kentucky_county_map,_cb_500k.svg
// Each county in these files is its own <path id="CountyName"> element,
// which is what ServiceAreaMap.astro needs for hover-highlighting.
//
// Usage:
//   node scripts/fetch-county-map.mjs "Tennessee"
//
// Saves the raw SVG to src/data/county-map.svg. Re-run any time to swap
// states for a new client project.

import { writeFileSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import path from 'node:path';

const state = process.argv[2];
if (!state) {
  console.error('Usage: node scripts/fetch-county-map.mjs "<StateName>"');
  console.error('Example: node scripts/fetch-county-map.mjs "Tennessee"');
  process.exit(1);
}

// Wikimedia's own upload hash path differs per file, so go through the
// wiki page's "Special:FilePath" redirect, which always resolves to the
// current raw file regardless of hash.
const fileName = `${state.replace(/ /g, '_')}_county_map,_cb_500k.svg`;
const url = `https://commons.wikimedia.org/wiki/Special:FilePath/${encodeURIComponent(fileName)}`;

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const outPath = path.join(__dirname, '..', 'src', 'data', 'county-map.svg');

console.log(`Fetching ${state} county map from Wikimedia Commons...`);
const res = await fetch(url, { headers: { 'User-Agent': 'daystar-site-factory/1.0' } });

if (!res.ok) {
  console.error(`Failed to fetch (${res.status}). This state may not have a "cb_500k" map on Commons under that exact name - `);
  console.error(`check https://commons.wikimedia.org/wiki/Category:SVG_maps_of_${state.replace(/ /g, '_')}_counties and adjust the file name in this script if needed.`);
  process.exit(1);
}

const svgText = await res.text();
if (!svgText.includes('<svg')) {
  console.error('Response did not look like an SVG file - the file name pattern may not match for this state.');
  process.exit(1);
}

writeFileSync(outPath, svgText);
const countyCount = (svgText.match(/<path[^>]*\sid="/g) || []).length;
console.log(`Saved ${state} county map to ${outPath} (${countyCount} counties found).`);
console.log('Next: add lat/lng + countyIds to each location in src/data/locations.json (county ids match the SVG path id="..." attributes - open the file and search for the county names your client\'s cities fall in), then drop <ServiceAreaMap /> into the homepage.');
