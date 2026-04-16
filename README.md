<!DOCTYPE html>
<html lang="de">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no">
  <meta name="theme-color" content="#F5A623">
  <meta name="apple-mobile-web-app-capable" content="yes">
  <meta name="apple-mobile-web-app-title" content="Buscar">
  <title>Buscar – Deutsche in Paraguay</title>
  <link href="https://fonts.googleapis.com/css2?family=Fraunces:wght@700;900&family=DM+Sans:wght@400;500;600&display=swap" rel="stylesheet">
  <script src="https://www.gstatic.com/firebasejs/10.7.1/firebase-app-compat.js"></script>
  <script src="https://www.gstatic.com/firebasejs/10.7.1/firebase-firestore-compat.js"></script>
  <script src="https://www.gstatic.com/firebasejs/10.7.1/firebase-auth-compat.js"></script>
  <style>
    *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
    :root {
      --yellow: #F5A623; --yellow-dark: #D4841A; --yellow-light: #FFF8EC;
      --bg: #F7F5F0; --card: #FFFFFF; --text-1: #1A1A1A; --text-2: #6B6B6B;
      --text-3: #AAAAAA; --green: #22C55E; --green-light: #DCFCE7;
      --red: #EF4444; --red-light: #FEE2E2; --border: #EFEFEF;
      --radius-md: 16px; --radius-lg: 22px;
      --shadow-sm: 0 2px 12px rgba(0,0,0,0.06); --shadow-md: 0 4px 20px rgba(0,0,0,0.08);
    }
    html, body { height: 100%; font-family: 'DM Sans', -apple-system, sans-serif; background: var(--bg); color: var(--text-1); -webkit-font-smoothing: antialiased; }
    #app { display: flex; flex-direction: column; height: 100vh; max-width: 430px; margin: 0 auto; background: var(--bg); }
    .screen { display: none; flex-direction: column; min-height: 100vh; }
    .screen.active { display: flex; }

    /* AUTH */
    .auth-header { background: linear-gradient(135deg, var(--yellow) 0%, var(--yellow-dark) 100%); padding: 70px 32px 40px; display: flex; flex-direction: column; align-items: center; gap: 12px; }
    .auth-logo-icon { width: 64px; height: 64px; background: rgba(255,255,255,0.22); border-radius: 18px; display: flex; align-items: center; justify-content: center; }
    .auth-logo-icon svg { width: 34px; height: 34px; }
    .auth-logo-name { font-family: 'Fraunces', Georgia, serif; font-size: 36px; font-weight: 900; color: white; letter-spacing: -1px; }
    .auth-tagline { font-size: 14px; color: rgba(255,255,255,0.8); }
    .auth-body { padding: 32px 24px; flex: 1; background: var(--card); }
    .auth-tabs { display: flex; background: var(--bg); border-radius: 12px; padding: 4px; margin-bottom: 28px; }
    .auth-tab { flex: 1; padding: 10px; text-align: center; border-radius: 9px; font-size: 14px; font-weight: 500; color: var(--text-2); cursor: pointer; transition: all 0.2s; }
    .auth-tab.active { background: var(--card); color: var(--text-1); box-shadow: var(--shadow-sm); }
    .auth-form { display: flex; flex-direction: column; gap: 14px; }
    .auth-form.hidden { display: none; }
    .field-label { font-size: 13px; font-weight: 500; color: var(--text-2); margin-bottom: 6px; display: block; }
    .field-input { width: 100%; padding: 14px 16px; border: 1.5px solid var(--border); border-radius: 12px; font-family: 'DM Sans', sans-serif; font-size: 14px; color: var(--text-1); background: var(--card); outline: none; transition: border-color 0.2s; -webkit-appearance: none; }
    .field-input:focus { border-color: var(--yellow); }
    .field-select { width: 100%; padding: 14px 16px; border: 1.5px solid var(--border); border-radius: 12px; font-family: 'DM Sans', sans-serif; font-size: 14px; color: var(--text-1); background: var(--card); outline: none; -webkit-appearance: none; appearance: none; cursor: pointer; }
    .field-select:focus { border-color: var(--yellow); }
    .field-textarea { width: 100%; padding: 14px 16px; border: 1.5px solid var(--border); border-radius: 12px; font-family: 'DM Sans', sans-serif; font-size: 14px; color: var(--text-1); background: var(--card); outline: none; resize: none; min-height: 100px; }
    .field-textarea:focus { border-color: var(--yellow); }
    .auth-btn { width: 100%; padding: 16px; background: var(--yellow); color: white; border: none; border-radius: 14px; font-family: 'DM Sans', sans-serif; font-size: 15px; font-weight: 600; cursor: pointer; margin-top: 6px; transition: background 0.2s; }
    .auth-btn:active { background: var(--yellow-dark); }
    .auth-btn:disabled { background: var(--text-3); cursor: not-allowed; }
    .auth-error { background: var(--red-light); color: var(--red); padding: 12px 16px; border-radius: 10px; font-size: 13px; display: none; }
    .auth-error.visible { display: block; }
    .auth-divider { text-align: center; font-size: 13px; color: var(--text-3); margin: 4px 0; }

    /* HEADER */
    .header { background: linear-gradient(135deg, var(--yellow) 0%, var(--yellow-dark) 100%); padding: 52px 20px 20px; flex-shrink: 0; }
    .header-top { display: flex; align-items: center; justify-content: space-between; margin-bottom: 4px; }
    .logo { display: flex; align-items: center; gap: 10px; }
    .logo-icon { width: 36px; height: 36px; background: rgba(255,255,255,0.2); border-radius: 10px; display: flex; align-items: center; justify-content: center; }
    .logo-icon svg { width: 20px; height: 20px; }
    .logo-name { font-family: 'Fraunces', Georgia, serif; font-size: 26px; font-weight: 900; color: white; letter-spacing: -0.5px; }
    .header-avatar { width: 38px; height: 38px; border-radius: 50%; background: rgba(255,255,255,0.25); border: 1.5px solid rgba(255,255,255,0.4); display: flex; align-items: center; justify-content: center; cursor: pointer; font-size: 14px; font-weight: 700; color: white; }
    .header-sub { font-size: 13px; color: rgba(255,255,255,0.8); }

    /* SEARCH */
    .search-wrap { padding: 16px 16px 8px; flex-shrink: 0; }
    .search-box { display: flex; align-items: center; background: var(--card); border-radius: var(--radius-md); box-shadow: var(--shadow-md); padding: 0 16px; gap: 10px; height: 50px; }
    .search-box svg { width: 18px; height: 18px; stroke: var(--yellow); flex-shrink: 0; }
    .search-box input { flex: 1; border: none; outline: none; font-family: 'DM Sans', sans-serif; font-size: 14px; color: var(--text-1); background: transparent; }
    .search-box input::placeholder { color: var(--text-3); }
    .search-clear { width: 20px; height: 20px; border-radius: 50%; background: var(--border); border: none; cursor: pointer; display: none; align-items: center; justify-content: center; font-size: 11px; color: var(--text-2); }
    .search-clear.visible { display: flex; }

    /* CATS */
    .cats-wrap { padding: 0 0 10px; flex-shrink: 0; }
    .cats-scroll { display: flex; gap: 8px; padding: 4px 16px; overflow-x: auto; scrollbar-width: none; }
    .cats-scroll::-webkit-scrollbar { display: none; }
    .cat-chip { display: flex; align-items: center; gap: 5px; padding: 7px 14px; border-radius: 20px; border: 1.5px solid var(--border); background: var(--card); cursor: pointer; white-space: nowrap; font-size: 13px; font-weight: 500; color: var(--text-2); transition: all 0.18s ease; flex-shrink: 0; }
    .cat-chip.active { background: var(--yellow); border-color: var(--yellow); color: white; box-shadow: 0 3px 12px rgba(245,166,35,0.35); }

    /* LISTINGS */
    .listings { flex: 1; overflow-y: auto; padding: 4px 16px 100px; scrollbar-width: none; }
    .listings::-webkit-scrollbar { display: none; }
    .section-title { font-size: 12px; font-weight: 600; color: var(--text-3); letter-spacing: 1px; text-transform: uppercase; margin: 12px 0 10px; }
    .listing-card { background: var(--card); border-radius: var(--radius-lg); padding: 16px; margin-bottom: 10px; box-shadow: var(--shadow-sm); display: flex; gap: 14px; cursor: pointer; transition: transform 0.15s ease; }
    .listing-card:active { transform: scale(0.985); }
    .listing-icon-wrap { width: 54px; height: 54px; border-radius: 14px; background: var(--yellow-light); display: flex; align-items: center; justify-content: center; flex-shrink: 0; }
    .listing-icon-wrap svg { width: 26px; height: 26px; stroke: var(--yellow); }
    .listing-body { flex: 1; min-width: 0; }
    .listing-top { display: flex; align-items: flex-start; justify-content: space-between; gap: 8px; margin-bottom: 3px; }
    .listing-name { font-size: 15px; font-weight: 600; color: var(--text-1); white-space: nowrap; overflow: hidden; text-overflow: ellipsis; }
    .badge-geprueft { font-size: 10px; font-weight: 700; color: var(--green); background: var(--green-light); padding: 2px 7px; border-radius: 6px; flex-shrink: 0; }
    .listing-city { display: flex; align-items: center; gap: 3px; font-size: 12px; color: var(--text-3); margin-bottom: 5px; }
    .listing-city svg { width: 11px; height: 11px; stroke: var(--text-3); }
    .listing-desc { font-size: 13px; color: var(--text-2); line-height: 1.45; display: -webkit-box; -webkit-line-clamp: 2; -webkit-box-orient: vertical; overflow: hidden; }
    .listing-phone { display: flex; align-items: center; gap: 4px; margin-top: 7px; font-size: 12px; font-weight: 500; color: var(--yellow-dark); }
    .listing-phone svg { width: 11px; height: 11px; stroke: var(--yellow-dark); }
    .listing-arrow { flex-shrink: 0; align-self: center; }
    .listing-arrow svg { width: 18px; height: 18px; stroke: var(--text-3); }

    /* DETAIL */
    .detail-screen { background: var(--bg); overflow-y: auto; }
    .detail-hero { background: linear-gradient(135deg, var(--yellow) 0%, var(--yellow-dark) 100%); padding: 52px 20px 28px; }
    .detail-back { width: 38px; height: 38px; border-radius: 50%; background: rgba(255,255,255,0.22); border: none; display: flex; align-items: center; justify-content: center; cursor: pointer; margin-bottom: 20px; }
    .detail-back svg { width: 20px; height: 20px; stroke: white; }
    .detail-hero-icon { width: 68px; height: 68px; border-radius: 20px; background: rgba(255,255,255,0.2); display: flex; align-items: center; justify-content: center; margin-bottom: 14px; }
    .detail-hero-icon svg { width: 34px; height: 34px; stroke: white; }
    .detail-title { font-size: 24px; font-weight: 700; color: white; margin-bottom: 6px; }
    .detail-city { display: flex; align-items: center; gap: 5px; font-size: 13px; color: rgba(255,255,255,0.8); }
    .detail-city svg { width: 13px; height: 13px; stroke: rgba(255,255,255,0.8); }
    .detail-body { padding: 20px 16px 120px; }
    .detail-card { background: var(--card); border-radius: var(--radius-lg); overflow: hidden; margin-bottom: 14px; }
    .detail-section-title { font-size: 11px; font-weight: 700; color: var(--text-3); letter-spacing: 1.5px; text-transform: uppercase; padding: 16px 16px 8px; }
    .detail-desc { font-size: 14px; color: var(--text-2); line-height: 1.65; padding: 0 16px 16px; }
    .detail-row { display: flex; align-items: center; justify-content: space-between; padding: 14px 16px; border-top: 0.5px solid var(--border); cursor: pointer; text-decoration: none; color: inherit; }
    .detail-row-left { display: flex; align-items: center; gap: 12px; }
    .detail-row-icon { width: 36px; height: 36px; border-radius: 10px; background: var(--yellow-light); display: flex; align-items: center; justify-content: center; flex-shrink: 0; }
    .detail-row-icon svg { width: 18px; height: 18px; stroke: var(--yellow); }
    .detail-row-label { font-size: 11px; color: var(--text-3); font-weight: 500; text-transform: uppercase; letter-spacing: 0.5px; }
    .detail-row-value { font-size: 14px; color: var(--text-1); font-weight: 500; margin-top: 1px; }
    .detail-badge-row { padding: 12px 16px; display: flex; gap: 8px; }
    .detail-badge { display: inline-flex; align-items: center; gap: 5px; padding: 5px 12px; border-radius: 20px; font-size: 12px; font-weight: 600; }
    .detail-badge.green { background: var(--green-light); color: var(--green); }
    .detail-cta { display: flex; gap: 10px; margin-top: 6px; }
    .detail-cta-btn { flex: 1; padding: 15px; border: none; border-radius: 14px; font-family: 'DM Sans', sans-serif; font-size: 14px; font-weight: 600; cursor: pointer; display: flex; align-items: center; justify-content: center; gap: 8px; text-decoration: none; }
    .detail-cta-btn.primary { background: var(--yellow); color: white; }
    .detail-cta-btn.secondary { background: var(--card); color: var(--text-1); border: 1.5px solid var(--border); }
    .detail-cta-btn.primary svg { stroke: white; width: 18px; height: 18px; fill: none; }
    .detail-cta-btn.secondary svg { stroke: var(--text-1); width: 18px; height: 18px; fill: none; }

    /* EINTRAG FORM */
    .form-screen { background: var(--bg); overflow-y: auto; }
    .form-header { background: linear-gradient(135deg, var(--yellow) 0%, var(--yellow-dark) 100%); padding: 52px 20px 24px; }
    .form-back { width: 38px; height: 38px; border-radius: 50%; background: rgba(255,255,255,0.22); border: none; display: flex; align-items: center; justify-content: center; cursor: pointer; margin-bottom: 16px; }
    .form-back svg { width: 20px; height: 20px; stroke: white; }
    .form-title { font-size: 22px; font-weight: 700; color: white; margin-bottom: 4px; }
    .form-sub { font-size: 13px; color: rgba(255,255,255,0.8); }
    .form-body { padding: 20px 16px 120px; }
    .form-card { background: var(--card); border-radius: var(--radius-lg); padding: 20px; margin-bottom: 14px; }
    .form-card-title { font-size: 11px; font-weight: 700; color: var(--text-3); letter-spacing: 1.5px; text-transform: uppercase; margin-bottom: 16px; }
    .form-field { margin-bottom: 14px; }
    .form-field:last-child { margin-bottom: 0; }
    .form-hint { font-size: 12px; color: var(--text-3); margin-top: 5px; }
    .form-submit { width: 100%; padding: 16px; background: var(--yellow); color: white; border: none; border-radius: 14px; font-family: 'DM Sans', sans-serif; font-size: 15px; font-weight: 600; cursor: pointer; }
    .form-submit:disabled { background: var(--text-3); cursor: not-allowed; }
    .form-success { background: var(--green-light); color: var(--green); padding: 16px; border-radius: 12px; font-size: 14px; font-weight: 500; text-align: center; display: none; margin-bottom: 14px; }
    .form-success.visible { display: block; }
    .form-error-msg { background: var(--red-light); color: var(--red); padding: 12px 16px; border-radius: 10px; font-size: 13px; display: none; margin-bottom: 14px; }
    .form-error-msg.visible { display: block; }

    /* ADMIN */
    .admin-screen { background: var(--bg); overflow-y: auto; }
    .admin-header { background: #1A1A1A; padding: 52px 20px 24px; }
    .admin-back { width: 38px; height: 38px; border-radius: 50%; background: rgba(255,255,255,0.1); border: none; display: flex; align-items: center; justify-content: center; cursor: pointer; margin-bottom: 16px; }
    .admin-back svg { width: 20px; height: 20px; stroke: white; }
    .admin-title { font-size: 22px; font-weight: 700; color: white; margin-bottom: 4px; }
    .admin-sub { font-size: 13px; color: rgba(255,255,255,0.6); }
    .admin-body { padding: 20px 16px 120px; }
    .admin-card { background: var(--card); border-radius: var(--radius-lg); padding: 16px; margin-bottom: 12px; box-shadow: var(--shadow-sm); }
    .admin-card-name { font-size: 16px; font-weight: 700; color: var(--text-1); margin-bottom: 4px; }
    .admin-card-meta { font-size: 12px; color: var(--text-3); margin-bottom: 8px; }
    .admin-card-desc { font-size: 13px; color: var(--text-2); line-height: 1.5; margin-bottom: 14px; display: -webkit-box; -webkit-line-clamp: 3; -webkit-box-orient: vertical; overflow: hidden; }
    .admin-card-info { display: flex; flex-wrap: wrap; gap: 8px; margin-bottom: 14px; }
    .admin-info-pill { display: flex; align-items: center; gap: 4px; background: var(--bg); padding: 5px 10px; border-radius: 20px; font-size: 12px; color: var(--text-2); }
    .admin-actions { display: flex; gap: 8px; }
    .admin-btn { flex: 1; padding: 12px; border: none; border-radius: 12px; font-family: 'DM Sans', sans-serif; font-size: 13px; font-weight: 600; cursor: pointer; }
    .admin-btn.approve { background: var(--green-light); color: var(--green); }
    .admin-btn.reject { background: var(--red-light); color: var(--red); }
    .admin-empty { text-align: center; padding: 60px 20px; }
    .admin-empty-icon { font-size: 40px; margin-bottom: 12px; }
    .admin-empty-text { font-size: 15px; font-weight: 600; color: var(--text-1); margin-bottom: 6px; }
    .admin-empty-sub { font-size: 13px; color: var(--text-2); }

    /* PROFIL */
    .profil-header { background: linear-gradient(135deg, var(--yellow) 0%, var(--yellow-dark) 100%); padding: 60px 24px 32px; display: flex; flex-direction: column; align-items: center; gap: 12px; }
    .profil-avatar { width: 80px; height: 80px; border-radius: 50%; background: rgba(255,255,255,0.25); display: flex; align-items: center; justify-content: center; font-family: 'Fraunces', serif; font-size: 32px; font-weight: 900; color: white; }
    .profil-name { font-size: 20px; font-weight: 700; color: white; }
    .profil-email { font-size: 13px; color: rgba(255,255,255,0.8); }
    .profil-body { padding: 24px; flex: 1; }
    .profil-section { background: var(--card); border-radius: var(--radius-lg); overflow: hidden; margin-bottom: 16px; }
    .profil-row { display: flex; align-items: center; justify-content: space-between; padding: 16px; border-bottom: 0.5px solid var(--border); cursor: pointer; }
    .profil-row:last-child { border-bottom: none; }
    .profil-row-left { display: flex; align-items: center; gap: 12px; }
    .profil-row-icon { width: 36px; height: 36px; border-radius: 10px; background: var(--yellow-light); display: flex; align-items: center; justify-content: center; }
    .profil-row-icon svg { width: 18px; height: 18px; stroke: var(--yellow); }
    .profil-row-icon.dark { background: #1A1A1A; }
    .profil-row-icon.dark svg { stroke: white; }
    .profil-row-label { font-size: 14px; font-weight: 500; }
    .logout-btn { width: 100%; padding: 16px; background: var(--red-light); color: var(--red); border: none; border-radius: 14px; font-family: 'DM Sans', sans-serif; font-size: 15px; font-weight: 600; cursor: pointer; margin-top: 8px; }

    /* EMPTY & SKELETON */
    .empty-state { display: flex; flex-direction: column; align-items: center; justify-content: center; padding: 60px 20px; gap: 12px; text-align: center; }
    .empty-icon { width: 72px; height: 72px; border-radius: 50%; background: var(--yellow-light); display: flex; align-items: center; justify-content: center; }
    .empty-icon svg { width: 34px; height: 34px; stroke: var(--yellow); }
    .empty-title { font-size: 16px; font-weight: 600; }
    .empty-sub { font-size: 13px; color: var(--text-2); }
    .skeleton { background: linear-gradient(90deg, #f0f0f0 25%, #e8e8e8 50%, #f0f0f0 75%); background-size: 200% 100%; animation: shimmer 1.4s infinite; border-radius: 8px; }
    @keyframes shimmer { 0% { background-position: 200% 0; } 100% { background-position: -200% 0; } }
    .skeleton-card { background: var(--card); border-radius: var(--radius-lg); padding: 16px; margin-bottom: 10px; display: flex; gap: 14px; }
    .skel-icon { width: 54px; height: 54px; border-radius: 14px; flex-shrink: 0; }
    .skel-body { flex: 1; display: flex; flex-direction: column; gap: 8px; padding-top: 4px; }
    .skel-line { height: 12px; }
    .skel-line.w-60 { width: 60%; } .skel-line.w-40 { width: 40%; } .skel-line.w-80 { width: 80%; }

    /* BOTTOM NAV */
    .bottom-nav { position: fixed; bottom: 0; left: 50%; transform: translateX(-50%); width: 100%; max-width: 430px; background: var(--card); border-top: 0.5px solid var(--border); display: flex; padding: 8px 0 24px; z-index: 100; }
    .nav-item { flex: 1; display: flex; flex-direction: column; align-items: center; gap: 4px; cursor: pointer; padding: 6px 0; }
    .nav-item svg { width: 22px; height: 22px; stroke: var(--text-3); transition: stroke 0.15s; fill: none; }
    .nav-item span { font-size: 10px; font-weight: 500; color: var(--text-3); transition: color 0.15s; }
    .nav-item.active svg { stroke: var(--yellow); }
    .nav-item.active span { color: var(--yellow); }
  </style>
</head>
<body>
<div id="app">

  <!-- AUTH -->
  <div class="screen active" id="screenAuth">
    <div class="auth-header">
      <div class="auth-logo-icon"><svg viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="2.5" stroke-linecap="round"><circle cx="10" cy="10" r="7"/><line x1="15" y1="15" x2="21" y2="21"/></svg></div>
      <div class="auth-logo-name">Buscar</div>
      <div class="auth-tagline">Deutsche in Paraguay</div>
    </div>
    <div class="auth-body">
      <div class="auth-tabs">
        <div class="auth-tab active" id="tabLogin" onclick="switchTab('login')">Einloggen</div>
        <div class="auth-tab" id="tabRegister" onclick="switchTab('register')">Registrieren</div>
      </div>
      <div id="authError" class="auth-error"></div>
      <form class="auth-form" id="formLogin" onsubmit="handleLogin(event)">
        <div><label class="field-label">E-Mail</label><input class="field-input" type="email" id="loginEmail" placeholder="deine@email.de" required></div>
        <div><label class="field-label">Passwort</label><input class="field-input" type="password" id="loginPassword" placeholder="min. 6 Zeichen" required></div>
        <button class="auth-btn" type="submit" id="loginBtn">Einloggen</button>
        <div class="auth-divider">Noch kein Konto? <span style="color:var(--yellow);cursor:pointer;font-weight:600" onclick="switchTab('register')">Registrieren</span></div>
      </form>
      <form class="auth-form hidden" id="formRegister" onsubmit="handleRegister(event)">
        <div><label class="field-label">Name</label><input class="field-input" type="text" id="regName" placeholder="Dein Name" required></div>
        <div><label class="field-label">E-Mail</label><input class="field-input" type="email" id="regEmail" placeholder="deine@email.de" required></div>
        <div><label class="field-label">Passwort</label><input class="field-input" type="password" id="regPassword" placeholder="min. 6 Zeichen" required minlength="6"></div>
        <button class="auth-btn" type="submit" id="registerBtn">Konto erstellen</button>
        <div class="auth-divider">Schon ein Konto? <span style="color:var(--yellow);cursor:pointer;font-weight:600" onclick="switchTab('login')">Einloggen</span></div>
      </form>
    </div>
  </div>

  <!-- HOME -->
  <div class="screen" id="screenHome">
    <div class="header">
      <div class="header-top">
        <div class="logo"><div class="logo-icon"><svg viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="2.5" stroke-linecap="round"><circle cx="10" cy="10" r="7"/><line x1="15" y1="15" x2="21" y2="21"/></svg></div><span class="logo-name">Buscar</span></div>
        <div class="header-avatar" id="headerAvatar" onclick="showScreen('screenProfil')">?</div>
      </div>
      <div class="header-sub">Dein Guide fuer Paraguay</div>
    </div>
    <div class="search-wrap">
      <div class="search-box">
        <svg viewBox="0 0 24 24" fill="none" stroke-width="2.5" stroke-linecap="round"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/></svg>
        <input type="text" id="searchInput" placeholder="Arzt, Restaurant, Anwalt...">
        <button class="search-clear" id="searchClear">x</button>
      </div>
    </div>
    <div class="cats-wrap">
      <div class="cats-scroll" id="catsScroll">
        <div class="cat-chip active" data-cat="Alle">Alle</div>
        <div class="cat-chip" data-cat="kat-restaurants">Restaurants</div>
        <div class="cat-chip" data-cat="kat-dienstleistung">Dienstleistungen</div>
        <div class="cat-chip" data-cat="kat-orte">Orte</div>
        <div class="cat-chip" data-cat="kat-unterkunft">Unterkunfte</div>
        <div class="cat-chip" data-cat="kat-geschaefte">Geschaefte</div>
      </div>
    </div>
    <div class="listings">
      <div class="section-title" id="sectionTitle">Alle Eintraege</div>
      <div id="listingsInner">
        <div class="skeleton-card"><div class="skeleton skel-icon"></div><div class="skel-body"><div class="skeleton skel-line w-60"></div><div class="skeleton skel-line w-40"></div><div class="skeleton skel-line w-80"></div></div></div>
        <div class="skeleton-card"><div class="skeleton skel-icon"></div><div class="skel-body"><div class="skeleton skel-line w-60"></div><div class="skeleton skel-line w-40"></div><div class="skeleton skel-line w-80"></div></div></div>
        <div class="skeleton-card"><div class="skeleton skel-icon"></div><div class="skel-body"><div class="skeleton skel-line w-60"></div><div class="skeleton skel-line w-40"></div><div class="skeleton skel-line w-80"></div></div></div>
      </div>
    </div>
    <nav class="bottom-nav">
      <div class="nav-item active" onclick="showScreen('screenHome')"><svg viewBox="0 0 24 24" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/></svg><span>Home</span></div>
      <div class="nav-item" onclick="showScreen('screenForm')"><svg viewBox="0 0 24 24" stroke-width="2" stroke-linecap="round"><circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="16"/><line x1="8" y1="12" x2="16" y2="12"/></svg><span>Eintrag</span></div>
      <div class="nav-item" onclick="showScreen('screenProfil')"><svg viewBox="0 0 24 24" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg><span>Profil</span></div>
    </nav>
  </div>

  <!-- DETAIL -->
  <div class="screen detail-screen" id="screenDetail">
    <div class="detail-hero">
      <button class="detail-back" onclick="showScreen('screenHome')"><svg viewBox="0 0 24 24" fill="none" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="15 18 9 12 15 6"/></svg></button>
      <div class="detail-hero-icon" id="detailIcon"></div>
      <div class="detail-title" id="detailTitle">-</div>
      <div class="detail-city" id="detailCity"></div>
    </div>
    <div class="detail-body">
      <div id="detailBadges" class="detail-card" style="display:none"><div class="detail-badge-row" id="detailBadgeRow"></div></div>
      <div class="detail-card"><div class="detail-section-title">Beschreibung</div><div class="detail-desc" id="detailDesc">-</div></div>
      <div class="detail-card" id="detailInfoCard" style="display:none"></div>
      <div class="detail-cta" id="detailCta"></div>
    </div>
  </div>

  <!-- EINTRAG HINZUFUEGEN -->
  <div class="screen form-screen" id="screenForm">
    <div class="form-header">
      <button class="form-back" onclick="showScreen('screenHome')"><svg viewBox="0 0 24 24" fill="none" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="15 18 9 12 15 6"/></svg></button>
      <div class="form-title">Eintrag vorschlagen</div>
      <div class="form-sub">Wird nach Pruefung veroeffentlicht</div>
    </div>
    <div class="form-body">
      <div id="formSuccess" class="form-success">Danke! Dein Eintrag wurde eingereicht und wird geprueft.</div>
      <div id="formError" class="form-error-msg"></div>
      <div class="form-card">
        <div class="form-card-title">Grundinfos</div>
        <div class="form-field">
          <label class="field-label">Name des Ortes *</label>
          <input class="field-input" type="text" id="newName" placeholder="z.B. Dr. Mueller, Cafe Central">
        </div>
        <div class="form-field">
          <label class="field-label">Kategorie *</label>
          <select class="field-select" id="newCategory">
            <option value="">Bitte waehlen...</option>
            <option value="kat-restaurants">Restaurants und Cafes</option>
            <option value="kat-dienstleistung">Dienstleistungen</option>
            <option value="kat-orte">Orte und Sehenswuerdigkeiten</option>
            <option value="kat-unterkunft">Unterkunfte</option>
            <option value="kat-geschaefte">Geschaefte und Maerkte</option>
          </select>
        </div>
        <div class="form-field">
          <label class="field-label">Stadt *</label>
          <input class="field-input" type="text" id="newCity" placeholder="z.B. Asuncion, Encarnacion">
        </div>
      </div>
      <div class="form-card">
        <div class="form-card-title">Beschreibung</div>
        <div class="form-field">
          <label class="field-label">Deine Erfahrung *</label>
          <textarea class="field-textarea" id="newDesc" placeholder="Beschreibe den Ort fuer andere Deutsche. Was macht ihn besonders? Worauf sollte man achten?"></textarea>
          <div class="form-hint">Tipp: Je detaillierter, desto hilfreicher fuer andere.</div>
        </div>
      </div>
      <div class="form-card">
        <div class="form-card-title">Kontakt (optional)</div>
        <div class="form-field">
          <label class="field-label">Telefon</label>
          <input class="field-input" type="tel" id="newPhone" placeholder="+595 21 ...">
        </div>
        <div class="form-field">
          <label class="field-label">Website</label>
          <input class="field-input" type="text" id="newWebsite" placeholder="www.beispiel.com">
        </div>
        <div class="form-field">
          <label class="field-label">Adresse</label>
          <input class="field-input" type="text" id="newAddress" placeholder="Strasse, Stadtviertel">
        </div>
        <div class="form-field">
          <label class="field-label">Oeffnungszeiten</label>
          <input class="field-input" type="text" id="newHours" placeholder="z.B. Mo-Fr 08:00-18:00">
        </div>
      </div>
      <button class="form-submit" id="formSubmitBtn" onclick="submitListing()">Eintrag einreichen</button>
    </div>
  </div>

  <!-- ADMIN -->
  <div class="screen admin-screen" id="screenAdmin">
    <div class="admin-header">
      <button class="admin-back" onclick="showScreen('screenProfil')"><svg viewBox="0 0 24 24" fill="none" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="15 18 9 12 15 6"/></svg></button>
      <div class="admin-title">Admin Panel</div>
      <div class="admin-sub" id="adminSub">Eintraege pruefen</div>
    </div>
    <div class="admin-body" id="adminBody">
      <div class="admin-empty"><div class="admin-empty-icon">✓</div><div class="admin-empty-text">Alles geprueft!</div><div class="admin-empty-sub">Keine offenen Eintraege.</div></div>
    </div>
  </div>

  <!-- PROFIL -->
  <div class="screen" id="screenProfil">
    <div class="profil-header">
      <div class="profil-avatar" id="profilAvatar">?</div>
      <div class="profil-name" id="profilName">-</div>
      <div class="profil-email" id="profilEmail">-</div>
    </div>
    <div class="profil-body">
      <div class="profil-section">
        <div class="profil-row" onclick="showScreen('screenHome')">
          <div class="profil-row-left"><div class="profil-row-icon"><svg viewBox="0 0 24 24" fill="none" stroke-width="2" stroke-linecap="round"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/></svg></div><span class="profil-row-label">Zur Startseite</span></div>
          <svg viewBox="0 0 24 24" fill="none" stroke-width="2" stroke-linecap="round" width="16" height="16"><polyline points="9 18 15 12 9 6"/></svg>
        </div>
        <div class="profil-row" onclick="showScreen('screenForm')">
          <div class="profil-row-left"><div class="profil-row-icon"><svg viewBox="0 0 24 24" fill="none" stroke-width="2" stroke-linecap="round"><circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="16"/><line x1="8" y1="12" x2="16" y2="12"/></svg></div><span class="profil-row-label">Eintrag vorschlagen</span></div>
          <svg viewBox="0 0 24 24" fill="none" stroke-width="2" stroke-linecap="round" width="16" height="16"><polyline points="9 18 15 12 9 6"/></svg>
        </div>
        <div class="profil-row" id="adminRow" style="display:none" onclick="loadAdmin()">
          <div class="profil-row-left"><div class="profil-row-icon dark"><svg viewBox="0 0 24 24" fill="none" stroke-width="2" stroke-linecap="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg></div><span class="profil-row-label">Admin Panel</span></div>
          <svg viewBox="0 0 24 24" fill="none" stroke-width="2" stroke-linecap="round" width="16" height="16"><polyline points="9 18 15 12 9 6"/></svg>
        </div>
      </div>
      <button class="logout-btn" onclick="handleLogout()">Ausloggen</button>
    </div>
    <nav class="bottom-nav">
      <div class="nav-item" onclick="showScreen('screenHome')"><svg viewBox="0 0 24 24" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/></svg><span>Home</span></div>
      <div class="nav-item" onclick="showScreen('screenForm')"><svg viewBox="0 0 24 24" stroke-width="2" stroke-linecap="round"><circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="16"/><line x1="8" y1="12" x2="16" y2="12"/></svg><span>Eintrag</span></div>
      <div class="nav-item active"><svg viewBox="0 0 24 24" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg><span>Profil</span></div>
    </nav>
  </div>

</div>
<script>
  const ADMIN_EMAIL = 'maximechristalle@gmail.com';

  const firebaseConfig = { apiKey: "AIzaSyC_nxQL9Jo0EPUCtyI8QvnnRVKRBPbREKU", authDomain: "paraguay-app-8beb3.firebaseapp.com", projectId: "paraguay-app-8beb3" };
  firebase.initializeApp(firebaseConfig);
  const db = firebase.firestore();
  const auth = firebase.auth();

  let allListings = [], activeCategory = 'Alle', searchQuery = '', currentUser = null;

  const catIcons = {
    'kat-restaurants': '<svg viewBox="0 0 24 24" fill="none" stroke-width="2" stroke-linecap="round"><path d="M18 8h1a4 4 0 0 1 0 8h-1"/><path d="M2 8h16v9a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4V8z"/><line x1="6" y1="1" x2="6" y2="4"/><line x1="10" y1="1" x2="10" y2="4"/><line x1="14" y1="1" x2="14" y2="4"/></svg>',
    'kat-dienstleistung': '<svg viewBox="0 0 24 24" fill="none" stroke-width="2" stroke-linecap="round"><path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"/></svg>',
    'kat-orte': '<svg viewBox="0 0 24 24" fill="none" stroke-width="2" stroke-linecap="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>',
    'kat-unterkunft': '<svg viewBox="0 0 24 24" fill="none" stroke-width="2" stroke-linecap="round"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/></svg>',
    'kat-geschaefte': '<svg viewBox="0 0 24 24" fill="none" stroke-width="2" stroke-linecap="round"><path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"/><line x1="3" y1="6" x2="21" y2="6"/><path d="M16 10a4 4 0 0 1-8 0"/></svg>',
    'default': '<svg viewBox="0 0 24 24" fill="none" stroke-width="2" stroke-linecap="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>'
  };

  const catNames = { 'kat-restaurants': 'Restaurants', 'kat-dienstleistung': 'Dienstleistungen', 'kat-orte': 'Orte', 'kat-unterkunft': 'Unterkunfte', 'kat-geschaefte': 'Geschaefte' };

  function showScreen(id) {
    document.querySelectorAll('.screen').forEach(s => s.classList.remove('active'));
    document.getElementById(id).classList.add('active');
    window.scrollTo(0, 0);
  }

  function switchTab(tab) {
    document.getElementById('authError').classList.remove('visible');
    if (tab === 'login') {
      document.getElementById('tabLogin').classList.add('active'); document.getElementById('tabRegister').classList.remove('active');
      document.getElementById('formLogin').classList.remove('hidden'); document.getElementById('formRegister').classList.add('hidden');
    } else {
      document.getElementById('tabRegister').classList.add('active'); document.getElementById('tabLogin').classList.remove('active');
      document.getElementById('formRegister').classList.remove('hidden'); document.getElementById('formLogin').classList.add('hidden');
    }
  }

  function showError(msg) { const el = document.getElementById('authError'); el.textContent = msg; el.classList.add('visible'); }

  async function handleLogin(e) {
    e.preventDefault();
    const btn = document.getElementById('loginBtn');
    btn.disabled = true; btn.textContent = 'Einloggen...';
    document.getElementById('authError').classList.remove('visible');
    try {
      await auth.signInWithEmailAndPassword(document.getElementById('loginEmail').value, document.getElementById('loginPassword').value);
    } catch (err) {
      const msgs = { 'auth/user-not-found': 'Kein Konto mit dieser E-Mail.', 'auth/wrong-password': 'Falsches Passwort.', 'auth/invalid-email': 'Ungueltige E-Mail.', 'auth/too-many-requests': 'Zu viele Versuche. Bitte warte.' };
      showError(msgs[err.code] || 'Fehler beim Einloggen.');
      btn.disabled = false; btn.textContent = 'Einloggen';
    }
  }

  async function handleRegister(e) {
    e.preventDefault();
    const btn = document.getElementById('registerBtn');
    btn.disabled = true; btn.textContent = 'Wird erstellt...';
    document.getElementById('authError').classList.remove('visible');
    try {
      const cred = await auth.createUserWithEmailAndPassword(document.getElementById('regEmail').value, document.getElementById('regPassword').value);
      await db.collection('users').doc(cred.user.uid).set({ name: document.getElementById('regName').value, email: document.getElementById('regEmail').value, created_at: new Date(), verified: false });
    } catch (err) {
      const msgs = { 'auth/email-already-in-use': 'E-Mail bereits registriert.', 'auth/weak-password': 'Passwort zu schwach.' };
      showError(msgs[err.code] || 'Fehler bei der Registrierung.');
      btn.disabled = false; btn.textContent = 'Konto erstellen';
    }
  }

  async function handleLogout() { await auth.signOut(); }

  auth.onAuthStateChanged(user => {
    currentUser = user;
    if (user) {
      const name = user.displayName || user.email.split('@')[0];
      const initial = name.charAt(0).toUpperCase();
      document.getElementById('headerAvatar').textContent = initial;
      document.getElementById('profilAvatar').textContent = initial;
      document.getElementById('profilName').textContent = name;
      document.getElementById('profilEmail').textContent = user.email;
      if (user.email === ADMIN_EMAIL) document.getElementById('adminRow').style.display = 'flex';
      showScreen('screenHome');
      loadListings();
    } else {
      showScreen('screenAuth');
    }
  });

  async function loadListings() {
    try {
      const snap = await db.collection('listings').where('verified', '==', true).get();
      allListings = snap.docs.map(d => ({ id: d.id, ...d.data() }));
      renderListings();
    } catch (err) {
      document.getElementById('listingsInner').innerHTML = '<div class="empty-state"><div class="empty-icon"><svg viewBox="0 0 24 24" fill="none" stroke-width="2" stroke-linecap="round"><circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/></svg></div><div class="empty-title">Verbindungsfehler</div><div class="empty-sub">Bitte Internetverbindung pruefen</div></div>';
    }
  }

  function renderListings() {
    let filtered = allListings;
    if (activeCategory !== 'Alle') filtered = filtered.filter(l => l.category_id === activeCategory);
    if (searchQuery) { const q = searchQuery.toLowerCase(); filtered = filtered.filter(l => (l.name||'').toLowerCase().includes(q) || (l.description||'').toLowerCase().includes(q) || (l.city||'').toLowerCase().includes(q)); }
    const container = document.getElementById('listingsInner');
    document.getElementById('sectionTitle').textContent = activeCategory === 'Alle' ? filtered.length + ' Eintraege' : filtered.length + ' Ergebnisse';
    if (!filtered.length) { container.innerHTML = '<div class="empty-state"><div class="empty-icon"><svg viewBox="0 0 24 24" fill="none" stroke-width="2" stroke-linecap="round"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/></svg></div><div class="empty-title">Nichts gefunden</div><div class="empty-sub">Versuch einen anderen Suchbegriff</div></div>'; return; }
    container.innerHTML = filtered.map(l => `<div class="listing-card" onclick="showDetail('${l.id}')"><div class="listing-icon-wrap">${catIcons[l.category_id]||catIcons['default']}</div><div class="listing-body"><div class="listing-top"><div class="listing-name">${l.name||''}</div>${l.verified?'<span class="badge-geprueft">Geprueft</span>':''}</div>${l.city?`<div class="listing-city"><svg viewBox="0 0 24 24" fill="none" stroke-width="2.5" stroke-linecap="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>${l.city}</div>`:''}<div class="listing-desc">${l.description||''}</div>${l.phone?`<div class="listing-phone"><svg viewBox="0 0 24 24" fill="none" stroke-width="2.5" stroke-linecap="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.6 1.27h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 8.91a16 16 0 0 0 6 6l.9-.9a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 21.73 16.92z"/></svg>${l.phone}</div>`:''}</div><div class="listing-arrow"><svg viewBox="0 0 24 24" fill="none" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="9 18 15 12 9 6"/></svg></div></div>`).join('');
  }

  function showDetail(id) {
    const l = allListings.find(x => x.id === id);
    if (!l) return;
    document.getElementById('detailIcon').innerHTML = catIcons[l.category_id] || catIcons['default'];
    const svg = document.getElementById('detailIcon').querySelector('svg');
    if (svg) { svg.style.width = '34px'; svg.style.height = '34px'; svg.style.stroke = 'white'; }
    document.getElementById('detailTitle').textContent = l.name || '';
    document.getElementById('detailCity').innerHTML = l.city ? `<svg viewBox="0 0 24 24" fill="none" stroke-width="2" stroke-linecap="round" width="13" height="13"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>${l.city}` : '';
    document.getElementById('detailDesc').textContent = l.description || 'Keine Beschreibung vorhanden.';
    const badges = document.getElementById('detailBadges');
    document.getElementById('detailBadgeRow').innerHTML = l.verified ? '<span class="detail-badge green">Geprueft</span>' : '';
    badges.style.display = l.verified ? 'block' : 'none';
    let infoHTML = '';
    if (l.phone) infoHTML += `<a class="detail-row" href="tel:${l.phone}"><div class="detail-row-left"><div class="detail-row-icon"><svg viewBox="0 0 24 24" fill="none" stroke-width="2" stroke-linecap="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.6 1.27h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 8.91a16 16 0 0 0 6 6l.9-.9a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 21.73 16.92z"/></svg></div><div class="detail-row-info"><div class="detail-row-label">Telefon</div><div class="detail-row-value">${l.phone}</div></div></div><svg viewBox="0 0 24 24" fill="none" stroke-width="2" stroke-linecap="round" width="16" height="16"><polyline points="9 18 15 12 9 6"/></svg></a>`;
    if (l.website) infoHTML += `<a class="detail-row" href="https://${l.website}" target="_blank"><div class="detail-row-left"><div class="detail-row-icon"><svg viewBox="0 0 24 24" fill="none" stroke-width="2" stroke-linecap="round"><circle cx="12" cy="12" r="10"/><line x1="2" y1="12" x2="22" y2="12"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/></svg></div><div class="detail-row-info"><div class="detail-row-label">Website</div><div class="detail-row-value">${l.website}</div></div></div><svg viewBox="0 0 24 24" fill="none" stroke-width="2" stroke-linecap="round" width="16" height="16"><polyline points="9 18 15 12 9 6"/></svg></a>`;
    if (l.opening_hours) infoHTML += `<div class="detail-row"><div class="detail-row-left"><div class="detail-row-icon"><svg viewBox="0 0 24 24" fill="none" stroke-width="2" stroke-linecap="round"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg></div><div class="detail-row-info"><div class="detail-row-label">Oeffnungszeiten</div><div class="detail-row-value">${l.opening_hours}</div></div></div></div>`;
    if (l.address) infoHTML += `<div class="detail-row"><div class="detail-row-left"><div class="detail-row-icon"><svg viewBox="0 0 24 24" fill="none" stroke-width="2" stroke-linecap="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg></div><div class="detail-row-info"><div class="detail-row-label">Adresse</div><div class="detail-row-value">${l.address}</div></div></div></div>`;
    const infoCard = document.getElementById('detailInfoCard');
    infoCard.innerHTML = infoHTML; infoCard.style.display = infoHTML ? 'block' : 'none';
    let ctaHTML = '';
    if (l.phone) ctaHTML += `<a class="detail-cta-btn primary" href="tel:${l.phone}"><svg viewBox="0 0 24 24" stroke-width="2" stroke-linecap="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.6 1.27h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 8.91a16 16 0 0 0 6 6l.9-.9a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 21.73 16.92z"/></svg>Anrufen</a>`;
    if (l.lat && l.lng) ctaHTML += `<a class="detail-cta-btn secondary" href="https://maps.google.com/?q=${l.lat},${l.lng}" target="_blank"><svg viewBox="0 0 24 24" stroke-width="2" stroke-linecap="round"><polygon points="3 11 22 2 13 21 11 13 3 11"/></svg>Karte</a>`;
    document.getElementById('detailCta').innerHTML = ctaHTML;
    showScreen('screenDetail');
  }

  async function submitListing() {
    const name = document.getElementById('newName').value.trim();
    const cat = document.getElementById('newCategory').value;
    const city = document.getElementById('newCity').value.trim();
    const desc = document.getElementById('newDesc').value.trim();
    const errEl = document.getElementById('formError');
    errEl.classList.remove('visible');
    if (!name || !cat || !city || !desc) { errEl.textContent = 'Bitte alle Pflichtfelder ausfullen.'; errEl.classList.add('visible'); return; }
    const btn = document.getElementById('formSubmitBtn');
    btn.disabled = true; btn.textContent = 'Wird eingereicht...';
    try {
      await db.collection('listings').add({
        name, category_id: cat, city, description: desc,
        phone: document.getElementById('newPhone').value.trim() || null,
        website: document.getElementById('newWebsite').value.trim() || null,
        address: document.getElementById('newAddress').value.trim() || null,
        opening_hours: document.getElementById('newHours').value.trim() || null,
        verified: false,
        created_by: currentUser ? currentUser.uid : null,
        created_at: new Date()
      });
      document.getElementById('formSuccess').classList.add('visible');
      document.getElementById('newName').value = ''; document.getElementById('newCategory').value = '';
      document.getElementById('newCity').value = ''; document.getElementById('newDesc').value = '';
      document.getElementById('newPhone').value = ''; document.getElementById('newWebsite').value = '';
      document.getElementById('newAddress').value = ''; document.getElementById('newHours').value = '';
    } catch (err) {
      errEl.textContent = 'Fehler beim Einreichen. Bitte versuche es erneut.'; errEl.classList.add('visible');
    }
    btn.disabled = false; btn.textContent = 'Eintrag einreichen';
  }

  async function loadAdmin() {
    showScreen('screenAdmin');
    const body = document.getElementById('adminBody');
    body.innerHTML = '<div style="text-align:center;padding:40px"><div style="width:28px;height:28px;border:3px solid #FFF8EC;border-top-color:#F5A623;border-radius:50%;animation:spin 0.8s linear infinite;margin:0 auto"></div></div>';
    try {
      const snap = await db.collection('listings').where('verified', '==', false).orderBy('created_at', 'desc').get();
      const pending = snap.docs.map(d => ({ id: d.id, ...d.data() }));
      document.getElementById('adminSub').textContent = pending.length + ' offen';
      if (!pending.length) { body.innerHTML = '<div class="admin-empty"><div class="admin-empty-icon">✓</div><div class="admin-empty-text">Alles geprueft!</div><div class="admin-empty-sub">Keine offenen Eintraege.</div></div>'; return; }
      body.innerHTML = pending.map(l => `
        <div class="admin-card" id="adminCard_${l.id}">
          <div class="admin-card-name">${l.name||'Ohne Name'}</div>
          <div class="admin-card-meta">${catNames[l.category_id]||l.category_id} · ${l.city||'Unbekannt'}</div>
          <div class="admin-card-desc">${l.description||'Keine Beschreibung'}</div>
          <div class="admin-card-info">
            ${l.phone?`<div class="admin-info-pill">Tel: ${l.phone}</div>`:''}
            ${l.website?`<div class="admin-info-pill">${l.website}</div>`:''}
            ${l.opening_hours?`<div class="admin-info-pill">${l.opening_hours}</div>`:''}
          </div>
          <div class="admin-actions">
            <button class="admin-btn approve" onclick="approveEntry('${l.id}')">Genehmigen</button>
            <button class="admin-btn reject" onclick="rejectEntry('${l.id}')">Ablehnen</button>
          </div>
        </div>`).join('');
    } catch (err) {
      body.innerHTML = '<div class="admin-empty"><div class="admin-empty-text">Fehler beim Laden</div></div>';
    }
  }

  async function approveEntry(id) {
    try {
      await db.collection('listings').doc(id).update({ verified: true });
      document.getElementById('adminCard_' + id).remove();
      await loadListings();
    } catch (err) { alert('Fehler beim Genehmigen.'); }
  }

  async function rejectEntry(id) {
    if (!confirm('Eintrag wirklich loeschen?')) return;
    try {
      await db.collection('listings').doc(id).delete();
      document.getElementById('adminCard_' + id).remove();
    } catch (err) { alert('Fehler beim Loeschen.'); }
  }

  document.getElementById('catsScroll').addEventListener('click', e => {
    const chip = e.target.closest('.cat-chip');
    if (!chip) return;
    document.querySelectorAll('.cat-chip').forEach(c => c.classList.remove('active'));
    chip.classList.add('active'); activeCategory = chip.dataset.cat; renderListings();
  });

  const searchInput = document.getElementById('searchInput');
  const searchClear = document.getElementById('searchClear');
  searchInput.addEventListener('input', e => { searchQuery = e.target.value; searchClear.classList.toggle('visible', searchQuery.length > 0); renderListings(); });
  searchClear.addEventListener('click', () => { searchInput.value = ''; searchQuery = ''; searchClear.classList.remove('visible'); renderListings(); });
</script>
</body>
</html>
