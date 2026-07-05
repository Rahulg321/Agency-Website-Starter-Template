import { c as require_jsx_runtime } from "./react-dom-D3rPRm8N.js";
import { t as Button, y as Link } from "./button-lECp910C.js";
import { a as CardTitle, i as CardHeader, n as CardContent, r as CardDescription, t as Card } from "./card-ExviwTks.js";
//#region src/components/blocks/ServicesGrid.tsx
var import_jsx_runtime = require_jsx_runtime();
function ServicesGrid({ headline = "Our services", subheadline = "Solutions tailored to your needs.", items }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		className: "py-16",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto flex w-full max-w-6xl flex-col gap-8 px-4",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex max-w-2xl flex-col gap-2",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "text-3xl font-bold tracking-tight",
					children: headline
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-muted-foreground",
					children: subheadline
				})]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "grid gap-4 md:grid-cols-2 lg:grid-cols-4",
				children: items.map((item) => {
					const slug = item.slug ?? item.title.toLowerCase().replace(/\s+/g, "-");
					return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Card, {
						className: "h-full",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(CardHeader, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CardTitle, {
							className: "text-lg",
							children: item.title
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CardDescription, { children: item.description })] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CardContent, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: "/services/$slug",
							params: { slug },
							className: "text-sm font-medium text-primary hover:underline",
							children: "Learn more"
						}) })]
					}, item.title);
				})
			})]
		})
	});
}
//#endregion
//#region src/components/blocks/CTABanner.tsx
function CTABanner({ headline, subheadline, cta }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		className: "bg-primary py-14 text-primary-foreground",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto flex w-full max-w-6xl flex-col items-center gap-4 px-4 text-center",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "text-3xl font-bold tracking-tight",
					children: headline
				}),
				subheadline ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "max-w-2xl text-primary-foreground/80",
					children: subheadline
				}) : null,
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
					variant: "secondary",
					size: "lg",
					render: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, { to: cta.href }),
					children: cta.label
				})
			]
		})
	});
}
//#endregion
export { ServicesGrid as n, CTABanner as t };
