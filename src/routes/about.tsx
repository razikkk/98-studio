import { createFileRoute } from "@tanstack/react-router";
import { Reveal } from "@/components/shared/Reveal";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About 98 Studio | Premium Web Design & SEO in Kerala" },
      { 
        name: "description", 
        content: "A senior-led digital studio in Kerala specializing in high-performance Next.js websites and compounding SEO strategies for global brands." 
      },
      { property: "og:title", content: "About 98 Studio | Premium Web Design & SEO" },
    ],
  }),
  component: AboutPage,
});

const process = [
  { n: "01", title: "Listen", body: "We start with a 30-minute strategic alignment call. No sales pitch. We learn your business goals to ensure our intent-driven approach matches your long-term vision." },
  { n: "02", title: "Strategy", body: "A focused two-week sprint covering site architecture, keyword mapping, and brand positioning. You leave with a clear roadmap for organic growth and market dominance." },
  { n: "03", title: "Design", body: "Editorial-grade design in Figma. We focus on high-end UI/UX that prioritizes user psychology and conversion, with full transparency through every iteration." },
  { n: "04", title: "Build", body: "Senior engineers develop your site using a modern stack. Every build is headless-ready and engineered for 99+ PageSpeed scores and perfect Core Web Vitals." },
  { n: "05", title: "Launch & grow", body: "We don't just launch and leave. Most partners move into compounding SEO programs, focusing on technical maintenance, editorial content, and authority-grade link building." },
];

function AboutPage() {
  return (
    <div className="pt-32 sm:pt-40 bg-white">
      {/* Hero Section */}
      <section className="mx-auto max-w-[88rem] px-6">
        <Reveal>
          <p className="text-xs uppercase font-bold tracking-[0.22em] text-[#e26215]">The Philosophy</p>
          <h1 className="mt-4 max-w-4xl text-balance text-5xl font-semibold leading-[0.95] tracking-tight text-black sm:text-7xl md:text-8xl">
            A studio that takes <span className="italic font-light text-[#e26215]">intent</span> seriously.
          </h1>
        </Reveal>
      </section>

      {/* Who We Are - SEO Heavy Section */}
      <section className="mx-auto max-w-[88rem] px-6 py-24 sm:py-32">
  <div className="grid gap-12 md:grid-cols-12">
    <div className="md:col-span-4">
      <Reveal>
        <p className="text-xs uppercase font-bold tracking-[0.22em] text-[#e26215]">
          Capabilities
        </p>
      </Reveal>
    </div>
    <div className="md:col-span-8">
      <Reveal>
        <p className="text-balance text-2xl font-normal leading-snug text-black sm:text-3xl md:text-4xl">
          98-Studio is a boutique engineering team based in <span className="font-semibold">Kerala, India</span>. We specialize in custom Full-Stack Development, E-commerce, and high-performance Static sites.
        </p>
        <p className="mt-8 max-w-2xl text-lg text-black/60 text-pretty leading-relaxed">
          We are platform-agnostic, choosing the best-in-class technology for your specific needs. Whether we are building a bespoke web application or a global SEO strategy, every line of code is written with a single goal: to turn your digital presence into a measurable business asset.
        </p>
      </Reveal>
    </div>
  </div>
</section>

      {/* Mission Section */}
      <section className="border-t hairline bg-[#fafafa]">
        <div className="mx-auto max-w-[88rem] px-6 py-24 sm:py-32">
          <div className="grid gap-12 md:grid-cols-12">
            <div className="md:col-span-4">
              <Reveal>
                <p className="text-xs uppercase font-bold tracking-[0.22em] text-[#e26215]">
                  Our mission
                </p>
              </Reveal>
            </div>
            <div className="md:col-span-8">
              <Reveal>
                <p className="text-balance text-2xl font-normal leading-snug text-black sm:text-3xl md:text-4xl">
                  To replace the "noise" of the internet with high-authority digital presence. We believe premium brands deserve websites that load instantly, rank naturally, and convert by design.
                </p>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="mx-auto max-w-[88rem] px-6 py-24 sm:py-32">
        <Reveal>
          <p className="text-xs uppercase font-bold tracking-[0.22em] text-[#e26215]">
            Our process
          </p>
          <h2 className="mt-4 max-w-3xl text-balance text-4xl font-semibold tracking-tight text-black sm:text-5xl md:text-6xl">
            Five steps. No surprises.
          </h2>
        </Reveal>

        <div className="mt-16 divide-y hairline border-y hairline">
          {process.map((step, i) => (
            <Reveal key={step.n} delay={i * 0.05}>
              <div className="grid gap-6 py-10 md:grid-cols-12 md:gap-12 group transition-colors hover:bg-[#fafafa]">
                <div className="md:col-span-2">
                  <p className="text-5xl font-bold tracking-tight text-[#e26215] sm:text-6xl font-modular">
                    {step.n}
                  </p>
                </div>
                <div className="md:col-span-3">
                  <h3 className="text-2xl font-bold tracking-tight text-black sm:text-3xl">
                    {step.title}
                  </h3>
                </div>
                <div className="md:col-span-7">
                  <p className="text-black/60 text-pretty sm:text-lg leading-relaxed">{step.body}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </section>
    </div>
  );
}