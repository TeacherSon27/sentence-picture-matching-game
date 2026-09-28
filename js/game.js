const FULL_DECK = [
  { id: "slide-02", sentence: "There is one eye.", image: "./assets/sections/slide-02.png", tag: "count" },
  { id: "slide-03", sentence: "There is one tooth.", image: "./assets/sections/slide-03.png", tag: "count" },
  { id: "slide-04", sentence: "There are two hands.", image: "./assets/sections/slide-04.png", tag: "count" },
  { id: "slide-05", sentence: "There are two arms.", image: "./assets/correction/correction-two-arms.png", tag: "count" },
  { id: "slide-06", sentence: "There are two feet.", image: "./assets/sections/slide-06.png", tag: "count" },
  { id: "slide-07", sentence: "There are five legs.", image: "./assets/correction/correction-five-legs.png", tag: "count" },
  { id: "slide-08", sentence: "There is one ear.", image: "./assets/sections/slide-08.png", tag: "count" },
  { id: "slide-09", sentence: "There are two ears.", image: "./assets/correction/correction-two-ears.png", tag: "count" },
  { id: "slide-10", sentence: "There is one eye.", image: "./assets/sections/slide-10.png", tag: "count" },
  { id: "slide-11", sentence: "There are two eyes.", image: "./assets/sections/slide-11.png", tag: "count" },
  { id: "slide-12", sentence: "There is one tooth.", image: "./assets/sections/slide-12.png", tag: "count" },
  { id: "slide-13", sentence: "Senior has a sore throat.", image: "./assets/sections/slide-13.png", tag: "health" },
  { id: "slide-14", sentence: "Christina has a sore throat.", image: "./assets/sections/slide-14.png", tag: "health" },
  { id: "slide-15", sentence: "They have a sore throat.", image: "./assets/sections/slide-15-they-v2.png", tag: "health" },
  { id: "slide-16", sentence: "His foot hurts.", image: "./assets/sections/slide-16.png", tag: "hurts" },
  { id: "slide-17", sentence: "His foot hurts.", image: "./assets/sections/slide-17.png", tag: "hurts" },
  { id: "slide-18", sentence: "Their feet hurt.", image: "./assets/sections/slide-18-they-v2.png", tag: "hurt" },
  { id: "slide-19", sentence: "Franco has a headache.", image: "./assets/sections/slide-19.png", tag: "health" },
  { id: "slide-20", sentence: "Casper has a headache.", image: "./assets/sections/slide-20.png", tag: "health" },
  { id: "slide-21", sentence: "Christina has a headache.", image: "./assets/sections/slide-21.png", tag: "health" },
  { id: "slide-22", sentence: "Riana has a headache.", image: "./assets/sections/slide-22.png", tag: "health" },
  { id: "slide-23", sentence: "They have a headache.", image: "./assets/sections/custom-they-headache.png", tag: "health" },
  { id: "slide-24", sentence: "Austin has a fever.", image: "./assets/sections/slide-24.png", tag: "health" },
  { id: "slide-25", sentence: "Riana has a fever.", image: "./assets/sections/slide-25.png", tag: "health" },
  { id: "slide-26", sentence: "They have a fever.", image: "./assets/sections/slide-26-they-v3.png", tag: "health" },
  { id: "slide-27", sentence: "Casper has a stomachache.", image: "./assets/sections/slide-27.png", tag: "health" },
  { id: "slide-28", sentence: "Khevia has a stomachache.", image: "./assets/sections/slide-28.png", tag: "health" },
  { id: "slide-29", sentence: "They have a stomachache.", image: "./assets/sections/slide-29-they-v2.png", tag: "health" },
  { id: "slide-30", sentence: "Austin has a runny nose.", image: "./assets/sections/slide-30.png", tag: "health" },
  { id: "slide-31", sentence: "Selena has a runny nose.", image: "./assets/sections/slide-31.png", tag: "health" },
  { id: "slide-32", sentence: "They have a runny nose.", image: "./assets/sections/slide-32-they-v2.png", tag: "health" },
  { id: "slide-33", sentence: "Christina has a toothache.", image: "./assets/sections/slide-33.png", tag: "health" },
  { id: "slide-34", sentence: "Franco has a toothache.", image: "./assets/sections/slide-34.png", tag: "health" },
  { id: "slide-35", sentence: "Senior has a toothache.", image: "./assets/sections/slide-35.png", tag: "health" },
  { id: "slide-36", sentence: "They have a toothache.", image: "./assets/sections/slide-36-they-v2.png", tag: "health" },
  { id: "slide-37", sentence: "Her eye hurts.", image: "./assets/sections/slide-37.png", tag: "hurts" },
  { id: "slide-38", sentence: "Her eye hurts.", image: "./assets/sections/slide-38.png", tag: "hurts" },
  { id: "slide-39", sentence: "Their eyes hurt.", image: "./assets/sections/custom-their-eyes-hurt.png", tag: "hurt" },
  { id: "slide-40", sentence: "His eyes hurt.", image: "./assets/sections/slide-40.png", tag: "hurt" },
  { id: "slide-41", sentence: "Their eyes hurt.", image: "./assets/sections/custom-their-eyes-hurt.png", tag: "hurt" },
  { id: "slide-42", sentence: "His leg hurts.", image: "./assets/sections/slide-42.png", tag: "hurts" },
  { id: "slide-43", sentence: "Her arms and hands hurt.", image: "./assets/sections/slide-43.png", tag: "hurt" },
  { id: "slide-44", sentence: "His hands hurt.", image: "./assets/sections/slide-44.png", tag: "hurt" },
  { id: "slide-45", sentence: "His hands hurt.", image: "./assets/sections/slide-45.png", tag: "hurt" },
  { id: "slide-46", sentence: "His hand hurts.", image: "./assets/sections/slide-46.png", tag: "hurts" },
  { id: "slide-47", sentence: "Her hand hurts.", image: "./assets/sections/slide-47.png", tag: "hurts" },
  { id: "slide-48", sentence: "Her hand hurts.", image: "./assets/sections/slide-48.png", tag: "hurts" },
  { id: "slide-49", sentence: "Their hands hurt.", image: "./assets/sections/slide-49-they-v2.png", tag: "hurt" },
  { id: "slide-50", sentence: "Her foot hurts.", image: "./assets/sections/slide-50.png", tag: "hurts" },
  { id: "slide-51", sentence: "Her foot hurts.", image: "./assets/sections/slide-51.png", tag: "hurts" },
  { id: "mg1-53", sentence: "Fever", image: "./assets/extended/mg1-slide-53.png", tag: "word" },
  { id: "mg1-54", sentence: "Sore throat", image: "./assets/extended/mg1-slide-54.png", tag: "word" },
  { id: "mg1-55", sentence: "Runny nose", image: "./assets/extended/mg1-slide-55.png", tag: "word" },
  { id: "mg1-56", sentence: "Headache", image: "./assets/extended/mg1-slide-56.png", tag: "word" },
  { id: "mg1-57", sentence: "Toothache", image: "./assets/extended/mg1-slide-57.png", tag: "word" },
  { id: "mg1-58", sentence: "Hands hurt.", image: "./assets/extended/mg1-slide-58.png", tag: "hurt" },
  { id: "mg1-59", sentence: "Hand hurts.", image: "./assets/extended/mg1-slide-59.png", tag: "hurts" },
  { id: "mg1-60", sentence: "Leg hurts.", image: "./assets/extended/mg1-slide-60.png", tag: "hurts" },
  { id: "mg1-61", sentence: "Legs hurt.", image: "./assets/extended/mg1-slide-61.png", tag: "hurt" },
  { id: "mg1-62", sentence: "Foot hurts.", image: "./assets/extended/mg1-slide-62.png", tag: "hurts" },
  { id: "mg1-63", sentence: "Feet hurt.", image: "./assets/extended/mg1-slide-63.png", tag: "hurt" },
  { id: "mg1-64", sentence: "Arm hurts.", image: "./assets/extended/mg1-slide-64-65.png", tag: "hurts" },
  { id: "mg1-65", sentence: "Arms hurt.", image: "./assets/extended/mg1-slide-64-65.png", tag: "hurt" },
  { id: "mg1-66", sentence: "Ear hurts.", image: "./assets/extended/mg1-slide-66-67.png", tag: "hurts" },
  { id: "mg1-67", sentence: "Ears hurt.", image: "./assets/extended/mg1-slide-66-67.png", tag: "hurt" },
  { id: "mg1-68", sentence: "Nose hurts.", image: "./assets/extended/mg1-slide-68.png", tag: "hurts" },
  { id: "mg1-69", sentence: "What's wrong with her?", image: "./assets/extended/mg1-grammar-girl.png", tag: "question" },
  { id: "mg1-70", sentence: "Does she have a...?", image: "./assets/extended/mg1-grammar-girl.png", tag: "question" },
  { id: "mg1-71", sentence: "What's wrong with him?", image: "./assets/extended/mg1-grammar-boy.png", tag: "question" },
  { id: "mg1-72", sentence: "Does he have a...?", image: "./assets/extended/mg1-grammar-boy.png", tag: "question" },
  { id: "mg1-73", sentence: "What's wrong with you?", image: "./assets/extended/mg1-grammar-you.png", tag: "question" },
  { id: "mg1-74", sentence: "Do you have a...?", image: "./assets/extended/mg1-grammar-you.png", tag: "question" },
  { id: "mg1-75", sentence: "What's wrong with them?", image: "./assets/extended/mg1-grammar-them.png", tag: "question" },
  { id: "mg1-76", sentence: "Do they have a...?", image: "./assets/extended/mg1-grammar-them.png", tag: "question" },
  { id: "mg2-01", sentence: "I have a fever.", image: "./assets/extended/mg2-slide-01.png", tag: "health" },
  { id: "mg2-02", sentence: "She has a sore throat.", image: "./assets/extended/mg2-slide-02.png", tag: "health" },
  { id: "mg2-03", sentence: "He has a runny nose.", image: "./assets/extended/mg2-slide-03.png", tag: "health" },
  { id: "mg2-04", sentence: "I have a headache.", image: "./assets/extended/mg2-slide-04.png", tag: "health" },
  { id: "mg2-05", sentence: "I have a toothache.", image: "./assets/extended/mg2-slide-05.png", tag: "health" },
  { id: "mg2-06", sentence: "My hands hurt.", image: "./assets/extended/mg2-slide-06.png", tag: "hurt" },
  { id: "mg2-07", sentence: "My hand hurts.", image: "./assets/extended/mg2-slide-07.png", tag: "hurts" },
  { id: "mg2-08", sentence: "Her leg hurts.", image: "./assets/extended/mg2-slide-08.png", tag: "hurts" },
  { id: "mg2-09", sentence: "Their legs hurt.", image: "./assets/extended/mg2-slide-09.png", tag: "hurt" },
  { id: "mg2-10", sentence: "My foot hurts.", image: "./assets/extended/mg2-slide-10.png", tag: "hurts" },
  { id: "mg2-11", sentence: "Their feet hurt.", image: "./assets/extended/mg2-slide-11.png", tag: "hurt" },
  { id: "mg2-12", sentence: "His arm hurts.", image: "./assets/extended/mg2-slide-12.png", tag: "hurts" },
  { id: "mg2-13", sentence: "Their arms hurt.", image: "./assets/extended/mg2-slide-13.png", tag: "hurt" },
  { id: "mg2-14", sentence: "His ear hurts.", image: "./assets/extended/mg2-slide-14.png", tag: "hurts" },
  { id: "mg2-15", sentence: "My ears hurt.", image: "./assets/extended/mg2-slide-15.png", tag: "hurt" },
  { id: "mg2-16", sentence: "My nose hurts.", image: "./assets/extended/mg2-slide-16.png", tag: "hurts" }
];

