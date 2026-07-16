const VERSION = 'v221';
const STATIC_CACHE = 'buscar-static-' + VERSION;
const RUNTIME_CACHE = 'buscar-runtime-' + VERSION;
// Bilder-Cache bewusst NICHT versioniert: Nutzer-Fotos/Cover ändern sich nicht mit
// der App-Version und sollen Deploys überdauern (spart teure Re-Downloads auf Mobil).
const IMAGE_CACHE = 'buscar-images';
const IMAGE_MAX = 120;
function isStorageImage(url) {
  return url.indexOf('firebasestorage.googleapis.com') !== -1 || url.indexOf('firebasestorage.app') !== -1;
}
function trimImageCache() {
  caches.open(IMAGE_CACHE).then((cache) => cache.keys().then((keys) => {
    if (keys.length <= IMAGE_MAX) return;
    // FIFO: älteste Einträge zuerst entfernen
    for (let i = 0; i < keys.length - IMAGE_MAX; i++) cache.delete(keys[i]);
  }));
}
const STATIC_ASSETS = [
  './',
  './index.html',
  './styles.css?v=221',
  './app.js?v=221',
  './manifest.json',
  './icon-192.png',
  './icon-512.png',
  './paraguay.geojson'
];
self.addEventListener('install', (event) => {
  self.skipWaiting();
  event.waitUntil(
    caches.open(STATIC_CACHE).then((cache) => cache.addAll(STATIC_ASSETS).catch(() => {}))
  );
});
self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((keys) =>
      Promise.all(
        keys
          .filter((k) => k !== STATIC_CACHE && k !== RUNTIME_CACHE && k !== IMAGE_CACHE)
          .map((k) => caches.delete(k))
      )
    ).then(() => self.clients.claim())
  );
});
const NEVER_CACHE = [
  'firestore', 'firebase', 'googleapis', 'translate',
  'er-api.com', 'mymemory', 'identitytoolkit', 'securetoken'
];
self.addEventListener('fetch', (event) => {
  const req = event.request;
  if (req.method !== 'GET') return;
  const url = req.url;
  // Firebase-Storage-BILDER (nur echte Bild-Ladevorgänge): eigener, dauerhafter
  // Cache-first-Store mit Größenlimit. Muss VOR dem NEVER_CACHE-Check stehen,
  // da Storage-URLs sonst über 'firebase'/'googleapis' ausgeschlossen würden.
  if (req.destination === 'image' && isStorageImage(url)) {
    event.respondWith(
      caches.open(IMAGE_CACHE).then((cache) =>
        cache.match(req).then((hit) => {
          if (hit) return hit;
          return fetch(req).then((res) => {
            if (res && (res.status === 200 || res.type === 'opaque')) {
              cache.put(req, res.clone());
              trimImageCache();
            }
            return res;
          }).catch(() => hit);
        })
      )
    );
    return;
  }
  if (NEVER_CACHE.some((s) => url.includes(s))) return;
  const accept = req.headers.get('accept') || '';
  const isHTML = req.mode === 'navigate' || accept.includes('text/html');
  if (isHTML) {
    event.respondWith(
      fetch(req)
        .then((res) => {
          const clone = res.clone();
          caches.open(STATIC_CACHE).then((c) => c.put(req, clone));
          return res;
        })
        .catch(() => caches.match(req).then((c) => c || caches.match('./index.html')))
    );
    return;
  }
  event.respondWith(
    caches.match(req).then((cached) => {
      if (cached) return cached;
      return fetch(req).then((res) => {
        if (res && res.status === 200 && (res.type === 'basic' || res.type === 'cors')) {
          const clone = res.clone();
          caches.open(RUNTIME_CACHE).then((c) => c.put(req, clone));
        }
        return res;
      }).catch(() => cached);
    })
  );
});
