export const featureFlags = {
  enableBlog: process.env.NEXT_PUBLIC_ENABLE_BLOG === "true",
  enableCommunity: process.env.NEXT_PUBLIC_ENABLE_COMMUNITY === "true",
  enableAcademy: process.env.NEXT_PUBLIC_ENABLE_ACADEMY === "true",
  enableAnalytics: process.env.NEXT_PUBLIC_ENABLE_ANALYTICS === "true",
} as const;

export type FeatureFlags = typeof featureFlags;