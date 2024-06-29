import { a as createAstro, b as createComponent, d as renderTemplate, u as unescapeHTML, g as addAttribute, e as renderComponent, F as Fragment, m as maybeRenderHead, f as renderScript, h as renderSlot, i as renderHead } from './astro/server_BHOel7Fx.mjs';
import 'kleur/colors';
import { g as getImage } from './_astro_assets_Ch63cm7l.mjs';
import { i as icon } from './icon_CM78BFa1.mjs';
import 'clsx';
/* empty css                          */

const ogImageSrc = new Proxy({"src":"/_astro/social.CWnIx2-K.png","width":1200,"height":600,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/goon/Desktop/ELR-Agency/ELR-Agency/ELR Agency Clients/horuss-paint/src/images/social.png";
							}
							if (target[name] !== undefined) globalThis.astroAsset.referencedImages.add("/Users/goon/Desktop/ELR-Agency/ELR-Agency/ELR Agency Clients/horuss-paint/src/images/social.png");
							return target[name];
						}
					});

const SITE = {
  title: "HORUSS",
  tagline: "Ensemble, transformons votre espace avec notre expertise en peinture",
  description: "Votre espace mérite une finition exceptionnelle. Nous nous engageons à transformer cette vision en réalité avec nos solutions de peinture complètes. Imaginez des surfaces non seulement impeccables mais également conçues sur mesure pour améliorer et protéger votre environnement.",
  description_short: "Des transformations durables, un service de qualité, un espace revitalisé; voici notre promesse.",
  url: "https://horuss.ca",
  author: "HORUSS"
};
const SEO = {
  title: SITE.title,
  description: SITE.description,
  structuredData: {
    "@context": "https://schema.org",
    "@type": "WebPage",
    inLanguage: "en-US",
    "@id": SITE.url,
    url: SITE.url,
    name: SITE.title,
    description: SITE.description,
    isPartOf: {
      "@type": "WebSite",
      url: SITE.url,
      name: SITE.title,
      description: SITE.description
    }
  }
};
const OG = {
  locale: "fr_CA",
  type: "website",
  url: SITE.url,
  title: `${SITE.title}: Services de Peinture Professionnels`,
  description: "Transformez vos espaces avec les services de peinture professionnels de HORUSS. Reconnue par les leaders de l'industrie, HORUSS offre simplicité, qualité et fiabilité. Découvrez la différence avec des finitions impeccables et des solutions sur mesure. Commencez à explorer dès maintenant!",
  image: ogImageSrc
};

const faviconSvgSrc = new Proxy({"src":"/_astro/icon.BQYYiSnq.svg","width":1080,"height":1080,"format":"svg"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/goon/Desktop/ELR-Agency/ELR-Agency/ELR Agency Clients/horuss-paint/src/images/icon.svg";
							}
							if (target[name] !== undefined) globalThis.astroAsset.referencedImages.add("/Users/goon/Desktop/ELR-Agency/ELR-Agency/ELR Agency Clients/horuss-paint/src/images/icon.svg");
							return target[name];
						}
					});

var __freeze$3 = Object.freeze;
var __defProp$3 = Object.defineProperty;
var __template$3 = (cooked, raw) => __freeze$3(__defProp$3(cooked, "raw", { value: __freeze$3(raw || cooked.slice()) }));
var _a$3;
const $$Astro$a = createAstro("https://horuss.ca");
const $$Meta = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$a, $$props, $$slots);
  Astro2.self = $$Meta;
  const defaultProps = {
    meta: SITE.description,
    structuredData: SEO.structuredData
  };
  const {
    meta = defaultProps.meta,
    structuredData = defaultProps.structuredData
  } = Astro2.props;
  const URL = `${Astro2.site}`;
  const author = SITE.author;
  const canonical = Astro2.url.href;
  Astro2.url.pathname;
  const ogTitle = OG.title;
  const ogDescription = OG.description;
  const socialImageRes = await getImage({
    src: OG.image,
    width: 1200,
    height: 600
  });
  const socialImage = Astro2.url.origin + socialImageRes.src;
  const languages = {
    en: "",
    fr: "fr"
  };
  function createHref(lang, prefix, path) {
    const hasPrefix = path.startsWith(`/${prefix}/`);
    const basePath2 = hasPrefix ? path : `/${prefix}${path}`;
    const normalizedBasePath = basePath2.replace(/\/\/+/g, "/");
    return `${URL.slice(0, -1)}${normalizedBasePath}`;
  }
  const fullPath = Astro2.url.pathname;
  const alternateLanguageLinks = Object.entries(languages).map(([lang, prefix]) => {
    const basePath2 = lang === "en" ? fullPath.replace(/^\/fr\//, "/") : fullPath;
    const href = createHref(lang, prefix, basePath2);
    return `<link rel="alternate" hreflang="${lang}" href="${href}" />`;
  }).join("\n");
  const faviconSvg = await getImage({
    src: faviconSvgSrc,
    format: "svg"
  });
  const appleTouchIcon = await getImage({
    src: icon,
    width: 180,
    height: 180,
    format: "png"
  });
  return renderTemplate`<!-- Inject structured data into the page if provided. This data is formatted as JSON-LD, a method recommended by Google for structured data pass:
     https://developers.google.com/search/docs/advanced/structured-data/intro-structured-data -->${structuredData && renderTemplate(_a$3 || (_a$3 = __template$3(['<script type="application/ld+json">', "<\/script>"])), unescapeHTML(JSON.stringify(structuredData)))}<!-- Define the character set, description, author, and viewport settings --><meta charset="utf-8"><meta${addAttribute(meta, "content")} name="description"><meta name="web_author"${addAttribute(author, "content")}><meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=5.0, minimum-scale=1.0"><meta http-equiv="X-UA-Compatible" content="ie=edge"><link rel="canonical"${addAttribute(canonical, "href")}>${renderComponent($$result, "Fragment", Fragment, {}, { "default": ($$result2) => renderTemplate`${unescapeHTML(alternateLanguageLinks)}` })}<!-- Facebook Meta Tags --><meta property="og:locale" content="en_US"><meta property="og:url"${addAttribute(URL, "content")}><meta property="og:type" content="website"><meta property="og:title"${addAttribute(ogTitle, "content")}><meta property="og:site_name"${addAttribute(SITE.title, "content")}><meta property="og:description"${addAttribute(ogDescription, "content")}><meta property="og:image"${addAttribute(socialImage, "content")}><meta content="1200" property="og:image:width"><meta content="600" property="og:image:height"><meta content="image/png" property="og:image:type"><!-- Twitter Meta Tags --><meta name="twitter:card" content="summary_large_image"><meta property="twitter:domain"${addAttribute(URL, "content")}><meta property="twitter:url"${addAttribute(URL, "content")}><meta name="twitter:title"${addAttribute(ogTitle, "content")}><meta name="twitter:description"${addAttribute(ogDescription, "content")}><meta name="twitter:image"${addAttribute(socialImage, "content")}><!-- Links to the webmanifest and sitemap --><link rel="manifest" href="/manifest.json"><!-- https://docs.astro.build/en/guides/integrations-guide/sitemap/ --><link rel="sitemap" href="/sitemap-index.xml"><!-- Links for favicons --><link href="/favicon.ico" rel="icon" sizes="any" type="image/x-icon"><link${addAttribute(faviconSvg.src, "href")} rel="icon" type="image/svg+xml" sizes="any"><meta name="mobile-web-app-capable" content="yes"><link${addAttribute(appleTouchIcon.src, "href")} rel="apple-touch-icon"><link${addAttribute(appleTouchIcon.src, "href")} rel="shortcut icon"><!-- Set theme color --><meta name="theme-color" content="#facc15">`;
}, "/Users/goon/Desktop/ELR-Agency/ELR-Agency/ELR Agency Clients/horuss-paint/src/components/Meta.astro", void 0);

const $$Astro$9 = createAstro("https://horuss.ca");
const $$ThemeIcon = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$9, $$props, $$slots);
  Astro2.self = $$ThemeIcon;
  return renderTemplate`<!-- Dark Theme Toggle Button --><!-- This button is shown when the light theme is active, and when clicked, it switches the theme to dark -->${maybeRenderHead()}<button type="button" aria-label="Dark Theme Toggle" class="hs-dark-mode group flex h-8 w-8 items-center justify-center rounded-full font-medium text-neutral-600 outline-none ring-zinc-500 transition duration-300 hover:bg-neutral-200 hover:text-orange-400 hs-dark-mode-active:hidden dark:text-neutral-400 dark:ring-zinc-200 dark:hover:text-orange-300 dark:focus:outline-none" data-hs-theme-click-value="dark"> <!-- The SVG displayed shows an abstract icon that represents the moon (dark theme) --> <svg class="h-4 w-4 flex-shrink-0" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z"></path></svg> <!-- Light Theme Toggle Button --> <!-- This button is hidden by default and only appears when the dark theme is active, when clicked, it switches to the light theme --> </button> <button type="button" aria-label="Light Theme Toggle" class="hs-dark-mode group hidden h-8 w-8 items-center justify-center rounded-full font-medium text-neutral-600 outline-none ring-zinc-500 transition duration-300 hover:text-orange-400 hs-dark-mode-active:flex dark:text-neutral-400 dark:ring-zinc-200 dark:hover:bg-neutral-700 dark:hover:text-orange-300 dark:focus:outline-none" data-hs-theme-click-value="light"> <!-- The SVG displayed shows a standard sun icon that stands for the light theme --> <svg class="h-4 w-4 flex-shrink-0" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="4"></circle><path d="M12 8a2 2 0 1 0 4 4"></path><path d="M12 2v2"></path><path d="M12 20v2"></path><path d="m4.93 4.93 1.41 1.41"></path><path d="m17.66 17.66 1.41 1.41"></path><path d="M2 12h2"></path><path d="M20 12h2"></path><path d="m6.34 17.66-1.41 1.41"></path><path d="m19.07 4.93-1.41 1.41"></path></svg> </button>`;
}, "/Users/goon/Desktop/ELR-Agency/ELR-Agency/ELR Agency Clients/horuss-paint/src/components/ThemeIcon.astro", void 0);

