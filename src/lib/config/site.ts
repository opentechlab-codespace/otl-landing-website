export const siteConfig = {
  name: "OpenTech Lab",
  description:
    "Transform your ideas into digital reality through innovative solutions and cutting-edge technology.",
  url: process.env.NEXT_PUBLIC_SITE_URL || "https://opentechlab.com",
  ogImage: "/images/og.jpg",
  links: {
    twitter: "https://twitter.com/opentechlab",
    github: "https://github.com/opentechlab",
    linkedin: "https://linkedin.com/company/opentechlab",
  },
  contact: {
    email: "contact@opentechlab.com",
    phone: "+1 (555) 123-4567",
    address: "123 Tech Street, Silicon Valley, CA 94025",
  },
  meta: {
    keywords: [
      "web development",
      "mobile development",
      "cloud solutions",
      "AI/ML",
      "digital transformation",
      "tech education",
    ],
  },
} as const;

export type SiteConfig = typeof siteConfig;
