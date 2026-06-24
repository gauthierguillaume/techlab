const WIKI_BASE_URL = 'https://wiki.play2xko.com/en-us';
const WIKI_API_URL = `${WIKI_BASE_URL}/api.php`;
const IMAGE_CACHE_KEY = 'techlab-2xko-wiki-images-v3';
const HEALTH_CACHE_KEY = 'techlab-2xko-wiki-health-v1';
const X_SEARCH_BASE_URL = 'https://x.com/search';
const OFFICIAL_2XKO_CHAMPIONS_URL = 'https://2xko.riotgames.com/fr-fr/champions/';
const OFFICIAL_2XKO_NEWS_URL = 'https://2xko.riotgames.com/fr-fr/news/';
const OFFICIAL_2XKO_LOGO_URL = './assets/2xko/logos/2xko-logo.svg';
const MARVEL_TOKON_LOGO_URL = './assets/marvel-tokon/logos/marvel-tokon-logo.png';
const MARVEL_TOKON_BACKGROUND_URL = './assets/marvel-tokon/backgrounds/marvel-tokon-key-art.webp';
const MARVEL_TOKON_OFFICIAL_URL = ''; // retiré de la page liens rapides
const MARVEL_TOKON_PLAYSTATION_URL = ''; // retiré de la page liens rapides
const MARVEL_TOKON_WIKI_BASE_URL = 'https://www.dustloop.com/w/MTFS';
const MARVEL_TOKON_KNIGHTS_THUMB = 'https://i.ytimg.com/vi_webp/cen2Lbmmo_Q/maxresdefault.webp';
const MARVEL_TOKON_AVENGERS_THUMB = 'https://i.ytimg.com/vi_webp/AFdxKvplq9M/maxresdefault.webp';
const MARVEL_TOKON_GUARDIANS_THUMB = 'https://i.ytimg.com/vi_webp/krh98HsMk5c/maxresdefault.webp';
const MARVEL_TOKON_XMEN_THUMB = 'https://i.ytimg.com/vi_webp/X4C_0Yf43fM/maxresdefault.webp';
const MARVEL_TOKON_ANNOUNCE_THUMB = 'https://i.ytimg.com/vi_webp/DV9Oq_X22Ak/maxresdefault.webp';
const VF_CROSSROADS_LOGO_URL = 'https://upload.wikimedia.org/wikipedia/fr/b/b5/Virtua_Fighter_Crossroads_Logo.png';
const AVATAR_LEGENDS_LOGO_URL = 'https://images.squarespace-cdn.com/content/v1/68dc1fc6ffae60161335117c/44a003fd-cf4c-467e-b2de-8f9e60e1721e/Untitled+design+%2812%29.png?format=1500w';
const AVATAR_WIKI_BASE_URL = 'https://wiki.supercombo.gg/w/Avatar_Legends';
const AVATAR_FILEPATH_BASE_URL = 'https://wiki.supercombo.gg/w/Special:FilePath';
const HOME_QUOTE_AUDIO_URL = './assets/home/je-pue-sous-les-bras.wav';

const X2KO_CHAMPION_SELECT_BASE = './assets/2xko/key-art/champion-select';
const X2KO_KEY_VISUAL_BASE = './assets/2xko/key-art/key-visual';
const X2KO_FANTASY_ART_BASE = './assets/2xko/key-art/fantasy-art';
const X2KO_KEY_VISUAL_SLUGS = new Set(['blitzcrank', 'braum', 'darius', 'ekko', 'illaoi', 'jinx', 'teemo', 'vi', 'warwick', 'yasuo']);
const X2KO_FANTASY_ART_SLUGS = new Set(['ahri', 'akali', 'blitzcrank', 'braum', 'caitlyn', 'darius', 'ekko', 'illaoi', 'jinx', 'senna', 'teemo', 'thresh', 'vi', 'warwick', 'yasuo']);


function getGamePageBackgroundUrl(game) {
  if (!game) return '';
  if (game.id === '2xko') return './assets/2xko/key-art/backgrounds/2xko-key-art.webp';
  if (game.id === 'marvel-tokon') return MARVEL_TOKON_BACKGROUND_URL;
  if (game.id === 'avatar-legends') return './assets/avatar-legends/backgrounds/avatar-legends-key-art.webp';
  if (game.id === 'vf-crossroads') return './assets/vf-crossroads/backgrounds/vf-crossroads-key-art.webp';
  return '';
}

function get2XkoChampionSelectUrl(slug) {
  return `${X2KO_CHAMPION_SELECT_BASE}/${slug}.webp`;
}

function get2XkoKeyVisualUrl(slug) {
  return `${X2KO_KEY_VISUAL_BASE}/${slug}.webp`;
}

function get2XkoFantasyArtUrl(slug) {
  return `${X2KO_FANTASY_ART_BASE}/${slug}.webp`;
}

function get2XkoDetailBackgroundAttributes(game, character) {
  if (game?.id !== '2xko' || !X2KO_FANTASY_ART_SLUGS.has(character.slug)) return { className: '', style: '' };
  return {
    className: ' has-x2ko-fantasy-bg has-modern-detail-bg',
    style: ` style="--x2ko-detail-bg: url('${get2XkoFantasyArtUrl(character.slug)}'); --modern-detail-bg: url('${get2XkoFantasyArtUrl(character.slug)}');"`,
  };
}

const MODERN_DETAIL_GAME_IDS = new Set(['2xko', 'marvel-tokon']);

function isModernDetailGame(game) {
  return Boolean(game && MODERN_DETAIL_GAME_IDS.has(game.id));
}

function getDetailStyleGameId(game) {
  // La fiche moderne utilise la même fondation CSS que 2XKO.
  // Le jeu réel reste disponible dans data-actual-game et dans l'objet game JS.
  return isModernDetailGame(game) ? '2xko' : game.id;
}

function getModernDetailBackgroundAttributes(game, character) {
  if (game?.id === '2xko') return get2XkoDetailBackgroundAttributes(game, character);

  if (game?.id === 'marvel-tokon') {
    return {
      className: ' has-x2ko-fantasy-bg has-modern-detail-bg has-marvel-detail-bg',
      style: ` style="--x2ko-detail-bg: url('${MARVEL_TOKON_BACKGROUND_URL}'); --modern-detail-bg: url('${MARVEL_TOKON_BACKGROUND_URL}');"`,
    };
  }

  return { className: '', style: '' };
}

function get2XkoStageArtUrls(character) {
  if (!character?.slug) return [];
  const urls = [get2XkoChampionSelectUrl(character.slug)];
  if (X2KO_KEY_VISUAL_SLUGS.has(character.slug)) urls.push(get2XkoKeyVisualUrl(character.slug));
  return urls;
}

function getRandomItem(items) {
  return items[Math.floor(Math.random() * items.length)];
}

const X_ICON = `
  <svg class="x-icon" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
    <path d="M18.9 2h3.3l-7.2 8.2L23.5 22h-6.7l-5.2-6.8L5.6 22H2.2l7.7-8.8L1.8 2h6.9l4.7 6.2L18.9 2Zm-1.2 18h1.8L7.7 3.9H5.8L17.7 20Z" />
  </svg>
`;



const COPY_ICON = `
  <svg class="action-icon-svg" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
    <path d="M8 7a3 3 0 0 1 3-3h6a3 3 0 0 1 3 3v6a3 3 0 0 1-3 3h-1v1a3 3 0 0 1-3 3H7a3 3 0 0 1-3-3v-6a3 3 0 0 1 3-3h1V7Zm2 1h3a3 3 0 0 1 3 3v3h1a1 1 0 0 0 1-1V7a1 1 0 0 0-1-1h-6a1 1 0 0 0-1 1v1Zm-3 2a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1v-6a1 1 0 0 0-1-1H7Z" />
  </svg>
`;

const CLEAR_ICON = `
  <svg class="action-icon-svg" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
    <path d="M6.4 4.9 12 10.5l5.6-5.6 1.5 1.5-5.6 5.6 5.6 5.6-1.5 1.5-5.6-5.6-5.6 5.6-1.5-1.5 5.6-5.6-5.6-5.6 1.5-1.5Z" />
  </svg>
`;

const YOUTUBE_ICON = `
  <svg class="youtube-icon" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
    <path d="M21.6 7.2s-.2-1.5-.8-2.1c-.8-.8-1.6-.8-2-.9C16 4 12 4 12 4s-4 0-6.8.2c-.4 0-1.3.1-2 .9-.6.6-.8 2.1-.8 2.1S2.2 9 2.2 10.9v1.8c0 1.9.2 3.7.2 3.7s.2 1.5.8 2.1c.8.8 1.8.8 2.3.9 1.7.2 6.5.2 6.5.2s4 0 6.8-.2c.4 0 1.3-.1 2-.9.6-.6.8-2.1.8-2.1s.2-1.9.2-3.7v-1.8c0-1.9-.2-3.7-.2-3.7ZM10.2 15.2V8.8l5.8 3.2-5.8 3.2Z" />
  </svg>
`;

const REDDIT_ICON = `
  <svg class="reddit-icon" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
    <path d="M21.5 11.9a2.5 2.5 0 0 0-4.2-1.8c-1.2-.7-2.8-1.1-4.5-1.2l.8-3.6 2.5.5a1.9 1.9 0 1 0 .2-1.1l-3.1-.7a.6.6 0 0 0-.7.5l-1 4.4c-1.8.1-3.4.5-4.6 1.2a2.5 2.5 0 1 0-2.7 4.1c0 .2-.1.5-.1.7 0 3.4 3.5 6.1 7.9 6.1s7.9-2.7 7.9-6.1c0-.2 0-.5-.1-.7 1-.4 1.7-1.3 1.7-2.3ZM8.2 13.9a1.2 1.2 0 1 1 2.4 0 1.2 1.2 0 0 1-2.4 0Zm6.7 3.5c-.8.8-2.4.9-2.9.9s-2.1-.1-2.9-.9a.5.5 0 1 1 .7-.7c.5.5 1.6.6 2.2.6s1.7-.1 2.2-.6a.5.5 0 1 1 .7.7Zm-.3-2.3a1.2 1.2 0 1 1 0-2.4 1.2 1.2 0 0 1 0 2.4Z" />
  </svg>
`;

const TOURNAMENT_ICON = `
  <svg class="tournament-icon" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
    <path d="M7 4V2h10v2h4v3.2c0 3.1-1.9 5.4-4.7 6.1A5.7 5.7 0 0 1 13 15.8V19h3.4a1 1 0 0 1 1 1V22H6.6v-2a1 1 0 0 1 1-1H11v-3.2a5.7 5.7 0 0 1-3.3-2.5C4.9 12.6 3 10.3 3 7.2V4h4Zm0 2H5v1.2c0 1.8.8 3.1 2.2 3.8A7.3 7.3 0 0 1 7 9.2V6Zm12 0h-2v3.2c0 .6-.1 1.2-.2 1.8 1.4-.7 2.2-2 2.2-3.8V6Z" />
  </svg>
`;

const GLOSSARY_ICON = `
  <svg class="glossary-icon" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
    <path d="M6 3h11.5A2.5 2.5 0 0 1 20 5.5V21H6a3 3 0 0 1-3-3V6a3 3 0 0 1 3-3Zm0 13h12V5.5a.5.5 0 0 0-.5-.5H6a1 1 0 0 0-1 1v10.2c.3-.1.6-.2 1-.2Zm0 2a1 1 0 0 0 0 2h12v-2H6Zm2-10h7v2H8V8Zm0 4h5v2H8v-2Z" />
  </svg>
`;

const OFFICIAL_2XKO_ICON_URL = 'https://cmsassets.rgpub.io/sanity/images/dsfx7636/riotbar/4b480af8becae3e7627c48ba4f61fc1518243f5e-192x192.png';

const MARVEL_TEAM_THEMES = {
  'Unbreakable X-Men': {
    logo: 'https://www.dustloop.com/wiki/images/8/8e/MTFS_Team_Unbreakable_X-Men.png',
    accent: '#ff9f1c',
    accent2: '#ffd43b',
  },
  'Amazing Guardians': {
    logo: 'https://www.dustloop.com/wiki/images/8/86/MTFS_Team_Amazing_Guardians.png',
    accent: '#ff2147',
    accent2: '#ff7a90',
  },
  'Fighting Avengers': {
    logo: 'https://www.dustloop.com/wiki/images/1/10/MTFS_Team_Fighting_Avengers.png',
    accent: '#1b78ff',
    accent2: '#5bdcff',
  },
  'Knights of Doom': {
    logo: 'https://www.dustloop.com/wiki/images/9/91/MTFS_Team_Knights_of_Doom.png',
    accent: '#2bb84a',
    accent2: '#b7ff4a',
  },
  'Midnight Sons': {
    logo: '',
    accent: '#ff5a1f',
    accent2: '#ffd15c',
  },
};

const MARVEL_TEAM_LOGOS = Object.fromEntries(
  Object.entries(MARVEL_TEAM_THEMES).map(([team, theme]) => [team, theme.logo])
);

function getAvatarPortraitUrl(fileName) {
  return `${AVATAR_FILEPATH_BASE_URL}/${encodeURIComponent(fileName)}`;
}

let labQuoteAudio = null;

function playLabQuoteAudio() {
  if (!HOME_QUOTE_AUDIO_URL) return;

  try {
    if (!labQuoteAudio) {
      labQuoteAudio = new Audio(HOME_QUOTE_AUDIO_URL);
      labQuoteAudio.preload = 'auto';
    }

    labQuoteAudio.pause();
    labQuoteAudio.currentTime = 0;
    const playPromise = labQuoteAudio.play();
    if (playPromise?.catch) playPromise.catch(() => {});
  } catch {
    // Le navigateur peut bloquer le son hors interaction utilisateur.
  }
}


const TECHLAB_VERSION = 'v1.0.85';
const SUPABASE_PROJECT_URL = 'https://ebqwfijathcyfudkmvdq.supabase.co';
const SUPABASE_PUBLISHABLE_KEY = 'sb_publishable_kwGiDUzAu4thk7340RDFOg_kRoXSUAt';
const SUPABASE_PERSONAL_TABLE = 'personal_records';
const TECHLAB_AUTH_RETURN_ROUTE_KEY = 'techlab-auth-return-route-v1';

const supabaseClient = (() => {
  if (!SUPABASE_PROJECT_URL || !SUPABASE_PUBLISHABLE_KEY) return null;
  if (!window.supabase?.createClient) {
    console.warn('TechLab Supabase non chargé : sauvegarde compte désactivée.');
    return null;
  }

  try {
    return window.supabase.createClient(SUPABASE_PROJECT_URL, SUPABASE_PUBLISHABLE_KEY, {
      auth: {
        persistSession: true,
        autoRefreshToken: true,
        detectSessionInUrl: true,
      },
    });
  } catch (error) {
    console.warn('TechLab Supabase indisponible : sauvegarde compte désactivée.', error);
    return null;
  }
})();

let techLabUser = null;
let techLabAuthReady = false;
const hydratedCloudRecords = new Set();
const personalRecordCache = new Map();
const pendingCloudRecordSaves = new Map();

function getTechLabUserLabel() {
  const email = techLabUser?.email || '';
  const fullName = techLabUser?.user_metadata?.full_name || techLabUser?.user_metadata?.name || '';
  if (fullName) return fullName;
  if (!email) return 'Compte Google';
  const name = email.split('@')[0] || email;
  return name.length > 16 ? `${name.slice(0, 14)}…` : name;
}

function getTechLabGoogleAvatarUrl() {
  const metadata = techLabUser?.user_metadata || {};
  const identityData = techLabUser?.identities?.find((identity) => identity?.provider === 'google')?.identity_data || {};
  return metadata.avatar_url
    || metadata.picture
    || identityData.avatar_url
    || identityData.picture
    || '';
}

function getGoogleMarkSvg(className = 'google-mark') {
  return `
    <svg class="${className}" viewBox="0 0 48 48" aria-hidden="true" focusable="false">
      <path fill="#4285F4" d="M43.6 20.5H42V20H24v8h11.3C33.7 32.7 29.3 36 24 36c-6.6 0-12-5.4-12-12s5.4-12 12-12c3.1 0 5.9 1.2 8 3.1l5.7-5.7C34.1 6.1 29.3 4 24 4 12.9 4 4 12.9 4 24s8.9 20 20 20c10 0 19-7.3 19-20 0-1.3-.1-2.4-.4-3.5Z"/>
      <path fill="#34A853" d="M6.3 14.7 12.9 19.5C14.7 15.1 19 12 24 12c3.1 0 5.9 1.2 8 3.1l5.7-5.7C34.1 6.1 29.3 4 24 4 16.2 4 9.5 8.5 6.3 14.7Z"/>
      <path fill="#FBBC05" d="M24 44c5.2 0 9.9-2 13.5-5.2l-6.2-5.2C29.3 35.1 26.8 36 24 36c-5.3 0-9.8-3.3-11.4-7.9L6.1 33.1C9.3 39.5 16 44 24 44Z"/>
      <path fill="#EA4335" d="M12.6 28.1A12.2 12.2 0 0 1 12 24c0-1.4.2-2.8.7-4.1L6.3 14.7A19.8 19.8 0 0 0 4 24c0 3.2.8 6.3 2.1 9.1l6.5-5Z"/>
    </svg>
  `;
}

function renderAuthButtonMarkup() {
  const connected = Boolean(techLabUser);
  const title = connected ? `Connecté : ${techLabUser.email || 'compte Google'}` : 'Se connecter avec Google';

  if (connected) {
    const avatarUrl = getTechLabGoogleAvatarUrl();
    const avatarMarkup = avatarUrl
      ? `<img class="rail-login-avatar" src="${escapeHtml(avatarUrl)}" alt="" referrerpolicy="no-referrer">`
      : `<span class="rail-login-avatar rail-login-avatar-fallback" aria-hidden="true">${getGoogleMarkSvg('google-mark google-mark-avatar')}</span>`;

    return `
      <button class="rail-login-button is-connected is-avatar-only" data-auth-button type="button" aria-label="${escapeHtml(title)}" title="${escapeHtml(title)}">
        ${avatarMarkup}
        <span class="rail-login-status-dot" aria-hidden="true"></span>
      </button>
    `;
  }

  return `
    <button class="rail-login-button is-google-auth" data-auth-button type="button" aria-label="${escapeHtml(title)}" title="${escapeHtml(title)}">
      <span class="rail-login-google-mark" aria-hidden="true">${getGoogleMarkSvg()}</span>
      <strong>Google</strong>
    </button>
  `;
}

function updateAuthButtons() {
  document.querySelectorAll('[data-auth-button]').forEach((button) => {
    button.outerHTML = renderAuthButtonMarkup();
  });
}

function hasAuthCallbackParams() {
  const href = window.location.href;
  return href.includes('access_token=')
    || href.includes('refresh_token=')
    || href.includes('error_code=')
    || href.includes('error_description=')
    || href.includes('?code=')
    || href.includes('&code=');
}

function getSafeCurrentRoute() {
  const hash = window.location.hash || '';
  if (!hash || hasAuthCallbackParams()) return '#/home';
  return hash.startsWith('#/') ? hash : '#/home';
}

function getCleanPageUrl() {
  return `${window.location.origin}${window.location.pathname}`;
}

function getAuthRedirectUrl() {
  try {
    sessionStorage.setItem(TECHLAB_AUTH_RETURN_ROUTE_KEY, getSafeCurrentRoute());
  } catch {
    // sessionStorage peut être indisponible selon les réglages du navigateur.
  }

  // Important : ne pas mettre la route hash dans le redirect Supabase.
  // Sinon le lien magique revient parfois en #/route?access_token=..., et Supabase ne détecte pas la session.
  return getCleanPageUrl();
}

function getStoredAuthReturnRoute() {
  try {
    const route = sessionStorage.getItem(TECHLAB_AUTH_RETURN_ROUTE_KEY);
    sessionStorage.removeItem(TECHLAB_AUTH_RETURN_ROUTE_KEY);
    return route && route.startsWith('#/') ? route : '#/home';
  } catch {
    return '#/home';
  }
}

function restoreRouteAfterAuth(explicitRoute = '') {
  const route = explicitRoute && explicitRoute.startsWith('#/') ? explicitRoute : getStoredAuthReturnRoute();
  const cleanUrl = `${getCleanPageUrl()}${route || '#/home'}`;
  window.history.replaceState(null, '', cleanUrl);
}

async function recoverSessionFromRoutedMagicLink() {
  if (!supabaseClient) return false;

  const hash = window.location.hash || '';
  const queryIndex = hash.indexOf('?');
  if (!hash.startsWith('#/') || queryIndex === -1 || !hash.includes('access_token=')) return false;

  const route = hash.slice(0, queryIndex) || '#/home';
  const params = new URLSearchParams(hash.slice(queryIndex + 1));
  const accessToken = params.get('access_token');
  const refreshToken = params.get('refresh_token');
  if (!accessToken || !refreshToken) return false;

  const { data, error } = await supabaseClient.auth.setSession({
    access_token: accessToken,
    refresh_token: refreshToken,
  });

  if (error) {
    console.warn('TechLab auth callback recovery failed:', error);
    return false;
  }

  techLabUser = data?.user || data?.session?.user || null;
  restoreRouteAfterAuth(route);
  return Boolean(techLabUser);
}

function ensureAuthModal() {
  let modal = document.querySelector('#techlabAuthModal');
  if (modal) return modal;

  modal = document.createElement('div');
  modal.id = 'techlabAuthModal';
  modal.className = 'techlab-auth-modal';
  modal.hidden = true;
  modal.innerHTML = `
    <div class="techlab-auth-backdrop" data-auth-close></div>
    <section class="techlab-auth-card" role="dialog" aria-modal="true" aria-labelledby="techlabAuthTitle">
      <button class="techlab-auth-close" type="button" data-auth-close aria-label="Fermer">×</button>
      <div id="techlabAuthContent"></div>
    </section>
  `;
  document.body.appendChild(modal);
  return modal;
}

function getAuthModalContent() {
  if (!supabaseClient) {
    return `
      <h2 id="techlabAuthTitle">Connexion indisponible</h2>
      <p>Supabase n’est pas chargé. La sauvegarde des notes, combos et liens est désactivée tant que la connexion n’est pas disponible.</p>
    `;
  }

  if (techLabUser) {
    const avatarUrl = getTechLabGoogleAvatarUrl();
    const avatarMarkup = avatarUrl
      ? `<img class="techlab-auth-account-avatar" src="${escapeHtml(avatarUrl)}" alt="" referrerpolicy="no-referrer">`
      : `<span class="techlab-auth-account-avatar techlab-auth-account-avatar-fallback" aria-hidden="true">${getGoogleMarkSvg('google-mark google-mark-account')}</span>`;

    return `
      <h2 id="techlabAuthTitle">Compte TechLab</h2>
      <div class="techlab-auth-account-card">
        ${avatarMarkup}
        <p class="techlab-auth-current">Connecté avec Google<br><strong>${escapeHtml(techLabUser.email || getTechLabUserLabel())}</strong></p>
      </div>
      <button class="techlab-auth-primary" type="button" data-auth-logout>Se déconnecter</button>
      <p class="techlab-auth-help">Les notes, combos et liens sont sauvegardés sur ton compte quand tu modifies une fiche perso.</p>
      <p class="techlab-auth-status" id="techlabAuthStatus" hidden></p>
    `;
  }

  return `
    <h2 id="techlabAuthTitle">Connexion TechLab</h2>
    <p>Connecte-toi avec Google pour sauvegarder tes notes, combos et liens sur ton compte.</p>
    <button class="techlab-auth-google" type="button" data-auth-google>
      <span class="techlab-auth-google-icon" aria-hidden="true">${getGoogleMarkSvg('google-mark google-mark-modal')}</span>
      <strong>Continuer avec Google</strong>
    </button>
    <p class="techlab-auth-help">Les données perso ne sont plus sauvegardées hors connexion : il faut être connecté pour enregistrer.</p>
    <p class="techlab-auth-status" id="techlabAuthStatus" hidden></p>
  `;
}

function openAuthModal() {
  const modal = ensureAuthModal();
  const content = modal.querySelector('#techlabAuthContent');
  content.innerHTML = getAuthModalContent();
  modal.hidden = false;
  document.body.classList.add('has-auth-modal');
  modal.querySelector('#techlabAuthEmail')?.focus();
}

function closeAuthModal() {
  const modal = document.querySelector('#techlabAuthModal');
  if (!modal) return;
  modal.hidden = true;
  document.body.classList.remove('has-auth-modal');
}

function setAuthModalStatus(message, isError = false) {
  const status = document.querySelector('#techlabAuthStatus');
  if (!status) return;
  status.textContent = message;
  status.hidden = false;
  status.classList.toggle('is-error', Boolean(isError));
}

async function submitAuthEmail(email) {
  if (!supabaseClient) {
    setAuthModalStatus('Supabase n’est pas disponible sur cette page.', true);
    return;
  }

  const { error } = await supabaseClient.auth.signInWithOtp({
    email,
    options: {
      emailRedirectTo: getAuthRedirectUrl(),
      shouldCreateUser: true,
    },
  });

  if (error) {
    setAuthModalStatus(error.message || 'Connexion impossible pour le moment.', true);
    return;
  }

  setAuthModalStatus('Lien envoyé. Va voir tes mails puis clique sur le lien magique.');
}

async function signInWithGoogleTechLab() {
  if (!supabaseClient) {
    setAuthModalStatus('Supabase n’est pas disponible sur cette page.', true);
    return;
  }

  const { error } = await supabaseClient.auth.signInWithOAuth({
    provider: 'google',
    options: {
      redirectTo: getAuthRedirectUrl(),
      queryParams: {
        access_type: 'offline',
        prompt: 'select_account',
      },
    },
  });

  if (error) {
    setAuthModalStatus(error.message || 'Connexion Google impossible pour le moment.', true);
  }
}

async function signOutTechLab() {
  if (!supabaseClient) return;
  const { error } = await supabaseClient.auth.signOut();
  if (error) {
    setAuthModalStatus(error.message || 'Déconnexion impossible.', true);
    return;
  }
  closeAuthModal();
}

function getCloudHydrationKey(game, character) {
  return `${techLabUser?.id || 'anon'}:${game.id}:${character.slug}`;
}

function normalizePersonalRecord(record = {}) {
  return {
    notes: record.notes || '',
    combos: normalizePersonalCombos(record.combos),
    links: Array.isArray(record.links) ? record.links : [],
  };
}

function isEmptyPersonalRecord(record = {}) {
  const normalized = normalizePersonalRecord(record);
  return !normalized.notes.trim() && !normalized.combos.length && !normalized.links.length;
}

function canUseCloudPersonalData() {
  return Boolean(supabaseClient && techLabUser?.id);
}

function clearLegacyPersonalLocalStorage() {
  try {
    localStorage.removeItem(PERSONAL_DATA_KEY);
  } catch {
    // Le navigateur peut bloquer localStorage selon ses réglages.
  }
}

function setCachedPersonalRecord(game, character, record) {
  if (!canUseCloudPersonalData()) return;
  personalRecordCache.set(getCloudHydrationKey(game, character), normalizePersonalRecord(record));
}

function getCachedPersonalRecord(game, character) {
  if (!canUseCloudPersonalData()) return null;
  return personalRecordCache.get(getCloudHydrationKey(game, character)) || null;
}

function samePersonalRecord(left = {}, right = {}) {
  return JSON.stringify(normalizePersonalRecord(left)) === JSON.stringify(normalizePersonalRecord(right));
}

function isCurrentCharacterRoute(game, character) {
  const route = parseRoute();
  return route.gameId === game.id && route.characterSlug === character.slug;
}

function queueCloudPersonalRecordSave(game, character, record) {
  if (!supabaseClient || !techLabUser?.id) return;

  const key = getCloudHydrationKey(game, character);
  const pending = pendingCloudRecordSaves.get(key);
  if (pending?.timer) window.clearTimeout(pending.timer);

  const normalized = normalizePersonalRecord(record);
  const payload = {
    user_id: techLabUser.id,
    game_id: game.id,
    character_slug: character.slug,
    notes: normalized.notes,
    combos: normalized.combos,
    links: normalized.links,
  };

  const timer = window.setTimeout(async () => {
    const latest = pendingCloudRecordSaves.get(key);
    pendingCloudRecordSaves.delete(key);

    const { error } = await supabaseClient
      .from(SUPABASE_PERSONAL_TABLE)
      .upsert(latest?.payload || payload, { onConflict: 'user_id,game_id,character_slug' });

    if (error) {
      console.warn('TechLab cloud save failed:', error);
      setPersonalStatus('Sauvegarde compte impossible');
      return;
    }

    setPersonalStatus('Sauvegardé sur le compte');
  }, 650);

  pendingCloudRecordSaves.set(key, { timer, payload });
}

async function hydratePersonalRecordFromCloud(game, character) {
  if (!supabaseClient || !techLabUser?.id) return;

  const key = getCloudHydrationKey(game, character);
  if (hydratedCloudRecords.has(key)) return;
  hydratedCloudRecords.add(key);

  const { data, error } = await supabaseClient
    .from(SUPABASE_PERSONAL_TABLE)
    .select('notes, combos, links')
    .eq('user_id', techLabUser.id)
    .eq('game_id', game.id)
    .eq('character_slug', character.slug)
    .maybeSingle();

  if (error) {
    console.warn('TechLab cloud load failed:', error);
    setPersonalStatus('Chargement compte impossible');
    return;
  }

  const cloudRecord = normalizePersonalRecord(data || {});
  const cachedRecord = getCachedPersonalRecord(game, character) || {};
  setCachedPersonalRecord(game, character, cloudRecord);

  if (!samePersonalRecord(cachedRecord, cloudRecord) && isCurrentCharacterRoute(game, character)) {
    render();
  }
}

async function initializeTechLabAuth() {
  clearLegacyPersonalLocalStorage();

  if (!supabaseClient) {
    techLabAuthReady = true;
    updateAuthButtons();
    return;
  }

  const wasAuthCallback = hasAuthCallbackParams();
  const recoveredFromRoutedLink = await recoverSessionFromRoutedMagicLink();

  const { data, error } = await supabaseClient.auth.getSession();
  if (error) console.warn('TechLab auth session failed:', error);
  techLabUser = data?.session?.user || techLabUser || null;
  techLabAuthReady = true;

  if (techLabUser && wasAuthCallback && !recoveredFromRoutedLink) restoreRouteAfterAuth();

  updateAuthButtons();

  // Après un refresh, la première render() peut partir avant que Supabase ait restauré
  // la session. On relance donc la route courante dès que l'utilisateur est connu,
  // pour recharger les notes/combos/liens cloud sur la fiche affichée.
  if (techLabUser) render();

  supabaseClient.auth.onAuthStateChange((event, session) => {
    techLabUser = session?.user || null;
    hydratedCloudRecords.clear();
    personalRecordCache.clear();
    pendingCloudRecordSaves.forEach((entry) => {
      if (entry?.timer) window.clearTimeout(entry.timer);
    });
    pendingCloudRecordSaves.clear();
    clearLegacyPersonalLocalStorage();

    if (event === 'SIGNED_IN') {
      if (hasAuthCallbackParams()) restoreRouteAfterAuth();
      closeAuthModal();
      render();
    }

    if (event === 'SIGNED_OUT') render();

    updateAuthButtons();
  });
}

document.addEventListener('click', (event) => {
  if (event.target.closest('[data-auth-button]')) {
    openAuthModal();
    return;
  }

  if (event.target.closest('[data-auth-close]')) {
    closeAuthModal();
    return;
  }

  if (event.target.closest('[data-auth-logout]')) {
    signOutTechLab();
    return;
  }

  const googleButton = event.target.closest('[data-auth-google]');
  if (googleButton) {
    googleButton.disabled = true;
    googleButton.classList.add('is-loading');
    signInWithGoogleTechLab().finally(() => {
      googleButton.disabled = false;
      googleButton.classList.remove('is-loading');
    });
  }
});

document.addEventListener('submit', (event) => {
  const form = event.target.closest('#techlabAuthForm');
  if (!form) return;
  event.preventDefault();
  const submit = form.querySelector('button[type="submit"]');
  const email = form.querySelector('#techlabAuthEmail')?.value.trim();
  if (!email) return;
  submit.disabled = true;
  submit.textContent = 'Envoi…';
  submitAuthEmail(email).finally(() => {
    submit.disabled = false;
    submit.textContent = 'Recevoir le lien';
  });
});


