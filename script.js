const WIKI_BASE_URL = 'https://wiki.play2xko.com/en-us';
const WIKI_API_URL = `${WIKI_BASE_URL}/api.php`;
const IMAGE_CACHE_KEY = 'techlab-2xko-wiki-images-v3';
const HEALTH_CACHE_KEY = 'techlab-2xko-wiki-health-v1';
const X_SEARCH_BASE_URL = 'https://x.com/search';
const OFFICIAL_2XKO_CHAMPIONS_URL = 'https://2xko.riotgames.com/fr-fr/champions/';
const OFFICIAL_2XKO_NEWS_URL = 'https://2xko.riotgames.com/fr-fr/news/';
const OFFICIAL_2XKO_LOGO_URL = 'https://upload.wikimedia.org/wikipedia/commons/8/88/2XKO_game_logo.svg';
const MARVEL_TOKON_LOGO_URL = 'https://cdn.marvel.com/content/1x/marveltokonfightingsouls_lob_log_def_01.webp';
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

const X_ICON = `
  <svg class="x-icon" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
    <path d="M18.9 2h3.3l-7.2 8.2L23.5 22h-6.7l-5.2-6.8L5.6 22H2.2l7.7-8.8L1.8 2h6.9l4.7 6.2L18.9 2Zm-1.2 18h1.8L7.7 3.9H5.8L17.7 20Z" />
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
    logo: 'https://www.dustloop.com/wiki/images/thumb/8/8e/MTFS_Team_Unbreakable_X-Men.png/32px-MTFS_Team_Unbreakable_X-Men.png',
    accent: '#ff9f1c',
    accent2: '#ffd43b',
  },
  'Amazing Guardians': {
    logo: 'https://www.dustloop.com/wiki/images/thumb/8/86/MTFS_Team_Amazing_Guardians.png/32px-MTFS_Team_Amazing_Guardians.png',
    accent: '#ff2147',
    accent2: '#ff7a90',
  },
  'Fighting Avengers': {
    logo: 'https://www.dustloop.com/wiki/images/thumb/1/10/MTFS_Team_Fighting_Avengers.png/32px-MTFS_Team_Fighting_Avengers.png',
    accent: '#1b78ff',
    accent2: '#5bdcff',
  },
  'Knights of Doom': {
    logo: 'https://www.dustloop.com/wiki/images/thumb/9/91/MTFS_Team_Knights_of_Doom.png/32px-MTFS_Team_Knights_of_Doom.png',
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
    navAccent: '#eaff2c',
    navAccent2: '#18e6ff',
    description: 'Sélectionne un ou deux champions pour générer une recherche X/Twitter propre, puis ouvre les fiches, le wiki ou les pages officielles.',
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
      { name: 'Akali', slug: 'akali', health: 900, size: 'medium', artScale: 1.10, artX: '0px', artY: '12px' },
      { name: 'Teemo', slug: 'teemo', health: 900, size: 'tiny', artScale: 1.02, artX: '0px', artY: '18px' },
      { name: 'Ahri', slug: 'ahri', health: 925, size: 'medium', artScale: 1.07, artX: '0px', artY: '13px' },
      { name: 'Ekko', slug: 'ekko', health: 925, size: 'medium', artScale: 1.08, artX: '-1px', artY: '14px' },
      { name: 'Caitlyn', slug: 'caitlyn', health: 950, size: 'medium', artScale: 1.05, artX: '0px', artY: '14px' },
      { name: 'Jinx', slug: 'jinx', health: 950, size: 'medium', artScale: 1.08, artX: '0px', artY: '14px' },
      { name: 'Senna', slug: 'senna', health: 975, size: 'medium', artScale: 1.07, artX: '0px', artY: '15px' },
      { name: 'Vi', slug: 'vi', health: 975, size: 'medium', artScale: 1.00, artX: '0px', artY: '17px' },
      { name: 'Yasuo', slug: 'yasuo', health: 975, size: 'medium', artScale: 1.05, artX: '-1px', artY: '15px' },
      { name: 'Thresh', slug: 'thresh', health: 1000, size: 'big', artScale: 1.07, artX: '-2px', artY: '11px' },
      { name: 'Warwick', slug: 'warwick', health: 1000, size: 'big', artScale: 1.05, artX: '-2px', artY: '14px' },
      { name: 'Darius', slug: 'darius', health: 1025, size: 'big', artScale: 1.07, artX: '-12px', artY: '13px' },
      { name: 'Illaoi', slug: 'illaoi', health: 1025, size: 'big', artScale: 0.94, artX: '-2px', artY: '-26px' },
      { name: 'Blitzcrank', slug: 'blitzcrank', health: 1050, size: 'big', artScale: 1.06, artX: '0px', artY: '13px' },
      { name: 'Braum', slug: 'braum', health: 1100, size: 'big', artScale: 1.05, artX: '-1px', artY: '13px' },
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
    navAccent: '#18bafc',
    navAccent2: '#ff8a00',
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
      { name: 'Wolverine', slug: 'wolverine', tagSlug: 'WOLVERINE', team: 'Unbreakable X-Men', size: 'medium', imageUrl: 'https://www.dustloop.com/wiki/images/8/83/MTFS_Wolverine_Portrait.png', imageFit: 'contain', imagePosition: 'center bottom', artScale: 1.1, artX: '0px', artY: '0px', wikiUrl: 'https://www.dustloop.com/w/MTFS/Wolverine', officialUrl: null },
      { name: 'Storm', slug: 'storm', tagSlug: 'STORM', team: 'Unbreakable X-Men', size: 'medium', imageUrl: 'https://www.dustloop.com/wiki/images/b/bb/MTFS_Storm_Portrait.png', imageFit: 'contain', imagePosition: 'center bottom', artScale: 1.08, artX: '0px', artY: '0px', wikiUrl: 'https://www.dustloop.com/w/MTFS/Storm', officialUrl: null },
      { name: 'Magik', slug: 'magik', tagSlug: 'MAGIK', team: 'Unbreakable X-Men', size: 'medium', imageUrl: 'https://www.dustloop.com/wiki/images/1/1f/MTFS_Magik_Portrait.png', imageFit: 'contain', imagePosition: 'center bottom', artScale: 1.07, artX: '0px', artY: '0px', wikiUrl: 'https://www.dustloop.com/w/MTFS/Magik', officialUrl: null },
      { name: 'Danger', slug: 'danger', tagSlug: 'DANGER', team: 'Unbreakable X-Men', size: 'medium', imageUrl: 'https://www.dustloop.com/wiki/images/e/e5/MTFS_Danger_Portrait.png', imageFit: 'contain', imagePosition: 'center bottom', artScale: 1.06, artX: '0px', artY: '0px', wikiUrl: 'https://www.dustloop.com/w/MTFS/Danger', officialUrl: null },
      { name: 'Spider-Man', slug: 'spider-man', tagSlug: 'SPIDERMAN', team: 'Amazing Guardians', size: 'medium', imageUrl: 'https://www.dustloop.com/wiki/images/f/f4/MTFS_Spider-Man_Portrait.png', imageFit: 'contain', imagePosition: 'center bottom', artScale: 1.08, artX: '0px', artY: '0px', wikiUrl: 'https://www.dustloop.com/w/MTFS/Spider-Man', officialUrl: null },
      { name: 'Ms. Marvel', slug: 'ms-marvel', tagSlug: 'MSMARVEL', team: 'Amazing Guardians', size: 'medium', imageUrl: 'https://www.dustloop.com/wiki/images/5/5b/MTFS_Ms_Marvel_Portrait.png', imageUrls: ['https://www.dustloop.com/wiki/images/5/5b/MTFS_Ms_Marvel_Portrait.png', 'https://www.dustloop.com/wiki/images/b/bc/MTFS_Ms._Marvel_Portrait.png', 'https://www.dustloop.com/wiki/images/6/6c/MTFS_MsMarvel_Portrait.png'], imageFit: 'contain', imagePosition: 'center bottom', artScale: 1.08, artX: '0px', artY: '0px', wikiUrl: 'https://www.dustloop.com/w/MTFS/Ms._Marvel', officialUrl: null },
      { name: 'Peni Parker', slug: 'peni-parker', tagSlug: 'PENIPARKER', team: 'Amazing Guardians', size: 'medium', imageUrl: 'https://www.dustloop.com/wiki/images/2/2a/MTFS_Peni_Parker_Portrait.png', imageFit: 'contain', imagePosition: 'center bottom', artScale: 1.05, artX: '0px', artY: '0px', wikiUrl: 'https://www.dustloop.com/w/MTFS/Peni_Parker', officialUrl: null },
      { name: 'Star-Lord', slug: 'star-lord', tagSlug: 'STARLORD', team: 'Amazing Guardians', size: 'medium', imageUrl: 'https://www.dustloop.com/wiki/images/7/78/MTFS_Star-Lord_Portrait.png', imageFit: 'contain', imagePosition: 'center bottom', artScale: 1.07, artX: '0px', artY: '0px', wikiUrl: 'https://www.dustloop.com/w/MTFS/Star-Lord', officialUrl: null },
      { name: 'Captain America', slug: 'captain-america', tagSlug: 'CAPTAINAMERICA', team: 'Fighting Avengers', size: 'medium', imageUrl: 'https://www.dustloop.com/wiki/images/e/ef/MTFS_Captain_America_Portrait.png', imageFit: 'contain', imagePosition: 'center bottom', artScale: 1.08, artX: '0px', artY: '0px', wikiUrl: 'https://www.dustloop.com/w/MTFS/Captain_America', officialUrl: null },
      { name: 'Iron Man', slug: 'iron-man', tagSlug: 'IRONMAN', team: 'Fighting Avengers', size: 'medium', imageUrl: 'https://www.dustloop.com/wiki/images/a/ab/MTFS_Iron_Man_Portrait.png', imageFit: 'contain', imagePosition: 'center bottom', artScale: 1.08, artX: '0px', artY: '0px', wikiUrl: 'https://www.dustloop.com/w/MTFS/Iron_Man', officialUrl: null },
      { name: 'Black Panther', slug: 'black-panther', tagSlug: 'BLACKPANTHER', team: 'Fighting Avengers', size: 'medium', imageUrl: 'https://www.dustloop.com/wiki/images/8/86/MTFS_Black_Panther_Portrait.png', imageFit: 'contain', imagePosition: 'center bottom', artScale: 1.08, artX: '0px', artY: '0px', wikiUrl: 'https://www.dustloop.com/w/MTFS/Black_Panther', officialUrl: null },
      { name: 'Hulk', slug: 'hulk', tagSlug: 'HULK', team: 'Fighting Avengers', size: 'big', imageUrl: 'https://www.dustloop.com/wiki/images/9/97/MTFS_Hulk_Portrait.png', imageFit: 'contain', imagePosition: 'center bottom', artScale: 1.12, artX: '0px', artY: '0px', wikiUrl: 'https://www.dustloop.com/w/MTFS/Hulk', officialUrl: null },
      { name: 'Doctor Doom', slug: 'doctor-doom', tagSlug: 'DOCTORDOOM', team: 'Knights of Doom', size: 'medium', imageUrl: 'https://www.dustloop.com/wiki/images/2/2d/MTFS_Doctor_Doom_Portrait.png', imageFit: 'contain', imagePosition: 'center bottom', artScale: 1.1, artX: '0px', artY: '0px', wikiUrl: 'https://www.dustloop.com/w/MTFS/Doctor_Doom', officialUrl: null },
      { name: 'Magneto', slug: 'magneto', tagSlug: 'MAGNETO', team: 'Knights of Doom', size: 'medium', imageUrl: 'https://www.dustloop.com/wiki/images/4/48/MTFS_Magneto_Portrait.png', imageFit: 'contain', imagePosition: 'center bottom', artScale: 1.08, artX: '0px', artY: '0px', wikiUrl: 'https://www.dustloop.com/w/MTFS/Magneto', officialUrl: null },
      { name: 'Green Goblin', slug: 'green-goblin', tagSlug: 'GREENGOBLIN', team: 'Knights of Doom', size: 'medium', imageUrl: 'https://www.dustloop.com/wiki/images/8/8c/MTFS_Green_Goblin_Portrait.png', imageFit: 'contain', imagePosition: 'center bottom', artScale: 1.08, artX: '0px', artY: '0px', wikiUrl: 'https://www.dustloop.com/w/MTFS/Green_Goblin', officialUrl: null },
      { name: 'Carnage', slug: 'carnage', tagSlug: 'CARNAGE', team: 'Knights of Doom', size: 'medium', imageUrl: 'https://www.dustloop.com/wiki/images/6/68/MTFS_Carnage_Portrait.png', imageFit: 'contain', imagePosition: 'center bottom', artScale: 1.1, artX: '0px', artY: '0px', wikiUrl: 'https://www.dustloop.com/w/MTFS/Carnage', officialUrl: null },
      { name: 'Ghost Rider', slug: 'ghost-rider', tagSlug: 'GHOSTRIDER', team: 'Midnight Sons', size: 'medium', imageUrl: 'https://www.dustloop.com/wiki/images/6/6d/MTFS_Ghost_Rider_Portrait.png', imageFit: 'contain', imagePosition: 'center bottom', artScale: 1.1, artX: '0px', artY: '0px', wikiUrl: 'https://www.dustloop.com/w/MTFS/Ghost_Rider', officialUrl: null }
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
    navAccent: '#49c6ff',
    navAccent2: '#7dfcc6',
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
      { name: 'Katara', slug: 'katara', tagSlug: 'KATARA', health: 1000, size: 'medium', imageUrl: 'https://wiki.supercombo.gg/images/0/05/Avatar_Legends_Katara_Portrait.png', imageUrls: ['https://wiki.supercombo.gg/images/0/05/Avatar_Legends_Katara_Portrait.png'], wikiUrl: `${AVATAR_WIKI_BASE_URL}/Katara`, artScale: 1, artY: '0px' },
      { name: 'Sokka', slug: 'sokka', tagSlug: 'SOKKA', health: 1000, size: 'medium', imageUrl: '', wikiUrl: `${AVATAR_WIKI_BASE_URL}/Sokka`, artScale: 1, artY: '0px' },
      { name: 'Toph', slug: 'toph', tagSlug: 'TOPH', health: 1100, size: 'small', imageUrl: 'https://wiki.supercombo.gg/images/b/b0/Avatar_Legends_Toph_Portrait.png', imageUrls: ['https://wiki.supercombo.gg/images/b/b0/Avatar_Legends_Toph_Portrait.png'], wikiUrl: `${AVATAR_WIKI_BASE_URL}/Toph`, supports: ['Badgermole', 'The Boulder', 'The Hippo'], artScale: 1, artY: '0px' },
      { name: 'Zuko', slug: 'zuko', tagSlug: 'ZUKO', health: 1000, size: 'medium', imageUrl: 'https://wiki.supercombo.gg/images/7/7b/Avatar_Legends_Zuko_Portrait.png', imageUrls: ['https://wiki.supercombo.gg/images/7/7b/Avatar_Legends_Zuko_Portrait.png'], wikiUrl: `${AVATAR_WIKI_BASE_URL}/Zuko`, artScale: 1, artY: '0px' },
      { name: 'Azula', slug: 'azula', tagSlug: 'AZULA', health: 1000, size: 'medium', imageUrl: '', wikiUrl: `${AVATAR_WIKI_BASE_URL}/Azula`, artScale: 1, artY: '0px' },
      { name: 'Korra', slug: 'korra', tagSlug: 'KORRA', health: 1000, size: 'medium', imageUrl: 'https://wiki.supercombo.gg/images/2/21/Avatar_Legends_Korra_Portrait.png', imageUrls: ['https://wiki.supercombo.gg/images/2/21/Avatar_Legends_Korra_Portrait.png'], wikiUrl: `${AVATAR_WIKI_BASE_URL}/Korra`, artScale: 1, artY: '0px' },
      { name: 'Tenzin', slug: 'tenzin', tagSlug: 'TENZIN', health: 1000, size: 'medium', imageUrl: '', wikiUrl: `${AVATAR_WIKI_BASE_URL}/Tenzin`, artScale: 1, artY: '0px' },
      { name: 'À venir 1', slug: 'avatar-slot-9', tagSlug: 'SLOT_9', health: null, size: 'medium', imageUrl: '', wikiUrl: AVATAR_WIKI_BASE_URL, artScale: 1, artY: '0px', isPlaceholder: true },
      { name: 'À venir 2', slug: 'avatar-slot-10', tagSlug: 'SLOT_10', health: null, size: 'medium', imageUrl: '', wikiUrl: AVATAR_WIKI_BASE_URL, artScale: 1, artY: '0px', isPlaceholder: true },
      { name: 'À venir 3', slug: 'avatar-slot-11', tagSlug: 'SLOT_11', health: null, size: 'medium', imageUrl: '', wikiUrl: AVATAR_WIKI_BASE_URL, artScale: 1, artY: '0px', isPlaceholder: true },
      { name: 'À venir 4', slug: 'avatar-slot-12', tagSlug: 'SLOT_12', health: null, size: 'medium', imageUrl: '', wikiUrl: AVATAR_WIKI_BASE_URL, artScale: 1, artY: '0px', isPlaceholder: true },
    ],
  },
  {
    id: 'vf-crossroads',
    name: 'Virtua Fighter Crossroads',
    logoUrl: VF_CROSSROADS_LOGO_URL,
    logoText: 'VIRTUA FIGHTER CROSSROADS',
    theme: 'vf',
    navAccent: '#ff9f1c',
    navAccent2: '#e5383b',
    description: 'Page prévue pour Virtua Fighter Crossroads, attendu en 2027. Le cast sera ajouté quand les infos seront stables.',
    characters: [],
  },
];

const app = document.querySelector('#app');
const gameNav = document.querySelector('#gameNav');
const gameButtonTemplate = document.querySelector('#gameButtonTemplate');
const championCardTemplate = document.querySelector('#championCardTemplate');

let imageCache = readCache(IMAGE_CACHE_KEY);
let healthCache = readCache(HEALTH_CACHE_KEY);
let selectedByGame = { '2xko': [], 'marvel-tokon': [], 'avatar-legends': [] };
let selectedSupportByGame = { 'avatar-legends': '' };
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
  const [gameId = '2xko', characterSlug = ''] = cleanHash.split('/');
  return { gameId, characterSlug };
}

function setRoute(gameId, characterSlug = '') {
  window.location.hash = characterSlug ? `#/${gameId}/${characterSlug}` : `#/${gameId}`;
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

