import { o as __toESM } from "../_runtime.mjs";
import { _ as require_jsx_runtime, v as require_react } from "../_libs/@radix-ui/react-accordion+[...].mjs";
import "../_libs/framer-motion.mjs";
import { t as Reveal } from "./Reveal-BmQjj5lE.mjs";
import { l as ArrowUpRight, s as Download, t as X } from "../_libs/lucide-react.mjs";
import { t as cn } from "./utils-BuOt9_LA.mjs";
import { n as projects } from "./projects-DSZiz4n-.mjs";
import { a as Portal, i as Overlay, n as Content, o as Root, r as Description, s as Title, t as Close } from "../_libs/@radix-ui/react-dialog+[...].mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/works-LLmf-l1V.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var seoCases = [{
	id: "maison-noir-seo",
	title: "From page 4 to position 1",
	client: "Maison Noir",
	summary: "Technical re-architecture, programmatic landing pages, and a category-led content sprint. 12 months, +312% organic.",
	metric: "+312%",
	metricLabel: "Organic traffic, 12 mo",
	category: "SEO",
	cover: "/assets/seo-1-slOwhz8T.jpg",
	pdfUrl: "",
	year: "2025"
}, {
	id: "praxis-seo",
	title: "Owning the comparison query",
	client: "Praxis",
	summary: "Cluster strategy across 47 high-intent comparison queries. Built the assets, won the SERP, lifted demo signups 4.1x.",
	metric: "4.1×",
	metricLabel: "Demo signups",
	category: "SEO",
	cover: "/assets/seo-2-CyUG1RT9.jpg",
	pdfUrl: "",
	year: "2024"
}];
var Dialog = Root;
var DialogPortal = Portal;
var DialogOverlay = import_react.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Overlay, {
	ref,
	className: cn("fixed inset-0 z-50 bg-black/80  data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0", className),
	...props
}));
DialogOverlay.displayName = Overlay.displayName;
var DialogContent = import_react.forwardRef(({ className, children, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogPortal, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogOverlay, {}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Content, {
	ref,
	className: cn("fixed left-[50%] top-[50%] z-50 grid w-full max-w-lg translate-x-[-50%] translate-y-[-50%] gap-4 border bg-background p-6 shadow-lg duration-200 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[state=closed]:slide-out-to-left-1/2 data-[state=closed]:slide-out-to-top-[48%] data-[state=open]:slide-in-from-left-1/2 data-[state=open]:slide-in-from-top-[48%] sm:rounded-lg", className),
	...props,
	children: [children, /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Close, {
		className: "absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-accent data-[state=open]:text-muted-foreground",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, { className: "h-4 w-4" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
			className: "sr-only",
			children: "Close"
		})]
	})]
})] }));
DialogContent.displayName = Content.displayName;
var DialogHeader = ({ className, ...props }) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
	className: cn("flex flex-col space-y-1.5 text-center sm:text-left", className),
	...props
});
DialogHeader.displayName = "DialogHeader";
var DialogFooter = ({ className, ...props }) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
	className: cn("flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2", className),
	...props
});
DialogFooter.displayName = "DialogFooter";
var DialogTitle = import_react.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Title, {
	ref,
	className: cn("text-lg font-semibold leading-none tracking-tight", className),
	...props
}));
DialogTitle.displayName = Title.displayName;
var DialogDescription = import_react.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Description, {
	ref,
	className: cn("text-sm text-muted-foreground", className),
	...props
}));
DialogDescription.displayName = Description.displayName;
function ProjectModal({ project, open, onOpenChange }) {
	if (!project) return null;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Dialog, {
		open,
		onOpenChange,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogContent, {
			className: "max-w-5xl max-h-[90vh] overflow-y-auto p-0 gap-0 border-none",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "relative",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
					src: project.cover,
					alt: `${project.title} cover`,
					className: "aspect-[16/9] w-full object-cover"
				})
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "p-6 sm:p-10",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogHeader, {
						className: "text-left",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
								className: "text-xs uppercase tracking-[0.22em] text-muted-foreground",
								children: [
									project.client,
									" · ",
									project.year
								]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogTitle, {
								className: "mt-3 text-3xl sm:text-4xl font-semibold tracking-tight",
								children: project.title
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogDescription, {
								className: "mt-4 text-base text-muted-foreground text-pretty",
								children: project.longDescription
							})
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mt-6 flex flex-wrap gap-2",
						children: project.services.map((s) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "rounded-full border hairline px-3 py-1 text-xs text-muted-foreground",
							children: s
						}, s))
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
						href: project.liveUrl,
						target: "_blank",
						rel: "noreferrer",
						className: "mt-8 inline-flex items-center gap-2 rounded-full bg-foreground px-5 py-3 text-sm font-medium text-background",
						children: ["Visit live site ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowUpRight, { className: "h-4 w-4" })]
					}),
					project.gallery.length > 1 && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mt-10 grid gap-4 sm:grid-cols-2",
						children: project.gallery.slice(1).map((g, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
							src: g,
							alt: `${project.title} gallery ${i + 1}`,
							className: "w-full rounded-xl border hairline object-cover"
						}, i))
					})
				]
			})]
		})
	});
}
function SeoCaseModal({ caseStudy, open, onOpenChange }) {
	if (!caseStudy) return null;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Dialog, {
		open,
		onOpenChange,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogContent, {
			className: "max-w-5xl max-h-[90vh] overflow-y-auto p-0 gap-0 border-none",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "grid gap-0 sm:grid-cols-5",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "sm:col-span-2 bg-foreground text-background p-8 sm:p-10",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
							className: "text-xs uppercase tracking-[0.22em] text-background/60",
							children: ["SEO case · ", caseStudy.year]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogHeader, {
							className: "text-left mt-3",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogTitle, {
								className: "text-2xl sm:text-3xl font-semibold tracking-tight text-background",
								children: caseStudy.title
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogDescription, {
								className: "text-background/70 text-pretty mt-3",
								children: caseStudy.client
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mt-10",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-5xl sm:text-6xl font-semibold text-accent tracking-tight",
								children: caseStudy.metric
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-2 text-sm text-background/60",
								children: caseStudy.metricLabel
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-10 text-sm text-background/80 text-pretty",
							children: caseStudy.summary
						}),
						caseStudy.pdfUrl && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
							href: caseStudy.pdfUrl,
							target: "_blank",
							rel: "noreferrer",
							className: "mt-8 inline-flex items-center gap-2 rounded-full bg-accent px-4 py-2.5 text-sm font-medium text-accent-foreground",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Download, { className: "h-4 w-4" }), "Download PDF"]
						})
					]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "sm:col-span-3 bg-secondary min-h-[420px]",
					children: caseStudy.pdfUrl ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("iframe", {
						src: caseStudy.pdfUrl,
						title: `${caseStudy.title} PDF`,
						className: "h-full min-h-[420px] w-full"
					}) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex h-full min-h-[420px] flex-col items-center justify-center gap-3 p-10 text-center text-sm text-muted-foreground",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "h-10 w-10 rounded-full border-2 border-foreground/20 border-t-accent animate-spin" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "PDF placeholder — add a URL in src/data/seoCases.ts" })]
					})
				})]
			})
		})
	});
}
function WorksPage() {
	const [filter, setFilter] = (0, import_react.useState)("All");
	const [activeProject, setActiveProject] = (0, import_react.useState)(null);
	const [activeCase, setActiveCase] = (0, import_react.useState)(null);
	const showWebsites = filter === "All" || filter === "Websites";
	const showSeo = filter === "All" || filter === "SEO";
	const filters = (0, import_react.useMemo)(() => [
		"All",
		"Websites",
		"SEO"
	], []);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "pt-32 sm:pt-40 pb-20",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mx-auto max-w-[88rem] px-6",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Reveal, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-xs uppercase tracking-[0.22em] text-muted-foreground",
						children: "Portfolio"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
						className: "mt-4 max-w-3xl text-balance text-5xl font-semibold tracking-tight sm:text-7xl md:text-8xl",
						children: "Work, in detail."
					})] }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mt-12 flex items-center gap-2 border-b hairline pb-4",
						children: filters.map((f) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							onClick: () => setFilter(f),
							className: `rounded-full px-4 py-2 text-sm transition-all ${filter === f ? "bg-foreground text-background" : "text-muted-foreground hover:text-foreground"}`,
							children: f
						}, f))
					}),
					showWebsites && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
						className: "mt-12",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "grid gap-6 md:grid-cols-2",
							children: projects.map((p, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
								delay: i * .05,
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
									type: "button",
									onClick: () => setActiveProject(p),
									className: "group relative block w-full overflow-hidden rounded-2xl border hairline bg-secondary text-left",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "aspect-[4/3] overflow-hidden",
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
											src: p.cover,
											alt: `${p.title} — ${p.description}`,
											loading: "lazy",
											className: "h-full w-full object-cover transition-transform duration-[1200ms] group-hover:scale-105"
										})
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/75 via-black/20 to-transparent p-6",
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "flex items-end justify-between gap-4",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
												/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
													className: "text-xs uppercase tracking-[0.22em] text-white/70",
													children: [
														p.client,
														" · ",
														p.year
													]
												}),
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
													className: "mt-1.5 text-xl font-medium text-white",
													children: p.title
												}),
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
													className: "mt-1 max-w-md text-sm text-white/75",
													children: p.description
												})
											] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
												className: "hidden sm:inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-white text-foreground transition-all group-hover:bg-accent group-hover:text-accent-foreground",
												children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowUpRight, { className: "h-4 w-4" })
											})]
										})
									})]
								})
							}, p.id))
						})
					}),
					showSeo && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
						className: "mt-20",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							className: "text-xs uppercase tracking-[0.22em] text-muted-foreground",
							children: "SEO case studies"
						}) }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "mt-6 grid gap-6 md:grid-cols-2",
							children: seoCases.map((c, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
								delay: i * .05,
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
									type: "button",
									onClick: () => setActiveCase(c),
									className: "group block w-full overflow-hidden rounded-2xl border hairline bg-foreground text-background text-left transition-all hover:-translate-y-1",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "p-8 sm:p-10",
										children: [
											/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
												className: "flex items-start justify-between",
												children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
													className: "text-xs uppercase tracking-[0.22em] text-background/60",
													children: [
														c.client,
														" · ",
														c.year
													]
												}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowUpRight, { className: "h-5 w-5 text-background/60 transition-all group-hover:text-accent group-hover:-translate-y-0.5 group-hover:translate-x-0.5" })]
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
												className: "mt-10 text-6xl sm:text-7xl font-semibold text-accent tracking-tight",
												children: c.metric
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
												className: "mt-2 text-sm text-background/60",
												children: c.metricLabel
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
												className: "mt-10 text-2xl font-medium tracking-tight",
												children: c.title
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
												className: "mt-3 text-sm text-background/70 text-pretty",
												children: c.summary
											})
										]
									})
								})
							}, c.id))
						})]
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ProjectModal, {
				project: activeProject,
				open: activeProject !== null,
				onOpenChange: (v) => !v && setActiveProject(null)
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SeoCaseModal, {
				caseStudy: activeCase,
				open: activeCase !== null,
				onOpenChange: (v) => !v && setActiveCase(null)
			})
		]
	});
}
//#endregion
export { WorksPage as component };
