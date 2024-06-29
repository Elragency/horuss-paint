/* empty css                         */
import { a as createAstro, b as createComponent, d as renderTemplate, m as maybeRenderHead, e as renderComponent, f as renderScript } from './astro/server_BHOel7Fx.mjs';
import 'kleur/colors';
import { a as $$Icon, $ as $$MainLayout } from './MainLayout_DZFt7YAq.mjs';
import { $ as $$TextInput, a as $$PhoneInput, b as $$TextAreaInput, c as $$AuthBtn, d as $$ContactIconBlock } from './TextAreaInput_DYjP9zZs.mjs';

const $$Astro$1 = createAstro("https://horuss.ca");
const $$ContactSectionFr2 = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$ContactSectionFr2;
  const title = "Contactez-nous";
  const subTitle = "Vous avez des questions ou souhaitez discuter d'un projet ? Contactez-nous et laissons-nous \xE9laborer la solution parfaite avec nos outils et services.";
  const formTitle = "Remplissez le formulaire ci-dessous";
  const formSubTitle = "Nous vous r\xE9pondrons dans un d\xE9lai de 1 \xE0 2 jours ouvrables.";
  return renderTemplate`<!-- Contact Us -->${maybeRenderHead()}<section class="mx-auto max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14"> <div class="mx-auto max-w-2xl lg:max-w-5xl"> <div class="text-center"> <h1 class="text-balance text-2xl font-bold tracking-tight text-neutral-800 dark:text-neutral-200 md:text-4xl md:leading-tight"> ${title} </h1> <p class="mt-1 text-pretty text-neutral-600 dark:text-neutral-400"> ${subTitle} </p> </div> <div class="mt-12 grid items-center gap-6 lg:grid-cols-2 lg:gap-16"> <div class="flex flex-col rounded-xl p-4 sm:p-6 lg:p-8"> <h2 class="mb-8 text-xl font-bold text-neutral-700 dark:text-neutral-300"> ${formTitle} </h2> <!-- Form for user input with various input fields.--> <!-- Each field utilizes a different input component for the specific type of input (text, email, phone, and textarea)--> <form id="contactForm" enctype="multipart/form-data"> <div class="grid gap-4"> <div class="grid grid-cols-1 gap-4 sm:grid-cols-2"> ${renderComponent($$result, "TextInput", $$TextInput, { "id": "hs-firstname-contacts", "label": "Pr\xE9nom", "name": "firstname" })} ${renderComponent($$result, "TextInput", $$TextInput, { "id": "hs-lastname-contacts", "label": "Nom", "name": "lastname" })} </div> ${renderComponent($$result, "TextInput", $$TextInput, { "id": "hs-email-contacts", "label": "Email", "name": "email", "type": "email", "placeholder": "Votre email" })} ${renderComponent($$result, "PhoneInput", $$PhoneInput, { "id": "hs-phone-number", "name": "phone" })} ${renderComponent($$result, "TextAreaInput", $$TextAreaInput, { "id": "hs-about-contacts", "label": "D\xE9tails", "name": "message", "placeholder": "D\xE9tails de votre probl\xE8me" })} <!-- <input
              type="file"
              name="attachment"
              accept="image/png, image/jpeg"
              class="block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400"
            /> --> </div> <div class="mt-4 grid"> ${renderComponent($$result, "AuthBtn", $$AuthBtn, { "title": "Envoyer un message", "type": "submit" })} </div> <div class="mt-3 text-center"> <p class="text-sm text-neutral-600 dark:text-neutral-400"> ${formSubTitle} </p> <input type="hidden" name="_captcha" value="false"> </div> </form> <div id="thankYouMessage" class="hidden mt-4 p-4 bg-green-100 text-green-700 rounded">
Merci ! Votre message a été envoyé avec succès.
</div> </div> <!--ContactIconBlocks are used to display different methods of contacting, including visiting office, email, browsing knowledgebase, and FAQ.--> <div class="divide-y divide-neutral-300 dark:divide-neutral-700"> <!-- <ContactIconBlock
          heading="Base de connaissances"
          content="Parcourez tous nos articles de base de connaissances."
          isLinkVisible={true}
          linkTitle="Visiter les guides et tutoriels"
          linkURL="#"
          isArrowVisible={true}
          ><Icon name="question" />
        </ContactIconBlock> --> ${renderComponent($$result, "ContactIconBlock", $$ContactIconBlock, { "heading": "FAQ", "content": "Explorez notre FAQ pour des r\xE9ponses rapides et claires aux questions courantes.", "isLinkVisible": true, "linkTitle": "Visiter la FAQ", "linkURL": "/#FAQ", "isArrowVisible": true }, { "default": ($$result2) => renderTemplate`${renderComponent($$result2, "Icon", $$Icon, { "name": "chatBubble" })} ` })} <!-- <ContactIconBlock
          heading="Send us a letter"
          content="Agence ELR"
          isAddressVisible={true}
          addressContent="1291 Blvd. Shevchenko LaSalle, QC H8N 1N8"
          ><Icon name="mapPin" />
        </ContactIconBlock> --> ${renderComponent($$result, "ContactIconBlock", $$ContactIconBlock, { "heading": "Contactez-nous par e-mail", "content": "Pr\xE9f\xE9rez-vous le texte \xE9crit ? Envoyez-nous un e-mail \xE0", "isLinkVisible": true, "linkTitle": "horussconstruction@gmail.com", "linkURL": "mailto:horussconstruction@gmail.com" }, { "default": ($$result2) => renderTemplate`${renderComponent($$result2, "Icon", $$Icon, { "name": "envelopeOpen" })} ` })} </div> </div> </div> </section> ${renderScript($$result, "/Users/goon/Desktop/ELR-Agency/ELR-Agency/ELR Agency Clients/horuss-paint/src/components/sections/fr/ContactSection_fr2.astro?astro&type=script&index=0&lang.ts")}`;
}, "/Users/goon/Desktop/ELR-Agency/ELR-Agency/ELR Agency Clients/horuss-paint/src/components/sections/fr/ContactSection_fr2.astro", void 0);

