/* empty css                         */
import { a as createAstro, b as createComponent, d as renderTemplate, e as renderComponent, f as renderScript, m as maybeRenderHead } from './astro/server_BHOel7Fx.mjs';
import 'kleur/colors';
import { $ as $$MainLayout } from './MainLayout_DZFt7YAq.mjs';
import { $ as $$PrimaryCTA } from './PrimaryCTA_VbFwwmum.mjs';
import { $ as $$CardSmall, a as $$CardWide, b as $$FeaturesStatsAlt, c as $$TestimonialsSectionAlt } from './TestimonialsSectionAlt_Csf-GHf_.mjs';
import { g as getCollection } from './_astro_content_cBsHR35y.mjs';

const $$Astro = createAstro("https://horuss.ca");
const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Index;
  const product = (await getCollection("services")).sort(
    (a, b) => a.data.main.id - b.data.main.id
  );
  const title = "Nos Services";
  const subTitle = "Explorez les diff\xE9rents outils et produits qui vous permettraient de faire red\xE9finir la beaut\xE9 de votre demeure.";
  const testimonials = [
    {
      content: "HORUSS a transform\xE9 l'apparence de notre maison avec leur service de peinture int\xE9rieure. Leur attention aux d\xE9tails et leur professionnalisme ont d\xE9pass\xE9 nos attentes. Nous recommandons vivement leurs services.",
      author: "Jean Dupont",
      role: "Propri\xE9taire de Maison | Qu\xE9bec",
      avatarSrc: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90oy1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=facearea&facepad=2&w=320&h=320&q=80",
      avatarAlt: "Portrait de Jean Dupont"
    },
    {
      content: "Nous avons fait appel \xE0 HORUSS pour repeindre notre immeuble commercial. Leur \xE9quipe a travaill\xE9 efficacement et avec une grande pr\xE9cision. Le r\xE9sultat final est magnifique et a donn\xE9 une nouvelle vie \xE0 notre b\xE2timent.",
      author: "Marie Tremblay",
      role: "Directrice G\xE9n\xE9rale | Entreprises Tremblay",
      avatarSrc: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=1376&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90oy1wYWdlfHx8fGVufDB8fHx8fA%3D%3D8&auto=format&fit=facearea&facepad=2&w=320&h=320&q=80",
      avatarAlt: "Portrait de Marie Tremblay"
    },
    {
      content: "HORUSS a fourni un service exceptionnel pour la peinture de notre nouvelle maison. Leur \xE9quipe est professionnelle, ponctuelle et les r\xE9sultats sont tout simplement parfaits. Nous sommes extr\xEAmement satisfaits.",
      author: "Luc Bernard",
      role: "Propri\xE9taire de Maison | Montr\xE9al",
      avatarSrc: "https://images.unsplash.com/photo-1474176857210-7287d38d27c6?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90oy1wYWdlfHx8fGVufDB8fHx8fA%3D%3D8&auto=format&fit=facearea&facepad=2&w=320&h=320&q=80",
      avatarAlt: "Portrait de Luc Bernard"
    }
  ];
  return renderTemplate`${renderComponent($$result, "MainLayout", $$MainLayout, { "title": "Nos Services | Horuss", "lang": "fr", "structuredData": {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "@id": "https://www.horuss.ca/services",
    url: "https://www.horuss.ca/services",
    name: "Services de pros | Horuss",
    description: "Notre but est de fournir un service de qualit\xE9 \xE0 un prix imbattable sur le march\xE9",
    isPartOf: {
      "@type": "WebSite",
      url: "https://horuss.ca/services",
      name: "Horuss",
      description: "Nous avons une main d'oeuvre qualifi\xE9e avec l'exp\xE9rience requise pour accomplir vos projets rapidement."
    },
    inLanguage: "fr-CAN"
  } }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="mx-auto max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 2xl:max-w-full"> <div class="mb-4 flex items-center justify-between gap-8 sm:mb-8 md:mb-12"> <div class="flex items-center gap-12"> <h1 class="text-balance text-2xl font-bold tracking-tight text-neutral-800 dark:text-neutral-200 md:text-4xl md:leading-tight"> ${title} </h1> ${renderTemplate`<p class="hidden max-w-screen-sm text-pretty text-neutral-600 dark:text-neutral-400 md:block"> ${subTitle} </p>`} </div> ${renderComponent($$result2, "PrimaryCTA", $$PrimaryCTA, { "title": "Histoires de clients", "url": "#testimonials", "noArrow": true })} </div> <!--Displaying products in alternating styles. Alternative product gets different card styling.--> <!--Maps through all product entries and displays them with either CardSmall or CardWide based on their position.--> <section class="grid grid-cols-1 gap-4 sm:grid-cols-3 md:gap-6 xl:gap-8"> ${product.map((product2, index) => {
    const position = index % 4;
    if (position === 0 || position === 3) {
      return renderTemplate`${renderComponent($$result2, "CardSmall", $$CardSmall, { "product": product2 })}`;
    } else {
      return renderTemplate`${renderComponent($$result2, "CardWide", $$CardWide, { "product": product2 })}`;
    }
  })} </section> </div>  ${renderComponent($$result2, "FeaturesStatsAlt", $$FeaturesStatsAlt, { "title": "Pourquoi choisir HORUSS ?", "subTitle": "Confiez vos projets de peinture \xE0 HORUSS. Notre expertise garantit non seulement la qualit\xE9 mais aussi la personnalisation de chaque service selon vos besoins sp\xE9cifiques.", "benefits": [
    "Services de peinture int\xE9rieure et ext\xE9rieure pour transformer et prot\xE9ger vos espaces.",
    "Techniques de pr\xE9paration et mat\xE9riaux de haute qualit\xE9 pour des r\xE9sultats durables.",
    "Consultations en couleurs personnalis\xE9es pour cr\xE9er des ambiances harmonieuses et esth\xE9tiques.",
    "Ex\xE9cution professionnelle et respect des d\xE9lais pour garantir votre satisfaction."
  ] })}     ${renderComponent($$result2, "TestimonialsSectionAlt", $$TestimonialsSectionAlt, { "title": "Ce que disent nos clients", "testimonials": testimonials })} ` })} ${renderScript($$result, "/Users/goon/Desktop/ELR-Agency/ELR-Agency/ELR Agency Clients/horuss-paint/src/pages/services/index.astro?astro&type=script&index=0&lang.ts")}`;
}, "/Users/goon/Desktop/ELR-Agency/ELR-Agency/ELR Agency Clients/horuss-paint/src/pages/services/index.astro", void 0);

const $$file = "/Users/goon/Desktop/ELR-Agency/ELR-Agency/ELR Agency Clients/horuss-paint/src/pages/services/index.astro";
const $$url = "/services";

export { $$Index as default, $$file as file, $$url as url };
