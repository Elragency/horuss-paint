import { b as createComponent, d as renderTemplate, m as maybeRenderHead, u as unescapeHTML } from './astro/server_BHOel7Fx.mjs';
import 'kleur/colors';
import 'clsx';

const html = "";

				const frontmatter = {"title":"Test EN","description":"Test-en","lang":"en","main":{"id":2,"content":"Choosing Agence ELR means choosing personalized and professional service, ensuring the complete automation of your business, including the implementation of full CRM and billing systems.\n","imgCard":"@/images/services/peinture.avif","imgMain":"@/images/services/peinture.avif","imgAlt":"Interior and exterior painting"},"tabs":[{"id":"tabs-with-card-item-1","dataTab":"#tabs-with-card-1","title":"Description"},{"id":"tabs-with-card-item-2","dataTab":"#tabs-with-card-2","title":"Specifications"},{"id":"tabs-with-card-item-3","dataTab":"#tabs-with-card-3","title":"Our Techniques"}],"longDescription":{"title":"Painting Services","subTitle":"At HORUSS, we specialize in interior and exterior painting services, offering customized solutions to beautify and protect your spaces. We use modern techniques and high-quality materials to ensure durable results.\n","btnTitle":"Contact us to learn more","btnURL":"/contact"},"descriptionList":[{"title":"Interior Painting","subTitle":"High-quality interior painting services to transform your living spaces."},{"title":"Exterior Painting","subTitle":"Exterior painting solutions to protect and beautify your buildings."},{"title":"Commercial Painting","subTitle":"Painting services for your commercial premises, ensuring a professional presentation."},{"title":"Color Consultation","subTitle":"Expert advice to choose colors that perfectly reflect your style and preferences."}],"specificationsLeft":[{"title":"Modern Techniques","subTitle":"Use of the latest painting techniques for impeccable results."},{"title":"Quality Materials","subTitle":"High-quality materials to ensure the durability and aesthetics of your surfaces."},{"title":"On-Time Completion","subTitle":"On-time completion to ensure your project is completed according to your expectations."},{"title":"Personalized Services","subTitle":"Customized solutions tailored to your specific painting needs."}],"specificationsRight":[{"title":"Surface Preparation","subTitle":"Meticulous surface preparation for optimal painting results."},{"title":"Impeccable Finishes","subTitle":"Impeccable finishes that highlight the beauty of your spaces."},{"title":"Maintenance and Repair","subTitle":"Maintenance and repair services to extend the life of your paintwork."},{"title":"Flexibility and Adaptability","subTitle":"Flexible and adaptable solutions for all types of projects, large or small."}],"blueprints":{"first":"@/images/services/colors.avif","second":"@/images/services/drop-b.avif"},"slug":"paint"};
				const file = "/Users/goon/Desktop/ELR-Agency/ELR-Agency/ELR Agency Clients/horuss-paint/src/content/enserv/peinture.md";
				const url = undefined;
				function rawContent() {
					return "";
				}
				function compiledContent() {
					return html;
				}
				function getHeadings() {
					return [];
				}

				const Content = createComponent((result, _props, slots) => {
					const { layout, ...content } = frontmatter;
					content.file = file;
					content.url = url;

					return renderTemplate`${maybeRenderHead()}${unescapeHTML(html)}`;
				});

export { Content, compiledContent, Content as default, file, frontmatter, getHeadings, rawContent, url };
