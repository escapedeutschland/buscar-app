/* Buscar – Push-Service-Worker (Phase 1: Antwort auf deine Community-Frage)
 * Bewusst getrennt vom Caching-SW (sw.js) und mit engem Scope registriert,
 * damit er den normalen Betrieb nicht beeinflusst. Wird NUR geladen, wenn ein
 * Nutzer Benachrichtigungen aktiv einschaltet – Standardnutzer laden ihn nie.
 * messagingSenderId + appId müssen mit der Firebase-Web-Config übereinstimmen.
 */
importScripts('https://www.gstatic.com/firebasejs/10.7.1/firebase-app-compat.js');
importScripts('https://www.gstatic.com/firebasejs/10.7.1/firebase-messaging-compat.js');

firebase.initializeApp({
  apiKey: 'AIzaSyC_nxQL9Jo0EPUCtyI8QvnnRVKRBPbREKU',
  authDomain: 'paraguay-app-8beb3.firebaseapp.com',
  projectId: 'paraguay-app-8beb3',
  storageBucket: 'paraguay-app-8beb3.firebasestorage.app',
  messagingSenderId: '966029575850',
  appId: '1:966029575850:web:59a41621877663bc0572d3'
});

var messaging = firebase.messaging();

// Hintergrund-Nachrichten (App nicht im Vordergrund)
messaging.onBackgroundMessage(function(payload) {
  var n = payload.notification || payload.data || {};
  var link = (payload.fcmOptions && payload.fcmOptions.link) ||
             (payload.data && payload.data.link) || './';
  return self.registration.showNotification(n.title || 'Buscar', {
    body: n.body || '',
    icon: './icon-192.png',
    badge: './icon-192.png',
    data: { link: link },
    tag: (payload.data && payload.data.tag) || undefined
  });
});

// Tippen auf die Mitteilung -> App fokussieren / passenden Screen öffnen
self.addEventListener('notificationclick', function(event) {
  event.notification.close();
  var link = (event.notification.data && event.notification.data.link) || './';
  event.waitUntil(
    clients.matchAll({ type: 'window', includeUncontrolled: true }).then(function(cl) {
      for (var i = 0; i < cl.length; i++) {
        if (cl[i].url.indexOf('buscar-app') !== -1) {
          cl[i].focus();
          if ('navigate' in cl[i]) { try { cl[i].navigate(link); } catch (e) {} }
          return;
        }
      }
      return clients.openWindow(link);
    })
  );
});
