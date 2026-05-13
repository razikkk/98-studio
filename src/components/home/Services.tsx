import { services } from "@/data/services";
import { Reveal } from "@/components/shared/Reveal";

export function Services() {
  return (
    <section className="relative border-t hairline py-24 sm:py-32 bg-white">
      <div className="mx-auto max-w-[88rem] px-6">
        <Reveal>
          <p className="text-xs uppercase font-bold tracking-[0.22em] text-[#e26215]">
            Capabilities
          </p>
          <h2 className="mt-4 max-w-3xl text-balance text-4xl font-semibold tracking-tight text-black sm:text-5xl md:text-6xl">
            Two disciplines. One studio.
          </h2>
        </Reveal>

        <div className="mt-14 grid gap-6 md:grid-cols-2">
          {services.map((s, i) => (
            <Reveal key={s.id} delay={i * 0.1}>
              <article className="group relative h-full rounded-2xl border hairline bg-[#fafafa] p-8 transition-all hover:bg-white hover:shadow-[0_30px_60px_-15px_rgba(0,0,0,0.1)]">
                <div className="flex items-start justify-between">
                  <span className="text-sm font-mono text-black/40">{s.number}</span>
                  {/* Using your brand orange for the accent dot */}
                  <span className="h-2 w-2 rounded-full bg-[#e26215] transition-all duration-500 group-hover:scale-[2] group-hover:shadow-[0_0_12px_#e26215]" />
                </div>
                
                <h3 className="mt-12 text-3xl font-medium tracking-tight text-black sm:text-4xl">
                  {s.title}
                </h3>
                
                <p className="mt-4 max-w-md text-black/70 text-pretty leading-relaxed">
                  {s.summary}
                </p>
                
                <ul className="mt-8 space-y-3 border-t hairline pt-8">
                  {s.bullets.map((b) => (
                    <li
                      key={b}
                      className="flex items-center gap-3 text-sm font-medium text-black/80 transition-colors hover:text-[#e26215]"
                    >
                      <span className="h-1.5 w-1.5 rounded-full bg-[#e26215]/30 group-hover:bg-[#e26215]" />
                      {b}
                    </li>
                  ))}
                </ul>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}