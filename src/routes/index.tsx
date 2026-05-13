import { createFileRoute } from "@tanstack/react-router";
import { Hero } from "@/components/home/Hero";
import { FeaturedProjects } from "@/components/home/FeaturedProjects";
import { Services } from "@/components/home/Services";
import { AboutBrief } from "@/components/home/AboutBrief";
import { CalendlySection } from "@/components/home/CalendlySection";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "98 Studio — Web Design & SEO with intent" },
      { name: "description", content: "Editorial-grade websites and compounding SEO programs for brands that take their work seriously." },
      { property: "og:title", content: "98 Studio — Web Design & SEO with intent" },
      { property: "og:description", content: "Editorial-grade websites and compounding SEO programs." },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <>
      <Hero />
      <FeaturedProjects />
      <Services />
      <AboutBrief />
      <CalendlySection />
    </>
  );
}
