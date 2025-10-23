import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Hero, H1, H2, H3, H4, H5, Description, Body } from "@/components/typography";

export default function ExamplesPage() {
  return (
    <main className="min-h-screen bg-background">
      {/* Hero Section Example */}
      <section className="bg-primary py-16 px-4">
        <div className="container mx-auto text-center">
          <Hero className="text-dark mb-4">Component Examples</Hero>
          <Description className="text-dark max-w-2xl mx-auto">
            Explore các component và typography đã được cấu hình sẵn
          </Description>
        </div>
      </section>

      {/* Typography Examples */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-6xl">
          <H2 className="text-center mb-12">Typography Components</H2>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <Card>
              <CardHeader>
                <CardTitle>Headers</CardTitle>
                <CardDescription>Các heading components</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <Body className="text-muted-foreground mb-2">H1</Body>
                  <H1>Header Level 1</H1>
                </div>
                <div>
                  <Body className="text-muted-foreground mb-2">H2</Body>
                  <H2>Header Level 2</H2>
                </div>
                <div>
                  <Body className="text-muted-foreground mb-2">H3</Body>
                  <H3>Header Level 3</H3>
                </div>
                <div>
                  <Body className="text-muted-foreground mb-2">H4</Body>
                  <H4>Header Level 4</H4>
                </div>
                <div>
                  <Body className="text-muted-foreground mb-2">H5</Body>
                  <H5>Header Level 5</H5>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Body Text</CardTitle>
                <CardDescription>Text components cho nội dung</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <Body className="text-muted-foreground mb-2">Description</Body>
                  <Description>
                    This is description text with optimal line height and letter spacing for readability.
                  </Description>
                </div>
                <div>
                  <Body className="text-muted-foreground mb-2">Body</Body>
                  <Body>
                    This is body text perfect for longer paragraphs and content sections with comfortable reading experience.
                  </Body>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Buttons Examples */}
      <section className="py-16 px-4 bg-muted/30">
        <div className="container mx-auto max-w-6xl">
          <H2 className="text-center mb-12">Button Variants</H2>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <Card>
              <CardHeader>
                <CardTitle>Button Variants</CardTitle>
                <CardDescription>Các style button khác nhau</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex flex-wrap gap-3">
                  <Button>Default</Button>
                  <Button variant="secondary">Secondary</Button>
                  <Button variant="outline">Outline</Button>
                  <Button variant="ghost">Ghost</Button>
                  <Button variant="link">Link</Button>
                  <Button variant="destructive">Destructive</Button>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Button Sizes</CardTitle>
                <CardDescription>Kích thước button</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex flex-wrap items-center gap-3">
                  <Button size="sm">Small</Button>
                  <Button size="default">Default</Button>
                  <Button size="lg">Large</Button>
                  <Button size="icon">🚀</Button>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Custom Button Styles</CardTitle>
                <CardDescription>Custom utility classes</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex flex-wrap gap-3">
                  <button className="btn-primary">Primary Style</button>
                  <button className="btn-secondary">Secondary Style</button>
                  <button className="btn-outline">Outline Style</button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Cards & Inputs */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-6xl">
          <H2 className="text-center mb-12">Forms & Cards</H2>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            <Card>
              <CardHeader>
                <CardTitle>Sign Up</CardTitle>
                <CardDescription>Create your account</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <Input type="text" placeholder="Username" />
                <Input type="email" placeholder="Email" />
                <Input type="password" placeholder="Password" />
              </CardContent>
              <CardFooter>
                <Button className="w-full">Create Account</Button>
              </CardFooter>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Product Card</CardTitle>
                <CardDescription>Featured item</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="aspect-video bg-gradient-to-br from-primary to-accent rounded-lg mb-4" />
                <Body className="mb-4">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                </Body>
                <div className="flex gap-2">
                  <Badge>New</Badge>
                  <Badge variant="secondary">Featured</Badge>
                </div>
              </CardContent>
              <CardFooter className="gap-2">
                <Button className="flex-1">Buy Now</Button>
                <Button variant="outline" className="flex-1">Details</Button>
              </CardFooter>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Contact Form</CardTitle>
                <CardDescription>Get in touch</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <Input type="text" placeholder="Name" />
                <Input type="email" placeholder="Email" />
                <Input type="text" placeholder="Subject" />
              </CardContent>
              <CardFooter>
                <Button className="w-full" variant="secondary">Send Message</Button>
              </CardFooter>
            </Card>
          </div>
        </div>
      </section>

      {/* Badges */}
      <section className="py-16 px-4 bg-muted/30">
        <div className="container mx-auto max-w-6xl">
          <H2 className="text-center mb-12">Badges</H2>

          <Card className="max-w-2xl mx-auto">
            <CardHeader>
              <CardTitle>Badge Variants</CardTitle>
              <CardDescription>Để highlight content hoặc status</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex flex-wrap gap-3">
                <Badge>Default</Badge>
                <Badge variant="secondary">Secondary</Badge>
                <Badge variant="outline">Outline</Badge>
                <Badge variant="destructive">Destructive</Badge>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Color Palette */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-6xl">
          <H2 className="text-center mb-12">Color Palette</H2>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <Card>
              <div className="bg-primary h-32 rounded-t-lg" />
              <CardHeader>
                <CardTitle className="text-h5">Primary</CardTitle>
                <CardDescription>#B6E802</CardDescription>
              </CardHeader>
            </Card>

            <Card>
              <div className="bg-accent h-32 rounded-t-lg" />
              <CardHeader>
                <CardTitle className="text-h5">Accent</CardTitle>
                <CardDescription>#601FEB</CardDescription>
              </CardHeader>
            </Card>

            <Card>
              <div className="bg-dark h-32 rounded-t-lg" />
              <CardHeader>
                <CardTitle className="text-h5">Dark</CardTitle>
                <CardDescription>#202124</CardDescription>
              </CardHeader>
            </Card>

            <Card>
              <div className="bg-light border h-32 rounded-t-lg" />
              <CardHeader>
                <CardTitle className="text-h5">Light</CardTitle>
                <CardDescription>#FFFFFF</CardDescription>
              </CardHeader>
            </Card>
          </div>
        </div>
      </section>

      {/* Gradients */}
      <section className="py-16 px-4 bg-dark">
        <div className="container mx-auto max-w-4xl text-center">
          <H2 className="text-light mb-8">Gradient Effects</H2>

          <div className="space-y-6">
            <div className="bg-primary-gradient p-8 rounded-lg">
              <H3 className="text-dark">Background Gradient</H3>
            </div>

            <div className="bg-dark p-8 rounded-lg">
              <H3 className="text-primary-gradient">Text Gradient Effect</H3>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
