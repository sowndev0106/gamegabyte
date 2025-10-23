import { HeroSection } from "@/sections/shared/hero";
import { AboutUsSection } from "@/sections/shared/about-us";
import { OurServicesSection } from "@/sections/home/our-services";
import { HERO_BACKGROUNDS } from "@/lib/image-paths";

/**
 * Home Page
 * Assembles reusable sections to create the home page
 */
export default function HomePage() {
  // Mock data - replace with real data from CMS/API
  const services = [
    {
      id: "web-dev",
      title: "Web Development",
      description: "Custom web solutions tailored to your business needs",
      icon: "/images/icons/web-dev.svg",
      image: "/images/sections/our-services/web-development.jpg",
      link: "/services#web-dev",
    },
    {
      id: "mobile-dev",
      title: "Mobile Development",
      description: "Native and cross-platform mobile applications",
      icon: "/images/icons/mobile-dev.svg",
      image: "/images/sections/our-services/mobile-development.jpg",
      link: "/services#mobile-dev",
    },
    {
      id: "ui-ux",
      title: "UI/UX Design",
      description: "Beautiful and intuitive user interfaces",
      icon: "/images/icons/design.svg",
      image: "/images/sections/our-services/ui-ux-design.jpg",
      link: "/services#ui-ux",
    },
  ];

  const aboutStats = [
    { label: "Years Experience", value: "10+" },
    { label: "Projects Completed", value: "500+" },
    { label: "Happy Clients", value: "200+" },
  ];

  return (
    <main>
      {/* Hero Section */}
      <HeroSection
        title="Welcome to GameGabite"
        subtitle="Your Digital Partner"
        description="We create innovative digital solutions that transform businesses and delight users"
        backgroundImage={HERO_BACKGROUNDS.home}
        ctaButtons={[
          { text: "Get Started", href: "#contact", variant: "primary" },
          { text: "View Our Work", href: "#gallery", variant: "outline" },
        ]}
        variant="fullscreen"
        showScrollIndicator
      />

      {/* About Us Section */}
      <AboutUsSection
        title="About GameGabite"
        description="Building digital experiences that matter"
        content={`We are a team of passionate developers, designers, and strategists dedicated to creating exceptional digital experiences.

With over 10 years of experience, we've helped hundreds of businesses transform their digital presence and achieve their goals.`}
        stats={aboutStats}
        images={[
          {
            src: "/images/sections/about-us/team-photo.jpg",
            alt: "Our Team",
          },
        ]}
      />

      {/* Our Services Section */}
      <OurServicesSection
        title="What We Do"
        description="Comprehensive digital solutions to grow your business"
        services={services}
        variant="grid"
      />

      {/* Other sections can be added here:
      <OurProcessSection />
      <OurNumbersSection />
      <ShowreelSection />
      <WhyChooseUsSection />
      <TestimonialsSection />
      <GallerySection />
      <ContactSection />
      */}
    </main>
  );
}
