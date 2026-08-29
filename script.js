/* ============================================================
   EDIT EVERYTHING IN THIS CONFIG BLOCK — this is the only part
   you need to touch to personalize the site.
   ============================================================ */
const CONFIG = {
  herName: "Diba",
  navBrand: "For Diba",

  coverTitle: "Happy Birthday, Diba!",
  coverSub: "i made u a little website hehe",

  letterHeading: "Dear Diba,",
  letterParagraphs: [
    "u always complaint about me did not give u a handwritten letter, so here u go a digital (handwritten) letter from me. cantik tak tulisan i hehe.",
    "happy birthday sayang yang ke 25. sedar tak sedar u dah suku abad dah HAHAHAHAHA.",
    "may this day happen to be the greatest day of your life and keep your cute smile bright as ever.",
    "i always love u with no doubt, through up and downs, through our insecurities and flaws. i will always be there for u in whatever situation.",
    "btw i make this website for u because u know i am an IT guy hehe."
  ],
  letterSign: "— Your Muiz, always",

  // Gallery: put real files in /images/us/ and /images/food/, then
  // reference them here, e.g. img: "images/us/photo1.jpg"
  gallery: {
    us: [
      { img: "images/us/bareface.jpeg", caption: "bareface ONTOPPP" },
      { img: "images/us/vietnam.jpeg", caption: "diba in vietnam" },
      { img: "images/us/anomali.jpeg", caption: "anomali HAHAHAHAHA" },
      { img: "images/us/raya.jpeg", caption: "vibe2 dah kawin HEHEHE" },
      { img: "images/us/chisu.jpeg", caption: "COMELNYA CHISUUU" },
      { img: "images/us/photobooth.jpeg", caption: "to more photobooth session with u" },
      { img: "images/us/diba.jpeg", caption: "akak leopard" },
      { img: "images/us/diba2.jpeg", caption: "LAWANYAAAA" },
      { img: "images/us/mirror.jpeg", caption: "mirror selfie wajib - diba 2026" }
    ],
    food: [
      { img: "images/food/saddam.jpeg", caption: "all-time fav nasi kandar place" },
      { img: "images/food/malatang.jpeg", caption: "our first time jumpa panda mala" },
      { img: "images/food/gepuk.jpeg", caption: "GEPUKKKKK" },
      { img: "images/food/bingsu.jpeg", caption: "to more bingsu hunting with u" },
      { img: "images/food/bagel.jpeg", caption: "bila nak repeat?" },
      { img: "images/food/shabuyaki.jpeg", caption: "current fav buffet spot" },
      { img: "images/food/gayam.jpeg", caption: "sedapnyaaa" },
      { img: "images/food/meh.jpeg", caption: "5/10" },
      { img: "images/food/nightdate.jpeg", caption: "little night date" }
    ]
  },

  // Her face during the arcade game — 3 photos, same crop/framing so
  // switching between them doesn't visibly jump.
  arcadeFaces: {
    closed: "images/diba-closed.png",
    open: "images/diba-open.png",
    disgust: "images/diba-disgust.png"
  },

  // Food for the arcade game. "good" images should be transparent PNGs
  // (JPG will show a solid box around the food, not a clean cutout).
  // "bad" is the onion — catching it costs a life, missing it is fine.
  arcadeFood: {
    good: [
      "images/gepuk.png",
      "images/tiramisu.png",
      "images/matcha.png",
      "images/malatang.png",
      "images/sushi.png",
      "images/pizza.png",
      "images/takoyaki.png",
      "images/mushroomsoup.png"
    ],
    bad: "images/onion.png"
  },

  // Each question maps to one digit of the secret code, in order.
  quiz: [
    {
      q: "Who usually says 'goodmorning' first?",
      options: ["muiz", "diba", "whoever wakes up first", "none of us"],
      correct: 2,
      note: "come on. u ingat u sorang je ke bangun awal cehh",
      codeDigit: "0"
    },
    {
      q: "Who is more likely to forget an anniversary?",
      options: ["muiz", "diba", "both", "none of us"],
      correct: 0,
      note: "cowwyy hehe",
      codeDigit: "9"
    },
    {
      q: "Who eats faster?",
      options: ["muiz", "diba", "both", "both are slow"],
      correct: 0,
      note: "i makan 2x portion u pon i habis dulu",
      codeDigit: "0"
    },
    {
      q: "Who's more dramatic when we're hungry?",
      options: ["muiz", "diba", "both", "none of us"],
      correct: 1,
      note: "obviously diba HAHAHAHA",
      codeDigit: "7"
    }
  ],
  quizResults: {
    high: "congratss sayangg u betul semua yeayyy",
    mid: "not bad i guess",
    low: "mcm kena study balik je niiii"
  },

  finaleTitle: "Happy Birthday, Diba.",
  finaleBody: "However today goes, i hope it's a good one, start to finish. Thank u for being exactly who u are. i love u.",

  // Her birthday, in YYYY-MM-DD. The countdown runs to the END of
  // this date (23:59:59). Double-check this is the date you mean.
  birthday: {
    date: "2026-09-07"
  },

  // Put your mp3 in /music/ and point to it here. This must be a
  // song you own or have the rights to use — see README.
  song: {
    src: "music/song.mp3",
    title: "Tekan sini sayanggg"
  },

  // The 4-digit code she gets from a perfect quiz run, and the
  // photo it unlocks. hiddenPhoto MUST be a transparent-background
  // PNG cutout, or the silhouette effect will just show a black box.
  secretCode: {
    code: "0907",
    hiddenPhoto: "images/secret-photo.png"
  }
};
/* ============================================================
   END OF EDITABLE SECTION — no need to touch anything below
   unless you want to change how the site behaves.
   ============================================================ */

