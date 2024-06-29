/* empty css                         */
import { a as createAstro, b as createComponent, d as renderTemplate, m as maybeRenderHead, g as addAttribute, e as renderComponent } from './astro/server_BHOel7Fx.mjs';
import 'kleur/colors';
import { a as $$Icon, $ as $$MainLayout, S as SITE } from './MainLayout_DZFt7YAq.mjs';
import { $ as $$CardBlog, a as $$CardBlogRecent } from './CardBlogRecent_DdzBfd9-.mjs';
import { $ as $$Image } from './_astro_assets_Ch63cm7l.mjs';
import { g as getCollection } from './_astro_content_cBsHR35y.mjs';

const $$Astro$1 = createAstro("https://horuss.ca");
const $$CardInsight = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$CardInsight;
  const { insightEntry } = Astro2.props;
  return renderTemplate`<!-- The anchor tag is the root container for the "Insight" card. It links to the insight detail page. -->${maybeRenderHead()}<a class="group outline-none rounded-xl ring-zinc-500 transition duration-300 focus-visible:ring dark:ring-zinc-200 dark:focus:outline-none"${addAttribute(`/insights/${insightEntry.slug}/`, "href")}> <!-- This is the container for the insight's cover image. --> <div class="relative overflow-hidden rounded-xl pt-[50%] sm:pt-[70%]"> ${renderComponent($$result, "Image", $$Image, { "class": "absolute start-0 top-0 size-full rounded-xl object-cover transition duration-500 ease-in-out group-hover:scale-105", "src": insightEntry.data.cardImage, "alt": insightEntry.data.cardImageAlt, "draggable": "false", "format": "avif" })} </div> <!-- This is the container for the insight's title and description. --> <div class="mt-7"> <!-- The title of the insight --> <h3 class="text-xl font-bold text-neutral-800 group-hover:text-neutral-600 dark:text-neutral-200 dark:group-hover:text-neutral-400"> ${insightEntry.data.title} </h3> <!-- The description of the insight --> <p class="mt-3 text-neutral-600 dark:text-neutral-400"> ${insightEntry.data.description} </p> <!-- The "Read More" hyperlink going to the full insight. With an arrow icon --> <p class="mt-5 inline-flex items-center gap-x-1 font-medium text-orange-400 decoration-2 group-hover:underline dark:text-orange-300">
Lire Plus
${renderComponent($$result, "Icon", $$Icon, { "name": "arrowRightStatic" })} </p> </div> </a>`;
}, "/Users/goon/Desktop/ELR-Agency/ELR-Agency/ELR Agency Clients/horuss-paint/src/components/ui/cards/CardInsight.astro", void 0);

const $$Astro = createAstro("https://horuss.ca");
const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Index;
  const blogPosts = (await getCollection("blog")).sort(
    (a, b) => b.data.pubDate.valueOf() - a.data.pubDate.valueOf()
  );
  const insightPosts = await getCollection("insights");
  const mostRecentPost = blogPosts[0];
  const otherPosts = blogPosts.slice(1);
  const title = "Your Gateway to Excellence";
  const subTitle = "Stay up-to-date with the latest trends and developments in the marketing industry with insights from ELR AGENCY's team of industry experts";
  const secondTitle = "Insights";
  const secondSubTitle = "Stay up-to-date with the latest trends and developments in the marketing industry with insights from ELR AGENCY's team of industry experts";
  const pageTitle = `Blog | ${SITE.title}`;
  return renderTemplate`${renderComponent($$result, "MainLayout", $$MainLayout, { "title": pageTitle, "structuredData": {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "@id": "https://www.elragency.com/blog",
    "url": "https://www.elragency.com/blog",
    "name": "Blog | ELR AGENCY",
    "description": "Stay up-to-date with the latest trends and developments in the marketing industry with insights from ELR AGENCY's team of industry experts.",
    "isPartOf": {
      "@type": "WebSite",
      "url": "https://www.elragency.com/blog",
      "name": "ELR AGENCY",
      "description": "ELR AGENCY offers top-tier services, tools and expert services to meet all your project needs."
    },
    "inLanguage": "en-US"
  } }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<section class="mx-auto max-w-[85rem] space-y-8 px-4 pt-16 sm:px-6 lg:px-8 2xl:max-w-full"> <!--Page header--> <div class="mx-auto max-w-3xl text-left sm:text-center"> <h1 class="block text-balance text-4xl font-bold tracking-tight text-neutral-800 dark:text-neutral-200 md:text-5xl lg:text-6xl"> ${title} </h1> <p class="mt-4 text-pretty text-lg text-neutral-600 dark:text-neutral-400"> ${subTitle} </p> </div> </section> <section class="mx-auto max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 2xl:max-w-full"> <!--Blog posts grid--> <div class="grid gap-6 lg:grid-cols-2"> ${otherPosts.map((blogEntry) => renderTemplate`${renderComponent($$result2, "CardBlog", $$CardBlog, { "blogEntry": blogEntry })}`)} </div> </section>  <section class="mx-auto max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 2xl:max-w-full"> ${renderComponent($$result2, "CardBlogRecent", $$CardBlogRecent, { "blogEntry": mostRecentPost })} </section>  <section class="mx-auto max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 2xl:max-w-full"> <div class="mx-auto mb-10 max-w-2xl text-center lg:mb-14"> <h2 class="text-2xl font-bold text-neutral-800 dark:text-neutral-200 md:text-4xl md:leading-tight"> ${secondTitle} </h2> <p class="mt-1 text-pretty text-neutral-600 dark:text-neutral-400"> ${secondSubTitle} </p> </div> <div class="grid gap-6 sm:grid-cols-2 lg:grid-cols-3"> ${insightPosts.map((insightEntry) => renderTemplate`${renderComponent($$result2, "CardInsight", $$CardInsight, { "insightEntry": insightEntry })}`)} </div> </section> ` })}`;
}, "/Users/goon/Desktop/ELR-Agency/ELR-Agency/ELR Agency Clients/horuss-paint/src/pages/en/blog/index.astro", void 0);

const $$file = "/Users/goon/Desktop/ELR-Agency/ELR-Agency/ELR Agency Clients/horuss-paint/src/pages/en/blog/index.astro";
const $$url = "/en/blog";

export { $$Index as default, $$file as file, $$url as url };
