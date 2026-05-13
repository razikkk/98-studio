import { CalendlyEmbed } from "@/components/shared/CalendlyEmbed";
import { Reveal } from "@/components/shared/Reveal";

export function CalendlySection() {
  return (
    <section className="border-t hairline bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-[88rem] px-6">
        <div className="grid gap-16 md:grid-cols-12 items-start">
          <div className="md:col-span-5">
            <Reveal>
              <p className="text-xs uppercase font-bold tracking-[0.22em] text-[#e26215]">
                Get in touch
              </p>
              <h2 className="mt-6 text-balance text-4xl font-semibold tracking-tight text-black sm:text-5xl md:text-6xl leading-[1.1]">
                Let&apos;s talk<span className="text-[#e26215]">.</span>
              </h2>
              <div className="mt-8 space-y-6">
                <p className="text-xl font-medium text-black">
                  A 30-minute strategic alignment call.
                </p>
                <p className="max-w-md text-lg leading-relaxed text-black/60 text-pretty">
                  Tell us about your goals. We&apos;ll be honest about whether 98 Studio is the right partner for your growth - and if not, we&apos;ll introduce you to someone who is.
                </p>
                <p className="text-sm font-mono uppercase tracking-widest text-[#e26215]">
                  No pressure. Just intent.
                </p>
              </div>
            </Reveal>
          </div>
          
          <div className="md:col-span-7 relative">
            <Reveal delay={0.2}>
              {/* Added a subtle border/shadow to the embed container to make it look like a premium card */}
              <div className="overflow-hidden rounded-2xl border hairline bg-[#fafafa] shadow-sm">
                <CalendlyEmbed minHeight={620} />
              </div>
            </Reveal>
            
            {/* Decorative element to reinforce the "Premium" feel */}
            <div className="absolute -bottom-4 -right-4 -z-10 h-32 w-32 rounded-full bg-[#e26215]/5 blur-3xl" />
          </div>
        </div>
      </div>
    </section>
  );
}