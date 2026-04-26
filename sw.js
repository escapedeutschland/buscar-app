const CACHE_NAME = 'buscar-v69';

// Network-first für HTML – immer frische App laden
// Cache-first nur für statische Assets (Scripts, CSS)

self.addEventListener('install', e => {
  self.skipWaiting();
});

self.addEventListener('activate', e => {
  e.waitUntil(
    caches.keys().then(keys =>
      Promise.all(keys.map(k => caches.delete(k)))
    ).then(() => self.clients.claim())
  );
});

self.addEventListener('fetch', e => {
  if (e.request.method !== 'GET') return;

  const url = e.request.url;

  // Never cache these
  if (url.includes('firestore') ||
      url.includes('firebase') ||
      url.includes('googleapis') ||
      url.includes('translate') ||
      url.includes('openstreetmap') ||
      url.includes('er-api.com') ||
      url.includes('mymemory')) return;

  // HTML: always network-first, fall back to cache
  if (url.includes('buscar-app') && (url.endsWith('/') || url.endsWith('.html'))) {
    e.respondWith(
      fetch(e.request)
        .then(res => {
          const clone = res.clone();
          caches.open(CACHE_NAME).then(c => c.put(e.request, clone));
          return res;
        })
        .catch(() => caches.match(e.request))
    );
    return;
  }

  // Everything else: cache-first
  e.respondWith(
    caches.match(e.request).then(cached => {
      if (cached) return cached;
      return fetch(e.request).then(res => {
        if (res && res.status === 200) {
          const clone = res.clone();
          caches.open(CACHE_NAME).then(c => c.put(e.request, clone));
        }
        return res;
      });
    })
  );
});
