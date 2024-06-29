/* empty css                         */
import { a as createAstro, b as createComponent, d as renderTemplate, m as maybeRenderHead, e as renderComponent, g as addAttribute, f as renderScript } from './astro/server_BHOel7Fx.mjs';
import 'kleur/colors';
import { a as $$Icon, $ as $$MainLayout } from './MainLayout_DZFt7YAq.mjs';
import { $ as $$HeroSection } from './HeroSection_C8_qJs_r.mjs';
import { $ as $$HeroSectionAlt } from './HeroSectionAlt_q6ElQBja.mjs';
import { $ as $$ClientsSection } from './ClientsSection_CiaA6T--.mjs';
import { $ as $$FeaturesGeneral } from './FeaturesGeneral_Bt-Ho52z.mjs';
import { $ as $$FeaturesNavs } from './FeaturesNavs_CsnQeJGS.mjs';
import { $ as $$TestimonialsSection } from './TestimonialsSection_BI7rLiRF.mjs';
import { $ as $$SecondaryCTA } from './ReviewComponent_uoIVrXdg.mjs';
import { $ as $$FAQ } from './FAQ_C7Faydrn.mjs';
import { f as faqs } from './faqs_DTpnW1o0.mjs';
import { f as features } from './features_CV1ZDidK.mjs';
import { t as tools, d as dashboard, c as construction } from './dashboard-image_C2UCdbdI.mjs';
import { g as getRelativeLocaleUrl } from './i18n_kCHKJbRo.mjs';

const $$Astro$2 = createAstro("https://horuss.ca");
const $$PricingSection = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$PricingSection;
  const { pricing } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<section class="mx-auto max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 2xl:max-w-full"> <!-- Section heading and sub-heading --> <div class="mx-auto mb-10 max-w-2xl text-center lg:mb-14"> <h2 class="text-balance text-2xl font-bold tracking-tight text-neutral-800 dark:text-neutral-200 md:text-4xl md:leading-tight"> ${pricing.title} </h2> <p class="mt-1 text-pretty text-neutral-600 dark:text-neutral-400"> ${pricing.subTitle} </p> </div> <!-- Contains two main product blocks --> <div class="flex flex-wrap items-center justify-center gap-4 sm:gap-0"> <!-- Starter Kit product details --> <div class="w-full rounded-xl bg-gray-800 p-6 sm:w-1/2 sm:rounded-r-none sm:p-8 lg:w-1/3"> <div class="mb-4"> <h3 class="text-2xl font-bold text-neutral-100 sm:text-3xl"> ${pricing.starterKit.name} </h3> <p class="text-indigo-300">${pricing.starterKit.description}</p> </div> <div class="ms-3 text-sm text-indigo-200">À partir de</div> <div class="mb-4"> <span class="text-4xl font-bold text-neutral-200">${pricing.starterKit.price}</span> <span class="text-lg font-bold text-neutral-300">${pricing.starterKit.cents}</span> <span class="ms-3 text-sm text-indigo-200">${pricing.starterKit.billingFrequency}</span> </div> <!-- Features list - automatically created by mapping over \`features\` array --> <ul class="mb-6 space-y-2 text-neutral-300"> ${pricing.starterKit.features.map((feature) => renderTemplate`<li class="flex items-center gap-1.5"> ${renderComponent($$result, "Icon", $$Icon, { "name": "checkCircle" })} <span>${feature}</span> </li>`)} </ul> <!-- CTA for purchasing the product --> <a${addAttribute(pricing.starterKit.purchaseLink, "href")} class="block rounded-lg bg-gray-500 px-8 py-3 text-center text-sm font-bold text-gray-100 outline-none ring-indigo-300 transition duration-100 hover:bg-gray-600 focus-visible:ring active:text-gray-300 md:text-base">${pricing.starterKit.purchaseBtnTitle}</a> </div> <!-- Professional Toolbox product details --> <div class="w-full rounded-xl bg-gradient-to-tr from-[#FF512F] to-[#F09819] p-6 shadow-xl sm:w-1/2 sm:p-8"> <div class="mb-4 flex flex-col items-start justify-between gap-4 lg:flex-row"> <div> <h3 class="text-2xl font-bold text-neutral-100 sm:text-3xl"> ${pricing.professionalToolbox.name} </h3> <p class="text-orange-200">${pricing.professionalToolbox.description}</p> </div> <span class="order-first inline-block rounded-full bg-orange-200 bg-opacity-50 px-3 py-1 text-xs font-bold uppercase tracking-wider text-center text-orange-600 lg:order-none">${pricing.badge}</span> </div> <div class="mb-4"> <span class="text-6xl font-bold text-neutral-200">${pricing.professionalToolbox.price}</span> <span class="text-lg font-bold text-orange-100">${pricing.professionalToolbox.cents}</span> <span class="ms-3 text-orange-200">${pricing.professionalToolbox.billingFrequency}</span> </div> <!-- Features list - automatically created by mapping over \`features\` array --> <ul class="mb-6 space-y-2 text-orange-100"> ${pricing.professionalToolbox.features.map((feature) => renderTemplate`<li class="flex items-center gap-1.5"> ${renderComponent($$result, "Icon", $$Icon, { "name": "checkCircle" })} <span>${feature}</span> </li>`)} </ul> <!-- CTA for purchasing the product --> <a${addAttribute(pricing.professionalToolbox.purchaseLink, "href")} class="block rounded-lg bg-orange-200 bg-opacity-50 px-8 py-3 text-center text-sm font-bold text-neutral-100 outline-none ring-orange-300 transition duration-100 hover:bg-orange-300 hover:bg-opacity-50 focus-visible:ring active:bg-orange-400 md:text-base">${pricing.professionalToolbox.purchaseBtnTitle}</a> </div> </div> <!-- Call to action for Enterprise Solutions --> <div class="mt-8 flex items-center justify-center gap-x-3 md:mt-12"> <p class="text-sm text-neutral-600 dark:text-neutral-400"> ${pricing.thirdOption} </p> ${renderComponent($$result, "SecondaryCTA", $$SecondaryCTA, { "title": pricing.btnText, "url": "/contact" })} </div> </section>`;
}, "/Users/goon/Desktop/ELR-Agency/ELR-Agency/ELR Agency Clients/horuss-paint/src/components/sections/pricing/PricingSection.astro", void 0);