const ACTIVE_DECK = FULL_DECK;
const SECTION_SIZE = 9;
  const GAME_TIME = 420;
const TOTAL_SECTIONS = Math.ceil(ACTIVE_DECK.length / SECTION_SIZE);
const PICTURE_FIRST_POINTS = 12;
const SENTENCE_FIRST_POINTS = 7;
const SECTION_NINE_PICTURE_FIRST_POINTS = 18;
const SECTION_NINE_SENTENCE_FIRST_POINTS = 11;
const SECTION_TEN_PICTURE_FIRST_POINTS = 24;
const SECTION_TEN_SENTENCE_FIRST_POINTS = 15;
const WRONG_MATCH_DEDUCTION = 3;
const RESULT_CONFETTI_COUNT = 3000;
const FINISH_GAME_CODE = "123";
const SECTIONS = Array.from({ length: TOTAL_SECTIONS }, (_, index) =>
  ACTIVE_DECK.slice(index * SECTION_SIZE, (index + 1) * SECTION_SIZE)
);

const refs = {
  deckCount: document.getElementById("deckCount"),
  sectionText: document.getElementById("sectionText"),
  timerText: document.getElementById("timerText"),
  musicState: document.getElementById("musicState"),
  fullscreenBtn: document.getElementById("fullscreenBtn"),
  finishGameBtn: document.getElementById("finishGameBtn"),
  finishPasswordOverlay: document.getElementById("finishPasswordOverlay"),
  finishPasswordForm: document.getElementById("finishPasswordForm"),
  finishPasswordInput: document.getElementById("finishPasswordInput"),
  finishPasswordError: document.getElementById("finishPasswordError"),
  finishPasswordClose: document.getElementById("finishPasswordClose"),
  restartBtn: document.getElementById("restartBtn"),
  playAgainBtn: document.getElementById("playAgainBtn"),
  introOverlay: document.getElementById("introOverlay"),
  resultOverlay: document.getElementById("resultOverlay"),
  resultConfettiLayer: document.getElementById("resultConfettiLayer"),
  resultTitle: document.getElementById("resultTitle"),
  resultText: document.getElementById("resultText"),
  introHint: document.getElementById("introHint"),
  coverPictureBtn: document.getElementById("coverPictureBtn"),
  coverSentenceBtn: document.getElementById("coverSentenceBtn"),
  left: {
    arena: document.getElementById("leftArena"),
    ready: document.getElementById("leftReady"),
    score: document.getElementById("leftScore"),
    matched: document.getElementById("leftMatched"),
    combo: document.getElementById("leftCombo"),
    left: document.getElementById("leftLeft"),
    skipBtn: document.getElementById("leftSkipBtn"),
    burst: document.getElementById("leftBurst"),
    burstImage: document.getElementById("leftBurstImage"),
    burstLabel: document.getElementById("leftBurstLabel"),
    playZone: document.getElementById("leftPlayZone"),
    picturePanel: document.getElementById("leftPicturePanel"),
    sentencePanel: document.getElementById("leftSentencePanel"),
    pictures: document.getElementById("leftPictures"),
    sentences: document.getElementById("leftSentences"),
    status: document.getElementById("leftStatus")
  },
  right: {
    arena: document.getElementById("rightArena"),
    ready: document.getElementById("rightReady"),
    score: document.getElementById("rightScore"),
    matched: document.getElementById("rightMatched"),
    combo: document.getElementById("rightCombo"),
    left: document.getElementById("rightLeft"),
    skipBtn: document.getElementById("rightSkipBtn"),
    burst: document.getElementById("rightBurst"),
    burstImage: document.getElementById("rightBurstImage"),
    burstLabel: document.getElementById("rightBurstLabel"),
    playZone: document.getElementById("rightPlayZone"),
    picturePanel: document.getElementById("rightPicturePanel"),
    sentencePanel: document.getElementById("rightSentencePanel"),
    pictures: document.getElementById("rightPictures"),
    sentences: document.getElementById("rightSentences"),
    status: document.getElementById("rightStatus")
  }
};

