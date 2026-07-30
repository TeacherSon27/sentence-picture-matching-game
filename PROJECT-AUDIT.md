# Project Audit

## Source inventory

- Original HTML size: 112,301 bytes and 3,091 lines.
- Embedded code: one 1,475-line stylesheet and three JavaScript blocks.
- Game deck: 90 entries split into 10 sections of 9 pairs.
- Referenced media: 91 unique PNG files; all were present before the split.
- External dependencies: none. There are no remote scripts, web fonts, APIs,
  network requests, forms, analytics, storage calls, or server-side features.
- Sound: synthesized at runtime with the Web Audio API, so there are no audio files.

## Game behavior

- Two teams play independently on a split screen against a seven-minute timer.
- The cover unlock requires clicking Picture and then Sentence.
- Standard scoring is 12 points for picture-first and 7 for sentence-first.
- Section 9 raises those values to 18 and 11; section 10 raises them to 24 and 15.
- A wrong match deducts 3 points without allowing a score below zero.
- Sections 9 and 10 add moving-card challenges.
- Fullscreen mode supports standard, WebKit, and legacy Microsoft APIs.
- The game includes generated background music, sound effects, restart, section
  skipping, an early-finish prompt, and a confetti result screen.

## Data checks

- All 90 deck IDs are unique.
- The deck contains 83 unique image paths because seven images are intentionally
  reused by multiple prompts.
- Nine sentence texts are duplicated. Six duplicate sets occur within the same
  section. Since the matching rule compares hidden card IDs rather than visible
  sentence text, identical-looking sentence cards can be ambiguous to players.
  Section 5 also contains two "Their eyes hurt." pairs that reuse the same image,
  making those two pairs visually indistinguishable.
- This transfer preserves the original data and behavior exactly; the duplicate
  content was documented rather than changed.

## Engineering and usability observations

- The game is fully local and privacy-preserving.
- Keyboard focus styles and accessible button labels are present.
- Dynamic status messages are not announced through an ARIA live region.
- There is no reduced-motion mode even though the interface uses continuous
  animation and moving-card challenges.
- The result screen creates 3,000 confetti elements, which may be expensive on
  older tablets and low-powered classroom devices.
- The timer decrements interval ticks rather than calculating elapsed wall time,
  so background-tab throttling can make it run slower than seven real minutes.
- The Music display reports state but does not provide a mute control.
- The legacy fallback is included, but the main game itself relies on modern
  JavaScript features such as arrow functions, Set, spread syntax, async/await,
  Object.values, and Object.entries.

## Transfer verification

- Every referenced source asset was copied byte-for-byte.
- Each copied asset was checked against its source with SHA-256.
- HTML asset references were rewritten from
  `matching-words-battle-ppt-assets/` to the new `assets/` directory.
- All embedded `<style>` and inline `<script>` blocks were replaced by
  external file references.
