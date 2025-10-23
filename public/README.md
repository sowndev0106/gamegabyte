# Public Assets Directory

Thư mục này chứa tất cả static assets (images, videos, fonts) cho project.

## 📁 Structure

```
public/
├── images/
│   ├── backgrounds/      # Background images cho sections
│   ├── sections/         # Content images cho features, products, etc.
│   ├── icons/           # Custom icons (SVG, PNG)
│   ├── logos/           # Logo variants
│   └── README.md        # Images documentation
├── videos/
│   └── README.md        # Videos documentation
├── fonts/
│   └── README.md        # Fonts documentation
└── README.md            # This file
```

## 🚀 Quick Start

### 1. Add Images

Copy images vào thư mục tương ứng:

```bash
# Backgrounds
cp your-hero-bg.jpg public/images/backgrounds/

# Features/Products
cp your-feature.jpg public/images/sections/

# Icons
cp your-icon.svg public/images/icons/

# Logos
cp your-logo.svg public/images/logos/
```

### 2. Use in Components

```tsx
import Image from "next/image";

// Basic usage
<Image
  src="/images/sections/feature.jpg"
  alt="Feature"
  width={800}
  height={600}
/>

// Or use helper components
import { SectionImage } from "@/components/ui/optimized-image";

<SectionImage
  src="/images/sections/feature.jpg"
  alt="Feature"
/>
```

### 3. For Backgrounds

```tsx
import { BackgroundImage } from "@/components/ui/optimized-image";

<section className="relative min-h-screen">
  <BackgroundImage
    src="/images/backgrounds/hero-bg.jpg"
    alt="Hero"
    overlay
    priority
  />
  <div className="relative z-10">
    {/* Your content */}
  </div>
</section>
```

## 📚 Documentation

- **[images/README.md](images/README.md)** - Chi tiết về images
- **[videos/README.md](videos/README.md)** - Chi tiết về videos
- **[fonts/README.md](fonts/README.md)** - Chi tiết về fonts
- **[../ASSETS_GUIDE.md](../ASSETS_GUIDE.md)** - Complete assets guide

## 🎨 Helper Components

Project cung cấp các helper components để sử dụng images dễ dàng:

```tsx
import {
  BackgroundImage,  // Full background images
  HeroImage,       // Hero section backgrounds
  SectionImage,    // Content images
  Logo,            // Logo images
  Icon,            // Icon images
  Avatar,          // Avatar images
} from "@/components/ui/optimized-image";
```

## 🗂️ Image Paths Constants

Sử dụng constants để tránh typos:

```tsx
import { BACKGROUNDS, LOGOS, SECTIONS, ICONS } from "@/lib/image-paths";

<Image src={BACKGROUNDS.hero} alt="Hero" />
<Image src={LOGOS.main} alt="Logo" />
```

## 📦 Example Components

Project có sẵn example components:

```tsx
// Hero với background
import { HeroWithBackground } from "@/components/examples/section-with-background";

// Features grid
import { FeaturesGrid } from "@/components/examples/feature-sections";

// Product showcase
import { ProductShowcase } from "@/components/examples/feature-sections";

// Gallery
import { Gallery } from "@/components/examples/feature-sections";
```

## ⚡ Best Practices

1. **Optimize images trước khi upload** (TinyPNG, Squoosh)
2. **Use WebP format** khi có thể
3. **Đặt tên file rõ ràng** (lowercase-with-dashes.jpg)
4. **Keep file size reasonable** (< 500KB cho web)
5. **Use Next.js Image component** (automatic optimization)
6. **Provide alt text** (accessibility)
7. **Use priority for hero images** (better performance)

## 🔗 Resources

- [Next.js Image Optimization](https://nextjs.org/docs/app/building-your-application/optimizing/images)
- [ASSETS_GUIDE.md](../ASSETS_GUIDE.md) - Complete guide
- [Optimized Image Components](../src/components/ui/optimized-image.tsx)

## 💡 Tips

- Images trong `public/` có thể truy cập trực tiếp từ root: `/images/logo.png`
- Không cần import images từ `public/`
- Next.js tự động optimize images khi dùng `<Image>` component
- Use `priority` prop cho above-the-fold images
- Use `loading="lazy"` (default) cho below-the-fold images

---

Need help? Check [ASSETS_GUIDE.md](../ASSETS_GUIDE.md) for detailed instructions!