const state = {
  timeLeft: GAME_TIME,
  timerId: null,
  phase: "intro",
  introSelection: null,
  pendingAction: "restart",
  audioStarted: false,
  musicTimerId: null,
  musicStep: 0,
  burstTimers: { left: null, right: null },
  challengeTimerId: null,
  challengeAnimationId: null,
  challengeLastTime: 0,
  germAnimationId: null,
  germNodes: [],
  audio: null,
  players: {
    left: createPlayer("Team A"),
    right: createPlayer("Team B")
  }
};

function createPlayer(name) {
  return {
    name,
    combo: 0,
    roundMisses: 0,
    totalMisses: 0,
    totalScore: 0,
    currentSection: 0,
    completedSections: new Set(),
    selectedPicture: null,
    selectedSentence: null,
    firstPickType: null,
    matched: new Set(),
    pictureOrder: [],
    sentenceOrder: [],
    pictureChaosPositions: {},
    sentenceChaosPositions: {},
    pictureMotion: {},
    sentenceMotion: {},
    locked: false,
    totalMatches: 0,
    sectionWins: 0
  };
}

function shuffle(items) {
  const cloned = [...items];
  for (let i = cloned.length - 1; i > 0; i -= 1) {
    const j = Math.floor(Math.random() * (i + 1));
    [cloned[i], cloned[j]] = [cloned[j], cloned[i]];
  }
  return cloned;
}

function currentDeck(side) {
  return SECTIONS[state.players[side].currentSection] || [];
}

function isSectionNineChallenge(side) {
  return state.players[side].currentSection === 8;
}

function isSectionTenChallenge(side) {
  return state.players[side].currentSection === 9;
}

function clearChallengeMotion() {
  if (state.challengeTimerId) {
    window.clearInterval(state.challengeTimerId);
    state.challengeTimerId = null;
  }
  if (state.challengeAnimationId) {
    window.cancelAnimationFrame(state.challengeAnimationId);
    state.challengeAnimationId = null;
  }
  state.challengeLastTime = 0;
}

function allEntries() {
  return ACTIVE_DECK;
}

function byId(id) {
  return allEntries().find((item) => item.id === id);
}

function buildSide(player, deck) {
  const ids = deck.map((entry) => entry.id);
  player.combo = 0;
  player.roundMisses = 0;
  player.selectedPicture = null;
  player.selectedSentence = null;
  player.firstPickType = null;
  player.matched = new Set();
  player.pictureOrder = shuffle(ids);
  player.sentenceOrder = shuffle(ids);
  player.pictureChaosPositions = {};
  player.sentenceChaosPositions = {};
  player.pictureMotion = {};
  player.sentenceMotion = {};
  player.locked = false;
}

function nextUnfinishedSection(player, startFrom = player.currentSection + 1) {
  for (let i = startFrom; i < TOTAL_SECTIONS; i += 1) {
    if (!player.completedSections.has(i)) return i;
  }
  for (let i = 0; i < TOTAL_SECTIONS; i += 1) {
    if (!player.completedSections.has(i)) return i;
  }
  return null;
}

function playerDone(player) {
  return player.completedSections.size >= TOTAL_SECTIONS;
}

function pointsForTurn(side, pictureFirst) {
  const sectionIndex = state.players[side].currentSection;
  if (sectionIndex === 8) {
    return pictureFirst ? SECTION_NINE_PICTURE_FIRST_POINTS : SECTION_NINE_SENTENCE_FIRST_POINTS;
  }
  if (sectionIndex === 9) {
    return pictureFirst ? SECTION_TEN_PICTURE_FIRST_POINTS : SECTION_TEN_SENTENCE_FIRST_POINTS;
  }
  return pictureFirst ? PICTURE_FIRST_POINTS : SENTENCE_FIRST_POINTS;
}

function resetBattle() {
  state.phase = "playing";
  state.pendingAction = "restart";
  state.timeLeft = GAME_TIME;
  Object.values(state.players).forEach((player) => {
    player.combo = 0;
    player.roundMisses = 0;
    player.totalMisses = 0;
    player.totalScore = 0;
    player.currentSection = 0;
    player.completedSections = new Set();
    player.selectedPicture = null;
    player.selectedSentence = null;
    player.firstPickType = null;
    player.matched = new Set();
    player.pictureOrder = [];
    player.sentenceOrder = [];
    player.pictureChaosPositions = {};
    player.sentenceChaosPositions = {};
    player.pictureMotion = {};
    player.sentenceMotion = {};
    player.locked = false;
    player.totalMatches = 0;
    player.sectionWins = 0;
  });
  startSection();
}

function startSection() {
  clearChallengeMotion();
  state.phase = "playing";
  Object.entries(state.players).forEach(([side, player]) => buildSide(player, currentDeck(side)));
  refs.resultOverlay.classList.remove("show");
  updateSectionMeta();
  renderAll();
  activateChallengeMotion();
  restartTimer();
  updateStatus("left", `Section ${state.players.left.currentSection + 1}: match all 9 cards first.`, "");
  updateStatus("right", `Section ${state.players.right.currentSection + 1}: same deck, different shuffle.`, "");
}

function updateSectionMeta() {
  refs.deckCount.textContent = ACTIVE_DECK.length;
  const leftSection = playerDone(state.players.left) ? "Done" : `${state.players.left.currentSection + 1}/${TOTAL_SECTIONS}`;
  const rightSection = playerDone(state.players.right) ? "Done" : `${state.players.right.currentSection + 1}/${TOTAL_SECTIONS}`;
  refs.sectionText.textContent = `A ${leftSection} | B ${rightSection}`;
  const minutes = String(Math.floor(state.timeLeft / 60)).padStart(2, "0");
  const seconds = String(state.timeLeft % 60).padStart(2, "0");
  refs.timerText.textContent = `${minutes}:${seconds}`;
}

