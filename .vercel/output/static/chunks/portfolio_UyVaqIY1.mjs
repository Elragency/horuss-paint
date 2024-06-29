/* empty css                         */
import { a as createAstro, b as createComponent, d as renderTemplate, f as renderScript, e as renderComponent, m as maybeRenderHead } from './astro/server_BHOel7Fx.mjs';
import 'kleur/colors';
import { $ as $$MainLayout } from './MainLayout_DZFt7YAq.mjs';
import { $ as $$Splash, a as $$HeroImg } from './splash_B2Vqu0I3.mjs';
import { $ as $$HeroSectionAlt } from './HeroSectionAlt_q6ElQBja.mjs';
import { $ as $$TestimonialsSection } from './TestimonialsSection_BI7rLiRF.mjs';
import { $ as $$FAQ } from './FAQ_C7Faydrn.mjs';
import { f as faqs } from './faqs_DTpnW1o0.mjs';
import { g as getRelativeLocaleUrl } from './i18n_kCHKJbRo.mjs';
import { $ as $$Banner } from './Banner_C33_leq9.mjs';

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(raw || cooked.slice()) }));
var _a;
const $$Astro = createAstro("https://horuss.ca");
const $$Portfolio = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Portfolio;
  const avatarSrcs = [
    "https://images.unsplash.com/photo-1568602471122-7832951cc4c5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2&w=300&h=300&q=80",
    "https://images.unsplash.com/photo-1531927557220-a9e23c1e4794?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2&w=300&h=300&q=80",
    "https://images.unsplash.com/photo-1541101767792-f9b2b1c4f127?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&&auto=format&fit=facearea&facepad=3&w=300&h=300&q=80",
    "https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2&w=300&h=300&q=80"
  ];
  return renderTemplate(_a || (_a = __template(["", ' <script src="/scripts/vendor/gsap/gsap.min.js"><\/script> ', " ", ""])), renderComponent($$result, "MainLayout", $$MainLayout, { "lang": "fr" }, { "default": ($$result2) => renderTemplate`   ${maybeRenderHead()}<section class="mb-11 pb-11"> ${renderComponent($$result2, "Splash", $$Splash, {})} ${renderComponent($$result2, "HeroSection", $$HeroImg, { "title": `PORTFOLIO`, "subTitle": "Transformez votre entreprise en r\xE9volutionnant l\u2019aspect technologique de votre compagnie gr\xE2ce \xE0 nous.", "primaryBtn": "Se Mettre En Ligne", "primaryBtnURL": getRelativeLocaleUrl("fr", "contact"), "withReview": false, "avatars": avatarSrcs, "rating": `<span class="font-bold">4.8</span> / 5`, "starCount": 4, "reviews": `Avec plus de <span class="font-bold">12,8k</span> avis`, "alt": "Des employ\xE9s comp\xE9tents de l'agence ELR" })} </section> <br><br><br><br> <br><br><br><br> <br><br><br><br><br><br><br><br> <br><br><br><br><br><br><br><br> ${renderComponent($$result2, "TestimonialsSection", $$TestimonialsSection, { "title": "D\xE9couvrez Nos R\xE9sultats", "subTitle": "\xC0 l'AGENCE ELR, nous nous engageons \xE0 offrir des r\xE9sultats exceptionnels pour tous vos projets de marketing digital. Notre \xE9quipe garantit une ex\xE9cution efficace et des r\xE9sultats mesurables qui respectent vos objectifs et votre budget.", "testimonials": [
    {
      content: "AGENCE ELR a transform\xE9 notre pr\xE9sence en ligne. Leur r\xE9activit\xE9 et leur expertise ont d\xE9pass\xE9 nos attentes, et les r\xE9sultats sont impressionnants !",
      author: "Samantha Ruiz",
      role: "Directrice des op\xE9rations | ConstructIt Inc.",
      avatarSrc: "https://images.unsplash.com/photo-1593104547489-5cfb3839a3b5?q=80&w=1453&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D8&auto=format&fit=facearea&facepad=2&w=320&h=320&q=80"
    }
  ], "statistics": [
    {
      count: "500+",
      description: "Campagnes de marketing digital r\xE9alis\xE9es avec succ\xE8s par l'\xE9quipe d'AGENCE ELR au cours de la derni\xE8re ann\xE9e."
    },
    {
      count: "60%",
      description: "Augmentation moyenne du retour sur investissement pour nos clients gr\xE2ce \xE0 nos strat\xE9gies innovantes."
    },
    {
      count: "70%",
      description: "De nos clients voient une am\xE9lioration significative de leur engagement en ligne dans les trois premiers mois."
    },
    {
      count: "3x",
      description: "Croissance du trafic web pour nos clients apr\xE8s l'optimisation de leur site."
    }
  ] })} ${renderComponent($$result2, "Banner", $$Banner, {})}  ${renderComponent($$result2, "FAQ", $$FAQ, { "id": "faq", "title": "Questions<br />fr\xE9quemment pos\xE9es", "faqs": faqs })} ${renderComponent($$result2, "HeroSectionAlt", $$HeroSectionAlt, { "title": "Faisons Affaires Ensemble", "subTitle": "Nous sommes fiers de pouvoir changer la vie des entrepreneurs qui nous font confiance, c'est ce qui nous motive r\xE9ellement. Serez-vous le prochain?", "url": "/contact" })} ` }), renderScript($$result, "/Users/goon/Desktop/ELR-Agency/ELR-Agency/ELR Agency Clients/horuss-paint/src/pages/portfolio.astro?astro&type=script&index=0&lang.ts"), renderScript($$result, "/Users/goon/Desktop/ELR-Agency/ELR-Agency/ELR Agency Clients/horuss-paint/src/pages/portfolio.astro?astro&type=script&index=1&lang.ts"));
}, "/Users/goon/Desktop/ELR-Agency/ELR-Agency/ELR Agency Clients/horuss-paint/src/pages/portfolio.astro", void 0);

const $$file = "/Users/goon/Desktop/ELR-Agency/ELR-Agency/ELR Agency Clients/horuss-paint/src/pages/portfolio.astro";
const $$url = "/portfolio";

export { $$Portfolio as default, $$file as file, $$url as url };
