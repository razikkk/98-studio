import { createFileRoute } from "@tanstack/react-router";
import { useMemo, useState } from "react";
import { projects, type Project } from "@/data/projects";
import { seoCases, type SeoCase } from "@/data/seoCases";
import { Reveal } from "@/components/shared/Reveal";
import { ProjectModal } from "@/components/works/ProjectModal";
import { SeoCaseModal } from "@/components/works/SeoCaseModal";
import { ArrowUpRight } from "lucide-react";

export const Route = createFileRoute("/works")({
  head: () => ({
    meta: [
      { title: "Work — 98 Studio" },
      { name: "description", content: "Selected websites and SEO case studies from 98 Studio." },
      { property: "og:title", content: "Work — 98 Studio" },
      { property: "og:description", content: "Selected websites and SEO case studies." },
    ],
  }),
  component: WorksPage,
});

type Filter = "All" | "Websites" | "SEO";

function WorksPage() {
  const [filter, setFilter] = useState<Filter>("All");
  const [activeProject, setActiveProject] = useState<Project | null>(null);
  const [activeCase, setActiveCase] = useState<SeoCase | null>(null);

  const showWebsites = filter === "All" || filter === "Websites";
  const showSeo = filter === "All" || filter === "SEO";

  const filters: Filter[] = useMemo(() => ["All", "Websites", "SEO"], []);

  return (
    <div className="pt-32 sm:pt-40 pb-20">
      <div className="mx-auto max-w-[88rem] px-6">
        <Reveal>
          <p className="text-xs uppercase tracking-[0.22em] text-muted-foreground">
            Portfolio
          </p>
          <h1 className="mt-4 max-w-3xl text-balance text-5xl font-semibold tracking-tight sm:text-7xl md:text-8xl">
            Work, in detail.
          </h1>
        </Reveal>

        <div className="mt-12 flex items-center gap-2 border-b hairline pb-4">
          {filters.map((f) => (
            <button
              key={f}
              onClick={() => setFilter(f)}
              className={`rounded-full px-4 py-2 text-sm transition-all ${
                filter === f
                  ? "bg-foreground text-background"
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              {f}
            </button>
          ))}
        </div>

        {showWebsites && (
          <section className="mt-12">
            <div className="grid gap-6 md:grid-cols-2">
              {projects.map((p, i) => (
                <Reveal key={p.id} delay={i * 0.05}>
                  <button
                    type="button"
                    onClick={() => setActiveProject(p)}
                    className="group relative block w-full overflow-hidden rounded-2xl border hairline bg-secondary text-left"
                  >
                    <div className="aspect-[4/3] overflow-hidden">
                      <img
                        src={p.cover}
                        alt={`${p.title} — ${p.description}`}
                        loading="lazy"
                        className="h-full w-full object-cover transition-transform duration-[1200ms] group-hover:scale-105"
                      />
                    </div>
                    <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/75 via-black/20 to-transparent p-6">
                      <div className="flex items-end justify-between gap-4">
                        <div>
                          <p className="text-xs uppercase tracking-[0.22em] text-white/70">
                            {p.client} · {p.year}
                          </p>
                          <h2 className="mt-1.5 text-xl font-medium text-white">{p.title}</h2>
                          <p className="mt-1 max-w-md text-sm text-white/75">
                            {p.description}
                          </p>
                        </div>
                        <span className="hidden sm:inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-white text-foreground transition-all group-hover:bg-accent group-hover:text-accent-foreground">
                          <ArrowUpRight className="h-4 w-4" />
                        </span>
                      </div>
                    </div>
                  </button>
                </Reveal>
              ))}
            </div>
          </section>
        )}

        {showSeo && (
          <section className="mt-20">
            <Reveal>
              <h2 className="text-xs uppercase tracking-[0.22em] text-muted-foreground">
                SEO case studies
              </h2>
            </Reveal>
            <div className="mt-6 grid gap-6 md:grid-cols-2">
              {seoCases.map((c, i) => (
                <Reveal key={c.id} delay={i * 0.05}>
                  <button
                    type="button"
                    onClick={() => setActiveCase(c)}
                    className="group block w-full overflow-hidden rounded-2xl border hairline bg-foreground text-background text-left transition-all hover:-translate-y-1"
                  >
                    <div className="p-8 sm:p-10">
                      <div className="flex items-start justify-between">
                        <p className="text-xs uppercase tracking-[0.22em] text-background/60">
                          {c.client} · {c.year}
                        </p>
                        <ArrowUpRight className="h-5 w-5 text-background/60 transition-all group-hover:text-accent group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                      </div>
                      <p className="mt-10 text-6xl sm:text-7xl font-semibold text-accent tracking-tight">
                        {c.metric}
                      </p>
                      <p className="mt-2 text-sm text-background/60">{c.metricLabel}</p>
                      <h3 className="mt-10 text-2xl font-medium tracking-tight">{c.title}</h3>
                      <p className="mt-3 text-sm text-background/70 text-pretty">{c.summary}</p>
                    </div>
                  </button>
                </Reveal>
              ))}
            </div>
          </section>
        )}
      </div>

      <ProjectModal
        project={activeProject}
        open={activeProject !== null}
        onOpenChange={(v) => !v && setActiveProject(null)}
      />
      <SeoCaseModal
        caseStudy={activeCase}
        open={activeCase !== null}
        onOpenChange={(v) => !v && setActiveCase(null)}
      />
    </div>
  );
}
