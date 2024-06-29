/* empty css                         */
import { a as createAstro, b as createComponent, d as renderTemplate, e as renderComponent, m as maybeRenderHead } from './astro/server_BHOel7Fx.mjs';
import 'kleur/colors';
import { $ as $$MainLayout } from './MainLayout_DZFt7YAq.mjs';
import { $ as $$HeroSection } from './HeroSection_C8_qJs_r.mjs';
import { $ as $$HeroSectionAlt } from './HeroSectionAlt_q6ElQBja.mjs';
import { $ as $$FeaturesNavs } from './FeaturesNavs_CsnQeJGS.mjs';
import { $ as $$TestimonialsSection } from './TestimonialsSection_BI7rLiRF.mjs';
import { $ as $$FAQ } from './FAQ_C7Faydrn.mjs';
import { f as faqs } from './faqs_DRfwx7uP.mjs';
import { f as featureImage, t as tools, d as dashboard, c as construction } from './result_CVKJW3Jn.mjs';
import { g as getRelativeLocaleUrl } from './i18n_kCHKJbRo.mjs';

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
  return renderTemplate`${renderComponent($$result, "MainLayout", $$MainLayout, { "lang": "en" }, { "default": ($$result2) => renderTemplate`   ${maybeRenderHead()}<section class="mb-11 pb-11"> ${renderComponent($$result2, "HeroSection", $$HeroSection, { "title": `HORUSS`, "subTitle": "Enhance your space with our professional painting services for homes, businesses, and enterprises.", "primaryBtn": "Request a Quote", "primaryBtnURL": getRelativeLocaleUrl("en", "contact"), "src": featureImage, "withReview": false, "avatars": avatarSrcs, "rating": `<span class="font-bold">4.8</span> / 5`, "starCount": 4, "reviews": `With over <span class="font-bold">12.8k</span> reviews`, "alt": "Competent employees of HORUSS" })} </section>  ${renderComponent($$result2, "FeaturesNavs", $$FeaturesNavs, { "title": `The team at <span class="text-indigo-700 dark:text-indigo-400">HORUSS</span> is here to meet all your painting needs.`, "tabs": [
    {
      heading: "Personalized Support",
      content: "Benefit from customized support at every stage of your painting project, provided by a team dedicated to your satisfaction.",
      svg: "tools",
      src: tools,
      alt: "Team offering personalized customer support",
      first: true
    },
    {
      heading: "Impeccable Results",
      content: "Achieve flawless and durable results with our expertise in painting techniques and surface preparation.",
      svg: "dashboard",
      src: dashboard,
      alt: "Graph showing impeccable results"
    },
    {
      heading: "Color Expertise",
      content: "Take advantage of our expertise in color selection to create harmonious and aesthetically pleasing spaces.",
      svg: "dashboard",
      src: construction,
      alt: "Chart presenting data on color choices"
    }
  ] })} ${renderComponent($$result2, "TestimonialsSection", $$TestimonialsSection, { "title": "Discover Our Results", "subTitle": "At HORUSS, we are committed to delivering exceptional results for all your painting projects. Our team ensures efficient execution and measurable results that meet your goals and budget.", "testimonials": [
    {
      content: "HORUSS transformed our space. Their responsiveness and expertise exceeded our expectations, and the results are impressive!",
      author: "Samantha Ruiz",
      role: "Operations Director | ConstructIt Inc.",
      avatarSrc: "https://images.unsplash.com/photo-1593104547489-5cfb3839a3b5?q=80&w=1453&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D8&auto=format&fit=facearea&facepad=2&w=320&h=320&q=80"
    }
  ], "statistics": [
    {
      count: "500+",
      description: "Painting projects successfully carried out by the HORUSS team over the past year."
    },
    {
      count: "60%",
      description: "Average increase in client satisfaction thanks to our innovative techniques."
    },
    {
      count: "70%",
      description: "Of our clients see significant improvement in their space's aesthetics within the first three months."
    },
    {
      count: "3x",
      description: "Increase in referrals for our clients after transforming their space."
    }
  ] })}  ${renderComponent($$result2, "FAQ", $$FAQ, { "id": "faq", "title": "Frequently<br />Asked Questions", "faqs": faqs })} ${renderComponent($$result2, "HeroSectionAlt", $$HeroSectionAlt, { "title": "Let's Work Together", "subTitle": "We are proud to change the lives of the entrepreneurs who trust us, that's what truly motivates us. Will you be next?", "url": getRelativeLocaleUrl("en", "contact") })} ` })}`;
}, "/Users/goon/Desktop/ELR-Agency/ELR-Agency/ELR Agency Clients/horuss-paint/src/pages/en/index.astro", void 0);

const $$file = "/Users/goon/Desktop/ELR-Agency/ELR-Agency/ELR Agency Clients/horuss-paint/src/pages/en/index.astro";
const $$url = "/en";

export { $$Index as default, $$file as file, $$url as url };
