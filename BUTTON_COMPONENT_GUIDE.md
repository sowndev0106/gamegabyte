# ActionButton Component Guide

Component button có thể tái sử dụng dựa trên design system của bạn.

---

## 🎨 Component Features

- ✅ **5 Variants**: Primary, Dark, Outline, Light, Secondary
- ✅ **4 Sizes**: sm, md, lg, xl
- ✅ **3 Arrow Directions**: right, up-right, down
- ✅ **Hover Effects**: Smooth transitions with shadows
- ✅ **Flexible**: Can be used as button or link
- ✅ **Accessible**: Built on Radix UI primitives
- ✅ **Type-Safe**: Full TypeScript support

---

## 📦 Import

```tsx
import { ActionButton } from "@/components/ui/action-button";
```

---

## 🎯 Variants

### 1. Primary (Lime Green)
```tsx
<ActionButton variant="primary">View All</ActionButton>
```
- **Background**: `#B6E802` (lime green)
- **Text**: Dark
- **Use**: Main CTAs, primary actions

### 2. Dark (Black with Primary Border)
```tsx
<ActionButton variant="dark">Connect With Us</ActionButton>
```
- **Background**: `#202124` (dark)
- **Border**: `#B6E802` (lime green)
- **Text**: Light
- **Use**: Alternative CTA on light backgrounds

### 3. Outline
```tsx
<ActionButton variant="outline">Case Study</ActionButton>
```
- **Background**: Transparent
- **Border**: Dark
- **Text**: Dark
- **Use**: Secondary actions

### 4. Light
```tsx
<ActionButton variant="light">Get Started</ActionButton>
```
- **Background**: White
- **Text**: Dark
- **Use**: CTAs on dark backgrounds

### 5. Secondary (Purple)
```tsx
<ActionButton variant="secondary">Learn More</ActionButton>
```
- **Background**: `#601FEB` (purple)
- **Text**: Light
- **Use**: Alternative CTAs

---

## 📏 Sizes

```tsx
<ActionButton size="sm">Small</ActionButton>
<ActionButton size="md">Medium</ActionButton>     {/* Default */}
<ActionButton size="lg">Large</ActionButton>
<ActionButton size="xl">Extra Large</ActionButton>
```

| Size | Padding | Font Size |
|------|---------|-----------|
| sm   | 4px 16px | 12px |
| md   | 6px 24px | 14px |
| lg   | 8px 32px | 16px |
| xl   | 10px 40px | 18px |

---

## ➡️ Arrow Directions

### Right Arrow (Default)
```tsx
<ActionButton arrowDirection="right">View All</ActionButton>
```
Moves right on hover →

### Up-Right Arrow
```tsx
<ActionButton arrowDirection="up-right">Connect With Us</ActionButton>
```
Moves diagonally on hover ↗

### Down Arrow
```tsx
<ActionButton arrowDirection="down">Scroll Down</ActionButton>
```
Moves down on hover ↓

### No Arrow
```tsx
<ActionButton showArrow={false}>Submit</ActionButton>
```

---

## 🔗 As Link

Use `asChild` prop với Radix UI Slot:

```tsx
<ActionButton asChild variant="primary">
  <a href="/portfolio">View Portfolio</a>
</ActionButton>

<ActionButton asChild variant="dark">
  <Link href="/about">About Us</Link>
</ActionButton>
```

---

## 💡 Usage Examples

### Hero Section CTA
```tsx
<ActionButton variant="primary" size="lg">
  Get Started
</ActionButton>
```

### Two CTAs Side by Side
```tsx
<div className="flex gap-4">
  <ActionButton variant="outline">Case Study</ActionButton>
  <ActionButton variant="primary">Connect With Us</ActionButton>
</div>
```

### Dark Background
```tsx
<section className="bg-dark">
  <ActionButton variant="light" arrowDirection="up-right">
    View Our Work
  </ActionButton>
</section>
```

### Navigation Link
```tsx
<ActionButton asChild variant="outline" size="sm">
  <Link href="/services">Our Services</Link>
</ActionButton>
```

### Form Submit
```tsx
<ActionButton
  type="submit"
  variant="secondary"
  showArrow={false}
>
  Submit Form
</ActionButton>
```

---

## 🎨 Design Recreations

