/* empty css                         */
import { a as createAstro, b as createComponent, d as renderTemplate, f as renderScript, e as renderComponent, m as maybeRenderHead } from './astro/server_BHOel7Fx.mjs';
import 'kleur/colors';
import { $ as $$MainLayout } from './MainLayout_DZFt7YAq.mjs';
import { $ as $$HeroSection } from './HeroSection_C8_qJs_r.mjs';
import { $ as $$HeroSectionAlt } from './HeroSectionAlt_q6ElQBja.mjs';
import { $ as $$FeaturesNavs } from './FeaturesNavs_CsnQeJGS.mjs';
import { $ as $$TestimonialsSection } from './TestimonialsSection_BI7rLiRF.mjs';
import { $ as $$FAQ } from './FAQ_C7Faydrn.mjs';
import { f as faqs } from './faqs_DTpnW1o0.mjs';
import { f as featureImage, t as tools, d as dashboard, c as construction } from './result_CVKJW3Jn.mjs';
import { g as getRelativeLocaleUrl } from './i18n_kCHKJbRo.mjs';

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(raw || cooked.slice()) }));
var _a;
const $$Astro = createAstro("https://horuss.ca");
const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Index;
  const avatarSrcs = [
    "https://images.unsplash.com/photo-1568602471122-7832951cc4c5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2&w=300&h=300&q=80",
    "https://images.unsplash.com/photo-1531927557220-a9e23c1e4794?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2&w=300&h=300&q=80",
    "https://images.unsplash.com/photo-1541101767792-f9b2b1c4f127?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&&auto=format&fit=facearea&facepad=3&w=300&h=300&q=80",
    "https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2&w=300&h=300&q=80"
  ];
  return renderTemplate(_a || (_a = __template(["", ' <script src="/scripts/vendor/gsap/gsap.min.js"><\/script> ', " ", ""])), renderComponent($$result, "MainLayout", $$MainLayout, { "lang": "fr" }, { "default": ($$result2) => renderTemplate`   ${maybeRenderHead()}<section class="mb-11 pb-11"> <!-- <Splash /> --> ${renderComponent($$result2, "HeroSection", $$HeroSection, { "title": `HORUSS`, "subTitle": "Embellissez votre espace avec nos services de peinture professionnels pour maisons, commerces et entreprises.", "primaryBtn": "Demander un Devis", "primaryBtnURL": getRelativeLocaleUrl("fr", "contact"), "src": featureImage, "withReview": false, "avatars": avatarSrcs, "rating": `<span class="font-bold">4.8</span> / 5`, "starCount": 4, "reviews": `Avec plus de <span class="font-bold">12,8k</span> avis`, "alt": "Des employ\xE9s comp\xE9tents de HORUSS" })} </section>   ${renderComponent($$result2, "FeaturesNavs", $$FeaturesNavs, { "title": `L'\xE9quipe de <span class="text-indigo-700 dark:text-indigo-400">HORUSS</span> est l\xE0 pour r\xE9pondre \xE0 tous vos besoins en peinture.`, "tabs": [
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
  ] })} ${renderComponent($$result2, "TestimonialsSection", $$TestimonialsSection, { "title": "D\xE9couvrez Nos R\xE9sultats", "subTitle": "Chez HORUSS, nous nous engageons \xE0 offrir des r\xE9sultats exceptionnels pour tous vos projets de peinture. Notre \xE9quipe garantit une ex\xE9cution efficace et des r\xE9sultats durables qui respectent vos attentes et votre budget.", "testimonials": [
    {
      content: "HORUSS a transform\xE9 l'apparence de notre maison. Leur r\xE9activit\xE9 et leur expertise ont d\xE9pass\xE9 nos attentes, et les r\xE9sultats sont impressionnants !",
      author: "Samantha Ruiz",
      role: "Propri\xE9taire de Maison | ConstructIt Inc.",
      avatarSrc: "https://images.unsplash.com/photo-1593104547489-5cfb3839a3b5?q=80&w=1453&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D8&auto=format&fit=facearea&facepad=2&w=320&h=320&q=80"
    }
  ], "statistics": [
    {
      count: "500+",
      description: "Projets de peinture r\xE9alis\xE9s avec succ\xE8s par l'\xE9quipe de HORUSS au cours de la derni\xE8re ann\xE9e."
    },
    {
      count: "60%",
      description: "Augmentation de la satisfaction des clients gr\xE2ce \xE0 nos techniques de peinture innovantes."
    },
    {
      count: "70%",
      description: "De nos clients voient une am\xE9lioration significative de l'apparence de leurs espaces dans les trois premiers mois."
    },
    {
      count: "3x",
      description: "Dur\xE9e de vie prolong\xE9e des surfaces peintes gr\xE2ce \xE0 notre pr\xE9paration et nos mat\xE9riaux de haute qualit\xE9."
    }
  ] })}   ${renderComponent($$result2, "FAQ", $$FAQ, { "id": "faq", "title": "Questions<br />fr\xE9quemment pos\xE9es", "faqs": faqs })} ${renderComponent($$result2, "HeroSectionAlt", $$HeroSectionAlt, { "title": "Faisons Affaires Ensemble", "subTitle": "Nous sommes fiers de pouvoir changer l'apparence des espaces de ceux qui nous font confiance, c'est ce qui nous motive r\xE9ellement. Serez-vous le prochain?", "url": "/contact" })} ` }), renderScript($$result, "/Users/goon/Desktop/ELR-Agency/ELR-Agency/ELR Agency Clients/horuss-paint/src/pages/index.astro?astro&type=script&index=0&lang.ts"), renderScript($$result, "/Users/goon/Desktop/ELR-Agency/ELR-Agency/ELR Agency Clients/horuss-paint/src/pages/index.astro?astro&type=script&index=1&lang.ts"));
}, "/Users/goon/Desktop/ELR-Agency/ELR-Agency/ELR Agency Clients/horuss-paint/src/pages/index.astro", void 0);

const $$file = "/Users/goon/Desktop/ELR-Agency/ELR-Agency/ELR Agency Clients/horuss-paint/src/pages/index.astro";
const $$url = "";

export { $$Index as default, $$file as file, $$url as url };
