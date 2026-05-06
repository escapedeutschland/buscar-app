const VERSION = 'v73';
const STATIC_CACHE = 'buscar-static-' + VERSION;
const RUNTIME_CACHE = 'buscar-runtime-' + VERSION;

const STATIC_ASSETS = [
  './',
  './index.html',
  './styles.css?v=73',
  './app.js?v=73',
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
          .filter((k) => k !== STATIC_CACHE && k !== RUNTIME_CACHE)
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
