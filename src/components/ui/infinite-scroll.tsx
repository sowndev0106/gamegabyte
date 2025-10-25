'use client';

import { useState, useEffect } from 'react';
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
  responsive?: {
    xl?: { width: number; height: number };   // >= 1280px
    '2xl'?: { width: number; height: number }; // >= 1536px
    '3xl'?: { width: number; height: number }; // >= 2560px (4K)
  };
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
  responsive,
}: InfiniteScrollProps) {
  // Duplicate images multiple times for truly seamless scroll
  const duplicatedImages = [...images, ...images, ...images];

  // Generate unique animation name based on direction
  const animationName = direction === 'left' ? 'infinite-scroll-left' : 'infinite-scroll-right';

  // Calculate current responsive size based on window width
  const [currentSize, setCurrentSize] = useState({ width: imageWidth, height: imageHeight });

  useEffect(() => {
    if (!responsive) return;

    const updateSize = () => {
      const width = window.innerWidth;

      if (width >= 2560 && responsive['3xl']) {
        setCurrentSize(responsive['3xl']);
      } else if (width >= 1536 && responsive['2xl']) {
        setCurrentSize(responsive['2xl']);
      } else if (width >= 1280 && responsive.xl) {
        setCurrentSize(responsive.xl);
      } else {
        setCurrentSize({ width: imageWidth, height: imageHeight });
      }
    };

    updateSize(); // Initial check
    window.addEventListener('resize', updateSize);
    return () => window.removeEventListener('resize', updateSize);
  }, [responsive, imageWidth, imageHeight]);

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
              width={currentSize.width}
              height={currentSize.height}
              className={`object-contain ${imageClassName}`}
              style={{
                height: `${currentSize.height}px`,
                width: 'auto',
              }}
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
