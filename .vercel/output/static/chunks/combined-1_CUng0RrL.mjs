const featureImage = new Proxy({"src":"/_astro/combined-1.BcQ15O7f.webp","width":1920,"height":1080,"format":"webp"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/goon/Desktop/ELR-Agency/ELR-Agency/ELR Agency Clients/horuss-paint/src/images/combined-1.webp";
							}
							if (target[name] !== undefined) globalThis.astroAsset.referencedImages.add("/Users/goon/Desktop/ELR-Agency/ELR-Agency/ELR Agency Clients/horuss-paint/src/images/combined-1.webp");
							return target[name];
						}
					});

export { featureImage as f };
