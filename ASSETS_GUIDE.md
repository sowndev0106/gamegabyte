# Assets Management Guide

Hướng dẫn quản lý và sử dụng assets (images, videos, fonts) trong project.

---

## 📁 Cấu trúc thư mục

```
public/
├── images/
│   ├── backgrounds/      # Background images cho sections
│   ├── sections/         # Images cho content sections
│   ├── icons/           # Custom icons (SVG, PNG)
│   └── logos/           # Logo variants
├── videos/              # Video files
└── fonts/               # Custom fonts (if not using Google Fonts)
```

---

## 🖼️ Sử dụng Images

### Method 1: Next.js Image Component (Recommended)

```tsx
import Image from "next/image";

// Basic usage
<Image
  src="/images/sections/feature.jpg"
  alt="Feature"
  width={800}
  height={600}
/>

// Fill parent container
<Image
  src="/images/backgrounds/hero.jpg"
  alt="Hero"
  fill
  className="object-cover"
  priority
/>
```

### Method 2: Optimized Image Components

```tsx
import {
  BackgroundImage,
  HeroImage,
  SectionImage,
  Logo,
  Icon,
} from "@/components/ui/optimized-image";

// Background image
<BackgroundImage
  src="/images/backgrounds/hero.jpg"
  alt="Hero background"
  overlay
  priority
/>

// Hero image
<HeroImage
  src="/images/backgrounds/hero.jpg"
  alt="Hero"
  overlay
/>

// Section image
<SectionImage
  src="/images/sections/feature.jpg"
  alt="Feature"
  width={800}
  height={600}
/>

// Logo
<Logo src="/images/logos/logo.svg" alt="Logo" />

// Icon
<Icon src="/images/icons/check.svg" alt="Check" size={24} />
```

### Method 3: Image Paths Constants

```tsx
import { BACKGROUNDS, LOGOS, SECTIONS } from "@/lib/image-paths";

<Image src={BACKGROUNDS.hero} alt="Hero" />
<Image src={LOGOS.main} alt="Logo" />
<Image src={SECTIONS.feature1} alt="Feature" />
```

---

## 🎨 Background Images

### Full Background Section

```tsx
import { BackgroundImage } from "@/components/ui/optimized-image";

<section className="relative min-h-screen">
  <BackgroundImage
    src="/images/backgrounds/section-bg.jpg"
    alt="Background"
    overlay
    overlayClassName="bg-black/60"
  />

  <div className="relative z-10">
    {/* Your content */}
  </div>
</section>
```

### CSS Background (Alternative)

```tsx
<section
  className="min-h-screen bg-cover bg-center"
  style={{ backgroundImage: "url('/images/backgrounds/hero.jpg')" }}
>
  {/* Content */}
</section>

// Or với Tailwind arbitrary values
<section className="min-h-screen bg-[url('/images/backgrounds/hero.jpg')] bg-cover bg-center">
  {/* Content */}
</section>
```

### Parallax Effect

```tsx
<section className="relative h-screen overflow-hidden">
  <div
    className="absolute inset-0 bg-fixed bg-cover bg-center"
    style={{ backgroundImage: "url('/images/backgrounds/parallax.jpg')" }}
  />
  <div className="absolute inset-0 bg-black/50" />
  <div className="relative z-10">
    {/* Content */}
  </div>
</section>
```

---

## 📋 Example Components

### Sử dụng Example Components có sẵn

```tsx
// Hero với background
import { HeroWithBackground } from "@/components/examples/section-with-background";

<HeroWithBackground />

// Features grid
import { FeaturesGrid } from "@/components/examples/feature-sections";

<FeaturesGrid />

// Product showcase
import { ProductShowcase } from "@/components/examples/feature-sections";

<ProductShowcase />

// Gallery
import { Gallery } from "@/components/examples/feature-sections";

<Gallery />
```

---

## 🎬 Videos

### Background Video

```tsx
<section className="relative h-screen overflow-hidden">
  <video
    autoPlay
    loop
    muted
    playsInline
    className="absolute inset-0 w-full h-full object-cover"
  >
    <source src="/videos/hero-video.mp4" type="video/mp4" />
  </video>

  <div className="absolute inset-0 bg-black/50" />

  <div className="relative z-10">
    {/* Content */}
  </div>
</section>
```

### Video Player

```tsx
<video
  controls
  className="w-full rounded-lg"
  poster="/images/video-thumbnail.jpg"
>
  <source src="/videos/demo.mp4" type="video/mp4" />
  Your browser does not support video.
</video>
```

