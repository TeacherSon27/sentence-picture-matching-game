# Sentence-Picture Matching Game

This folder contains the separated, self-contained version of the original
`matching-words-battle.html` game.

## Project files

- `index.html` — page structure and game interface
- `css/styles.css` — all CSS formerly embedded in the HTML
- `js/polyfills.js` — compatibility helpers formerly embedded in the page head
- `js/game.js` — deck data, scoring, timer, animation, audio, and game logic
- `js/legacy-browser-warning.js` — the legacy-browser fallback
- `assets/` — the 91 image files actually referenced by the game
- `asset-manifest.json` — byte sizes and SHA-256 checksums for every copied asset
- `PROJECT-AUDIT.md` — architecture, behavior, and review findings

## Open the game

Open `index.html` in a current version of Chrome, Edge, Firefox, or Safari.
The project has no package installation, server, login, or internet requirement.

The original source file and its larger source asset library were not changed.
Only files referenced by this game were copied into this folder.