const games = [
  {
    id: '2xko',
    name: '2XKO',
    label: '2XKO',
    tagPrefix: '2XKO',
    wikiBaseUrl: WIKI_BASE_URL,
    officialChampionsUrl: OFFICIAL_2XKO_CHAMPIONS_URL,
    officialNewsUrl: OFFICIAL_2XKO_NEWS_URL,
    logoUrl: OFFICIAL_2XKO_LOGO_URL,
    logoText: '2XKO',
    theme: '2xko',
    navAccent: '#cdf564',
    navAccent2: '#00bc9e',
    description: 'Sélectionne un ou deux champions pour générer une recherche X propre, puis ouvre les fiches, le wiki ou les pages officielles.',
    maxSelection: 2,
    selectionLabel: 'solo / duo',
    socialLinks: [
      { label: '@play2xko', url: 'https://x.com/play2xko', detail: 'Compte officiel', type: 'x' },
      { label: '@2xkofr', url: 'https://x.com/2xkofr', detail: 'Actus FR', type: 'x' },
      { label: '@2XKOIntel', url: 'https://x.com/2XKOIntel', detail: 'Infos communautaires', type: 'x' },
      { label: 'YouTube 2XKO', url: 'https://www.youtube.com/@2XKO/videos', detail: 'Vidéos officielles', type: 'youtube' },
      { label: 'r/2XKO', url: 'https://www.reddit.com/r/2XKO/', detail: 'Reddit', type: 'reddit' },
      { label: 'Tournois 2XKO', url: 'https://liquipedia.net/fighters/2XKO/Tournaments', detail: 'Tournois', type: 'tournament' },
      { label: 'Glossaire 2XKO', url: 'https://glossary.infil.net/?g=2XKO', detail: 'Fighting Game Glossary', type: 'glossary' },
    ],
    characters: [
      { name: 'Akali', slug: 'akali', health: 900, size: 'medium', imageUrl: get2XkoChampionSelectUrl('akali'), artScale: 1.10, artX: '0px', artY: '12px' },
      { name: 'Teemo', slug: 'teemo', health: 900, size: 'tiny', imageUrl: get2XkoChampionSelectUrl('teemo'), artScale: 1.02, artX: '0px', artY: '18px' },
      { name: 'Ahri', slug: 'ahri', health: 925, size: 'medium', imageUrl: get2XkoChampionSelectUrl('ahri'), artScale: 1.07, artX: '0px', artY: '13px' },
      { name: 'Ekko', slug: 'ekko', health: 925, size: 'medium', imageUrl: get2XkoChampionSelectUrl('ekko'), artScale: 1.08, artX: '-1px', artY: '14px' },
      { name: 'Caitlyn', slug: 'caitlyn', health: 950, size: 'medium', imageUrl: get2XkoChampionSelectUrl('caitlyn'), artScale: 1.05, artX: '0px', artY: '14px' },
      { name: 'Jinx', slug: 'jinx', health: 950, size: 'medium', imageUrl: get2XkoChampionSelectUrl('jinx'), artScale: 1.08, artX: '0px', artY: '14px' },
      { name: 'Senna', slug: 'senna', health: 975, size: 'medium', imageUrl: get2XkoChampionSelectUrl('senna'), artScale: 1.07, artX: '0px', artY: '15px' },
      { name: 'Vi', slug: 'vi', health: 975, size: 'medium', imageUrl: get2XkoChampionSelectUrl('vi'), artScale: 1.00, artX: '0px', artY: '17px' },
      { name: 'Yasuo', slug: 'yasuo', health: 975, size: 'medium', imageUrl: get2XkoChampionSelectUrl('yasuo'), artScale: 1.05, artX: '-1px', artY: '15px' },
      { name: 'Thresh', slug: 'thresh', health: 1000, size: 'big', imageUrl: get2XkoChampionSelectUrl('thresh'), artScale: 1.07, artX: '-2px', artY: '11px' },
      { name: 'Warwick', slug: 'warwick', health: 1000, size: 'big', imageUrl: get2XkoChampionSelectUrl('warwick'), artScale: 1.05, artX: '-2px', artY: '14px' },
      { name: 'Darius', slug: 'darius', health: 1025, size: 'big', imageUrl: get2XkoChampionSelectUrl('darius'), artScale: 1.07, artX: '-12px', artY: '13px' },
      { name: 'Illaoi', slug: 'illaoi', health: 1025, size: 'big', imageUrl: get2XkoChampionSelectUrl('illaoi'), artScale: 0.94, artX: '-2px', artY: '-26px' },
      { name: 'Blitzcrank', slug: 'blitzcrank', health: 1050, size: 'big', imageUrl: get2XkoChampionSelectUrl('blitzcrank'), artScale: 1.06, artX: '0px', artY: '13px' },
      { name: 'Braum', slug: 'braum', health: 1100, size: 'big', imageUrl: get2XkoChampionSelectUrl('braum'), artScale: 1.05, artX: '-1px', artY: '13px' },
    ],
  },
  {
    id: 'marvel-tokon',
    name: 'Marvel Tōkon: Fighting Souls',
    tagPrefix: 'MARVELTOKON',
    wikiBaseUrl: MARVEL_TOKON_WIKI_BASE_URL,
    officialNewsUrl: '',
    logoUrl: MARVEL_TOKON_LOGO_URL,
    logoText: 'MARVEL TŌKON',
    theme: 'marvel',
    navAccent: '#00a0f8',
    navAccent2: '#f86800',
    showOfficialLinks: false,
    description: 'Recherche les techs Marvel Tōkon par perso et par équipe.',
    maxSelection: 4,
    selectionLabel: 'solo / team',
    socialLinks: [
      { label: '@MARVELTokon', url: 'https://x.com/MARVELTokon', detail: 'Compte X', type: 'x' },
      { label: 'r/MarvelTokon', url: 'https://www.reddit.com/r/MarvelTokon/', detail: 'Reddit', type: 'reddit' },
    ],
    teamLogos: MARVEL_TEAM_LOGOS,
    characters: [
      { name: 'Storm', slug: 'storm', tagSlug: 'STORM', team: 'Unbreakable X-Men', size: 'medium', imageUrl: 'https://www.dustloop.com/wiki/images/b/bb/MTFS_Storm_Portrait.png', imageFit: 'contain', imagePosition: 'center bottom', artScale: 1.08, artX: '0px', artY: '0px', wikiUrl: 'https://www.dustloop.com/w/MTFS/Storm', officialUrl: null },
      { name: 'Magik', slug: 'magik', tagSlug: 'MAGIK', team: 'Unbreakable X-Men', size: 'medium', imageUrl: 'https://www.dustloop.com/wiki/images/1/1f/MTFS_Magik_Portrait.png', imageFit: 'contain', imagePosition: 'center bottom', artScale: 0.98, artX: '0px', artY: '16px', wikiUrl: 'https://www.dustloop.com/w/MTFS/Magik', officialUrl: null },
      { name: 'Wolverine', slug: 'wolverine', tagSlug: 'WOLVERINE', team: 'Unbreakable X-Men', size: 'medium', imageUrl: 'https://www.dustloop.com/wiki/images/8/83/MTFS_Wolverine_Portrait.png', imageFit: 'contain', imagePosition: 'center bottom', artScale: 1.1, artX: '0px', artY: '0px', wikiUrl: 'https://www.dustloop.com/w/MTFS/Wolverine', officialUrl: null },
      { name: 'Danger', slug: 'danger', tagSlug: 'DANGER', team: 'Unbreakable X-Men', size: 'medium', imageUrl: 'https://www.dustloop.com/wiki/images/e/e5/MTFS_Danger_Portrait.png', imageFit: 'contain', imagePosition: 'center bottom', artScale: 1.06, artX: '0px', artY: '0px', wikiUrl: 'https://www.dustloop.com/w/MTFS/Danger', officialUrl: null },
      { name: 'Spider-Man', slug: 'spider-man', tagSlug: 'SPIDERMAN', team: 'Amazing Guardians', size: 'medium', imageUrl: 'https://www.dustloop.com/wiki/images/f/f4/MTFS_Spider-Man_Portrait.png', imageFit: 'contain', imagePosition: 'center bottom', artScale: 1.08, artX: '0px', artY: '0px', wikiUrl: 'https://www.dustloop.com/w/MTFS/Spider-Man', officialUrl: null },
      { name: 'Ms. Marvel', slug: 'ms-marvel', tagSlug: 'MSMARVEL', team: 'Amazing Guardians', size: 'medium', imageUrl: 'https://www.dustloop.com/wiki/images/5/5b/MTFS_Ms_Marvel_Portrait.png', imageUrls: ['https://www.dustloop.com/wiki/images/5/5b/MTFS_Ms_Marvel_Portrait.png', 'https://www.dustloop.com/wiki/images/b/bc/MTFS_Ms._Marvel_Portrait.png', 'https://www.dustloop.com/wiki/images/6/6c/MTFS_MsMarvel_Portrait.png'], imageFit: 'contain', imagePosition: 'center bottom', artScale: 1.08, artX: '0px', artY: '0px', wikiUrl: 'https://www.dustloop.com/w/MTFS/Ms._Marvel', officialUrl: null },
      { name: 'Star-Lord', slug: 'star-lord', tagSlug: 'STARLORD', team: 'Amazing Guardians', size: 'medium', imageUrl: 'https://www.dustloop.com/wiki/images/7/78/MTFS_Star-Lord_Portrait.png', imageFit: 'contain', imagePosition: 'center bottom', artScale: 1.07, artX: '0px', artY: '0px', wikiUrl: 'https://www.dustloop.com/w/MTFS/Star-Lord', officialUrl: null },
      { name: 'Peni Parker', slug: 'peni-parker', tagSlug: 'PENIPARKER', team: 'Amazing Guardians', size: 'medium', imageUrl: 'https://www.dustloop.com/wiki/images/2/2a/MTFS_Peni_Parker_Portrait.png', imageFit: 'contain', imagePosition: 'center bottom', artScale: 1.05, artX: '0px', artY: '0px', wikiUrl: 'https://www.dustloop.com/w/MTFS/Peni_Parker', officialUrl: null },
      { name: 'Captain America', slug: 'captain-america', tagSlug: 'CAPTAINAMERICA', team: 'Fighting Avengers', size: 'medium', imageUrl: 'https://www.dustloop.com/wiki/images/e/ef/MTFS_Captain_America_Portrait.png', imageFit: 'contain', imagePosition: 'center bottom', artScale: 1.08, artX: '0px', artY: '0px', wikiUrl: 'https://www.dustloop.com/w/MTFS/Captain_America', officialUrl: null },
      { name: 'Iron Man', slug: 'iron-man', tagSlug: 'IRONMAN', team: 'Fighting Avengers', size: 'medium', imageUrl: 'https://www.dustloop.com/wiki/images/a/ab/MTFS_Iron_Man_Portrait.png', imageFit: 'contain', imagePosition: 'center bottom', artScale: 1.08, artX: '0px', artY: '0px', wikiUrl: 'https://www.dustloop.com/w/MTFS/Iron_Man', officialUrl: null },
      { name: 'Black Panther', slug: 'black-panther', tagSlug: 'BLACKPANTHER', team: 'Fighting Avengers', size: 'medium', imageUrl: 'https://www.dustloop.com/wiki/images/8/86/MTFS_Black_Panther_Portrait.png', imageFit: 'contain', imagePosition: 'center bottom', artScale: 1.08, artX: '0px', artY: '0px', wikiUrl: 'https://www.dustloop.com/w/MTFS/Black_Panther', officialUrl: null },
      { name: 'Hulk', slug: 'hulk', tagSlug: 'HULK', team: 'Fighting Avengers', size: 'big', imageUrl: 'https://www.dustloop.com/wiki/images/9/97/MTFS_Hulk_Portrait.png', imageFit: 'contain', imagePosition: 'center bottom', artScale: 1.12, artX: '0px', artY: '0px', wikiUrl: 'https://www.dustloop.com/w/MTFS/Hulk', officialUrl: null },
      { name: 'Doctor Doom', slug: 'doctor-doom', tagSlug: 'DOCTORDOOM', team: 'Knights of Doom', size: 'medium', imageUrl: 'https://www.dustloop.com/wiki/images/2/2d/MTFS_Doctor_Doom_Portrait.png', imageFit: 'contain', imagePosition: 'center bottom', artScale: 1.1, artX: '0px', artY: '0px', wikiUrl: 'https://www.dustloop.com/w/MTFS/Doctor_Doom', officialUrl: null },
      { name: 'Magneto', slug: 'magneto', tagSlug: 'MAGNETO', team: 'Knights of Doom', size: 'medium', imageUrl: 'https://www.dustloop.com/wiki/images/4/48/MTFS_Magneto_Portrait.png', imageFit: 'contain', imagePosition: 'center bottom', artScale: 1.08, artX: '0px', artY: '0px', wikiUrl: 'https://www.dustloop.com/w/MTFS/Magneto', officialUrl: null },
      { name: 'Green Goblin', slug: 'green-goblin', tagSlug: 'GREENGOBLIN', team: 'Knights of Doom', size: 'medium', imageUrl: 'https://www.dustloop.com/wiki/images/8/8c/MTFS_Green_Goblin_Portrait.png', imageFit: 'contain', imagePosition: 'center bottom', artScale: 1.08, artX: '0px', artY: '0px', wikiUrl: 'https://www.dustloop.com/w/MTFS/Green_Goblin', officialUrl: null },
      { name: 'Carnage', slug: 'carnage', tagSlug: 'CARNAGE', team: 'Knights of Doom', size: 'medium', imageUrl: 'https://www.dustloop.com/wiki/images/6/68/MTFS_Carnage_Portrait.png', imageFit: 'contain', imagePosition: 'center bottom', artScale: 1.1, artX: '0px', artY: '0px', wikiUrl: 'https://www.dustloop.com/w/MTFS/Carnage', officialUrl: null },
      { name: 'Ghost Rider', slug: 'ghost-rider', tagSlug: 'GHOSTRIDER', team: 'Midnight Sons', size: 'medium', imageUrl: 'https://www.dustloop.com/wiki/images/6/6d/MTFS_Ghost_Rider_Portrait.png', imageFit: 'contain', imagePosition: 'center bottom', artScale: 1.1, artX: '0px', artY: '0px', wikiUrl: 'https://www.dustloop.com/w/MTFS/Ghost_Rider', officialUrl: null },
      { name: '?', slug: 'midnight-sons-placeholder-1', tagSlug: '', team: 'Midnight Sons', isPlaceholder: true, size: 'medium' },
      { name: '?', slug: 'midnight-sons-placeholder-2', tagSlug: '', team: 'Midnight Sons', isPlaceholder: true, size: 'medium' },
      { name: '?', slug: 'midnight-sons-placeholder-3', tagSlug: '', team: 'Midnight Sons', isPlaceholder: true, size: 'medium' }
    ],
  },
  {
    id: 'avatar-legends',
    name: 'Avatar Legends: The Fighting Game',
    tagPrefix: 'AVATARFIGHTERS',
    wikiBaseUrl: AVATAR_WIKI_BASE_URL,
    logoUrl: AVATAR_LEGENDS_LOGO_URL,
    logoText: 'AVATAR LEGENDS',
    theme: 'avatar',
    navAccent: '#ff7a1a',
    navAccent2: '#74cfff',
    showOfficialLinks: false,
    description: 'Recherche les techs Avatar Legends par combattant, avec un support optionnel quand la fiche en indique un.',
    maxSelection: 1,
    selectionLabel: 'solo / support',
    supportSelection: true,
    supportOptions: [],
    socialLinks: [
      { label: '@avatar_fighters', url: 'https://x.com/avatar_fighters', detail: 'Compte X', type: 'x' },
      { label: 'r/AvatarFighters', url: 'https://www.reddit.com/r/AvatarFighters/', detail: 'Reddit', type: 'reddit' },
    ],
    characters: [
      { name: 'Aang', slug: 'aang', tagSlug: 'AANG', health: 1000, size: 'medium', imageUrl: 'https://wiki.supercombo.gg/images/c/cd/Avatar_Legends_Aang_Portrait.png', imageUrls: ['https://wiki.supercombo.gg/images/c/cd/Avatar_Legends_Aang_Portrait.png'], wikiUrl: `${AVATAR_WIKI_BASE_URL}/Aang`, artScale: 1, artY: '0px' },
      { name: 'AANG (AVATAR STATE)', slug: 'aang-avatar-state', tagSlug: 'AANG_AVATAR_STATE', health: 1000, size: 'medium', imageUrl: '', noImageLookup: true, wikiUrl: `${AVATAR_WIKI_BASE_URL}/Avatar_State_Aang`, railLabelLines: ['AANG', 'AVATAR', 'STATE'], artScale: 1, artY: '0px' },
      { name: 'Azula', slug: 'azula', tagSlug: 'AZULA', health: 1000, size: 'medium', imageUrl: '', noImageLookup: true, wikiUrl: `${AVATAR_WIKI_BASE_URL}/Azula`, artScale: 1, artY: '0px' },
      { name: 'Katara', slug: 'katara', tagSlug: 'KATARA', health: 1000, size: 'medium', imageUrl: 'https://wiki.supercombo.gg/images/0/05/Avatar_Legends_Katara_Portrait.png', imageUrls: ['https://wiki.supercombo.gg/images/0/05/Avatar_Legends_Katara_Portrait.png'], wikiUrl: `${AVATAR_WIKI_BASE_URL}/Katara`, artScale: 1, artY: '0px' },
      { name: 'Korra', slug: 'korra', tagSlug: 'KORRA', health: 1000, size: 'medium', imageUrl: 'https://wiki.supercombo.gg/images/2/21/Avatar_Legends_Korra_Portrait.png', imageUrls: ['https://wiki.supercombo.gg/images/2/21/Avatar_Legends_Korra_Portrait.png'], wikiUrl: `${AVATAR_WIKI_BASE_URL}/Korra`, artScale: 1, artY: '0px' },
      { name: 'KORRA (AVATAR STATE)', slug: 'korra-avatar-state', tagSlug: 'KORRA_AVATAR_STATE', health: 1000, size: 'medium', imageUrl: '', noImageLookup: true, wikiUrl: `${AVATAR_WIKI_BASE_URL}/Avatar_State_Korra`, railLabelLines: ['KORRA', 'AVATAR', 'STATE'], artScale: 1, artY: '0px' },
      { name: 'KYOSHI', slug: 'kyoshi', tagSlug: 'KYOSHI', health: 1000, size: 'medium', imageUrl: '', noImageLookup: true, wikiUrl: `${AVATAR_WIKI_BASE_URL}/Kyoshi`, artScale: 1, artY: '0px' },
      { name: 'Ozai', slug: 'ozai', tagSlug: 'OZAI', health: 1000, size: 'medium', imageUrl: '', noImageLookup: true, wikiUrl: `${AVATAR_WIKI_BASE_URL}/Ozai`, artScale: 1, artY: '0px' },
      { name: 'Sokka', slug: 'sokka', tagSlug: 'SOKKA', health: 1000, size: 'medium', imageUrl: '', noImageLookup: true, wikiUrl: `${AVATAR_WIKI_BASE_URL}/Sokka`, artScale: 1, artY: '0px' },
      { name: 'Toph', slug: 'toph', tagSlug: 'TOPH', health: 1100, size: 'small', imageUrl: 'https://wiki.supercombo.gg/images/b/b0/Avatar_Legends_Toph_Portrait.png', imageUrls: ['https://wiki.supercombo.gg/images/b/b0/Avatar_Legends_Toph_Portrait.png'], wikiUrl: `${AVATAR_WIKI_BASE_URL}/Toph`, supports: ['Badgermole', 'The Boulder', 'The Hippo'], artScale: 1, artY: '0px' },
      { name: 'Zaheer', slug: 'zaheer', tagSlug: 'ZAHEER', health: 1000, size: 'medium', imageUrl: '', noImageLookup: true, wikiUrl: `${AVATAR_WIKI_BASE_URL}/Zaheer`, artScale: 1, artY: '0px' },
      { name: 'Zuko', slug: 'zuko', tagSlug: 'ZUKO', health: 1000, size: 'medium', imageUrl: 'https://wiki.supercombo.gg/images/7/7b/Avatar_Legends_Zuko_Portrait.png', imageUrls: ['https://wiki.supercombo.gg/images/7/7b/Avatar_Legends_Zuko_Portrait.png'], wikiUrl: `${AVATAR_WIKI_BASE_URL}/Zuko`, artScale: 1, artY: '0px' },
    ],
  },
  {
    id: 'vf-crossroads',
    name: 'Virtua Fighter Crossroads',
    logoUrl: VF_CROSSROADS_LOGO_URL,
    logoText: 'VIRTUA FIGHTER CROSSROADS',
    theme: 'vf',
    navAccent: '#c65a2b',
    navAccent2: '#ffffff',
    description: 'Ébauche du cast Virtua Fighter Crossroads, en attendant les infos complètes.',
    tagPrefix: 'VF',
    maxSelection: 1,
    selectionLabel: 'solo',
    socialLinks: [
      { label: '@VF_SEGA', url: 'https://x.com/VF_SEGA', detail: 'Compte X', type: 'x' },
      { label: 'r/virtuafighter', url: 'https://www.reddit.com/r/virtuafighter/', detail: 'Reddit', type: 'reddit' },
    ],
    characters: [
      { name: 'AKIRA YUKI', slug: 'akira-yuki', tagSlug: 'AKIRA_YUKI', size: 'medium', isPlaceholder: true, noImageLookup: true },
      { name: 'PAI CHAN', slug: 'pai-chan', tagSlug: 'PAI_CHAN', size: 'medium', isPlaceholder: true, noImageLookup: true },
      { name: 'WOLF HAWKFIELD', slug: 'wolf-hawkfield', tagSlug: 'WOLF_HAWKFIELD', size: 'big', isPlaceholder: true, noImageLookup: true },
      { name: 'STELLA BRIDGE', slug: 'stella-bridge', tagSlug: 'STELLA_BRIDGE', size: 'medium', isPlaceholder: true, noImageLookup: true },
      { name: 'CIELO SALINAS', slug: 'cielo-salinas', tagSlug: 'CIELO_SALINAS', size: 'medium', isPlaceholder: true, noImageLookup: true },
      { name: 'JACKY BRYANT', slug: 'jacky-bryant', tagSlug: 'JACKY_BRYANT', size: 'medium', isPlaceholder: true, noImageLookup: true },
    ],
  },
];

const app = document.querySelector('#app');
document.documentElement.dataset.techlabVersion = TECHLAB_VERSION;
document.body.dataset.techlabVersion = TECHLAB_VERSION;
console.info(`TechLab ${TECHLAB_VERSION}`);
const gameNav = document.querySelector('#gameNav');
const gameButtonTemplate = document.querySelector('#gameButtonTemplate');
const championCardTemplate = document.querySelector('#championCardTemplate');

let imageCache = readCache(IMAGE_CACHE_KEY);
let healthCache = readCache(HEALTH_CACHE_KEY);
let selectedByGame = { '2xko': [], 'marvel-tokon': [], 'avatar-legends': [], 'vf-crossroads': [] };
const STAGE_PICKER_GAME_IDS = new Set(['2xko', 'marvel-tokon', 'avatar-legends', 'vf-crossroads']);
let selectedSupportByGame = { 'avatar-legends': '' };
let selectedStageArtByGame = { '2xko': {} };
let currentGameId = null;

function readCache(key) {
  try {
    return JSON.parse(localStorage.getItem(key)) || {};
  } catch {
    return {};
  }
}

function writeCache(key, cache) {
  localStorage.setItem(key, JSON.stringify(cache));
}

function writeImageCache() { writeCache(IMAGE_CACHE_KEY, imageCache); }
function writeHealthCache() { writeCache(HEALTH_CACHE_KEY, healthCache); }

function getGame(gameId) {
  return games.find((game) => game.id === gameId) || games[0];
}

function getCharacter(game, characterSlug) {
  return game.characters.find((character) => character.slug === characterSlug);
}

function getTwitterTag(game, character) {
  const tagSlug = character.tagSlug || character.slug.toUpperCase().replace(/-/g, '_');
  return `#${game.tagPrefix}_${tagSlug}`;
}

function getTwitterSearchUrl(query) {
  return `${X_SEARCH_BASE_URL}?q=${encodeURIComponent(query)}&src=typed_query`;
}

function getSimpleTwitterUrl(game, character) {
  return getTwitterSearchUrl(getTwitterTag(game, character));
}

function getWikiPageUrl(game, character) {
  if (character.wikiUrl) return character.wikiUrl;
  if (game?.wikiBaseUrl) return `${game.wikiBaseUrl}/${encodeURIComponent(character.name)}`;
  return '#';
}

function getOfficialChampionUrl(game, character) {
  if (character.officialUrl) return character.officialUrl;
  if (game?.officialChampionsUrl) return `${game.officialChampionsUrl}${character.slug}/`;
  if (game?.officialNewsUrl) return game.officialNewsUrl;
  return '#';
}

function getApiUrl(params) {
  const url = new URL(WIKI_API_URL);
  Object.entries(params).forEach(([key, value]) => url.searchParams.set(key, value));
  url.searchParams.set('format', 'json');
  url.searchParams.set('origin', '*');
  return url.toString();
}

