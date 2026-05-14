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
    id: "sproute-kids-seo",
    title: "From page 2 to position 1 in 4 days",
    client: "Sproute Kids",
    summary:
      "Rapid growth through Google Business Profile (GMB) optimization and targeted local SEO. Secured the #1 spot from #16 in just 4 days.",
    metric: "#1 Spot",
    metricLabel: "Local Search Ranking",
    category: "SEO",
    cover: s1, // Keep this as your cover variable
    pdfUrl: "/sproute-kid-case-study.pdf",
    year: "2026",
  },
  // {
  //   id: "praxis-seo",
  //   title: "Owning the comparison query",
  //   client: "Praxis",
  //   summary:
  //     "Cluster strategy across 47 high-intent comparison queries. Built the assets, won the SERP, lifted demo signups 4.1x.",
  //   metric: "4.1×",
  //   metricLabel: "Demo signups",
  //   category: "SEO",
  //   cover: s2,
  //   pdfUrl: "",
  //   year: "2024",
  // },
];