// ---- apply config to static text ----
document.getElementById('navBrand').textContent = CONFIG.navBrand;
document.getElementById('coverTitle').textContent = CONFIG.coverTitle;
document.getElementById('coverSub').textContent = CONFIG.coverSub;
document.getElementById('letterHeading').textContent = CONFIG.letterHeading;
document.getElementById('letterSign').textContent = CONFIG.letterSign;
document.getElementById('letterBody').innerHTML = CONFIG.letterParagraphs
  .map((p, i) => `<p style="animation-delay:${i * 0.35}s">${p}</p>`).join('');
document.getElementById('finaleTitle').textContent = CONFIG.finaleTitle;
document.getElementById('finaleBody').textContent = CONFIG.finaleBody;

// ---- birthday lock: keeps her on the Home section until midnight
// of her actual birthday, no refresh needed to unlock ----
let siteLocked = false;

function preventScrollKey(e) {
  const blocked = ['ArrowDown', 'ArrowUp', 'PageDown', 'PageUp', ' ', 'Spacebar'];
  if (blocked.includes(e.key)) e.preventDefault();
}
function preventScrollEvent(e) {
  e.preventDefault();
}

function lockSite() {
  siteLocked = true;
  document.body.classList.add('locked');
  document.getElementById('lockMessage').style.display = 'block';
  document.querySelectorAll('.nav-link').forEach(link => {
    if (link.getAttribute('href') !== '#home') link.classList.add('locked-disabled');
  });
  document.getElementById('heroStartBtn').classList.add('locked-disabled');
  window.addEventListener('wheel', preventScrollEvent, { passive: false });
  window.addEventListener('touchmove', preventScrollEvent, { passive: false });
  window.addEventListener('keydown', preventScrollKey);
}

function unlockSite() {
  siteLocked = false;
  document.body.classList.remove('locked');
  document.getElementById('lockMessage').style.display = 'none';
  document.querySelectorAll('.nav-link').forEach(link => link.classList.remove('locked-disabled'));
  document.getElementById('heroStartBtn').classList.remove('locked-disabled');
  window.removeEventListener('wheel', preventScrollEvent, { passive: false });
  window.removeEventListener('touchmove', preventScrollEvent, { passive: false });
  window.removeEventListener('keydown', preventScrollKey);
}

