// Application-wide constants
export const APP_NAME = "TechStudio";
export const APP_DESCRIPTION = "Transform your ideas into digital reality through innovative solutions and cutting-edge technology.";
export const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL;

export const ROUTES = {
  HOME: "/",
  ABOUT: "/about",
  SERVICES: "/services",
  PROJECTS: "/projects",
  CONTACT: "/contact",
  SCHEDULE: "/schedule-consultation",
} as const;

export const META = {
  title: APP_NAME,
  description: APP_DESCRIPTION,
  keywords: [
    "web development",
    "mobile development",
    "cloud solutions",
    "AI/ML",
    "digital transformation",
    "tech education"
  ],
} as const;