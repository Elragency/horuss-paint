const featureImage = new Proxy({"src":"/_astro/color-ex.CGfgR-CG.webp","width":4247,"height":2831,"format":"webp"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/goon/Desktop/ELR-Agency/ELR-Agency/ELR Agency Clients/horuss-paint/src/images/color-ex.webp";
							}
							if (target[name] !== undefined) globalThis.astroAsset.referencedImages.add("/Users/goon/Desktop/ELR-Agency/ELR-Agency/ELR Agency Clients/horuss-paint/src/images/color-ex.webp");
							return target[name];
						}
					});

const construction = new Proxy({"src":"/_astro/colors.CpbYYEWq.avif","width":1280,"height":851,"format":"avif"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/goon/Desktop/ELR-Agency/ELR-Agency/ELR Agency Clients/horuss-paint/src/images/colors.avif";
							}
							if (target[name] !== undefined) globalThis.astroAsset.referencedImages.add("/Users/goon/Desktop/ELR-Agency/ELR-Agency/ELR Agency Clients/horuss-paint/src/images/colors.avif");
							return target[name];
						}
					});

const tools = new Proxy({"src":"/_astro/design.DHSIn-K1.avif","width":1280,"height":850,"format":"avif"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/goon/Desktop/ELR-Agency/ELR-Agency/ELR Agency Clients/horuss-paint/src/images/design.avif";
							}
							if (target[name] !== undefined) globalThis.astroAsset.referencedImages.add("/Users/goon/Desktop/ELR-Agency/ELR-Agency/ELR Agency Clients/horuss-paint/src/images/design.avif");
							return target[name];
						}
					});

const dashboard = new Proxy({"src":"/_astro/result.w8MHn2nF.avif","width":1280,"height":853,"format":"avif"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/goon/Desktop/ELR-Agency/ELR-Agency/ELR Agency Clients/horuss-paint/src/images/result.avif";
							}
							if (target[name] !== undefined) globalThis.astroAsset.referencedImages.add("/Users/goon/Desktop/ELR-Agency/ELR-Agency/ELR Agency Clients/horuss-paint/src/images/result.avif");
							return target[name];
						}
					});

export { construction as c, dashboard as d, featureImage as f, tools as t };
