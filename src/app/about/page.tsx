import { HeroSection } from "@/sections/shared/hero";
import { AboutUsSection } from "@/sections/shared/about-us";
import { HERO_BACKGROUNDS } from "@/lib/image-paths";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Us | GameGabite",
  description: "Learn more about GameGabite and our journey",
};

/**
 * About Page
 * Reuses shared sections with more detailed content
 */
export default function AboutPage() {
  const detailedStats = [
    { label: "Founded", value: "2014" },
    { label: "Team Members", value: "50+" },
    { label: "Countries Served", value: "25+" },
    { label: "Projects Delivered", value: "500+" },
    { label: "Client Satisfaction", value: "98%" },
    { label: "Awards Won", value: "15+" },
  ];

  const aboutImages = [
    {
      src: "/images/sections/about-us/team-photo.jpg",
      alt: "Our Team",
      width: 800,
      height: 600,
    },
    {
      src: "/images/sections/about-us/office-1.jpg",
      alt: "Our Office",
      width: 400,
      height: 400,
    },
    {
      src: "/images/sections/about-us/office-2.jpg",
      alt: "Team at Work",
      width: 400,
      height: 400,
    },
  ];

  return (
    <main>
      {/* Hero Section */}
      <HeroSection
        title="About GameGabite"
        subtitle="Our Story"
        description="Transforming ideas into digital reality since 2014"
        backgroundImage={HERO_BACKGROUNDS.about}
        variant="standard"
      />

      {/* About Us Section - detailed variant */}
      <AboutUsSection
        title="Who We Are"
        description="Passionate team of digital innovators"
        content={`GameGabite was founded in 2014 with a simple mission: to help businesses succeed in the digital world. What started as a small team of developers has grown into a full-service digital agency with over 50 talented professionals.

We specialize in creating custom digital solutions that not only look great but also deliver real results. From web and mobile development to UI/UX design and digital strategy, we offer comprehensive services to help businesses of all sizes achieve their goals.

Our approach is collaborative, transparent, and results-driven. We believe in building long-term partnerships with our clients, understanding their unique challenges, and creating solutions that drive growth and innovation.`}
        stats={detailedStats}
        images={aboutImages}
        variant="featured"
      />

      {/* Additional sections can be added:
      <TeamSection />
      <HistorySection />
      <ValuesSection />
      <AwardsSection />
      <TestimonialsSection />
      <ContactSection />
      */}
    </main>
  );
}
