import { _ as require_jsx_runtime } from "../_libs/@radix-ui/react-accordion+[...].mjs";
import "../_libs/framer-motion.mjs";
import { t as Reveal } from "./Reveal-BmQjj5lE.mjs";
import { d as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { t as Route } from "./blog._slug-B7icQwL_.mjs";
import { d as ArrowLeft } from "../_libs/lucide-react.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/blog._slug-wj4fNB-G.js
var import_jsx_runtime = require_jsx_runtime();
function PostPage() {
	const { post } = Route.useLoaderData();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("article", {
		className: "pt-32 sm:pt-40 pb-16",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto max-w-3xl px-6",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
					to: "/blog",
					className: "inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-accent",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowLeft, { className: "h-4 w-4" }), " All posts"]
				}) }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Reveal, { children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "mt-12 text-xs uppercase tracking-[0.22em] text-accent",
						children: [
							post.category,
							" · ",
							post.date,
							" · ",
							post.readingTime,
							" read"
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
						className: "mt-6 text-balance text-4xl font-semibold leading-tight tracking-tight sm:text-5xl md:text-6xl",
						children: post.title
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-8 text-xl text-muted-foreground text-pretty",
						children: post.excerpt
					})
				] }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
					delay: .1,
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mt-12 space-y-6 text-lg leading-relaxed text-foreground/90",
						children: post.body.map((para, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-pretty",
							children: para
						}, i))
					})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-16 border-t hairline pt-8",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: "/blog",
						className: "text-sm text-muted-foreground hover:text-accent",
						children: "← Back to all posts"
					})
				}) })
			]
		})
	});
}
//#endregion
export { PostPage as component };
