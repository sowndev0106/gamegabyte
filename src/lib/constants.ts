// Brand Colors
export const COLORS = {
  primary: "#B6E802",
  light: "#FFFFFF",
  dark: "#202124",
  accent: "#601FEB",
} as const;

// App Configuration
export const APP_CONFIG = {
  name: "GameGabite",
  description: "A modern Next.js project with custom design system",
  url: process.env.NEXT_PUBLIC_APP_URL || "http://localhost:3000",
} as const;

// Social Links (example)
export const SOCIAL_LINKS = {
  github: "https://github.com",
  twitter: "https://twitter.com",
  linkedin: "https://linkedin.com",
} as const;

// Navigation Items (example)
export const NAV_ITEMS = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Features", href: "/features" },
  { label: "Contact", href: "/contact" },
] as const;
