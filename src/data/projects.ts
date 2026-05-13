import p1 from "@/assets/project-1-1.png";
import p2 from "@/assets/project-1-2.png";
import p3 from "@/assets/project-1-3.png";
import p4 from "@/assets/project-2-1.png";
import p5 from "@/assets/project-2-2.png";
import p6 from "@/assets/project-2-3.png";
import p7 from "@/assets/project-3-1.png";
import p8 from "@/assets/project-3-2.png";
import p9 from "@/assets/project-3-3.png";
import p10 from "@/assets/project-4-1.png";
import p11 from "@/assets/project-4-2.png";
import p12 from "@/assets/project-4-3.png";
import p13 from "@/assets/project-5-1.png";
import p14 from "@/assets/project-5-2.png";
import p15 from "@/assets/project-5-3.png";




export type Project = {
  id: string;
  title: string;
  client: string;
  description: string;
  longDescription: string;
  category: "Websites";
  cover: string;
  gallery: string[];
  liveUrl: string;
  year: string;
  services: string[];
};

export const projects: Project[] = [
  {
    id: "righthire-uae",
    title: "Right Hire Car Rental",
    client: "Right Hire UAE",
    description: "High-speed digital showroom for a Dubai-based fleet.",
    longDescription:
      "A lightning-fast static platform engineered for the UAE's premium car rental market. By removing the overhead of a traditional backend, we achieved near-instant load times and perfect Core Web Vitals. The site serves as a high-conversion digital showroom, connecting premium clients to luxury vehicles with zero friction.",
    category: "Websites", 
    cover: p1, // Ensure you import the right image at the top
    gallery: [p1, p2,p3], 
    liveUrl: "https://www.righthire.ae/",
    year: "2025",
    services: ["Static Engineering", "UI/UX Design", "Conversion SEO"],
  },
  {
    id: "ezora-tours",
    title: "Ezora Tours",
    client: "Ezora Tours UAE",
    description: "Immersive travel showcase for a Dubai-based agency.",
    longDescription:
      "A lightweight, high-performance static website developed for Ezora Tours. Designed to function as a premium digital brochure, the platform focuses on high-resolution visual storytelling and rapid load times. We prioritized technical SEO and mobile responsiveness to ensure a seamless experience for global travelers exploring UAE tour packages.",
    category: "Websites",
    cover: p4, // Import your specific Ezora cover image at the top
    gallery: [p4, p5, p6], // Add unique gallery images for this travel project
    liveUrl: "http://ezoratours.com/",
    year: "2025",
    services: ["Static Web Engineering", "Travel UI Design", "Performance SEO"],
  },
  {
    id: "haji-malang-international",
    title: "Haji Malang Institution",
    client: "Haji Malang International",
    description: "Academic digital presence for a global educational institution.",
    longDescription:
      "A clean, authoritative static platform designed for Haji Malang International. We focused on structured information architecture to ensure that educational resources and institutional data are easily accessible. The build priorities were long-term stability and fast global delivery, providing a reliable digital touchpoint for students, parents, and stakeholders worldwide.",
    category: "Websites",
    cover: p7, // Import your specific Haji Malang cover image at the top
    gallery: [p7, p8, p9], 
    liveUrl: "https://hajimalanginternational.com/",
    year: "2024",
    services: ["Institutional Web Design", "Information Architecture", "Global CDN Deployment"],
  },
  {
    id: "medsprings",
    title: "Medsprings",
    client: "Medsprings India",
    description: "Global B2B export platform for medical supplies.",
    longDescription:
      "A sophisticated B2B trade platform engineered for the international medical export market. Specifically optimized for European regulatory standards, the site features a custom-built backend and admin panel for dynamic product catalog management. We focused on high-trust UI design and technical SEO to connect South Indian manufacturing excellence with global healthcare distributors.",
    category: "Websites", 
    cover: p10, // Import your specific Medsprings cover image
    gallery: [p10, p11, p12], 
    liveUrl: "https://medsprings.in/",
    year: "2024",
    services: ["B2B E-commerce", "Custom Admin Panel", "International SEO"],
  },
  {
    id: "freeze-control",
    title: "Freeze Control",
    client: "Freeze Control Bangalore",
    description: "Digital storefront for a leading Bangalore HVAC firm.",
    longDescription:
      "A high-performance static website engineered for one of Bangalore's premier HVAC solution providers. We focused on local SEO optimization and a mobile-first architecture to capture high-intent service inquiries. The site functions as a streamlined lead-generation engine, emphasizing technical expertise and rapid response times for both residential and industrial cooling sectors.",
    category: "Websites",
    cover: p13, // Import your specific Freeze Control cover image
    gallery: [p13, p14, p15], 
    liveUrl: "https://www.freezecontrol.in/",
    year: "2024",
    services: ["Local SEO", "Lead Generation UI", "Static Engineering"],
  },
];

export const featuredProjects = projects.slice(0, 3);
