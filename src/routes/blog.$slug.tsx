import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { posts } from "@/data/posts";
import { Reveal } from "@/components/shared/Reveal";
import { ArrowLeft } from "lucide-react";

export const Route = createFileRoute("/blog/$slug")({
  loader: ({ params }) => {
    const post = posts.find((p) => p.slug === params.slug);
    if (!post) throw notFound();
    return { post };
  },
  head: ({ loaderData }) => ({
    meta: loaderData?.post
      ? [
          { title: `${loaderData.post.title} — 98 Studio Journal` },
          { name: "description", content: loaderData.post.excerpt },
          { property: "og:title", content: loaderData.post.title },
          { property: "og:description", content: loaderData.post.excerpt },
          { property: "og:type", content: "article" },
        ]
      : [{ title: "Post — 98 Studio" }],
  }),
  notFoundComponent: () => (
    <div className="pt-40 px-6 mx-auto max-w-2xl text-center">
      <h1 className="text-4xl font-semibold">Post not found</h1>
      <Link to="/blog" className="mt-6 inline-block text-accent">Back to journal</Link>
    </div>
  ),
  errorComponent: ({ error, reset }) => (
    <div className="pt-40 px-6 mx-auto max-w-2xl text-center">
      <h1 className="text-2xl font-semibold">Couldn't load this post</h1>
      <p className="mt-3 text-sm text-muted-foreground">{error.message}</p>
      <button onClick={reset} className="mt-6 rounded-full bg-foreground px-4 py-2 text-sm text-background">Retry</button>
    </div>
  ),
  component: PostPage,
});

function PostPage() {
  const { post } = Route.useLoaderData();
  return (
    <article className="pt-32 sm:pt-40 pb-16">
      <div className="mx-auto max-w-3xl px-6">
        <Reveal>
          <Link to="/blog" className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-accent">
            <ArrowLeft className="h-4 w-4" /> All posts
          </Link>
        </Reveal>

        <Reveal>
          <p className="mt-12 text-xs uppercase tracking-[0.22em] text-accent">
            {post.category} · {post.date} · {post.readingTime} read
          </p>
          <h1 className="mt-6 text-balance text-4xl font-semibold leading-tight tracking-tight sm:text-5xl md:text-6xl">
            {post.title}
          </h1>
          <p className="mt-8 text-xl text-muted-foreground text-pretty">{post.excerpt}</p>
        </Reveal>

        <Reveal delay={0.1}>
          <div className="mt-12 space-y-6 text-lg leading-relaxed text-foreground/90">
            {post.body.map((para: string, i: number) => (
              <p key={i} className="text-pretty">{para}</p>
            ))}
          </div>
        </Reveal>

        <Reveal>
          <div className="mt-16 border-t hairline pt-8">
            <Link to="/blog" className="text-sm text-muted-foreground hover:text-accent">
              ← Back to all posts
            </Link>
          </div>
        </Reveal>
      </div>
    </article>
  );
}