const $$Astro$8 = createAstro("https://horuss.ca");
const $$NavLink = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$8, $$props, $$slots);
  Astro2.self = $$NavLink;
  const { url, name } = Astro2.props;
  return renderTemplate`<!--
Re-usable link component for navigation bar. Highlights the active link
by comparing the current URL with the href of each link.
We assign an ID matching the URL for easy reference in our script.
If URL is '/' (home page), assign ID as 'home' 
-->${maybeRenderHead()}<a${addAttribute(url === "/" ? "home" : url.replace("/", ""), "id")}${addAttribute(url, "href")} data-astro-prefetch class="rounded-lg text-base font-medium text-neutral-600 outline-none ring-zinc-500 hover:text-neutral-500 focus-visible:ring dark:text-neutral-400 dark:ring-zinc-200 dark:hover:text-neutral-500 dark:focus:outline-none md:py-3 md:text-sm 2xl:text-base"> ${name} </a> ${renderScript($$result, "/Users/goon/Desktop/ELR-Agency/ELR-Agency/ELR Agency Clients/horuss-paint/src/components/ui/links/NavLink.astro?astro&type=script&index=0&lang.ts")}`;
}, "/Users/goon/Desktop/ELR-Agency/ELR-Agency/ELR Agency Clients/horuss-paint/src/components/ui/links/NavLink.astro", void 0);

const navBarLinks$1 = [
  { name: "Accueil", url: "/" },
  { name: "Services", url: "/services" },
  // { name: "Partenaires", url: "/ressources" },
  { name: "À Propos", url: "/horuss" },
  { name: "Blog", url: "/blog" },
  { name: "Contact", url: "/contact" }
];
const footerLinks$1 = [
  {
    section: "Écosystème",
    links: [
      // { name: "Documentation", url: "/fr/welcome-to-docs/" },
      { name: "Explorez nos services", url: "/services" },
      { name: "Explorez nos forfaits", url: "/services" },
      { name: "Notre territoire", url: "/ville/sites" }
    ]
  },
  {
    section: "Société",
    links: [
      { name: "À propos de nous", url: "/horuss" },
      { name: "Blog", url: "/blog" },
      // { name: "Carrières", url: "#" },
      { name: "Conditions d'utilisations", url: "/conditions" }
    ]
  }
];
const socialLinks$1 = {
  // facebook: "https://www.facebook.com/agenceelr",
  // instagram: "https://www.instagram.com/agence.elr/",
  // linkedin: "https://www.linkedin.com/company/agence-elr",
  // x: "#",
  // github: "https://elragency.com",
  // google: "#",
  // slack: "#",
};
const frStrings = {
  navBarLinks: navBarLinks$1,
  footerLinks: footerLinks$1,
  socialLinks: socialLinks$1
};

const navBarLinks = [
  { name: "Home", url: "/en/" },
  { name: "Services", url: "/en/services" },
  { name: "About", url: "/en/horuss" },
  { name: "Blog", url: "/en/blog" },
  { name: "Contact", url: "/en/contact" }
];
const footerLinks = [
  {
    section: "Ecosystem",
    links: [
      { name: "Explore our services", url: "/en/services" },
      { name: "Explore our packages", url: "/en/services" }
      // { name: "Construction Services", url: "/en/welcome-to-docs/" },
    ]
  },
  {
    section: "Company",
    links: [
      { name: "About us", url: "/en/horuss" },
      { name: "Blog", url: "/en/blog" },
      // { name: "Careers", url: "#" },
      { name: "Conditions", url: "/conditions" }
    ]
  }
];
const socialLinks = {
  // facebook: "https://www.facebook.com/agenceelr",
  // instagram: "https://www.instagram.com/agence.elr/",
  // linkedin: "https://www.linkedin.com/company/agence-elr",
};
const enStrings = {
  navBarLinks,
  footerLinks,
  socialLinks
};

const $$Astro$7 = createAstro("https://horuss.ca");
const $$BrandLogo = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$7, $$props, $$slots);
  Astro2.self = $$BrandLogo;
  return renderTemplate`${maybeRenderHead()}<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="60" height="60" width="1080" height="1080" viewBox="0 0 1080 1080"> <defs> <style>
      .cls-1, .cls-2 {
        font-size: 75px;
        fill: #fff;
        font-family: "Minion Variable Concept";
      }

      .cls-1 {
        font-weight: 700;
      }

      .cls-2 {
        font-weight: 600;
      }
    </style> </defs> <image id="PngItem_1346699" x="141" y="150" width="909" height="715" xlink:href="data:img/png;base64,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"></image> <text id="HORUSS" class="cls-1" transform="translate(132.519 606.152) scale(2.724)">HORUSS</text> <text id="CONSTRUCTION" class="cls-2" x="248.156" y="676.569">CONSTRUCTION</text> </svg>`;
}, "/Users/goon/Desktop/ELR-Agency/ELR-Agency/ELR Agency Clients/horuss-paint/src/components/BrandLogo.astro", void 0);

const languages = {
  en: "English",
  fr: "Français"
};

