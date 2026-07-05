import { N as escapeHtml, Y as __toESM, c as require_jsx_runtime, i as useRouter, j as deepEqual, n as useStore, q as require_react, s as useHydrated } from "./react-dom-D3rPRm8N.js";
import { n as useStructuralSharing } from "./useMatch-CV-OaCK4.js";
import { _ as createNonReactiveReadonlyStore, a as appendUniqueUserTags, c as getAssetCrossOrigin, f as resolveManifestCssLink, g as createNonReactiveMutableStore, i as ErrorComponent, l as getScriptPreloadAttrs, p as RouterCore } from "./atom-BYRlfX_O.js";
import { l as cn, t as Button, v as siteConfig, y as Link } from "./button-lECp910C.js";
import { a as createRootRoute, i as createFileRoute, n as seo, r as lazyRouteComponent, t as Route$5 } from "./services._slug-CNLgBEbF.js";
import { i as Toaster$1, n as Phone, r as LoaderCircle, t as Separator } from "./separator-MLZU8JxO.js";
import { t as createLucideIcon } from "./createLucideIcon-BxiIRgK4.js";
//#region node_modules/@tanstack/react-router/dist/esm/routerStores.js
var getStoreFactory = (opts) => {
	return {
		createMutableStore: createNonReactiveMutableStore,
		createReadonlyStore: createNonReactiveReadonlyStore,
		batch: (fn) => fn()
	};
};
//#endregion
//#region node_modules/@tanstack/react-router/dist/esm/router.js
/**
* Creates a new Router instance for React.
*
* Pass the returned router to `RouterProvider` to enable routing.
* Notable options: `routeTree` (your route definitions) and `context`
* (required if the root route was created with `createRootRouteWithContext`).
*
* @param options Router options used to configure the router.
* @returns A Router instance to be provided to `RouterProvider`.
* @link https://tanstack.com/router/latest/docs/framework/react/api/router/createRouterFunction
*/
var createRouter = (options) => {
	return new Router(options);
};
var Router = class extends RouterCore {
	constructor(options) {
		super(options, getStoreFactory);
	}
};
//#endregion
//#region node_modules/@tanstack/react-router/dist/esm/useLocation.js
/**
* Read the current location from the router state with optional selection.
* Useful for subscribing to just the pieces of location you care about.
*
* Options:
* - `select`: Project the `location` object to a derived value
* - `structuralSharing`: Enable structural sharing for stable references
*
* @returns The current location (or selected value).
* @link https://tanstack.com/router/latest/docs/framework/react/api/router/useLocationHook
*/
function useLocation(opts) {
	const router = useRouter();
	{
		const location = router.stores.location.get();
		return opts?.select ? opts.select(location) : location;
	}
	return useStore(router.stores.location, useStructuralSharing(opts, router));
}
//#endregion
//#region node_modules/@tanstack/react-router/dist/esm/Asset.js
var import_react = /* @__PURE__ */ __toESM(require_react(), 1);
var import_jsx_runtime = require_jsx_runtime();
var noopScriptHandler = () => {};
function setScriptAttrs(script, attrs) {
	if (!attrs) return;
	for (const [key, value] of Object.entries(attrs)) if (key !== "suppressHydrationWarning" && value !== void 0 && value !== false) script.setAttribute(key, typeof value === "boolean" ? "" : String(value));
}
function Asset(asset) {
	const { attrs, children, nonce, preventScriptHoist } = asset;
	switch (asset.tag) {
		case "title": return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("title", {
			...attrs,
			suppressHydrationWarning: true,
			children
		});
		case "meta": return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("meta", {
			...attrs,
			suppressHydrationWarning: true
		});
		case "link": return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("link", {
			...attrs,
			precedence: attrs?.precedence ?? (attrs?.rel === "stylesheet" ? "default" : void 0),
			nonce,
			suppressHydrationWarning: true
		});
		case "style":
			if (asset.inlineCss && false);
			return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("style", {
				...attrs,
				dangerouslySetInnerHTML: { __html: children },
				nonce
			});
		case "script": return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Script, {
			attrs,
			preventScriptHoist,
			children
		});
		default: return null;
	}
}
function Script({ attrs, children, preventScriptHoist }) {
	useRouter();
	useHydrated();
	const dataScript = typeof attrs?.type === "string" && attrs.type !== "" && attrs.type !== "text/javascript" && attrs.type !== "module";
	import_react.useEffect(() => {
		if (dataScript) return;
		if (attrs?.src) {
			const normSrc = (() => {
				try {
					const base = document.baseURI || window.location.href;
					return new URL(attrs.src, base).href;
				} catch {
					return attrs.src;
				}
			})();
			for (const el of document.querySelectorAll("script[src]")) if (el.src === normSrc) return;
			const script = document.createElement("script");
			setScriptAttrs(script, attrs);
			document.head.appendChild(script);
			return () => script.remove();
		}
		if (typeof children === "string") {
			const typeAttr = typeof attrs?.type === "string" ? attrs.type : "text/javascript";
			const nonceAttr = typeof attrs?.nonce === "string" ? attrs.nonce : void 0;
			for (const el of document.querySelectorAll("script:not([src])")) {
				if (!(el instanceof HTMLScriptElement)) continue;
				const sType = el.getAttribute("type") ?? "text/javascript";
				const sNonce = el.getAttribute("nonce") ?? void 0;
				if (el.textContent === children && sType === typeAttr && sNonce === nonceAttr) return;
			}
			const script = document.createElement("script");
			script.textContent = children;
			setScriptAttrs(script, attrs);
			document.head.appendChild(script);
			return () => script.remove();
		}
	}, [
		attrs,
		children,
		dataScript
	]);
	if (attrs?.src) {
		if (!preventScriptHoist) return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("script", {
			...attrs,
			suppressHydrationWarning: true
		});
		return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("script", {
			...attrs,
			onLoad: noopScriptHandler,
			suppressHydrationWarning: true
		});
	}
	if (typeof children === "string") return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("script", {
		...attrs,
		dangerouslySetInnerHTML: { __html: children },
		suppressHydrationWarning: true
	});
	return null;
}
//#endregion
//#region node_modules/@tanstack/react-router/dist/esm/headContentUtils.js
function buildTagsFromMatches(router, nonce, matches, assetCrossOrigin) {
	const routeMeta = matches.map((match) => match.meta).filter((meta) => meta !== void 0);
	const resultMeta = [];
	const metaByAttribute = {};
	let title;
	for (let i = routeMeta.length - 1; i >= 0; i--) {
		const metas = routeMeta[i];
		for (let j = metas.length - 1; j >= 0; j--) {
			const m = metas[j];
			if (!m) continue;
			if (m.title) {
				if (!title) title = {
					tag: "title",
					children: m.title
				};
			} else if ("script:ld+json" in m) try {
				const json = JSON.stringify(m["script:ld+json"]);
				resultMeta.push({
					tag: "script",
					attrs: { type: "application/ld+json" },
					children: escapeHtml(json)
				});
			} catch {}
			else {
				const attribute = m.name ?? m.property;
				if (attribute) if (metaByAttribute[attribute]) continue;
				else metaByAttribute[attribute] = true;
				resultMeta.push({
					tag: "meta",
					attrs: {
						...m,
						nonce
					}
				});
			}
		}
	}
	if (title) resultMeta.push(title);
	if (nonce) resultMeta.push({
		tag: "meta",
		attrs: {
			property: "csp-nonce",
			content: nonce
		}
	});
	resultMeta.reverse();
	const constructedLinks = matches.flatMap((match) => match.links ?? []).filter((link) => link !== void 0).map((link) => ({
		tag: "link",
		attrs: {
			...link,
			nonce
		}
	}));
	const manifest = router.ssr?.manifest;
	const manifestCssTags = [];
	if (manifest) {
		matches.forEach((match) => {
			(manifest.routes[match.routeId]?.css)?.forEach((link) => {
				const resolvedLink = resolveManifestCssLink(link);
				manifestCssTags.push({
					tag: "link",
					attrs: {
						rel: "stylesheet",
						...resolvedLink,
						crossOrigin: getAssetCrossOrigin(assetCrossOrigin, "stylesheet") ?? resolvedLink.crossOrigin,
						suppressHydrationWarning: true,
						nonce
					}
				});
			});
		});
		if (manifest.inlineStyle) manifestCssTags.push({
			tag: "style",
			attrs: {
				...manifest.inlineStyle.attrs,
				nonce
			},
			children: manifest.inlineStyle.children,
			inlineCss: true
		});
	}
	const preloadLinks = [];
	if (manifest) matches.forEach((match) => {
		manifest.routes[match.routeId]?.preloads?.forEach((preload) => {
			preloadLinks.push({
				tag: "link",
				attrs: {
					...getScriptPreloadAttrs(manifest, preload, assetCrossOrigin),
					nonce
				}
			});
		});
	});
	const styles = matches.flatMap((match) => match.styles ?? []).filter((style) => style !== void 0).map(({ children, ...attrs }) => ({
		tag: "style",
		attrs: {
			...attrs,
			nonce
		},
		children
	}));
	const headScripts = matches.flatMap((match) => match.headScripts ?? []).filter((script) => script !== void 0).map(({ children, ...script }) => ({
		tag: "script",
		attrs: {
			...script,
			nonce
		},
		children
	}));
	const tags = [];
	appendUniqueUserTags(tags, resultMeta);
	tags.push(...preloadLinks);
	appendUniqueUserTags(tags, constructedLinks);
	tags.push(...manifestCssTags);
	appendUniqueUserTags(tags, styles);
	appendUniqueUserTags(tags, headScripts);
	return tags;
}
/**
* Build the list of head/link/meta/script tags to render for active matches.
* Used internally by `HeadContent`.
*/
var useTags = (assetCrossOrigin) => {
	const router = useRouter();
	const nonce = router.options.ssr?.nonce;
	return buildTagsFromMatches(router, nonce, router.stores.matches.get(), assetCrossOrigin);
};
//#endregion
//#region node_modules/@tanstack/react-router/dist/esm/HeadContent.js
/**
* Render route-managed head tags (title, meta, links, styles, head scripts).
* Place inside the document head of your app shell.
* @link https://tanstack.com/router/latest/docs/framework/react/guide/document-head-management
*/
function HeadContent(props) {
	const tags = useTags(props.assetCrossOrigin);
	const nonce = useRouter().options.ssr?.nonce;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_jsx_runtime.Fragment, { children: tags.map((tag) => /* @__PURE__ */ (0, import_react.createElement)(Asset, {
		...tag,
		key: `tsr-meta-${JSON.stringify(tag)}`,
		nonce
	})) });
}
//#endregion
//#region node_modules/@tanstack/react-router/dist/esm/Scripts.js
/**
* Render body script tags collected from route matches and SSR manifests.
* Should be placed near the end of the document body.
*/
var Scripts = () => {
	const router = useRouter();
	const nonce = router.options.ssr?.nonce;
	const getAssetScripts = (matches) => {
		const assetScripts = [];
		const manifest = router.ssr?.manifest;
		if (!manifest) return [];
		for (const match of matches) {
			const scripts = manifest.routes[match.routeId]?.scripts;
			if (!scripts) continue;
			for (const asset of scripts) assetScripts.push({
				tag: "script",
				attrs: {
					...asset.attrs,
					nonce
				},
				children: asset.children,
				...typeof asset.attrs?.src === "string" ? { preventScriptHoist: true } : {}
			});
		}
		return assetScripts;
	};
	const getScripts = (matches) => matches.map((match) => match.scripts).flat(1).filter(Boolean).map(({ children, ...script }) => ({
		tag: "script",
		attrs: {
			...script,
			suppressHydrationWarning: true,
			nonce
		},
		children
	}));
	{
		const activeMatches = router.stores.matches.get();
		const assetScripts = getAssetScripts(activeMatches);
		return renderScripts(router, getScripts(activeMatches), assetScripts);
	}
	const assetScripts = useStore(router.stores.matches, getAssetScripts, deepEqual);
	return renderScripts(router, useStore(router.stores.matches, getScripts, deepEqual), assetScripts);
};
function renderScripts(router, scripts, assetScripts) {
	const allScripts = [...scripts, ...assetScripts];
	if (router.serverSsr) {
		const serverBufferedScript = router.serverSsr.takeBufferedScripts();
		if (serverBufferedScript) allScripts.unshift(serverBufferedScript);
	}
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_jsx_runtime.Fragment, { children: allScripts.map((asset, i) => /* @__PURE__ */ (0, import_react.createElement)(Asset, {
		...asset,
		key: `tsr-scripts-${asset.tag}-${i}`
	})) });
}
//#endregion
//#region node_modules/next-themes/dist/index.mjs
var M = (e, i, s, u, m, a, l, h) => {
	let d = document.documentElement, w = ["light", "dark"];
	function p(n) {
		(Array.isArray(e) ? e : [e]).forEach((y) => {
			let k = y === "class", S = k && a ? m.map((f) => a[f] || f) : m;
			k ? (d.classList.remove(...S), d.classList.add(a && a[n] ? a[n] : n)) : d.setAttribute(y, n);
		}), R(n);
	}
	function R(n) {
		h && w.includes(n) && (d.style.colorScheme = n);
	}
	function c() {
		return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
	}
	if (u) p(u);
	else try {
		let n = localStorage.getItem(i) || s;
		p(l && n === "system" ? c() : n);
	} catch (n) {}
};
var b = ["light", "dark"], I = "(prefers-color-scheme: dark)", O = typeof window == "undefined", x = import_react.createContext(void 0), U = {
	setTheme: (e) => {},
	themes: []
}, z = () => {
	var e;
	return (e = import_react.useContext(x)) != null ? e : U;
}, J = (e) => import_react.useContext(x) ? import_react.createElement(import_react.Fragment, null, e.children) : import_react.createElement(V, { ...e }), N = ["light", "dark"], V = ({ forcedTheme: e, disableTransitionOnChange: i = !1, enableSystem: s = !0, enableColorScheme: u = !0, storageKey: m = "theme", themes: a = N, defaultTheme: l = s ? "system" : "light", attribute: h = "data-theme", value: d, children: w, nonce: p, scriptProps: R }) => {
	let [c, n] = import_react.useState(() => H(m, l)), [T, y] = import_react.useState(() => c === "system" ? E() : c), k = d ? Object.values(d) : a, S = import_react.useCallback((o) => {
		let r = o;
		if (!r) return;
		o === "system" && s && (r = E());
		let v = d ? d[r] : r, C = i ? W(p) : null, P = document.documentElement, L = (g) => {
			g === "class" ? (P.classList.remove(...k), v && P.classList.add(v)) : g.startsWith("data-") && (v ? P.setAttribute(g, v) : P.removeAttribute(g));
		};
		if (Array.isArray(h) ? h.forEach(L) : L(h), u) {
			let g = b.includes(l) ? l : null, D = b.includes(r) ? r : g;
			P.style.colorScheme = D;
		}
		C?.();
	}, [p]), f = import_react.useCallback((o) => {
		let r = typeof o == "function" ? o(c) : o;
		n(r);
		try {
			localStorage.setItem(m, r);
		} catch (v) {}
	}, [c]), A = import_react.useCallback((o) => {
		let r = E(o);
		y(r), c === "system" && s && !e && S("system");
	}, [c, e]);
	import_react.useEffect(() => {
		let o = window.matchMedia(I);
		return o.addListener(A), A(o), () => o.removeListener(A);
	}, [A]), import_react.useEffect(() => {
		let o = (r) => {
			r.key === m && (r.newValue ? n(r.newValue) : f(l));
		};
		return window.addEventListener("storage", o), () => window.removeEventListener("storage", o);
	}, [f]), import_react.useEffect(() => {
		S(e != null ? e : c);
	}, [e, c]);
	let Q = import_react.useMemo(() => ({
		theme: c,
		setTheme: f,
		forcedTheme: e,
		resolvedTheme: c === "system" ? T : c,
		themes: s ? [...a, "system"] : a,
		systemTheme: s ? T : void 0
	}), [
		c,
		f,
		e,
		T,
		s,
		a
	]);
	return import_react.createElement(x.Provider, { value: Q }, import_react.createElement(_, {
		forcedTheme: e,
		storageKey: m,
		attribute: h,
		enableSystem: s,
		enableColorScheme: u,
		defaultTheme: l,
		value: d,
		themes: a,
		nonce: p,
		scriptProps: R
	}), w);
}, _ = import_react.memo(({ forcedTheme: e, storageKey: i, attribute: s, enableSystem: u, enableColorScheme: m, defaultTheme: a, value: l, themes: h, nonce: d, scriptProps: w }) => {
	let p = JSON.stringify([
		s,
		i,
		a,
		e,
		h,
		l,
		u,
		m
	]).slice(1, -1);
	return import_react.createElement("script", {
		...w,
		suppressHydrationWarning: !0,
		nonce: typeof window == "undefined" ? d : "",
		dangerouslySetInnerHTML: { __html: `(${M.toString()})(${p})` }
	});
}), H = (e, i) => {
	if (O) return;
	let s;
	try {
		s = localStorage.getItem(e) || void 0;
	} catch (u) {}
	return s || i;
}, W = (e) => {
	let i = document.createElement("style");
	return e && i.setAttribute("nonce", e), i.appendChild(document.createTextNode("*,*::before,*::after{-webkit-transition:none!important;-moz-transition:none!important;-o-transition:none!important;-ms-transition:none!important;transition:none!important}")), document.head.appendChild(i), () => {
		window.getComputedStyle(document.body), setTimeout(() => {
			document.head.removeChild(i);
		}, 1);
	};
}, E = (e) => (e || (e = window.matchMedia(I)), e.matches ? "dark" : "light");
//#endregion
//#region src/components/DefaultCatchBoundary.tsx
function DefaultCatchBoundary({ error }) {
	const router = useRouter();
	const isRoot = useLocation({ select: (location) => location.pathname === "/" });
	console.error("DefaultCatchBoundary Error:", error);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "min-w-0 flex-1 p-4 flex flex-col items-center justify-center gap-6",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ErrorComponent, { error }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "flex gap-2 items-center flex-wrap",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
				onClick: () => {
					router.invalidate();
				},
				className: `px-2 py-1 bg-gray-600 dark:bg-gray-700 rounded-sm text-white uppercase font-extrabold`,
				children: "Try Again"
			}), isRoot ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
				to: "/",
				className: `px-2 py-1 bg-gray-600 dark:bg-gray-700 rounded-sm text-white uppercase font-extrabold`,
				children: "Home"
			}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
				to: "/",
				className: `px-2 py-1 bg-gray-600 dark:bg-gray-700 rounded-sm text-white uppercase font-extrabold`,
				onClick: (e) => {
					e.preventDefault();
					window.history.back();
				},
				children: "Go Back"
			})]
		})]
	});
}
//#endregion
//#region src/components/NotFound.tsx
function NotFound({ children }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "space-y-2 p-2",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "text-gray-600 dark:text-gray-400",
			children: children || /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "The page you are looking for does not exist." })
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
			className: "flex items-center gap-2 flex-wrap",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
				onClick: () => window.history.back(),
				className: "bg-emerald-500 text-white px-2 py-1 rounded-sm uppercase font-black text-sm",
				children: "Go back"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
				to: "/",
				className: "bg-cyan-600 text-white px-2 py-1 rounded-sm uppercase font-black text-sm",
				children: "Start Over"
			})]
		})]
	});
}
/**
* @license lucide-react v1.23.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/
var CircleCheck = createLucideIcon("circle-check", [["circle", {
	cx: "12",
	cy: "12",
	r: "10",
	key: "1mglay"
}], ["path", {
	d: "m9 12 2 2 4-4",
	key: "dzmm74"
}]]);
/**
* @license lucide-react v1.23.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/
var Info = createLucideIcon("info", [
	["circle", {
		cx: "12",
		cy: "12",
		r: "10",
		key: "1mglay"
	}],
	["path", {
		d: "M12 16v-4",
		key: "1dtifu"
	}],
	["path", {
		d: "M12 8h.01",
		key: "e9boi3"
	}]
]);
/**
* @license lucide-react v1.23.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/
var OctagonX = createLucideIcon("octagon-x", [
	["path", {
		d: "m15 9-6 6",
		key: "1uzhvr"
	}],
	["path", {
		d: "M2.586 16.726A2 2 0 0 1 2 15.312V8.688a2 2 0 0 1 .586-1.414l4.688-4.688A2 2 0 0 1 8.688 2h6.624a2 2 0 0 1 1.414.586l4.688 4.688A2 2 0 0 1 22 8.688v6.624a2 2 0 0 1-.586 1.414l-4.688 4.688a2 2 0 0 1-1.414.586H8.688a2 2 0 0 1-1.414-.586z",
		key: "2d38gg"
	}],
	["path", {
		d: "m9 9 6 6",
		key: "z0biqf"
	}]
]);
/**
* @license lucide-react v1.23.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/
var TriangleAlert = createLucideIcon("triangle-alert", [
	["path", {
		d: "m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3",
		key: "wmoenq"
	}],
	["path", {
		d: "M12 9v4",
		key: "juzpu7"
	}],
	["path", {
		d: "M12 17h.01",
		key: "p32p05"
	}]
]);
//#endregion
//#region src/components/ui/sonner.tsx
var Toaster = ({ ...props }) => {
	const { theme = "system" } = z();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Toaster$1, {
		theme,
		className: "toaster group",
		icons: {
			success: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CircleCheck, { className: "size-4" }),
			info: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Info, { className: "size-4" }),
			warning: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TriangleAlert, { className: "size-4" }),
			error: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(OctagonX, { className: "size-4" }),
			loading: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(LoaderCircle, { className: "size-4 animate-spin" })
		},
		style: {
			"--normal-bg": "var(--popover)",
			"--normal-text": "var(--popover-foreground)",
			"--normal-border": "var(--border)",
			"--border-radius": "var(--radius)"
		},
		toastOptions: { classNames: { toast: "cn-toast" } },
		...props
	});
};
//#endregion
//#region src/components/blocks/FooterSimple.tsx
function FooterSimple({ config }) {
	const year = (/* @__PURE__ */ new Date()).getFullYear();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("footer", {
		className: "border-t border-border bg-muted/40",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto flex w-full max-w-6xl flex-col gap-6 px-4 py-10",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "grid gap-8 md:grid-cols-3",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex flex-col gap-2",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-lg font-semibold",
								children: config.businessName
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-sm text-muted-foreground",
								children: config.tagline
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex flex-col gap-2 text-sm",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "font-medium",
									children: "Contact"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "text-muted-foreground",
									children: config.phone
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "text-muted-foreground",
									children: config.email
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "text-muted-foreground",
									children: config.address
								})
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex flex-col gap-2 text-sm",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "font-medium",
								children: "Hours"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-muted-foreground",
								children: config.hours
							})]
						})
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Separator, {}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
					className: "text-sm text-muted-foreground",
					children: [
						"© ",
						year,
						" ",
						config.businessName,
						". All rights reserved."
					]
				})
			]
		})
	});
}
//#endregion
//#region src/components/blocks/HeaderSticky.tsx
function HeaderSticky({ config, className }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("header", {
		className: cn("sticky top-0 z-40 border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/80", className),
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto flex w-full max-w-6xl items-center justify-between gap-4 px-4 py-3",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
					to: "/",
					className: "text-lg font-semibold text-foreground",
					children: config.businessName
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("nav", {
					className: "hidden items-center gap-6 md:flex",
					children: config.navigation.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: item.href,
						className: "text-sm font-medium text-muted-foreground transition-colors hover:text-foreground",
						activeProps: { className: "text-foreground" },
						children: item.label
					}, item.href))
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-center gap-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
						variant: "outline",
						size: "sm",
						render: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", { href: `tel:${config.phone}` }),
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Phone, { "data-icon": "inline-start" }), config.phone]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
						size: "sm",
						render: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, { to: config.primaryCta.href }),
						children: config.primaryCta.label
					})]
				})
			]
		})
	});
}
//#endregion
//#region src/design/presets/apply-preset.ts
function applyDesignPreset(id) {
	if (typeof document === "undefined") return;
	document.documentElement.dataset.preset = id;
}
//#endregion
//#region src/layouts/SiteLayout.tsx
function SiteLayout({ children }) {
	(0, import_react.useEffect)(() => {
		applyDesignPreset(siteConfig.designPreset);
	}, []);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "flex min-h-screen flex-col",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(HeaderSticky, { config: siteConfig }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("main", {
				className: "flex-1",
				children
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FooterSimple, { config: siteConfig })
		]
	});
}
//#endregion
//#region src/styles/app.css?url
var app_default = "/assets/app-BzLpgWko.css";
//#endregion
//#region src/routes/__root.tsx
var Route$4 = createRootRoute({
	head: () => ({
		meta: [
			{ charSet: "utf-8" },
			{
				name: "viewport",
				content: "width=device-width, initial-scale=1"
			},
			...seo({
				title: siteConfig.seo.title,
				description: siteConfig.seo.description,
				keywords: siteConfig.seo.keywords
			})
		],
		links: [{
			rel: "stylesheet",
			href: app_default
		}, {
			rel: "icon",
			href: "/favicon.ico"
		}]
	}),
	errorComponent: DefaultCatchBoundary,
	notFoundComponent: () => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(NotFound, {}),
	shellComponent: RootDocument
});
function RootDocument({ children }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("html", {
		lang: "en",
		"data-preset": siteConfig.designPreset,
		suppressHydrationWarning: true,
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("head", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(HeadContent, {}) }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("body", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(J, {
			attribute: "class",
			defaultTheme: "light",
			enableSystem: true,
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SiteLayout, { children }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Toaster, {})]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Scripts, {})] })]
	});
}
//#endregion
//#region src/routes/services.tsx
var $$splitComponentImporter$3 = () => import("./services-BRMbLnfR.js");
var Route$3 = createFileRoute("/services")({
	head: () => ({ meta: seo({
		title: `Services | ${siteConfig.businessName}`,
		description: `Professional ${siteConfig.industry} services in Denver.`
	}) }),
	component: lazyRouteComponent($$splitComponentImporter$3, "component")
});
//#endregion
//#region src/routes/contact.tsx
var $$splitComponentImporter$2 = () => import("./contact-xxAaeBVm.js");
var Route$2 = createFileRoute("/contact")({
	head: () => ({ meta: seo({
		title: `Contact | ${siteConfig.businessName}`,
		description: `Contact ${siteConfig.businessName} for a free quote.`
	}) }),
	component: lazyRouteComponent($$splitComponentImporter$2, "component")
});
//#endregion
//#region src/routes/about.tsx
var $$splitComponentImporter$1 = () => import("./about-BjMxIQeR.js");
var Route$1 = createFileRoute("/about")({
	head: () => ({ meta: seo({
		title: `About | ${siteConfig.businessName}`,
		description: siteConfig.tagline
	}) }),
	component: lazyRouteComponent($$splitComponentImporter$1, "component")
});
//#endregion
//#region src/routes/index.tsx
var $$splitComponentImporter = () => import("./routes-CYrFueMO.js");
var Route = createFileRoute("/")({
	head: () => ({ meta: seo({
		title: siteConfig.seo.title,
		description: siteConfig.seo.description,
		keywords: siteConfig.seo.keywords
	}) }),
	component: lazyRouteComponent($$splitComponentImporter, "component")
});
//#endregion
//#region src/routeTree.gen.ts
var ServicesRoute = Route$3.update({
	id: "/services",
	path: "/services",
	getParentRoute: () => Route$4
});
var ContactRoute = Route$2.update({
	id: "/contact",
	path: "/contact",
	getParentRoute: () => Route$4
});
var AboutRoute = Route$1.update({
	id: "/about",
	path: "/about",
	getParentRoute: () => Route$4
});
var IndexRoute = Route.update({
	id: "/",
	path: "/",
	getParentRoute: () => Route$4
});
var ServicesRouteChildren = { ServicesSlugRoute: Route$5.update({
	id: "/$slug",
	path: "/$slug",
	getParentRoute: () => ServicesRoute
}) };
var rootRouteChildren = {
	IndexRoute,
	AboutRoute,
	ContactRoute,
	ServicesRoute: ServicesRoute._addFileChildren(ServicesRouteChildren)
};
var routeTree = Route$4._addFileChildren(rootRouteChildren)._addFileTypes();
//#endregion
//#region src/router.tsx
function getRouter() {
	return createRouter({
		routeTree,
		defaultPreload: "intent",
		defaultErrorComponent: DefaultCatchBoundary,
		defaultNotFoundComponent: () => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(NotFound, {}),
		scrollRestoration: true
	});
}
//#endregion
export { getRouter };
