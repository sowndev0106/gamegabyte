'use client';

import Image from 'next/image';

interface Stat {
  number: string;
  label: string;
}

interface OurNumbersSectionProps {
  subtitle?: string;
  stats?: Stat[];
  backgroundImage?: string;
}

/**
 * Our Numbers Section Component
 * Shows company statistics with background image
 */
export function OurNumbersSection({
  subtitle = "We&apos;re only just getting started on our journey",
  stats = [
    { number: '723', label: 'Success Project' },
    { number: '10', label: "Experience" },
    { number: '500', label: 'Product Launched' },
    { number: '100', label: 'Startup Raised' },
  ],
  backgroundImage = '/images/sections/our-numbers/our-number.svg',
}: OurNumbersSectionProps) {
  return (
    <section className="relative w-full min-h-section-md overflow-hidden flex items-center">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src={backgroundImage}
          alt="Our Numbers background"
          fill
          className="object-cover"
          priority
        />
        {/* Gradient overlay */}
        <div
          className="absolute inset-0"
          style={{
            background: 'linear-gradient(180deg, rgba(0, 0, 0, 0) 1.92%, rgba(0, 0, 0, 0.8) 77.65%)'
          }}
        />
      </div>

      {/* Content */}
      <div className="relative z-10 content-container-full w-full py-48 3xl:py-32">
        {/* Title with Yellow Background - Multiple Lines */}
        <div className="mb-2 3xl:mb-4">
          <h2 className="text-heading-1 capitalize">
            <span className="inline-block text-primary py-1 mb-1">
              We&apos;ve Helped Hundreds
            </span>
            <br />
            <span className="inline-block text-primary py-1">
              Of Companies
            </span>
          </h2>
        </div>

        {/* Subtitle */}
        <p className="text-body-lg text-light mb-12 md:mb-16 3xl:mb-24 max-w-[500px] 3xl:max-w-[1000px]">
          {subtitle}
        </p>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-8 md:gap-x-16 3xl:gap-x-24 3xl:gap-y-16">
          {stats.map((stat, index) => (
            <div key={index} className="flex flex-col">
              {/* Number with Gradient + Primary Plus */}
              <div className="flex items-start font-bold text-display-lg uppercase mb-2 3xl:mb-4">
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
              <p className="text-light text-body-md opacity-90">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
