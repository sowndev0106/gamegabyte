'use client';

import Image from 'next/image';

interface Stat {
  number: string;
  label: string;
}

interface OurNumbersSectionProps {
  title?: string;
  subtitle?: string;
  stats?: Stat[];
  backgroundImage?: string;
}

/**
 * Our Numbers Section Component
 * Shows company statistics with background image
 */
export function OurNumbersSection({
  title = "We've Helped Hundreds Of Companies",
  subtitle = "We're only just getting started on our journey",
  stats = [
    { number: '723', label: 'Success Project' },
    { number: '10', label: "Year's Experience" },
    { number: '500', label: 'Product Launched' },
    { number: '100', label: 'Startup Raised' },
  ],
  backgroundImage = '/images/sections/our-numbers/our-number.svg',
}: OurNumbersSectionProps) {
  return (
    <section className="relative w-full min-h-[500px] md:min-h-[600px] overflow-hidden flex items-center">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src={backgroundImage}
          alt="Our Numbers background"
          fill
          className="object-cover"
          priority
        />
        {/* Dark overlay for better text readability */}
        <div className="absolute inset-0 bg-dark/50" />
      </div>

      {/* Content */}
      <div className="relative z-10 content-container-full w-full py-20">
        {/* Title with Yellow Background - Multiple Lines */}
        <div className="mb-2">
          <h2 className="font-schibsted font-bold text-[40px] md:text-[48px] lg:text-[56px] leading-[100%] tracking-[-0.06em] capitalize">
            <span className="inline-block text-primary  py-1 mb-1">
              We've Helped Hundreds
            </span>
            <br />
            <span className="inline-block text-primary  py-1">
              Of Companies
            </span>
          </h2>
        </div>

        {/* Subtitle */}
        <p className="font-schibsted font-normal text-[16px] md:text-[18px] leading-[135%] tracking-[-0.02em] text-light mb-12 md:mb-16 max-w-[500px]">
          {subtitle}
        </p>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-8 md:gap-x-16">
          {stats.map((stat, index) => (
            <div key={index} className="flex flex-col">
              {/* Number with Gradient + Primary Plus */}
              <div className="flex items-start font-bold text-[56px] md:text-[64px] leading-[100%] tracking-[0.03em] uppercase mb-2">
                <span
                  className="bg-clip-text text-transparent"
                  style={{
                    backgroundImage: 'linear-gradient(93.46deg, #C4C4C4 4.94%, #FFFFFF 98.78%)',
                    fontFamily: 'Power Grotesk Trial, sans-serif',
                  }}
                >
                  {stat.number}
                </span>
                <span className="text-primary" style={{ fontFamily: 'Power Grotesk Trial, sans-serif' }}>
                  +
                </span>
              </div>

              {/* Label */}
              <p className="font-schibsted text-light text-[14px] md:text-[16px] leading-[135%] tracking-[-0.01em] opacity-90">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
