import { Link } from "@tanstack/react-router";
import { featuredProjects } from "@/data/projects";
import { Reveal } from "@/components/shared/Reveal";
import { ArrowUpRight } from "lucide-react";

export function FeaturedProjects() {
  return (
    <section className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-[88rem] px-6">
        <div className="flex items-end justify-between gap-6 mb-12 sm:mb-16">
          <Reveal>
            <p className="text-xs uppercase tracking-[0.22em] text-muted-foreground">
              Selected work
            </p>
            <h2 className="mt-4 max-w-2xl text-balance text-4xl font-semibold tracking-tight sm:text-5xl md:text-6xl">
              Projects we're proud of.
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <Link
              to="/works"
              className="hidden sm:inline-flex items-center gap-2 text-sm font-medium hover:text-accent"
            >
              All projects <ArrowUpRight className="h-4 w-4" />
            </Link>
          </Reveal>
        </div>

        <div className="grid gap-6 lg:grid-cols-12">
          {featuredProjects.map((p, i) => (
            <Reveal
              key={p.id}
              delay={i * 0.08}
              className={i === 0 ? "lg:col-span-8" : "lg:col-span-4"}
            >
              <Link
                to="/works"
                className="group relative block overflow-hidden rounded-2xl border hairline bg-secondary"
              >
                <div className="aspect-[4/3] overflow-hidden">
                  <img
                    src={p.cover}
                    alt={`${p.title} — ${p.description}`}
                    width={1280}
                    height={960}
                    loading="lazy"
                    className="h-full w-full object-cover transition-transform duration-[1200ms] group-hover:scale-105"
                  />
                </div>
                <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent p-6">
                  <div className="flex items-end justify-between gap-4">
                    <div>
                      <h3 className="text-lg font-medium text-white">{p.title}</h3>
                      <p className="mt-1 max-w-md text-sm text-white/75">{p.description}</p>
                    </div>
                    <span className="hidden sm:inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-white text-foreground transition-transform group-hover:-translate-y-0.5 group-hover:bg-accent group-hover:text-accent-foreground">
                      <ArrowUpRight className="h-4 w-4" />
                    </span>
                  </div>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
