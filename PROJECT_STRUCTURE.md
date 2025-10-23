# Project Structure Guide

Cấu trúc project được tổ chức để tối ưu việc tái sử dụng components và sections.

---

## 📁 Directory Structure

```
gamegabite/
├── src/
│   ├── app/                          # Next.js App Router
│   │   ├── (home)/
│   │   │   └── page.tsx             # Home page
│   │   ├── services/
│   │   │   └── page.tsx             # Services page
│   │   ├── about/
│   │   │   └── page.tsx             # About Us page
│   │   ├── news/
│   │   │   ├── page.tsx             # News listing page
│   │   │   └── [slug]/
│   │   │       └── page.tsx         # Single news article
│   │   ├── layout.tsx               # Root layout
│   │   └── globals.css              # Global styles
│   │
│   ├── sections/                     # Section components (reusable)
│   │   ├── shared/                  # Shared sections (dùng cho nhiều pages)
│   │   │   ├── hero/
│   │   │   │   ├── index.tsx       # Hero section component
│   │   │   │   └── types.ts        # TypeScript types
│   │   │   ├── about-us/
│   │   │   │   └── index.tsx
│   │   │   ├── contact/
│   │   │   │   └── index.tsx
│   │   │   ├── gallery/
│   │   │   │   └── index.tsx
│   │   │   ├── testimonials/
│   │   │   │   └── index.tsx
│   │   │   └── why-choose-us/
│   │   │       └── index.tsx
│   │   │
│   │   ├── home/                    # Home page specific sections
│   │   │   ├── our-numbers/
│   │   │   │   └── index.tsx
│   │   │   ├── our-process/
│   │   │   │   └── index.tsx
│   │   │   ├── our-services/
│   │   │   │   └── index.tsx
│   │   │   └── showreel/
│   │   │       └── index.tsx
│   │   │
│   │   ├── services/                # Services page specific sections
│   │   │   ├── service-list/
│   │   │   └── service-details/
│   │   │
│   │   ├── about/                   # About page specific sections
│   │   │   ├── team/
│   │   │   └── history/
│   │   │
│   │   └── news/                    # News page specific sections
│   │       ├── news-grid/
│   │       └── news-featured/
│   │
│   ├── components/                   # Reusable UI components
│   │   ├── ui/                      # shadcn/ui components
│   │   ├── layout/                  # Layout components
│   │   │   ├── header.tsx
│   │   │   ├── footer.tsx
│   │   │   └── navigation.tsx
│   │   └── common/                  # Common components
│   │       ├── section-wrapper.tsx
│   │       └── container.tsx
│   │
│   ├── lib/                         # Utilities
│   │   ├── utils.ts
│   │   ├── constants.ts
│   │   └── image-paths.ts
│   │
│   └── types/                       # TypeScript types
│       ├── sections.ts
│       └── common.ts
│
├── public/
│   └── images/
│       └── sections/                # Images organized by section
│           ├── hero/
│           │   ├── home-hero-bg.jpg
│           │   ├── services-hero-bg.jpg
│           │   ├── about-hero-bg.jpg
│           │   └── news-hero-bg.jpg
│           ├── about-us/
│           │   ├── team-photo.jpg
│           │   └── office-photo.jpg
│           ├── contact/
│           ├── gallery/
│           │   ├── image-1.jpg
│           │   ├── image-2.jpg
│           │   └── ...
│           ├── our-numbers/
│           ├── our-process/
│           │   ├── step-1.svg
│           │   ├── step-2.svg
│           │   └── ...
│           ├── our-services/
│           │   ├── service-1.jpg
│           │   ├── service-2.jpg
│           │   └── ...
│           ├── showreel/
│           │   └── thumbnail.jpg
│           ├── testimonials/
│           │   ├── client-1.jpg
│           │   ├── client-2.jpg
│           │   └── ...
│           └── why-choose-us/
│               ├── reason-1.svg
│               └── ...
│
└── [config files...]
```

---

## 🎯 Design Principles

### 1. Section Organization

**Shared Sections** (`src/sections/shared/`)
- Sections có thể tái sử dụng trên nhiều pages
- Examples: Hero, About Us, Contact, Testimonials, Gallery

**Page-Specific Sections** (`src/sections/{page}/`)
- Sections chỉ dùng cho một page cụ thể
- Examples: Our Numbers (home only), Service List (services only)

### 2. Component Reusability

```tsx
// ✅ Good: Reusable section
// src/sections/shared/hero/index.tsx
export function HeroSection({
  title,
  description,
  backgroundImage,
  ctaText,
  ctaLink
}: HeroProps) {
  return (
    <section className="relative h-screen">
      <BackgroundImage src={backgroundImage} alt="Hero" />
      <div className="relative z-10">
        <h1>{title}</h1>
        <p>{description}</p>
        <Button href={ctaLink}>{ctaText}</Button>
      </div>
    </section>
  );
}
```

### 3. Asset Organization

