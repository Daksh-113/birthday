// ===================== FUN INTRO SEQUENCE =====================
const loadingLines = [
  "Loading candles... 🕯️",
  "Locating the cake... 🎂 (still looking)",
  "Charging confetti cannons... 💥",
  "Untangling the balloons... 🎈",
  "Bribing the DJ for one more song... 🎶",
  "Convincing the cake not to fall over... 😅",
  "Almost there, hang tight... ✨"
];

const loadingLineEl = document.getElementById("loading-line");
const loadingFillEl = document.getElementById("loading-fill");
const surpriseBtn = document.getElementById("surprise-btn");
const hintEl = document.getElementById("hint");

let lineIndex = 0;
let progress = 0;

const lineTimer = setInterval(() => {
  lineIndex = (lineIndex + 1) % loadingLines.length;
  loadingLineEl.textContent = loadingLines[lineIndex];
}, 900);

const progressTimer = setInterval(() => {
  progress += Math.random() * 12 + 6;
  if (progress >= 100) {
    progress = 100;
    loadingFillEl.style.width = "100%";
    loadingLineEl.textContent = "Okay, ready! 🎉";
    clearInterval(progressTimer);
    clearInterval(lineTimer);
    surpriseBtn.hidden = false;
  } else {
    loadingFillEl.style.width = progress + "%";
  }
}, 500);

// Floating background emojis on the fun screen
const funEmojis = ["🎈", "🎉", "🎊", "🍰", "⭐"];
const floatingContainer = document.getElementById("floating-emojis");
function spawnFunEmoji() {
  const span = document.createElement("span");
  span.textContent = funEmojis[Math.floor(Math.random() * funEmojis.length)];
  span.style.left = Math.random() * 100 + "%";
  const duration = 6 + Math.random() * 4;
  span.style.animationDuration = duration + "s";
  floatingContainer.appendChild(span);
  setTimeout(() => span.remove(), duration * 1000);
}
setInterval(spawnFunEmoji, 500);

// Button dodges the cursor a few times before letting itself be clicked
let dodgeCount = 0;
const maxDodges = 3;

function dodge() {
  if (dodgeCount >= maxDodges) return;
  dodgeCount++;
  surpriseBtn.classList.add("fixed-position");
  const margin = 60;
  const maxX = window.innerWidth - surpriseBtn.offsetWidth - margin;
  const maxY = window.innerHeight - surpriseBtn.offsetHeight - margin;
  const x = Math.max(margin, Math.random() * maxX);
  const y = Math.max(margin, Math.random() * maxY);
  surpriseBtn.style.left = x + "px";
  surpriseBtn.style.top = y + "px";
  if (dodgeCount >= maxDodges) {
    hintEl.hidden = false;
  }
}

surpriseBtn.addEventListener("mouseenter", dodge);
surpriseBtn.addEventListener("click", revealRomanticScreen);

function revealRomanticScreen() {
  burstConfetti();
  document.getElementById("intro").classList.remove("active");
  const romantic = document.getElementById("romantic");
  romantic.classList.add("active");
  document.body.classList.remove("fun-phase");
  document.body.classList.add("romantic-phase");
  startHearts();
  setupScrollReveal();
  document.getElementById("music-toggle").classList.add("visible");
  tryPlayMusic();
}

// ===================== CONFETTI =====================
function burstConfetti() {
  if (typeof confetti !== "function") return;
  confetti({ particleCount: 140, spread: 90, origin: { y: 0.6 } });
  setTimeout(() => confetti({ particleCount: 80, spread: 120, origin: { y: 0.4 } }), 300);
}

document.getElementById("confetti-again").addEventListener("click", burstConfetti);

// ===================== FLOATING HEARTS =====================
const heartsBg = document.getElementById("hearts-bg");
const heartSymbols = ["💗", "💕", "💖", "❤️", "💘"];
let heartsInterval;

function startHearts() {
  if (heartsInterval) return;
  heartsInterval = setInterval(() => {
    const span = document.createElement("span");
    span.textContent = heartSymbols[Math.floor(Math.random() * heartSymbols.length)];
    span.style.left = Math.random() * 100 + "%";
    const duration = 8 + Math.random() * 6;
    span.style.animationDuration = duration + "s";
    span.style.fontSize = 1 + Math.random() * 1.5 + "rem";
    heartsBg.appendChild(span);
    setTimeout(() => span.remove(), duration * 1000);
  }, 400);
}

// ===================== SCROLL REVEAL =====================
// Fades in each full-screen page's photo/caption as it snaps into view.
function setupScrollReveal() {
  const container = document.getElementById("snap-container");
  const targets = document.querySelectorAll(".snap-section");
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) entry.target.classList.add("in-view");
    });
  }, { root: container, threshold: 0.5 });
  targets.forEach((t) => observer.observe(t));
}

// ===================== MUSIC =====================
const musicBtn = document.getElementById("music-toggle");
const music = document.getElementById("bg-music");
let musicPlaying = false;

function tryPlayMusic() {
  music.volume = 0.6;
  music.play()
    .then(() => { musicPlaying = true; musicBtn.textContent = "🔊"; })
    .catch(() => { musicPlaying = false; musicBtn.textContent = "🎵"; });
}

musicBtn.addEventListener("click", () => {
  if (musicPlaying) {
    music.pause();
    musicPlaying = false;
    musicBtn.textContent = "🎵";
  } else {
    music.play()
      .then(() => { musicPlaying = true; musicBtn.textContent = "🔊"; })
      .catch(() => {});
  }
});
