import Image from "next/image";

interface HeroSectionProps {
  title?: string;
  titleHighlight?: string;
  subtitle?: string;
  primaryButtonText?: string;
  primaryButtonHref?: string;
  secondaryButtonText?: string;
  secondaryButtonHref?: string;
  backgroundImage?: string;
}

/**
 * Hero Section Component
 * Matches exact design specifications
 */
export function HeroSection({
  title = "WE ARE THE",
  titleHighlight = "GAME",
  subtitle = "From immersive websites to powerful digital strategies — we help your game win the market.",
  primaryButtonText = "CASE STUDY",
  primaryButtonHref = "/case-studies",
  secondaryButtonText = "CONNECT WITH US",
  secondaryButtonHref = "/contact",
  backgroundImage = "/images/sections/hero/bg_hero.svg",
}: HeroSectionProps) {
  return (
    <section className="relative w-full overflow-hidden bg-dark h-[calc(100vh-70px)] max-h-[1080px]">
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src={backgroundImage}
          alt="Hero background"
          fill
          className="object-cover"
          priority
          quality={100}
        />
      </div>

      {/* Content */}
      <div className="relative z-10 flex h-full items-center">
        <div className="container mx-auto px-8 py-20">
          <div className="max-w-[900px]">
            {/* Title - 80px, ExtraBold (800), -3% letter spacing, 100% line height */}
            <h1 className="font-schibsted uppercase mb-6">
              <span className="block text-light font-extrabold text-[80px] leading-[100%] tracking-[-0.03em] mb-0">
                {title} <span className="text-primary">{titleHighlight}</span>
              </span>
              <span className="block text-light font-extrabold text-[80px] leading-[100%] tracking-[-0.03em]">
                MARKETING STUDIO
              </span>
            </h1>

            {/* Subtitle - 32px, Medium (500), -5% letter spacing, 109% line height */}
            <p className="font-schibsted text-light font-medium text-[32px] leading-[109%] tracking-[-0.05em] mb-10 max-w-[600px]">
              {subtitle}
            </p>

            {/* Buttons */}
            <div className="flex flex-wrap gap-4 mb-16">
              <a
                href={primaryButtonHref}
                className="inline-flex items-center justify-center gap-2 bg-transparent border-2 border-light text-light hover:bg-light hover:text-dark font-schibsted font-bold uppercase tracking-wide transition-all duration-300 px-6 py-3 text-sm group"
              >
                <span>{primaryButtonText}</span>
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="transition-transform group-hover:translate-x-1"
                >
                  <path
                    d="M3 8H13M13 8L9 4M13 8L9 12"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </a>

              <a
                href={secondaryButtonHref}
                className="inline-flex items-center justify-center gap-2 bg-primary text-dark hover:bg-primary/90 font-schibsted font-bold uppercase tracking-wide transition-all duration-300 px-6 py-3 text-sm group"
              >
                <span>{secondaryButtonText}</span>
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                >
                  <path
                    d="M4 12L12 4M12 4H6M12 4V10"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Client Logos at Bottom */}
      <div className="absolute bottom-0 left-0 right-0 z-10 py-6 bg-gradient-to-t from-dark/50 to-transparent">
        <div className="container mx-auto px-8">
          <div className="flex items-center justify-between gap-6 flex-wrap opacity-50">
            {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((num) => (
              <div key={num} className="relative h-6 w-auto">
                <Image
                  src={`/images/logos/clients/logo-client-${num}.svg`}
                  alt={`Client ${num}`}
                  width={100}
                  height={24}
                  className="object-contain h-6 w-auto brightness-200 grayscale"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
