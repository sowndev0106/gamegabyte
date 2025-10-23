# Fonts Directory

Thư mục này để chứa custom fonts nếu cần (không dùng Google Fonts).

## Hiện tại

Project đang sử dụng **Schibsted Grotesk** từ Google Fonts (đã config trong [layout.tsx](../../src/app/layout.tsx)).

## Khi nào cần custom fonts?

- Custom brand fonts không có trên Google Fonts
- Fonts mua license riêng
- Self-hosting để tối ưu performance

## Cách thêm custom fonts

### 1. Đặt font files vào thư mục này

```
public/fonts/
├── CustomFont-Regular.woff2
├── CustomFont-Bold.woff2
├── CustomFont-ExtraBold.woff2
└── ...
```

### 2. Tạo CSS file

Tạo file `src/app/fonts.css`:

```css
@font-face {
  font-family: 'Custom Font';
  src: url('/fonts/CustomFont-Regular.woff2') format('woff2');
  font-weight: 400;
  font-style: normal;
  font-display: swap;
}

@font-face {
  font-family: 'Custom Font';
  src: url('/fonts/CustomFont-Bold.woff2') format('woff2');
  font-weight: 700;
  font-style: normal;
  font-display: swap;
}

@font-face {
  font-family: 'Custom Font';
  src: url('/fonts/CustomFont-ExtraBold.woff2') format('woff2');
  font-weight: 800;
  font-style: normal;
  font-display: swap;
}
```

### 3. Import trong layout.tsx

```tsx
import "./fonts.css";
import "./globals.css";
```

### 4. Cập nhật Tailwind config

```ts
// tailwind.config.ts
fontFamily: {
  sans: ["Custom Font", "system-ui", "sans-serif"],
  custom: ["Custom Font", "system-ui", "sans-serif"],
}
```

## Alternative: Next.js localFont

```tsx
// src/app/layout.tsx
import localFont from "next/font/local";

const customFont = localFont({
  src: [
    {
      path: "../public/fonts/CustomFont-Regular.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "../public/fonts/CustomFont-Bold.woff2",
      weight: "700",
      style: "normal",
    },
    {
      path: "../public/fonts/CustomFont-ExtraBold.woff2",
      weight: "800",
      style: "normal",
    },
  ],
  variable: "--font-custom",
  display: "swap",
});

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${customFont.variable} font-sans`}>
        {children}
      </body>
    </html>
  );
}
```

## Best Practices

1. **Format**: Sử dụng WOFF2 (best compression)
2. **Subsetting**: Chỉ include characters cần thiết
3. **Preloading**: Preload critical fonts
4. **font-display**: Sử dụng `swap` để tránh FOIT (Flash of Invisible Text)

## Tools

- [Transfonter](https://transfonter.org/) - Convert & optimize fonts
- [Font Squirrel](https://www.fontsquirrel.com/tools/webfont-generator) - Webfont generator
- [Glyphhanger](https://github.com/zachleat/glyphhanger) - Font subsetting
