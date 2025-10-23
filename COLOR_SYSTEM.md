# Color System

Comprehensive color palette for GameGabite project.

---

## 🎨 Brand Colors

### Primary Color
```
#B6E802 - Lime Green
```
**Usage**: Main CTAs, active states, highlights

**Tailwind Classes:**
- `bg-primary`
- `text-primary`
- `border-primary`

---

### Light Colors
```
#FFFFFF - White (100%)
#FFFFFF99 - White 60% opacity
```

**Light (Full Opacity):**
```tsx
className="text-light"        // #FFFFFF
className="bg-light"          // #FFFFFF
```

**Light 60% (For Inactive Items):**
```tsx
className="text-light-60"     // #FFFFFF99
className="bg-light-60"       // #FFFFFF99
```

**Usage Examples:**
- `text-light` - Full white text
- `text-light-60` - Inactive navigation items (60% opacity)
- `bg-light` - White backgrounds
- `bg-light-60` - Semi-transparent overlays

---

### Dark Color
```
#202124 - Charcoal Black
```
**Usage**: Backgrounds, text on light backgrounds

**Tailwind Classes:**
- `bg-dark`
- `text-dark`
- `border-dark`

---

### Accent Color
```
#601FEB - Purple
```
**Usage**: Secondary CTAs, highlights, accents

**Tailwind Classes:**
- `bg-accent`
- `text-accent`
- `border-accent`

---

## 📋 Tailwind Configuration

Located in: `tailwind.config.ts`

```typescript
colors: {
  primary: {
    DEFAULT: "#B6E802",
    foreground: "#202124",
  },
  light: {
    DEFAULT: "#FFFFFF",
    60: "#FFFFFF99", // 60% opacity
  },
  dark: "#202124",
  accent: "#601FEB",
}
```

---

## 💻 Constants File

Located in: `src/lib/constants.ts`

```typescript
export const COLORS = {
  primary: "#B6E802",
  light: {
    DEFAULT: "#FFFFFF",
    60: "#FFFFFF99", // 60% opacity
  },
  dark: "#202124",
  accent: "#601FEB",
} as const;
```

**Usage in Components:**
```tsx
import { COLORS } from "@/lib/constants";

// Inline styles if needed
style={{ color: COLORS.light[60] }}
style={{ backgroundColor: COLORS.primary }}
```

---

## 🎯 Usage Examples

### Navigation (Header)
```tsx
// Active item
className="text-primary font-bold"

// Inactive item
className="text-light-60 font-normal"

// Hover state
className="hover:text-primary hover:font-bold"
```

### Buttons
```tsx
// Primary button
className="bg-primary text-dark"

// Dark button with primary border
className="bg-dark text-light border-primary"

// Accent button
className="bg-accent text-light"
```

### Backgrounds
```tsx
// Dark background
className="bg-dark"

// Light background
className="bg-light"

// Semi-transparent overlay
className="bg-light-60"
```

### Text Colors
```tsx
// Full opacity white
className="text-light"

// 60% opacity white (inactive)
className="text-light-60"

// Primary color
className="text-primary"

// Dark text
className="text-dark"
```

---

## 🎨 Color Combinations

### Light on Dark
```tsx
<div className="bg-dark text-light">
  White text on dark background
</div>
```

### Dark on Primary
```tsx
<div className="bg-primary text-dark">
  Dark text on lime green (CTA button)
</div>
```

### Primary on Dark
```tsx
<div className="bg-dark text-primary">
  Primary text on dark background (active nav)
</div>
```

### Light-60 on Dark
```tsx
<div className="bg-dark text-light-60">
  60% opacity white on dark (inactive nav)
</div>
```

---

## 🔧 Adding More Opacity Variants

To add more opacity variants, update both files:

**1. Tailwind Config** (`tailwind.config.ts`):
```typescript
light: {
  DEFAULT: "#FFFFFF",
  60: "#FFFFFF99",    // 60% opacity
  80: "#FFFFFFCC",    // 80% opacity (example)
  40: "#FFFFFF66",    // 40% opacity (example)
}
```

**2. Constants** (`src/lib/constants.ts`):
```typescript
light: {
  DEFAULT: "#FFFFFF",
  60: "#FFFFFF99",
  80: "#FFFFFFCC",
  40: "#FFFFFF66",
}
```

---

## 📖 Color Reference

| Color Name | Hex Code | Opacity | Tailwind Class | Usage |
|-----------|----------|---------|----------------|-------|
| Primary | #B6E802 | 100% | `text-primary` | Active states, CTAs |
| Light | #FFFFFF | 100% | `text-light` | Full white text |
| Light 60 | #FFFFFF99 | 60% | `text-light-60` | Inactive nav items |
| Dark | #202124 | 100% | `text-dark` | Dark text, backgrounds |
| Accent | #601FEB | 100% | `text-accent` | Secondary highlights |

---

## 💡 Best Practices

1. **Inactive States**: Use `text-light-60` for inactive navigation
2. **Active States**: Use `text-primary` for active/selected items
3. **Consistency**: Stick to defined colors for brand consistency
4. **Accessibility**: Ensure sufficient contrast (especially light-60)
5. **Hover States**: Transition from light-60 to primary on hover

---

## 🎨 Design System Integration

This color system is integrated throughout:
- ✅ Header navigation
- ✅ ActionButton component
- ✅ Typography components
- ✅ All UI components

Colors are centralized for easy maintenance and consistency.

---

Need to add a new color? Update both `tailwind.config.ts` and `src/lib/constants.ts`!
