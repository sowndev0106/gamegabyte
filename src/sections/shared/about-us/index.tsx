import { SectionWrapper, Container } from "@/components/common/section-wrapper";
import { H2, Description, Body } from "@/components/typography";
import { SectionImage } from "@/components/ui/optimized-image";
import type { AboutUsSectionProps } from "@/types/sections";
import { cn } from "@/lib/utils";

/**
 * About Us Section
 * Reusable across Home, About, and other pages
 */
export function AboutUsSection({
  title = "About Us",
  description,
  content,
  images = [],
  stats = [],
  variant = "default",
  className,
}: AboutUsSectionProps) {
  const isFeatured = variant === "featured";

  return (
    <SectionWrapper
      id="about-us"
      className={cn(
        "py-20",
        isFeatured ? "bg-muted/30" : "bg-light",
        className
      )}
    >
      <Container size="xl">
        {/* Header */}
        <div className="text-center mb-12">
          <H2 className="mb-4">{title}</H2>
          {description && (
            <Description className="max-w-3xl mx-auto">{description}</Description>
          )}
        </div>

        {/* Content Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div>
            <Body className="text-muted-foreground mb-8 whitespace-pre-line">
              {content}
            </Body>

            {/* Statistics */}
            {stats.length > 0 && (
              <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
                {stats.map((stat, index) => (
                  <div key={index} className="text-center lg:text-left">
                    <div className="text-h2 text-primary font-bold mb-2">
                      {stat.value}
                    </div>
                    <Body className="text-muted-foreground">{stat.label}</Body>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Images */}
          {images.length > 0 && (
            <div
              className={cn(
                "grid gap-4",
                images.length === 1 && "grid-cols-1",
                images.length === 2 && "grid-cols-2",
                images.length >= 3 && "grid-cols-2"
              )}
            >
              {images.map((image, index) => (
                <div
                  key={index}
                  className={cn(
                    "relative overflow-hidden rounded-lg",
                    index === 0 && images.length >= 3 && "col-span-2"
                  )}
                >
                  <SectionImage
                    src={image.src}
                    alt={image.alt}
                    width={image.width || 600}
                    height={image.height || 400}
                    className="w-full hover:scale-105 transition-transform duration-300"
                  />
                </div>
              ))}
            </div>
          )}
        </div>
      </Container>
    </SectionWrapper>
  );
}