const Icons = {
  groups: {
    paths: [
      {
        d: "m150-400 82-80-82-82-80 82 80 80Zm573-10 87-140 88 140H723Zm-243-70q-50 0-85-35t-35-85q0-51 35-85.5t85-34.5q51 0 85.5 34.5T600-600q0 50-34.5 85T480-480Zm.351-180Q455-660 437.5-642.851t-17.5 42.5Q420-575 437.351-557.5t43 17.5Q506-540 523-557.351t17-43Q540-626 522.851-643t-42.5-17ZM480-600ZM0-240v-53q0-39.464 42-63.232T150.398-380q12.158 0 23.38.5T196-377.273q-8 17.273-12 34.842-4 17.57-4 37.431v65H0Zm240 0v-65q0-65 66.5-105T480-450q108 0 174 40t66 105v65H240Zm570-140q67.5 0 108.75 23.768T960-293v53H780v-65q0-19.861-3.5-37.431Q773-360 765-377.273q11-1.727 22.171-2.227 11.172-.5 22.829-.5Zm-330.2-10Q400-390 350-366q-50 24-50 61v5h360v-6q0-36-49.5-60t-130.7-24Zm.2 90Z"
      }
    ],
    class: "mt-1 h-8 w-8 flex-shrink-0 fill-indigo-700 dark:fill-indigo-300",
    width: 48,
    height: 48,
    viewBox: "0 -960 960 960"
  },
  books: {
    paths: [
      {
        d: "M343-420h225v-60H343v60Zm0-90h395v-60H343v60Zm0-90h395v-60H343v60Zm-83 400q-24 0-42-18t-18-42v-560q0-24 18-42t42-18h560q24 0 42 18t18 42v560q0 24-18 42t-42 18H260Zm0-60h560v-560H260v560ZM140-80q-24 0-42-18t-18-42v-620h60v620h620v60H140Zm120-740v560-560Z"
      }
    ],
    class: "mt-1 h-8 w-8 flex-shrink-0 fill-indigo-700 dark:fill-indigo-300",
    width: 48,
    height: 48,
    viewBox: "0 -960 960 960"
  },
  verified: {
    paths: [
      {
        d: "m346-60-76-130-151-31 17-147-96-112 96-111-17-147 151-31 76-131 134 62 134-62 77 131 150 31-17 147 96 111-96 112 17 147-150 31-77 130-134-62-134 62Zm27-79 107-45 110 45 67-100 117-30-12-119 81-92-81-94 12-119-117-28-69-100-108 45-110-45-67 100-117 28 12 119-81 94 81 92-12 121 117 28 70 100Zm107-341Zm-43 133 227-225-45-41-182 180-95-99-46 45 141 140Z"
      }
    ],
    class: "mt-1 h-8 w-8 flex-shrink-0 fill-indigo-700 dark:fill-indigo-300",
    width: 48,
    height: 48,
    viewBox: "0 -960 960 960"
  },
  frame: {
    paths: [
      {
        d: "M480-480q-51 0-85.5-34.5T360-600q0-50 34.5-85t85.5-35q50 0 85 35t35 85q0 51-35 85.5T480-480Zm-.351-60Q505-540 522.5-557.149t17.5-42.5Q540-625 522.649-642.5t-43-17.5Q454-660 437-642.649t-17 43Q420-574 437.149-557t42.5 17ZM240-240v-76q0-27 17.5-47.5T300-397q42-22 86.943-32.5 44.942-10.5 93-10.5Q528-440 573-429.5t87 32.5q25 13 42.5 33.5T720-316v76H240Zm240-140q-47.546 0-92.773 13T300-328v28h360v-28q-42-26-87.227-39-45.227-13-92.773-13Zm0-220Zm0 300h180-360 180ZM140-80q-24 0-42-18t-18-42v-172h60v172h172v60H140ZM80-648v-172q0-24 18-42t42-18h172v60H140v172H80ZM648-80v-60h172v-172h60v172q0 24-18 42t-42 18H648Zm172-568v-172H648v-60h172q24 0 42 18t18 42v172h-60Z"
      }
    ],
    class: "mt-1 h-8 w-8 flex-shrink-0 fill-indigo-700 dark:fill-indigo-300",
    width: 48,
    height: 48,
    viewBox: "0 -960 960 960"
  },
  tools: {
    paths: [
      {
        d: "M764-80q-6 0-11-2t-10-7L501-331q-5-5-7-10t-2-11q0-6 2-11t7-10l85-85q5-5 10-7t11-2q6 0 11 2t10 7l242 242q5 5 7 10t2 11q0 6-2 11t-7 10l-85 85q-5 5-10 7t-11 2Zm0-72 43-43-200-200-43 43 200 200ZM195-80q-6 0-11.5-2T173-89l-84-84q-5-5-7-10.5T80-195q0-6 2-11t7-10l225-225h85l38-38-175-175h-57L80-779l99-99 125 125v57l175 175 130-130-67-67 56-56H485l-18-18 128-128 18 18v113l56-56 169 169q15 15 23.5 34.5T870-600q0 20-6.5 38.5T845-528l-85-85-56 56-52-52-211 211v84L216-89q-5 5-10 7t-11 2Zm0-72 200-200v-43h-43L152-195l43 43Zm0 0-43-43 22 21 21 22Zm569 0 43-43-43 43Z"
      }
    ],
    class: "mt-2 h-6 w-6 flex-shrink-0 fill-neutral-700 hs-tab-active:fill-indigo-700 dark:fill-neutral-300 dark:hs-tab-active:fill-indigo-300 md:h-7 md:w-7",
    width: 48,
    height: 48,
    viewBox: "0 -960 960 960"
  },
  dashboard: {
    paths: [
      {
        d: "M510-570v-270h330v270H510ZM120-450v-390h330v390H120Zm390 330v-390h330v390H510Zm-390 0v-270h330v270H120Zm60-390h210v-270H180v270Zm390 330h210v-270H570v270Zm0-450h210v-150H570v150ZM180-180h210v-150H180v150Zm210-330Zm180-120Zm0 180ZM390-330Z"
      }
    ],
    class: "mt-2 h-6 w-6 flex-shrink-0 fill-neutral-700 hs-tab-active:fill-indigo-700 dark:fill-neutral-300 dark:hs-tab-active:fill-indigo-300 md:h-7 md:w-7",
    width: 48,
    height: 48,
    viewBox: "0 -960 960 960"
  },
  house: {
    paths: [
      {
        d: "M8.25 21v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21m0 0h4.5V3.545M12.75 21h7.5V10.75M2.25 21h1.5m18 0h-18M2.25 9l4.5-1.636M18.75 3l-1.5.545m0 6.205 3 1m1.5.5-1.5-.5M6.75 7.364V3h-3v18m3-13.636 10.5-3.819"
      }
    ],
    class: "h-6 w-6 flex-shrink-0 text-neutral-700 hs-tab-active:text-indigo-700 dark:text-neutral-300 dark:hs-tab-active:text-indigo-300 md:h-7 md:w-7",
    width: 24,
    height: 24,
    viewBox: "0 0 24 24",
    fill: "none",
    strokeWidth: "1.5",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    stroke: "currentColor"
  },
  arrowUp: {
    paths: [
      {
        d: "m5 12 7-7 7 7"
      },
      {
        d: "M12 19V5"
      }
    ],
    class: "h-5 w-5 flex-shrink-0 text-indigo-700 dark:text-indigo-300",
    width: 24,
    height: 24,
    viewBox: "0 0 24 24",
    fill: "none",
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    stroke: "currentColor"
  },
  checkCircle: {
    paths: [
      {
        d: "M10 18a8 8 0 100-16 8 8 0 000 16zM13.707 8.293a1 1 0 00-1.414-1.414L9 10.586l-1.293-1.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
      }
    ],
    class: "h-5 w-5 shrink-0",
    viewBox: "0 0 20 20",
    fill: "currentColor",
    fillRule: "evenodd",
    clipRule: "evenodd"
  },
  bookmark: {
    paths: [
      {
        d: "M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z",
        class: "fill-current text-neutral-500 transition duration-300 group-hover:text-red-400 group-hover:dark:text-red-400"
      }
    ],
    class: "h-6 w-6 fill-none transition duration-300",
    width: 24,
    height: 24,
    viewBox: "0 0 24 24",
    fill: "none",
    strokeWidth: "1.5",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    stroke: "currentColor"
  },
  arrowRight: {
    paths: [
      {
        d: "m9 18 6-6-6-6"
      }
    ],
    class: "h-4 w-4 flex-shrink-0 transition duration-300 group-hover:translate-x-1",
    width: 24,
    height: 24,
    viewBox: "0 0 24 24",
    fill: "none",
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    stroke: "currentColor"
  },
  facebook: {
    paths: [
      {
        d: "M9.101 23.691v-7.98H6.627v-3.667h2.474v-1.58c0-4.085 1.848-5.978 5.858-5.978.401 0 .955.042 1.468.103a8.68 8.68 0 0 1 1.141.195v3.325a8.623 8.623 0 0 0-.653-.036 26.805 26.805 0 0 0-.733-.009c-.707 0-1.259.096-1.675.309a1.686 1.686 0 0 0-.679.622c-.258.42-.374.995-.374 1.752v1.297h3.919l-.386 2.103-.287 1.564h-3.246v8.245C19.396 23.238 24 18.179 24 12.044c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.628 3.874 10.35 9.101 11.647Z"
      }
    ],
    class: "size-4 flex-shrink-0 fill-current",
    viewBox: "0 0 24 24",
    stroke: "currentColor"
  },
  x: {
    paths: [
      {
        d: "M18.901 1.153h3.68l-8.04 9.19L24 22.846h-7.406l-5.8-7.584-6.638 7.584H.474l8.6-9.83L0 1.154h7.594l5.243 6.932ZM17.61 20.644h2.039L6.486 3.24H4.298Z"
      }
    ],
    class: "size-4 flex-shrink-0 fill-current",
    viewBox: "0 0 24 24",
    stroke: "currentColor"
  },
  linkedIn: {
    paths: [
      {
        d: "M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"
      }
    ],
    class: "size-4 flex-shrink-0 fill-current",
    viewBox: "0 0 24 24",
    stroke: "currentColor"
  },
  share: {
    paths: [
      {
        d: "M7.217 10.907a2.25 2.25 0 1 0 0 2.186m0-2.186c.18.324.283.696.283 1.093s-.103.77-.283 1.093m0-2.186 9.566-5.314m-9.566 7.5 9.566 5.314m0 0a2.25 2.25 0 1 0 3.935 2.186 2.25 2.25 0 0 0-3.935-2.186Zm0-12.814a2.25 2.25 0 1 0 3.933-2.185 2.25 2.25 0 0 0-3.933 2.185Z"
      }
    ],
    class: "h-4 w-4 group-hover:text-neutral-700",
    width: 24,
    height: 24,
    viewBox: "0 0 24 24",
    fill: "none",
    strokeWidth: "1.5",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    stroke: "currentColor"
  },
  github: {
    paths: [
      {
        d: "M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z"
      }
    ],
    class: "w-4.5 h-4.5 transition flex-shrink-0 text-neutral-700 duration-300 group-hover:-translate-y-1",
    width: 16,
    height: 16,
    viewBox: "0 0 16 16",
    fill: "currentColor"
  },
  arrowRightStatic: {
    paths: [
      {
        d: "m9 18 6-6-6-6"
      }
    ],
    class: "size-4 flex-shrink-0",
    width: 24,
    height: 24,
    viewBox: "0 0 24 24",
    fill: "none",
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    stroke: "currentColor"
  },
  openInNew: {
    paths: [
      {
        d: "m4.5 19.5 15-15m0 0H8.25m11.25 0v11.25"
      }
    ],
    class: "ml-0.5 w-3 h-3 md:w-4 md:h-4 inline pb-0.5",
    width: 24,
    height: 24,
    viewBox: "0 0 24 24",
    fill: "none",
    strokeWidth: "3",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    stroke: "currentColor"
  },
  accordionNotActive: {
    paths: [
      {
        d: "m6 9 6 6 6-6"
      }
    ],
    class: "block h-5 w-5 flex-shrink-0 text-neutral-600 group-hover:text-neutral-500 hs-accordion-active:hidden dark:text-neutral-400",
    width: 24,
    height: 24,
    viewBox: "0 0 24 24",
    fill: "none",
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    stroke: "currentColor"
  },
  accordionActive: {
    paths: [
      {
        d: "m18 15-6-6-6 6"
      }
    ],
    class: "hidden h-5 w-5 flex-shrink-0 text-neutral-600 group-hover:text-neutral-500 hs-accordion-active:block dark:text-neutral-400",
    width: 24,
    height: 24,
    viewBox: "0 0 24 24",
    fill: "none",
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    stroke: "currentColor"
  },
  xFooter: {
    paths: [
      {
        d: "M18.901 1.153h3.68l-8.04 9.19L24 22.846h-7.406l-5.8-7.584-6.638 7.584H.474l8.6-9.83L0 1.154h7.594l5.243 6.932ZM17.61 20.644h2.039L6.486 3.24H4.298Z"
      }
    ],
    class: "h-4 w-4 flex-shrink-0 fill-current text-neutral-700 dark:text-neutral-400",
    viewBox: "0 0 24 24",
    fill: "currentColor",
    title: "Twitter"
  },
  facebookFooter: {
    paths: [
      {
        d: "M9.101 23.691v-7.98H6.627v-3.667h2.474v-1.58c0-4.085 1.848-5.978 5.858-5.978.401 0 .955.042 1.468.103a8.68 8.68 0 0 1 1.141.195v3.325a8.623 8.623 0 0 0-.653-.036 26.805 26.805 0 0 0-.733-.009c-.707 0-1.259.096-1.675.309a1.686 1.686 0 0 0-.679.622c-.258.42-.374.995-.374 1.752v1.297h3.919l-.386 2.103-.287 1.564h-3.246v8.245C19.396 23.238 24 18.179 24 12.044c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.628 3.874 10.35 9.101 11.647Z"
      }
    ],
    class: "h-4 w-4 flex-shrink-0 fill-current text-neutral-700 dark:text-neutral-400",
    viewBox: "0 0 24 24",
    fill: "currentColor",
    title: "Facebook"
  },
  instagramFooter: {
    paths: [
      {
        d: "M12 2.163c3.204 0 3.584.012 4.85.07 1.17.056 1.97.24 2.428.403a4.92 4.92 0 0 1 1.72.992 4.92 4.92 0 0 1 .992 1.72c.164.458.347 1.258.403 2.428.058 1.266.07 1.646.07 4.85s-.012 3.584-.07 4.85c-.056 1.17-.24 1.97-.403 2.428a4.92 4.92 0 0 1-.992 1.72 4.92 4.92 0 0 1-1.72.992c-.458.164-1.258.347-2.428.403-1.266.058-1.646.07-4.85.07s-3.584-.012-4.85-.07c-1.17-.056-1.97-.24-2.428-.403a4.92 4.92 0 0 1-1.72-.992 4.92 4.92 0 0 1-.992-1.72c-.164-.458-.347-1.258-.403-2.428-.058-1.266-.07-1.646-.07-4.85s.012-3.584.07-4.85c.056-1.17.24-1.97.403-2.428a4.92 4.92 0 0 1 .992-1.72 4.92 4.92 0 0 1 1.72-.992c.458-.164 1.258-.347 2.428-.403 1.266-.058 1.646-.07 4.85-.07zM12 0C8.741 0 8.332.015 7.052.072 5.77.129 4.884.276 4.117.524a6.86 6.86 0 0 0-2.5 1.53 6.86 6.86 0 0 0-1.53 2.5c-.248.767-.395 1.653-.452 2.935C.015 8.332 0 8.741 0 12s.015 3.668.072 4.948c.057 1.282.204 2.168.452 2.935a6.86 6.86 0 0 0 1.53 2.5 6.86 6.86 0 0 0 2.5 1.53c.767.248 1.653.395 2.935.452 1.28.057 1.689.072 4.948.072s3.668-.015 4.948-.072c1.282-.057 2.168-.204 2.935-.452a6.86 6.86 0 0 0 2.5-1.53 6.86 6.86 0 0 0 1.53-2.5c.248-.767.395-1.653.452-2.935.057-1.28.072-1.689.072-4.948s-.015-3.668-.072-4.948c-.057-1.282-.204-2.168-.452-2.935a6.86 6.86 0 0 0-1.53-2.5 6.86 6.86 0 0 0-2.5-1.53C18.168.276 17.282.129 16 .072 14.719.015 14.309 0 12 0zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.162 6.162 6.162 6.162-2.759 6.162-6.162-2.759-6.162-6.162-6.162zm0 10.142c-2.195 0-3.981-1.786-3.981-3.981s1.786-3.981 3.981-3.981 3.981 1.786 3.981 3.981-1.786 3.981-3.981 3.981zm6.406-11.845c-.796 0-1.441.645-1.441 1.441s.645 1.441 1.441 1.441 1.441-.645 1.441-1.441-.645-1.441-1.441-1.441z"
      }
    ],
    class: "h-4 w-4 flex-shrink-0 fill-current text-neutral-700 dark:text-neutral-400",
    viewBox: "0 0 24 24",
    fill: "currentColor",
    title: "Instagram"
  },
  githubFooter: {
    paths: [
      {
        d: "M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"
      }
    ],
    class: "h-4 w-4 flex-shrink-0 fill-current text-neutral-700 dark:text-neutral-400",
    viewBox: "0 0 24 24",
    fill: "currentColor",
    title: "GitHub"
  },
  googleFooter: {
    paths: [
      {
        d: "M12.48 10.92v3.28h7.84c-.24 1.84-.853 3.187-1.787 4.133-1.147 1.147-2.933 2.4-6.053 2.4-4.827 0-8.6-3.893-8.6-8.72s3.773-8.72 8.6-8.72c2.6 0 4.507 1.027 5.907 2.347l2.307-2.307C18.747 1.44 16.133 0 12.48 0 5.867 0 .307 5.387.307 12s5.56 12 12.173 12c3.573 0 6.267-1.173 8.373-3.36 2.16-2.16 2.84-5.213 2.84-7.667 0-.76-.053-1.467-.173-2.053H12.48z"
      }
    ],
    class: "h-4 w-4 flex-shrink-0 fill-current text-neutral-700 dark:text-neutral-400",
    viewBox: "0 0 24 24",
    fill: "currentColor",
    title: "Google"
  },
  slackFooter: {
    paths: [
      {
        d: "M5.042 15.165a2.528 2.528 0 0 1-2.52 2.523A2.528 2.528 0 0 1 0 15.165a2.527 2.527 0 0 1 2.522-2.52h2.52v2.52zM6.313 15.165a2.527 2.527 0 0 1 2.521-2.52 2.527 2.527 0 0 1 2.521 2.52v6.313A2.528 2.528 0 0 1 8.834 24a2.528 2.528 0 0 1-2.521-2.522v-6.313zM8.834 5.042a2.528 2.528 0 0 1-2.521-2.52A2.528 2.528 0 0 1 8.834 0a2.528 2.528 0 0 1 2.521 2.522v2.52H8.834zM8.834 6.313a2.528 2.528 0 0 1 2.521 2.521 2.528 2.528 0 0 1-2.521 2.521H2.522A2.528 2.528 0 0 1 0 8.834a2.528 2.528 0 0 1 2.522-2.521h6.312zM18.956 8.834a2.528 2.528 0 0 1 2.522-2.521A2.528 2.528 0 0 1 24 8.834a2.528 2.528 0 0 1-2.522 2.521h-2.522V8.834zM17.688 8.834a2.528 2.528 0 0 1-2.523 2.521 2.527 2.527 0 0 1-2.52-2.521V2.522A2.527 2.527 0 0 1 15.165 0a2.528 2.528 0 0 1 2.523 2.522v6.312zM15.165 18.956a2.528 2.528 0 0 1 2.523 2.522A2.528 2.528 0 0 1 15.165 24a2.527 2.527 0 0 1-2.52-2.522v-2.522h2.52zM15.165 17.688a2.527 2.527 0 0 1-2.52-2.523 2.526 2.526 0 0 1 2.52-2.52h6.313A2.527 2.527 0 0 1 24 15.165a2.528 2.528 0 0 1-2.522 2.523h-6.313z"
      }
    ],
    class: "h-4 w-4 flex-shrink-0 fill-current text-neutral-700 dark:text-neutral-400",
    viewBox: "0 0 24 24",
    fill: "currentColor",
    title: "Slack"
  },
  quotation: {
    paths: [
      {
        d: "M7.39762 10.3C7.39762 11.0733 7.14888 11.7 6.6514 12.18C6.15392 12.6333 5.52552 12.86 4.76621 12.86C3.84979 12.86 3.09047 12.5533 2.48825 11.94C1.91222 11.3266 1.62421 10.4467 1.62421 9.29999C1.62421 8.07332 1.96459 6.87332 2.64535 5.69999C3.35231 4.49999 4.33418 3.55332 5.59098 2.85999L6.4943 4.25999C5.81354 4.73999 5.26369 5.27332 4.84476 5.85999C4.45201 6.44666 4.19017 7.12666 4.05926 7.89999C4.29491 7.79332 4.56983 7.73999 4.88403 7.73999C5.61716 7.73999 6.21938 7.97999 6.69067 8.45999C7.16197 8.93999 7.39762 9.55333 7.39762 10.3ZM14.6242 10.3C14.6242 11.0733 14.3755 11.7 13.878 12.18C13.3805 12.6333 12.7521 12.86 11.9928 12.86C11.0764 12.86 10.3171 12.5533 9.71484 11.94C9.13881 11.3266 8.85079 10.4467 8.85079 9.29999C8.85079 8.07332 9.19117 6.87332 9.87194 5.69999C10.5789 4.49999 11.5608 3.55332 12.8176 2.85999L13.7209 4.25999C13.0401 4.73999 12.4903 5.27332 12.0713 5.85999C11.6786 6.44666 11.4168 7.12666 11.2858 7.89999C11.5215 7.79332 11.7964 7.73999 12.1106 7.73999C12.8437 7.73999 13.446 7.97999 13.9173 8.45999C14.3886 8.93999 14.6242 9.55333 14.6242 10.3Z"
      }
    ],
    class: "absolute start-0 top-0 h-16 w-16 -translate-x-6 -translate-y-8 transform text-neutral-300 dark:text-neutral-700",
    width: 16,
    height: 16,
    viewBox: "0 0 16 16",
    fill: "currentColor"
  },
  question: {
    paths: [
      {
        d: "M9.879 7.519c1.171-1.025 3.071-1.025 4.242 0 1.172 1.025 1.172 2.687 0 3.712-.203.179-.43.326-.67.442-.745.361-1.45.999-1.45 1.827v.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9 5.25h.008v.008H12v-.008Z"
      }
    ],
    class: "mt-1.5 h-6 w-6 flex-shrink-0 text-neutral-600 dark:text-neutral-400",
    viewBox: "0 0 24 24",
    fill: "none",
    strokeWidth: "1.5",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    stroke: "currentColor"
  },
  chatBubble: {
    paths: [
      {
        d: "M20.25 8.511c.884.284 1.5 1.128 1.5 2.097v4.286c0 1.136-.847 2.1-1.98 2.193-.34.027-.68.052-1.02.072v3.091l-3-3c-1.354 0-2.694-.055-4.02-.163a2.115 2.115 0 0 1-.825-.242m9.345-8.334a2.126 2.126 0 0 0-.476-.095 48.64 48.64 0 0 0-8.048 0c-1.131.094-1.976 1.057-1.976 2.192v4.286c0 .837.46 1.58 1.155 1.951m9.345-8.334V6.637c0-1.621-1.152-3.026-2.76-3.235A48.455 48.455 0 0 0 11.25 3c-2.115 0-4.198.137-6.24.402-1.608.209-2.76 1.614-2.76 3.235v6.226c0 1.621 1.152 3.026 2.76 3.235.577.075 1.157.14 1.74.194V21l4.155-4.155"
      }
    ],
    class: "mt-1.5 h-6 w-6 flex-shrink-0 text-neutral-600 dark:text-neutral-400",
    viewBox: "0 0 24 24",
    fill: "none",
    strokeWidth: "1.5",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    stroke: "currentColor"
  },
  mapPin: {
    paths: [
      {
        d: "M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
      },
      {
        d: "M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z"
      }
    ],
    class: "mt-1.5 h-6 w-6 flex-shrink-0 text-neutral-600 dark:text-neutral-400",
    viewBox: "0 0 24 24",
    fill: "none",
    strokeWidth: "1.5",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    stroke: "currentColor"
  },
  envelopeOpen: {
    paths: [
      {
        d: "M21.75 9v.906a2.25 2.25 0 0 1-1.183 1.981l-6.478 3.488M2.25 9v.906a2.25 2.25 0 0 0 1.183 1.981l6.478 3.488m8.839 2.51-4.66-2.51m0 0-1.023-.55a2.25 2.25 0 0 0-2.134 0l-1.022.55m0 0-4.661 2.51m16.5 1.615a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V8.844a2.25 2.25 0 0 1 1.183-1.981l7.5-4.039a2.25 2.25 0 0 1 2.134 0l7.5 4.039a2.25 2.25 0 0 1 1.183 1.98V19.5Z"
      }
    ],
    class: "mt-1.5 h-6 w-6 flex-shrink-0 text-neutral-600 dark:text-neutral-400",
    viewBox: "0 0 24 24",
    fill: "none",
    strokeWidth: "1.5",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    stroke: "currentColor"
  },
  earth: {
    paths: [
      {
        d: "m20.893 13.393-1.135-1.135a2.252 2.252 0 0 1-.421-.585l-1.08-2.16a.414.414 0 0 0-.663-.107.827.827 0 0 1-.812.21l-1.273-.363a.89.89 0 0 0-.738 1.595l.587.39c.59.395.674 1.23.172 1.732l-.2.2c-.212.212-.33.498-.33.796v.41c0 .409-.11.809-.32 1.158l-1.315 2.191a2.11 2.11 0 0 1-1.81 1.025 1.055 1.055 0 0 1-1.055-1.055v-1.172c0-.92-.56-1.747-1.414-2.089l-.655-.261a2.25 2.25 0 0 1-1.383-2.46l.007-.042a2.25 2.25 0 0 1 .29-.787l.09-.15a2.25 2.25 0 0 1 2.37-1.048l1.178.236a1.125 1.125 0 0 0 1.302-.795l.208-.73a1.125 1.125 0 0 0-.578-1.315l-.665-.332-.091.091a2.25 2.25 0 0 1-1.591.659h-.18c-.249 0-.487.1-.662.274a.931.931 0 0 1-1.458-1.137l1.411-2.353a2.25 2.25 0 0 0 .286-.76m11.928 9.869A9 9 0 0 0 8.965 3.525m11.928 9.868A9 9 0 1 1 8.965 3.525"
      }
    ],
    class: "w-4 h-4 flex-shrink-0",
    viewBox: "0 0 24 24",
    fill: "none",
    strokeWidth: "1.5",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    stroke: "currentColor"
  }
};

