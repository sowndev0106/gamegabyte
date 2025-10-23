# 🚀 Start Here - GameGabite Project

Project đã được setup hoàn chỉnh và sẵn sàng để bạn develop!

---

## ✅ What's Ready

### 📁 Clean Structure
- ✅ Pages: Home, Services, About, News (trống, sẵn sàng develop)
- ✅ Sections folders organized
- ✅ Components structure setup
- ✅ Assets organization ready

### 🎨 Design System
- ✅ Colors: Primary (#B6E802), Accent (#601FEB), Dark (#202124), Light (#FFFFFF)
- ✅ Typography: Schibsted Grotesk font với custom utilities
- ✅ ActionButton component (based on your designs)
- ✅ Responsive design system

### 🛠️ Components Available
- ✅ ActionButton - Your custom button component
- ✅ Typography components (Hero, H1-H5, Description, Body)
- ✅ Card, Badge, Input - shadcn/ui components
- ✅ Optimized Image components
- ✅ Section wrappers and containers

---

## 🎯 Quick Start

### 1. Start Development Server
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000)

### 2. Current Pages (All Empty)
- `/` - Home page
- `/services` - Services page
- `/about` - About page
- `/news` - News page

---

## 📂 Project Structure

```
src/
├── app/                        # Pages
│   ├── page.tsx               # Home (empty)
│   ├── services/page.tsx      # Services (empty)
│   ├── about/page.tsx         # About (empty)
│   └── news/page.tsx          # News (empty)
│
├── sections/                   # Your sections go here
│   ├── shared/                # Reusable sections
│   ├── home/                  # Home-specific sections
│   ├── services/              # Services-specific
│   ├── about/                 # About-specific
│   └── news/                  # News-specific
│
├── components/
│   ├── ui/                    # UI components
│   │   ├── action-button.tsx # Your custom button
│   │   ├── button.tsx
│   │   ├── card.tsx
│   │   └── ...
│   ├── common/               # Common components
│   ├── typography.tsx        # Typography components
│   └── navigation.tsx        # Navigation bar
│
├── types/                     # TypeScript types
│   ├── common.ts
│   └── sections.ts
│
└── lib/                       # Utilities
    ├── utils.ts
    ├── constants.ts
    └── image-paths.ts

public/images/sections/        # Images organized by section
├── hero/
├── about-us/
├── our-services/
├── gallery/
└── ...
```

---

## 🎨 Using ActionButton (Your Custom Button)

```tsx
import { ActionButton } from "@/components/ui/action-button";

// Primary button
<ActionButton variant="primary">View All</ActionButton>

// Dark button with arrow
<ActionButton variant="dark" arrowDirection="up-right">
  Connect With Us
</ActionButton>

// As link
<ActionButton asChild variant="outline">
  <a href="/portfolio">View Portfolio</a>
</ActionButton>
```

**Variants**: `primary`, `dark`, `outline`, `light`, `secondary`
**Sizes**: `sm`, `md`, `lg`, `xl`
**Arrow Directions**: `right`, `up-right`, `down`

📖 Full guide: [BUTTON_COMPONENT_GUIDE.md](BUTTON_COMPONENT_GUIDE.md)

---

## 📝 Creating Your First Section

### Step 1: Create Section File

```bash
mkdir -p src/sections/shared/hero
```

Create `src/sections/shared/hero/index.tsx`:

```tsx
import { SectionWrapper, Container } from "@/components/common/section-wrapper";
import { Hero, Description } from "@/components/typography";
import { ActionButton } from "@/components/ui/action-button";

export function HeroSection() {
  return (
    <SectionWrapper className="bg-primary py-20">
      <Container>
        <Hero className="text-dark mb-6">Welcome to GameGabite</Hero>
        <Description className="text-dark mb-8">
          Your description here
        </Description>
        <ActionButton variant="dark">Get Started</ActionButton>
      </Container>
    </SectionWrapper>
  );
}
```

### Step 2: Use in Page

Edit `src/app/page.tsx`:

```tsx
import { HeroSection } from "@/sections/shared/hero";

export default function HomePage() {
  return (
    <main>
      <HeroSection />
      {/* Add more sections */}
    </main>
  );
}
```

---

## 🖼️ Adding Images

### Step 1: Add Image to Public Folder

```bash
# Add hero background
cp your-image.jpg public/images/sections/hero/home-hero-bg.jpg
```

### Step 2: Update Image Paths (Optional)

Edit `src/lib/image-paths.ts`:

```tsx
export const HERO_BACKGROUNDS = {
  home: "/images/sections/hero/home-hero-bg.jpg",
  // ...
};
```

### Step 3: Use in Component

