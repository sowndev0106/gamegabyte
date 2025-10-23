import { BackgroundImage, HeroImage } from "@/components/ui/optimized-image";
import { H2, Description } from "@/components/typography";
import { Button } from "@/components/ui/button";

/**
 * Example: Section với background image
 *
 * Cách sử dụng:
 * 1. Đặt ảnh background vào: public/images/backgrounds/section-bg.jpg
 * 2. Import component này và sử dụng
 */
export function SectionWithBackground() {
  return (
    <section className="relative min-h-screen flex items-center justify-center">
      {/* Background Image */}
      <BackgroundImage
        src="/images/backgrounds/section-bg.jpg"
        alt="Section background"
        overlay
        overlayClassName="bg-dark/70"
      />

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center text-light">
        <H2 className="mb-6">Section với Background</H2>
        <Description className="max-w-2xl mx-auto mb-8">
          Đây là ví dụ về section với background image. Bạn có thể điều chỉnh overlay opacity và màu sắc.
        </Description>
        <Button size="lg" className="btn-primary">
          Call to Action
        </Button>
      </div>
    </section>
  );
}

/**
 * Example: Hero Section với full background
 */
export function HeroWithBackground() {
  return (
    <section className="relative h-screen flex items-center justify-center">
      {/* Hero Background Image - Priority loading */}
      <HeroImage
        src="/images/backgrounds/hero-bg.jpg"
        alt="Hero background"
        overlay
      />

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center text-light">
        <h1 className="text-hero mb-6">Your Hero Title</h1>
        <Description className="max-w-3xl mx-auto mb-8 text-xl">
          Welcome message hoặc tagline của bạn ở đây
        </Description>
        <div className="flex gap-4 justify-center flex-wrap">
          <Button size="lg" className="btn-primary">
            Get Started
          </Button>
          <Button size="lg" variant="outline" className="text-light border-light hover:bg-light hover:text-dark">
            Learn More
          </Button>
        </div>
      </div>
    </section>
  );
}

/**
 * Example: Section với CSS background (alternative)
 */
export function SectionWithCssBackground() {
  return (
    <section
      className="min-h-screen flex items-center justify-center bg-cover bg-center bg-no-repeat relative"
      style={{
        backgroundImage: "url('/images/backgrounds/section-bg.jpg')",
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-primary/80 to-accent/80" />

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center text-dark">
        <H2 className="mb-6">CSS Background Example</H2>
        <Description className="max-w-2xl mx-auto">
          Alternative method sử dụng CSS background
        </Description>
      </div>
    </section>
  );
}

/**
 * Example: Parallax Background Effect
 */
export function ParallaxSection() {
  return (
    <section className="relative h-screen overflow-hidden">
      <div
        className="absolute inset-0 bg-fixed bg-cover bg-center"
        style={{
          backgroundImage: "url('/images/backgrounds/parallax-bg.jpg')",
        }}
      />

      <div className="absolute inset-0 bg-black/50" />

      <div className="relative z-10 h-full flex items-center justify-center container mx-auto px-4 text-center text-light">
        <div>
          <H2 className="mb-6">Parallax Effect</H2>
          <Description className="max-w-2xl mx-auto">
            Sử dụng bg-fixed để tạo parallax effect
          </Description>
        </div>
      </div>
    </section>
  );
}
