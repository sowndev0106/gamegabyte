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
        // Custom typography sizes
        hero: ["80px", { lineHeight: "100%", letterSpacing: "-0.03em", fontWeight: "800" }],
        h1: ["56px", { lineHeight: "100%", letterSpacing: "-0.06em", fontWeight: "700" }],
        h2: ["48px", { lineHeight: "110%", letterSpacing: "-0.05em", fontWeight: "700" }],
        h3: ["40px", { lineHeight: "115%", letterSpacing: "-0.04em", fontWeight: "700" }],
        h4: ["32px", { lineHeight: "120%", letterSpacing: "-0.03em", fontWeight: "700" }],
        h5: ["24px", { lineHeight: "125%", letterSpacing: "-0.02em", fontWeight: "700" }],
        description: ["18px", { lineHeight: "135%", letterSpacing: "-0.02em", fontWeight: "400" }],
        body: ["16px", { lineHeight: "150%", letterSpacing: "-0.01em", fontWeight: "400" }],
        small: ["14px", { lineHeight: "140%", letterSpacing: "0", fontWeight: "400" }],
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
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
  plugins: [require("tailwindcss-animate")],
};

export default config;
