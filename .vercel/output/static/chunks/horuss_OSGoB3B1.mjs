/* empty css                         */
import { a as createAstro, b as createComponent, d as renderTemplate, e as renderComponent } from './astro/server_BHOel7Fx.mjs';
import 'kleur/colors';
import { $ as $$MainLayout } from './MainLayout_DZFt7YAq.mjs';
import { $ as $$MainSection, a as $$RightSection, b as $$LeftSection } from './RightSection_BzOw5wLj.mjs';
import { b as blueprints, p as personWorking, a as beforeAfter, c as constructionWorkers, d as aerialView, u as usingTools, e as progressBuilding, f as underConstruction } from './paint8_DrKWbymF.mjs';
import { g as getRelativeLocaleUrl } from './i18n_kCHKJbRo.mjs';

const $$Astro = createAstro("https://horuss.ca");
const $$Horuss = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Horuss;
  const articles = [
    {
      isRightSection: true,
      title: "Our History",
      subTitle: "Founded in 2022, HORUSS was born out of a passion for painting and transforming spaces. Our mission is to provide innovative solutions in interior and exterior painting, color consultation, and surface preparation to help clients achieve their aesthetic vision. Since our inception, we have worked with homeowners, businesses, and commercial properties to transform their spaces.",
      single: false,
      imgOne: blueprints,
      imgOneAlt: "Blueprints and digital tablet with construction plans.",
      imgTwo: personWorking,
      imgTwoAlt: "Person working at the office"
    },
    {
      isRightSection: false,
      title: "Solid Foundations",
      subTitle: "Although young, our company is built on solid foundations of deep knowledge and passion for painting. Our founders have years of experience in their respective fields, allowing us to offer superior quality services in interior and exterior painting, as well as color consultation.",
      img: beforeAfter,
      imgAlt: "Painting site before and after",
      btnExists: true,
      btnTitle: "Let's Do Business!",
      btnURL: "/contact"
    },
    {
      isRightSection: true,
      title: "HORUSS Today",
      subTitle: "With a dynamic and dedicated team, we have quickly gained the trust of our clients through our personalized approach and innovative solutions. We are proud of our achievements and rapid growth, while remaining committed to providing exceptional services that meet the unique needs of each client.",
      single: false,
      imgOne: constructionWorkers,
      imgOneAlt: "Construction workers orchestrating a painting project",
      imgTwo: aerialView,
      imgTwoAlt: "Aerial view of a painted construction"
    },
    {
      isRightSection: false,
      title: "A Mission That Unites Us",
      subTitle: "Our mission is to offer a unique and unparalleled customer experience in the field of painting. We aim to support each client with personalized solutions that transform their spaces, optimize their appearances, and increase their overall satisfaction.",
      img: usingTools,
      imgAlt: "Man in orange and black vest wearing a white helmet holding a yellow and black painting tool"
    },
    {
      isRightSection: true,
      title: "A Vision That Goes Far",
      subTitle: "We aspire to become the partner of choice for all businesses and individuals looking to innovate and transform their spaces with painting. Our vision is to continue evolving with the latest techniques and market trends to offer services that exceed our clients' expectations, while maintaining values of excellence, transparency, and respect.",
      single: false,
      imgOne: progressBuilding,
      imgOneAlt: "Building structure in the process of being painted",
      imgTwo: underConstruction,
      imgTwoAlt: "Brown and gray building in the process of being painted",
      btnExists: true,
      btnTitle: "Let's Do Business!",
      btnURL: "/contact"
    }
  ];
  return renderTemplate`${renderComponent($$result, "MainLayout", $$MainLayout, { "title": "Who We Are | Horuss", "lang": "en", "structuredData": {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "@id": "https://horuss.ca/about",
    url: "https://horuss.ca/about",
    name: "About | Horuss",
    description: "Combining expertise with your vision, HORUSS provides exceptional service and comprehensive solutions in the painting industry, from consultation to project completion.",
    isPartOf: {
      "@type": "WebSite",
      url: "https://horuss.ca/",
      name: "Horuss",
      description: "HORUSS offers high-quality painting services and expert solutions to meet all your space needs."
    },
    inLanguage: "en-CA"
  } }, { "default": ($$result2) => renderTemplate`  ${renderComponent($$result2, "MainSection", $$MainSection, { "title": "Unite Expertise with Your Vision", "subTitle": "At Agence ELR, we are proud to provide comprehensive and innovative solutions in automation, website creation, and digital marketing. Our dedicated team is here to support your project from conception to completion, offering personalized services tailored to your specific needs.", "btnExists": true, "btnTitle": "Schedule a Consultation", "btnURL": getRelativeLocaleUrl("en", "/contact") })}  ${articles.map((article) => {
    return article.isRightSection ? renderTemplate`${renderComponent($$result2, "RightSection", $$RightSection, { "title": article.title, "subTitle": article.subTitle, "single": article.single, "imgOne": article.imgOne, "imgOneAlt": article.imgOneAlt, "imgTwo": article.imgTwo, "imgTwoAlt": article.imgTwoAlt, "btnExists": article.btnExists, "btnTitle": article.btnTitle, "btnURL": article.btnURL })}` : renderTemplate`${renderComponent($$result2, "LeftSection", $$LeftSection, { "title": article.title, "subTitle": article.subTitle, "img": article.img, "imgAlt": article.imgAlt, "btnExists": article.btnExists, "btnTitle": article.btnTitle, "btnURL": article.btnURL })}`;
  })} ` })}`;
}, "/Users/goon/Desktop/ELR-Agency/ELR-Agency/ELR Agency Clients/horuss-paint/src/pages/en/horuss.astro", void 0);

const $$file = "/Users/goon/Desktop/ELR-Agency/ELR-Agency/ELR Agency Clients/horuss-paint/src/pages/en/horuss.astro";
const $$url = "/en/horuss";

export { $$Horuss as default, $$file as file, $$url as url };
