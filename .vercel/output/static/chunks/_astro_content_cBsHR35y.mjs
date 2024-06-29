import pLimit from 'p-limit';
import { A as AstroError, U as UnknownContentCollectionError, p as prependForwardSlash } from './astro/assets-service_Dwqtw0BB.mjs';
import { b as createComponent, j as renderUniqueStylesheet, k as renderScriptElement, l as createHeadAndContent, d as renderTemplate, e as renderComponent, u as unescapeHTML } from './astro/server_BHOel7Fx.mjs';
import 'kleur/colors';

function createCollectionToGlobResultMap({
  globResult,
  contentDir
}) {
  const collectionToGlobResultMap = {};
  for (const key in globResult) {
    const keyRelativeToContentDir = key.replace(new RegExp(`^${contentDir}`), "");
    const segments = keyRelativeToContentDir.split("/");
    if (segments.length <= 1)
      continue;
    const collection = segments[0];
    collectionToGlobResultMap[collection] ??= {};
    collectionToGlobResultMap[collection][key] = globResult[key];
  }
  return collectionToGlobResultMap;
}
const cacheEntriesByCollection = /* @__PURE__ */ new Map();
function createGetCollection({
  contentCollectionToEntryMap,
  dataCollectionToEntryMap,
  getRenderEntryImport
}) {
  return async function getCollection(collection, filter) {
    let type;
    if (collection in contentCollectionToEntryMap) {
      type = "content";
    } else if (collection in dataCollectionToEntryMap) {
      type = "data";
    } else {
      console.warn(
        `The collection ${JSON.stringify(
          collection
        )} does not exist or is empty. Ensure a collection directory with this name exists.`
      );
      return [];
    }
    const lazyImports = Object.values(
      type === "content" ? contentCollectionToEntryMap[collection] : dataCollectionToEntryMap[collection]
    );
    let entries = [];
    if (!Object.assign({"BASE_URL": "/", "MODE": "production", "DEV": false, "PROD": true, "SSR": true, "SITE": "https://horuss.ca", "ASSETS_PREFIX": undefined}, { _: process.env._ })?.DEV && cacheEntriesByCollection.has(collection)) {
      entries = [...cacheEntriesByCollection.get(collection)];
    } else {
      const limit = pLimit(10);
      entries = await Promise.all(
        lazyImports.map(
          (lazyImport) => limit(async () => {
            const entry = await lazyImport();
            return type === "content" ? {
              id: entry.id,
              slug: entry.slug,
              body: entry.body,
              collection: entry.collection,
              data: entry.data,
              async render() {
                return render({
                  collection: entry.collection,
                  id: entry.id,
                  renderEntryImport: await getRenderEntryImport(collection, entry.slug)
                });
              }
            } : {
              id: entry.id,
              collection: entry.collection,
              data: entry.data
            };
          })
        )
      );
      cacheEntriesByCollection.set(collection, entries);
    }
    if (typeof filter === "function") {
      return entries.filter(filter);
    } else {
      return entries;
    }
  };
}
async function render({
  collection,
  id,
  renderEntryImport
}) {
  const UnexpectedRenderError = new AstroError({
    ...UnknownContentCollectionError,
    message: `Unexpected error while rendering ${String(collection)} → ${String(id)}.`
  });
  if (typeof renderEntryImport !== "function")
    throw UnexpectedRenderError;
  const baseMod = await renderEntryImport();
  if (baseMod == null || typeof baseMod !== "object")
    throw UnexpectedRenderError;
  const { default: defaultMod } = baseMod;
  if (isPropagatedAssetsModule(defaultMod)) {
    const { collectedStyles, collectedLinks, collectedScripts, getMod } = defaultMod;
    if (typeof getMod !== "function")
      throw UnexpectedRenderError;
    const propagationMod = await getMod();
    if (propagationMod == null || typeof propagationMod !== "object")
      throw UnexpectedRenderError;
    const Content = createComponent({
      factory(result, baseProps, slots) {
        let styles = "", links = "", scripts = "";
        if (Array.isArray(collectedStyles)) {
          styles = collectedStyles.map((style) => {
            return renderUniqueStylesheet(result, {
              type: "inline",
              content: style
            });
          }).join("");
        }
        if (Array.isArray(collectedLinks)) {
          links = collectedLinks.map((link) => {
            return renderUniqueStylesheet(result, {
              type: "external",
              src: prependForwardSlash(link)
            });
          }).join("");
        }
        if (Array.isArray(collectedScripts)) {
          scripts = collectedScripts.map((script) => renderScriptElement(script)).join("");
        }
        let props = baseProps;
        if (id.endsWith("mdx")) {
          props = {
            components: propagationMod.components ?? {},
            ...baseProps
          };
        }
        return createHeadAndContent(
          unescapeHTML(styles + links + scripts),
          renderTemplate`${renderComponent(
            result,
            "Content",
            propagationMod.Content,
            props,
            slots
          )}`
        );
      },
      propagation: "self"
    });
    return {
      Content,
      headings: propagationMod.getHeadings?.() ?? [],
      remarkPluginFrontmatter: propagationMod.frontmatter ?? {}
    };
  } else if (baseMod.Content && typeof baseMod.Content === "function") {
    return {
      Content: baseMod.Content,
      headings: baseMod.getHeadings?.() ?? [],
      remarkPluginFrontmatter: baseMod.frontmatter ?? {}
    };
  } else {
    throw UnexpectedRenderError;
  }
}
function isPropagatedAssetsModule(module) {
  return typeof module === "object" && module != null && "__astroPropagation" in module;
}

