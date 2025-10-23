'use client';

import Image from 'next/image';

export interface InfiniteScrollProps {
  images: string[];
  direction?: 'left' | 'right';
  speed?: number; // duration in seconds
  imageWidth?: number;
  imageHeight?: number;
  gap?: number; // gap between images in pixels
  className?: string;
  imageClassName?: string;
}

export default function InfiniteScroll({
  images,
  direction = 'left',
  speed = 30,
  imageWidth = 100,
  imageHeight = 40,
  gap = 16,
  className = '',
  imageClassName = '',
}: InfiniteScrollProps) {
  // Duplicate images multiple times for truly seamless scroll
  const duplicatedImages = [...images, ...images, ...images];

  // Generate unique animation name based on direction
  const animationName = direction === 'left' ? 'infinite-scroll-left' : 'infinite-scroll-right';

  return (
    <div className={`relative overflow-hidden ${className}`}>
      <div
        className="flex"
        style={{
          animation: `${animationName} ${speed}s linear infinite`,
          width: 'max-content',
        }}
      >
        {duplicatedImages.map((src, index) => (
          <div
            key={index}
            className="flex-shrink-0"
            style={{ marginRight: `${gap}px` }}
          >
            <Image
              src={src}
              alt={`Image ${index + 1}`}
              width={imageWidth}
              height={imageHeight}
              className={`object-contain ${imageClassName}`}
              style={{ height: `${imageHeight}px`, width: 'auto' }}
            />
          </div>
        ))}
      </div>

      <style jsx>{`
        @keyframes infinite-scroll-left {
          from {
            transform: translateX(0);
          }
          to {
            transform: translateX(calc(-100% / 3));
          }
        }

        @keyframes infinite-scroll-right {
          from {
            transform: translateX(calc(-100% / 3));
          }
          to {
            transform: translateX(0);
          }
        }
      `}</style>
    </div>
  );
}
