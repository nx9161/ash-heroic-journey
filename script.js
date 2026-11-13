// script.js — Ash Heroic Journey interactive script
// Vanilla JS, Intersection Observer scroll-reveal, localStorage bookmarks, keyboard nav

const CANVAS_WIDTH = 480;
const CANVAS_HEIGHT = 288;

let currentSceneIndex = 0;
let sceneCanvases = {};
let preRendered = false;
let bookmarks = new Set();
let controls = {
  prev: ['ArrowLeft', 'KeyA'],
  next: ['ArrowRight', 'KeyD'],
  interact: ['Space', 'Enter'],
  close: ['Escape'],
  bookmark: ['KeyB']
};

// DOM elements
const canvas = document.getElementById('sceneCanvas');
const ctx = canvas.getContext('2d');
const sceneTitle = document.getElementById('scene-title');
const progressChip = document.getElementById('progress-chip');
const sceneHeading = document.getElementById('scene-heading');
const sceneCaption = document.getElementById('scene-caption');
const beatTag = document.getElementById('beat-tag');
const sceneWrap = document.querySelector('.scene-wrap');
const detailPanel = document.getElementById('scene-detail');
const heroicList = document.getElementById('heroic-list');
const onboarding = document.getElementById('onboarding');
const btnPrev = document.getElementById('btn-prev');
const btnNext = document.getElementById('btn-next');
const btnBookmark = document.getElementById('btn-bookmark');
const btnCloseDetail = document.getElementById('btn-close-detail');
const btnOnboardDismiss = document.getElementById('btn-onboard-dismiss');

// Init
function init() {
  loadState();
  preRenderScenes();
  renderHeroicList();
  setupIntersectionObserver();
  setupKeyboardControls();
  setupButtons();
  updateScene(0);
  showOnboardingIfNeeded();
}

function preRenderScenes() {
  const offscreen = document.createElement('canvas');
  offscreen.width = CANVAS_WIDTH;
  offscreen.height = CANVAS_HEIGHT;
  const octx = offscreen.getContext('2d');
  octx.imageSmoothingEnabled = false;

  SCENES.forEach((scene, i) => {
    const c = document.createElement('canvas');
    c.width = CANVAS_WIDTH; c.height = CANVAS_HEIGHT;
    const sctx = c.getContext('2d');
    sctx.imageSmoothingEnabled = false;
    scene.draw(sctx);
    sceneCanvases[i] = c;
  });
  preRendered = true;
}

function updateScene(index) {
  if (index < 0 || index >= SCENES.length) return;
  currentSceneIndex = index;
  const scene = SCENES[index];

  // Draw to main canvas
  ctx.clearRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
  ctx.imageSmoothingEnabled = false;
  ctx.drawImage(sceneCanvases[index], 0, 0);

  // Update UI
  sceneTitle.textContent = `Scene ${index + 1} of ${SCENES.length}`;
  progressChip.textContent = Math.round((index / (SCENES.length - 1)) * 100) + '%';
  sceneHeading.textContent = scene.title;
  sceneCaption.textContent = scene.caption;
  beatTag.textContent = scene.beatLabel || '';
  beatTag.style.display = scene.heroic ? 'inline-block' : 'none';

  // Bookmark state
  btnBookmark.textContent = bookmarks.has(index) ? '★' : '☆';
  btnBookmark.classList.toggle('glow-btn', bookmarks.has(index));

  // Nav buttons
  btnPrev.disabled = index === 0;
  btnNext.disabled = index === SCENES.length - 1;

  // Scene wrap animation
  sceneWrap.classList.remove('visible');
  requestAnimationFrame(() => sceneWrap.classList.add('visible'));

  saveState();
}

function renderHeroicList() {
  heroicList.innerHTML = '';
  SCENES.filter(s => s.heroic).forEach((scene, i) => {
    const card = document.createElement('div');
    card.className = 'beat-card';
    card.innerHTML = `
      <h4>${scene.title}</h4>
      <p>${scene.caption}</p>
    `;
    card.addEventListener('click', () => openDetail(SCENES.indexOf(scene)));
    heroicList.appendChild(card);
  });
}