const $$Astro$1 = createAstro("https://horuss.ca");
const $$AnnouncementBanner = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$AnnouncementBanner;
  const { title, btnId, btnTitle, url } = Astro2.props;
  return renderTemplate`${renderComponent($$result, "astro-banner", "astro-banner", { "btnId": btnId }, { "default": () => renderTemplate` ${maybeRenderHead()}<div class="fixed bottom-0 start-1/2 z-50 mx-auto w-full -translate-x-1/2 transform p-6 sm:max-w-4xl" role="region" aria-label="Informational Banner"> <div class="rounded-xl bg-neutral-800 bg-[url('/banner-pattern.svg')] bg-cover bg-center bg-no-repeat p-4 text-center shadow-sm dark:bg-neutral-200"> <div class="flex items-center justify-center"> <div class="ml-auto"> ${title && renderTemplate`<p class="me-2 inline-block font-medium text-neutral-50 dark:text-neutral-700"> ${title} </p>`} <a class="group inline-flex items-center gap-x-2 rounded-full border-2 border-neutral-50 backdrop-brightness-75 sm:backdrop-brightness-100 px-3 py-2 text-sm font-semibold text-neutral-50 transition duration-300 hover:border-neutral-100/70 hover:text-neutral-50/70 disabled:pointer-events-none disabled:opacity-50 dark:backdrop-brightness-100 dark:border-neutral-700 dark:text-neutral-700 dark:hover:border-neutral-700/70 dark:hover:text-neutral-800/70 dark:focus:outline-none"${addAttribute(url, "href")} target="_blank"> ${btnTitle} <svg class="size-4 flex-shrink-0 transition duration-300 group-hover:translate-x-1" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m9 18 6-6-6-6"></path></svg> </a> </div> <button type="button" class="ml-auto inline-flex items-center gap-x-2 rounded-full border border-transparent bg-gray-100 p-2 text-sm font-semibold text-gray-800 hover:bg-gray-200 disabled:pointer-events-none disabled:opacity-50 dark:bg-neutral-700 dark:text-neutral-50 dark:hover:bg-neutral-700/80 dark:hover:text-neutral-50 dark:focus:outline-none"${addAttribute(btnId, "id")}> <span class="sr-only">Dismiss</span> <svg class="size-5 flex-shrink-0" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 6 6 18"></path><path d="m6 6 12 12"></path></svg> </button> </div> </div> </div> ` })} ${renderScript($$result, "/Users/goon/Desktop/ELR-Agency/ELR-Agency/ELR Agency Clients/horuss-paint/src/components/ui/banners/AnnouncementBanner.astro?astro&type=script&index=0&lang.ts")}`;
}, "/Users/goon/Desktop/ELR-Agency/ELR-Agency/ELR Agency Clients/horuss-paint/src/components/ui/banners/AnnouncementBanner.astro", void 0);

const heroImage = new Proxy({"src":"/_astro/Logorev.C-6wrmVy.webp","width":512,"height":512,"format":"webp"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/goon/Desktop/ELR-Agency/ELR-Agency/ELR Agency Clients/horuss-paint/src/images/Logorev.webp";
							}
							if (target[name] !== undefined) globalThis.astroAsset.referencedImages.add("/Users/goon/Desktop/ELR-Agency/ELR-Agency/ELR Agency Clients/horuss-paint/src/images/Logorev.webp");
							return target[name];
						}
					});

