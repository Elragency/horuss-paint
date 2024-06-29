/* empty css                         */
import { a as createAstro, b as createComponent, d as renderTemplate, m as maybeRenderHead, e as renderComponent } from './astro/server_BHOel7Fx.mjs';
import 'kleur/colors';
import { $ as $$MainLayout } from './MainLayout_DZFt7YAq.mjs';
import { $ as $$MainSection, a as $$RightSection, b as $$LeftSection } from './RightSection_BzOw5wLj.mjs';
import 'clsx';
import { g as getRelativeLocaleUrl } from './i18n_kCHKJbRo.mjs';
import { b as blueprints, p as personWorking, a as beforeAfter, c as constructionWorkers, d as aerialView, u as usingTools, e as progressBuilding, f as underConstruction } from './under-construction_ONLHha5R.mjs';

const $$Astro$3 = createAstro("https://horuss.ca");
const $$StatsBig = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$3, $$props, $$slots);
  Astro2.self = $$StatsBig;
  const { title, subTitle } = Astro2.props;
  return renderTemplate`<!-- Container for the title and subtitle -->${maybeRenderHead()}<div class="lg:pe-6 xl:pe-12"> <p class="text-6xl font-bold leading-10 text-orange-400 dark:text-orange-300"> ${title} </p> <p class="mt-2 text-neutral-600 dark:text-neutral-400 sm:mt-3">${subTitle}</p> </div>`;
}, "/Users/goon/Desktop/ELR-Agency/ELR-Agency/ELR Agency Clients/horuss-paint/src/components/ui/blocks/StatsBig.astro", void 0);

const $$Astro$2 = createAstro("https://horuss.ca");
const $$StatsSmall = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$StatsSmall;
  const { title, subTitle } = Astro2.props;
  return renderTemplate`<!-- Container for title and subtitle -->${maybeRenderHead()}<div> <p class="text-3xl font-bold text-orange-400 dark:text-orange-300">${title}</p> <p class="mt-1 text-neutral-600 dark:text-neutral-400">${subTitle}</p> </div>`;
}, "/Users/goon/Desktop/ELR-Agency/ELR-Agency/ELR Agency Clients/horuss-paint/src/components/ui/blocks/StatsSmall.astro", void 0);

