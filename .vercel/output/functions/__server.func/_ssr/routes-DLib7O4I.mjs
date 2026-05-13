import { _ as require_jsx_runtime } from "../_libs/@radix-ui/react-accordion+[...].mjs";
import { n as motion } from "../_libs/framer-motion.mjs";
import { t as Reveal } from "./Reveal-BmQjj5lE.mjs";
import { d as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { l as ArrowUpRight, u as ArrowRight } from "../_libs/lucide-react.mjs";
import { t as CalendlyEmbed } from "./CalendlyEmbed--PA9TQWu.mjs";
import { t as featuredProjects } from "./projects-DSZiz4n-.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/routes-DLib7O4I.js
var import_jsx_runtime = require_jsx_runtime();
function Hero() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		className: "relative isolate overflow-hidden pt-32 sm:pt-40 pb-20 sm:pb-28",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			"aria-hidden": true,
			className: "absolute inset-0 -z-10",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
				initial: {
					opacity: 0,
					scale: .8
				},
				animate: {
					opacity: 1,
					scale: 1
				},
				transition: {
					duration: 2,
					ease: "easeOut"
				},
				className: "absolute left-1/2 top-1/3 h-[60vw] w-[60vw] max-h-[800px] max-w-[800px] -translate-x-1/2 -translate-y-1/2 rounded-full",
				style: {
					background: "radial-gradient(circle at center, rgba(226,98,21,0.18), rgba(226,98,21,0.06) 40%, transparent 65%)",
					filter: "blur(40px)"
				}
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
				animate: { y: [
					0,
					-20,
					0
				] },
				transition: {
					duration: 12,
					repeat: Infinity,
					ease: "easeInOut"
				},
				className: "absolute right-[-10%] top-[10%] h-[30vw] w-[30vw] max-h-[400px] max-w-[400px] rounded-full",
				style: {
					background: "radial-gradient(circle, rgba(226,98,21,0.12), transparent 60%)",
					filter: "blur(60px)"
				}
			})]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto max-w-[88rem] px-6",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.p, {
					initial: {
						opacity: 0,
						y: 12
					},
					animate: {
						opacity: 1,
						y: 0
					},
					transition: { duration: .6 },
					className: "flex items-center gap-3 text-xs uppercase tracking-[0.22em] text-muted-foreground",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "h-px w-8 bg-foreground/30" }), "A design & SEO studio · est. 2024"]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.h1, {
					initial: {
						opacity: 0,
						y: 24
					},
					animate: {
						opacity: 1,
						y: 0
					},
					transition: {
						duration: .9,
						delay: .1,
						ease: [
							.22,
							1,
							.36,
							1
						]
					},
					className: "mt-8 max-w-[16ch] text-balance text-5xl font-semibold leading-[0.95] tracking-tight sm:text-7xl md:text-8xl lg:text-[9rem]",
					children: [
						"Web Design ",
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "italic font-light text-accent",
							children: "&"
						}),
						" SEO,",
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", { className: "hidden sm:block" }),
						" Built to Outperform."
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
					initial: {
						opacity: 0,
						y: 16
					},
					animate: {
						opacity: 1,
						y: 0
					},
					transition: {
						duration: .8,
						delay: .3
					},
					className: "mt-10 grid gap-6 sm:max-w-2xl",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "max-w-[700px] text-lg leading-relaxed text-black/80 text-pretty sm:text-xl md:leading-loose",
						children: [
							"We build ",
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-[#e26215] font-medium",
								children: "editorial-grade websites"
							}),
							" and run compounding SEO programs for ambitious brands. No templates. No shortcuts. ",
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-black font-semibold",
								children: "Just intent-driven execution."
							})
						]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex flex-wrap items-center gap-4",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
							to: "/works",
							className: "group inline-flex items-center gap-2 rounded-full bg-foreground px-6 py-3.5 text-sm font-medium text-background transition-transform hover:-translate-y-0.5",
							children: ["See the work", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "h-4 w-4 transition-transform group-hover:translate-x-1" })]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: "/contact",
							className: "inline-flex items-center gap-2 rounded-full border hairline px-6 py-3.5 text-sm font-medium hover:border-foreground",
							children: "Book a call"
						})]
					})]
				})
			]
		})]
	});
}
function FeaturedProjects() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		className: "relative py-24 sm:py-32",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto max-w-[88rem] px-6",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex items-end justify-between gap-6 mb-12 sm:mb-16",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Reveal, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-xs uppercase tracking-[0.22em] text-muted-foreground",
					children: "Selected work"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "mt-4 max-w-2xl text-balance text-4xl font-semibold tracking-tight sm:text-5xl md:text-6xl",
					children: "Projects we're proud of."
				})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
					delay: .1,
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
						to: "/works",
						className: "hidden sm:inline-flex items-center gap-2 text-sm font-medium hover:text-accent",
						children: ["All projects ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowUpRight, { className: "h-4 w-4" })]
					})
				})]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "grid gap-6 lg:grid-cols-12",
				children: featuredProjects.map((p, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
					delay: i * .08,
					className: i === 0 ? "lg:col-span-8" : "lg:col-span-4",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
						to: "/works",
						className: "group relative block overflow-hidden rounded-2xl border hairline bg-secondary",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "aspect-[4/3] overflow-hidden",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
								src: p.cover,
								alt: `${p.title} — ${p.description}`,
								width: 1280,
								height: 960,
								loading: "lazy",
								className: "h-full w-full object-cover transition-transform duration-[1200ms] group-hover:scale-105"
							})
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent p-6",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex items-end justify-between gap-4",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
									className: "text-lg font-medium text-white",
									children: p.title
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mt-1 max-w-md text-sm text-white/75",
									children: p.description
								})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "hidden sm:inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-white text-foreground transition-transform group-hover:-translate-y-0.5 group-hover:bg-accent group-hover:text-accent-foreground",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowUpRight, { className: "h-4 w-4" })
								})]
							})
						})]
					})
				}, p.id))
			})]
		})
	});
}
var services = [{
	id: "web",
	number: "01",
	title: "Web Design & Development",
	summary: "Custom-coded digital experiences built for performance. We engineer headless-ready websites that outperform trends and convert at scale.",
	bullets: [
		"Custom Next.js & React Development",
		"Editorial UI/UX Design",
		"Headless CMS (Sanity, Payload)",
		"Performance & Core Web Vitals Optimization"
	]
}, {
	id: "seo",
	number: "02",
	title: "SEO & Digital Growth",
	summary: "Strategy-led organic growth. We combine technical precision with localized authority to ensure your brand dominates search rankings.",
	bullets: [
		"Technical SEO & Core Frameworks",
		"Local SEO & Google Map Dominance",
		"Editorial Content & Cluster Strategy",
		"AI-Enhanced Search Visibility"
	]
}];
function Services() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		className: "relative border-t hairline py-24 sm:py-32 bg-white",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto max-w-[88rem] px-6",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Reveal, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "text-xs uppercase font-bold tracking-[0.22em] text-[#e26215]",
				children: "Capabilities"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
				className: "mt-4 max-w-3xl text-balance text-4xl font-semibold tracking-tight text-black sm:text-5xl md:text-6xl",
				children: "Two disciplines. One studio."
			})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-14 grid gap-6 md:grid-cols-2",
				children: services.map((s, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
					delay: i * .1,
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
						className: "group relative h-full rounded-2xl border hairline bg-[#fafafa] p-8 transition-all hover:bg-white hover:shadow-[0_30px_60px_-15px_rgba(0,0,0,0.1)]",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex items-start justify-between",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "text-sm font-mono text-black/40",
									children: s.number
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "h-2 w-2 rounded-full bg-[#e26215] transition-all duration-500 group-hover:scale-[2] group-hover:shadow-[0_0_12px_#e26215]" })]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
								className: "mt-12 text-3xl font-medium tracking-tight text-black sm:text-4xl",
								children: s.title
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-4 max-w-md text-black/70 text-pretty leading-relaxed",
								children: s.summary
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
								className: "mt-8 space-y-3 border-t hairline pt-8",
								children: s.bullets.map((b) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
									className: "flex items-center gap-3 text-sm font-medium text-black/80 transition-colors hover:text-[#e26215]",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "h-1.5 w-1.5 rounded-full bg-[#e26215]/30 group-hover:bg-[#e26215]" }), b]
								}, b))
							})
						]
					})
				}, s.id))
			})]
		})
	});
}
function AboutBrief() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		className: "py-24 sm:py-32",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "mx-auto max-w-[88rem] px-6",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "grid gap-12 md:grid-cols-12",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "md:col-span-4",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-xs uppercase tracking-[0.22em] text-muted-foreground",
						children: "The studio"
					}) })
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "md:col-span-8",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "text-balance text-3xl font-normal leading-[1.1] tracking-tight text-black sm:text-4xl md:text-5xl",
						children: [
							"Based in Kerala, we build ",
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-[#e26215]",
								children: "Next.js architectures"
							}),
							" and intent-driven SEO for brands that refuse to settle. We are a senior-led studio focused on quality over volume-shipping work we’d put on our own homepage."
						]
					}) }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
						delay: .1,
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
							to: "/about",
							className: "group mt-12 inline-flex items-center gap-2 text-sm font-bold uppercase tracking-widest text-black transition-colors hover:text-[#e26215]",
							children: ["Discover our philosophy", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "h-4 w-4 transition-transform group-hover:translate-x-1" })]
						})
					})]
				})]
			})
		})
	});
}
function CalendlySection() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		className: "border-t hairline bg-white py-24 sm:py-32",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "mx-auto max-w-[88rem] px-6",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "grid gap-16 md:grid-cols-12 items-start",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "md:col-span-5",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Reveal, { children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-xs uppercase font-bold tracking-[0.22em] text-[#e26215]",
							children: "Get in touch"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", {
							className: "mt-6 text-balance text-4xl font-semibold tracking-tight text-black sm:text-5xl md:text-6xl leading-[1.1]",
							children: ["Let's talk", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-[#e26215]",
								children: "."
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mt-8 space-y-6",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "text-xl font-medium text-black",
									children: "A 30-minute strategic alignment call."
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "max-w-md text-lg leading-relaxed text-black/60 text-pretty",
									children: "Tell us about your goals. We'll be honest about whether 98 Studio is the right partner for your growth - and if not, we'll introduce you to someone who is."
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "text-sm font-mono uppercase tracking-widest text-[#e26215]",
									children: "No pressure. Just intent."
								})
							]
						})
					] })
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "md:col-span-7 relative",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
						delay: .2,
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "overflow-hidden rounded-2xl border hairline bg-[#fafafa] shadow-sm",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CalendlyEmbed, { minHeight: 620 })
						})
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute -bottom-4 -right-4 -z-10 h-32 w-32 rounded-full bg-[#e26215]/5 blur-3xl" })]
				})]
			})
		})
	});
}
function Index() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Hero, {}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FeaturedProjects, {}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Services, {}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(AboutBrief, {}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CalendlySection, {})
	] });
}
//#endregion
export { Index as component };
