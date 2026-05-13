export type Service = {
  id: string;
  number: string;
  title: string;
  summary: string;
  bullets: string[];
};

export const services: Service[] = [
  {
    id: "web",
    number: "01",
    title: "Web Design & Development",
    summary:
      "Custom-coded digital experiences built for performance. We engineer headless-ready websites that outperform trends and convert at scale.",
    bullets: [
      "Custom Next.js & React Development",
      "Editorial UI/UX Design",
      "Headless CMS (Sanity, Payload)",
      "Performance & Core Web Vitals Optimization",
    ],
  },
  {
    id: "seo",
    number: "02",
    title: "SEO & Digital Growth",
    summary:
      "Strategy-led organic growth. We combine technical precision with localized authority to ensure your brand dominates search rankings.",
    bullets: [
      "Technical SEO & Core Frameworks",
      "Local SEO & Google Map Dominance",
      "Editorial Content & Cluster Strategy",
      "AI-Enhanced Search Visibility",
    ],
  },
];