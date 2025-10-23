'use client';

import { useEffect, useRef, useState } from 'react';

interface AboutUsSectionProps {
  title?: string;
  description?: string;
  animationDuration?: number; // in seconds
}

/**
 * About Us Section Component
 * Text fills from left to right automatically when in view
 */
export function AboutUsSection({
  title = 'ABOUT US',
  description = 'To Help Game Studios Level Up Their Marketing With Innovative, Player-Focused Solutions, A Game Website That Connect Creativity With Measurable Success.',
  animationDuration = 2.5,
}: AboutUsSectionProps) {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [isInView, setIsInView] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !isInView) {
            setIsInView(true);
          }
        });
      },
      {
        threshold: 0.2, // Trigger when 20% of section is visible
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, [isInView]);

  return (
    <section ref={sectionRef} className="relative w-full bg-light py-20 md:py-32">
      <div className="content-container-full">
        {/* Title */}
        <div className="mb-8 md:mb-12">
          <p className="font-schibsted text-dark text-[14px] md:text-[16px] uppercase tracking-wider">
            {title}
          </p>
        </div>

        {/* Description with Fill Effect */}
        <div className="relative">
          {/* Gray Text (Background) */}
          <p className="font-schibsted font-normal text-[32px] md:text-[48px] lg:text-[56px] leading-[100%] tracking-[-0.06em] capitalize" style={{ color: '#00000066' }}>
            {description}
          </p>

          {/* Black Text (Fills from left to right automatically) */}
          <div
            className="absolute top-0 left-0 overflow-hidden"
            style={{
              width: isInView ? '100%' : '0%',
              transition: `width ${animationDuration}s ease-out`,
            }}
          >
            <p className="font-schibsted font-normal text-[32px] md:text-[48px] lg:text-[56px] leading-[100%] tracking-[-0.06em] capitalize text-dark whitespace-nowrap">
              {description}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
