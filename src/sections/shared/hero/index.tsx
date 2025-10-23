"use client";

import Image from "next/image";
import { ActionButton } from "@/components/ui/action-button";
import InfiniteScroll from "@/components/ui/infinite-scroll";
import Link from "next/link";

interface HeroSectionProps {
  title?: string;
  titleHighlight?: string;
  subtitle?: string;
  primaryButtonText?: string;
  primaryButtonHref?: string;
  secondaryButtonText?: string;
  secondaryButtonHref?: string;
  backgroundImage?: string;
}

/**
 * Hero Section Component
 * Matches exact design specifications
 */
export function HeroSection({
  title = "WE ARE THE",
  titleHighlight = "GAME",
  subtitle = "From immersive websites to powerful digital strategies — we help your game win the market.",
  primaryButtonText = "CASE STUDY",
  primaryButtonHref = "/case-studies",
  secondaryButtonText = "CONNECT WITH US",
  secondaryButtonHref = "/contact",
  backgroundImage = "/images/sections/hero/bg_hero.mp4",
}: HeroSectionProps) {
  return (
    <section className="relative w-full overflow-hidden bg-dark h-[calc(100vh-70px)] max-h-[1080px]">
      {/* Background Video - Layer 1 (bottom) */}
      <div className="absolute inset-0 z-0">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
        >
          <source src={backgroundImage} type="video/mp4" />
        </video>
      </div>

      {/* Overlay SVG - Layer 2 (above video, below text) */}
      <div className="absolute inset-0 z-5 pointer-events-none">
        <Image
          src="/images/sections/hero/bg_hero_up.svg"
          alt="Hero overlay"
          fill
          className="object-cover"
          priority
        />
      </div>

      {/* Content - Layer 3 (above overlay) */}
      <div className="relative z-10 flex h-full items-center">
        <div className="content-container py-12 sm:py-16 md:py-20">
          <div className="max-w-[1200px]">
            <h1 className="font-schibsted uppercase mb-4 sm:mb-6">
              <span className="block text-light font-extrabold text-[32px] sm:text-[48px] md:text-[64px] lg:text-[80px] leading-[100%] tracking-[-0.03em] mb-0">
                {title} <span className="text-primary">{titleHighlight}</span>
              </span>
              <span className="block text-light font-extrabold text-[32px] sm:text-[48px] md:text-[64px] lg:text-[80px] leading-[100%] tracking-[-0.03em]">
                MARKETING STUDIO
              </span>
            </h1>

            {/* Subtitle - 32px, Medium (500), -5% letter spacing, 109% line height */}
            <p className="font-schibsted text-light font-medium text-[18px] sm:text-[22px] md:text-[28px] lg:text-[32px] leading-[109%] tracking-[-0.05em] mb-6 sm:mb-8 md:mb-10 max-w-[900px]">
              {subtitle}
            </p>

            {/* Buttons */}
            <div className="flex flex-wrap gap-3 sm:gap-4 mb-12 sm:mb-16 sm:mt-16">
              <Link href={primaryButtonHref}>
                <ActionButton
                  variant="white"
                  size="md"
                  arrowDirection="up-right"
                >
                  {primaryButtonText}
                </ActionButton>
              </Link>

              <Link href={secondaryButtonHref}>
                <ActionButton
                  variant="primary"
                  size="md"
                  arrowDirection="up-right"
                >
                  {secondaryButtonText}
                </ActionButton>
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Client Logos at Bottom - Layer 4 (top) */}
      <div className="absolute bottom-5 left-0 right-0 z-20 py-6">
        <InfiniteScroll
          images={[
            '/images/logos/clients/logo-client-1.svg',
            '/images/logos/clients/logo-client-2.svg',
            '/images/logos/clients/logo-client-3.svg',
            '/images/logos/clients/logo-client-4.svg',
            '/images/logos/clients/logo-client-5.svg',
            '/images/logos/clients/logo-client-6.svg',
            '/images/logos/clients/logo-client-7.svg',
            '/images/logos/clients/logo-client-8.svg',
            '/images/logos/clients/logo-client-9.svg',
            '/images/logos/clients/logo-client-10.svg',
            '/images/logos/clients/logo-client-11.svg',
            '/images/logos/clients/logo-client-12.svg',
          ]}
          direction="left"
          speed={60}
          imageWidth={120}
          imageHeight={60}
          className="opacity-50"
          imageClassName="brightness-200 grayscale"
        />
      </div>
    </section>
  );
}
