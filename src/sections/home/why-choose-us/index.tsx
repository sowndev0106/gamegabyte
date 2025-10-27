'use client';

import Image from 'next/image';

interface Feature {
  title: string;
  description: string;
  icon: string;
}

interface WhyChooseUsSectionProps {
  title?: string;
  subtitle?: string;
  features?: Feature[];
  backgroundImage?: string;
}

const defaultFeatures: Feature[] = [
  {
    title: 'Gaming \n Expertise',
    description: 'Our team consists of gamers who understand player psychology. We know how to create experiences that resonate with gamers.',
    icon: '/images/sections/why-choose-us/icon-1.svg',
  },
  {
    title: 'Unbeatable \n Pricing',
    description: 'We offer competitive pricing without sacrificing quality. Maximize your ROI with our cost-effective solutions.',
    icon: '/images/sections/why-choose-us/icon-2.svg',
  },
  {
    title: 'Lightning speed\n  delivery',
    description: 'We deliver top-notch web experiences with unmatched speed, ensuring your launch day one.',
    icon: '/images/sections/why-choose-us/icon-3.svg',
  },
  {
    title: 'Design you \n will love',
    description: 'Our team of designers and players themselves, know what makes a game website shine, ensuring that everything looks pixel-perfect anytime.',
    icon: '/images/sections/why-choose-us/icon-4.svg',
  },
];

/**
 * Why Choose Us Section Component
 * Displays features in a grid layout with glassmorphic cards
 */
export function WhyChooseUsSection({
  title = 'Why Choose Us?',
  subtitle = "We're not just another agency. We're strategic partners helping your game succeed in the fiercely competitive market.",
  features = defaultFeatures,
  backgroundImage = '/images/backgrounds/bg-common-1.svg',
}: WhyChooseUsSectionProps) {
  return (
    <section className="relative w-full section-padding overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 w-full h-full">
        <Image
          src={backgroundImage}
          alt="Background decoration"
          fill
          className="object-cover object-center"
          priority={false}
        />
      </div>

      <div className="content-container-full-lg relative z-10">
        {/* Header */}
        <div className="text-center mb-12 md:mb-16 3xl:mb-24">
          <h2
            className="text-display-lg mb-4 md:mb-6 3xl:mb-12"
            style={{
              background: 'linear-gradient(93.46deg, #C4C4C4 4.94%, #FFFFFF 98.78%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
            }}
          >
            {title}
          </h2>
          <p className="text-body-lg max-w-[600px] 3xl:max-w-[1200px] mx-auto" style={{ color: '#C4C4C4' }}>
            {subtitle}
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 3xl:gap-20">
          {features.map((feature, index) => (
            <FeatureCard key={index} {...feature} />
          ))}
        </div>
      </div>
    </section>
  );
}

/**
 * Feature Card Component
 */
function FeatureCard({ title, description, icon }: Feature) {
  return (
    <div className="h-full">
      <div
        className="group relative pt-12 md:pt-16 3xl:pt-36 transition-all duration-300 hover:shadow-lg hover:-translate-y-1 flex flex-col h-full"
        style={{
          background: '#000000',
          borderRadius: '16px',
          border: '2px solid transparent',
          backgroundImage: 'linear-gradient(#000, #000), linear-gradient(135deg, rgba(182, 232, 2, 0.3) 0%, rgba(96, 31, 235, 0.6) 50%, rgba(182, 232, 2, 0.3) 100%)',
          backgroundOrigin: 'border-box',
          backgroundClip: 'padding-box, border-box',
        }}
      >
        <div className='px-6 md:px-8 3xl:px-12 '>
          {/* Title */}
          <h3 className="text-heading-2-medium text-[#C4C4C4] mb-3 md:mb-4 3xl:mb-6 relative z-10 line-clamp-2 min-h-2-lines-h2-medium whitespace-pre-line">
            {title}
          </h3>

          {/* Description */}
          <p className="text-body-lg relative z-10 mb-6 md:mb-8 3xl:mb-12 flex-grow text-[#C4C4C480]">
            {description}
          </p>
        </div>

        {/* Icon at bottom */}
        <div className="relative z-10 mt-auto ml-auto">
          <div className="w-32 h-32 md:w-40 md:h-40 3xl:w-72 3xl:h-72 flex items-center justify-start ">
            <Image
              src={icon}
              alt={`${title} icon`}
              width={256}
              height={256}
              className="w-full h-full object-contain"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