### Your Button 1: VIEW ALL
```tsx
<ActionButton variant="primary" size="md">
  View All
</ActionButton>
```

### Your Button 2: CONNECT WITH US
```tsx
<ActionButton
  variant="dark"
  size="lg"
  arrowDirection="up-right"
>
  Connect With Us
</ActionButton>
```

### Your Button 3: VIEW OUR PORTFOLIO
```tsx
<ActionButton variant="secondary" size="md">
  View Our Portfolio
</ActionButton>
```

### Your Button 4: CASE STUDY + CONNECT
```tsx
<div className="flex gap-4">
  <ActionButton variant="outline" size="md">
    Case Study
  </ActionButton>
  <ActionButton variant="primary" size="md">
    Connect With Us
  </ActionButton>
</div>
```

---

## 🎭 Props API

```typescript
interface ActionButtonProps {
  // Variant style
  variant?: "primary" | "dark" | "outline" | "light" | "secondary";

  // Size
  size?: "sm" | "md" | "lg" | "xl";

  // Border radius
  rounded?: "none" | "sm" | "md" | "lg";

  // Arrow options
  showArrow?: boolean;                          // Default: true
  arrowDirection?: "right" | "up-right" | "down"; // Default: "right"

  // Use as child component (for links)
  asChild?: boolean;                            // Default: false

  // Standard button props
  className?: string;
  disabled?: boolean;
  type?: "button" | "submit" | "reset";
  onClick?: () => void;
  // ... all other button HTML attributes
}
```

---

## 🎨 Customization

### Custom Colors
```tsx
<ActionButton
  variant="primary"
  className="bg-blue-500 hover:bg-blue-600"
>
  Custom Color
</ActionButton>
```

### Full Width
```tsx
<ActionButton
  variant="primary"
  className="w-full"
>
  Full Width Button
</ActionButton>
```

### Rounded Corners
```tsx
<ActionButton
  variant="primary"
  rounded="lg"
>
  Rounded Button
</ActionButton>
```

### Disabled State
```tsx
<ActionButton
  variant="primary"
  disabled
>
  Disabled Button
</ActionButton>
```

---

## 🌟 Best Practices

1. **Use Primary for Main CTAs**
   - One primary button per section
   - Most important action

2. **Dark Variant for Contrast**
   - Good alternative to primary
   - Strong visual hierarchy

3. **Outline for Secondary Actions**
   - Less prominent than primary
   - Good for "Learn More" type actions

4. **Arrow Direction Matters**
   - Right: Forward actions (next, view more)
   - Up-Right: External links, new sections
   - Down: Scroll indicators

5. **Size Hierarchy**
   - Hero sections: lg or xl
   - Content sections: md
   - Navigation/Footer: sm

---

## 📱 Responsive Example

```tsx
<ActionButton
  variant="primary"
  size="md"
  className="md:size-lg lg:size-xl"
>
  Responsive Button
</ActionButton>
```

---

## 🎯 Common Patterns

### Hero Section
```tsx
<section className="hero">
  <h1>Welcome</h1>
  <p>Description</p>
  <div className="flex gap-4">
    <ActionButton variant="primary" size="lg">
      Get Started
    </ActionButton>
    <ActionButton variant="outline" size="lg">
      Learn More
    </ActionButton>
  </div>
</section>
```

### Card CTA
```tsx
<Card>
  <CardHeader>
    <CardTitle>Service Name</CardTitle>
  </CardHeader>
  <CardContent>
    <p>Description...</p>
    <ActionButton variant="primary" size="sm">
      Learn More
    </ActionButton>
  </CardContent>
</Card>
```

### Footer
```tsx
<footer className="bg-dark">
  <ActionButton variant="light" arrowDirection="up-right">
    Contact Us
  </ActionButton>
</footer>
```

---

## 🔍 View Live Examples

Visit `/button-showcase` để xem tất cả variants và examples:

```bash
npm run dev
# Open http://localhost:3000/button-showcase
```

---

## 📚 Related Components

- [Button](src/components/ui/button.tsx) - Original shadcn button
- [Typography](src/components/typography.tsx) - Text components
- [Navigation](src/components/navigation.tsx) - Nav component

---

## 💻 File Location

```
src/components/ui/action-button.tsx
```

---

Need help? Check the [showcase page](/button-showcase) for interactive examples!
