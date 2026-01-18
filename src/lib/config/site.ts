export const siteConfig = {
  name: "TechStudio",
  description: "Transform your ideas into digital reality through innovative solutions and cutting-edge technology.",
  url: process.env.NEXT_PUBLIC_SITE_URL || "https://techstudio.com",
  ogImage: "/images/og.jpg",
  links: {
    twitter: "https://twitter.com/techstudio",
    github: "https://github.com/techstudio",
    linkedin: "https://linkedin.com/company/techstudio"
  },
  contact: {
    email: "contact@techstudio.com",
    phone: "+1 (555) 123-4567",
    address: "123 Tech Street, Silicon Valley, CA 94025"
  },
  meta: {
    keywords: [
      "web development",
      "mobile development",
      "cloud solutions",
      "AI/ML",
      "digital transformation",
      "tech education"
    ]
  }
} as const;

export type SiteConfig = typeof siteConfig;