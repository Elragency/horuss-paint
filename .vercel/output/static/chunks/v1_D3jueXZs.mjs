/* empty css                         */
import { a as createAstro, b as createComponent, d as renderTemplate, e as renderComponent, m as maybeRenderHead } from './astro/server_BHOel7Fx.mjs';
import 'kleur/colors';
import { $ as $$MainLayout } from './MainLayout_DZFt7YAq.mjs';
import { $ as $$Splash, a as $$HeroImg } from './splash_B2Vqu0I3.mjs';
import { $ as $$HeroSectionAlt } from './HeroSectionAlt_q6ElQBja.mjs';
import { $ as $$FeaturesGeneral } from './FeaturesGeneral_Bt-Ho52z.mjs';
import { $ as $$FeaturesNavs } from './FeaturesNavs_CsnQeJGS.mjs';
import { $ as $$TestimonialsSection } from './TestimonialsSection_BI7rLiRF.mjs';
import { $ as $$FAQ } from './FAQ_C7Faydrn.mjs';
import { f as faqs } from './faqs_DRfwx7uP.mjs';
import { f as featureImage } from './combined-1_CUng0RrL.mjs';
import { t as tools, d as dashboard, c as construction } from './dashboard-image_C2UCdbdI.mjs';
import { g as getRelativeLocaleUrl } from './i18n_kCHKJbRo.mjs';
import { $ as $$Banner } from './Banner_C33_leq9.mjs';

const features = [
	{
		heading: "Interior Painting",
		content: "Trust HORUSS for high-quality interior painting services. Our work is aesthetic and done with meticulous attention to detail.",
		svg: "frame"
	},
	{
		heading: "Exterior Painting",
		content: "Beautify and protect the exterior of your building with our exterior painting solutions. We guarantee durable and aesthetic results.",
		svg: "frame"
	},
	{
		heading: "Commercial Painting",
		content: "Maximize the appeal of your commercial spaces with our professional painting services. We develop personalized solutions to attract and retain your customers.",
		svg: "frame"
	},
	{
		heading: "Color Consultation",
		content: "Create harmonious and aesthetic spaces with our color consultation service. We help you choose the perfect shades to reflect your brand's image.",
		svg: "frame"
	}
];

const $$Astro = createAstro("https://horuss.ca");
const $$V1 = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$V1;
  const avatarSrcs = [
    "https://images.unsplash.com/photo-1568602471122-7832951cc4c5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2&w=300&h=300&q=80",
    "https://images.unsplash.com/photo-1531927557220-a9e23c1e4794?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2&w=300&h=300&q=80",
    "https://images.unsplash.com/photo-1541101767792-f9b2b1c4f127?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&&auto=format&fit=facearea&facepad=3&w=300&h=300&q=80",
    "https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2&w=300&h=300&q=80"
  ];
  return renderTemplate`${renderComponent($$result, "MainLayout", $$MainLayout, { "lang": "en" }, { "default": ($$result2) => renderTemplate`   ${maybeRenderHead()}<section class="mb-11 pb-11"> ${renderComponent($$result2, "Splash", $$Splash, {})} ${renderComponent($$result2, "HeroSection", $$HeroImg, { "title": `ELR\xA0AGENCY`, "subTitle": "Transform your business by revolutionizing the technological aspect of your company with us.", "primaryBtn": "Go Online", "primaryBtnURL": getRelativeLocaleUrl("en", "contact"), "withReview": false, "avatars": avatarSrcs, "rating": `<span class="font-bold">4.8</span> / 5`, "starCount": 4, "reviews": `With over <span class="font-bold">12.8k</span> reviews`, "alt": "Competent employees of ELR Agency" })} </section> <br><br><br><br> <br><br><br><br> <br><br><br><br><br><br><br><br> ${renderComponent($$result2, "FeaturesGeneral", $$FeaturesGeneral, { "title": "Your Trusted Partner for Digital Transformation", "subTitle": "Our mission is to radically transform the entrepreneurial landscape of Quebec by becoming the essential partner for visionary entrepreneurs. We achieve this by revolutionizing the technological aspect of your business.", "src": featureImage, "alt": "Websites created by ELR Agency", "features": features })} ${renderComponent($$result2, "FeaturesNavs", $$FeaturesNavs, { "title": `The team at <span class="text-orange-500 dark:text-orange-400">AGENCE ELR</span> is here to meet all your digital marketing needs.`, "tabs": [
    {
      heading: "Personalized Support",
      content: "Benefit from customized support at every stage of your project, provided by a team dedicated to your success.",
      svg: "tools",
      src: tools,
      alt: "Team offering personalized customer support",
      first: true
    },
    {
      heading: "Measurable Results",
      content: "Achieve concrete and measurable results with our performance-focused solutions and data analysis.",
      svg: "dashboard",
      src: dashboard,
      alt: "Graph showing measurable results"
    },
    {
      heading: "Strategic Expertise",
      content: "Take advantage of our marketing strategy expertise to develop effective plans tailored to your target market.",
      svg: "dashboard",
      src: construction,
      alt: "Chart presenting strategic data"
    }
  ] })} ${renderComponent($$result2, "TestimonialsSection", $$TestimonialsSection, { "title": "Discover Our Results", "subTitle": "At AGENCE ELR, we are committed to delivering exceptional results for all your digital marketing projects. Our team ensures efficient execution and measurable results that meet your goals and budget.", "testimonials": [
    {
      content: "AGENCE ELR transformed our online presence. Their responsiveness and expertise exceeded our expectations, and the results are impressive!",
      author: "Samantha Ruiz",
      role: "Operations Director | ConstructIt Inc.",
      avatarSrc: "https://images.unsplash.com/photo-1593104547489-5cfb3839a3b5?q=80&w=1453&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D8&auto=format&fit=facearea&facepad=2&w=320&h=320&q=80"
    }
  ], "statistics": [
    {
      count: "500+",
      description: "Digital marketing campaigns successfully carried out by the AGENCE ELR team over the past year."
    },
    {
      count: "60%",
      description: "Average increase in return on investment for our clients thanks to our innovative strategies."
    },
    {
      count: "70%",
      description: "Of our clients see significant improvement in their online engagement within the first three months."
    },
    {
      count: "3x",
      description: "Growth in web traffic for our clients after optimizing their site."
    }
  ] })} ${renderComponent($$result2, "Banner", $$Banner, {})}  ${renderComponent($$result2, "FAQ", $$FAQ, { "id": "faq", "title": "Frequently<br />Asked Questions", "faqs": faqs })} ${renderComponent($$result2, "HeroSectionAlt", $$HeroSectionAlt, { "title": "Let's Work Together", "subTitle": "We are proud to change the lives of the entrepreneurs who trust us, that's what truly motivates us. Will you be next?", "url": getRelativeLocaleUrl("en", "contact") })} ` })}`;
}, "/Users/goon/Desktop/ELR-Agency/ELR-Agency/ELR Agency Clients/horuss-paint/src/pages/en/v1.astro", void 0);

const $$file = "/Users/goon/Desktop/ELR-Agency/ELR-Agency/ELR Agency Clients/horuss-paint/src/pages/en/v1.astro";
const $$url = "/en/v1";

export { $$V1 as default, $$file as file, $$url as url };
