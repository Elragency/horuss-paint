/* empty css                         */
import { a as createAstro, b as createComponent, d as renderTemplate, f as renderScript, e as renderComponent, m as maybeRenderHead } from './astro/server_BHOel7Fx.mjs';
import 'kleur/colors';
import { $ as $$MainLayout } from './MainLayout_DZFt7YAq.mjs';
import { $ as $$Splash, a as $$HeroImg } from './splash_B2Vqu0I3.mjs';
import { $ as $$HeroSectionAlt } from './HeroSectionAlt_q6ElQBja.mjs';
import { $ as $$FeaturesGeneral } from './FeaturesGeneral_Bt-Ho52z.mjs';
import { $ as $$TestimonialsSection } from './TestimonialsSection_BI7rLiRF.mjs';
import { $ as $$Portfolio2, a as $$PricingSectionv4, b as $$Services3 } from './Portfolio2_us2zUyUx.mjs';
import { f as features } from './features_CV1ZDidK.mjs';
import { f as featureImage } from './combined-1_CUng0RrL.mjs';
import { g as getRelativeLocaleUrl } from './i18n_kCHKJbRo.mjs';
/* empty css                        */

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(raw || cooked.slice()) }));
var _a;
const $$Astro = createAstro("https://horuss.ca");
const $$Test = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Test;
  const avatarSrcs = [
    "https://images.unsplash.com/photo-1568602471122-7832951cc4c5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2&w=300&h=300&q=80",
    "https://images.unsplash.com/photo-1531927557220-a9e23c1e4794?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2&w=300&h=300&q=80",
    "https://images.unsplash.com/photo-1541101767792-f9b2b1c4f127?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&&auto=format&fit=facearea&facepad=3&w=300&h=300&q=80",
    "https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2&w=300&h=300&q=80"
  ];
  return renderTemplate(_a || (_a = __template(["", ' <script src="/scripts/vendor/gsap/gsap.min.js"><\/script> ', " ", ""])), renderComponent($$result, "MainLayout", $$MainLayout, { "lang": "fr", "class": "astro-tzwaqt7m" }, { "default": ($$result2) => renderTemplate`   ${maybeRenderHead()}<section class="mb-11 pb-11 astro-tzwaqt7m"> ${renderComponent($$result2, "Splash", $$Splash, { "class": "astro-tzwaqt7m" })} ${renderComponent($$result2, "HeroSection", $$HeroImg, { "title": `AGENCE ELR`, "subTitle": "Transformez votre entreprise en r\xE9volutionnant l\u2019aspect technologique de votre compagnie gr\xE2ce \xE0 nous.", "primaryBtn": "Se Mettre En Ligne", "primaryBtnURL": getRelativeLocaleUrl("fr", "contact"), "withReview": false, "avatars": avatarSrcs, "rating": `<span class="font-bold">4.8</span> / 5`, "starCount": 4, "reviews": `Avec plus de <span class="font-bold">12,8k</span> avis`, "alt": "Des employ\xE9s comp\xE9tents de l'agence ELR", "class": "astro-tzwaqt7m" })} </section>  <br class="astro-tzwaqt7m"><br class="astro-tzwaqt7m"><br class="astro-tzwaqt7m"><br class="astro-tzwaqt7m"> <br class="astro-tzwaqt7m"><br class="astro-tzwaqt7m"><br class="astro-tzwaqt7m"><br class="astro-tzwaqt7m"> <br class="astro-tzwaqt7m"><br class="astro-tzwaqt7m"><br class="astro-tzwaqt7m"><br class="astro-tzwaqt7m"><br class="astro-tzwaqt7m"><br class="astro-tzwaqt7m"><br class="astro-tzwaqt7m"><br class="astro-tzwaqt7m"> ${renderComponent($$result2, "FeaturesGeneral", $$FeaturesGeneral, { "title": "Votre Partenaire de Confiance pour prendre le virage \xE9lectronique", "subTitle": "Notre mission est de transformer radicalement le paysage entrepreneurial du Qu\xE9bec, en devenant le partenaire incontournable des entrepreneurs visionnaires. Nous accomplissons cet exploit en r\xE9volutionnant l\u2019aspect technologique de votre entreprise.", "src": featureImage, "alt": "Sites Internet faits par ELR Agency", "features": features, "class": "astro-tzwaqt7m" })} ${renderComponent($$result2, "TestimonialsSection", $$TestimonialsSection, { "title": "D\xE9couvrez Nos R\xE9sultats", "subTitle": "\xC0 l'AGENCE ELR, nous nous engageons \xE0 offrir des r\xE9sultats exceptionnels pour tous vos projets de marketing digital. Notre \xE9quipe garantit une ex\xE9cution efficace et des r\xE9sultats mesurables qui respectent vos objectifs et votre budget.", "testimonials": [
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
  ], "class": "astro-tzwaqt7m" })} ${renderComponent($$result2, "Portfolio", $$Portfolio2, { "class": "astro-tzwaqt7m" })}  ${renderComponent($$result2, "PricingSection", $$PricingSectionv4, { "class": "astro-tzwaqt7m" })} ${renderComponent($$result2, "Services", $$Services3, { "class": "astro-tzwaqt7m" })} ${renderComponent($$result2, "HeroSectionAlt", $$HeroSectionAlt, { "title": "Faisons Affaires Ensemble", "subTitle": "Nous sommes fiers de pouvoir changer la vie des entrepreneurs qui nous font confiance, c'est ce qui nous motive r\xE9ellement. Serez-vous le prochain?", "url": "/contact", "class": "astro-tzwaqt7m" })} <section class="astro-tzwaqt7m"> <h1 class="astro-tzwaqt7m">Inclusions</h1> <h2 class="astro-tzwaqt7m">Ce que le forfait OR vous donne</h2> <table class="container astro-tzwaqt7m"> <thead class="astro-tzwaqt7m"> <tr class="astro-tzwaqt7m"> <th class="astro-tzwaqt7m"><h1 class="astro-tzwaqt7m">Services</h1></th> <th class="astro-tzwaqt7m"><h1 class="astro-tzwaqt7m">Argent</h1></th> <th class="astro-tzwaqt7m"><h1 class="astro-tzwaqt7m">Gold</h1></th> <th class="astro-tzwaqt7m"><h1 class="astro-tzwaqt7m">Average</h1></th> </tr> </thead> <tbody class="astro-tzwaqt7m"> <tr class="astro-tzwaqt7m"> <td class="astro-tzwaqt7m">Creation web</td> <td class="astro-tzwaqt7m">9518</td> <td class="astro-tzwaqt7m">6369</td> <td class="astro-tzwaqt7m">01:32:50</td> </tr> <tr class="astro-tzwaqt7m"> <td class="astro-tzwaqt7m">Twitter</td> <td class="astro-tzwaqt7m">7326</td> <td class="astro-tzwaqt7m">10437</td> <td class="astro-tzwaqt7m">00:51:22</td> </tr> <tr class="astro-tzwaqt7m"> <td class="astro-tzwaqt7m">Amazon</td> <td class="astro-tzwaqt7m">4162</td> <td class="astro-tzwaqt7m">5327</td> <td class="astro-tzwaqt7m">00:24:34</td> </tr> <tr class="astro-tzwaqt7m"> <td class="astro-tzwaqt7m">LinkedIn</td> <td class="astro-tzwaqt7m">3654</td> <td class="astro-tzwaqt7m">2961</td> <td class="astro-tzwaqt7m">00:12:10</td> </tr> <tr class="astro-tzwaqt7m"> <td class="astro-tzwaqt7m">CodePen</td> <td class="astro-tzwaqt7m">2002</td> <td class="astro-tzwaqt7m">4135</td> <td class="astro-tzwaqt7m">00:46:19</td> </tr> <tr class="astro-tzwaqt7m"> <td class="astro-tzwaqt7m">GitHub</td> <td class="astro-tzwaqt7m">4623</td> <td class="astro-tzwaqt7m">3486</td> <td class="astro-tzwaqt7m">00:31:52</td> </tr> </tbody> </table> </section> <br class="astro-tzwaqt7m">  ` }), renderScript($$result, "/Users/goon/Desktop/ELR-Agency/ELR-Agency/ELR Agency Clients/horuss-paint/src/pages/forfaits/test.astro?astro&type=script&index=0&lang.ts"), renderScript($$result, "/Users/goon/Desktop/ELR-Agency/ELR-Agency/ELR Agency Clients/horuss-paint/src/pages/forfaits/test.astro?astro&type=script&index=1&lang.ts"));
}, "/Users/goon/Desktop/ELR-Agency/ELR-Agency/ELR Agency Clients/horuss-paint/src/pages/forfaits/test.astro", void 0);

const $$file = "/Users/goon/Desktop/ELR-Agency/ELR-Agency/ELR Agency Clients/horuss-paint/src/pages/forfaits/test.astro";
const $$url = "/forfaits/test";

export { $$Test as default, $$file as file, $$url as url };
