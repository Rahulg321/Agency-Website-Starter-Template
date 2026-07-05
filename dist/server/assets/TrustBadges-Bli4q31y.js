import { c as require_jsx_runtime } from "./react-dom-D3rPRm8N.js";
import { d as mergeProps, l as cn, n as cva, u as useRenderElement } from "./button-lECp910C.js";
//#region node_modules/@base-ui/react/use-render/useRender.mjs
/**
* Renders a Base UI element.
*
* @public
*/
function useRender(params) {
	return useRenderElement(params.defaultTagName ?? "div", params, params);
}
//#endregion
//#region src/components/ui/badge.tsx
var badgeVariants = cva("group/badge inline-flex h-5 w-fit shrink-0 items-center justify-center gap-1 overflow-hidden rounded-4xl border border-transparent px-2 py-0.5 text-xs font-medium whitespace-nowrap transition-all focus-visible:border-ring focus-visible:ring-[3px] focus-visible:ring-ring/50 has-data-[icon=inline-end]:pr-1.5 has-data-[icon=inline-start]:pl-1.5 aria-invalid:border-destructive aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 [&>svg]:pointer-events-none [&>svg]:size-3!", {
	variants: { variant: {
		default: "bg-primary text-primary-foreground [a]:hover:bg-primary/80",
		secondary: "bg-secondary text-secondary-foreground [a]:hover:bg-secondary/80",
		destructive: "bg-destructive/10 text-destructive focus-visible:ring-destructive/20 dark:bg-destructive/20 dark:focus-visible:ring-destructive/40 [a]:hover:bg-destructive/20",
		outline: "border-border text-foreground [a]:hover:bg-muted [a]:hover:text-muted-foreground",
		ghost: "hover:bg-muted hover:text-muted-foreground dark:hover:bg-muted/50",
		link: "text-primary underline-offset-4 hover:underline"
	} },
	defaultVariants: { variant: "default" }
});
function Badge({ className, variant = "default", render, ...props }) {
	return useRender({
		defaultTagName: "span",
		props: mergeProps({ className: cn(badgeVariants({ variant }), className) }, props),
		render,
		state: {
			slot: "badge",
			variant
		}
	});
}
//#endregion
//#region src/components/blocks/TrustBadges.tsx
var import_jsx_runtime = require_jsx_runtime();
function TrustBadges({ headline = "Why customers trust us", badges }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		className: "py-12",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto flex w-full max-w-6xl flex-col gap-6 px-4",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
				className: "text-2xl font-bold tracking-tight",
				children: headline
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "grid gap-4 sm:grid-cols-2 lg:grid-cols-4",
				children: badges.map((badge) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex flex-col gap-2 rounded-xl border border-border bg-card p-4",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Badge, {
						variant: "secondary",
						children: badge.label
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-xl font-semibold",
						children: badge.value
					})]
				}, badge.label))
			})]
		})
	});
}
//#endregion
export { TrustBadges as t };