function renderCard(side, entry, type, player) {
  const button = document.createElement("button");
  const selected = type === "picture" ? player.selectedPicture === entry.id : player.selectedSentence === entry.id;
  const matched = player.matched.has(entry.id);
  const isGroupShot = entry.sentence.startsWith("They have") || entry.sentence.startsWith("Their ");
  button.type = "button";
  button.disabled = state.phase !== "playing" || player.locked || matched;
  button.className = `match-card ${type === "picture" ? "picture-card" : "sentence-card"}${type === "picture" && isGroupShot ? " has-group-shot" : ""}${selected ? " is-selected" : ""}${matched ? " is-matched" : ""}`;
  button.setAttribute("aria-label", entry.sentence);
  button.dataset.cardId = entry.id;
  button.dataset.cardType = type;
  button.innerHTML = type === "picture"
    ? `<span class="card-tag">${entry.tag}</span><img class="${isGroupShot ? "group-shot" : ""}" src="${entry.image}" alt="${entry.sentence}">`
    : `${entry.sentence}`;
  button.addEventListener("click", () => {
    if (type === "picture") {
      selectPicture(side, entry.id);
    } else {
      selectSentence(side, entry.id);
    }
  });
  return button;
}

function updateStatus(side, text, className = "") {
  const el = refs[side].status;
  el.textContent = text;
  el.className = `status-line${className ? ` ${className}` : ""}`;
}

function renderSide(side) {
  const deck = currentDeck(side);
  const player = state.players[side];
  const dom = refs[side];
  const challengeNine = isSectionNineChallenge(side);
  const challengeTen = isSectionTenChallenge(side);
  dom.score.textContent = player.totalScore;
  dom.matched.textContent = `${player.matched.size}/${deck.length}`;
  dom.combo.textContent = player.combo;
  dom.left.textContent = Math.max(deck.length - player.matched.size, 0);
  dom.ready.textContent = `Wins ${player.sectionWins}`;
  dom.skipBtn.disabled = state.phase !== "playing" || playerDone(player);
  dom.playZone.classList.toggle("challenge-9", challengeNine);
  dom.playZone.classList.toggle("challenge-10", challengeTen);

  dom.pictures.innerHTML = "";
  dom.sentences.innerHTML = "";

  player.pictureOrder.forEach((id) => {
    const entry = byId(id);
    if (entry) {
      const card = renderCard(side, entry, "picture", player);
      if (challengeNine || challengeTen) {
        card.classList.add("chaos-float");
      }
      dom.pictures.appendChild(card);
    }
  });

  player.sentenceOrder.forEach((id) => {
    const entry = byId(id);
    if (entry) {
      const card = renderCard(side, entry, "sentence", player);
      if (challengeTen) {
        card.classList.add("chaos-float");
      }
      dom.sentences.appendChild(card);
    }
  });

  if (challengeNine || challengeTen) {
    window.requestAnimationFrame(() => initializeChallengeSide(side));
  }
}

function renderAll() {
  updateSectionMeta();
  renderSide("left");
  renderSide("right");
}

function randomRange(min, max) {
  return min + Math.random() * Math.max(max - min, 0);
}

function randomVelocity() {
  const horizontal = randomRange(90, 150) * (Math.random() > 0.5 ? 1 : -1);
  const vertical = randomRange(55, 100) * (Math.random() > 0.5 ? 1 : -1);
  return { vx: horizontal, vy: vertical };
}

function ensureResultConfetti() {
  const layer = refs.resultConfettiLayer;
  if (!layer || layer.childElementCount >= RESULT_CONFETTI_COUNT) return;

  const colors = ["#b4f24a", "#e98fff", "#8d35dc", "#7ae335", "#ffe95a", "#4ff2ff", "#ff7c52", "#ffffff", "#ffd36a", "#ff77be"];
  const fragment = document.createDocumentFragment();

  for (let i = 0; i < RESULT_CONFETTI_COUNT; i += 1) {
    const piece = document.createElement("span");
    const width = randomRange(6, 16).toFixed(2);
    const height = (Number(width) * randomRange(1.15, 2.5)).toFixed(2);
    const radius = randomRange(2, 8).toFixed(2);
    piece.className = "confetti-piece";
    piece.style.left = `${randomRange(0, 100).toFixed(2)}%`;
    piece.style.setProperty("--top", `${randomRange(-135, 6).toFixed(2)}%`);
    piece.style.setProperty("--w", `${width}px`);
    piece.style.setProperty("--h", `${height}px`);
    piece.style.setProperty("--radius", `${radius}px`);
    piece.style.setProperty("--delay", `${randomRange(-7.2, 0).toFixed(2)}s`);
    piece.style.setProperty("--dur", `${randomRange(2.4, 6.6).toFixed(2)}s`);
    piece.style.setProperty("--drift", `${randomRange(-180, 180).toFixed(2)}px`);
    piece.style.setProperty("--spin-start", `${randomRange(-180, 180).toFixed(2)}deg`);
    piece.style.setProperty("--spin-end", `${randomRange(300, 1080).toFixed(2)}deg`);
    piece.style.background = colors[i % colors.length];
    piece.style.opacity = String(randomRange(0.72, 1));
    fragment.appendChild(piece);
  }

  layer.appendChild(fragment);
}

function initGermMotion() {
  if (state.germAnimationId) {
    window.cancelAnimationFrame(state.germAnimationId);
  }

  const germs = [...document.querySelectorAll(".bg-germs .germ, .arena-germs .germ")];
  state.germNodes = germs.map((node, index) => {
    const parent = node.parentElement;
    const isBackground = parent && parent.classList.contains("bg-germs");
    const size = parseFloat(node.style.getPropertyValue("--size")) || 180;
    const duration = parseFloat(node.style.getPropertyValue("--dur")) || 24;
    const driftX = isBackground ? size * 0.18 : size * 0.12;
    const driftY = isBackground ? size * 0.16 : size * 0.1;
    return {
      node,
      duration,
      driftX,
      driftY,
      phase: index * 0.92,
      rotateOffset: index * 18,
      scaleOffset: index * 0.55
    };
  });

  const animateGerms = (timestamp) => {
    const time = timestamp / 1000;
    state.germNodes.forEach((germ) => {
      const progress = (time / germ.duration) * Math.PI * 2 + germ.phase;
      const x = Math.sin(progress) * germ.driftX + Math.sin(progress * 0.47) * (germ.driftX * 0.28);
      const y = Math.cos(progress * 0.88) * germ.driftY + Math.sin(progress * 0.62) * (germ.driftY * 0.22);
      const rotate = Math.sin(progress * 0.52) * 18 + germ.rotateOffset;
      const scale = 1 + Math.sin(progress * 0.74 + germ.scaleOffset) * 0.045;
      germ.node.style.transform = `translate3d(${x.toFixed(2)}px, ${y.toFixed(2)}px, 0) rotate(${rotate.toFixed(2)}deg) scale(${scale.toFixed(3)})`;
    });
    state.germAnimationId = window.requestAnimationFrame(animateGerms);
  };

  state.germAnimationId = window.requestAnimationFrame(animateGerms);
}

function fullscreenElement() {
  return document.fullscreenElement || document.webkitFullscreenElement || document.msFullscreenElement || null;
}

function fullscreenSupported() {
  var target = document.documentElement;
  return !!(
    target.requestFullscreen ||
    target.webkitRequestFullscreen ||
    target.msRequestFullscreen
  );
}