// astro-head-inject

const contentDir = '/src/content/';

const contentEntryGlob = /* #__PURE__ */ Object.assign({"/src/content/blog/couleur.md": () => import('./couleur_CGoDQ6iD.mjs'),"/src/content/blog/cout.md": () => import('./cout_8r6DefJi.mjs'),"/src/content/blog/horuss.md": () => import('./horuss_SqIMd6hW.mjs'),"/src/content/blog/outils-techno.md": () => import('./outils-techno_CSO_JsTe.mjs'),"/src/content/blog/reparation-platre.md": () => import('./reparation-platre_5iCQXD8Q.mjs'),"/src/content/docs/advanced/technical-specifications.mdx": () => import('./technical-specifications_PxrhpaET.mjs'),"/src/content/docs/construction/custom-solutions.mdx": () => import('./custom-solutions_CNtZ6dKT.mjs'),"/src/content/docs/construction/project-planning.mdx": () => import('./project-planning_DGRX8MVV.mjs'),"/src/content/docs/construction/safety.mdx": () => import('./safety_Bm63OgB_.mjs'),"/src/content/docs/construction/service-overview.mdx": () => import('./service-overview_BUcErCET.mjs'),"/src/content/docs/de/guides/first-project-checklist.mdx": () => import('./first-project-checklist_DW_4_u4N.mjs'),"/src/content/docs/de/guides/getting-started.mdx": () => import('./getting-started_hMkXCKLE.mjs'),"/src/content/docs/de/guides/intro.mdx": () => import('./intro_CpSp2STt.mjs'),"/src/content/docs/de/welcome-to-docs.mdx": () => import('./welcome-to-docs_Duj6oBih.mjs'),"/src/content/docs/es/guides/first-project-checklist.mdx": () => import('./first-project-checklist_Cbrh3FcH.mjs'),"/src/content/docs/es/guides/getting-started.mdx": () => import('./getting-started_CA3HpDPZ.mjs'),"/src/content/docs/es/guides/intro.mdx": () => import('./intro_V1hp8e9v.mjs'),"/src/content/docs/es/welcome-to-docs.mdx": () => import('./welcome-to-docs_ByBLVT37.mjs'),"/src/content/docs/fa/guides/first-project-checklist.mdx": () => import('./first-project-checklist_PJFsy1eh.mjs'),"/src/content/docs/fa/guides/getting-started.mdx": () => import('./getting-started_BvQioq3m.mjs'),"/src/content/docs/fa/guides/intro.mdx": () => import('./intro_Dpi5EEG7.mjs'),"/src/content/docs/fa/welcome-to-docs.mdx": () => import('./welcome-to-docs_VxUnS1X8.mjs'),"/src/content/docs/fr/guides/first-project-checklist.mdx": () => import('./first-project-checklist_B3X4U5uy.mjs'),"/src/content/docs/fr/guides/getting-started.mdx": () => import('./getting-started_B19gOwY5.mjs'),"/src/content/docs/fr/guides/intro.mdx": () => import('./intro_C8bKksAS.mjs'),"/src/content/docs/fr/welcome-to-docs.mdx": () => import('./welcome-to-docs_B4DNJ44e.mjs'),"/src/content/docs/guides/first-project-checklist.mdx": () => import('./first-project-checklist_CMvWIlky.mjs'),"/src/content/docs/guides/getting-started.mdx": () => import('./getting-started_DtnkC8M9.mjs'),"/src/content/docs/guides/intro.mdx": () => import('./intro_D00qNNa5.mjs'),"/src/content/docs/ja/guides/first-project-checklist.mdx": () => import('./first-project-checklist_EhNHIQ_1.mjs'),"/src/content/docs/ja/guides/getting-started.mdx": () => import('./getting-started_WuU-ZSWU.mjs'),"/src/content/docs/ja/guides/intro.mdx": () => import('./intro_BsWOIXfj.mjs'),"/src/content/docs/ja/welcome-to-docs.mdx": () => import('./welcome-to-docs_BobT72D7.mjs'),"/src/content/docs/tools/equipment-care.mdx": () => import('./equipment-care_CCZLVqIx.mjs'),"/src/content/docs/tools/tool-guides.mdx": () => import('./tool-guides_BJAsr1EJ.mjs'),"/src/content/docs/welcome-to-docs.mdx": () => import('./welcome-to-docs_CeUeAFQp.mjs'),"/src/content/docs/zh-cn/guides/first-project-checklist.mdx": () => import('./first-project-checklist_GdFRX0HW.mjs'),"/src/content/docs/zh-cn/guides/getting-started.mdx": () => import('./getting-started_BcyGW-Kr.mjs'),"/src/content/docs/zh-cn/guides/intro.mdx": () => import('./intro_C6hYoQn0.mjs'),"/src/content/docs/zh-cn/welcome-to-docs.mdx": () => import('./welcome-to-docs_Bva66sGT.mjs'),"/src/content/enserv/peinture.md": () => import('./peinture_CB33cdRk.mjs'),"/src/content/enserv/platre.md": () => import('./platre_C37zEw_J.mjs'),"/src/content/insights/insight-2.md": () => import('./insight-2_BiOci55q.mjs'),"/src/content/insights/insight-3.md": () => import('./insight-3_CuCzV5ja.mjs'),"/src/content/insights/k-constructions.md": () => import('./k-constructions_BIwPhVtr.mjs'),"/src/content/services/peinture.md": () => import('./peinture_s_OErUJK.mjs'),"/src/content/services/platre.md": () => import('./platre_JEELYz66.mjs')});
const contentCollectionToEntryMap = createCollectionToGlobResultMap({
	globResult: contentEntryGlob,
	contentDir,
});

