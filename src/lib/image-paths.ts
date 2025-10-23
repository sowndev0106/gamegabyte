/**
 * Image Paths Constants
 *
 * Centralized image paths để dễ quản lý và avoid typos
 */

// Backgrounds
export const BACKGROUNDS = {
  hero: "/images/backgrounds/hero-bg.jpg",
  section1: "/images/backgrounds/section-1-bg.jpg",
  section2: "/images/backgrounds/section-2-bg.jpg",
  footer: "/images/backgrounds/footer-bg.jpg",
  parallax: "/images/backgrounds/parallax-bg.jpg",
} as const;

// Hero backgrounds for different pages
export const HERO_BACKGROUNDS = {
  home: "/images/sections/hero/home-hero-bg.jpg",
  services: "/images/sections/hero/services-hero-bg.jpg",
  about: "/images/sections/hero/about-hero-bg.jpg",
  news: "/images/sections/hero/news-hero-bg.jpg",
} as const;

// Logos
export const LOGOS = {
  main: "/images/logos/logo.svg",
  white: "/images/logos/logo-white.svg",
  dark: "/images/logos/logo-dark.svg",
  small: "/images/logos/logo-small.png",
  icon: "/images/logos/icon.svg",
} as const;

// Icons
export const ICONS = {
  // Social media icons
  facebook: "/images/icons/social-media/facebook.svg",
  twitter: "/images/icons/social-media/twitter.svg",
  instagram: "/images/icons/social-media/instagram.svg",
  linkedin: "/images/icons/social-media/linkedin.svg",
  youtube: "/images/icons/social-media/youtube.svg",

  // Custom icons
  feature1: "/images/icons/feature-1.svg",
  feature2: "/images/icons/feature-2.svg",
  feature3: "/images/icons/feature-3.svg",
} as const;

// Section Images
export const SECTIONS = {
  // Features
  feature1: "/images/sections/feature-1.jpg",
  feature2: "/images/sections/feature-2.jpg",
  feature3: "/images/sections/feature-3.jpg",

  // Products
  product1: "/images/sections/product-1.jpg",
  product2: "/images/sections/product-2.jpg",
  product3: "/images/sections/product-3.jpg",
  product4: "/images/sections/product-4.jpg",

  // About
  aboutTeam: "/images/sections/about-team.jpg",
  aboutOffice: "/images/sections/about-office.jpg",

  // Contact
  contactHero: "/images/sections/contact-hero.jpg",

  // Analytics & Misc
  analytics: "/images/sections/analytics.jpg",
  collaboration: "/images/sections/collaboration.jpg",
  security: "/images/sections/security.jpg",
} as const;

// Gallery Images
export const GALLERY = Array.from({ length: 12 }, (_, i) => ({
  src: `/images/sections/gallery-${i + 1}.jpg`,
  alt: `Gallery image ${i + 1}`,
}));

// Placeholders (có thể dùng cho development)
export const PLACEHOLDERS = {
  image: "https://via.placeholder.com/800x600?text=Image+Placeholder",
  avatar: "https://via.placeholder.com/100x100?text=Avatar",
  logo: "https://via.placeholder.com/200x60?text=Logo",
  hero: "https://via.placeholder.com/1920x1080?text=Hero+Background",
} as const;

/**
 * Helper function để get image path với fallback
 */
export function getImagePath(
  path: string | undefined,
  fallback: string = PLACEHOLDERS.image
): string {
  return path || fallback;
}

/**
 * Helper function để build image URL với base path
 */
export function buildImageUrl(path: string): string {
  // Nếu đã là absolute URL, return as is
  if (path.startsWith("http") || path.startsWith("//")) {
    return path;
  }

  // Ensure path starts with /
  return path.startsWith("/") ? path : `/${path}`;
}

/**
 * Type-safe image path getter
 */
export type ImageCategory = "backgrounds" | "logos" | "icons" | "sections";

export function getImage(
  category: ImageCategory,
  key: string
): string | undefined {
  const categories = {
    backgrounds: BACKGROUNDS,
    logos: LOGOS,
    icons: ICONS,
    sections: SECTIONS,
  };

  const categoryObj = categories[category];
  return categoryObj[key as keyof typeof categoryObj];
}

/**
 * Example usage:
 *
 * import { BACKGROUNDS, LOGOS, SECTIONS, getImagePath } from "@/lib/image-paths";
 *
 * // Direct usage
 * <Image src={BACKGROUNDS.hero} alt="Hero" />
 *
 * // With fallback
 * <Image src={getImagePath(userImage, PLACEHOLDERS.avatar)} alt="User" />
 *
 * // Type-safe getter
 * <Image src={getImage("backgrounds", "hero")} alt="Hero" />
 */
