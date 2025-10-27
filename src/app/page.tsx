import { ShowreelSection } from "@/sections/home/showreel";
import { AboutUsSection } from "@/sections/home/about-us";
import { OurNumbersSection } from "@/sections/home/our-numbers";
import { OurServicesSection } from "@/sections/home/our-services";
import { GallerySection } from "@/sections/home/gallery";
import { HeroSection } from "@/sections/home/hero";
import { WhyChooseUsSection } from "@/sections/home/why-choose-us";

export default function HomePage() {
  return (
    <main>
      <HeroSection />
      <ShowreelSection />
      <AboutUsSection />
      <OurNumbersSection />
      <GallerySection />
      <OurServicesSection />
      <WhyChooseUsSection />
    </main>
  );
}
