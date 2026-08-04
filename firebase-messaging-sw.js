/* Buscar – Push-Service-Worker (Phase 1/2: Community-Antworten & Events)
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

// firebase.messaging() im Service Worker aktiviert den STANDARD-Hintergrund-Handler
// von FCM: er zeigt eine Notification-Payload automatisch EINMAL an und öffnet bei
// Klick webpush.fcm_options.link. Absichtlich KEIN eigener onBackgroundMessage- und
// KEIN eigener notificationclick-Handler – sonst würde die Mitteilung DOPPELT
// erscheinen (Auto-Anzeige + eigener showNotification).
firebase.messaging();
