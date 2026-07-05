import { Y as __toESM, c as require_jsx_runtime, q as require_react } from "./react-dom-D3rPRm8N.js";
import { _ as formatErrorMessage, g as useRefWithInit, l as cn, t as Button, u as useRenderElement, v as siteConfig, y as Link } from "./button-lECp910C.js";
import { t as HeroCentered } from "./HeroCentered-B8-riJjS.js";
import { t as useOnMount } from "./useOnMount-CIaDzL4s.js";
import { a as CardTitle, i as CardHeader, n as CardContent, t as Card } from "./card-ExviwTks.js";
import { t as TrustBadges } from "./TrustBadges-Bli4q31y.js";
//#region node_modules/@base-ui/utils/useTimeout.mjs
var EMPTY = 0;
var Timeout = class Timeout {
	static create() {
		return new Timeout();
	}
	currentId = EMPTY;
	/**
	* Executes `fn` after `delay`, clearing any previously scheduled call.
	*/
	start(delay, fn) {
		this.clear();
		this.currentId = setTimeout(() => {
			this.currentId = EMPTY;
			fn();
		}, delay);
	}
	isStarted() {
		return this.currentId !== EMPTY;
	}
	clear = () => {
		if (this.currentId !== EMPTY) {
			clearTimeout(this.currentId);
			this.currentId = EMPTY;
		}
	};
	disposeEffect = () => {
		return this.clear;
	};
};
/**
* A `setTimeout` with automatic cleanup and guard.
*/
function useTimeout() {
	const timeout = useRefWithInit(Timeout.create).current;
	useOnMount(timeout.disposeEffect);
	return timeout;
}
//#endregion
//#region node_modules/@base-ui/react/avatar/root/AvatarRootContext.mjs
var import_react = /* @__PURE__ */ __toESM(require_react(), 1);
var AvatarRootContext = /*#__PURE__*/ import_react.createContext(void 0);
function useAvatarRootContext() {
	const context = import_react.useContext(AvatarRootContext);
	if (context === void 0) throw new Error(formatErrorMessage(13));
	return context;
}
//#endregion
//#region node_modules/@base-ui/react/avatar/root/stateAttributesMapping.mjs
var avatarStateAttributesMapping = { imageLoadingStatus: () => null };
//#endregion
//#region node_modules/@base-ui/react/avatar/root/AvatarRoot.mjs
var import_jsx_runtime = require_jsx_runtime();
var AvatarRoot = /*#__PURE__*/ import_react.forwardRef(function AvatarRoot(componentProps, forwardedRef) {
	const { className, render, style, ...elementProps } = componentProps;
	const [imageLoadingStatus, setImageLoadingStatus] = import_react.useState("idle");
	const state = { imageLoadingStatus };
	const contextValue = import_react.useMemo(() => ({
		imageLoadingStatus,
		setImageLoadingStatus
	}), [imageLoadingStatus, setImageLoadingStatus]);
	const element = useRenderElement("span", componentProps, {
		state,
		ref: forwardedRef,
		props: elementProps,
		stateAttributesMapping: avatarStateAttributesMapping
	});
	return /*#__PURE__*/ (0, import_jsx_runtime.jsx)(AvatarRootContext.Provider, {
		value: contextValue,
		children: element
	});
});
//#endregion
//#region node_modules/@base-ui/react/avatar/fallback/AvatarFallback.mjs
/**
* Rendered when the image fails to load or when no image is provided.
* Renders a `<span>` element.
*
* Documentation: [Base UI Avatar](https://base-ui.com/react/components/avatar)
*/
var AvatarFallback$1 = /*#__PURE__*/ import_react.forwardRef(function AvatarFallback(componentProps, forwardedRef) {
	const { className, render, delay, style, ...elementProps } = componentProps;
	const { imageLoadingStatus } = useAvatarRootContext();
	const [delayPassed, setDelayPassed] = import_react.useState(delay === void 0);
	const timeout = useTimeout();
	import_react.useEffect(() => {
		if (delay !== void 0) timeout.start(delay, () => setDelayPassed(true));
		else setDelayPassed(true);
		return timeout.clear;
	}, [timeout, delay]);
	return useRenderElement("span", componentProps, {
		state: { imageLoadingStatus },
		ref: forwardedRef,
		props: elementProps,
		stateAttributesMapping: avatarStateAttributesMapping,
		enabled: imageLoadingStatus !== "loaded" && (delay === void 0 || delayPassed)
	});
});
//#endregion
//#region src/components/ui/avatar.tsx
function Avatar({ className, size = "default", ...props }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AvatarRoot, {
		"data-slot": "avatar",
		"data-size": size,
		className: cn("group/avatar relative flex size-8 shrink-0 rounded-full select-none after:absolute after:inset-0 after:rounded-full after:border after:border-border after:mix-blend-darken data-[size=lg]:size-10 data-[size=sm]:size-6 dark:after:mix-blend-lighten", className),
		...props
	});
}
function AvatarFallback({ className, ...props }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AvatarFallback$1, {
		"data-slot": "avatar-fallback",
		className: cn("flex size-full items-center justify-center rounded-full bg-muted text-sm text-muted-foreground group-data-[size=sm]/avatar:text-xs", className),
		...props
	});
}
//#endregion
//#region src/components/blocks/TeamGrid.tsx
function initials(name) {
	return name.split(" ").map((part) => part[0]).join("").slice(0, 2).toUpperCase();
}
function TeamGrid({ headline = "Meet the team", members }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		className: "py-16",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto flex w-full max-w-6xl flex-col gap-8 px-4",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
				className: "text-3xl font-bold tracking-tight",
				children: headline
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "grid gap-4 md:grid-cols-2",
				children: members.map((member) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Card, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(CardHeader, {
					className: "flex flex-row items-center gap-4",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Avatar, {
						className: "size-12",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AvatarFallback, { children: initials(member.name) })
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex flex-col gap-1",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CardTitle, {
							className: "text-lg",
							children: member.name
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-sm text-muted-foreground",
							children: member.role
						})]
					})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CardContent, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-sm text-muted-foreground",
					children: member.bio
				}) })] }, member.name))
			})]
		})
	});
}
//#endregion
//#region src/components/blocks/CTASplit.tsx
function CTASplit({ headline, subheadline, cta, imageSrc = "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=1200&auto=format&fit=crop", imageAlt = "Team at work" }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		className: "py-16",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto grid w-full max-w-6xl gap-8 px-4 md:grid-cols-2 md:items-center",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex flex-col gap-4",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "text-3xl font-bold tracking-tight",
						children: headline
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-muted-foreground",
						children: subheadline
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
						render: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, { to: cta.href }),
						children: cta.label
					})
				]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "overflow-hidden rounded-2xl border border-border",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
					src: imageSrc,
					alt: imageAlt,
					className: "aspect-[4/3] size-full object-cover"
				})
			})]
		})
	});
}
//#endregion
//#region src/recipes/about-page.tsx
function renderAboutPage(_brief, config) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(HeroCentered, {
			headline: `About ${config.businessName}`,
			subheadline: config.tagline,
			primaryCta: config.primaryCta
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TeamGrid, { members: config.team }),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TrustBadges, { badges: config.trustBadges }),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CTASplit, {
			headline: "Work with a team you can trust",
			subheadline: "Licensed professionals serving the Denver metro for over 15 years.",
			cta: config.primaryCta
		})
	] });
}
//#endregion
//#region src/routes/about.tsx?tsr-split=component
function AboutPage() {
	return renderAboutPage(null, siteConfig);
}
//#endregion
export { AboutPage as component };