Images được tổ chức theo sections, không theo pages:

```
✅ Good:
public/images/sections/testimonials/client-1.jpg
public/images/sections/hero/about-hero-bg.jpg

❌ Bad:
public/images/home/client-1.jpg
public/images/about-page/hero.jpg
```

---

## 📄 Page Structure Examples

### Home Page Structure

```tsx
// src/app/page.tsx
import { HeroSection } from "@/sections/shared/hero";
import { OurServicesSection } from "@/sections/home/our-services";
import { OurProcessSection } from "@/sections/home/our-process";
import { OurNumbersSection } from "@/sections/home/our-numbers";
import { ShowreelSection } from "@/sections/home/showreel";
import { WhyChooseUsSection } from "@/sections/shared/why-choose-us";
import { TestimonialsSection } from "@/sections/shared/testimonials";
import { GallerySection } from "@/sections/shared/gallery";
import { AboutUsSection } from "@/sections/shared/about-us";
import { ContactSection } from "@/sections/shared/contact";

export default function HomePage() {
  return (
    <>
      <HeroSection
        title="Welcome to GameGabite"
        description="..."
        backgroundImage="/images/sections/hero/home-hero-bg.jpg"
      />
      <AboutUsSection />
      <OurServicesSection />
      <OurProcessSection />
      <OurNumbersSection />
      <ShowreelSection />
      <WhyChooseUsSection />
      <TestimonialsSection />
      <GallerySection />
      <ContactSection />
    </>
  );
}
```

### Services Page Structure

```tsx
// src/app/services/page.tsx
import { HeroSection } from "@/sections/shared/hero";
import { ServiceListSection } from "@/sections/services/service-list";
import { WhyChooseUsSection } from "@/sections/shared/why-choose-us";
import { TestimonialsSection } from "@/sections/shared/testimonials";
import { ContactSection } from "@/sections/shared/contact";

export default function ServicesPage() {
  return (
    <>
      <HeroSection
        title="Our Services"
        backgroundImage="/images/sections/hero/services-hero-bg.jpg"
      />
      <ServiceListSection />
      <WhyChooseUsSection />
      <TestimonialsSection />
      <ContactSection />
    </>
  );
}
```

### About Page Structure

```tsx
// src/app/about/page.tsx
import { HeroSection } from "@/sections/shared/hero";
import { AboutUsSection } from "@/sections/shared/about-us";
import { TeamSection } from "@/sections/about/team";
import { HistorySection } from "@/sections/about/history";
import { TestimonialsSection } from "@/sections/shared/testimonials";
import { ContactSection } from "@/sections/shared/contact";

export default function AboutPage() {
  return (
    <>
      <HeroSection
        title="About Us"
        backgroundImage="/images/sections/hero/about-hero-bg.jpg"
      />
      <AboutUsSection variant="detailed" />
      <HistorySection />
      <TeamSection />
      <TestimonialsSection />
      <ContactSection />
    </>
  );
}
```

### News Page Structure

```tsx
// src/app/news/page.tsx
import { HeroSection } from "@/sections/shared/hero";
import { NewsFeaturedSection } from "@/sections/news/news-featured";
import { NewsGridSection } from "@/sections/news/news-grid";

export default function NewsPage() {
  return (
    <>
      <HeroSection
        title="Latest News"
        backgroundImage="/images/sections/hero/news-hero-bg.jpg"
      />
      <NewsFeaturedSection />
      <NewsGridSection />
    </>
  );
}
```

---

## 🔧 Section Component Pattern

### Standard Section Structure

```tsx
// src/sections/shared/testimonials/index.tsx
import { TestimonialCard } from "./testimonial-card";
import { SectionWrapper } from "@/components/common/section-wrapper";
import { H2, Description } from "@/components/typography";
import type { TestimonialsSectionProps } from "./types";

export function TestimonialsSection({
  title = "What Our Clients Say",
  description,
  testimonials,
  variant = "default",
}: TestimonialsSectionProps) {
  return (
    <SectionWrapper id="testimonials" className="py-20 bg-light">
      <div className="container mx-auto px-4">
        <H2 className="text-center mb-4">{title}</H2>
        {description && (
          <Description className="text-center max-w-2xl mx-auto mb-16">
            {description}
          </Description>
        )}

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <TestimonialCard key={index} {...testimonial} />
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
}

// Export types
export type { TestimonialsSectionProps } from "./types";
```

### Section Types

```tsx
// src/sections/shared/testimonials/types.ts
export interface Testimonial {
  name: string;
  role: string;
  company: string;
  avatar: string;
  content: string;
  rating?: number;
}

export interface TestimonialsSectionProps {
  title?: string;
  description?: string;
  testimonials: Testimonial[];
  variant?: "default" | "compact" | "featured";
}
```

---

## 📦 Image Path Constants

