# GameGabite Design System

## Overview

This document outlines the design system configuration for the GameGabite project, including colors, typography, and component usage guidelines.

---

## Colors

### Brand Palette

| Color Name | Hex Code | Usage | Tailwind Class |
|-----------|----------|-------|----------------|
| **Primary** | `#B6E802` | Main brand color, CTAs, highlights | `bg-primary`, `text-primary` |
| **Light** | `#FFFFFF` | Backgrounds, text on dark | `bg-light`, `text-light` |
| **Dark** | `#202124` | Text, dark backgrounds | `bg-dark`, `text-dark` |
| **Accent** | `#601FEB` | Secondary actions, accents | `bg-accent`, `text-accent` |

### Color Usage Examples

```tsx
// Primary button
<button className="bg-primary text-dark">Click me</button>

// Accent background
<div className="bg-accent text-light">Content</div>

// Dark background with primary text
<section className="bg-dark text-primary">Section</section>
```

---

## Typography

### Font Family

**Schibsted Grotesk** - Loaded via Next.js Google Fonts

```tsx
import { Schibsted_Grotesk } from "next/font/google";

const schibstedGrotesk = Schibsted_Grotesk({
  subsets: ["latin"],
  weight: ["400", "700", "800"],
  variable: "--font-schibsted",
});
```

### Typography Scale

| Style | Class | Font Size | Line Height | Letter Spacing | Font Weight | Transform |
|-------|-------|-----------|-------------|----------------|-------------|-----------|
| **Hero** | `.text-hero` | 80px | 100% | -3% | 800 (ExtraBold) | Uppercase |
| **H1** | `.text-h1` | 56px | 100% | -6% | 700 (Bold) | Capitalize |
| **H2** | `.text-h2` | 48px | 110% | -5% | 700 (Bold) | Capitalize |
| **H3** | `.text-h3` | 40px | 115% | -4% | 700 (Bold) | Capitalize |
| **H4** | `.text-h4` | 32px | 120% | -3% | 700 (Bold) | Capitalize |
| **H5** | `.text-h5` | 24px | 125% | -2% | 700 (Bold) | Capitalize |
| **Description** | `.text-description` | 18px | 135% | -2% | 400 (Regular) | None |
| **Body** | `.text-body` | 16px | 150% | -1% | 400 (Regular) | None |
| **Small** | `.text-small` | 14px | 140% | 0 | 400 (Regular) | None |

### Typography Usage

#### Using CSS Classes

```tsx
// Hero heading
<h1 className="text-hero">Welcome to GameGabite</h1>

// Centered H1
<h1 className="text-h1-center">Page Title</h1>

// Description text
<p className="text-description">This is a description paragraph.</p>
```

#### Using Typography Components

```tsx
import { Hero, H1, H2, Description } from "@/components/typography";

<Hero>Welcome to GameGabite</Hero>
<H1>Page Title</H1>
<Description>This is a description paragraph.</Description>
```

### Responsive Typography

Typography automatically scales on smaller screens:

- **Tablets (≤768px)**: Reduced sizes
- **Mobile (≤480px)**: Further reduced sizes

```css
@media (max-width: 768px) {
  .text-hero { font-size: 48px; }
  .text-h1 { font-size: 36px; }
}
```

---

## Components

### Buttons

#### Variants

```tsx
import { Button } from "@/components/ui/button";

// Default (Primary)
<Button>Primary Button</Button>

// Secondary
<Button variant="secondary">Secondary</Button>

// Outline
<Button variant="outline">Outline</Button>

// Ghost
<Button variant="ghost">Ghost</Button>

// Custom classes
<Button className="btn-primary">Custom Primary</Button>
<Button className="btn-secondary">Custom Secondary</Button>
<Button className="btn-outline">Custom Outline</Button>
```

#### Sizes

```tsx
<Button size="sm">Small</Button>
<Button size="default">Default</Button>
<Button size="lg">Large</Button>
<Button size="icon">📱</Button>
```

### Cards

```tsx
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card";

<Card>
  <CardHeader>
    <CardTitle>Card Title</CardTitle>
    <CardDescription>Card description</CardDescription>
  </CardHeader>
  <CardContent>
    <p>Card content goes here</p>
  </CardContent>
  <CardFooter>
    <Button>Action</Button>
  </CardFooter>
</Card>
```

### Input

```tsx
import { Input } from "@/components/ui/input";

<Input type="text" placeholder="Enter text..." />
<Input type="email" placeholder="Email address" />
```

### Badge

```tsx
import { Badge } from "@/components/ui/badge";

<Badge>Default</Badge>
<Badge variant="secondary">Secondary</Badge>
<Badge variant="outline">Outline</Badge>
<Badge variant="destructive">Destructive</Badge>
```

---

## Custom Utilities

### Gradients

```tsx
// Background gradient (Primary to Accent)
<div className="bg-primary-gradient">Gradient Background</div>

// Text gradient
<h1 className="text-primary-gradient">Gradient Text</h1>
```

### Button Utilities

```tsx
<button className="btn-primary">Primary Style</button>
<button className="btn-secondary">Secondary Style</button>
<button className="btn-outline">Outline Style</button>
```

---

## Layout Guidelines

### Spacing

Use Tailwind's spacing scale:

```tsx
// Padding
<div className="p-4">Padding 1rem</div>
<div className="px-6 py-4">Different horizontal/vertical</div>

// Margin
<div className="mb-8">Margin bottom 2rem</div>
<div className="mx-auto">Centered horizontally</div>
```

### Container

```tsx
<div className="container mx-auto">
  {/* Centered container with max-width */}
</div>
```

### Grid Layouts

```tsx
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
  {/* Responsive grid */}
</div>
```

---

## Adding shadcn/ui Components

To add more shadcn/ui components:

```bash
npx shadcn@latest add [component-name]
```

Examples:
```bash
npx shadcn@latest add dialog
npx shadcn@latest add dropdown-menu
npx shadcn@latest add toast
npx shadcn@latest add select
npx shadcn@latest add form
```

---

## Accessibility

### Color Contrast

- Primary (#B6E802) on Dark (#202124): ✅ AA Large
- Light (#FFFFFF) on Accent (#601FEB): ✅ AAA
- Dark (#202124) on Primary (#B6E802): ✅ AAA

### Focus States

All interactive elements include focus-visible styles:

```tsx
focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring
```

---

## Best Practices

1. **Use Typography Components**: Prefer Typography components over raw CSS classes for better maintainability
2. **Consistent Spacing**: Use Tailwind's spacing scale (multiples of 4)
3. **Responsive Design**: Always test on mobile, tablet, and desktop
4. **Semantic HTML**: Use appropriate HTML elements (`h1`, `h2`, `button`, etc.)
5. **Accessible Colors**: Ensure sufficient contrast for all text
6. **Component Composition**: Build complex UIs from smaller, reusable components

---

## Resources

- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [shadcn/ui Documentation](https://ui.shadcn.com)
- [Next.js Documentation](https://nextjs.org/docs)
- [Schibsted Grotesk Font](https://fonts.google.com/specimen/Schibsted+Grotesk)
