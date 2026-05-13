import { createFileRoute } from "@tanstack/react-router";
import { CalendlyEmbed } from "@/components/shared/CalendlyEmbed";
import { Reveal } from "@/components/shared/Reveal";
import { site } from "@/data/site";
import { faqs } from "@/data/faqs";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Phone, Mail, Instagram, Linkedin, ArrowUpRight } from "lucide-react";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact 98 Studio | Digital Strategy & Web Development" },
      { 
        name: "description", 
        content: "Start your project with 98 Studio. Book a 30-minute digital strategy session or reach our Kerala-based team via email or LinkedIn." 
      },
      { property: "og:title", content: "Contact 98 Studio | Start Your Project" },
    ],
  }),
  component: ContactPage,
});

const channels = [
  { icon: Phone, label: site.contact.phone, href: site.contact.phoneHref, sub: "Phone" },
  { icon: Mail, label: site.contact.email, href: site.contact.emailHref, sub: "Email" },
  { icon: Instagram, label: site.contact.instagramHandle, href: site.contact.instagram, sub: "Instagram" },
  { icon: Linkedin, label: site.contact.linkedinHandle, href: site.contact.linkedin, sub: "LinkedIn" },
];

function ContactPage() {
  return (
    <div className="pt-32 sm:pt-40 bg-white">
      {/* Hero Section */}
      <section className="mx-auto max-w-[88rem] px-6">
        <Reveal>
          <p className="text-xs uppercase font-bold tracking-[0.22em] text-[#e26215]">
            Start a conversation
          </p>
          <h1 className="mt-4 max-w-4xl text-balance text-5xl font-semibold leading-[0.95] tracking-tight text-black sm:text-7xl md:text-8xl">
            Let's build something <span className="italic font-light text-[#e26215]">substantial.</span>
          </h1>
          <p className="mt-8 max-w-2xl text-lg text-black/60 text-pretty sm:text-xl leading-relaxed">
            Select a 30-minute strategy session below to discuss your project goals. 
            We personally review every inquiry and respond within one business day 
            with a clear path forward.
          </p>
        </Reveal>
      </section>

      {/* Direct Communication & Scheduler */}
      <section className="mx-auto max-w-[88rem] px-6 py-16 sm:py-24">
        <div className="grid gap-16 md:grid-cols-12">
          {/* Channels Column */}
          <div className="md:col-span-5">
            <Reveal>
              <p className="text-xs uppercase font-bold tracking-[0.22em] text-black/40">
                Direct Channels
              </p>
              <ul className="mt-6 divide-y hairline border-y hairline">
                {channels.map(({ icon: Icon, label, href, sub }) => (
                  <li key={label}>
                    <a
                      href={href}
                      target={href.startsWith("http") ? "_blank" : undefined}
                      rel="noreferrer"
                      className="group flex items-center justify-between gap-4 py-6"
                    >
                      <div className="flex items-center gap-4">
                        <span className="grid h-12 w-12 place-items-center rounded-full border hairline bg-transparent transition-all duration-300 group-hover:bg-black group-hover:text-white">
                          <Icon className="h-4 w-4" />
                        </span>
                        <div>
                          <p className="text-[10px] uppercase font-bold tracking-widest text-black/40">
                            {sub}
                          </p>
                          <p className="mt-1 text-base font-semibold text-black">{label}</p>
                        </div>
                      </div>
                      <ArrowUpRight className="h-5 w-5 text-black/20 transition-all group-hover:text-[#e26215] group-hover:-translate-y-1 group-hover:translate-x-1" />
                    </a>
                  </li>
                ))}
              </ul>
              {/* Added a clear location signal for Local SEO */}
              <div className="mt-12 p-6 rounded-2xl bg-[#fafafa] border hairline">
                <p className="text-xs uppercase font-bold tracking-widest text-[#e26215]">Studio Location</p>
                <p className="mt-2 text-sm font-medium text-black leading-relaxed">
                  {site.contact.location} <br />
                  <span className="text-black/40 font-normal underline decoration-[#e26215]/30">Serving global clients from the South.</span>
                </p>
              </div>
            </Reveal>
          </div>

          {/* Scheduler Column */}
          <div className="md:col-span-7">
            <Reveal delay={0.1}>
              <div className="rounded-2xl overflow-hidden border hairline shadow-sm">
                <CalendlyEmbed minHeight={720} />
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* FAQ Section - Rich Snippets opportunity */}
      <section className="border-t hairline bg-[#fafafa]">
        <div className="mx-auto max-w-[88rem] px-6 py-24 sm:py-32">
          <div className="grid gap-12 md:grid-cols-12">
            <div className="md:col-span-4">
              <Reveal>
                <p className="text-xs uppercase font-bold tracking-[0.22em] text-[#e26215]">
                  Partnership FAQ
                </p>
                <h2 className="mt-4 text-balance text-4xl font-semibold tracking-tight text-black sm:text-5xl">
                  Project <br className="hidden md:block" /> Intelligence.
                </h2>
                <p className="mt-6 text-black/60 max-w-xs">
                  Everything you need to know about starting a project with a 
                  dedicated engineering studio.
                </p>
              </Reveal>
            </div>
            <div className="md:col-span-8">
              <Reveal>
                <Accordion type="single" collapsible className="w-full">
                  {faqs.map((f, i) => (
                    <AccordionItem key={i} value={`item-${i}`} className="border-b hairline last:border-0">
                      <AccordionTrigger className="py-7 text-left text-xl font-bold text-black hover:no-underline hover:text-[#e26215] transition-colors">
                        {f.q}
                      </AccordionTrigger>
                      <AccordionContent className="pb-7 text-lg text-black/60 leading-relaxed text-pretty">
                        {f.a}
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </Reveal>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}