// ---- birthday countdown ----
let countdownTimer;
function updateCountdown() {
  const start = new Date(CONFIG.birthday.date + "T00:00:00");
  const end = new Date(CONFIG.birthday.date + "T23:59:59");
  const now = new Date();
  const label = document.getElementById('countdownLabel');
  const digits = document.getElementById('countdownDigits');

  if (now < start && !siteLocked) {
    lockSite();
  } else if (now >= start && siteLocked) {
    unlockSite();
  }

  let target;
  if (now < start) {
    label.textContent = "until your birthday starts";
    target = start;
  } else if (now <= end) {
    label.textContent = "left of your birthday — go enjoy it";
    target = end;
  } else {
    label.textContent = "i hope your birthday was everything. 🎂";
    digits.style.display = 'none';
    clearInterval(countdownTimer);
    return;
  }

  const diff = Math.max(0, target - now);
  const d = Math.floor(diff / 86400000);
  const h = Math.floor((diff % 86400000) / 3600000);
  const m = Math.floor((diff % 3600000) / 60000);
  const s = Math.floor((diff % 60000) / 1000);
  document.getElementById('cdDays').textContent = String(d).padStart(2, '0');
  document.getElementById('cdHours').textContent = String(h).padStart(2, '0');
  document.getElementById('cdMins').textContent = String(m).padStart(2, '0');
  document.getElementById('cdSecs').textContent = String(s).padStart(2, '0');
}
updateCountdown();
countdownTimer = setInterval(updateCountdown, 1000);

// ---- mobile nav toggle ----
const navToggle = document.getElementById('navToggle');
const navLinks = document.getElementById('navLinks');
navToggle.addEventListener('click', () => navLinks.classList.toggle('open'));
navLinks.querySelectorAll('.nav-link').forEach(link => {
  link.addEventListener('click', () => navLinks.classList.remove('open'));
});

// ---- active nav link on scroll ----
const sections = document.querySelectorAll('.section');
const navLinkEls = document.querySelectorAll('.nav-link');
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      const id = entry.target.getAttribute('id');
      navLinkEls.forEach(l => l.classList.toggle('active', l.getAttribute('href') === '#' + id));
    }
  });
}, { rootMargin: '-40% 0px -55% 0px' });
sections.forEach(s => observer.observe(s));

// ---- gallery tabs + lightbox ----
function renderGallery(containerId, items) {
  const el = document.getElementById(containerId);
  el.innerHTML = items.map((item, i) => {
    const inner = item.img
      ? `<img src="${item.img}" alt="${item.caption}">`
      : '';
    return `<div class="gallery-item" data-index="${i}">${inner}<span>${item.caption}</span></div>`;
  }).join('');
  el.querySelectorAll('.gallery-item').forEach(node => {
    node.addEventListener('click', () => {
      openLightbox(items, Number(node.dataset.index));
    });
  });
}
renderGallery('galleryUs', CONFIG.gallery.us);
renderGallery('galleryFood', CONFIG.gallery.food);

const lightbox = document.getElementById('lightbox');
const lightboxImg = document.getElementById('lightboxImg');
const lightboxCaption = document.getElementById('lightboxCaption');
let currentGalleryList = [];
let currentGalleryIndex = 0;

function showLightboxImage() {
  const item = currentGalleryList[currentGalleryIndex];
  lightboxImg.src = item.img;
  lightboxCaption.textContent = item.caption;
}
function openLightbox(items, index) {
  currentGalleryList = items;
  currentGalleryIndex = index;
  showLightboxImage();
  lightbox.classList.add('open');
}
function closeLightbox() {
  lightbox.classList.remove('open');
}
function lightboxPrev() {
  currentGalleryIndex = (currentGalleryIndex - 1 + currentGalleryList.length) % currentGalleryList.length;
  showLightboxImage();
}
function lightboxNext() {
  currentGalleryIndex = (currentGalleryIndex + 1) % currentGalleryList.length;
  showLightboxImage();
}
document.getElementById('lightboxClose').addEventListener('click', closeLightbox);
document.getElementById('lightboxPrev').addEventListener('click', lightboxPrev);
document.getElementById('lightboxNext').addEventListener('click', lightboxNext);
lightbox.addEventListener('click', (e) => {
  if (e.target === lightbox) closeLightbox();
});
document.addEventListener('keydown', (e) => {
  if (!lightbox.classList.contains('open')) return;
  if (e.key === 'Escape') closeLightbox();
  if (e.key === 'ArrowLeft') lightboxPrev();
  if (e.key === 'ArrowRight') lightboxNext();
});

