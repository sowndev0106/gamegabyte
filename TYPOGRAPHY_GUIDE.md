# Design System Guide - 4K Responsive

Hệ thống typography và section heights tự động scale trên màn hình 4K (2560px+)

---

# PART 1: Typography System

## Cách sử dụng

### 1. Display Sizes (Hero & Large Headings)

```tsx
// Display XL - 80px (160px trên 4K)
<h1 className="text-display-xl">WE ARE THE GAME</h1>

// Display LG - 64px (128px trên 4K)
<h1 className="text-display-lg">Welcome</h1>
```

### 2. Headings

```tsx
// Heading 1 - 56px (112px trên 4K)
<h1 className="text-heading-1">Main Heading</h1>

// Heading 2 - 48px (96px trên 4K)
<h2 className="text-heading-2">Section Title</h2>

// Heading 3 - 40px (80px trên 4K)
<h3 className="text-heading-3">Subsection</h3>

// Heading 4 - 32px (64px trên 4K)
<h4 className="text-heading-4">Card Title</h4>

// Heading 5 - 24px (48px trên 4K)
<h5 className="text-heading-5">Small Heading</h5>

// Heading 6 - 20px (40px trên 4K)
<h6 className="text-heading-6">Tiny Heading</h6>
```

### 3. Body Text

```tsx
// Body XL - 22px (44px trên 4K)
<p className="text-body-xl">Large paragraph text</p>

// Body LG - 18px (36px trên 4K)
<p className="text-body-lg">Regular paragraph</p>

// Body MD - 16px (32px trên 4K)
<p className="text-body-md">Standard text</p>

// Body SM - 14px (28px trên 4K)
<p className="text-body-sm">Small text</p>
```

## Responsive Behavior

| Class | Default | 4K (2560px+) |
|-------|---------|--------------|
| `text-display-xl` | 80px | 160px |
| `text-display-lg` | 64px | 128px |
| `text-heading-1` | 56px | 112px |
| `text-heading-2` | 48px | 96px |
| `text-heading-3` | 40px | 80px |
| `text-heading-4` | 32px | 64px |
| `text-heading-5` | 24px | 48px |
| `text-heading-6` | 20px | 40px |
| `text-body-xl` | 22px | 44px |
| `text-body-lg` | 18px | 36px |
| `text-body-md` | 16px | 32px |
| `text-body-sm` | 14px | 28px |

## Ví dụ sử dụng trong Section

### Hero Section
```tsx
<section>
  <h1 className="text-display-xl uppercase">
    WE ARE THE <span className="text-primary">GAME</span>
  </h1>
  <p className="text-body-xl">
    From immersive websites to powerful digital strategies
  </p>
</section>
```

### About Us Section
```tsx
<section>
  <p className="text-body-sm uppercase">ABOUT US</p>
  <h2 className="text-heading-1 capitalize">
    To Help Game Studios Level Up Their Marketing
  </h2>
</section>
```

### Our Services Section
```tsx
<section>
  <h2 className="text-display-lg">Our Services</h2>
  <p className="text-body-lg">
    From concept to complete website
  </p>

  <div className="card">
    <h3 className="text-heading-4">Game Landing Page</h3>
    <p className="text-body-md">Create impressive landing pages</p>
  </div>
</section>
```

## Legacy Classes (Deprecated)

Các class cũ vẫn hoạt động nhưng nên chuyển sang system mới:

```tsx
// ❌ Cũ (deprecated)
<h1 className="text-h1">Title</h1>

// ✅ Mới (recommended)
<h1 className="text-heading-1">Title</h1>
```

## Custom Styling

Nếu cần override, sử dụng Tailwind utilities:

```tsx
<h1 className="text-heading-1 3xl:text-[200px]">
  Custom size on 4K
</h1>
```

## Notes

- Tất cả classes tự động thêm `font-schibsted`
- Line-height, letter-spacing đã được optimize sẵn
- Font-weight phù hợp với từng loại text
- Hoàn toàn responsive từ mobile → 4K

