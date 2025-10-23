/**
 * TypeScript types for all sections
 */

import type {
  BaseSectionProps,
  SectionVariant,
  ImageData,
  CTAButton,
  SocialLink,
} from "./common";

// ============================================================================
// SHARED SECTIONS
// ============================================================================

// Hero Section
export interface HeroSectionProps extends BaseSectionProps {
  subtitle?: string;
  backgroundImage: string;
  ctaButtons?: CTAButton[];
  variant?: "fullscreen" | "standard" | "compact";
  showScrollIndicator?: boolean;
  overlay?: boolean;
  overlayOpacity?: number;
}

// About Us Section
export interface AboutUsSectionProps extends BaseSectionProps {
  content: string;
  images?: ImageData[];
  stats?: Array<{
    label: string;
    value: string | number;
  }>;
  variant?: SectionVariant;
}

// Contact Section
export interface ContactSectionProps extends BaseSectionProps {
  email?: string;
  phone?: string;
  address?: string;
  socialLinks?: SocialLink[];
  showForm?: boolean;
  mapUrl?: string;
}

// Gallery Section
export interface GallerySectionProps extends BaseSectionProps {
  images: ImageData[];
  columns?: 2 | 3 | 4;
  variant?: "grid" | "masonry" | "carousel";
}

// Testimonials Section
export interface Testimonial {
  name: string;
  role: string;
  company: string;
  avatar: string;
  content: string;
  rating?: number;
}

export interface TestimonialsSectionProps extends BaseSectionProps {
  testimonials: Testimonial[];
  variant?: SectionVariant;
  showRatings?: boolean;
}

// Why Choose Us Section
export interface Reason {
  icon: string;
  title: string;
  description: string;
}

export interface WhyChooseUsSectionProps extends BaseSectionProps {
  reasons: Reason[];
  variant?: SectionVariant;
}

// ============================================================================
// HOME PAGE SECTIONS
// ============================================================================

// Our Services Section
export interface Service {
  id: string;
  title: string;
  description: string;
  icon: string;
  image: string;
  link?: string;
}

export interface OurServicesSectionProps extends BaseSectionProps {
  services: Service[];
  variant?: "grid" | "carousel" | "list";
}

// Our Process Section
export interface ProcessStep {
  step: number;
  title: string;
  description: string;
  icon: string;
}

export interface OurProcessSectionProps extends BaseSectionProps {
  steps: ProcessStep[];
  variant?: "vertical" | "horizontal" | "timeline";
}

// Our Numbers Section
export interface Statistic {
  label: string;
  value: string | number;
  suffix?: string;
  prefix?: string;
  icon?: string;
}

export interface OurNumbersSectionProps extends BaseSectionProps {
  statistics: Statistic[];
  variant?: SectionVariant;
  animated?: boolean;
}

// Showreel Section
export interface ShowreelSectionProps extends BaseSectionProps {
  videoUrl: string;
  thumbnail: string;
  autoplay?: boolean;
  variant?: "fullwidth" | "contained";
}

// ============================================================================
// SERVICES PAGE SECTIONS
// ============================================================================

// Service List Section
export interface ServiceDetail extends Service {
  features: string[];
  pricing?: string;
}

export interface ServiceListSectionProps extends BaseSectionProps {
  services: ServiceDetail[];
  variant?: "cards" | "list" | "accordion";
}

// Service Details Section
export interface ServiceDetailsSectionProps extends BaseSectionProps {
  service: ServiceDetail;
  relatedServices?: Service[];
}

// ============================================================================
// ABOUT PAGE SECTIONS
// ============================================================================

// Team Section
export interface TeamMember {
  name: string;
  role: string;
  bio?: string;
  avatar: string;
  socialLinks?: SocialLink[];
}

export interface TeamSectionProps extends BaseSectionProps {
  members: TeamMember[];
  variant?: "grid" | "carousel";
}

// History Section
export interface Milestone {
  year: string | number;
  title: string;
  description: string;
  image?: string;
}

export interface HistorySectionProps extends BaseSectionProps {
  milestones: Milestone[];
  variant?: "timeline" | "cards";
}

// ============================================================================
// NEWS PAGE SECTIONS
// ============================================================================

// News Article
export interface NewsArticle {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  content?: string;
  author: string;
  date: string;
  category: string;
  image: string;
  tags?: string[];
}

// News Featured Section
export interface NewsFeaturedSectionProps extends BaseSectionProps {
  featured: NewsArticle;
}

// News Grid Section
export interface NewsGridSectionProps extends BaseSectionProps {
  articles: NewsArticle[];
  variant?: "grid" | "list";
  showPagination?: boolean;
  itemsPerPage?: number;
}

// News Article Section (single article page)
export interface NewsArticleSectionProps {
  article: NewsArticle;
  relatedArticles?: NewsArticle[];
}