const $$Astro$6 = createAstro("https://horuss.ca");
const $$Icon = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$6, $$props, $$slots);
  Astro2.self = $$Icon;
  const { name } = Astro2.props;
  let icon = Icons[name] || {};
  let paths = icon.paths || [];
  return renderTemplate`${icon ? renderTemplate`${maybeRenderHead()}<svg${addAttribute(icon.class, "class")}${addAttribute(icon.height, "height")}${addAttribute(icon.viewBox, "viewBox")}${addAttribute(icon.width, "width")}${addAttribute(icon.fill, "fill")}${addAttribute(icon.clipRule, "clip-rule")}${addAttribute(icon.fillRule, "fill-rule")}${addAttribute(icon.stroke, "stroke")}${addAttribute(icon.strokeWidth, "stroke-width")}${addAttribute(icon.strokeLinecap, "stroke-linecap")}${addAttribute(icon.strokeLinejoin, "stroke-linejoin")}><title>${icon.title}</title>${paths.map((path) => renderTemplate`<path${addAttribute(path.d, "d")}${addAttribute(path.class || "", "class")}></path>`)}</svg>` : "Icon not found"}`;
}, "/Users/goon/Desktop/ELR-Agency/ELR-Agency/ELR Agency Clients/horuss-paint/src/components/ui/icons/Icon.astro", void 0);