const dataEntryGlob = /* #__PURE__ */ Object.assign({});
const dataCollectionToEntryMap = createCollectionToGlobResultMap({
	globResult: dataEntryGlob,
	contentDir,
});
createCollectionToGlobResultMap({
	globResult: { ...contentEntryGlob, ...dataEntryGlob },
	contentDir,
});

let lookupMap = {};
lookupMap = {"blog":{"type":"content","entries":{"couleur":"/src/content/blog/couleur.md","outils-techno":"/src/content/blog/outils-techno.md","horuss":"/src/content/blog/horuss.md","cout":"/src/content/blog/cout.md","reparation-platre":"/src/content/blog/reparation-platre.md"}},"enserv":{"type":"content","entries":{"paint":"/src/content/enserv/peinture.md","platre":"/src/content/enserv/platre.md"}},"docs":{"type":"content","entries":{"welcome-to-docs":"/src/content/docs/welcome-to-docs.mdx","advanced/technical-specifications":"/src/content/docs/advanced/technical-specifications.mdx","construction/custom-solutions":"/src/content/docs/construction/custom-solutions.mdx","construction/project-planning":"/src/content/docs/construction/project-planning.mdx","construction/safety":"/src/content/docs/construction/safety.mdx","construction/service-overview":"/src/content/docs/construction/service-overview.mdx","es/welcome-to-docs":"/src/content/docs/es/welcome-to-docs.mdx","de/welcome-to-docs":"/src/content/docs/de/welcome-to-docs.mdx","fr/welcome-to-docs":"/src/content/docs/fr/welcome-to-docs.mdx","fa/welcome-to-docs":"/src/content/docs/fa/welcome-to-docs.mdx","guides/first-project-checklist":"/src/content/docs/guides/first-project-checklist.mdx","guides/getting-started":"/src/content/docs/guides/getting-started.mdx","guides/intro":"/src/content/docs/guides/intro.mdx","ja/welcome-to-docs":"/src/content/docs/ja/welcome-to-docs.mdx","tools/equipment-care":"/src/content/docs/tools/equipment-care.mdx","tools/tool-guides":"/src/content/docs/tools/tool-guides.mdx","zh-cn/welcome-to-docs":"/src/content/docs/zh-cn/welcome-to-docs.mdx","es/guides/first-project-checklist":"/src/content/docs/es/guides/first-project-checklist.mdx","es/guides/getting-started":"/src/content/docs/es/guides/getting-started.mdx","es/guides/intro":"/src/content/docs/es/guides/intro.mdx","de/guides/first-project-checklist":"/src/content/docs/de/guides/first-project-checklist.mdx","de/guides/getting-started":"/src/content/docs/de/guides/getting-started.mdx","de/guides/intro":"/src/content/docs/de/guides/intro.mdx","fa/guides/first-project-checklist":"/src/content/docs/fa/guides/first-project-checklist.mdx","fa/guides/getting-started":"/src/content/docs/fa/guides/getting-started.mdx","fa/guides/intro":"/src/content/docs/fa/guides/intro.mdx","fr/guides/first-project-checklist":"/src/content/docs/fr/guides/first-project-checklist.mdx","fr/guides/getting-started":"/src/content/docs/fr/guides/getting-started.mdx","fr/guides/intro":"/src/content/docs/fr/guides/intro.mdx","ja/guides/first-project-checklist":"/src/content/docs/ja/guides/first-project-checklist.mdx","ja/guides/getting-started":"/src/content/docs/ja/guides/getting-started.mdx","ja/guides/intro":"/src/content/docs/ja/guides/intro.mdx","zh-cn/guides/first-project-checklist":"/src/content/docs/zh-cn/guides/first-project-checklist.mdx","zh-cn/guides/getting-started":"/src/content/docs/zh-cn/guides/getting-started.mdx","zh-cn/guides/intro":"/src/content/docs/zh-cn/guides/intro.mdx"}},"insights":{"type":"content","entries":{"insight-2":"/src/content/insights/insight-2.md","insight-3":"/src/content/insights/insight-3.md","k-constructions":"/src/content/insights/k-constructions.md"}},"services":{"type":"content","entries":{"peinture":"/src/content/services/peinture.md","platre":"/src/content/services/platre.md"}}};

