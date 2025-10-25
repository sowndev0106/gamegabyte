'use client';

import { useEffect, useRef, useState } from 'react';

interface AboutUsSectionProps {
  title?: string;
  description?: string;
}

/**
 * About Us Section Component
 * Text fills from left to right based on scroll position
 */
export function AboutUsSection({
  title = 'ABOUT US',
  description = 'To Help Game Studios Level Up Their Marketing With Innovative, Player-Focused Solutions, A Game Website That Connect Creativity With Measurable Success.',
}: AboutUsSectionProps) {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [fillPercentage, setFillPercentage] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current) return;

      const section = sectionRef.current;
      const rect = section.getBoundingClientRect();
      const windowHeight = window.innerHeight;

      // Calculate scroll progress through the section
      const sectionTop = rect.top;
      const sectionHeight = rect.height;

      // Start filling when section enters viewport, complete when it exits
      if (sectionTop < windowHeight && sectionTop + sectionHeight > 0) {
        // Calculate percentage based on how far section has scrolled through viewport
        const scrollProgress = (windowHeight - sectionTop) / (windowHeight + sectionHeight);
        const percentage = Math.min(Math.max(scrollProgress * 100, 0), 100);
        setFillPercentage(percentage);
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Check initial position

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Calculate revealed characters based on scroll
  // Map 0-70% scroll progress to 0-100% text reveal
  const adjustedPercentage = Math.min((fillPercentage / 70) * 100, 100);
  const totalChars = description.length;
  const revealedChars = Math.floor((adjustedPercentage / 100) * totalChars);

  // Render text with character-by-character coloring
  const renderText = () => {
    return description.split('').map((char, index) => {
      const isRevealed = index < revealedChars;
      return (
        <span
          key={index}
          style={{
            color: isRevealed ? '#202124' : '#00000066',
            transition: 'color 0.1s ease-out',
          }}
        >
          {char}
        </span>
      );
    });
  };

  return (
    <section ref={sectionRef} className="relative w-full bg-light section-padding">
      <div className="content-container-full">
        {/* Title */}
        <div className="mb-8 md:mb-12 3xl:mb-16">
          <p className="text-dark text-body-sm uppercase tracking-wider">
            {title}
          </p>
        </div>

        {/* Description with Fill Effect */}
        <div className="relative">
          <p className="text-heading-1-regular capitalize">
            {renderText()}
          </p>
        </div>
      </div>
    </section>
  );
}
