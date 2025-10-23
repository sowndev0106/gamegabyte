import { SectionImage } from "@/components/ui/optimized-image";
import { H2, H3, Description, Body } from "@/components/typography";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

/**
 * Example: Features Grid với images
 *
 * Đặt ảnh vào: public/images/sections/feature-1.jpg, feature-2.jpg, feature-3.jpg
 */
export function FeaturesGrid() {
  const features = [
    {
      title: "Feature One",
      description: "Mô tả feature đầu tiên của bạn",
      image: "/images/sections/feature-1.jpg",
    },
    {
      title: "Feature Two",
      description: "Mô tả feature thứ hai của bạn",
      image: "/images/sections/feature-2.jpg",
    },
    {
      title: "Feature Three",
      description: "Mô tả feature thứ ba của bạn",
      image: "/images/sections/feature-3.jpg",
    },
  ];

  return (
    <section className="py-20 px-4 bg-light">
      <div className="container mx-auto">
        <H2 className="text-center mb-4">Our Features</H2>
        <Description className="text-center max-w-2xl mx-auto mb-16">
          Showcase các tính năng chính của sản phẩm
        </Description>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card key={index} className="overflow-hidden hover:shadow-xl transition-shadow">
              <div className="relative h-64 w-full">
                <SectionImage
                  src={feature.image}
                  alt={feature.title}
                  width={800}
                  height={600}
                  className="w-full h-full object-cover"
                />
              </div>
              <CardHeader>
                <CardTitle>{feature.title}</CardTitle>
                <CardDescription>{feature.description}</CardDescription>
              </CardHeader>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}

/**
 * Example: Feature với image bên cạnh (alternating layout)
 */
export function AlternatingFeatures() {
  const features = [
    {
      title: "Advanced Analytics",
      description:
        "Track your progress with detailed analytics and insights. Make data-driven decisions to grow your business.",
      image: "/images/sections/analytics.jpg",
    },
    {
      title: "Team Collaboration",
      description:
        "Work together seamlessly with your team. Share projects, assign tasks, and communicate in real-time.",
      image: "/images/sections/collaboration.jpg",
    },
    {
      title: "Security First",
      description:
        "Your data is protected with enterprise-grade security. We take privacy and security seriously.",
      image: "/images/sections/security.jpg",
    },
  ];

  return (
    <section className="py-20 px-4">
      <div className="container mx-auto max-w-6xl">
        {features.map((feature, index) => (
          <div
            key={index}
            className={`flex flex-col ${
              index % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"
            } items-center gap-12 mb-24 last:mb-0`}
          >
            {/* Image */}
            <div className="flex-1">
              <SectionImage
                src={feature.image}
                alt={feature.title}
                width={600}
                height={400}
                className="w-full shadow-2xl"
              />
            </div>

            {/* Content */}
            <div className="flex-1">
              <H3 className="mb-4">{feature.title}</H3>
              <Body className="text-muted-foreground mb-6">{feature.description}</Body>
              <Button>Learn More</Button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

/**
 * Example: Product showcase với hover effect
 */
export function ProductShowcase() {
  const products = [
    {
      name: "Product One",
      category: "Category",
      price: "$99",
      image: "/images/sections/product-1.jpg",
    },
    {
      name: "Product Two",
      category: "Category",
      price: "$149",
      image: "/images/sections/product-2.jpg",
    },
    {
      name: "Product Three",
      category: "Category",
      price: "$199",
      image: "/images/sections/product-3.jpg",
    },
    {
      name: "Product Four",
      category: "Category",
      price: "$249",
      image: "/images/sections/product-4.jpg",
    },
  ];

  return (
    <section className="py-20 px-4 bg-muted/30">
      <div className="container mx-auto">
        <H2 className="text-center mb-4">Featured Products</H2>
        <Description className="text-center max-w-2xl mx-auto mb-16">
          Khám phá các sản phẩm nổi bật của chúng tôi
        </Description>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.map((product, index) => (
            <Card
              key={index}
              className="overflow-hidden group cursor-pointer hover:shadow-xl transition-all"
            >
              <div className="relative h-64 overflow-hidden">
                <SectionImage
                  src={product.image}
                  alt={product.name}
                  width={400}
                  height={400}
                  className="w-full h-full group-hover:scale-110 transition-transform duration-300"
                />
              </div>
              <CardContent className="p-4">
                <p className="text-small text-muted-foreground mb-1">{product.category}</p>
                <h4 className="text-h5 mb-2">{product.name}</h4>
                <p className="text-h4 text-primary">{product.price}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}

/**
 * Example: Gallery Section
 */
export function Gallery() {
  const images = Array.from({ length: 8 }, (_, i) => ({
    src: `/images/sections/gallery-${i + 1}.jpg`,
    alt: `Gallery image ${i + 1}`,
  }));

  return (
    <section className="py-20 px-4">
      <div className="container mx-auto">
        <H2 className="text-center mb-16">Gallery</H2>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {images.map((image, index) => (
            <div
              key={index}
              className="relative aspect-square overflow-hidden rounded-lg group cursor-pointer"
            >
              <SectionImage
                src={image.src}
                alt={image.alt}
                width={400}
                height={400}
                className="w-full h-full group-hover:scale-110 transition-transform duration-300"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