var __freeze$2 = Object.freeze;
var __defProp$2 = Object.defineProperty;
var __template$2 = (cooked, raw) => __freeze$2(__defProp$2(cooked, "raw", { value: __freeze$2(raw || cooked.slice()) }));
var _a$2;
const $$Astro$5 = createAstro("https://horuss.ca");
const $$LanguagePicker = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$5, $$props, $$slots);
  Astro2.self = $$LanguagePicker;
  return renderTemplate(_a$2 || (_a$2 = __template$2(["", '<div class="hs-dropdown relative inline-flex"> <button id="hs-dropdown-default" type="button" aria-label="Change language" class="hs-dropdown-toggle inline-flex items-center gap-x-2 rounded-lg px-1.5 py-1.5 text-sm font-medium text-neutral-600 outline-none ring-zinc-500 transition duration-300 hover:bg-neutral-200 hover:text-orange-400 dark:border-neutral-700 dark:text-neutral-400 dark:ring-zinc-200 dark:hover:bg-neutral-700 dark:hover:text-orange-300 dark:focus:outline-none"> ', ' <svg class="size-4 hs-dropdown-open:rotate-180" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m6 9 6 6 6-6"></path></svg> </button> <div class="hs-dropdown-menu duration mt-2 hidden rounded-lg bg-neutral-50 p-2 opacity-0 shadow-md transition-[opacity,margin] before:absolute before:-top-4 before:start-0 before:h-4 before:w-full after:absolute after:-bottom-4 after:start-0 after:h-4 after:w-full hs-dropdown-open:opacity-100 dark:divide-neutral-700 dark:border dark:border-neutral-700 dark:bg-neutral-800 !transform-none !top-[98%] !left-[20%] md:!top-[80%] md:!left-[90%]" aria-labelledby="hs-dropdown-hover-event"> ', ' </div> </div> <!--Import the necessary Dropdown plugin--> <!--https://preline.co/plugins/html/dropdown.html--> <script src="/scripts/vendor/preline/dropdown/index.js"><\/script> ', ""])), maybeRenderHead(), renderComponent($$result, "Icon", $$Icon, { "name": "earth" }), Object.entries(languages).map(([lang, label]) => renderTemplate`<a class="flex items-center gap-x-3.5 rounded-lg px-3 py-2 text-sm text-neutral-800 hover:bg-neutral-100 focus:bg-neutral-100 focus:outline-none dark:text-neutral-400 dark:hover:bg-neutral-700 dark:hover:text-neutral-300 dark:focus:bg-neutral-700"${addAttribute(`/${lang === "fr" ? "" : lang}`, "href")}> ${label} </a>`), renderScript($$result, "/Users/goon/Desktop/ELR-Agency/ELR-Agency/ELR Agency Clients/horuss-paint/src/components/ui/LanguagePicker.astro?astro&type=script&index=0&lang.ts"));
}, "/Users/goon/Desktop/ELR-Agency/ELR-Agency/ELR Agency Clients/horuss-paint/src/components/ui/LanguagePicker.astro", void 0);

