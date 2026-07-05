//#region \0tanstack-start-manifest:v
var tsrStartManifest = () => ({ routes: {
	__root__: {
		filePath: "/Users/rahulgupta/rahul_work/cloudflare-projects/agency-website-starter-template/src/routes/__root.tsx",
		children: [
			"/",
			"/about",
			"/contact",
			"/services"
		],
		preloads: ["/assets/index-CKM1VI9c.js"],
		scripts: [{ attrs: {
			type: "module",
			async: !0,
			src: "/assets/index-CKM1VI9c.js"
		} }]
	},
	"/": {
		filePath: "/Users/rahulgupta/rahul_work/cloudflare-projects/agency-website-starter-template/src/routes/index.tsx",
		children: void 0,
		preloads: [
			"/assets/routes-BInxrsFK.js",
			"/assets/card-DEZcfqUN.js",
			"/assets/CTABanner-B42OLMFq.js",
			"/assets/TrustBadges-BO0X2Zxt.js"
		]
	},
	"/about": {
		filePath: "/Users/rahulgupta/rahul_work/cloudflare-projects/agency-website-starter-template/src/routes/about.tsx",
		children: void 0,
		preloads: [
			"/assets/about-BBCRIjfb.js",
			"/assets/HeroCentered-DZtn_Yvp.js",
			"/assets/useOnMount-C8dcIK95.js",
			"/assets/card-DEZcfqUN.js",
			"/assets/TrustBadges-BO0X2Zxt.js"
		]
	},
	"/contact": {
		filePath: "/Users/rahulgupta/rahul_work/cloudflare-projects/agency-website-starter-template/src/routes/contact.tsx",
		children: void 0,
		preloads: [
			"/assets/contact-8oafujuj.js",
			"/assets/HeroCentered-DZtn_Yvp.js",
			"/assets/createBaseUIEventDetails-xdIGvm5d.js"
		]
	},
	"/services": {
		filePath: "/Users/rahulgupta/rahul_work/cloudflare-projects/agency-website-starter-template/src/routes/services.tsx",
		children: ["/services/$slug"],
		preloads: [
			"/assets/services-CRH82BYK.js",
			"/assets/HeroCentered-DZtn_Yvp.js",
			"/assets/createBaseUIEventDetails-xdIGvm5d.js",
			"/assets/useOnMount-C8dcIK95.js",
			"/assets/CTABanner-B42OLMFq.js"
		]
	},
	"/services/$slug": {
		filePath: "/Users/rahulgupta/rahul_work/cloudflare-projects/agency-website-starter-template/src/routes/services.$slug.tsx",
		children: void 0,
		preloads: ["/assets/services._slug-DYHelnuM.js"]
	}
} });
//#endregion
export { tsrStartManifest };
