import { SectionWrapper, Container } from "@/components/common/section-wrapper";
import { H2, H3, Description, Body } from "@/components/typography";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { SectionImage, Icon } from "@/components/ui/optimized-image";
import { Button } from "@/components/ui/button";
import type { OurServicesSectionProps } from "@/types/sections";
import { cn } from "@/lib/utils";

/**
 * Our Services Section
 * Displays services in grid, carousel, or list layout
 */
export function OurServicesSection({
  title = "Our Services",
  description,
  services,
  variant = "grid",
  className,
}: OurServicesSectionProps) {
  return (
    <SectionWrapper
      id="our-services"
      className={cn("py-20 bg-light", className)}
    >
      <Container size="xl">
        {/* Header */}
        <div className="text-center mb-16">
          <H2 className="mb-4">{title}</H2>
          {description && (
            <Description className="max-w-3xl mx-auto">{description}</Description>
          )}
        </div>

        {/* Services Grid */}
        {variant === "grid" && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service) => (
              <Card
                key={service.id}
                className="group overflow-hidden hover:shadow-xl transition-all cursor-pointer"
              >
                {/* Service Image */}
                <div className="relative h-64 overflow-hidden">
                  <SectionImage
                    src={service.image}
                    alt={service.title}
                    width={400}
                    height={300}
                    className="w-full h-full group-hover:scale-110 transition-transform duration-300"
                  />

                  {/* Icon Overlay */}
                  <div className="absolute top-4 right-4 bg-primary p-3 rounded-full">
                    <Icon src={service.icon} alt={service.title} size={24} />
                  </div>
                </div>

                <CardHeader>
                  <CardTitle>{service.title}</CardTitle>
                  <CardDescription>{service.description}</CardDescription>
                </CardHeader>

                {service.link && (
                  <CardContent className="pt-0">
                    <Button variant="link" className="p-0" asChild>
                      <a href={service.link}>Learn More →</a>
                    </Button>
                  </CardContent>
                )}
              </Card>
            ))}
          </div>
        )}

        {/* Services List */}
        {variant === "list" && (
          <div className="space-y-8">
            {services.map((service, index) => (
              <div
                key={service.id}
                className={cn(
                  "flex flex-col gap-8 items-center",
                  index % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"
                )}
              >
                {/* Image */}
                <div className="flex-1">
                  <SectionImage
                    src={service.image}
                    alt={service.title}
                    width={600}
                    height={400}
                    className="rounded-lg shadow-lg"
                  />
                </div>

                {/* Content */}
                <div className="flex-1">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="bg-primary p-3 rounded-full">
                      <Icon src={service.icon} alt={service.title} size={32} />
                    </div>
                    <H3>{service.title}</H3>
                  </div>
                  <Body className="text-muted-foreground mb-6">
                    {service.description}
                  </Body>
                  {service.link && (
                    <Button asChild>
                      <a href={service.link}>Learn More</a>
                    </Button>
                  )}
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Services Carousel - Can be implemented with a carousel library */}
        {variant === "carousel" && (
          <div className="text-center py-12">
            <Body className="text-muted-foreground">
              Carousel variant - implement with swiper or embla-carousel
            </Body>
          </div>
        )}
      </Container>
    </SectionWrapper>
  );
}
