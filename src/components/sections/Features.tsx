"use client";

import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { motion } from "framer-motion";
import { Scissors, Palette, Wrench } from "lucide-react";

const features = [
  {
    icon: <Scissors className="w-8 h-8 text-primary" />,
    title: "Lawn Maintenance",
    description: "Weekly mowing, edging, and trimming to keep your yard pristine all season long. We handle the details so you don't have to.",
  },
  {
    icon: <Palette className="w-8 h-8 text-primary" />,
    title: "Landscape Design",
    description: "Custom designs that transform ordinary spaces into outdoor sanctuaries. From flower beds to complete overhauls.",
  },
  {
    icon: <Wrench className="w-8 h-8 text-primary" />,
    title: "Hardscaping & Repair",
    description: "Patios, walkways, irrigation systems, and tree trimming. We build structures that last and keep your property healthy.",
  },
];

export default function Features() {
  return (
    <Section bgColor="bone">
      <Container>
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="font-heading font-bold text-3xl md:text-4xl text-primary mb-4">
            Complete Outdoor Solutions
          </h2>
          <p className="text-lg text-text-muted">
            From routine maintenance to major renovations, we offer a full suite of services to meet your needs.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-white p-8 rounded-xl shadow-card hover:shadow-hover transition-all duration-300"
            >
              <div className="w-16 h-16 bg-secondary/10 rounded-full flex items-center justify-center mb-6">
                {feature.icon}
              </div>
              <h3 className="font-heading font-bold text-xl text-primary mb-3">
                {feature.title}
              </h3>
              <p className="text-text-muted leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </Container>
    </Section>
  );
}