function updateFullscreenButton() {
  if (!fullscreenSupported()) {
    refs.fullscreenBtn.textContent = "Fullscreen N/A";
    refs.fullscreenBtn.disabled = true;
    return;
  }
  refs.fullscreenBtn.disabled = false;
  refs.fullscreenBtn.textContent = fullscreenElement() ? "Exit Fullscreen" : "Fullscreen";
}

async function toggleFullscreen() {
  if (!fullscreenSupported()) return;
  try {
    if (fullscreenElement()) {
      if (document.exitFullscreen) {
        await document.exitFullscreen();
      } else if (document.webkitExitFullscreen) {
        document.webkitExitFullscreen();
      } else if (document.msExitFullscreen) {
        document.msExitFullscreen();
      }
      return;
    }

    const target = document.documentElement;
    if (target.requestFullscreen) {
      await target.requestFullscreen();
    } else if (target.webkitRequestFullscreen) {
      target.webkitRequestFullscreen();
    } else if (target.msRequestFullscreen) {
      target.msRequestFullscreen();
    }
  } catch (error) {
    console.warn("Fullscreen toggle failed.", error);
  } finally {
    updateFullscreenButton();
  }
}

async function exitFullscreenIfNeeded() {
  if (!fullscreenElement()) return;
  try {
    if (document.exitFullscreen) {
      await document.exitFullscreen();
    } else if (document.webkitExitFullscreen) {
      document.webkitExitFullscreen();
    } else if (document.msExitFullscreen) {
      document.msExitFullscreen();
    }
  } catch (error) {
    console.warn("Exit fullscreen failed.", error);
  }
}

function buildChaosLayout(width, height, specs) {
  const placements = [];
  const margin = 6;
  specs.forEach((spec, index) => {
    const itemWidth = Math.max(48, Math.min(spec.width, width - margin * 2));
    const itemHeight = Math.max(38, Math.min(spec.height, height - margin * 2));
    let chosen = null;

    for (let attempt = 0; attempt < 90; attempt += 1) {
      const x = randomRange(margin, Math.max(margin, width - itemWidth - margin));
      const y = randomRange(margin, Math.max(margin, height - itemHeight - margin));
      const overlaps = placements.some((placed) =>
        x < placed.x + placed.width + 8 &&
        x + itemWidth + 8 > placed.x &&
        y < placed.y + placed.height + 8 &&
        y + itemHeight + 8 > placed.y
      );
      if (!overlaps) {
        chosen = { x, y, width: itemWidth, height: itemHeight };
        break;
      }
    }

    if (!chosen) {
      const cols = Math.max(1, Math.ceil(Math.sqrt(specs.length)));
      const col = index % cols;
      const row = Math.floor(index / cols);
      const gap = 8;
      const cellWidth = Math.max(itemWidth, (width - gap * (cols - 1)) / cols);
      const rows = Math.max(1, Math.ceil(specs.length / cols));
      const cellHeight = Math.max(itemHeight, (height - gap * (rows - 1)) / rows);
      const x = Math.min(width - itemWidth - margin, col * (cellWidth + gap) + margin);
      const y = Math.min(height - itemHeight - margin, row * (cellHeight + gap) + margin);
      chosen = { x: Math.max(margin, x), y: Math.max(margin, y), width: itemWidth, height: itemHeight };
    }

    placements.push(chosen);
  });
  return placements;
}

function initializeChallengeCards(side, type, cards, container, specs) {
  const player = state.players[side];
  const motionKey = type === "picture" ? "pictureMotion" : "sentenceMotion";
  const boundsWidth = container.clientWidth || 320;
  const boundsHeight = container.clientHeight || 260;
  const motionMap = player[motionKey];
  const nextIds = new Set(cards.map((card) => card.dataset.cardId));

  Object.keys(motionMap).forEach((id) => {
    if (!nextIds.has(id)) {
      delete motionMap[id];
    }
  });

  const missing = cards.filter((card) => !motionMap[card.dataset.cardId]);
  if (missing.length) {
    const placements = buildChaosLayout(boundsWidth, boundsHeight, specs.slice(0, missing.length));
    missing.forEach((card, index) => {
      const placed = placements[index];
      const velocity = randomVelocity();
      motionMap[card.dataset.cardId] = {
        x: placed.x,
        y: placed.y,
        width: placed.width,
        height: placed.height,
        vx: velocity.vx,
        vy: velocity.vy
      };
    });
  }

  cards.forEach((card, index) => {
    const id = card.dataset.cardId;
    const motion = motionMap[id];
    if (!motion) return;
    const spec = specs[Math.min(index, specs.length - 1)];
    motion.width = spec.width;
    motion.height = spec.height;
    card.style.left = `${motion.x}px`;
    card.style.top = `${motion.y}px`;
    card.style.width = `${motion.width}px`;
  });
}

function initializeChallengeSide(side) {
  const dom = refs[side];
  if (state.phase !== "playing") return;

  if (isSectionNineChallenge(side)) {
    const cards = [...dom.pictures.querySelectorAll(".picture-card")];
    const width = dom.pictures.clientWidth || Math.max(220, dom.picturePanel.clientWidth - 18);
    const height = dom.pictures.clientHeight || Math.max(260, dom.picturePanel.clientHeight - 48);
    initializeChallengeCards(
      side,
      "picture",
      cards,
      dom.pictures,
      cards.map(() => ({ width: Math.min(150, width * 0.31), height: 124 }))
    );
    return;
  }

  if (isSectionTenChallenge(side)) {
    const pictureCards = [...dom.pictures.querySelectorAll(".picture-card")];
    const sentenceCards = [...dom.sentences.querySelectorAll(".sentence-card")];
    const width = dom.playZone.clientWidth || Math.max(320, dom.arena.clientWidth - 24);
    const height = dom.playZone.clientHeight || 420;
    const pictureSpecs = pictureCards.map(() => ({ width: Math.min(148, width * 0.24), height: 122 }));
    const sentenceSpecs = sentenceCards.map((card) => ({
      width: Math.min(Math.max(card.offsetWidth || 170, 150), Math.max(170, width * 0.34)),
      height: 58
    }));
    initializeChallengeCards(side, "picture", pictureCards, dom.pictures, pictureSpecs);
    initializeChallengeCards(side, "sentence", sentenceCards, dom.sentences, sentenceSpecs);
  }
}