var __freeze$1 = Object.freeze;
var __defProp$1 = Object.defineProperty;
var __template$1 = (cooked, raw) => __freeze$1(__defProp$1(cooked, "raw", { value: __freeze$1(raw || cooked.slice()) }));
var _a$1;
const $$Astro$4 = createAstro("https://horuss.ca");
const $$Navbar2 = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$4, $$props, $$slots);
  Astro2.self = $$Navbar2;
  const strings = Astro2.currentLocale === "en" ? enStrings : frStrings;
  const homeUrl = Astro2.currentLocale === "en" ? "/en" : "/";
  return renderTemplate(_a$1 || (_a$1 = __template$1(["<!-- Main header component -->", '<header class="sticky inset-x-0 top-0 z-50 flex w-full flex-wrap text-sm md:flex-nowrap md:justify-start astro-qxfqz4re"> <!-- Navigation container --> <nav class="relative w-full border border-yellow-100/40 bg-yellow-50/60 backdrop-blur-md px-4   dark:border-neutral-700/40 dark:bg-neutral-800/80 dark:backdrop-blur-md md:flex md:items-center md:justify-between px-4 md:px-0 astro-qxfqz4re" aria-label="Global"> <div class="flex items-center justify-between w-full px-4 py-3 md:px-6 lg:px-8 px-6 astro-qxfqz4re"> <!-- Brand logo --> <a class="flex-none rounded-lg text-xl font-bold outline-none ring-zinc-500 focus-visible:ring dark:ring-zinc-200 dark:focus:outline-none astro-qxfqz4re"', ' aria-label="Brand"> ', ' </a> <!-- Collapse toggle for smaller screens --> <div class="ml-auto mr-5 md:hidden astro-qxfqz4re"> <button type="button" class="hs-collapse-toggle flex h-8 w-8 items-center justify-center rounded-full text-sm font-bold text-neutral-600 transition duration-300 hover:bg-neutral-200 disabled:pointer-events-none disabled:opacity-50 dark:text-neutral-400 dark:hover:bg-neutral-700 dark:focus:outline-none astro-qxfqz4re" data-hs-collapse="#navbar-collapse-with-animation" aria-controls="navbar-collapse-with-animation" aria-label="Toggle navigation"> <svg class="h-[1.25rem] w-[1.25rem] flex-shrink-0 hs-collapse-open:hidden astro-qxfqz4re" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"> <line x1="3" x2="21" y1="6" y2="6" class="astro-qxfqz4re"></line> <line x1="3" x2="21" y1="12" y2="12" class="astro-qxfqz4re"></line> <line x1="3" x2="21" y1="18" y2="18" class="astro-qxfqz4re"></line> </svg> <svg class="hidden h-[1.25rem] w-[1.25rem] flex-shrink-0 hs-collapse-open:block astro-qxfqz4re" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"> <path d="M18 6 6 18" class="astro-qxfqz4re"></path> <path d="m6 6 12 12" class="astro-qxfqz4re"></path> </svg> </button> </div> <!-- ThemeIcon component specifically for smaller screens --> <span class="inline-block md:hidden astro-qxfqz4re"> ', ' </span> </div> <!-- Contains navigation links --> <div id="navbar-collapse-with-animation" class="hs-collapse hidden grow basis-full overflow-hidden transition-all duration-300 md:block astro-qxfqz4re"> <!-- Navigation links container --> <div class="mt-5 flex flex-col gap-x-0 gap-y-4 md:mt-0 md:flex-row md:items-center md:justify-end md:gap-x-4 lg:gap-x-7 md:gap-y-0 md:ps-7 mx-6 astro-qxfqz4re"> <!-- Navigation links and Authentication component --> ', " <!-- <Authentication /> --> ", ' <!-- ThemeIcon component specifically for larger screens --> <span class="hidden md:inline-block astro-qxfqz4re"> ', ' </span> </div> </div> </nav> </header> <!-- Theme Appearance script to manage light/dark modes --> <script>\n  const HSThemeAppearance = {\n    init() {\n      const defaultTheme = "default";\n      let theme = localStorage.getItem("hs_theme") || defaultTheme;\n\n      if (document.querySelector("html").classList.contains("dark")) return;\n      this.setAppearance(theme);\n    },\n    _resetStylesOnLoad() {\n      const $resetStyles = document.createElement("style");\n      $resetStyles.innerText = `*{transition: unset !important;}`;\n      $resetStyles.setAttribute("data-hs-appearance-onload-styles", "");\n      document.head.appendChild($resetStyles);\n      return $resetStyles;\n    },\n    setAppearance(theme, saveInStore = true, dispatchEvent = true) {\n      const $resetStylesEl = this._resetStylesOnLoad();\n\n      if (saveInStore) {\n        localStorage.setItem("hs_theme", theme);\n      }\n\n      if (theme === "auto") {\n        theme = window.matchMedia("(prefers-color-scheme: dark)").matches\n          ? "dark"\n          : "default";\n      }\n\n      document.querySelector("html").classList.remove("dark");\n      document.querySelector("html").classList.remove("default");\n      document.querySelector("html").classList.remove("auto");\n\n      document\n        .querySelector("html")\n        .classList.add(this.getOriginalAppearance());\n\n      setTimeout(() => {\n        $resetStylesEl.remove();\n      });\n\n      if (dispatchEvent) {\n        window.dispatchEvent(\n          new CustomEvent("on-hs-appearance-change", { detail: theme }),\n        );\n      }\n    },\n    getAppearance() {\n      let theme = this.getOriginalAppearance();\n      if (theme === "auto") {\n        theme = window.matchMedia("(prefers-color-scheme: dark)").matches\n          ? "dark"\n          : "default";\n      }\n      return theme;\n    },\n    getOriginalAppearance() {\n      const defaultTheme = "default";\n      return localStorage.getItem("hs_theme") || defaultTheme;\n    },\n  };\n  HSThemeAppearance.init();\n\n  window\n    .matchMedia("(prefers-color-scheme: dark)")\n    .addEventListener("change", () => {\n      if (HSThemeAppearance.getOriginalAppearance() === "auto") {\n        HSThemeAppearance.setAppearance("auto", false);\n      }\n    });\n\n  window.addEventListener("load", () => {\n    const $clickableThemes = document.querySelectorAll(\n      "[data-hs-theme-click-value]",\n    );\n    const $switchableThemes = document.querySelectorAll(\n      "[data-hs-theme-switch]",\n    );\n\n    $clickableThemes.forEach(($item) => {\n      $item.addEventListener("click", () =>\n        HSThemeAppearance.setAppearance(\n          $item.getAttribute("data-hs-theme-click-value"),\n          true,\n          $item,\n        ),\n      );\n    });\n\n    $switchableThemes.forEach(($item) => {\n      $item.addEventListener("change", (e) => {\n        HSThemeAppearance.setAppearance(e.target.checked ? "dark" : "default");\n      });\n\n      $item.checked = HSThemeAppearance.getAppearance() === "dark";\n    });\n\n    window.addEventListener("on-hs-appearance-change", (e) => {\n      $switchableThemes.forEach(($item) => {\n        $item.checked = e.detail === "dark";\n      });\n    });\n  });\n<\/script> <!--Import the necessary Collapse and Overlay plugins--> <!--https://preline.co/plugins/html/collapse.html--> <!--https://preline.co/plugins/html/overlay.html--> <script src="/scripts/vendor/preline/collapse/index.js"><\/script> <script src="/scripts/vendor/preline/overlay/index.js"><\/script> '], ["<!-- Main header component -->", '<header class="sticky inset-x-0 top-0 z-50 flex w-full flex-wrap text-sm md:flex-nowrap md:justify-start astro-qxfqz4re"> <!-- Navigation container --> <nav class="relative w-full border border-yellow-100/40 bg-yellow-50/60 backdrop-blur-md px-4   dark:border-neutral-700/40 dark:bg-neutral-800/80 dark:backdrop-blur-md md:flex md:items-center md:justify-between px-4 md:px-0 astro-qxfqz4re" aria-label="Global"> <div class="flex items-center justify-between w-full px-4 py-3 md:px-6 lg:px-8 px-6 astro-qxfqz4re"> <!-- Brand logo --> <a class="flex-none rounded-lg text-xl font-bold outline-none ring-zinc-500 focus-visible:ring dark:ring-zinc-200 dark:focus:outline-none astro-qxfqz4re"', ' aria-label="Brand"> ', ' </a> <!-- Collapse toggle for smaller screens --> <div class="ml-auto mr-5 md:hidden astro-qxfqz4re"> <button type="button" class="hs-collapse-toggle flex h-8 w-8 items-center justify-center rounded-full text-sm font-bold text-neutral-600 transition duration-300 hover:bg-neutral-200 disabled:pointer-events-none disabled:opacity-50 dark:text-neutral-400 dark:hover:bg-neutral-700 dark:focus:outline-none astro-qxfqz4re" data-hs-collapse="#navbar-collapse-with-animation" aria-controls="navbar-collapse-with-animation" aria-label="Toggle navigation"> <svg class="h-[1.25rem] w-[1.25rem] flex-shrink-0 hs-collapse-open:hidden astro-qxfqz4re" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"> <line x1="3" x2="21" y1="6" y2="6" class="astro-qxfqz4re"></line> <line x1="3" x2="21" y1="12" y2="12" class="astro-qxfqz4re"></line> <line x1="3" x2="21" y1="18" y2="18" class="astro-qxfqz4re"></line> </svg> <svg class="hidden h-[1.25rem] w-[1.25rem] flex-shrink-0 hs-collapse-open:block astro-qxfqz4re" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"> <path d="M18 6 6 18" class="astro-qxfqz4re"></path> <path d="m6 6 12 12" class="astro-qxfqz4re"></path> </svg> </button> </div> <!-- ThemeIcon component specifically for smaller screens --> <span class="inline-block md:hidden astro-qxfqz4re"> ', ' </span> </div> <!-- Contains navigation links --> <div id="navbar-collapse-with-animation" class="hs-collapse hidden grow basis-full overflow-hidden transition-all duration-300 md:block astro-qxfqz4re"> <!-- Navigation links container --> <div class="mt-5 flex flex-col gap-x-0 gap-y-4 md:mt-0 md:flex-row md:items-center md:justify-end md:gap-x-4 lg:gap-x-7 md:gap-y-0 md:ps-7 mx-6 astro-qxfqz4re"> <!-- Navigation links and Authentication component --> ', " <!-- <Authentication /> --> ", ' <!-- ThemeIcon component specifically for larger screens --> <span class="hidden md:inline-block astro-qxfqz4re"> ', ' </span> </div> </div> </nav> </header> <!-- Theme Appearance script to manage light/dark modes --> <script>\n  const HSThemeAppearance = {\n    init() {\n      const defaultTheme = "default";\n      let theme = localStorage.getItem("hs_theme") || defaultTheme;\n\n      if (document.querySelector("html").classList.contains("dark")) return;\n      this.setAppearance(theme);\n    },\n    _resetStylesOnLoad() {\n      const $resetStyles = document.createElement("style");\n      $resetStyles.innerText = \\`*{transition: unset !important;}\\`;\n      $resetStyles.setAttribute("data-hs-appearance-onload-styles", "");\n      document.head.appendChild($resetStyles);\n      return $resetStyles;\n    },\n    setAppearance(theme, saveInStore = true, dispatchEvent = true) {\n      const $resetStylesEl = this._resetStylesOnLoad();\n\n      if (saveInStore) {\n        localStorage.setItem("hs_theme", theme);\n      }\n\n      if (theme === "auto") {\n        theme = window.matchMedia("(prefers-color-scheme: dark)").matches\n          ? "dark"\n          : "default";\n      }\n\n      document.querySelector("html").classList.remove("dark");\n      document.querySelector("html").classList.remove("default");\n      document.querySelector("html").classList.remove("auto");\n\n      document\n        .querySelector("html")\n        .classList.add(this.getOriginalAppearance());\n\n      setTimeout(() => {\n        $resetStylesEl.remove();\n      });\n\n      if (dispatchEvent) {\n        window.dispatchEvent(\n          new CustomEvent("on-hs-appearance-change", { detail: theme }),\n        );\n      }\n    },\n    getAppearance() {\n      let theme = this.getOriginalAppearance();\n      if (theme === "auto") {\n        theme = window.matchMedia("(prefers-color-scheme: dark)").matches\n          ? "dark"\n          : "default";\n      }\n      return theme;\n    },\n    getOriginalAppearance() {\n      const defaultTheme = "default";\n      return localStorage.getItem("hs_theme") || defaultTheme;\n    },\n  };\n  HSThemeAppearance.init();\n\n  window\n    .matchMedia("(prefers-color-scheme: dark)")\n    .addEventListener("change", () => {\n      if (HSThemeAppearance.getOriginalAppearance() === "auto") {\n        HSThemeAppearance.setAppearance("auto", false);\n      }\n    });\n\n  window.addEventListener("load", () => {\n    const $clickableThemes = document.querySelectorAll(\n      "[data-hs-theme-click-value]",\n    );\n    const $switchableThemes = document.querySelectorAll(\n      "[data-hs-theme-switch]",\n    );\n\n    $clickableThemes.forEach(($item) => {\n      $item.addEventListener("click", () =>\n        HSThemeAppearance.setAppearance(\n          $item.getAttribute("data-hs-theme-click-value"),\n          true,\n          $item,\n        ),\n      );\n    });\n\n    $switchableThemes.forEach(($item) => {\n      $item.addEventListener("change", (e) => {\n        HSThemeAppearance.setAppearance(e.target.checked ? "dark" : "default");\n      });\n\n      $item.checked = HSThemeAppearance.getAppearance() === "dark";\n    });\n\n    window.addEventListener("on-hs-appearance-change", (e) => {\n      $switchableThemes.forEach(($item) => {\n        $item.checked = e.detail === "dark";\n      });\n    });\n  });\n<\/script> <!--Import the necessary Collapse and Overlay plugins--> <!--https://preline.co/plugins/html/collapse.html--> <!--https://preline.co/plugins/html/overlay.html--> <script src="/scripts/vendor/preline/collapse/index.js"><\/script> <script src="/scripts/vendor/preline/overlay/index.js"><\/script> '])), maybeRenderHead(), addAttribute(homeUrl, "href"), renderComponent($$result, "BrandLogo", $$BrandLogo, { "class": "h-auto w-24 astro-qxfqz4re" }), renderComponent($$result, "ThemeIcon", $$ThemeIcon, { "class": "astro-qxfqz4re" }), strings.navBarLinks.map((link) => renderTemplate`${renderComponent($$result, "NavLink", $$NavLink, { "url": link.url, "name": link.name, "class": "astro-qxfqz4re" })}`), renderComponent($$result, "LanguagePicker", $$LanguagePicker, { "class": "astro-qxfqz4re" }), renderComponent($$result, "ThemeIcon", $$ThemeIcon, { "class": "astro-qxfqz4re" }));
}, "/Users/goon/Desktop/ELR-Agency/ELR-Agency/ELR Agency Clients/horuss-paint/src/components/sections/Navbar2.astro", void 0);

