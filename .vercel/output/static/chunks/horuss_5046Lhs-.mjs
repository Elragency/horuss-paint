/* empty css                         */
import { a as createAstro, b as createComponent, d as renderTemplate, e as renderComponent } from './astro/server_BHOel7Fx.mjs';
import 'kleur/colors';
import { $ as $$MainLayout } from './MainLayout_DZFt7YAq.mjs';
import { $ as $$MainSection, a as $$RightSection, b as $$LeftSection } from './RightSection_BzOw5wLj.mjs';
import { g as getRelativeLocaleUrl } from './i18n_kCHKJbRo.mjs';
import { b as blueprints, p as personWorking, a as beforeAfter, c as constructionWorkers, d as aerialView, u as usingTools, e as progressBuilding, f as underConstruction } from './paint8_DrKWbymF.mjs';

const $$Astro = createAstro("https://horuss.ca");
const $$Horuss = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Horuss;
  const articles = [
    {
      "isRightSection": true,
      "title": "Notre Histoire",
      "subTitle": "Fond\xE9e en 2022, HORUSS est n\xE9e de la passion pour la peinture et la transformation des espaces. Notre mission est de fournir des solutions innovantes en peinture int\xE9rieure et ext\xE9rieure, en consultation de couleurs et en pr\xE9paration de surfaces pour aider les clients \xE0 atteindre leur vision esth\xE9tique. Depuis notre cr\xE9ation, nous avons travaill\xE9 avec des propri\xE9taires de maisons, des entreprises et des commerces pour transformer leurs espaces.",
      "single": false,
      "imgOne": blueprints,
      "imgOneAlt": "Plans et tablette num\xE9rique avec des plans de construction.",
      "imgTwo": personWorking,
      "imgTwoAlt": "Personne travaillant au bureau"
    },
    {
      "isRightSection": false,
      "title": "Des Fondations Solides",
      "subTitle": "Bien que jeune, notre entreprise repose sur des bases solides de connaissances approfondies et de passion pour la peinture. Nos fondateurs poss\xE8dent des ann\xE9es d'exp\xE9rience dans leurs domaines respectifs, ce qui nous permet d'offrir des services de qualit\xE9 sup\xE9rieure en peinture int\xE9rieure et ext\xE9rieure, ainsi qu'en consultation de couleurs.",
      "img": beforeAfter,
      "imgAlt": "Chantier de peinture avant et apr\xE8s",
      "btnExists": true,
      "btnTitle": "Faisons affaires!",
      "btnURL": "/contact"
    },
    {
      "isRightSection": true,
      "title": "HORUSS Aujourd'hui",
      "subTitle": "Avec une \xE9quipe dynamique et d\xE9di\xE9e, nous avons rapidement gagn\xE9 la confiance de nos clients gr\xE2ce \xE0 notre approche personnalis\xE9e et \xE0 nos solutions innovantes. Nous sommes fiers de nos r\xE9alisations et de notre croissance rapide, tout en restant engag\xE9s \xE0 fournir des services exceptionnels qui r\xE9pondent aux besoins uniques de chaque client.",
      "single": false,
      "imgOne": constructionWorkers,
      "imgOneAlt": "Ouvriers du b\xE2timent orchestrant un projet de peinture",
      "imgTwo": aerialView,
      "imgTwoAlt": "Vue a\xE9rienne d'une construction peinte"
    },
    {
      "isRightSection": false,
      "title": "Une Mission Qui Nous Rassemble",
      "subTitle": "Notre mission est d'offrir une exp\xE9rience client unique et in\xE9gal\xE9e dans le domaine de la peinture. Nous visons \xE0 accompagner chaque client avec des solutions personnalis\xE9es qui transforment leurs espaces, optimisent leurs apparences et augmentent leur satisfaction globale.",
      "img": usingTools,
      "imgAlt": "Homme en gilet orange et noir portant un casque blanc tenant un outil de peinture jaune et noir"
    },
    {
      "isRightSection": true,
      "title": "Une Vision Qui Va Loin",
      "subTitle": "Nous aspirons \xE0 devenir le partenaire de choix pour toutes les entreprises et les particuliers cherchant \xE0 innover et \xE0 transformer leurs espaces avec de la peinture. Notre vision est de continuer \xE0 \xE9voluer avec les derni\xE8res techniques et tendances du march\xE9 pour offrir des services qui d\xE9passent les attentes de nos clients, tout en maintenant des valeurs d'excellence, de transparence et de respect.",
      "single": false,
      "imgOne": progressBuilding,
      "imgOneAlt": "Structure de b\xE2timent en cours de peinture",
      "imgTwo": underConstruction,
      "imgTwoAlt": "B\xE2timent marron et gris en cours de peinture",
      "btnExists": true,
      "btnTitle": "Faisons affaires!",
      "btnURL": "/contact"
    }
  ];
  return renderTemplate`${renderComponent($$result, "MainLayout", $$MainLayout, { "title": "Qui sommes-nous | Horuss", "lang": "fr", "structuredData": {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "@id": "https://horuss.ca/horuss",
    url: "https://horuss.ca/horuss",
    name: "\xC0 Propos | Horuss",
    description: "Alliant l'expertise \xE0 votre vision, HORUSS fournit un service exceptionnel et des solutions compl\xE8tes dans l'industrie de la peinture, de la consultation \xE0 l'ach\xE8vement du projet.",
    isPartOf: {
      "@type": "WebSite",
      url: "https://horuss.ca/",
      name: "Horuss",
      description: "HORUSS propose des services de peinture de haute qualit\xE9 et des solutions expertes pour r\xE9pondre \xE0 tous les besoins de votre espace."
    },
    inLanguage: "fr-CAN"
  } }, { "default": ($$result2) => renderTemplate`  ${renderComponent($$result2, "MainSection", $$MainSection, { "title": "Unir l'Expertise \xE0 Votre Vision", "subTitle": "Chez HORUSS, nous sommes fiers de fournir des solutions compl\xE8tes et innovantes en peinture int\xE9rieure et ext\xE9rieure. Notre \xE9quipe d\xE9vou\xE9e est l\xE0 pour soutenir votre projet de sa conception \xE0 son ach\xE8vement, en offrant des services personnalis\xE9s et adapt\xE9s \xE0 vos besoins sp\xE9cifiques.", "btnExists": true, "btnTitle": "Planifier une Consultation", "btnURL": getRelativeLocaleUrl("fr", "/contact") })}  ${articles.map((article) => {
    return article.isRightSection ? renderTemplate`${renderComponent($$result2, "RightSection", $$RightSection, { "title": article.title, "subTitle": article.subTitle, "single": article.single, "imgOne": article.imgOne, "imgOneAlt": article.imgOneAlt, "imgTwo": article.imgTwo, "imgTwoAlt": article.imgTwoAlt, "btnExists": article.btnExists, "btnTitle": article.btnTitle, "btnURL": article.btnURL })}` : renderTemplate`${renderComponent($$result2, "LeftSection", $$LeftSection, { "title": article.title, "subTitle": article.subTitle, "img": article.img, "imgAlt": article.imgAlt, "btnExists": article.btnExists, "btnTitle": article.btnTitle, "btnURL": article.btnURL })}`;
  })}  ` })}`;
}, "/Users/goon/Desktop/ELR-Agency/ELR-Agency/ELR Agency Clients/horuss-paint/src/pages/horuss.astro", void 0);

const $$file = "/Users/goon/Desktop/ELR-Agency/ELR-Agency/ELR Agency Clients/horuss-paint/src/pages/horuss.astro";
const $$url = "/horuss";

export { $$Horuss as default, $$file as file, $$url as url };
