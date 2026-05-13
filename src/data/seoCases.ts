import s1 from "@/assets/seo-1.jpg";
import s2 from "@/assets/seo-2.jpg";

export type SeoCase = {
  id: string;
  title: string;
  client: string;
  summary: string;
  metric: string;
  metricLabel: string;
  category: "SEO";
  cover: string;
  pdfUrl: string; // drop a real PDF here
  year: string;
};

export const seoCases: SeoCase[] = [
  {
    id: "maison-noir-seo",
    title: "From page 4 to position 1",
    client: "Maison Noir",
    summary:
      "Technical re-architecture, programmatic landing pages, and a category-led content sprint. 12 months, +312% organic.",
    metric: "+312%",
    metricLabel: "Organic traffic, 12 mo",
    category: "SEO",
    cover: s1,
    pdfUrl: "",
    year: "2025",
  },
  {
    id: "praxis-seo",
    title: "Owning the comparison query",
    client: "Praxis",
    summary:
      "Cluster strategy across 47 high-intent comparison queries. Built the assets, won the SERP, lifted demo signups 4.1x.",
    metric: "4.1×",
    metricLabel: "Demo signups",
    category: "SEO",
    cover: s2,
    pdfUrl: "",
    year: "2024",
  },
];
