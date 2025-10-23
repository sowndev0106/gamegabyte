# ActionButton Component - Usage Examples

## 4 Main Button Variants

### 1. White Button (CASE STUDY style)
```tsx
<ActionButton variant="white" arrowDirection="right">
  CASE STUDY
</ActionButton>
```
- **Background:** White (#FFFFFF)
- **Text:** Black (#202124)
- **Border:** Black 2px
- **Hover:** Black background, white text

### 2. Primary Button (CONNECT WITH US style)
```tsx
<ActionButton variant="primary" arrowDirection="up-right">
  CONNECT WITH US
</ActionButton>
```
- **Background:** Lime green (#B6E802)
- **Text:** Black (#202124)
- **No Border**
- **Hover:** Slightly darker green with shadow

### 3. Secondary Button (VIEW OUR PORTFOLIO style)
```tsx
<ActionButton variant="secondary">
  VIEW OUR PORTFOLIO
</ActionButton>
```
- **Background:** Purple (#601FEB)
- **Text:** White (#FFFFFF)
- **No Border**
- **Hover:** Slightly darker purple with shadow

### 4. Dark Button (CONNECT WITH US dark style)
```tsx
<ActionButton variant="dark">
  CONNECT WITH US
</ActionButton>
```
- **Background:** Black (#202124)
- **Text:** White (#FFFFFF)
- **Border:** Lime green (#B6E802) 2px
- **Hover:** Lime green background, black text

## Additional Variants

### Outline Light (for dark backgrounds)
```tsx
<ActionButton variant="outlineLight" arrowDirection="right">
  LEARN MORE
</ActionButton>
```

### Outline (for light backgrounds)
```tsx
<ActionButton variant="outline">
  READ MORE
</ActionButton>
```

## Sizes

```tsx
<ActionButton variant="primary" size="sm">Small</ActionButton>
<ActionButton variant="primary" size="md">Medium</ActionButton>
<ActionButton variant="primary" size="lg">Large</ActionButton>
<ActionButton variant="primary" size="xl">Extra Large</ActionButton>
```

## Arrow Directions

```tsx
<ActionButton variant="primary" arrowDirection="right">Next</ActionButton>
<ActionButton variant="primary" arrowDirection="up-right">External Link</ActionButton>
<ActionButton variant="primary" arrowDirection="down">Scroll Down</ActionButton>
```

## Usage with Links

```tsx
import Link from "next/link";
import { ActionButton } from "@/components/ui/action-button";

// Wrap with Link component
<Link href="/case-studies">
  <ActionButton variant="white" arrowDirection="right">
    CASE STUDY
  </ActionButton>
</Link>
```

## Complete Example Component

```tsx
"use client";

import Link from "next/link";
import { ActionButton } from "@/components/ui/action-button";

export function ButtonShowcase() {
  return (
    <div className="flex flex-col gap-8 p-8">
      {/* White Button */}
      <div className="bg-dark p-8">
        <Link href="/case-studies">
          <ActionButton variant="white" arrowDirection="right">
            CASE STUDY
          </ActionButton>
        </Link>
      </div>

      {/* Primary Button */}
      <div className="bg-dark p-8">
        <Link href="/contact">
          <ActionButton variant="primary" arrowDirection="up-right">
            CONNECT WITH US
          </ActionButton>
        </Link>
      </div>

      {/* Secondary Button */}
      <div className="bg-light p-8">
        <Link href="/portfolio">
          <ActionButton variant="secondary">
            VIEW OUR PORTFOLIO
          </ActionButton>
        </Link>
      </div>

      {/* Dark Button */}
      <div className="bg-light p-8 border-2 border-primary">
        <Link href="/contact">
          <ActionButton variant="dark">
            CONNECT WITH US
          </ActionButton>
        </Link>
      </div>
    </div>
  );
}
```

## Props Reference

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `variant` | `"white" \| "primary" \| "secondary" \| "dark" \| "outline" \| "outlineLight" \| "light"` | `"primary"` | Button style variant |
| `size` | `"sm" \| "md" \| "lg" \| "xl"` | `"md"` | Button size |
| `arrowDirection` | `"right" \| "up-right" \| "down"` | `"right"` | Arrow icon direction |
| `showArrow` | `boolean` | `true` | Show/hide arrow icon |
| `rounded` | `"none" \| "sm" \| "md" \| "lg"` | `"none"` | Border radius |
| `asChild` | `boolean` | `false` | Render as child component (use Slot) |
| `className` | `string` | - | Additional CSS classes |

## Notes

- All buttons use **Schibsted Grotesk** font family
- Text is **uppercase** and **bold** by default
- Includes smooth transitions on hover
- Arrow icons animate on hover
- Font size matches design system specifications