document.querySelectorAll('.tab-btn').forEach(btn => {
  btn.addEventListener('click', () => {
    document.querySelectorAll('.tab-btn').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    const tab = btn.dataset.tab;
    document.getElementById('galleryUs').style.display = tab === 'us' ? 'grid' : 'none';
    document.getElementById('galleryFood').style.display = tab === 'food' ? 'grid' : 'none';
  });
});

// ---- Feed Her arcade game ----
const arcadeField = document.getElementById('arcadeField');
const arcadeFace = document.getElementById('arcadeFace');
const arcadeFaceImg = document.getElementById('arcadeFaceImg');
const arcadeScoreEl = document.getElementById('arcadeScore');
const arcadeHighEl = document.getElementById('arcadeHigh');
const arcadeStartBtn = document.getElementById('arcadeStartBtn');
const arcadeMessage = document.getElementById('arcadeMessage');

const MAX_MISSES = 5;
const OPEN_MOUTH_DISTANCE = 80; // px above the face that triggers "open"
const DISGUST_HOLD_MS = 500;
let arcadeRunning = false;
let arcadeScore = 0;
let arcadeMisses = 0;
let arcadeFoods = [];
let facePct = 50; // face center as % of field width
let lastSpawn = 0;
let spawnInterval = 1000;
let rafId;
let disgustUntil = 0;
let currentFaceSrc = '';

// high score persists in this browser only (localStorage), not shared
// across her devices
arcadeHighEl.textContent = Number(localStorage.getItem('bday_highscore') || 0);

function renderLives() {
  const livesEl = document.getElementById('arcadeLives');
  livesEl.innerHTML = '';
  for (let i = 0; i < MAX_MISSES; i++) {
    const span = document.createElement('span');
    span.className = 'arcade-life';
    span.textContent = '❤️';
    livesEl.appendChild(span);
  }
}
function updateLives() {
  document.querySelectorAll('.arcade-life').forEach((el, i) => {
    el.classList.toggle('lost', i < arcadeMisses);
  });
}
renderLives();

function setFaceImage(src) {
  if (currentFaceSrc === src) return;

  currentFaceSrc = src;
  arcadeFaceImg.src = src;
}
setFaceImage(CONFIG.arcadeFaces.closed);

function setFacePosition(pct) {
  facePct = Math.min(94, Math.max(6, pct));
  arcadeFace.style.left = facePct + '%';
}

let dragging = false;
arcadeField.addEventListener('pointerdown', (e) => { dragging = true; moveFaceToEvent(e); });
window.addEventListener('pointermove', (e) => { if (dragging) moveFaceToEvent(e); });
window.addEventListener('pointerup', () => { dragging = false; });
function moveFaceToEvent(e) {
  const rect = arcadeField.getBoundingClientRect();
  const pct = ((e.clientX - rect.left) / rect.width) * 100;
  setFacePosition(pct);
}
window.addEventListener('keydown', (e) => {
  if (!arcadeRunning) return;
  if (e.key === 'ArrowLeft') setFacePosition(facePct - 4);
  if (e.key === 'ArrowRight') setFacePosition(facePct + 4);
});

// ---- shuffled food bag: good items appear ~2x as often as onion,
// and nothing repeats in long streaks the way pure random.() can ----
let foodBag = [];
function refillFoodBag() {
  foodBag = [];
  CONFIG.arcadeFood.good.forEach(src => {
    foodBag.push({ src, bad: false });
    foodBag.push({ src, bad: false });
  });
  foodBag.push({ src: CONFIG.arcadeFood.bad, bad: true });
  for (let i = foodBag.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [foodBag[i], foodBag[j]] = [foodBag[j], foodBag[i]];
  }
}
function nextFoodItem() {
  if (foodBag.length === 0) refillFoodBag();
  return foodBag.pop();
}

function spawnFood() {
  const item = nextFoodItem();
  const el = document.createElement('div');
  el.className = 'arcade-food';
  el.innerHTML = `<img src="${item.src}" alt="">`;
  const xPct = 8 + Math.random() * 84;
  el.style.left = xPct + '%';
  el.style.top = '-20px';
  arcadeField.appendChild(el);
  arcadeFoods.push({ el, xPct, y: -20, speed: 90 + Math.random() * 70, bad: item.bad });
}

