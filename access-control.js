// Доступ к приложению — 180 дней с первого входа на этом устройстве.
(function () {
  var KEY = 'combo-first-access';
  var MAX_DAYS = 180;
  var now = Date.now();
  var first = null;
  try { first = localStorage.getItem(KEY); } catch (e) {}
  if (!first) {
    try { localStorage.setItem(KEY, String(now)); } catch (e) {}
    return;
  }
  var daysPassed = (now - parseInt(first, 10)) / 86400000;
  if (daysPassed > MAX_DAYS && !/expired\.html$/.test(location.pathname)) {
    location.replace('expired.html');
  }
})();

// Прошлая версия приложения хранила дату установки в кэше service worker.
// Если она раньше нашей — считаем доступ от неё, чтобы срок не начинался заново после обновления.
(function () {
  if (!('caches' in window)) return;
  var KEY = 'combo-first-access';
  caches.open('combo-meta-v1').then(function (c) { return c.match('install-timestamp'); }).then(function (r) {
    return r ? r.text() : null;
  }).then(function (text) {
    var old = parseInt(text, 10);
    if (!old) return;
    var cur = parseInt(localStorage.getItem(KEY) || '0', 10);
    if (!cur || old < cur) localStorage.setItem(KEY, String(old));
    if ((Date.now() - old) / 86400000 > 180 && !/expired\.html$/.test(location.pathname)) location.replace('expired.html');
  }).catch(function () {});
})();
