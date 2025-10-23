import type { Metadata } from "next";
import { Schibsted_Grotesk } from "next/font/google";
import { Navigation } from "@/components/navigation";
import "./globals.css";

const schibstedGrotesk = Schibsted_Grotesk({
  subsets: ["latin"],
  weight: ["400", "700", "800"],
  variable: "--font-schibsted",
  display: "swap",
});

export const metadata: Metadata = {
  title: "GameGabite",
  description: "Created with Next.js, TailwindCSS, and shadcn/ui",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${schibstedGrotesk.variable} font-sans antialiased`}>
        <Navigation />
        {children}
      </body>
    </html>
  );
}