const title = "Tarification Simple et Transparente";
const subTitle = "Peu importe le service que vous avez besoin, nous avons un plan qui saura vous convenir.";
const badge = "Meilleure valeur";
const thirdOption = "Vous n'êtes pas sûr?";
const btnText = "Obtenez un Devis Personnalisé";
const starterKit = {
	name: "Croissance, Automatisation et SEO",
	description: "Idéal pour les petites et moyennes entreprises cherchant à améliorer leur présence en ligne et à rationaliser leurs opérations.",
	price: "$49",
	cents: ".99",
	billingFrequency: "CAD / mensuel",
	features: [
		"Développement de site web sur mesure",
		"Optimisation SEO sur page",
		"Rédaction assistée par IA",
		"Automatisation des formulaires de contact",
		"Gestion de base des réseaux sociaux",
		"Campagnes de marketing par e-mail mensuelles",
		"Rapports de performance mensuels"
	],
	purchaseBtnTitle: "Choisissez ce forfait",
	purchaseLink: "/contact"
};
const professionalToolbox = {
	name: "Automatisation Premium, SEO et Transformation Digitale",
	description: "Parfait pour les entreprises de taille moyenne recherchant une transformation digitale complète et une présence en ligne robuste.",
	price: "$299",
	cents: ".99",
	billingFrequency: "CAD / mensuel",
	features: [
		"Site web personnalisé avec fonctionnalités avancées",
		"Recherche de mots-clés approfondie",
		"Création de contenu assistée par IA",
		"Intégration complète d'un CRM",
		"Stratégie avancée sur les réseaux sociaux",
		"Gestion des publicités Google et réseaux sociaux",
		"Rapports de performance bi-hebdomadaires et sessions stratégiques",
		"Support personnalisé avec gestionnaire de compte dédié"
	],
	purchaseBtnTitle: "Optez pour l'excellence",
	purchaseLink: "/contact"
};
const pricing = {
	title: title,
	subTitle: subTitle,
	badge: badge,
	thirdOption: thirdOption,
	btnText: btnText,
	starterKit: starterKit,
	professionalToolbox: professionalToolbox
};

const featureImage = new Proxy({"src":"/_astro/brochure.DyCDpdh7.webp","width":6000,"height":4500,"format":"webp"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/goon/Desktop/ELR-Agency/ELR-Agency/ELR Agency Clients/horuss-paint/src/images/services/brochure.webp";
							}
							if (target[name] !== undefined) globalThis.astroAsset.referencedImages.add("/Users/goon/Desktop/ELR-Agency/ELR-Agency/ELR Agency Clients/horuss-paint/src/images/services/brochure.webp");
							return target[name];
						}
					});

