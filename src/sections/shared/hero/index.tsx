import { HeroImage } from "@/components/ui/optimized-image";
import { Hero, Description } from "@/components/typography";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/common/section-wrapper";
import type { HeroSectionProps } from "@/types/sections";
import { cn } from "@/lib/utils";

/**
 * Reusable Hero Section
 * Can be used across all pages with different content
 */
export function HeroSection({
  title = "Welcome",
  subtitle,
  description,
  backgroundImage,
  ctaButtons = [],
  variant = "standard",
  showScrollIndicator = false,
  overlay = true,
  overlayOpacity = 50,
  className,
}: HeroSectionProps) {
  const heights = {
    fullscreen: "h-screen",
    standard: "min-h-[600px] lg:min-h-[700px]",
    compact: "min-h-[400px] lg:min-h-[500px]",
  };

  return (
    <section
      className={cn(
        "relative flex items-center justify-center",
        heights[variant],
        className
      )}
    >
      {/* Background Image */}
      <HeroImage
        src={backgroundImage}
        alt={title}
        overlay={overlay}
        overlayClassName={`bg-dark/${overlayOpacity}`}
      />

      {/* Content */}
      <Container size="lg" className="relative z-10 text-center text-light">
        {subtitle && (
          <p className="text-description text-primary mb-4 uppercase tracking-wider">
            {subtitle}
          </p>
        )}

        <Hero className="text-light mb-6">{title}</Hero>

        {description && (
          <Description className="text-light/90 max-w-3xl mx-auto mb-8">
            {description}
          </Description>
        )}

        {ctaButtons.length > 0 && (
          <div className="flex flex-wrap gap-4 justify-center">
            {ctaButtons.map((button, index) => (
              <Button
                key={index}
                size="lg"
                variant={button.variant === "secondary" ? "secondary" : "default"}
                className={cn(
                  button.variant === "outline" &&
                    "border-light text-light hover:bg-light hover:text-dark"
                )}
                asChild
              >
                <a
                  href={button.href}
                  target={button.external ? "_blank" : undefined}
                  rel={button.external ? "noopener noreferrer" : undefined}
                >
                  {button.text}
                </a>
              </Button>
            ))}
          </div>
        )}

        {showScrollIndicator && (
          <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
            <svg
              className="w-6 h-6 text-light"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
            </svg>
          </div>
        )}
      </Container>
    </section>
  );
}