function openDetail(index) {
  const scene = SCENES[index];
  document.getElementById('detail-title').textContent = scene.title;
  document.getElementById('detail-text').textContent = scene.caption;
  document.getElementById('detail-region').textContent = scene.region;
  document.getElementById('detail-beat').textContent = scene.beatLabel || '—';
  document.getElementById('detail-why').textContent = scene.whyHeroic || 'A pivotal moment in the journey.';
  detailPanel.style.display = 'block';
  detailPanel.setAttribute('aria-hidden', 'false');
}

function closeDetail() {
  detailPanel.style.display = 'none';
  detailPanel.setAttribute('aria-hidden', 'true');
}

function toggleBookmark() {
  if (bookmarks.has(currentSceneIndex)) {
    bookmarks.delete(currentSceneIndex);
  } else {
    bookmarks.add(currentSceneIndex);
  }
  updateScene(currentSceneIndex);
}

function setupIntersectionObserver() {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
      }
    });
  }, { threshold: 0.15, rootMargin: '0px 0px -50px 0px' });

  document.querySelectorAll('.scene-wrap, .beat-card').forEach(el => observer.observe(el));
}

function setupKeyboardControls() {
  document.addEventListener('keydown', (e) => {
    // Prevent default for our keys
    const isOurKey = [...controls.prev, ...controls.next, ...controls.interact, ...controls.close, ...controls.bookmark].includes(e.code);
    if (isOurKey && !e.target.matches('input, textarea, button')) {
      e.preventDefault();
    }

    if (controls.prev.includes(e.code)) {
      if (!btnPrev.disabled) updateScene(currentSceneIndex - 1);
    } else if (controls.next.includes(e.code)) {
      if (!btnNext.disabled) updateScene(currentSceneIndex + 1);
    } else if (controls.interact.includes(e.code)) {
      if (!detailPanel.style.display || detailPanel.style.display === 'none') {
        openDetail(currentSceneIndex);
      }
    } else if (controls.close.includes(e.code)) {
      closeDetail();
    } else if (controls.bookmark.includes(e.code)) {
      toggleBookmark();
    }
  });
}

function setupButtons() {
  btnPrev.addEventListener('click', () => {
    if (!btnPrev.disabled) updateScene(currentSceneIndex - 1);
  });
  btnNext.addEventListener('click', () => {
    if (!btnNext.disabled) updateScene(currentSceneIndex + 1);
  });
  btnBookmark.addEventListener('click', toggleBookmark);
  btnCloseDetail.addEventListener('click', closeDetail);
  btnOnboardDismiss.addEventListener('click', () => {
    onboarding.style.display = 'none';
    localStorage.setItem('ahj_onboarded', '1');
  });
}

function showOnboardingIfNeeded() {
  if (!localStorage.getItem('ahj_onboarded')) {
    onboarding.style.display = 'block';
  } else {
    onboarding.style.display = 'none';
  }
}

function saveState() {
  try {
    const state = {
      scene: currentSceneIndex,
      bookmarks: Array.from(bookmarks),
      onboarded: localStorage.getItem('ahj_onboarded') || '0'
    };
    localStorage.setItem('ahj_state', JSON.stringify(state));
  } catch (e) {
    // Quota exceeded or private mode - continue without persistence
  }
}

function loadState() {
  try {
    const state = JSON.parse(localStorage.getItem('ahj_state') || '{}');
    if (state.bookmarks) bookmarks = new Set(state.bookmarks);
    if (typeof state.scene === 'number') currentSceneIndex = Math.max(0, Math.min(state.scene, SCENES.length - 1));
  } catch (e) {
    // Corrupt or missing - start fresh
  }
}

// Start
document.addEventListener('DOMContentLoaded', init);