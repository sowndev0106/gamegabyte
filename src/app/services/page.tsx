import { HeroSection } from "@/sections/shared/hero";
import { OurServicesSection } from "@/sections/home/our-services";
import { HERO_BACKGROUNDS } from "@/lib/image-paths";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Our Services | GameGabite",
  description: "Discover our comprehensive digital solutions and services",
};

/**
 * Services Page
 * Reuses sections from home and adds service-specific content
 */
export default function ServicesPage() {
  // Extended services list
  const services = [
    {
      id: "web-dev",
      title: "Web Development",
      description:
        "Custom web solutions with modern technologies. From simple landing pages to complex web applications.",
      icon: "/images/icons/web-dev.svg",
      image: "/images/sections/our-services/web-development.jpg",
    },
    {
      id: "mobile-dev",
      title: "Mobile Development",
      description:
        "Native iOS/Android apps and cross-platform solutions using React Native and Flutter.",
      icon: "/images/icons/mobile-dev.svg",
      image: "/images/sections/our-services/mobile-development.jpg",
    },
    {
      id: "ui-ux",
      title: "UI/UX Design",
      description:
        "User-centered design that delights users and drives conversions. Wireframes to high-fidelity prototypes.",
      icon: "/images/icons/design.svg",
      image: "/images/sections/our-services/ui-ux-design.jpg",
    },
    {
      id: "branding",
      title: "Branding",
      description:
        "Create a memorable brand identity that resonates with your target audience.",
      icon: "/images/icons/branding.svg",
      image: "/images/sections/our-services/branding.jpg",
    },
    {
      id: "seo",
      title: "SEO & Marketing",
      description:
        "Increase your online visibility and drive organic traffic with our SEO services.",
      icon: "/images/icons/seo.svg",
      image: "/images/sections/our-services/seo.jpg",
    },
    {
      id: "consulting",
      title: "Digital Consulting",
      description:
        "Strategic guidance to help you make the right digital decisions for your business.",
      icon: "/images/icons/consulting.svg",
      image: "/images/sections/our-services/consulting.jpg",
    },
  ];

  return (
    <main>
      {/* Hero Section - reused with different content */}
      <HeroSection
        title="Our Services"
        subtitle="What We Offer"
        description="Comprehensive digital solutions to transform your business"
        backgroundImage={HERO_BACKGROUNDS.services}
        ctaButtons={[
          { text: "Get a Quote", href: "#contact", variant: "primary" },
        ]}
        variant="standard"
      />

      {/* Services Section - reused with extended data */}
      <OurServicesSection
        title="Comprehensive Digital Solutions"
        description="We offer end-to-end digital services to help your business succeed online"
        services={services}
        variant="grid"
      />

      {/* Can add more sections:
      <ServiceProcessSection />
      <PricingSection />
      <FAQSection />
      <TestimonialsSection />
      <ContactSection />
      */}
    </main>
  );
}
