const construction = new Proxy({"src":"/_astro/construction-image.DjyQ_FS4.avif","width":1974,"height":2961,"format":"avif"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/goon/Desktop/ELR-Agency/ELR-Agency/ELR Agency Clients/horuss-paint/src/images/construction-image.avif";
							}
							if (target[name] !== undefined) globalThis.astroAsset.referencedImages.add("/Users/goon/Desktop/ELR-Agency/ELR-Agency/ELR Agency Clients/horuss-paint/src/images/construction-image.avif");
							return target[name];
						}
					});

const tools = new Proxy({"src":"/_astro/automated-tools.DRMewEJS.avif","width":2067,"height":1384,"format":"avif"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/goon/Desktop/ELR-Agency/ELR-Agency/ELR Agency Clients/horuss-paint/src/images/automated-tools.avif";
							}
							if (target[name] !== undefined) globalThis.astroAsset.referencedImages.add("/Users/goon/Desktop/ELR-Agency/ELR-Agency/ELR Agency Clients/horuss-paint/src/images/automated-tools.avif");
							return target[name];
						}
					});

const dashboard = new Proxy({"src":"/_astro/dashboard-image.DUm-YPUR.avif","width":1920,"height":1920,"format":"avif"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/goon/Desktop/ELR-Agency/ELR-Agency/ELR Agency Clients/horuss-paint/src/images/dashboard-image.avif";
							}
							if (target[name] !== undefined) globalThis.astroAsset.referencedImages.add("/Users/goon/Desktop/ELR-Agency/ELR-Agency/ELR Agency Clients/horuss-paint/src/images/dashboard-image.avif");
							return target[name];
						}
					});

export { construction as c, dashboard as d, tools as t };