function endArcade() {
  arcadeRunning = false;
  cancelAnimationFrame(rafId);
  arcadeFoods.forEach(f => f.el.remove());
  arcadeFoods = [];
  setFaceImage(CONFIG.arcadeFaces.disgust);
  const prevHigh = Number(localStorage.getItem('bday_highscore') || 0);
  if (arcadeScore > prevHigh) {
    localStorage.setItem('bday_highscore', arcadeScore);
    arcadeHighEl.textContent = arcadeScore;
    arcadeMessage.textContent = `New high score! ${arcadeScore} 🎉`;
  } else {
    arcadeMessage.textContent = `Game over — score: ${arcadeScore}`;
  }
  arcadeStartBtn.textContent = 'Play Again 🍽️';
  arcadeStartBtn.disabled = false;
}

function arcadeLoop(timestamp) {
  if (!arcadeRunning) return;
  if (!lastSpawn) lastSpawn = timestamp;
  if (timestamp - lastSpawn > spawnInterval) {
    spawnFood();
    lastSpawn = timestamp;
    spawnInterval = Math.max(420, spawnInterval - 12);
  }

  const fieldRect = arcadeField.getBoundingClientRect();
  const faceY = fieldRect.height - 44; // approx face vertical position
  let nearFood = false;

  arcadeFoods.forEach(f => {
    f.y += f.speed / 60;
    f.el.style.top = f.y + 'px';

    if (faceY - f.y < OPEN_MOUTH_DISTANCE && faceY - f.y > -20 && !f.caught && !f.missed) {
      nearFood = true;
    }

    if (f.y >= faceY && !f.caught && !f.missed) {
      const dx = Math.abs(f.xPct - facePct);
      if (dx < 9) {
        f.caught = true;
        f.el.remove();
        if (f.bad) {
          arcadeMisses++;
          updateLives();
          disgustUntil = timestamp + DISGUST_HOLD_MS;
          if (arcadeMisses >= MAX_MISSES) endArcade();
        } else {
          arcadeScore++;
          arcadeScoreEl.textContent = arcadeScore;
        }
      }
    }
    if (f.y > fieldRect.height && !f.caught && !f.missed) {
      f.missed = true;
      f.el.remove();
      // missing the onion is a good thing — only good food misses count
      if (!f.bad) {
        arcadeMisses++;
        updateLives();
        if (arcadeMisses >= MAX_MISSES) endArcade();
      }
    }
  });
  arcadeFoods = arcadeFoods.filter(f => !f.caught && !f.missed);

  if (arcadeRunning) {
    if (timestamp < disgustUntil) {
      setFaceImage(CONFIG.arcadeFaces.disgust);
    } else {
      setFaceImage(nearFood ? CONFIG.arcadeFaces.open : CONFIG.arcadeFaces.closed);
    }
  }

  rafId = requestAnimationFrame(arcadeLoop);
}

arcadeStartBtn.addEventListener('click', () => {
  arcadeScore = 0;
  arcadeMisses = 0;
  spawnInterval = 1000;
  lastSpawn = 0;
  disgustUntil = 0;
  refillFoodBag();
  renderLives();
  arcadeScoreEl.textContent = 0;
  arcadeMessage.textContent = '';
  arcadeStartBtn.disabled = true;
  arcadeStartBtn.textContent = 'Playing...';
  arcadeRunning = true;
  setFaceImage(CONFIG.arcadeFaces.closed);
  rafId = requestAnimationFrame(arcadeLoop);
});

// ---- quiz ----
let quizIndex = 0;

function renderQuizQuestion() {
  const total = CONFIG.quiz.length;
  const q = CONFIG.quiz[quizIndex];
  document.getElementById('quizProgress').textContent = `Question ${quizIndex + 1} of ${total}`;
  document.getElementById('quizQ').textContent = q.q;
  document.getElementById('quizNote').textContent = '';
  document.getElementById('quizNextBtn').style.display = 'none';
  document.getElementById('quizTryAgainBtn').style.display = 'none';
  const optWrap = document.getElementById('quizOptions');
  optWrap.innerHTML = '';
  q.options.forEach((opt, i) => {
    const b = document.createElement('button');
    b.className = 'option-btn';
    b.textContent = opt;
    b.addEventListener('click', () => answerQuiz(i));
    optWrap.appendChild(b);
  });
}

function revealDigit(index, digit) {
  const slot = document.getElementById('slot' + index);
  slot.textContent = digit;
  slot.classList.add('filled');
}

