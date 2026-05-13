import { createFileRoute, Link } from "@tanstack/react-router";
import { posts } from "@/data/posts";
import { Reveal } from "@/components/shared/Reveal";
import { ArrowUpRight } from "lucide-react";

export const Route = createFileRoute("/blog/")({
  head: () => ({
    meta: [
      { title: "Journal — 98 Studio" },
      { name: "description", content: "Notes on design, SEO, and the craft of building websites that earn their keep." },
      { property: "og:title", content: "Journal — 98 Studio" },
      { property: "og:description", content: "Notes on design, SEO, and the craft of building websites." },
    ],
  }),
  component: BlogIndex,
});

function BlogIndex() {
  return (
    <div className="pt-32 sm:pt-40 pb-12">
      <section className="mx-auto max-w-[88rem] px-6">
        <Reveal>
          <p className="text-xs uppercase tracking-[0.22em] text-muted-foreground">Journal</p>
          <h1 className="mt-4 max-w-3xl text-balance text-5xl font-semibold tracking-tight sm:text-7xl md:text-8xl">
            Notes from the studio.
          </h1>
        </Reveal>
      </section>

      <section className="mx-auto max-w-[88rem] px-6 py-16 sm:py-24">
        <div className="divide-y hairline border-y hairline">
          {posts.map((p, i) => (
            <Reveal key={p.slug} delay={i * 0.05}>
              <Link
                to="/blog/$slug"
                params={{ slug: p.slug }}
                className="group grid gap-4 py-10 md:grid-cols-12 md:items-baseline md:gap-12"
              >
                <div className="md:col-span-2">
                  <p className="text-xs uppercase tracking-[0.22em] text-muted-foreground">
                    {p.date}
                  </p>
                </div>
                <div className="md:col-span-2">
                  <p className="text-xs uppercase tracking-[0.22em] text-accent">
                    {p.category}
                  </p>
                </div>
                <div className="md:col-span-7">
                  <h2 className="text-2xl font-medium tracking-tight sm:text-3xl group-hover:text-accent transition-colors">
                    {p.title}
                  </h2>
                  <p className="mt-3 max-w-2xl text-muted-foreground text-pretty">
                    {p.excerpt}
                  </p>
                  <p className="mt-3 text-xs text-muted-foreground">{p.readingTime} read</p>
                </div>
                <div className="md:col-span-1 md:text-right">
                  <ArrowUpRight className="h-5 w-5 text-muted-foreground transition-all group-hover:text-accent group-hover:-translate-y-0.5 group-hover:translate-x-0.5 md:ml-auto" />
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
      </section>
    </div>
  );
}