function activateChallengeMotion() {
  clearChallengeMotion();
  if (!isSectionNineChallenge("left") && !isSectionNineChallenge("right") && !isSectionTenChallenge("left") && !isSectionTenChallenge("right")) return;

  const animate = (timestamp) => {
    if (state.phase !== "playing") return;
    if (!state.challengeLastTime) {
      state.challengeLastTime = timestamp;
    }
    const delta = Math.min((timestamp - state.challengeLastTime) / 1000, 0.04);
    state.challengeLastTime = timestamp;

    ["left", "right"].forEach((side) => {
      const dom = refs[side];
      const player = state.players[side];
      const moveGroups = [];
      if (isSectionNineChallenge(side)) {
        moveGroups.push({
          cards: [...dom.pictures.querySelectorAll(".picture-card.chaos-float")],
          motion: player.pictureMotion,
          width: dom.pictures.clientWidth || Math.max(220, dom.picturePanel.clientWidth - 18),
          height: dom.pictures.clientHeight || Math.max(260, dom.picturePanel.clientHeight - 48)
        });
      } else if (isSectionTenChallenge(side)) {
        moveGroups.push({
          cards: [...dom.pictures.querySelectorAll(".picture-card.chaos-float")],
          motion: player.pictureMotion,
          width: dom.pictures.clientWidth || dom.playZone.clientWidth || 320,
          height: dom.pictures.clientHeight || dom.playZone.clientHeight || 420
        });
        moveGroups.push({
          cards: [...dom.sentences.querySelectorAll(".sentence-card.chaos-float")],
          motion: player.sentenceMotion,
          width: dom.sentences.clientWidth || dom.playZone.clientWidth || 320,
          height: dom.sentences.clientHeight || dom.playZone.clientHeight || 420
        });
      }

      moveGroups.forEach((group) => {
        group.cards.forEach((card) => {
          const body = group.motion[card.dataset.cardId];
          if (!body) return;
          body.x += body.vx * delta;
          body.y += body.vy * delta;
          const maxX = Math.max(0, group.width - body.width - 6);
          const maxY = Math.max(0, group.height - body.height - 6);
          if (body.x <= 6) {
            body.x = 6;
            body.vx = Math.abs(body.vx);
          } else if (body.x >= maxX) {
            body.x = maxX;
            body.vx = -Math.abs(body.vx);
          }
          if (body.y <= 6) {
            body.y = 6;
            body.vy = Math.abs(body.vy);
          } else if (body.y >= maxY) {
            body.y = maxY;
            body.vy = -Math.abs(body.vy);
          }
          card.style.left = `${body.x}px`;
          card.style.top = `${body.y}px`;
        });
      });
    });

    state.challengeAnimationId = window.requestAnimationFrame(animate);
  };

  state.challengeAnimationId = window.requestAnimationFrame(animate);

  state.challengeTimerId = window.setInterval(() => {
    if (state.phase !== "playing") return;

    if (isSectionNineChallenge("left") || isSectionNineChallenge("right")) {
      Object.entries(state.players).forEach(([side, player]) => {
        if (isSectionNineChallenge(side) && !playerDone(player)) {
          player.sentenceOrder = shuffle(player.sentenceOrder);
          renderSide(side);
        }
      });
    }
  }, 1700);
}

function restartTimer() {
  if (state.timerId) {
    clearInterval(state.timerId);
  }
  updateSectionMeta();
  state.timerId = window.setInterval(() => {
    if (state.phase !== "playing") {
      clearInterval(state.timerId);
      return;
    }
    state.timeLeft -= 1;
    updateSectionMeta();
    if (state.timeLeft <= 0) {
      state.timeLeft = 0;
      clearInterval(state.timerId);
      showFinalResult({
        text: `Time is up. Team A has ${state.players.left.totalScore} points and Team B has ${state.players.right.totalScore} points.`
      });
    }
  }, 1000);
}

function selectPicture(side, id) {
  if (state.phase !== "playing") return;
  const player = state.players[side];
  if (player.locked || player.matched.has(id)) return;
  if (player.selectedPicture === id) {
    player.selectedPicture = null;
    if (!player.selectedSentence) {
      player.firstPickType = null;
      updateStatus(side, "Picture choice cleared. Pick a picture first for more points.", "");
    } else {
      updateStatus(side, "Picture choice cleared. Choose a picture to continue.", "");
    }
    renderSide(side);
    return;
  }
  if (!player.selectedPicture && !player.selectedSentence) {
    player.firstPickType = "picture";
  }
  player.selectedPicture = id;
  updateStatus(side, "Now choose the matching sentence.", "");
  maybeResolve(side);
  renderSide(side);
}

function selectSentence(side, id) {
  if (state.phase !== "playing") return;
  const player = state.players[side];
  if (player.locked || player.matched.has(id)) return;
  if (player.selectedSentence === id) {
    player.selectedSentence = null;
    if (!player.selectedPicture) {
      player.firstPickType = null;
      updateStatus(side, "Sentence choice cleared. Pick a picture first for more points.", "");
    } else {
      updateStatus(side, "Sentence choice cleared. Now choose the matching sentence.", "");
    }
    renderSide(side);
    return;
  }
  if (!player.selectedPicture && !player.selectedSentence) {
    player.firstPickType = "sentence";
  }
  player.selectedSentence = id;
  if (!player.selectedPicture) {
    updateStatus(side, "Sentence first. Now find the picture for fewer points.", "");
  }
  maybeResolve(side);
  renderSide(side);
}

function maybeResolve(side) {
  const player = state.players[side];
  if (!player.selectedPicture || !player.selectedSentence || player.locked) {
    return;
  }
  player.locked = true;
  window.setTimeout(() => resolveTurn(side), 150);
}

function pulseArena(side, className) {
  const arena = refs[side].arena;
  arena.classList.remove("hit", "miss");
  void arena.offsetWidth;
  arena.classList.add(className);
  window.setTimeout(() => arena.classList.remove(className), 320);
}

function showAnswerBurst(side, kind) {
  const burst = refs[side].burst;
  const image = refs[side].burstImage;
  const label = refs[side].burstLabel;
  const isCorrect = kind === "correct";
  burst.classList.remove("show", "correct", "wrong");
  if (state.burstTimers[side]) {
    window.clearTimeout(state.burstTimers[side]);
  }
  image.src = isCorrect
    ? "./assets/ui/correct-beaker.png"
    : "./assets/ui/try-again-germ.png";
  image.alt = isCorrect ? "Correct answer beaker" : "Try again germ";
  label.textContent = isCorrect ? "Correct" : "Try Again";
  burst.classList.add(isCorrect ? "correct" : "wrong");
  void burst.offsetWidth;
  burst.classList.add("show");
  state.burstTimers[side] = window.setTimeout(() => {
    burst.classList.remove("show", "correct", "wrong");
    state.burstTimers[side] = null;
  }, 920);
}

function resolveTurn(side) {
  const player = state.players[side];
  const correct = player.selectedPicture === player.selectedSentence;

  if (correct) {
    const answerId = player.selectedPicture;
    const pictureFirst = player.firstPickType === "picture";
    const earnedPoints = pointsForTurn(side, pictureFirst);
    player.matched.add(answerId);
    player.totalMatches += 1;
    player.totalScore += earnedPoints;
    player.combo += 1;
    updateStatus(
      side,
      pictureFirst
        ? `Correct. Picture first: +${earnedPoints} points. ${byId(answerId).sentence}`
        : `Correct. Sentence first: +${earnedPoints} points. ${byId(answerId).sentence}`,
      "good"
    );
    pulseArena(side, "hit");
    showAnswerBurst(side, "correct");
    playCorrect();
  } else {
    player.combo = 0;
    player.roundMisses += 1;
    player.totalMisses += 1;
    player.totalScore = Math.max(0, player.totalScore - WRONG_MATCH_DEDUCTION);
    updateStatus(side, `Wrong match. -${WRONG_MATCH_DEDUCTION} points. Try again.`, "bad");
    pulseArena(side, "miss");
    showAnswerBurst(side, "wrong");
    playWrong();
  }

  player.selectedPicture = null;
  player.selectedSentence = null;
  player.firstPickType = null;
  player.locked = false;
  renderSide(side);
  checkSectionEnd(side);
}

