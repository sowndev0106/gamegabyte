import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: ["class"],
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/sections/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      screens: {
        '3xl': '2560px', // For 4K and ultra-wide displays
      },
      colors: {
        // Brand colors
        primary: {
          DEFAULT: "#B6E802",
          foreground: "#202124",
        },
        secondary: {
          DEFAULT: "#601FEB",
          foreground: "#FFFFFF",
        },
        background: "#FFFFFF",
        foreground: "#202124",
        dark: "#202124",
        light: {
          DEFAULT: "#FFFFFF",
          60: "#FFFFFF99", // 60% opacity - for inactive nav items
        },
        accent: "#601FEB",

        // shadcn/ui colors
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
      },
      fontFamily: {
        sans: ["var(--font-schibsted)", "system-ui", "sans-serif"],
        schibsted: ["var(--font-schibsted)", "system-ui", "sans-serif"],
      },
      fontSize: {
        // Responsive typography system - doubles on 4K (3xl breakpoint)
        // Hero & Display sizes
        'display-xl': ['80px', { lineHeight: '100%', letterSpacing: '-0.03em', fontWeight: '800' }], // 80px -> 160px on 4K
        'display-lg': ['64px', { lineHeight: '100%', letterSpacing: '-0.03em', fontWeight: '700' }], // 64px -> 128px on 4K

        // Headings (Bold)
        'heading-1': ['56px', { lineHeight: '100%', letterSpacing: '-0.06em', fontWeight: '700' }], // 56px -> 112px on 4K
        'heading-2': ['48px', { lineHeight: '110%', letterSpacing: '-0.05em', fontWeight: '700' }], // 48px -> 96px on 4K
        'heading-3': ['40px', { lineHeight: '115%', letterSpacing: '-0.04em', fontWeight: '700' }], // 40px -> 80px on 4K
        'heading-4': ['32px', { lineHeight: '120%', letterSpacing: '-0.03em', fontWeight: '700' }], // 32px -> 64px on 4K
        'heading-5': ['24px', { lineHeight: '125%', letterSpacing: '-0.02em', fontWeight: '700' }], // 24px -> 48px on 4K
        'heading-6': ['20px', { lineHeight: '130%', letterSpacing: '-0.02em', fontWeight: '700' }], // 20px -> 40px on 4K

        // Headings (Regular weight for descriptions)
        'heading-1-regular': ['56px', { lineHeight: '100%', letterSpacing: '-0.06em', fontWeight: '400' }], // 56px -> 112px on 4K
        'heading-2-regular': ['48px', { lineHeight: '110%', letterSpacing: '-0.05em', fontWeight: '400' }], // 48px -> 96px on 4K
        'heading-3-regular': ['40px', { lineHeight: '115%', letterSpacing: '-0.04em', fontWeight: '400' }], // 40px -> 80px on 4K

        // Body text
        'body-xl': ['22px', { lineHeight: '140%', letterSpacing: '-0.02em', fontWeight: '400' }], // 22px -> 44px on 4K
        'body-lg': ['18px', { lineHeight: '135%', letterSpacing: '-0.02em', fontWeight: '400' }], // 18px -> 36px on 4K
        'body-md': ['16px', { lineHeight: '150%', letterSpacing: '-0.01em', fontWeight: '400' }], // 16px -> 32px on 4K
        'body-sm': ['14px', { lineHeight: '140%', letterSpacing: '0', fontWeight: '400' }], // 14px -> 28px on 4K

        // Legacy support (deprecated - use heading-* instead)
        hero: ['80px', { lineHeight: '100%', letterSpacing: '-0.03em', fontWeight: '800' }],
        h1: ['56px', { lineHeight: '100%', letterSpacing: '-0.06em', fontWeight: '700' }],
        h2: ['48px', { lineHeight: '110%', letterSpacing: '-0.05em', fontWeight: '700' }],
        h3: ['40px', { lineHeight: '115%', letterSpacing: '-0.04em', fontWeight: '700' }],
        h4: ['32px', { lineHeight: '120%', letterSpacing: '-0.03em', fontWeight: '700' }],
        h5: ['24px', { lineHeight: '125%', letterSpacing: '-0.02em', fontWeight: '700' }],
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      minHeight: {
        // Section heights - responsive system
        // Small sections (compact content)
        'section-xs': '400px',  // 400px -> 600px on 4K
        'section-sm': '500px',  // 500px -> 800px on 4K

        // Medium sections (standard content)
        'section-md': '600px',  // 600px -> 1000px on 4K
        'section-lg': '700px',  // 700px -> 1200px on 4K

        // Large sections (hero, showcase)
        'section-xl': '800px',  // 800px -> 1400px on 4K
        'section-2xl': '900px', // 900px -> 1600px on 4K
      },
      height: {
        // Same heights for regular height
        'section-xs': '400px',
        'section-sm': '500px',
        'section-md': '600px',
        'section-lg': '700px',
        'section-xl': '800px',
        'section-2xl': '900px',
      },
      spacing: {
        // Section padding values - responsive system
        // Mobile-first, scales up on larger screens
        'section-py-xs': '40px',  // Extra small padding
        'section-py-sm': '64px',  // Small padding
        'section-py-md': '80px',  // Medium padding (default)
        'section-py-lg': '112px', // Large padding
        'section-py-xl': '128px', // Extra large padding (4K)
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
  plugins: [
    require("tailwindcss-animate"),
    // Custom plugin for section padding utilities
    function({ addUtilities }: any) {
      const sectionPadding = {
        // Default section padding: mobile -> tablet -> desktop -> 4K (doubles on 4K)
        '.section-padding': {
          'padding-top': '40px',    // Mobile: 40px
          'padding-bottom': '40px',
          '@media (min-width: 768px)': {  // md: 64px
            'padding-top': '64px',
            'padding-bottom': '64px',
          },
          '@media (min-width: 1024px)': { // lg: 80px
            'padding-top': '80px',
            'padding-bottom': '80px',
          },
          '@media (min-width: 1280px)': { // xl: 112px
            'padding-top': '112px',
            'padding-bottom': '112px',
          },
          '@media (min-width: 1536px)': { // 2xl: 112px
            'padding-top': '112px',
            'padding-bottom': '112px',
          },
          '@media (min-width: 2560px)': { // 3xl (4K): 224px (2x of 112px)
            'padding-top': '224px',
            'padding-bottom': '224px',
          },
        },
        // Small section padding (doubles on 4K)
        '.section-padding-sm': {
          'padding-top': '32px',    // Mobile: 32px
          'padding-bottom': '32px',
          '@media (min-width: 768px)': {  // md: 48px
            'padding-top': '48px',
            'padding-bottom': '48px',
          },
          '@media (min-width: 1280px)': { // xl: 64px
            'padding-top': '64px',
            'padding-bottom': '64px',
          },
          '@media (min-width: 2560px)': { // 3xl (4K): 128px (2x of 64px)
            'padding-top': '128px',
            'padding-bottom': '128px',
          },
        },
        // Large section padding (doubles on 4K)
        '.section-padding-lg': {
          'padding-top': '64px',    // Mobile: 64px
          'padding-bottom': '64px',
          '@media (min-width: 768px)': {  // md: 96px
            'padding-top': '96px',
            'padding-bottom': '96px',
          },
          '@media (min-width: 1280px)': { // xl: 128px
            'padding-top': '128px',
            'padding-bottom': '128px',
          },
          '@media (min-width: 2560px)': { // 3xl (4K): 256px (2x of 128px)
            'padding-top': '256px',
            'padding-bottom': '256px',
          },
        },
      };
      addUtilities(sectionPadding);
    },
  ],
};

export default config;
