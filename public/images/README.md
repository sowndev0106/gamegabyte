# Images Directory

Thư mục này chứa tất cả các assets hình ảnh cho project.

## Cấu trúc thư mục

### 📁 backgrounds/
Chứa các ảnh background cho sections, hero, pages
```
backgrounds/
├── hero-bg.jpg
├── section-1-bg.png
├── footer-bg.jpg
└── ...
```

**Usage:**
```tsx
import Image from "next/image";

<Image
  src="/images/backgrounds/hero-bg.jpg"
  alt="Hero background"
  fill
  className="object-cover"
  priority
/>
```

### 📁 sections/
Chứa ảnh cho các section cụ thể (features, products, gallery...)
```
sections/
├── feature-1.png
├── feature-2.png
├── product-showcase.jpg
└── ...
```

**Usage:**
```tsx
<Image
  src="/images/sections/feature-1.png"
  alt="Feature 1"
  width={800}
  height={600}
  className="rounded-lg"
/>
```

### 📁 icons/
Chứa các icon tùy chỉnh (SVG, PNG)
```
icons/
├── logo-icon.svg
├── social-media/
│   ├── facebook.svg
│   ├── twitter.svg
│   └── instagram.svg
└── ...
```

**Usage:**
```tsx
<Image
  src="/images/icons/logo-icon.svg"
  alt="Logo"
  width={32}
  height={32}
/>
```

### 📁 logos/
Chứa các version của logo
```
logos/
├── logo.svg
├── logo-white.svg
├── logo-dark.svg
├── logo-small.png
└── ...
```

## Best Practices

### 1. Đặt tên file
- Sử dụng lowercase và dấu gạch ngang: `hero-background.jpg`
- Tên file nên mô tả rõ ràng: `product-feature-showcase.png`
- Thêm dimension nếu cần: `banner-1920x1080.jpg`

### 2. Format ảnh
- **JPEG/JPG**: Photos, backgrounds (nén tốt)
- **PNG**: Images với transparency, logos
- **SVG**: Icons, logos vector
- **WebP**: Modern format (tối ưu nhất)

### 3. Tối ưu hóa
```bash
# Nén ảnh trước khi upload
# Recommended tools:
# - TinyPNG (https://tinypng.com)
# - ImageOptim (Mac)
# - Squoosh (https://squoosh.app)
```

### 4. Responsive images
```tsx
// Sử dụng Next.js Image component
<Image
  src="/images/sections/hero.jpg"
  alt="Hero"
  width={1920}
  height={1080}
  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
  priority // Cho above-the-fold images
/>
```

### 5. Background images với CSS
```tsx
<div
  className="bg-cover bg-center bg-no-repeat"
  style={{ backgroundImage: "url('/images/backgrounds/hero-bg.jpg')" }}
>
  Content
</div>

// Hoặc sử dụng Tailwind arbitrary values
<div className="bg-[url('/images/backgrounds/hero-bg.jpg')] bg-cover bg-center">
  Content
</div>
```

## Recommended Dimensions

### Hero Sections
- Desktop: 1920x1080 hoặc 2560x1440
- Mobile: 750x1334 hoặc 1125x2436

### Feature Images
- 800x600 hoặc 1200x900
- Square: 1000x1000

### Icons
- Small: 32x32
- Medium: 64x64
- Large: 128x128

### Logos
- SVG (scalable)
- PNG fallback: 512x512 hoặc theo aspect ratio

## Example Usage in Components

```tsx
// Hero Section với background
export function HeroSection() {
  return (
    <section className="relative h-screen">
      <Image
        src="/images/backgrounds/hero-bg.jpg"
        alt="Hero background"
        fill
        className="object-cover -z-10"
        priority
        quality={90}
      />
      <div className="relative z-10">
        {/* Content */}
      </div>
    </section>
  );
}

// Feature với image
export function FeatureCard() {
  return (
    <Card>
      <div className="relative w-full h-64">
        <Image
          src="/images/sections/feature-1.png"
          alt="Feature"
          fill
          className="object-cover rounded-t-lg"
        />
      </div>
      <CardContent>
        {/* Content */}
      </CardContent>
    </Card>
  );
}
```

## Git LFS (Optional)

Nếu có nhiều ảnh lớn, consider sử dụng Git LFS:

```bash
# Install Git LFS
git lfs install

# Track image files
git lfs track "public/images/**/*.jpg"
git lfs track "public/images/**/*.png"
git lfs track "public/images/**/*.gif"

# Commit
git add .gitattributes
git commit -m "Configure Git LFS for images"
```