---

## 📝 Best Practices

### 1. File Naming

- ✅ Lowercase với dashes: `hero-background.jpg`
- ✅ Descriptive: `product-feature-analytics.jpg`
- ❌ Avoid spaces: `my image.jpg`
- ❌ Avoid special chars: `image@2023#1.jpg`

### 2. Image Optimization

**Before uploading:**
- Resize images to appropriate dimensions
- Compress images (use TinyPNG, Squoosh)
- Use WebP format when possible
- Keep file sizes under 500KB for web

**Tools:**
- [TinyPNG](https://tinypng.com) - Compression
- [Squoosh](https://squoosh.app) - Format conversion
- [ImageOptim](https://imageoptim.com) - Mac app

### 3. Recommended Sizes

```
Hero Backgrounds:     1920x1080 or 2560x1440
Section Images:       800x600 or 1200x900
Product Images:       800x800 (square) or 800x600
Icons:               32x32, 64x64, 128x128
Logos:               SVG (scalable) or 512x512 PNG
```

### 4. Format Selection

- **JPEG**: Photos, complex images (good compression)
- **PNG**: Images với transparency, logos
- **SVG**: Icons, logos, simple graphics (best)
- **WebP**: Modern browsers (best compression & quality)

### 5. Loading Strategy

```tsx
// Above-the-fold (hero images)
<Image priority />

// Below-the-fold (default)
<Image loading="lazy" />

// Fill container
<Image fill className="object-cover" />

// Fixed dimensions
<Image width={800} height={600} />
```

---

## 🔧 Configuration

### Next.js Image Config

Edit [next.config.ts](next.config.ts):

```ts
const nextConfig: NextConfig = {
  images: {
    // Enable image optimization
    formats: ['image/webp', 'image/avif'],

    // Allowed image domains (for external images)
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'example.com',
      },
    ],

    // Image sizes for optimization
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
  },
};
```

---

## 📦 Placeholders

Trong development, có thể dùng placeholders:

```tsx
import { PLACEHOLDERS } from "@/lib/image-paths";

<Image src={PLACEHOLDERS.image} alt="Placeholder" />
<Image src={PLACEHOLDERS.hero} alt="Hero placeholder" />
```

Or use service như:
- [Unsplash](https://source.unsplash.com/random/800x600)
- [Lorem Picsum](https://picsum.photos/800/600)
- [Placeholder.com](https://via.placeholder.com/800x600)

---

## 🎯 Quick Reference

### Add new image:

1. **Copy image** vào appropriate folder trong `public/images/`
2. **Add path** vào `src/lib/image-paths.ts` (optional but recommended)
3. **Use trong component:**

```tsx
import { SectionImage } from "@/components/ui/optimized-image";

<SectionImage
  src="/images/sections/your-image.jpg"
  alt="Description"
  width={800}
  height={600}
/>
```

### Add background image:

```tsx
import { BackgroundImage } from "@/components/ui/optimized-image";

<section className="relative min-h-screen">
  <BackgroundImage
    src="/images/backgrounds/your-bg.jpg"
    alt="Background"
    overlay
  />
  <div className="relative z-10">
    {/* Content */}
  </div>
</section>
```

### Add logo:

```tsx
import { Logo } from "@/components/ui/optimized-image";

<Logo src="/images/logos/your-logo.svg" alt="Logo" />
```

---

## 🔗 Resources

- [Next.js Image Optimization](https://nextjs.org/docs/app/building-your-application/optimizing/images)
- [Image Optimization Guide](https://web.dev/fast/#optimize-your-images)
- [WebP vs JPEG](https://developers.google.com/speed/webp)

---

## 💡 Tips

1. **Always use Next.js Image component** - Automatic optimization
2. **Provide alt text** - Important for accessibility
3. **Use priority for above-the-fold images** - Better LCP
4. **Lazy load below-the-fold images** - Better performance
5. **Use appropriate sizes** - Don't upload 4K images for thumbnails
6. **Consider dark mode** - Provide alternative images if needed
7. **Test on slow connections** - Ensure good loading experience

---

## 📞 Need Help?

Check these files:
- [public/images/README.md](public/images/README.md) - Images guide
- [public/videos/README.md](public/videos/README.md) - Videos guide
- [public/fonts/README.md](public/fonts/README.md) - Fonts guide
- [src/lib/image-paths.ts](src/lib/image-paths.ts) - Image constants
- [src/components/ui/optimized-image.tsx](src/components/ui/optimized-image.tsx) - Image components