function renderGameNav(activeGameId) {
  gameNav.innerHTML = '';

  games.forEach((game) => {
    const item = gameButtonTemplate.content.cloneNode(true);
    const link = item.querySelector('.game-button');
    const name = item.querySelector('.game-name');
    const count = item.querySelector('.game-count');

    link.href = `#/${game.id}`;
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
    .filter((character) => !selectedSlugs.includes(character.slug))
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

function setSelectedCharacters(game, selectedSlugs) {
  selectedByGame[game.id] = selectedSlugs.slice(0, getSelectionLimit(game));
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
    ? selectedCharacters.map((character) => character.name).join(' + ')
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
      <strong>${game.id === 'marvel-tokon' ? 'Page officielle Marvel' : 'Actus, patch notes et annonces'}</strong>
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
    <section class="selection-builder" aria-label="Générateur de recherche X/Twitter">
      <div class="selection-intro">
        <p class="eyebrow">Recherche ${game.selectionLabel || 'solo / duo'}</p>
        <h2>${getSelectionHeading(game)}</h2>
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
            <button class="copy-button" id="copySimple" type="button" disabled>Copier</button>
            <button class="reset-button" id="resetSimple" type="button" disabled>Effacer</button>
          </div>
        </article>
        <article class="query-mode-card">
          <span>Filtrée</span>
          <code class="generated-query" id="filteredQuery"></code>
          <div class="query-actions">
            <a class="big-link query-link is-disabled" id="filteredLink" href="#" target="_blank" rel="noreferrer noopener" aria-label="Ouvrir sur X">${X_ICON}</a>
            <button class="copy-button" id="copyFiltered" type="button" disabled>Copier</button>
            <button class="reset-button" id="resetFiltered" type="button" disabled>Effacer</button>
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

function renderGamePage(game) {
  document.body.dataset.game = game.id;
  document.body.dataset.theme = game.theme || game.id;

  app.innerHTML = `
    ${renderGameHeader(game)}
    <div class="game-workspace">
      <aside class="info-column" aria-label="Infos et liens ${game.name}">
        ${renderSelectionBuilder(game)}
        ${renderQuickLinks(game)}
      </aside>
      <section class="cast-panel" aria-label="Personnages ${game.name}">
        <div class="champion-grid" id="championGrid"></div>
      </section>
    </div>
  `;

  const grid = app.querySelector('#championGrid');

  if (!game.characters.length) {
    grid.innerHTML = `
      <div class="empty-state">
        <h2>Pas encore rempli.</h2>
        <p>${game.description || 'On garde la place pour ce jeu, mais on se concentre d’abord sur 2XKO.'}</p>
      </div>
    `;
    return;
  }

  renderCharacterGroups(game, grid);

  [[app.querySelector('#copySimple'), 'simple'], [app.querySelector('#copyFiltered'), 'filtered']].forEach(([button, mode]) => {
    if (!button) return;
    button.addEventListener('click', async () => {
      const query = getTwitterQueryForSelection(game, mode);
      if (!query) return;
      await navigator.clipboard.writeText(query);
      const originalText = button.textContent;
      button.textContent = 'Copié';
      window.setTimeout(() => { button.textContent = originalText; }, 1200);
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

  updateSelectionUi(game);
}

function renderCharacterPage(game, character) {
  document.body.dataset.game = game.id;
  document.body.dataset.theme = game.theme || game.id;

  app.innerHTML = `
    <article class="detail-page">
      <a class="back-link" href="#/${game.id}">← Retour à ${game.name}</a>
      <section class="detail-hero">
        <div class="detail-art-wrap">
          <img class="detail-art" alt="" />
          <div class="champion-fallback detail-fallback" aria-hidden="true"></div>
        </div>
        <div class="detail-content">
          <div class="game-logo-wrap compact">${renderLogo(game, true)}</div>
          <h1>${character.name}</h1>
          <p class="intro">Liens rapides pour retrouver les techs, combos et infos de ${character.name}.</p>
          <div class="detail-health" id="detailHealth">PV …</div>
          ${character.supports?.length || game.supportOptions?.length ? `<div class="detail-supports"><span>Supports</span><strong>${(character.supports || game.supportOptions || []).join(' · ')}</strong></div>` : ''}
          <div class="link-panel">
            <a class="big-link x-detail-link" href="${getSimpleTwitterUrl(game, character)}" target="_blank" rel="noreferrer noopener">
              <span>${X_ICON}</span>
              <strong>${getTwitterTag(game, character)}</strong>
            </a>
            <a class="big-link" href="${getWikiPageUrl(game, character)}" target="_blank" rel="noreferrer noopener">
              <span>Wiki</span>
              <strong>Page ${character.name}</strong>
            </a>
            ${game.showOfficialLinks === false || character.officialUrl === null ? '' : `<a class="big-link" href="${getOfficialChampionUrl(game, character)}" target="_blank" rel="noreferrer noopener">
              <span>Site officiel</span>
              <strong>Page champion ${character.name}</strong>
            </a>`}
          </div>
        </div>
      </section>
    </article>
  `;

  const image = app.querySelector('.detail-art');
  const fallback = app.querySelector('.detail-fallback');
  const detailHealth = app.querySelector('#detailHealth');
  loadCharacterImage(image, fallback, character);
  if (character.health) loadCharacterHealth(detailHealth, character, game);
  else detailHealth.remove();
}

function resetSelectionsOnGameSwitch(nextGameId) {
  if (currentGameId && currentGameId !== nextGameId) {
    Object.keys(selectedByGame).forEach((id) => { selectedByGame[id] = []; });
    Object.keys(selectedSupportByGame).forEach((id) => { selectedSupportByGame[id] = ''; });
  }
  currentGameId = nextGameId;
}

function render() {
  const { gameId, characterSlug } = parseRoute();
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

if (!window.location.hash) {
  setRoute('2xko');
} else {
  render();
}
