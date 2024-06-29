/* empty css                         */
import { a as createAstro, b as createComponent, d as renderTemplate, e as renderComponent, m as maybeRenderHead } from './astro/server_BHOel7Fx.mjs';
import 'kleur/colors';
import { $ as $$MainLayout, S as SITE } from './MainLayout_DZFt7YAq.mjs';
import { $ as $$CardBlog, a as $$CardBlogRecent } from './CardBlogRecent_DdzBfd9-.mjs';
import { g as getCollection } from './_astro_content_cBsHR35y.mjs';

const $$Astro = createAstro("https://horuss.ca");
const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Index;
  const blogPosts = (await getCollection("blog")).sort(
    (a, b) => b.data.pubDate.valueOf() - a.data.pubDate.valueOf()
  );
  await getCollection("insights");
  const mostRecentPost = blogPosts[0];
  const otherPosts = blogPosts.slice(1);
  const title = "Votre Passerelle vers l'Excellence en Peinture";
  const subTitle = "D\xE9couvrez les derni\xE8res nouvelles, conseils et informations de HORUSS pour am\xE9liorer vos projets de peinture. Des techniques avanc\xE9es aux conseils en couleurs, notre blog est votre ressource incontournable pour tout ce qui concerne la peinture int\xE9rieure, ext\xE9rieure et commerciale.";
  const pageTitle = `Blog | ${SITE.title}`;
  return renderTemplate`${renderComponent($$result, "MainLayout", $$MainLayout, { "title": pageTitle, "structuredData": {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "@id": "https://www.horuss.ca/blog",
    "url": "https://www.horuss.ca/blog",
    "name": "Blog | Horuss",
    "description": "D\xE9couvrez les derni\xE8res nouvelles, conseils et informations de HORUSS pour am\xE9liorer vos projets de peinture. Des techniques avanc\xE9es aux conseils en couleurs, notre blog est votre ressource incontournable pour tout ce qui concerne la peinture int\xE9rieure, ext\xE9rieure et commerciale.",
    "isPartOf": {
      "@type": "WebSite",
      "url": "https://www.horuss.ca",
      "name": "Horuss",
      "description": "Restez au courant des derni\xE8res tendances et d\xE9veloppements dans le secteur de la peinture gr\xE2ce aux informations de l'\xE9quipe d'experts de HORUSS."
    },
    "inLanguage": "fr-CAN"
  } }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<section class="mx-auto max-w-[85rem] space-y-8 px-4 pt-16 sm:px-6 lg:px-8 2xl:max-w-full"> <!--Page header--> <div class="mx-auto max-w-3xl text-left sm:text-center"> <h1 class="block text-balance text-4xl font-bold tracking-tight text-neutral-800 dark:text-neutral-200 md:text-5xl lg:text-6xl"> ${title} </h1> <p class="mt-4 text-pretty text-lg text-neutral-600 dark:text-neutral-400"> ${subTitle} </p> </div> </section> <section class="mx-auto max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 2xl:max-w-full"> <!--Blog posts grid--> <div class="grid gap-6 lg:grid-cols-2"> ${otherPosts.map((blogEntry) => renderTemplate`${renderComponent($$result2, "CardBlog", $$CardBlog, { "blogEntry": blogEntry })}`)} </div> </section>  <section class="mx-auto max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 2xl:max-w-full"> ${renderComponent($$result2, "CardBlogRecent", $$CardBlogRecent, { "blogEntry": mostRecentPost })} </section>   ` })}`;
}, "/Users/goon/Desktop/ELR-Agency/ELR-Agency/ELR Agency Clients/horuss-paint/src/pages/blog/index.astro", void 0);

const $$file = "/Users/goon/Desktop/ELR-Agency/ELR-Agency/ELR Agency Clients/horuss-paint/src/pages/blog/index.astro";
const $$url = "/blog";

export { $$Index as default, $$file as file, $$url as url };
