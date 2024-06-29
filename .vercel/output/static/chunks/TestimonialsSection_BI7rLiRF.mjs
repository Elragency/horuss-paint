import { a as createAstro, b as createComponent, d as renderTemplate, m as maybeRenderHead, e as renderComponent } from './astro/server_BHOel7Fx.mjs';
import 'kleur/colors';
import { $ as $$Image } from './_astro_assets_Ch63cm7l.mjs';
import { a as $$Icon } from './MainLayout_DZFt7YAq.mjs';

const $$Astro$2 = createAstro("https://horuss.ca");
const $$TestimonialItem = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$TestimonialItem;
  const { content, author, role, avatarSrc } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<blockquote class="relative"> ${renderComponent($$result, "Icon", $$Icon, { "name": "quotation" })} <div class="relative z-10"> <p class="text-xl italic text-neutral-800 dark:text-neutral-200"> ${content} </p> </div> <div class="mt-6"> <div class="flex items-center"> <div class="flex-shrink-0"> ${renderComponent($$result, "Image", $$Image, { "class": "h-8 w-8 rounded-full", "src": avatarSrc, "alt": "Avatar Description", "loading": "eager", "inferSize": true })} </div> <div class="ms-4 grow"> <div class="font-bold text-neutral-800 dark:text-neutral-200"> ${author} </div> <div class="text-xs text-neutral-500">${role}</div> </div> </div> </div> </blockquote>`;
}, "/Users/goon/Desktop/ELR-Agency/ELR-Agency/ELR Agency Clients/horuss-paint/src/components/sections/testimonials/TestimonialItem.astro", void 0);

const $$Astro$1 = createAstro("https://horuss.ca");
const $$StatsGrid = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$StatsGrid;
  const { count, description, index } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<li class="-m-0.5 flex flex-col p-4 sm:p-8"> <div class="mb-2 flex items-end gap-x-2 text-3xl font-bold text-neutral-800 dark:text-neutral-200 sm:text-5xl"> ${index === 1 || index === 2 ? renderTemplate`${renderComponent($$result, "Icon", $$Icon, { "name": "arrowUp" })}` : null} ${count} </div> <p class="text-sm text-neutral-600 dark:text-neutral-400 sm:text-base"> ${description} </p> </li>`;
}, "/Users/goon/Desktop/ELR-Agency/ELR-Agency/ELR Agency Clients/horuss-paint/src/components/ui/blocks/StatsGrid.astro", void 0);

const $$Astro = createAstro("https://horuss.ca");
const $$TestimonialsSection = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$TestimonialsSection;
  const {
    title,
    subTitle,
    testimonials,
    statistics
  } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<section class="mx-auto max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 2xl:max-w-full"> <!-- Container for the testimonials --> <div class="lg:grid lg:grid-cols-12 lg:items-center lg:justify-between lg:gap-16"> <div class="lg:col-span-5 lg:col-start-1"> <!-- Title and Subtitle --> <div class="mb-8"> <h2 class="mb-2 text-3xl font-bold text-neutral-800 dark:text-neutral-200 lg:text-4xl"> ${title} </h2> ${subTitle && renderTemplate`<p class="text-neutral-600 dark:text-neutral-400"> ${subTitle} </p>`} </div> <!-- Generate a blockquote for each testimonial in the testimonials array by mapping over the array. --> ${testimonials && testimonials.map((testimonial) => renderTemplate`${renderComponent($$result, "TestimonialItem", $$TestimonialItem, { "content": testimonial.content, "author": testimonial.author, "role": testimonial.role, "avatarSrc": testimonial.avatarSrc })}`)} </div> ${statistics && renderTemplate`<div class="mt-10 lg:col-span-6 lg:col-end-13 lg:mt-0"> <div class="space-y-6 sm:space-y-8"> <ul class="grid grid-cols-2 divide-x-2 divide-y-2 divide-neutral-300 overflow-hidden dark:divide-neutral-700"> <!-- Generate a list item for each stat in the statistics array by mapping over the array. --> ${statistics.map((stat, index) => renderTemplate`${renderComponent($$result, "StatsGrid", $$StatsGrid, { "count": stat.count, "description": stat.description, "index": index })}`)} </ul> </div> </div>`} </div> </section>`;
}, "/Users/goon/Desktop/ELR-Agency/ELR-Agency/ELR Agency Clients/horuss-paint/src/components/sections/testimonials/TestimonialsSection.astro", void 0);

export { $$TestimonialsSection as $ };
