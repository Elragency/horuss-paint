import { b as createComponent, d as renderTemplate, m as maybeRenderHead, u as unescapeHTML } from './astro/server_BHOel7Fx.mjs';
import 'kleur/colors';
import 'clsx';

const html = "";

				const frontmatter = {"title":"Plâtre et Réparation de Mur","description":"Services de plâtre et réparation de mur de haute qualité","lang":"en","main":{"id":3,"content":"Un service de plâtre et de réparation de mur efficace est essentiel pour maintenir l'intégrité et l'esthétique de vos espaces. Choisir HORUSS, c'est choisir des solutions sur mesure, adaptées à vos besoins pour restaurer et améliorer vos murs avec des finitions impeccables.\n","imgCard":"@/images/services/platre.avif","imgMain":"@/images/services/platre-icon.avif","imgAlt":"Mockup boxes of a tap bolts and nuts set"},"tabs":[{"id":"tabs-with-card-item-1","dataTab":"#tabs-with-card-1","title":"Description"},{"id":"tabs-with-card-item-2","dataTab":"#tabs-with-card-2","title":"Specifications"},{"id":"tabs-with-card-item-3","dataTab":"#tabs-with-card-3","title":"Nos Résultats"}],"longDescription":{"title":"Services de Plâtre et Réparation de Mur","subTitle":"Chez HORUSS, nous proposons des solutions complètes de plâtrage et de réparation de mur, allant des petites réparations aux rénovations majeures. Notre expertise vous aide à restaurer l'intégrité et l'esthétique de vos espaces.\n","btnTitle":"Contactez-nous pour en savoir plus","btnURL":"/contact"},"descriptionList":[{"title":"Réparation de Fissures","subTitle":"Nous réparons les fissures et les dommages mineurs pour restaurer la solidité de vos murs."},{"title":"Plâtrage","subTitle":"Des services de plâtrage professionnels pour des surfaces lisses et prêtes à peindre."},{"title":"Rénovation de Mur","subTitle":"Rénovation complète des murs pour améliorer l'apparence et la fonctionnalité de vos espaces."},{"title":"Consultation et Devis","subTitle":"Des conseils d'experts et des devis personnalisés pour répondre à vos besoins spécifiques."}],"specificationsLeft":[{"title":"Techniques Modernes","subTitle":"Utilisation des dernières techniques de plâtrage et de réparation pour des résultats durables."},{"title":"Matériaux de Qualité","subTitle":"Des matériaux de haute qualité pour garantir la durabilité et l'esthétique de vos murs."},{"title":"Respect des Délais","subTitle":"Respect des délais pour assurer la réalisation de votre projet selon vos attentes."},{"title":"Services Personnalisés","subTitle":"Des solutions personnalisées adaptées à vos besoins spécifiques en matière de plâtrage et de réparation."}],"specificationsRight":[{"title":"Préparation de Surface","subTitle":"Préparation minutieuse des surfaces pour des résultats de plâtrage optimaux."},{"title":"Finitions Impeccables","subTitle":"Des finitions impeccables qui mettent en valeur la beauté de vos espaces."},{"title":"Maintenance et Réparation","subTitle":"Services de maintenance et de réparation pour prolonger la durée de vie de vos murs."},{"title":"Flexibilité et Adaptabilité","subTitle":"Des solutions flexibles et adaptables à tous types de projets, grands ou petits."}],"blueprints":{"first":"@/images/services/b4.avif","second":"@/images/services/b5.avif"},"slug":"platre"};
				const file = "/Users/goon/Desktop/ELR-Agency/ELR-Agency/ELR Agency Clients/horuss-paint/src/content/enserv/platre.md";
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
