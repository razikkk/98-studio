import { T as notFound, c as lazyRouteComponent, l as createFileRoute } from "../_libs/@tanstack/react-router+[...].mjs";
import { t as posts } from "./posts-aFkvs76i.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/blog._slug-B7icQwL_.js
var $$splitComponentImporter = () => import("./blog._slug-wj4fNB-G.mjs");
var $$splitErrorComponentImporter = () => import("./blog._slug-BAZ5SZoM.mjs");
var $$splitNotFoundComponentImporter = () => import("./blog._slug-CP4uXzT_.mjs");
var Route = createFileRoute("/blog/$slug")({
	loader: ({ params }) => {
		const post = posts.find((p) => p.slug === params.slug);
		if (!post) throw notFound();
		return { post };
	},
	head: ({ loaderData }) => ({ meta: loaderData?.post ? [
		{ title: `${loaderData.post.title} — 98 Studio Journal` },
		{
			name: "description",
			content: loaderData.post.excerpt
		},
		{
			property: "og:title",
			content: loaderData.post.title
		},
		{
			property: "og:description",
			content: loaderData.post.excerpt
		},
		{
			property: "og:type",
			content: "article"
		}
	] : [{ title: "Post — 98 Studio" }] }),
	notFoundComponent: lazyRouteComponent($$splitNotFoundComponentImporter, "notFoundComponent"),
	errorComponent: lazyRouteComponent($$splitErrorComponentImporter, "errorComponent"),
	component: lazyRouteComponent($$splitComponentImporter, "component")
});
//#endregion
export { Route as t };
