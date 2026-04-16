<!DOCTYPE html>
<html lang="de">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no">
  <meta name="theme-color" content="#F5A623">
  <meta name="apple-mobile-web-app-capable" content="yes">
  <meta name="apple-mobile-web-app-status-bar-style" content="default">
  <meta name="apple-mobile-web-app-title" content="Buscar">
  <meta name="description" content="Buscar – Die App für Deutsche in Paraguay">
  <title>Buscar – Deutsche in Paraguay</title>

  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link href="https://fonts.googleapis.com/css2?family=Fraunces:wght@700;900&family=DM+Sans:wght@400;500;600&display=swap" rel="stylesheet">

  <script src="https://www.gstatic.com/firebasejs/10.7.1/firebase-app-compat.js"></script>
  <script src="https://www.gstatic.com/firebasejs/10.7.1/firebase-firestore-compat.js"></script>
  <script src="https://www.gstatic.com/firebasejs/10.7.1/firebase-auth-compat.js"></script>

  <style>
    *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }

    :root {
      --yellow:       #F5A623;
      --yellow-dark:  #D4841A;
      --yellow-light: #FFF8EC;
      --yellow-glow:  rgba(245,166,35,0.18);
      --bg:           #F7F5F0;
      --card:         #FFFFFF;
      --text-1:       #1A1A1A;
      --text-2:       #6B6B6B;
      --text-3:       #AAAAAA;
      --green:        #22C55E;
      --green-light:  #DCFCE7;
      --border:       #EFEFEF;
      --radius-sm:    10px;
      --radius-md:    16px;
      --radius-lg:    22px;
      --shadow-sm:    0 2px 12px rgba(0,0,0,0.06);
      --shadow-md:    0 4px 20px rgba(0,0,0,0.08);
    }

    html, body {
      height: 100%;
      font-family: 'DM Sans', -apple-system, sans-serif;
      background: var(--bg);
      color: var(--text-1);
      -webkit-font-smoothing: antialiased;
      overflow: auto;
    }

    #app {
      display: flex;
      flex-direction: column;
      height: 100vh;
      max-width: 430px;
      margin: 0 auto;
      background: var(--bg);
      position: relative;
    }

    /* ── Header ─────────────────────────────── */
    .header {
      background: linear-gradient(135deg, var(--yellow) 0%, var(--yellow-dark) 100%);
      padding: 52px 20px 20px;
      flex-shrink: 0;
    }

    .header-top {
      display: flex;
      align-items: center;
      justify-content: space-between;
      margin-bottom: 4px;
    }

    .logo {
      display: flex;
      align-items: center;
      gap: 10px;
    }

    .logo-icon {
      width: 36px;
      height: 36px;
      background: rgba(255,255,255,0.2);
      border-radius: 10px;
      display: flex;
      align-items: center;
      justify-content: center;
    }

    .logo-icon svg {
      width: 20px;
      height: 20px;
    }

    .logo-name {
      font-family: 'Fraunces', Georgia, serif;
      font-size: 26px;
      font-weight: 900;
      color: white;
      letter-spacing: -0.5px;
    }

    .header-avatar {
      width: 38px;
      height: 38px;
      border-radius: 50%;
      background: rgba(255,255,255,0.25);
      border: 1.5px solid rgba(255,255,255,0.4);
      display: flex;
      align-items: center;
      justify-content: center;
      cursor: pointer;
    }

    .header-avatar svg {
      width: 20px;
      height: 20px;
      stroke: white;
    }

    .header-sub {
      font-size: 13px;
      color: rgba(255,255,255,0.8);
      font-weight: 400;
    }

    /* ── Suchleiste ──────────────────────────── */
    .search-wrap {
      padding: 16px 16px 8px;
      flex-shrink: 0;
    }

    .search-box {
      display: flex;
      align-items: center;
      background: var(--card);
      border-radius: var(--radius-md);
      box-shadow: var(--shadow-md);
      padding: 0 16px;
      gap: 10px;
      height: 50px;
    }

    .search-box svg {
      width: 18px;
      height: 18px;
      stroke: var(--yellow);
      flex-shrink: 0;
    }

    .search-box input {
      flex: 1;
      border: none;
      outline: none;
      font-family: 'DM Sans', sans-serif;
      font-size: 14px;
      color: var(--text-1);
      background: transparent;
    }

    .search-box input::placeholder {
      color: var(--text-3);
    }

    .search-clear {
      width: 20px;
      height: 20px;
      border-radius: 50%;
      background: var(--border);
      border: none;
      cursor: pointer;
      display: none;
      align-items: center;
      justify-content: center;
      font-size: 12px;
      color: var(--text-2);
    }

    .search-clear.visible { display: flex; }

    /* ── Kategorie Chips ─────────────────────── */
    .cats-wrap {
      padding: 0 0 10px;
      flex-shrink: 0;
    }

    .cats-scroll {
      display: flex;
      gap: 8px;
      padding: 4px 16px;
      overflow-x: auto;
      scrollbar-width: none;
    }

    .cats-scroll::-webkit-scrollbar { display: none; }

    .cat-chip {
      display: flex;
      align-items: center;
      gap: 5px;
      padding: 7px 14px;
      border-radius: 20px;
      border: 1.5px solid var(--border);
      background: var(--card);
      cursor: pointer;
      white-space: nowrap;
      font-size: 13px;
      font-weight: 500;
      color: var(--text-2);
      transition: all 0.18s ease;
      flex-shrink: 0;
    }

    .cat-chip.active {
      background: var(--yellow);
      border-color: var(--yellow);
      color: white;
      box-shadow: 0 3px 12px rgba(245,166,35,0.35);
    }

    .cat-chip span.icon { font-size: 14px; }

    /* ── Listings ────────────────────────────── */
    .listings {
      flex: 1;
      overflow-y: auto;
      padding: 4px 16px 100px;
      scrollbar-width: none;
    }

    .listings::-webkit-scrollbar { display: none; }

    .section-title {
      font-size: 12px;
      font-weight: 600;
      color: var(--text-3);
      letter-spacing: 1px;
      text-transform: uppercase;
      margin: 12px 0 10px;
    }

    .listing-card {
      background: var(--card);
      border-radius: var(--radius-lg);
      padding: 16px;
      margin-bottom: 10px;
      box-shadow: var(--shadow-sm);
      display: flex;
      gap: 14px;
      cursor: pointer;
      transition: transform 0.15s ease, box-shadow 0.15s ease;
      text-decoration: none;
      color: inherit;
    }

    .listing-card:active {
      transform: scale(0.985);
      box-shadow: 0 1px 6px rgba(0,0,0,0.04);
    }

    .listing-icon-wrap {
      width: 54px;
      height: 54px;
      border-radius: 14px;
      background: var(--yellow-light);
      display: flex;
      align-items: center;
      justify-content: center;
      flex-shrink: 0;
    }

    .listing-icon-wrap svg {
      width: 26px;
      height: 26px;
      stroke: var(--yellow);
    }

    .listing-body {
      flex: 1;
      min-width: 0;
    }

    .listing-top {
      display: flex;
      align-items: flex-start;
      justify-content: space-between;
      gap: 8px;
      margin-bottom: 3px;
    }

    .listing-name {
      font-size: 15px;
      font-weight: 600;
      color: var(--text-1);
      white-space: nowrap;
      overflow: auto;
      text-overflow: ellipsis;
    }

    .badge-geprueft {
      font-size: 10px;
      font-weight: 700;
      color: var(--green);
      background: var(--green-light);
      padding: 2px 7px;
      border-radius: 6px;
      flex-shrink: 0;
    }

    .listing-city {
      display: flex;
      align-items: center;
      gap: 3px;
      font-size: 12px;
      color: var(--text-3);
      margin-bottom: 5px;
    }

    .listing-city svg {
      width: 11px;
      height: 11px;
      stroke: var(--text-3);
    }

    .listing-desc {
      font-size: 13px;
      color: var(--text-2);
      line-height: 1.45;
      display: -webkit-box;
      -webkit-line-clamp: 2;
      -webkit-box-orient: vertical;
      overflow: auto;
    }

    .listing-phone {
      display: flex;
      align-items: center;
      gap: 4px;
      margin-top: 7px;
      font-size: 12px;
      font-weight: 500;
      color: var(--yellow-dark);
    }

    .listing-phone svg {
      width: 11px;
      height: 11px;
      stroke: var(--yellow-dark);
    }

    .listing-arrow {
      flex-shrink: 0;
      align-self: center;
    }

    .listing-arrow svg {
      width: 18px;
      height: 18px;
      stroke: var(--text-3);
    }

    /* ── Leer-Zustand ────────────────────────── */
    .empty-state {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      padding: 60px 20px;
      gap: 12px;
      text-align: center;
    }

    .empty-icon {
      width: 72px;
      height: 72px;
      border-radius: 50%;
      background: var(--yellow-light);
      display: flex;
      align-items: center;
      justify-content: center;
    }

    .empty-icon svg {
      width: 34px;
      height: 34px;
      stroke: var(--yellow);
    }

    .empty-title {
      font-size: 16px;
      font-weight: 600;
      color: var(--text-1);
    }

    .empty-sub {
      font-size: 13px;
      color: var(--text-2);
    }

    /* ── Ladeindikator ───────────────────────── */
    .loading {
      display: flex;
      justify-content: center;
      padding: 40px;
    }

    .spinner {
      width: 28px;
      height: 28px;
      border: 3px solid var(--yellow-light);
      border-top-color: var(--yellow);
      border-radius: 50%;
      animation: spin 0.8s linear infinite;
    }

    @keyframes spin { to { transform: rotate(360deg); } }

    /* ── Bottom Nav ──────────────────────────── */
    .bottom-nav {
      position: fixed;
      bottom: 0;
      left: 50%;
      transform: translateX(-50%);
      width: 100%;
      max-width: 430px;
      background: var(--card);
      border-top: 0.5px solid var(--border);
      display: flex;
      padding: 8px 0 24px;
      z-index: 100;
    }

    .nav-item {
      flex: 1;
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 4px;
      cursor: pointer;
      padding: 6px 0;
    }

    .nav-item svg {
      width: 22px;
      height: 22px;
      stroke: var(--text-3);
      transition: stroke 0.15s;
    }

    .nav-item span {
      font-size: 10px;
      font-weight: 500;
      color: var(--text-3);
      transition: color 0.15s;
    }

    .nav-item.active svg { stroke: var(--yellow); }
    .nav-item.active span { color: var(--yellow); }

    /* ── Skeleton Loading ────────────────────── */
    .skeleton {
      background: linear-gradient(90deg, #f0f0f0 25%, #e8e8e8 50%, #f0f0f0 75%);
      background-size: 200% 100%;
      animation: shimmer 1.4s infinite;
      border-radius: 8px;
    }

    @keyframes shimmer {
      0% { background-position: 200% 0; }
      100% { background-position: -200% 0; }
    }

    .skeleton-card {
      background: var(--card);
      border-radius: var(--radius-lg);
      padding: 16px;
      margin-bottom: 10px;
      display: flex;
      gap: 14px;
    }

    .skel-icon { width: 54px; height: 54px; border-radius: 14px; flex-shrink: 0; }
    .skel-body { flex: 1; display: flex; flex-direction: column; gap: 8px; padding-top: 4px; }
    .skel-line { height: 12px; }
    .skel-line.w-60 { width: 60%; }
    .skel-line.w-40 { width: 40%; }
    .skel-line.w-80 { width: 80%; }
  </style>
</head>
<body>

<div id="app">
  <div class="header">
    <div class="header-top">
      <div class="logo">
        <div class="logo-icon">
          <svg viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="2.5" stroke-linecap="round">
            <circle cx="10" cy="10" r="7"/>
            <line x1="15" y1="15" x2="21" y2="21"/>
          </svg>
        </div>
        <span class="logo-name">Buscar</span>
      </div>
      <div class="header-avatar">
        <svg viewBox="0 0 24 24" fill="none" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
          <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/>
          <circle cx="12" cy="7" r="4"/>
        </svg>
      </div>
    </div>
    <div class="header-sub">Dein Guide für Paraguay</div>
  </div>

  <div class="search-wrap">
    <div class="search-box">
      <svg viewBox="0 0 24 24" fill="none" stroke-width="2.5" stroke-linecap="round">
        <circle cx="11" cy="11" r="8"/>
        <line x1="21" y1="21" x2="16.65" y2="16.65"/>
      </svg>
      <input type="text" id="searchInput" placeholder="Arzt, Restaurant, Anwalt...">
      <button class="search-clear" id="searchClear">✕</button>
    </div>
  </div>

  <div class="cats-wrap">
    <div class="cats-scroll" id="catsScroll">
      <div class="cat-chip active" data-cat="Alle"><span class="icon">🗂</span> Alle</div>
      <div class="cat-chip" data-cat="kat-restaurants"><span class="icon">🍽</span> Restaurants</div>
      <div class="cat-chip" data-cat="kat-dienstleistung"><span class="icon">🔧</span> Dienstleistungen</div>
      <div class="cat-chip" data-cat="kat-orte"><span class="icon">📍</span> Orte</div>
      <div class="cat-chip" data-cat="kat-unterkunft"><span class="icon">🏨</span> Unterkünfte</div>
      <div class="cat-chip" data-cat="kat-geschaefte"><span class="icon">🛒</span> Geschäfte</div>
    </div>
  </div>

  <div class="listings" id="listingsContainer">
    <div class="section-title">Alle Einträge</div>
    <div id="listingsInner">
      <div class="skeleton-card">
        <div class="skeleton skel-icon"></div>
        <div class="skel-body">
          <div class="skeleton skel-line w-60"></div>
          <div class="skeleton skel-line w-40"></div>
          <div class="skeleton skel-line w-80"></div>
        </div>
      </div>
      <div class="skeleton-card">
        <div class="skeleton skel-icon"></div>
        <div class="skel-body">
          <div class="skeleton skel-line w-60"></div>
          <div class="skeleton skel-line w-40"></div>
          <div class="skeleton skel-line w-80"></div>
        </div>
      </div>
      <div class="skeleton-card">
        <div class="skeleton skel-icon"></div>
        <div class="skel-body">
          <div class="skeleton skel-line w-60"></div>
          <div class="skeleton skel-line w-40"></div>
          <div class="skeleton skel-line w-80"></div>
        </div>
      </div>
    </div>
  </div>

  <nav class="bottom-nav">
    <div class="nav-item active">
      <svg viewBox="0 0 24 24" fill="none" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
        <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/>
        <polyline points="9 22 9 12 15 12 15 22"/>
      </svg>
      <span>Home</span>
    </div>
    <div class="nav-item">
      <svg viewBox="0 0 24 24" fill="none" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
        <polygon points="3 11 22 2 13 21 11 13 3 11"/>
      </svg>
      <span>Karte</span>
    </div>
    <div class="nav-item">
      <svg viewBox="0 0 24 24" fill="none" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
        <circle cx="12" cy="12" r="10"/>
        <line x1="12" y1="8" x2="12" y2="16"/>
        <line x1="8" y1="12" x2="16" y2="12"/>
      </svg>
      <span>Eintrag</span>
    </div>
    <div class="nav-item">
      <svg viewBox="0 0 24 24" fill="none" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
        <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/>
        <circle cx="12" cy="7" r="4"/>
      </svg>
      <span>Profil</span>
    </div>
  </nav>
</div>

<script>
  // ── Firebase Konfiguration ──────────────────────────────
  // WICHTIG: Ersetze diese Werte mit deinen Firebase-Zugangsdaten
  const firebaseConfig = {
    apiKey:    "AIzaSyC_nxQL9Jo0EPUCtyI8QvnnRVKRBPbREKU",
    authDomain:"paraguay-app-8beb3.firebaseapp.com",
    projectId: "paraguay-app-8beb3"
  };

  firebase.initializeApp(firebaseConfig);
  const db = firebase.firestore();

  // ── State ───────────────────────────────────────────────
  let allListings = [];
  let activeCategory = 'Alle';
  let searchQuery = '';

  // ── Icons nach Kategorie ────────────────────────────────
  const catIcons = {
    'kat-restaurants':    `<svg viewBox="0 0 24 24" fill="none" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 8h1a4 4 0 0 1 0 8h-1"/><path d="M2 8h16v9a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4V8z"/><line x1="6" y1="1" x2="6" y2="4"/><line x1="10" y1="1" x2="10" y2="4"/><line x1="14" y1="1" x2="14" y2="4"/></svg>`,
    'kat-dienstleistung': `<svg viewBox="0 0 24 24" fill="none" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"/></svg>`,
    'kat-orte':           `<svg viewBox="0 0 24 24" fill="none" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>`,
    'kat-unterkunft':     `<svg viewBox="0 0 24 24" fill="none" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/></svg>`,
    'kat-geschaefte':     `<svg viewBox="0 0 24 24" fill="none" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"/><line x1="3" y1="6" x2="21" y2="6"/><path d="M16 10a4 4 0 0 1-8 0"/></svg>`,
    'default':            `<svg viewBox="0 0 24 24" fill="none" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>`
  };

  // ── Listings laden ──────────────────────────────────────
  async function loadListings() {
    try {
      const snapshot = await db.collection('listings').where('verified', '==', true).get();
      allListings = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
      renderListings();
    } catch (err) {
      console.error('Fehler:', err);
      document.getElementById('listingsInner').innerHTML = `
        <div class="empty-state">
          <div class="empty-icon">
            <svg viewBox="0 0 24 24" fill="none" stroke-width="2" stroke-linecap="round"><circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/></svg>
          </div>
          <div class="empty-title">Verbindungsfehler</div>
          <div class="empty-sub">Bitte Internetverbindung prüfen</div>
        </div>`;
    }
  }

  // ── Listings rendern ────────────────────────────────────
  function renderListings() {
    let filtered = allListings;

    if (activeCategory !== 'Alle') {
      filtered = filtered.filter(l => l.category_id === activeCategory);
    }

    if (searchQuery) {
      const q = searchQuery.toLowerCase();
      filtered = filtered.filter(l =>
        (l.name || '').toLowerCase().includes(q) ||
        (l.description || '').toLowerCase().includes(q) ||
        (l.city || '').toLowerCase().includes(q)
      );
    }

    const container = document.getElementById('listingsInner');

    if (filtered.length === 0) {
      container.innerHTML = `
        <div class="empty-state">
          <div class="empty-icon">
            <svg viewBox="0 0 24 24" fill="none" stroke-width="2" stroke-linecap="round"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/></svg>
          </div>
          <div class="empty-title">Nichts gefunden</div>
          <div class="empty-sub">Versuch einen anderen Suchbegriff</div>
        </div>`;
      return;
    }

    const sectionTitle = document.querySelector('.section-title');
    sectionTitle.textContent = activeCategory === 'Alle'
      ? `${filtered.length} Einträge`
      : `${filtered.length} Ergebnisse`;

    container.innerHTML = filtered.map(listing => {
      const icon = catIcons[listing.category_id] || catIcons['default'];
      return `
        <div class="listing-card">
          <div class="listing-icon-wrap">${icon}</div>
          <div class="listing-body">
            <div class="listing-top">
              <div class="listing-name">${listing.name || ''}</div>
              ${listing.verified ? '<span class="badge-geprueft">✓ Geprüft</span>' : ''}
            </div>
            ${listing.city ? `
              <div class="listing-city">
                <svg viewBox="0 0 24 24" fill="none" stroke-width="2.5" stroke-linecap="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>
                ${listing.city}
              </div>` : ''}
            <div class="listing-desc">${listing.description || ''}</div>
            ${listing.phone ? `
              <div class="listing-phone">
                <svg viewBox="0 0 24 24" fill="none" stroke-width="2.5" stroke-linecap="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.6 1.27h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 8.91a16 16 0 0 0 6 6l.9-.9a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 21.73 16.92z"/></svg>
                ${listing.phone}
              </div>` : ''}
          </div>
          <div class="listing-arrow">
            <svg viewBox="0 0 24 24" fill="none" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="9 18 15 12 9 6"/></svg>
          </div>
        </div>`;
    }).join('');
  }

  // ── Kategorie-Chips ─────────────────────────────────────
  document.getElementById('catsScroll').addEventListener('click', e => {
    const chip = e.target.closest('.cat-chip');
    if (!chip) return;
    document.querySelectorAll('.cat-chip').forEach(c => c.classList.remove('active'));
    chip.classList.add('active');
    activeCategory = chip.dataset.cat;
    renderListings();
  });

  // ── Suche ───────────────────────────────────────────────
  const searchInput = document.getElementById('searchInput');
  const searchClear = document.getElementById('searchClear');

  searchInput.addEventListener('input', e => {
    searchQuery = e.target.value;
    searchClear.classList.toggle('visible', searchQuery.length > 0);
    renderListings();
  });

  searchClear.addEventListener('click', () => {
    searchInput.value = '';
    searchQuery = '';
    searchClear.classList.remove('visible');
    renderListings();
  });

  // ── Nav ─────────────────────────────────────────────────
  document.querySelectorAll('.nav-item').forEach(item => {
    item.addEventListener('click', () => {
      document.querySelectorAll('.nav-item').forEach(i => i.classList.remove('active'));
      item.classList.add('active');
    });
  });

  // ── Start ───────────────────────────────────────────────
  loadListings();
</script>

</body>
</html>
