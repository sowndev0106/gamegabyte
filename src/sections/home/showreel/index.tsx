'use client';

import { useRef } from 'react';
import Image from 'next/image';

interface ShowreelSectionProps {
  videoSrc?: string;
  videoPosterSrc?: string;
}

/**
 * Showreel Section Component
 * Video auto plays
 */
export function ShowreelSection({
  videoSrc = '/images/sections/showreel/showreel.mp4',
  videoPosterSrc = '/images/sections/showreel/poster.jpg',
}: ShowreelSectionProps) {
  const videoRef = useRef<HTMLVideoElement>(null);

  return (
    <section className="relative w-full bg-dark py-16 md:py-24 overflow-hidden">
      {/* Background SVG */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <Image
          src="/images/sections/showreel/bg_showreel.svg"
          alt="Showreel background"
          fill
          className="object-cover opacity-50"
        />
      </div>

      {/* Title - Centered */}
      <div className="relative z-10 text-center mb-12 md:mb-16">
        <h2
          className="font-schibsted font-bold text-[56px] capitalize leading-[100%] tracking-[-0.06em] bg-clip-text text-transparent"
          style={{
            backgroundImage: 'linear-gradient(90deg, #FFFFFF 0%, #F4F4F4 27.2%, #7A7A7A 100%)',
          }}
        >
          Showreel 2025
        </h2>
      </div>

      {/* Video Container - Smaller Width */}
      <div className="relative z-10 content-container">
        <div className="max-w-[1200px] mx-auto">
          <div className="relative w-full aspect-video overflow-hidden bg-dark-80">
            {/* Video */}
            <video
              ref={videoRef}
              className="w-full h-full object-cover"
              poster={videoPosterSrc}
              autoPlay
              muted
              playsInline
              loop
            >
              <source src={videoSrc} type="video/mp4" />
            </video>
          </div>
        </div>
      </div>
    </section>
  );
}
