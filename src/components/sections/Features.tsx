import { Leaf, Shovel, Sprout } from "lucide-react";
import Container from "@/components/ui/Container";

const features = [
  {
    icon: Shovel,
    title: "Expert Craftsmanship",
    description:
      "Our team brings years of experience to every project, ensuring precision and quality in every stone laid and every plant placed.",
  },
  {
    icon: Leaf,
    title: "Organic & Sustainable",
    description:
      "We prioritize eco-friendly practices and native plants that thrive in the Texas climate, reducing water usage and maintenance needs.",
  },
  {
    icon: Sprout,
    title: "Growth Guaranteed",
    description:
      "We stand by our work with a comprehensive satisfaction guarantee. If you're not happy, we'll make it right.",
  },
];

export function Features() {
  return (
    <section className="py-16 md:py-24 bg-bone">
      <Container>
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4 font-accent">
            Why Choose Mountain View?
          </h2>
          <p className="text-muted text-lg">
            We combine artistry with agriculture to create outdoor spaces that
            are as beautiful as they are functional.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-all hover:-translate-y-1 duration-300"
            >
              <div className="w-14 h-14 bg-primary/10 rounded-lg flex items-center justify-center mb-6 text-primary">
                <feature.icon className="w-7 h-7" />
              </div>
              <h3 className="text-xl font-bold text-primary mb-3">
                {feature.title}
              </h3>
              <p className="text-muted leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
export default Features;