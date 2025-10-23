/**
 * Common TypeScript types used across the application
 */

// Base section props
export interface BaseSectionProps {
  title?: string;
  description?: string;
  className?: string;
}

// Common variant types
export type SectionVariant = "default" | "compact" | "featured" | "full";
export type ColorScheme = "light" | "dark" | "primary" | "accent";

// Image types
export interface ImageData {
  src: string;
  alt: string;
  width?: number;
  height?: number;
}

// Link types
export interface LinkData {
  href: string;
  label: string;
  external?: boolean;
}

// CTA (Call to Action) types
export interface CTAButton {
  text: string;
  href: string;
  variant?: "primary" | "secondary" | "outline";
  external?: boolean;
}

// Social media types
export type SocialPlatform =
  | "facebook"
  | "twitter"
  | "instagram"
  | "linkedin"
  | "youtube";

export interface SocialLink {
  platform: SocialPlatform;
  url: string;
}

// Pagination
export interface PaginationProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
}

// Meta data
export interface MetaData {
  title: string;
  description: string;
  keywords?: string[];
  image?: string;
}
