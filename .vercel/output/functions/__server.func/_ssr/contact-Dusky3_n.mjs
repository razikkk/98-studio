import { o as __toESM } from "../_runtime.mjs";
import { _ as require_jsx_runtime, a as Trigger2, i as Root2, n as Header, r as Item, t as Content2, v as require_react } from "../_libs/@radix-ui/react-accordion+[...].mjs";
import "../_libs/framer-motion.mjs";
import { t as Reveal } from "./Reveal-BmQjj5lE.mjs";
import { a as Linkedin, c as ChevronDown, i as Mail, l as ArrowUpRight, n as Phone, o as Instagram } from "../_libs/lucide-react.mjs";
import { t as site } from "./site-BAuxRtBB.mjs";
import { t as CalendlyEmbed } from "./CalendlyEmbed--PA9TQWu.mjs";
import { t as cn } from "./utils-BuOt9_LA.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/contact-Dusky3_n.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var faqs = [
	{
		q: "What industries does 98 Studio specialize in?",
		a: "We partner with brands that prioritize quality over volume-specifically in Luxury Fashion, Hospitality, B2B Tech, and high-performance E-commerce. We are selective, focusing on a few high-impact projects each year to ensure every build is a market-leading asset."
	},
	{
		q: "How long does it take to build a custom website?",
		a: "A strategic brand-led website typically takes 1-2 weeks. Complex full-stack applications or custom e-commerce platforms with advanced integrations range from 3-4 weeks. We provide a fixed, guaranteed timeline after our initial strategy call."
	},
	{
		q: "Do you offer integrated SEO and Web Development services?",
		a: "Yes. Technical SEO is baked into our development process. By building with semantic code, optimized Core Web Vitals, and editorial-ready architecture, our websites often achieve organic rankings faster than templated solutions. We also provide standalone compounding SEO programs."
	},
	{
		q: "Where is 98 Studio located and do you work remotely?",
		a: "We are a senior-led studio based in Kerala, India. We operate on a remote-first model, collaborating with clients across the Middle East, Europe, and North America. Our local presence in the South allows us to offer world-class engineering with highly focused attention."
	},
	{
		q: "What is the typical investment for a project?",
		a: "Our custom website builds start at $700 for a foundational presence. The final investment depends entirely on the complexity, specific features, and total page count required to meet your goals. After our strategy session, we provide a bespoke quote tailored to your exact requirements."
	},
	{
		q: "Can you optimize or redesign an existing brand identity?",
		a: "Absolutely. We often work with established brands to translate their existing identity into a high-converting digital experience. Our goal is to ensure your online presence matches the premium nature of your physical or offline brand."
	}
];
var Accordion = Root2;
var AccordionItem = import_react.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Item, {
	ref,
	className: cn("border-b", className),
	...props
}));
AccordionItem.displayName = "AccordionItem";
var AccordionTrigger = import_react.forwardRef(({ className, children, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Header, {
	className: "flex",
	children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Trigger2, {
		ref,
		className: cn("flex flex-1 items-center justify-between py-4 text-sm font-medium transition-all hover:underline text-left [&[data-state=open]>svg]:rotate-180", className),
		...props,
		children: [children, /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronDown, { className: "h-4 w-4 shrink-0 text-muted-foreground transition-transform duration-200" })]
	})
}));
AccordionTrigger.displayName = Trigger2.displayName;
var AccordionContent = import_react.forwardRef(({ className, children, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Content2, {
	ref,
	className: "overflow-hidden text-sm data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down",
	...props,
	children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: cn("pb-4 pt-0", className),
		children
	})
}));
AccordionContent.displayName = Content2.displayName;
var channels = [
	{
		icon: Phone,
		label: site.contact.phone,
		href: site.contact.phoneHref,
		sub: "Phone"
	},
	{
		icon: Mail,
		label: site.contact.email,
		href: site.contact.emailHref,
		sub: "Email"
	},
	{
		icon: Instagram,
		label: site.contact.instagramHandle,
		href: site.contact.instagram,
		sub: "Instagram"
	},
	{
		icon: Linkedin,
		label: site.contact.linkedinHandle,
		href: site.contact.linkedin,
		sub: "LinkedIn"
	}
];
function ContactPage() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "pt-32 sm:pt-40 bg-white",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
				className: "mx-auto max-w-[88rem] px-6",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Reveal, { children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-xs uppercase font-bold tracking-[0.22em] text-[#e26215]",
						children: "Start a conversation"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h1", {
						className: "mt-4 max-w-4xl text-balance text-5xl font-semibold leading-[0.95] tracking-tight text-black sm:text-7xl md:text-8xl",
						children: ["Let's build something ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "italic font-light text-[#e26215]",
							children: "substantial."
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-8 max-w-2xl text-lg text-black/60 text-pretty sm:text-xl leading-relaxed",
						children: "Select a 30-minute strategy session below to discuss your project goals. We personally review every inquiry and respond within one business day with a clear path forward."
					})
				] })
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
				className: "mx-auto max-w-[88rem] px-6 py-16 sm:py-24",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "grid gap-16 md:grid-cols-12",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "md:col-span-5",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Reveal, { children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-xs uppercase font-bold tracking-[0.22em] text-black/40",
								children: "Direct Channels"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
								className: "mt-6 divide-y hairline border-y hairline",
								children: channels.map(({ icon: Icon, label, href, sub }) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
									href,
									target: href.startsWith("http") ? "_blank" : void 0,
									rel: "noreferrer",
									className: "group flex items-center justify-between gap-4 py-6",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "flex items-center gap-4",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "grid h-12 w-12 place-items-center rounded-full border hairline bg-transparent transition-all duration-300 group-hover:bg-black group-hover:text-white",
											children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, { className: "h-4 w-4" })
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
											className: "text-[10px] uppercase font-bold tracking-widest text-black/40",
											children: sub
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
											className: "mt-1 text-base font-semibold text-black",
											children: label
										})] })]
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowUpRight, { className: "h-5 w-5 text-black/20 transition-all group-hover:text-[#e26215] group-hover:-translate-y-1 group-hover:translate-x-1" })]
								}) }, label))
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "mt-12 p-6 rounded-2xl bg-[#fafafa] border hairline",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "text-xs uppercase font-bold tracking-widest text-[#e26215]",
									children: "Studio Location"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
									className: "mt-2 text-sm font-medium text-black leading-relaxed",
									children: [
										site.contact.location,
										" ",
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "text-black/40 font-normal underline decoration-[#e26215]/30",
											children: "Serving global clients from the South."
										})
									]
								})]
							})
						] })
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "md:col-span-7",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
							delay: .1,
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "rounded-2xl overflow-hidden border hairline shadow-sm",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CalendlyEmbed, { minHeight: 720 })
							})
						})
					})]
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
				className: "border-t hairline bg-[#fafafa]",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mx-auto max-w-[88rem] px-6 py-24 sm:py-32",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "grid gap-12 md:grid-cols-12",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "md:col-span-4",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Reveal, { children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "text-xs uppercase font-bold tracking-[0.22em] text-[#e26215]",
									children: "Partnership FAQ"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", {
									className: "mt-4 text-balance text-4xl font-semibold tracking-tight text-black sm:text-5xl",
									children: [
										"Project ",
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", { className: "hidden md:block" }),
										" Intelligence."
									]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mt-6 text-black/60 max-w-xs",
									children: "Everything you need to know about starting a project with a dedicated engineering studio."
								})
							] })
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "md:col-span-8",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Accordion, {
								type: "single",
								collapsible: true,
								className: "w-full",
								children: faqs.map((f, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(AccordionItem, {
									value: `item-${i}`,
									className: "border-b hairline last:border-0",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(AccordionTrigger, {
										className: "py-7 text-left text-xl font-bold text-black hover:no-underline hover:text-[#e26215] transition-colors",
										children: f.q
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AccordionContent, {
										className: "pb-7 text-lg text-black/60 leading-relaxed text-pretty",
										children: f.a
									})]
								}, i))
							}) })
						})]
					})
				})
			})
		]
	});
}
//#endregion
export { ContactPage as component };
