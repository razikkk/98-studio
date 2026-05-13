import { o as __toESM } from "../_runtime.mjs";
import { _ as require_jsx_runtime, v as require_react } from "../_libs/@radix-ui/react-accordion+[...].mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/CalendlyEmbed--PA9TQWu.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function CalendlyEmbed({ minHeight = 700 }) {
	const ref = (0, import_react.useRef)(null);
	const [loaded, setLoaded] = (0, import_react.useState)(false);
	const calendlyUrl = "https://calendly.com/9eightstudio/30min";
	(0, import_react.useEffect)(() => {
		if (!ref.current) return;
		const existingScript = document.querySelector("script[src=\"https://assets.calendly.com/assets/external/widget.js\"]");
		const initWidget = () => {
			const Calendly = window.Calendly;
			if (Calendly && ref.current) {
				Calendly.initInlineWidget({
					url: calendlyUrl,
					parentElement: ref.current,
					prefill: {},
					utm: {}
				});
				setLoaded(true);
			}
		};
		if (existingScript) initWidget();
		else {
			const link = document.createElement("link");
			link.rel = "stylesheet";
			link.href = "https://assets.calendly.com/assets/external/widget.css";
			document.head.appendChild(link);
			const script = document.createElement("script");
			script.src = "https://assets.calendly.com/assets/external/widget.js";
			script.async = true;
			script.onload = initWidget;
			document.body.appendChild(script);
		}
	}, []);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		ref,
		className: "relative w-full overflow-hidden rounded-2xl border hairline bg-[#fafafa]",
		style: {
			height: `${minHeight}px`,
			minWidth: "320px"
		},
		"aria-label": "Schedule a call",
		children: !loaded && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "absolute inset-0 flex flex-col items-center justify-center gap-4 text-black/40",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "h-8 w-8 rounded-full border-2 border-black/5 border-t-[#e26215] animate-spin",
				"aria-hidden": true
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "text-xs uppercase tracking-widest font-medium",
				children: "Syncing Calendar..."
			})]
		})
	});
}
//#endregion
export { CalendlyEmbed as t };
