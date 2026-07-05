import { c as require_jsx_runtime } from "./react-dom-D3rPRm8N.js";
import { t as Button, y as Link } from "./button-lECp910C.js";
//#region src/components/blocks/HeroCentered.tsx
var import_jsx_runtime = require_jsx_runtime();
function HeroCentered({ headline, subheadline, primaryCta, secondaryCta }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		className: "bg-muted/30",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto flex w-full max-w-6xl flex-col items-center gap-6 px-4 py-16 text-center md:py-24",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
					className: "max-w-3xl text-4xl font-bold tracking-tight text-foreground md:text-5xl",
					children: headline
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "max-w-2xl text-lg text-muted-foreground",
					children: subheadline
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex flex-wrap items-center justify-center gap-3",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
						render: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, { to: primaryCta.href }),
						children: primaryCta.label
					}), secondaryCta ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
						variant: "outline",
						render: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, { to: secondaryCta.href }),
						children: secondaryCta.label
					}) : null]
				})
			]
		})
	});
}
//#endregion
export { HeroCentered as t };