function checkSectionEnd(side) {
  const player = state.players[side];
  const deck = currentDeck(side);
  if (player.matched.size === deck.length) {
    finishPlayerSection(side);
  }
}

function finishPlayerSection(side) {
  const player = state.players[side];
  const finishedSection = player.currentSection;
  player.completedSections.add(finishedSection);
  player.sectionWins += 1;
  playFanfare();

  if (playerDone(player)) {
    player.locked = true;
    updateStatus(side, `${player.name} cleared all ${TOTAL_SECTIONS} sections. Waiting for the other team.`, "good");
  } else {
    const nextSection = nextUnfinishedSection(player, finishedSection + 1);
    player.currentSection = nextSection;
    buildSide(player, currentDeck(side));
    updateStatus(side, `Section ${player.currentSection + 1}: new board loaded. Keep going.`, "good");
  }

  renderSide(side);
  updateSectionMeta();
  activateChallengeMotion();

  if (playerDone(state.players.left) && playerDone(state.players.right)) {
    showFinalResult();
  }
}

function showFinalResult(options = {}) {
  state.phase = "finished";
  clearChallengeMotion();
  if (state.timerId) {
    clearInterval(state.timerId);
  }
  const left = state.players.left;
  const right = state.players.right;
  let title = "Final Draw";
  let text = options.text || `Both teams finished with ${left.totalScore} points after ${TOTAL_SECTIONS} sections.`;

  if (left.totalScore > right.totalScore) {
    title = "Team A Wins The Battle";
    text = options.text || `Team A finished with ${left.totalScore} points. Team B finished with ${right.totalScore} points.`;
  } else if (right.totalScore > left.totalScore) {
    title = "Team B Wins The Battle";
    text = options.text || `Team B finished with ${right.totalScore} points. Team A finished with ${left.totalScore} points.`;
  }

  refs.resultTitle.textContent = title;
  refs.resultText.textContent = text;
  refs.playAgainBtn.textContent = "Play Again";
  state.pendingAction = "restart";
  ensureResultConfetti();
  refs.resultOverlay.classList.add("show");
  renderAll();
}

function skipSection(side) {
  if (state.phase !== "playing") return;
  const player = state.players[side];
  if (playerDone(player)) return;
  const nextSection = nextUnfinishedSection(player, player.currentSection + 1);
  if (nextSection === null) return;
  player.currentSection = nextSection;
  buildSide(player, currentDeck(side));
  updateStatus(side, `Section ${player.currentSection + 1}: skipped here. You still need to finish the earlier unfinished sections later.`, "");
  renderSide(side);
  updateSectionMeta();
  activateChallengeMotion();
}

function openFinishPasswordPanel() {
  refs.finishPasswordError.textContent = "";
  refs.finishPasswordInput.value = "";
  refs.finishPasswordOverlay.classList.add("show");
  refs.finishPasswordOverlay.setAttribute("aria-hidden", "false");
  window.setTimeout(() => refs.finishPasswordInput.focus(), 0);
}

function closeFinishPasswordPanel() {
  refs.finishPasswordOverlay.classList.remove("show");
  refs.finishPasswordOverlay.setAttribute("aria-hidden", "true");
  refs.finishPasswordError.textContent = "";
  refs.finishGameBtn.focus();
}

function finishGameNow() {
  openFinishPasswordPanel();
}

function submitFinishPassword(event) {
  event.preventDefault();
  if (refs.finishPasswordInput.value !== FINISH_GAME_CODE) {
    refs.finishPasswordError.textContent = "Incorrect code. Please try again.";
    refs.finishPasswordInput.value = "";
    refs.finishPasswordInput.focus();
    return;
  }
  closeFinishPasswordPanel();
  const playedSections = Math.max(
    state.players.left.completedSections.size + (playerDone(state.players.left) ? 0 : 1),
    state.players.right.completedSections.size + (playerDone(state.players.right) ? 0 : 1),
    1
  );
  showFinalResult({
    text: `Game finished early after ${playedSections} section${playedSections === 1 ? "" : "s"}. Team A has ${state.players.left.totalScore} points and Team B has ${state.players.right.totalScore} points.`
  });
}

window.finishGameNow = finishGameNow;

function continueAfterOverlay() {
  refs.resultOverlay.classList.remove("show");
  if (state.pendingAction === "restart") {
    resetBattle();
  }
}

function ensureAudioRunning() {
  if (!state.audio) return;
  if (state.audio.context && state.audio.context.state === "suspended") {
    state.audio.context.resume().catch(() => {});
  }
}

function initAudio() {
  if (state.audioStarted) {
    ensureAudioRunning();
    return;
  }
  const AudioContextClass = window.AudioContext || window.webkitAudioContext;
  if (!AudioContextClass) return;

  const context = new AudioContextClass();
  const master = context.createGain();
  const music = context.createGain();
  const sfx = context.createGain();

  master.gain.value = 0.62;
  music.gain.value = 0.14;
  sfx.gain.value = 0.18;
  music.connect(master);
  sfx.connect(master);
  master.connect(context.destination);

  state.audio = { context, master, music, sfx };
  state.audioStarted = true;
  refs.musicState.textContent = "On";
  ensureAudioRunning();
  startMusicLoop();
}

function playTone(freq, duration, options = {}) {
  if (!state.audio) return;
  const { context, sfx } = state.audio;
  const now = context.currentTime;
  const osc = context.createOscillator();
  const gain = context.createGain();
  osc.type = options.type || "sine";
  osc.frequency.setValueAtTime(freq, now);
  gain.gain.setValueAtTime(0.0001, now);
  gain.gain.exponentialRampToValueAtTime(options.volume || 0.08, now + 0.01);
  gain.gain.exponentialRampToValueAtTime(0.0001, now + duration);
  osc.connect(gain);
  gain.connect(options.bus || sfx);
  osc.start(now);
  osc.stop(now + duration + 0.02);
}

function playCorrect() {
  playTone(440, 0.16, { type: "triangle", volume: 0.09 });
  window.setTimeout(() => playTone(554.37, 0.18, { type: "triangle", volume: 0.08 }), 80);
  window.setTimeout(() => playTone(659.25, 0.22, { type: "triangle", volume: 0.08 }), 150);
}

function playWrong() {
  playTone(220, 0.18, { type: "sawtooth", volume: 0.08 });
  window.setTimeout(() => playTone(165, 0.22, { type: "sawtooth", volume: 0.07 }), 90);
}

function playFanfare() {
  playTone(523.25, 0.18, { type: "triangle", volume: 0.08 });
  window.setTimeout(() => playTone(659.25, 0.18, { type: "triangle", volume: 0.08 }), 110);
  window.setTimeout(() => playTone(783.99, 0.22, { type: "triangle", volume: 0.08 }), 220);
}

