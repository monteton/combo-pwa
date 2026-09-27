// Комплекс «All inclusive». Общая логика: иконки, нижнее меню, видео-окно, отметки выполненных тренировок.

const SUPPORT_URL = 'https://t.me/MyuppyTeam';

const ICONS = {
  back: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="M15 18l-6-6 6-6"/></svg>',
  arrow: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h14M13 6l6 6-6 6"/></svg>',
  play: '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M8 5.5v13a1 1 0 0 0 1.5.86l10.5-6.5a1 1 0 0 0 0-1.72L9.5 4.64A1 1 0 0 0 8 5.5z"/></svg>',
  close: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round"><path d="M6 6l12 12M18 6L6 18"/></svg>',
  check: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12.5l4.5 4.5L19 7.5"/></svg>',
  clock: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round"><circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 2"/></svg>',
  list: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round"><path d="M9 6h11M9 12h11M9 18h11M4.5 6h.01M4.5 12h.01M4.5 18h.01"/></svg>',
  heart: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 20s-7-4.35-7-10a4 4 0 0 1 7-2.65A4 4 0 0 1 19 10c0 5.65-7 10-7 10z"/></svg>',
  info: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round"><circle cx="12" cy="12" r="9"/><path d="M12 11v5M12 7.5h.01"/></svg>',
  leaf: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M5 19c0-8 5-13 15-14-1 10-6 15-14 15"/><path d="M5 19l7-7"/></svg>',
  home: '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M12.7 2.3a1 1 0 0 0-1.4 0l-9 9A1 1 0 0 0 3 13h1v7a1 1 0 0 0 1 1h4a1 1 0 0 0 1-1v-4a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v4a1 1 0 0 0 1 1h4a1 1 0 0 0 1-1v-7h1a1 1 0 0 0 .7-1.7z"/></svg>',
  user: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"><circle cx="12" cy="8.5" r="3.5"/><path d="M5 20c1.2-3.6 4-5.5 7-5.5s5.8 1.9 7 5.5"/></svg>',
  help: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"><circle cx="12" cy="12" r="9"/><path d="M9.6 9.3a2.5 2.5 0 0 1 4.8.9c0 1.7-2.4 2.2-2.4 3.8M12 17h.01"/></svg>',
  posture: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="4.5" r="2"/><path d="M12 7.5v8M8 10.5h8M12 15.5l-3 5M12 15.5l3 5"/></svg>',
  flame: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 21c-3.9 0-6.5-2.6-6.5-6.2 0-3.4 2.6-5.5 3.8-8.8 2 1.4 2.4 3.3 2.2 4.8 1.3-.6 2.2-2 2.3-3.8 2.4 2 4.7 4.8 4.7 7.8 0 3.6-2.6 6.2-6.5 6.2z"/></svg>',
  core: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="6" y="3.5" width="12" height="17" rx="5"/><path d="M12 3.5v17M6.5 9.5h11M6.5 14.5h11"/></svg>',
  dumbbell: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M6.5 6.5v11M17.5 6.5v11M3.5 9v6M20.5 9v6M6.5 12h11"/></svg>',
  face: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="9"/><path d="M8.5 14.5c.9 1.2 2.1 1.8 3.5 1.8s2.6-.6 3.5-1.8M9 9.5h.01M15 9.5h.01"/></svg>',
  link: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="M14 4h6v6M20 4l-9 9M18 14v5a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V7a1 1 0 0 1 1-1h5"/></svg>',
  file: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M14 3H7a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V8z"/><path d="M14 3v5h5M9 13h6M9 17h6"/></svg>',
};

// ---------- Нижнее меню ----------
function renderTabbar(active) {
  const items = [
    { id: 'home', href: './main.html', label: 'Главная', icon: ICONS.home },
    { id: 'profile', href: './profile.html', label: 'Профиль', icon: ICONS.user },
    { id: 'support', href: SUPPORT_URL, label: 'Поддержка', icon: ICONS.help, external: true },
  ];
  const nav = document.createElement('nav');
  nav.className = 'tabbar';
  nav.innerHTML = items.map(i => `
    <a href="${i.href}" class="${i.id === active ? 'active' : ''}"${i.external ? ' target="_blank" rel="noopener"' : ''}>
      ${i.icon}<span>${i.label}</span>
    </a>`).join('');
  document.body.appendChild(nav);
}

// ---------- Модальные окна ----------
function openModal(el) { el.classList.add('open'); }
function closeModal(el) {
  el.classList.remove('open');
  el.querySelectorAll('video').forEach(v => v.pause());
}
function bindModal(el) {
  el.addEventListener('click', e => { if (e.target === el) closeModal(el); });
  el.querySelectorAll('[data-close]').forEach(b => b.addEventListener('click', () => closeModal(el)));
}
document.addEventListener('keydown', e => {
  if (e.key === 'Escape') document.querySelectorAll('.modal.open').forEach(closeModal);
});

// Окно с одним видео (создаётся по требованию)
function openVideo(src, title) {
  let modal = document.getElementById('video-modal');
  if (!modal) {
    modal = document.createElement('div');
    modal.id = 'video-modal';
    modal.className = 'modal';
    modal.innerHTML = `
      <div class="modal-sheet">
        <button class="modal-close" data-close aria-label="Закрыть">${ICONS.close}</button>
        <h2 id="video-modal-title"></h2>
        <div class="video-box"><video playsinline controls preload="metadata"></video></div>
      </div>`;
    document.body.appendChild(modal);
    bindModal(modal);
  }
  modal.querySelector('#video-modal-title').textContent = title;
  const video = modal.querySelector('video');
  if (video.getAttribute('src') !== src) video.setAttribute('src', src);
  openModal(modal);
  video.play().catch(() => {});
}

// ---------- Выполненные тренировки ----------
const DONE_KEY = 'combo-done-v1';

function getDone() {
  try { return JSON.parse(localStorage.getItem(DONE_KEY)) || {}; } catch { return {}; }
}
function isDone(type, id) { return !!getDone()[`${type}-${id}`]; }
function setDone(type, id, value) {
  const done = getDone();
  if (value) done[`${type}-${id}`] = Date.now(); else delete done[`${type}-${id}`];
  try { localStorage.setItem(DONE_KEY, JSON.stringify(done)); } catch {}
}
function countDone(type) {
  return Object.keys(getDone()).filter(k => k.startsWith(type + '-')).length;
}

// ---------- Service Worker ----------
// PWA: приложение работает без интернета (кроме видео)
if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => navigator.serviceWorker.register('sw.js'));
}