const $$Astro$3 = createAstro("https://horuss.ca");
const $$FooterSocialLink = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$3, $$props, $$slots);
  Astro2.self = $$FooterSocialLink;
  const { url } = Astro2.props;
  const linkClass = "inline-flex h-10 w-10 items-center justify-center gap-x-2 rounded-lg border border-transparent text-sm font-bold text-neutral-700 outline-none ring-zinc-500 hover:bg-neutral-500/10 focus:outline-none focus-visible:ring focus-visible:ring-zinc-500 dark:ring-zinc-200 dark:hover:bg-neutral-50/10";
  return renderTemplate`${maybeRenderHead()}<a${addAttribute(linkClass, "class")}${addAttribute(url, "href")} target="_blank" rel="noopener noreferrer"> ${renderSlot($$result, $$slots["default"])} </a>`;
}, "/Users/goon/Desktop/ELR-Agency/ELR-Agency/ELR Agency Clients/horuss-paint/src/components/ui/links/FooterSocialLink.astro", void 0);

const $$Astro$2 = createAstro("https://horuss.ca");
const $$EmailFooterInput = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$EmailFooterInput;
  const {
    label = "Search",
    title = Astro2.currentLocale === "fr" ? "S'abonner" : "Subscribe",
    id = "footer-input"
  } = Astro2.props;
  const placeholder = Astro2.currentLocale === "fr" ? "Entrez votre email" : "Enter your email";
  return renderTemplate`${maybeRenderHead()}<div class="mt-4 flex flex-col items-center gap-2 rounded-lg bg-neutral-200 p-2 dark:bg-neutral-800 sm:flex-row sm:gap-3"> <div class="w-full"> <label${addAttribute(id, "for")} class="sr-only">${label}</label> <input type="text"${addAttribute(id, "id")} name="footer-input" class="block w-full rounded-lg border-transparent bg-neutral-100 px-4 py-3 text-sm text-neutral-600 focus:border-indigo-400 focus:ring-indigo-400 disabled:pointer-events-none disabled:opacity-50 dark:border-transparent dark:bg-neutral-700 dark:text-gray-300 dark:placeholder:text-neutral-300"${addAttribute(placeholder, "placeholder")}> </div> <a class="inline-flex w-full items-center justify-center gap-x-2 whitespace-nowrap rounded-lg border border-transparent bg-indigo-700 p-3 text-sm font-bold text-neutral-50 outline-none ring-zinc-500 transition duration-300 hover:bg-indigo-500 focus-visible:ring disabled:pointer-events-none disabled:opacity-50 dark:ring-zinc-200 dark:focus:outline-none dark:focus:ring-1 sm:w-auto" href="#"> ${title} </a> </div>`;
}, "/Users/goon/Desktop/ELR-Agency/ELR-Agency/ELR Agency Clients/horuss-paint/src/components/ui/forms/input/EmailFooterInput.astro", void 0);