```tsx
// src/lib/image-paths.ts (Updated)

// Hero backgrounds for different pages
export const HERO_BACKGROUNDS = {
  home: "/images/sections/hero/home-hero-bg.jpg",
  services: "/images/sections/hero/services-hero-bg.jpg",
  about: "/images/sections/hero/about-hero-bg.jpg",
  news: "/images/sections/hero/news-hero-bg.jpg",
} as const;

// Section-specific images
export const SECTION_IMAGES = {
  aboutUs: {
    team: "/images/sections/about-us/team-photo.jpg",
    office: "/images/sections/about-us/office-photo.jpg",
  },
  services: {
    service1: "/images/sections/our-services/service-1.jpg",
    service2: "/images/sections/our-services/service-2.jpg",
    service3: "/images/sections/our-services/service-3.jpg",
  },
  process: {
    step1: "/images/sections/our-process/step-1.svg",
    step2: "/images/sections/our-process/step-2.svg",
    step3: "/images/sections/our-process/step-3.svg",
  },
  testimonials: {
    client1: "/images/sections/testimonials/client-1.jpg",
    client2: "/images/sections/testimonials/client-2.jpg",
  },
  gallery: Array.from({ length: 12 }, (_, i) =>
    `/images/sections/gallery/image-${i + 1}.jpg`
  ),
} as const;
```

---

## 🎨 Common Components

### Section Wrapper

```tsx
// src/components/common/section-wrapper.tsx
import { cn } from "@/lib/utils";

interface SectionWrapperProps {
  id?: string;
  className?: string;
  children: React.ReactNode;
}

export function SectionWrapper({
  id,
  className,
  children
}: SectionWrapperProps) {
  return (
    <section
      id={id}
      className={cn("relative", className)}
    >
      {children}
    </section>
  );
}
```

### Container

```tsx
// src/components/common/container.tsx
import { cn } from "@/lib/utils";

interface ContainerProps {
  className?: string;
  children: React.ReactNode;
  size?: "sm" | "md" | "lg" | "xl" | "full";
}

export function Container({
  className,
  children,
  size = "xl"
}: ContainerProps) {
  const sizes = {
    sm: "max-w-3xl",
    md: "max-w-5xl",
    lg: "max-w-6xl",
    xl: "max-w-7xl",
    full: "max-w-full",
  };

  return (
    <div className={cn("container mx-auto px-4", sizes[size], className)}>
      {children}
    </div>
  );
}
```

---

## 📋 Naming Conventions

### Files & Folders
- **Folders**: kebab-case (e.g., `our-services`, `why-choose-us`)
- **Components**: PascalCase (e.g., `HeroSection`, `TestimonialCard`)
- **Files**: kebab-case for folders, index.tsx for main component

### Components
```tsx
// Section component names
{SectionName}Section
// Examples: HeroSection, TestimonialsSection, ContactSection

// Sub-components
{SectionName}{ComponentType}
// Examples: TestimonialCard, ServiceCard, GalleryItem
```

### Image Files
```
{page/context}-{description}.{ext}
// Examples:
home-hero-bg.jpg
service-web-development.jpg
client-john-doe.jpg
process-step-1.svg
```

---

## 🔄 Section Reusability Rules

### When to Make a Section Shared

✅ **Move to `shared/` if:**
- Used on 2+ pages
- Has customizable props
- General purpose functionality

❌ **Keep in page-specific folder if:**
- Highly specific to one page
- Complex page-specific logic
- Unlikely to be reused

### Example: Hero Section

```tsx
// Shared hero - used everywhere
<HeroSection
  title="Page Title"
  backgroundImage="/images/sections/hero/page-hero-bg.jpg"
/>

// Page-specific customization via props
<HeroSection
  title="Home"
  variant="fullscreen"
  showScrollIndicator
/>
```

---

## 📁 Quick Reference

### Adding a New Section

1. **Create section folder**
   ```bash
   mkdir -p src/sections/shared/new-section
   ```

2. **Create component files**
   ```bash
   touch src/sections/shared/new-section/index.tsx
   touch src/sections/shared/new-section/types.ts
   ```

3. **Add section images**
   ```bash
   mkdir -p public/images/sections/new-section
   cp image.jpg public/images/sections/new-section/
   ```

4. **Use in page**
   ```tsx
   import { NewSection } from "@/sections/shared/new-section";
   ```

---

## 🎯 Benefits of This Structure

1. **Clear Organization** - Easy to find sections and assets
2. **Reusability** - Shared sections reduce duplication
3. **Scalability** - Easy to add new pages and sections
4. **Maintainability** - Changes to shared sections affect all uses
5. **Type Safety** - TypeScript types for all section props
6. **Asset Management** - Images organized by section purpose

---

## 📚 Related Documentation

- [ASSETS_GUIDE.md](ASSETS_GUIDE.md) - Asset management guide
- [DESIGN_SYSTEM.md](DESIGN_SYSTEM.md) - Design system documentation
- [QUICK_START.md](QUICK_START.md) - Quick start guide

---

Need help? Check the examples in `src/sections/` and `src/app/`!