function parseRoute() {
  const cleanHash = window.location.hash.replace(/^#\/?/, '');
  if (!cleanHash || cleanHash === 'home' || cleanHash === 'accueil') return { gameId: 'home', characterSlug: '' };
  const [gameId = 'home', characterSlug = ''] = cleanHash.split('/');
  return { gameId, characterSlug };
}

function setRoute(gameId = 'home', characterSlug = '') {
  window.location.hash = characterSlug ? `#/${gameId}/${characterSlug}` : `#/${gameId}`;
}

function getGameIdFromHashHref(href = '') {
  const match = String(href).match(/^#\/?([^/]+)/);
  return match?.[1] || '';
}

function showFallback(image, fallback) {
  image.hidden = true;
  image.removeAttribute('src');
  fallback.classList.add('is-visible');
}

function showImage(image, fallback, character, imageUrl) {
  image.hidden = false;
  image.alt = character.name;
  image.src = imageUrl;
  image.dataset.source = imageUrl;
  fallback.classList.remove('is-visible');
}

function pickBestImageFile(files, characterName) {
  const name = characterName.toLowerCase();
  const banned = ['icon', 'input', 'button', 'special', 'light', 'medium', 'heavy', 'down', 'forward', 'back', 'video'];

  return files
    .filter((file) => file.toLowerCase().includes(name))
    .filter((file) => !banned.some((word) => file.toLowerCase().includes(word)))
    .sort((a, b) => {
      const score = (file) => {
        const lower = file.toLowerCase();
        let value = 0;
        if (lower.includes('render')) value += 5;
        if (lower.includes('portrait')) value += 4;
        if (lower.includes('splash')) value += 2;
        if (lower.endsWith('.png')) value += 2;
        if (lower.endsWith('.webp')) value += 1;
        return value;
      };
      return score(b) - score(a);
    })[0];
}

async function fetchCharacterImageUrl(character) {
  if (character.imageUrls?.length) return character.imageUrls[0];
  if (character.imageUrl) return character.imageUrl;
  if (character.isPlaceholder || character.noImageLookup || character.wikiUrl) return null;
  if (imageCache[character.slug]) return imageCache[character.slug];

  const pageImagesUrl = getApiUrl({
    action: 'query',
    titles: character.name,
    prop: 'pageimages',
    piprop: 'original',
  });

  const pageImagesResponse = await fetch(pageImagesUrl);
  const pageImagesData = await pageImagesResponse.json();
  const page = Object.values(pageImagesData?.query?.pages || {})[0];

  if (page?.original?.source) {
    imageCache[character.slug] = page.original.source;
    writeImageCache();
    return page.original.source;
  }

  const parseUrl = getApiUrl({ action: 'parse', page: character.name, prop: 'images' });
  const parseResponse = await fetch(parseUrl);
  const parseData = await parseResponse.json();
  const bestFile = pickBestImageFile(parseData?.parse?.images || [], character.name);

  if (!bestFile) return null;

  const imageInfoUrl = getApiUrl({
    action: 'query',
    titles: `File:${bestFile}`,
    prop: 'imageinfo',
    iiprop: 'url',
  });

  const imageInfoResponse = await fetch(imageInfoUrl);
  const imageInfoData = await imageInfoResponse.json();
  const imagePage = Object.values(imageInfoData?.query?.pages || {})[0];
  const imageUrl = imagePage?.imageinfo?.[0]?.url;

  if (imageUrl) {
    imageCache[character.slug] = imageUrl;
    writeImageCache();
  }

  return imageUrl || null;
}

async function loadCharacterImage(image, fallback, character) {
  fallback.textContent = character.name.slice(0, 2).toUpperCase();
  fallback.classList.add('is-visible');
  image.hidden = true;

  const candidateUrls = character.imageUrls?.length ? [...character.imageUrls] : [];

  function tryShowUrl(urls) {
    const [nextUrl, ...rest] = urls;
    if (!nextUrl) {
      showFallback(image, fallback);
      return;
    }

    image.addEventListener('error', () => tryShowUrl(rest), { once: true });
    showImage(image, fallback, character, nextUrl);
  }

  try {
    const imageUrl = await fetchCharacterImageUrl(character);
    const urls = candidateUrls.length ? candidateUrls : [imageUrl].filter(Boolean);
    if (!urls.length) return showFallback(image, fallback);
    tryShowUrl(urls);
  } catch (error) {
    console.warn(`Impossible de charger l'image wiki pour ${character.name}`, error);
    showFallback(image, fallback);
  }
}

async function fetchCharacterHealth(character) {
  if (character.health) return String(character.health);
  if (healthCache[character.slug]) return healthCache[character.slug];

  const parseUrl = getApiUrl({ action: 'parse', page: character.name, prop: 'text' });
  const response = await fetch(parseUrl);
  const data = await response.json();
  const html = data?.parse?.text?.['*'];
  if (!html) return null;

  const doc = new DOMParser().parseFromString(html, 'text/html');
  const labelSelectors = [
    '.pi-data-label',
    '.infobox-label',
    'th',
    'dt',
  ].join(',');

  for (const label of doc.querySelectorAll(labelSelectors)) {
    const labelText = label.textContent.trim().toLowerCase();
    if (labelText !== 'health') continue;

    const row = label.closest('.pi-item, tr, dl, div');
    const valueEl = row?.querySelector('.pi-data-value, .infobox-data, td, dd');
    const value = valueEl?.textContent.match(/\b\d{3,4}\b/)?.[0];
    if (value) {
      healthCache[character.slug] = value;
      writeHealthCache();
      return value;
    }

    const nextValue = label.nextElementSibling?.textContent.match(/\b\d{3,4}\b/)?.[0];
    if (nextValue) {
      healthCache[character.slug] = nextValue;
      writeHealthCache();
      return nextValue;
    }
  }

  const firstHealth = doc.body.textContent.match(/\bHealth\s*(\d{3,4})\b/i)?.[1];
  if (firstHealth) {
    healthCache[character.slug] = firstHealth;
    writeHealthCache();
    return firstHealth;
  }

  return null;
}

async function loadCharacterHealth(badge, character, game = null) {
  const is2xko = game?.id === '2xko';
  badge.textContent = is2xko ? '…' : 'PV …';
  badge.classList.add('is-loading');

  try {
    const health = await fetchCharacterHealth(character);
    badge.textContent = health ? (is2xko ? `${health}` : `${health} PV`) : (is2xko ? '?' : 'PV ?');
  } catch (error) {
    console.warn(`Impossible de charger les PV wiki pour ${character.name}`, error);
    badge.textContent = is2xko ? '?' : 'PV ?';
  } finally {
    badge.classList.remove('is-loading');
  }
}


function clearAllSelections() {
  Object.keys(selectedByGame).forEach((id) => { selectedByGame[id] = []; });
  Object.keys(selectedSupportByGame).forEach((id) => { selectedSupportByGame[id] = ''; });
  Object.keys(selectedStageArtByGame).forEach((id) => { selectedStageArtByGame[id] = {}; });
}

function renderGameNav(activeGameId) {
  if (!gameNav || !gameButtonTemplate) return;
  gameNav.innerHTML = '';

  games.forEach((game) => {
    const item = gameButtonTemplate.content.cloneNode(true);
    const link = item.querySelector('.game-button');
    const name = item.querySelector('.game-name');
    const count = item.querySelector('.game-count');

    link.href = `#/${game.id}`;
    link.dataset.gameSwitchLink = 'true';
    link.addEventListener('click', () => {
      clearAllSelections();
      if (currentGameId === game.id) {
        window.requestAnimationFrame(() => updateSelectionUi(game));
      }
    });
    link.classList.toggle('is-active', game.id === activeGameId);
    link.classList.toggle('is-empty', game.characters.length === 0);
    link.style.setProperty('--button-accent', game.navAccent || '#eaff2c');
    link.style.setProperty('--button-accent-2', game.navAccent2 || game.navAccent || '#18e6ff');
    name.innerHTML = renderLogo(game, true);
    count.textContent = game.characters.length ? `${game.characters.length} persos` : 'bientôt';

    gameNav.appendChild(item);
  });
}

function getSelectedSlugs(game) {
  return selectedByGame[game.id] || [];
}

function getTwitterQueryForSelection(game, mode = 'filtered') {
  const selectedSlugs = getSelectedSlugs(game);
  if (!selectedSlugs.length) return '';

  const selectedTags = selectedSlugs
    .map((slug) => getCharacter(game, slug))
    .filter(Boolean)
    .map((character) => getTwitterTag(game, character));

  const supportTag = getSelectedSupportTag(game);
  const visibleTags = supportTag ? [...selectedTags, supportTag] : selectedTags;

  if (mode === 'simple') return visibleTags.join(' ');

  const excludedTags = game.characters
    .filter((character) => !character.isPlaceholder && !selectedSlugs.includes(character.slug))
    .map((character) => `-${getTwitterTag(game, character)}`);

  return [...visibleTags, ...excludedTags].join(' ');
}


function getSupportTag(game, supportName) {
  if (!supportName) return '';
  return `#${game.tagPrefix}_${supportName.toUpperCase().replace(/[^A-Z0-9]+/g, '_').replace(/^_|_$/g, '')}`;
}

function getSelectedSupportTag(game) {
  if (!game.supportSelection) return '';
  return getSupportTag(game, selectedSupportByGame[game.id]);
}

function setSelectedSupport(game, supportName) {
  selectedSupportByGame[game.id] = supportName || '';
  updateSelectionUi(game);
}

function getSelectionLimit(game) {
  return game.maxSelection || 2;
}

function sync2XkoSelectedStageArt(game, selectedSlugs) {
  if (game.id !== '2xko') return;

  const current = selectedStageArtByGame[game.id] || {};
  const next = {};

  selectedSlugs.forEach((slug) => {
    const character = getCharacter(game, slug);
    const urls = get2XkoStageArtUrls(character);
    next[slug] = current[slug] || getRandomItem(urls) || character?.imageUrl || '';
  });

  selectedStageArtByGame[game.id] = next;
}

function get2XkoSelectedStageArtUrl(game, character) {
  if (game.id === 'marvel-tokon') return character?.stageImageUrl || character?.imageUrl || character?.imageUrls?.[0] || '';
  if (game.id !== '2xko') return character?.imageUrl || '';
  const selectedArt = selectedStageArtByGame[game.id]?.[character.slug];
  return selectedArt || get2XkoChampionSelectUrl(character.slug);
}

function setSelectedCharacters(game, selectedSlugs) {
  const limitedSlugs = selectedSlugs.slice(0, getSelectionLimit(game));
  sync2XkoSelectedStageArt(game, limitedSlugs);
  selectedByGame[game.id] = limitedSlugs;
  if (game.supportSelection && !selectedByGame[game.id].length) selectedSupportByGame[game.id] = '';
  updateSelectionUi(game);
}

function toggleCharacterSelection(game, character) {
  const current = getSelectedSlugs(game);
  const alreadySelected = current.includes(character.slug);

  if (alreadySelected) {
    setSelectedCharacters(game, current.filter((slug) => slug !== character.slug));
    return;
  }

  const maxSelection = getSelectionLimit(game);
  if (current.length >= maxSelection) {
    setSelectedCharacters(game, [...current.slice(1), character.slug]);
    return;
  }

  setSelectedCharacters(game, [...current, character.slug]);
}

function updateSelectionUi(game) {
  if (!game.tagPrefix || !game.characters.length) return;

  const selectedSlugs = getSelectedSlugs(game);
  const selectedCharacters = selectedSlugs.map((slug) => getCharacter(game, slug)).filter(Boolean);
  const simpleQuery = getTwitterQueryForSelection(game, 'simple');
  const filteredQuery = getTwitterQueryForSelection(game, 'filtered');

  document.querySelectorAll('.champion-card').forEach((card) => {
    const slug = card.dataset.characterSlug;
    const isSelected = selectedSlugs.includes(slug);
    const cardButton = card.querySelector('.champion-card-button');

    card.classList.toggle('is-selected', isSelected);
    cardButton.setAttribute('aria-pressed', String(isSelected));
  });

  const selectionNames = app.querySelector('#selectionNames');
  const simpleQueryEl = app.querySelector('#simpleQuery');
  const filteredQueryEl = app.querySelector('#filteredQuery');
  const simpleLink = app.querySelector('#simpleLink');
  const filteredLink = app.querySelector('#filteredLink');
  const copySimple = app.querySelector('#copySimple');
  const copyFiltered = app.querySelector('#copyFiltered');
  const resetSimple = app.querySelector('#resetSimple');
  const resetFiltered = app.querySelector('#resetFiltered');
  const supportPanel = app.querySelector('#supportPanel');
  const supportSelect = app.querySelector('#supportSelect');

  if (!selectionNames || !simpleQueryEl || !filteredQueryEl) return;

  selectionNames.textContent = selectedCharacters.length
    ? selectedCharacters.map((character) => getUiCharacterName(character)).join(' + ')
    : '';
  selectionNames.hidden = !selectedCharacters.length;

  if (supportPanel && supportSelect) {
    const selectedCharacter = selectedCharacters[0];
    const supportOptions = selectedCharacter?.supports || game.supportOptions || [];
    supportPanel.hidden = !selectedCharacter || !supportOptions.length;
    const currentSupport = selectedSupportByGame[game.id] || '';
    supportSelect.innerHTML = '<option value="">Aucun support</option>' + supportOptions.map((support) => `<option value="${support}">${support}</option>`).join('');
    supportSelect.value = supportOptions.includes(currentSupport) ? currentSupport : '';
    if (supportSelect.value !== currentSupport) selectedSupportByGame[game.id] = supportSelect.value;
  }

  simpleQueryEl.textContent = simpleQuery || '';
  filteredQueryEl.textContent = filteredQuery || '';

  [[simpleLink, simpleQuery], [filteredLink, filteredQuery]].forEach(([link, query]) => {
    link.href = query ? getTwitterSearchUrl(query) : '#';
    link.classList.toggle('is-disabled', !query);
  });

  [[copySimple, simpleQuery], [copyFiltered, filteredQuery]].forEach(([button, query]) => {
    if (button) button.disabled = !query;
  });

  [resetSimple, resetFiltered].forEach((button) => {
    if (button) button.disabled = !selectedCharacters.length;
  });

  update2XkoTestLayout(game, selectedCharacters);
  updateMobileGameUi(game, selectedCharacters, simpleQuery, filteredQuery);
}

function renderLogo(game, compact = false) {
  const classes = `game-logo ${compact ? 'compact' : ''}`.trim();

  if (game.logoUrl) {
    return `<img class="${classes}" src="${game.logoUrl}" alt="${game.name}" loading="lazy" />`;
  }

  return `<div class="text-logo ${compact ? 'compact' : ''}">${game.logoText || game.name}</div>`;
}

function renderResourceIcon(type) {
  if (type === 'riot') {
    return `<span class="resource-icon resource-icon-2xko" aria-hidden="true">
      <img src="${OFFICIAL_2XKO_ICON_URL}" alt="" loading="lazy" />
    </span>`;
  }

  if (type === 'x') {
    return `<span class="resource-icon resource-icon-x" aria-hidden="true">${X_ICON}</span>`;
  }

  if (type === 'youtube') {
    return `<span class="resource-icon resource-icon-youtube" aria-hidden="true">${YOUTUBE_ICON}</span>`;
  }

  if (type === 'reddit') {
    return `<span class="resource-icon resource-icon-reddit" aria-hidden="true">${REDDIT_ICON}</span>`;
  }

  if (type === 'marvel') {
    return `<span class="resource-icon resource-icon-marvel" aria-hidden="true">M</span>`;
  }

  if (type === 'playstation') {
    return `<span class="resource-icon resource-icon-playstation" aria-hidden="true">PS</span>`;
  }

  if (type === 'tournament') {
    return `<span class="resource-icon resource-icon-tournament" aria-hidden="true">${TOURNAMENT_ICON}</span>`;
  }

  if (type === 'glossary') {
    return `<span class="resource-icon resource-icon-glossary" aria-hidden="true">${GLOSSARY_ICON}</span>`;
  }

  return '';
}

function getTeamTheme(team) {
  return MARVEL_TEAM_THEMES[team] || null;
}

function getTeamSlug(team) {
  return String(team || 'autres').toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '');
}

function renderTeamBadge(character) {
  if (!character.team) return '';
  const theme = getTeamTheme(character.team);
  const logo = theme?.logo || '';
  return `
    <div class="team-badge" aria-label="Équipe : ${character.team}">
      ${logo ? `<img class="team-badge-logo" src="${logo}" alt="" loading="lazy" />` : ''}
      <span>${character.team}</span>
    </div>
  `;
}

function renderQuickLinks(game) {
  const extraLinks = (game.socialLinks || []).map((link) => `
    <a class="resource-link resource-link-${link.type}" href="${link.url}" target="_blank" rel="noreferrer noopener">
      ${renderResourceIcon(link.type)}
      <span>${link.detail}</span>
      <strong>${link.label}</strong>
    </a>
  `).join('');

  const officialLink = game.officialNewsUrl ? `
    <a class="resource-link resource-link-main resource-link-official" href="${game.officialNewsUrl}" target="_blank" rel="noreferrer noopener">
      ${renderResourceIcon(game.id === 'marvel-tokon' ? 'marvel' : 'riot')}
      <span>Site officiel</span>
      <strong>${game.id === 'marvel-tokon' ? 'Page officielle Marvel' : 'Actus et patch notes'}</strong>
    </a>
  ` : '';

  if (!officialLink && !extraLinks) return '';

  return `
    <section class="resource-panel" aria-label="Liens ${game.name}">
      ${officialLink}
      ${extraLinks}
    </section>
  `;
}



function getUiCharacterName(character) {
  const rawName = String(character?.name || '').trim();
  if (!rawName) return '';

  const avatarStateMatch = rawName.match(/^([A-Z]+)\s*\(AVATAR STATE\)$/i);
  if (avatarStateMatch) {
    return `${toTitleCaseLabel(avatarStateMatch[1])} (Avatar State)`;
  }

  if (rawName === rawName.toUpperCase()) {
    return toTitleCaseLabel(rawName);
  }

  return rawName;
}

function toTitleCaseLabel(value) {
  return String(value || '')
    .toLowerCase()
    .split(/([\s\-_]+)/)
    .map((part) => /[a-z0-9]/i.test(part) ? part.charAt(0).toUpperCase() + part.slice(1) : part)
    .join('');
}

function getSelectionHeading(game) {
  if (game.id === 'avatar-legends') return 'Choisis ton perso.';
  const limit = getSelectionLimit(game);
  if (limit <= 1) return 'Choisis ton perso.';
  if (limit === 2) return 'Choisis 1 ou 2 persos.';
  return `Choisis 1 à ${limit} persos.`;
}

function renderSelectionBuilder(game) {
  if (!game.tagPrefix || !game.characters.length) return '';

  return `
    <section class="selection-builder" aria-label="Générateur de recherche X">
      <div class="selection-intro">
        <h2 class="selection-heading">${getSelectionHeading(game)}</h2>
      </div>
      <div class="query-panel">
        <p class="selection-title" id="selectionNames" hidden></p>
        ${game.supportSelection ? `<label class="support-panel" id="supportPanel" hidden>
          <span>Support</span>
          <select id="supportSelect" aria-label="Choisir un support"></select>
        </label>` : ''}
        <article class="query-mode-card">
          <span>Simple</span>
          <code class="generated-query" id="simpleQuery"></code>
          <div class="query-actions">
            <a class="big-link query-link is-disabled" id="simpleLink" href="#" target="_blank" rel="noreferrer noopener" aria-label="Ouvrir sur X">${X_ICON}</a>
            <button class="copy-button" id="copySimple" type="button" disabled aria-label="Copier la requête simple" title="Copier">${COPY_ICON}</button>
            <button class="reset-button" id="resetSimple" type="button" disabled aria-label="Effacer la sélection" title="Effacer">${CLEAR_ICON}</button>
          </div>
        </article>
        <article class="query-mode-card">
          <span>Filtrée</span>
          <code class="generated-query" id="filteredQuery"></code>
          <div class="query-actions">
            <a class="big-link query-link is-disabled" id="filteredLink" href="#" target="_blank" rel="noreferrer noopener" aria-label="Ouvrir sur X">${X_ICON}</a>
            <button class="copy-button" id="copyFiltered" type="button" disabled aria-label="Copier la requête filtrée" title="Copier">${COPY_ICON}</button>
            <button class="reset-button" id="resetFiltered" type="button" disabled aria-label="Effacer la sélection" title="Effacer">${CLEAR_ICON}</button>
          </div>
        </article>
      </div>
    </section>
  `;
}

function renderGameHeader(game) {
  return '';
}


function clampTilt(value) {
  return Math.max(-1, Math.min(1, value));
}



function resetStageHover(link, art) {
  link?.classList.remove('is-alpha-hover');
  if (!art) return;
  art.style.setProperty('--stage-tilt-x', '0deg');
  art.style.setProperty('--stage-tilt-y', '0deg');
  art.style.setProperty('--stage-shift-x', '0px');
  art.style.setProperty('--stage-shift-y', '0px');
}

function isStageCaptionHit(event) {
  return Boolean(event.target.closest('.x2ko-stage-caption'));
}

function isStageArtworkHit(link, event) {
  // TechLab v1.0.42: la zone hover/clic des persos sélectionnés suit maintenant
  // le rectangle complet de l'image, pas seulement les pixels opaques de la silhouette.
  const img = link?.querySelector('.x2ko-stage-art');
  const rect = img?.getBoundingClientRect();
  if (!rect?.width || !rect?.height) return false;
  return event.clientX >= rect.left && event.clientX <= rect.right && event.clientY >= rect.top && event.clientY <= rect.bottom;
}

function bindCardTilt(card) {
  const artWrap = card.querySelector('.champion-art-wrap');
  const art = card.querySelector('.champion-art');
  if (!artWrap || !art) return;

  artWrap.addEventListener('pointermove', (event) => {
    const rect = artWrap.getBoundingClientRect();
    const x = clampTilt(((event.clientX - rect.left) / rect.width - 0.5) * 2);
    const y = clampTilt(((event.clientY - rect.top) / rect.height - 0.5) * 2);
    art.style.setProperty('--art-tilt-y', `${x * 14}deg`);
    art.style.setProperty('--art-tilt-x', `${y * -10}deg`);
  });

  artWrap.addEventListener('pointerleave', () => {
    art.style.setProperty('--art-tilt-x', '0deg');
    art.style.setProperty('--art-tilt-y', '0deg');
  });
}

function bindStageTilt(card) {
  const hoverZone = card.querySelector('.x2ko-stage-main-link');
  const art = card.querySelector('.x2ko-stage-art');
  if (!hoverZone || !art) return;

  hoverZone.addEventListener('pointermove', (event) => {
    if (!isStageArtworkHit(hoverZone, event)) {
      resetStageHover(hoverZone, art);
      return;
    }

    const rect = art.getBoundingClientRect();
    const x = clampTilt(((event.clientX - rect.left) / rect.width - 0.5) * 2);
    const y = clampTilt(((event.clientY - rect.top) / rect.height - 0.5) * 2);
    hoverZone.classList.add('is-alpha-hover');
    art.style.setProperty('--stage-tilt-y', `${x * 8}deg`);
    art.style.setProperty('--stage-tilt-x', `${y * -6}deg`);
    art.style.setProperty('--stage-shift-x', `${x * 10}px`);
    art.style.setProperty('--stage-shift-y', `${y * 6}px`);
  });

  hoverZone.addEventListener('pointerleave', () => resetStageHover(hoverZone, art));
}

function createCharacterCard(game, character) {
  const card = championCardTemplate.content.cloneNode(true);
  const article = card.querySelector('.champion-card');
  const cardButton = card.querySelector('.champion-card-button');
  const image = card.querySelector('.champion-art');
  const fallback = card.querySelector('.champion-fallback');
  const name = card.querySelector('.champion-name');
  const nameLink = card.querySelector('.champion-name-link');
  const healthBadge = card.querySelector('.health-badge');
  const tag = card.querySelector('.champion-tag');
  const wikiLink = card.querySelector('.champion-wiki-link');
  const officialLink = card.querySelector('.champion-official-link');

  // 2XKO uses a HUD-style life bar: keep the HP number inside the same bar as the character name.
  if (game.id === '2xko' && healthBadge && nameLink) {
    nameLink.appendChild(healthBadge);
  }

  article.dataset.game = game.id;
  article.dataset.characterSlug = character.slug;
  if (character.team) {
    article.dataset.team = character.team.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '');
    const teamTheme = getTeamTheme(character.team);
    if (teamTheme) {
      article.style.setProperty('--team-accent', teamTheme.accent);
      article.style.setProperty('--team-accent-2', teamTheme.accent2);
    }
  }
  bindCardTilt(article);
  article.dataset.size = character.size || 'medium';
  article.style.setProperty('--art-scale', character.artScale || 1.12);
  article.style.setProperty('--art-x', character.artX || '0px');
  article.style.setProperty('--art-y', character.artY || '0px');
  article.style.setProperty('--art-fit', character.imageFit || 'contain');
  article.style.setProperty('--art-object-position', character.imagePosition || 'center bottom');

  cardButton.setAttribute('aria-label', character.isPlaceholder ? `${character.name} — pas encore disponible` : `Sélectionner ${character.name} pour la recherche`);
  cardButton.setAttribute('aria-pressed', 'false');
  cardButton.disabled = Boolean(character.isPlaceholder);
  cardButton.addEventListener('click', () => {
    if (character.isPlaceholder) return;
    if (game.tagPrefix) toggleCharacterSelection(game, character);
    else setRoute(game.id, character.slug);
  });

  name.textContent = character.name;
  tag.remove();

  if (character.isPlaceholder) {
    article.classList.add('is-placeholder');
    nameLink.href = '#';
    nameLink.setAttribute('aria-label', `${character.name} — pas encore disponible`);
    nameLink.addEventListener('click', (event) => event.preventDefault());
  } else {
    nameLink.href = `#/${game.id}/${character.slug}`;
    nameLink.setAttribute('aria-label', `Ouvrir la fiche TechLab de ${character.name}`);
    nameLink.addEventListener('click', (event) => event.stopPropagation());
  }

  wikiLink.href = getWikiPageUrl(game, character);
  wikiLink.setAttribute('aria-label', `Ouvrir le wiki de ${character.name}`);
  wikiLink.addEventListener('click', (event) => event.stopPropagation());

  if (game.showOfficialLinks === false || character.officialUrl === null) {
    officialLink.remove();
  } else {
    officialLink.href = getOfficialChampionUrl(game, character);
    officialLink.setAttribute('aria-label', `Ouvrir la page officielle de ${character.name}`);
    officialLink.addEventListener('click', (event) => event.stopPropagation());
  }

  if (character.health) {
    loadCharacterHealth(healthBadge, character, game);
  } else {
    healthBadge.hidden = true;
    healthBadge.remove();
  }

  if (character.team) {
    const links = card.querySelector('.champion-links');
    links.insertAdjacentHTML('afterend', renderTeamBadge(character));
  }

  loadCharacterImage(image, fallback, character);
  return card;
}

function renderCharacterGroups(game, grid) {
  if (!game.characters.length) return;

  if (!game.characters.some((character) => character.team)) {
    game.characters.forEach((character) => grid.appendChild(createCharacterCard(game, character)));
    return;
  }

  const teams = [...new Set(game.characters.map((character) => character.team || 'Autres'))];
  grid.classList.add('has-team-sections');

  teams.forEach((team) => {
    const section = document.createElement('section');
    section.className = 'team-section';
    section.dataset.team = team.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '');
    section.innerHTML = '<div class="team-grid"></div>';
    const teamGrid = section.querySelector('.team-grid');
    game.characters
      .filter((character) => (character.team || 'Autres') === team)
      .forEach((character) => teamGrid.appendChild(createCharacterCard(game, character)));
    grid.appendChild(section);
  });
}



function get2XkoCharactersSorted(game) {
  return [...(game.characters || [])].sort((a, b) => a.name.localeCompare(b.name, 'fr', { sensitivity: 'base' }));
}

function getAssistHeadUrl(character) {
  return `./assets/2xko/assist-heads/${character.slug}.webp`;
}

function get2XkoRosterBustUrl(character) {
  return `./assets/2xko/roster-busts/${character.slug}.webp`;
}

function getCharacterRailArtUrl(game, character) {
  if (game.id === '2xko') return get2XkoRosterBustUrl(character);
  return character.railImageUrl || character.imageUrl || character.imageUrls?.[0] || '';
}

function getCharacterRailNameMarkup(game, character) {
  const name = character.railLabel || character.name;

  if (character.railLabelLines?.length) {
    return character.railLabelLines.map((line) => escapeHtml(line)).join('<br>');
  }

  if (game.id === 'marvel-tokon') {
    const forceTwoLines = new Set(['captain-america', 'black-panther', 'green-goblin', 'doctor-doom']);
    if (forceTwoLines.has(character.slug)) {
      const parts = name.split(/\s+/).filter(Boolean);
      return parts.map((part) => escapeHtml(part)).join('<br>');
    }
    return escapeHtml(name);
  }

  if (game.id === 'avatar-legends') {
    if (character.slug === 'aang-avatar-state') return 'AANG<br>AVATAR<br>STATE';
    if (character.slug === 'korra-avatar-state') return 'KORRA<br>AVATAR<br>STATE';
    const parts = name.split(/\s+/).filter(Boolean);
    if (parts.length === 2) return parts.map((part) => escapeHtml(part)).join('<br>');
  }

  if (game.id === 'vf-crossroads') {
    const parts = name.split(/\s+/).filter(Boolean);
    if (parts.length === 2) return parts.map((part) => escapeHtml(part)).join('<br>');
  }

  return escapeHtml(name);
}

function getMarvelTeamsInOrder(game) {
  const teams = [];
  (game.characters || []).forEach((character) => {
    const team = character.team || 'Autres';
    if (!teams.includes(team)) teams.push(team);
  });
  return teams;
}

function getCharacterRailButtonMarkup(game, character) {
  const theme = getTeamTheme(character.team);
  const styleParts = [];
  if (theme?.accent) styleParts.push(`--team-accent:${theme.accent}`);
  if (theme?.accent2) styleParts.push(`--team-accent-2:${theme.accent2}`);
  const style = styleParts.length ? ` style="${styleParts.join(';')}"` : '';
  const teamAttr = character.team ? ` data-team="${escapeHtml(getTeamSlug(character.team))}"` : '';
  const placeholderClass = character.isPlaceholder ? ' is-placeholder' : '';
  const disabledAttr = character.isPlaceholder ? ' disabled aria-disabled="true"' : '';
  const title = character.isPlaceholder ? 'Personnage pas encore annoncé' : character.name;
  const railArtUrl = getCharacterRailArtUrl(game, character);
  const railArt = railArtUrl
    ? `<img class="character-rail-art" src="${escapeHtml(railArtUrl)}" alt="" loading="lazy" />`
    : `<div class="character-rail-fallback" aria-hidden="true">${escapeHtml(character.name.slice(0, 2).toUpperCase())}</div>`;
  return `
    <button class="character-rail-item${placeholderClass}" type="button" data-character-slug="${escapeHtml(character.slug)}"${teamAttr} aria-pressed="false" title="${escapeHtml(title)}"${style}${disabledAttr}>
      ${railArt}
      <span>${getCharacterRailNameMarkup(game, character)}</span>
    </button>
  `;
}

function render2XkoCharacterRail(game) {
  const characters = get2XkoCharactersSorted(game);
  return `
    <aside class="character-rail" aria-label="Personnages ${escapeHtml(game.name)}">
      <div class="character-rail-list" id="characterRailList">
        ${characters.map((character) => getCharacterRailButtonMarkup(game, character)).join('')}
      </div>
    </aside>
  `;
}

function renderMarvelTeamHeader(team) {
  const theme = getTeamTheme(team);
  const logo = theme?.logo || '';
  return `
    <header class="marvel-team-header" style="--team-accent:${theme?.accent || '#ff8a00'};--team-accent-2:${theme?.accent2 || '#18bafc'}">
      <span class="marvel-team-logo" aria-hidden="true">${logo ? `<img src="${escapeHtml(logo)}" alt="" loading="lazy" />` : escapeHtml(team.split(/\s+/).map((word) => word[0]).join('').slice(0, 2))}</span>
      <span class="marvel-team-name">${escapeHtml(team)}</span>
    </header>
  `;
}

function renderMarvelCharacterRail(game) {
  return `
    <aside class="character-rail marvel-character-rail" aria-label="Personnages ${escapeHtml(game.name)}">
      <div class="character-rail-list marvel-character-rail-list" id="characterRailList">
        ${getMarvelTeamsInOrder(game).map((team) => `
          <section class="marvel-team-section" data-team="${escapeHtml(getTeamSlug(team))}">
            ${renderMarvelTeamHeader(team)}
            <div class="marvel-team-grid">
              ${game.characters
                .filter((character) => (character.team || 'Autres') === team)
                .map((character) => getCharacterRailButtonMarkup(game, character))
                .join('')}
            </div>
          </section>
        `).join('')}
      </div>
    </aside>
  `;
}

function renderDetailGameHeader(game) {
  return `
    <header class="rail-game-header detail-game-header" aria-label="Navigation ${escapeHtml(game.name)}">
      <a class="rail-techlab-logo" href="#/home" aria-label="Accueil TechLab" title="Accueil TechLab">
        <img src="./assets/techlab-logo.png" alt="TechLab" loading="lazy" />
      </a>
      <a class="detail-game-back" href="#/${escapeHtml(game.id)}" aria-label="Retour au cast ${escapeHtml(game.name)}" title="Retour au cast ${escapeHtml(game.name)}" style="--button-accent:${game.navAccent || '#eaff2c'};--button-accent-2:${game.navAccent2 || game.navAccent || '#18e6ff'}">
        <span class="rail-current-game-logo">${renderLogo(game, true)}</span>
      </a>
      ${renderAuthButtonMarkup()}
    </header>
  `;
}


function renderHomeAuthDock() {
  return `
    <div class="home-auth-dock" aria-label="Compte TechLab">
      ${renderAuthButtonMarkup()}
    </div>
  `;
}

function renderRailGameSwitcher(game) {
  const otherGames = games.filter((target) => target.id !== game.id).map((target) => {
    const emptyClass = target.characters.length ? '' : ' is-empty';
    return `
      <a class="rail-game-option${emptyClass}" data-game-switch-link href="#/${escapeHtml(target.id)}" title="${escapeHtml(target.label || target.logoText || target.name)}" aria-label="${escapeHtml(target.label || target.logoText || target.name)}" style="--button-accent:${target.navAccent || '#eaff2c'};--button-accent-2:${target.navAccent2 || target.navAccent || '#18e6ff'}">
        <span class="rail-game-option-logo">${renderLogo(target, true)}</span>
      </a>
    `;
  }).join('');

  return `
    <header class="rail-game-header" aria-label="Jeu actif">
      <a class="rail-techlab-logo" href="#/home" aria-label="Accueil TechLab" title="Accueil TechLab">
        <img src="./assets/techlab-logo.png" alt="TechLab" loading="lazy" />
      </a>
      <details class="rail-game-switcher">
        <summary aria-label="Changer de jeu" title="Changer de jeu">
          <span class="rail-current-game-logo">${renderLogo(game, true)}</span>
          <span class="rail-current-game-arrow" aria-hidden="true">⌄</span>
        </summary>
        <nav class="rail-game-menu" aria-label="Changer de jeu">
          ${otherGames}
        </nav>
      </details>
      ${renderAuthButtonMarkup()}
    </header>
  `;
}

function renderStageCharacterRail(game) {
  const rail = game.id === 'marvel-tokon' ? renderMarvelCharacterRail(game) : render2XkoCharacterRail(game);
  return rail.replace(/<aside([^>]*)>/, `<aside$1>${renderRailGameSwitcher(game)}`);
}


function render2XkoStageShell(game) {
  return `
    <section class="x2ko-stage" id="x2koStage" aria-label="Sélection ${escapeHtml(game.name)}">
      <div class="x2ko-stage-empty" id="x2koStageEmpty" aria-hidden="true"></div>
      <div class="x2ko-stage-grid" id="x2koStageGrid"></div>
    </section>
  `;
}

function create2XkoStageCard(game, character, index = 0, total = 1) {
  const article = document.createElement('article');
  const sideClass = total === 1 || index < Math.ceil(total / 2) ? 'is-left' : 'is-right';
  const countClass = total === 1 ? 'is-solo' : (total === 2 ? 'is-duo' : 'is-team');
  article.className = `x2ko-stage-card ${sideClass} ${countClass} is-slot-${index + 1} has-count-${total}`;
  article.dataset.game = game.id;
  article.dataset.characterSlug = character.slug;
  if (character.team) article.dataset.team = getTeamSlug(character.team);
  const teamTheme = getTeamTheme(character.team);
  if (teamTheme) {
    article.style.setProperty('--team-accent', teamTheme.accent);
    article.style.setProperty('--team-accent-2', teamTheme.accent2);
  }
  article.style.setProperty('--art-scale', character.stageArtScale || character.artScale || 1.12);
  article.style.setProperty('--art-x', character.stageArtX || character.artX || '0px');
  article.style.setProperty('--art-y', character.stageArtY || character.artY || '0px');
  article.style.setProperty('--art-fit', character.imageFit || 'contain');
  article.style.setProperty('--art-object-position', character.imagePosition || 'center bottom');

  const detailLink = document.createElement('a');
  detailLink.className = 'x2ko-stage-main-link';
  detailLink.href = `#/${game.id}/${character.slug}`;
  detailLink.setAttribute('aria-label', `Ouvrir la fiche TechLab de ${character.name}`);
  detailLink.addEventListener('click', (event) => {
    if (isStageCaptionHit(event) || isStageArtworkHit(detailLink, event)) return;
    event.preventDefault();
  });

  const artWrap = document.createElement('div');
  artWrap.className = 'x2ko-stage-art-wrap champion-art-wrap';
  const img = document.createElement('img');
  img.className = 'x2ko-stage-art champion-art';
  img.alt = character.name;
  const fallback = document.createElement('div');
  fallback.className = 'x2ko-stage-fallback champion-fallback';
  fallback.setAttribute('aria-hidden', 'true');
  artWrap.append(img, fallback);

  const caption = document.createElement('div');
  caption.className = 'x2ko-stage-caption';
  const stageMeta = game.id === 'marvel-tokon'
    ? (character.team ? `<span class="x2ko-stage-health x2ko-stage-team" aria-label="Équipe : ${escapeHtml(character.team)}">${escapeHtml(character.team)}</span>` : '')
    : (character.health ? `<span class="x2ko-stage-health" aria-label="${escapeHtml(character.name)} : ${escapeHtml(String(character.health))} PV">${escapeHtml(String(character.health))}</span>` : '');
  caption.innerHTML = `<strong>${escapeHtml(character.name)}</strong>${stageMeta}`;
  detailLink.append(artWrap, caption);

  const actions = document.createElement('div');
  actions.className = 'x2ko-stage-actions';

  const wikiLink = document.createElement('a');
  wikiLink.className = 'x2ko-stage-action x2ko-stage-wiki-link';
  wikiLink.href = getWikiPageUrl(game, character);
  wikiLink.target = '_blank';
  wikiLink.rel = 'noreferrer noopener';
  wikiLink.innerHTML = '<span class="x2ko-action-label">Wiki</span>';

  const officialUrl = getOfficialChampionUrl(game, character);
  if (game.showOfficialLinks !== false && officialUrl && officialUrl !== '#') {
    const officialLink = document.createElement('a');
    officialLink.className = 'x2ko-stage-action x2ko-stage-official-link';
    officialLink.href = officialUrl;
    officialLink.target = '_blank';
    officialLink.rel = 'noreferrer noopener';
    officialLink.innerHTML = '<span class="x2ko-action-label">Officiel</span>';
    actions.append(officialLink);
  }

  actions.append(wikiLink);
  article.append(actions, detailLink);
  const selectedStageArtUrl = get2XkoSelectedStageArtUrl(game, character);
  const stageCharacter = selectedStageArtUrl
    ? { ...character, imageUrl: selectedStageArtUrl, imageUrls: [selectedStageArtUrl] }
    : character;

  bindStageTilt(article);
  loadCharacterImage(img, fallback, stageCharacter);
  return article;
}


