import { Metadata } from "next";
import Container from "@/components/ui/Container";
import Section from "@/components/ui/Section";
import Image from "next/image";
import { images } from "@/config/images";
import { DollarSign, Clock } from "lucide-react";
import CTA from "@/components/sections/CTA";

export const metadata: Metadata = {
  title: "Services",
  description: "Our comprehensive landscaping services: Lawn Mowing, Landscape Design, Tree Trimming, Irrigation, and Seasonal Cleanup in Austin, TX.",
};

const services = [
  {
    title: "Lawn Mowing & Maintenance",
    price: "$45-85/visit",
    description:
      "Precision mowing, edging, and blowing to keep your lawn looking manicured. We tailor our mowing height to the season for optimal turf health.",
    imageKey: "service-1",
  },
  {
    title: "Landscape Design",
    price: "$500-2000",
    description:
      "Custom 2D and 3D designs for flower beds, shrubs, and trees. We focus on native Texas plants that are drought-resistant and vibrant.",
    imageKey: "gallery-3",
  },
  {
    title: "Tree Trimming & Pruning",
    price: "$150-400",
    description:
      "Expert pruning for health, aesthetics, and safety. We remove hazardous limbs and shape trees to complement your home's architecture.",
    imageKey: "service-3",
  },
  {
    title: "Irrigation Installation",
    price: "$800-2500",
    description:
      "Smart irrigation systems that save water and money. We handle everything from installation to seasonal audits and repairs.",
    imageKey: "service-3",
  },
  {
    title: "Seasonal Cleanup",
    price: "$200-500",
    description:
      "Spring and fall cleanups to prepare your yard for the changing seasons. Leaf removal, bed refreshing, and debris hauling.",
    imageKey: "gallery-2",
  },
  {
    title: "Hardscaping & Patios",
    price: "Custom Quote",
    description:
      "Stone patios, walkways, and retaining walls that define your outdoor space. Built to last with premium materials.",
    imageKey: "service-2",
  },
];

export default function ServicesPage() {
  return (
    <>
      <Section bgColor="bone">
        <Container>
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h1 className="text-4xl md:text-5xl font-bold text-primary mb-6 font-accent">
              Our Services
            </h1>
            <p className="text-lg text-muted">
              From routine maintenance to complete transformations, Mountain View
              Landscaping offers a full suite of services to keep your property
              looking its best year-round.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="group bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 flex flex-col"
              >
                <div className="h-48 overflow-hidden relative">
                  <Image
                    src={images[service.imageKey as keyof typeof images].src}
                    alt={service.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-700"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                </div>
                <div className="p-6 flex-1 flex flex-col">
                  <h3 className="text-xl font-bold text-primary mb-2 font-heading">
                    {service.title}
                  </h3>
                  <div className="flex items-center gap-2 text-accent font-bold mb-4">
                    <DollarSign className="w-4 h-4" />
                    <span>{service.price}</span>
                  </div>
                  <p className="text-muted mb-6 flex-1">
                    {service.description}
                  </p>
                  <div className="pt-4 border-t border-gray-100 flex items-center text-sm text-gray-500">
                    <Clock className="w-4 h-4 mr-2" />
                    Available Mon-Sat
                  </div>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </Section>
      <CTA />
    </>
  );
}