const $$Astro = createAstro("https://horuss.ca");
const $$OriginalIndex = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$OriginalIndex;
  const avatarSrcs = [
    "https://images.unsplash.com/photo-1568602471122-7832951cc4c5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2&w=300&h=300&q=80",
    "https://images.unsplash.com/photo-1531927557220-a9e23c1e4794?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2&w=300&h=300&q=80",
    "https://images.unsplash.com/photo-1541101767792-f9b2b1c4f127?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&&auto=format&fit=facearea&facepad=3&w=300&h=300&q=80",
    "https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2&w=300&h=300&q=80"
  ];
  return renderTemplate`${renderComponent($$result, "MainLayout", $$MainLayout, { "lang": "fr" }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "AnnouncementBanner", $$AnnouncementBanner, { "btnId": "dismiss-button", "btnTitle": "D\xE9couvrez Horuss", "url": "https://elragency.com" })} ${renderComponent($$result2, "HeroSection", $$HeroSection, { "title": `<span class="text-orange-600 dark:text-orange-600">HORUSS:</span> Notre mission est de construire l'h\xE9ritage de demain`, "subTitle": "Une jeune \xE9quipe dynamique qui souhaite vous offrir le meilleur service possible.", "primaryBtn": "Commencez \xE0 explorer nos offres", "primaryBtnURL": getRelativeLocaleUrl("fr", "products"), "secondaryBtn": "Contacter nous directement", "secondaryBtnURL": getRelativeLocaleUrl("fr", "contact"), "withReview": true, "avatars": avatarSrcs, "rating": `<span class="font-bold">4.8</span> / 5`, "starCount": 4, "reviews": `Avec plus de <span class="font-bold">12,8k</span> avis`, "src": heroImage, "alt": "Pile de bo\xEEtes de produits Horuss contenant des outils mat\xE9riels assortis" })} ${renderComponent($$result2, "ClientsSection", $$ClientsSection, { "title": "Une jeune compagnie qui fait ses preuves", "subTitle": "D\xE9couvrez la fiabilit\xE9 choisie par plus de 500 clients partout en mont\xE9r\xE9gie." })} ${renderComponent($$result2, "FeaturesGeneral", $$FeaturesGeneral, { "title": "R\xE9pondre aux exigences de l'industrie", "subTitle": "Chez Horuss, nous relevons les d\xE9fis uniques rencontr\xE9s dans les secteurs de la constructions. Des employ\xE9s comp\xE9tents \xE0 vous aider \xE0 surmonter les obstacles et compl\xE9ter vos projets, nous sommes d\xE9termin\xE9s \xE0 atteindre vos objectifs.", "src": featureImage, "alt": "Sites web produits par Horuss flottants dans les airs", "features": features })} ${renderComponent($$result2, "FeaturesNavs", $$FeaturesNavs, { "title": `L'\xE9quipe d'<span class="text-yellow-500 dark:text-yellow-400">Horuss</span> est l\xE0 pour r\xE9pondre \xE0 tous vos besoins de constructions et de r\xE9novations.`, "tabs": [
    {
      heading: "\xC9quipe qualifi\xE9e",
      content: "Pas de temps perdu, nous sommes performants et professionnels pour r\xE9aliser tous vos projets le plus efficacement possible.",
      svg: "tools",
      src: tools,
      alt: "\xC9quipement lourd jaune et noir sur un champ d'herbe brune",
      first: true
    },
    {
      heading: "Des preuves faites",
      content: "Nous avons de nombreux clients pr\xEAts \xE0 t\xE9moigner du professionnalisme de nos services.",
      svg: "dashboard",
      src: dashboard,
      alt: "Capture d'\xE9cran ou repr\xE9sentation graphique du tableau de bord intuitif",
      second: true
    },
    {
      heading: "Services compl\xE9mentaires",
      content: "Peu importe ce que vous avez besoin comme aide, nous avons ce qu'il vous faut et pouvons vous aider.",
      svg: "house",
      src: construction,
      alt: "L'\xE9quipe de Horuss pr\xEAte \xE0 vous aider dans vos projets num\xE9riques."
    }
  ] })} ${renderComponent($$result2, "TestimonialsSection", $$TestimonialsSection, { "title": "Acc\xE9l\xE9rez vos projets", "subTitle": "Chez Horuss, nous nous engageons \xE0 la perfection et garantissons que tous vos projets de construction sont ex\xE9cut\xE9s efficacement, sans complication et dans le respect de votre budget.", "testimonials": [
    {
      content: "Horuss a transform\xE9 la mani\xE8re dont nous g\xE9rons nos projets. L'ex\xE9cution a \xE9t\xE9 imm\xE9diate et la rapidit\xE9 de leurs r\xE9ponses est exceptionnelle. Ils ont v\xE9ritablement respect\xE9 leur promesses et le r\xE9sultat est incroyable !",
      author: "Samantha Ruiz",
      role: "Directrice des op\xE9rations | ConstructIt Inc.",
      avatarSrc: "https://images.unsplash.com/photo-1593104547489-5cfb3839a3b5?q=80&w=1453&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D8&auto=format&fit=facearea&facepad=2&w=320&h=320&q=80"
    }
  ], "statistics": [
    {
      count: "350+",
      description: "Projets dans la derni\xE8re ann\xE9e r\xE9alis\xE9 par l'\xE9quipe d'Horuss et aucune insatisfaction d'aucun client."
    },
    {
      count: "45%",
      description: "R\xE9duction moyenne des co\xFBts sur nos projets, arr\xEAter de payer des montants insolent pour vos projets."
    },
    {
      count: "15,3%",
      description: "De nos projets finissent avant l'\xE9chancier pr\xE9vus"
    },
    {
      count: "2x",
      description: "de projets r\xE9alis\xE9s en l'espace de 4 mois."
    }
  ] })} ${renderComponent($$result2, "PricingSection", $$PricingSection, { "pricing": pricing })} ${renderComponent($$result2, "FAQ", $$FAQ, { "title": "Questions<br />fr\xE9quemment pos\xE9es", "faqs": faqs })} ${renderComponent($$result2, "HeroSectionAlt", $$HeroSectionAlt, { "title": "Construisons ensemble", "subTitle": "Horuss est une jeune compagnie qui va r\xE9aliser vos projets au meilleur prix sur le march\xE9 et avec le meilleur r\xE9sultat possible.", "url": "/contact" })} ` })}`;
}, "/Users/goon/Desktop/ELR-Agency/ELR-Agency/ELR Agency Clients/horuss-paint/src/pages/original-index.astro", void 0);

const $$file = "/Users/goon/Desktop/ELR-Agency/ELR-Agency/ELR Agency Clients/horuss-paint/src/pages/original-index.astro";
const $$url = "/original-index";

export { $$OriginalIndex as default, $$file as file, $$url as url };