const $$Astro$1 = createAstro("https://horuss.ca");
const $$FeaturesStats = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$FeaturesStats;
  const { title, subTitle, stats, mainStatTitle, mainStatSubTitle } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<section class="mx-auto max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 2xl:max-w-full"> <div class="max-w-screen-md"> <!-- Main title --> <h2 class="mb-4 text-balance text-3xl font-extrabold tracking-tight text-neutral-800 dark:text-neutral-200"> ${title} </h2> <!-- Subtitle --> ${subTitle && renderTemplate`<p class="mb-16 max-w-prose text-pretty font-light text-neutral-600 dark:text-neutral-400 sm:text-xl"> ${subTitle} </p>`} </div> <!-- Grid container for statistics --> <div class="grid items-center gap-6 lg:grid-cols-12 lg:gap-12"> <!-- First grid item, showing a big statistics --> <div class="lg:col-span-4"> ${renderComponent($$result, "StatsBig", $$StatsBig, { "title": mainStatTitle, "subTitle": mainStatSubTitle })} </div> <!-- Second grid item, showing multiple small statistics --> ${stats && renderTemplate`<div class="relative lg:col-span-8 lg:before:absolute lg:before:-start-12 lg:before:top-0 lg:before:h-full lg:before:w-px lg:before:bg-neutral-300 lg:before:dark:bg-neutral-700"> <div class="grid grid-cols-2 gap-6 sm:gap-8 md:grid-cols-4 lg:grid-cols-3"> <!-- Iterate over the 'stats' array and create a 'StatsSmall' component for each object in the array --> ${stats.map((stat) => renderTemplate`${renderComponent($$result, "StatsSmall", $$StatsSmall, { "title": stat.stat, "subTitle": stat.description })}`)} </div> </div>`} </div> </section>`;
}, "/Users/goon/Desktop/ELR-Agency/ELR-Agency/ELR Agency Clients/horuss-paint/src/components/sections/features/FeaturesStats.astro", void 0);

const $$Astro = createAstro("https://horuss.ca");
const $$Ressources = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Ressources;
  const articles = [
    {
      "isRightSection": true,
      "title": "Collaboration avec des experts du domaine",
      "subTitle": "Lancez votre projet de construction avec l'aide de professionnels chevronn\xE9s. Chez Horuss, nous mettons \xE0 votre disposition des architectes, ing\xE9nieurs et designers qualifi\xE9s pour vous guider \xE0 chaque \xE9tape de votre projet, en assurant des conseils personnalis\xE9s et une expertise technique pointue.",
      "single": false,
      "imgOne": blueprints,
      "imgOneAlt": "Plans et tablette num\xE9rique avec des plans de construction.",
      "imgTwo": personWorking,
      "imgTwoAlt": "Personne travaillant au bureau"
    },
    {
      "isRightSection": false,
      "title": "Concr\xE9tiser vos visions architecturales",
      "subTitle": "Nos artisans qualifi\xE9s apportent pr\xE9cision et excellence \xE0 chaque projet de construction. Des installations mineures aux travaux structuraux substantiels, Horuss offre des services de construction fiables pour concr\xE9tiser vos plans. Nous assurons les normes les plus \xE9lev\xE9es de s\xE9curit\xE9 et de savoir-faire, en utilisant des outils et des mat\xE9riaux de haute qualit\xE9 de notre vaste inventaire.",
      "img": beforeAfter,
      "imgAlt": "Chantier de construction avant et apr\xE8s",
      "btnExists": true,
      "btnTitle": "En savoir plus",
      "btnURL": "/contact"
    },
    {
      "isRightSection": true,
      "title": "Gestion de projets avec expertise",
      "subTitle": "La gestion de projet efficace est au c\u0153ur de toute construction r\xE9ussie. Horuss offre une planification approfondie et des services de gestion solides qui maintiennent votre projet dans les d\xE9lais et dans le budget. Laissez-nous g\xE9rer les complexit\xE9s de la coordination des flux de travail, de l'allocation des ressources et de la communication avec les parties prenantes pendant que vous vous concentrez sur votre vision.",
      "single": false,
      "imgOne": constructionWorkers,
      "imgOneAlt": "Ouvriers du b\xE2timent orchestrant un projet",
      "imgTwo": aerialView,
      "imgTwoAlt": "Vue a\xE9rienne d'une construction g\xE9r\xE9e"
    },
    {
      "isRightSection": false,
      "title": "Assurer la p\xE9rennit\xE9 de vos r\xE9alisations",
      "subTitle": "Notre engagement envers votre projet ne s'arr\xEAte pas \xE0 son ach\xE8vement. Horuss propose des services de maintenance et de support continus pour assurer la long\xE9vit\xE9 et les performances de votre construction. Des v\xE9rifications r\xE9guli\xE8res \xE0 l'assistance en cas d'urgence, notre \xE9quipe r\xE9active est l\xE0 pour vous fournir un soutien sans faille.",
      "img": usingTools,
      "imgAlt": "Homme en gilet orange et noir portant un casque blanc tenant un outil \xE9lectrique jaune et noir"
    },
    {
      "isRightSection": true,
      "title": "Solutions personnalis\xE9es pour d\xE9fis sp\xE9cifiques",
      "subTitle": "Pour nos clients d'entreprise de plus grande envergure, Horuss propose des solutions personnalis\xE9es con\xE7ues pour r\xE9pondre \xE0 des d\xE9fis sp\xE9cifiques de l'industrie. En comprenant vos besoins uniques, nous concevons des strat\xE9gies sur mesure visant \xE0 optimiser vos op\xE9rations, \xE0 am\xE9liorer l'efficacit\xE9 et \xE0 faire avancer votre entreprise.",
      "single": false,
      "imgOne": progressBuilding,
      "imgOneAlt": "Structure de b\xE2timent en cours de construction",
      "imgTwo": underConstruction,
      "imgTwoAlt": "B\xE2timent marron et gris en construction",
      "btnExists": true,
      "btnTitle": "Lire la suite",
      "btnURL": "/contact"
    }
  ];
  return renderTemplate`${renderComponent($$result, "MainLayout", $$MainLayout, { "title": "ressources | Nos Partenaires", "lang": "fr", "structuredData": {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "@id": "https://horuss.ca/ressources",
    url: "https://horuss.ca/ressources",
    name: "Expert Consultation Services | Horuss",
    description: "Uniting expertise with your vision, Horuss provides exceptional service and comprehensive solutions in the hardware and construction industry, from consultation to project completion.",
    isPartOf: {
      "@type": "WebSite",
      url: "https://horuss.ca/ressources",
      name: "Horuss",
      description: "Horuss offers top-tier hardware tools and expert construction services to meet all your project needs."
    },
    inLanguage: "fr-CAN"
  } }, { "default": ($$result2) => renderTemplate`  ${renderComponent($$result2, "MainSection", $$MainSection, { "title": "Unir l'expertise \xE0 votre vision", "subTitle": "Chez Horuss, nous sommes fiers de fournir des solutions compl\xE8tes et un service exceptionnel dans l'industrie du mat\xE9riel et de la construction. Notre \xE9quipe exp\xE9riment\xE9e est d\xE9di\xE9e \xE0 soutenir votre projet de sa conception \xE0 son ach\xE8vement avec une gamme de services sp\xE9cialis\xE9s.", "btnExists": true, "btnTitle": "Planifier une consultation", "btnURL": getRelativeLocaleUrl("fr", "/contact") })}  ${articles.map((article) => {
    return article.isRightSection ? renderTemplate`${renderComponent($$result2, "RightSection", $$RightSection, { "title": article.title, "subTitle": article.subTitle, "single": article.single, "imgOne": article.imgOne, "imgOneAlt": article.imgOneAlt, "imgTwo": article.imgTwo, "imgTwoAlt": article.imgTwoAlt, "btnExists": article.btnExists, "btnTitle": article.btnTitle, "btnURL": article.btnURL })}` : renderTemplate`${renderComponent($$result2, "LeftSection", $$LeftSection, { "title": article.title, "subTitle": article.subTitle, "img": article.img, "imgAlt": article.imgAlt, "btnExists": article.btnExists, "btnTitle": article.btnTitle, "btnURL": article.btnURL })}`;
  })} ${renderComponent($$result2, "FeaturesStats", $$FeaturesStats, { "title": "Par les chiffres", "subTitle": "Notre engagement envers la qualit\xE9 et la fiabilit\xE9 est \xE9vident dans chaque projet que nous entreprenons. Chez Horuss, nous nous engageons \xE0 fournir des services de premier plan dans l'industrie qui garantissent que vos projets de construction sont con\xE7us pour durer.", "mainStatTitle": "96%", "mainStatSubTitle": "de nos clients \xE9valuent leur exp\xE9rience avec Horuss comme exceptionnelle", "stats": [
    {
      stat: "99,8%",
      description: "taux de r\xE9alisation de projets"
    },
    {
      stat: "5 000+",
      description: "installations r\xE9ussies"
    },
    {
      stat: "85%",
      description: "croissance client ann\xE9e apr\xE8s ann\xE9e"
    }
  ] })} ` })}`;
}, "/Users/goon/Desktop/ELR-Agency/ELR-Agency/ELR Agency Clients/horuss-paint/src/pages/ressources.astro", void 0);

const $$file = "/Users/goon/Desktop/ELR-Agency/ELR-Agency/ELR Agency Clients/horuss-paint/src/pages/ressources.astro";
const $$url = "/ressources";

export { $$Ressources as default, $$file as file, $$url as url };
