import Image, { ImageProps } from "next/image";
import { cn } from "@/lib/utils";

interface OptimizedImageProps extends Omit<ImageProps, "src"> {
  src: string;
  alt: string;
  containerClassName?: string;
}

/**
 * Optimized Image Component with common presets
 */
export function OptimizedImage({
  src,
  alt,
  className,
  containerClassName,
  ...props
}: OptimizedImageProps) {
  return (
    <div className={cn("relative overflow-hidden", containerClassName)}>
      <Image
        src={src}
        alt={alt}
        className={cn("object-cover", className)}
        {...props}
      />
    </div>
  );
}

/**
 * Background Image Component
 * Fills parent container
 */
export function BackgroundImage({
  src,
  alt,
  className,
  overlay = false,
  overlayClassName,
  priority = false,
  quality = 90,
}: {
  src: string;
  alt: string;
  className?: string;
  overlay?: boolean;
  overlayClassName?: string;
  priority?: boolean;
  quality?: number;
}) {
  return (
    <>
      <Image
        src={src}
        alt={alt}
        fill
        className={cn("object-cover -z-10", className)}
        priority={priority}
        quality={quality}
      />
      {overlay && (
        <div
          className={cn(
            "absolute inset-0 bg-black/50 -z-5",
            overlayClassName
          )}
        />
      )}
    </>
  );
}

/**
 * Hero Image Component
 * Optimized for hero sections
 */
export function HeroImage({
  src,
  alt,
  className,
  overlay = true,
  overlayClassName,
}: {
  src: string;
  alt: string;
  className?: string;
  overlay?: boolean;
  overlayClassName?: string;
}) {
  return (
    <BackgroundImage
      src={src}
      alt={alt}
      className={className}
      overlay={overlay}
      overlayClassName={overlayClassName}
      priority
      quality={90}
    />
  );
}

/**
 * Section Image Component
 * For content sections
 */
export function SectionImage({
  src,
  alt,
  width = 800,
  height = 600,
  className,
}: {
  src: string;
  alt: string;
  width?: number;
  height?: number;
  className?: string;
}) {
  return (
    <Image
      src={src}
      alt={alt}
      width={width}
      height={height}
      className={cn("rounded-lg", className)}
      loading="lazy"
    />
  );
}

/**
 * Logo Component
 */
export function Logo({
  src = "/images/logos/logo.svg",
  alt = "Logo",
  width = 120,
  height = 40,
  className,
}: {
  src?: string;
  alt?: string;
  width?: number;
  height?: number;
  className?: string;
}) {
  return (
    <Image
      src={src}
      alt={alt}
      width={width}
      height={height}
      className={className}
      priority
    />
  );
}

/**
 * Icon Component
 */
export function Icon({
  src,
  alt,
  size = 24,
  className,
}: {
  src: string;
  alt: string;
  size?: number;
  className?: string;
}) {
  return (
    <Image
      src={src}
      alt={alt}
      width={size}
      height={size}
      className={className}
    />
  );
}

/**
 * Avatar Component
 */
export function Avatar({
  src,
  alt,
  size = 40,
  className,
}: {
  src: string;
  alt: string;
  size?: number;
  className?: string;
}) {
  return (
    <Image
      src={src}
      alt={alt}
      width={size}
      height={size}
      className={cn("rounded-full", className)}
    />
  );
}
