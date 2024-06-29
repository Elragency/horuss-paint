const icon = new Proxy({"src":"/_astro/icon.BG4q7gwL.png","width":1080,"height":1080,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/goon/Desktop/ELR-Agency/ELR-Agency/ELR Agency Clients/horuss-paint/src/images/icon.png";
							}
							if (target[name] !== undefined) globalThis.astroAsset.referencedImages.add("/Users/goon/Desktop/ELR-Agency/ELR-Agency/ELR Agency Clients/horuss-paint/src/images/icon.png");
							return target[name];
						}
					});

export { icon as i };
