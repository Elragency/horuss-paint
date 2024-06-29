import { a as createAstro, b as createComponent, d as renderTemplate, m as maybeRenderHead, e as renderComponent, u as unescapeHTML, F as Fragment } from './astro/server_BHOel7Fx.mjs';
import 'kleur/colors';
import { $ as $$Image } from './_astro_assets_Ch63cm7l.mjs';
import { $ as $$PrimaryCTA } from './PrimaryCTA_VbFwwmum.mjs';
import { $ as $$SecondaryCTA, a as $$ReviewComponent } from './ReviewComponent_uoIVrXdg.mjs';
/* empty css                         */

const $$Astro = createAstro("https://horuss.ca");
const $$HeroSection = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$HeroSection;
  const {
    title,
    subTitle,
    primaryBtn,
    primaryBtnURL,
    secondaryBtn,
    secondaryBtnURL,
    withReview,
    avatars,
    starCount,
    rating,
    reviews,
    src,
    alt
  } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<section class="relative mx-auto h-screen max-w-[85rem] px-4 py-14 sm:px-6 lg:px-8 2xl:max-w-full astro-to5pn6rs"> ${src && alt && renderTemplate`<div class="absolute inset-0 z-0 h-full astro-to5pn6rs"> ${renderComponent($$result, "Image", $$Image, { "src": src, "alt": alt, "class": "h-full w-full object-cover object-center astro-to5pn6rs", "draggable": "false", "loading": "eager", "format": "avif" })} </div>`} <div class="relative z-10 flex flex-col items-center justify-center h-full text-center text-white astro-to5pn6rs"> <h1 class="background-text text-[12vh] font-bold  text-neutral-100 dark:text-neutral-100 md:mt-4 sm:text-[8vh] md:text-[10vh] lg:text-[12vh] lg:leading-tight astro-to5pn6rs"> ${renderComponent($$result, "Fragment", Fragment, {}, { "default": ($$result2) => renderTemplate`${unescapeHTML(title)}` })} </h1> ${subTitle && renderTemplate`<p class="mt-3 text-lg leading-relaxed lg:w-4/5 mx-auto astro-to5pn6rs"> ${subTitle} </p>`} <div class="mt-7 grid w-full gap-3 sm:inline-flex justify-center astro-to5pn6rs"> ${primaryBtn && renderTemplate`${renderComponent($$result, "PrimaryCTA", $$PrimaryCTA, { "title": primaryBtn, "url": primaryBtnURL, "class": "astro-to5pn6rs" })}`} ${secondaryBtn && renderTemplate`${renderComponent($$result, "SecondaryCTA", $$SecondaryCTA, { "title": secondaryBtn, "url": secondaryBtnURL, "class": "astro-to5pn6rs" })}`} </div> ${withReview && renderTemplate`${renderComponent($$result, "ReviewComponent", $$ReviewComponent, { "avatars": avatars, "starCount": starCount, "rating": rating, "reviews": reviews, "class": "astro-to5pn6rs" })}`} </div> </section> `;
}, "/Users/goon/Desktop/ELR-Agency/ELR-Agency/ELR Agency Clients/horuss-paint/src/components/sections/landing/HeroSection.astro", void 0);

export { $$HeroSection as $ };
