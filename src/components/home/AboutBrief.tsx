import { Link } from "@tanstack/react-router";
import { Reveal } from "@/components/shared/Reveal";
import { ArrowRight } from "lucide-react";

export function AboutBrief() {
  return (
    <section className="py-24 sm:py-32">
      <div className="mx-auto max-w-[88rem] px-6">
        <div className="grid gap-12 md:grid-cols-12">
          <div className="md:col-span-4">
            <Reveal>
              <p className="text-xs uppercase tracking-[0.22em] text-muted-foreground">
                The studio
              </p>
            </Reveal>
          </div>
          <div className="md:col-span-8">
  <Reveal>
    <p className="text-balance text-3xl font-normal leading-[1.1] tracking-tight text-black sm:text-4xl md:text-5xl">
      Based in Kerala, we build <span className="text-[#e26215]">Next.js architectures</span> and intent-driven SEO for brands that refuse to settle. We are a senior-led studio focused on quality over volume-shipping work we’d put on our own homepage.
    </p>
  </Reveal>
  <Reveal delay={0.1}>
    <Link
      to="/about"
      className="group mt-12 inline-flex items-center gap-2 text-sm font-bold uppercase tracking-widest text-black transition-colors hover:text-[#e26215]"
    >
      Discover our philosophy 
      <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
    </Link>
  </Reveal>
</div>
        </div>
      </div>
    </section>
  );
}
