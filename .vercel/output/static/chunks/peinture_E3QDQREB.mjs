import { b as createComponent, d as renderTemplate, m as maybeRenderHead, u as unescapeHTML } from './astro/server_BHOel7Fx.mjs';
import 'kleur/colors';
import 'clsx';

const html = "";

				const frontmatter = {"title":"Peinture","description":"Des services de peinture professionnelle pour tous vos besoins","lang":"fr","main":{"id":2,"content":"Choisir Agence ELR, c'est choisir un service personnalisé et professionnel, garantissant l'automatisation complète de votre entreprise, y compris la mise en place de systèmes CRM et de facturation complète.\n","imgCard":"@/images/services/peinture.avif","imgMain":"@/images/services/peinture.avif","imgAlt":"Peinture intérieure et extérieure"},"tabs":[{"id":"tabs-with-card-item-1","dataTab":"#tabs-with-card-1","title":"Description"},{"id":"tabs-with-card-item-2","dataTab":"#tabs-with-card-2","title":"Spécifications"},{"id":"tabs-with-card-item-3","dataTab":"#tabs-with-card-3","title":"Nos Techniques"}],"longDescription":{"title":"Services de Peinture","subTitle":"Chez HORUSS, nous nous spécialisons dans les services de peinture intérieure et extérieure, offrant des solutions personnalisées pour embellir et protéger vos espaces. Nous utilisons des techniques modernes et des matériaux de haute qualité pour garantir des résultats durables.\n","btnTitle":"Contactez-nous pour en savoir plus","btnURL":"/contact"},"descriptionList":[{"title":"Peinture Intérieure","subTitle":"Des services de peinture intérieure de haute qualité pour transformer vos espaces de vie."},{"title":"Peinture Extérieure","subTitle":"Des solutions de peinture extérieure pour protéger et embellir vos bâtiments."},{"title":"Peinture Commerciale","subTitle":"Des services de peinture pour vos locaux commerciaux, assurant une présentation professionnelle."},{"title":"Consultation en Couleurs","subTitle":"Des conseils d'experts pour choisir les couleurs qui reflètent parfaitement votre style et vos préférences."}],"specificationsLeft":[{"title":"Techniques Modernes","subTitle":"Utilisation des dernières techniques de peinture pour des résultats impeccables."},{"title":"Matériaux de Qualité","subTitle":"Des matériaux de haute qualité pour garantir la durabilité et l'esthétique de vos surfaces."},{"title":"Respect des Délais","subTitle":"Respect des délais pour assurer la réalisation de votre projet selon vos attentes."},{"title":"Services Personnalisés","subTitle":"Des solutions personnalisées adaptées à vos besoins spécifiques en matière de peinture."}],"specificationsRight":[{"title":"Préparation de Surface","subTitle":"Préparation minutieuse des surfaces pour des résultats de peinture optimaux."},{"title":"Finitions Impeccables","subTitle":"Des finitions impeccables qui mettent en valeur la beauté de vos espaces."},{"title":"Maintenance et Réparation","subTitle":"Services de maintenance et de réparation pour prolonger la durée de vie de vos peintures."},{"title":"Flexibilité et Adaptabilité","subTitle":"Des solutions flexibles et adaptables à tous types de projets, grands ou petits."}],"blueprints":{"first":"@/images/services/colors.avif","second":"@/images/services/drop-b.avif"},"slug":"peinture"};
				const file = "/Users/goon/Desktop/ELR-Agency/ELR-Agency/ELR Agency Clients/horuss-paint/src/content/services/peinture.md";
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
