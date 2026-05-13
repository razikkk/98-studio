import { o as __toESM } from "../_runtime.mjs";
import { _ as require_jsx_runtime, v as require_react } from "../_libs/@radix-ui/react-accordion+[...].mjs";
import { c as lazyRouteComponent, d as Link, f as useRouter, i as useLocation, l as createFileRoute, n as Scripts, o as createRouter, r as HeadContent, s as Outlet, u as createRootRouteWithContext } from "../_libs/@tanstack/react-router+[...].mjs";
import { t as Route$6 } from "./blog._slug-B7icQwL_.mjs";
import { l as ArrowUpRight, r as Menu, t as X } from "../_libs/lucide-react.mjs";
import { t as site } from "./site-BAuxRtBB.mjs";
import { t as QueryClient } from "../_libs/tanstack__query-core.mjs";
import { t as QueryClientProvider } from "../_libs/tanstack__react-query.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/router-C0KWIInR.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var styles_default = "/assets/styles-Bcp6CU2f.css";
function Nav() {
	const [open, setOpen] = (0, import_react.useState)(false);
	const [scrolled, setScrolled] = (0, import_react.useState)(false);
	const location = useLocation();
	(0, import_react.useEffect)(() => {
		const onScroll = () => setScrolled(window.scrollY > 8);
		onScroll();
		window.addEventListener("scroll", onScroll, { passive: true });
		return () => window.removeEventListener("scroll", onScroll);
	}, []);
	(0, import_react.useEffect)(() => {
		setOpen(false);
	}, [location.pathname]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("header", {
		className: `fixed inset-x-0 top-0 z-50 transition-all duration-300 ${scrolled ? "py-2" : "py-4"}`,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto max-w-[88rem] px-4 sm:px-6",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: `glass flex items-center justify-between rounded-full border hairline px-4 sm:px-6 ${scrolled ? "py-2.5" : "py-3"}`,
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
						to: "/",
						className: "flex items-center gap-2 font-semibold tracking-tight",
						"aria-label": `${site.brand.name} — home`,
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "grid h-8 w-8 place-items-center rounded-full bg-[#e26215] text-background text-xs font-bold",
							children: site.brand.mark
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "hidden sm:inline text-sm",
							children: site.brand.name
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("nav", {
						className: "hidden md:flex items-center gap-1",
						children: site.nav.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: item.to,
							className: "relative rounded-full px-4 py-2 text-sm text-foreground/70 transition-colors hover:text-foreground data-[status=active]:text-foreground",
							activeProps: { className: "text-foreground" },
							children: ({ isActive }) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: item.label }), isActive && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "absolute inset-x-4 -bottom-0.5 h-px bg-accent" })] })
						}, item.to))
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-center gap-2",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: "/contact",
							className: "hidden md:inline-flex items-center rounded-full bg-foreground px-4 py-2 text-xs font-medium text-background transition-transform hover:-translate-y-0.5",
							children: "Book a call"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							type: "button",
							className: "md:hidden grid h-9 w-9 place-items-center rounded-full hover:bg-secondary",
							onClick: () => setOpen((v) => !v),
							"aria-label": "Toggle menu",
							"aria-expanded": open,
							children: open ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, { className: "h-4 w-4" }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Menu, { className: "h-4 w-4" })
						})]
					})
				]
			}), open && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "md:hidden mt-2 glass rounded-2xl border hairline p-2",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("nav", {
					className: "flex flex-col",
					children: site.nav.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: item.to,
						className: "rounded-xl px-4 py-3 text-sm hover:bg-secondary",
						children: item.label
					}, item.to))
				})
			})]
		})
	});
}
function FloatingCTA() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "fixed bottom-5 left-1/2 z-40 -translate-x-1/2 sm:left-auto sm:right-6 sm:translate-x-0",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
			to: "/contact",
			className: "group inline-flex items-center gap-2 rounded-full bg-foreground px-5 py-3.5 text-sm font-medium text-background accent-glow transition-all",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
					className: "relative flex h-2 w-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "absolute inline-flex h-full w-full animate-ping rounded-full bg-accent opacity-75" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "relative inline-flex h-2 w-2 rounded-full bg-accent" })]
				}),
				"Book a call",
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowUpRight, { className: "h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" })
			]
		})
	});
}
function Footer() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("footer", {
		className: "mt-32 border-t hairline bg-white",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto max-w-[88rem] px-6 py-16",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "grid gap-12 md:grid-cols-12",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "md:col-span-5",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex items-center gap-2",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "grid h-9 w-9 place-items-center rounded-full bg-gradient-to-br from-[#e26215] to-black text-white text-xs font-bold transition-all duration-500 hover:rotate-12 hover:shadow-[0_0_15px_rgba(226,98,21,0.4)]",
								children: site.brand.mark
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "font-bold tracking-tighter text-xl uppercase",
								children: site.brand.name
							})]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
							className: "mt-6 max-w-sm text-[15px] leading-relaxed text-black/60 text-pretty",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", { children: "Web Design & SEO Built to Outperform." }), " A senior-led studio in Kerala crafting brand-led websites and compounding SEO programs for a global audience."]
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "md:col-span-3",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-[10px] uppercase font-bold tracking-[0.2em] text-[#e26215]",
							children: "Expertise"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("ul", {
							className: "mt-6 space-y-3 text-sm font-medium",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
									to: "/works",
									className: "hover:text-[#e26215] transition-colors",
									children: "Next.js Development"
								}) }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
									to: "/works",
									className: "hover:text-[#e26215] transition-colors",
									children: "Premium UI/UX Design"
								}) }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
									to: "/works",
									className: "hover:text-[#e26215] transition-colors",
									children: "Technical SEO Strategy"
								}) }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
									to: "/works",
									className: "hover:text-[#e26215] transition-colors",
									children: "Local SEO & Growth"
								}) })
							]
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "md:col-span-4",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-[10px] uppercase font-bold tracking-[0.2em] text-black",
							children: "Connect"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("ul", {
							className: "mt-6 space-y-3 text-sm font-medium",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
								href: site.contact.emailHref,
								className: "text-lg hover:text-[#e26215] transition-colors",
								children: site.contact.email
							}) }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
								className: "flex gap-4 pt-2",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
									href: site.contact.instagram,
									className: "hover:text-[#e26215]",
									target: "_blank",
									rel: "noreferrer",
									children: "Instagram"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
									href: site.contact.linkedin,
									className: "hover:text-[#e26215]",
									target: "_blank",
									rel: "noreferrer",
									children: "LinkedIn"
								})]
							})]
						})]
					})
				]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-20 flex flex-col gap-4 border-t hairline pt-8 text-[10px] uppercase tracking-[0.15em] text-black/40 sm:flex-row sm:items-center sm:justify-between font-bold",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", { children: [
					"© ",
					(/* @__PURE__ */ new Date()).getFullYear(),
					" ",
					site.brand.name,
					" - Built with Intent."
				] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex gap-6",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: site.contact.location }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "hidden sm:inline text-black/10",
						children: "|"
					})]
				})]
			})]
		})
	});
}
function NotFoundComponent() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "flex min-h-screen items-center justify-center bg-background px-4",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "max-w-md text-center",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-xs uppercase tracking-[0.22em] text-muted-foreground",
					children: "404"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
					className: "mt-4 text-5xl font-semibold tracking-tight",
					children: "Lost in space."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-4 text-sm text-muted-foreground",
					children: "The page you're looking for doesn't exist or has moved."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
					to: "/",
					className: "mt-8 inline-flex items-center justify-center rounded-full bg-foreground px-5 py-3 text-sm font-medium text-background",
					children: "Back home"
				})
			]
		})
	});
}
function ErrorComponent({ error, reset }) {
	console.error(error);
	const router = useRouter();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "flex min-h-screen items-center justify-center bg-background px-4",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "max-w-md text-center",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
					className: "text-xl font-semibold tracking-tight",
					children: "This page didn't load"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-2 text-sm text-muted-foreground",
					children: "Try refreshing or head back home."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-6 flex flex-wrap justify-center gap-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						onClick: () => {
							router.invalidate();
							reset();
						},
						className: "rounded-full bg-foreground px-4 py-2 text-sm font-medium text-background",
						children: "Try again"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
						href: "/",
						className: "rounded-full border hairline px-4 py-2 text-sm font-medium",
						children: "Go home"
					})]
				})
			]
		})
	});
}
var Route$5 = createRootRouteWithContext()({
	head: () => ({
		meta: [
			{ charSet: "utf-8" },
			{
				name: "viewport",
				content: "width=device-width, initial-scale=1"
			},
			{ title: "98 Studio — Web Design & SEO" },
			{
				name: "description",
				content: "An independent web design and SEO studio building editorial-grade brand sites and compounding organic growth programs."
			},
			{
				name: "author",
				content: "98 Studio"
			},
			{
				property: "og:title",
				content: "98 Studio — Web Design & SEO"
			},
			{
				property: "og:description",
				content: "Editorial-grade brand sites and compounding SEO. Built with intent."
			},
			{
				property: "og:type",
				content: "website"
			},
			{
				name: "twitter:card",
				content: "summary_large_image"
			}
		],
		links: [{
			rel: "stylesheet",
			href: styles_default
		}]
	}),
	shellComponent: RootShell,
	component: RootComponent,
	notFoundComponent: NotFoundComponent,
	errorComponent: ErrorComponent
});
function RootShell({ children }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("html", {
		lang: "en",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("head", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(HeadContent, {}) }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("body", { children: [children, /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Scripts, {})] })]
	});
}
function RootComponent() {
	const { queryClient } = Route$5.useRouteContext();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(QueryClientProvider, {
		client: queryClient,
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Nav, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("main", {
				className: "min-h-screen",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Outlet, {})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Footer, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FloatingCTA, {})
		]
	});
}
var $$splitComponentImporter$4 = () => import("./works-LLmf-l1V.mjs");
var Route$4 = createFileRoute("/works")({
	head: () => ({ meta: [
		{ title: "Work — 98 Studio" },
		{
			name: "description",
			content: "Selected websites and SEO case studies from 98 Studio."
		},
		{
			property: "og:title",
			content: "Work — 98 Studio"
		},
		{
			property: "og:description",
			content: "Selected websites and SEO case studies."
		}
	] }),
	component: lazyRouteComponent($$splitComponentImporter$4, "component")
});
var $$splitComponentImporter$3 = () => import("./contact-Dusky3_n.mjs");
var Route$3 = createFileRoute("/contact")({
	head: () => ({ meta: [
		{ title: "Contact 98 Studio | Digital Strategy & Web Development" },
		{
			name: "description",
			content: "Start your project with 98 Studio. Book a 30-minute digital strategy session or reach our Kerala-based team via email or LinkedIn."
		},
		{
			property: "og:title",
			content: "Contact 98 Studio | Start Your Project"
		}
	] }),
	component: lazyRouteComponent($$splitComponentImporter$3, "component")
});
var $$splitComponentImporter$2 = () => import("./about-DidaUCrE.mjs");
var Route$2 = createFileRoute("/about")({
	head: () => ({ meta: [
		{ title: "About 98 Studio | Premium Web Design & SEO in Kerala" },
		{
			name: "description",
			content: "A senior-led digital studio in Kerala specializing in high-performance Next.js websites and compounding SEO strategies for global brands."
		},
		{
			property: "og:title",
			content: "About 98 Studio | Premium Web Design & SEO"
		}
	] }),
	component: lazyRouteComponent($$splitComponentImporter$2, "component")
});
var $$splitComponentImporter$1 = () => import("./routes-DLib7O4I.mjs");
var Route$1 = createFileRoute("/")({
	head: () => ({ meta: [
		{ title: "98 Studio — Web Design & SEO with intent" },
		{
			name: "description",
			content: "Editorial-grade websites and compounding SEO programs for brands that take their work seriously."
		},
		{
			property: "og:title",
			content: "98 Studio — Web Design & SEO with intent"
		},
		{
			property: "og:description",
			content: "Editorial-grade websites and compounding SEO programs."
		}
	] }),
	component: lazyRouteComponent($$splitComponentImporter$1, "component")
});
var $$splitComponentImporter = () => import("./blog.index-FPGSWyCs.mjs");
var Route = createFileRoute("/blog/")({
	head: () => ({ meta: [
		{ title: "Journal — 98 Studio" },
		{
			name: "description",
			content: "Notes on design, SEO, and the craft of building websites that earn their keep."
		},
		{
			property: "og:title",
			content: "Journal — 98 Studio"
		},
		{
			property: "og:description",
			content: "Notes on design, SEO, and the craft of building websites."
		}
	] }),
	component: lazyRouteComponent($$splitComponentImporter, "component")
});
var WorksRoute = Route$4.update({
	id: "/works",
	path: "/works",
	getParentRoute: () => Route$5
});
var ContactRoute = Route$3.update({
	id: "/contact",
	path: "/contact",
	getParentRoute: () => Route$5
});
var AboutRoute = Route$2.update({
	id: "/about",
	path: "/about",
	getParentRoute: () => Route$5
});
var IndexRoute = Route$1.update({
	id: "/",
	path: "/",
	getParentRoute: () => Route$5
});
var BlogIndexRoute = Route.update({
	id: "/blog/",
	path: "/blog/",
	getParentRoute: () => Route$5
});
var rootRouteChildren = {
	IndexRoute,
	AboutRoute,
	ContactRoute,
	WorksRoute,
	BlogSlugRoute: Route$6.update({
		id: "/blog/$slug",
		path: "/blog/$slug",
		getParentRoute: () => Route$5
	}),
	BlogIndexRoute
};
var routeTree = Route$5._addFileChildren(rootRouteChildren)._addFileTypes();
var getRouter = () => {
	return createRouter({
		routeTree,
		context: { queryClient: new QueryClient() },
		scrollRestoration: true,
		defaultPreloadStaleTime: 0
	});
};
//#endregion
export { getRouter };
