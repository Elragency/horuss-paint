import { a as createAstro, b as createComponent, d as renderTemplate, m as maybeRenderHead, g as addAttribute, e as renderComponent, u as unescapeHTML, F as Fragment, f as renderScript } from './astro/server_BHOel7Fx.mjs';
import 'kleur/colors';
import { $ as $$PrimaryCTA } from './PrimaryCTA_VbFwwmum.mjs';
import { $ as $$SecondaryCTA, a as $$ReviewComponent } from './ReviewComponent_uoIVrXdg.mjs';
/* empty css                      */
import 'clsx';

const $$Astro$2 = createAstro("https://horuss.ca");
const $$HeroImg = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$HeroImg;
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
  return renderTemplate`${maybeRenderHead()}<section class="absolute inset-0 flex items-center justify-center astro-mqqportk"${addAttribute(`background: url('${src}') no-repeat center center fixed; background-size: cover;`, "style")}> <div class="z-10 text-center p-4 ease-[cubic-bezier(0.45,0,0.55,1)] astro-mqqportk"> <!-- Title --> <h1 class="background-text text-[12vh] font-bold  text-neutral-900 dark:text-neutral-100 md:mt-4 sm:text-[8vh] md:text-[10vh] lg:text-[12vh] lg:leading-tight astro-mqqportk"> ${renderComponent($$result, "Fragment", Fragment, {}, { "default": ($$result2) => renderTemplate`${unescapeHTML(title)}` })} </h1> <!-- Subtitle --> ${subTitle && renderTemplate`<p class="mt-3 text-lg leading-relaxed  text-neutral-900 dark:text-neutral-100 lg:w-4/5 mx-auto astro-mqqportk"> ${subTitle} </p>`} <!-- Action Button Section: Centering both CTAs --> <div class="mt-7 inline-flex gap-3 justify-center w-full astro-mqqportk"> ${primaryBtn && renderTemplate`${renderComponent($$result, "PrimaryCTA", $$PrimaryCTA, { "title": primaryBtn, "url": primaryBtnURL, "class": "astro-mqqportk" })}`} ${secondaryBtn && renderTemplate`${renderComponent($$result, "SecondaryCTA", $$SecondaryCTA, { "title": secondaryBtn, "url": secondaryBtnURL, "class": "astro-mqqportk" })}`} </div> <!-- Review Section --> ${withReview ? renderTemplate`<div class="flex justify-center w-full astro-mqqportk"> ${renderComponent($$result, "ReviewComponent", $$ReviewComponent, { "avatars": avatars, "starCount": starCount, "rating": rating, "reviews": reviews, "class": "astro-mqqportk" })} </div>` : ""} </div> </section> <noscript> <style>
    #splash-bg-fallback {
      display: block;
    }
   
  </style> </noscript> `;
}, "/Users/goon/Desktop/ELR-Agency/ELR-Agency/ELR Agency Clients/horuss-paint/src/components/sections/landing/Hero-img.astro", void 0);

const $$Astro$1 = createAstro("https://horuss.ca");
const $$Starfield = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$Starfield;
  return renderTemplate`${maybeRenderHead()}<section> <div id="starfield" class="absolute inset-0"> <canvas id="starfield-canvas"></canvas> </div> ${renderScript($$result, "/Users/goon/Desktop/ELR-Agency/ELR-Agency/ELR Agency Clients/horuss-paint/src/components/sections/customs/starfield.astro?astro&type=script&index=0&lang.ts")} </section>`;
}, "/Users/goon/Desktop/ELR-Agency/ELR-Agency/ELR Agency Clients/horuss-paint/src/components/sections/customs/starfield.astro", void 0);

const $$Astro = createAstro("https://horuss.ca");
const $$Splash = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Splash;
  Astro2.props;
  return renderTemplate`${maybeRenderHead()}<section class=" astro-gxndwanq"> ${renderComponent($$result, "Starfield", $$Starfield, { "class": "astro-gxndwanq" })} <div id="splash-bg-fallback" class="absolute inset-0 hidden opacity-40 astro-gxndwanq"> <!-- <HeroImage /> --> </div> </section> <noscript> <style>
     #splash-bg-fallback {
       display: block;
     }
    
   </style> </noscript> `;
}, "/Users/goon/Desktop/ELR-Agency/ELR-Agency/ELR Agency Clients/horuss-paint/src/components/sections/customs/splash.astro", void 0);

export { $$Splash as $, $$HeroImg as a };
