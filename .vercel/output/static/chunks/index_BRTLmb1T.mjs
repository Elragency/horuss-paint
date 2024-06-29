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
  const title = "Our Services";
  const subTitle = "Explore the various tools and products that can redefine the beauty of your home.";
  const testimonials = [
    {
      content: "HORUSS transformed the appearance of our home with their interior painting service. Their attention to detail and professionalism exceeded our expectations. We highly recommend their services.",
      author: "Jean Dupont",
      role: "Homeowner | Quebec",
      avatarSrc: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90oy1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=facearea&facepad=2&w=320&h=320&q=80",
      avatarAlt: "Portrait of Jean Dupont"
    },
    {
      content: "We hired HORUSS to repaint our commercial building. Their team worked efficiently and with great precision. The final result is beautiful and has given new life to our building.",
      author: "Marie Tremblay",
      role: "General Manager | Tremblay Enterprises",
      avatarSrc: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=1376&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90oy1wYWdlfHx8fGVufDB8fHx8fA%3D%3D8&auto=format&fit=facearea&facepad=2&w=320&h=320&q=80",
      avatarAlt: "Portrait of Marie Tremblay"
    },
    {
      content: "HORUSS provided exceptional service for painting our new home. Their team is professional, punctual, and the results are simply perfect. We are extremely satisfied.",
      author: "Luc Bernard",
      role: "Homeowner | Montreal",
      avatarSrc: "https://images.unsplash.com/photo-1474176857210-7287d38d27c6?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90oy1wYWdlfHx8fGVufDB8fHx8fA%3D%3D8&auto=format&fit=facearea&facepad=2&w=320&h=320&q=80",
      avatarAlt: "Portrait of Luc Bernard"
    }
  ];
  return renderTemplate`${renderComponent($$result, "MainLayout", $$MainLayout, { "title": "Our Services | Horuss", "lang": "en", "structuredData": {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "@id": "https://www.horuss.ca/services",
    url: "https://www.horuss.ca/services",
    name: "Pro Services | Horuss",
    description: "Our goal is to provide quality service at an unbeatable market price.",
    isPartOf: {
      "@type": "WebSite",
      url: "https://horuss.ca/services",
      name: "Horuss",
      description: "We have a skilled workforce with the required experience to complete your projects quickly."
    },
    inLanguage: "en-CA"
  } }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="mx-auto max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 2xl:max-w-full"> <div class="mb-4 flex items-center justify-between gap-8 sm:mb-8 md:mb-12"> <div class="flex items-center gap-12"> <h1 class="text-balance text-2xl font-bold tracking-tight text-neutral-800 dark:text-neutral-200 md:text-4xl md:leading-tight"> ${title} </h1> ${renderTemplate`<p class="hidden max-w-screen-sm text-pretty text-neutral-600 dark:text-neutral-400 md:block"> ${subTitle} </p>`} </div> ${renderComponent($$result2, "PrimaryCTA", $$PrimaryCTA, { "title": "Testimonials", "url": "#testimonials", "noArrow": true })} </div> <!--Displaying products in alternating styles. Alternative product gets different card styling.--> <!--Maps through all product entries and displays them with either CardSmall or CardWide based on their position.--> <section class="grid grid-cols-1 gap-4 sm:grid-cols-3 md:gap-6 xl:gap-8"> ${product.map((product2, index) => {
    const position = index % 4;
    if (position === 0 || position === 3) {
      return renderTemplate`${renderComponent($$result2, "CardSmall", $$CardSmall, { "product": product2 })}`;
    } else {
      return renderTemplate`${renderComponent($$result2, "CardWide", $$CardWide, { "product": product2 })}`;
    }
  })} </section> </div>  ${renderComponent($$result2, "FeaturesStatsAlt", $$FeaturesStatsAlt, { "title": "Why Choose HORUSS?", "subTitle": "Entrust your painting projects to HORUSS. Our expertise ensures not only quality but also the customization of each service according to your specific needs.", "benefits": [
    "Interior and exterior painting services to transform and protect your spaces.",
    "High-quality preparation techniques and materials for durable results.",
    "Personalized color consultations to create harmonious and aesthetic environments.",
    "Professional execution and adherence to deadlines to ensure your satisfaction."
  ] })} ${renderComponent($$result2, "TestimonialsSectionAlt", $$TestimonialsSectionAlt, { "title": "What Our Clients Say", "testimonials": testimonials })} ` })} ${renderScript($$result, "/Users/goon/Desktop/ELR-Agency/ELR-Agency/ELR Agency Clients/horuss-paint/src/pages/en/services/index.astro?astro&type=script&index=0&lang.ts")}`;
}, "/Users/goon/Desktop/ELR-Agency/ELR-Agency/ELR Agency Clients/horuss-paint/src/pages/en/services/index.astro", void 0);

const $$file = "/Users/goon/Desktop/ELR-Agency/ELR-Agency/ELR Agency Clients/horuss-paint/src/pages/en/services/index.astro";
const $$url = "/en/services";

export { $$Index as default, $$file as file, $$url as url };