function update2XkoTestLayout(game, selectedCharacters) {
  const railItems = app.querySelectorAll('.character-rail-item');
  const selectedSlugs = new Set(selectedCharacters.map((character) => character.slug));
  railItems.forEach((button) => {
    const selected = selectedSlugs.has(button.dataset.characterSlug);
    button.classList.toggle('is-selected', selected);
    button.setAttribute('aria-pressed', String(selected));
  });

  const empty = app.querySelector('#x2koStageEmpty');
  const grid = app.querySelector('#x2koStageGrid');
  const stage = app.querySelector('#x2koStage');
  if (!empty || !grid) return;

  const hasSelection = selectedCharacters.length > 0;
  empty.hidden = hasSelection;
  empty.style.display = hasSelection ? 'none' : '';
  grid.innerHTML = '';
  grid.hidden = !hasSelection;
  grid.style.display = hasSelection ? '' : 'none';
  ['has-one', 'has-two', 'has-three', 'has-four'].forEach((className) => grid.classList.remove(className));
  if (hasSelection) grid.classList.add(['has-one', 'has-two', 'has-three', 'has-four'][Math.min(selectedCharacters.length, 4) - 1]);
  if (stage) {
    stage.classList.toggle('has-selection', hasSelection);
    stage.dataset.selectionCount = String(selectedCharacters.length);
  }
  selectedCharacters.forEach((character, index) => grid.appendChild(create2XkoStageCard(game, character, index, selectedCharacters.length)));
}


function getGamePageThemeTokens(game) {
  const primary = game.navAccent || '#eaff2c';
  const secondary = game.navAccent2 || primary;
  return {
    primary,
    secondary,
    panel: 'rgba(0, 16, 20, 0.72)',
  };
}

function applyGamePageTheme(game) {
  const tokens = getGamePageThemeTokens(game);
  document.body.style.setProperty('--game-page-primary', tokens.primary);
  document.body.style.setProperty('--game-page-secondary', tokens.secondary);
  document.body.style.setProperty('--game-page-panel', tokens.panel);
}

function resetPageTheme() {
  document.body.style.removeProperty('--game-page-primary');
  document.body.style.removeProperty('--game-page-secondary');
  document.body.style.removeProperty('--game-page-panel');
}

function getGamePageLayout(game) {
  const mode = STAGE_PICKER_GAME_IDS.has(game.id) ? 'stage-picker' : 'grid';
  return {
    mode,
    usesStagePicker: mode === 'stage-picker',
    railVariant: game.id === 'marvel-tokon' ? 'team' : 'default',
    workspaceClassName: mode === 'stage-picker'
      ? 'game-workspace game-workspace-2xko-test game-workspace-stage-picker game-page-layout game-page-layout-stage-picker'
      : 'game-workspace game-page-layout game-page-layout-grid',
    infoAriaLabel: mode === 'stage-picker' ? `Recherche ${game.name}` : `Infos et liens ${game.name}`,
  };
}

function renderGamePageInfoColumn(game, layout) {
  return `
    <aside class="info-column game-page-info" aria-label="${escapeHtml(layout.infoAriaLabel)}">
      ${renderSelectionBuilder(game)}
      ${renderQuickLinks(game)}
    </aside>
  `;
}

function renderGamePageRosterArea(game, layout) {
  if (layout.usesStagePicker) {
    return `
      ${renderStageCharacterRail(game)}
      ${renderGamePageInfoColumn(game, layout)}
      ${render2XkoStageShell(game)}
    `;
  }

  return `
    ${renderGamePageInfoColumn(game, layout)}
    <section class="cast-panel game-page-cast" aria-label="Personnages ${escapeHtml(game.name)}">
      <div class="champion-grid" id="championGrid"></div>
    </section>
  `;
}


function renderMobileGameDock(game) {
  const otherGames = games.filter((target) => target.id !== game.id).map((target) => {
    const emptyClass = target.characters.length ? '' : ' is-empty';
    return `
      <a class="rail-game-option${emptyClass}" data-game-switch-link href="#/${escapeHtml(target.id)}" title="${escapeHtml(target.label || target.logoText || target.name)}" aria-label="${escapeHtml(target.label || target.logoText || target.name)}" style="--button-accent:${target.navAccent || '#eaff2c'};--button-accent-2:${target.navAccent2 || target.navAccent || '#18e6ff'}">
        <span class="rail-game-option-logo">${renderLogo(target, true)}</span>
      </a>
    `;
  }).join('');

  return `
    <header class="rail-game-header mobile-bottom-dock" aria-label="Navigation mobile ${escapeHtml(game.name)}">
      <a class="rail-techlab-logo" href="#/home" aria-label="Accueil TechLab" title="Accueil TechLab">
        <img src="./assets/techlab-logo.png" alt="TechLab" loading="lazy" />
      </a>
      <details class="rail-game-switcher mobile-game-switcher">
        <summary aria-label="Changer de jeu" title="Changer de jeu">
          <span class="rail-current-game-logo">${renderLogo(game, true)}</span>
          <span class="rail-current-game-arrow" aria-hidden="true">⌄</span>
        </summary>
        <nav class="rail-game-menu" aria-label="Changer de jeu">
          ${otherGames}
        </nav>
      </details>
      ${renderAuthButtonMarkup()}
    </header>
  `;
}


function renderMobileHomeDock() {
  const gameOptions = games.map((target) => {
    const emptyClass = target.characters.length ? '' : ' is-empty';
    return `
      <a class="rail-game-option${emptyClass}" data-game-switch-link href="#/${escapeHtml(target.id)}" title="${escapeHtml(target.label || target.logoText || target.name)}" aria-label="${escapeHtml(target.label || target.logoText || target.name)}" style="--button-accent:${target.navAccent || '#eaff2c'};--button-accent-2:${target.navAccent2 || target.navAccent || '#18e6ff'}">
        <span class="rail-game-option-logo">${renderLogo(target, true)}</span>
      </a>
    `;
  }).join('');

  return `
    <header class="rail-game-header mobile-bottom-dock mobile-home-dock" aria-label="Navigation mobile TechLab">
      <a class="rail-techlab-logo" href="#/home" aria-label="Accueil TechLab" title="Accueil TechLab">
        <img src="./assets/techlab-logo.png" alt="TechLab" loading="lazy" />
      </a>
      <details class="rail-game-switcher mobile-game-switcher mobile-home-game-switcher">
        <summary aria-label="Choisir un jeu" title="Choisir un jeu">
          <span class="rail-current-game-logo mobile-home-switcher-label">Jeux</span>
          <span class="rail-current-game-arrow" aria-hidden="true">⌄</span>
        </summary>
        <nav class="rail-game-menu" aria-label="Choisir un jeu">
          ${gameOptions}
        </nav>
      </details>
      ${renderAuthButtonMarkup()}
    </header>
  `;
}

function renderMobileCharacterButton(game, character) {
  const disabledAttr = character.isPlaceholder ? ' disabled aria-disabled="true"' : '';
  const placeholderClass = character.isPlaceholder ? ' is-placeholder' : '';
  const railArtUrl = getCharacterRailArtUrl(game, character);
  const art = railArtUrl
    ? `<img class="mobile-character-strip-art" src="${escapeHtml(railArtUrl)}" alt="" loading="lazy" />`
    : `<span class="mobile-character-strip-fallback" aria-hidden="true">${escapeHtml(character.name.slice(0, 2).toUpperCase())}</span>`;
  return `
    <button class="mobile-character-strip-item${placeholderClass}" type="button" data-character-slug="${escapeHtml(character.slug)}" aria-pressed="false" title="${escapeHtml(character.name)}"${disabledAttr}>
      ${art}
      <span>${getCharacterRailNameMarkup(game, character)}</span>
    </button>
  `;
}

function renderMobileGameLayer(game) {
  if (!game.characters.length) return '';
  const characters = game.id === '2xko' ? get2XkoCharactersSorted(game) : game.characters;
  return `
    <section class="mobile-game-layer" aria-label="Interface mobile ${escapeHtml(game.name)}" style="--mobile-page-bg: url('${escapeHtml(getGamePageBackgroundUrl(game))}')">
      <div class="mobile-game-main" id="mobileGameMain">
        <div class="mobile-game-hero" id="mobileGameHero" aria-live="polite"></div>
      </div>

      <div class="mobile-twitter-strip" aria-label="Requêtes X mobiles">
        <div class="mobile-twitter-card mobile-twitter-card-simple">
          <span>Simple</span>
          <code id="mobileSimpleQuery"></code>
          <a id="mobileSimpleLink" href="#" target="_blank" rel="noreferrer noopener" aria-label="Ouvrir la recherche simple sur X">${X_ICON}</a>
          <button id="mobileCopySimple" type="button" aria-label="Copier la recherche simple">${COPY_ICON}</button>
        </div>
        <div class="mobile-twitter-card mobile-twitter-card-filtered">
          <span>Filtrée</span>
          <code id="mobileFilteredQuery"></code>
          <a id="mobileFilteredLink" href="#" target="_blank" rel="noreferrer noopener" aria-label="Ouvrir la recherche filtrée sur X">${X_ICON}</a>
          <button id="mobileCopyFiltered" type="button" aria-label="Copier la recherche filtrée">${COPY_ICON}</button>
        </div>
      </div>

      <details class="mobile-links-drawer">
        <summary>Liens</summary>
        <div class="mobile-links-drawer-panel">
          ${renderQuickLinks(game)}
        </div>
      </details>

      <nav class="mobile-character-strip" id="mobileCharacterStrip" aria-label="Personnages ${escapeHtml(game.name)}">
        ${characters.map((character) => renderMobileCharacterButton(game, character)).join('')}
      </nav>

      ${renderMobileGameDock(game)}
    </section>
  `;
}

function renderMobileGameHero(game, selectedCharacters) {
  if (!selectedCharacters.length) {
    return `
      <div class="mobile-game-hero-empty">
        <strong>${escapeHtml(game.name)}</strong>
        <span>Sélectionne un personnage dans la barre du bas.</span>
      </div>
    `;
  }

  const character = selectedCharacters[selectedCharacters.length - 1];
  const health = character.health ? `<span class="mobile-game-hero-health">${escapeHtml(String(character.health))}</span>` : '';
  const team = game.id === 'marvel-tokon' && character.team ? `<span class="mobile-game-hero-team">${escapeHtml(character.team)}</span>` : '';
  const artUrl = get2XkoSelectedStageArtUrl(game, character) || getCharacterRailArtUrl(game, character) || character.imageUrl || '';
  const twitterTag = getTwitterTag(game, character);
  return `
    <a class="mobile-game-hero-link" href="#/${escapeHtml(game.id)}/${escapeHtml(character.slug)}" aria-label="Ouvrir la fiche de ${escapeHtml(character.name)}">
      <div class="mobile-game-hero-hud">
        <strong>${escapeHtml(character.name)}</strong>
        ${health || team}
      </div>
      <div class="mobile-game-hero-art-wrap">
        ${artUrl ? `<img class="mobile-game-hero-art" src="${escapeHtml(artUrl)}" alt="${escapeHtml(character.name)}" loading="lazy" />` : ''}
      </div>
    </a>
  `;
}

function updateMobileGameUi(game, selectedCharacters, simpleQuery, filteredQuery) {
  const hero = app.querySelector('#mobileGameHero');
  if (hero) hero.innerHTML = renderMobileGameHero(game, selectedCharacters);

  app.querySelectorAll('.mobile-character-strip-item').forEach((button) => {
    const isSelected = selectedCharacters.some((character) => character.slug === button.dataset.characterSlug);
    button.classList.toggle('is-selected', isSelected);
    button.setAttribute('aria-pressed', String(isSelected));
  });

  const mobileSimpleQuery = app.querySelector('#mobileSimpleQuery');
  const mobileFilteredQuery = app.querySelector('#mobileFilteredQuery');
  const mobileSimpleLink = app.querySelector('#mobileSimpleLink');
  const mobileFilteredLink = app.querySelector('#mobileFilteredLink');
  const mobileCopySimple = app.querySelector('#mobileCopySimple');
  const mobileCopyFiltered = app.querySelector('#mobileCopyFiltered');

  if (mobileSimpleQuery) mobileSimpleQuery.textContent = simpleQuery || '';
  if (mobileFilteredQuery) mobileFilteredQuery.textContent = filteredQuery || '';
  if (mobileSimpleLink) {
    mobileSimpleLink.href = simpleQuery ? getTwitterSearchUrl(simpleQuery) : '#';
    mobileSimpleLink.classList.toggle('is-disabled', !simpleQuery);
  }
  if (mobileFilteredLink) {
    mobileFilteredLink.href = filteredQuery ? getTwitterSearchUrl(filteredQuery) : '#';
    mobileFilteredLink.classList.toggle('is-disabled', !filteredQuery);
  }
  if (mobileCopySimple) mobileCopySimple.disabled = !simpleQuery;
  if (mobileCopyFiltered) mobileCopyFiltered.disabled = !filteredQuery;
}

function bindMobileGameInteractions(game) {
  const mobileStrip = app.querySelector('#mobileCharacterStrip');
  if (mobileStrip) {
    mobileStrip.addEventListener('click', (event) => {
      const button = event.target.closest('.mobile-character-strip-item');
      if (!button || !mobileStrip.contains(button) || button.disabled) return;
      event.preventDefault();
      event.stopPropagation();
      const character = getCharacter(game, button.dataset.characterSlug);
      if (character) toggleCharacterSelection(game, character);
    });
  }

  [[app.querySelector('#mobileCopySimple'), 'simple'], [app.querySelector('#mobileCopyFiltered'), 'filtered']].forEach(([button, mode]) => {
    if (!button) return;
    button.addEventListener('click', async () => {
      const query = getTwitterQueryForSelection(game, mode);
      if (!query) return;
      await navigator.clipboard.writeText(query);
      button.classList.add('is-copied');
      window.setTimeout(() => button.classList.remove('is-copied'), 900);
    });
  });
}


function renderMobileDetailDock(game) {
  return renderMobileGameDock(game).replace('mobile-bottom-dock', 'mobile-bottom-dock mobile-detail-dock');
}

function renderMobileDetailTabs() {
  return `
    <nav class="mobile-detail-tabs" aria-label="Sections fiche personnage">
      <button type="button" class="mobile-detail-tab is-active" data-mobile-detail-tab="notes">Notes</button>
      <button type="button" class="mobile-detail-tab" data-mobile-detail-tab="combos">Combos</button>
      <button type="button" class="mobile-detail-tab" data-mobile-detail-tab="links">Liens</button>
    </nav>
  `;
}

function bindMobileDetailTabs() {
  const tabs = app.querySelectorAll('.mobile-detail-tab');
  if (!tabs.length) return;
  const setTab = (tab) => {
    const nextTab = ['notes', 'combos', 'links'].includes(tab) ? tab : 'notes';
    if (nextTab !== 'combos') {
      const openBuilder = app.querySelector('#comboBuilderShell');
      if (openBuilder) {
        openBuilder.classList.remove('is-open');
        openBuilder.hidden = true;
      }
      delete document.body.dataset.comboBuilderOpen;
    }
    document.body.dataset.mobileDetailTab = nextTab;
    tabs.forEach((button) => button.classList.toggle('is-active', button.dataset.mobileDetailTab === nextTab));
  };
  tabs.forEach((button) => button.addEventListener('click', () => setTab(button.dataset.mobileDetailTab)));
  setTab(document.body.dataset.mobileDetailTab || 'notes');
}

function renderGamePageShell(game) {
  const layout = getGamePageLayout(game);
  return `
    ${renderGameHeader(game)}
    <div class="${layout.workspaceClassName}" data-game-page-layout="${layout.mode}" data-game-page-rail="${layout.railVariant}">
      ${renderGamePageRosterArea(game, layout)}
    </div>
    ${renderMobileGameLayer(game)}
  `;
}

function bindGameSwitcherLinks(game) {
  app.querySelectorAll('[data-game-switch-link]').forEach((link) => {
    link.addEventListener('click', () => {
      const targetGameId = getGameIdFromHashHref(link.getAttribute('href'));
      clearAllSelections();

      if (targetGameId === game.id) {
        link.closest('.rail-game-switcher')?.removeAttribute('open');
        window.requestAnimationFrame(() => updateSelectionUi(game));
      }
    });
  });
}

function renderEmptyGameState(game) {
  const grid = app.querySelector('#championGrid');
  if (!grid) return;
  grid.innerHTML = `
    <div class="empty-state">
      <h2>Pas encore rempli.</h2>
      <p>${game.description || 'On garde la place pour ce jeu, mais on se concentre d’abord sur 2XKO.'}</p>
    </div>
  `;
}

function bindGamePageRoster(game, layout) {
  if (!game.characters.length) {
    renderEmptyGameState(game);
    return;
  }

  if (layout.usesStagePicker) {
    app.querySelectorAll('.character-rail-item').forEach((button) => {
      button.addEventListener('click', () => {
        const character = getCharacter(game, button.dataset.characterSlug);
        if (character) toggleCharacterSelection(game, character);
      });
    });
    return;
  }

  const grid = app.querySelector('#championGrid');
  renderCharacterGroups(game, grid);
}

function bindGamePageQueryActions(game) {
  [[app.querySelector('#copySimple'), 'simple'], [app.querySelector('#copyFiltered'), 'filtered']].forEach(([button, mode]) => {
    if (!button) return;
    button.addEventListener('click', async () => {
      const query = getTwitterQueryForSelection(game, mode);
      if (!query) return;
      await navigator.clipboard.writeText(query);
      button.classList.add('is-copied');
      button.setAttribute('aria-label', 'Requête copiée');
      window.setTimeout(() => {
        button.classList.remove('is-copied');
        button.setAttribute('aria-label', mode === 'simple' ? 'Copier la requête simple' : 'Copier la requête filtrée');
      }, 900);
    });
  });

  [app.querySelector('#resetSimple'), app.querySelector('#resetFiltered')].forEach((button) => {
    if (!button) return;
    button.addEventListener('click', () => {
      setSelectedCharacters(game, []);
    });
  });

  const supportSelect = app.querySelector('#supportSelect');
  if (supportSelect) {
    supportSelect.addEventListener('change', () => setSelectedSupport(game, supportSelect.value));
  }
}

function renderGamePage(game) {
  document.body.dataset.game = game.id;
  document.body.dataset.theme = game.theme || game.id;
  document.body.dataset.page = 'game';
  delete document.body.dataset.mobileDetailTab;
  delete document.body.dataset.comboBuilderOpen;
  delete document.body.dataset.character;
  delete document.body.dataset.actualGame;
  document.body.classList.remove('has-x2ko-fantasy-bg', 'has-modern-detail-bg', 'has-marvel-detail-bg');
  document.body.style.removeProperty('--x2ko-detail-bg');
  document.body.style.removeProperty('--modern-detail-bg');
  document.body.style.removeProperty('--game-mobile-bg');
  applyGamePageTheme(game);
  const gamePageBackgroundUrl = getGamePageBackgroundUrl(game);
  if (gamePageBackgroundUrl) {
    document.body.style.setProperty('--game-mobile-bg', `url('${gamePageBackgroundUrl}')`);
  } else {
    document.body.style.removeProperty('--game-mobile-bg');
  }

  const layout = getGamePageLayout(game);
  app.innerHTML = renderGamePageShell(game);

  bindGameSwitcherLinks(game);
  bindGamePageRoster(game, layout);
  bindGamePageQueryActions(game);
  bindMobileGameInteractions(game);
  updateSelectionUi(game);
}



const PERSONAL_DATA_KEY = 'techlab-personal-lab-v1';

function escapeHtml(value) {
  return String(value ?? '')
    .replaceAll('&', '&amp;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;')
    .replaceAll('"', '&quot;')
    .replaceAll("'", '&#039;');
}

function normalizeComboPosition(value) {
  const raw = String(value || '').trim().toUpperCase();
  if (!raw) return '';
  if (raw === 'ANYWHERE' || raw === 'FULL SCREEN' || raw === 'FULL-SCREEN') return 'FULLSCREEN';
  if (raw === 'MID-SCREEN' || raw === 'MID SCREEN') return 'MIDSCREEN';
  if (raw === 'CORNER') return 'CORNER';
  return raw;
}

function normalizePersonalCombos(value) {
  const normalizeCombo = (combo) => {
    const tokens = Array.isArray(combo.tokens)
      ? combo.tokens
      : getComboTokensFromText(combo.notation || '');
    if (!tokens.length) return null;
    return {
      id: combo.id || `${Date.now()}-${Math.random().toString(16).slice(2)}`,
      name: combo.name || '',
      tokens,
      notation: combo.notation || serializeComboTokens(tokens),
      starterTokens: Array.isArray(combo.starterTokens) ? combo.starterTokens : getComboTokensFromText(combo.starterNotation || ''),
      starterNotation: combo.starterNotation || serializeComboTokens(Array.isArray(combo.starterTokens) ? combo.starterTokens : getComboTokensFromText(combo.starterNotation || '')),
      position: normalizeComboPosition(combo.position),
      tags: (Array.isArray(combo.tags) ? combo.tags : []).filter((tag) => String(tag || '').toUpperCase() !== 'FURY'),
      meterCost: normalizeComboMeterCostValues(combo).find((value) => COMBO_NUMERIC_METER_OPTIONS.includes(value)) || (normalizeComboMeterCostValues(combo).includes('FURY') ? 'FURY' : ''),
      meterCosts: normalizeComboMeterCostValues(combo),
      fuse: combo.fuse || '',
      assist: combo.assist || '',
      assistSlug: combo.assistSlug || '',
      damage: combo.damage || '',
      media: combo.media || null,
      createdAt: combo.createdAt || new Date().toISOString(),
      updatedAt: combo.updatedAt || combo.createdAt || new Date().toISOString(),
    };
  };

  if (Array.isArray(value)) {
    return value.map(normalizeCombo).filter(Boolean);
  }

  if (typeof value === 'string' && value.trim()) {
    return [{
      id: `legacy-${Date.now()}`,
      name: 'Combo importé',
      tokens: getComboTokensFromText(value),
      notation: value.trim(),
      starterTokens: [],
      starterNotation: '',
      position: '',
      tags: [],
      meterCost: '',
      fuse: '',
      assist: '',
      media: null,
      createdAt: new Date().toISOString(),
    }];
  }

  return [];
}

function getPersonalRecord(game, character) {
  return normalizePersonalRecord(getCachedPersonalRecord(game, character) || {});
}

function savePersonalRecord(game, character, record) {
  if (!canUseCloudPersonalData()) {
    setPersonalStatus('Connecte-toi pour sauvegarder');
    return false;
  }

  const normalized = normalizePersonalRecord(record);
  setCachedPersonalRecord(game, character, normalized);
  queueCloudPersonalRecordSave(game, character, normalized);
  return true;
}

function getUrlHostname(url) {
  try {
    return new URL(url).hostname.replace(/^www\./, '');
  } catch {
    return '';
  }
}

function getYouTubeId(url) {
  try {
    const parsed = new URL(url);
    const host = parsed.hostname.replace(/^www\./, '');
    if (host === 'youtu.be') return parsed.pathname.split('/').filter(Boolean)[0] || '';
    if (host.endsWith('youtube.com')) {
      if (parsed.pathname.startsWith('/shorts/')) return parsed.pathname.split('/').filter(Boolean)[1] || '';
      if (parsed.pathname.startsWith('/embed/')) return parsed.pathname.split('/').filter(Boolean)[1] || '';
      return parsed.searchParams.get('v') || '';
    }
  } catch {}
  return '';
}

function getPersonalLinkType(url) {
  const host = getUrlHostname(url);
  if (host.includes('youtube.com') || host === 'youtu.be') return 'youtube';
  if (host === 'x.com' || host === 'twitter.com' || host.endsWith('.x.com') || host.endsWith('.twitter.com')) return 'x';
  return 'link';
}