function answerQuiz(i) {
  const q = CONFIG.quiz[quizIndex];
  const buttons = document.querySelectorAll('#quizOptions .option-btn');
  buttons.forEach((b, idx) => {
    b.disabled = true;
    if (idx === q.correct) b.classList.add('correct');
    else if (idx === i) b.classList.add('wrong');
  });
  document.getElementById('quizNote').textContent = q.note;

  if (i === q.correct) {
    revealDigit(quizIndex, q.codeDigit);
    if (quizIndex < CONFIG.quiz.length - 1) {
      document.getElementById('quizNextBtn').style.display = 'inline-block';
    } else {
      setTimeout(() => {
        document.getElementById('quizQ').textContent = "You got them all right!";
        document.getElementById('quizOptions').innerHTML = '';
        document.getElementById('quizNote').textContent = "Now go enter the code in the Secret Code section.";
      }, 900);
    }
  } else {
    setTimeout(() => {
      document.getElementById('quizTryAgainBtn').style.display = 'inline-block';
    }, 700);
  }
}

function resetQuiz() {
  quizIndex = 0;
  for (let i = 0; i < CONFIG.quiz.length; i++) {
    const slot = document.getElementById('slot' + i);
    slot.textContent = '_';
    slot.classList.remove('filled');
  }
  renderQuizQuestion();
}

document.getElementById('quizNextBtn').addEventListener('click', () => {
  quizIndex++;
  renderQuizQuestion();
});
document.getElementById('quizTryAgainBtn').addEventListener('click', resetQuiz);
renderQuizQuestion();

// ---- secret code ----
const secretPhotoImg = document.getElementById('secretPhotoImg');
const secretCodeInput = document.getElementById('secretCodeInput');
const secretSubmitBtn = document.getElementById('secretSubmitBtn');
const secretMessage = document.getElementById('secretMessage');

secretPhotoImg.src = CONFIG.secretCode.hiddenPhoto;

secretSubmitBtn.addEventListener('click', () => {
  const guess = secretCodeInput.value.trim();
  if (guess === CONFIG.secretCode.code) {
    secretPhotoImg.classList.remove('silhouette');
    secretPhotoImg.classList.add('revealed');
    secretMessage.classList.remove('error');
    secretMessage.textContent = "yeayy u menang custom blind box by muiz 🎉.";
  } else {
    secretMessage.classList.add('error');
    secretMessage.textContent = "Try again.";
  }
});
secretCodeInput.addEventListener('keydown', (e) => {
  if (e.key === 'Enter') secretSubmitBtn.click();
});

// ---- gramophone player ----
const audioEl = document.getElementById('audioEl');
const cdDisc = document.getElementById('cdDisc'); // .turntable button

audioEl.src = CONFIG.song.src;
document.getElementById('cdLabel').textContent = CONFIG.song.title;

cdDisc.addEventListener('click', () => {
  if (audioEl.paused) {
    audioEl.play().catch(() => {
      document.getElementById('cdLabel').textContent = "Add a song file first";
    });
  } else {
    audioEl.pause();
  }
});

audioEl.addEventListener('play', () => {
  cdDisc.classList.add('playing');
  cdDisc.setAttribute('aria-pressed', 'true');
});
audioEl.addEventListener('pause', () => {
  cdDisc.classList.remove('playing');
  cdDisc.setAttribute('aria-pressed', 'false');
});
audioEl.addEventListener('ended', () => {
  cdDisc.classList.remove('playing');
  cdDisc.setAttribute('aria-pressed', 'false');
});

// ---- confetti ----
function burstConfetti() {
  const colors = ['#FF6F91', '#FFC857', '#8AA17E', '#3D2645'];
  for (let i = 0; i < 60; i++) {
    const piece = document.createElement('div');
    piece.className = 'confetti-piece';
    piece.style.left = Math.random() * 100 + 'vw';
    piece.style.background = colors[Math.floor(Math.random() * colors.length)];
    piece.style.animationDuration = (2 + Math.random() * 2) + 's';
    piece.style.transform = `rotate(${Math.random() * 360}deg)`;
    document.body.appendChild(piece);
    setTimeout(() => piece.remove(), 4200);
  }
}
document.getElementById('confettiBtn').addEventListener('click', burstConfetti);