---

# PART 2: Section Heights System

Hệ thống chiều cao section tự động scale trên màn hình 4K

## Cách sử dụng

### 1. Small Sections (Compact Content)

```tsx
// Extra Small - 400px (600px trên 4K)
<section className="min-h-section-xs">
  {/* Compact content */}
</section>

// Small - 500px (800px trên 4K)
<section className="min-h-section-sm">
  {/* Small content */}
</section>
```

### 2. Medium Sections (Standard Content)

```tsx
// Medium - 600px (1000px trên 4K) ⭐ RECOMMENDED
<section className="min-h-section-md">
  {/* Standard content - Our Numbers section */}
</section>

// Large - 700px (1200px trên 4K)
<section className="min-h-section-lg">
  {/* Large content */}
</section>
```

### 3. Large Sections (Hero/Showcase)

```tsx
// Extra Large - 800px (1400px trên 4K)
<section className="min-h-section-xl">
  {/* Hero or showcase content */}
</section>

// 2XL - 900px (1600px trên 4K)
<section className="min-h-section-2xl">
  {/* Large showcase */}
</section>
```

## Section Heights Table

| Class | Default | 4K (2560px+) | Use Case |
|-------|---------|--------------|----------|
| `min-h-section-xs` | 400px | 600px | Compact sections, small cards |
| `min-h-section-sm` | 500px | 800px | Small content areas |
| `min-h-section-md` | 600px | 1000px | **Standard sections** (Our Numbers) |
| `min-h-section-lg` | 700px | 1200px | Large content sections |
| `min-h-section-xl` | 800px | 1400px | Hero sections, showcases |
| `min-h-section-2xl` | 900px | 1600px | Large hero sections |

## Ví dụ thực tế

### Our Numbers Section (Medium)
```tsx
<section className="relative w-full min-h-section-md overflow-hidden flex items-center">
  <div className="content-container-full">
    <h2 className="text-heading-1">We've Helped Hundreds</h2>
    <p className="text-body-lg">Subtitle text</p>
    {/* Stats grid */}
  </div>
</section>
```

### Hero Section (Extra Large)
```tsx
<section className="relative w-full min-h-section-xl">
  <div className="content-container">
    <h1 className="text-display-xl">WE ARE THE GAME</h1>
    <p className="text-body-xl">Marketing Studio</p>
  </div>
</section>
```

### Services Cards Section (Small)
```tsx
<section className="min-h-section-sm py-20">
  <div className="content-container-full">
    <h2 className="text-display-lg">Our Services</h2>
    {/* Service cards grid */}
  </div>
</section>
```

## Kết hợp với Flexbox/Grid

```tsx
// Center content vertically
<section className="min-h-section-md flex items-center">
  <div className="content-container-full">
    {/* Content tự động center */}
  </div>
</section>

// Full height
<section className="h-section-xl">
  {/* Exact height, không phải min-height */}
</section>
```

## Responsive Adjustments

```tsx
// Override cho mobile hoặc 4K cụ thể
<section className="min-h-section-md md:min-h-section-lg 3xl:min-h-section-xl">
  {/* Mobile: 600px, Tablet: 700px, 4K: 1400px */}
</section>
```

## Best Practices

1. **Dùng `min-h-section-md` cho hầu hết sections** - Đây là kích thước chuẩn (600px → 1000px trên 4K)
2. **Dùng `min-h-section-xl` cho Hero sections** - Để tạo impact mạnh
3. **Dùng `min-h-section-sm` cho compact sections** - Cards, testimonials
4. **Kết hợp với `flex items-center`** - Để center content vertically
5. **Thêm padding** - `py-20` hoặc `py-32` cho internal spacing

## Notes

- Heights tự động scale ~1.5-1.8x trên 4K
- Có thể dùng với `h-section-*` cho exact height (không phải min)
- Kết hợp tốt với typography system
- Tất cả responsive từ mobile → 4K