```tsx
import { BackgroundImage } from "@/components/ui/optimized-image";
import { HERO_BACKGROUNDS } from "@/lib/image-paths";

<BackgroundImage
  src={HERO_BACKGROUNDS.home}
  alt="Hero"
  overlay
  priority
/>
```

---

## 🎯 Section Organization

### Shared Sections (Use on multiple pages)
Place in: `src/sections/shared/`
- Hero
- About Us
- Contact
- Testimonials
- Gallery
- Why Choose Us

### Page-Specific Sections
Place in: `src/sections/{page}/`
- `home/` - Our Services, Our Process, Our Numbers, Showreel
- `services/` - Service List, Service Details
- `about/` - Team, History
- `news/` - News Grid, Featured News

---

## 📚 Key Documentation Files

1. **[PROJECT_STRUCTURE.md](PROJECT_STRUCTURE.md)** - Complete structure guide
2. **[BUTTON_COMPONENT_GUIDE.md](BUTTON_COMPONENT_GUIDE.md)** - Button component guide
3. **[ASSETS_GUIDE.md](ASSETS_GUIDE.md)** - Asset management
4. **[DESIGN_SYSTEM.md](DESIGN_SYSTEM.md)** - Design system documentation
5. **[QUICK_START.md](QUICK_START.md)** - Quick reference

---

## 🎨 Typography Usage

```tsx
import { Hero, H1, H2, Description, Body } from "@/components/typography";

<Hero>Hero Title</Hero>
<H1>Heading 1</H1>
<H2>Heading 2</H2>
<Description>Description text</Description>
<Body>Body text</Body>
```

Or use CSS classes:
```tsx
<h1 className="text-hero">Hero Text</h1>
<h2 className="text-h1">Header 1</h2>
<p className="text-description">Description</p>
```

---

## 🎨 Colors

### Tailwind Classes
```tsx
// Backgrounds
bg-primary    // #B6E802 (lime green)
bg-accent     // #601FEB (purple)
bg-dark       // #202124 (charcoal)
bg-light      // #FFFFFF (white)

// Text
text-primary
text-accent
text-dark
text-light
```

### In Code
```tsx
import { COLORS } from "@/lib/constants";

// Use in inline styles if needed
style={{ backgroundColor: COLORS.primary }}
```

---

## ⚡ Common Commands

```bash
# Development
npm run dev              # Start dev server
npm run build            # Build for production
npm run start            # Start production server

# Code Quality
npm run lint             # Run ESLint
npm run lint:fix         # Fix ESLint errors
npm run type-check       # TypeScript check

# Add shadcn/ui component
npx shadcn@latest add [component-name]
```

---

## 🎯 Your Home Page Sections (Plan)

Based on your requirements:

```tsx
// src/app/page.tsx
export default function HomePage() {
  return (
    <main>
      <HeroSection />           // 1. Hero
      <AboutUsSection />        // 2. About Us
      <OurServicesSection />    // 3. Our Services
      <OurProcessSection />     // 4. Our Process
      <OurNumbersSection />     // 5. Our Numbers
      <ShowreelSection />       // 6. Showreel
      <WhyChooseUsSection />    // 7. Why Choose Us
      <TestimonialsSection />   // 8. Testimonials
      <GallerySection />        // 9. Gallery
      <ContactSection />        // 10. Contact
    </main>
  );
}
```

Now you need to create these sections in `src/sections/`!

---

## 💡 Tips

1. **Start Small** - Build one section at a time
2. **Reuse Components** - Use ActionButton, Typography components
3. **Organize Images** - Keep them in `/public/images/sections/`
4. **Type Safety** - Add types to `src/types/sections.ts`
5. **Responsive** - Test on mobile, tablet, desktop

---

## 🚀 Next Steps

1. ✅ Project setup complete
2. 📝 Create your first section (Hero)
3. 🎨 Add images to public folder
4. 🔨 Build remaining sections
5. 🎯 Customize design as needed

---

## 📞 Need Help?

Check documentation:
- Structure: [PROJECT_STRUCTURE.md](PROJECT_STRUCTURE.md)
- Buttons: [BUTTON_COMPONENT_GUIDE.md](BUTTON_COMPONENT_GUIDE.md)
- Assets: [ASSETS_GUIDE.md](ASSETS_GUIDE.md)
- Design: [DESIGN_SYSTEM.md](DESIGN_SYSTEM.md)

---

## ✨ You're Ready to Build!

Everything is set up. Pages are empty and waiting for your sections.

**Start with:** Creating your Hero section in `src/sections/shared/hero/`

```bash
npm run dev
# Open http://localhost:3000
```

Happy coding! 🎉
