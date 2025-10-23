# GameGabite

A modern Next.js project with custom design system featuring Schibsted Grotesk typography and a vibrant color palette.

## Tech Stack

- **Next.js 15** - React framework with App Router
- **TypeScript** - Type safety
- **TailwindCSS** - Utility-first CSS framework
- **shadcn/ui** - Re-usable component library
- **Schibsted Grotesk** - Primary font family

## Design System

### Color Palette

- **Primary**: `#B6E802` - Vibrant lime green
- **Accent**: `#601FEB` - Bold purple
- **Dark**: `#202124` - Deep charcoal
- **Light**: `#FFFFFF` - Pure white

### Typography

The project uses **Schibsted Grotesk** font with custom typography utilities:

#### Typography Classes

- `.text-hero` - 80px, ExtraBold, uppercase (responsive)
- `.text-h1` - 56px, Bold, capitalize
- `.text-h2` - 48px, Bold, capitalize
- `.text-h3` - 40px, Bold, capitalize
- `.text-h4` - 32px, Bold, capitalize
- `.text-h5` - 24px, Bold, capitalize
- `.text-description` - 18px, Regular
- `.text-body` - 16px, Regular
- `.text-small` - 14px, Regular

#### Typography Features

- Optimized line heights for readability
- Negative letter spacing for modern look
- Responsive sizing on mobile devices
- Center alignment variants available (e.g., `.text-h1-center`)

### Button Styles

Custom button utilities:

- `.btn-primary` - Primary brand button
- `.btn-secondary` - Secondary accent button
- `.btn-outline` - Outlined button

## Getting Started

### Installation

```bash
# Install dependencies
npm install

# or
yarn install

# or
pnpm install
```

### Development

```bash
# Run development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to see the result.

### Build

```bash
# Create production build
npm run build

# Start production server
npm start
```

## Project Structure

```
gamegabite/
├── src/
│   ├── app/
│   │   ├── layout.tsx        # Root layout with font configuration
│   │   ├── page.tsx          # Home page with design showcase
│   │   └── globals.css       # Global styles and custom utilities
│   ├── components/
│   │   └── ui/               # shadcn/ui components
│   │       ├── button.tsx
│   │       └── card.tsx
│   └── lib/
│       └── utils.ts          # Utility functions
├── public/                   # Static assets
├── tailwind.config.ts        # Tailwind configuration
├── tsconfig.json            # TypeScript configuration
└── package.json             # Dependencies
```

## Adding shadcn/ui Components

This project is configured to use shadcn/ui. To add more components:

```bash
npx shadcn@latest add [component-name]
```

Example:
```bash
npx shadcn@latest add dialog
npx shadcn@latest add dropdown-menu
npx shadcn@latest add toast
```

## Custom Utilities

### Gradients

- `.bg-primary-gradient` - Primary to accent gradient background
- `.text-primary-gradient` - Gradient text effect

### Responsive Typography

Typography automatically scales down on mobile devices:
- Tablets (768px): Reduced sizes
- Mobile (480px): Further reduced sizes

## Environment Variables

Create a `.env.local` file for environment variables:

```env
# Add your environment variables here
NEXT_PUBLIC_APP_URL=http://localhost:3000
```

## Learn More

- [Next.js Documentation](https://nextjs.org/docs)
- [TailwindCSS Documentation](https://tailwindcss.com/docs)
- [shadcn/ui Documentation](https://ui.shadcn.com)
- [Schibsted Grotesk Font](https://fonts.google.com/specimen/Schibsted+Grotesk)

## License

MIT
