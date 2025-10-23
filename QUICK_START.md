# Quick Start Guide

## 🚀 Getting Started

### 1. Install Dependencies

```bash
npm install
```

### 2. Run Development Server

```bash
npm run dev
```

Mở trình duyệt tại [http://localhost:3000](http://localhost:3000)

### 3. Build for Production

```bash
npm run build
npm start
```

---

## 📁 Project Structure

```
gamegabite/
├── src/
│   ├── app/                    # Next.js App Router
│   │   ├── layout.tsx         # Root layout với font config
│   │   ├── page.tsx           # Home page
│   │   └── globals.css        # Global styles
│   ├── components/
│   │   ├── ui/                # shadcn/ui components
│   │   ├── typography.tsx     # Typography components
│   │   └── examples/          # Example components
│   ├── hooks/                 # Custom React hooks
│   └── lib/
│       ├── utils.ts          # Utilities (cn function)
│       └── constants.ts      # App constants
├── public/                    # Static files
└── ...config files
```

---

## 🎨 Design System Cheat Sheet

### Colors

```tsx
// Primary color (#B6E802)
<div className="bg-primary text-dark">Content</div>

// Accent color (#601FEB)
<div className="bg-accent text-light">Content</div>

// Dark (#202124) and Light (#FFFFFF)
<div className="bg-dark text-light">Content</div>
```

### Typography

```tsx
// Using CSS Classes
<h1 className="text-hero">Hero Text</h1>
<h1 className="text-h1">Header 1</h1>
<h2 className="text-h2">Header 2</h2>
<p className="text-description">Description text</p>

// Using Components
import { Hero, H1, Description } from "@/components/typography";

<Hero>Hero Text</Hero>
<H1>Header 1</H1>
<Description>Description text</Description>
```

### Buttons

```tsx
import { Button } from "@/components/ui/button";

<Button>Default</Button>
<Button variant="secondary">Secondary</Button>
<Button variant="outline">Outline</Button>
<Button size="lg">Large Button</Button>

// Custom styles
<Button className="btn-primary">Custom Primary</Button>
```

---

## 🔧 Common Commands

```bash
# Development
npm run dev              # Start dev server
npm run build            # Build for production
npm run start            # Start production server

# Code Quality
npm run lint             # Run ESLint
npm run lint:fix         # Fix ESLint errors
npm run type-check       # TypeScript type checking
```

---

## 📦 Adding Components

### Add shadcn/ui Component

```bash
npx shadcn@latest add button
npx shadcn@latest add card
npx shadcn@latest add dialog
npx shadcn@latest add input
npx shadcn@latest add form
```

### Available Components

- Button, Card, Badge, Input
- Dialog, Dropdown Menu, Toast
- Form, Select, Tabs
- và nhiều component khác...

[Xem tất cả components](https://ui.shadcn.com/docs/components)

---

## 🎯 Quick Examples

### Creating a Hero Section

```tsx
import { Button } from "@/components/ui/button";
import { Hero, Description } from "@/components/typography";

export function HeroSection() {
  return (
    <section className="bg-primary py-20 px-4">
      <div className="container mx-auto text-center">
        <Hero className="text-dark mb-6">
          Your Hero Title
        </Hero>
        <Description className="text-dark max-w-2xl mx-auto mb-8">
          Your description text here
        </Description>
        <Button size="lg" className="btn-secondary">
          Get Started
        </Button>
      </div>
    </section>
  );
}
```

### Creating a Card

```tsx
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

<Card>
  <CardHeader>
    <CardTitle>Card Title</CardTitle>
  </CardHeader>
  <CardContent>
    <p className="text-body mb-4">Card content</p>
    <Button>Action</Button>
  </CardContent>
</Card>
```

### Responsive Grid Layout

```tsx
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
  {items.map(item => (
    <Card key={item.id}>
      {/* Card content */}
    </Card>
  ))}
</div>
```

---

## 🎨 Custom Utilities

### Gradients

```tsx
<div className="bg-primary-gradient">Gradient Background</div>
<h1 className="text-primary-gradient">Gradient Text</h1>
```

### Typography Variants

```tsx
// Centered text
<h1 className="text-h1-center">Centered Header</h1>
<p className="text-description-center">Centered Description</p>

// Different sizes
<p className="text-body">Body text</p>
<p className="text-small">Small text</p>
```

---

## 🔍 Tips

1. **Import Paths**: Sử dụng `@/` cho absolute imports
   ```tsx
   import { cn } from "@/lib/utils";
   import { Button } from "@/components/ui/button";
   ```

2. **Tailwind Classes**: Sử dụng `cn()` để combine classes
   ```tsx
   import { cn } from "@/lib/utils";

   <div className={cn("base-class", conditional && "conditional-class")}>
   ```

3. **Responsive Design**: Sử dụng breakpoint prefixes
   ```tsx
   <div className="text-sm md:text-base lg:text-lg">
   ```

4. **Custom Colors**: Đã config trong Tailwind
   ```tsx
   bg-primary, bg-accent, bg-dark, bg-light
   text-primary, text-accent, text-dark, text-light
   ```

---

## 📚 Documentation

- [Design System Guide](./DESIGN_SYSTEM.md) - Chi tiết về design system
- [README.md](./README.md) - Project overview
- [Next.js Docs](https://nextjs.org/docs)
- [Tailwind CSS](https://tailwindcss.com/docs)
- [shadcn/ui](https://ui.shadcn.com)

---

## 🐛 Common Issues

### Issue: Module not found

```bash
# Clear cache and reinstall
rm -rf node_modules package-lock.json
npm install
```

### Issue: Build errors

```bash
# Check TypeScript errors
npm run type-check

# Check ESLint errors
npm run lint
```

### Issue: Styles not updating

```bash
# Clear Next.js cache
rm -rf .next
npm run dev
```

---

## 🎉 Happy Coding!

Đã sẵn sàng để bắt đầu phát triển với design system đẹp mắt và hiện đại!
