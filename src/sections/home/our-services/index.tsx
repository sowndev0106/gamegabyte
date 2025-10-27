'use client';

import Image from 'next/image';
import Link from 'next/link';
import { ActionButton } from '@/components/ui/action-button';

interface Service {
  title: string;
  description: string;
  icon?: string;
}

interface OurServicesSectionProps {
  title?: string;
  subtitle?: string;
  services?: Service[];
  buttonText?: string;
  buttonHref?: string;
  backgroundImage?: string;
}

const defaultServices: Service[] = [
  {
    title: 'Game Landing Page',
    description: 'Create impressive landing pages showcasing your game with unique design and high conversion rates.',
    icon: '/images/icons/browser.svg',
  },
  {
    title: 'UI/UX Design',
    description: 'Forge captivating landing pages that spotlight your game with cutting-edge design and optimized conversion strategies.',
    icon: '/images/icons/browser.svg',
  },
  {
    title: 'Marketing Analytics',
    description: 'Drive growth with data-driven insights. We transform raw data into actionable strategies, boosting user engagement and maximizing ROI.',
    icon: '/images/icons/browser.svg',
  },
  {
    title: 'Development',
    description: 'Develop stunning, high-performance landing pages that captivate players and drive conversions.',
    icon: '/images/icons/browser.svg',
  },
  {
    title: 'Responsive Design',
    description: 'Craft adaptive designs ensuring seamless experiences across all devices, enhancing user engagement and broadening your audience reach.',
    icon: '/images/icons/browser.svg',
  },
  {
    title: 'Community Features',
    description: 'Enhance player interaction with integrated forums, chats, and social feeds, fostering a vibrant community around your game.',
    icon: '/images/icons/browser.svg',
  },
];

/**
 * Our Services Section Component
 * Displays service cards in a grid layout
 */
export function OurServicesSection({
  title = 'Our Services',
  subtitle = 'From concept to complete website, we provide comprehensive solutions for your game marketing needs.',
  services = defaultServices,
  buttonText = 'VIEW OUR PORTFOLIO',
  buttonHref = '#portfolio',
  backgroundImage = '/images/sections/our-services/bg-our-service.svg',
}: OurServicesSectionProps) {
  return (
    <section className="relative w-full bg-light section-padding overflow-hidden">
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

      <div className="content-container-full relative z-10">
        {/* Header */}
        <div className="text-center mb-12 md:mb-16 3xl:mb-24">
          <h2 className="text-display-lg text-dark mb-4 md:mb-6 3xl:mb-12">
            {title}
          </h2>
          <p className="text-body-lg text-dark/70 max-w-[600px] 3xl:max-w-[1200px] mx-auto">
            {subtitle}
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 3xl:gap-12 mb-12 md:mb-16 3xl:mb-24">
          {services.map((service, index) => (
            <ServiceCard key={index} {...service} />
          ))}
        </div>

        {/* CTA Button */}
        <div className="flex justify-center">
          <Link href={buttonHref}>
            <ActionButton
              variant="secondary"
              size="lg"
            >
              {buttonText}
            </ActionButton>
          </Link>
        </div>
      </div>
    </section>
  );
}

/**
 * Service Card Component
 */
function ServiceCard({ title, description, icon }: Service) {
  return (
    <div
      className="group relative p-8 transition-all duration-300 hover:shadow-lg hover:-translate-y-1"
      style={{
        background: 'linear-gradient(37.32deg, rgba(255, 255, 255, 0.4) 21.63%, rgba(215, 215, 215, 0.4) 96.43%)',
        backdropFilter: 'blur(50px)',
        borderRadius: '16px',
        clipPath: 'polygon(0 0, 100% 0, 100% calc(100% - 35px), calc(100% - 35px) 100%, 0 100%)',
      }}
    >
      {/* Border Gradient Overlay */}
      <div
        className="absolute inset-0 rounded-[16px] pointer-events-none"
        style={{
          background: 'linear-gradient(100deg, rgba(255, 255, 255, 0) 10.85%, #FFFFFF 169.17%)',
          mask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
          maskComposite: 'exclude',
          WebkitMask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
          WebkitMaskComposite: 'xor',
          padding: '2px',
          clipPath: 'polygon(0 0, 100% 0, 100% calc(100% - 35px), calc(100% - 35px) 100%, 0 100%)',
        }}
      />

      {/* Border for clipped diagonal edge */}
      <svg
        className="absolute bottom-0 right-0 pointer-events-none"
        style={{
          width: '35px',
          height: '35px',
        }}
      >
        <line
          x1="0"
          y1="35"
          x2="35"
          y2="0"
          stroke="#FFFFFF"
          strokeWidth="2"
        />
      </svg>

      {/* Icon */}
      {icon && (
        <div className="mb-6 3xl:mb-8 relative z-10">
          <div className="w-12 h-12 3xl:w-24 3xl:h-24 rounded-lg flex items-center justify-center">
            <Image
              src={icon}
              alt={`${title} icon`}
              width={24}
              height={24}
              className="w-6 h-6 3xl:w-12 3xl:h-12"
            />
          </div>
        </div>
      )}

      {/* Title */}
      <h3 className="text-heading-5 text-dark mb-3 3xl:mb-6 relative z-10">
        {title}
      </h3>

      {/* Description */}
      <p className="text-body-md text-dark/70 relative z-10">
        {description}
      </p>
    </div>
  );
}
