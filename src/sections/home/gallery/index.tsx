'use client';

import Image from 'next/image';
import InfiniteScroll from '@/components/ui/infinite-scroll';

interface GallerySectionProps {
  title?: string;
  subtitle?: string;
}

/**
 * Gallery Section Component
 * Shows two rows of game screenshots scrolling in opposite directions
 */
export function GallerySection({
  title = 'We Expert In Various',
  subtitle = 'Different Game Genre',
}: GallerySectionProps) {
  // First row images (scroll left to right)
  const firstRowImages = [
    '/images/sections/gallery/gallery-1.svg',
    '/images/sections/gallery/gallery-2.svg',
    '/images/sections/gallery/gallery-3.svg',
    '/images/sections/gallery/gallery-4.svg',
    '/images/sections/gallery/gallery-5.svg',
    '/images/sections/gallery/gallery-8.svg',
  ];

  // Second row images (scroll right to left)
  const secondRowImages = [
    '/images/sections/gallery/gallery-9.svg',
    '/images/sections/gallery/gallery-10.svg',
    '/images/sections/gallery/gallery-11.svg',
    '/images/sections/gallery/gallery-12.svg',
    '/images/sections/gallery/gallery-1.svg',
    '/images/sections/gallery/gallery-2.svg',
  ];

  return (
    <section className="relative w-full overflow-hidden bg-dark py-16 md:py-24">
      {/* Background SVG */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <Image
          src="/images/sections/gallery/bg_gallery.svg"
          alt="Gallery background"
          fill
          className="object-cover"
          priority={false}
        />
      </div>

      {/* Content */}
      <div className="relative z-10">
        {/* Title */}
        <div className="content-container-full mb-12 md:mb-16">
          <h2 className="font-schibsted font-bold text-light text-[40px] md:text-[56px] lg:text-[64px] leading-[100%] tracking-[-0.03em] capitalize">
            {title}
          </h2>
          <h2 className="font-schibsted font-bold text-light text-[40px] md:text-[56px] lg:text-[64px] leading-[100%] tracking-[-0.03em] capitalize">
            {subtitle}
          </h2>
        </div>

        {/* First Row - Scroll Right (left to right) */}
        <div className="mb-6 md:mb-8">
          <InfiniteScroll
            images={firstRowImages}
            direction="right"
            speed={60}
            imageWidth={253}
            imageHeight={200}
            gap={0}
          />
        </div>

        {/* Second Row - Scroll Left (right to left) */}
        <div>
          <InfiniteScroll
            images={secondRowImages}
            direction="left"
            speed={60}
            imageWidth={253}
            imageHeight={200}
            gap={0}
          />
        </div>
      </div>
    </section>
  );
}
