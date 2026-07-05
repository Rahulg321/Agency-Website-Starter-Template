import { c as require_jsx_runtime } from "./react-dom-D3rPRm8N.js";
import { t as Button, v as siteConfig, y as Link } from "./button-lECp910C.js";
import { t as Route } from "./services._slug-CNLgBEbF.js";
//#region src/routes/services.$slug.tsx?tsr-split=component
var import_jsx_runtime = require_jsx_runtime();
function ServiceDetailPage() {
	const { slug } = Route.useParams();
	const service = siteConfig.services.find((item) => item.slug === slug);
	if (!service) return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		className: "mx-auto flex w-full max-w-3xl flex-col gap-4 px-4 py-16",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
			className: "text-3xl font-bold",
			children: "Service not found"
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
			render: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, { to: "/services" }),
			children: "View all services"
		})]
	});
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		className: "mx-auto flex w-full max-w-3xl flex-col gap-6 px-4 py-16",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
				className: "text-4xl font-bold tracking-tight",
				children: service.title
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "text-lg text-muted-foreground",
				children: service.description
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
				render: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, { to: "/contact" }),
				children: siteConfig.primaryCta.label
			})
		]
	});
}
//#endregion
export { ServiceDetailPage as component };
