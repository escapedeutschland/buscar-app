const ADMIN_EMAIL = 'maximechristalle@gmail.com';

  let currentLang = localStorage.getItem('buscar_lang') || 'de';

  const translations = {
    de: {
      // Navigation
      nav_home: 'Home', nav_map: 'Karte', nav_entry: 'Eintrag', nav_profile: 'Profil',
      // Header
      greet_morning: 'Guten Morgen', greet_day: 'Guten Tag', greet_evening: 'Guten Abend', greet_night: 'Gute Nacht',
      header_sub: 'Was suchst du heute?',
      // Search
      search_placeholder: 'Arzt, Restaurant, Anwalt...',
      // Categories
      cat_all: 'Alle', cat_restaurants: 'Restaurants', cat_services: 'Dienstleistungen',
      cat_places: 'Orte', cat_accommodation: 'Unterkünfte', cat_shops: 'Geschäfte',
      cat_sport: 'Sport & Fitness', cat_tankstelle: 'Tankstellen', cat_wechselstube: 'Wechselstuben', cat_beauty: 'Beauty & Wellness',
      // City picker
      city_select: 'Stadt wählen...', city_all: '🌍 Alle Städte',
      // Listings
      entries_all: 'Einträge', results: 'Ergebnisse',
      nothing_found: 'Nichts gefunden', nothing_found_sub: 'Versuch einen anderen Suchbegriff',
      verified: 'Geprüft',
      // Detail
      description: 'Beschreibung', no_description: 'Keine Beschreibung.',
      phone: 'Telefon', website: 'Website', hours: 'Öffnungszeiten', address: 'Adresse',
      call: 'Anrufen', route: 'Route',
      ratings: 'Bewertungen', discussion: 'Diskussion', photos: 'Fotos',
      no_ratings: 'Noch keine Bewertungen',
      rate_now: 'Bewertung abgeben', rate_submit: 'Bewertung abschicken',
      rate_optional: 'Deine Erfahrung (optional)',
      your_rating: 'Deine Bewertung', edit: 'Bearbeiten', delete: 'Löschen',
      reply: 'Antworten', comment_placeholder: 'Schreib einen Kommentar...',
      add_photo: 'Foto hinzufügen', uploading: 'Wird hochgeladen...', days_select: 'Tage wählen...', from_time: 'Von...', to_time: 'Bis...', photo_add_label: 'Foto hinzufügen',
      claim_btn: 'Ich bin der Inhaber dieses Ortes',
      claim_info: 'Als verifizierter Inhaber kannst du diesen Eintrag selbst verwalten.',
      owner_badge: '⭐ Verifizierter Inhaber', pending_claim: '✓ Dein Claim wird geprüft...',
      edit_entry: 'Eintrag bearbeiten',
      // Form
      suggest_entry: 'Eintrag vorschlagen', after_review: 'Wird nach Prüfung veröffentlicht',
      rules_title: 'Regeln für Einträge',
      rule1: '• Keine Emojis im Titel', rule2: '• Name: max. 60 Zeichen',
      rule3: '• Beschreibung: min. 50, max. 500 Zeichen',
      rule4: '• Nur echte Orte in Paraguay', rule5: '• Keine Werbung oder Spam',
      name_label: 'Name des Ortes *', cat_label: 'Kategorie *', city_label: 'Stadt *',
      cat_choose: 'Bitte wählen...', cat_rest: 'Restaurants und Cafés',
      cat_serv: 'Dienstleistungen', cat_place: 'Orte und Sehenswürdigkeiten',
      cat_accom: 'Unterkünfte', cat_shop: 'Geschäfte und Märkte',
      desc_label: 'Deine Erfahrung *',
      desc_placeholder: 'Beschreibe den Ort für andere Deutsche. Was macht ihn besonders? Worauf sollte man achten?',
      contact_optional: 'Kontakt (optional)',
      tel_label: 'Telefon', web_label: 'Website', addr_label: 'Adresse', hours_label: 'Öffnungszeiten',
      location_btn: 'Meinen Standort verwenden', location_saved: 'Standort gespeichert',
      // === NEU: Location-Permission-Fix ===
      location_card_title: 'Standort *',
      location_required_hint: 'Der Standort wird benötigt, damit dein Eintrag auf der Karte erscheint.',
      location_required_error: 'Bitte gib deinen Standort an. Tippe auf "Meinen Standort verwenden".',
      loc_banner_text: 'Standort-Berechtigung fehlt – tippen für Anleitung',
      loc_modal_title: 'Standort aktivieren',
      loc_modal_text: 'Damit du einen Eintrag erstellen kannst, brauchen wir die Standort-Berechtigung. So aktivierst du sie:',
      loc_modal_step1: 'Öffne die Einstellungen deines Handys',
      loc_modal_step2: 'Wähle "Apps" → "Buscar"',
      loc_modal_step3: 'Tippe auf "Berechtigungen" → "Standort"',
      loc_modal_step4: 'Wähle "Bei Nutzung der App zulassen"',
      loc_modal_close: 'Schließen',
      loc_modal_retry: 'Erneut versuchen',
      loc_unavailable: 'Standort momentan nicht verfügbar. Bitte erneut versuchen.',
      loc_timeout: 'Standort-Suche dauert zu lang. Bitte erneut versuchen.',
      loc_unsupported: 'Standort wird von diesem Browser nicht unterstützt.',
      loc_remove: 'Standort entfernen',
      loc_locating: 'Standort wird ermittelt...',
      // === Ende NEU ===
      photos_optional: 'Fotos (optional, max. 3)',
      photos_hint: 'Fotos helfen bei der Prüfung und werden nach Genehmigung sichtbar.',
      submit_btn: 'Eintrag einreichen', submitting: 'Wird eingereicht...',
      submit_success: 'Danke! Dein Eintrag wurde eingereicht und wird geprüft.',
      fill_all: 'Bitte alle Pflichtfelder ausfüllen.',
      // Auth
      login: 'Einloggen', register: 'Registrieren', logout: 'Ausloggen',
      email_label: 'E-Mail', password_label: 'Passwort', name_auth: 'Name',
      username_label: 'Benutzername *',
      username_hint: 'Wird öffentlich angezeigt. Nur Buchstaben, Zahlen und _',
      create_account: 'Konto erstellen', logging_in: 'Einloggen...',
      forgot_pw: 'Passwort vergessen?', no_account: 'Noch kein Konto?',
      has_account: 'Schon ein Konto?',
      tagline: 'Dein Guide in Paraguay', open_now: 'Geöffnet', closed_now: 'Geschlossen', badge_new: 'Neu',
      // Profile
      to_home: 'Zur Startseite', suggest_entry_prof: 'Eintrag vorschlagen',
      admin_panel: 'Admin Panel', change_username: 'Benutzername ändern',
      change_password: 'Passwort ändern', my_favorites: 'Meine Favoriten',
      // Map
      map_title: 'Karte', map_sub_all: 'Alle Orte in Paraguay',
      // Filter
      subcategory: 'Unterkategorie', rating_filter: 'Bewertung',
      filter_title_sub: 'Unterkategorie', filter_title_stars: 'Mindest-Bewertung',
      min_stars: 'Minimum Sterne', stars_all: 'Alle',
      apply_filter: 'Anwenden',
      cancel: 'Abbrechen',
      ptr_pull: 'Aktualisieren', ptr_release: 'Loslassen...',
      approve: 'Genehmigen',
      reject: 'Ablehnen',
      // Events
      nav_events: 'Events',
      events_title: 'Events',
      events_sub: 'Veranstaltungen in Paraguay',
      events_loading: 'Events werden geladen...',
      events_none: 'Keine Events gefunden',
      events_none_filter: 'Keine Events für diesen Filter',
      ev_time_all: '📅 Alle', ev_time_today: 'Heute', ev_time_week: 'Diese Woche', ev_time_month: 'Diesen Monat',
      ev_type_all: '🎉 Alle Typen',
      ev_create: 'Event erstellen', ev_publish: 'Event veröffentlichen', ev_publishing: 'Wird veröffentlicht...',
      ev_form_sub: 'Dein Event erscheint sofort für alle',
      ev_basic: 'Grundinfo', ev_datetime: 'Datum & Zeit', ev_location: 'Ort', ev_photos: 'Fotos',
      ev_price_cap: 'Preis & Anmeldung', ev_rules_opt: 'Regeln',
      ev_title_label: 'Event-Titel *', ev_type_label: 'Typ *', ev_type_choose: 'Typ wählen...',
      ev_desc_label: 'Beschreibung *', ev_date_label: 'Datum *', ev_time_label: 'Uhrzeit',
      ev_city_label: 'Stadt *', ev_addr_label: 'Adresse / Veranstaltungsort',
      ev_map_btn: 'Meinen Standort verwenden',
      ev_photos_btn: 'Fotos hinzufügen',
      ev_paid: 'Kostenpflichtig', ev_paid_sub: 'Eintrittsgebühr angeben',
      ev_price_label: 'Preis (Guaraní)',
      ev_signup: 'Anmeldung aktivieren', ev_signup_sub: 'User können sich anmelden',
      ev_capacity_label: 'Max. Teilnehmer',
      ev_rules_placeholder: 'z.B. Nur 18+, max. 1 Begleitung...',
      ev_back: 'Zurück', ev_to_event: 'Zum Event →',
      ev_entry: 'Eintritt', ev_capacity: 'Kapazität', ev_rules: 'Regeln',
      ev_free: 'Kostenlos', ev_paid_label: 'Kostenpflichtig',
      ev_spots: 'Plätze frei', ev_full: 'Ausgebucht', ev_cancelled: 'Abgesagt',
      ev_signup_btn: 'Anmelden', ev_login_signup: 'Einloggen zum Anmelden',
      ev_cancel_btn: 'Event absagen', ev_cancel_confirm: 'Event wirklich absagen?',
      ev_delete_btn: 'Löschen', ev_delete_confirm: 'Event endgültig löschen?', ev_delete_ok: 'Event gelöscht.',
      // Profile events
      my_events_title: 'Meine Events', loading: 'Wird geladen...', error_loading: 'Fehler beim Laden.', ev_cancel_done: 'Event wurde abgesagt.', my_signups_title: 'Angemeldete Events',
      my_events_none: 'Du hast noch keine Events erstellt.',
      my_events_count_0: 'Noch keine Events', my_events_count_1: '1 Event',
      my_signups_none: 'Du hast dich noch bei keinem Event angemeldet.',
      my_signups_count_0: 'Keine Anmeldungen',
      ev_active: 'Aktiv', ev_details: 'Details →',
      ev_past: 'Vergangen', ev_cancelled_warning: '⚠️ Dieses Event wurde abgesagt',
      ev_unsignup_confirm: 'Von diesem Event abmelden?', ev_unsignup_ok: '✅ Abgemeldet.',
      ev_already_signed_up: '✅ Du bist angemeldet', ev_unsignup_btn: 'Abmelden',
      ev_signups_label: 'Anmeldungen',
      ev_signup_ok: '✅ Anmeldung erfolgreich!', ev_already_signed: 'Du bist bereits angemeldet.',
      ev_full_msg: 'Ausgebucht', ev_error_fields: 'Bitte alle Pflichtfelder (*) ausfüllen.',
      // Badges
      badge_title: 'Meine Auszeichnungen',
      badge_first: 'Erster Eintrag', badge_five: '5 Einträge', badge_ten: '10 Einträge',
      badge_twenty: '20 Einträge', badge_fifty: '50 Einträge', badge_hundred: '100 Einträge',
      badge_explorer: 'Entdecker', badge_chaco: 'Chaco-Kenner',
      badge_count_0: 'Noch keine eigenen Einträge', badge_count_1: '1 eigener Eintrag', badge_count_n: ' eigene Einträge',
    },
    es: {
      // Navegación
      nav_home: 'Inicio', nav_map: 'Mapa', nav_entry: 'Agregar', nav_profile: 'Perfil',
      // Encabezado
      greet_morning: 'Buenos días', greet_day: 'Buenas tardes', greet_evening: 'Buenas tardes', greet_night: 'Buenas noches',
      header_sub: '¿Qué estás buscando?',
      // Búsqueda
      search_placeholder: 'Médico, Restaurante, Abogado...',
      // Categorías
      cat_all: 'Todos', cat_restaurants: 'Restaurantes', cat_services: 'Servicios',
      cat_places: 'Lugares', cat_accommodation: 'Alojamientos', cat_shops: 'Tiendas',
      cat_sport: 'Deporte & Fitness', cat_tankstelle: 'Gasolineras', cat_wechselstube: 'Casas de cambio', cat_beauty: 'Belleza & Bienestar',
      // Selector de ciudad
      city_select: 'Seleccionar ciudad...', city_all: '🌍 Todas las ciudades',
      // Listados
      entries_all: 'Resultados', results: 'Resultados',
      nothing_found: 'Sin resultados', nothing_found_sub: 'Prueba otro término de búsqueda',
      verified: 'Verificado',
      // Detalle
      description: 'Descripción', no_description: 'Sin descripción.',
      phone: 'Teléfono', website: 'Sitio web', hours: 'Horario', address: 'Dirección',
      call: 'Llamar', route: 'Ruta',
      ratings: 'Valoraciones', discussion: 'Comentarios', photos: 'Fotos',
      no_ratings: 'Sin valoraciones aún',
      rate_now: 'Dejar valoración', rate_submit: 'Enviar valoración',
      rate_optional: 'Tu experiencia (opcional)',
      your_rating: 'Tu valoración', edit: 'Editar', delete: 'Eliminar',
      reply: 'Responder', comment_placeholder: 'Escribe un comentario...',
      add_photo: 'Agregar foto', uploading: 'Subiendo...', days_select: 'Seleccionar día...', from_time: 'Desde...', to_time: 'Hasta...', photo_add_label: 'Agregar foto',
      claim_btn: 'Soy el propietario de este lugar',
      claim_info: 'Como propietario verificado puedes gestionar este listado.',
      owner_badge: '⭐ Propietario verificado', pending_claim: '✓ Tu solicitud está siendo revisada...',
      edit_entry: 'Editar listado',
      // Formulario
      suggest_entry: 'Sugerir lugar', after_review: 'Se publicará tras revisión',
      rules_title: 'Reglas para listados',
      rule1: '• Sin emojis en el título', rule2: '• Nombre: máx. 60 caracteres',
      rule3: '• Descripción: mín. 50, máx. 500 caracteres',
      rule4: '• Solo lugares reales en Paraguay', rule5: '• Sin publicidad ni spam',
      name_label: 'Nombre del lugar *', cat_label: 'Categoría *', city_label: 'Ciudad *',
      cat_choose: 'Seleccionar...', cat_rest: 'Restaurantes y Cafés',
      cat_serv: 'Servicios', cat_place: 'Lugares y Atracciones',
      cat_accom: 'Alojamientos', cat_shop: 'Tiendas y Mercados',
      desc_label: 'Tu experiencia *',
      desc_placeholder: 'Describe el lugar. ¿Qué lo hace especial? ¿Qué hay que tener en cuenta?',
      contact_optional: 'Contacto (opcional)',
      tel_label: 'Teléfono', web_label: 'Sitio web', addr_label: 'Dirección', hours_label: 'Horario',
      location_btn: 'Usar mi ubicación', location_saved: 'Ubicación guardada',
      // === NEU: Location-Permission-Fix ===
      location_card_title: 'Ubicación *',
      location_required_hint: 'La ubicación es necesaria para que tu lugar aparezca en el mapa.',
      location_required_error: 'Por favor indica tu ubicación. Toca "Usar mi ubicación".',
      loc_banner_text: 'Permiso de ubicación denegado – toca para ayuda',
      loc_modal_title: 'Activar ubicación',
      loc_modal_text: 'Para crear un lugar necesitamos el permiso de ubicación. Así lo activas:',
      loc_modal_step1: 'Abre los ajustes de tu teléfono',
      loc_modal_step2: 'Selecciona "Aplicaciones" → "Buscar"',
      loc_modal_step3: 'Toca "Permisos" → "Ubicación"',
      loc_modal_step4: 'Elige "Permitir solo mientras usas la app"',
      loc_modal_close: 'Cerrar',
      loc_modal_retry: 'Reintentar',
      loc_unavailable: 'Ubicación no disponible. Intenta de nuevo.',
      loc_timeout: 'La búsqueda de ubicación tardó demasiado. Intenta de nuevo.',
      loc_unsupported: 'Tu navegador no admite ubicación.',
      loc_remove: 'Quitar ubicación',
      loc_locating: 'Determinando ubicación...',
      // === Ende NEU ===
      photos_optional: 'Fotos (opcional, máx. 3)',
      photos_hint: 'Las fotos ayudan en la revisión y serán visibles tras aprobación.',
      submit_btn: 'Enviar listado', submitting: 'Enviando...',
      submit_success: '¡Gracias! Tu listado fue enviado y será revisado.',
      fill_all: 'Por favor completa todos los campos obligatorios.',
      // Auth
      login: 'Iniciar sesión', register: 'Registrarse', logout: 'Cerrar sesión',
      email_label: 'Correo electrónico', password_label: 'Contraseña', name_auth: 'Nombre',
      username_label: 'Nombre de usuario *',
      username_hint: 'Visible públicamente. Solo letras, números y _',
      create_account: 'Crear cuenta', logging_in: 'Iniciando...',
      forgot_pw: '¿Olvidaste tu contraseña?', no_account: '¿No tienes cuenta?',
      has_account: '¿Ya tienes cuenta?',
      tagline: 'Tu guía en Paraguay', open_now: 'Abierto', closed_now: 'Cerrado', badge_new: 'Nuevo',
      // Perfil
      to_home: 'Ir al inicio', suggest_entry_prof: 'Sugerir lugar',
      admin_panel: 'Panel admin', change_username: 'Cambiar usuario',
      change_password: 'Cambiar contraseña', my_favorites: 'Mis favoritos',
      // Mapa
      map_title: 'Mapa', map_sub_all: 'Todos los lugares en Paraguay',
      // Filtros
      subcategory: 'Subcategoría', rating_filter: 'Valoración',
      filter_title_sub: 'Subcategoría', filter_title_stars: 'Valoración mínima',
      min_stars: 'Estrellas mínimas', stars_all: 'Todas',
      apply_filter: 'Aplicar',
      cancel: 'Cancelar',
      ptr_pull: 'Actualizar', ptr_release: 'Soltar...',
      approve: 'Aprobar',
      reject: 'Rechazar',
      // Events
      nav_events: 'Eventos',
      events_title: 'Eventos',
      events_sub: 'Eventos en Paraguay',
      events_loading: 'Cargando eventos...',
      events_none: 'No se encontraron eventos',
      events_none_filter: 'No hay eventos para este filtro',
      ev_time_all: '📅 Todos', ev_time_today: 'Hoy', ev_time_week: 'Esta semana', ev_time_month: 'Este mes',
      ev_type_all: '🎉 Todos los tipos',
      ev_create: 'Crear evento', ev_publish: 'Publicar evento', ev_publishing: 'Publicando...',
      ev_form_sub: 'Tu evento aparece de inmediato para todos',
      ev_basic: 'Info básica', ev_datetime: 'Fecha y hora', ev_location: 'Lugar', ev_photos: 'Fotos',
      ev_price_cap: 'Precio y registro', ev_rules_opt: 'Reglas',
      ev_title_label: 'Título del evento *', ev_type_label: 'Tipo *', ev_type_choose: 'Elegir tipo...',
      ev_desc_label: 'Descripción *', ev_date_label: 'Fecha *', ev_time_label: 'Hora',
      ev_city_label: 'Ciudad *', ev_addr_label: 'Dirección / Lugar del evento',
      ev_map_btn: 'Usar mi ubicación',
      ev_photos_btn: 'Agregar fotos',
      ev_paid: 'Con entrada', ev_paid_sub: 'Indicar precio de entrada',
      ev_price_label: 'Precio (Guaraní)',
      ev_signup: 'Activar registro', ev_signup_sub: 'Los usuarios pueden registrarse',
      ev_capacity_label: 'Máx. participantes',
      ev_rules_placeholder: 'Ej: Solo mayores de 18, máx. 1 acompañante...',
      ev_back: 'Volver', ev_to_event: 'Ver evento →',
      ev_entry: 'Entrada', ev_capacity: 'Capacidad', ev_rules: 'Reglas',
      ev_free: 'Gratis', ev_paid_label: 'Con costo',
      ev_spots: 'lugares disponibles', ev_full: 'Agotado', ev_cancelled: 'Cancelado',
      ev_signup_btn: 'Registrarse', ev_login_signup: 'Iniciar sesión para registrarse',
      ev_cancel_btn: 'Cancelar evento', ev_cancel_confirm: '¿Cancelar este evento?',
      ev_delete_btn: 'Eliminar', ev_delete_confirm: '¿Eliminar este evento definitivamente?', ev_delete_ok: 'Evento eliminado.',
      // Perfil eventos
      my_events_title: 'Mis Eventos', loading: 'Cargando...', error_loading: 'Error al cargar.', ev_cancel_done: 'Evento cancelado.', my_signups_title: 'Eventos Registrados',
      my_events_none: 'Aún no has creado ningún evento.',
      my_events_count_0: 'Sin eventos', my_events_count_1: '1 Evento',
      my_signups_none: 'Aún no te has registrado en ningún evento.',
      my_signups_count_0: 'Sin registros',
      ev_active: 'Activo', ev_details: 'Detalles →',
      ev_past: 'Pasado', ev_cancelled_warning: '⚠️ Este evento fue cancelado',
      ev_unsignup_confirm: '¿Cancelar registro en este evento?', ev_unsignup_ok: '✅ Registro cancelado.',
      ev_already_signed_up: '✅ Estás registrado', ev_unsignup_btn: 'Cancelar registro',
      ev_signups_label: 'Registros',
      ev_signup_ok: '✅ ¡Registro exitoso!', ev_already_signed: 'Ya estás registrado.',
      ev_full_msg: 'Sin lugares disponibles', ev_error_fields: 'Por favor completa todos los campos obligatorios (*).',
      // Badges
      badge_title: 'Mis Insignias',
      badge_first: 'Primer registro', badge_five: '5 registros', badge_ten: '10 registros',
      badge_twenty: '20 registros', badge_fifty: '50 registros', badge_hundred: '100 registros',
      badge_explorer: 'Explorador', badge_chaco: 'Conocedor del Chaco',
      badge_count_0: 'Aún sin registros propios', badge_count_1: '1 registro propio', badge_count_n: ' registros propios',
    }
  };

  function t(key) {
    return (translations[currentLang] && translations[currentLang][key]) || translations['de'][key] || key;
  }

  let contentTranslated = false;

  function toggleLangAuth() {
    currentLang = currentLang === 'de' ? 'es' : 'de';
    localStorage.setItem('buscar_lang', currentLang);
    const btn = document.getElementById('langToggleAuth');
    if (btn) btn.textContent = currentLang === 'de' ? 'ES' : 'DE';
    applyLang();
    // Also update main toggle if exists
    const mainBtn = document.getElementById('langToggle');
    if (mainBtn) mainBtn.textContent = currentLang === 'de' ? 'ES' : 'DE';
  }

  function toggleLang() {
    currentLang = currentLang === 'de' ? 'es' : 'de';
    renderLegalScreens();
    localStorage.setItem('buscar_lang', currentLang);
    contentTranslated = false;
    applyLang();
    translateVisibleContent();
  }

  async function detectAndTranslate(text, targetLang) {
    try {
      const url = `https://translate.googleapis.com/translate_a/single?client=gtx&sl=auto&tl=${targetLang}&dt=t&q=${encodeURIComponent(text.substring(0,500))}`;
      const res = await fetch(url);
      const data = await res.json();
      // Google returns [[["translated","original",...],...],...]
      const translated = data?.[0]?.map(item => item?.[0]).filter(Boolean).join('');
      if (translated && translated !== text) return translated;
    } catch(e) {}
    return null;
  }

  async function translateVisibleContent() {
    const btn = document.getElementById('langToggle');
    const origText = btn.textContent;
    btn.textContent = '⏳';
    btn.disabled = true;

    const targetLang = currentLang === 'es' ? 'es' : 'de';

    // Collect all elements needing translation
    const allEls = [
      ...document.querySelectorAll('.listing-desc[data-original]'),
      ...document.querySelectorAll('.review-item-text[data-original]'),
      ...document.querySelectorAll('.comment-item-text[data-original]'),
      ...document.querySelectorAll('.reply-item-text[data-original]'),
    ].filter(el => el.dataset.original && el.dataset.original.length > 3);

    const detailDesc = document.getElementById('detailDesc');
    if (detailDesc && detailDesc.dataset.original && detailDesc.dataset.original.length > 3) {
      allEls.unshift(detailDesc);
    }

    // Translate in parallel batches of 4
    const batchSize = 4;
    for (let i = 0; i < allEls.length; i += batchSize) {
      const batch = allEls.slice(i, i + batchSize);
      await Promise.all(batch.map(async el => {
        const translated = await detectAndTranslate(el.dataset.original, targetLang);
        if (translated) el.textContent = translated;
      }));
    }

    btn.textContent = origText;
    btn.disabled = false;
    contentTranslated = true;
  }

  function applyLang() {
    const btn = document.getElementById('langToggle');
    if (btn) btn.textContent = currentLang === 'de' ? 'ES' : 'DE';
    const btnAuth = document.getElementById('langToggleAuth');
    if (btnAuth) btnAuth.textContent = currentLang === 'de' ? 'ES' : 'DE';

    // Update all elements with data-i18n
    document.querySelectorAll('[data-i18n]').forEach(el => {
      const val = t(el.getAttribute('data-i18n'));
      if (el.tagName === 'OPTION') el.text = val;
      else el.textContent = val;
    });

    // Update placeholders
    document.querySelectorAll('[data-i18n-ph]').forEach(el => {
      el.placeholder = t(el.getAttribute('data-i18n-ph'));
    });

    // Header
    const headerSub = document.querySelector('.header-sub');
    if (headerSub) headerSub.textContent = t('header_sub');
    updateGreeting();

    // City picker
    const cityLabel = document.getElementById('cityPickerLabel');
    if (cityLabel && activeCity === 'Alle') cityLabel.textContent = t('city_select');

    // Search placeholder
    const searchEl = document.getElementById('searchInput');
    if (searchEl) searchEl.placeholder = t('search_placeholder');

    // Auth screen
    const loginBtn = document.getElementById('loginBtn');
    if (loginBtn && !loginBtn.disabled) loginBtn.textContent = t('login');
    const registerBtn = document.getElementById('registerBtn');
    if (registerBtn && !registerBtn.disabled) registerBtn.textContent = t('create_account');

    // Form screen - labels
    const formFields = {
      'Bitte wählen...': t('cat_choose'),
      'Restaurants und Cafés': t('cat_rest'),
      'Dienstleistungen': t('cat_serv'),
      'Orte und Sehenswürdigkeiten': t('cat_place'),
      'Unterkünfte': t('cat_accom'),
      'Geschäfte und Märkte': t('cat_shop'),
    };
    document.querySelectorAll('#newCategory option').forEach(opt => {
      if (formFields[opt.textContent]) opt.textContent = formFields[opt.textContent];
    });

    // Form labels
    const labelMap = {
      'Name des Ortes *': t('name_label'), 'Nombre del lugar *': t('name_label'),
      'Kategorie *': t('cat_label'), 'Categoría *': t('cat_label'),
      'Stadt *': t('city_label'), 'Ciudad *': t('city_label'),
      'Deine Erfahrung *': t('desc_label'), 'Tu experiencia *': t('desc_label'),
      'Kontakt (optional)': t('contact_optional'), 'Contacto (opcional)': t('contact_optional'),
      'Telefon': t('tel_label'), 'Teléfono': t('tel_label'),
      'Website': t('web_label'), 'Sitio web': t('web_label'),
      'Adresse': t('addr_label'), 'Dirección': t('addr_label'),
      'Öffnungszeiten': t('hours_label'), 'Horario': t('hours_label'),
    };
    document.querySelectorAll('.field-label').forEach(el => {
      if (labelMap[el.textContent]) el.textContent = labelMap[el.textContent];
    });
    document.querySelectorAll('.form-card-title').forEach(el => {
      if (labelMap[el.textContent]) el.textContent = labelMap[el.textContent];
    });

    // Form placeholders
    const phMap = {
      'z.B. Dr. Müller, Café Central': currentLang === 'es' ? 'ej. Dr. Martínez, Café Central' : 'z.B. Dr. Müller, Café Central',
      'z.B. Asunción, Encarnación': currentLang === 'es' ? 'ej. Asunción, Encarnación' : 'z.B. Asunción, Encarnación',
      'z.B. Mo-Fr 08:00-18:00': currentLang === 'es' ? 'ej. Lun-Vie 08:00-18:00' : 'z.B. Mo-Fr 08:00-18:00',
      'Straße, Stadtviertel': currentLang === 'es' ? 'Calle, Barrio' : 'Straße, Stadtviertel',
      'www.beispiel.com': 'www.ejemplo.com',
      '+595 21 ...': '+595 21 ...',
    };
    document.querySelectorAll('.field-input, .field-textarea').forEach(el => {
      if (phMap[el.placeholder]) el.placeholder = phMap[el.placeholder];
    });

    // Form desc placeholder
    const descEl = document.getElementById('newDesc');
    if (descEl) descEl.placeholder = t('desc_placeholder');

    // Form rules
    const rulesTitle = document.querySelector('.form-rules-title');
    if (rulesTitle) rulesTitle.textContent = t('rules_title');
    const rules = document.querySelectorAll('.form-rule');
    const ruleKeys = ['rule1','rule2','rule3','rule4','rule5'];
    rules.forEach((el, i) => { if (ruleKeys[i]) el.textContent = t(ruleKeys[i]); });

    // Photos hint
    const photoHint = document.querySelector('#formPhotoProgress');
    const photosLabel = document.querySelector('.form-card-title:last-of-type');
    document.querySelectorAll('.form-card-title').forEach(el => {
      if (el.textContent.includes('Fotos') || el.textContent.includes('Foto')) {
        el.textContent = t('photos_optional');
      }
      if (el.textContent === 'Grundinfos' || el.textContent === 'Información básica') {
        el.textContent = currentLang === 'es' ? 'Información básica' : 'Grundinfos';
      }
      if (el.textContent === 'Beschreibung' || el.textContent === 'Descripción') {
        el.textContent = t('description');
      }
    });

    // Location button
    const locBtn = document.getElementById('locationBtn');
    if (locBtn && !locBtn.dataset.saved) {
      const svgPart = locBtn.innerHTML.match(/<svg[^>]*>.*?<\/svg>/s)?.[0] || '';
      locBtn.innerHTML = svgPart + ' ' + t('location_btn');
    }

    // Profile screen
    const profilEmail = document.getElementById('profilEmail');

    // Map cats
    document.querySelectorAll('#mapCats .map-chip').forEach(el => {
      const cat = el.dataset.cat;
      const catKeyMap = {'Alle':'cat_all','kat-restaurants':'cat_restaurants','kat-dienstleistung':'cat_services','kat-orte':'cat_places','kat-unterkunft':'cat_accommodation','kat-geschaefte':'cat_shops','kat-sport':'cat_sport'};
      if (!cat || !catKeyMap[cat]) return;
      const span = el.querySelector('[data-i18n]') || el;
      span.textContent = t(catKeyMap[cat]);
    });

    // Filter buttons
    const filterSubBtn = document.getElementById('filterSubBtn');
    const filterStarBtn = document.getElementById('filterStarBtn');
    if (filterSubBtn && !filterSubBtn.classList.contains('active')) document.getElementById('filterSubLabel').textContent = t('subcategory');
    if (filterStarBtn && !filterStarBtn.classList.contains('active')) document.getElementById('filterStarLabel').textContent = t('rating_filter');

    // Rerender if data loaded
    if (allListings.length) renderListings();

    // Events screen - filter chips
    var evChipMap = {
      'evChip-all': 'ev_time_all', 'evChip-today': 'ev_time_today',
      'evChip-week': 'ev_time_week', 'evChip-month': 'ev_time_month',
      'evType-all': 'ev_type_all'
    };
    Object.keys(evChipMap).forEach(function(id) {
      var el = document.getElementById(id);
      if (el) el.textContent = t(evChipMap[id]);
    });
    // Events form fields
    var evFormLabels = {
      'ev_create': ['form-title'], 'ev_form_sub': ['form-sub'],
    };
    var evLabelMap = {
      'Event erstellen': t('ev_create'), 'Crear evento': t('ev_create'),
      'Dein Event erscheint sofort für alle': t('ev_form_sub'), 'Tu evento aparece de inmediato para todos': t('ev_form_sub'),
      'Event-Titel *': t('ev_title_label'), 'Título del evento *': t('ev_title_label'),
      'Datum *': t('ev_date_label'), 'Fecha *': t('ev_date_label'),
      'Uhrzeit': t('ev_time_label'), 'Hora': t('ev_time_label'),
      'Stadt *': t('ev_city_label'), 'Ciudad *': t('ev_city_label'),
    };
    document.querySelectorAll('#screenEventForm .field-label, #screenEventForm .form-title, #screenEventForm .form-sub, #screenEventForm .form-card-title').forEach(function(el) {
      var txt = el.textContent.trim();
      if (evLabelMap[txt]) el.textContent = evLabelMap[txt];
    });
    // Event form toggles
    var evToggleMap = {
      'Kostenpflichtig': t('ev_paid'), 'Con entrada': t('ev_paid'),
      'Anmeldung aktivieren': t('ev_signup'), 'Activar registro': t('ev_signup'),
    };
    document.querySelectorAll('.event-toggle-label').forEach(function(el) {
      if (evToggleMap[el.textContent.trim()]) el.textContent = evToggleMap[el.textContent.trim()];
    });
    // Event form submit btn
    var evSubmitBtn = document.getElementById('evFormSubmitBtn');
    if (evSubmitBtn && !evSubmitBtn.disabled) evSubmitBtn.textContent = t('ev_publish');
    // Events subtitle
    var evSub = document.getElementById('eventsSubtitle');
    if (evSub && (evSub.textContent === 'Veranstaltungen in Paraguay' || evSub.textContent === 'Eventos en Paraguay')) {
      evSub.textContent = t('events_sub');
    }
    // Badge section
    var badgeRow = document.querySelector('#screenProfil .profil-row-label[data-i18n="badge_title"]');
    if (badgeRow) badgeRow.textContent = t('badge_title');
    // Re-render badges if visible
    if (document.getElementById('badgeSection') && document.getElementById('badgeSection').style.display !== 'none') {
      var currentBadges = [];
      document.querySelectorAll('.badge-item').forEach(function(el) {
        if (el.querySelector('.badge-icon.earned')) {
          var name = el.querySelector('.badge-name').textContent;
          var def = getBadgeDefs().find(function(b){ return b.name === name; });
        }
      });
    }
    // Re-render events if on events screen
    if (allEvents.length) renderEvents();
  }



  const firebaseConfig = { apiKey: "AIzaSyC_nxQL9Jo0EPUCtyI8QvnnRVKRBPbREKU", authDomain: "paraguay-app-8beb3.firebaseapp.com", projectId: "paraguay-app-8beb3", storageBucket: "paraguay-app-8beb3.firebasestorage.app" };
  firebase.initializeApp(firebaseConfig);
  const db = firebase.firestore();
  const auth = firebase.auth();
  const storage = firebase.storage();

  let allListings = [], activeCategory = 'Alle', mapCategory = 'Alle', activeCity = 'Alle', searchQuery = '', currentUser = null;
  let activeScreen = 'screenHome'; // Track current screen
  let pendingFormPhotos = [];
  let ratingsCache = {};

  async function loadAllRatings() {
    try {
      const snap = await db.collection('reviews').get();
      ratingsCache = {};
      snap.docs.forEach(d => {
        const r = d.data();
        if (!ratingsCache[r.listing_id]) ratingsCache[r.listing_id] = [];
        ratingsCache[r.listing_id].push(r.rating);
      });
    } catch(e) {}
  }

  function getAvgRating(listingId) {
    const ratings = ratingsCache[listingId];
    if (!ratings || !ratings.length) return null;
    return (ratings.reduce((s,r) => s+r, 0) / ratings.length);
  }

  function starsSmall(avg) {
    if (!avg) return '';
    const full = Math.round(avg);
    let h = '<span style="display:inline-flex;align-items:center;gap:2px;margin-top:5px">';
    for (let i = 1; i <= 5; i++) h += `<span style="font-size:11px;color:${i<=full?'#F5A623':'#E0E0E0'}">&#9733;</span>`;
    h += `<span style="font-size:11px;color:var(--text-3);margin-left:3px">${avg.toFixed(1)}</span></span>`;
    return h;
  }

  const catIcons = {
    'kat-restaurants': '<svg viewBox="0 0 24 24" fill="none" stroke-width="2" stroke-linecap="round"><path d="M18 8h1a4 4 0 0 1 0 8h-1"/><path d="M2 8h16v9a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4V8z"/><line x1="6" y1="1" x2="6" y2="4"/><line x1="10" y1="1" x2="10" y2="4"/><line x1="14" y1="1" x2="14" y2="4"/></svg>',
    'kat-dienstleistung': '<svg viewBox="0 0 24 24" fill="none" stroke-width="2" stroke-linecap="round"><path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"/></svg>',
    'kat-orte': '<svg viewBox="0 0 24 24" fill="none" stroke-width="2" stroke-linecap="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>',
    'kat-unterkunft': '<svg viewBox="0 0 24 24" fill="none" stroke-width="2" stroke-linecap="round"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/></svg>',
    'kat-geschaefte': '<svg viewBox="0 0 24 24" fill="none" stroke-width="2" stroke-linecap="round"><path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"/><line x1="3" y1="6" x2="21" y2="6"/><path d="M16 10a4 4 0 0 1-8 0"/></svg>',
    'kat-sport': '<svg viewBox="0 0 24 24" fill="none" stroke="#06B6D4" stroke-width="2" stroke-linecap="round"><circle cx="12" cy="12" r="10"/><path d="M4.93 4.93l4.24 4.24"/><path d="M14.83 9.17l4.24-4.24"/><path d="M14.83 14.83l4.24 4.24"/><path d="M9.17 14.83l-4.24 4.24"/></svg>',
    'kat-tankstelle': '<svg viewBox="0 0 24 24" fill="none" stroke-width="2" stroke-linecap="round"><path d="M3 22V10a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v12"/><rect x="3" y="10" width="10" height="12"/><path d="M13 6h2l2 5h2"/><line x1="3" y1="22" x2="13" y2="22"/></svg>',
    'kat-wechselstube': '<svg viewBox="0 0 24 24" fill="none" stroke-width="2" stroke-linecap="round"><rect x="2" y="6" width="20" height="12" rx="2"/><path d="M22 10H18a2 2 0 0 0 0 4h4"/><circle cx="18" cy="12" r="1" fill="currentColor" stroke="none"/></svg>',
    'kat-beauty': '<svg viewBox="0 0 24 24" fill="none" stroke-width="2" stroke-linecap="round"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/></svg>',
        'default': '<svg viewBox="0 0 24 24" fill="none" stroke-width="2" stroke-linecap="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>'
  };
  const catEmojis = {
    'kat-restaurants':    '🍽',
    'kat-unterkunft':     '🛏',
    'kat-orte':           '🏛',
    'kat-geschaefte':     '🛒',
    'kat-sport':          '💪',
    'kat-beauty':         '✂',
    'kat-dienstleistung': '🏥',
    'kat-tankstelle':     '⛽',
    'kat-wechselstube':   '💱',
    'default':            '📍',
  };
  const catNames = { 'kat-restaurants': 'Restaurants', 'kat-dienstleistung': 'Dienstleistungen', 'kat-orte': 'Orte', 'kat-unterkunft': 'Unterkünfte', 'kat-geschaefte': 'Geschäfte', 'kat-sport': 'Sport & Fitness' };

  function setNav(active) {
    ['navHome','navMap','navEvents','navForm','navProfil'].forEach(id => {
      const el = document.getElementById(id);
      const el2 = document.getElementById(id + '2');
      if (el) el.classList.toggle('active', id === active);
      if (el2) el2.classList.toggle('active', id === active);
    });
  }

  // Cached screens for instant switching – populated on first call
  var _screens = null;
  var _prevScreenId = null;

  function showScreen(id) {
    activeScreen = id;
    // Build cache on first call
    if (!_screens) {
      _screens = {};
      document.querySelectorAll('.screen').forEach(function(s) {
        _screens[s.id] = s;
      });
      // Find which screen is currently active
      document.querySelectorAll('.screen.active').forEach(function(s) {
        _prevScreenId = s.id;
      });
    }
    // Swap: remove active from previous, add to next
    if (_prevScreenId && _prevScreenId !== id && _screens[_prevScreenId]) {
      _screens[_prevScreenId].classList.remove('active');
    }
    if (_screens[id]) {
      _screens[id].classList.add('active');
    }
    _prevScreenId = id;
    requestAnimationFrame(function(){ window.scrollTo(0, 0); });
    // Hard-hide map screen when not active to prevent Leaflet bleeding
    const mapScreen = document.getElementById('screenMap');
    if (mapScreen) mapScreen.style.display = id === 'screenMap' ? 'flex' : 'none';
    if (id === 'screenMap') {
      _mapFitOnUpdate = true;
      setTimeout(() => { if (maplibreMap) maplibreMap.resize(); renderMap(); }, 100);
    }
    if (id === 'screenProfil' && currentUser) {
      loadBadges(currentUser.uid);
    }
    // === NEU: Beim Öffnen des Formulars Standort-Berechtigung pruefen
    if (id === 'screenForm') {
      checkLocationPermissionForForm();
    }
    // === Ende NEU ===
    // PTR setup – cached, runs only once per screen (not on every tap)
    if (!showScreen._ptr) {
      showScreen._ptr = {
        'screenEvents':      { ind: 'ptrEvents',      fn: function(){ loadEvents(); } },
        'screenProfil':      { ind: 'ptrProfil',      fn: function(){ if(currentUser) loadBadges(currentUser.uid); } },
        'screenFavorites':   { ind: 'ptrFavorites',   fn: function(){ loadFavorites(); } },
        'screenEventDetail': { ind: 'ptrEventDetail', fn: function(){ if(_currentEventId) showEventDetail(_currentEventId, _evDetailSource); } },
      };
    }
    var ptr = showScreen._ptr[id];
    if (ptr && !ptr._done) {
      var el = id === 'screenProfil'
        ? document.querySelector('#screenProfil .profil-body')
        : document.getElementById({
            'screenEvents': 'eventsList',
            'screenFavorites': 'favoritesBody',
            'screenEventDetail': 'evDetailBody'
          }[id]);
      if (el) { setupPTR(el, ptr.ind, ptr.fn); ptr._done = true; }
    }
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

  function showAuthError(msg) { const el = document.getElementById('authError'); el.textContent = msg; el.classList.add('visible'); }

  async function handleLogin(e) {
    e.preventDefault();
    const btn = document.getElementById('loginBtn');
    btn.disabled = true; btn.textContent = 'Einloggen...';
    document.getElementById('authError').classList.remove('visible');
    try {
      await auth.signInWithEmailAndPassword(document.getElementById('loginEmail').value, document.getElementById('loginPassword').value);
    } catch (err) {
      const msgs = { 'auth/user-not-found': 'Kein Konto mit dieser E-Mail.', 'auth/wrong-password': 'Falsches Passwort.', 'auth/invalid-email': 'Ungültige E-Mail.', 'auth/too-many-requests': 'Zu viele Versuche.' };
      showAuthError(msgs[err.code] || 'Fehler beim Einloggen.');
      btn.disabled = false; btn.textContent = 'Einloggen';
    }
  }

  async function handleRegister(e) {
    e.preventDefault();
    const btn = document.getElementById('registerBtn');
    const username = document.getElementById('regUsername').value.trim();
    const usernameErr = document.getElementById('usernameError');
    usernameErr.style.display = 'none';

    if (!/^[a-zA-Z0-9_]{3,30}$/.test(username)) {
      usernameErr.textContent = 'Min. 3 Zeichen, nur Buchstaben, Zahlen und _.';
      usernameErr.style.display = 'block'; return;
    }

    const taken = await db.collection('users').where('username', '==', username).get();
    if (!taken.empty) {
      usernameErr.textContent = 'Dieser Benutzername ist bereits vergeben.';
      usernameErr.style.display = 'block'; return;
    }

    btn.disabled = true; btn.textContent = 'Wird erstellt...';
    document.getElementById('authError').classList.remove('visible');
    try {
      const cred = await auth.createUserWithEmailAndPassword(document.getElementById('regEmail').value, document.getElementById('regPassword').value);
      await db.collection('users').doc(cred.user.uid).set({
        name: document.getElementById('regName').value,
        username: username,
        email: document.getElementById('regEmail').value,
        created_at: new Date(), verified: false
      });
    } catch (err) {
      const msgs = { 'auth/email-already-in-use': 'E-Mail bereits registriert.', 'auth/weak-password': 'Passwort zu schwach.' };
      showAuthError(msgs[err.code] || 'Fehler bei der Registrierung.');
      btn.disabled = false; btn.textContent = 'Konto erstellen';
    }
  }

  async function handleLogout() { await auth.signOut(); }

  async function showForgotPassword() {
    const email = document.getElementById('loginEmail').value.trim();
    const msgEl = document.getElementById('forgotMsg');
    if (!email) {
      msgEl.style.background = 'var(--red-light)';
      msgEl.style.color = 'var(--red)';
      msgEl.textContent = 'Bitte zuerst deine E-Mail eintragen.';
      msgEl.style.display = 'block'; return;
    }
    try {
      await auth.sendPasswordResetEmail(email);
      msgEl.style.background = 'var(--green-light)';
      msgEl.style.color = 'var(--green)';
      msgEl.textContent = 'E-Mail gesendet! Prüfe dein Postfach.';
      msgEl.style.display = 'block';
    } catch(e) {
      msgEl.style.background = 'var(--red-light)';
      msgEl.style.color = 'var(--red)';
      msgEl.textContent = 'E-Mail nicht gefunden.';
      msgEl.style.display = 'block';
    }
  }

  // ── BADGE SYSTEM ─────────────────────────────────────────────────────────
  function getBadgeDefs() { return [
    { id: 'first',    emoji: '🌱', name: t('badge_first'),   threshold: 1   },
    { id: 'five',     emoji: '✋', name: t('badge_five'),        threshold: 5   },
    { id: 'ten',      emoji: '🔟', name: t('badge_ten'),       threshold: 10  },
    { id: 'twenty',   emoji: '🚀', name: t('badge_twenty'),       threshold: 20  },
    { id: 'fifty',    emoji: '⭐', name: t('badge_fifty'),       threshold: 50  },
    { id: 'hundred',  emoji: '💯', name: t('badge_hundred'),      threshold: 100 },
    { id: 'explorer', emoji: '🗺️', name: t('badge_explorer'),         threshold: 3,  special: 'cities3' },
    { id: 'chaco',    emoji: '🌵', name: t('badge_chaco'),      threshold: 1,  special: 'chaco'   },
  ];; }

  async function loadBadges(uid) {
    try {
      // Step 1: Show cached badges immediately from user doc (fast)
      const userDoc = await db.collection('users').doc(uid).get();
      const cached = userDoc.exists ? (userDoc.data().badges || []) : [];
      renderBadgeGrid(cached); // instant render from cache

      // Step 2: Count listings in background to check for new badges
      const snap = await db.collection('listings').where('created_by','==',uid).get();
      const count = snap.size;
      document.getElementById('profilListingsCount').textContent =
        count === 0 ? t('badge_count_0') :
        count === 1 ? t('badge_count_1') : count + t('badge_count_n');

      // Check special badges
      const docs = snap.docs.map(d => d.data());
      const cities = new Set(docs.map(d => d.city).filter(Boolean));
      const hasChaco = docs.some(d => ['Filadelfia','Loma Plata','Mariscal Estigarribia','Fuerte Olimpo','Bahía Negra','Neuland','Pozo Colorado'].includes(d.city));

      // Compute newly earned
      let earned = [...cached];
      const newlyEarned = [];
      for (const b of getBadgeDefs()) {
        let qualifies = false;
        if (b.special === 'cities3') qualifies = cities.size >= 3;
        else if (b.special === 'chaco') qualifies = hasChaco;
        else qualifies = count >= b.threshold;

        if (qualifies && !earned.includes(b.id)) {
          newlyEarned.push(b.id);
          earned.push(b.id);
        }
      }

      // Save and show newly earned badges
      if (newlyEarned.length > 0) {
        try {
          await db.collection('users').doc(uid).set({ badges: earned }, { merge: true });
          newlyEarned.forEach(id => {
            const def = getBadgeDefs().find(b => b.id === id);
            if (def) showToast('🏆 ' + def.name + ' ' + def.emoji);
          });
          renderBadgeGrid(earned); // update grid with new badges
        } catch(e) {}
      }
    } catch(e) { console.error('badge error', e); }
  }

  function renderBadgeGrid(earned) {
    const grid = document.getElementById('badgeGrid');
    const section = document.getElementById('badgeSection');
    if (!grid) return;
    grid.innerHTML = getBadgeDefs().map(function(b) {
      const isEarned = earned.includes(b.id);
      const checkHtml = isEarned ? '<span class="badge-check">&#10003;</span>' : '';
      const iconClass = 'badge-icon ' + (isEarned ? 'earned' : 'locked');
      const nameClass = 'badge-name ' + (isEarned ? 'earned' : '');
      return '<div class="badge-item">'
        + '<div class="' + iconClass + '">'
        + '<span style="font-size:24px;line-height:1;display:block;">' + b.emoji + '</span>'
        + checkHtml
        + '</div>'
        + '<div class="' + nameClass + '">' + b.name + '</div>'
        + '</div>';
    }).join('');
  }

  function toggleBadgePanel() {
    const panel = document.getElementById('badgeSection');
    const chevron = document.getElementById('badgeChevron');
    const open = panel.style.display === 'none';
    panel.style.display = open ? 'block' : 'none';
    chevron.style.transform = open ? 'rotate(90deg)' : '';
  }

  function showToast(msg) {
    let toast = document.getElementById('badgeToast');
    if (!toast) {
      toast = document.createElement('div');
      toast.id = 'badgeToast';
      toast.style.cssText = 'position:fixed;bottom:100px;left:50%;transform:translateX(-50%);background:var(--yellow);color:white;padding:12px 20px;border-radius:24px;font-size:14px;font-weight:700;z-index:9999;box-shadow:0 4px 20px rgba(0,0,0,0.2);transition:opacity 0.4s;text-align:center;max-width:280px;';
      document.body.appendChild(toast);
    }
    toast.textContent = msg;
    toast.style.opacity = '1';
    clearTimeout(toast._t);
    toast._t = setTimeout(() => { toast.style.opacity = '0'; }, 3500);
  }

  // ══ EVENTS SYSTEM ═════════════════════════════════════════════════════════
  let allEvents = [];
  let evTimeFilter = 'all';
  let evTypeFilter = 'all';

  const EVENT_TYPE_COLORS = {
    'Party':'#F5A623','Festival':'#8B5CF6','Konzert':'#EC4899',
    'Retreat':'#22C55E','Workshop':'#F97316','Sport':'#06B6D4',
    'Markt':'#EF4444','Sonstiges':'#6B7280'
  };
  const EVENT_TYPE_EMOJIS = {
    'Party':'🎊','Festival':'🎪','Konzert':'🎵','Retreat':'🧘',
    'Workshop':'🛠','Sport':'⚽','Markt':'🛒','Sonstiges':'📌'
  };

  async function loadEvents() {
    try {
      const now = new Date();
      const snap = await db.collection('events')
        .where('date_end', '>=', now)
        .orderBy('date_end', 'asc')
        .get();
      allEvents = snap.docs.map(function(d) { return Object.assign({id:d.id}, d.data()); });
      renderEvents();
    } catch(e) {
      console.error('loadEvents error', e);
      document.getElementById('eventsList').innerHTML =
        '<div style="text-align:center;padding:40px;color:var(--text-3)">Fehler beim Laden.</div>';
    }
  }

  function setEventTime(val) {
    evTimeFilter = val;
    document.querySelectorAll('[id^="evChip-"]').forEach(function(el){ el.classList.remove('active'); });
    var chip = document.getElementById('evChip-' + val);
    if (chip) chip.classList.add('active');
    renderEvents();
  }

  function setEventType(val) {
    evTypeFilter = val;
    document.querySelectorAll('[id^="evType-"]').forEach(function(el){ el.classList.remove('active'); });
    var key = val === 'all' ? 'all' : val.toLowerCase();
    var chip = document.getElementById('evType-' + key);
    if (chip) chip.classList.add('active');
    renderEvents();
  }

  function renderEvents() {
    var now = new Date();
    var todayEnd = new Date(); todayEnd.setHours(23,59,59);
    var weekEnd = new Date(); weekEnd.setDate(weekEnd.getDate()+7);
    var monthEnd = new Date(); monthEnd.setDate(monthEnd.getDate()+30);

    var filtered = allEvents.filter(function(ev) {
      var start = ev.date_start ? ev.date_start.toDate() : null;
      if (!start) return false;
      if (evTimeFilter === 'today') return start <= todayEnd;
      if (evTimeFilter === 'week')  return start <= weekEnd;
      if (evTimeFilter === 'month') return start <= monthEnd;
      return true;
    });

    if (evTypeFilter !== 'all') {
      filtered = filtered.filter(function(ev){ return ev.type === evTypeFilter; });
    }

    var sub = filtered.length === 0 ? 'Keine Events gefunden' :
              filtered.length === 1 ? '1 Event' : filtered.length + ' Events';
    document.getElementById('eventsSubtitle').textContent = sub;

    if (filtered.length === 0) {
      document.getElementById('eventsList').innerHTML =
        '<div style="text-align:center;padding:60px 20px;color:var(--text-3);font-size:15px">🎪<br><br>Keine Events für diesen Filter</div>';
      return;
    }

    document.getElementById('eventsList').innerHTML = filtered.map(function(ev) {
      var start = ev.date_start ? ev.date_start.toDate() : null;
      var dateStr = start ? start.toLocaleDateString('de-DE',{weekday:'short',day:'numeric',month:'short'}) : '';
      var timeStr = start ? start.toLocaleTimeString('de-DE',{hour:'2-digit',minute:'2-digit'}) : '';
      var emoji = EVENT_TYPE_EMOJIS[ev.type] || '📌';
      var typeClass = 'type-' + (ev.type||'').toLowerCase();
      var isFull = ev.has_signup && ev.capacity > 0 && (ev.signups_count||0) >= ev.capacity;
      var isCancelled = ev.status === 'cancelled';
      var priceStr = ev.is_paid ? (ev.ticket_price ? Number(ev.ticket_price).toLocaleString('de-DE') + ' ₲' : 'Kostenpflichtig') : 'Kostenlos';
      var spotsLeft = ev.has_signup && ev.capacity > 0 ? (ev.capacity - (ev.signups_count||0)) + ' ' + t('ev_spots') : '';
      var statusHtml = isCancelled ? '<span class=\"event-status-cancelled\">'+t('ev_cancelled')+'</span>' :
                       isFull ? '<span class=\"event-status-full\">'+t('ev_full')+'</span>' :
                       spotsLeft ? '<span class="event-spots">' + spotsLeft + '</span>' : '';

      return '<div class="event-card" onclick="showEventDetail(\'' + ev.id + '\')">'
        + '<div class="event-card-banner ' + typeClass + '"></div>'
        + '<div class="event-card-body">'
        + '<div class="event-card-top">'
        + '<div class="event-card-title">' + (ev.title||'') + '</div>'
        + '<div class="event-card-type">' + emoji + ' ' + (ev.type||'') + '</div>'
        + '</div>'
        + '<div class="event-card-meta">'
        + '<div class="event-meta-item"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" width="12" height="12"><rect x="3" y="4" width="18" height="18" rx="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/></svg> '
        + dateStr + (timeStr ? ' · ' + timeStr : '') + '</div>'
        + '<div class="event-meta-item"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" width="12" height="12"><path d="M21 10c0 7-9 13-9 13S3 17 3 10a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg> '
        + (ev.city||'') + '</div>'
        + '</div>'
        + '<div class="event-card-desc">' + (ev.description||'') + '</div>'
        + '<div class="event-card-footer">'
        + '<span class="event-price">' + priceStr + '</span>'
        + statusHtml
        + '</div>'
        + '</div></div>';
    }).join('');
  }

  var _currentEventId = null;
  function showEventDetail(id, source) {
    _currentEventId = id;
    if (source) _evDetailSource = source;
    var ev = allEvents.find(function(e){ return e.id === id; });
    if (!ev) return;
    var start = ev.date_start ? ev.date_start.toDate() : null;
    var end   = ev.date_end   ? ev.date_end.toDate()   : null;
    var emoji = EVENT_TYPE_EMOJIS[ev.type] || '📌';
    var color = EVENT_TYPE_COLORS[ev.type] || '#F5A623';

    document.getElementById('eventDetailHeader').style.background =
      'linear-gradient(150deg,' + color + ' 0%,' + color + 'cc 100%)';
    document.getElementById('evDetailTypeBadge').textContent = emoji + ' ' + (ev.type||'');
    document.getElementById('evDetailTitle').textContent = ev.title||'';

    var dateStr    = start ? start.toLocaleDateString('de-DE',{weekday:'long',day:'numeric',month:'long',year:'numeric'}) : '';
    var timeStr    = start ? start.toLocaleTimeString('de-DE',{hour:'2-digit',minute:'2-digit'}) : '';
    var timeEndStr = end   ? end.toLocaleTimeString('de-DE',{hour:'2-digit',minute:'2-digit'})   : '';

    document.getElementById('evDetailMeta').innerHTML =
      '<div class="event-detail-meta">📅 ' + dateStr + '</div>'
      + (timeStr ? '<div class="event-detail-meta">🕐 ' + timeStr + (timeEndStr ? ' – ' + timeEndStr : '') + '</div>' : '')
      + '<div class="event-detail-meta">📍 ' + (ev.city||'') + (ev.address ? ', ' + ev.address : '') + '</div>';

    var isFull = ev.has_signup && ev.capacity > 0 && (ev.signups_count||0) >= ev.capacity;
    var isCancelled = ev.status === 'cancelled';
    var priceStr = ev.is_paid ? (ev.ticket_price ? Number(ev.ticket_price).toLocaleString('de-DE') + ' Guaraní' : 'Kostenpflichtig') : 'Kostenlos';

    var bodyHtml = '<div style="background:var(--card);border-radius:var(--radius-lg);padding:16px;margin-bottom:14px">'
      + '<p style="font-size:15px;line-height:1.6;color:var(--text-1);margin:0">' + (ev.description||'') + '</p>'
      + '</div>';

    bodyHtml += '<div style="background:var(--card);border-radius:var(--radius-lg);padding:16px;margin-bottom:14px">';
    bodyHtml += '<div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:8px">'
      + '<span style="font-size:13px;color:var(--text-2)">Eintritt</span>'
      + '<span style="font-size:15px;font-weight:700;color:var(--yellow)">' + priceStr + '</span></div>';
    if (ev.has_signup && ev.capacity > 0) {
      bodyHtml += '<div style="display:flex;justify-content:space-between;align-items:center">'
        + '<span style="font-size:13px;color:var(--text-2)">Kapazität</span>'
        + '<span style="font-size:15px;font-weight:700">' + (ev.signups_count||0) + ' / ' + ev.capacity + '</span></div>';
    }
    bodyHtml += '</div>';

    if (ev.rules) {
      bodyHtml += '<div style="background:var(--card);border-radius:var(--radius-lg);padding:16px;margin-bottom:14px">'
        + '<div style="font-size:12px;font-weight:700;color:var(--text-2);text-transform:uppercase;letter-spacing:0.5px;margin-bottom:8px">Regeln</div>'
        + '<p style="font-size:14px;color:var(--text-1);margin:0;line-height:1.5">' + ev.rules + '</p>'
        + '</div>';
    }

    if (ev.has_signup && !isCancelled) {
      var isSignedUp = currentUser && (ev.signups||[]).includes(currentUser.uid);
      if (isSignedUp) {
        bodyHtml += '<div style="display:flex;gap:8px;margin-bottom:14px">'
          + '<div style="flex:1;background:#ECFDF5;border-radius:var(--radius-lg);padding:14px;text-align:center;color:#22C55E;font-weight:700;font-size:14px">✅ Du bist angemeldet</div>'
          + '<button onclick="unsignupEvent(\'' + id + '\')" style="background:var(--surface-2);border:none;border-radius:var(--radius-lg);padding:14px 16px;font-size:14px;font-weight:600;color:var(--text-2);cursor:pointer">Abmelden</button>'
          + '</div>';
      } else if (isFull) {
        bodyHtml += '<div style="background:#FEE2E2;border-radius:var(--radius-lg);padding:16px;text-align:center;color:#EF4444;font-weight:700;margin-bottom:14px">Ausgebucht</div>';
      } else if (currentUser) {
        bodyHtml += '<button onclick="signupEvent(\'' + id + '\')" style="width:100%;background:var(--yellow);border:none;border-radius:var(--radius-lg);padding:16px;font-size:16px;font-weight:700;color:white;cursor:pointer;margin-bottom:14px">' + t('ev_signup_btn') + '</button>';
      } else {
        bodyHtml += '<button onclick="showScreen(\'screenAuth\')" style="width:100%;background:var(--yellow);border:none;border-radius:var(--radius-lg);padding:16px;font-size:16px;font-weight:700;color:white;cursor:pointer;margin-bottom:14px">' + t('ev_login_signup') + '</button>';
      }
    }

    if (currentUser && ev.created_by === currentUser.uid) {
      bodyHtml += '<div style="display:flex;gap:8px;margin-top:0">'
        + '<button onclick="cancelEvent(\'' + id + '\')" style="flex:1;background:var(--surface-2);border:none;border-radius:var(--radius-lg);padding:14px;font-size:14px;font-weight:600;color:var(--text-2);cursor:pointer">' + t('ev_cancel_btn') + '</button>'
        + '<button onclick="deleteEvent(\'' + id + '\')" style="flex:1;background:#FEE2E2;border:none;border-radius:var(--radius-lg);padding:14px;font-size:14px;font-weight:600;color:#EF4444;cursor:pointer">' + t('ev_delete_btn') + '</button>'
        + '</div>';
    }

    document.getElementById('evDetailBody').innerHTML = bodyHtml;
    showScreen('screenEventDetail');
  }

  function showEventForm() {
    if (!currentUser) { showScreen('screenAuth'); return; }
    ['evFormTitle','evFormDesc','evFormCity','evFormAddress','evFormPrice','evFormCapacity','evFormRules'].forEach(function(id){
      var el = document.getElementById(id);
      if (el) el.value = '';
    });
    document.getElementById('evFormType').value = '';
    document.getElementById('evFormDate').value = '';
    document.getElementById('evFormTimeStart').value = '';
    document.getElementById('evFormTimeEnd').value = '';
    document.getElementById('evFormIsPaid').checked = false;
    document.getElementById('evFormHasSignup').checked = false;
    document.getElementById('evFormPriceRow').style.display = 'none';
    document.getElementById('evFormCapacityRow').style.display = 'none';
    document.getElementById('evFormError').style.display = 'none';
    document.getElementById('evFormPhotoGrid').innerHTML = '';
    document.getElementById('evLocationStatus').style.display = 'none';
    evPendingPhotos = [];
    _evLat = null; _evLng = null;
    showScreen('screenEventForm');
    if (_evMapPicker) { setTimeout(function(){ _evMapPicker.resize(); }, 200); }
  }

  let _evLat = null, _evLng = null;
  let evPendingPhotos = [];
  let _evMapPicker = null;

  function evPickLocation() {
    if (navigator.geolocation) {
      document.getElementById('evLocationStatus').style.display = 'block';
      document.getElementById('evLocationStatus').textContent = 'Standort wird ermittelt...';
      navigator.geolocation.getCurrentPosition(function(pos) {
        _evLat = pos.coords.latitude;
        _evLng = pos.coords.longitude;
        document.getElementById('evLocationStatus').textContent = '📍 Standort gesetzt: ' + _evLat.toFixed(4) + ', ' + _evLng.toFixed(4);
        initEvMap(_evLat, _evLng);
      }, function() {
        document.getElementById('evLocationStatus').textContent = 'Standort konnte nicht ermittelt werden.';
      });
    }
  }

  function initEvMap(lat, lng) {
    if (!_evMapPicker) {
      _evMapPicker = new maplibregl.Map({
        container: 'evMapPicker',
        style: ML_STYLE,
        center: [lng, lat],
        zoom: 14,
        interactive: true,
        dragRotate: false,
        attributionControl: false
      });
      _evMapPicker.dragRotate.disable();
      _evMapPicker.touchZoomRotate.disableRotation();
      var marker = new maplibregl.Marker({ color: '#F5A623', draggable: true })
        .setLngLat([lng, lat])
        .addTo(_evMapPicker);
      marker.on('dragend', function() {
        var lngLat = marker.getLngLat();
        _evLat = lngLat.lat;
        _evLng = lngLat.lng;
        document.getElementById('evLocationStatus').textContent = '📍 ' + _evLat.toFixed(4) + ', ' + _evLng.toFixed(4);
      });
      _evMapPicker.on('click', function(e) {
        _evLat = e.lngLat.lat;
        _evLng = e.lngLat.lng;
        marker.setLngLat([_evLng, _evLat]);
        document.getElementById('evLocationStatus').textContent = '📍 ' + _evLat.toFixed(4) + ', ' + _evLng.toFixed(4);
      });
    } else {
      _evMapPicker.setCenter([lng, lat]);
      _evMapPicker.resize();
    }
  }

  function handleEvPhotos(event) {
    evPendingPhotos = Array.from(event.target.files);
    var grid = document.getElementById('evFormPhotoGrid');
    grid.innerHTML = evPendingPhotos.map(function(f, i) {
      var url = URL.createObjectURL(f);
      return '<div style="position:relative;aspect-ratio:1;border-radius:10px;overflow:hidden">'
        + '<img src="' + url + '" style="width:100%;height:100%;object-fit:cover">'
        + '<button onclick="removeEvPhoto(' + i + ')" style="position:absolute;top:4px;right:4px;width:22px;height:22px;background:rgba(0,0,0,0.6);border:none;border-radius:50%;color:white;font-size:14px;line-height:1;cursor:pointer;display:flex;align-items:center;justify-content:center">×</button>'
        + '</div>';
    }).join('');
  }

  function removeEvPhoto(index) {
    evPendingPhotos.splice(index, 1);
    handleEvPhotos({ target: { files: evPendingPhotos } });
  }

  async function uploadEvPhotos(eventId) {
    if (!evPendingPhotos.length) return;
    var progress = document.getElementById('evPhotoProgress');
    progress.style.display = 'block';
    for (var i = 0; i < evPendingPhotos.length; i++) {
      var file = evPendingPhotos[i];
      progress.textContent = 'Foto ' + (i+1) + ' von ' + evPendingPhotos.length + ' wird hochgeladen...';
      var filename = Date.now() + '_' + i + '.' + file.name.split('.').pop();
      var ref = storage.ref('events/' + eventId + '/' + filename);
      var snap = await ref.put(file);
      var url = await snap.ref.getDownloadURL();
      await db.collection('events').doc(eventId).update({
        photos: firebase.firestore.FieldValue.arrayUnion(url)
      });
    }
    progress.textContent = 'Fotos hochgeladen!';
  }

  async function submitEvent() {
    var title = document.getElementById('evFormTitle').value.trim();
    var type  = document.getElementById('evFormType').value;
    var desc  = document.getElementById('evFormDesc').value.trim();
    var date  = document.getElementById('evFormDate').value;
    var city  = document.getElementById('evFormCity').value.trim();
    var errEl = document.getElementById('evFormError');

    if (!title || !type || !desc || !date || !city) {
      errEl.textContent = 'Bitte alle Pflichtfelder (*) ausfüllen.';
      errEl.style.display = 'block';
      return;
    }

    var btn = document.getElementById('evFormSubmitBtn');
    btn.disabled = true; btn.textContent = t('ev_publishing');

    try {
      var tStart = document.getElementById('evFormTimeStart').value || '00:00';
      var tEnd   = document.getElementById('evFormTimeEnd').value   || '23:59';
      var dateStart = new Date(date + 'T' + tStart);
      var dateEnd   = new Date(date + 'T' + tEnd);
      var isPaid    = document.getElementById('evFormIsPaid').checked;
      var hasSignup = document.getElementById('evFormHasSignup').checked;

      var evRef = await db.collection('events').add({
        title: title, type: type, description: desc,
        date_start: dateStart, date_end: dateEnd,
        city: city, address: document.getElementById('evFormAddress').value.trim() || null,
        lat: _evLat, lng: _evLng,
        is_paid: isPaid,
        ticket_price: isPaid ? (Number(document.getElementById('evFormPrice').value)||0) : 0,
        has_signup: hasSignup,
        capacity: hasSignup ? (Number(document.getElementById('evFormCapacity').value)||0) : 0,
        signups_count: 0, signups: [],
        photos: [],
        rules: document.getElementById('evFormRules').value.trim() || null,
        status: 'open',
        created_by: currentUser.uid,
        created_at: new Date()
      });

      if (evPendingPhotos.length) await uploadEvPhotos(evRef.id);
      showScreen('screenEvents');
      loadEvents();
    } catch(e) {
      errEl.textContent = 'Fehler: ' + e.message;
      errEl.style.display = 'block';
      btn.disabled = false;
      btn.textContent = t('ev_publish');
    }
  }

  async function signupEvent(id) {
    if (!currentUser) return;
    try {
      var ref = db.collection('events').doc(id);
      await db.runTransaction(async function(tx) {
        var doc = await tx.get(ref);
        var data = doc.data();
        if (data.has_signup && data.capacity > 0 && (data.signups_count||0) >= data.capacity) throw new Error('Ausgebucht');
        var subs = data.signups || [];
        if (subs.includes(currentUser.uid)) throw new Error('Bereits angemeldet');
        tx.update(ref, { signups_count: (data.signups_count||0) + 1, signups: subs.concat([currentUser.uid]) });
      });
      var ev = allEvents.find(function(e){ return e.id === id; });
      if (ev) ev.signups_count = (ev.signups_count||0) + 1;
      showToast(t('ev_signup_ok'));
      showEventDetail(id);
    } catch(e) {
      alert(e.message === 'Ausgebucht' ? 'Leider ausgebucht.' : e.message === 'Bereits angemeldet' ? 'Du bist bereits angemeldet.' : 'Fehler: ' + e.message);
    }
  }

  async function deleteEvent(id) {
    if (!confirm(t('ev_delete_confirm'))) return;
    try {
      await db.collection('events').doc(id).delete();
      allEvents = allEvents.filter(function(e){ return e.id !== id; });
      showToast(t('ev_delete_ok'));
      if (_evDetailSource === 'profil') {
        setNav('navProfil'); showScreen('screenProfil'); loadMyEvents();
      } else {
        setNav('navEvents'); showScreen('screenEvents'); renderEvents();
      }
    } catch(e) { alert('Fehler: ' + e.message); }
  }

  async function cancelEvent(id) {
    if (!confirm('Event wirklich absagen?')) return;
    try {
      await db.collection('events').doc(id).update({ status: 'cancelled' });
      var ev = allEvents.find(function(e){ return e.id === id; });
      if (ev) ev.status = 'cancelled';
      showToast('Event wurde abgesagt.');
      showScreen('screenEvents');
      renderEvents();
    } catch(e) { alert('Fehler: ' + e.message); }
  }
  // ══ END EVENTS SYSTEM ══════════════════════════════════════════════════════

  // ── EVENTS ON MAP ──────────────────────────────────────────────────────────
  let _showEventsOnMap = false;
  let _evDetailSource = 'events'; // 'events' or 'map'
  let _eventsMapLayer = null;
  let _eventsMapMarkers = [];

  function toggleEventsOnMap() {
    _showEventsOnMap = !_showEventsOnMap;
    var btn = document.getElementById('eventsMapBtn');
    if (btn) btn.classList.toggle('active-open', _showEventsOnMap);
    if (_showEventsOnMap) {
      renderEventsOnMap();
    } else {
      clearEventsFromMap();
    }
  }

  function clearEventsFromMap() {
    _eventsMapMarkers.forEach(function(m){ m.remove(); });
    _eventsMapMarkers = [];
  }

  function buildEvPopup(evId, title, city, type) {
    return '<div class="map-popup" data-evid="' + evId + '" onclick="evMarkerClick(this.getAttribute(\'data-evid\'))" style="cursor:pointer">'
      + '<div class="map-popup-name">' + title + '</div>'
      + '<div class="map-popup-city">' + city + ' &middot; ' + type + '</div>'
      + '<div class="map-popup-cat" style="color:var(--yellow);margin-top:2px">Zum Event →</div>'
      + '</div>';
  }

  async function renderEventsOnMap() {
    clearEventsFromMap();
    if (!maplibreMap || !mapLoaded) return;
    var events = allEvents.length ? allEvents : [];
    if (!events.length) {
      try {
        var now = new Date();
        var snap = await db.collection('events').where('date_end','>=',now).get();
        events = snap.docs.map(function(d){ return Object.assign({id:d.id}, d.data()); });
        allEvents = events;
      } catch(e) { return; }
    }
    events.forEach(function(ev) {
      if (!ev.lat || !ev.lng) return;
      var color = EVENT_TYPE_COLORS[ev.type] || '#F5A623';
      var emoji = EVENT_TYPE_EMOJIS[ev.type] || '📅';
      var evId = ev.id;

      // Circle marker
      var el = document.createElement('div');
      el.style.cssText = 'width:38px;height:38px;border-radius:50%;background:'+color+';border:3px solid white;box-shadow:0 2px 8px rgba(0,0,0,0.3);cursor:pointer;display:flex;align-items:center;justify-content:center;font-size:18px;';
      el.textContent = emoji;

      var marker = new maplibregl.Marker({ element: el, anchor: 'center' })
        .setLngLat([ev.lng, ev.lat])
        .addTo(maplibreMap);

      // Popup like listings - click popup → detail
      var popup = new maplibregl.Popup({ closeButton: false, maxWidth: '220px', offset: 20 })
        .setHTML(buildEvPopup(evId, ev.title||'', ev.city||'', ev.type||''));
      marker.setPopup(popup);

      el.addEventListener('click', function(e) {
        e.stopPropagation();
        marker.togglePopup();
      });

      _eventsMapMarkers.push(marker);
    });
  }

  function evDetailBack() {
    if (_evDetailSource === 'map') {
      setNav('navMap');
      showScreen('screenMap');
      setTimeout(function(){ if (maplibreMap) maplibreMap.resize(); }, 100);
    } else if (_evDetailSource === 'profil') {
      setNav('navProfil');
      showScreen('screenProfil');
    } else {
      setNav('navEvents');
      showScreen('screenEvents');
    }
  }

  function evMarkerClick(id) {
    _evDetailSource = 'map';
    if (allEvents.length) {
      showEventDetail(id);
    } else {
      loadEvents().then(function(){ showEventDetail(id); });
    }
  }
  // ── END EVENTS ON MAP ──────────────────────────────────────────────────────

  // ── PROFIL: MEINE EVENTS & ANMELDUNGEN ─────────────────────────────────────

  function toggleMyEvents() {
    var panel = document.getElementById('myEventsPanel');
    var chevron = document.getElementById('myEventsChevron');
    var open = panel.style.display === 'none';
    panel.style.display = open ? 'block' : 'none';
    chevron.style.transform = open ? 'rotate(90deg)' : '';
    if (open) loadMyEvents();
  }

  function toggleMySignups() {
    var panel = document.getElementById('mySignupsPanel');
    var chevron = document.getElementById('mySignupsChevron');
    var open = panel.style.display === 'none';
    panel.style.display = open ? 'block' : 'none';
    chevron.style.transform = open ? 'rotate(90deg)' : '';
    if (open) loadMySignups();
  }

  async function loadMyEvents() {
    if (!currentUser) return;
    var list = document.getElementById('myEventsList');
    var countEl = document.getElementById('myEventsCount');
    list.innerHTML = '<div style="font-size:13px;color:var(--text-3);padding:8px 0">Wird geladen...</div>';
    try {
      var snap = await db.collection('events').where('created_by','==',currentUser.uid).get();
      var events = snap.docs.map(function(d){ return Object.assign({id:d.id}, d.data()); });
      events.sort(function(a,b){
        var da = a.date_start ? a.date_start.toDate() : new Date(0);
        var db2 = b.date_start ? b.date_start.toDate() : new Date(0);
        return db2 - da;
      });
      countEl.textContent = events.length === 0 ? t('my_events_count_0') :
        events.length === 1 ? t('my_events_count_1') : events.length + ' ' + t('nav_events');
      if (events.length === 0) {
        list.innerHTML = '<div style="font-size:13px;color:var(--text-3);padding:8px 0">Du hast noch keine Events erstellt.</div>';
        return;
      }
      list.innerHTML = events.map(function(ev) {
        var start = ev.date_start ? ev.date_start.toDate() : null;
        var dateStr = start ? start.toLocaleDateString('de-DE',{day:'numeric',month:'short',year:'numeric'}) : '';
        var isCancelled = ev.status === 'cancelled';
        var signups = ev.signups_count || 0;
        var cap = ev.capacity || 0;
        var spotsStr = ev.has_signup ? (cap > 0 ? signups + '/' + cap + ' Anmeldungen' : signups + ' Anmeldungen') : '';
        return '<div style="padding:10px 0;border-bottom:1px solid var(--border)">'
          + '<div style="display:flex;justify-content:space-between;align-items:flex-start;gap:8px">'
          + '<div style="flex:1">'
          + '<div style="font-size:14px;font-weight:700;color:var(--text-1);margin-bottom:2px">' + (ev.title||'') + '</div>'
          + '<div style="font-size:12px;color:var(--text-3)">' + dateStr + (ev.city ? ' · ' + ev.city : '') + '</div>'
          + (spotsStr ? '<div style="font-size:12px;color:var(--yellow);margin-top:2px;font-weight:600">' + spotsStr + '</div>' : '')
          + '</div>'
          + '<div style="display:flex;flex-direction:column;align-items:flex-end;gap:4px">'
          + (isCancelled ? '<span style="font-size:10px;font-weight:700;background:#EF4444;color:white;padding:2px 7px;border-radius:8px">Abgesagt</span>' : '<span style="font-size:10px;font-weight:700;background:#22C55E;color:white;padding:2px 7px;border-radius:8px">Aktiv</span>')
          + '<button onclick="showEventDetailFromProfile(\'' + ev.id + '\')" style="font-size:11px;color:var(--yellow);background:none;border:none;cursor:pointer;font-weight:600;padding:0">Details →</button>'
          + '<button onclick="deleteEvent(\'' + ev.id + '\')" style="font-size:11px;color:#EF4444;background:none;border:none;cursor:pointer;font-weight:600;padding:0">Löschen</button>'
          + '</div>'
          + '</div>'
          + '</div>';
      }).join('');
    } catch(e) {
      list.innerHTML = '<div style="font-size:13px;color:#EF4444;padding:8px 0">Fehler beim Laden.</div>';
    }
  }

  async function loadMySignups() {
    if (!currentUser) return;
    var list = document.getElementById('mySignupsList');
    var countEl = document.getElementById('mySignupsCount');
    list.innerHTML = '<div style="font-size:13px;color:var(--text-3);padding:8px 0">Wird geladen...</div>';
    try {
      var snap = await db.collection('events').where('signups','array-contains',currentUser.uid).get();
      var events = snap.docs.map(function(d){ return Object.assign({id:d.id}, d.data()); });
      events.sort(function(a,b){
        var da = a.date_start ? a.date_start.toDate() : new Date(0);
        var db2 = b.date_start ? b.date_start.toDate() : new Date(0);
        return da - db2;
      });
      countEl.textContent = events.length === 0 ? t('my_signups_count_0') :
        events.length === 1 ? '1 Event' : events.length + ' Events';
      if (events.length === 0) {
        list.innerHTML = '<div style="font-size:13px;color:var(--text-3);padding:8px 0">Du hast dich noch bei keinem Event angemeldet.</div>';
        return;
      }
      list.innerHTML = events.map(function(ev) {
        var start = ev.date_start ? ev.date_start.toDate() : null;
        var dateStr = start ? start.toLocaleDateString('de-DE',{weekday:'short',day:'numeric',month:'short'}) : '';
        var timeStr = start ? start.toLocaleTimeString('de-DE',{hour:'2-digit',minute:'2-digit'}) : '';
        var isCancelled = ev.status === 'cancelled';
        var isPast = start && start < new Date();
        var emoji = EVENT_TYPE_EMOJIS[ev.type] || '📅';
        var color = EVENT_TYPE_COLORS[ev.type] || '#F5A623';
        return '<div style="padding:10px 0;border-bottom:1px solid var(--border);' + (isCancelled ? 'opacity:0.7' : '') + '">'
          + '<div style="display:flex;gap:10px;align-items:flex-start">'
          + '<div style="width:36px;height:36px;border-radius:50%;background:' + (isCancelled ? '#EF4444' : color) + ';display:flex;align-items:center;justify-content:center;font-size:16px;flex-shrink:0">' + (isCancelled ? '❌' : emoji) + '</div>'
          + '<div style="flex:1;min-width:0">'
          + '<div style="font-size:14px;font-weight:700;color:var(--text-1);margin-bottom:2px">' + (ev.title||'') + '</div>'
          + '<div style="font-size:12px;color:var(--text-3)">' + dateStr + (timeStr ? ' · ' + timeStr : '') + (ev.city ? ' · ' + ev.city : '') + '</div>'
          + (isCancelled ? '<div style="font-size:12px;font-weight:700;color:#EF4444;margin-top:3px">⚠️ Dieses Event wurde abgesagt</div>' : '')
          + (isPast && !isCancelled ? '<div style="font-size:11px;color:var(--text-3);margin-top:2px">Vergangen</div>' : '')
          + '</div>'
          + '<div style="display:flex;flex-direction:column;align-items:flex-end;gap:4px;flex-shrink:0">'
          + (!isCancelled ? '<button onclick="showEventDetailFromProfile(\'' + ev.id + '\')" style="font-size:11px;color:var(--yellow);background:none;border:none;cursor:pointer;font-weight:600;padding:0">Details →</button>' : '')
          + '<button onclick="unsignupEvent(\'' + ev.id + '\')" style="font-size:11px;color:var(--text-3);background:none;border:none;cursor:pointer;font-weight:600;padding:0">Abmelden</button>'
          + '</div>'
          + '</div>'
          + '</div>';
      }).join('');
    } catch(e) {
      list.innerHTML = '<div style="font-size:13px;color:#EF4444;padding:8px 0">Fehler beim Laden.</div>';
    }
  }

  function showEventDetailFromProfile(id) {
    _evDetailSource = 'profil';
    if (allEvents.length) {
      var ev = allEvents.find(function(e){ return e.id === id; });
      if (ev) { showEventDetail(id); return; }
    }
    loadEvents().then(function(){ showEventDetail(id); });
  }

  async function unsignupEvent(id) {
    if (!currentUser) return;
    if (!confirm(t('ev_unsignup_confirm'))) return;
    try {
      var ref = db.collection('events').doc(id);
      await db.runTransaction(async function(tx) {
        var doc = await tx.get(ref);
        var data = doc.data();
        var subs = (data.signups || []).filter(function(uid){ return uid !== currentUser.uid; });
        tx.update(ref, { signups_count: Math.max(0, (data.signups_count||1) - 1), signups: subs });
      });
      // Update allEvents cache
      var ev = allEvents.find(function(e){ return e.id === id; });
      if (ev) {
        ev.signups_count = Math.max(0, (ev.signups_count||1) - 1);
        ev.signups = (ev.signups||[]).filter(function(uid){ return uid !== currentUser.uid; });
      }
      showToast(t('ev_unsignup_ok'));
      loadMySignups();
    } catch(e) { alert('Fehler: ' + e.message); }
  }
  // ── END PROFIL EVENTS ──────────────────────────────────────────────────────

  // ══ KOORDINATEN-EDITOR (nur Admin) ════════════════════════════════════════
  var _coordListingId = null;
  var _coordMap = null;
  var _coordMarker = null;
  var _coordLat = null;
  var _coordLng = null;

  function openCoordEditor(listingId) {
    var l = allListings.find(function(x){ return x.id === listingId; });
    if (!l) return;
    _coordListingId = listingId;
    _coordLat = l.lat || -25.2867;
    _coordLng = l.lng || -57.6470;

    document.getElementById('coordEditorName').textContent = l.name || 'Koordinaten setzen';
    document.getElementById('coordEditorSub').textContent = (l.city || '') + (l.address ? ' · ' + l.address : '');
    document.getElementById('coordLat').textContent = _coordLat ? _coordLat.toFixed(6) : '–';
    document.getElementById('coordLng').textContent = _coordLng ? _coordLng.toFixed(6) : '–';

    showScreen('screenCoordEditor');

    setTimeout(function() {
      if (!_coordMap) {
        _coordMap = new maplibregl.Map({
          container: 'coordEditorMap',
          style: ML_STYLE,
          center: [_coordLng, _coordLat],
          zoom: 16,
          attributionControl: false
        });
        _coordMap.dragRotate.disable();
        _coordMap.touchZoomRotate.disableRotation();

        _coordMarker = new maplibregl.Marker({ color: '#1D4ED8', draggable: true })
          .setLngLat([_coordLng, _coordLat])
          .addTo(_coordMap);

        _coordMarker.on('dragend', function() {
          var pos = _coordMarker.getLngLat();
          _coordLat = pos.lat;
          _coordLng = pos.lng;
          document.getElementById('coordLat').textContent = _coordLat.toFixed(6);
          document.getElementById('coordLng').textContent = _coordLng.toFixed(6);
        });

        _coordMap.on('click', function(e) {
          _coordLat = e.lngLat.lat;
          _coordLng = e.lngLat.lng;
          _coordMarker.setLngLat([_coordLng, _coordLat]);
          document.getElementById('coordLat').textContent = _coordLat.toFixed(6);
          document.getElementById('coordLng').textContent = _coordLng.toFixed(6);
        });
      } else {
        _coordMap.resize();
        _coordMap.setCenter([_coordLng, _coordLat]);
        _coordMap.setZoom(16);
        _coordMarker.setLngLat([_coordLng, _coordLat]);
      }
    }, 150);
  }

  function closeCoordEditor() {
    showScreen('screenDetail');
  }

  async function saveCoordinates() {
    if (!_coordListingId || !_coordLat || !_coordLng) return;
    var btn = document.getElementById('coordSaveBtn');
    btn.disabled = true;
    btn.textContent = 'Wird gespeichert...';
    try {
      await db.collection('listings').doc(_coordListingId).update({
        lat: _coordLat,
        lng: _coordLng
      });
      // Update local cache
      var l = allListings.find(function(x){ return x.id === _coordListingId; });
      if (l) { l.lat = _coordLat; l.lng = _coordLng; }
      showToast('✅ Koordinaten gespeichert!');
      closeCoordEditor();
      if (maplibreMap && mapLoaded) renderMap();
    } catch(e) {
      alert('Fehler: ' + e.message);
      btn.disabled = false;
      btn.textContent = 'Koordinaten speichern';
    }
  }
  // ══ END KOORDINATEN-EDITOR ═════════════════════════════════════════════════

  auth.onAuthStateChanged(async user => {
    currentUser = user;
    if (user) {
      let displayName = user.email.split('@')[0];
      let avatarUrl = null;
      try {
        const userDoc = await db.collection('users').doc(user.uid).get();
        if (userDoc.exists) {
          const data = userDoc.data();
          displayName = data.username || data.name || displayName;
          avatarUrl = data.avatar_url || null;
        }
      } catch(e) {}
      const initial = displayName.charAt(0).toUpperCase();
      setAvatarDisplay(avatarUrl, initial);
      document.getElementById('profilName').textContent = displayName;
      document.getElementById('profilEmail').textContent = user.email;
      updateGreeting();
      if (user.email === ADMIN_EMAIL) document.getElementById('adminRow').style.display = 'flex';
      updateGreeting(); setNav('navHome'); showScreen('screenHome'); loadListings(); renderLegalScreens();
      var sp=document.getElementById('splash'); if(sp) sp.classList.add('hidden');
    } else { showScreen('screenAuth'); var sp=document.getElementById('splash'); if(sp) sp.classList.add('hidden'); }
  });

  function updateGreeting() {
    const searchEl = document.querySelector('#searchInput');
    if (searchEl) searchEl.placeholder = t('search_placeholder');
    const h = new Date().getHours();
    const el = document.getElementById('headerGreeting');
    if (!el) return;
    const rawName = currentUser ? (document.getElementById('profilName')?.textContent||currentUser.email.split('@')[0]||'') : '';
    const name = rawName && rawName !== '-' ? rawName.split(' ')[0] : '';
    const suffix = name ? ', ' + name + '!' : '!';
    if (h >= 5 && h < 12) el.textContent = t('greet_morning') + suffix;
    else if (h >= 12 && h < 18) el.textContent = t('greet_day') + suffix;
    else if (h >= 18 && h < 22) el.textContent = t('greet_evening') + suffix;
    else el.textContent = t('greet_night') + suffix;
  }

  function setAvatarDisplay(url, initial) {
    const headerAvatar = document.getElementById('headerAvatar');
    const profilAvatar = document.getElementById('profilAvatar');
    const deleteBtn = document.getElementById('avatarDeleteBtn');
    if (url) {
      headerAvatar.innerHTML = `<img src="${url}" style="width:100%;height:100%;object-fit:cover;border-radius:50%">`;
      profilAvatar.innerHTML = `<img src="${url}" style="width:100%;height:100%;object-fit:cover;border-radius:50%">`;
      if (deleteBtn) deleteBtn.style.display = 'flex';
    } else {
      headerAvatar.textContent = initial;
      profilAvatar.textContent = initial;
      if (deleteBtn) deleteBtn.style.display = 'none';
    }
  }

  async function loadListings() {
    try {
      // Zeige gecachte Daten sofort waehrend frische Daten geladen werden
      try {
        const cached = localStorage.getItem('buscar_listings');
        if (cached && allListings.length === 0) {
          allListings = JSON.parse(cached);
          buildCityChips();
          renderListings();
        }
      } catch(e) {}
      // Listings + Ratings PARALLEL laden (statt nacheinander)
      const [snap] = await Promise.all([
        db.collection('listings').where('verified', '==', true).get(),
        loadAllRatings()
      ]);
      allListings = snap.docs.map(d => ({ id: d.id, ...d.data() }));
      // Cache aktualisieren
      try { localStorage.setItem('buscar_listings', JSON.stringify(allListings)); localStorage.setItem('buscar_listings_ts', Date.now()); } catch(e) {}
      buildCityChips();
      if (activeScreen === 'screenHome') renderListings();
      document.getElementById('offlineBanner').classList.remove('visible');
    } catch (err) {
      // Try loading from cache
      try {
        const cached = localStorage.getItem('buscar_listings');
        const ts = localStorage.getItem('buscar_listings_ts');
        if (cached) {
          allListings = JSON.parse(cached);
          const mins = Math.round((Date.now() - parseInt(ts)) / 60000);
          buildCityChips();
          renderListings();
          await loadAllRatings();
          renderListings();
          document.getElementById('offlineBanner').textContent = '📡 Offline – letzte Aktualisierung vor ' + (mins < 60 ? mins + ' Min.' : Math.round(mins/60) + ' Std.');
          document.getElementById('offlineBanner').classList.add('visible');
          return;
        }
      } catch(e) {}
      document.getElementById('listingsInner').innerHTML = '<div class="empty-state"><div class="empty-icon"><svg viewBox="0 0 24 24" fill="none" stroke-width="2" stroke-linecap="round"><circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/></svg></div><div class="empty-title">Verbindungsfehler</div></div>';
    }
  }

  // Listen for online/offline events
  window.addEventListener('online', () => { loadListings(); });
  window.addEventListener('offline', () => {
    document.getElementById('offlineBanner').textContent = '📡 Kein Internet – zeige gespeicherte Daten';
    document.getElementById('offlineBanner').classList.add('visible');
  });

  const ALL_PY_CITIES = [
    'Alle',
    // Großraum Asunción
    'Asunción','San Lorenzo','Luque','Capiatá','Lambaré','Fernando de la Mora',
    'Limpio','Nemby','Mariano Roque Alonso','Villa Elisa','Itauguá','Areguá',
    'Itá','San Antonio','Ypané','Guarambaré','Nueva Italia',
    // Cordillera
    'San Bernardino','Caacupé','Altos','Tobatí','Emboscada','Piribebuy','Eusebio Ayala',
    // Alto Paraná
    'Ciudad del Este','Hernandarias','Minga Guazú','Presidente Franco','Naranjal',
    // Itapúa
    'Encarnación','Hohenau','Obligado','Bella Vista Sur','Fram','Trinidad',
    'Coronel Bogado','Natalio','Capitán Miranda',
    // Caaguazú / Guairá / Paraguarí
    'Coronel Oviedo','Caaguazú','Villarrica','Paraguarí','Caazapá',
    // Concepción / Norte
    'Concepción','Pedro Juan Caballero','Horqueta','Bella Vista Norte',
    // Misiones / Ñeembucú
    'Pilar','San Ignacio','San Juan Bautista','Ayolas',
    // Amambay / Canindeyú
    'Capitán Bado','Salto del Guairá','Curuguaty',
    // San Pedro
    'San Pedro','Lima',
    // Chaco
    'Filadelfia','Loma Plata','Neuland','Mariscal Estigarribia','Benjamín Aceval',
    // Alto Paraguay
    'Fuerte Olimpo','Puerto Casado',
  ];

  // Filter state
  let activeSubcat = 'Alle';
  let activeMinStars = 0;
  let activeOpenNow = false;
  let activeDeal = false;
  let filterMode = 'sub';

  const subcats = {
    'kat-restaurants': ['Alle', 'Restaurant', 'Café', 'Bar', 'Parrilla', 'Fast Food', 'Bäckerei', 'Sonstiges'],
    'kat-dienstleistung': ['Alle', 'Arzt', 'Zahnarzt', 'Tierarzt', 'Anwalt', 'Notar', 'Bank', 'Handwerker', 'Schule', 'Übersetzung', 'Behörde', 'Sonstiges'],
    'kat-orte': ['Alle', 'Strand', 'Park', 'Museum', 'Kirche', 'Aussichtspunkt', 'Natur', 'Sonstiges'],
    'kat-unterkunft': ['Alle', 'Hotel', 'Hostel', 'Ferienwohnung', 'B&B', 'Camping', 'Sonstiges'],
    'kat-geschaefte': ['Alle', 'Supermarkt', 'Markt', 'Apotheke', 'Elektronik', 'Kleidung', 'Baumarkt', 'Sonstiges'],
    'kat-sport': ['Alle', 'Fitnessstudio', 'Kampfsport', 'Yoga & Pilates', 'Schwimmbad', 'Fußball', 'Tennis', 'Radfahren', 'Crossfit', 'Klettern', 'Sonstiges'],
    'kat-tankstelle': ['Alle', 'Tankstelle', 'Autowaschanlage', 'Reifenservice', 'Sonstiges'],
    'kat-beauty': ['Alle', 'Frisör', 'Beauty-Salon', 'Spa & Wellness', 'Nagelpflege', 'Barbershop', 'Massage', 'Sonstiges'],
    'kat-wechselstube': ['Alle', 'Wechselstube', 'Bank', 'Western Union', 'MoneyGram', 'Genossenschaft', 'Sonstiges'],
  };

  function openFilterSheet(mode) {
    filterMode = mode;
    const overlay = document.getElementById('filterSheetOverlay');
    const content = document.getElementById('filterSheetContent');
    overlay.classList.add('visible');

    if (mode === 'sub') {
      document.getElementById('filterSheetTitle').textContent = 'Unterkategorie';
      const cats = subcats[activeCategory] || [];
      content.innerHTML = `<div class="filter-section"><div class="filter-chips">${
        cats.map(s => `<div class="filter-chip${activeSubcat===s?' active':''}" onclick="selectFilterChip('${s}')">${tSubcat(s)}</div>`).join('')
      }</div></div><div class="filter-divider"></div>`;
    } else {
      document.getElementById('filterSheetTitle').textContent = 'Mindest-Bewertung';
      content.innerHTML = `<div class="filter-section"><div class="filter-section-label">Minimum Sterne</div><div class="filter-star-row">
        <div class="filter-star-btn${activeMinStars===0?' active':''}" onclick="selectStarFilter(0)">Alle</div>
        <div class="filter-star-btn${activeMinStars===3?' active':''}" onclick="selectStarFilter(3)">3+ ★</div>
        <div class="filter-star-btn${activeMinStars===4?' active':''}" onclick="selectStarFilter(4)">4+ ★</div>
        <div class="filter-star-btn${activeMinStars===5?' active':''}" onclick="selectStarFilter(5)">5 ★</div>
      </div></div>`;
    }
  }

  function toggleOpenNowFilter() {
    activeOpenNow = !activeOpenNow;
    const btn = document.getElementById('filterOpenBtn');
    if (activeOpenNow) { btn.classList.add('active-open'); }
    else { btn.classList.remove('active-open'); }
    document.getElementById('filterOpenLabel').textContent = t('open_now');
    renderListings();
  }

  function toggleDealFilter() {
    activeDeal = !activeDeal;
    const btn = document.getElementById('filterDealBtn');
    if (activeDeal) {
      btn.classList.add('active-open');
    } else {
      btn.classList.remove('active-open');
    }
    renderListings();
  }

  function selectFilterChip(val) {
    activeSubcat = val;
    document.querySelectorAll('#filterSheetContent .filter-chip').forEach(c => c.classList.toggle('active', c.textContent === val));
  }

  function selectStarFilter(val) {
    activeMinStars = val;
    document.querySelectorAll('.filter-star-btn').forEach(b => b.classList.remove('active'));
    event.target.classList.add('active');
  }

  function closeFilterSheet() {
    document.getElementById('filterSheetOverlay').classList.remove('visible');
  }

  function applyFilter() {
    closeFilterSheet();
    const subBtn = document.getElementById('filterSubBtn');
    const starBtn = document.getElementById('filterStarBtn');
    const subLabel = document.getElementById('filterSubLabel');
    const starLabel = document.getElementById('filterStarLabel');

    if (activeSubcat !== 'Alle') {
      subBtn.classList.add('active');
      subLabel.textContent = activeSubcat;
    } else {
      subBtn.classList.remove('active');
      subLabel.textContent = 'Unterkategorie';
    }

    if (activeMinStars > 0) {
      starBtn.classList.add('active');
      starLabel.textContent = activeMinStars + '+ ★';
    } else {
      starBtn.classList.remove('active');
      starLabel.textContent = 'Bewertung';
    }
    renderListings();
  }

  function buildCityChips() {
    // No longer needed - city picker handles this
  }

  function openCitySheet() {
    document.getElementById('citySheetOverlay').classList.add('visible');
    document.getElementById('citySearchInput').value = '';
    renderCitySheet('');
    setTimeout(() => document.getElementById('citySearchInput').focus(), 100);
  }

  function closeCitySheet() {
    document.getElementById('citySheetOverlay').classList.remove('visible');
  }

  function renderCitySheet(query) {
    const list = document.getElementById('citySheetList');
    const q = query.toLowerCase().trim();
    const filtered = ALL_PY_CITIES.filter(c => !q || c.toLowerCase().includes(q));
    if (!filtered.length) {
      list.innerHTML = '<div class="city-sheet-empty">Keine Stadt gefunden</div>';
      return;
    }
    list.innerHTML = filtered.map(c => `
      <div class="city-sheet-item${activeCity===c?' selected':''}" onclick="selectCity('${c}')">
        <svg viewBox="0 0 24 24" fill="none" stroke-width="2.5" stroke-linecap="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>
        <span>${c === 'Alle' ? '🌍 Alle Städte' : c}</span>
      </div>`).join('');
  }

  function filterCitySheet() {
    renderCitySheet(document.getElementById('citySearchInput').value);
  }

  function selectCity(city) {
    activeCity = city;
    const btn = document.getElementById('cityPickerBtn');
    const label = document.getElementById('cityPickerLabel');
    if (city === 'Alle') {
      btn.classList.remove('active');
      label.textContent = 'Stadt wählen...';
      btn.onclick = openCitySheet;
    } else {
      btn.classList.add('active');
      label.textContent = city;
      // Add clear button
      let clearBtn = document.getElementById('cityPickerClear');
      if (!clearBtn) {
        clearBtn = document.createElement('button');
        clearBtn.id = 'cityPickerClear';
        clearBtn.className = 'city-picker-clear';
        clearBtn.textContent = '×';
        clearBtn.onclick = (e) => { e.stopPropagation(); selectCity('Alle'); };
        btn.appendChild(clearBtn);
      }
    }
    closeCitySheet();
    renderListings();
  }

  function scoreEntry(l) {
    var score = 0;
    var avg = getAvgRating(l.id);
    if (avg) score += avg * 2;
    if (l.phone && l.phone.trim())        score += 2;
    if (l.website && l.website.trim())    score += 1;
    if (l.opening_hours && l.opening_hours.trim()) score += 1;
    if ((l.description || '').length > 100) score += 1;
    if (l.verified)                        score += 2;
    if (l.cover_url && l.cover_url.trim()) score += 3;
    if (isNew(l.created_at)) score += 1;
    return score;
  }

  function renderListings() {
    if (activeScreen !== 'screenHome') return;
    requestAnimationFrame(function() { _doRenderListings(); });
  }
  function _doRenderListings() {
    if (activeScreen !== 'screenHome') return;
    let filtered = allListings;
    if (activeCategory !== 'Alle') filtered = filtered.filter(l => l.category_id === activeCategory);
    if (activeCity !== 'Alle') filtered = filtered.filter(l => norm(l.city||'') === norm(activeCity));
    if (activeSubcat !== 'Alle') filtered = filtered.filter(l => norm(l.subcategory||'') === norm(activeSubcat));
    if (activeMinStars > 0) filtered = filtered.filter(l => { const avg = getAvgRating(l.id); return avg && avg >= activeMinStars; });
    if (activeOpenNow) filtered = filtered.filter(l => isOpen(l.opening_hours) === true);
    if (activeDeal) filtered = filtered.filter(l => l.deal_text && l.deal_text.trim() !== '');
    if (searchQuery) { const q = norm(searchQuery); filtered = filtered.filter(l => norm(l.name||'').includes(q)||norm(l.description||'').includes(q)||norm(l.city||'').includes(q)||norm(l.subcategory||'').includes(q)); }
    filtered = filtered.slice().sort(function(a, b) {
      return scoreEntry(b) - scoreEntry(a);
    });
    const container = document.getElementById('listingsInner');
    document.getElementById('sectionTitle').textContent = filtered.length + ' ' + (activeCategory === 'Alle' ? t('entries_all') : t('results'));
    if (!filtered.length) { container.innerHTML = '<div class="empty-state"><div class="empty-icon"><svg viewBox="0 0 24 24" fill="none" stroke-width="2" stroke-linecap="round"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/></svg></div><div class="empty-title">'+t('nothing_found')+'</div><div class="empty-sub">'+t('nothing_found_sub')+'</div></div>'; return; }
    container.innerHTML = filtered.map(l => `<div class="listing-card" style="--cat-color:${catColors[l.category_id]||'#6B6B6B'}" onclick="showDetail('${l.id}')"><div class="listing-icon-wrap">${catIcons[l.category_id]||catIcons['default']}</div><div class="listing-body"><div class="listing-top"><div class="listing-name" style="flex:1;min-width:0;overflow:hidden;text-overflow:ellipsis;white-space:nowrap">${l.name||''}</div><div style="display:flex;gap:3px;align-items:center;flex-shrink:0">${(l.deal_text ? `<span class='deal-badge'><svg viewBox='0 0 24 24'><path d='M12.89 1.45l8 4A2 2 0 0 1 22 7.24v9.53a2 2 0 0 1-1.11 1.79l-8 4a2 2 0 0 1-1.79 0l-8-4A2 2 0 0 1 2 16.77V7.24a2 2 0 0 1 1.11-1.79l8-4a2 2 0 0 1 1.78 0z'/></svg>Deal</span>` : '')}${isNew(l.created_at)?`<span class='badge-neu'>${t('badge_new')}</span>`:''}${l.verified?`<span class='badge-geprüft'>${t('verified')}</span>`:''}</div></div>${l.city?`<div class="listing-city"><svg viewBox="0 0 24 24" fill="none" stroke-width="2.5" stroke-linecap="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>${l.city}${(()=>{const o=isOpen(l.opening_hours);return o===true?'<span class="open-badge open">● '+t('open_now')+'</span>':o===false?'<span class="open-badge closed">● '+t('closed_now')+'</span>':''})()}</div>`:''}<div class="listing-desc" data-original="${l.description||''}">${l.description||''}</div>${starsSmall(getAvgRating(l.id))}${l.phone?`<div class="listing-phone"><svg viewBox="0 0 24 24" fill="none" stroke-width="2.5" stroke-linecap="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.6 1.27h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 8.91a16 16 0 0 0 6 6l.9-.9a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 21.73 16.92z"/></svg>${l.phone}</div>`:''}</div><div class="listing-arrow"><svg viewBox="0 0 24 24" fill="none" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="9 18 15 12 9 6"/></svg></div></div>`).join('');
  }

  function showDetail(id) {
    const l = allListings.find(x => x.id === id);
    if (!l) return;
    // Cover
    const hero=document.getElementById('detailHero');
    const cov=document.getElementById('detailCover');
    const covOv=document.getElementById('detailCoverOverlay');
    if(l.cover_url){cov.style.backgroundImage='url('+l.cover_url+')';covOv.style.display='block';hero.classList.add('has-cover');}
    else{cov.style.backgroundImage='';covOv.style.display='none';hero.classList.remove('has-cover');}
    // Cover upload btn
    var oldCovBtn=document.getElementById('coverUploadBtn');if(oldCovBtn)oldCovBtn.remove();
    var oldWrap=document.getElementById('coverBtnWrap');if(oldWrap)oldWrap.remove();
    if(currentUser&&(currentUser.email===ADMIN_EMAIL||(l.owner_id&&l.owner_id===currentUser.uid))){
      var covBtn=document.createElement('button');covBtn.id='coverUploadBtn';covBtn.className='detail-cover-upload';
      covBtn.innerHTML='<svg viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="2" stroke-linecap="round" width="13" height="13"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="17 8 12 3 7 8"/><line x1="12" y1="3" x2="12" y2="15"/></svg> Titelbild';
      if(l.cover_url){
        var delCovBtn=document.createElement('button');
        delCovBtn.className='detail-cover-upload';
        delCovBtn.style.marginRight='8px';
        delCovBtn.innerHTML='<svg viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="2" stroke-linecap="round" width="13" height="13"><polyline points="3 6 5 6 21 6"/><path d="M19 6l-1 14H6L5 6"/></svg>';
        delCovBtn.onclick=function(){deleteCoverImage(currentListingId);};
        var oldWrap=document.getElementById('coverBtnWrap');if(oldWrap)oldWrap.remove();
        var wrap=document.createElement('div');
        wrap.id='coverBtnWrap';
        wrap.appendChild(delCovBtn);
        wrap.appendChild(covBtn);
        hero.appendChild(wrap);
      } else {
        covBtn.id='coverBtnSingle';
        hero.appendChild(covBtn);
      }
      covBtn.onclick=function(){document.getElementById('coverFileInput').click();};
    }
    document.getElementById('detailIcon').innerHTML = catIcons[l.category_id]||catIcons['default'];
    const svg = document.getElementById('detailIcon').querySelector('svg');
    if (svg) { svg.style.width='34px'; svg.style.height='34px'; svg.style.stroke='white'; }
    document.getElementById('detailTitle').textContent = l.name||'';
    document.getElementById('detailCity').innerHTML = l.city?`<svg viewBox="0 0 24 24" fill="none" stroke-width="2" stroke-linecap="round" width="13" height="13"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>${l.city}`:'';
    const descEl = document.getElementById('detailDesc');
    const descContent = l.description || '';
    descEl.innerHTML = descContent || t('no_description');
    descEl.dataset.original = descContent;
    const badges = document.getElementById('detailBadges');
    const openStatus = isOpen(l.opening_hours);
    const openBadge = openStatus===true ? '<span class="detail-badge open-status">'+t('open_now')+'</span>' : openStatus===false ? '<span class="detail-badge closed-status">'+t('closed_now')+'</span>' : '';
    document.getElementById('detailBadgeRow').innerHTML = (l.verified?'<span class="detail-badge green">'+t('verified')+'</span>':'') + (isNew(l.created_at)?'<span class="detail-badge blue">'+t('badge_new')+'</span>':'') + openBadge;
    badges.style.display = (l.verified || isNew(l.created_at) || openStatus!==null) ? 'block' : 'none';
    let infoHTML = '';
    if (l.phone) infoHTML += `<a class="detail-row" href="tel:${l.phone}"><div class="detail-row-left"><div class="detail-row-icon"><svg viewBox="0 0 24 24" fill="none" stroke-width="2" stroke-linecap="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.6 1.27h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 8.91a16 16 0 0 0 6 6l.9-.9a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 21.73 16.92z"/></svg></div><div class="detail-row-info"><div class="detail-row-label">Telefon</div><div class="detail-row-value">${l.phone}</div></div></div><svg viewBox="0 0 24 24" fill="none" stroke-width="2" stroke-linecap="round" width="16" height="16"><polyline points="9 18 15 12 9 6"/></svg></a>`;
    if (l.website) infoHTML += `<a class="detail-row" href="https://${l.website}" target="_blank"><div class="detail-row-left"><div class="detail-row-icon"><svg viewBox="0 0 24 24" fill="none" stroke-width="2" stroke-linecap="round"><circle cx="12" cy="12" r="10"/><line x1="2" y1="12" x2="22" y2="12"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/></svg></div><div class="detail-row-info"><div class="detail-row-label">Website</div><div class="detail-row-value">${l.website}</div></div></div><svg viewBox="0 0 24 24" fill="none" stroke-width="2" stroke-linecap="round" width="16" height="16"><polyline points="9 18 15 12 9 6"/></svg></a>`;
    if (l.opening_hours) infoHTML += `<div class="detail-row"><div class="detail-row-left"><div class="detail-row-icon"><svg viewBox="0 0 24 24" fill="none" stroke-width="2" stroke-linecap="round"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg></div><div class="detail-row-info"><div class="detail-row-label">Öffnungszeiten</div><div class="detail-row-value">${l.opening_hours}</div></div></div></div>`;
    if (l.address) infoHTML += `<div class="detail-row"><div class="detail-row-left"><div class="detail-row-icon"><svg viewBox="0 0 24 24" fill="none" stroke-width="2" stroke-linecap="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg></div><div class="detail-row-info"><div class="detail-row-label">Adresse</div><div class="detail-row-value">${l.address}</div></div></div></div>`;
    const infoCard = document.getElementById('detailInfoCard');
    infoCard.innerHTML = infoHTML; infoCard.style.display = infoHTML?'block':'none';
    let ctaHTML = '';
    if (l.phone) ctaHTML += `<a class="detail-cta-btn primary" href="tel:${l.phone}"><svg viewBox="0 0 24 24" stroke-width="2" stroke-linecap="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.6 1.27h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 8.91a16 16 0 0 0 6 6l.9-.9a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 21.73 16.92z"/></svg>${t('call')}</a>`;
    if (l.lat && l.lng) ctaHTML += `<a class="detail-cta-btn secondary" href="https://maps.google.com/?q=${l.lat},${l.lng}" target="_blank"><svg viewBox="0 0 24 24" stroke-width="2" stroke-linecap="round"><polygon points="3 11 22 2 13 21 11 13 3 11"/></svg>${t('route')}</a>`;
    document.getElementById('detailCta').innerHTML = ctaHTML;
    // Render deal
    const dealCard = document.getElementById('detailDealCard');
    if (l.deal_text) {
      const expiry = l.deal_expiry ? `<div class="deal-expiry"><svg viewBox="0 0 24 24" stroke-width="2" stroke-linecap="round"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>Gültig bis: ${l.deal_expiry}</div>` : '';
      const codeSection = l.deal_code ? `<div class="deal-code-wrap"><span class="deal-code">${l.deal_code}</span><button class="deal-copy-btn" onclick="copyDealCode('${l.deal_code}')">Kopieren</button></div>` : '';
      dealCard.innerHTML = `<div class="deal-card">
        <div class="deal-card-header">
          <div class="deal-card-icon"><svg viewBox="0 0 24 24"><path d="M12.89 1.45l8 4A2 2 0 0 1 22 7.24v9.53a2 2 0 0 1-1.11 1.79l-8 4a2 2 0 0 1-1.79 0l-8-4A2 2 0 0 1 2 16.77V7.24a2 2 0 0 1 1.11-1.79l8-4a2 2 0 0 1 1.78 0z"/></svg></div>
          <div><div class="deal-card-title">Exklusiver Buscar-Deal</div><div class="deal-card-sub">Nur für App-Nutzer</div></div>
        </div>
        <div class="deal-text">${l.deal_text}</div>
        ${codeSection}
        ${expiry}
      </div>`;
    } else {
      dealCard.innerHTML = '';
    }

    currentListingId = id;

    // Exchange rate widget for Wechselstube entries
    const exDiv = document.getElementById('detailExchange');
    if (l.category_id === 'kat-wechselstube') {
      exDiv.style.display = 'block';
      exDiv.innerHTML = '<div class="exchange-widget"><div class="exchange-loading">💱 Lade Wechselkurse...</div></div>';
      fetch('https://open.er-api.com/v6/latest/USD')
        .then(r => r.json())
        .then(data => {
          const rates = data.rates || {};
          const pyg = rates.PYG || 0;
          const eur = rates.EUR || 0;
          const brl = rates.BRL || 0;
          const now = new Date().toLocaleTimeString('de-DE',{hour:'2-digit',minute:'2-digit'});
          const lang = currentLang;
          const note = lang === 'de'
            ? '* Interbanken-Referenzkurs. Der Kurs vor Ort kann leicht abweichen.'
            : '* Tipo de cambio de referencia interbancario. El tipo real puede variar.';
          const title = lang === 'de' ? 'Wechselkurse' : 'Tipos de cambio';
          const timeLabel = lang === 'de' ? 'Stand' : 'Actualizado';
          exDiv.innerHTML = `<div class="exchange-widget">
            <div class="exchange-header">
              <span class="exchange-header-icon">💱</span>
              <span class="exchange-header-title">${title}</span>
              <span class="exchange-header-time">${timeLabel}: ${now}</span>
            </div>
            <div class="exchange-row">
              <span class="exchange-from">1 USD 🇺🇸</span>
              <span class="exchange-arrow">→</span>
              <span class="exchange-to">${pyg ? Math.round(pyg).toLocaleString('de-DE') + ' PYG' : '—'}</span>
            </div>
            <div class="exchange-row">
              <span class="exchange-from">1 EUR 🇪🇺</span>
              <span class="exchange-arrow">→</span>
              <span class="exchange-to">${(pyg && eur) ? Math.round(pyg/eur).toLocaleString('de-DE') + ' PYG' : '—'}</span>
            </div>
            <div class="exchange-row">
              <span class="exchange-from">1 BRL 🇧🇷</span>
              <span class="exchange-arrow">→</span>
              <span class="exchange-to">${(pyg && brl) ? Math.round(pyg/brl).toLocaleString('de-DE') + ' PYG' : '—'}</span>
            </div>
            <div class="exchange-note">${note}</div>
          </div>`;
        })
        .catch(() => {
          exDiv.innerHTML = '<div class="exchange-widget"><div class="exchange-loading">Kurse nicht verfügbar</div></div>';
        });
    } else {
      exDiv.style.display = 'none';
      exDiv.innerHTML = '';
    }

    showScreen('screenDetail');
    loadReviews(id);
    loadComments(id);
    loadPhotos(id);
    loadOwnerSection(l);
    loadFavoriteStatus(id);
    if (currentLang !== 'de') setTimeout(() => translateVisibleContent(), 300);
  }

  let maplibreMap = null;
  let mapLoaded = false;
  let pendingData = null;
  let _mapFitOnUpdate = true;
  let mapCityFilter = 'Alle';

  const catColors = {
    'kat-restaurants': '#F5A623',
    'kat-dienstleistung': '#3B82F6',
    'kat-orte': '#22C55E',
    'kat-unterkunft': '#8B5CF6',
    'kat-geschaefte': '#EF4444',
    'kat-sport': '#06B6D4',
    'kat-tankstelle': '#EF4444',
    'kat-wechselstube': '#0EA5E9',
    'kat-beauty': '#EC4899',
    'default': '#6B6B6B'
  };

  const catLabels = {
    'kat-restaurants': 'Restaurant',
    'kat-dienstleistung': 'Dienstleistung',
    'kat-orte': 'Ort',
    'kat-unterkunft': 'Unterkunft',
    'kat-geschaefte': 'Geschäft',
    'kat-sport': 'Sport',
    'kat-wechselstube': 'Wechselstube',
    'default': 'Ort'
  };

  function makeMarkerIcon(color, emoji) {
    const ic = emoji || '📍';
    return L.divIcon({
      className: 'buscar-pin',
      html: `<div style="width:28px;height:28px;background:${color};border-radius:50% 50% 50% 0;transform:rotate(-45deg);border:2px solid white;box-shadow:0 2px 6px rgba(0,0,0,0.25);display:flex;align-items:center;justify-content:center;"><span style="transform:rotate(45deg);font-size:12px;">${ic}</span></div>`,
      iconSize: [28, 28],
      iconAnchor: [14, 28],
      popupAnchor: [0, -32]
    });
  }

  const mapCityCoords = {
    "Asunción": [-25.2867, -57.6470], "San Lorenzo": [-25.3333, -57.5167],
    "Luque": [-25.2667, -57.4833], "Capiatá": [-25.3500, -57.4500],
    "Lambaré": [-25.3500, -57.6167], "San Bernardino": [-25.2933, -57.2847],
    "Caacupé": [-25.3833, -57.1333], "Ciudad del Este": [-25.5096, -54.6112],
    "Encarnación": [-27.3306, -55.8658], "Concepción": [-23.4167, -57.4333],
    "Pedro Juan Caballero": [-22.5500, -55.7333], "Coronel Oviedo": [-25.4500, -56.4333],
    "Villarrica": [-25.7500, -56.4333], "Pilar": [-26.8667, -58.3000],
    "Filadelfia": [-22.3500, -60.0333], "Loma Plata": [-22.3833, -59.8500],
    "Hohenau": [-27.0833, -55.6333], "Obligado": [-27.2333, -55.6167],
  };

  function buildCityFilter() {
    const cities = [...new Set(allListings.filter(l => l.city).map(l => l.city))].sort();
    const container = document.getElementById('mapCities');
    if (cities.length < 2) { container.style.display = 'none'; return; }
    container.style.display = 'flex';
    container.innerHTML = `<div class="map-chip city-chip active" data-city="Alle">🌍 Alle</div>` +
      cities.map(c => `<div class="map-chip city-chip" data-city="${c}">📍 ${c}</div>`).join('');
    container.addEventListener('click', e => {
      const chip = e.target.closest('.city-chip');
      if (!chip) return;
      container.querySelectorAll('.city-chip').forEach(c => c.classList.remove('active'));
      chip.classList.add('active');
      mapCityFilter = chip.dataset.city;
      if (mapCityFilter !== 'Alle' && maplibreMap) {
        const coords = mapCityCoords[mapCityFilter];
        if (coords) maplibreMap.flyTo({center:[coords[1],coords[0]],zoom:13,animate:false});
      }
      renderMap();
    });
  }

  // ── MapLibre GL JS ────────────────────────────────────────────────────────
  const ML_STYLE = {
    version: 8,
    sources: {
      osm: { type:'raster', tiles:['https://tile.openstreetmap.org/{z}/{x}/{y}.png'], tileSize:256, attribution:'© OpenStreetMap' }
    },
    layers: [{ id:'osm', type:'raster', source:'osm' }],
    glyphs: 'https://demotiles.maplibre.org/font/{fontstack}/{range}.pbf'
  };

  const CAT_COLORS_ML = [
    'match', ['get','cat'],
    'kat-restaurants','#F5A623',
    'kat-unterkunft','#8B5CF6',
    'kat-orte','#22C55E',
    'kat-geschaefte','#EF4444',
    'kat-sport','#06B6D4',
    'kat-beauty','#EC4899',
    'kat-dienstleistung','#3B82F6',
    'kat-tankstelle','#F97316',
    '#6B6B6B'
  ];

  function buildGeoJSON(listings) {
    return {
      type: 'FeatureCollection',
      features: listings
        .filter(l => l.lat && l.lng)
        .map(l => ({
          type: 'Feature',
          geometry: { type:'Point', coordinates:[l.lng, l.lat] },
          properties: {
            id: l.id,
            name: l.name || '',
            city: l.city || '',
            cat: l.category_id || '',
            deal: l.deal_text || '',
            catLabel: catLabels[l.category_id] || ''
          }
        }))
    };
  }

  function norm(s) {
    return (s||'').toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g,'').replace(/[''\u2019]/g,"'");
  }

  function getFilteredListings() {
    let f = allListings;
    if (mapCategory !== 'Alle') f = f.filter(l => l.category_id === mapCategory);
    if (mapCityFilter !== 'Alle') f = f.filter(l => norm(l.city||'') === norm(mapCityFilter));
    if (mapSubcatFilter !== 'Alle') f = f.filter(l => norm(l.subcategory||'') === norm(mapSubcatFilter));
    if (mapMinStars > 0) f = f.filter(l => { const a = getAvgRating(l.id); return a && a >= mapMinStars; });
    if (activeDeal) f = f.filter(l => l.deal_text && l.deal_text.trim() !== '');
    return f;
  }

  function updateMapData() {
    const filtered = getFilteredListings();
    const withCoords = filtered.filter(l => l.lat && l.lng);
    const noCoords   = filtered.filter(l => !l.lat || !l.lng);

    document.getElementById('mapHeaderSub').textContent =
      withCoords.length + ' ' + t('map_sub_all')
        .replace('Alle Orte in Paraguay','Orte auf der Karte')
        .replace('Todos los lugares en Paraguay','lugares en el mapa');
    showMapNoCoordsNotice(noCoords.length > 0);

    const geojson = buildGeoJSON(withCoords);

    if (mapLoaded && maplibreMap.getSource('listings')) {
      maplibreMap.getSource('listings').setData(geojson);
    } else {
      pendingData = geojson;
    }

    if (_mapFitOnUpdate) {
      _mapFitOnUpdate = false;
      if (withCoords.length === 1) {
        maplibreMap.flyTo({ center:[withCoords[0].lng, withCoords[0].lat], zoom:14, animate:false });
      } else if (mapCityFilter === 'Alle' && mapCategory === 'Alle') {
        maplibreMap.jumpTo({ center:[-58.45, -24.2], zoom:5.0 });
      } else if (withCoords.length > 1) {
        const lngs = withCoords.map(l=>l.lng), lats = withCoords.map(l=>l.lat);
        maplibreMap.fitBounds(
          [[Math.min(...lngs), Math.min(...lats)],[Math.max(...lngs), Math.max(...lats)]],
          { padding:60, maxZoom:14, animate:false }
        );
      }
    }

    document.getElementById('mapList').innerHTML = withCoords.map(l => `
      <div class="map-card" onclick="showDetail('${l.id}')">
        <div class="map-card-name">${l.name||''}</div>
        <div class="map-card-city">${l.city||''}</div>
        <div class="map-card-cat">${catLabels[l.category_id]||''}</div>
      </div>`).join('');
  }

  var _lastMapRender = 0;
  function renderMap() {
    var _now = Date.now();
    if (_now - _lastMapRender < 250) return;
    _lastMapRender = _now;
    if (!maplibreMap) {
      maplibreMap = new maplibregl.Map({
        container: 'leafletMap',
        style: ML_STYLE,
        center: [-58.45, -24.2],
        zoom: 5.0,
        minZoom: 4.8,
        maxZoom: 18,
        maxBounds: [[-66.0, -31.0], [-51.0, -15.0]],
        dragRotate: false,
        pitchWithRotate: false,
        touchPitch: false,
        keyboard: true,
        attributionControl: false
      });
      maplibreMap.dragRotate.disable();
      maplibreMap.touchZoomRotate.disableRotation();

      maplibreMap.addControl(new maplibregl.NavigationControl({ showCompass:false }), 'top-right');
      maplibreMap.addControl(new maplibregl.AttributionControl({ compact:true }), 'bottom-right');

      maplibreMap.on('load', () => {
        mapLoaded = true;

        maplibreMap.addSource('listings', {
          type: 'geojson',
          data: pendingData || { type:'FeatureCollection', features:[] }
        });
        pendingData = null;

        const pinDefs = [
          { id:'pin-restaurants',    color:'#F5A623', emoji:'🍽' },
          { id:'pin-unterkunft',     color:'#8B5CF6', emoji:'🛏' },
          { id:'pin-orte',           color:'#22C55E', emoji:'🏛' },
          { id:'pin-geschaefte',     color:'#EF4444', emoji:'🛒' },
          { id:'pin-sport',          color:'#06B6D4', emoji:'💪' },
          { id:'pin-beauty',         color:'#EC4899', emoji:'✂' },
          { id:'pin-dienstleistung', color:'#3B82F6', emoji:'🏥' },
          { id:'pin-tankstelle',     color:'#F97316', emoji:'⛽' },
          { id:'pin-wechselstube', color:'#0EA5E9', emoji:'💱' },
          { id:'pin-default',        color:'#6B6B6B', emoji:'📍' },
        ];

        const pinPromises = pinDefs.map(({ id, color, emoji }) => new Promise(resolve => {
          const W = 36, H = 48;
          const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="${W}" height="${H}" viewBox="0 0 ${W} ${H}">
            <path d="M18 0 C8.06 0 0 8.06 0 18 C0 31.5 18 48 18 48 C18 48 36 31.5 36 18 C36 8.06 27.94 0 18 0 Z"
              fill="${color}" stroke="white" stroke-width="2.5"/>
            <text x="18" y="23" font-size="14" text-anchor="middle" dominant-baseline="middle" font-family="Apple Color Emoji,Segoe UI Emoji,Noto Color Emoji,sans-serif">${emoji}</text>
          </svg>`;
          const img = new Image(W, H);
          img.onload = () => {
            if (!maplibreMap.hasImage(id)) maplibreMap.addImage(id, img, { pixelRatio: 2 });
            resolve();
          };
          img.src = 'data:image/svg+xml;charset=utf-8,' + encodeURIComponent(svg);
        }));

        Promise.all(pinPromises).then(() => {
          maplibreMap.addLayer({
            id: 'listings-pins',
            type: 'symbol',
            source: 'listings',
            layout: {
              'icon-image': ['match', ['get','cat'],
                'kat-restaurants',    'pin-restaurants',
                'kat-unterkunft',     'pin-unterkunft',
                'kat-orte',           'pin-orte',
                'kat-geschaefte',     'pin-geschaefte',
                'kat-sport',          'pin-sport',
                'kat-beauty',         'pin-beauty',
                'kat-dienstleistung', 'pin-dienstleistung',
                'kat-tankstelle',     'pin-tankstelle',
                'kat-wechselstube', 'pin-wechselstube',
                'pin-default'
              ],
              'icon-size': ['interpolate',['linear'],['zoom'], 5,0.5, 10,0.7, 15,1.0],
              'icon-anchor': 'bottom',
              'icon-allow-overlap': true,
              'icon-ignore-placement': true
            }
          });

          maplibreMap.on('click', 'listings-pins', e => {
            const p = e.features[0].properties;
            const coords = e.features[0].geometry.coordinates.slice();
            new maplibregl.Popup({ closeButton:false, maxWidth:'220px' })
              .setLngLat(coords)
              .setHTML(`<div class="map-popup" onclick="showDetail('${p.id}')">
                <div class="map-popup-name">${p.name}${p.deal?'<span style="margin-left:5px;font-size:11px">⚡</span>':''}</div>
                <div class="map-popup-city">${p.city}</div>
                <div class="map-popup-cat">${p.catLabel}</div>
              </div>`)
              .addTo(maplibreMap);
          });
          maplibreMap.on('mouseenter','listings-pins',()=>{ maplibreMap.getCanvas().style.cursor='pointer'; });
          maplibreMap.on('mouseleave','listings-pins',()=>{ maplibreMap.getCanvas().style.cursor=''; });
        });

        updateMapData();
      });
    } else {
      updateMapData();
      setTimeout(() => maplibreMap.resize(), 100);
    }
  }

  function renderMapMarkers() {}

  document.getElementById('mapCats').addEventListener('click', e => {
    const chip = e.target.closest('.map-chip');
    if (!chip || chip.classList.contains('city-chip')) return;
    document.querySelectorAll('#mapCats .map-chip').forEach(c => c.classList.remove('active'));
    chip.classList.add('active');
    mapCategory = chip.dataset.cat;
    renderMap();
  });

  function hasEmoji(str) { return /\p{Emoji}/u.test(str); }
  function isValidPhone(str) { return !str || /^[0-9+\s\-().]+$/.test(str); }

  document.getElementById('newName').addEventListener('input', function() {
    document.getElementById('nameCounter').textContent = this.value.length + ' / 60';
    document.getElementById('nameCounter').classList.toggle('warn', this.value.length > 50);
  });
  document.getElementById('newDesc').addEventListener('input', function() {
    const len = this.value.length;
    document.getElementById('descCounter').textContent = len + ' / 500';
    document.getElementById('descCounter').classList.toggle('warn', len > 450);
  });

  async function submitListing() {
    const name = document.getElementById('newName').value.trim();
    const cat = document.getElementById('newCategory').value;
    const city = document.getElementById('newCity').value.trim();
    const desc = document.getElementById('newDesc').value.trim();
    const phone = document.getElementById('newPhone').value.trim();
    let valid = true;

    document.getElementById('nameError').classList.remove('visible');
    document.getElementById('descError').classList.remove('visible');
    document.getElementById('phoneError').classList.remove('visible');
    document.getElementById('formError').classList.remove('visible');
    document.getElementById('formSuccess').classList.remove('visible');

    if (hasEmoji(name)) { document.getElementById('nameError').classList.add('visible'); document.getElementById('newName').classList.add('error'); valid = false; } else { document.getElementById('newName').classList.remove('error'); }
    if (desc.length < 50) { document.getElementById('descError').classList.add('visible'); document.getElementById('newDesc').classList.add('error'); valid = false; } else { document.getElementById('newDesc').classList.remove('error'); }
    if (!isValidPhone(phone)) { document.getElementById('phoneError').classList.add('visible'); document.getElementById('newPhone').classList.add('error'); valid = false; } else { document.getElementById('newPhone').classList.remove('error'); }
    if (!name || !cat || !city || !desc) { document.getElementById('formError').textContent = t('fill_all'); document.getElementById('formError').classList.add('visible'); valid = false; }

    // === NEU: Standort ist Pflicht ===
    if (!window._newLat || !window._newLng) {
      document.getElementById('formError').textContent = t('location_required_error');
      document.getElementById('formError').classList.add('visible');
      valid = false;
      // Standort-Karte hervorheben und runterscrollen
      const locBtn = document.getElementById('locationBtn');
      if (locBtn) {
        locBtn.scrollIntoView({ behavior: 'smooth', block: 'center' });
        locBtn.style.boxShadow = '0 0 0 3px var(--red)';
        setTimeout(function() { locBtn.style.boxShadow = ''; }, 2500);
      }
    }
    // === Ende NEU ===

    if (!valid) return;

    const btn = document.getElementById('formSubmitBtn');
    btn.disabled = true; btn.textContent = 'Wird eingereicht...';
    try {
      const ref = await db.collection('listings').add({ name, category_id: cat, city, description: desc, subcategory: document.getElementById('newSubcategory').value||null, phone: phone||null, website: document.getElementById('newWebsite').value.trim()||null, address: document.getElementById('newAddress').value.trim()||null, opening_hours: (()=>{ const d=document.getElementById('hoursDay').value; const f=document.getElementById('hoursFrom').value; const t=document.getElementById('hoursTo').value; const f2=document.getElementById('hoursFrom2').value; const t2=document.getElementById('hoursTo2').value; let val=''; if(d&&f&&t){val=d+' '+f+'-'+t; if(f2&&t2) val+=' & '+f2+'-'+t2;} document.getElementById('newHours').value=val; return val||null; })(), lat: window._newLat, lng: window._newLng, verified: false, created_by: currentUser?currentUser.uid:null, created_at: new Date() });
      if (pendingFormPhotos.length) await uploadFormPhotos(ref.id);
      document.getElementById('formSuccess').textContent = t('submit_success'); document.getElementById('formSuccess').classList.add('visible');
      pendingFormPhotos = [];
      const grid2 = document.getElementById('formPhotoGrid');
      grid2.innerHTML = `<label style="aspect-ratio:1;border:1.5px dashed var(--border);border-radius:12px;background:var(--bg);display:flex;flex-direction:column;align-items:center;justify-content:center;cursor:pointer;gap:4px" for="formPhotoInput"><svg viewBox="0 0 24 24" fill="none" stroke="var(--text-3)" stroke-width="2" stroke-linecap="round" width="24" height="24"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg><span style="font-size:11px;color:var(--text-3);font-weight:500">Foto hinzufügen</span></label><input type="file" id="formPhotoInput" accept="image/*" multiple style="display:none" onchange="handleFormPhotos(event)">`;
      ['newName','newCity','newDesc','newPhone','newWebsite','newAddress','newHours'].forEach(id => document.getElementById(id).value = '');
      document.getElementById('newCategory').value = '';
      document.getElementById('nameCounter').textContent = '0 / 60';
      document.getElementById('descCounter').textContent = '0 / 500';
      window._newLat = null; window._newLng = null;
      const btn2 = document.getElementById('locationBtn');
      btn2.disabled = false; btn2.style.background = 'var(--yellow-light)'; btn2.style.borderColor = 'var(--yellow)'; btn2.style.color = 'var(--yellow-dark)';
      btn2.innerHTML = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" width="16" height="16"><circle cx="12" cy="12" r="3"/><path d="M12 1v4M12 19v4M4.22 4.22l2.83 2.83M16.95 16.95l2.83 2.83M1 12h4M19 12h4M4.22 19.78l2.83-2.83M16.95 7.05l2.83-2.83"/></svg> Meinen Standort verwenden';
      btn2.dataset.saved = '';
      document.getElementById('locationStatus').style.display = 'none';
      const removeBtn = document.getElementById('locationRemoveBtn');
      if (removeBtn) removeBtn.style.display = 'none';
      const mapPrev = document.getElementById('locationMapPreview');
      if (mapPrev) mapPrev.style.display = 'none';
    } catch (err) {
      document.getElementById('formError').textContent = 'Fehler beim Einreichen. Bitte versuche es erneut.'; document.getElementById('formError').classList.add('visible');
    }
    btn.disabled = false; btn.textContent = 'Eintrag einreichen';
  }

  // ══════════════════════════════════════════════════════════════════════════
  // STANDORT-PERMISSION-FIX (Bug-Fix v75)
  // Standort ist Pflicht für Einträge. Wenn die Berechtigung verweigert wird,
  // zeigen wir ein Modal mit Schritt-für-Schritt-Anleitung statt nur eine
  // kleine Fehlermeldung.
  // ══════════════════════════════════════════════════════════════════════════

  function removeLocation() {
    window._newLat = null;
    window._newLng = null;
    const btn = document.getElementById('locationBtn');
    const status = document.getElementById('locationStatus');
    const removeBtn = document.getElementById('locationRemoveBtn');
    btn.innerHTML = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" width="16" height="16"><circle cx="12" cy="12" r="3"/><path d="M12 1v4M12 19v4M4.22 4.22l2.83 2.83M16.95 16.95l2.83 2.83M1 12h4M19 12h4M4.22 19.78l2.83-2.83M16.95 7.05l2.83-2.83"/></svg> Meinen Standort verwenden';
    btn.style.background = ''; btn.style.borderColor = ''; btn.style.color = '';
    btn.dataset.saved = '';
    btn.disabled = false;
    if (status) status.style.display = 'none';
    if (removeBtn) removeBtn.style.display = 'none';
    // Mini-Karte verstecken
    const mapPrev = document.getElementById('locationMapPreview');
    if (mapPrev) mapPrev.style.display = 'none';
    // Permission-Status neu pruefen damit Banner ggf. wieder erscheint
    checkLocationPermissionForForm();
  }

  async function useMyLocation() {
    const btn = document.getElementById('locationBtn');
    const status = document.getElementById('locationStatus');

    if (!navigator.geolocation) {
      status.style.color = 'var(--red)';
      status.style.display = 'block';
      status.textContent = t('loc_unsupported');
      return;
    }

    // 1) Vorab-Check via Permissions API (wo verfügbar)
    if (navigator.permissions && navigator.permissions.query) {
      try {
        const perm = await navigator.permissions.query({ name: 'geolocation' });
        if (perm.state === 'denied') {
          // Berechtigung bereits verweigert -> direkt Modal
          showLocationPermissionModal();
          // Banner sicherheitshalber einblenden
          const banner = document.getElementById('locationPermissionBanner');
          if (banner) banner.style.display = 'flex';
          return;
        }
      } catch (e) {
        // Permissions-API nicht unterstützt -> weiter mit getCurrentPosition
      }
    }

    // 2) Standort anfragen
    btn.textContent = t('loc_locating');
    btn.disabled = true;

    navigator.geolocation.getCurrentPosition(
      function(pos) {
        window._newLat = pos.coords.latitude;
        window._newLng = pos.coords.longitude;
        status.style.color = 'var(--green)';
        status.style.display = 'block';
        status.textContent = 'Standort gespeichert: '
          + pos.coords.latitude.toFixed(5) + ', '
          + pos.coords.longitude.toFixed(5);
        btn.innerHTML = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" width="16" height="16"><polyline points="20 6 9 17 4 12"/></svg> Standort gespeichert';
        btn.style.background = 'var(--green-light)';
        btn.style.borderColor = 'var(--green)';
        btn.style.color = 'var(--green)';
        btn.dataset.saved = 'true';
        btn.disabled = false;
        // Banner und Form-Error verstecken
        const banner = document.getElementById('locationPermissionBanner');
        if (banner) banner.style.display = 'none';
        const formError = document.getElementById('formError');
        if (formError) formError.classList.remove('visible');
        const removeBtn = document.getElementById('locationRemoveBtn');
        if (removeBtn) removeBtn.style.display = 'inline-block';
        // Mini-Karten-Vorschau initialisieren / aktualisieren
        initLocationMapPreview(pos.coords.latitude, pos.coords.longitude);
      },
      function(err) {
        btn.disabled = false;
        btn.innerHTML = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" width="16" height="16"><circle cx="12" cy="12" r="3"/><path d="M12 1v4M12 19v4M4.22 4.22l2.83 2.83M16.95 16.95l2.83 2.83M1 12h4M19 12h4M4.22 19.78l2.83-2.83M16.95 7.05l2.83-2.83"/></svg>' + t('location_btn');

        // Fehler-Code unterscheiden:
        // 1 = PERMISSION_DENIED  -> Modal mit Anleitung
        // 2 = POSITION_UNAVAILABLE -> Status-Text
        // 3 = TIMEOUT -> Status-Text
        if (err && err.code === 1) {
          status.style.display = 'none';
          const banner = document.getElementById('locationPermissionBanner');
          if (banner) banner.style.display = 'flex';
          showLocationPermissionModal();
        } else if (err && err.code === 2) {
          status.style.color = 'var(--red)';
          status.style.display = 'block';
          status.textContent = t('loc_unavailable');
        } else if (err && err.code === 3) {
          status.style.color = 'var(--red)';
          status.style.display = 'block';
          status.textContent = t('loc_timeout');
        } else {
          status.style.color = 'var(--red)';
          status.style.display = 'block';
          status.textContent = t('loc_unavailable');
        }
      },
      { enableHighAccuracy: true, timeout: 10000, maximumAge: 0 }
    );
  }

  // Mini-Karten-Vorschau im Form-Screen (zeigt aktuellen Standort, draggable)
  let _locationMap = null;
  let _locationMarker = null;

  function initLocationMapPreview(lat, lng) {
    const container = document.getElementById('locationMapPreview');
    if (!container) return;
    container.style.display = 'block';

    // Wenn Karte schon existiert: Position aktualisieren
    if (_locationMap && _locationMarker) {
      _locationMap.setCenter([lng, lat]);
      _locationMap.setZoom(15);
      _locationMarker.setLngLat([lng, lat]);
      setTimeout(function(){ _locationMap.resize(); }, 50);
      return;
    }

    // Karte neu erstellen
    try {
      _locationMap = new maplibregl.Map({
        container: 'locationMapPreview',
        style: ML_STYLE,
        center: [lng, lat],
        zoom: 15,
        interactive: true,
        dragRotate: false,
        attributionControl: false
      });
      _locationMap.dragRotate.disable();
      _locationMap.touchZoomRotate.disableRotation();

      _locationMarker = new maplibregl.Marker({ color: '#F5A623', draggable: true })
        .setLngLat([lng, lat])
        .addTo(_locationMap);

      // Bei Drag: Koordinaten anpassen
      _locationMarker.on('dragend', function() {
        const pos = _locationMarker.getLngLat();
        window._newLat = pos.lat;
        window._newLng = pos.lng;
        const status = document.getElementById('locationStatus');
        if (status) status.textContent = 'Standort gespeichert: ' + pos.lat.toFixed(5) + ', ' + pos.lng.toFixed(5);
      });

      // Bei Tipp auf Karte: Marker dorthin verschieben
      _locationMap.on('click', function(e) {
        window._newLat = e.lngLat.lat;
        window._newLng = e.lngLat.lng;
        _locationMarker.setLngLat([e.lngLat.lng, e.lngLat.lat]);
        const status = document.getElementById('locationStatus');
        if (status) status.textContent = 'Standort gespeichert: ' + e.lngLat.lat.toFixed(5) + ', ' + e.lngLat.lng.toFixed(5);
      });

      setTimeout(function(){ if (_locationMap) _locationMap.resize(); }, 100);
    } catch(e) {
      console.error('Mini-Karte konnte nicht geladen werden', e);
    }
  }

    function showLocationPermissionModal() {
    const modal = document.getElementById('locationPermissionModal');
    if (modal) modal.style.display = 'flex';
  }

  function closeLocationPermissionModal() {
    const modal = document.getElementById('locationPermissionModal');
    if (modal) modal.style.display = 'none';
  }

  function retryLocation() {
    closeLocationPermissionModal();
    // Kurz warten, dann nochmal probieren - User hat moeglicherweise
    // gerade die Berechtigung in den Einstellungen freigeschaltet.
    setTimeout(function() { useMyLocation(); }, 250);
  }

  // Beim Oeffnen des Form-Screens: pruefen ob Berechtigung schon verweigert ist
  // und ggf. Banner einblenden, damit der User es VOR dem Klick weiss.
  async function checkLocationPermissionForForm() {
    const banner = document.getElementById('locationPermissionBanner');
    if (!banner) return;
    // Wenn schon Koordinaten gespeichert sind, Banner nicht zeigen
    if (window._newLat && window._newLng) {
      banner.style.display = 'none';
      return;
    }
    if (!navigator.permissions || !navigator.permissions.query) return;
    try {
      const perm = await navigator.permissions.query({ name: 'geolocation' });
      banner.style.display = perm.state === 'denied' ? 'flex' : 'none';
    } catch (e) {
      // Nicht unterstuetzt - kein Banner
    }
  }
  // ══════════════════════════════════════════════════════════════════════════
  // END STANDORT-PERMISSION-FIX
  // ══════════════════════════════════════════════════════════════════════════

  async function loadAdmin() {
    showScreen('screenAdmin');
    const body = document.getElementById('adminBody');

    let claimCount = 0;
    try {
      const claimSnap = await db.collection('claims').where('status','==','pending').get();
      claimCount = claimSnap.size;
    } catch(e) {}

    const claimBadge = claimCount > 0 ? `<span style="background:var(--red);color:white;border-radius:20px;padding:1px 7px;font-size:11px;font-weight:700;margin-left:6px">${claimCount}</span>` : '';

    document.getElementById('adminSub').innerHTML = `
      <div style="display:flex;gap:12px;margin-top:8px;flex-wrap:wrap">
        <span id="adminTabListings" onclick="loadAdminListings()" style="cursor:pointer;font-weight:700;color:white;border-bottom:2px solid white;padding-bottom:2px">Einträge</span>
        <span id="adminTabClaims" onclick="loadAdminClaims()" style="cursor:pointer;color:rgba(255,255,255,0.6)">Inhaber-Anfragen${claimBadge}</span>
        <span id="adminTabDeals" onclick="loadAdminDeals()" style="cursor:pointer;color:rgba(255,255,255,0.6)">🏷 Deals</span>
        <span id="adminTabReports" onclick="loadAdminReports()" style="cursor:pointer;color:rgba(255,255,255,0.6)">🚩 Meldungen</span>
      </div>`;
    loadAdminListings();
  }

  async function loadAdminListings() {
    document.getElementById('adminTabListings').style.color = 'white';
    document.getElementById('adminTabListings').style.borderBottom = '2px solid white';
    document.getElementById('adminTabClaims').style.color = 'rgba(255,255,255,0.6)';
    document.getElementById('adminTabClaims').style.borderBottom = 'none';
    const body = document.getElementById('adminBody');
    body.innerHTML = '<div style="text-align:center;padding:40px"><div style="width:28px;height:28px;border:3px solid #FFF8EC;border-top-color:#F5A623;border-radius:50%;animation:spin 0.8s linear infinite;margin:0 auto"></div></div>';
    try {
      const snap = await db.collection('listings').where('verified', '==', false).get();
      const pending = snap.docs.map(d => ({ id: d.id, ...d.data() }));
      if (!pending.length) { body.innerHTML = '<div class="admin-empty"><div class="admin-empty-icon">&#10003;</div><div class="admin-empty-text">Alles geprüft!</div><div class="admin-empty-sub">Keine offenen Einträge.</div></div>'; return; }
      const photoSnaps = await Promise.all(pending.map(l =>
        db.collection('listing_photos').where('listing_id','==',l.id).where('pending','==',true).get()
      ));
      body.innerHTML = pending.map((l, idx) => {
        const photos = photoSnaps[idx].docs.map(d => d.data());
        const photoHTML = photos.length ? `<div style="display:flex;gap:6px;margin-bottom:12px;overflow-x:auto">${photos.map(p => `<img src="${p.url}" style="width:80px;height:80px;object-fit:cover;border-radius:8px;flex-shrink:0">`).join('')}</div>` : '';
        const lName = (l.name||'').toLowerCase();
        const similar = allListings.filter(ex =>
          ex.id !== l.id &&
          ((ex.name||'').toLowerCase().includes(lName.slice(0,6)) ||
           lName.includes((ex.name||'').toLowerCase().slice(0,6))) &&
          ex.city === l.city
        ).slice(0, 2);
        const similarHTML = similar.length ? `<div class="admin-similar">
          <div class="admin-similar-title">⚠️ Ähnliche Einträge in ${l.city}:</div>
          ${similar.map(s => `<div style="font-size:12px;color:var(--text-1);padding:2px 0">${s.name}</div>`).join('')}
        </div>` : '';
        return `<div class="admin-card" id="adminCard_${l.id}"><div class="admin-card-name">${l.name||'Ohne Name'}</div><div class="admin-card-meta">${catNames[l.category_id]||''} &middot; ${l.city||'Unbekannt'}</div>${photoHTML}<div class="admin-card-desc">${l.description||'Keine Beschreibung'}</div>${similarHTML}<div class="admin-card-info">${l.phone?`<div class="admin-info-pill">${l.phone}</div>`:''}${l.website?`<div class="admin-info-pill">${l.website}</div>`:''}${l.opening_hours?`<div class="admin-info-pill">${l.opening_hours}</div>`:''}</div><div class="admin-actions"><button class="admin-btn approve" onclick="approveEntry('${l.id}')">${t('approve')||'Genehmigen'}</button><button class="admin-btn reject" onclick="rejectEntry('${l.id}')">${t('reject')||'Ablehnen'}</button></div></div>`;
      }).join('');
    } catch (err) { body.innerHTML = '<div class="admin-empty"><div class="admin-empty-text">Fehler beim Laden</div></div>'; }
  }

  async function loadAdminClaims() {
    document.getElementById('adminTabClaims').style.color = 'white';
    document.getElementById('adminTabClaims').style.borderBottom = '2px solid white';
    document.getElementById('adminTabListings').style.color = 'rgba(255,255,255,0.6)';
    document.getElementById('adminTabListings').style.borderBottom = 'none';
    const body = document.getElementById('adminBody');
    body.innerHTML = '<div style="text-align:center;padding:40px"><div style="width:28px;height:28px;border:3px solid #FFF8EC;border-top-color:#F5A623;border-radius:50%;animation:spin 0.8s linear infinite;margin:0 auto"></div></div>';
    try {
      const snap = await db.collection('claims').where('status','==','pending').get();
      const claims = snap.docs.map(d => ({id:d.id,...d.data()}));
      if (!claims.length) { body.innerHTML = '<div class="admin-empty"><div class="admin-empty-icon">✓</div><div class="admin-empty-text">Keine offenen Anfragen</div></div>'; return; }
      const listingIds = [...new Set(claims.map(c => c.listing_id))];
      const listingDocs = await Promise.all(listingIds.map(id => db.collection('listings').doc(id).get()));
      const listingsMap = {};
      listingDocs.forEach(d => { if (d.exists) listingsMap[d.id] = d.data(); });
      body.innerHTML = claims.map(c => {
        const l = listingsMap[c.listing_id];
        return `<div class="admin-claim-card" id="claimCard_${c.id}">
          <div class="admin-claim-name">${l ? l.name : 'Unbekannter Eintrag'}</div>
          <div class="admin-claim-meta">${c.user_name} · ${c.user_email}</div>
          <div class="admin-claim-reason">"${c.reason}"</div>
          <div class="admin-actions">
            <button class="admin-btn approve" onclick="approveClaim('${c.id}','${c.listing_id}','${c.user_id}')">Genehmigen</button>
            <button class="admin-btn reject" onclick="rejectClaim('${c.id}')">Ablehnen</button>
          </div>
        </div>`;
      }).join('');
    } catch(e) { body.innerHTML = '<div class="admin-empty"><div class="admin-empty-text">Fehler beim Laden</div></div>'; }
  }

  async function approveClaim(claimId, listingId, userId) {
    try {
      await db.collection('claims').doc(claimId).update({ status: 'approved' });
      await db.collection('listings').doc(listingId).update({ owner_id: userId });
      document.getElementById('claimCard_' + claimId).remove();
    } catch(e) { alert('Fehler.'); }
  }

  async function rejectClaim(claimId) {
    if (!confirm('Anfrage ablehnen?')) return;
    try {
      await db.collection('claims').doc(claimId).update({ status: 'rejected' });
      document.getElementById('claimCard_' + claimId).remove();
    } catch(e) { alert('Fehler.'); }
  }

  async function approveEntry(id) {
    try {
      await db.collection('listings').doc(id).update({ verified: true });
      const photos = await db.collection('listing_photos').where('listing_id','==',id).where('pending','==',true).get();
      await Promise.all(photos.docs.map(d => d.ref.update({ pending: false })));
      document.getElementById('adminCard_'+id).remove();
      await loadListings();
    } catch (err) { alert('Fehler.'); }
  }

  async function loadAdminDeals() {
    showScreen('screenAdmin');
    document.getElementById('adminTabListings').style.color = 'rgba(255,255,255,0.6)';
    document.getElementById('adminTabListings').style.borderBottom = 'none';
    const body = document.getElementById('adminBody');
    body.innerHTML = '<div style="text-align:center;padding:40px"><div style="width:28px;height:28px;border:3px solid #FFF8EC;border-top-color:#F5A623;border-radius:50%;animation:spin 0.8s linear infinite;margin:0 auto"></div></div>';
    try {
      const snap = await db.collection('listings').where('verified','==',true).get();
      const listings = snap.docs.map(d => ({id:d.id,...d.data()}));
      body.innerHTML = `<div style="padding:12px 0 4px;font-size:12px;color:rgba(255,255,255,0.6);text-align:center">Deals für verifizierte Einträge verwalten</div>` +
        listings.map(l => `<div class="admin-card" id="dealCard_${l.id}">
          <div class="admin-card-name">${l.name}</div>
          <div class="admin-card-meta">${l.city||''}</div>
          ${l.deal_text ? `<div class="admin-deal-section"><div class="admin-deal-title">🏷 Aktiver Deal</div><div style="font-size:13px;color:var(--text-2);margin-bottom:6px">${l.deal_text}</div>${l.deal_code?`<div style="font-size:12px;font-weight:700;color:#C2410C">Code: ${l.deal_code}</div>`:''}</div>` : ''}
          <div style="display:flex;flex-direction:column;gap:8px;margin-top:8px">
            <input class="field-input" type="text" id="dealText_${l.id}" placeholder="Deal-Beschreibung (z.B. 10% Rabatt für Buscar-Nutzer)" value="${l.deal_text||''}" style="font-size:13px;padding:10px 12px">
            <input class="field-input" type="text" id="dealCode_${l.id}" placeholder="Gutscheincode (optional)" value="${l.deal_code||''}" style="font-size:13px;padding:10px 12px">
            <input class="field-input" type="text" id="dealExpiry_${l.id}" placeholder="Gültig bis (z.B. 31.12.2025)" value="${l.deal_expiry||''}" style="font-size:13px;padding:10px 12px">
            <div style="display:flex;gap:8px">
              <button class="admin-btn approve" style="flex:2" onclick="saveDeal('${l.id}')">Deal speichern</button>
              ${l.deal_text ? `<button class="admin-btn reject" style="flex:1" onclick="removeDeal('${l.id}')">Entfernen</button>` : ''}
            </div>
          </div>
        </div>`).join('');
    } catch(e) { body.innerHTML = '<div class="admin-empty"><div class="admin-empty-text">Fehler beim Laden</div></div>'; }
  }

  async function saveDeal(listingId) {
    const dealText = document.getElementById('dealText_'+listingId).value.trim();
    const dealCode = document.getElementById('dealCode_'+listingId).value.trim();
    const dealExpiry = document.getElementById('dealExpiry_'+listingId).value.trim();
    try {
      await db.collection('listings').doc(listingId).update({
        deal_text: dealText || null, deal_code: dealCode || null, deal_expiry: dealExpiry || null
      });
      await loadListings();
      const btn = event.target;
      btn.textContent = '✓ Gespeichert!';
      setTimeout(() => { btn.textContent = 'Deal speichern'; }, 2000);
    } catch(e) { alert('Fehler: ' + (e.message || e)); }
  }

  async function removeDeal(listingId) {
    if (!confirm('Deal wirklich entfernen?')) return;
    try {
      await db.collection('listings').doc(listingId).update({ deal_text: null, deal_code: null, deal_expiry: null });
      await loadListings();
      loadAdminDeals();
    } catch(e) { alert('Fehler.'); }
  }

  async function rejectEntry(id) {
    if (!confirm('Eintrag wirklich löschen?')) return;
    try { await db.collection('listings').doc(id).delete(); document.getElementById('adminCard_'+id).remove(); } catch (err) { alert('Fehler.'); }
  }

  let currentListingId = null;
  let currentUserRating = 0;

  function formatDate(ts) {
    if (!ts) return '';
    const d = ts.toDate ? ts.toDate() : new Date(ts);
    return d.toLocaleDateString('de-DE', { day:'2-digit', month:'2-digit', year:'numeric' });
  }

  function starsHTML(rating, size) {
    let h = '';
    for (let i = 1; i <= 5; i++) h += `<span style="font-size:${size||14}px;color:${i<=rating?'#F5A623':'#E0E0E0'}">&#9733;</span>`;
    return h;
  }

  async function loadReviews(listingId) {
    const snap = await db.collection('reviews').where('listing_id','==',listingId).orderBy('created_at','desc').get();
    const reviews = snap.docs.map(d => ({id:d.id,...d.data()}));
    const myReview = reviews.find(r => r.user_id === (currentUser ? currentUser.uid : null));
    const avg = reviews.length ? (reviews.reduce((s,r) => s+r.rating,0)/reviews.length).toFixed(1) : null;

    document.getElementById('ratingSummary').innerHTML = avg ? `
      <div class="rating-summary">
        <div class="rating-avg">${avg}</div>
        <div class="rating-meta">
          <div class="rating-stars-small">${starsHTML(Math.round(avg),16)}</div>
          <div class="rating-count">${reviews.length} Bewertung${reviews.length!==1?'en':''}</div>
        </div>
      </div>` : `<div style='padding:12px 16px;font-size:13px;color:var(--text-3)'>${t('no_ratings')}</div>`;

    if (myReview) {
      document.getElementById('reviewForm').innerHTML = `
        <div class="own-review-note">
          <div style="display:flex;align-items:center;justify-content:space-between;margin-bottom:6px">
            <span style='font-size:13px;font-weight:600;color:var(--text-1)'>${t('your_rating')}</span>
            <div style="display:flex;gap:8px">
              <button onclick="editReview('${myReview.id}','${listingId}',${myReview.rating})" style='font-size:11px;font-weight:600;color:var(--yellow-dark);background:var(--yellow-light);border:1px solid var(--yellow);border-radius:8px;padding:4px 10px;cursor:pointer'>${t('edit')}</button>
              <button onclick="deleteReview('${myReview.id}','${listingId}')" style='font-size:11px;font-weight:600;color:var(--red);background:var(--red-light);border:1px solid var(--red);border-radius:8px;padding:4px 10px;cursor:pointer'>${t('delete')}</button>
            </div>
          </div>
          <div>${starsHTML(myReview.rating,18)}</div>
          ${myReview.comment ? `<div style="font-size:13px;color:var(--text-2);margin-top:6px;font-style:italic">"${myReview.comment}"</div>` : ''}
        </div>`;
    } else {
      currentUserRating = 0;
      document.getElementById('reviewForm').innerHTML = `
        <div class="review-form">
          <div class="review-form-title">${t('rate_now')}</div>
          <div class="review-stars" id="reviewStars">
            ${[1,2,3,4,5].map(i => `<span class="star" data-val="${i}" onclick="setRating(${i})">&#9733;</span>`).join('')}
          </div>
          <textarea class='review-textarea' id='reviewText' placeholder='${t("rate_optional")}'></textarea>
          <button class="review-submit" id="reviewSubmitBtn" onclick="submitReview('${listingId}')">${t('rate_submit')}</button>
        </div>`;
    }

    document.getElementById('reviewsList').innerHTML = reviews.filter(r => r.comment).map(r => `
      <div class="review-item">
        <div class="review-item-top">
          <span class="review-item-name">${r.user_name||'Anonym'}</span>
          <div class="review-item-stars">${starsHTML(r.rating,12)}</div>
        </div>
        <div class="review-item-text" data-original="${r.comment}">${r.comment}</div>
        <div class="review-item-date">${formatDate(r.created_at)}</div>
      </div>`).join('');
  }

  window.addEventListener('load', function() { (function() {
    let startY = 0, pulling = false, triggered = false;
    const el = document.querySelector('.listings');
    if (!el) return;
    setupPTR(el, 'pullIndicator', function(){ loadListings(); });
      })(); });

  function setupPTR(el, indicatorId, onRefresh) {
    if (!el) return;
    var startY = 0, pulling = false, triggered = false;
    el.addEventListener('touchstart', function(e) {
      if (el.scrollTop === 0) { startY = e.touches[0].clientY; pulling = true; triggered = false; }
    }, { passive: true });
    el.addEventListener('touchmove', function(e) {
      if (!pulling) return;
      var dy = e.touches[0].clientY - startY;
      if (dy > 0 && el.scrollTop === 0) {
        var ind = document.getElementById(indicatorId);
        if (!ind) return;
        var arrow = ind.querySelector('.ptr-arrow');
        var txt = ind.querySelector('.ptr-text');
        var pull = Math.min(dy, 80);
        ind.style.height = (pull * 0.7) + 'px';
        if (arrow) arrow.style.transform = pull > 55 ? 'rotate(180deg)' : '';
        if (pull > 55 && !triggered) { triggered = true; if(txt) txt.textContent = t('ptr_release') || 'Loslassen...'; }
        if (pull <= 55 && triggered) { triggered = false; if(txt) txt.textContent = t('ptr_pull') || 'Aktualisieren'; }
      }
    }, { passive: true });
    el.addEventListener('touchend', function() {
      if (!pulling) return;
      pulling = false;
      var ind = document.getElementById(indicatorId);
      if (ind) {
        ind.style.height = '0';
        var arrow = ind.querySelector('.ptr-arrow');
        var txt = ind.querySelector('.ptr-text');
        if (arrow) arrow.style.transform = '';
        if (txt) txt.textContent = t('ptr_pull') || 'Aktualisieren';
      }
      if (triggered) { triggered = false; onRefresh(); }
    });
  }

  function isNew(c){if(!c)return false;try{var d=c.toDate?c.toDate():new Date(c);return(Date.now()-d.getTime())<1209600000;}catch(e){return false;}}

  const subcatTranslations = {
    'Alle': 'Todo', 'Restaurant': 'Restaurante', 'Café': 'Café', 'Bar': 'Bar',
    'Parrilla': 'Parrilla', 'Fast Food': 'Comida rápida', 'Bäckerei': 'Panadería',
    'Arzt': 'Médico', 'Zahnarzt': 'Dentista', 'Anwalt': 'Abogado', 'Notar': 'Notario',
    'Bank': 'Banco', 'Handwerker': 'Artesano', 'Schule': 'Escuela',
    'Übersetzung': 'Traducción', 'Behörde': 'Institución',
    'Strand': 'Playa', 'Park': 'Parque', 'Museum': 'Museo', 'Kirche': 'Iglesia',
    'Aussichtspunkt': 'Mirador', 'Natur': 'Naturaleza',
    'Hotel': 'Hotel', 'Hostel': 'Hostel', 'Ferienwohnung': 'Apartamento',
    'B&B': 'B&B', 'Camping': 'Camping',
    'Supermarkt': 'Supermercado', 'Markt': 'Mercado', 'Apotheke': 'Farmacia',
    'Elektronik': 'Electrónica', 'Kleidung': 'Ropa', 'Baumarkt': 'Ferretería',
    'Fitnessstudio': 'Gimnasio', 'Kampfsport': 'Artes marciales',
    'Yoga & Pilates': 'Yoga & Pilates', 'Schwimmbad': 'Piscina',
    'Fußball': 'Fútbol', 'Tennis': 'Tenis', 'Radfahren': 'Ciclismo',
    'Crossfit': 'Crossfit', 'Klettern': 'Escalada',
    'Tankstelle': 'Gasolinera', 'Autowaschanlage': 'Lavadero de autos', 'Reifenservice': 'Servicio de neumáticos',
    'Frisör': 'Peluquería', 'Beauty-Salon': 'Salón de belleza', 'Spa & Wellness': 'Spa & Bienestar',
    'Nagelpflege': 'Manicura', 'Barbershop': 'Barbería', 'Massage': 'Masaje',
  };
  function tSubcat(s) { return (currentLang==='es' && subcatTranslations[s]) ? subcatTranslations[s] : s; }

  function renderLegalScreens() {
    var de = currentLang === 'de';
    var pil=document.getElementById('profilImpressumLabel'); if(pil) pil.textContent=de?'Impressum':'Aviso Legal';
    var pdl=document.getElementById('profilDatenschutzLabel'); if(pdl) pdl.textContent=de?'Datenschutz':'Privacidad';
    var pal=document.getElementById('profilAgbLabel'); if(pal) pal.textContent=de?'Nutzungsbedingungen':'Términos de Uso';
    var el = function(id){return document.getElementById(id);};
    if(el('impressumTitle')) el('impressumTitle').textContent = de?'Impressum':'Aviso Legal';
    if(el('impressumBody')) el('impressumBody').innerHTML = de?'<p style="font-weight:700;color:var(--text-1);font-size:16px;margin-bottom:12px">Impressum</p><p><strong>Verantwortlich:</strong><br>Maxime Christalle<br>San Bernardino, Cordillera, Paraguay<br>maximechristalle@gmail.com</p><br><p>Buscar ist ein privates Informationsprojekt ohne kommerziellen Charakter.</p>':'<p style="font-weight:700;color:var(--text-1);font-size:16px;margin-bottom:12px">Aviso Legal</p><p><strong>Responsable:</strong><br>Maxime Christalle<br>San Bernardino, Cordillera, Paraguay<br>maximechristalle@gmail.com</p><br><p>Buscar es un proyecto de información privado sin fines comerciales.</p>';
    if(el('datenschutzTitle')) el('datenschutzTitle').textContent = de?'Datenschutz':'Privacidad';
    if(el('datenschutzBody')) el('datenschutzBody').innerHTML = de?'<p style="font-weight:700;color:var(--text-1);font-size:16px;margin-bottom:12px">Datenschutzerklärung</p><p><strong>Verantwortlicher:</strong><br>Maxime Christalle, San Bernardino, Paraguay, maximechristalle@gmail.com</p><br><p><strong>Daten:</strong><br>E-Mail, Benutzername, Fotos. Keine Weitergabe ohne Einwilligung.</p><br><p><strong>Firebase:</strong><br><a href="https://firebase.google.com/support/privacy" target="_blank" style="color:var(--yellow)">firebase.google.com/support/privacy</a></p><br><p><strong>Rechte:</strong><br>maximechristalle@gmail.com</p>':'<p style="font-weight:700;color:var(--text-1);font-size:16px;margin-bottom:12px">Política de Privacidad</p><p><strong>Responsable:</strong><br>Maxime Christalle, San Bernardino, Paraguay, maximechristalle@gmail.com</p><br><p><strong>Datos:</strong><br>Correo, nombre, fotos. Sin cesión a terceros.</p><br><p><strong>Firebase:</strong><br><a href="https://firebase.google.com/support/privacy" target="_blank" style="color:var(--yellow)">firebase.google.com/support/privacy</a></p><br><p><strong>Derechos:</strong><br>maximechristalle@gmail.com</p>';
    if(el('agbTitle')) el('agbTitle').textContent = de?'Nutzungsbedingungen':'Términos de Uso';
    if(el('agbBody')) el('agbBody').innerHTML = de?'<p style="font-weight:700;color:var(--text-1);font-size:16px;margin-bottom:12px">Nutzungsbedingungen</p><p><strong>1. Geltungsbereich</strong><br>Diese Nutzungsbedingungen gelten für die Verwendung der App Buscar, erreichbar unter escapedeutschland.github.io/buscar-app. Mit der Nutzung der App erklärt sich der Nutzer mit diesen Bedingungen einverstanden.</p><br><p><strong>2. Nutzung der App</strong><br>Buscar ist ein kostenloses Informationsverzeichnis für deutschsprachige Personen in Paraguay. Die Nutzung ist für alle registrierten Nutzer kostenlos. Jeder Nutzer verpflichtet sich, keine falschen, irreführenden, beleidigenden oder rechtswidrigen Inhalte einzustellen.</p><br><p><strong>3. Einträge und Inhalte</strong><br>Jeder registrierte Nutzer kann Einträge erstellen und Fotos hochladen. Der Betreiber behält sich vor, Einträge, Fotos oder Kommentare ohne Angabe von Gründen zu entfernen. Spam, unerwünschte Werbung und missbräuchliche Nutzung sind nicht gestattet.</p><br><p><strong>4. Verantwortung der Nutzer</strong><br>Jeder Nutzer ist für die von ihm erstellten Inhalte selbst verantwortlich. Es dürfen keine Bilder von Personen ohne deren Einwilligung hochgeladen werden. Urheberrechtlich geschütztes Material darf nicht ohne Erlaubnis verwendet werden.</p><br><p><strong>5. Haftungsausschluss</strong><br>Buscar übernimmt keine Gewähr für die Richtigkeit, Vollständigkeit oder Aktualität der gelisteten Einträge. Die Nutzung erfolgt auf eigene Verantwortung des Nutzers.</p><br><p><strong>6. Datenschutz</strong><br>Die Verarbeitung personenbezogener Daten erfolgt gemäß unserer Datenschutzerklärung, die in der App einsehbar ist.</p><br><p><strong>7. Änderungen</strong><br>Der Betreiber behält sich vor, diese Nutzungsbedingungen jederzeit zu ändern. Die jeweils aktuelle Version ist in der App einsehbar.</p>':'<p style="font-weight:700;color:var(--text-1);font-size:16px;margin-bottom:12px">Términos de Uso</p><p><strong>1. Ámbito de aplicación</strong><br>Estos términos de uso aplican al uso de la aplicación Buscar, disponible en escapedeutschland.github.io/buscar-app. Al usar la app, el usuario acepta estos términos.</p><br><p><strong>2. Uso de la aplicación</strong><br>Buscar es un directorio de información gratuito para personas de habla alemana en Paraguay. El uso es gratuito para todos los usuarios registrados. Cada usuario se compromete a no publicar contenido falso, engañoso, ofensivo o ilegal.</p><br><p><strong>3. Entradas y contenido</strong><br>Cualquier usuario registrado puede crear entradas y subir fotos. El administrador se reserva el derecho de eliminar entradas, fotos o comentarios sin justificación. No se permite el spam, publicidad no solicitada ni el uso abusivo.</p><br><p><strong>4. Responsabilidad del usuario</strong><br>Cada usuario es responsable del contenido que publica. No se deben subir imágenes de personas sin su consentimiento. No se puede utilizar material protegido por derechos de autor sin autorización.</p><br><p><strong>5. Limitación de responsabilidad</strong><br>Buscar no garantiza la exactitud, integridad ni actualidad de las entradas listadas. El uso es bajo la propia responsabilidad del usuario.</p><br><p><strong>6. Privacidad</strong><br>El tratamiento de datos personales se realiza conforme a nuestra política de privacidad, disponible en la aplicación.</p><br><p><strong>7. Modificaciones</strong><br>El administrador se reserva el derecho de modificar estos términos en cualquier momento. La versión actualizada estará siempre disponible en la aplicación.</p>';
  }

  function isOpen(hours) {
    if (!hours) return null;
    try {
      const now = new Date();
      const day = now.getDay(); // 0=Sun, 1=Mon, ..., 6=Sat
      const h = now.getHours();
      const m = now.getMinutes();
      const nowMin = h * 60 + m;

      // Parse "Mo-Fr 08:00-18:00" or "täglich 08:00-22:00" etc.
      const lower = hours.toLowerCase();
      let activeToday = false;
      if (lower.includes('täglich')) activeToday = true;
      else if (lower.includes('mo-fr') && day >= 1 && day <= 5) activeToday = true;
      else if (lower.includes('mo-sa') && day >= 1 && day <= 6) activeToday = true;
      else if (lower.includes('mo-so') && day >= 1) activeToday = true;
      else if (lower.includes('mo-so') && day === 0) activeToday = true;
      else if (lower.includes('sa-so') && (day === 0 || day === 6)) activeToday = true;
      if (!activeToday) return false;

      // Extract time blocks like "08:00-18:00" (can have two blocks separated by &)
      const blocks = hours.match(/(\d{1,2}):(\d{2})\s*-\s*(\d{1,2}):(\d{2})/g);
      if (!blocks) return null;

      for (const block of blocks) {
        const match = block.match(/(\d{1,2}):(\d{2})\s*-\s*(\d{1,2}):(\d{2})/);
        if (!match) continue;
        const fromMin = parseInt(match[1])*60 + parseInt(match[2]);
        let toMin = parseInt(match[3])*60 + parseInt(match[4]);
        if (toMin === 0) toMin = 24*60; // 00:00 = end of day
        if (toMin < fromMin) {
          // Overnight - check if now is after from OR before to
          if (nowMin >= fromMin || nowMin < toMin) return true;
        } else {
          if (nowMin >= fromMin && nowMin < toMin) return true;
        }
      }
      return false;
    } catch(e) { return null; }
  }

  function setRating(val) {
    currentUserRating = val;
    document.querySelectorAll('#reviewStars .star').forEach(s => {
      s.classList.toggle('active', parseInt(s.dataset.val) <= val);
    });
  }

  async function submitReview(listingId) {
    if (!currentUser || currentUserRating === 0) return;
    const btn = document.getElementById('reviewSubmitBtn');
    btn.disabled = true; btn.textContent = 'Wird gesendet...';
    try {
      const userDoc = await db.collection('users').doc(currentUser.uid).get();
      const userName = userDoc.exists ? (userDoc.data().username || userDoc.data().name) : currentUser.email.split('@')[0];
      await db.collection('reviews').add({
        listing_id: listingId, user_id: currentUser.uid, user_name: userName,
        rating: currentUserRating, comment: document.getElementById('reviewText').value.trim(),
        created_at: new Date()
      });
      await loadAllRatings();
      loadReviews(listingId);
      renderListings();
    } catch (err) { alert('Fehler.'); btn.disabled=false; btn.textContent='Bewertung abschicken'; }
  }

  async function loadComments(listingId) {
    const snap = await db.collection('comments').where('listing_id','==',listingId).orderBy('created_at','desc').get();
    const allComments = snap.docs.map(d => ({id:d.id, ...d.data()}));
    const topLevel = allComments.filter(c => !c.parent_id);
    const repliesMap = {};
    allComments.forEach(c => {
      if (c.parent_id) {
        if (!repliesMap[c.parent_id]) repliesMap[c.parent_id] = [];
        repliesMap[c.parent_id].push(c);
      }
    });
    const list = document.getElementById('commentsList');
    if (!topLevel.length) { list.innerHTML = '<div style="padding:12px 16px;font-size:13px;color:var(--text-3)">Noch keine Kommentare.</div>'; return; }
    list.innerHTML = topLevel.map(c => {
      const replies = (repliesMap[c.id] || []).sort((a,b) => (a.created_at?.toDate?.()||0) - (b.created_at?.toDate?.()||0));
      const myComment = currentUser && c.user_id === currentUser.uid;
      const repliesHTML = replies.map(r => {
        const myReply = currentUser && r.user_id === currentUser.uid;
        return `<div class="reply-item">
          <div class="reply-item-top">
            <span class="reply-item-name">${r.user_name||'Anonym'}</span>
            <span class="reply-item-date">${formatDate(r.created_at)}</span>
            ${myReply ? `<button onclick="deleteComment('${r.id}','${listingId}')" style="margin-left:6px;font-size:10px;color:var(--red);background:none;border:none;cursor:pointer;padding:0">${t('delete')}</button>` : ''}
          </div>
          <div class="reply-item-text" data-original="${r.text}">${r.text}</div>
        </div>`;
      }).join('');
      return `<div class="comment-item">
        <div class="comment-item-top">
          <span class="comment-item-name">${c.user_name||'Anonym'}</span>
          <span class="comment-item-date">${formatDate(c.created_at)}</span>
          ${myComment ? `<button onclick="deleteComment('${c.id}','${listingId}')" style="margin-left:6px;font-size:10px;color:var(--red);background:none;border:none;cursor:pointer;padding:0">${t('delete')}</button>` : ''}
        </div>
        <div class="comment-item-text" data-original="${c.text}">${c.text}</div>
        <button class="reply-btn" onclick="toggleReplyForm('${c.id}')">${t('reply')}</button>
        ${repliesHTML}
        <div class="reply-form" id="replyForm_${c.id}" style="display:none;margin-top:8px">
          <textarea class="comment-input" id="replyInput_${c.id}" placeholder="Antwort..." rows="1"></textarea>
          <button class="comment-send" onclick="submitReply('${listingId}','${c.id}')"><svg viewBox="0 0 24 24" fill="none" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><line x1="22" y1="2" x2="11" y2="13"/><polygon points="22 2 15 22 11 13 2 9 22 2"/></svg></button>
        </div>
      </div>`;
    }).join('');
  }

  async function deleteReview(reviewId, listingId) {
    if (!confirm('Bewertung löschen?')) return;
    try { await db.collection('reviews').doc(reviewId).delete(); await loadAllRatings(); loadReviews(listingId); renderListings(); } catch(e) { alert('Fehler.'); }
  }

  function editReview(reviewId, listingId, oldRating) {
    currentUserRating = oldRating;
    document.getElementById('reviewForm').innerHTML = `
      <div class="review-form"><div class="review-form-title">Bewertung bearbeiten</div>
        <div class="review-stars" id="reviewStars">
          ${[1,2,3,4,5].map(i => `<span class="star${i<=oldRating?' active':''}" data-val="${i}" onclick="setRating(${i})">&#9733;</span>`).join('')}
        </div>
        <textarea class="review-textarea" id="reviewText"></textarea>
        <button class="review-submit" onclick="updateReview('${reviewId}','${listingId}')">Aktualisieren</button>
      </div>`;
  }

  async function updateReview(reviewId, listingId) {
    try {
      await db.collection('reviews').doc(reviewId).update({
        rating: currentUserRating, comment: document.getElementById('reviewText').value.trim(), updated_at: new Date()
      });
      await loadAllRatings(); loadReviews(listingId); renderListings();
    } catch(e) { alert('Fehler.'); }
  }

  async function deleteComment(commentId, listingId) {
    if (!confirm('Kommentar löschen?')) return;
    try { await db.collection('comments').doc(commentId).delete(); loadComments(listingId); } catch(e) { alert('Fehler.'); }
  }

  function toggleReplyForm(commentId) {
    const f = document.getElementById('replyForm_'+commentId);
    f.style.display = f.style.display === 'none' ? 'flex' : 'none';
    if (f.style.display === 'flex') f.querySelector('textarea').focus();
  }

  async function submitReply(listingId, parentId) {
    const txt = document.getElementById('replyInput_'+parentId).value.trim();
    if (!currentUser || !txt) return;
    try {
      const userName = await getUsername();
      await db.collection('comments').add({
        listing_id: listingId, parent_id: parentId, user_id: currentUser.uid, user_name: userName,
        text: txt, created_at: new Date()
      });
      loadComments(listingId);
    } catch(e) { alert('Fehler.'); }
  }

  function showEditUsername() {
    const cur = document.getElementById('profilName').textContent;
    document.getElementById('newUsername').value = cur;
    document.getElementById('usernameChangeError').style.display = 'none';
    document.getElementById('usernameChangeSuccess').style.display = 'none';
    showScreen('screenEditUsername');
  }

  async function saveUsername() {
    const newName = document.getElementById('newUsername').value.trim();
    const err = document.getElementById('usernameChangeError');
    const succ = document.getElementById('usernameChangeSuccess');
    err.style.display = 'none'; succ.style.display = 'none';
    if (!/^[a-zA-Z0-9_]{3,30}$/.test(newName)) {
      err.textContent = 'Min. 3 Zeichen, nur Buchstaben, Zahlen und _.'; err.style.display = 'block'; return;
    }
    const taken = await db.collection('users').where('username','==',newName).get();
    if (!taken.empty && taken.docs[0].id !== currentUser.uid) {
      err.textContent = 'Bereits vergeben.'; err.style.display = 'block'; return;
    }
    try {
      await db.collection('users').doc(currentUser.uid).set({ username: newName }, { merge: true });
      document.getElementById('profilName').textContent = newName;
      succ.textContent = '✓ Gespeichert!'; succ.style.display = 'block';
      setTimeout(() => showScreen('screenProfil'), 1200);
    } catch(e) { err.textContent = 'Fehler.'; err.style.display = 'block'; }
  }

  function showEditPassword() {
    document.getElementById('currentPassword').value = '';
    document.getElementById('newPassword').value = '';
    document.getElementById('newPasswordConfirm').value = '';
    document.getElementById('passwordChangeError').style.display = 'none';
    document.getElementById('passwordChangeSuccess').style.display = 'none';
    showScreen('screenEditPassword');
  }

  async function savePassword() {
    const curPw = document.getElementById('currentPassword').value;
    const newPw = document.getElementById('newPassword').value;
    const confirmPw = document.getElementById('newPasswordConfirm').value;
    const err = document.getElementById('passwordChangeError');
    const succ = document.getElementById('passwordChangeSuccess');
    err.style.display='none'; succ.style.display='none';
    if (newPw.length < 6) { err.textContent='Min. 6 Zeichen.'; err.style.display='block'; return; }
    if (newPw !== confirmPw) { err.textContent='Passwörter stimmen nicht überein.'; err.style.display='block'; return; }
    try {
      const cred = firebase.auth.EmailAuthProvider.credential(currentUser.email, curPw);
      await currentUser.reauthenticateWithCredential(cred);
      await currentUser.updatePassword(newPw);
      succ.textContent = '✓ Passwort geändert!'; succ.style.display='block';
      setTimeout(() => showScreen('screenProfil'), 1500);
    } catch(e) {
      err.textContent = e.code === 'auth/wrong-password' ? 'Aktuelles Passwort falsch.' : 'Fehler.';
      err.style.display='block';
    }
  }

  async function getUsername() {
    const doc = await db.collection('users').doc(currentUser.uid).get();
    return doc.exists ? (doc.data().username || doc.data().name || currentUser.email.split('@')[0]) : currentUser.email.split('@')[0];
  }

  async function submitComment() {
    const txt = document.getElementById('commentInput').value.trim();
    if (!currentUser || !txt || !currentListingId) return;
    try {
      const userName = await getUsername();
      await db.collection('comments').add({
        listing_id: currentListingId, user_id: currentUser.uid, user_name: userName,
        text: txt, created_at: new Date()
      });
      document.getElementById('commentInput').value = '';
      loadComments(currentListingId);
    } catch(e) { alert('Fehler.'); }
  }

  async function loadPhotos(listingId) {
    const snap = await db.collection('listing_photos').where('listing_id','==',listingId).where('pending','==',false).get();
    const photos = snap.docs.map(d => ({id:d.id, ...d.data()}));
    const grid = document.getElementById('photosGrid');
    const canDelete = currentUser && currentUser.email === ADMIN_EMAIL;
    let html = photos.map(p => `<div class="photo-thumb-wrap" style="position:relative"><img class="photo-thumb" src="${p.url}" onclick="openLightbox('${p.url}')">${canDelete ? `<button onclick="deletePhoto('${p.id}','${p.path}',event)" style="position:absolute;top:4px;right:4px;width:24px;height:24px;background:rgba(0,0,0,0.6);border:none;border-radius:50%;color:white;font-size:14px;line-height:1;cursor:pointer;display:flex;align-items:center;justify-content:center">×</button>` : ''}</div>`).join('');
    if (currentUser) html += `<label class="photo-upload" for="photoFileInput" style="aspect-ratio:1;border:1.5px dashed var(--border);border-radius:12px;background:var(--bg);display:flex;flex-direction:column;align-items:center;justify-content:center;cursor:pointer;gap:4px"><svg viewBox="0 0 24 24" fill="none" stroke="var(--text-3)" stroke-width="2" stroke-linecap="round" width="22" height="22"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg><span style="font-size:11px;color:var(--text-3);font-weight:500">Foto hinzufügen</span></label>`;
    grid.innerHTML = html + `<input type="file" id="photoFileInput" accept="image/*" style="display:none" onchange="uploadPhoto(event)">`;
  }

  function compressImage(file, maxW, maxH, quality) {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.onload = e => {
        const img = new Image();
        img.onload = () => {
          let w = img.width, h = img.height;
          if (w > maxW) { h *= maxW/w; w = maxW; }
          if (h > maxH) { w *= maxH/h; h = maxH; }
          const canvas = document.createElement('canvas');
          canvas.width = w; canvas.height = h;
          canvas.getContext('2d').drawImage(img, 0, 0, w, h);
          canvas.toBlob(b => resolve(b), 'image/jpeg', quality);
        };
        img.src = e.target.result;
      };
      reader.readAsDataURL(file);
    });
  }

  async function deletePhoto(photoId, path, event) {
    event.stopPropagation();
    if (!confirm('Foto löschen?')) return;
    try {
      if (path) await storage.ref(path).delete().catch(()=>{});
      await db.collection('listing_photos').doc(photoId).delete();
      loadPhotos(currentListingId);
    } catch(e) { alert('Fehler.'); }
  }

  async function uploadPhoto(event) {
    if (!currentUser || !currentListingId) return;
    const file = event.target.files[0]; if (!file) return;
    const prog = document.getElementById('photoProgress'); prog.classList.add('visible'); prog.textContent='Wird komprimiert...';
    try {
      const blob = await compressImage(file, 1200, 1200, 0.7);
      prog.textContent='Wird hochgeladen...';
      const filename = Date.now() + '_' + Math.random().toString(36).substr(2,5) + '.jpg';
      const path = 'listings/' + currentListingId + '/' + filename;
      const ref = storage.ref(path);
      const snap = await ref.put(blob, { contentType: 'image/jpeg' });
      const url = await snap.ref.getDownloadURL();
      const isAdmin = currentUser.email === ADMIN_EMAIL;
      await db.collection('listing_photos').add({
        listing_id: currentListingId, url, path, user_id: currentUser.uid,
        pending: !isAdmin, created_at: new Date()
      });
      prog.textContent = isAdmin ? '✓ Hochgeladen!' : '✓ Foto wird geprüft!';
      setTimeout(() => prog.classList.remove('visible'), 2000);
      if (isAdmin) loadPhotos(currentListingId);
    } catch(e) { prog.textContent = 'Fehler.'; }
  }

  function openLightbox(url) { document.getElementById('lightboxImg').src = url; document.getElementById('photoLightbox').classList.add('visible'); }
  function closeLightbox() { document.getElementById('photoLightbox').classList.remove('visible'); }

  function handleFormPhotos(event) {
    const files = Array.from(event.target.files).slice(0, 3 - pendingFormPhotos.length);
    files.forEach(file => {
      const reader = new FileReader();
      reader.onload = e => {
        pendingFormPhotos.push({ file, preview: e.target.result });
        const idx = pendingFormPhotos.length - 1;
        const grid = document.getElementById('formPhotoGrid');
        const addBtn = grid.querySelector('label[for="formPhotoInput"]');
        const div = document.createElement('div');
        div.style.cssText = 'aspect-ratio:1;border-radius:12px;overflow:hidden;position:relative';
        div.innerHTML = `<img src="${e.target.result}" style="width:100%;height:100%;object-fit:cover"><button onclick="removeFormPhoto(${idx})" style="position:absolute;top:6px;right:6px;width:24px;height:24px;background:rgba(0,0,0,0.6);border:none;border-radius:50%;color:white;font-size:16px;line-height:1;cursor:pointer">×</button>`;
        grid.insertBefore(div, addBtn);
        if (pendingFormPhotos.length >= 3) addBtn.style.display = 'none';
      };
      reader.readAsDataURL(file);
    });
    event.target.value = '';
  }

  function removeFormPhoto(idx) {
    pendingFormPhotos.splice(idx, 1);
    const grid = document.getElementById('formPhotoGrid');
    Array.from(grid.children).forEach(c => { if (c.tagName !== 'INPUT' && !c.querySelector('input')) c.remove(); });
    const oldInput = document.getElementById('formPhotoInput');
    const photos = [...pendingFormPhotos];
    pendingFormPhotos = [];
    grid.innerHTML = `<label style="aspect-ratio:1;border:1.5px dashed var(--border);border-radius:12px;background:var(--bg);display:flex;flex-direction:column;align-items:center;justify-content:center;cursor:pointer;gap:4px" for="formPhotoInput"><svg viewBox="0 0 24 24" fill="none" stroke="var(--text-3)" stroke-width="2" stroke-linecap="round" width="24" height="24"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg><span style="font-size:11px;color:var(--text-3);font-weight:500">Foto hinzufügen</span></label><input type="file" id="formPhotoInput" accept="image/*" multiple style="display:none" onchange="handleFormPhotos(event)">`;
    photos.forEach(p => {
      pendingFormPhotos.push(p);
      const idx = pendingFormPhotos.length - 1;
      const addBtn = grid.querySelector('label[for="formPhotoInput"]');
      const div = document.createElement('div');
      div.style.cssText = 'aspect-ratio:1;border-radius:12px;overflow:hidden;position:relative';
      div.innerHTML = `<img src="${p.preview}" style="width:100%;height:100%;object-fit:cover"><button onclick="removeFormPhoto(${idx})" style="position:absolute;top:6px;right:6px;width:24px;height:24px;background:rgba(0,0,0,0.6);border:none;border-radius:50%;color:white;font-size:16px;line-height:1;cursor:pointer">×</button>`;
      grid.insertBefore(div, addBtn);
    });
  }

  async function uploadFormPhotos(listingId) {
    if (!pendingFormPhotos.length) return;
    const prog = document.getElementById('formPhotoProgress'); prog.style.display = 'block';
    for (let i = 0; i < pendingFormPhotos.length; i++) {
      prog.textContent = `Foto ${i+1}/${pendingFormPhotos.length} wird hochgeladen...`;
      try {
        const blob = await compressImage(pendingFormPhotos[i].file, 1200, 1200, 0.7);
        const filename = Date.now() + '_' + i + '.jpg';
        const path = 'listings/' + listingId + '/' + filename;
        const snap = await storage.ref(path).put(blob, { contentType: 'image/jpeg' });
        const url = await snap.ref.getDownloadURL();
        await db.collection('listing_photos').add({
          listing_id: listingId, url, path, user_id: currentUser.uid, pending: true, created_at: new Date()
        });
      } catch(e) {}
    }
    prog.textContent = '✓ Hochgeladen';
  }

  async function deleteAvatar() {
    if (!currentUser) return;
    if (!confirm('Foto wirklich entfernen?')) return;
    try {
      const userDoc = await db.collection('users').doc(currentUser.uid).get();
      if (userDoc.exists && userDoc.data().avatar_path) {
        await storage.ref(userDoc.data().avatar_path).delete().catch(()=>{});
      }
      await db.collection('users').doc(currentUser.uid).set({ avatar_url: null, avatar_path: null }, { merge: true });
      const name = document.getElementById('profilName').textContent;
      setAvatarDisplay(null, name.charAt(0).toUpperCase());
    } catch(e) { alert('Fehler.'); }
  }

  async function uploadAvatar(event) {
    if (!currentUser) return;
    const file = event.target.files[0]; if (!file) return;
    const prog = document.getElementById('avatarProgress'); prog.style.display='block';
    try {
      const blob = await compressImage(file, 400, 400, 0.85);
      const path = 'avatars/' + currentUser.uid + '.jpg';
      const snap = await storage.ref(path).put(blob, { contentType: 'image/jpeg' });
      const url = await snap.ref.getDownloadURL();
      await db.collection('users').doc(currentUser.uid).set({ avatar_url: url, avatar_path: path }, { merge: true });
      const name = document.getElementById('profilName').textContent;
      setAvatarDisplay(url, name.charAt(0).toUpperCase());
      prog.style.display='none';
    } catch(e) { prog.textContent='Fehler.'; }
  }

  let currentEditListingId = null;

  async function loadOwnerSection(listing) {
    const section = document.getElementById('detailOwnerSection');
    if (!currentUser) { section.innerHTML = ''; return; }
    if (listing.owner_id === currentUser.uid) {
      section.innerHTML = `<div class="detail-card owner-section verified">
        <div class="owner-badge">⭐ Verifizierter Inhaber</div>
        <button class="owner-edit-btn" onclick="openEditListing('${listing.id}')">Eintrag bearbeiten</button>
      </div>
      <div class="detail-card" style="background:linear-gradient(135deg,#FFF8EC 0%,white 100%)">
        <div style="display:flex;align-items:center;gap:10px;margin-bottom:12px">
          <div style="width:36px;height:36px;border-radius:50%;background:var(--yellow);display:flex;align-items:center;justify-content:center;color:white;font-weight:700"><svg viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="2.5" stroke-linecap="round" width="20" height="20"><path d="M12.89 1.45l8 4A2 2 0 0 1 22 7.24v9.53a2 2 0 0 1-1.11 1.79l-8 4a2 2 0 0 1-1.78 0l-8-4a2 2 0 0 1-1.11-1.79V7.24a2 2 0 0 1 1.11-1.79l8-4a2 2 0 0 1 1.78 0z"/></svg></div>
          <div><div style="font-size:14px;font-weight:700;color:var(--text-1)">Buscar-Deal verwalten</div><div style="font-size:11px;color:var(--text-3)">Biete einen Vorteil für App-Nutzer</div></div>
        </div>
        ${listing.deal_text ? `<div style="background:white;border:1px solid var(--border);border-radius:10px;padding:10px;margin-bottom:10px"><div style="font-size:12px;color:var(--text-3);margin-bottom:4px">Aktiver Deal:</div><div style="font-size:13px;font-weight:600;color:var(--text-1)">${listing.deal_text}</div>${listing.deal_code?`<div style="font-size:11px;color:#C2410C;margin-top:4px">Code: ${listing.deal_code}</div>`:''}</div>` : ''}
        <input class="field-input" type="text" id="ownerDealText" placeholder="Deal-Beschreibung (z.B. 10% Rabatt)" value="${listing.deal_text||''}" style="font-size:13px;padding:10px 12px;margin-bottom:8px">
        <input class="field-input" type="text" id="ownerDealCode" placeholder="Gutscheincode (optional)" value="${listing.deal_code||''}" style="font-size:13px;padding:10px 12px;margin-bottom:8px">
        <input class="field-input" type="text" id="ownerDealExpiry" placeholder="Gültig bis (z.B. 31.12.2025)" value="${listing.deal_expiry||''}" style="font-size:13px;padding:10px 12px;margin-bottom:8px">
        <div style="display:flex;gap:8px"><button onclick="saveOwnerDeal('${listing.id}')" style="flex:2;background:var(--yellow);color:white;border:none;border-radius:10px;padding:10px;font-weight:700;font-size:13px;cursor:pointer">Deal speichern</button>${listing.deal_text?`<button onclick="removeOwnerDeal('${listing.id}')" style="flex:1;background:var(--red-light);color:var(--red);border:none;border-radius:10px;padding:10px;font-weight:600;font-size:12px;cursor:pointer">Entfernen</button>`:''}</div>
      </div>`;
      return;
    }
    const claimSnap = await db.collection('claims').where('listing_id','==',listing.id).where('user_id','==',currentUser.uid).get();
    if (!claimSnap.empty) {
      const c = claimSnap.docs[0].data();
      if (c.status === 'pending') section.innerHTML = `<div class="detail-card owner-section">✓ Dein Claim wird geprüft...</div>`;
      else if (c.status === 'rejected') section.innerHTML = `<div class="detail-card owner-section">Dein Claim wurde leider abgelehnt.</div>`;
      else section.innerHTML = '';
      return;
    }
    section.innerHTML = `
      <div class="detail-card owner-section" id="claimDiv" style="padding:14px 16px">
        <button class="claim-btn" onclick="showClaimForm()" style="width:100%;background:var(--surface-2);color:var(--text-2);border:none;border-radius:10px;padding:10px 14px;font-family:'DM Sans',sans-serif;font-size:13px;font-weight:600;cursor:pointer">Ich bin der Inhaber dieses Ortes</button>
        <div style="font-size:11px;color:var(--text-3);text-align:center;margin-top:8px;line-height:1.4">Als verifizierter Inhaber kannst du diesen Eintrag selbst verwalten.</div>
        <div id="claimForm" style="display:none;margin-top:14px">
          <textarea class="field-textarea" id="claimReason" placeholder="Warum bist du der Inhaber? (z.B. Geschäftsführer seit 2020)" maxlength="300" style="font-size:13px"></textarea>
          <div style="display:flex;gap:8px;margin-top:8px">
            <button onclick="closeClaimForm()" style="flex:1;background:var(--surface-2);color:var(--text-1);border:none;border-radius:10px;padding:10px;font-weight:600;font-size:13px;cursor:pointer">Abbrechen</button>
            <button onclick="submitClaim('${listing.id}')" style="flex:1;background:var(--yellow);color:white;border:none;border-radius:10px;padding:10px;font-weight:700;font-size:13px;cursor:pointer">Anfrage senden</button>
          </div>
        </div>
      </div>`;
  }

  function showClaimForm() { document.getElementById('claimForm').style.display = 'block'; }
  function closeClaimForm() { document.getElementById('claimForm').style.display = 'none'; }

  async function submitClaim(listingId) {
    const reason = document.getElementById('claimReason').value.trim();
    if (!reason) { alert('Bitte begründen.'); return; }
    try {
      const userDoc = await db.collection('users').doc(currentUser.uid).get();
      await db.collection('claims').add({
        listing_id: listingId, user_id: currentUser.uid, user_email: currentUser.email,
        user_name: userDoc.exists ? (userDoc.data().username||userDoc.data().name) : currentUser.email.split('@')[0],
        reason, status: 'pending', created_at: new Date()
      });
      document.getElementById('claimDiv').innerHTML = `<div style="text-align:center;padding:8px"><div style="font-size:14px;color:var(--green);font-weight:600">✓ Anfrage gesendet!</div></div>`;
    } catch(e) { alert('Fehler.'); }
  }

  function openEditListing(id) {
    const l = allListings.find(x => x.id === id);
    if (!l) return;
    currentEditListingId = id;
    document.getElementById('editName').value = l.name || '';
    document.getElementById('editCity').value = l.city || '';
    document.getElementById('editDesc').value = l.description || '';
    document.getElementById('editPhone').value = l.phone || '';
    document.getElementById('editWebsite').value = l.website || '';
    document.getElementById('editAddress').value = l.address || '';
    document.getElementById('editHours').value = l.opening_hours || '';
    document.getElementById('editListingError').style.display = 'none';
    document.getElementById('editListingSuccess').style.display = 'none';
    document.getElementById('editListingBack').onclick = function() { showDetail(currentEditListingId); };
    showScreen('screenEditListing');
  }

  async function saveListingEdits() {
    if (!currentEditListingId) return;
    const err = document.getElementById('editListingError'); err.style.display = 'none';
    const name = document.getElementById('editName').value.trim();
    const city = document.getElementById('editCity').value.trim();
    const desc = document.getElementById('editDesc').value.trim();
    if (!name || !city || desc.length < 50) { err.textContent='Bitte alle Pflichtfelder ausfüllen.'; err.style.display='block'; return; }
    try {
      await db.collection('listings').doc(currentEditListingId).update({
        name, city, description: desc,
        phone: document.getElementById('editPhone').value.trim() || null,
        website: document.getElementById('editWebsite').value.trim() || null,
        address: document.getElementById('editAddress').value.trim() || null,
        opening_hours: document.getElementById('editHours').value.trim() || null,
        updated_at: new Date()
      });
      document.getElementById('editListingSuccess').style.display = 'block';
      await loadListings();
      setTimeout(() => showDetail(currentEditListingId), 1500);
    } catch(e) { err.textContent='Fehler.'; err.style.display='block'; }
  }

  let currentFavorites = new Set();

  async function loadFavoriteStatus(listingId) {
    if (!currentUser) { document.getElementById('favBtn').classList.remove('active'); return; }
    try {
      const doc = await db.collection('users').doc(currentUser.uid).get();
      if (doc.exists && doc.data().favorites) {
        currentFavorites = new Set(doc.data().favorites);
      }
      document.getElementById('favBtn').classList.toggle('active', currentFavorites.has(listingId));
    } catch(e) {}
  }

  async function toggleFavorite() {
    if (!currentUser || !currentListingId) return;
    const btn = document.getElementById('favBtn');
    if (currentFavorites.has(currentListingId)) {
      currentFavorites.delete(currentListingId);
      btn.classList.remove('active');
    } else {
      currentFavorites.add(currentListingId);
      btn.classList.add('active');
    }
    try {
      await db.collection('users').doc(currentUser.uid).set({ favorites: [...currentFavorites] }, { merge: true });
    } catch(e) {}
  }

  function showFavorites() {
    const body = document.getElementById('favoritesBody');
    const favs = allListings.filter(l => currentFavorites.has(l.id));
    if (!favs.length) {
      body.innerHTML = `<div class="empty-state"><div class="empty-icon"><svg viewBox="0 0 24 24" fill="none" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/></svg></div><div class="empty-title">Noch keine Favoriten</div><div class="empty-sub">Tippe auf das Herz in der Detailansicht</div></div>`;
    } else {
      body.innerHTML = favs.map(l => `<div class="listing-card" style="--cat-color:${catColors[l.category_id]||'#6B6B6B'}" onclick="showDetail('${l.id}')"><div class="listing-icon-wrap">${catIcons[l.category_id]||catIcons['default']}</div><div class="listing-body"><div class="listing-name">${l.name||''}</div><div class="listing-city">${l.city||''}</div><div class="listing-desc">${l.description||''}</div></div><div class="listing-arrow"><svg viewBox="0 0 24 24" fill="none" stroke-width="2.5" stroke-linecap="round"><polyline points="9 18 15 12 9 6"/></svg></div></div>`).join('');
    }
    showScreen('screenFavorites');
  }

  function updateSubcatOptions() {
    const cat = document.getElementById('newCategory').value;
    const field = document.getElementById('subcatField');
    const sel = document.getElementById('newSubcategory');
    if (cat && subcats[cat]) {
      const opts = subcats[cat].filter(s => s !== 'Alle');
      sel.innerHTML = '<option value="">Bitte wählen...</option>' + opts.map(s => `<option value="${s}">${s}</option>`).join('');
      field.style.display = 'block';
    } else { field.style.display = 'none'; }
  }

  let mapSubcatFilter = 'Alle';
  let mapMinStars = 0;
  let mapFilterMode = 'sub';

  function openMapCitySheet() {
    document.getElementById('mapCitySheetOverlay').classList.add('visible');
    document.getElementById('mapCitySearchInput').value = '';
    renderMapCitySheet('');
    setTimeout(() => document.getElementById('mapCitySearchInput').focus(), 100);
  }

  function closeMapCitySheet() {
    document.getElementById('mapCitySheetOverlay').classList.remove('visible');
  }

  function renderMapCitySheet(query) {
    const list = document.getElementById('mapCitySheetList');
    const q = query.toLowerCase().trim();
    const filtered = ALL_PY_CITIES.filter(c => !q || c.toLowerCase().includes(q));
    list.innerHTML = filtered.map(c => `
      <div class="city-sheet-item${mapCityFilter===c?' selected':''}" onclick="selectMapCity('${c}')">
        <svg viewBox="0 0 24 24" fill="none" stroke-width="2.5" stroke-linecap="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>
        <span>${c === 'Alle' ? '🌍 Alle Städte' : c}</span>
      </div>`).join('');
  }

  function filterMapCitySheet() { renderMapCitySheet(document.getElementById('mapCitySearchInput').value); }

  function selectMapCity(city) {
    mapCityFilter = city;
    document.getElementById('mapCityPickerLabel').textContent = city === 'Alle' ? 'Stadt wählen...' : city;
    document.getElementById('mapCityPickerBtn').style.background = city === 'Alle' ? 'var(--bg)' : 'var(--yellow-light)';
    closeMapCitySheet();
    _mapFitOnUpdate = true;
    if (city !== 'Alle' && maplibreMap) {
      const coords = mapCityCoords[city];
      if (coords) maplibreMap.flyTo({center:[coords[1],coords[0]],zoom:13,animate:false});
    }
    renderMap();
  }

  function openMapFilterSheet(mode) {
    mapFilterMode = mode;
    const overlay = document.getElementById('mapFilterSheetOverlay');
    overlay.classList.add('visible');
    const content = document.getElementById('mapFilterSheetContent');
    if (mode === 'sub') {
      document.getElementById('mapFilterSheetTitle').textContent = 'Unterkategorie';
      const cats = subcats[mapCategory] || [];
      if (!cats.length) { content.innerHTML = '<div style="padding:20px;text-align:center;color:var(--text-3)">Erst Kategorie wählen</div>'; return; }
      content.innerHTML = `<div class="filter-section"><div class="filter-chips">${cats.map(s => `<div class="filter-chip${mapSubcatFilter===s?' active':''}" onclick="selectMapFilterChip('${s}')">${tSubcat(s)}</div>`).join('')}</div></div>`;
    } else {
      document.getElementById('mapFilterSheetTitle').textContent = 'Mindest-Bewertung';
      content.innerHTML = `<div class="filter-section"><div class="filter-section-label">Minimum Sterne</div><div class="filter-star-row">
        <div class="filter-star-btn${mapMinStars===0?' active':''}" onclick="selectMapStarFilter(0)">Alle</div>
        <div class="filter-star-btn${mapMinStars===3?' active':''}" onclick="selectMapStarFilter(3)">3+ ★</div>
        <div class="filter-star-btn${mapMinStars===4?' active':''}" onclick="selectMapStarFilter(4)">4+ ★</div>
        <div class="filter-star-btn${mapMinStars===5?' active':''}" onclick="selectMapStarFilter(5)">5 ★</div>
      </div></div>`;
    }
  }

  function selectMapFilterChip(val) {
    mapSubcatFilter = val;
    document.querySelectorAll('#mapFilterSheetContent .filter-chip').forEach(c => c.classList.toggle('active', c.textContent === tSubcat(val) || c.textContent === val));
  }

  function selectMapStarFilter(val) {
    mapMinStars = val;
    document.querySelectorAll('#mapFilterSheetContent .filter-star-btn').forEach(b => b.classList.remove('active'));
    event.target.classList.add('active');
  }

  function closeMapFilterSheet() {
    document.getElementById('mapFilterSheetOverlay').classList.remove('visible');
  }

  function applyMapFilter() {
    closeMapFilterSheet();
    const subBtn = document.getElementById('mapFilterSubBtn');
    const starBtn = document.getElementById('mapFilterStarBtn');
    if (mapSubcatFilter !== 'Alle') { subBtn.classList.add('active'); document.getElementById('mapFilterSubLabel').textContent = tSubcat(mapSubcatFilter); }
    else { subBtn.classList.remove('active'); document.getElementById('mapFilterSubLabel').textContent = 'Typ'; }
    if (mapMinStars > 0) { starBtn.classList.add('active'); document.getElementById('mapFilterStarLabel').textContent = mapMinStars + '+ ★'; }
    else { starBtn.classList.remove('active'); document.getElementById('mapFilterStarLabel').textContent = '★'; }
    renderMap();
  }

  async function saveOwnerDeal(listingId) {
    const text = document.getElementById('ownerDealText').value.trim();
    const code = document.getElementById('ownerDealCode').value.trim();
    const expiry = document.getElementById('ownerDealExpiry').value.trim();
    try {
      await db.collection('listings').doc(listingId).update({
        deal_text: text || null, deal_code: code || null, deal_expiry: expiry || null
      });
      await loadListings();
      const l = allListings.find(x => x.id === listingId);
      if (l) showDetail(listingId);
    } catch(e) { alert('Fehler: ' + e.message); }
  }

  async function removeOwnerDeal(listingId) {
    if (!confirm('Deal wirklich entfernen?')) return;
    try {
      await db.collection('listings').doc(listingId).update({ deal_text: null, deal_code: null, deal_expiry: null });
      await loadListings();
      showDetail(listingId);
    } catch(e) { alert('Fehler.'); }
  }

  function copyDealCode(code) {
    navigator.clipboard.writeText(code).then(() => {
      const btn = event.target;
      const orig = btn.textContent;
      btn.textContent = '✓ Kopiert!';
      setTimeout(() => { btn.textContent = orig; }, 1500);
    }).catch(() => {});
  }

  function searchExisting(query, exclude) {
    const q = norm(query);
    return allListings.filter(l => l.id !== exclude && (norm(l.name||'').includes(q) || q.includes(norm(l.name||'').slice(0,5))));
  }

  let _dupTimer = null;
  function checkDuplicate() {
    clearTimeout(_dupTimer);
    _dupTimer = setTimeout(() => {
      const name = document.getElementById('newName').value.trim();
      const city = document.getElementById('newCity').value.trim();
      const warning = document.getElementById('dupeWarning');
      const list = document.getElementById('dupeList');
      if (name.length < 4) { warning.classList.remove('visible'); return; }
      const found = allListings.filter(l => {
        if (!l.name) return false;
        const nameSim = norm(l.name).includes(norm(name).slice(0,6)) || norm(name).includes(norm(l.name).slice(0,6));
        if (city) return nameSim && norm(l.city||'') === norm(city);
        return nameSim;
      }).slice(0, 3);
      if (found.length) {
        list.innerHTML = found.map(l => `<div class="dupe-item" onclick="showDetail('${l.id}')">${l.name} <span style="color:var(--text-3)">${l.city||''}</span></div>`).join('');
        warning.classList.add('visible');
      } else { warning.classList.remove('visible'); }
    }, 600);
  }

  document.getElementById('catsScroll').addEventListener('click', e => {
    const chip = e.target.closest('.cat-chip');
    if (!chip) return;
    document.querySelectorAll('#catsScroll .cat-chip').forEach(c => c.classList.remove('active'));
    chip.classList.add('active');
    activeCategory = chip.dataset.cat;
    // Show/hide filter bar based on category selection
    const filterBar = document.getElementById('filterBar');
    if (activeCategory === 'Alle') {
      filterBar.style.display = 'none';
      // Reset filters when going back to "All"
      activeSubcat = 'Alle'; activeMinStars = 0;
      const subBtn = document.getElementById('filterSubBtn'); const starBtn = document.getElementById('filterStarBtn');
      if (subBtn) subBtn.classList.remove('active'); if (starBtn) starBtn.classList.remove('active');
      const subLabel = document.getElementById('filterSubLabel'); const starLabel = document.getElementById('filterStarLabel');
      if (subLabel) subLabel.textContent = 'Unterkategorie'; if (starLabel) starLabel.textContent = 'Bewertung';
    } else { filterBar.style.display = 'block'; }
    renderListings();
  });

  const searchInput = document.getElementById('searchInput');
  const searchClear = document.getElementById('searchClear');
  searchInput.addEventListener('input', e => { searchQuery = e.target.value; searchClear.classList.toggle('visible', !!searchQuery); renderListings(); });
  searchClear.addEventListener('click', () => { searchQuery = ''; searchInput.value = ''; searchClear.classList.remove('visible'); renderListings(); });

  // Apply language on load
  applyLang();

  async function deleteCoverImage(listingId){
    if(!confirm('Titelbild entfernen?')) return;
    try {
      const l = allListings.find(x => x.id === listingId);
      if (l && l.cover_url) {
        // Try delete from storage (path is in cover_url query param after /o/)
        const match = l.cover_url.match(/\/o\/([^?]+)/);
        if (match) {
          const path = decodeURIComponent(match[1]);
          await storage.ref(path).delete().catch(()=>{});
        }
      }
      await db.collection('listings').doc(listingId).update({ cover_url: null });
      await loadListings();
      showDetail(listingId);
    } catch(e) { alert('Fehler.'); }
  }

  // Cover image file input
  window.addEventListener('load', function() {
    if(document.getElementById('coverFileInput')) return;
    var inp=document.createElement('input');
    inp.type='file';
    inp.accept='image/*';
    inp.id='coverFileInput';
    inp.style.display='none';
    inp.onchange=async function(e){
      var file=e.target.files[0];
      if(!file||!currentListingId)return;
      var hero=document.getElementById('detailHero');
      hero.style.opacity='0.6';
      try{
        var blob=await compressImage(file,1600,900,0.85);
        var path='covers/'+currentListingId+'.jpg';
        var snap=await storage.ref(path).put(blob,{contentType:'image/jpeg'});
        var url=await snap.ref.getDownloadURL();
        await db.collection('listings').doc(currentListingId).update({cover_url:url});
        await loadListings();
        showDetail(currentListingId);
      }catch(err){alert('Fehler beim Hochladen');}
      hero.style.opacity='1';
    };
    document.body.appendChild(inp);
  });

  // ── REPORTS ──────────────────────────────────────────────────────────────
  async function loadAdminReports() {
    document.getElementById('adminTabReports').style.color = 'white';
    document.getElementById('adminTabReports').style.borderBottom = '2px solid white';
    document.getElementById('adminTabListings').style.color = 'rgba(255,255,255,0.6)';
    document.getElementById('adminTabListings').style.borderBottom = 'none';
    document.getElementById('adminTabClaims').style.color = 'rgba(255,255,255,0.6)';
    document.getElementById('adminTabClaims').style.borderBottom = 'none';
    document.getElementById('adminTabDeals').style.color = 'rgba(255,255,255,0.6)';
    document.getElementById('adminTabDeals').style.borderBottom = 'none';
    const body = document.getElementById('adminBody');
    body.innerHTML = '<div style="text-align:center;padding:40px">Wird geladen...</div>';
    try {
      const snap = await db.collection('reports').where('status','==','pending').get();
      const reports = snap.docs.map(d => ({id:d.id, ...d.data()}));
      if (!reports.length) { body.innerHTML = '<div class="admin-empty"><div class="admin-empty-icon">✓</div><div class="admin-empty-text">Keine offenen Meldungen</div></div>'; return; }
      const reasonLabels = { closed:'🚫 Geschlossen', address:'📍 Falsche Adresse', phone:'📞 Falsche Telefonnummer', content:'⚠ Unangemessener Inhalt', other:'💬 Sonstiges' };
      body.innerHTML = reports.map(r => {
        const l = allListings.find(x => x.id === r.listing_id);
        return `<div class="admin-card" id="reportCard_${r.id}">
          <div class="admin-card-name">${l ? l.name : 'Eintrag gelöscht'}</div>
          <div class="admin-card-meta">${l ? l.city : ''} · ${formatDate(r.created_at)}</div>
          <div style="background:#FFF8EC;border-left:3px solid var(--yellow);padding:8px 10px;border-radius:6px;margin:8px 0;font-size:13px"><strong>${reasonLabels[r.reason]||r.reason}</strong></div>
          <div class="admin-actions">
            ${l ? `<button class="admin-btn approve" onclick="showDetail('${r.listing_id}')">Anschauen</button>` : ''}
            <button class="admin-btn reject" onclick="resolveReport('${r.id}')">Erledigt</button>
          </div>
        </div>`;
      }).join('');
    } catch(e) { body.innerHTML = '<div class="admin-empty"><div class="admin-empty-text">Fehler beim Laden</div></div>'; }
  }

  async function resolveReport(reportId) {
    try {
      await db.collection('reports').doc(reportId).update({ status: 'resolved' });
      document.getElementById('reportCard_'+reportId).remove();
    } catch(e) { alert('Fehler.'); }
  }

  function openReport() { document.getElementById('reportOverlay').classList.add('visible'); }
  function closeReport() { document.getElementById('reportOverlay').classList.remove('visible'); }

  async function submitReport(reason) {
    if (!currentUser || !currentListingId) { closeReport(); return; }
    try {
      await db.collection('reports').add({
        listing_id: currentListingId, user_id: currentUser.uid,
        reason: reason, status: 'pending', created_at: new Date()
      });
      closeReport();
      showToast('✅ Meldung gesendet. Danke!');
    } catch(e) { alert('Fehler.'); closeReport(); }
  }

  // Service Worker registrieren fuer Offline-Funktionalitaet
  if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
      navigator.serviceWorker.register('sw.js?v=76')
        .then(reg => { console.log('SW registered'); })
        .catch(err => { console.log('SW registration failed'); });
    });
  }

  function showMapNoCoordsNotice(show) {
    const el = document.getElementById('mapNoCoords');
    if (el) el.style.display = show ? 'block' : 'none';
  }

  // iOS touch debug overlay (nur mit ?debug=1)
  (function(){
    if (window.location.search.indexOf('debug=1') === -1) return;
    var dbg = document.createElement('div');
    dbg.style.cssText = 'position:fixed;bottom:80px;left:8px;right:8px;background:rgba(0,0,0,0.85);color:#0F0;font-family:monospace;font-size:10px;padding:6px;z-index:99999;max-height:120px;overflow:auto;border-radius:8px;pointer-events:none';
    document.body.appendChild(dbg);
    var log = function(msg) {
      var line = document.createElement('div');
      line.textContent = new Date().toISOString().slice(14,19) + ' ' + msg;
      dbg.appendChild(line);
      while (dbg.childElementCount > 20) dbg.removeChild(dbg.firstChild);
      dbg.scrollTop = dbg.scrollHeight;
    };
    ['touchstart','touchend','click'].forEach(function(evt){
      document.addEventListener(evt, function(e){
        var t = e.target;
        var sel = t.tagName + (t.id?'#'+t.id:'') + (t.className && typeof t.className === 'string' ? '.'+t.className.split(' ')[0] : '');
        log(evt + ' ' + sel.slice(0,40));
      }, true);
    });
    log('DEBUG ON');
  })();

  // Click-Bridge fuer iOS PWA (touchstart -> synthetisierter click)
  (function() {
    var touchMoved = false, touchTarget = null, touchStartTime = 0;
    document.addEventListener('touchstart', function(e) {
      touchMoved = false;
      touchTarget = e.target;
      touchStartTime = Date.now();
    }, { passive: true, capture: true });
    document.addEventListener('touchmove', function() {
      touchMoved = true;
    }, { passive: true, capture: true });
    document.addEventListener('touchend', function(e) {
      if (touchMoved) return;
      if (Date.now() - touchStartTime > 700) return;
      var t = touchTarget;
      while (t && t !== document.body) {
        if (t.onclick || t.hasAttribute('onclick') || t.tagName === 'BUTTON' || t.tagName === 'A') {
          break;
        }
        t = t.parentElement;
      }
    }, { passive: true, capture: true });
  })();