const $$Astro = createAstro("https://horuss.ca");
const $$Contact = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Contact;
  return renderTemplate`<!--Utilizing MainLayout for the outer layout of the page, and defining meta for SEO purposes-->${renderComponent($$result, "MainLayout", $$MainLayout, { "title": "Contact | HORUSS", "lang": "fr", "structuredData": {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "@id": "https://www.horuss.ca/contact/",
    url: "https://www.horuss.ca/contact/",
    name: "Contactez-nous | HORUSS",
    description: "Vous avez des questions ou souhaitez discuter d'un projet ? Contactez-nous et \xE9laborons ensemble la solution parfaite avec nos outils et services.",
    isPartOf: {
      "@type": "WebSite",
      url: "https://www.horuss.ca",
      name: "HORUSS",
      description: "HORUSS propose des services de peinture de haute qualit\xE9, avec des experts pr\xEAts \xE0 r\xE9pondre \xE0 tous vos besoins en mati\xE8re de peinture et de r\xE9novation de murs."
    },
    inLanguage: "fr-CAN"
  } }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "ContactSection", $$ContactSectionFr2, {})}  ${renderScript($$result2, "/Users/goon/Desktop/ELR-Agency/ELR-Agency/ELR Agency Clients/horuss-paint/src/pages/contact.astro?astro&type=script&index=0&lang.ts")} ${renderScript($$result2, "/Users/goon/Desktop/ELR-Agency/ELR-Agency/ELR Agency Clients/horuss-paint/src/pages/contact.astro?astro&type=script&index=1&lang.ts")} ` })}`;
}, "/Users/goon/Desktop/ELR-Agency/ELR-Agency/ELR Agency Clients/horuss-paint/src/pages/contact.astro", void 0);

const $$file = "/Users/goon/Desktop/ELR-Agency/ELR-Agency/ELR Agency Clients/horuss-paint/src/pages/contact.astro";
const $$url = "/contact";

export { $$Contact as default, $$file as file, $$url as url };
