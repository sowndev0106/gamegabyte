# Header Component Guide

Clean header component với exact design specifications.

---

## ✅ Design Specs Implemented

### Header Dimensions
- **Width**: Full width (max 1920px)
- **Height**: 70px
- **Position**: Fixed top
- **Border**: 1px bottom border (primary/20)

### Navigation Text
**Normal State:**
- Font: Schibsted Grotesk
- Weight: 400 (Regular)
- Size: 16px
- Line Height: 24px
- Letter Spacing: 0.2px
- Transform: Uppercase

**Active State:**
- Font: Schibsted Grotesk
- Weight: 700 (Bold)
- Size: 16px
- Line Height: 24px
- Letter Spacing: 0.2px
- Transform: Uppercase
- Color: Primary (#B6E802)

---

## 🎨 Component Structure

```tsx
<Header>
  ├── Logo (Left)
  ├── Navigation (Center)
  │   ├── HOME
  │   ├── OUR SERVICES
  │   ├── GABYTE ACADEMY
  │   ├── CASE STUDIES
  │   └── ABOUT US
  └── CTA Button (Right)
      └── "Let's Talk"
</Header>
```

---

## 📁 Files

- **Component**: `src/components/layout/header.tsx`
- **Layout**: `src/app/layout.tsx` (integrated with pt-[70px])

---

## 🎯 Features

✅ **Exact Typography** - Matches design specs precisely
✅ **Active State** - Bold + Primary color when active
✅ **Hover Effect** - Text becomes bold + primary on hover
✅ **Fixed Position** - Always visible at top
✅ **Max Width** - 1920px centered
✅ **Responsive** - Mobile menu button ready

---

## 🔧 Customization

### Change Navigation Items

```tsx
const navItems = [
  { href: "/", label: "HOME" },
  { href: "/services", label: "OUR SERVICES" },
  // Add more items...
];
```

### Update Logo

Place your logo at:
```
public/images/logos/logo-gamegabite.svg
```

### Change CTA Button

```tsx
<ActionButton variant="primary" size="lg">
  Your Text
</ActionButton>
```

### Adjust Gap Between Nav Items

```tsx
<nav className="... gap-12">  {/* Change gap value */}
```

---

## 💡 Typography Details

The navigation uses exact design specifications:

```tsx
className={cn(
  "font-schibsted uppercase transition-colors",
  "text-[16px] leading-[24px] tracking-[0.2px]",
  isActive
    ? "font-bold text-primary"      // 700 weight + primary color
    : "font-normal text-light"       // 400 weight + light color
)}
```

---

## 🎨 Layout Integration

```tsx
// Header height: 70px
<Header />

// Body padding-top: 70px (prevents content hiding)
<div className="pt-[70px]">{children}</div>
```

---

## 📱 Responsive

- **Desktop (lg+)**: Full navigation visible
- **Mobile**: Hamburger menu button
- **Mobile Menu**: Ready to implement

---

## ✨ Active State Behavior

Navigation automatically:
1. Detects current page via `usePathname()`
2. Applies bold weight (700)
3. Changes color to primary
4. Matches exact design specs

---

## 🚀 Ready to Use

Header is:
- ✅ Fully implemented
- ✅ Design-accurate
- ✅ Type-safe
- ✅ Responsive-ready
- ✅ Clean code

Just add your logo and you're set! 🎉
