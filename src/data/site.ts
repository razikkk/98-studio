// Central CMS-ready content. Swap for Sanity/Contentful by replacing this module.
export const site = {
  brand: {
    name: "98 Studio",
    mark: "98",
    tagline: "Web Design & SEO Built to Outperform.",
  },
  nav: [
    { label: "Work", to: "/works" as const },
    { label: "About", to: "/about" as const },
    { label: "Journal", to: "/blog" as const },
    { label: "Contact", to: "/contact" as const },
  ],
  contact: {
    // Update these to your actual Kerala business details
    phone: "+91 9562 565850", 
    phoneHref: "tel:+919562565850",
    email: "9eightstudio@gmail.com",
    emailHref: "mailto:9eightstudio@gmail.com",
    instagram: "https://www.instagram.com/9eight.studio/", // Update with your real handle
    instagramHandle: "@98.studio",
    linkedin: "https://www.linkedin.com/company/98studio",
    linkedinHandle: "98 Studio",
    location: "Kerala, India · Remote Worldwide",
  },
  calendly: {
    // Drop your specific Calendly URL here
    url: "https://calendly.com/9eightstudio/30min",
  },
};