function normalizePersonalUrl(url) {
  const trimmed = String(url || '').trim();
  if (!trimmed) return '';
  if (/^https?:\/\//i.test(trimmed)) return trimmed;
  return `https://${trimmed}`;
}

function getXPostLabel(url) {
  try {
    const parsed = new URL(url);
    const parts = parsed.pathname.split('/').filter(Boolean);
    const statusIndex = parts.findIndex((part) => part === 'status' || part === 'statuses');
    if (statusIndex > 0 && parts[statusIndex - 1]) return `Post X de @${parts[statusIndex - 1]}`;
    if (parts[0]) return `Profil / lien @${parts[0]}`;
  } catch {}
  return 'Lien X';
}

async function fetchYouTubeMetadata(url) {
  try {
    const endpoint = `https://www.youtube.com/oembed?format=json&url=${encodeURIComponent(url)}`;
    const response = await fetch(endpoint, { mode: 'cors' });
    if (!response.ok) throw new Error(`YouTube oEmbed ${response.status}`);
    const data = await response.json();
    return {
      title: data.title || '',
      author: data.author_name || '',
      thumbnailUrl: data.thumbnail_url || '',
    };
  } catch (error) {
    console.warn('YouTube metadata fallback:', error);
    return {};
  }
}

async function buildPersonalLink(url, existingId = '') {
  const type = getPersonalLinkType(url);
  const youtubeId = type === 'youtube' ? getYouTubeId(url) : '';
  const meta = youtubeId ? await fetchYouTubeMetadata(url) : {};
  return {
    id: existingId || `${Date.now()}-${Math.random().toString(16).slice(2)}`,
    title: meta.title || (type === 'x' ? getXPostLabel(url) : getUrlHostname(url) || url),
    author: meta.author || '',
    thumbnailUrl: meta.thumbnailUrl || '',
    url,
    type,
    updatedAt: new Date().toISOString(),
  };
}

let twitterWidgetsTimer = 0;

function loadTwitterWidgets() {
  if (!document.querySelector('.twitter-tweet')) return;

  const run = () => {
    const load = () => {
      if (window.twttr?.widgets?.load) window.twttr.widgets.load(app);
    };
    if (window.twttr?.widgets?.load) {
      load();
      return;
    }
    if (document.querySelector('script[data-techlab-twitter-widget]')) return;
    const script = document.createElement('script');
    script.src = 'https://platform.twitter.com/widgets.js';
    script.async = true;
    script.charset = 'utf-8';
    script.dataset.techlabTwitterWidget = 'true';
    script.onload = load;
    document.head.appendChild(script);
  };

  window.clearTimeout(twitterWidgetsTimer);
  twitterWidgetsTimer = window.setTimeout(() => {
    if ('requestIdleCallback' in window) {
      window.requestIdleCallback(run, { timeout: 1200 });
    } else {
      run();
    }
  }, 180);
}

function createPersonalLinkPreview(link) {
  const safeUrl = escapeHtml(link.url);
  const safeTitle = escapeHtml(link.title || link.url);
  const type = link.type || getPersonalLinkType(link.url);
  const host = escapeHtml(getUrlHostname(link.url) || 'Lien');
  const youtubeId = type === 'youtube' ? getYouTubeId(link.url) : '';

  if (youtubeId) {
    const thumbnail = escapeHtml(link.thumbnailUrl || `https://img.youtube.com/vi/${youtubeId}/hqdefault.jpg`);
    const safeAuthor = escapeHtml(link.author || host);
    return `
      <div class="personal-preview personal-preview-youtube">
        <button class="personal-youtube-play" type="button" data-youtube-id="${escapeHtml(youtubeId)}" aria-label="Lire la vidéo ${safeTitle}">
          <img src="${thumbnail}" alt="" loading="lazy" draggable="false" />
          <span class="personal-youtube-play-icon" aria-hidden="true">▶</span>
        </button>
        <div class="personal-preview-meta">
          <a class="personal-preview-title" href="${safeUrl}" target="_blank" rel="noreferrer noopener">${safeTitle}</a>
          <small>${safeAuthor}</small>
        </div>
      </div>
    `;
  }

  if (type === 'x') {
    return `
      <div class="personal-preview personal-preview-x">
        <blockquote class="twitter-tweet" data-theme="dark" data-dnt="true">
          <a href="${safeUrl}"></a>
        </blockquote>
      </div>
    `;
  }

  const rawHost = getUrlHostname(link.url) || 'Lien';
  const rawTitle = String(link.title || '').trim();
  const displayTitle = rawTitle && rawTitle.toLowerCase() !== rawHost.toLowerCase() ? rawTitle : rawHost;
  const faviconUrl = `https://www.google.com/s2/favicons?domain=${encodeURIComponent(rawHost)}&sz=64`;

  return `
    <a class="personal-preview personal-preview-link personal-preview-compact" href="${safeUrl}" target="_blank" rel="noreferrer noopener" draggable="false">
      <span class="personal-preview-icon personal-preview-favicon" aria-hidden="true">
        <img src="${escapeHtml(faviconUrl)}" alt="" loading="lazy" draggable="false" />
      </span>
      <span class="personal-preview-text">
        <strong>${escapeHtml(displayTitle)}</strong>
        <small>${safeUrl}</small>
      </span>
    </a>
  `;
}

function renderPersonalLinksList(links) {
  if (!links.length) {
    return '<div class="personal-empty">Aucun lien ajouté pour l’instant.</div>';
  }

  return links.map((link) => {
    const type = link.type || getPersonalLinkType(link.url);
    return `
      <article class="personal-link-item personal-link-item-${escapeHtml(type)}" data-link-id="${escapeHtml(link.id)}" data-link-type="${escapeHtml(type)}" draggable="false">
        <button class="personal-delete-link" type="button" aria-label="Supprimer ce lien" title="Supprimer">×</button>
        ${createPersonalLinkPreview(link)}
      </article>
    `;
  }).join('');
}

function setPersonalStatus(message) {
  const status = app.querySelector('#personalSaveStatus');
  if (!status) return;
  status.textContent = message;
  status.hidden = !message;
  if (message) window.setTimeout(() => { status.hidden = true; }, 1400);
}

function renderPersonalNotesPanel(record) {
  const notes = escapeHtml(record.notes || '');
  const locked = !canUseCloudPersonalData();
  const lockAttrs = locked ? ' disabled aria-disabled="true"' : '';
  const placeholder = locked ? 'Connecte-toi pour enregistrer tes notes…' : 'Notes perso, matchups, idées, rappels…';
  return `
    <section class="personal-panel personal-notes-panel${locked ? ' is-locked' : ''}">
      <div class="personal-panel-header">
        <span>Notes</span>
        <small id="personalSaveStatus" hidden></small>
      </div>
      <textarea id="personalNotes" class="personal-textarea" rows="10" placeholder="${escapeHtml(placeholder)}"${lockAttrs}>${notes}</textarea>
    </section>
  `;
}


const COMBO_ICON_SVG = {
  "↖": "<svg fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 32 32\" class=\"combo-svg\"><path d=\"M8.92892 24.4855L14.2322 19.1822L23.0711 28.021L28.0208 23.0713L19.182 14.2324L24.4853 8.92912L21.7176 6.16146L6.16126 6.16146L6.16126 21.7178L8.92892 24.4855Z\" fill=\"#F1F2F1\" stroke=\"black\" stroke-width=\"2\"></path></svg>",
  "↑": "<svg fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 33 32\" class=\"combo-svg\"><path d=\"M27.5 17H20V29.5H13V17H5.5V13.0859L16.5 2.08594L27.5 13.0859V17Z\" fill=\"#F1F2F1\" stroke=\"black\" stroke-width=\"2\"></path></svg>",
  "↗": "<svg fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 32 32\" class=\"combo-svg\"><path d=\"M7.51477 8.92868L12.8181 14.232L3.97924 23.0708L8.92899 28.0206L17.7678 19.1817L23.0711 24.485L25.8388 21.7174L25.8388 6.16102L10.2824 6.16102L7.51477 8.92868Z\" fill=\"#F1F2F1\" stroke=\"black\" stroke-width=\"2\"></path></svg>",
  "←": "<svg fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 33 32\" class=\"combo-svg\"><path d=\"M17.5 5V12.5H30V19.5H17.5V27H13.5859L2.58594 16L13.5859 5H17.5Z\" fill=\"#F1F2F1\" stroke=\"black\" stroke-width=\"2\"></path></svg>",
  "→": "<svg fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 33 32\" class=\"combo-svg\"><path d=\"M15.5 5V12.5H3V19.5H15.5V27H19.4141L30.4141 16L19.4141 5H15.5Z\" fill=\"#F1F2F1\" stroke=\"black\" stroke-width=\"2\"></path></svg>",
  "↙": "<svg fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 32 32\" class=\"combo-svg\"><path d=\"M24.4852 23.0713L19.1819 17.768L28.0208 8.92919L23.071 3.97944L14.2322 12.8183L8.92888 7.51497L6.16122 10.2826V25.839H21.7176L24.4852 23.0713Z\" fill=\"#F1F2F1\" stroke=\"black\" stroke-width=\"2\"></path></svg>",
  "↓": "<svg fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 33 32\" class=\"combo-svg\"><path d=\"M27.5 15H20V2.5H13V15H5.5V18.9141L16.5 29.9141L27.5 18.9141V15Z\" fill=\"#F1F2F1\" stroke=\"black\" stroke-width=\"2\"></path></svg>",
  "↘": "<svg fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 33 32\" class=\"combo-svg\"><path d=\"M23.5709 7.51405L18.2676 12.8173L9.42875 3.97852L4.479 8.92827L13.3178 17.7671L8.01454 23.0704L10.7822 25.838H26.3385V10.2817L23.5709 7.51405Z\" fill=\"#F1F2F1\" stroke=\"black\" stroke-width=\"2\"></path></svg>",
  "L": "<svg fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 33 32\" class=\"combo-svg\"><g clip-path=\"url(#clip0_3204_77594)\"><mask id=\"mask0_3204_77594\" style=\"mask-type:luminance\" maskUnits=\"userSpaceOnUse\" x=\"0\" y=\"0\" width=\"33\" height=\"32\"><path d=\"M32.5 0H0.5V32H32.5V0Z\" fill=\"white\"></path></mask><g mask=\"url(#mask0_3204_77594)\"><path d=\"M16.5 31C24.7843 31 31.5 24.2843 31.5 16C31.5 7.71573 24.7843 1 16.5 1C8.21573 1 1.5 7.71573 1.5 16C1.5 24.2843 8.21573 31 16.5 31Z\" fill=\"#D4A8FF\" stroke=\"black\" stroke-width=\"2\"></path><path d=\"M11.9072 20.996V11H15.1272V18.476H21.9592V20.996H11.9072Z\" fill=\"black\"></path></g></g><defs><clipPath id=\"clip0_3204_77594\"><rect width=\"32\" height=\"32\" fill=\"white\" transform=\"translate(0.5)\"></rect></clipPath></defs></svg>",
  "M": "<svg fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 33 32\" class=\"combo-svg\"><g clip-path=\"url(#clip0_3204_77610)\"><mask id=\"mask0_3204_77610\" style=\"mask-type:luminance\" maskUnits=\"userSpaceOnUse\" x=\"0\" y=\"0\" width=\"33\" height=\"32\"><path d=\"M32.5 0H0.5V32H32.5V0Z\" fill=\"white\"></path></mask><g mask=\"url(#mask0_3204_77610)\"><path d=\"M16.5 31C24.7843 31 31.5 24.2843 31.5 16C31.5 7.71573 24.7843 1 16.5 1C8.21573 1 1.5 7.71573 1.5 16C1.5 24.2843 8.21573 31 16.5 31Z\" fill=\"#BB74FF\" stroke=\"black\" stroke-width=\"2\"></path><path d=\"M23.682 20.996H20.462V14.038H20.378L17.802 20.996H15.254L12.65 13.926H12.566V20.996H9.5V11H14.582L16.5 16.838H16.584L18.474 11H23.682V20.996Z\" fill=\"black\"></path></g></g><defs><clipPath id=\"clip0_3204_77610\"><rect width=\"32\" height=\"32\" fill=\"white\" transform=\"translate(0.5)\"></rect></clipPath></defs></svg>",
  "H": "<svg fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 33 32\" class=\"combo-svg\"><g clip-path=\"url(#clip0_3204_77587)\"><mask id=\"mask0_3204_77587\" style=\"mask-type:luminance\" maskUnits=\"userSpaceOnUse\" x=\"0\" y=\"0\" width=\"33\" height=\"32\"><path d=\"M32.5 0H0.5V32H32.5V0Z\" fill=\"white\"></path></mask><g mask=\"url(#mask0_3204_77587)\"><path d=\"M16.5 31C24.7843 31 31.5 24.2843 31.5 16C31.5 7.71573 24.7843 1 16.5 1C8.21573 1 1.5 7.71573 1.5 16C1.5 24.2843 8.21573 31 16.5 31Z\" fill=\"#9125F9\" stroke=\"black\" stroke-width=\"2\"></path><path d=\"M22.05 11V20.996H18.83V17.146L13.72 17.16V20.996H10.5V11H13.72V14.626H18.83V11H22.05Z\" fill=\"black\"></path></g></g><defs><clipPath id=\"clip0_3204_77587\"><rect width=\"32\" height=\"32\" fill=\"white\" transform=\"translate(0.5)\"></rect></clipPath></defs></svg>",
  "T": "<svg fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 33 32\" class=\"combo-svg\"><g clip-path=\"url(#clip0_3204_77627)\"><mask id=\"mask0_3204_77627\" style=\"mask-type:luminance\" maskUnits=\"userSpaceOnUse\" x=\"0\" y=\"0\" width=\"33\" height=\"32\"><path d=\"M32.5 0H0.5V32H32.5V0Z\" fill=\"white\"></path></mask><g mask=\"url(#mask0_3204_77627)\"><path d=\"M16.5 31C24.7843 31 31.5 24.2843 31.5 16C31.5 7.71573 24.7843 1 16.5 1C8.21573 1 1.5 7.71573 1.5 16C1.5 24.2843 8.21573 31 16.5 31Z\" fill=\"#CDF564\" stroke=\"black\" stroke-width=\"2\"></path><path d=\"M21.794 14.048H18.014V21.496H14.794V14.048H11V11.5H21.794V14.048Z\" fill=\"black\"></path></g></g><defs><clipPath id=\"clip0_3204_77627\"><rect width=\"32\" height=\"32\" fill=\"white\" transform=\"translate(0.5)\"></rect></clipPath></defs></svg>",
  "S1": "<svg fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 33 32\" class=\"combo-svg\"><g clip-path=\"url(#clip0_3204_77617)\"><mask id=\"mask0_3204_77617\" style=\"mask-type:luminance\" maskUnits=\"userSpaceOnUse\" x=\"0\" y=\"0\" width=\"33\" height=\"32\"><path d=\"M32.5 0H0.5V32H32.5V0Z\" fill=\"white\"></path></mask><g mask=\"url(#mask0_3204_77617)\"><path d=\"M16.5 31C24.7843 31 31.5 24.2843 31.5 16C31.5 7.71573 24.7843 1 16.5 1C8.21573 1 1.5 7.71573 1.5 16C1.5 24.2843 8.21573 31 16.5 31Z\" fill=\"#3EC5FF\" stroke=\"black\" stroke-width=\"2\"></path><path d=\"M14.4246 14.4262C14.392 14.0876 14.2167 13.8475 13.8986 13.7058C13.5805 13.5562 13.1319 13.4813 12.5528 13.4813C11.4843 13.4813 10.9501 13.7136 10.9501 14.1782C10.9501 14.375 11.0276 14.5207 11.1825 14.6152C11.3457 14.7097 11.6026 14.7766 11.9533 14.816L14.9997 15.1585C15.9784 15.2609 16.7125 15.5207 17.2018 15.938C17.6994 16.3475 17.9481 16.9538 17.9481 17.7569C17.9481 18.5128 17.7401 19.0995 17.3242 19.5168C16.9164 19.9341 16.3332 20.2215 15.5747 20.379C14.8161 20.5365 13.8496 20.6152 12.6751 20.6152C11.5577 20.6152 10.632 20.5286 9.89793 20.3554C9.16387 20.19 8.58886 19.8829 8.17289 19.4341C7.75692 18.9774 7.53262 18.3396 7.5 17.5207H10.7299C10.7625 17.9853 10.946 18.3002 11.2804 18.4656C11.623 18.6231 12.1246 18.7018 12.7852 18.7018C13.4133 18.7018 13.8741 18.6388 14.1677 18.5128C14.4613 18.3869 14.6082 18.1979 14.6082 17.9459C14.6082 17.7097 14.5062 17.5365 14.3023 17.4262C14.1065 17.316 13.817 17.2373 13.4337 17.19L10.7054 16.8593C9.71849 16.7491 8.9722 16.4971 8.46651 16.1034C7.96898 15.7097 7.72022 15.1231 7.72022 14.3436C7.71206 13.3357 8.13619 12.631 8.99259 12.2294C9.85715 11.8199 11.0724 11.6152 12.6384 11.6152C14.1963 11.6152 15.4075 11.8239 16.272 12.2412C17.1366 12.6506 17.5933 13.379 17.6423 14.4262H14.4246Z\" fill=\"black\"></path><path d=\"M24.5 20.3322H21.6494V15.4779H19.019V13.659H19.7164C20.4423 13.659 20.9806 13.5252 21.3313 13.2574C21.6902 12.9818 21.943 12.5842 22.0898 12.0645H24.5V20.3322Z\" fill=\"black\"></path></g></g><defs><clipPath id=\"clip0_3204_77617\"><rect width=\"32\" height=\"32\" fill=\"white\" transform=\"translate(0.5)\"></rect></clipPath></defs></svg>",
  "S2": "<svg fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 33 32\" class=\"combo-svg\"><g clip-path=\"url(#clip0_3204_77634)\"><mask id=\"mask0_3204_77634\" style=\"mask-type:luminance\" maskUnits=\"userSpaceOnUse\" x=\"0\" y=\"0\" width=\"33\" height=\"32\"><path d=\"M32.5 0H0.5V32H32.5V0Z\" fill=\"white\"></path></mask><g mask=\"url(#mask0_3204_77634)\"><path d=\"M16.5 31C24.7843 31 31.5 24.2843 31.5 16C31.5 7.71573 24.7843 1 16.5 1C8.21573 1 1.5 7.71573 1.5 16C1.5 24.2843 8.21573 31 16.5 31Z\" fill=\"#FF4646\" stroke=\"black\" stroke-width=\"2\"></path><path d=\"M12.7977 14.311C12.7657 13.9724 12.5935 13.7323 12.2813 13.5906C11.969 13.4409 11.5286 13.3661 10.9602 13.3661C9.91128 13.3661 9.38684 13.5984 9.38684 14.063C9.38684 14.2598 9.46291 14.4055 9.61504 14.5C9.77517 14.5945 10.0274 14.6614 10.3717 14.7008L13.3622 15.0433C14.323 15.1457 15.0436 15.4055 15.524 15.8228C16.0124 16.2323 16.2566 16.8386 16.2566 17.6417C16.2566 18.3976 16.0524 18.9843 15.6441 19.4016C15.2438 19.8189 14.6713 20.1063 13.9267 20.2638C13.182 20.4213 12.2332 20.5 11.0803 20.5C9.98334 20.5 9.07458 20.4134 8.35398 20.2402C7.63337 20.0748 7.0689 19.7677 6.66055 19.3189C6.25221 18.8622 6.03203 18.2244 6 17.4055H9.17066C9.20269 17.8701 9.38284 18.185 9.71112 18.3504C10.0474 18.5079 10.5398 18.5866 11.1884 18.5866C11.8049 18.5866 12.2573 18.5236 12.5455 18.3976C12.8337 18.2717 12.9779 18.0827 12.9779 17.8307C12.9779 17.5945 12.8778 17.4213 12.6776 17.311C12.4854 17.2008 12.2012 17.122 11.8249 17.0748L9.14664 16.7441C8.17783 16.6339 7.44521 16.3819 6.9488 15.9882C6.46039 15.5945 6.21618 15.0079 6.21618 14.2283C6.20817 13.2205 6.62452 12.5157 7.46523 12.1142C8.31394 11.7047 9.50694 11.5 11.0442 11.5C12.5735 11.5 13.7625 11.7087 14.6112 12.126C15.4599 12.5354 15.9083 13.2638 15.9564 14.311H12.7977Z\" fill=\"black\"></path><path d=\"M21.6402 17.6068C21.2879 17.6934 20.9917 17.7997 20.7515 17.9257C20.5113 18.0438 20.3511 18.158 20.2711 18.2682H26.7445V20.217H17.0884V19.969C17.0884 19.1186 17.2805 18.4178 17.6649 17.8666C18.0492 17.3155 18.5056 16.8981 19.034 16.6147C19.5625 16.3312 20.159 16.0871 20.8235 15.8824L22.3728 15.3981C22.8372 15.2485 23.1655 15.1029 23.3577 14.9611C23.5578 14.8194 23.6579 14.6186 23.6579 14.3588C23.6579 14.0989 23.5178 13.9099 23.2376 13.7918C22.9573 13.6659 22.565 13.6029 22.0606 13.6029C21.5481 13.6029 21.1318 13.7052 20.8115 13.9099C20.4993 14.1068 20.3231 14.4178 20.2831 14.843H17.2445C17.3166 13.7328 17.7369 12.9296 18.5056 12.4336C19.2742 11.9296 20.4192 11.6777 21.9405 11.6777C23.5498 11.6777 24.7548 11.8706 25.5555 12.2564C26.3562 12.6422 26.7565 13.3115 26.7565 14.2643C26.7565 15.0596 26.4963 15.6737 25.9759 16.1068C25.4554 16.5399 24.6828 16.8745 23.6579 17.1107L21.6402 17.6068Z\" fill=\"black\"></path></g></g><defs><clipPath id=\"clip0_3204_77634\"><rect width=\"32\" height=\"32\" fill=\"white\" transform=\"translate(0.5)\"></rect></clipPath></defs></svg>",
  ">>": "<svg fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 38 32\" class=\"combo-svg\"><g clip-path=\"url(#clip0_3204_77578)\"><path fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M7.83333 19V26H10.0556L18.9444 16L10.0556 6H7.83333V13H2.5V19H7.83333ZM25.6107 26L34.5003 16L25.6107 6H23.389V13H18.7923L21.4593 16L18.7923 19H23.389V26H25.6107Z\" fill=\"#F1F2F1\"></path><mask id=\"mask0_3204_77578\" style=\"mask-type:luminance\" maskUnits=\"userSpaceOnUse\" x=\"0\" y=\"4\" width=\"38\" height=\"24\"><path d=\"M37.5 4H0.5V28H37.5V4Z\" fill=\"white\"></path><path fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M7.83333 19V26H10.0556L18.9444 16L10.0556 6H7.83333V13H2.5V19H7.83333ZM25.6107 26L34.5003 16L25.6107 6H23.389V13H18.7923L21.4593 16L18.7923 19H23.389V26H25.6107Z\" fill=\"black\"></path></mask><g mask=\"url(#mask0_3204_77578)\"><path d=\"M7.83333 26H5.83333V28H7.83333V26ZM7.83333 19H9.83333V17H7.83333V19ZM10.0556 26V28H10.9537L11.5504 27.3287L10.0556 26ZM18.9444 16L20.4393 17.3287L21.6204 16L20.4393 14.6713L18.9444 16ZM10.0556 6L11.5504 4.67127L10.9537 4H10.0556V6ZM7.83333 6V4H5.83333V6H7.83333ZM7.83333 13V15H9.83333V13H7.83333ZM2.5 13V11H0.5V13H2.5ZM2.5 19H0.5V21H2.5V19ZM34.5003 16L35.9951 17.3288L37.1763 16L35.9951 14.6712L34.5003 16ZM25.6107 26V28H26.5087L27.1054 27.3288L25.6107 26ZM25.6107 6L27.1054 4.67121L26.5087 4H25.6107V6ZM23.389 6V4H21.389V6H23.389ZM23.389 13V15H25.389V13H23.389ZM18.7923 13V11H14.3382L17.2976 14.3288L18.7923 13ZM21.4593 16L22.954 17.3288L24.1353 16L22.954 14.6712L21.4593 16ZM18.7923 19L17.2976 17.6712L14.3382 21H18.7923V19ZM23.389 19H25.389V17H23.389V19ZM23.389 26H21.389V28H23.389V26ZM9.83333 26V19H5.83333V26H9.83333ZM10.0556 24H7.83333V28H10.0556V24ZM17.4496 14.6713L8.56074 24.6713L11.5504 27.3287L20.4393 17.3287L17.4496 14.6713ZM8.56074 7.32873L17.4496 17.3287L20.4393 14.6713L11.5504 4.67127L8.56074 7.32873ZM7.83333 8H10.0556V4H7.83333V8ZM9.83333 13V6H5.83333V13H9.83333ZM2.5 15H7.83333V11H2.5V15ZM4.5 19V13H0.5V19H4.5ZM7.83333 17H2.5V21H7.83333V17ZM33.0055 14.6712L24.1159 24.6712L27.1054 27.3288L35.9951 17.3288L33.0055 14.6712ZM24.1159 7.32879L33.0055 17.3288L35.9951 14.6712L27.1054 4.67121L24.1159 7.32879ZM23.389 8H25.6107V4H23.389V8ZM25.389 13V6H21.389V13H25.389ZM18.7923 15H23.389V11H18.7923V15ZM22.954 14.6712L20.287 11.6712L17.2976 14.3288L19.9646 17.3288L22.954 14.6712ZM20.287 20.3288L22.954 17.3288L19.9646 14.6712L17.2976 17.6712L20.287 20.3288ZM23.389 17H18.7923V21H23.389V17ZM25.389 26V19H21.389V26H25.389ZM25.6107 24H23.389V28H25.6107V24Z\" fill=\"black\"></path></g></g><defs><clipPath id=\"clip0_3204_77578\"><rect width=\"37\" height=\"32\" fill=\"white\" transform=\"translate(0.5)\"></rect></clipPath></defs></svg>",
  "<<": "<svg fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 37 32\" class=\"combo-svg\"><mask id=\"path-1-outside-1_26332_45420\" maskUnits=\"userSpaceOnUse\" x=\"-1.74846e-7\" y=\"4\" width=\"37\" height=\"24\" fill=\"black\"><rect fill=\"white\" x=\"-1.74846e-7\" y=\"4\" width=\"37\" height=\"24\"></rect><path fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M29.6667 13L29.6667 6L27.4444 6L18.5556 16L27.4444 26L29.6667 26L29.6667 19L35 19L35 13L29.6667 13ZM11.8893 6L2.9997 16L11.8893 26L14.111 26L14.111 19L18.7077 19L16.0407 16L18.7077 13L14.111 13L14.111 6L11.8893 6Z\"></path></mask><path fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M29.6667 13L29.6667 6L27.4444 6L18.5556 16L27.4444 26L29.6667 26L29.6667 19L35 19L35 13L29.6667 13ZM11.8893 6L2.9997 16L11.8893 26L14.111 26L14.111 19L18.7077 19L16.0407 16L18.7077 13L14.111 13L14.111 6L11.8893 6Z\" fill=\"#F1F2F1\"></path><path d=\"M29.6667 6L31.6667 6L31.6667 4L29.6667 4L29.6667 6ZM29.6667 13L27.6667 13L27.6667 15L29.6667 15L29.6667 13ZM27.4444 6L27.4444 4L26.5463 4L25.9496 4.67127L27.4444 6ZM18.5556 16L17.0607 14.6713L15.8796 16L17.0607 17.3287L18.5556 16ZM27.4444 26L25.9496 27.3287L26.5463 28L27.4444 28L27.4444 26ZM29.6667 26L29.6667 28L31.6667 28L31.6667 26L29.6667 26ZM29.6667 19L29.6667 17L27.6667 17L27.6667 19L29.6667 19ZM35 19L35 21L37 21L37 19L35 19ZM35 13L37 13L37 11L35 11L35 13ZM2.9997 16L1.50493 14.6712L0.323685 16L1.50493 17.3288L2.9997 16ZM11.8893 6L11.8893 4L10.9913 4L10.3946 4.67121L11.8893 6ZM11.8893 26L10.3946 27.3288L10.9913 28L11.8893 28L11.8893 26ZM14.111 26L14.111 28L16.111 28L16.111 26L14.111 26ZM14.111 19L14.111 17L12.111 17L12.111 19L14.111 19ZM18.7077 19L18.7077 21L23.1618 21L20.2024 17.6712L18.7077 19ZM16.0407 16L14.546 14.6712L13.3647 16L14.546 17.3288L16.0407 16ZM18.7077 13L20.2024 14.3288L23.1618 11L18.7077 11L18.7077 13ZM14.111 13L12.111 13L12.111 15L14.111 15L14.111 13ZM14.111 6L16.111 6L16.111 4L14.111 4L14.111 6ZM29.6667 6L27.6667 6L27.6667 13L29.6667 13L31.6667 13L31.6667 6L29.6667 6ZM27.4444 6L27.4444 8L29.6667 8L29.6667 6L29.6667 4L27.4444 4L27.4444 6ZM18.5556 16L20.0504 17.3287L28.9393 7.32873L27.4444 6L25.9496 4.67127L17.0607 14.6713L18.5556 16ZM27.4444 26L28.9393 24.6713L20.0504 14.6713L18.5556 16L17.0607 17.3287L25.9496 27.3287L27.4444 26ZM29.6667 26L29.6667 24L27.4444 24L27.4444 26L27.4444 28L29.6667 28L29.6667 26ZM29.6667 19L27.6667 19L27.6667 26L29.6667 26L31.6667 26L31.6667 19L29.6667 19ZM35 19L35 17L29.6667 17L29.6667 19L29.6667 21L35 21L35 19ZM35 13L33 13L33 19L35 19L37 19L37 13L35 13ZM29.6667 13L29.6667 15L35 15L35 13L35 11L29.6667 11L29.6667 13ZM2.9997 16L4.49446 17.3288L13.3841 7.32879L11.8893 6L10.3946 4.67121L1.50493 14.6712L2.9997 16ZM11.8893 26L13.3841 24.6712L4.49446 14.6712L2.9997 16L1.50493 17.3288L10.3946 27.3288L11.8893 26ZM14.111 26L14.111 24L11.8893 24L11.8893 26L11.8893 28L14.111 28L14.111 26ZM14.111 19L12.111 19L12.111 26L14.111 26L16.111 26L16.111 19L14.111 19ZM18.7077 19L18.7077 17L14.111 17L14.111 19L14.111 21L18.7077 21L18.7077 19ZM16.0407 16L14.546 17.3288L17.213 20.3288L18.7077 19L20.2024 17.6712L17.5354 14.6712L16.0407 16ZM18.7077 13L17.213 11.6712L14.546 14.6712L16.0407 16L17.5354 17.3288L20.2024 14.3288L18.7077 13ZM14.111 13L14.111 15L18.7077 15L18.7077 13L18.7077 11L14.111 11L14.111 13ZM14.111 6L12.111 6L12.111 13L14.111 13L16.111 13L16.111 6L14.111 6ZM11.8893 6L11.8893 8L14.111 8L14.111 6L14.111 4L11.8893 4L11.8893 6Z\" fill=\"black\" mask=\"url(#path-1-outside-1_26332_45420)\"></path></svg>",
  "+": "<svg viewBox=\"0 0 128 128\" xmlns=\"http://www.w3.org/2000/svg\" class=\"combo-svg\"><path d=\"m86.2011605 58.1702128v11.6595744h-15.7446808v16.1702128h-12.6808511v-16.1702128h-15.7446808v-11.6595744h15.7446808v-16.1702128h12.6808511v16.1702128z\" fill=\"#afafaf\"></path></svg>",
  ">": "<svg viewBox=\"0 0 128 128\" xmlns=\"http://www.w3.org/2000/svg\" class=\"combo-svg\"><path d=\"m66.6488095 34 19.8511905 30-19.8511905 30h-25.1488095l19.8511905-30-19.8511905-30z\" fill=\"#afafaf\"></path></svg>",
  "DASH": "<svg fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 44 44\" class=\"combo-svg combo-dash-svg\" aria-hidden=\"true\"><circle cx=\"22\" cy=\"22\" r=\"18.6\" fill=\"#F5E642\" stroke=\"#050505\" stroke-width=\"3\"/><circle cx=\"22\" cy=\"22\" r=\"20.7\" stroke=\"#000\" stroke-opacity=\".38\" stroke-width=\"1\"/><text x=\"22\" y=\"22.6\" text-anchor=\"middle\" dominant-baseline=\"middle\" font-family=\"Arial Black, Impact, sans-serif\" font-size=\"10.8\" font-weight=\"900\" letter-spacing=\"-1.25\" fill=\"#050505\" stroke=\"#050505\" stroke-width=\"0.25\" paint-order=\"stroke\">DASH</text></svg>",
  "SUP1": "<svg fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 72 32\" class=\"combo-svg combo-super-svg combo-super-svg-sup1\" aria-hidden=\"true\"><rect x=\"1.5\" y=\"1.5\" width=\"69\" height=\"29\" rx=\"14.5\" fill=\"#2FD1FF\" stroke=\"#050505\" stroke-width=\"3\"/><text x=\"36\" y=\"20.8\" text-anchor=\"middle\" font-family=\"Arial Black, Impact, sans-serif\" font-size=\"13\" font-weight=\"900\" fill=\"#050505\">SUP1</text></svg>",
  "SUP2": "<svg fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 72 32\" class=\"combo-svg combo-super-svg combo-super-svg-sup2\" aria-hidden=\"true\"><rect x=\"1.5\" y=\"1.5\" width=\"69\" height=\"29\" rx=\"14.5\" fill=\"#FF5252\" stroke=\"#050505\" stroke-width=\"3\"/><text x=\"36\" y=\"20.8\" text-anchor=\"middle\" font-family=\"Arial Black, Impact, sans-serif\" font-size=\"13\" font-weight=\"900\" fill=\"#050505\">SUP2</text></svg>",
  "ULT": "<svg fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 72 32\" class=\"combo-svg combo-super-svg combo-super-svg-ult\" aria-hidden=\"true\"><defs><linearGradient id=\"ultGrad\" x1=\"0\" y1=\"0\" x2=\"72\" y2=\"32\" gradientUnits=\"userSpaceOnUse\"><stop stop-color=\"#35CCFF\"/><stop offset=\".52\" stop-color=\"#B237FF\"/><stop offset=\"1\" stop-color=\"#FF4B4B\"/></linearGradient></defs><rect x=\"1.5\" y=\"1.5\" width=\"69\" height=\"29\" rx=\"14.5\" fill=\"url(#ultGrad)\" stroke=\"#050505\" stroke-width=\"3\"/><text x=\"36\" y=\"20.8\" text-anchor=\"middle\" font-family=\"Arial Black, Impact, sans-serif\" font-size=\"14\" font-weight=\"900\" fill=\"#050505\">ULT</text></svg>"
};

const COMBO_NEWLINE_TOKEN = '__newline__';

const COMBO_BUILDER_TOKENS = [
  { value: '↖', label: '↖', type: 'dir', group: 'directions', title: 'Haut arrière' },
  { value: '↑', label: '↑', type: 'dir', group: 'directions', title: 'Haut' },
  { value: '↗', label: '↗', type: 'dir', group: 'directions', title: 'Haut avant' },
  { value: '←', label: '←', type: 'dir', group: 'directions', title: 'Arrière' },
  { value: '→', label: '→', type: 'dir', group: 'directions', title: 'Avant' },
  { value: '↙', label: '↙', type: 'dir', group: 'directions', title: 'Bas arrière' },
  { value: '↓', label: '↓', type: 'dir', group: 'directions', title: 'Bas' },
  { value: '↘', label: '↘', type: 'dir', group: 'directions', title: 'Bas avant' },
  { value: 'L', label: 'L', type: 'light', group: 'attacks', title: 'Light' },
  { value: 'M', label: 'M', type: 'medium', group: 'attacks', title: 'Medium' },
  { value: 'H', label: 'H', type: 'heavy', group: 'attacks', title: 'Heavy' },
  { value: 'T', label: 'T', type: 'tag', group: 'attacks', title: 'Tag' },
  { value: '>', label: '›', type: 'meta', group: 'attacks', title: 'Next' },
  { value: 'S1', label: 'S1', type: 'special1', group: 'attacks', title: 'Special 1' },
  { value: 'S2', label: 'S2', type: 'special2', group: 'attacks', title: 'Special 2' },
  { value: 'DASH', label: 'DASH', type: 'dash', group: 'attacks', title: 'Dash' },
  { value: '+', label: '+', type: 'meta', group: 'attacks', title: 'Plus' },
  { value: 'SUP1', label: 'SUP1', type: 'super', group: 'attacks', title: 'Super 1' },
  { value: 'SUP2', label: 'SUP2', type: 'super', group: 'attacks', title: 'Super 2' },
  { value: 'ULT', label: 'ULT', type: 'super', group: 'attacks', title: 'Ultimate' },
  { value: '~', label: '~', type: 'meta', group: 'attacks', title: 'Approx / timing libre' },
  { value: 'Air', label: 'AIR', type: 'meta', group: 'attacks', title: 'Air' },
  { value: 'Hold', label: 'CHARGE', type: 'meta', group: 'attacks', title: 'Charge' },
  { value: 'Partial', label: '[CHARGE]', type: 'meta', group: 'attacks', title: 'Charge partielle' },
  { value: 'OR', label: 'OR', type: 'meta', group: 'attacks', title: 'Or' },
  { value: 'Delay', label: 'DELAY', type: 'meta', group: 'attacks', title: 'Delay' },
  { value: 'Whiff', label: 'WHIFF', type: 'meta', group: 'attacks', title: 'Whiff' },
  { value: 'Mash', label: 'MASH', type: 'meta', group: 'attacks', title: 'Mash' },
  { value: 'HIT#', label: 'HIT#', type: 'meta', group: 'attacks', title: 'Hit count' },
  { value: '>>', label: '>>', type: 'dir', group: 'directions', title: 'Dash avant' },
  { value: '<<', label: '<<', type: 'dir', group: 'directions', title: 'Dash arrière' },
  { value: COMBO_NEWLINE_TOKEN, label: 'NEW\nLINE', type: 'meta', group: 'attacks', title: 'Retour à la ligne' },
];

function getComboTokenEntry(tokenValue) {
  return COMBO_BUILDER_TOKENS.find((token) => token.value === tokenValue) || null;
}

function getComboTokenType(tokenValue) {
  if (isComboModifiedToken(tokenValue)) return getComboTokenEntry(tokenValue.base)?.type || 'text';
  if (typeof tokenValue === 'object' && tokenValue?.kind) return tokenValue.kind;
  return getComboTokenEntry(tokenValue)?.type || 'text';
}

function isComboNewlineToken(tokenValue) {
  return tokenValue === COMBO_NEWLINE_TOKEN || tokenValue === 'New Line' || tokenValue === '\n' || tokenValue?.kind === 'newline';
}

function isComboTextEntry(tokenValue) {
  return typeof tokenValue === 'object' && tokenValue?.kind === 'text';
}

const COMBO_MODIFIABLE_INPUTS = ['L', 'M', 'H', 'T', 'S1', 'S2', 'DASH', 'SUP1', 'SUP2', 'ULT'];
const COMBO_PENDING_MODIFIERS = ['Delay', 'Hold', 'Partial', 'Air', 'Mash', 'Whiff'];

function isComboModifiedToken(tokenValue) {
  return typeof tokenValue === 'object' && tokenValue?.kind === 'modified';
}

function normalizeComboModifierName(value) {
  const raw = String(value || '').trim().toLowerCase();
  if (raw === 'delay' || raw === 'dl') return 'delay';
  if (raw === 'hold' || raw === 'charge') return 'hold';
  if (raw === 'partial' || raw === '[charge]' || raw === 'partial charge') return 'partial';
  if (raw === 'air' || raw === 'jump' || raw === 'j') return 'air';
  if (raw === 'mash') return 'mash';
  if (raw === 'whiff' || raw === 'w') return 'whiff';
  return raw;
}

function normalizeComboModifiedToken(tokenValue) {
  if (!isComboModifiedToken(tokenValue)) return null;
  const base = String(tokenValue.base || tokenValue.value || '').trim();
  if (!COMBO_MODIFIABLE_INPUTS.includes(base)) return null;
  const mods = [...new Set((Array.isArray(tokenValue.mods) ? tokenValue.mods : [])
    .map(normalizeComboModifierName)
    .filter((mod) => ['delay', 'hold', 'partial', 'air', 'mash', 'whiff'].includes(mod))
    .filter((mod, index, array) => !(mod === 'hold' && array.includes('partial'))))];
  const hitCount = tokenValue.hitCount ? String(tokenValue.hitCount).replace(/[^0-9]/g, '').slice(0, 2) : '';
  return { kind: 'modified', base, mods, hitCount };
}

function encodeComboEditorToken(tokenValue) {
  return isComboModifiedToken(tokenValue) ? `json:${JSON.stringify(normalizeComboModifiedToken(tokenValue) || tokenValue)}` : String(tokenValue || '');
}

function decodeComboEditorToken(value) {
  const raw = String(value || '');
  if (!raw.startsWith('json:')) return raw;
  try {
    const parsed = JSON.parse(raw.slice(5));
    return normalizeComboModifiedToken(parsed) || raw;
  } catch (error) {
    return raw;
  }
}

function serializeComboModifiedToken(tokenValue) {
  const token = normalizeComboModifiedToken(tokenValue);
  if (!token) return '';
  let text = token.base;
  if (token.mods.includes('hold')) text = `[${text}]`;
  if (token.mods.includes('partial')) text = `{${text}}`;
  if (token.mods.includes('air')) text = `j.${text}`;
  if (token.mods.includes('delay')) text = `dl.${text}`;
  if (token.mods.includes('whiff')) text = `w.${text}`;
  if (token.hitCount) text += `(${token.hitCount})`;
  if (token.mods.includes('mash')) text += '(mash)';
  return text;
}

function parseComboNotationToken(rawToken) {
  let text = String(rawToken || '').trim();
  if (!text) return null;
  const direct = getComboTokenEntry(text);
  if (direct) return text;

  const mods = [];
  const takePrefix = (prefix, mod) => {
    if (text.toLowerCase().startsWith(prefix)) {
      mods.push(mod);
      text = text.slice(prefix.length);
      return true;
    }
    return false;
  };
  let changed = true;
  while (changed) {
    changed = takePrefix('dl.', 'delay') || takePrefix('w.', 'whiff') || takePrefix('j.', 'air');
  }

  let hitCount = '';
  const hitMatch = text.match(/^(.*)\((\d{1,2})\)$/);
  if (hitMatch) {
    text = hitMatch[1];
    hitCount = hitMatch[2];
  }
  if (/\(mash\)$/i.test(text)) {
    mods.push('mash');
    text = text.replace(/\(mash\)$/i, '');
  }
  const holdMatch = text.match(/^\[(.+)\]$/);
  if (holdMatch) {
    mods.push('hold');
    text = holdMatch[1];
  }
  const partialMatch = text.match(/^\{(.+)\}$/);
  if (partialMatch) {
    mods.push('partial');
    text = partialMatch[1];
  }

  if (COMBO_MODIFIABLE_INPUTS.includes(text) && (mods.length || hitCount)) {
    return normalizeComboModifiedToken({ kind: 'modified', base: text, mods, hitCount });
  }
  return { kind: 'text', value: rawToken };
}

function serializeComboTokens(tokens) {
  return (tokens || []).map((token) => {
    if (isComboNewlineToken(token)) return '\n';
    if (isComboTextEntry(token)) return token.value || '';
    return typeof token === 'string' ? token : (token?.value || '');
  }).join(' ').replace(/\s*\n\s*/g, '\n').trim();
}


let comboInlineSvgUid = 0;
function escapeRegExp(value) {
  return String(value).replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
}
function getComboInlineSvg(icon) {
  const raw = String(icon || '');
  if (!raw.includes('id=')) return raw;
  const suffix = `__combo_${comboInlineSvgUid++}`;
  const ids = [...raw.matchAll(/\bid="([^"]+)"/g)].map((match) => match[1]);
  return ids.reduce((svg, id) => {
    const safeId = escapeRegExp(id);
    const nextId = `${id}${suffix}`;
    return svg
      .replace(new RegExp(`id="${safeId}"`, 'g'), `id="${nextId}"`)
      .replace(new RegExp(`url\\(#${safeId}\\)`, 'g'), `url(#${nextId})`)
      .replace(new RegExp(`#${safeId}(?=["'])`, 'g'), `#${nextId}`);
  }, raw);
}

function renderComboToken(tokenValue) {
  if (isComboNewlineToken(tokenValue)) return '<span class="combo-line-break" data-combo-line-break="true" aria-hidden="true"></span>';

  if (isComboTextEntry(tokenValue)) {
    const text = escapeHtml(tokenValue.value || '');
    if (!text) return '';
    return `<span class="combo-free-text">${text}</span>`;
  }

  if (isComboModifiedToken(tokenValue)) {
    const modified = normalizeComboModifiedToken(tokenValue);
    if (!modified) return '';
    const type = getComboTokenType(modified);
    const baseIcon = COMBO_ICON_SVG[modified.base];
    const baseLabel = getComboTokenEntry(modified.base)?.label || modified.base;
    if (!baseIcon) return `<span class="combo-word-token combo-word-token-${escapeHtml(type)}">${escapeHtml(serializeComboModifiedToken(modified))}</span>`;
    const topLabels = [];
    if (modified.mods.includes('air')) topLabels.push('AIR');
    if (modified.mods.includes('hold')) topLabels.push('CHARGE');
    if (modified.mods.includes('partial')) topLabels.push('CHARGE');
    const bottomLabels = [];
    if (modified.mods.includes('delay')) bottomLabels.push('DELAY');
    if (modified.mods.includes('whiff')) bottomLabels.push('WHIFF');
    if (modified.mods.includes('mash')) bottomLabels.push('MASH');
    const partialCorners = modified.mods.includes('partial') ? '<span class="combo-mod-corner combo-mod-corner-tl"></span><span class="combo-mod-corner combo-mod-corner-tr"></span><span class="combo-mod-corner combo-mod-corner-bl"></span><span class="combo-mod-corner combo-mod-corner-br"></span>' : '';
    const badgesHtml = topLabels.length ? `<span class="combo-mod-badge combo-mod-badge-top">${escapeHtml(topLabels.join(' '))}</span>` : '';
    const bottomHtml = bottomLabels.length ? `<span class="combo-mod-badge combo-mod-badge-bottom">${escapeHtml(bottomLabels.join(' '))}</span>` : '';
    const hitHtml = modified.hitCount ? `<span class="combo-mod-badge combo-mod-badge-hit">${escapeHtml(modified.hitCount)}</span>` : '';
    return `<span class="combo-output-token combo-output-token-${escapeHtml(type)} combo-output-token-modified" data-combo-token="${escapeHtml(serializeComboModifiedToken(modified))}" title="${escapeHtml(serializeComboModifiedToken(modified))}"><span class="combo-modified-icon combo-icon-wrap" aria-hidden="true">${getComboInlineSvg(baseIcon)}${badgesHtml}${bottomHtml}${hitHtml}${partialCorners}</span><span class="sr-only-token">${escapeHtml(baseLabel)}</span></span>`;
  }

  const type = getComboTokenType(tokenValue);
  const token = getComboTokenEntry(tokenValue);
  const icon = COMBO_ICON_SVG[tokenValue];
  const label = token?.label || tokenValue;

  if (icon) {
    return `<span class="combo-output-token combo-output-token-${escapeHtml(type)}" data-combo-token="${escapeHtml(tokenValue)}" title="${escapeHtml(label)}"><span class="combo-icon-wrap" aria-hidden="true">${getComboInlineSvg(icon)}</span><span class="sr-only-token">${escapeHtml(label)}</span></span>`;
  }

  return `<span class="combo-word-token combo-word-token-${escapeHtml(type)}" title="${escapeHtml(label)}">${escapeHtml(label).replace('\n', '<br>')}</span>`;
}

function renderComboButton(token) {
  const icon = COMBO_ICON_SVG[token.value];
  const label = token.label || token.value;
  const buttonContent = icon
    ? `<span class="combo-icon-wrap" aria-hidden="true">${getComboInlineSvg(icon)}</span><span class="sr-only-token">${escapeHtml(label)}</span>`
    : `<span class="combo-text-token">${escapeHtml(label).replace('\n', '<br>')}</span>`;
  return `
    <button class="combo-token-button combo-token-${escapeHtml(token.type)}" type="button" data-combo-token="${escapeHtml(token.value)}" title="${escapeHtml(token.title || label)}" aria-label="${escapeHtml(token.title || label)}">${buttonContent}</button>
  `;
}

function getComboButton(value) {
  const token = getComboTokenEntry(value);
  return token ? renderComboButton(token) : '';
}


function renderComboTokenGrid() {
  const directionRows = [
    [null, '↖', '↑', '↗', null],
    ['<<', '←', null, '→', '>>'],
    [null, '↙', '↓', '↘', null],
  ].map((row) => `
    <div class="combo-pad-row combo-pad-row-directions">
      ${row.map((value) => value ? getComboButton(value) : '<span class="combo-pad-spacer" aria-hidden="true"></span>').join('')}
    </div>
  `).join('');

  const actionRows = [
    ['L', 'M', 'H', 'T', '>'],
    ['S1', 'S2', 'DASH', null, '+'],
    ['SUP1', 'SUP2', 'ULT', null, '~'],
    ['Air', 'Hold', 'Partial', null, 'OR'],
    ['Delay', 'Whiff', 'Mash', 'HIT#', COMBO_NEWLINE_TOKEN],
  ].map((row) => `
    <div class="combo-pad-row combo-pad-row-actions">
      ${row.map((value) => value ? getComboButton(value) : '<span class="combo-pad-spacer combo-pad-action-spacer" aria-hidden="true"></span>').join('')}
    </div>
  `).join('');

  return `
    <div class="combo-token-grid" aria-label="Touches 2XKO">
      <div class="combo-pad combo-pad-directions">${directionRows}</div>
      <div class="combo-pad combo-pad-actions">${actionRows}</div>
    </div>
  `;
}

const COMBO_POSITION_OPTIONS = ['FULLSCREEN', 'MIDSCREEN', 'CORNER'];
const COMBO_POSITION_LEGACY_OPTIONS = ['ANYWHERE'];

function getComboPositionSvg(label) {
  const raw = String(label || '').toUpperCase();
  const text = raw === 'FULLSCREEN' ? 'FULLSCREEN' : raw;
  const safeText = escapeHtml(text);
  const accent = '#D7FF36';
  const textFill = '#f6fbf4';
  const font = 'Arial Black, Impact, system-ui, sans-serif';

  if (raw === 'CORNER') {
    return `<svg class="combo-position-svg combo-position-svg-corner" viewBox="0 0 220 64" role="img" aria-label="${safeText}" xmlns="http://www.w3.org/2000/svg">
      <path class="combo-position-mark" d="M14 11 V53 H56" fill="none" stroke="${accent}" stroke-width="6" stroke-linecap="square" stroke-linejoin="miter" />
      <path class="combo-position-mark" d="M206 11 V53 H164" fill="none" stroke="${accent}" stroke-width="6" stroke-linecap="square" stroke-linejoin="miter" />
      <text x="110" y="31" text-anchor="middle" dominant-baseline="middle" fill="${textFill}" font-family="${font}" font-size="30" font-weight="900" letter-spacing="1.2" stroke="#050505" stroke-width="4.2" paint-order="stroke fill">${safeText}</text>
    </svg>`;
  }

  if (raw === 'MIDSCREEN') {
    return `<svg class="combo-position-svg combo-position-svg-midscreen" viewBox="0 0 260 64" role="img" aria-label="${safeText}" xmlns="http://www.w3.org/2000/svg">
      <text x="130" y="29" text-anchor="middle" dominant-baseline="middle" fill="${textFill}" font-family="${font}" font-size="30" font-weight="900" letter-spacing="1.05" stroke="#050505" stroke-width="4.2" paint-order="stroke fill">${safeText}</text>
      <path class="combo-position-mark" d="M28 53 H232" fill="none" stroke="${accent}" stroke-width="6" stroke-linecap="square" />
    </svg>`;
  }

  return `<svg class="combo-position-svg combo-position-svg-fullscreen" viewBox="0 0 306 66" role="img" aria-label="${safeText}" xmlns="http://www.w3.org/2000/svg">
    <path class="combo-position-mark" d="M14 11 V54 H56" fill="none" stroke="${accent}" stroke-width="6" stroke-linecap="square" stroke-linejoin="miter" />
    <path class="combo-position-mark" d="M292 11 V54 H250" fill="none" stroke="${accent}" stroke-width="6" stroke-linecap="square" stroke-linejoin="miter" />
    <text x="153" y="29" text-anchor="middle" dominant-baseline="middle" fill="${textFill}" font-family="${font}" font-size="30" font-weight="900" letter-spacing="1.05" stroke="#050505" stroke-width="4.2" paint-order="stroke fill">${safeText}</text>
    <path class="combo-position-mark" d="M78 54 H228" fill="none" stroke="${accent}" stroke-width="6" stroke-linecap="square" />
  </svg>`;
}

const COMBO_POSITION_VISUALS = Object.fromEntries(
  COMBO_POSITION_OPTIONS.map((label) => [label, getComboPositionSvg(label)])
);

const COMBO_TAG_OPTIONS = ['BLOCKSTRING', 'LIMIT STRIKE'];
const COMBO_REMOVED_TAG_OPTIONS = new Set(['BNB', 'MIXUP', 'OKI', 'PUNISH', 'SOLO', 'THROW', 'TOD']);
const isRemovedComboTag = (tag) => COMBO_REMOVED_TAG_OPTIONS.has(String(tag || '').toUpperCase());
const COMBO_METER_OPTIONS = ['1 BAR', '2 BARS', '3 BARS', 'FURY'];
const COMBO_FUSE_OPTIONS = ['2X ASSIST', 'DOUBLE DOWN', 'FREESTYLE', 'JUGGERNAUT', 'SIDEKICK', 'TEAMFIGHT'];
const COMBO_METER_VISUALS = {
  'FURY': getComboFurySvg(),
  '1 BAR': '<i class="combo-meter-digit combo-meter-digit-1" aria-hidden="true">1</i>',
  '2 BARS': '<i class="combo-meter-digit combo-meter-digit-2" aria-hidden="true">2</i>',
  '3 BARS': '<i class="combo-meter-digit combo-meter-digit-3" aria-hidden="true">3</i>',
};
const COMBO_NUMERIC_METER_OPTIONS = ['1 BAR', '2 BARS', '3 BARS'];
function normalizeComboMeterCostValues(combo = {}) {
  const raw = [];
  if (Array.isArray(combo.meterCosts)) raw.push(...combo.meterCosts);
  if (Array.isArray(combo.meterCost)) raw.push(...combo.meterCost);
  else if (combo.meterCost) raw.push(...String(combo.meterCost).split(/[|,+]/));
  if (Array.isArray(combo.tags) && combo.tags.some((tag) => String(tag || '').toUpperCase() === 'FURY')) raw.push('FURY');
  const normalized = raw
    .map((value) => String(value || '').trim().toUpperCase())
    .map((value) => value === '1' ? '1 BAR' : value === '2' ? '2 BARS' : value === '3' ? '3 BARS' : value)
    .filter((value) => COMBO_METER_OPTIONS.includes(value));
  return COMBO_METER_OPTIONS.filter((value) => normalized.includes(value));
}
const COMBO_FUSE_COLORS = {
  '2X ASSIST': '#18e6ff',
  'DOUBLE DOWN': '#8e55ff',
  'FREESTYLE': '#ffbf2a',
  'JUGGERNAUT': '#ff6663',
  'SIDEKICK': '#655dff',
  'TEAMFIGHT': '#40f46b',
};

function getComboFuseSvg(label, color) {
  const text = escapeHtml(label);
  const stroke = escapeHtml(color);
  return `<svg class="combo-fuse-svg" viewBox="0 0 214 42" role="img" aria-label="${text}" xmlns="http://www.w3.org/2000/svg">
    <path class="combo-fuse-shadow" d="M5 5h190l14 32H19L5 5Z" fill="#05070a" stroke="#000" stroke-width="8" />
    <path class="combo-fuse-frame" d="M5 5h190l14 32H19L5 5Z" fill="#05070a" stroke="${stroke}" stroke-width="5" />
    <path d="M20 10h159l3 6H23l-3-6Z" fill="rgba(255,255,255,.15)" />
    <text x="107" y="27" text-anchor="middle" dominant-baseline="middle" fill="#f8f8f8" font-family="Arial Black, Impact, system-ui, sans-serif" font-size="19" font-weight="900" letter-spacing=".7" stroke="#000" stroke-width="4" paint-order="stroke fill">${text}</text>
  </svg>`;
}

const COMBO_FUSE_VISUALS = Object.fromEntries(
  COMBO_FUSE_OPTIONS.map((label) => [label, getComboFuseSvg(label, COMBO_FUSE_COLORS[label] || '#18e6ff')])
);

function getComboLimitStrikeSvg() {
  return `<svg class="combo-tag-logo-svg combo-tag-logo-limit-strike" viewBox="0 0 236 42" role="img" aria-label="LIMIT STRIKE!" xmlns="http://www.w3.org/2000/svg">
    <path class="combo-limit-shadow" d="M2 6h181l-9 30H2V6Z" fill="#000" opacity=".92" transform="translate(5 5)" />
    <path class="combo-limit-body" d="M2 6h181l-9 30H2V6Z" fill="#050506" />
    <path d="M13 10h150l-2 5H13v-5Z" fill="rgba(255,255,255,.12)" />
    <path class="combo-limit-cap" d="M183 6h49l-9 30h-49l9-30Z" fill="#ff5c54" />
    <path class="combo-limit-cap-shadow" d="M183 6h49l-2 7h-49l2-7Z" fill="#ff928d" opacity=".45" />
    <path class="combo-limit-star" d="M207 11l3.8 7.3l8.1-1.1l-5.9 5.7l3.5 7.4l-7.2-3.8l-6.1 5.6l1.3-8.1l-7.1-4l8-1.2L207 11Z" fill="#050506" />
    <text x="92" y="24" text-anchor="middle" dominant-baseline="middle" fill="#f6f6f3" font-family="Arial Black, Impact, system-ui, sans-serif" font-size="23" font-weight="1000" letter-spacing=".15" stroke="#020202" stroke-width="4.8" paint-order="stroke fill">LIMIT STRIKE!</text>
  </svg>`;
}

function getComboFurySvg() {
  return `<svg class="combo-tag-logo-svg combo-tag-logo-fury" viewBox="0 0 150 42" role="img" aria-label="FURY!" xmlns="http://www.w3.org/2000/svg">
    <text x="74" y="27" text-anchor="middle" dominant-baseline="middle" fill="#ffdce3" font-family="Arial Black, Impact, system-ui, sans-serif" font-size="34" font-weight="1000" letter-spacing="-.05em" stroke="#4d232b" stroke-width="9" opacity=".92" paint-order="stroke fill" transform="scale(1.22 .72) translate(-13 11)">FURY!</text>
    <text x="74" y="27" text-anchor="middle" dominant-baseline="middle" fill="#fff" font-family="Arial Black, Impact, system-ui, sans-serif" font-size="34" font-weight="1000" letter-spacing="-.05em" stroke="#070707" stroke-width="3.4" paint-order="stroke fill" transform="scale(1.22 .72) translate(-13 11)">FURY!</text>
  </svg>`;
}

function getComboDamageSvg(value) {
  const raw = String(value || '').replace(/[^0-9]/g, '').slice(0, 4);
  if (!raw) return '';
  const text = escapeHtml(raw);
  return `<svg class="combo-damage-svg" viewBox="0 0 128 46" role="img" aria-label="${text} dégâts" xmlns="http://www.w3.org/2000/svg">
    <path d="M6 6h105l13 34H18L6 6Z" fill="#020405" stroke="#000" stroke-width="8" />
    <path d="M6 6h105l13 34H18L6 6Z" fill="#10c9a7" stroke="#07100e" stroke-width="3" />
    <path d="M16 11h84l4 9H20l-4-9Z" fill="#5effe2" opacity=".36" />
    <text x="65" y="24" text-anchor="middle" dominant-baseline="middle" fill="#fff" font-family="Arial Black, Impact, system-ui, sans-serif" font-size="21" font-weight="900" letter-spacing=".25" stroke="#050505" stroke-width="5" paint-order="stroke fill" transform="translate(2 1)">${text}</text>
  </svg>`;
}

const COMBO_TAG_VISUALS = {
  'FURY': getComboFurySvg(),
  'LIMIT STRIKE': getComboLimitStrikeSvg(),
};

function renderComboMetaOptionButtons(values, className, dataName, options = {}) {
  const activeValue = options.activeValue || '';
  return values.map((value) => {
    const icon = options.iconMap?.[value] ? `<img class="combo-choice-icon" src="${escapeHtml(options.iconMap[value])}" alt="" loading="lazy" decoding="async" fetchpriority="low" />` : '';
    const htmlVisual = options.htmlMap?.[value] ? `<span class="combo-choice-visual" aria-hidden="true">${options.htmlMap[value]}</span>` : '';
    const hasVisual = Boolean(htmlVisual || icon);
    const visibleLabel = options.hideLabel && hasVisual
      ? `<span class="sr-only-token">${escapeHtml(value)}</span>`
      : `<span>${escapeHtml(value)}</span>`;
    const active = value === activeValue ? ' is-active' : '';
    const visualClass = options.visualClass ? ` ${escapeHtml(options.visualClass)}` : '';
    return `<button class="${className}${visualClass}${active}" type="button" data-${dataName}="${escapeHtml(value)}" aria-pressed="${active ? 'true' : 'false'}">${htmlVisual || icon}${visibleLabel}</button>`;
  }).join('');
}

function renderComboChoiceGroup(title, id, values, className, dataName, options = {}) {
  return `
    <div class="combo-choice-group ${className}-group" id="${id}">
      <span>${escapeHtml(title)}</span>
      <div class="combo-choice-options">
        ${renderComboMetaOptionButtons(values, `${className} combo-choice-option`, dataName, options)}
      </div>
    </div>
  `;
}

function renderComboAssistPicker(game, character) {
  const assists = [...(game?.characters || [])]
    .filter((entry) => entry.slug !== character?.slug)
    .sort((a, b) => a.name.localeCompare(b.name, 'fr', { sensitivity: 'base' }));

  if (!assists.length) return '';

  return `
    <div class="combo-choice-group combo-assist-picker" id="comboAssistPicker">
      <span>Assist</span>
      <div class="combo-assist-options">
        ${assists.map((entry) => `
            <button class="combo-assist-option combo-choice-option" type="button" data-combo-assist="${escapeHtml(entry.slug)}" aria-pressed="false" aria-label="Assist ${escapeHtml(entry.name)}" title="${escapeHtml(entry.name)}">
              ${renderComboAssistPortrait(entry, 72)}
            </button>
          `).join('')}
      </div>
    </div>
  `;
}

const COMBO_ASSIST_HEAD_IMAGES = {
  akali: 'assets/2xko/assist-heads/akali.webp',
  ahri: 'assets/2xko/assist-heads/ahri.webp',
  blitzcrank: 'assets/2xko/assist-heads/blitzcrank.webp',
  braum: 'assets/2xko/assist-heads/braum.webp',
  caitlyn: 'assets/2xko/assist-heads/caitlyn.webp',
  darius: 'assets/2xko/assist-heads/darius.webp',
  ekko: 'assets/2xko/assist-heads/ekko.webp',
  illaoi: 'assets/2xko/assist-heads/illaoi.webp',
  jinx: 'assets/2xko/assist-heads/jinx.webp',
  senna: 'assets/2xko/assist-heads/senna.webp',
  teemo: 'assets/2xko/assist-heads/teemo.webp',
  thresh: 'assets/2xko/assist-heads/thresh.webp',
  vi: 'assets/2xko/assist-heads/vi.webp',
  warwick: 'assets/2xko/assist-heads/warwick.webp',
  yasuo: 'assets/2xko/assist-heads/yasuo.webp',
};

function getComboCharacterImageUrl(character) {
  if (!character) return '';
  return COMBO_ASSIST_HEAD_IMAGES[character.slug] || character.imageUrls?.[0] || character.imageUrl || imageCache[character.slug] || '';
}

function getOptimizedMediaWikiThumbUrl(url, size = 96) {
  const raw = String(url || '').trim();
  if (!raw) return '';

  try {
    const parsed = new URL(raw, window.location.href);
    if (!parsed.pathname.includes('/images/') || parsed.pathname.includes('/images/thumb/')) return raw;

    const parts = parsed.pathname.split('/');
    const fileName = parts.at(-1);
    if (!fileName || !/\.(png|jpe?g|webp)$/i.test(fileName)) return raw;

    const basePath = parsed.pathname.slice(0, -fileName.length).replace('/images/', '/images/thumb/');
    parsed.pathname = `${basePath}${fileName}/${size}px-${fileName}`;
    parsed.search = '';
    parsed.hash = '';
    return parsed.toString();
  } catch (error) {
    return raw;
  }
}

function getComboCharacterThumbUrl(character, size = 96) {
  return getOptimizedMediaWikiThumbUrl(getComboCharacterImageUrl(character), size);
}

function renderComboAssistPortrait(character, size = 72, options = {}) {
  const name = character?.name || '';
  const image = getComboCharacterThumbUrl(character, size);
  const tagName = options.tagName === 'i' ? 'i' : 'span';
  const fallbackInner = tagName === 'i'
    ? `<i>${escapeHtml(name.slice(0, 2).toUpperCase() || '?')}</i>`
    : `<span>${escapeHtml(name.slice(0, 2).toUpperCase() || '?')}</span>`;
  if (!image) {
    return `<${tagName} class="combo-assist-thumb-frame combo-assist-thumb-fallback" aria-hidden="true">${fallbackInner}</${tagName}>`;
  }
  return `<${tagName} class="combo-assist-thumb-frame" aria-hidden="true"><img class="combo-assist-thumb" src="${escapeHtml(image)}" alt="" loading="lazy" decoding="async" fetchpriority="low" width="${size}" height="${size}" /></${tagName}>`;
}

function getComboChipKind(value) {
  const safe = String(value || '').toUpperCase();
  if (/^\d+\s*DMG$/.test(safe)) return 'damage';
  if (safe === '1 BAR') return 'meter-1';
  if (safe === '2 BARS') return 'meter-2';
  if (safe === '3 BARS') return 'meter-3';
  if (safe === 'FURY' || safe === 'LIMIT STRIKE' || safe === 'JUGGERNAUT') return 'danger';
  if (safe === 'FREESTYLE') return 'yellow';
  if (safe === 'DOUBLE DOWN') return 'purple';
  if (safe === 'TEAMFIGHT') return 'cyan';
  if (safe === '2X ASSIST' || safe === 'SIDEKICK') return 'neutral';
  return 'default';
}

function renderComboMetaChip(value, options = {}) {
  if (!value) return '';
  const label = escapeHtml(value);
  const kind = escapeHtml(options.kind || getComboChipKind(value));
  const visualOnly = options.html ? ' combo-meta-chip-visual-only' : '';
  const classes = `combo-meta-chip combo-meta-chip-${kind}${visualOnly}${options.className ? ` ${options.className}` : ''}`;
  const icon = options.icon ? `<img class="combo-meta-chip-icon" src="${escapeHtml(options.icon)}" alt="" loading="lazy" decoding="async" fetchpriority="low" />` : '';
  const html = options.html ? `<span class="combo-meta-chip-visual" aria-hidden="true">${options.html}</span><span class="sr-only-token">${label}</span>` : '';
  return `<span class="${classes}">${html || `${icon}<span>${label}</span>`}</span>`;
}

function renderComboBuilderForm(game, character) {
  if (!isModernDetailGame(game)) return '';
  return `
    <section class="combo-builder-shell" id="comboBuilderShell" hidden>
      <div class="combo-builder-topline">
        <strong>Combo builder</strong>
        <button class="combo-builder-close" type="button" id="comboCloseBuilder">Fermer</button>
      </div>
      <div class="combo-builder-layout">
        <div class="combo-builder-pad-area">
          ${renderComboTokenGrid()}
        </div>
        <div class="combo-builder-edit-area">
          <div class="combo-output combo-editor" id="comboOutput" contenteditable="true" spellcheck="false" aria-label="Combo en cours" data-empty="true"></div>
          <label class="combo-name-field">
            <span>Nom du combo</span>
            <input id="comboNameInput" type="text" autocomplete="off" placeholder="Ex : Akali corner route…" />
          </label>
          <div class="combo-meta-grid combo-meta-grid-visual">
            ${renderComboAssistPicker(game, character)}
            ${renderComboChoiceGroup('Fuse', 'comboFuseOptions', COMBO_FUSE_OPTIONS, 'combo-fuse-option', 'combo-fuse', { htmlMap: COMBO_FUSE_VISUALS, hideLabel: true, visualClass: 'combo-fuse-visual-option' })}
            ${renderComboChoiceGroup('Meter cost', 'comboMeterOptions', COMBO_METER_OPTIONS, 'combo-meter-option', 'combo-meter', { htmlMap: COMBO_METER_VISUALS, hideLabel: true, visualClass: 'combo-meter-visual-option' })}
            ${renderComboChoiceGroup('Position', 'comboPositionOptions', COMBO_POSITION_OPTIONS, 'combo-position-option', 'combo-position', { htmlMap: COMBO_POSITION_VISUALS, hideLabel: true, visualClass: 'combo-position-visual-option' })}
            <label class="combo-meta-field combo-damage-field">
              <span>Dégâts</span>
              <input id="comboDamageInput" type="number" min="0" max="9999" step="1" inputmode="numeric" placeholder="Ex : 521" />
            </label>
            <div class="combo-tags-field combo-tags-field-inline" aria-label="Tags du combo">
              <span>Tags</span>
              <div class="combo-tag-options" id="comboTagOptions">
                ${renderComboMetaOptionButtons(COMBO_TAG_OPTIONS, 'combo-tag-option', 'combo-tag', { htmlMap: COMBO_TAG_VISUALS, hideLabel: true, visualClass: 'combo-tag-visual-option' })}
              </div>
            </div>
          </div>
          <label class="combo-name-field combo-media-field">
            <span>Lien vidéo / post X</span>
            <input id="comboMediaUrl" type="url" autocomplete="off" placeholder="Lien YouTube ou X optionnel…" />
          </label>
          <div class="combo-save-row combo-builder-actions">
            <button class="combo-builder-add" type="button" id="comboAddNotation">Ajouter le combo</button>
            <button class="combo-builder-clear" type="button" id="comboClearNotation">Reset</button>
          </div>
        </div>
      </div>
    </section>
  `;
}

function renderComboPadBuilder(game) {
  return '';
}

function renderComboEditorPanel(game) {
  if (game?.id !== '2xko') return '';
  return `
    <div class="combo-current-panel">
      <div class="combo-builder-header combo-current-header">
        <strong>Combo en cours</strong>
        <small>Ouvre le builder pour créer une notation propre.</small>
      </div>
    </div>
  `;
}
function renderComboBuilder(game) {
  return '';
}

function getComboTokensFromText(value) {
  const raw = String(value || '');
  if (!raw.trim()) return [];
  const parts = [];
  raw.split(/(\n)/).forEach((chunk) => {
    if (chunk === '\n') {
      parts.push({ kind: 'newline' });
      return;
    }
    chunk.split(/\s+/).map((token) => token.trim()).filter(Boolean).forEach((token) => {
      parts.push(getComboTokenEntry(token) ? token : { kind: 'text', value: token });
    });
  });
  return parts;
}

function normalizeComboDisplayToken(token) {
  if (!token) return null;
  if (isComboNewlineToken(token)) return COMBO_NEWLINE_TOKEN;
  if (typeof token === 'string') return token.trim() ? token : null;
  if (isComboTextEntry(token)) {
    const text = String(token.value || '').trim();
    return text ? { kind: 'text', value: text } : null;
  }
  if (isComboModifiedToken(token)) return normalizeComboModifiedToken(token);
  if (typeof token === 'object') {
    const value = String(token.value || '').trim();
    if (!value) return null;
    return getComboTokenEntry(value) ? value : { kind: 'text', value };
  }
  return null;
}

function normalizeComboDisplayTokens(tokens = []) {
  return (tokens || [])
    .map(normalizeComboDisplayToken)
    .filter(Boolean)
    .filter((token, index, array) => !(isComboNewlineToken(token) && (index === 0 || index === array.length - 1 || isComboNewlineToken(array[index - 1]))));
}

function renderComboOutputFromTokens(tokens) {
  const safeTokens = normalizeComboDisplayTokens(tokens);
  if (!safeTokens.length) return '<span class="combo-output-placeholder">Aucun input.</span>';
  return safeTokens.map(renderComboToken).join('');
}

function renderComboOutputFromText(value) {
  return renderComboOutputFromTokens(getComboTokensFromText(value));
}

function renderComboMetaChips(combo) {
  const primaryChips = [];
  const secondaryChips = [];
  const tags = Array.isArray(combo.tags) ? combo.tags.filter((tag) => !isRemovedComboTag(tag) && String(tag || '').toUpperCase() !== 'FURY') : [];

  if (combo.assist) {
    const game = getGame('2xko');
    const assistCharacter = game.characters.find((entry) => entry.name === combo.assist || entry.slug === combo.assistSlug);
    primaryChips.push(`<span class="combo-meta-plain combo-meta-assist-inline" title="${escapeHtml(combo.assist)}" aria-label="${escapeHtml(combo.assist)}">${renderComboAssistPortrait(assistCharacter, 72, { tagName: 'i' })}</span>`);
  }
  if (combo.fuse && COMBO_FUSE_VISUALS[combo.fuse]) {
    primaryChips.push(`<span class="combo-meta-plain combo-meta-fuse-inline" title="${escapeHtml(combo.fuse)}" aria-label="${escapeHtml(combo.fuse)}">${COMBO_FUSE_VISUALS[combo.fuse]}</span>`);
  }
  normalizeComboMeterCostValues(combo).forEach((meter) => {
    if (COMBO_METER_VISUALS[meter]) {
      primaryChips.push(`<span class="combo-meta-plain combo-meta-meter-inline" title="${escapeHtml(meter)}" aria-label="${escapeHtml(meter)}">${COMBO_METER_VISUALS[meter]}</span>`);
    }
  });

  if (combo.position) {
    const normalizedPosition = normalizeComboPosition(combo.position);
    secondaryChips.push(renderComboMetaChip(normalizedPosition, COMBO_POSITION_VISUALS[normalizedPosition] ? { html: COMBO_POSITION_VISUALS[normalizedPosition], className: 'combo-meta-position-logo' } : {}));
  }

  if (tags.includes('BLOCKSTRING')) {
    secondaryChips.push(renderComboMetaChip('BLOCKSTRING'));
  }

  if (combo.damage) {
    secondaryChips.push(renderComboMetaChip(`${combo.damage} DMG`, { kind: 'damage', html: getComboDamageSvg(combo.damage), className: 'combo-meta-damage-visual' }));
  }

  if (tags.includes('LIMIT STRIKE')) {
    secondaryChips.push(renderComboMetaChip('LIMIT STRIKE', { html: COMBO_TAG_VISUALS['LIMIT STRIKE'], className: 'combo-meta-tag-logo' }));
  }

  tags
    .filter((tag) => !['BLOCKSTRING', 'LIMIT STRIKE'].includes(tag))
    .filter((tag) => !COMBO_POSITION_OPTIONS.includes(normalizeComboPosition(tag)) && !COMBO_POSITION_LEGACY_OPTIONS.includes(String(tag || '').toUpperCase()))
    .forEach((tag) => {
      if (COMBO_TAG_VISUALS[tag]) secondaryChips.push(renderComboMetaChip(tag, { html: COMBO_TAG_VISUALS[tag], className: 'combo-meta-tag-logo' }));
      else secondaryChips.push(renderComboMetaChip(tag));
    });

  if (!primaryChips.length && !secondaryChips.length) return '';
  return `<div class="saved-combo-meta-stack">
    ${primaryChips.length ? `<div class="saved-combo-meta saved-combo-meta-primary">${primaryChips.join('')}</div>` : ''}
    ${secondaryChips.length ? `<div class="saved-combo-meta saved-combo-meta-secondary">${secondaryChips.join('')}</div>` : ''}
  </div>`;
}
function renderComboMedia(combo) {
  if (!combo.media?.url) return '';
  return `<div class="saved-combo-media">${createPersonalLinkPreview(combo.media)}</div>`;
}

function renderComboStarter(combo) {
  const starterTokens = Array.isArray(combo.starterTokens) ? combo.starterTokens : getComboTokensFromText(combo.starterNotation || '');
  if (!starterTokens.length) return '';
  return `
    <div class="saved-combo-starter">
      <span>Starter</span>
      <div class="saved-combo-starter-tokens">${renderComboOutputFromTokens(starterTokens)}</div>
    </div>
  `;
}

function renderSavedCombo(combo) {
  const tokens = Array.isArray(combo.tokens) ? combo.tokens : getComboTokensFromText(combo.notation || '');
  const name = escapeHtml(combo.name || '');
  const actionName = name || 'ce combo';
  const media = renderComboMedia(combo);
  const title = name ? `<div class="saved-combo-title">${name}</div>` : '';
  return `
    <article class="saved-combo-card${media ? ' has-media' : ''}" data-combo-id="${escapeHtml(combo.id)}" draggable="true">
      <button class="saved-combo-delete" type="button" title="Supprimer ce combo" aria-label="Supprimer ${escapeHtml(actionName)}">×</button>
      <button class="saved-combo-edit" type="button" title="Éditer ce combo" aria-label="Éditer ${escapeHtml(actionName)}">✎</button>
      <div class="saved-combo-main">
        <div class="saved-combo-head">
          ${title}
          ${renderComboMetaChips(combo)}
        </div>
        <div class="saved-combo-notation">${renderComboOutputFromTokens(tokens)}</div>
      </div>
      ${media}
    </article>
  `;
}

function renderSavedCombosList(combos) {
  const safeCombos = normalizePersonalCombos(combos);
  if (!safeCombos.length) {
    return '<div class="personal-empty saved-combo-empty">Aucun combo sauvegardé pour l’instant.</div>';
  }
  return safeCombos.map(renderSavedCombo).join('');
}

function renderComboFilterChip(tag) {
  const safeTag = String(tag || '');
  let visual = '';
  let extraClass = '';

  const normalizedPosition = normalizeComboPosition(safeTag);
  if (COMBO_POSITION_VISUALS[normalizedPosition]) {
    visual = COMBO_POSITION_VISUALS[normalizedPosition];
    extraClass = ' combo-filter-chip-visual combo-filter-chip-position';
  } else if (COMBO_METER_VISUALS[safeTag]) {
    visual = COMBO_METER_VISUALS[safeTag];
    extraClass = ' combo-filter-chip-visual combo-filter-chip-meter';
  } else if (COMBO_FUSE_VISUALS[safeTag]) {
    visual = COMBO_FUSE_VISUALS[safeTag];
    extraClass = ' combo-filter-chip-visual combo-filter-chip-fuse';
  } else if (COMBO_TAG_VISUALS[safeTag]) {
    visual = COMBO_TAG_VISUALS[safeTag];
    extraClass = ' combo-filter-chip-visual combo-filter-chip-tag-logo';
  } else if (safeTag.startsWith('ASSIST ')) {
    const assistName = safeTag.replace(/^ASSIST\s+/, '');
    const game = getGame('2xko');
    const assistCharacter = game.characters.find((entry) => entry.name === assistName || entry.slug === assistName);
    visual = renderComboAssistPortrait(assistCharacter, 72, { tagName: 'i' });
    extraClass = ' combo-filter-chip-visual combo-filter-chip-assist';
  }

  const content = visual
    ? `<span class="combo-choice-visual" aria-hidden="true">${visual}</span><span class="sr-only-token">${escapeHtml(safeTag)}</span>`
    : escapeHtml(safeTag);
  return `<button class="combo-filter-chip${extraClass}" type="button" data-filter="${escapeHtml(safeTag)}" aria-pressed="false" title="${escapeHtml(safeTag)}">${content}</button>`;
}

function renderComboFilterBar(combos = []) {
  const usedTags = new Set();
  normalizePersonalCombos(combos).forEach((combo) => {
    (combo.tags || []).forEach((tag) => { if (!isRemovedComboTag(tag) && String(tag || '').toUpperCase() !== 'FURY') usedTags.add(tag); });
    if (combo.position) usedTags.add(normalizeComboPosition(combo.position));
    normalizeComboMeterCostValues(combo).forEach((meter) => usedTags.add(meter));
    if (combo.fuse) usedTags.add(combo.fuse);
    if (combo.assist) usedTags.add(`ASSIST ${combo.assist}`);
  });
  const assistPreferred = [...(getGame('2xko')?.characters || [])]
    .map((entry) => `ASSIST ${entry.name}`)
    .filter((tag) => usedTags.has(tag));
  const preferred = [
    ...assistPreferred,
    ...COMBO_FUSE_OPTIONS,
    ...COMBO_METER_OPTIONS,
    ...COMBO_POSITION_OPTIONS,
    ...COMBO_TAG_OPTIONS,
  ];
  const ordered = preferred.filter((tag) => usedTags.has(tag));
  const extra = [...usedTags]
    .filter((tag) => !ordered.includes(tag))
    .sort((a, b) => String(a).localeCompare(String(b), 'fr', { sensitivity: 'base' }));
  const filters = [...ordered, ...extra];
  if (!filters.length) return '<div class="combo-filter-bar" id="comboFilterBar" hidden></div>';
  return `
    <div class="combo-filter-bar" id="comboFilterBar" aria-label="Filtrer les combos">
      <span>Filtrer</span>
      ${filters.map(renderComboFilterChip).join('')}
    </div>
  `;
}

function renderPersonalCombosPanel(record, game, character) {
  const locked = !canUseCloudPersonalData();
  const hasComboBuilder = isModernDetailGame(game);
  return `
    <section class="personal-panel personal-combos-panel${locked ? ' is-locked' : ''}">
      <div class="personal-panel-header combo-list-header">
        <span>Combos</span>
        ${hasComboBuilder ? `<button class="combo-open-builder" type="button" id="comboOpenBuilder"${locked ? ' disabled aria-disabled="true" title="Connecte-toi pour ajouter un combo"' : ''}>Ajouter un combo</button>` : ''}
      </div>
      ${hasComboBuilder ? renderComboFilterBar(record.combos || []) : ''}
      ${renderComboBuilderForm(game, character)}
      <div class="saved-combos-list" id="savedCombosList">
        ${renderSavedCombosList(record.combos || [])}
      </div>
    </section>
  `;
}

function renderPersonalLinksPanel(record) {
  const locked = !canUseCloudPersonalData();
  const lockAttrs = locked ? ' disabled aria-disabled="true"' : '';
  return `
    <aside class="personal-column personal-links-panel">
      <section class="personal-panel${locked ? ' is-locked' : ''}">
        <div class="personal-panel-header">
          <span>Liens</span>
        </div>
        <form class="personal-link-form" id="personalLinkForm">
          <input id="personalLinkUrl" type="url" autocomplete="off" placeholder="${locked ? 'Connecte-toi pour ajouter un lien…' : 'Colle un lien YouTube, X ou autre…'}" required${lockAttrs} />
          <div class="personal-form-actions">
            <button id="personalSubmitLink" type="submit" aria-label="Ajouter le lien"${lockAttrs}>+</button>
          </div>
        </form>
        <div class="personal-links-list" id="personalLinksList">
          ${renderPersonalLinksList(record.links || [])}
        </div>
      </section>
    </aside>
  `;
}

function bindPersonalLab(game, character) {
  const notes = app.querySelector('#personalNotes');
  const form = app.querySelector('#personalLinkForm');
  const urlInput = app.querySelector('#personalLinkUrl');
  const list = app.querySelector('#personalLinksList');
  const submit = app.querySelector('#personalSubmitLink');
  if (!notes || !form || !urlInput || !list || !submit) return;

  let record = getPersonalRecord(game, character);
  let saveTimer = 0;
  let draggedLinkId = '';
  let draggedComboId = '';
  let editingComboId = '';
  const pendingComboModifiers = new Set();
  let pendingComboHitCount = '';
  const activeComboFilters = new Set();
  let lastDropMarker = null;
  let linkPointerDrag = null;
  let suppressLinkClick = false;
  const LINK_DRAG_HOLD_MS = 650;
  const LINK_DRAG_CANCEL_DISTANCE = 10;
  const isLocked = () => !canUseCloudPersonalData();

  const requireConnection = () => {
    setPersonalStatus('Connecte-toi pour sauvegarder');
    openAuthModal();
  };

  const persist = (message = 'Sauvegardé') => {
    if (!savePersonalRecord(game, character, record)) return;
    setPersonalStatus(message);
  };

  const scheduleTextSave = () => {
    if (isLocked()) {
      requireConnection();
      return;
    }
    record.notes = notes.value;
    window.clearTimeout(saveTimer);
    saveTimer = window.setTimeout(() => persist('Sauvegardé'), 180);
  };

  const refreshLinks = () => {
    list.innerHTML = renderPersonalLinksList(record.links || []);
    loadTwitterWidgets();
  };

  const clearDropMarkers = () => {
    list.querySelectorAll('.is-drop-before, .is-drop-after, .is-drop-target').forEach((node) => {
      node.classList.remove('is-drop-before', 'is-drop-after', 'is-drop-target');
    });
  };

  const getComboFilterValues = (combo) => {
    const values = new Set((Array.isArray(combo.tags) ? combo.tags : []).filter((tag) => !isRemovedComboTag(tag) && String(tag || '').toUpperCase() !== 'FURY'));
    if (combo.position) values.add(normalizeComboPosition(combo.position));
    normalizeComboMeterCostValues(combo).forEach((meter) => values.add(meter));
    if (combo.fuse) values.add(combo.fuse);
    if (combo.assist) values.add(`ASSIST ${combo.assist}`);
    return values;
  };

  const getFilteredCombos = () => {
    const combos = normalizePersonalCombos(record.combos || []);
    if (!activeComboFilters.size) return combos;
    return combos.filter((combo) => {
      const values = getComboFilterValues(combo);
      return [...activeComboFilters].every((filter) => values.has(filter));
    });
  };

  const refreshComboFilters = () => {
    const oldBar = app.querySelector('#comboFilterBar');
    if (!oldBar) return;
    const temp = document.createElement('div');
    temp.innerHTML = renderComboFilterBar(record.combos || []);
    const nextBar = temp.firstElementChild;
    if (!nextBar) return;
    nextBar.querySelectorAll('.combo-filter-chip').forEach((button) => {
      const filter = button.dataset.filter || '';
      const active = activeComboFilters.has(filter);
      button.classList.toggle('is-active', active);
      button.setAttribute('aria-pressed', String(active));
    });
    oldBar.replaceWith(nextBar);
  };

  const refreshCombos = () => {
    const comboList = app.querySelector('#savedCombosList');
    if (comboList) {
      comboList.innerHTML = renderSavedCombosList(getFilteredCombos());
      refreshComboFilters();
      loadTwitterWidgets();
    }
  };

  const resetForm = () => {
    urlInput.value = '';
    submit.textContent = 'Ajouter';
    submit.disabled = false;
  };

  notes.addEventListener('input', scheduleTextSave);

  const comboBuilderShell = app.querySelector('#comboBuilderShell');
  const comboOpenBuilder = app.querySelector('#comboOpenBuilder');
  const comboCloseBuilder = app.querySelector('#comboCloseBuilder');
  const comboOutput = app.querySelector('#comboOutput');
  const comboStarterOutput = app.querySelector('#comboStarterOutput');
  const comboNameInput = app.querySelector('#comboNameInput');
  const comboPositionOptions = app.querySelector('#comboPositionOptions');
  const comboMeterOptions = app.querySelector('#comboMeterOptions');
  const comboFuseOptions = app.querySelector('#comboFuseOptions');
  const comboAssistPicker = app.querySelector('#comboAssistPicker');
  const comboMediaUrl = app.querySelector('#comboMediaUrl');
  const comboDamageInput = app.querySelector('#comboDamageInput');
  let comboInputTarget = 'combo';

  const setSingleChoice = (selector, dataKey, value = '') => {
    app.querySelectorAll(selector).forEach((button) => {
      const active = (button.dataset[dataKey] || '') === value;
      button.classList.toggle('is-active', active);
      button.setAttribute('aria-pressed', String(active));
    });
  };

  const getSingleChoice = (selector, dataKey) => {
    const active = app.querySelector(`${selector}.is-active`);
    return active?.dataset?.[dataKey] || '';
  };

  const setComboMeterChoices = (values = []) => {
    const selected = new Set(values);
    app.querySelectorAll('.combo-meter-option').forEach((button) => {
      const active = selected.has(button.dataset.comboMeter || '');
      button.classList.toggle('is-active', active);
      button.setAttribute('aria-pressed', String(active));
    });
  };

  const getSelectedMeterCosts = () => COMBO_METER_OPTIONS.filter((value) => Boolean(app.querySelector(`.combo-meter-option.is-active[data-combo-meter="${CSS.escape(value)}"]`)));

  const getComboAssistCharacter = () => {
    const slug = getSingleChoice('.combo-assist-option', 'comboAssist');
    return slug ? game.characters.find((entry) => entry.slug === slug) || null : null;
  };

  const openComboBuilder = () => {
    if (isLocked()) {
      requireConnection();
      return;
    }
    if (!comboBuilderShell) return;
    const isMobileDetailLayout = window.matchMedia?.('(max-width: 900px)').matches || window.innerWidth <= 900;
    comboBuilderShell.hidden = false;
    comboBuilderShell.classList.add('is-open');
    document.body.dataset.comboBuilderOpen = 'true';
    window.requestAnimationFrame(() => {
      comboBuilderShell.scrollTo?.(0, 0);
      const combosPanel = app.querySelector('.personal-combos-panel');
      if (isMobileDetailLayout) {
        combosPanel?.scrollTo?.(0, 0);
        return;
      }
      comboNameInput?.focus();
    });
  };

  const closeComboBuilder = () => {
    if (!comboBuilderShell) return;
    comboBuilderShell.classList.remove('is-open');
    comboBuilderShell.hidden = true;
    delete document.body.dataset.comboBuilderOpen;
  };

  const resetComboBuilder = () => {
    if (comboOutput) setComboEditorTokens([], comboOutput);
    comboInputTarget = 'combo';
    comboOutput?.classList.add('is-active-editor');
    if (comboNameInput) comboNameInput.value = '';
    setSingleChoice('.combo-position-option', 'comboPosition', '');
    setSingleChoice('.combo-meter-option', 'comboMeter', '');
    setSingleChoice('.combo-fuse-option', 'comboFuse', '');
    setSingleChoice('.combo-assist-option', 'comboAssist', '');
    if (comboMediaUrl) comboMediaUrl.value = '';
    if (comboDamageInput) comboDamageInput.value = '';
    editingComboId = '';
    pendingComboModifiers.clear();
    pendingComboHitCount = '';
    updatePendingComboModifierButtons();
    const addButton = app.querySelector('#comboAddNotation');
    if (addButton) addButton.textContent = 'Ajouter le combo';
    app.querySelectorAll('.combo-tag-option.is-active').forEach((button) => {
      button.classList.remove('is-active');
      button.setAttribute('aria-pressed', 'false');
    });
    updateComboEditorState(comboOutput);
  };

  const getSelectedComboTags = () => [...app.querySelectorAll('.combo-tag-option.is-active')]
    .map((button) => button.dataset.comboTag)
    .filter(Boolean);

  /* TechLab v1.0.65: éditeur de combo piloté par un vrai modèle.
     Objectif : arrêter les bugs natifs contenteditable avec spans non éditables
     (curseur fantôme, retour ligne invisible, texte supprimé en bloc, sélection instable). */
  const getActiveComboOutput = () => comboOutput;
  let comboEditorItems = [];
  let comboEditorCaretIndex = 0;
  let comboEditorSelectionStart = null;
  let comboEditorSelectionEnd = null;
  let comboPointerSelection = null;
  let comboSavedCaretRange = null;

  const clampComboIndex = (index) => Math.max(0, Math.min(comboEditorItems.length, Number(index) || 0));
  const isComboEditorSelectionActive = () => comboEditorSelectionStart !== null
    && comboEditorSelectionEnd !== null
    && comboEditorSelectionStart !== comboEditorSelectionEnd;

  const getComboEditorSelectionBounds = () => {
    if (!isComboEditorSelectionActive()) return null;
    return {
      from: Math.min(comboEditorSelectionStart, comboEditorSelectionEnd),
      to: Math.max(comboEditorSelectionStart, comboEditorSelectionEnd),
    };
  };

  const clearComboEditorCustomSelection = (rerender = true) => {
    comboEditorSelectionStart = null;
    comboEditorSelectionEnd = null;
    if (rerender) renderComboEditor();
  };

  const setComboEditorSelection = (startIndex, endIndex, rerender = true) => {
    comboEditorSelectionStart = clampComboIndex(startIndex);
    comboEditorSelectionEnd = clampComboIndex(endIndex);
    comboEditorCaretIndex = comboEditorSelectionEnd;
    if (!isComboEditorSelectionActive()) {
      comboEditorSelectionStart = null;
      comboEditorSelectionEnd = null;
    }
    if (rerender) renderComboEditor();
  };

  const tokenFromComboEditorNode = (node) => {
    if (!node) return null;
    if (node.__comboEditorItem) return { kind: node.kind, value: node.value };
    if (node.dataset?.comboEditorToken) return { kind: 'token', value: decodeComboEditorToken(node.dataset.comboEditorToken) };
    if (node.dataset?.comboEditorLineBreak === 'true') return { kind: 'newline' };
    if (node.nodeType === Node.TEXT_NODE) return { kind: 'text', value: node.textContent || '' };
    return null;
  };

  const makeComboEditorItem = (item) => {
    if (!item) return null;
    if (item.kind === 'newline' || isComboNewlineToken(item)) return { kind: 'newline' };
    if (item.kind === 'token') return { kind: 'token', value: item.value };
    if (isComboTextEntry(item)) return { kind: 'text', value: item.value || '' };
    if (item.kind === 'text') return { kind: 'text', value: item.value || '' };
    if (item.kind === 'char') return { kind: 'char', value: item.value || '' };
    return { kind: 'token', value: item };
  };

  const expandComboEditorItem = (item) => {
    const normalized = makeComboEditorItem(item);
    if (!normalized) return [];
    if (normalized.kind === 'text') {
      return String(normalized.value || '')
        .replace(/\u200b/g, '')
        .split('')
        .flatMap((char) => char === '\n' ? [{ kind: 'newline' }] : [{ kind: 'char', value: char }]);
    }
    return [normalized];
  };

  const itemsToComboTokens = (items = comboEditorItems) => {
    const tokens = [];
    let textBuffer = '';
    const flushText = () => {
      const value = textBuffer.replace(/\u200b/g, '');
      if (value.trim()) tokens.push({ kind: 'text', value: value.trim() });
      textBuffer = '';
    };
    items.forEach((item) => {
      if (item.kind === 'char') {
        textBuffer += item.value || '';
        return;
      }
      flushText();
      if (item.kind === 'newline') tokens.push({ kind: 'newline' });
      else if (item.kind === 'token') tokens.push(item.value);
    });
    flushText();
    return tokens;
  };

  const updateComboEditorState = (output = comboOutput) => {
    if (!output) return;
    const hasItems = comboEditorItems.some((item) => {
      if (item.kind === 'char') return String(item.value || '').trim().length > 0;
      return item.kind === 'token' || item.kind === 'newline';
    });
    output.dataset.empty = hasItems ? 'false' : 'true';
  };

  const createComboEditorCaretNode = () => {
    const caret = document.createElement('span');
    caret.className = 'combo-editor-caret';
    caret.setAttribute('aria-hidden', 'true');
    return caret;
  };

  const createComboEditorRenderedNode = (item, index, selected) => {
    let node;
    if (item.kind === 'token') {
      node = document.createElement('span');
      node.className = 'combo-editor-token';
      node.dataset.comboEditorToken = encodeComboEditorToken(item.value);
      node.innerHTML = renderComboToken(item.value);
      node.title = serializeComboModifiedToken(item.value) || String(item.value || '');
    } else if (item.kind === 'newline') {
      node = document.createElement('span');
      node.className = 'combo-editor-line-break';
      node.dataset.comboEditorLineBreak = 'true';
      node.setAttribute('aria-hidden', 'true');
    } else {
      node = document.createElement('span');
      node.className = 'combo-editor-char';
      node.textContent = item.value === ' ' ? '\u00a0' : item.value;
    }
    node.dataset.comboEditorIndex = String(index);
    if (selected) node.classList.add('is-combo-selected');
    return node;
  };

  function renderComboEditor(output = comboOutput) {
    if (!output) return;
    output.contentEditable = 'false';
    output.tabIndex = 0;
    output.setAttribute('role', 'textbox');
    output.setAttribute('aria-multiline', 'true');
    output.innerHTML = '';
    comboEditorCaretIndex = clampComboIndex(comboEditorCaretIndex);
    const selectionBounds = getComboEditorSelectionBounds();
    for (let index = 0; index <= comboEditorItems.length; index += 1) {
      if (!selectionBounds && index === comboEditorCaretIndex) output.appendChild(createComboEditorCaretNode());
      if (index >= comboEditorItems.length) break;
      const selected = Boolean(selectionBounds && index >= selectionBounds.from && index < selectionBounds.to);
      output.appendChild(createComboEditorRenderedNode(comboEditorItems[index], index, selected));
    }
    updateComboEditorState(output);
  }

  const setActiveComboEditor = () => {
    comboInputTarget = 'combo';
    comboOutput?.classList.add('is-active-editor');
    if (comboOutput) {
      comboOutput.contentEditable = 'false';
      comboOutput.tabIndex = 0;
    }
  };

  const getComboEditorNodes = (output = comboOutput) => Array.from(output?.querySelectorAll?.('[data-combo-editor-index]') || []);

  const getComboEditorIndexFromTarget = (target, output = comboOutput) => {
    const node = target?.closest?.('[data-combo-editor-index]');
    if (!node || !output?.contains(node)) return null;
    const index = Number(node.dataset.comboEditorIndex);
    return Number.isFinite(index) ? index : null;
  };

  const getComboEditorIndexFromPoint = (clientX, clientY, output = comboOutput, target = null) => {
    if (!output) return 0;
    const directIndex = getComboEditorIndexFromTarget(target || document.elementFromPoint(clientX, clientY), output);
    if (directIndex !== null) {
      const node = output.querySelector(`[data-combo-editor-index="${directIndex}"]`);
      const rect = node?.getBoundingClientRect();
      if (!rect) return directIndex;
      return clientX >= rect.left + rect.width / 2 ? directIndex + 1 : directIndex;
    }

    const nodes = getComboEditorNodes(output).map((node) => ({ node, index: Number(node.dataset.comboEditorIndex), rect: node.getBoundingClientRect() }))
      .filter((item) => Number.isFinite(item.index) && (item.rect.width || item.rect.height));
    if (!nodes.length) return 0;

    const lineTolerance = 22;
    let line = nodes.filter(({ rect }) => clientY >= rect.top - lineTolerance && clientY <= rect.bottom + lineTolerance);
    if (!line.length) {
      const nearest = nodes.reduce((best, item) => {
        const centerY = item.rect.top + item.rect.height / 2;
        const distance = Math.abs(centerY - clientY);
        return !best || distance < best.distance ? { ...item, distance } : best;
      }, null);
      if (!nearest) return comboEditorItems.length;
      const nearestY = nearest.rect.top + nearest.rect.height / 2;
      line = nodes.filter(({ rect }) => Math.abs((rect.top + rect.height / 2) - nearestY) <= lineTolerance);
    }

    line.sort((a, b) => a.rect.left - b.rect.left);
    const first = line[0];
    const last = line[line.length - 1];
    if (clientX <= first.rect.left + first.rect.width / 2) return first.index;
    for (const item of line) {
      if (clientX < item.rect.left + item.rect.width / 2) return item.index;
    }
    return last.index + 1;
  };

  const focusComboEditor = () => comboOutput?.focus?.({ preventScroll: true });

  const setComboCaretToIndex = (index, keepSelection = false) => {
    comboEditorCaretIndex = clampComboIndex(index);
    if (!keepSelection) {
      comboEditorSelectionStart = null;
      comboEditorSelectionEnd = null;
    }
    renderComboEditor();
    focusComboEditor();
    return true;
  };

  const deleteComboEditorSelection = () => {
    const bounds = getComboEditorSelectionBounds();
    if (!bounds) return false;
    comboEditorItems.splice(bounds.from, bounds.to - bounds.from);
    comboEditorCaretIndex = bounds.from;
    clearComboEditorCustomSelection(false);
    renderComboEditor();
    return true;
  };

  const insertComboEditorItems = (items) => {
    const normalizedItems = items.flatMap(expandComboEditorItem).filter(Boolean);
    if (!normalizedItems.length) return false;
    deleteComboEditorSelection();
    const index = clampComboIndex(comboEditorCaretIndex);
    comboEditorItems.splice(index, 0, ...normalizedItems);
    comboEditorCaretIndex = index + normalizedItems.length;
    renderComboEditor();
    focusComboEditor();
    return true;
  };

  const insertNodeInComboEditor = (node) => {
    const item = tokenFromComboEditorNode(node);
    if (!item) return;
    insertComboEditorItems([item]);
  };

  const createEditorTokenNode = (tokenValue) => {
    const span = document.createElement('span');
    span.__comboEditorItem = true;
    span.kind = 'token';
    span.value = tokenValue;
    span.dataset.comboEditorToken = encodeComboEditorToken(tokenValue);
    return span;
  };

  const createComboEditorLineBreakNode = () => {
    const span = document.createElement('span');
    span.__comboEditorItem = true;
    span.kind = 'newline';
    span.dataset.comboEditorLineBreak = 'true';
    return span;
  };

  const insertTextInComboEditor = (text) => insertComboEditorItems([{ kind: 'text', value: text }]);

  const rememberComboCaret = () => {};
  const normalizeComboEditorTextNodes = () => {};
  const isComboEditorSpacerTextNode = () => false;
  const setComboCaretFromPoint = (clientX, clientY, output = comboOutput, target = null) => setComboCaretToIndex(getComboEditorIndexFromPoint(clientX, clientY, output, target));

  const moveComboCaretByKeyboard = (direction) => {
    if (isComboEditorSelectionActive()) {
      const bounds = getComboEditorSelectionBounds();
      setComboCaretToIndex(direction > 0 ? bounds.to : bounds.from);
      return true;
    }
    return setComboCaretToIndex(comboEditorCaretIndex + direction);
  };

  const updatePendingComboModifierButtons = () => {
    app.querySelectorAll('[data-combo-token]').forEach((button) => {
      const token = button.dataset.comboToken || '';
      const active = pendingComboModifiers.has(token) || (token === 'HIT#' && Boolean(pendingComboHitCount));
      button.classList.toggle('is-pending-modifier', active);
      if (COMBO_PENDING_MODIFIERS.includes(token) || token === 'HIT#') {
        button.setAttribute('aria-pressed', active ? 'true' : 'false');
      }
    });
  };

  const promptComboHitCount = () => {
    const raw = window.prompt('Nombre de hits ?', pendingComboHitCount || '2');
    if (raw === null) return;
    const value = String(raw).replace(/[^0-9]/g, '').slice(0, 2);
    pendingComboHitCount = value || '';
    updatePendingComboModifierButtons();
  };

  const buildModifiedComboToken = (base) => {
    const mods = [...pendingComboModifiers].map(normalizeComboModifierName);
    const token = normalizeComboModifiedToken({ kind: 'modified', base, mods, hitCount: pendingComboHitCount });
    pendingComboModifiers.clear();
    pendingComboHitCount = '';
    updatePendingComboModifierButtons();
    return token || base;
  };

  const insertComboToken = (tokenValue) => {
    if (!comboOutput) return;
    if (tokenValue === 'HIT#') {
      promptComboHitCount();
      return;
    }
    if (COMBO_PENDING_MODIFIERS.includes(tokenValue)) {
      if (pendingComboModifiers.has(tokenValue)) pendingComboModifiers.delete(tokenValue);
      else pendingComboModifiers.add(tokenValue);
      updatePendingComboModifierButtons();
      return;
    }
    if (isComboNewlineToken(tokenValue)) {
      insertNodeInComboEditor(createComboEditorLineBreakNode());
      return;
    }
    const tokenToInsert = (pendingComboModifiers.size || pendingComboHitCount) && COMBO_MODIFIABLE_INPUTS.includes(tokenValue)
      ? buildModifiedComboToken(tokenValue)
      : tokenValue;
    insertNodeInComboEditor(createEditorTokenNode(tokenToInsert));
  };

  const setComboEditorTokens = (tokens = [], output = comboOutput) => {
    if (!output) return;
    comboEditorItems = [];
    (Array.isArray(tokens) ? tokens : []).forEach((token) => {
      if (isComboNewlineToken(token) || token?.kind === 'newline') {
        comboEditorItems.push({ kind: 'newline' });
      } else if (isComboTextEntry(token)) {
        comboEditorItems.push(...expandComboEditorItem({ kind: 'text', value: token.value || '' }));
      } else {
        comboEditorItems.push({ kind: 'token', value: token });
      }
    });
    comboEditorCaretIndex = comboEditorItems.length;
    clearComboEditorCustomSelection(false);
    renderComboEditor(output);
  };

  const loadComboForEdit = (combo) => {
    if (!combo) return;
    editingComboId = combo.id || '';
    openComboBuilder();
    setComboEditorTokens(Array.isArray(combo.tokens) ? combo.tokens : getComboTokensFromText(combo.notation || ''), comboOutput);
    setActiveComboEditor();
    if (comboNameInput) comboNameInput.value = combo.name || '';
    const legacyPosition = (combo.tags || []).find((tag) => COMBO_POSITION_OPTIONS.includes(tag)) || '';
    setSingleChoice('.combo-position-option', 'comboPosition', combo.position || legacyPosition);
    setComboMeterChoices(normalizeComboMeterCostValues(combo));
    setSingleChoice('.combo-fuse-option', 'comboFuse', combo.fuse || '');
    setSingleChoice('.combo-assist-option', 'comboAssist', combo.assistSlug || '');
    if (comboDamageInput) comboDamageInput.value = combo.damage || '';
    if (comboMediaUrl) comboMediaUrl.value = combo.media?.url || '';
    app.querySelectorAll('.combo-tag-option').forEach((button) => {
      const active = (combo.tags || []).includes(button.dataset.comboTag || '');
      button.classList.toggle('is-active', active);
      button.setAttribute('aria-pressed', String(active));
    });
    const addButton = app.querySelector('#comboAddNotation');
    if (addButton) addButton.textContent = 'Sauvegarder';
  };

  const getComboEditorTokens = (output = comboOutput) => {
    if (!output) return [];
    return itemsToComboTokens(comboEditorItems)
      .filter((token, index, array) => !(isComboNewlineToken(token) && (index === 0 || isComboNewlineToken(array[index - 1]))));
  };

  updateComboEditorState(comboOutput);
  setActiveComboEditor('combo');
  renderComboEditor(comboOutput);

  comboOutput?.addEventListener('focus', () => {
    setActiveComboEditor('combo');
  });

  comboOutput?.addEventListener('pointerdown', (event) => {
    if (event.button !== 0) return;
    event.preventDefault();
    setActiveComboEditor('combo');
    focusComboEditor();
    const index = getComboEditorIndexFromPoint(event.clientX, event.clientY, comboOutput, event.target);
    comboPointerSelection = { anchor: index, moved: false, x: event.clientX, y: event.clientY };
    setComboCaretToIndex(index);
  });

  comboOutput?.addEventListener('pointermove', (event) => {
    if (!comboPointerSelection || (event.buttons & 1) !== 1) return;
    const moved = Math.hypot(event.clientX - comboPointerSelection.x, event.clientY - comboPointerSelection.y);
    if (moved > 4) comboPointerSelection.moved = true;
    if (!comboPointerSelection.moved) return;
    event.preventDefault();
    const index = getComboEditorIndexFromPoint(event.clientX, event.clientY, comboOutput, event.target);
    setComboEditorSelection(comboPointerSelection.anchor, index);
  });

  comboOutput?.addEventListener('pointerup', (event) => {
    if (!comboPointerSelection) return;
    event.preventDefault();
    if (!comboPointerSelection.moved) {
      const index = getComboEditorIndexFromPoint(event.clientX, event.clientY, comboOutput, event.target);
      setComboCaretToIndex(index);
    }
    comboPointerSelection = null;
  });

  comboOutput?.addEventListener('pointercancel', () => {
    comboPointerSelection = null;
  });

  comboOutput?.addEventListener('click', (event) => {
    event.preventDefault();
    setActiveComboEditor('combo');
    focusComboEditor();
  });

  comboOutput?.addEventListener('paste', (event) => {
    const text = event.clipboardData?.getData('text/plain') || '';
    if (!text) return;
    event.preventDefault();
    insertTextInComboEditor(text);
  });

  comboOutput?.addEventListener('keydown', async (event) => {
    setActiveComboEditor('combo');

    if ((event.ctrlKey || event.metaKey) && event.key.toLowerCase() === 'a') {
      event.preventDefault();
      setComboEditorSelection(0, comboEditorItems.length);
      return;
    }

    if ((event.ctrlKey || event.metaKey) && event.key.toLowerCase() === 'c') {
      const bounds = getComboEditorSelectionBounds();
      if (bounds) {
        event.preventDefault();
        const selected = comboEditorItems.slice(bounds.from, bounds.to);
        const text = serializeComboTokens(itemsToComboTokens(selected));
        try { await navigator.clipboard?.writeText(text); } catch (_) {}
      }
      return;
    }

    if ((event.ctrlKey || event.metaKey) && event.key.toLowerCase() === 'x') {
      const bounds = getComboEditorSelectionBounds();
      if (bounds) {
        event.preventDefault();
        const selected = comboEditorItems.slice(bounds.from, bounds.to);
        const text = serializeComboTokens(itemsToComboTokens(selected));
        try { await navigator.clipboard?.writeText(text); } catch (_) {}
        deleteComboEditorSelection();
      }
      return;
    }

    if (event.key === 'ArrowLeft' && !event.altKey && !event.ctrlKey && !event.metaKey) {
      event.preventDefault();
      if (event.shiftKey) {
        const anchor = comboEditorSelectionStart ?? comboEditorCaretIndex;
        setComboEditorSelection(anchor, comboEditorCaretIndex - 1);
      } else moveComboCaretByKeyboard(-1);
      return;
    }

    if (event.key === 'ArrowRight' && !event.altKey && !event.ctrlKey && !event.metaKey) {
      event.preventDefault();
      if (event.shiftKey) {
        const anchor = comboEditorSelectionStart ?? comboEditorCaretIndex;
        setComboEditorSelection(anchor, comboEditorCaretIndex + 1);
      } else moveComboCaretByKeyboard(1);
      return;
    }

    if (event.key === 'Home' && !event.altKey && !event.ctrlKey && !event.metaKey) {
      event.preventDefault();
      setComboCaretToIndex(0);
      return;
    }

    if (event.key === 'End' && !event.altKey && !event.ctrlKey && !event.metaKey) {
      event.preventDefault();
      setComboCaretToIndex(comboEditorItems.length);
      return;
    }

    if (event.key === 'Backspace' || event.key === 'Delete') {
      event.preventDefault();
      if (deleteComboEditorSelection()) return;
      if (event.key === 'Backspace' && comboEditorCaretIndex > 0) {
        comboEditorItems.splice(comboEditorCaretIndex - 1, 1);
        comboEditorCaretIndex -= 1;
      } else if (event.key === 'Delete' && comboEditorCaretIndex < comboEditorItems.length) {
        comboEditorItems.splice(comboEditorCaretIndex, 1);
      }
      renderComboEditor();
      focusComboEditor();
      return;
    }

    if (event.key === 'Enter') {
      event.preventDefault();
      insertComboEditorItems([{ kind: 'newline' }]);
      return;
    }

    if (event.key.length === 1 && !event.ctrlKey && !event.metaKey && !event.altKey) {
      event.preventDefault();
      insertTextInComboEditor(event.key);
    }
  });

  comboOpenBuilder?.addEventListener('click', openComboBuilder);
  comboCloseBuilder?.addEventListener('click', closeComboBuilder);

  app.querySelectorAll('[data-combo-token]').forEach((button) => {
    button.addEventListener('click', () => {
      const token = button.dataset.comboToken || '';
      if (!token) return;
      insertComboToken(token);
    });
  });

  app.querySelectorAll('.combo-tag-option').forEach((button) => {
    button.addEventListener('click', () => {
      button.classList.toggle('is-active');
      button.setAttribute('aria-pressed', button.classList.contains('is-active') ? 'true' : 'false');
    });
  });

  const bindSingleChoiceGroup = (root, selector, dataKey) => {
    root?.querySelectorAll(selector).forEach((button) => {
      button.addEventListener('click', () => {
        const current = getSingleChoice(selector, dataKey);
        const next = button.dataset[dataKey] || '';
        const allowEmptyToggle = true;
        setSingleChoice(selector, dataKey, allowEmptyToggle && current === next ? '' : next);
      });
    });
  };

  bindSingleChoiceGroup(comboPositionOptions, '.combo-position-option', 'comboPosition');
  comboMeterOptions?.querySelectorAll('.combo-meter-option').forEach((button) => {
    button.addEventListener('click', () => {
      const value = button.dataset.comboMeter || '';
      const wasActive = button.classList.contains('is-active');
      if (COMBO_NUMERIC_METER_OPTIONS.includes(value)) {
        app.querySelectorAll('.combo-meter-option').forEach((entry) => {
          if (COMBO_NUMERIC_METER_OPTIONS.includes(entry.dataset.comboMeter || '')) {
            entry.classList.remove('is-active');
            entry.setAttribute('aria-pressed', 'false');
          }
        });
      }
      button.classList.toggle('is-active', !wasActive);
      button.setAttribute('aria-pressed', button.classList.contains('is-active') ? 'true' : 'false');
    });
  });
  bindSingleChoiceGroup(comboFuseOptions, '.combo-fuse-option', 'comboFuse');
  bindSingleChoiceGroup(comboAssistPicker, '.combo-assist-option', 'comboAssist');

  const comboAdd = app.querySelector('#comboAddNotation');
  if (comboAdd) {
    comboAdd.addEventListener('click', async () => {
      if (isLocked()) {
        requireConnection();
        return;
      }
      const name = (comboNameInput?.value || '').trim();
      const tokens = getComboEditorTokens(comboOutput);
      const starterTokens = [];
      if (!tokens.length) {
        setPersonalStatus('Combo vide');
        return;
      }
      comboAdd.disabled = true;
      comboAdd.textContent = 'Ajout…';
      const mediaUrl = normalizePersonalUrl(comboMediaUrl?.value || '');
      const media = mediaUrl ? await buildPersonalLink(mediaUrl) : null;
      const rawDamage = String(comboDamageInput?.value || '').replace(/\D+/g, '').slice(0, 4);
      const assistCharacter = getComboAssistCharacter();
      const combo = {
        id: editingComboId || `${Date.now()}-${Math.random().toString(16).slice(2)}`,
        name,
        tokens,
        notation: serializeComboTokens(tokens),
        starterTokens: [],
        starterNotation: '',
        position: getSingleChoice('.combo-position-option', 'comboPosition'),
        tags: getSelectedComboTags(),
        meterCosts: getSelectedMeterCosts(),
        meterCost: getSelectedMeterCosts().find((value) => COMBO_NUMERIC_METER_OPTIONS.includes(value)) || (getSelectedMeterCosts().includes('FURY') ? 'FURY' : ''),
        fuse: getSingleChoice('.combo-fuse-option', 'comboFuse'),
        assist: assistCharacter?.name || '',
        assistSlug: assistCharacter?.slug || '',
        damage: rawDamage,
        media,
        createdAt: editingComboId
          ? (normalizePersonalCombos(record.combos).find((entry) => entry.id === editingComboId)?.createdAt || new Date().toISOString())
          : new Date().toISOString(),
        updatedAt: new Date().toISOString(),
      };
      if (editingComboId) {
        record.combos = normalizePersonalCombos(record.combos).map((entry) => entry.id === editingComboId ? combo : entry);
      } else {
        record.combos = [combo, ...normalizePersonalCombos(record.combos)];
      }
      const statusMessage = editingComboId ? 'Combo modifié' : 'Combo ajouté';
      resetComboBuilder();
      closeComboBuilder();
      refreshCombos();
      persist(statusMessage);
      loadTwitterWidgets();
      comboAdd.disabled = false;
      comboAdd.textContent = 'Ajouter le combo';
    });
  }

  const comboClear = app.querySelector('#comboClearNotation');
  if (comboClear) {
    comboClear.addEventListener('click', resetComboBuilder);
  }

  app.addEventListener('click', async (event) => {
    const comboYoutubePlay = event.target.closest('.saved-combo-media .personal-youtube-play');
    if (comboYoutubePlay) {
      const youtubeId = comboYoutubePlay.dataset.youtubeId;
      if (youtubeId) {
        comboYoutubePlay.outerHTML = `
          <iframe class="personal-youtube-frame" src="https://www.youtube-nocookie.com/embed/${escapeHtml(youtubeId)}?autoplay=1" title="Vidéo YouTube" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
        `;
      }
      return;
    }

    const deleteComboButton = event.target.closest('.saved-combo-delete');
    if (deleteComboButton) {
      if (isLocked()) {
        requireConnection();
        return;
      }
      const card = deleteComboButton.closest('.saved-combo-card');
      const id = card?.dataset.comboId;
      record.combos = normalizePersonalCombos(record.combos).filter((combo) => combo.id !== id);
      refreshCombos();
      persist('Combo supprimé');
      return;
    }

    const editComboButton = event.target.closest('.saved-combo-edit');
    if (editComboButton) {
      const card = editComboButton.closest('.saved-combo-card');
      const id = card?.dataset.comboId;
      const combo = normalizePersonalCombos(record.combos).find((entry) => entry.id === id);
      if (combo) loadComboForEdit(combo);
      return;
    }

    const copyComboButton = event.target.closest('.saved-combo-copy');
    if (copyComboButton) {
      const card = copyComboButton.closest('.saved-combo-card');
      const id = card?.dataset.comboId;
      const combo = normalizePersonalCombos(record.combos).find((entry) => entry.id === id);
      if (combo) {
        await navigator.clipboard.writeText(combo.notation || serializeComboTokens(combo.tokens));
        const oldText = copyComboButton.textContent;
        copyComboButton.textContent = 'Copié';
        window.setTimeout(() => { copyComboButton.textContent = oldText; }, 1000);
      }
    }
  });

  const comboListRoot = app.querySelector('#savedCombosList');
  const syncComboOrderFromDom = () => {
    const listNode = app.querySelector('#savedCombosList');
    if (!listNode) return false;
    const order = [...listNode.querySelectorAll('.saved-combo-card')].map((item) => item.dataset.comboId);
    const all = normalizePersonalCombos(record.combos || []);
    const byId = new Map(all.map((combo) => [combo.id, combo]));
    const moved = order.map((id) => byId.get(id)).filter(Boolean);
    const hidden = all.filter((combo) => !order.includes(combo.id));
    if (moved.length) {
      record.combos = [...moved, ...hidden];
      return true;
    }
    return false;
  };

  const getComboDragAfterElement = (container, y) => {
    const items = [...container.querySelectorAll('.saved-combo-card:not(.is-dragging)')];
    return items.reduce((closest, item) => {
      const box = item.getBoundingClientRect();
      const offset = y - box.top - box.height / 2;
      if (offset < 0 && offset > closest.offset) return { offset, element: item };
      return closest;
    }, { offset: Number.NEGATIVE_INFINITY, element: null }).element;
  };

  app.addEventListener('click', (event) => {
    const filterButton = event.target.closest('.combo-filter-chip');
    if (!filterButton) return;
    const filter = filterButton.dataset.filter || '';
    if (!filter) return;
    if (activeComboFilters.has(filter)) activeComboFilters.delete(filter);
    else activeComboFilters.add(filter);
    refreshCombos();
  });

  comboListRoot?.addEventListener('dragstart', (event) => {
    const card = event.target.closest('.saved-combo-card');
    if (!card || event.target.closest('button, a, iframe, input, textarea, select')) {
      event.preventDefault();
      return;
    }
    draggedComboId = card.dataset.comboId || '';
    card.classList.add('is-dragging');
    comboListRoot.classList.add('is-reordering');
    event.dataTransfer.effectAllowed = 'move';
    event.dataTransfer.setData('text/plain', draggedComboId);
  });

  comboListRoot?.addEventListener('dragover', (event) => {
    if (!draggedComboId) return;
    event.preventDefault();
    const dragging = comboListRoot.querySelector('.saved-combo-card.is-dragging');
    if (!dragging) return;
    const afterElement = getComboDragAfterElement(comboListRoot, event.clientY);
    if (afterElement) comboListRoot.insertBefore(dragging, afterElement);
    else comboListRoot.appendChild(dragging);
  });

  const endComboDrag = () => {
    if (!draggedComboId) return;
    const changed = syncComboOrderFromDom();
    draggedComboId = '';
    comboListRoot?.classList.remove('is-reordering');
    comboListRoot?.querySelectorAll('.saved-combo-card').forEach((node) => node.classList.remove('is-dragging'));
    if (changed) persist('Ordre des combos modifié');
  };

  comboListRoot?.addEventListener('drop', (event) => {
    if (!draggedComboId) return;
    event.preventDefault();
    endComboDrag();
  });

  comboListRoot?.addEventListener('dragend', endComboDrag);

  form.addEventListener('submit', async (event) => {
    event.preventDefault();
    if (isLocked()) {
      requireConnection();
      return;
    }
    const url = normalizePersonalUrl(urlInput.value);
    if (!url) return;
    submit.disabled = true;
    submit.textContent = 'Analyse…';
    const nextLink = await buildPersonalLink(url);

    record.links = [nextLink, ...(record.links || [])];
    persist('Lien ajouté');
    refreshLinks();
    resetForm();
  });

  list.addEventListener('click', (event) => {
    if (suppressLinkClick) {
      event.preventDefault();
      event.stopPropagation();
      return;
    }

    const playButton = event.target.closest('.personal-youtube-play');
    if (playButton) {
      const youtubeId = playButton.dataset.youtubeId;
      if (youtubeId) {
        playButton.outerHTML = `
          <iframe class="personal-youtube-frame" src="https://www.youtube-nocookie.com/embed/${escapeHtml(youtubeId)}?autoplay=1" title="Vidéo YouTube" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
        `;
      }
      return;
    }

    const item = event.target.closest('.personal-link-item');
    if (!item) return;
    const id = item.dataset.linkId;

    if (event.target.closest('.personal-delete-link')) {
      if (isLocked()) {
        requireConnection();
        return;
      }
      record.links = (record.links || []).filter((entry) => entry.id !== id);
      persist('Lien supprimé');
      refreshLinks();
      return;
    }

    if (!event.target.closest('a, button, iframe, input, textarea, select')) {
      const link = (record.links || []).find((entry) => entry.id === id);
      if (link?.url) window.open(link.url, '_blank', 'noopener,noreferrer');
    }
  });

  const syncLinkOrderFromDom = () => {
    const order = [...list.querySelectorAll('.personal-link-item')].map((item) => item.dataset.linkId);
    const byId = new Map((record.links || []).map((link) => [link.id, link]));
    const ordered = order.map((id) => byId.get(id)).filter(Boolean);
    if (ordered.length === (record.links || []).length) {
      record.links = ordered;
      return true;
    }
    return false;
  };

  const getDragAfterElement = (container, y) => {
    const items = [...container.querySelectorAll('.personal-link-item:not(.is-dragging)')];
    return items.reduce((closest, item) => {
      const box = item.getBoundingClientRect();
      const offset = y - box.top - box.height / 2;
      if (offset < 0 && offset > closest.offset) return { offset, element: item };
      return closest;
    }, { offset: Number.NEGATIVE_INFINITY, element: null }).element;
  };

  const activateLinkPointerDrag = () => {
    if (!linkPointerDrag || linkPointerDrag.active) return;
    linkPointerDrag.active = true;
    draggedLinkId = linkPointerDrag.id;
    linkPointerDrag.item.classList.add('is-dragging');
    list.classList.add('is-reordering');
    document.body.classList.add('is-link-dragging');
    try {
      linkPointerDrag.item.setPointerCapture?.(linkPointerDrag.pointerId);
    } catch (_) {
      // Certains embeds/iframes ne permettent pas toujours la capture pointer.
    }
  };

  const cleanupLinkPointerDrag = (shouldPersist = false) => {
    if (linkPointerDrag?.timer) window.clearTimeout(linkPointerDrag.timer);
    const wasActive = Boolean(linkPointerDrag?.active);
    linkPointerDrag = null;
    draggedLinkId = '';
    lastDropMarker = null;
    list.classList.remove('is-reordering');
    document.body.classList.remove('is-link-dragging');
    list.querySelectorAll('.personal-link-item').forEach((node) => node.classList.remove('is-dragging'));
    clearDropMarkers();
    if (wasActive) {
      suppressLinkClick = true;
      window.setTimeout(() => { suppressLinkClick = false; }, 0);
      if (shouldPersist && syncLinkOrderFromDom()) persist('Ordre modifié');
    }
  };

  list.addEventListener('pointerdown', (event) => {
    if (isLocked()) return;
    if (event.button !== 0) return;
    const item = event.target.closest('.personal-link-item');
    if (!item || event.target.closest('.personal-delete-link, input, textarea, select')) return;

    if (linkPointerDrag?.timer) window.clearTimeout(linkPointerDrag.timer);
    linkPointerDrag = {
      id: item.dataset.linkId || '',
      item,
      pointerId: event.pointerId,
      startX: event.clientX,
      startY: event.clientY,
      active: false,
      timer: 0,
    };

    // Drag par clic long : un clic court reste un clic normal dans le widget YouTube/X/lien.
    linkPointerDrag.timer = window.setTimeout(() => {
      activateLinkPointerDrag();
    }, LINK_DRAG_HOLD_MS);
  });

  list.addEventListener('pointermove', (event) => {
    if (!linkPointerDrag || event.pointerId !== linkPointerDrag.pointerId) return;
    const dx = event.clientX - linkPointerDrag.startX;
    const dy = event.clientY - linkPointerDrag.startY;
    const distance = Math.hypot(dx, dy);

    if (!linkPointerDrag.active) {
      // Si on bouge avant le délai, c'est un clic/scroll normal, pas un reorder.
      if (distance > LINK_DRAG_CANCEL_DISTANCE) cleanupLinkPointerDrag(false);
      return;
    }

    event.preventDefault();
    clearDropMarkers();
    const dragging = linkPointerDrag.item;
    const afterElement = getDragAfterElement(list, event.clientY);
    if (afterElement && afterElement !== dragging) {
      afterElement.classList.add('is-drop-before');
      lastDropMarker = afterElement;
      list.insertBefore(dragging, afterElement);
    } else if (!afterElement) {
      const items = [...list.querySelectorAll('.personal-link-item:not(.is-dragging)')];
      items.at(-1)?.classList.add('is-drop-after');
      lastDropMarker = items.at(-1) || null;
      list.appendChild(dragging);
    }
  });

  list.addEventListener('pointerup', (event) => {
    if (!linkPointerDrag || event.pointerId !== linkPointerDrag.pointerId) return;
    cleanupLinkPointerDrag(linkPointerDrag.active);
  });

  list.addEventListener('pointercancel', (event) => {
    if (!linkPointerDrag || event.pointerId !== linkPointerDrag.pointerId) return;
    cleanupLinkPointerDrag(false);
  });

  // On désactive le drag natif du navigateur pour les liens/images : seul le clic long gère le reorder.
  list.addEventListener('dragstart', (event) => {
    if (event.target.closest('.personal-link-item')) event.preventDefault();
  });


  loadTwitterWidgets();
}


function getCharacterArtStyle(character) {
  const scale = character.artScale || 1.12;
  const x = character.artX || '0px';
  const y = character.artY || '0px';
  const fit = character.imageFit || 'contain';
  const position = character.imagePosition || 'center bottom';
  return `--art-scale:${scale}; --art-x:${x}; --art-y:${y}; --art-fit:${fit}; --art-object-position:${position};`;
}

function renderDetailRosterCard(game, character) {
  if (isModernDetailGame(game)) {
    const healthMarkup = character.health
      ? `<span class="x2ko-stage-health x2ko-detail-health" id="detailHealth" aria-label="${escapeHtml(character.name)} : ${escapeHtml(String(character.health))} PV">${escapeHtml(String(character.health))}</span>`
      : '';
    return `
      <article class="detail-roster-card detail-roster-card-modern x2ko-detail-roster-card x2ko-stage-card is-left is-solo" data-game="${escapeHtml(game.id)}" data-character-slug="${escapeHtml(character.slug)}" data-size="${escapeHtml(character.size || 'medium')}" style="${getCharacterArtStyle(character)}">
        <div class="x2ko-stage-actions x2ko-detail-actions" aria-label="Liens ${escapeHtml(character.name)}">
          ${game.showOfficialLinks === false || character.officialUrl === null ? '' : `<a class="x2ko-stage-action x2ko-stage-official-link" href="${getOfficialChampionUrl(game, character)}" target="_blank" rel="noreferrer noopener"><span class="x2ko-action-label">Officiel</span></a>`}
          <a class="x2ko-stage-action x2ko-stage-wiki-link" href="${getWikiPageUrl(game, character)}" target="_blank" rel="noreferrer noopener"><span class="x2ko-action-label">Wiki</span></a>
        </div>
        <div class="x2ko-stage-main-link x2ko-detail-main-link" aria-label="Fiche ${escapeHtml(character.name)}">
          <div class="x2ko-stage-art-wrap x2ko-detail-art-wrap champion-art-wrap">
            <img class="x2ko-stage-art x2ko-detail-art champion-art detail-roster-art" alt="" />
            <div class="x2ko-stage-fallback x2ko-detail-fallback champion-fallback detail-roster-fallback" aria-hidden="true"></div>
          </div>
          <div class="x2ko-stage-caption x2ko-detail-caption">
            <strong>${escapeHtml(character.name)}</strong>
            ${healthMarkup}
          </div>
        </div>
      </article>
    `;
  }

  const officialMarkup = game.showOfficialLinks === false || character.officialUrl === null
    ? ''
    : `<a class="champion-link champion-official-link" href="${getOfficialChampionUrl(game, character)}" target="_blank" rel="noreferrer noopener">Officiel</a>`;
  const healthMarkup = character.health ? '<span class="health-badge" id="detailHealth">PV …</span>' : '';
  return `
    <article class="champion-card detail-roster-card" data-game="${escapeHtml(game.id)}" data-size="${escapeHtml(character.size || 'medium')}" style="${getCharacterArtStyle(character)}">
      <div class="champion-card-button detail-roster-button" aria-label="Fiche ${escapeHtml(character.name)}">
        <div class="champion-art-wrap">
          <img class="champion-art detail-roster-art" alt="" />
          <div class="champion-fallback detail-roster-fallback" aria-hidden="true"></div>
        </div>
        <div class="champion-overlay">
          <a class="champion-name-link" href="#/${escapeHtml(game.id)}/${escapeHtml(character.slug)}" aria-current="page">
            <h2 class="champion-name">${escapeHtml(character.name)}</h2>
            ${healthMarkup}
          </a>
          <div class="champion-links">
            <a class="champion-link champion-wiki-link" href="${getWikiPageUrl(game, character)}" target="_blank" rel="noreferrer noopener">Wiki</a>
            ${officialMarkup}
          </div>
          ${renderTeamBadge(character)}
        </div>
      </div>
    </article>
  `;
}

function renderCharacterPage(game, character) {
  const usesModernDetail = isModernDetailGame(game);
  document.body.dataset.actualGame = game.id;
  document.body.dataset.game = getDetailStyleGameId(game);
  document.body.dataset.theme = game.theme || game.id;
  document.body.dataset.page = 'detail';
  delete document.body.dataset.comboBuilderOpen;
  document.body.dataset.character = character.slug;

  const modernDetailBgUrl = game.id === '2xko' && X2KO_FANTASY_ART_SLUGS.has(character.slug)
    ? get2XkoFantasyArtUrl(character.slug)
    : game.id === 'marvel-tokon'
      ? MARVEL_TOKON_BACKGROUND_URL
      : '';
  const hasModernDetailBackground = usesModernDetail && Boolean(modernDetailBgUrl);
  document.body.classList.toggle('has-x2ko-fantasy-bg', hasModernDetailBackground);
  document.body.classList.toggle('has-modern-detail-bg', hasModernDetailBackground);
  document.body.classList.toggle('has-marvel-detail-bg', game.id === 'marvel-tokon');
  if (hasModernDetailBackground) {
    document.body.style.setProperty('--x2ko-detail-bg', `url('${modernDetailBgUrl}')`);
    document.body.style.setProperty('--modern-detail-bg', `url('${modernDetailBgUrl}')`);
  } else {
    document.body.style.removeProperty('--x2ko-detail-bg');
    document.body.style.removeProperty('--modern-detail-bg');
  }

  const record = getPersonalRecord(game, character);
  document.body.dataset.mobileDetailTab = 'notes';
  const detailBackground = getModernDetailBackgroundAttributes(game, character);
  app.innerHTML = `
    <article class="detail-page detail-page-personal detail-page-reworked${isModernDetailGame(game) ? ' detail-page-modern-foundation' : ''}${detailBackground.className}"${detailBackground.style}>
      <section class="detail-lab-grid">
        <aside class="detail-character-column">
          ${renderDetailGameHeader(game)}
          ${renderDetailRosterCard(game, character)}
          ${renderPersonalNotesPanel(record)}
        </aside>
        ${renderPersonalCombosPanel(record, game, character)}
        ${renderPersonalLinksPanel(record)}
      </section>
      <div class="mobile-detail-bottom-stack" aria-label="Navigation fiche mobile">
        ${renderMobileDetailTabs()}
        ${renderMobileDetailDock(game)}
      </div>
    </article>
  `;

  const image = app.querySelector('.detail-roster-art');
  const fallback = app.querySelector('.detail-roster-fallback');
  const detailHealth = app.querySelector('#detailHealth');
  loadCharacterImage(image, fallback, character);
  if (character.health && detailHealth) loadCharacterHealth(detailHealth, character, game);
  bindPersonalLab(game, character);
  bindMobileDetailTabs();
  hydratePersonalRecordFromCloud(game, character);
}

function resetSelectionsOnGameSwitch(nextGameId) {
  if (currentGameId && currentGameId !== nextGameId) clearAllSelections();
  currentGameId = nextGameId;
}

function renderHomePage() {
  document.body.dataset.page = 'home';
  delete document.body.dataset.mobileDetailTab;
  delete document.body.dataset.comboBuilderOpen;
  document.body.dataset.theme = 'home';
  delete document.body.dataset.game;
  delete document.body.dataset.character;
  delete document.body.dataset.actualGame;
  document.body.classList.remove('has-x2ko-fantasy-bg', 'has-modern-detail-bg', 'has-marvel-detail-bg');
  document.body.style.removeProperty('--x2ko-detail-bg');
  document.body.style.removeProperty('--modern-detail-bg');
  resetPageTheme();
  currentGameId = 'home';
  renderGameNav('');

  const gameCards = games.map((game) => `
    <a class="home-game-card home-game-card-xl" data-game-switch-link="true" href="#/${escapeHtml(game.id)}" style="--button-accent:${game.navAccent || '#eaff2c'};--button-accent-2:${game.navAccent2 || game.navAccent || '#18e6ff'}" aria-label="Ouvrir ${escapeHtml(game.name)}">
      <span class="home-game-card-logo">${renderLogo(game, true)}</span>
    </a>
  `).join('');

  app.innerHTML = `
    <section class="home-screen home-screen-labgate" aria-label="Accueil TechLab">
      ${renderHomeAuthDock()}
      <nav class="home-game-column" aria-label="Choisir un jeu">
        ${gameCards}
      </nav>

      <div class="home-main-zone">
        <a class="home-brand home-brand-xl" href="#/home" aria-label="Accueil TechLab" title="Accueil TechLab">
          <img src="./assets/techlab-logo.png" alt="TechLab" loading="eager" />
        </a>

        <div class="home-intro-panel">
          <p class="home-intro-title">Labbe tes persos, garde tes tags X, notes et combos au même endroit.</p>
          <p class="home-intro-copy">Le hub FGC pour retrouver tes techs vite, changer de jeu sans te perdre, et sauver ceux qui puent sous les bras après trois sets trop sérieux.</p>
        </div>
      </div>

      ${renderMobileHomeDock()}
    </section>
  `;

  bindHomePage();
}

function bindHomePage() {
  const quote = app.querySelector('#homeQuoteText');
  if (quote) quote.classList.add('is-visible');
}

document.addEventListener('click', (event) => {
  const trigger = event.target.closest('.rail-techlab-logo, .home-brand, .brand-logo-only, .site-logo');
  if (!trigger) return;
  playLabQuoteAudio();
});

function render() {
  const { gameId, characterSlug } = parseRoute();

  if (gameId === 'home') {
    renderHomePage();
    return;
  }

  const game = getGame(gameId);
  const character = characterSlug ? getCharacter(game, characterSlug) : null;

  resetSelectionsOnGameSwitch(game.id);
  renderGameNav(game.id);

  if (characterSlug && character) {
    renderCharacterPage(game, character);
    return;
  }

  if (characterSlug && !character) {
    setRoute(game.id);
    return;
  }

  renderGamePage(game);
}

window.addEventListener('hashchange', render);

initializeTechLabAuth();

if (!window.location.hash) {
  setRoute('home');
} else {
  render();
}
