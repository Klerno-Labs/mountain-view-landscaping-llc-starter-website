import { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { Button } from "@/components/ui/Button";
import { Check, DollarSign } from "lucide-react";
import Link from "next/link";
import CTA from "@/components/sections/CTA";

export const metadata: Metadata = {
  title: "Services",
  description: "View our full range of professional landscaping services in Austin, TX.",
};

const services = [
  {
    title: "Lawn Mowing",
    price: "$45-85/visit",
    description: "Precision mowing, edging, and trimming. We adjust cutting heights based on seasonal needs to ensure optimal grass health.",
    features: ["Weekly or Bi-weekly", "Edging & Trimming Included", "Blowing Clippings", "Seasonal Height Adjustment"],
    image: "service-1",
  },
  {
    title: "Landscape Design",
    price: "$500-2000",
    description: "From concept to completion, we create custom landscapes that reflect your style and thrive in the Texas climate.",
    features: ["3D Design Rendering", "Plant Selection Guide", "Hardscape Integration", "Project Management"],
    image: "service-2",
  },
  {
    title: "Tree Trimming",
    price: "$150-400",
    description: "Expert pruning and trimming for safety and aesthetics. We protect your property while maintaining the health of your trees.",
    features: ["Deadwood Removal", "Canopy Thinning", "Storm Damage Cleanup", "Safety Inspections"],
    image: "service-3",
  },
  {
    title: "Irrigation Installation",
    price: "$800-2500",
    description: "Smart irrigation systems that save water and keep your lawn green. Installation, repair, and winterization services.",
    features: ["Smart Controller Setup", "Leak Detection", "Zone Optimization", "Spring Start-up / Winterization"],
    image: "gallery-3",
  },
  {
    title: "Seasonal Cleanup",
    price: "$200-500",
    description: "Comprehensive cleanups for spring and fall. Leaf removal, bed renovation, and debris hauling.",
    features: ["Leaf Removal", "Bed Edging", "Mulch Installation", "Debris Hauling"],
    image: "gallery-1",
  },
  {
    title: "Hardscaping",
    price: "Custom Quote",
    description: "Patios, walkways, and retaining walls built to last. We use premium stone and pavers for a stunning finish.",
    features: ["Patios & Walkways", "Retaining Walls", "Fire Pits", "Outdoor Kitchens"],
    image: "gallery-2",
  },
];

export default function ServicesPage() {
  return (
    <>
      <Section className="pt-32 pb-16">
        <Container>
          <div className="max-w-3xl">
            <h1 className="font-heading font-bold text-4xl md:text-5xl text-primary mb-6">
              Our Services
            </h1>
            <p className="text-xl text-text-muted leading-relaxed">
              Whether you need routine maintenance or a complete outdoor transformation, 
              Mountain View Landscaping has the expertise to deliver exceptional results.
            </p>
          </div>
        </Container>
      </Section>

      <Section bgColor="bone">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-12 gap-y-16">
            {services.map((service, index) => (
              <div key={index} className="group">
                <div className="flex items-start justify-between mb-4">
                  <h3 className="font-heading font-bold text-2xl text-primary group-hover:text-accent transition-colors">
                    {service.title}
                  </h3>
                  <span className="flex items-center gap-1 text-accent font-bold bg-accent/10 px-3 py-1 rounded-full text-sm">
                    <DollarSign size={14} />
                    {service.price}
                  </span>
                </div>
                <p className="text-text-muted mb-6 leading-relaxed">
                  {service.description}
                </p>
                <ul className="space-y-2 mb-8">
                  {service.features.map((feature, i) => (
                    <li key={i} className="flex items-center gap-2 text-text-main text-sm">
                      <Check size={16} className="text-primary flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <Button variant="outline" className="w-full" asChild>
                  <Link href="/contact">Get a Quote for {service.title}</Link>
                </Button>
              </div>
            ))}
          </div>
        </Container>
      </Section>
      <CTA />
    </>
  );
}