function playMusicStep() {
  if (!state.audio) return;
  const { context, music } = state.audio;
  const now = context.currentTime;
  const bassPattern = [164.81, 164.81, 196.0, 220.0, 164.81, 196.0, 246.94, 220.0];
  const leadPattern = [659.25, 783.99, 880.0, 987.77, 880.0, 783.99, 659.25, 587.33];
  const accentPattern = [987.77, 1046.5, 1174.66, 1318.51, 1174.66, 1046.5, 987.77, 880.0];
  const step = state.musicStep % bassPattern.length;

  const bass = context.createOscillator();
  const bassGain = context.createGain();
  bass.type = "sawtooth";
  bass.frequency.setValueAtTime(bassPattern[step], now);
  bassGain.gain.setValueAtTime(0.0001, now);
  bassGain.gain.exponentialRampToValueAtTime(0.055, now + 0.008);
  bassGain.gain.exponentialRampToValueAtTime(0.012, now + 0.11);
  bassGain.gain.exponentialRampToValueAtTime(0.0001, now + 0.2);
  bass.connect(bassGain);
  bassGain.connect(music);
  bass.start(now);
  bass.stop(now + 0.22);

  const lead = context.createOscillator();
  const leadGain = context.createGain();
  lead.type = "square";
  lead.frequency.setValueAtTime(leadPattern[step], now + 0.01);
  leadGain.gain.setValueAtTime(0.0001, now);
  leadGain.gain.exponentialRampToValueAtTime(0.03, now + 0.015);
  leadGain.gain.exponentialRampToValueAtTime(0.009, now + 0.09);
  leadGain.gain.exponentialRampToValueAtTime(0.0001, now + 0.18);
  lead.connect(leadGain);
  leadGain.connect(music);
  lead.start(now + 0.01);
  lead.stop(now + 0.2);

  if (step % 2 === 0) {
    const accent = context.createOscillator();
    const accentGain = context.createGain();
    accent.type = "triangle";
    accent.frequency.setValueAtTime(accentPattern[step], now + 0.03);
    accentGain.gain.setValueAtTime(0.0001, now);
    accentGain.gain.exponentialRampToValueAtTime(0.02, now + 0.04);
    accentGain.gain.exponentialRampToValueAtTime(0.0001, now + 0.14);
    accent.connect(accentGain);
    accentGain.connect(music);
    accent.start(now + 0.03);
    accent.stop(now + 0.15);
  }

  const kick = context.createOscillator();
  const kickGain = context.createGain();
  kick.type = "sine";
  kick.frequency.setValueAtTime(160, now);
  kick.frequency.exponentialRampToValueAtTime(58, now + 0.12);
  kickGain.gain.setValueAtTime(0.0001, now);
  kickGain.gain.exponentialRampToValueAtTime(0.075, now + 0.005);
  kickGain.gain.exponentialRampToValueAtTime(0.0001, now + 0.12);
  kick.connect(kickGain);
  kickGain.connect(music);
  kick.start(now);
  kick.stop(now + 0.13);

  if (step % 2 === 1) {
    const noise = context.createBufferSource();
    const noiseBuffer = context.createBuffer(1, Math.floor(context.sampleRate * 0.08), context.sampleRate);
    const channel = noiseBuffer.getChannelData(0);
    for (let i = 0; i < channel.length; i += 1) {
      channel[i] = (Math.random() * 2 - 1) * (1 - i / channel.length);
    }
    const noiseFilter = context.createBiquadFilter();
    const noiseGain = context.createGain();
    noise.buffer = noiseBuffer;
    noiseFilter.type = "highpass";
    noiseFilter.frequency.setValueAtTime(1800, now);
    noiseGain.gain.setValueAtTime(0.0001, now);
    noiseGain.gain.exponentialRampToValueAtTime(0.018, now + 0.01);
    noiseGain.gain.exponentialRampToValueAtTime(0.0001, now + 0.08);
    noise.connect(noiseFilter);
    noiseFilter.connect(noiseGain);
    noiseGain.connect(music);
    noise.start(now + 0.02);
    noise.stop(now + 0.1);
  }

  state.musicStep += 1;
}

function startMusicLoop() {
  if (state.musicTimerId) return;
  playMusicStep();
  state.musicTimerId = window.setInterval(playMusicStep, 240);
}

function handleCoverChoice(type) {
  initAudio();

  if (type === "picture") {
    state.introSelection = "picture";
    refs.coverPictureBtn.classList.add("active");
    refs.coverSentenceBtn.classList.remove("active");
    refs.introHint.innerHTML = "Nice. Now click <strong>Sentence</strong> to make the cover match.";
    playTone(392.0, 0.12, { type: "triangle", volume: 0.08 });
    return;
  }

  if (type === "sentence" && state.introSelection === "picture") {
    refs.coverSentenceBtn.classList.add("matched");
    refs.coverPictureBtn.classList.add("matched");
    refs.introHint.innerHTML = "Match complete. Section battle unlocked.";
    playCorrect();
    window.setTimeout(() => {
      refs.introOverlay.classList.remove("show");
      resetBattle();
    }, 420);
    return;
  }

  refs.introHint.innerHTML = "Start with <strong>Picture</strong>, then click <strong>Sentence</strong>.";
  refs.coverPictureBtn.classList.remove("active");
  refs.coverSentenceBtn.classList.remove("active");
  state.introSelection = null;
  playWrong();
}

refs.coverPictureBtn.addEventListener("click", () => handleCoverChoice("picture"));
refs.coverSentenceBtn.addEventListener("click", () => handleCoverChoice("sentence"));
refs.left.skipBtn.addEventListener("click", () => {
  skipSection("left");
});
refs.right.skipBtn.addEventListener("click", () => {
  skipSection("right");
});
refs.finishGameBtn.addEventListener("click", () => {
  ensureAudioRunning();
  finishGameNow();
});
refs.finishPasswordForm.addEventListener("submit", submitFinishPassword);
refs.finishPasswordClose.addEventListener("click", closeFinishPasswordPanel);
refs.finishPasswordOverlay.addEventListener("click", (event) => {
  if (event.target === refs.finishPasswordOverlay) closeFinishPasswordPanel();
});
document.addEventListener("keydown", (event) => {
  if (event.key === "Escape" && refs.finishPasswordOverlay.classList.contains("show")) {
    closeFinishPasswordPanel();
  }
});
refs.fullscreenBtn.addEventListener("click", () => {
  ensureAudioRunning();
  toggleFullscreen();
});
refs.restartBtn.addEventListener("click", () => {
  ensureAudioRunning();
  if (!state.audioStarted) {
    initAudio();
  }
  refs.resultOverlay.classList.remove("show");
  resetBattle();
});
refs.playAgainBtn.addEventListener("click", () => {
  ensureAudioRunning();
  continueAfterOverlay();
});
document.addEventListener("visibilitychange", () => {
  if (!document.hidden) {
    ensureAudioRunning();
    updateFullscreenButton();
  }
});
document.addEventListener("pointerdown", ensureAudioRunning);
document.addEventListener("touchstart", ensureAudioRunning, { passive: true });
document.addEventListener("fullscreenchange", () => {
  updateFullscreenButton();
  initGermMotion();
});
document.addEventListener("webkitfullscreenchange", () => {
  updateFullscreenButton();
  initGermMotion();
});
document.addEventListener("MSFullscreenChange", () => {
  updateFullscreenButton();
  initGermMotion();
});
window.addEventListener("resize", initGermMotion);

refs.deckCount.textContent = ACTIVE_DECK.length;
refs.sectionText.textContent = `A 1/${TOTAL_SECTIONS} | B 1/${TOTAL_SECTIONS}`;
refs.timerText.textContent = "07:00";
refs.musicState.textContent = "Off";
updateFullscreenButton();
initGermMotion();
renderAll();
