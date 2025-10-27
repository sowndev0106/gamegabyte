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
    <section className="relative w-full overflow-hidden bg-dark section-padding">
      {/* Background SVG */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <Image
          src="/images/sections/gallery/bg_gallery.svg"
          alt="Gallery background"
          fill
          className="object-cover object-center"
          priority={false}
        />
      </div>

      {/* Content */}
      <div className="relative z-10">
        {/* Title */}
        <div className="content-container-full mb-12 md:mb-16 3xl:mb-24">
          <h2 className="text-heading-1 text-light capitalize">
            {title}
          </h2>
          <h2 className="text-heading-1 text-light capitalize">
            {subtitle}
          </h2>
        </div>

        {/* First Row - Scroll Right (left to right) */}
        <div className="mb-6 md:mb-8">
          <InfiniteScroll
            images={firstRowImages}
            direction="right"
            speed={100}
            imageWidth={300}
            imageHeight={250}
            gap={0}
            responsive={{
              xl: { width: 400, height: 333 },    // 1.33x for large screens (>= 1280px)
              '3xl': { width: 600, height: 500 }, // 2x for 4K displays (>= 2560px)
            }}
          />
        </div>

        {/* Second Row - Scroll Left (right to left) */}
        <div>
          <InfiniteScroll
            images={secondRowImages}
            direction="left"
            speed={100}
            imageWidth={300}
            imageHeight={250}
            gap={0}
            responsive={{
              xl: { width: 400, height: 333 },    // 1.33x for large screens (>= 1280px)
              '3xl': { width: 600, height: 500 }, // 2x for 4K displays (>= 2560px)
            }}
          />
        </div>
      </div>
    </section>
  );
}
