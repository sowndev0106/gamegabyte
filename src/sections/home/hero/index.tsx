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
    <section className="relative w-full overflow-hidden bg-dark h-[calc(100vh-70px)] max-h-[1080px] 2xl:max-h-[1440px] 3xl:max-h-none">
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
          <div className="max-w-[1200px] 3xl:max-w-[2000px]">
            <h1 className="mb-4 sm:mb-6 3xl:mb-12">
              <span className="block text-light text-display-xl mb-0">
                {title} <span className="text-primary">{titleHighlight}</span>
              </span>
              <span className="block text-light text-display-xl">
                MARKETING STUDIO
              </span>
            </h1>

            {/* Subtitle */}
            <p className="text-light font-medium text-body-xl mb-6 sm:mb-8 md:mb-10 3xl:mb-16 max-w-[900px] 3xl:max-w-[1800px]">
              {subtitle}
            </p>

            {/* Buttons */}
            <div className="flex flex-wrap gap-3 sm:gap-4 3xl:gap-8 mb-12 sm:mb-16 sm:mt-16 3xl:mt-24 3xl:mb-24">
              <Link href={primaryButtonHref}>
                <ActionButton
                  variant="white"
                  size="md"
                  arrowDirection="up-right"
                  className="3xl:px-16 3xl:py-8 3xl:text-2xl 3xl:h-auto"
                >
                  {primaryButtonText}
                </ActionButton>
              </Link>

              <Link href={secondaryButtonHref}>
                <ActionButton
                  variant="primary"
                  size="md"
                  arrowDirection="up-right"
                  className="3xl:px-16 3xl:py-8 3xl:text-2xl 3xl:h-auto"
                >
                  {secondaryButtonText}
                </ActionButton>
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Client Logos at Bottom - Layer 4 (top) */}
      <div className="absolute bottom-5 left-0 right-0 z-20 py-6 3xl:bottom-10 3xl:py-12">
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
          imageWidth={150}
          imageHeight={60}
          gap={30}
          className="opacity-50 3xl:[&_img]:!w-[240px] 3xl:[&_img]:!h-[120px]"
          imageClassName="brightness-200 grayscale"
        />
      </div>
    </section>
  );
}