function createGlobLookup(glob) {
	return async (collection, lookupId) => {
		const filePath = lookupMap[collection]?.entries[lookupId];

		if (!filePath) return undefined;
		return glob[collection][filePath];
	};
}

const renderEntryGlob = /* #__PURE__ */ Object.assign({"/src/content/blog/couleur.md": () => import('./couleur_Bhq9aVAn.mjs'),"/src/content/blog/cout.md": () => import('./cout_Dysp1Kue.mjs'),"/src/content/blog/horuss.md": () => import('./horuss_C9MqCzjy.mjs'),"/src/content/blog/outils-techno.md": () => import('./outils-techno_AdTS2eHN.mjs'),"/src/content/blog/reparation-platre.md": () => import('./reparation-platre_BBaPn2mt.mjs'),"/src/content/docs/advanced/technical-specifications.mdx": () => import('./technical-specifications_DXRERRXW.mjs'),"/src/content/docs/construction/custom-solutions.mdx": () => import('./custom-solutions_DjxZQLif.mjs'),"/src/content/docs/construction/project-planning.mdx": () => import('./project-planning_CHGP-8Fk.mjs'),"/src/content/docs/construction/safety.mdx": () => import('./safety_DaI9_L_y.mjs'),"/src/content/docs/construction/service-overview.mdx": () => import('./service-overview_BMM97gxw.mjs'),"/src/content/docs/de/guides/first-project-checklist.mdx": () => import('./first-project-checklist_CNC4-cdS.mjs'),"/src/content/docs/de/guides/getting-started.mdx": () => import('./getting-started_BZRJj0if.mjs'),"/src/content/docs/de/guides/intro.mdx": () => import('./intro_CFERO3uw.mjs'),"/src/content/docs/de/welcome-to-docs.mdx": () => import('./welcome-to-docs_07y7iR88.mjs'),"/src/content/docs/es/guides/first-project-checklist.mdx": () => import('./first-project-checklist_BNbDXfVF.mjs'),"/src/content/docs/es/guides/getting-started.mdx": () => import('./getting-started_DHlBCiNY.mjs'),"/src/content/docs/es/guides/intro.mdx": () => import('./intro_Dp71L5Kv.mjs'),"/src/content/docs/es/welcome-to-docs.mdx": () => import('./welcome-to-docs_Ad7DSczx.mjs'),"/src/content/docs/fa/guides/first-project-checklist.mdx": () => import('./first-project-checklist_Dp6CMkVx.mjs'),"/src/content/docs/fa/guides/getting-started.mdx": () => import('./getting-started_jvYGKDTA.mjs'),"/src/content/docs/fa/guides/intro.mdx": () => import('./intro_BIsZco91.mjs'),"/src/content/docs/fa/welcome-to-docs.mdx": () => import('./welcome-to-docs_BqzW0KNe.mjs'),"/src/content/docs/fr/guides/first-project-checklist.mdx": () => import('./first-project-checklist_Bs2fkUF4.mjs'),"/src/content/docs/fr/guides/getting-started.mdx": () => import('./getting-started_D9JXtoiq.mjs'),"/src/content/docs/fr/guides/intro.mdx": () => import('./intro_WbzKaO1v.mjs'),"/src/content/docs/fr/welcome-to-docs.mdx": () => import('./welcome-to-docs_IBc-SHrd.mjs'),"/src/content/docs/guides/first-project-checklist.mdx": () => import('./first-project-checklist_CeR7ssb_.mjs'),"/src/content/docs/guides/getting-started.mdx": () => import('./getting-started_e42ltvWq.mjs'),"/src/content/docs/guides/intro.mdx": () => import('./intro_DIWIt539.mjs'),"/src/content/docs/ja/guides/first-project-checklist.mdx": () => import('./first-project-checklist_BTk7HS5k.mjs'),"/src/content/docs/ja/guides/getting-started.mdx": () => import('./getting-started_CTfhCb-j.mjs'),"/src/content/docs/ja/guides/intro.mdx": () => import('./intro_CA4hQEmN.mjs'),"/src/content/docs/ja/welcome-to-docs.mdx": () => import('./welcome-to-docs_DfWqPb_Z.mjs'),"/src/content/docs/tools/equipment-care.mdx": () => import('./equipment-care_r-11Qfku.mjs'),"/src/content/docs/tools/tool-guides.mdx": () => import('./tool-guides_DF057J-O.mjs'),"/src/content/docs/welcome-to-docs.mdx": () => import('./welcome-to-docs_DQEJTnl7.mjs'),"/src/content/docs/zh-cn/guides/first-project-checklist.mdx": () => import('./first-project-checklist_CMImvUvy.mjs'),"/src/content/docs/zh-cn/guides/getting-started.mdx": () => import('./getting-started_CX3QBWyZ.mjs'),"/src/content/docs/zh-cn/guides/intro.mdx": () => import('./intro_-6D3hMOS.mjs'),"/src/content/docs/zh-cn/welcome-to-docs.mdx": () => import('./welcome-to-docs_dNpLkNZI.mjs'),"/src/content/enserv/peinture.md": () => import('./peinture_BuZcvI5E.mjs'),"/src/content/enserv/platre.md": () => import('./platre_DfkdFl86.mjs'),"/src/content/insights/insight-2.md": () => import('./insight-2_7Wc3HYlw.mjs'),"/src/content/insights/insight-3.md": () => import('./insight-3_DI-sjbYO.mjs'),"/src/content/insights/k-constructions.md": () => import('./k-constructions_BVn2rmxT.mjs'),"/src/content/services/peinture.md": () => import('./peinture_C_l06S5j.mjs'),"/src/content/services/platre.md": () => import('./platre_BquSoIqy.mjs')});
const collectionToRenderEntryMap = createCollectionToGlobResultMap({
	globResult: renderEntryGlob,
	contentDir,
});

const getCollection = createGetCollection({
	contentCollectionToEntryMap,
	dataCollectionToEntryMap,
	getRenderEntryImport: createGlobLookup(collectionToRenderEntryMap),
});

export { getCollection as g };
