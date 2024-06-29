/* empty css                         */
import { a as createAstro, b as createComponent, d as renderTemplate, f as renderScript, e as renderComponent, m as maybeRenderHead } from './astro/server_BHOel7Fx.mjs';
import 'kleur/colors';
import { $ as $$MainLayout } from './MainLayout_DZFt7YAq.mjs';
import { $ as $$HeroSection } from './HeroSection_C8_qJs_r.mjs';
import { $ as $$HeroSectionAlt } from './HeroSectionAlt_q6ElQBja.mjs';
import { $ as $$FeaturesNavs } from './FeaturesNavs_CsnQeJGS.mjs';
import { f as featureImage, t as tools, d as dashboard, c as construction } from './result_CVKJW3Jn.mjs';
import { g as getRelativeLocaleUrl } from './i18n_kCHKJbRo.mjs';

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(raw || cooked.slice()) }));
var _a;
const $$Astro = createAstro("https://horuss.ca");
async function getStaticPaths() {
  const cities = [
    "Brossard",
    "Montreal",
    "Laval",
    "Candiac",
    "La-Prairie",
    "Mont\xE9r\xE9gie",
    "Monteregie",
    "Acton Vale",
    "Bedford",
    "Beloeil",
    "Boucherville",
    "Brome Lake",
    "Bromont",
    "Chambly",
    "Ch\xE2teauguay",
    "Contrecoeur",
    "Cowansville",
    "Delson",
    "Farnham",
    "Granby",
    "Hudson",
    "Huntingdon",
    "L'\xCEle-Perrot",
    "Longueuil",
    "Marieville",
    "McMasterville",
    "Mercier",
    "Mont-Saint-Hilaire",
    "Otterburn Park",
    "Pincourt",
    "Richelieu",
    "Saint-Amable",
    "Saint-Basile-le-Grand",
    "Saint-Bruno-de-Montarville",
    "Saint-C\xE9saire",
    "Saint-Constant",
    "Saint-Hyacinthe",
    "Saint-Jean-sur-Richelieu",
    "Saint-Lambert",
    "Saint-Lazare",
    "Saint-Paul-d'Abbotsford",
    "Sainte-Catherine",
    "Sainte-Julie",
    "Sorel-Tracy",
    "Varennes",
    "Vaudreuil-Dorion"
  ];
  return cities.map((city) => ({
    params: { city }
  }));
}
const $$city = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$city;
  const avatarSrcs = [
    "https://images.unsplash.com/photo-1568602471122-7832951cc4c5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2&w=300&h=300&q=80",
    "https://images.unsplash.com/photo-1531927557220-a9e23c1e4794?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2&w=300&h=300&q=80",
    "https://images.unsplash.com/photo-1541101767792-f9b2b1c4f127?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&&auto=format&fit=facearea&facepad=3&w=300&h=300&q=80",
    "https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2&w=300&h=300&q=80"
  ];
  const { city } = Astro2.params;
  return renderTemplate(_a || (_a = __template(["", ' <script src="/scripts/vendor/gsap/gsap.min.js"><\/script> ', " ", ""])), renderComponent($$result, "MainLayout", $$MainLayout, { "title": `Services de Peinture \xE0 ${city}`, "lang": "fr", "structuredData": {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "@id": "https://www.horuss.ca/",
    url: "https://www.horuss.ca/",
    name: "Services de peinture | HORUSS",
    description: "Nous sommes les experts en peinture pour les propri\xE9taires et les entreprises qui veulent transformer leurs espaces.",
    isPartOf: {
      "@type": "WebSite",
      url: "https://www.horuss.ca",
      name: "HORUSS",
      description: "HORUSS propose des services de peinture de haute qualit\xE9, avec des experts pr\xEAts \xE0 r\xE9pondre \xE0 tous vos besoins en mati\xE8re de peinture et de r\xE9novation de murs."
    },
    inLanguage: "fr-CAN"
  } }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<section class="mb-11 pb-11"> <!-- <Splash /> --> ${renderComponent($$result2, "HeroSection", $$HeroSection, { "title": `HORUSS`, "subTitle": `Embellissez votre espace avec nos services de peinture professionnels pour maisons, commerces et entreprises \xE0 ${city}`, "primaryBtn": "Demander un Devis", "primaryBtnURL": getRelativeLocaleUrl("fr", "contact"), "src": featureImage, "withReview": false, "avatars": avatarSrcs, "rating": `<span class="font-bold">4.8</span> / 5`, "starCount": 4, "reviews": `Avec plus de <span class="font-bold">12,8k</span> avis`, "alt": "Des employ\xE9s comp\xE9tents de HORUSS" })} </section>  ${renderComponent($$result2, "FeaturesNavs", $$FeaturesNavs, { "title": `L'\xE9quipe de <span class="text-orange-500 dark:text-orange-400">HORUSS</span> est l\xE0 pour r\xE9pondre \xE0 tous vos besoins en peinture \xE0 ${city}.`, "tabs": [
    {
      heading: "Support Personnalis\xE9",
      content: "B\xE9n\xE9ficiez d'un accompagnement sur mesure \xE0 chaque \xE9tape de votre projet de peinture, assur\xE9 par une \xE9quipe d\xE9di\xE9e \xE0 votre satisfaction.",
      svg: "tools",
      src: tools,
      alt: "\xC9quipe offrant un support client personnalis\xE9",
      first: true
    },
    {
      heading: "R\xE9sultats Impeccables",
      content: "Obtenez des r\xE9sultats impeccables et durables gr\xE2ce \xE0 notre expertise en techniques de peinture et en pr\xE9paration de surfaces.",
      svg: "dashboard",
      src: dashboard,
      alt: "Graphique illustrant des r\xE9sultats impeccables"
    },
    {
      heading: "Expertise en Couleurs",
      content: "Profitez de notre expertise en choix de couleurs pour cr\xE9er des espaces harmonieux et esth\xE9tiquement plaisants.",
      svg: "dashboard",
      src: construction,
      alt: "Tableau pr\xE9sentant des donn\xE9es sur les choix de couleurs"
    }
  ] })} ${renderComponent($$result2, "HeroSectionAlt", $$HeroSectionAlt, { "title": "Faisons Affaires Ensemble", "subTitle": "Nous sommes fiers de pouvoir changer la vie des entrepreneurs qui nous font confiance, c'est ce qui nous motive r\xE9ellement. Serez-vous le prochain?", "url": "/contact" })} ` }), renderScript($$result, "/Users/goon/Desktop/ELR-Agency/ELR-Agency/ELR Agency Clients/horuss-paint/src/pages/ville/[city].astro?astro&type=script&index=0&lang.ts"), renderScript($$result, "/Users/goon/Desktop/ELR-Agency/ELR-Agency/ELR Agency Clients/horuss-paint/src/pages/ville/[city].astro?astro&type=script&index=1&lang.ts"));
}, "/Users/goon/Desktop/ELR-Agency/ELR-Agency/ELR Agency Clients/horuss-paint/src/pages/ville/[city].astro", void 0);

const $$file = "/Users/goon/Desktop/ELR-Agency/ELR-Agency/ELR Agency Clients/horuss-paint/src/pages/ville/[city].astro";
const $$url = "/ville/[city]";

export { $$city as default, $$file as file, getStaticPaths, $$url as url };
