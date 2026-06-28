const ADMIN_EMAIL = 'maximechristalle@gmail.com';

  let currentLang = localStorage.getItem('buscar_lang') || 'de';

  const translations = {
    de: {
      // Navigation
      nav_home: 'Home', nav_map: 'Karte', nav_entry: 'Eintrag', nav_profile: 'Profil',
      // Header
      greet_morning: 'Guten Morgen', greet_day: 'Guten Tag', greet_evening: 'Guten Abend', greet_night: 'Gute Nacht',
      header_sub: 'Was suchst du heute?',
      location_tip: '💡 Tipp: Tippe auf „Meinen Standort verwenden" – danach kannst du den Pin auf der Karte frei verschieben oder antippen, um den Ort genau zu setzen.',
      timeblock1: '1. Zeitblock', timeblock2: '2. Zeitblock (optional)',
      refresh_btn: 'Aktualisieren', map_no_coords: 'Einige Orte haben noch keine Koordinaten', remove_photo: 'Foto entfernen',
      grundstueck_lbl: 'Grundstück', flaeche_lbl: 'Fläche',
      day_daily: 'Täglich', day_mofr: 'Mo – Fr', day_mosa: 'Mo – Sa', day_moso: 'Mo – So', day_saso: 'Sa – So',
      pub_visible: 'Öffentlich sichtbar in der App', owner_only: 'Nur für verifizierte Inhaber',
      email_change_hint: 'Bestätigung per Link an die neue Adresse', send_confirm_link: 'Bestätigungslink senden',
      save_changes: 'Änderungen speichern', changes_saved: 'Änderungen gespeichert!',
      pin_hint: 'Pin auf der Karte verschieben oder antippen, um den Standort zu ändern.',
      choose_city: 'Stadt wählen',
      adm_all_entries: 'Alle Einträge', adm_review: 'Einträge prüfen', adm_all_checked: 'Alles geprüft!', adm_none_open: 'Keine offenen Einträge.', adm_similar: '⚠️ Ähnliche Einträge gefunden – bitte prüfen:',
      err_generic: 'Fehler.', err_prefix: 'Fehler: ',
      report_detail_ph: 'Kurz beschreiben, was nicht stimmt (optional)',
      link_copied: '🔗 Link kopiert',
      share_cta: 'Entdeckt auf Buscar – dem Guide für Paraguay. Lade dir die App auch herunter! 👇',
      saving: 'Wird gespeichert...',
      locfix_btn_edit: 'Standort korrigieren', locfix_btn_suggest: 'Standort stimmt nicht?',
      locfix_edit_title: 'Standort korrigieren', locfix_suggest_title: 'Standort vorschlagen',
      locfix_hint_edit: 'Pin verschieben oder Karte antippen, um den Standort zu setzen.',
      locfix_hint_suggest: 'Zieh den Pin an die richtige Stelle. Dein Vorschlag wird vom Team geprüft.',
      locfix_save: 'Standort speichern', locfix_send: 'Vorschlag senden',
      locfix_thanks: '✅ Danke! Dein Standort-Vorschlag wird geprüft.',
      del_entry_confirm: 'Eintrag wirklich löschen?', del_review_confirm: 'Bewertung löschen?', del_comment_confirm: 'Kommentar löschen?', del_photo_confirm: 'Foto löschen?', del_deal_confirm: 'Deal wirklich entfernen?', cancel_event_confirm: 'Event wirklich absagen?',
      toast_coords_saved: '✅ Koordinaten gespeichert!', toast_no_entry: 'Kein Eintrag gewählt.', toast_photo_uploaded: '✓ Foto hochgeladen', toast_photo_submitted: '✓ Foto eingereicht – wird geprüft und nach Freigabe sichtbar', toast_report_sent: '✅ Meldung gesendet. Danke!', toast_entry_deleted: '✓ Eintrag gelöscht',
      err_event_load: 'Event konnte nicht geladen werden.', err_sold_out: 'Leider ausgebucht.', err_already_signed: 'Du bist bereits angemeldet.', err_reason: 'Bitte begründen.', err_upload: 'Fehler beim Hochladen',
      ev_type_party: '🎊 Party', ev_type_festival: '🎪 Festival', ev_type_konzert: '🎵 Konzert', ev_type_retreat: '🧘 Retreat', ev_type_workshop: '🛠 Workshop',
      // Search
      search_placeholder: 'Arzt, Restaurant, Anwalt...',
      // Categories
      cat_all: 'Alle', cat_restaurants: 'Restaurants', cat_services: 'Dienstleistungen',
      cat_immobilien: 'Immobilien', immo_tile: 'Immobilien', immo_tile_sub: 'Kaufen & mieten in Paraguay', immo_title: 'Immobilien',
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
      desc_placeholder: 'Beschreibe den Ort für andere Nutzer. Was macht ihn besonders? Worauf sollte man achten?',
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
      change_password: 'Passwort ändern', change_email: 'E-Mail ändern', my_favorites: 'Meine Favoriten',
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
      ev_website_label: 'Website / Tickets (optional)', ev_tickets_info: 'Tickets & Infos',
      ev_free: 'Kostenlos', ev_paid_label: 'Kostenpflichtig',
      ev_spots: 'Plätze frei', ev_full: 'Ausgebucht', ev_cancelled: 'Abgesagt',
      ev_none_filter: 'Keine Events für diesen Filter', ev_none_city: 'Aktuell keine Events in {city}', ev_show_all_cities: 'Alle Städte anzeigen',
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
      location_tip: '💡 Consejo: Toca „Usar mi ubicación" – luego puedes mover el pin en el mapa o tocarlo para fijar el lugar con precisión.',
      timeblock1: 'Horario 1', timeblock2: 'Horario 2 (opcional)',
      refresh_btn: 'Actualizar', map_no_coords: 'Algunos lugares aún no tienen coordenadas', remove_photo: 'Quitar foto',
      grundstueck_lbl: 'Terreno', flaeche_lbl: 'Superficie',
      day_daily: 'A diario', day_mofr: 'Lu – Vi', day_mosa: 'Lu – Sá', day_moso: 'Lu – Do', day_saso: 'Sá – Do',
      pub_visible: 'Visible públicamente en la app', owner_only: 'Solo para propietarios verificados',
      email_change_hint: 'Confirmación por enlace a la nueva dirección', send_confirm_link: 'Enviar enlace de confirmación',
      save_changes: 'Guardar cambios', changes_saved: '¡Cambios guardados!',
      pin_hint: 'Mueve o toca el pin en el mapa para cambiar la ubicación.',
      choose_city: 'Elegir ciudad',
      adm_all_entries: 'Todas las entradas', adm_review: 'Revisar entradas', adm_all_checked: '¡Todo revisado!', adm_none_open: 'No hay entradas pendientes.', adm_similar: '⚠️ Se encontraron entradas similares — por favor revisa:',
      err_generic: 'Error.', err_prefix: 'Error: ',
      report_detail_ph: 'Describe brevemente qué pasa (opcional)',
      link_copied: '🔗 Enlace copiado',
      share_cta: 'Descubierto en Buscar – la guía para Paraguay. ¡Descargate la app también! 👇',
      saving: 'Guardando...',
      locfix_btn_edit: 'Corregir ubicación', locfix_btn_suggest: '¿Ubicación incorrecta?',
      locfix_edit_title: 'Corregir ubicación', locfix_suggest_title: 'Sugerir ubicación',
      locfix_hint_edit: 'Mové el pin o tocá el mapa para fijar la ubicación.',
      locfix_hint_suggest: 'Mové el pin al lugar correcto. Tu sugerencia será revisada por el equipo.',
      locfix_save: 'Guardar ubicación', locfix_send: 'Enviar sugerencia',
      locfix_thanks: '✅ ¡Gracias! Tu sugerencia de ubicación será revisada.',
      del_entry_confirm: '¿Eliminar la entrada de verdad?', del_review_confirm: '¿Eliminar la reseña?', del_comment_confirm: '¿Eliminar el comentario?', del_photo_confirm: '¿Eliminar la foto?', del_deal_confirm: '¿Quitar la oferta de verdad?', cancel_event_confirm: '¿Cancelar el evento de verdad?',
      toast_coords_saved: '✅ ¡Coordenadas guardadas!', toast_no_entry: 'Ninguna entrada seleccionada.', toast_photo_uploaded: '✓ Foto subida', toast_photo_submitted: '✓ Foto enviada – se revisará y será visible tras la aprobación', toast_report_sent: '✅ ¡Reporte enviado. Gracias!', toast_entry_deleted: '✓ Entrada eliminada',
      err_event_load: 'No se pudo cargar el evento.', err_sold_out: 'Lamentablemente agotado.', err_already_signed: 'Ya estás inscrito.', err_reason: 'Por favor indica un motivo.', err_upload: 'Error al subir',
      ev_type_party: '🎊 Fiesta', ev_type_festival: '🎪 Festival', ev_type_konzert: '🎵 Concierto', ev_type_retreat: '🧘 Retiro', ev_type_workshop: '🛠 Taller',
      // Búsqueda
      search_placeholder: 'Médico, Restaurante, Abogado...',
      // Categorías
      cat_all: 'Todos', cat_restaurants: 'Restaurantes', cat_services: 'Servicios',
      cat_immobilien: 'Inmuebles', immo_tile: 'Inmuebles', immo_tile_sub: 'Comprar y alquilar en Paraguay', immo_title: 'Inmuebles',
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
      change_password: 'Cambiar contraseña', change_email: 'Cambiar correo', my_favorites: 'Mis favoritos',
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
      ev_website_label: 'Sitio web / Entradas (opcional)', ev_tickets_info: 'Entradas e info',
      ev_free: 'Gratis', ev_paid_label: 'Con costo',
      ev_spots: 'lugares disponibles', ev_full: 'Agotado', ev_cancelled: 'Cancelado',
      ev_none_filter: 'No hay eventos para este filtro', ev_none_city: 'Actualmente no hay eventos en {city}', ev_show_all_cities: 'Mostrar todas las ciudades',
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

  // Escape user-generated text before inserting into innerHTML (prevents XSS & broken attributes)
  function esc(s) {
    return String(s == null ? '' : s)
      .replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;').replace(/'/g, '&#39;');
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
    // re-render dynamic t()-based content so prices/types/labels switch immediately
    try { renderListings(); } catch(e){}
    try { renderEvents(); } catch(e){}
    translateVisibleContent();
  }

  const translationCache = {};
  async function detectAndTranslate(text, targetLang) {
    const ck = targetLang + '|' + text;
    if (translationCache[ck]) return translationCache[ck];
    try {
      const url = `https://translate.googleapis.com/translate_a/single?client=gtx&sl=auto&tl=${targetLang}&dt=t&q=${encodeURIComponent(text.substring(0,500))}`;
      const res = await fetch(url);
      const data = await res.json();
      // Google returns [[["translated","original",...],...],...]
      const translated = data?.[0]?.map(item => item?.[0]).filter(Boolean).join('');
      if (translated && translated !== text) { translationCache[ck] = translated; return translated; }
    } catch(e) {}
    return null;
  }

  async function translateVisibleContent() {
    const targetLang = currentLang === 'es' ? 'es' : 'de';

    // Collect all dynamic-content elements (entries, reviews, comments, replies, detail desc)
    const allEls = [
      ...document.querySelectorAll('.listing-desc[data-original]'),
      ...document.querySelectorAll('.review-item-text[data-original]'),
      ...document.querySelectorAll('.comment-item-text[data-original]'),
      ...document.querySelectorAll('.reply-item-text[data-original]'),
      ...document.querySelectorAll('.event-card-title[data-original]'),
      ...document.querySelectorAll('.event-card-desc[data-original]'),
    ];
    const detailDesc = document.getElementById('detailDesc');
    if (detailDesc && detailDesc.dataset.original) allEls.unshift(detailDesc);

    // Only those not already shown in the target language
    const todo = allEls.filter(el =>
      el.dataset.original && el.dataset.original.length > 3 && el.dataset.tlang !== targetLang
    );
    if (!todo.length) return;

    // Back to German: just restore the originals — no API needed
    if (targetLang === 'de') {
      todo.forEach(el => { el.textContent = el.dataset.original; el.dataset.tlang = 'de'; });
      return;
    }

    const btn = document.getElementById('langToggle');
    const origText = btn ? btn.textContent : '';
    if (btn) { btn.textContent = '⏳'; btn.disabled = true; }

    // Translate in parallel batches of 4
    const batchSize = 4;
    for (let i = 0; i < todo.length; i += batchSize) {
      const batch = todo.slice(i, i + batchSize);
      await Promise.all(batch.map(async el => {
        const translated = await detectAndTranslate(el.dataset.original, targetLang);
        el.textContent = translated || el.dataset.original;
        el.dataset.tlang = targetLang;
      }));
    }

    if (btn) { btn.textContent = origText; btn.disabled = false; }
    contentTranslated = true;
  }

  // Auto-wire: any leaf element whose German text exactly matches a dictionary
  // value gets the matching data-i18n key — covers elements where a key exists
  // but the attribute was never added. Runs once. Exact-match only = safe.
  function autoWireI18n() {
    const de = translations.de, rev = {};
    Object.keys(de).forEach(k => { if (typeof de[k] === 'string') { const v = de[k].trim(); if (v && !(v in rev)) rev[v] = k; } });
    document.querySelectorAll('body *:not(script):not(style)').forEach(el => {
      if (el.hasAttribute('data-i18n') || el.children.length) return;
      const txt = el.textContent.trim();
      if (txt && rev[txt]) el.setAttribute('data-i18n', rev[txt]);
    });
  }

  function applyLang() {
    if (!applyLang._wired) { try { autoWireI18n(); } catch(e){} applyLang._wired = true; }
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

    // Header greeting (header_sub now handled via data-i18n)
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
  let ratingsCache = (function(){ try { return JSON.parse(localStorage.getItem('buscar_ratings')) || {}; } catch(e) { return {}; } })();

  async function loadAllRatings() {
    try {
      const snap = await db.collection('reviews').get();
      ratingsCache = {};
      snap.docs.forEach(d => {
        const r = d.data();
        if (!ratingsCache[r.listing_id]) ratingsCache[r.listing_id] = [];
        ratingsCache[r.listing_id].push(r.rating);
      });
      try { localStorage.setItem('buscar_ratings', JSON.stringify(ratingsCache)); } catch(e) {}
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
    'kat-immobilien': '<svg viewBox="0 0 24 24" fill="none" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 10.5 12 3l9 7.5"/><path d="M5 9.5V21h14V9.5"/><circle cx="12" cy="14" r="1.7"/><line x1="12" y1="15.7" x2="12" y2="18"/></svg>',
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
    'kat-immobilien':     '🏠',
    'default':            '📍',
  };
  const catNames = { 'kat-restaurants': 'Restaurants', 'kat-dienstleistung': 'Dienstleistungen', 'kat-orte': 'Orte', 'kat-unterkunft': 'Unterkünfte', 'kat-geschaefte': 'Geschäfte', 'kat-sport': 'Sport & Fitness', 'kat-immobilien': 'Immobilien' };

  // ══ ANDROID-ZURÜCK ABFANGEN ════════════════════════════════════════════════
  // Im PWA-Wrapper (TWA) schließt die System-Zurück-Geste sonst die ganze App,
  // weil der Browser-Verlauf leer ist. Wir fangen "popstate" ab und gehen statt-
  // dessen ein Overlay / einen Screen zurück, und re-pushen einen Sentinel-State,
  // damit der nächste Zurück-Druck wieder bei uns landet.
  var _lastHomeBack = 0;
  function _closeAnyOverlay(){
    var sheets = ['filterSheetOverlay','citySheetOverlay','mapCitySheetOverlay','mapFilterSheetOverlay','reportOverlay','photoLightbox'];
    for (var i=0;i<sheets.length;i++){
      var el = document.getElementById(sheets[i]);
      if (el && el.classList.contains('visible')){ el.classList.remove('visible'); return true; }
    }
    var disp = ['maklerModal','locationPermissionModal'];
    for (var j=0;j<disp.length;j++){
      var m = document.getElementById(disp[j]);
      if (m && m.style.display && m.style.display !== 'none'){ m.style.display = 'none'; return true; }
    }
    return false;
  }
  function _screenBackTarget(){
    switch (activeScreen){
      case 'screenDetail': return '__detailBack';
      case 'screenEditListing': return '__editBack';
      case 'screenEventDetail': return 'screenEvents';
      case 'screenEventForm': return 'screenEvents';
      case 'screenAdmin': return 'screenProfil';
      case 'screenEditUsername':
      case 'screenEditPassword':
      case 'screenEditEmail': return 'screenProfil';
      case 'screenImpressum':
      case 'screenDatenschutz':
      case 'screenAGB': return 'screenProfil';
      case 'screenFavorites': return 'screenProfil';
      case 'screenCoordEditor': return 'screenDetail';
      case 'screenImmobilien':
      case 'screenMap':
      case 'screenEvents':
      case 'screenForm':
      case 'screenProfil': return 'screenHome';
      default: return null; // screenHome / screenAuth -> Exit-Logik
    }
  }
  function _handleSystemBack(){
    if (_closeAnyOverlay()) return true;
    var t = _screenBackTarget();
    if (t === '__detailBack'){ if (typeof detailBack === 'function') detailBack(); else { setNav('navHome'); showScreen('screenHome'); } return true; }
    if (t === '__editBack'){ if (typeof currentEditListingId !== 'undefined' && currentEditListingId) showDetail(currentEditListingId); else { setNav('navHome'); showScreen('screenHome'); } return true; }
    if (t){
      var navMap = { screenHome:'navHome', screenMap:'navMap', screenEvents:'navEvents', screenForm:'navForm', screenProfil:'navProfil' };
      if (navMap[t]) setNav(navMap[t]);
      showScreen(t);
      return true;
    }
    // Auf Home/Auth: zweimal "Zurück" zum Beenden
    var now = Date.now();
    if (_lastHomeBack && (now - _lastHomeBack) < 2000) return false;
    _lastHomeBack = now;
    try { showToast(currentLang === 'es' ? 'Pulsa atrás de nuevo para salir' : 'Nochmal „Zurück" zum Beenden'); } catch(e){}
    return true;
  }
  (function(){
    try { history.pushState({ buscarNav: 1 }, ''); } catch(e){}
    window.addEventListener('popstate', function(){
      var handled = false;
      try { handled = _handleSystemBack(); } catch(e){ handled = false; }
      if (handled){ try { history.pushState({ buscarNav: 1 }, ''); } catch(e){} }
    });
  })();

  // ── Hochformat erzwingen (zusätzlich zum Manifest "orientation":"portrait") ──
  (function(){
    function lockPortrait(){
      try {
        if (screen && screen.orientation && screen.orientation.lock) {
          screen.orientation.lock('portrait').catch(function(){});
        }
      } catch(e){}
    }
    lockPortrait();
    window.addEventListener('orientationchange', lockPortrait);
    document.addEventListener('visibilitychange', function(){ if (!document.hidden) lockPortrait(); });
  })();

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
    if (id === 'screenDetail' && activeScreen && activeScreen !== 'screenDetail') { window._detailFrom = activeScreen; }
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
      if (!window._skipMapFit) _mapFitOnUpdate = true;
      window._skipMapFit = false;
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
  let evCityFilter = 'Alle';

  const EVENT_TYPE_COLORS = {
    'Party':'#F5A623','Festival':'#8B5CF6','Konzert':'#EC4899',
    'Retreat':'#22C55E','Workshop':'#F97316','Sport':'#06B6D4',
    'Markt':'#EF4444','Sonstiges':'#6B7280'
  };
  const EVENT_TYPE_EMOJIS = {
    'Party':'🎊','Festival':'🎪','Konzert':'🎵','Retreat':'🧘',
    'Workshop':'🛠','Sport':'⚽','Kultur':'🎭','Treffen':'🤝','Markt':'🛒','Sonstiges':'📌'
  };
  const EVENT_TYPE_ES = {'Party':'Fiesta','Festival':'Festival','Konzert':'Concierto','Retreat':'Retiro','Workshop':'Taller','Sport':'Deporte','Kultur':'Cultura','Treffen':'Encuentro','Markt':'Mercado','Sonstiges':'Otro'};
  function evTypeName(ty){ return (currentLang==='es' && EVENT_TYPE_ES[ty]) ? EVENT_TYPE_ES[ty] : (ty||''); }

  async function loadEvents() {
    // Instant: render from in-memory cache if we already have events
    if (allEvents && allEvents.length) { renderEvents(); }
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
      // Keep showing cached events on error; only show error if we have nothing
      if (!(allEvents && allEvents.length)) {
        document.getElementById('eventsList').innerHTML =
          '<div style="text-align:center;padding:40px;color:var(--text-3)">Fehler beim Laden.</div>';
      }
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

  function openEventCitySheet() {
    document.getElementById('eventCitySheetOverlay').classList.add('visible');
    var inp = document.getElementById('evCitySearchInput'); if (inp) inp.value = '';
    renderEventCitySheet('');
    setTimeout(function(){ var i = document.getElementById('evCitySearchInput'); if (i) i.focus(); }, 100);
  }
  function closeEventCitySheet() {
    document.getElementById('eventCitySheetOverlay').classList.remove('visible');
  }
  function renderEventCitySheet(query) {
    var list = document.getElementById('evCitySheetList');
    var q = norm(query || '');
    var filtered = ALL_PY_CITIES.filter(function(c){ return !q || norm(c).includes(q); });
    if (!filtered.length) { list.innerHTML = '<div class="city-sheet-empty">Keine Stadt gefunden</div>'; return; }
    list.innerHTML = filtered.map(function(c){
      return '<div class="city-sheet-item' + (evCityFilter === c ? ' selected' : '') + '" onclick="selectEventCity(\'' + String(c).replace(/'/g, "\\'") + '\')">'
        + '<svg viewBox="0 0 24 24" fill="none" stroke-width="2.5" stroke-linecap="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>'
        + '<span>' + (c === 'Alle' ? t('city_all') : esc(c)) + '</span></div>';
    }).join('');
  }
  function filterEventCitySheet() {
    renderEventCitySheet(document.getElementById('evCitySearchInput').value);
  }
  function selectEventCity(city) {
    evCityFilter = city;
    var btn = document.getElementById('evCityPickerBtn');
    var label = document.getElementById('evCityPickerLabel');
    if (city === 'Alle') {
      btn.classList.remove('active');
      label.textContent = t('city_select');
      var cb = document.getElementById('evCityPickerClear'); if (cb) cb.remove();
    } else {
      btn.classList.add('active');
      label.textContent = city;
      var clearBtn = document.getElementById('evCityPickerClear');
      if (!clearBtn) {
        clearBtn = document.createElement('button');
        clearBtn.id = 'evCityPickerClear';
        clearBtn.className = 'city-picker-clear';
        clearBtn.textContent = '×';
        clearBtn.onclick = function(e){ e.stopPropagation(); selectEventCity('Alle'); };
        btn.appendChild(clearBtn);
      }
    }
    closeEventCitySheet();
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

    if (evCityFilter && evCityFilter !== 'Alle') {
      filtered = filtered.filter(function(ev){ return prettyCity(ev.city||'') === evCityFilter; });
    }

    var sub = filtered.length === 0 ? 'Keine Events gefunden' :
              filtered.length === 1 ? '1 Event' : filtered.length + ' Events';
    document.getElementById('eventsSubtitle').textContent = sub;

    if (filtered.length === 0) {
      var _hasCity = evCityFilter && evCityFilter !== 'Alle';
      var _msg = _hasCity ? t('ev_none_city').replace('{city}', esc(evCityFilter)) : t('ev_none_filter');
      var _reset = _hasCity
        ? '<div onclick="selectEventCity(\'Alle\')" style="margin-top:16px;display:inline-block;background:var(--yellow);color:white;font-weight:700;font-size:13px;padding:9px 18px;border-radius:20px;cursor:pointer">' + esc(t('ev_show_all_cities')) + '</div>'
        : '';
      document.getElementById('eventsList').innerHTML =
        '<div style="text-align:center;padding:60px 20px;color:var(--text-3);font-size:15px">🎪<br><br>' + _msg + _reset + '</div>';
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
      var priceStr = ev.is_paid ? (ev.ticket_price ? Number(ev.ticket_price).toLocaleString('de-DE') + ' ₲' : t('ev_paid_label')) : t('ev_free');
      var spotsLeft = ev.has_signup && ev.capacity > 0 ? (ev.capacity - (ev.signups_count||0)) + ' ' + t('ev_spots') : '';
      var statusHtml = isCancelled ? '<span class=\"event-status-cancelled\">'+t('ev_cancelled')+'</span>' :
                       isFull ? '<span class=\"event-status-full\">'+t('ev_full')+'</span>' :
                       spotsLeft ? '<span class="event-spots">' + spotsLeft + '</span>' : '';

      return '<div class="event-card" onclick="showEventDetail(\'' + ev.id + '\')">'
        + '<div class="event-card-banner ' + typeClass + '"></div>'
        + '<div class="event-card-body">'
        + '<div class="event-card-top">'
        + '<div class="event-card-title" data-original="' + esc(ev.title) + '">' + esc(ev.title) + '</div>'
        + '<div class="event-card-type">' + emoji + ' ' + evTypeName(ev.type) + '</div>'
        + '</div>'
        + '<div class="event-card-meta">'
        + '<div class="event-meta-item"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" width="12" height="12"><rect x="3" y="4" width="18" height="18" rx="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/></svg> '
        + dateStr + (timeStr ? ' · ' + timeStr : '') + '</div>'
        + '<div class="event-meta-item"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" width="12" height="12"><path d="M21 10c0 7-9 13-9 13S3 17 3 10a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg> '
        + esc(ev.city) + '</div>'
        + '</div>'
        + '<div class="event-card-desc" data-original="' + esc(ev.description) + '">' + esc(ev.description) + '</div>'
        + '<div class="event-card-footer">'
        + '<span class="event-price">' + priceStr + '</span>'
        + statusHtml
        + '</div>'
        + '</div></div>';
    }).join('');
    if (currentLang !== 'de') translateVisibleContent();
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

    var evRouteUrl = (ev.lat && ev.lng) ? 'https://maps.google.com/?q=' + ev.lat + ',' + ev.lng
      : ((ev.address || ev.city) ? 'https://maps.google.com/?q=' + encodeURIComponent([ev.address, ev.city].filter(Boolean).join(', ')) : '');
    document.getElementById('evDetailMeta').innerHTML =
      '<div class="event-detail-meta">📅 ' + dateStr + '</div>'
      + (timeStr ? '<div class="event-detail-meta">🕐 ' + timeStr + (timeEndStr ? ' – ' + timeEndStr : '') + '</div>' : '')
      + '<div class="event-detail-meta">📍 ' + esc(prettyCity(ev.city||'')) + (ev.address ? ', ' + esc(ev.address) : '') + '</div>'
      + (evRouteUrl ? '<a class="ev-route-btn" href="' + evRouteUrl + '" target="_blank" rel="noopener"><svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polygon points="3 11 22 2 13 21 11 13 3 11"/></svg>Route starten</a>' : '');

    var isFull = ev.has_signup && ev.capacity > 0 && (ev.signups_count||0) >= ev.capacity;
    var isCancelled = ev.status === 'cancelled';
    var priceStr = ev.is_paid ? (ev.ticket_price ? Number(ev.ticket_price).toLocaleString('de-DE') + ' Guaraní' : t('ev_paid_label')) : t('ev_free');

    var bodyHtml = '<div style="background:var(--card);border-radius:var(--radius-lg);padding:16px;margin-bottom:14px">'
      + '<p style="font-size:15px;line-height:1.6;color:var(--text-1);margin:0">' + esc(ev.description) + '</p>'
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

    if (ev.website) {
      var _w = String(ev.website).trim();
      if (!/^https?:\/\//i.test(_w)) _w = 'https://' + _w;
      bodyHtml += '<a href="' + esc(_w) + '" target="_blank" rel="noopener" style="display:flex;align-items:center;justify-content:center;gap:8px;width:100%;box-sizing:border-box;background:var(--yellow);border:none;border-radius:var(--radius-lg);padding:14px;font-size:15px;font-weight:700;color:white;text-decoration:none;margin-bottom:14px">'
        + '<svg viewBox="0 0 24 24" width="17" height="17" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 5h16a2 2 0 0 1 2 2v3a2 2 0 0 0 0 4v3a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2v-3a2 2 0 0 0 0-4V7a2 2 0 0 1 2-2z"/><path d="M9 5v14"/></svg>'
        + t('ev_tickets_info') + '</a>';
    }

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
      bodyHtml += '<button onclick="openEditEvent(\'' + id + '\')" style="width:100%;background:var(--surface-2);border:1.5px solid var(--border);border-radius:var(--radius-lg);padding:14px;font-size:14px;font-weight:700;color:var(--text-1);cursor:pointer;margin-bottom:8px;display:flex;align-items:center;justify-content:center;gap:7px"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"/><path d="M18.5 2.5a2.12 2.12 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"/></svg>' + (currentLang==='es'?'Editar evento':'Event bearbeiten') + '</button>'
        + '<div style="display:flex;gap:8px;margin-top:0">'
        + '<button onclick="cancelEvent(\'' + id + '\')" style="flex:1;background:var(--surface-2);border:none;border-radius:var(--radius-lg);padding:14px;font-size:14px;font-weight:600;color:var(--text-2);cursor:pointer">' + t('ev_cancel_btn') + '</button>'
        + '<button onclick="deleteEvent(\'' + id + '\')" style="flex:1;background:#FEE2E2;border:none;border-radius:var(--radius-lg);padding:14px;font-size:14px;font-weight:600;color:#EF4444;cursor:pointer">' + t('ev_delete_btn') + '</button>'
        + '</div>';
    }

    document.getElementById('evDetailBody').innerHTML = bodyHtml;
    showScreen('screenEventDetail');
  }

  var _editingEventId = null;
  function _toDateInput(d){ var m=String(d.getMonth()+1).padStart(2,'0'), day=String(d.getDate()).padStart(2,'0'); return d.getFullYear()+'-'+m+'-'+day; }
  function _toTimeInput(d){ return String(d.getHours()).padStart(2,'0')+':'+String(d.getMinutes()).padStart(2,'0'); }
  async function openEditEvent(id){
    if (!currentUser){ showScreen('screenAuth'); return; }
    var ev = (typeof allEvents!=='undefined' && allEvents) ? allEvents.find(function(e){ return e.id===id; }) : null;
    if (!ev){
      try { var d = await db.collection('events').doc(id).get(); if (!d.exists) return; ev = Object.assign({id:d.id}, d.data()); } catch(e){ alert(t('err_event_load')); return; }
    }
    if (ev.created_by !== currentUser.uid && currentUser.email !== ADMIN_EMAIL){ alert('Nur der Ersteller kann das Event bearbeiten.'); return; }
    _editingEventId = id;
    document.getElementById('evFormTitle').value = ev.title || '';
    document.getElementById('evFormType').value = ev.type || '';
    document.getElementById('evFormDesc').value = ev.description || '';
    var st = (ev.date_start && ev.date_start.toDate) ? ev.date_start.toDate() : (ev.date_start ? new Date(ev.date_start) : null);
    var en = (ev.date_end && ev.date_end.toDate) ? ev.date_end.toDate() : (ev.date_end ? new Date(ev.date_end) : null);
    document.getElementById('evFormDate').value = st ? _toDateInput(st) : '';
    document.getElementById('evFormTimeStart').value = st ? _toTimeInput(st) : '';
    document.getElementById('evFormTimeEnd').value = en ? _toTimeInput(en) : '';
    document.getElementById('evFormCity').value = ev.city || '';
    document.getElementById('evFormAddress').value = ev.address || '';
    document.getElementById('evFormWebsite').value = ev.website || '';
    document.getElementById('evFormIsPaid').checked = !!ev.is_paid;
    document.getElementById('evFormPrice').value = (ev.ticket_price ? ev.ticket_price : '');
    document.getElementById('evFormPriceRow').style.display = ev.is_paid ? 'block' : 'none';
    document.getElementById('evFormHasSignup').checked = !!ev.has_signup;
    document.getElementById('evFormCapacity').value = (ev.capacity ? ev.capacity : '');
    document.getElementById('evFormCapacityRow').style.display = ev.has_signup ? 'block' : 'none';
    document.getElementById('evFormRules').value = ev.rules || '';
    document.getElementById('evFormError').style.display = 'none';
    document.getElementById('evFormPhotoGrid').innerHTML = '';
    evPendingPhotos = [];
    _evLat = (ev.lat != null ? ev.lat : null); _evLng = (ev.lng != null ? ev.lng : null);
    var ls = document.getElementById('evLocationStatus');
    if (ls){ if (_evLat != null){ ls.style.display='block'; ls.textContent = '📍 ' + Number(_evLat).toFixed(4) + ', ' + Number(_evLng).toFixed(4); } else { ls.style.display='none'; } }
    var ft = document.querySelector('#screenEventForm .form-title'); if (ft) ft.textContent = (currentLang==='es'?'Editar evento':'Event bearbeiten');
    var sb = document.getElementById('evFormSubmitBtn'); if (sb){ sb.textContent = (currentLang==='es'?'Guardar cambios':'Änderungen speichern'); sb.disabled = false; }
    showScreen('screenEventForm');
    if (_evLat != null && typeof initEvMap === 'function'){ setTimeout(function(){ try { initEvMap(_evLat, _evLng); } catch(e){} }, 200); }
    else if (_evMapPicker) { setTimeout(function(){ _evMapPicker.resize(); }, 200); }
  }

  function showEventForm() {
    if (!currentUser) { showScreen('screenAuth'); return; }
    _editingEventId = null;
    var _ft = document.querySelector('#screenEventForm .form-title'); if (_ft) _ft.textContent = (currentLang==='es'?'Crear evento':'Event erstellen');
    var _sb = document.getElementById('evFormSubmitBtn'); if (_sb){ _sb.textContent = t('ev_publish'); _sb.disabled = false; }
    ['evFormTitle','evFormDesc','evFormCity','evFormAddress','evFormWebsite','evFormPrice','evFormCapacity','evFormRules'].forEach(function(id){
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
        + '<img loading="lazy" decoding="async" src="' + url + '" style="width:100%;height:100%;object-fit:cover">'
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
    if (progress) progress.style.display = 'block';
    var ok = 0, fail = 0;
    for (var i = 0; i < evPendingPhotos.length; i++) {
      try {
        if (progress) progress.textContent = 'Foto ' + (i+1) + ' von ' + evPendingPhotos.length + ' wird hochgeladen...';
        // Komprimieren (verkleinert + JPEG) damit der Upload klein bleibt und nicht ans Größenlimit stößt
        var blob = await compressImage(evPendingPhotos[i], 1280, 1280, 0.75);
        var filename = Date.now() + '_' + i + '.jpg';
        var ref = storage.ref('events/' + eventId + '/' + filename);
        var snap = await ref.put(blob, { contentType: 'image/jpeg' });
        var url = await snap.ref.getDownloadURL();
        await db.collection('events').doc(eventId).update({
          photos: firebase.firestore.FieldValue.arrayUnion(url)
        });
        ok++;
      } catch(err) { fail++; console.warn('uploadEvPhotos: Foto ' + (i+1) + ' fehlgeschlagen', err); }
    }
    if (progress) progress.textContent = fail ? (ok + ' Foto(s) hochgeladen, ' + fail + ' fehlgeschlagen') : 'Fotos hochgeladen!';
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

      var common = {
        title: title, type: type, description: desc,
        date_start: dateStart, date_end: dateEnd,
        city: city, address: document.getElementById('evFormAddress').value.trim() || null,
        website: document.getElementById('evFormWebsite').value.trim() || null,
        lat: _evLat, lng: _evLng,
        is_paid: isPaid,
        ticket_price: isPaid ? (Number(document.getElementById('evFormPrice').value)||0) : 0,
        has_signup: hasSignup,
        capacity: hasSignup ? (Number(document.getElementById('evFormCapacity').value)||0) : 0,
        rules: document.getElementById('evFormRules').value.trim() || null
      };
      if (_editingEventId) {
        // Bearbeiten: nur die Felder aktualisieren, Anmeldungen/Fotos/Ersteller nicht anfassen
        var editId = _editingEventId;
        await db.collection('events').doc(editId).update(Object.assign({}, common, { updated_at: new Date() }));
        if (evPendingPhotos.length) await uploadEvPhotos(editId);
        _editingEventId = null;
        await loadEvents();
        showToast(currentLang==='es'?'Evento actualizado':'Event aktualisiert');
        if (activeScreen === 'screenProfil' || _evDetailSource === 'profil') { setNav('navProfil'); showScreen('screenProfil'); loadMyEvents(); }
        else { setNav('navEvents'); showScreen('screenEvents'); }
        var _sbR = document.getElementById('evFormSubmitBtn'); if (_sbR){ _sbR.disabled = false; _sbR.textContent = t('ev_publish'); }
        return;
      }
      var evRef = await db.collection('events').add(Object.assign({}, common, {
        signups_count: 0, signups: [], photos: [],
        status: 'open', created_by: currentUser.uid, created_at: new Date()
      }));

      if (evPendingPhotos.length) await uploadEvPhotos(evRef.id);
      showScreen('screenEvents');
      loadEvents();
    } catch(e) {
      errEl.textContent = t('err_prefix') + e.message;
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
      alert(e.message === 'Ausgebucht' ? t('err_sold_out') : e.message === 'Bereits angemeldet' ? t('err_already_signed') : t('err_prefix') + e.message);
    }
  }

  async function deleteEvent(id) {
    if (!confirm(t('ev_delete_confirm'))) return;
    try {
      await db.collection('events').doc(id).delete();
      allEvents = allEvents.filter(function(e){ return e.id !== id; });
      showToast(t('ev_delete_ok'));
      if (activeScreen === 'screenProfil') {
        // direkt aus "Meine Events" gelöscht -> Liste an Ort und Stelle aktualisieren
        loadMyEvents(); if (typeof loadMySignups === 'function') loadMySignups();
      } else if (_evDetailSource === 'profil') {
        setNav('navProfil'); showScreen('screenProfil'); loadMyEvents();
      } else {
        setNav('navEvents'); showScreen('screenEvents'); renderEvents();
      }
    } catch(e) { alert('Event konnte nicht gelöscht werden: ' + (e && e.message ? e.message : e)); }
  }

  async function cancelEvent(id) {
    if (!confirm(t('cancel_event_confirm'))) return;
    try {
      await db.collection('events').doc(id).update({ status: 'cancelled' });
      var ev = allEvents.find(function(e){ return e.id === id; });
      if (ev) ev.status = 'cancelled';
      showToast('Event wurde abgesagt.');
      showScreen('screenEvents');
      renderEvents();
    } catch(e) { alert(t('err_prefix') + e.message); }
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
      // Vergangene Events nicht mehr listen (verschwinden, sobald sie vorbei sind)
      var _nowMy = new Date();
      events = events.filter(function(ev){
        var endD = ev.date_end ? ev.date_end.toDate() : (ev.date_start ? ev.date_start.toDate() : null);
        return !endD || endD >= _nowMy;
      });
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
        var _now = new Date();
        var _endD = ev.date_end ? ev.date_end.toDate() : (ev.date_start ? ev.date_start.toDate() : null);
        var isPast = _endD && _endD < _now;
        var signups = ev.signups_count || 0;
        var cap = ev.capacity || 0;
        var spotsStr = ev.has_signup ? (cap > 0 ? signups + '/' + cap + ' Anmeldungen' : signups + ' Anmeldungen') : '';
        return '<div style="padding:10px 0;border-bottom:1px solid var(--border)">'
          + '<div style="display:flex;justify-content:space-between;align-items:flex-start;gap:8px">'
          + '<div style="flex:1">'
          + '<div style="font-size:14px;font-weight:700;color:var(--text-1);margin-bottom:2px">' + esc(ev.title) + '</div>'
          + '<div style="font-size:12px;color:var(--text-3)">' + dateStr + (ev.city ? ' · ' + esc(ev.city) : '') + '</div>'
          + (spotsStr ? '<div style="font-size:12px;color:var(--yellow);margin-top:2px;font-weight:600">' + spotsStr + '</div>' : '')
          + '</div>'
          + '<div style="display:flex;flex-direction:column;align-items:flex-end;gap:4px">'
          + (isCancelled ? '<span style="font-size:10px;font-weight:700;background:#EF4444;color:white;padding:2px 7px;border-radius:8px">Abgesagt</span>' : isPast ? '<span style="font-size:10px;font-weight:700;background:#9CA3AF;color:white;padding:2px 7px;border-radius:8px">Vergangen</span>' : '<span style="font-size:10px;font-weight:700;background:#22C55E;color:white;padding:2px 7px;border-radius:8px">Aktiv</span>')
          + '<button onclick="showEventDetailFromProfile(\'' + ev.id + '\')" style="font-size:11px;color:var(--yellow);background:none;border:none;cursor:pointer;font-weight:600;padding:0">Details →</button>'
          + '<button onclick="openEditEvent(\'' + ev.id + '\')" style="font-size:11px;color:var(--text-2);background:none;border:none;cursor:pointer;font-weight:600;padding:0">Bearbeiten</button>'
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
          + '<div style="font-size:14px;font-weight:700;color:var(--text-1);margin-bottom:2px">' + esc(ev.title) + '</div>'
          + '<div style="font-size:12px;color:var(--text-3)">' + dateStr + (timeStr ? ' · ' + timeStr : '') + (ev.city ? ' · ' + esc(ev.city) : '') + '</div>'
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
    } catch(e) { alert(t('err_prefix') + e.message); }
  }
  // ── END PROFIL EVENTS ──────────────────────────────────────────────────────

  // ══ KOORDINATEN-EDITOR (nur Admin) ════════════════════════════════════════
  var _coordListingId = null;
  var _coordMap = null;
  var _coordMarker = null;
  var _coordLat = null;
  var _coordLng = null;

  function clickLocFix() {
    if (!currentListingId) return;
    var l = allListings.find(function(x){ return x.id === currentListingId; });
    if (!l) return;
    var isAdmin = currentUser && currentUser.email === ADMIN_EMAIL;
    var isOwner = currentUser && l.owner_id && l.owner_id === currentUser.uid;
    if (l.owner_id && !isOwner && !isAdmin) return; // beansprucht -> nur Inhaber/Admin
    if (!currentUser) { showScreen('screenAuth'); return; }
    openCoordEditor(currentListingId, (isAdmin || isOwner) ? 'admin' : 'suggest');
  }

  var _coordMode = 'admin'; // 'admin' = direkt speichern, 'suggest' = Vorschlag an Admin
  function openCoordEditor(listingId, mode) {
    var l = allListings.find(function(x){ return x.id === listingId; });
    if (!l) return;
    _coordListingId = listingId;
    _coordMode = mode || 'admin';
    _coordLat = l.lat || -25.2867;
    _coordLng = l.lng || -57.6470;

    var _sug = _coordMode === 'suggest';
    document.getElementById('coordEditorTitle').textContent = t(_sug ? 'locfix_suggest_title' : 'locfix_edit_title');
    document.getElementById('coordEditorHint').textContent = t(_sug ? 'locfix_hint_suggest' : 'locfix_hint_edit');
    var _csb = document.getElementById('coordSaveBtn'); _csb.disabled = false; _csb.textContent = t(_sug ? 'locfix_send' : 'locfix_save');
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
    if (!_coordListingId || _coordLat == null || _coordLng == null) return;
    var btn = document.getElementById('coordSaveBtn');
    btn.disabled = true;
    btn.textContent = t('saving') || 'Wird gespeichert...';
    var l = allListings.find(function(x){ return x.id === _coordListingId; });
    try {
      if (_coordMode === 'suggest') {
        // Normaler Nutzer: nur Vorschlag einreichen (Admin übernimmt), Eintrag nicht direkt ändern
        await db.collection('location_suggestions').add({
          listing_id: _coordListingId,
          listing_name: l ? (l.name || '') : '',
          lat: _coordLat, lng: _coordLng,
          old_lat: l ? (l.lat || null) : null,
          old_lng: l ? (l.lng || null) : null,
          user_id: currentUser ? currentUser.uid : null,
          status: 'pending', created_at: new Date()
        });
        showToast(t('locfix_thanks'));
        closeCoordEditor();
        return;
      }
      // Inhaber/Admin: direkt speichern
      await db.collection('listings').doc(_coordListingId).update({ lat: _coordLat, lng: _coordLng });
      if (l) { l.lat = _coordLat; l.lng = _coordLng; }
      showToast(t('toast_coords_saved'));
      closeCoordEditor();
      if (maplibreMap && mapLoaded) renderMap();
    } catch(e) {
      alert(t('err_prefix') + e.message);
      btn.disabled = false;
      btn.textContent = t(_coordMode === 'suggest' ? 'locfix_send' : 'locfix_save');
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
      if (!window._evPreloaded) { window._evPreloaded = true; setTimeout(function(){ loadEvents(); }, 1200); }
      var sp=document.getElementById('splash'); if(sp) sp.classList.add('hidden');
      handleDeepLink();
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

  // Blendet versehentliche Doppel-Eintraege aus: immer per ID (sicher) und – wenn
  // Koordinaten vorhanden sind – per Name + exakter Position (gleicher Name an exakt
  // gleicher Stelle = Duplikat). Unterschiedliche Orte bleiben unberuehrt.
  function _dedupeListings(arr){
    var seenId = {}, seenGeo = {}, out = [];
    for (var i = 0; i < arr.length; i++){
      var l = arr[i];
      if (l.id){ if (seenId[l.id]) continue; seenId[l.id] = 1; }
      if (l.lat != null && l.lng != null){
        var k = (l.name||'').trim().toLowerCase() + '|' + Number(l.lat).toFixed(5) + '|' + Number(l.lng).toFixed(5);
        if (seenGeo[k]) continue;
        seenGeo[k] = 1;
      }
      out.push(l);
    }
    return out;
  }
  // Schalter: exakte Doppel in der App ausblenden? Aktuell AUS (Übergangslösung, damit die
  // Eintrags-Zahl wieder ~767 zeigt). Auf true setzen, sobald 750+ einzigartige echte Einträge da sind.
  var DEDUPE_HIDE_DUPLICATES = false;
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
      var _rawListings = snap.docs.map(d => ({ id: d.id, ...d.data() }));
      allListings = DEDUPE_HIDE_DUPLICATES ? _dedupeListings(_rawListings) : _rawListings;
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
    'Limpio','Ñemby','Mariano Roque Alonso','Villa Elisa','Itauguá','Areguá',
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

  // Einheitliche Schreibweise einer Stadt für die ANZEIGE (z.B. "Nemby" -> "Ñemby",
  // "asuncion" -> "Asunción"). Vergleich/Filterung läuft weiter accent-insensitiv über norm().
  var _cityCanon = null;
  function prettyCity(c){
    if (!c) return c || '';
    if (!_cityCanon){ _cityCanon = {}; ALL_PY_CITIES.forEach(function(x){ if (x !== 'Alle') _cityCanon[norm(x)] = x; }); }
    return _cityCanon[norm(c)] || c;
  }

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
    const q = norm(query);
    const filtered = ALL_PY_CITIES.filter(c => !q || norm(c).includes(q));
    if (!filtered.length) {
      list.innerHTML = '<div class="city-sheet-empty">Keine Stadt gefunden</div>';
      return;
    }
    list.innerHTML = filtered.map(c => `
      <div class="city-sheet-item${activeCity===c?' selected':''}" onclick="selectCity('${c}')">
        <svg viewBox="0 0 24 24" fill="none" stroke-width="2.5" stroke-linecap="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>
        <span>${c === 'Alle' ? t('city_all') : c}</span>
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
      label.textContent = t('city_select');
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
    filtered = filtered.filter(l => l.category_id !== 'kat-immobilien'); // Immobilien haben eine eigene Seite
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
    container.innerHTML = filtered.map(l => `<div class="listing-card" style="--cat-color:${catColors[l.category_id]||'#6B6B6B'}" onclick="showDetail('${l.id}')"><div class="listing-icon-wrap">${catIcons[l.category_id]||catIcons['default']}</div><div class="listing-body"><div class="listing-top"><div class="listing-name" style="flex:1;min-width:0;overflow:hidden;text-overflow:ellipsis;white-space:nowrap">${esc(l.name)}</div><div style="display:flex;gap:3px;align-items:center;flex-shrink:0">${(l.deal_text ? `<span class='deal-badge'><svg viewBox='0 0 24 24'><path d='M12.89 1.45l8 4A2 2 0 0 1 22 7.24v9.53a2 2 0 0 1-1.11 1.79l-8 4a2 2 0 0 1-1.79 0l-8-4A2 2 0 0 1 2 16.77V7.24a2 2 0 0 1 1.11-1.79l8-4a2 2 0 0 1 1.78 0z'/></svg>Deal</span>` : '')}${isNew(l.created_at)?`<span class='badge-neu'>${t('badge_new')}</span>`:''}${l.verified?`<span class='badge-geprüft'>${t('verified')}</span>`:''}</div></div>${l.city?`<div class="listing-city"><svg viewBox="0 0 24 24" fill="none" stroke-width="2.5" stroke-linecap="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>${esc(prettyCity(l.city))}${(()=>{const o=isOpen(l.opening_hours);return o===true?'<span class="open-badge open">● '+t('open_now')+'</span>':o===false?'<span class="open-badge closed">● '+t('closed_now')+'</span>':''})()}</div>`:''}<div class="listing-desc" data-original="${esc(l.description)}">${esc(l.description)}</div>${starsSmall(getAvgRating(l.id))}${l.phone?`<div class="listing-phone"><svg viewBox="0 0 24 24" fill="none" stroke-width="2.5" stroke-linecap="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.6 1.27h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 8.91a16 16 0 0 0 6 6l.9-.9a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 21.73 16.92z"/></svg>${l.phone}</div>`:''}</div><div class="listing-arrow"><svg viewBox="0 0 24 24" fill="none" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="9 18 15 12 9 6"/></svg></div></div>`).join('');
    if (currentLang !== 'de') translateVisibleContent();
  }

  function renderReFacts(l) {
    var es = (currentLang === 'es');
    var dealMap = es ? {kauf:'Venta', miete:'Alquiler'} : {kauf:'Kauf', miete:'Miete'};
    var typeMap = es
      ? {wohnung:'Departamento', haus:'Casa', grundstueck:'Terreno', land:'Campo / Finca', gewerbe:'Comercial'}
      : {wohnung:'Wohnung', haus:'Haus', grundstueck:'Grundstück', land:'Land / Finca', gewerbe:'Gewerbe'};
    var curMap = {USD:'USD', PYG:'₲', EUR:'€'};
    var locale = es ? 'es-PY' : 'de-DE';
    var priceStr = '';
    if (l.re_price != null) {
      var cur = curMap[l.re_currency] || (l.re_currency || '');
      var per = (l.re_period === 'monat') ? (es ? '/mes' : '/Monat') : '';
      priceStr = cur + ' ' + Number(l.re_price).toLocaleString(locale) + per;
    }
    var areaStr = (l.re_area != null) ? (Number(l.re_area).toLocaleString(locale) + ' ' + (l.re_area_unit === 'ha' ? 'ha' : 'm²')) : '';
    var head = priceStr ? '<div style="font-family:\'Fraunces\',serif;font-weight:700;font-size:26px;color:#0D9488;margin-bottom:12px;line-height:1.15;word-break:break-word">' + priceStr + '</div>' : '';
    var items = [];
    if (dealMap[l.re_deal]) items.push([es ? 'Operación' : 'Angebot', dealMap[l.re_deal]]);
    if (typeMap[l.re_type]) items.push([es ? 'Tipo' : 'Typ', typeMap[l.re_type]]);
    if (areaStr) items.push([es ? 'Superficie' : 'Fläche', areaStr]);
    if (l.re_rooms != null) items.push([es ? 'Habitaciones' : 'Zimmer', String(l.re_rooms)]);
    var rows = items.map(function(it, i){
      var border = (i < items.length - 1) ? 'border-bottom:1px solid var(--border);' : '';
      return '<div style="display:flex;justify-content:space-between;gap:14px;padding:9px 0;' + border + 'font-size:14px"><span style="color:var(--text-3)">' + it[0] + '</span><span style="font-weight:600;color:var(--text-1);text-align:right;word-break:break-word">' + it[1] + '</span></div>';
    }).join('');
    var title = es ? 'Detalles del inmueble' : 'Immobilien-Details';
    var mapBtn = (l.lat != null && l.lng != null)
      ? '<button onclick="showOnMap(\'' + l.id + '\')" style="width:100%;margin-top:14px;background:#fff;border:1.5px solid #0D9488;color:#0D9488;font-weight:700;font-size:14px;padding:12px;border-radius:12px;cursor:pointer;display:flex;align-items:center;justify-content:center;gap:8px"><svg viewBox="0 0 24 24" width="17" height="17" fill="none" stroke="#0D9488" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polygon points="1 6 1 22 8 18 16 22 23 18 23 2 16 6 8 2 1 6"/><line x1="8" y1="2" x2="8" y2="18"/><line x1="16" y1="6" x2="16" y2="22"/></svg>' + (es ? 'Ver en el mapa' : 'Auf Karte anzeigen') + '</button>'
      : '';
    return '<div class="detail-section-title">' + title + '</div><div style="padding:0 16px 16px">' + head + rows + mapBtn + '</div>';
  }

  function immoPriceStr(l){
    if(l.re_price==null) return '';
    var es=(currentLang==='es'); var curMap={USD:'USD',PYG:'₲',EUR:'€'};
    var per=(l.re_period==='monat')?(es?'/mes':'/Monat'):'';
    return (curMap[l.re_currency]||l.re_currency||'')+' '+Number(l.re_price).toLocaleString(es?'es-PY':'de-DE')+per;
  }
  function immoMetaStr(l){
    var es=(currentLang==='es');
    var typeMap=es?{wohnung:'Departamento',haus:'Casa',grundstueck:'Terreno',land:'Campo',gewerbe:'Comercial'}:{wohnung:'Wohnung',haus:'Haus',grundstueck:'Grundstück',land:'Land',gewerbe:'Gewerbe'};
    var parts=[];
    if(typeMap[l.re_type]) parts.push(typeMap[l.re_type]);
    if(l.re_area!=null) parts.push(Number(l.re_area).toLocaleString(es?'es-PY':'de-DE')+' '+(l.re_area_unit==='ha'?'ha':'m²'));
    if(l.re_rooms!=null) parts.push(l.re_rooms+' '+(es?'hab.':'Zi.'));
    return parts.join(' · ');
  }
  // ── Phase 3: Featured / Verifizierter Makler (monetarisierungs-fertig) ──────
  function _reDateActive(v){
    if(!v) return false;
    var d = v.toDate ? v.toDate() : new Date(typeof v.seconds==='number' ? v.seconds*1000 : v);
    return !isNaN(d.getTime()) && d.getTime() >= Date.now();
  }
  function isFeatured(l){ return !!(l && l.re_featured) && _reDateActive(l.featured_until); }
  function isMaklerVerified(l){
    if(!l || !l.makler_verified) return false;
    return l.makler_verified_until ? _reDateActive(l.makler_verified_until) : true;
  }
  function immoBadgesHTML(l){
    var es=(currentLang==='es'); var h='';
    if(isFeatured(l)) h+='<span class="immo-badge immo-badge-featured">★ '+(es?'Destacado':'Empfohlen')+'</span>';
    if(isMaklerVerified(l)) h+='<span class="immo-badge immo-badge-verified">✓ '+(es?'Verificado':'Verifiziert')+'</span>';
    return h ? '<div class="immo-badges">'+h+'</div>' : '';
  }
  function _dateInputVal(v){
    if(!v) return '';
    var d = v.toDate ? v.toDate() : new Date(typeof v.seconds==='number' ? v.seconds*1000 : v);
    if(isNaN(d.getTime())) return '';
    var m=String(d.getMonth()+1).padStart(2,'0'), day=String(d.getDate()).padStart(2,'0');
    return d.getFullYear()+'-'+m+'-'+day;
  }
  function _parseAdmDate(val){ if(!val) return null; var d=new Date(val+'T23:59:59'); return isNaN(d.getTime())?null:d; }
  async function saveImmoAdmin(id){
    if(!currentUser || currentUser.email!==ADMIN_EMAIL) return;
    var es=(currentLang==='es');
    var feat=document.getElementById('admFeatured').checked;
    var ver=document.getElementById('admVerified').checked;
    var fU=_parseAdmDate(document.getElementById('admFeaturedUntil').value);
    var vU=_parseAdmDate(document.getElementById('admVerifiedUntil').value);
    if(feat && !fU){ fU=new Date(Date.now()+30*86400000); }
    var upd={ re_featured:!!feat, featured_until: feat?fU:null, makler_verified:!!ver, makler_verified_until: ver?(vU||null):null };
    var btn=document.getElementById('admSaveBtn'); if(btn){ btn.disabled=true; btn.textContent='…'; }
    try{
      await db.collection('listings').doc(id).update(upd);
      var l=allListings.find(function(x){return x.id===id;}); if(l) Object.assign(l, upd);
      showToast('✅ '+(es?'Guardado':'Gespeichert'));
      showDetail(id);
    }catch(e){ if(btn){ btn.disabled=false; btn.textContent=(es?'Guardar':'Speichern'); } alert(t('err_prefix')+(e.message||e)); }
  }
  function renderImmoCard(l){
    var es=(currentLang==='es');
    var dealMap=es?{kauf:'Venta',miete:'Alquiler'}:{kauf:'Kauf',miete:'Miete'};
    var media = l.cover_url
      ? '<div class="immo-card-media" style="background-image:url(\''+l.cover_url+'\')"></div>'
      : '<div class="immo-card-media immo-card-media-icon">'+(catIcons['kat-immobilien']||'')+'</div>';
    var price = immoPriceStr(l);
    var dealBadge = (l.re_deal && dealMap[l.re_deal]) ? '<span class="immo-deal-badge">'+dealMap[l.re_deal]+'</span>' : '';
    var meta = immoMetaStr(l);
    return '<div class="immo-card'+(isFeatured(l)?' immo-card-featured':'')+'" onclick="showDetail(\''+l.id+'\')">'+media
      +'<div class="immo-card-body">'+immoBadgesHTML(l)+dealBadge
      +(price?'<div class="immo-card-price">'+price+'</div>':'')
      +'<div class="immo-card-name">'+esc(l.name)+'</div>'
      +(meta?'<div class="immo-card-meta">'+meta+'</div>':'')
      +(l.city?'<div class="immo-card-city">'+esc(l.city)+'</div>':'')
      +'</div></div>';
  }
  function handleReCover(e){
    var f = e.target.files && e.target.files[0];
    if(!f) return;
    window._reCoverFile = f;
    var r = new FileReader();
    r.onload = function(ev){ var p=document.getElementById('reCoverPreview'); if(p){ p.style.backgroundImage="url('"+ev.target.result+"')"; p.style.display='block'; } };
    r.readAsDataURL(f);
  }
  var immoDeal='Alle', immoType='Alle';
  function renderImmoFilters(){
    var es=(currentLang==='es');
    var deals=[['Alle',es?'Todos':'Alle'],['kauf',es?'Venta':'Kauf'],['miete',es?'Alquiler':'Miete']];
    var types=[['Alle',es?'Todos los tipos':'Alle Typen'],['wohnung',es?'Departamento':'Wohnung'],['haus',es?'Casa':'Haus'],['grundstueck',es?'Terreno':'Grundstück'],['land',es?'Campo':'Land'],['gewerbe',es?'Comercial':'Gewerbe']];
    var dc=document.getElementById('immoDealChips'); if(dc) dc.innerHTML=deals.map(function(d){return '<div class="immo-fchip'+(immoDeal===d[0]?' active':'')+'" onclick="setImmoDeal(\''+d[0]+'\')">'+d[1]+'</div>';}).join('');
    var tc=document.getElementById('immoTypeChips'); if(tc) tc.innerHTML=types.map(function(t){return '<div class="immo-fchip'+(immoType===t[0]?' active':'')+'" onclick="setImmoType(\''+t[0]+'\')">'+t[1]+'</div>';}).join('');
  }
  function setImmoDeal(v){ immoDeal=v; renderImmoFilters(); loadImmobilien(); }
  function setImmoType(v){ immoType=v; renderImmoFilters(); loadImmobilien(); }
  function openImmobilien(){ renderImmoFilters(); updateMaklerCta(); showScreen('screenImmobilien'); loadImmobilien(); }
  function openImmobilienForm(){
    if (!currentUser){ showScreen('screenAuth'); return; }
    setNav('navForm'); showScreen('screenForm');
    var cat = document.getElementById('newCategory');
    if (cat){ cat.value = 'kat-immobilien'; if (typeof updateSubcatOptions === 'function') updateSubcatOptions(); }
  }
  // ── Makler werden / Inserat hervorheben (Kontakt + Preise) ─────────────────
  var MAKLER_WA = '4915222487351';
  function updateMaklerCta(){
    var el=document.getElementById('maklerCtaText'); if(!el) return;
    el.textContent = (currentLang==='es') ? '¿Agente?' : 'Makler?';
  }
  function openMaklerModal(listingId){
    var es=(currentLang==='es');
    var l = listingId ? (typeof allListings!=='undefined'?allListings:[]).find(function(x){return x.id===listingId;}) : null;
    var objName = l ? (l.name||'') : '';
    var waText = es
      ? ('Hola, me gustaría destacar mi inmueble'+(objName?(' «'+objName+'»'):'')+' en Buscar / ser agente verificado.')
      : ('Hallo, ich möchte mein Immobilien-Inserat'+(objName?(' „'+objName+'"'):'')+' bei Buscar hervorheben / als Makler verifiziert werden.');
    var waHref='https://wa.me/'+MAKLER_WA+'?text='+encodeURIComponent(waText);
    var box=document.getElementById('maklerModalBox'); if(!box) return;
    box.innerHTML =
      '<div style="display:flex;justify-content:space-between;align-items:flex-start;margin-bottom:6px">'
        +'<div style="font-family:\'Fraunces\',serif;font-size:21px;font-weight:700;color:var(--text-1)">'+(es?'Hazte visible':'Werde sichtbar')+'</div>'
        +'<button onclick="closeMaklerModal()" style="background:none;border:none;cursor:pointer;color:var(--text-3);padding:2px"><svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg></button>'
      +'</div>'
      +'<div style="font-size:13.5px;color:var(--text-2);line-height:1.5;margin-bottom:16px">'+(es?'Más visibilidad y confianza para tus inmuebles en Buscar.':'Mehr Sichtbarkeit und Vertrauen für deine Immobilien bei Buscar.')+'</div>'
      +'<div class="makler-price-card">'
        +'<div class="makler-price-head"><span class="makler-price-badge feat">★</span><span>'+(es?'Inmueble destacado':'Inserat hervorheben')+'</span></div>'
        +'<div class="makler-price-desc">'+(es?'Tu inmueble aparece arriba de todo, con marco y sello dorado.':'Dein Objekt erscheint ganz oben — mit goldenem Rahmen und Badge.')+'</div>'
        +'<div class="makler-price-val">USD 15 <span>(~14 €)</span> · <span>'+(es?'pago único por 30 días':'einmalig für 30 Tage')+'</span></div>'
      +'</div>'
      +'<div class="makler-price-card">'
        +'<div class="makler-price-head"><span class="makler-price-badge ver">✓</span><span>'+(es?'Agente verificado':'Verifizierter Makler')+'</span></div>'
        +'<div class="makler-price-desc">'+(es?'Sello de confianza «verificado» en tus inmuebles. Para verificarte registras tu cédula y RUC — así los usuarios ven que eres un proveedor real y registrado.':'Vertrauens-Badge „Verifiziert" an deinen Inseraten. Zur Verifizierung hinterlegst du Cédula und RUC — so sehen Nutzer, dass du ein echter, registrierter Anbieter bist.')+'</div>'
        +'<div class="makler-price-val">USD 20 <span>(~18 €)</span> · <span>'+(es?'por mes (suscripción)':'pro Monat (Abo)')+'</span></div>'
      +'</div>'
      +'<a href="'+waHref+'" target="_blank" rel="noopener" onclick="closeMaklerModal()" class="makler-wa-btn"><svg viewBox="0 0 24 24" width="19" height="19" fill="currentColor"><path d="M.057 24l1.687-6.163a11.867 11.867 0 0 1-1.587-5.946C.16 5.335 5.495 0 12.05 0a11.82 11.82 0 0 1 8.413 3.488 11.82 11.82 0 0 1 3.48 8.414c-.003 6.557-5.338 11.892-11.893 11.892a11.9 11.9 0 0 1-5.688-1.448L.057 24zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884a9.86 9.86 0 0 0 1.51 5.26l-.999 3.648 3.978-1.595zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.71.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.247-.694.247-1.289.173-1.413z"/></svg>'+(es?'Contactar por WhatsApp':'Per WhatsApp anfragen')+'</a>'
      +'<div style="font-size:11.5px;color:var(--text-3);line-height:1.5;margin-top:12px;text-align:center">'+(es?'Pago por transferencia / Tigo Money. Buscar activa la visibilidad manualmente.':'Zahlung per Überweisung / Tigo Money. Buscar schaltet die Sichtbarkeit manuell frei.')+'</div>';
    var m=document.getElementById('maklerModal'); if(m) m.style.display='flex';
  }
  function closeMaklerModal(){ var m=document.getElementById('maklerModal'); if(m) m.style.display='none'; }
  function showOnMap(id){
    var l=(typeof allListings!=='undefined'?allListings:[]).find(function(x){return x.id===id;});
    if(!l || l.lat==null || l.lng==null){ alert(currentLang==='es'?'Este inmueble no tiene ubicación.':'Für diese Immobilie ist kein Standort hinterlegt.'); return; }
    // Karte auf Immobilien-Kategorie stellen, damit der Pin sichtbar ist
    mapCategory='kat-immobilien';
    document.querySelectorAll('#mapCats .map-chip').forEach(function(c){ c.classList.remove('active'); });
    var ic=document.querySelector('#mapCats .map-chip[data-cat="kat-immobilien"]'); if(ic) ic.classList.add('active');
    _mapFitOnUpdate = false; window._skipMapFit = true;
    setNav('navMap'); showScreen('screenMap');
    var tries=0;
    (function go(){ tries++;
      if(maplibreMap){ try{ maplibreMap.flyTo({center:[l.lng, l.lat], zoom:15, essential:true}); return; }catch(e){} }
      if(tries<25) setTimeout(go,160);
    })();
  }
  function loadImmobilien(){
    var es=(currentLang==='es');
    function _ts(x){ if(!x) return 0; if(typeof x.seconds==='number') return x.seconds; if(typeof x.toMillis==='function') return x.toMillis()/1000; var d=new Date(x); return isNaN(d.getTime())?0:d.getTime()/1000; }
    var all=(typeof allListings!=='undefined'?allListings:[]).filter(function(l){ return l.category_id==='kat-immobilien' && l.verified; });
    var list=all.filter(function(l){ return (immoDeal==='Alle'||l.re_deal===immoDeal) && (immoType==='Alle'||l.re_type===immoType); });
    list=list.slice().sort(function(a,b){ var fa=isFeatured(a)?1:0, fb=isFeatured(b)?1:0; if(fb!==fa) return fb-fa; return _ts(b.created_at)-_ts(a.created_at); });
    var body=document.getElementById('immobilienBody'); if(!body) return;
    var cnt=document.getElementById('immobilienCount'); if(cnt) cnt.textContent=list.length+' '+(es?(list.length===1?'inmueble':'inmuebles'):(list.length===1?'Objekt':'Objekte'));
    if(!list.length){
      var noneAtAll=(all.length===0);
      var t1=noneAtAll?(es?'Aún no hay inmuebles':'Noch keine Immobilien'):(es?'Sin resultados':'Keine Treffer');
      var t2=noneAtAll?(es?'Sé el primero en publicar uno':'Sei der Erste und inseriere eine'):(es?'Prueba con otro filtro':'Versuch einen anderen Filter');
      body.innerHTML='<div class="empty-state"><div class="empty-icon"><svg viewBox="0 0 24 24" fill="none" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 10.5 12 3l9 7.5"/><path d="M5 9.5V21h14V9.5"/></svg></div><div class="empty-title">'+t1+'</div><div class="empty-sub">'+t2+'</div></div>';
      return;
    }
    body.innerHTML=list.map(renderImmoCard).join('');
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
    if(currentUser&&(currentUser.email===ADMIN_EMAIL||(l.owner_id&&l.owner_id===currentUser.uid)||(l.created_by&&l.created_by===currentUser.uid))){
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
    document.getElementById('detailCity').innerHTML = l.city?`<svg viewBox="0 0 24 24" fill="none" stroke-width="2" stroke-linecap="round" width="13" height="13"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>${esc(prettyCity(l.city))}`:'';
    const descEl = document.getElementById('detailDesc');
    const descContent = l.description || '';
    descEl.innerHTML = esc(descContent) || t('no_description');
    descEl.dataset.original = descContent;
    descEl.dataset.tlang = '';
    const badges = document.getElementById('detailBadges');
    const openStatus = isOpen(l.opening_hours);
    const openBadge = openStatus===true ? '<span class="detail-badge open-status">'+t('open_now')+'</span>' : openStatus===false ? '<span class="detail-badge closed-status">'+t('closed_now')+'</span>' : '';
    var _esb=(currentLang==='es');
    var featBadge = isFeatured(l) ? '<span class="detail-badge featured">★ '+(_esb?'Destacado':'Empfohlen')+'</span>' : '';
    var maklerBadge = isMaklerVerified(l) ? '<span class="detail-badge makler">✓ '+(_esb?'Agente verificado':'Verifizierter Makler')+'</span>' : '';
    document.getElementById('detailBadgeRow').innerHTML = featBadge + maklerBadge + (l.verified?'<span class="detail-badge green">'+t('verified')+'</span>':'') + (isNew(l.created_at)?'<span class="detail-badge blue">'+t('badge_new')+'</span>':'') + openBadge;
    badges.style.display = (featBadge || maklerBadge || l.verified || isNew(l.created_at) || openStatus!==null) ? 'block' : 'none';
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

    // Standort korrigieren: Inhaber/Admin direkt; bei NICHT beanspruchten Einträgen
    // dürfen normale Nutzer einen Vorschlag einreichen. Beanspruchte Einträge: nur Inhaber/Admin.
    (function(){
      var btn = document.getElementById('locFixBtn'); if (!btn) return;
      var lbl = document.getElementById('locFixLabel');
      var isAdmin = currentUser && currentUser.email === ADMIN_EMAIL;
      var isOwner = currentUser && l.owner_id && l.owner_id === currentUser.uid;
      var claimed = !!l.owner_id;
      if (isAdmin || isOwner) {
        btn.style.display = ''; if (lbl) lbl.textContent = t('locfix_btn_edit');
      } else if (currentUser && !claimed) {
        btn.style.display = ''; if (lbl) lbl.textContent = t('locfix_btn_suggest');
      } else {
        btn.style.display = 'none';
      }
    })();

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

    // Immobilien-Fakten (Preis, Typ, Fläche, Zimmer)
    const reEl = document.getElementById('detailReFacts');
    if (reEl) {
      if (l.category_id === 'kat-immobilien') {
        reEl.innerHTML = renderReFacts(l);
        reEl.style.display = 'block';
      } else {
        reEl.style.display = 'none';
        reEl.innerHTML = '';
      }
    }

    showScreen('screenDetail');
    // Bei Immobilien: Bewertungen, Kommentare und Inhaber-Anspruch ausblenden (passen dort nicht)
    var _isImmo = (l.category_id === 'kat-immobilien');
    var _rc = document.getElementById('detailRatingsCard'); if (_rc) _rc.style.display = _isImmo ? 'none' : '';
    var _cc = document.getElementById('detailCommentsCard'); if (_cc) _cc.style.display = _isImmo ? 'none' : '';
    var _disc = document.getElementById('detailImmoDisclaimer');
    if (_disc) {
      if (_isImmo) {
        _disc.innerHTML = (currentLang === 'es')
          ? '<b>⚠️ Aviso:</b> Buscar es una plataforma y no es parte del contrato. Los datos y precios provienen del anunciante y no están verificados ni garantizados. Verifica el inmueble y al anunciante con cuidado y nunca pagues por adelantado sin una visita personal. Buscar no se responsabiliza por los anuncios ni las transacciones.'
          : '<b>⚠️ Hinweis:</b> Buscar ist eine Plattform und kein Vertragspartner. Angaben und Preise stammen vom Inserenten und werden nicht geprüft oder garantiert. Prüfe Objekt und Anbieter sorgfältig und leiste niemals Vorauszahlungen ohne persönliche Besichtigung. Buscar übernimmt keine Haftung für Inserate oder Transaktionen.';
        _disc.style.display = 'block';
      } else { _disc.style.display = 'none'; }
    }
    // Ersteller darf eigenen Eintrag bearbeiten/loeschen
    var _cre = document.getElementById('detailCreatorControls');
    if (_cre) {
      if (currentUser && l.created_by && l.created_by === currentUser.uid) {
        var _esc = (currentLang === 'es');
        _cre.innerHTML = '<div class="detail-card" style="display:flex;gap:8px;padding:12px">'
          + '<button onclick="openEditListing(\'' + l.id + '\')" style="flex:1;background:var(--bg);border:1.5px solid var(--border);border-radius:12px;padding:11px;font-family:\'DM Sans\',sans-serif;font-weight:600;font-size:13px;color:var(--text-1);cursor:pointer;display:flex;align-items:center;justify-content:center;gap:7px"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"/><path d="M18.5 2.5a2.12 2.12 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"/></svg>' + (_esc ? 'Editar' : 'Bearbeiten') + '</button>'
          + '<button onclick="deleteOwnListing(\'' + l.id + '\')" style="flex:1;background:var(--red-light);border:none;border-radius:12px;padding:11px;font-family:\'DM Sans\',sans-serif;font-weight:600;font-size:13px;color:var(--red);cursor:pointer;display:flex;align-items:center;justify-content:center;gap:7px"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="3 6 5 6 21 6"/><path d="M19 6l-1 14H6L5 6"/><path d="M10 11v6M14 11v6M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"/></svg>' + (_esc ? 'Eliminar' : 'Löschen') + '</button>'
          + '</div>'
          + (l.category_id === 'kat-immobilien'
              ? '<div class="detail-card makler-promo-card" onclick="openMaklerModal(\'' + l.id + '\')"><div class="makler-promo-icon">★</div><div class="makler-promo-text"><div class="makler-promo-title">' + (_esc ? '¿Destacar este inmueble?' : 'Dieses Objekt hervorheben?') + '</div><div class="makler-promo-sub">' + (_esc ? 'Aparece arriba + sello de verificado' : 'Ganz oben erscheinen + Verifiziert-Badge') + '</div></div><svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="9 18 15 12 9 6"/></svg></div>'
              : '');
        _cre.style.display = 'block';
      } else { _cre.style.display = 'none'; _cre.innerHTML = ''; }
    }
    // Admin: Featured / Verifizierter Makler steuern (nur Immobilien)
    var _adm = document.getElementById('detailImmoAdmin');
    if (_adm) {
      if (_isImmo && currentUser && currentUser.email === ADMIN_EMAIL) {
        var _esa = (currentLang === 'es');
        _adm.innerHTML = '<div class="detail-card" style="padding:14px">'
          + '<div class="detail-section-title" style="padding:0 0 10px">&#128295; ' + (_esa ? 'Admin · Visibilidad' : 'Admin · Sichtbarkeit') + '</div>'
          + '<label class="adm-imo-row"><input type="checkbox" id="admFeatured"' + (l.re_featured ? ' checked' : '') + '> ' + (_esa ? 'Destacado (Empfohlen)' : 'Empfohlen (Featured)') + '</label>'
          + '<div class="adm-imo-field"><span>' + (_esa ? 'Válido hasta' : 'Gültig bis') + '</span><input type="date" id="admFeaturedUntil" value="' + _dateInputVal(l.featured_until) + '"></div>'
          + '<label class="adm-imo-row"><input type="checkbox" id="admVerified"' + (l.makler_verified ? ' checked' : '') + '> ' + (_esa ? 'Agente verificado' : 'Verifizierter Makler') + '</label>'
          + '<div class="adm-imo-field"><span>' + (_esa ? 'Hasta (opcional)' : 'Bis (optional)') + '</span><input type="date" id="admVerifiedUntil" value="' + _dateInputVal(l.makler_verified_until) + '"></div>'
          + '<button id="admSaveBtn" class="adm-imo-save" onclick="saveImmoAdmin(\'' + l.id + '\')">' + (_esa ? 'Guardar' : 'Speichern') + '</button>'
          + '</div>';
        _adm.style.display = 'block';
      } else { _adm.style.display = 'none'; _adm.innerHTML = ''; }
    }
    if (!_isImmo) { loadReviews(id); loadComments(id); }
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
    'kat-immobilien': '#0D9488',
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
    'kat-immobilien': 'Immobilie',
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
          { id:'pin-immobilien',   color:'#0D9488', emoji:'🏠' },
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
                'kat-immobilien', 'pin-immobilien',
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
                <div class="map-popup-city">${prettyCity(p.city)}</div>
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
    if (mapMode === 'radar') { if (_radarEvents) setRadarEvents(false); else renderRadar(); }
  });

  // ══ RADAR / UMKREIS ════════════════════════════════════════════════════════
  var mapMode = 'map';
  var _radarLat = null, _radarLng = null, _radarRadiusKm = 5;
  var RADAR_RADII = [1, 2, 5, 10, 25];
  var _radarEvents = false;
  var RADAR_EVENT_COLOR = '#7C3AED';
  function setMapMode(mode){
    mapMode = mode;
    var isR = (mode === 'radar');
    var fab = document.getElementById('radarFab'); if (fab) fab.style.display = isR ? 'none' : 'flex';
    var rv = document.getElementById('radarView'); if (rv) rv.style.display = isR ? 'flex' : 'none';
    var lm = document.getElementById('leafletMap'); if (lm) lm.style.visibility = isR ? 'hidden' : 'visible';
    var ml = document.getElementById('mapList'); if (ml) ml.style.display = isR ? 'none' : '';
    var nc = document.getElementById('mapNoCoords'); if (nc && isR) nc.style.display = 'none';
    // Stadt-Auswahl + Karten-Events-Button im Radar ausblenden (passen dort nicht)
    var cityBtn = document.getElementById('mapCityPickerBtn'); if (cityBtn) cityBtn.style.display = isR ? 'none' : 'flex';
    var evBtn = document.getElementById('eventsMapBtn'); if (evBtn) evBtn.style.display = isR ? 'none' : 'flex';
    if (isR) {
      var lbl = document.getElementById('radarRefreshLabel'); if (lbl) lbl.textContent = (currentLang==='es'?'Actualizar':'Aktualisieren');
      var sp = document.getElementById('radarSegPlaces'); if (sp) sp.textContent = (currentLang==='es'?'Lugares':'Orte');
      var se = document.getElementById('radarSegEvents'); if (se) se.textContent = (currentLang==='es'?'Eventos':'Events');
      if (_radarLat == null) refreshRadarLocation(); else renderRadar();
    } else if (maplibreMap) { try { setTimeout(function(){ maplibreMap.resize(); }, 60); } catch(e){} }
  }
  function _haversineKm(la1, ln1, la2, ln2){
    var R = 6371, p = Math.PI/180;
    var dLa = (la2-la1)*p, dLn = (ln2-ln1)*p;
    var a = Math.sin(dLa/2)*Math.sin(dLa/2) + Math.cos(la1*p)*Math.cos(la2*p)*Math.sin(dLn/2)*Math.sin(dLn/2);
    return R*2*Math.atan2(Math.sqrt(a), Math.sqrt(1-a));
  }
  function _fmtDist(km){
    if (km < 1) return Math.round(km*1000) + ' m';
    if (km < 10) return km.toFixed(1).replace('.', ',') + ' km';
    return Math.round(km) + ' km';
  }
  function refreshRadarLocation(){
    var status = document.getElementById('radarStatus');
    var es = (currentLang === 'es');
    if (!navigator.geolocation){ if (status) status.textContent = es?'GPS no disponible':'GPS nicht verfügbar'; return; }
    if (status) status.textContent = es?'Obteniendo ubicación…':'Standort wird ermittelt…';
    navigator.geolocation.getCurrentPosition(function(pos){
      _radarLat = pos.coords.latitude; _radarLng = pos.coords.longitude; renderRadar();
    }, function(){ if (status) status.textContent = es?'No se pudo obtener la ubicación':'Standort konnte nicht ermittelt werden'; }, { enableHighAccuracy:true, timeout:10000, maximumAge:60000 });
  }
  function setRadarRadius(km){ _radarRadiusKm = km; renderRadar(); }
  async function setRadarEvents(on){
    _radarEvents = !!on;
    var sp = document.getElementById('radarSegPlaces'), se = document.getElementById('radarSegEvents');
    if (sp) sp.classList.toggle('active', !on);
    if (se) se.classList.toggle('active', on);
    if (on && (typeof allEvents === 'undefined' || !allEvents || !allEvents.length)){
      var status = document.getElementById('radarStatus');
      if (status) status.textContent = (currentLang==='es'?'Cargando eventos…':'Events werden geladen…');
      try { await loadEvents(); } catch(e){}
    }
    renderRadar();
  }
  function _renderRadarRadiusChips(){
    var el = document.getElementById('radarRadiusChips'); if (!el) return;
    el.innerHTML = RADAR_RADII.map(function(km){
      return '<div class="radar-rchip'+(_radarRadiusKm===km?' active':'')+'" onclick="setRadarRadius('+km+')">'+km+' km</div>';
    }).join('');
  }
  function _radarCandidates(){
    if (_radarLat == null) return [];
    var arr;
    if (_radarEvents){
      arr = (typeof allEvents!=='undefined' && allEvents ? allEvents : []).filter(function(e){
        return e.lat != null && e.lng != null;
      }).map(function(e){ return { e:e, ev:true, km:_haversineKm(_radarLat, _radarLng, e.lat, e.lng) }; });
    } else {
      var cat = mapCategory;
      arr = (typeof allListings!=='undefined'?allListings:[]).filter(function(l){
        if (!l.verified || l.lat == null || l.lng == null) return false;
        if (cat !== 'Alle' && l.category_id !== cat) return false;
        // Stadt-Filter im Radar bewusst ignorieren — Radar = Umkreis um dich, nicht Stadt
        if (typeof mapSubcatFilter !== 'undefined' && mapSubcatFilter !== 'Alle' && norm(l.subcategory||'') !== norm(mapSubcatFilter)) return false;
        if (typeof mapMinStars !== 'undefined' && mapMinStars > 0) { var a = getAvgRating(l.id); if (!(a && a >= mapMinStars)) return false; }
        if (typeof activeDeal !== 'undefined' && activeDeal && !(l.deal_text && l.deal_text.trim() !== '')) return false;
        return true;
      }).map(function(l){ return { l:l, ev:false, km:_haversineKm(_radarLat, _radarLng, l.lat, l.lng) }; });
    }
    arr = arr.filter(function(x){ return x.km <= _radarRadiusKm; });
    arr.sort(function(a,b){ return a.km - b.km; });
    return arr;
  }
  function _radarRowHTML(x){
    var km = x.km, es = (currentLang === 'es');
    if (x.ev){
      var e = x.e;
      var st = (e.date_start && e.date_start.toDate) ? e.date_start.toDate() : null;
      var dateStr = st ? st.toLocaleDateString(es?'es-PY':'de-DE', {weekday:'short', day:'numeric', month:'short'}) : '';
      var emoji = (typeof EVENT_TYPE_EMOJIS!=='undefined' && EVENT_TYPE_EMOJIS[e.type]) ? EVENT_TYPE_EMOJIS[e.type] : '🎪';
      var esub = [dateStr, e.city].filter(Boolean).join(' · ');
      return '<div class="radar-row" onclick="showEventDetail(\''+e.id+'\')">'
        + '<div class="radar-row-dot" style="background:'+RADAR_EVENT_COLOR+'"></div>'
        + '<div class="radar-row-main"><div class="radar-row-name">'+emoji+' '+(e.title||'')+'</div><div class="radar-row-sub">'+esub+'</div></div>'
        + '<div class="radar-row-dist">'+_fmtDist(km)+'</div></div>';
    }
    var l = x.l;
    var col = catColors[l.category_id] || catColors.default;
    var sub = (catLabels[l.category_id] || catLabels.default) + (l.city ? ' · ' + esc(l.city) : '');
    return '<div class="radar-row" onclick="showDetail(\''+l.id+'\')">'
      + '<div class="radar-row-dot" style="background:'+col+'"></div>'
      + '<div class="radar-row-main"><div class="radar-row-name">'+esc(l.name)+'</div><div class="radar-row-sub">'+sub+'</div></div>'
      + '<div class="radar-row-dist">'+_fmtDist(km)+'</div></div>';
  }
  function _bearing(la1, ln1, la2, ln2){
    var p = Math.PI/180;
    var y = Math.sin((ln2-ln1)*p) * Math.cos(la2*p);
    var x = Math.cos(la1*p)*Math.sin(la2*p) - Math.sin(la1*p)*Math.cos(la2*p)*Math.cos((ln2-ln1)*p);
    return (Math.atan2(y, x)*180/Math.PI + 360) % 360;
  }
  function _radarStageHTML(cand){
    var es = (currentLang === 'es');
    var C = 100, MAX = 88;
    var grid = '';
    for (var gi = 20; gi <= 180; gi += 20){
      grid += '<line x1="'+gi+'" y1="12" x2="'+gi+'" y2="188"/><line x1="12" y1="'+gi+'" x2="188" y2="'+gi+'"/>';
    }
    var dots = cand.slice(0, 36).map(function(x){
      var tlat, tlng, id, fn;
      if (x.ev){ tlat=x.e.lat; tlng=x.e.lng; id=x.e.id; fn='showEventDetail'; }
      else { tlat=x.l.lat; tlng=x.l.lng; id=x.l.id; fn='showDetail'; }
      var br = _bearing(_radarLat, _radarLng, tlat, tlng);
      var rr = Math.min(1, x.km/_radarRadiusKm) * MAX;
      var rad = br*Math.PI/180;
      var px = +(C + rr*Math.sin(rad)).toFixed(1), py = +(C - rr*Math.cos(rad)).toFixed(1);
      if (x.ev){
        var emoji = (typeof EVENT_TYPE_EMOJIS!=='undefined' && EVENT_TYPE_EMOJIS[x.e.type]) ? EVENT_TYPE_EMOJIS[x.e.type] : '🎪';
        var ttlE = (x.e.title||'').replace(/[<>"]/g,'') + ' · ' + _fmtDist(x.km);
        return '<g style="cursor:pointer" onclick="'+fn+'(\''+id+'\')"><title>'+ttlE+'</title>'
          + '<circle cx="'+px+'" cy="'+py+'" r="8" fill="#fff" stroke="'+RADAR_EVENT_COLOR+'" stroke-width="1.6"/>'
          + '<text x="'+px+'" y="'+(py+0.4)+'" font-size="9" text-anchor="middle" dominant-baseline="central">'+emoji+'</text></g>';
      }
      var col = catColors[x.l.category_id] || catColors.default;
      var em = catEmojis[x.l.category_id] || '📍';
      var ttlL = (x.l.name||'').replace(/[<>"]/g,'') + ' · ' + _fmtDist(x.km);
      return '<g style="cursor:pointer" onclick="'+fn+'(\''+id+'\')"><title>'+ttlL+'</title>'
        + '<path d="M'+px+' '+py+' L'+(px-5)+' '+(py-8)+' A6 6 0 1 1 '+(px+5)+' '+(py-8)+' Z" fill="'+col+'" stroke="#fff" stroke-width="1"/>'
        + '<text x="'+px+'" y="'+(py-11)+'" font-size="7" text-anchor="middle" dominant-baseline="central">'+em+'</text></g>';
    }).join('');
    return '<div class="radar-stage"><svg viewBox="0 0 200 200" aria-hidden="true">'
      + '<defs>'
      + '<radialGradient id="rgSweep"><stop offset="0%" stop-color="#F5A623" stop-opacity="0.5"/><stop offset="100%" stop-color="#F5A623" stop-opacity="0"/></radialGradient>'
      + '<clipPath id="radarClip"><circle cx="100" cy="100" r="88"/></clipPath>'
      + '</defs>'
      + '<circle cx="100" cy="100" r="88" fill="#F1F4F6"/>'
      + '<g clip-path="url(#radarClip)" stroke="var(--border)" stroke-width="0.5" opacity="0.7">'+grid+'</g>'
      + '<circle cx="100" cy="100" r="88" fill="none" stroke="var(--border)" stroke-width="1"/>'
      + '<circle cx="100" cy="100" r="59" fill="none" stroke="var(--border)" stroke-width="1"/>'
      + '<circle cx="100" cy="100" r="30" fill="none" stroke="var(--border)" stroke-width="1"/>'
      + '<line x1="100" y1="12" x2="100" y2="188" stroke="var(--border)" stroke-width="0.8"/>'
      + '<line x1="12" y1="100" x2="188" y2="100" stroke="var(--border)" stroke-width="0.8"/>'
      + '<text x="100" y="9" font-size="8" font-weight="700" text-anchor="middle" fill="var(--text-3)">N</text>'
      + '<text x="194" y="103" font-size="8" font-weight="700" text-anchor="middle" fill="var(--text-3)">'+(es?'E':'O')+'</text>'
      + '<text x="100" y="199" font-size="8" font-weight="700" text-anchor="middle" fill="var(--text-3)">S</text>'
      + '<text x="6" y="103" font-size="8" font-weight="700" text-anchor="middle" fill="var(--text-3)">'+(es?'O':'W')+'</text>'
      + '<g class="radar-sweep"><path d="M100 100 L100 12 A88 88 0 0 1 162.2 37.8 Z" fill="url(#rgSweep)"/></g>'
      + dots
      + '<circle cx="100" cy="100" r="12" fill="#007AFF" opacity="0.16"/>'
      + '<circle cx="100" cy="100" r="5" fill="#007AFF" stroke="#fff" stroke-width="2"/>'
      + '</svg>'
      + '<div class="radar-stage-cap">'+(es?'Tú':'Du')+' · '+_radarRadiusKm+' km</div></div>';
  }
  function renderRadar(){
    _renderRadarRadiusChips();
    var list = document.getElementById('radarList'); if (!list) return;
    var status = document.getElementById('radarStatus');
    var es = (currentLang === 'es');
    if (_radarLat == null){
      list.innerHTML = '';
      if (status) status.textContent = es?'Activa el GPS para ver lo cercano':'Standort aktivieren, um die Umgebung zu sehen';
      return;
    }
    var cand = _radarCandidates();
    var noun = _radarEvents ? 'Events' : (es ? 'lugares' : 'Orte');
    if (status) status.textContent = cand.length + ' ' + noun + ' ' + (es ? ('en '+_radarRadiusKm+' km') : ('im Umkreis von '+_radarRadiusKm+' km'));
    var stage = _radarStageHTML(cand);
    if (!cand.length){
      var et = _radarEvents ? (es?'Ningún evento cerca':'Keine Events in der Nähe') : (es?'Nada cerca':'Nichts in der Nähe');
      list.innerHTML = stage + '<div class="empty-state" style="padding:24px 16px"><div class="empty-title">'+et+'</div><div class="empty-sub">'+(es?'Aumenta el radio o cambia el filtro':'Vergrößere den Radius oder ändere den Filter')+'</div></div>';
      return;
    }
    list.innerHTML = stage + cand.slice(0, 60).map(function(x){ return _radarRowHTML(x); }).join('');
  }

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
      var reFields = {};
      if (cat === 'kat-immobilien') {
        var _num = function(id){ var v = parseFloat(document.getElementById(id).value); return isNaN(v) ? null : v; };
        reFields = {
          re_deal: document.getElementById('reDeal').value || null,
          re_type: document.getElementById('reType').value || null,
          re_price: _num('rePrice'),
          re_currency: document.getElementById('reCurrency').value || null,
          re_period: (document.getElementById('reDeal').value === 'miete') ? 'monat' : null,
          re_area: _num('reArea'),
          re_area_unit: document.getElementById('reAreaUnit').value || null,
          re_rooms: _num('reRooms')
        };
      }
      const ref = await db.collection('listings').add({ name, category_id: cat, city, description: desc, subcategory: document.getElementById('newSubcategory').value||null, phone: phone||null, website: document.getElementById('newWebsite').value.trim()||null, address: document.getElementById('newAddress').value.trim()||null, opening_hours: (()=>{ const d=document.getElementById('hoursDay').value; const f=document.getElementById('hoursFrom').value; const t=document.getElementById('hoursTo').value; const f2=document.getElementById('hoursFrom2').value; const t2=document.getElementById('hoursTo2').value; let val=''; if(d&&f&&t){val=d+' '+f+'-'+t; if(f2&&t2) val+=' & '+f2+'-'+t2;} document.getElementById('newHours').value=val; return val||null; })(), lat: window._newLat, lng: window._newLng, verified: false, created_by: currentUser?currentUser.uid:null, created_at: new Date(), ...reFields });
      if (pendingFormPhotos.length) await uploadFormPhotos(ref.id);
      if (cat === 'kat-immobilien' && window._reCoverFile) {
        try {
          const cblob = await compressImage(window._reCoverFile, 1280, 1280, 0.75);
          const cpath = 'covers/' + ref.id + '.jpg';
          const csnap = await storage.ref(cpath).put(cblob, { contentType: 'image/jpeg' });
          const curl = await csnap.ref.getDownloadURL();
          await db.collection('listings').doc(ref.id).update({ cover_url: curl });
        } catch (e) {}
        window._reCoverFile = null;
        var _rcp = document.getElementById('reCoverPreview'); if (_rcp) { _rcp.style.display = 'none'; _rcp.style.backgroundImage = ''; }
        var _rci = document.getElementById('reCoverInput'); if (_rci) _rci.value = '';
      }
      document.getElementById('formSuccess').textContent = t('submit_success'); document.getElementById('formSuccess').classList.add('visible');
      showToast(t('submit_success'));
      var _lhReset = document.getElementById('locationHint'); if (_lhReset) _lhReset.style.display = '';
      pendingFormPhotos = [];
      const grid2 = document.getElementById('formPhotoGrid');
      grid2.innerHTML = `<label style="aspect-ratio:1;border:1.5px dashed var(--border);border-radius:12px;background:var(--bg);display:flex;flex-direction:column;align-items:center;justify-content:center;cursor:pointer;gap:4px" for="formPhotoInput"><svg viewBox="0 0 24 24" fill="none" stroke="var(--text-3)" stroke-width="2" stroke-linecap="round" width="24" height="24"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg><span style="font-size:11px;color:var(--text-3);font-weight:500">${t('photo_add_label')}</span></label><input type="file" id="formPhotoInput" accept="image/*" multiple style="display:none" onchange="handleFormPhotos(event)">`;
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
    var _lh = document.getElementById('locationHint'); if (_lh) _lh.style.display = 'none';

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
        <span id="adminTabLocations" onclick="loadAdminLocationSuggestions()" style="cursor:pointer;color:rgba(255,255,255,0.6)">📍 Standorte</span>
        <span id="adminTabDuplicates" onclick="loadAdminDuplicates()" style="cursor:pointer;color:rgba(255,255,255,0.6)">📋 Duplikate</span>
      </div>`;
    loadAdminListings();
  }

  function _adminTs(x){ if(!x) return 0; if(typeof x.seconds==='number') return x.seconds; if(x.toMillis) return x.toMillis()/1000; var d=new Date(x); return isNaN(d.getTime())?0:d.getTime()/1000; }
  function _adminGroupKey(l){
    // NUR echte geografische Duplikate: gleicher Name an EXAKT gleicher Position.
    // Eintraege OHNE Koordinaten werden NICHT mehr gruppiert (zu unsicher -> Gefahr von Fehl-Loeschungen).
    if (l.lat == null || l.lng == null) return null;
    return (l.name||'').trim().toLowerCase()+'|'+Number(l.lat).toFixed(5)+'|'+Number(l.lng).toFixed(5);
  }
  async function loadAdminDuplicates() {
    ['adminTabListings','adminTabClaims','adminTabDeals','adminTabReports','adminTabLocations','adminTabDuplicates'].forEach(function(t){
      var el = document.getElementById(t); if (el){ el.style.color = 'rgba(255,255,255,0.6)'; el.style.borderBottom = 'none'; }
    });
    var dt = document.getElementById('adminTabDuplicates'); if (dt){ dt.style.color = 'white'; dt.style.borderBottom = '2px solid white'; }
    const body = document.getElementById('adminBody');
    body.innerHTML = '<div style="text-align:center;padding:40px"><div style="width:28px;height:28px;border:3px solid #FFF8EC;border-top-color:#F5A623;border-radius:50%;animation:spin 0.8s linear infinite;margin:0 auto"></div></div>';
    try {
      const snap = await db.collection('listings').where('verified','==',true).get();
      const all = snap.docs.map(d => ({ id:d.id, ...d.data() }));
      const _uniqueCount = (typeof _dedupeListings === 'function') ? _dedupeListings(all).length : all.length;
      const _hiddenCount = all.length - _uniqueCount;
      const _hideOn = (typeof DEDUPE_HIDE_DUPLICATES !== 'undefined' && DEDUPE_HIDE_DUPLICATES);
      const _shownNow = _hideOn ? _uniqueCount : all.length;
      const _dupNote = _hiddenCount > 0 ? (_hideOn ? (' · '+_hiddenCount+' Doppel ausgeblendet') : (' · '+_hiddenCount+' Doppel (aktuell mitgezeigt)')) : '';
      const countBanner = '<div style="margin:10px 12px;padding:12px;background:#0D9488;border-radius:10px;font-size:13px;color:#fff;text-align:center;font-weight:700;line-height:1.55">📊 '+all.length+' in der Datenbank · '+_uniqueCount+' einzigartig<br><span style="font-weight:600;font-size:12px">In der App sichtbar: '+_shownNow+_dupNote+'</span></div>';
      const groups = {};
      all.forEach(function(l){
        if (!(l.name||'').trim()) return;
        const k = _adminGroupKey(l);
        if (!k) return;
        (groups[k] = groups[k] || []).push(l);
      });
      const dupGroups = Object.keys(groups).map(function(k){ return groups[k]; }).filter(function(g){ return g.length > 1; });
      if (!dupGroups.length){ body.innerHTML = countBanner + '<div class="admin-empty"><div class="admin-empty-icon">&#10003;</div><div class="admin-empty-text">Keine Duplikate</div><div class="admin-empty-sub">Alle Einträge sind eindeutig.</div></div>'; return; }
      body.innerHTML = countBanner +
        '<div style="margin:10px 12px;padding:10px 12px;background:rgba(255,255,255,0.12);border-radius:10px;font-size:11.5px;color:#fff;line-height:1.5">⚠️ Es werden nur Eintr&auml;ge mit <b>identischem Namen an exakt gleicher Position</b> angezeigt (echte Doppel). Pr&uuml;fe Telefon/Stadt, bevor du l&ouml;schst.</div>' +
        '<div style="padding:0 0 4px;font-size:12px;color:rgba(255,255,255,0.6);text-align:center">'+dupGroups.length+' Duplikat-Gruppe(n)</div>' +
        dupGroups.map(function(g){
          const sorted = g.slice().sort(function(a,b){ return _adminTs(a.created_at) - _adminTs(b.created_at); });
          return '<div class="admin-card"><div class="admin-card-name">'+(sorted[0].name||'Ohne Name')+'</div>'
            + '<div class="admin-card-meta">'+((typeof catNames!=='undefined' && catNames[sorted[0].category_id])||'')+' &middot; '+(sorted[0].city||'')+' &middot; '+g.length+'&times;</div>'
            + sorted.map(function(l, idx){
                const keep = (idx === 0);
                const info = [l.city, l.phone].filter(Boolean).join(' · ') || '—';
                return '<div style="display:flex;align-items:center;justify-content:space-between;gap:10px;padding:8px 0;border-top:1px solid var(--border)">'
                  + '<div style="min-width:0"><div style="font-size:12px;font-weight:700;color:'+(keep?'#15803D':'var(--text-1)')+'">'+(keep?'✅ Behalten (Original)':'Duplikat')+'</div><div style="font-size:11px;color:var(--text-3);white-space:nowrap;overflow:hidden;text-overflow:ellipsis">'+info+'</div></div>'
                  + (keep ? '' : '<button class="admin-btn reject" style="flex-shrink:0;width:auto;padding:8px 14px" onclick="deleteDuplicate(\''+l.id+'\')">Löschen</button>')
                  + '</div>';
              }).join('')
            + '</div>';
        }).join('');
    } catch(e){ body.innerHTML = '<div class="admin-empty"><div class="admin-empty-text">Fehler beim Laden</div></div>'; }
  }
  async function deleteDuplicate(id){
    if (!confirm('Dieses Duplikat wirklich aus der Datenbank löschen?')) return;
    try {
      await db.collection('listings').doc(id).delete();
      showToast('✓ Duplikat gelöscht');
      await loadListings();
      loadAdminDuplicates();
    } catch(e){ alert(t('err_prefix') + (e.message || e)); }
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
        const photoHTML = photos.length ? `<div style="display:flex;gap:6px;margin-bottom:12px;overflow-x:auto">${photos.map(p => `<img loading="lazy" decoding="async" src="${p.url}" style="width:80px;height:80px;object-fit:cover;border-radius:8px;flex-shrink:0">`).join('')}</div>` : '';
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
    } catch(e) { alert(t('err_generic')); }
  }

  async function rejectClaim(claimId) {
    if (!confirm('Anfrage ablehnen?')) return;
    try {
      await db.collection('claims').doc(claimId).update({ status: 'rejected' });
      document.getElementById('claimCard_' + claimId).remove();
    } catch(e) { alert(t('err_generic')); }
  }

  async function approveEntry(id) {
    // 1. Listing freigeben (Hauptaufgabe)
    try {
      await db.collection('listings').doc(id).update({ verified: true });
    } catch (err) {
      console.error('approveEntry: listing update failed', err);
      var msg = (err && err.message) ? err.message : 'Unbekannter Fehler';
      alert('Eintrag konnte nicht freigegeben werden: ' + msg);
      return;
    }

    // 2. Zugehoerige Fotos auch freigeben (sekundaer - Fehler hier blockiert nichts)
    // Single-Query + Client-Filter umgeht Firestore Composite-Index-Requirement
    try {
      var photos = await db.collection('listing_photos')
        .where('listing_id', '==', id)
        .get();
      var pendingPhotos = photos.docs.filter(function(d) {
        return d.data().pending === true;
      });
      await Promise.all(pendingPhotos.map(function(d) {
        return d.ref.update({ pending: false });
      }));
      console.log('approveEntry: ' + pendingPhotos.length + ' Fotos freigegeben');
    } catch (err) {
      console.warn('approveEntry: photo update failed (Listing wurde aber freigegeben)', err);
    }

    // 3. UI aktualisieren
    try {
      var card = document.getElementById('adminCard_' + id);
      if (card) card.remove();
      showToast('✓ Eintrag freigegeben');
      await loadListings();
    } catch (err) {
      console.error('approveEntry: UI refresh failed', err);
    }
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
    } catch(e) { alert(t('err_prefix') + (e.message || e)); }
  }

  async function removeDeal(listingId) {
    if (!confirm(t('del_deal_confirm'))) return;
    try {
      await db.collection('listings').doc(listingId).update({ deal_text: null, deal_code: null, deal_expiry: null });
      await loadListings();
      loadAdminDeals();
    } catch(e) { alert(t('err_generic')); }
  }

  async function rejectEntry(id) {
    if (!confirm(t('del_entry_confirm'))) return;
    try {
      await db.collection('listings').doc(id).delete();
      var card = document.getElementById('adminCard_' + id);
      if (card) card.remove();
      showToast(t('toast_entry_deleted'));
    } catch (err) {
      console.error('rejectEntry failed', err);
      var msg = (err && err.message) ? err.message : 'Unbekannter Fehler';
      alert('Eintrag konnte nicht gelöscht werden: ' + msg);
    }
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
          <span class="review-item-name">${esc(r.user_name||'Anonym')}</span>
          <div class="review-item-stars">${starsHTML(r.rating,12)}</div>
        </div>
        <div class="review-item-text" data-original="${esc(r.comment)}">${esc(r.comment)}</div>
        <div class="review-item-date">${formatDate(r.created_at)}</div>
      </div>`).join('');
    if (currentLang !== 'de') translateVisibleContent();
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
    'Sonstiges': 'Otros', 'Tierarzt': 'Veterinario', 'Genossenschaft': 'Cooperativa', 'Wechselstube': 'Casa de cambio',
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
      const nowMin = now.getHours() * 60 + now.getMinutes();
      const lower = hours.toLowerCase();

      // Durchgehend / 24-7 geöffnet -> immer offen
      if (/24\s*\/\s*7|24\s*h(?:rs?|ours?|s)?\b|24\s*stunden|24\s*horas|durchgehend|rund um die uhr|immer ge[öo]ffnet|always open|abierto las 24|las 24 horas/.test(lower)) return true;

      // Wochentag bestimmen (DE + ES). hasDayInfo = ob überhaupt eine Tagesangabe erkannt wurde.
      let hasDayInfo = false, activeToday = false;
      if (lower.includes('täglich') || lower.includes('taeglich') || lower.includes('todos los') || lower.includes('diario')) { hasDayInfo = true; activeToday = true; }
      else {
        if (lower.includes('mo-fr') || lower.includes('lun-vie')) { hasDayInfo = true; if (day >= 1 && day <= 5) activeToday = true; }
        if (lower.includes('mo-sa') || lower.includes('lun-sa')) { hasDayInfo = true; if (day >= 1 && day <= 6) activeToday = true; }
        if (lower.includes('mo-so') || lower.includes('lun-do')) { hasDayInfo = true; activeToday = true; }
        if (lower.includes('sa-so') || lower.includes('wochenende') || lower.includes('fin de semana')) { hasDayInfo = true; if (day === 0 || day === 6) activeToday = true; }
      }

      // Trennzeichen normalisieren: diverse Gedankenstriche -> '-', und Wort-Trenner
      // ("bis", "a", "hasta", "to", "às") zwischen zwei Zahlen -> '-'.
      var nstr = lower
        .replace(/[‐-―−]/g, '-')
        .replace(/(\d)\s*(?:bis|hasta|às|a las|a|to)\s*(\d)/g, '$1-$2');

      // Zeitblöcke tolerant erkennen: "8-18", "8:00-18:00", "8h-18h", "08.00-18.00", "8.30-12.30"
      var re = /(\d{1,2})(?::|\.|h|hs|hrs)?(\d{2})?\s*(?:h|hs|hrs|uhr)?\s*-\s*(\d{1,2})(?::|\.|h|hs|hrs)?(\d{2})?\s*(?:h|hs|hrs|uhr)?/g;
      var blocks = [], mm;
      while ((mm = re.exec(nstr))) {
        var fh = parseInt(mm[1], 10), fmin = parseInt(mm[2] || '0', 10);
        var th = parseInt(mm[3], 10), tmin = parseInt(mm[4] || '0', 10);
        if (fh > 24 || th > 24 || fmin > 59 || tmin > 59) continue; // unplausibel (z.B. Telefonnr.) -> ignorieren
        blocks.push([fh, fmin, th, tmin]);
      }

      // Tagesangabe vorhanden, aber heute nicht dabei -> heute geschlossen.
      if (hasDayInfo && !activeToday) return false;
      // Keine erkennbaren Zeitblöcke -> Format unbekannt, lieber kein Badge als falsch "geschlossen".
      if (!blocks.length) return null;

      for (var bi = 0; bi < blocks.length; bi++) {
        var fromMin = blocks[bi][0]*60 + blocks[bi][1];
        var toMin = blocks[bi][2]*60 + blocks[bi][3];
        if (toMin === 0) toMin = 24*60; // 00:00 = Tagesende
        if (fromMin === 0 && toMin >= 24*60) return true; // voller Tag
        if (toMin < fromMin) {
          if (nowMin >= fromMin || nowMin < toMin) return true; // über Mitternacht
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
    } catch (err) { alert(t('err_generic')); btn.disabled=false; btn.textContent='Bewertung abschicken'; }
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
            <span class="reply-item-name">${esc(r.user_name||'Anonym')}</span>
            <span class="reply-item-date">${formatDate(r.created_at)}</span>
            ${myReply ? `<button onclick="deleteComment('${r.id}','${listingId}')" style="margin-left:6px;font-size:10px;color:var(--red);background:none;border:none;cursor:pointer;padding:0">${t('delete')}</button>` : ''}
          </div>
          <div class="reply-item-text" data-original="${esc(r.text)}">${esc(r.text)}</div>
        </div>`;
      }).join('');
      return `<div class="comment-item">
        <div class="comment-item-top">
          <span class="comment-item-name">${esc(c.user_name||'Anonym')}</span>
          <span class="comment-item-date">${formatDate(c.created_at)}</span>
          ${myComment ? `<button onclick="deleteComment('${c.id}','${listingId}')" style="margin-left:6px;font-size:10px;color:var(--red);background:none;border:none;cursor:pointer;padding:0">${t('delete')}</button>` : ''}
        </div>
        <div class="comment-item-text" data-original="${esc(c.text)}">${esc(c.text)}</div>
        <button class="reply-btn" onclick="toggleReplyForm('${c.id}')">${t('reply')}</button>
        ${repliesHTML}
        <div class="reply-form" id="replyForm_${c.id}" style="display:none;margin-top:8px">
          <textarea class="comment-input" id="replyInput_${c.id}" placeholder="Antwort..." rows="1"></textarea>
          <button class="comment-send" onclick="submitReply('${listingId}','${c.id}')"><svg viewBox="0 0 24 24" fill="none" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><line x1="22" y1="2" x2="11" y2="13"/><polygon points="22 2 15 22 11 13 2 9 22 2"/></svg></button>
        </div>
      </div>`;
    }).join('');
    if (currentLang !== 'de') translateVisibleContent();
  }

  async function deleteReview(reviewId, listingId) {
    if (!confirm(t('del_review_confirm'))) return;
    try { await db.collection('reviews').doc(reviewId).delete(); await loadAllRatings(); loadReviews(listingId); renderListings(); } catch(e) { alert(t('err_generic')); }
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
    } catch(e) { alert(t('err_generic')); }
  }

  async function deleteComment(commentId, listingId) {
    if (!confirm(t('del_comment_confirm'))) return;
    try { await db.collection('comments').doc(commentId).delete(); loadComments(listingId); } catch(e) { alert(t('err_generic')); }
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
    } catch(e) { alert(t('err_generic')); }
  }

  function detailBack(){ var from = window._detailFrom || 'screenHome'; if (from === 'screenMap') window._skipMapFit = true; showScreen(from); }

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

  function showEditEmail() {
    document.getElementById('currentEmailDisplay').value = currentUser ? currentUser.email : '';
    document.getElementById('newEmail').value = '';
    document.getElementById('emailCurrentPassword').value = '';
    document.getElementById('emailChangeError').style.display = 'none';
    document.getElementById('emailChangeSuccess').style.display = 'none';
    showScreen('screenEditEmail');
  }

  async function saveEmail() {
    const newEmail = document.getElementById('newEmail').value.trim();
    const pw = document.getElementById('emailCurrentPassword').value;
    const err = document.getElementById('emailChangeError');
    const succ = document.getElementById('emailChangeSuccess');
    err.style.display='none'; succ.style.display='none';
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(newEmail)) { err.textContent='Bitte eine gültige E-Mail eingeben.'; err.style.display='block'; return; }
    if (newEmail.toLowerCase() === (currentUser.email||'').toLowerCase()) { err.textContent='Das ist bereits deine aktuelle E-Mail.'; err.style.display='block'; return; }
    if (!pw) { err.textContent='Bitte aktuelles Passwort eingeben.'; err.style.display='block'; return; }
    try {
      const cred = firebase.auth.EmailAuthProvider.credential(currentUser.email, pw);
      await currentUser.reauthenticateWithCredential(cred);
      try { firebase.auth().languageCode = currentLang; } catch(e){}
      await currentUser.verifyBeforeUpdateEmail(newEmail);
      try { await db.collection('users').doc(currentUser.uid).set({ pending_email: newEmail }, { merge: true }); } catch(e){}
      succ.innerHTML = '✓ Bestätigungslink an <b>' + newEmail + '</b> gesendet. Bitte öffne diese E-Mail und klick den Link, dann ist die Änderung aktiv.';
      succ.style.display='block';
    } catch(e) {
      if (e.code === 'auth/wrong-password' || e.code === 'auth/invalid-credential') err.textContent='Aktuelles Passwort falsch.';
      else if (e.code === 'auth/email-already-in-use') err.textContent='Diese E-Mail wird bereits verwendet.';
      else if (e.code === 'auth/invalid-email') err.textContent='Ungültige E-Mail-Adresse.';
      else if (e.code === 'auth/requires-recent-login') err.textContent='Bitte melde dich neu an und versuche es erneut.';
      else if (e.code === 'auth/operation-not-allowed') err.textContent='E-Mail-Änderung ist derzeit nicht aktiviert.';
      else err.textContent=t('err_prefix') + (e.message || e.code || 'unbekannt');
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
    } catch(e) { alert(t('err_generic')); }
  }

  async function loadPhotos(listingId) {
    // Fotos eines bereits freigegebenen Eintrags immer zeigen (unabhaengig vom pending-Flag,
    // falls die Foto-Freigabe beim approveEntry fehlschlug). Einzel-Where vermeidet Index-Probleme.
    var _l = (typeof allListings !== 'undefined' ? allListings : []).find(function(x){ return x.id === listingId; });
    var listingApproved = !!(_l && _l.verified);
    const snap = await db.collection('listing_photos').where('listing_id','==',listingId).get();
    const photos = snap.docs.map(d => ({id:d.id, ...d.data()})).filter(function(p){ return p.pending === false || listingApproved; });
    const grid = document.getElementById('photosGrid');
    const canDelete = currentUser && currentUser.email === ADMIN_EMAIL;
    _lbUrls = photos.map(function(p){ return p.url; });
    let html = photos.map((p, _i) => `<div class="photo-thumb-wrap" style="position:relative"><img class="photo-thumb" loading="lazy" decoding="async" src="${p.url}" onclick="openLightbox(${_i})">${canDelete ? `<button onclick="deletePhoto('${p.id}','${p.path}',event)" style="position:absolute;top:4px;right:4px;width:24px;height:24px;background:rgba(0,0,0,0.6);border:none;border-radius:50%;color:white;font-size:14px;line-height:1;cursor:pointer;display:flex;align-items:center;justify-content:center">×</button>` : ''}</div>`).join('');
    if (currentUser) html += `<div class="photo-upload" onclick="document.getElementById('photoFileInput').click()" style="aspect-ratio:1;border:1.5px dashed var(--border);border-radius:12px;background:var(--bg);display:flex;flex-direction:column;align-items:center;justify-content:center;cursor:pointer;gap:4px"><svg viewBox="0 0 24 24" fill="none" stroke="var(--text-3)" stroke-width="2" stroke-linecap="round" width="22" height="22"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg><span style="font-size:11px;color:var(--text-3);font-weight:500">${t('photo_add_label')}</span></div>`;
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
    if (!confirm(t('del_photo_confirm'))) return;
    try {
      if (path) await storage.ref(path).delete().catch(()=>{});
      await db.collection('listing_photos').doc(photoId).delete();
      loadPhotos(currentListingId);
    } catch(e) { alert(t('err_generic')); }
  }

  async function uploadPhoto(event) {
    if (!currentUser) { showToast('Du musst eingeloggt sein.'); return; }
    if (!currentListingId) { showToast(t('toast_no_entry')); return; }
    const file = event.target.files[0];
    if (!file) return;

    const prog = document.getElementById('photoProgress');
    if (prog) { prog.classList.add('visible'); prog.textContent = 'Foto wird komprimiert...'; }

    try {
      // Komprimieren
      let blob;
      try {
        blob = await compressImage(file, 1200, 1200, 0.7);
      } catch(compErr) {
        console.error('Compress error:', compErr);
        throw new Error('Foto-Format nicht unterstützt. Bitte JPG oder PNG verwenden.');
      }
      if (prog) prog.textContent = 'Foto wird hochgeladen...';

      // Upload zu Firebase Storage
      const filename = Date.now() + '_' + Math.random().toString(36).substr(2,5) + '.jpg';
      const path = 'listings/' + currentListingId + '/' + filename;
      const ref = storage.ref(path);
      const snap = await ref.put(blob, { contentType: 'image/jpeg' });
      const url = await snap.ref.getDownloadURL();

      // Eintrag in Firestore
      const isAdmin = currentUser.email === ADMIN_EMAIL;
      await db.collection('listing_photos').add({
        listing_id: currentListingId, url, path, user_id: currentUser.uid,
        pending: !isAdmin, created_at: new Date()
      });

      // Erfolg: sichtbarer Toast + verlängerte Status-Anzeige
      if (isAdmin) {
        if (prog) {
          prog.textContent = '✓ Hochgeladen!';
          setTimeout(function(){ if (prog) prog.classList.remove('visible'); }, 2500);
        }
        showToast(t('toast_photo_uploaded'));
        loadPhotos(currentListingId);
      } else {
        if (prog) {
          prog.textContent = '✓ Foto wird geprüft und nach Freigabe sichtbar';
          setTimeout(function(){ if (prog) prog.classList.remove('visible'); }, 5000);
        }
        showToast(t('toast_photo_submitted'));
      }

      // Input zurücksetzen damit gleiches Foto erneut wählbar ist
      try { event.target.value = ''; } catch(e) {}

    } catch(e) {
      console.error('Photo upload error:', e);
      const msg = (e && e.message) ? e.message : 'Unbekannter Fehler';
      if (prog) {
        prog.textContent = '✗ ' + msg;
        setTimeout(function(){ if (prog) prog.classList.remove('visible'); }, 5000);
      }
      showToast('✗ ' + t('err_prefix') + msg);
    }
  }

  var _lbUrls = [], _lbIndex = 0, _lbSwiped = false, _lbGesturesInit = false;
  function openLightbox(i) {
    if (typeof i === 'string') { _lbUrls = [i]; _lbIndex = 0; }   // Rückwärtskompatibel (URL direkt)
    else { _lbIndex = Math.max(0, Math.min(_lbUrls.length - 1, i || 0)); }
    if (!_lbUrls.length) return;
    _lbBuildTrack();
    _lbApply(false);
    _lbUpdateChrome();
    document.getElementById('photoLightbox').classList.add('visible');
    _lbInitGestures();
  }
  function _lbBuildTrack() {
    var track = document.getElementById('lbTrack'); if (!track) return;
    track.innerHTML = _lbUrls.map(function(u){ return '<div class="lb-slide"><img src="' + u + '" alt="" draggable="false"></div>'; }).join('');
  }
  function _lbApply(animate) {
    var track = document.getElementById('lbTrack'); if (!track) return;
    track.style.transition = animate ? 'transform 0.33s cubic-bezier(0.22,0.61,0.36,1)' : 'none';
    track.style.transform = 'translateX(' + (-_lbIndex * 100) + '%)';
  }
  function _lbUpdateChrome() {
    var multi = _lbUrls.length > 1;
    var prev = document.getElementById('lbPrev'), next = document.getElementById('lbNext'), counter = document.getElementById('lbCounter');
    if (prev) prev.style.display = (multi && _lbIndex > 0) ? 'flex' : 'none';
    if (next) next.style.display = (multi && _lbIndex < _lbUrls.length - 1) ? 'flex' : 'none';
    if (counter) { counter.style.display = multi ? 'block' : 'none'; counter.textContent = (_lbIndex + 1) + ' / ' + _lbUrls.length; }
  }
  function lightboxNav(dir, ev) {
    if (ev && ev.stopPropagation) ev.stopPropagation();
    if (_lbUrls.length < 2) return;
    var ni = _lbIndex + dir;
    if (ni < 0 || ni > _lbUrls.length - 1) return;
    _lbIndex = ni;
    _lbApply(true); _lbUpdateChrome();
  }
  function closeLightbox() {
    if (_lbSwiped) { _lbSwiped = false; return; }   // ein Swipe schließt nicht
    document.getElementById('photoLightbox').classList.remove('visible');
  }
  function _lbInitGestures() {
    if (_lbGesturesInit) return; _lbGesturesInit = true;
    var lb = document.getElementById('photoLightbox');
    var vp = document.getElementById('lbViewport');
    var track = document.getElementById('lbTrack');
    if (!lb || !vp || !track) return;
    var startX = 0, startY = 0, dragging = false, vw = 0, decided = false, horiz = false;
    vp.addEventListener('touchstart', function(e){
      if (_lbUrls.length < 2) return;
      startX = e.touches[0].clientX; startY = e.touches[0].clientY;
      vw = vp.clientWidth || window.innerWidth;
      dragging = true; decided = false; horiz = false;
      track.style.transition = 'none';
    }, { passive: true });
    vp.addEventListener('touchmove', function(e){
      if (!dragging) return;
      var dx = e.touches[0].clientX - startX, dy = e.touches[0].clientY - startY;
      if (!decided) { decided = true; horiz = Math.abs(dx) > Math.abs(dy); }
      if (!horiz) return;
      if ((_lbIndex === 0 && dx > 0) || (_lbIndex === _lbUrls.length - 1 && dx < 0)) dx *= 0.35; // Randwiderstand
      track.style.transform = 'translateX(' + (-_lbIndex * vw + dx) + 'px)';
    }, { passive: true });
    vp.addEventListener('touchend', function(e){
      if (!dragging) return; dragging = false;
      var dx = e.changedTouches[0].clientX - startX;
      if (horiz && Math.abs(dx) > 45) {
        if (dx < 0 && _lbIndex < _lbUrls.length - 1) { _lbIndex++; _lbSwiped = true; setTimeout(function(){ _lbSwiped = false; }, 80); }
        else if (dx > 0 && _lbIndex > 0) { _lbIndex--; _lbSwiped = true; setTimeout(function(){ _lbSwiped = false; }, 80); }
      }
      _lbApply(true); _lbUpdateChrome();
    }, { passive: true });
    document.addEventListener('keydown', function(e){
      if (!lb.classList.contains('visible')) return;
      if (e.key === 'ArrowRight') lightboxNav(1);
      else if (e.key === 'ArrowLeft') lightboxNav(-1);
      else if (e.key === 'Escape') closeLightbox();
    });
  }

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
    grid.innerHTML = `<label style="aspect-ratio:1;border:1.5px dashed var(--border);border-radius:12px;background:var(--bg);display:flex;flex-direction:column;align-items:center;justify-content:center;cursor:pointer;gap:4px" for="formPhotoInput"><svg viewBox="0 0 24 24" fill="none" stroke="var(--text-3)" stroke-width="2" stroke-linecap="round" width="24" height="24"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg><span style="font-size:11px;color:var(--text-3);font-weight:500">${t('photo_add_label')}</span></label><input type="file" id="formPhotoInput" accept="image/*" multiple style="display:none" onchange="handleFormPhotos(event)">`;
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
    if (!confirm(t('del_photo_confirm'))) return;
    try {
      const userDoc = await db.collection('users').doc(currentUser.uid).get();
      if (userDoc.exists && userDoc.data().avatar_path) {
        await storage.ref(userDoc.data().avatar_path).delete().catch(()=>{});
      }
      await db.collection('users').doc(currentUser.uid).set({ avatar_url: null, avatar_path: null }, { merge: true });
      const name = document.getElementById('profilName').textContent;
      setAvatarDisplay(null, name.charAt(0).toUpperCase());
    } catch(e) { alert(t('err_generic')); }
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
    if (listing && listing.category_id === 'kat-immobilien') { section.innerHTML = ''; return; }
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
    // Eintrag hat bereits einen verifizierten Inhaber -> kein Claim-Button fuer andere Nutzer
    if (listing.owner_id) {
      section.innerHTML = `<div class="detail-card owner-section verified" style="padding:14px 16px;margin-top:14px;text-align:center">
        <div class="owner-badge">⭐ Verifizierter Inhaber</div>
        <div style="font-size:11px;color:var(--text-3);margin-top:6px;line-height:1.4">Dieser Ort wird bereits von einem verifizierten Inhaber verwaltet.</div>
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
      <div class="detail-card owner-section" id="claimDiv" style="padding:14px 16px;margin-top:14px">
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
    if (!reason) { alert(t('err_reason')); return; }
    try {
      const userDoc = await db.collection('users').doc(currentUser.uid).get();
      await db.collection('claims').add({
        listing_id: listingId, user_id: currentUser.uid, user_email: currentUser.email,
        user_name: userDoc.exists ? (userDoc.data().username||userDoc.data().name) : currentUser.email.split('@')[0],
        reason, status: 'pending', created_at: new Date()
      });
      document.getElementById('claimDiv').innerHTML = `<div style="text-align:center;padding:8px"><div style="font-size:14px;color:var(--green);font-weight:600">✓ Anfrage gesendet!</div></div>`;
    } catch(e) { alert(t('err_generic')); }
  }

  async function deleteOwnListing(id){
    var es=(currentLang==='es');
    if(!confirm(es?'¿Eliminar este anuncio definitivamente?':'Diesen Eintrag wirklich endgültig löschen?')) return;
    try{
      await db.collection('listings').doc(id).delete();
      try{ await loadListings(); }catch(e){}
      if(typeof showToast==='function') showToast(es?'✓ Eliminado':'✓ Eintrag gelöscht');
      setNav('navHome'); showScreen('screenHome');
    }catch(e){
      alert((es?'No se pudo eliminar: ':'Konnte nicht gelöscht werden: ')+((e&&e.message)||'Fehler'));
    }
  }

  // ── Standort im Bearbeiten-Screen (inline Mini-Karte) ──────────────────────
  var _editLocMap = null, _editLocMarker = null;
  function initEditLocationMap(lat, lng) {
    var es = (currentLang === 'es');
    var hasLoc = (typeof lat === 'number' && !isNaN(lat) && typeof lng === 'number' && !isNaN(lng));
    window._editLat = hasLoc ? lat : null;
    window._editLng = hasLoc ? lng : null;
    var clat = hasLoc ? lat : -25.2867, clng = hasLoc ? lng : -57.6470;
    var status = document.getElementById('editLocationStatus');
    if (status) status.textContent = hasLoc
      ? ((es ? 'Ubicación: ' : 'Standort: ') + clat.toFixed(5) + ', ' + clng.toFixed(5))
      : (es ? 'Aún sin ubicación – toca el mapa.' : 'Noch kein Standort gesetzt – tippe auf die Karte.');
    var setStatus = function(la, ln) {
      var s = document.getElementById('editLocationStatus');
      if (s) s.textContent = (es ? 'Ubicación: ' : 'Standort: ') + la.toFixed(5) + ', ' + ln.toFixed(5);
    };
    setTimeout(function() {
      try {
        if (!_editLocMap) {
          _editLocMap = new maplibregl.Map({ container:'editLocationMap', style: ML_STYLE, center:[clng, clat], zoom: hasLoc?15:5.5, interactive:true, dragRotate:false, attributionControl:false });
          _editLocMap.dragRotate.disable();
          _editLocMap.touchZoomRotate.disableRotation();
          _editLocMarker = new maplibregl.Marker({ color:'#0D9488', draggable:true }).setLngLat([clng, clat]).addTo(_editLocMap);
          _editLocMarker.on('dragend', function() {
            var p = _editLocMarker.getLngLat();
            window._editLat = p.lat; window._editLng = p.lng; setStatus(p.lat, p.lng);
          });
          _editLocMap.on('click', function(e) {
            window._editLat = e.lngLat.lat; window._editLng = e.lngLat.lng;
            _editLocMarker.setLngLat([e.lngLat.lng, e.lngLat.lat]); setStatus(e.lngLat.lat, e.lngLat.lng);
          });
        } else {
          _editLocMap.resize();
          _editLocMap.setCenter([clng, clat]);
          _editLocMap.setZoom(hasLoc?15:5.5);
          _editLocMarker.setLngLat([clng, clat]);
        }
        setTimeout(function(){ if (_editLocMap) _editLocMap.resize(); }, 120);
      } catch(e) { console.error('Edit-Standortkarte Fehler', e); }
    }, 150);
  }
  function useMyLocationEdit() {
    var es = (currentLang === 'es');
    if (!navigator.geolocation) return;
    var btn = document.getElementById('editLocationBtn');
    var orig = btn ? btn.innerHTML : '';
    if (btn) { btn.disabled = true; btn.textContent = es ? 'Obteniendo ubicación…' : 'Standort wird ermittelt…'; }
    navigator.geolocation.getCurrentPosition(function(pos) {
      var la = pos.coords.latitude, ln = pos.coords.longitude;
      window._editLat = la; window._editLng = ln;
      if (_editLocMap && _editLocMarker) { _editLocMap.flyTo({ center:[ln, la], zoom:15 }); _editLocMarker.setLngLat([ln, la]); }
      var s = document.getElementById('editLocationStatus'); if (s) s.textContent = (es ? 'Ubicación: ' : 'Standort: ') + la.toFixed(5) + ', ' + ln.toFixed(5);
      if (btn) { btn.disabled = false; btn.innerHTML = orig; }
    }, function() {
      if (btn) { btn.disabled = false; btn.innerHTML = orig; }
      var s = document.getElementById('editLocationStatus'); if (s) s.textContent = es ? 'No se pudo obtener la ubicación.' : 'Standort konnte nicht ermittelt werden.';
    });
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
    var _ef = document.getElementById('editImmoFields');
    if (_ef) {
      if (l.category_id === 'kat-immobilien') {
        document.getElementById('editReDeal').value = l.re_deal || 'kauf';
        document.getElementById('editReType').value = l.re_type || 'wohnung';
        document.getElementById('editRePrice').value = (l.re_price != null ? l.re_price : '');
        document.getElementById('editReCurrency').value = l.re_currency || 'USD';
        document.getElementById('editReArea').value = (l.re_area != null ? l.re_area : '');
        document.getElementById('editReAreaUnit').value = l.re_area_unit || 'm2';
        document.getElementById('editReRooms').value = (l.re_rooms != null ? l.re_rooms : '');
        _ef.style.display = 'block';
      } else { _ef.style.display = 'none'; }
    }
    showScreen('screenEditListing');
    initEditLocationMap(l.lat, l.lng);
  }

  async function saveListingEdits() {
    if (!currentEditListingId) return;
    const err = document.getElementById('editListingError'); err.style.display = 'none';
    const name = document.getElementById('editName').value.trim();
    const city = document.getElementById('editCity').value.trim();
    const desc = document.getElementById('editDesc').value.trim();
    if (!name || !city || desc.length < 50) { err.textContent='Bitte alle Pflichtfelder ausfüllen.'; err.style.display='block'; return; }
    const _el = allListings.find(x => x.id === currentEditListingId);
    var reEdit = {};
    if (_el && _el.category_id === 'kat-immobilien') {
      var _en = function(id){ var v = parseFloat(document.getElementById(id).value); return isNaN(v) ? null : v; };
      reEdit = {
        re_deal: document.getElementById('editReDeal').value || null,
        re_type: document.getElementById('editReType').value || null,
        re_price: _en('editRePrice'),
        re_currency: document.getElementById('editReCurrency').value || null,
        re_period: (document.getElementById('editReDeal').value === 'miete') ? 'monat' : null,
        re_area: _en('editReArea'),
        re_area_unit: document.getElementById('editReAreaUnit').value || null,
        re_rooms: _en('editReRooms')
      };
    }
    var locUpdate = {};
    if (typeof window._editLat === 'number' && !isNaN(window._editLat) && typeof window._editLng === 'number' && !isNaN(window._editLng)) {
      locUpdate = { lat: window._editLat, lng: window._editLng };
    }
    try {
      await db.collection('listings').doc(currentEditListingId).update({
        name, city, description: desc,
        phone: document.getElementById('editPhone').value.trim() || null,
        website: document.getElementById('editWebsite').value.trim() || null,
        address: document.getElementById('editAddress').value.trim() || null,
        opening_hours: document.getElementById('editHours').value.trim() || null,
        updated_at: new Date(), ...reEdit, ...locUpdate
      });
      if (_el && locUpdate.lat != null) { _el.lat = locUpdate.lat; _el.lng = locUpdate.lng; }
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
      body.innerHTML = favs.map(l => `<div class="listing-card" style="--cat-color:${catColors[l.category_id]||'#6B6B6B'}" onclick="showDetail('${l.id}')"><div class="listing-icon-wrap">${catIcons[l.category_id]||catIcons['default']}</div><div class="listing-body"><div class="listing-name">${esc(l.name)}</div><div class="listing-city">${esc(l.city)}</div><div class="listing-desc">${esc(l.description)}</div></div><div class="listing-arrow"><svg viewBox="0 0 24 24" fill="none" stroke-width="2.5" stroke-linecap="round"><polyline points="9 18 15 12 9 6"/></svg></div></div>`).join('');
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
    var imo = document.getElementById('immobilienFields');
    if (imo) imo.style.display = (cat === 'kat-immobilien') ? 'block' : 'none';
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
    const q = norm(query);
    const filtered = ALL_PY_CITIES.filter(c => !q || norm(c).includes(q));
    list.innerHTML = filtered.map(c => `
      <div class="city-sheet-item${mapCityFilter===c?' selected':''}" onclick="selectMapCity('${c}')">
        <svg viewBox="0 0 24 24" fill="none" stroke-width="2.5" stroke-linecap="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>
        <span>${c === 'Alle' ? t('city_all') : c}</span>
      </div>`).join('');
  }

  function filterMapCitySheet() { renderMapCitySheet(document.getElementById('mapCitySearchInput').value); }

  function selectMapCity(city) {
    mapCityFilter = city;
    document.getElementById('mapCityPickerLabel').textContent = city === 'Alle' ? t('city_select') : city;
    document.getElementById('mapCityPickerBtn').style.background = city === 'Alle' ? 'var(--bg)' : 'var(--yellow-light)';
    closeMapCitySheet();
    _mapFitOnUpdate = true;
    if (city !== 'Alle' && maplibreMap) {
      const coords = mapCityCoords[city];
      if (coords) maplibreMap.flyTo({center:[coords[1],coords[0]],zoom:13,animate:false});
    }
    renderMap();
    if (mapMode === 'radar') renderRadar();
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
    if (mapMode === 'radar') { if (_radarEvents) setRadarEvents(false); else renderRadar(); }
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
    } catch(e) { alert(t('err_prefix') + e.message); }
  }

  async function removeOwnerDeal(listingId) {
    if (!confirm(t('del_deal_confirm'))) return;
    try {
      await db.collection('listings').doc(listingId).update({ deal_text: null, deal_code: null, deal_expiry: null });
      await loadListings();
      showDetail(listingId);
    } catch(e) { alert(t('err_generic')); }
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
    } catch(e) { alert(t('err_generic')); }
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
      }catch(err){alert(t('err_upload'));}
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
          <div style="background:#FFF8EC;border-left:3px solid var(--yellow);padding:8px 10px;border-radius:6px;margin:8px 0;font-size:13px"><strong>${reasonLabels[r.reason]||r.reason}</strong>${r.detail?`<div style="margin-top:5px;font-weight:400;color:var(--text-2);white-space:pre-wrap">„${esc(r.detail)}"</div>`:''}</div>
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
    } catch(e) { alert(t('err_generic')); }
  }

  // ── STANDORT-VORSCHLÄGE (location_suggestions) ─────────────────────────────
  async function loadAdminLocationSuggestions() {
    ['adminTabListings','adminTabClaims','adminTabDeals','adminTabReports','adminTabLocations','adminTabDuplicates'].forEach(function(t){
      var el = document.getElementById(t); if (el){ el.style.color = 'rgba(255,255,255,0.6)'; el.style.borderBottom = 'none'; }
    });
    var at = document.getElementById('adminTabLocations'); if (at){ at.style.color = 'white'; at.style.borderBottom = '2px solid white'; }
    const body = document.getElementById('adminBody');
    body.innerHTML = '<div style="text-align:center;padding:40px">Wird geladen...</div>';
    try {
      const snap = await db.collection('location_suggestions').where('status','==','pending').get();
      const items = snap.docs.map(d => ({ id:d.id, ...d.data() }));
      items.sort(function(a,b){ return _adminTs(b.created_at) - _adminTs(a.created_at); });
      if (!items.length) { body.innerHTML = '<div class="admin-empty"><div class="admin-empty-icon">✓</div><div class="admin-empty-text">Keine Standort-Vorschläge</div></div>'; return; }
      body.innerHTML = items.map(function(s){
        var maps = 'https://maps.google.com/?q=' + s.lat + ',' + s.lng;
        return '<div class="admin-card" id="locsugCard_' + s.id + '">'
          + '<div class="admin-card-name">' + esc(s.listing_name || 'Eintrag') + '</div>'
          + '<div class="admin-card-meta">' + formatDate(s.created_at) + '</div>'
          + '<div style="background:#FFF8EC;border-left:3px solid var(--yellow);padding:8px 10px;border-radius:6px;margin:8px 0;font-size:12.5px;line-height:1.5">'
            + 'Vorschlag: <b>' + Number(s.lat).toFixed(5) + ', ' + Number(s.lng).toFixed(5) + '</b>'
            + (s.old_lat != null ? '<br><span style="color:var(--text-3)">bisher: ' + Number(s.old_lat).toFixed(5) + ', ' + Number(s.old_lng).toFixed(5) + '</span>' : '')
            + '<br><a href="' + maps + '" target="_blank" rel="noopener" style="color:var(--yellow-dark);text-decoration:underline">Auf Karte prüfen ↗</a>'
          + '</div>'
          + '<div class="admin-actions">'
            + '<button class="admin-btn approve" onclick="applyLocationSuggestion(\'' + s.id + '\',\'' + s.listing_id + '\',' + s.lat + ',' + s.lng + ')">Übernehmen</button>'
            + '<button class="admin-btn reject" onclick="rejectLocationSuggestion(\'' + s.id + '\')">Verwerfen</button>'
          + '</div></div>';
      }).join('');
    } catch(e) { body.innerHTML = '<div class="admin-empty"><div class="admin-empty-text">Fehler beim Laden</div></div>'; }
  }
  async function applyLocationSuggestion(sugId, listingId, lat, lng) {
    try {
      await db.collection('listings').doc(listingId).update({ lat: lat, lng: lng });
      await db.collection('location_suggestions').doc(sugId).update({ status: 'applied' });
      var l = allListings.find(function(x){ return x.id === listingId; }); if (l) { l.lat = lat; l.lng = lng; }
      var c = document.getElementById('locsugCard_' + sugId); if (c) c.remove();
      if (maplibreMap && mapLoaded) renderMap();
      showToast(t('toast_coords_saved'));
    } catch(e) { alert(t('err_generic')); }
  }
  async function rejectLocationSuggestion(sugId) {
    try {
      await db.collection('location_suggestions').doc(sugId).update({ status: 'rejected' });
      var c = document.getElementById('locsugCard_' + sugId); if (c) c.remove();
    } catch(e) { alert(t('err_generic')); }
  }

  // ── Teilen + Deep-Link ──────────────────────────────────────────────
  var SHARE_BASE = "https://buscar-share.maximechristalle.workers.dev";
  function shareLink(title, text, url) {
    var msg = text + '\n' + url;
    if (navigator.share) {
      // Link IM Text mitschicken (WhatsApp zeigt sonst oft nur den Link ohne Text)
      navigator.share({ title: title, text: msg }).catch(function(){});
    } else if (navigator.clipboard && navigator.clipboard.writeText) {
      navigator.clipboard.writeText(msg).then(function(){ showToast(t('link_copied')); }).catch(function(){ window.prompt(t('link_copied'), msg); });
    } else {
      window.prompt(t('link_copied'), msg);
    }
  }
  function shareCurrentListing() {
    if (!currentListingId) return;
    var l = allListings.find(function(x){ return x.id === currentListingId; });
    var name = l ? l.name : 'Buscar';
    shareLink(name, '📍 ' + name + '\n' + t('share_cta'), SHARE_BASE + '/ort/' + encodeURIComponent(currentListingId));
  }
  function shareCurrentEvent() {
    if (!_currentEventId) return;
    var ev = (allEvents||[]).find(function(e){ return e.id === _currentEventId; });
    var name = ev ? ev.title : 'Buscar';
    shareLink(name, '🎉 ' + name + '\n' + t('share_cta'), SHARE_BASE + '/event/' + encodeURIComponent(_currentEventId));
  }
  async function openSharedListing(id) {
    try {
      if (!allListings.find(function(x){ return x.id === id; })) {
        var d = await db.collection('listings').doc(id).get();
        if (!d.exists) return;
        allListings.push(Object.assign({ id: d.id }, d.data()));
      }
      showDetail(id);
    } catch(e) {}
  }
  async function openSharedEvent(id) {
    try {
      if (!(allEvents||[]).find(function(e){ return e.id === id; })) {
        var d = await db.collection('events').doc(id).get();
        if (!d.exists) return;
        allEvents.push(Object.assign({ id: d.id }, d.data()));
      }
      showEventDetail(id, 'home');
    } catch(e) {}
  }
  function handleDeepLink() {
    try {
      var p = new URLSearchParams(location.search);
      var ort = p.get('ort'), evid = p.get('event');
      if (!ort && !evid) return;
      // URL säubern, damit ein Reload nicht erneut aufspringt
      try { history.replaceState(null, '', location.pathname); } catch(e) {}
      if (ort) openSharedListing(ort);
      else if (evid) openSharedEvent(evid);
    } catch(e) {}
  }

  function openReport() {
    var _rd = document.getElementById('reportDetail'); if (_rd) _rd.value = '';
    document.getElementById('reportOverlay').classList.add('visible');
  }
  function closeReport() {
    document.getElementById('reportOverlay').classList.remove('visible');
    var _rd = document.getElementById('reportDetail'); if (_rd) _rd.value = '';
  }

  async function submitReport(reason) {
    if (!currentUser || !currentListingId) { closeReport(); return; }
    var _rd = document.getElementById('reportDetail');
    var detail = _rd ? _rd.value.trim().slice(0, 500) : '';
    try {
      await db.collection('reports').add({
        listing_id: currentListingId, user_id: currentUser.uid,
        reason: reason, detail: detail, status: 'pending', created_at: new Date()
      });
      closeReport();
      showToast(t('toast_report_sent'));
    } catch(e) { alert(t('err_generic')); closeReport(); }
  }

  // Service Worker registrieren fuer Offline-Funktionalitaet
  if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
      navigator.serviceWorker.register('sw.js?v=91')
        .then(reg => { console.log('SW registered'); })
        .catch(err => { console.log('SW registration failed'); });
    });
  }

  var _mapNoCoordsShown = false;
  var _mapNoCoordsFadeTimer = null;
  var _mapNoCoordsCleanupTimer = null;
  var _mapNoCoordsClickBound = false;
  function _dismissMapNoCoordsNotice(el) {
    if (!el) return;
    if (_mapNoCoordsFadeTimer) { clearTimeout(_mapNoCoordsFadeTimer); _mapNoCoordsFadeTimer = null; }
    if (_mapNoCoordsCleanupTimer) { clearTimeout(_mapNoCoordsCleanupTimer); _mapNoCoordsCleanupTimer = null; }
    el.classList.add('fade-out');
    _mapNoCoordsCleanupTimer = setTimeout(function () {
      var n = document.getElementById('mapNoCoords');
      if (n) { n.style.display = 'none'; n.classList.remove('fade-out'); }
    }, 500);
  }
  function showMapNoCoordsNotice(show) {
    var el = document.getElementById('mapNoCoords');
    if (!el) return;
    if (!show) {
      if (_mapNoCoordsFadeTimer) { clearTimeout(_mapNoCoordsFadeTimer); _mapNoCoordsFadeTimer = null; }
      if (_mapNoCoordsCleanupTimer) { clearTimeout(_mapNoCoordsCleanupTimer); _mapNoCoordsCleanupTimer = null; }
      el.style.display = 'none';
      el.classList.remove('fade-out');
      return;
    }
    if (_mapNoCoordsShown) return;
    _mapNoCoordsShown = true;
    el.classList.remove('fade-out');
    el.style.display = 'block';
    if (!_mapNoCoordsClickBound) {
      _mapNoCoordsClickBound = true;
      el.addEventListener('click', function () { _dismissMapNoCoordsNotice(el); });
      el.addEventListener('touchend', function () { _dismissMapNoCoordsNotice(el); }, { passive: true });
    }
    if (_mapNoCoordsFadeTimer) clearTimeout(_mapNoCoordsFadeTimer);
    _mapNoCoordsFadeTimer = setTimeout(function () { _dismissMapNoCoordsNotice(document.getElementById('mapNoCoords')); }, 3500);
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

  (function() {
    var touchMoved = false, touchTarget = null, touchStartTime = 0, lastSyntheticAt = 0;
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
        if (t.tagName === 'INPUT' || t.tagName === 'TEXTAREA' || t.tagName === 'SELECT' || t.isContentEditable) return;
        var clickable = t.onclick || t.hasAttribute('onclick') || t.tagName === 'BUTTON' || t.tagName === 'A' || t.getAttribute('role') === 'button';
        if (clickable) {
          try { e.preventDefault(); } catch (_) {}
          lastSyntheticAt = Date.now();
          t.click();
          return;
        }
        t = t.parentElement;
      }
    }, { passive: false, capture: true });
    document.addEventListener('click', function(e) {
      if (Date.now() - lastSyntheticAt < 350 && e.isTrusted) {
        e.stopPropagation();
        e.preventDefault();
      }
    }, true);
  })();