const $$Astro$1 = createAstro("https://horuss.ca");
const $$FooterSection = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$FooterSection;
  const strings = Astro2.currentLocale === "fr" ? frStrings : enStrings;
  const sectionThreeTitle = Astro2.currentLocale === "fr" ? "Rester \xE0 jour" : "Stay up to date";
  const sectionThreeContent = Astro2.currentLocale === "fr" ? "Restez inform\xE9 des derniers outils et des offres exclusives." : "Stay updated with the latest tools and exclusive deals.";
  const crafted = Astro2.currentLocale === "fr" ? "Fabriqu\xE9 par" : "Crafted by";
  return renderTemplate`${maybeRenderHead()}<footer class="w-full bg-neutral-300 dark:bg-neutral-900"> <div class="mx-auto w-full max-w-[85rem] px-4 py-10 sm:px-6 lg:px-16 lg:pt-20 2xl:max-w-screen-2xl"> <div class="grid grid-cols-2 gap-6 md:grid-cols-4 lg:grid-cols-5"> <div class="col-span-full lg:col-span-1"> <!-- Brand Logo --> ${renderComponent($$result, "BrandLogo", $$BrandLogo, { "class": "h-auto w-32" })} </div> <!-- An array of links for Product and Company sections --> ${strings.footerLinks.map((section) => renderTemplate`<div class="col-span-1"> <h3 class="font-bold text-neutral-800 dark:text-neutral-200"> ${section.section} </h3> <ul class="mt-3 grid space-y-3"> ${section.links.map((link, index) => renderTemplate`<li> <a${addAttribute(link.url, "href")} class="inline-flex gap-x-2 rounded-lg text-neutral-600 outline-none ring-zinc-500 transition duration-300 hover:text-neutral-500 focus-visible:ring dark:text-neutral-400 dark:ring-zinc-200 dark:hover:text-neutral-300 dark:focus:outline-none"> ${link.name} </a> ${section.section === "Company" && index === 2 ? renderTemplate`<span class="ms-1 inline rounded-lg bg-indigo-500 px-2 py-1 text-xs font-bold text-neutral-50">
Read more
</span>` : null} </li>`)} </ul> </div>`)} <div class="col-span-2"> <h3 class="font-bold text-neutral-800 dark:text-neutral-200"> ${sectionThreeTitle} </h3> <form> ${renderComponent($$result, "EmailFooterInput", $$EmailFooterInput, {})} <p class="mt-3 text-sm text-neutral-600 dark:text-neutral-400"> ${sectionThreeContent} </p> </form> </div> </div> <div class="mt-9 grid gap-y-2 sm:mt-12 sm:flex sm:items-center sm:justify-between sm:gap-y-0"> <div class="flex items-center justify-between"> <p class="text-sm text-neutral-600 dark:text-neutral-400">
© <span id="current-year"></span> ${SITE.title}. ${crafted} <a class="rounded-lg font-medium underline underline-offset-2 outline-none ring-zinc-500 transition duration-300 hover:text-neutral-700 hover:decoration-dashed focus:outline-none focus-visible:ring dark:ring-zinc-200 dark:hover:text-neutral-300" href="https://elragency.com" target="_blank" rel="noopener noreferrer">ELR AGENCY</a>.
</p> </div> <!-- Social Brands --> <div> ${renderComponent($$result, "FooterSocialLink", $$FooterSocialLink, { "url": strings.socialLinks.facebook }, { "default": ($$result2) => renderTemplate`${renderComponent($$result2, "Icon", $$Icon, { "name": "facebookFooter" })} ` })} ${renderComponent($$result, "FooterSocialLink", $$FooterSocialLink, { "url": strings.socialLinks.instagram }, { "default": ($$result2) => renderTemplate`${renderComponent($$result2, "Icon", $$Icon, { "name": "instagramFooter" })}` })} ${renderComponent($$result, "FooterSocialLink", $$FooterSocialLink, { "url": strings.socialLinks.linkedin }, { "default": ($$result2) => renderTemplate`${renderComponent($$result2, "Icon", $$Icon, { "name": "linkedIn" })} ` })} <!-- <FooterSocialLink url={strings.socialLinks.google}
          ><Icon name="instagramFooter" />
        </FooterSocialLink>

        <FooterSocialLink url={strings.socialLinks.slack}
          ><Icon name="slackFooter" />
        </FooterSocialLink> --> </div> </div> ${renderScript($$result, "/Users/goon/Desktop/ELR-Agency/ELR-Agency/ELR Agency Clients/horuss-paint/src/components/sections/FooterSection.astro?astro&type=script&index=0&lang.ts")} </div> </footer>`;
}, "/Users/goon/Desktop/ELR-Agency/ELR-Agency/ELR Agency Clients/horuss-paint/src/components/sections/FooterSection.astro", void 0);

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(raw || cooked.slice()) }));
var _a;
const $$Astro = createAstro("https://horuss.ca");
const $$MainLayout = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$MainLayout;
  const { title = SITE.title, meta, structuredData, lang = "fr" } = Astro2.props;
  return renderTemplate(_a || (_a = __template(["<!--\nThis is the main structure for the page.\nWe set the language of the page to English and add classes for scrollbar and scroll behavior.\n--><html", ' class="scrollbar-hide lenis lenis-smooth scroll-pt-16 astro-ouamjn2i"> <head><!-- Adding metadata to the HTML document -->', "<!-- Define the title of the page --><title>", '</title><script>\n      // Script to handle dark mode. It will check if the theme is stored in localStorage or if dark theme is preferred by system settings\n      if (\n        localStorage.getItem("hs_theme") === "dark" ||\n        (!("hs_theme" in localStorage) &&\n          window.matchMedia("(prefers-color-scheme: dark)").matches)\n      ) {\n        document.documentElement.classList.add("dark");\n      } else {\n        document.documentElement.classList.remove("dark");\n      }\n    <\/script><script src="/scripts/vendor/lenis/lenis.js"><\/script><script>\n      // Script to handle Lenis library settings for smooth scrolling\n      const lenis = new Lenis();\n\n      function raf(time) {\n        lenis.raf(time);\n        requestAnimationFrame(raf);\n      }\n\n      requestAnimationFrame(raf);\n    <\/script><!-- Google tag (gtag.js) --><script async src="https://www.googletagmanager.com/gtag/js?id=G-SQY9EY2Z1Z"><\/script>', "", '</head> <body class="bg-neutral-200 selection:bg-yellow-400 selection:text-neutral-700 dark:bg-neutral-800 astro-ouamjn2i"> <!--\n    Setting up the main structure of the page.\n    The Navbar is placed at the top, with a slot for the main content and FooterSection at the bottom.\n    --> <div class="astro-ouamjn2i"> ', ' <div class="mx-auto max-w-screen-2xl px-4 sm:px-6 lg:px-8 astro-ouamjn2i"> <main class="astro-ouamjn2i"> ', " </main> </div> </div> ", '  <!-- Start of HubSpot Embed Code --> <script type="text/javascript" id="hs-script-loader" async defer src="//js.hs-scripts.com/46565719.js"><\/script> <!-- End of HubSpot Embed Code --> </body></html>'])), addAttribute(lang, "lang"), renderComponent($$result, "Meta", $$Meta, { "meta": meta, "structuredData": structuredData, "class": "astro-ouamjn2i" }), title, renderScript($$result, "/Users/goon/Desktop/ELR-Agency/ELR-Agency/ELR Agency Clients/horuss-paint/src/layouts/MainLayout.astro?astro&type=script&index=0&lang.ts"), renderHead(), renderComponent($$result, "Navbar", $$Navbar2, { "class": "astro-ouamjn2i" }), renderSlot($$result, $$slots["default"]), renderComponent($$result, "FooterSection", $$FooterSection, { "class": "astro-ouamjn2i" }));
}, "/Users/goon/Desktop/ELR-Agency/ELR-Agency/ELR Agency Clients/horuss-paint/src/layouts/MainLayout.astro", void 0);

export { $$MainLayout as $, SITE as S, $$Icon as a };
