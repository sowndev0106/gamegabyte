import { Button } from "@/components/ui/button";
import { Hero, Description } from "@/components/typography";

export function HeroSection() {
  return (
    <section className="bg-primary py-20 px-4">
      <div className="container mx-auto text-center">
        <Hero className="text-dark mb-6">
          Welcome to GameGabite
        </Hero>
        <Description className="text-dark max-w-2xl mx-auto mb-8">
          A modern Next.js project with TailwindCSS, shadcn/ui, and custom typography using Schibsted Grotesk font.
        </Description>
        <div className="flex gap-4 justify-center flex-wrap">
          <Button size="lg" className="btn-secondary">
            Get Started
          </Button>
          <Button size="lg" variant="outline" className="border-dark text-dark hover:bg-dark hover:text-light">
            Learn More
          </Button>
        </div>
      </div>
    </section>
  );
}
