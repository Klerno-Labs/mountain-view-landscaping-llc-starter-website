"use client";

import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { motion } from "framer-motion";
import { MessageCircle, ClipboardCheck, Shovel } from "lucide-react";

const steps = [
  {
    number: "01",
    icon: <MessageCircle className="w-8 h-8 text-accent" />,
    title: "Consultation",
    description: "We meet to discuss your vision, assess your property, and provide a transparent, no-obligation quote tailored to your budget.",
  },
  {
    number: "02",
    icon: <ClipboardCheck className="w-8 h-8 text-accent" />,
    title: "Design & Plan",
    description: "Our experts create a detailed plan. Whether it's a simple maintenance schedule or a complex hardscape blueprint, we finalize details together.",
  },
  {
    number: "03",
    icon: <Shovel className="w-8 h-8 text-accent" />,
    title: "Execution",
    description: "Our professional team arrives on time, works efficiently, and cleans up thoroughly. We ensure minimal disruption to your daily life.",
  },
];

export default function Process() {
  return (
    <Section bgColor="white">
      <Container>
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="font-heading font-bold text-3xl md:text-4xl text-primary mb-4">
            How It Works
          </h2>
          <p className="text-lg text-text-muted">
            A simple, stress-free process designed to deliver exceptional results.
          </p>
        </div>

        <div className="space-y-12 md:space-y-0">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className={`flex flex-col md:flex-row items-center gap-8 ${
                index % 2 !== 0 ? "md:flex-row-reverse" : ""
              }`}
            >
              <div className="w-full md:w-1/2">
                <div className="relative bg-secondary/5 p-10 rounded-2xl">
                  <span className="font-heading font-bold text-6xl text-secondary/20 absolute top-4 right-6">
                    {step.number}
                  </span>
                  <div className="w-14 h-14 bg-white rounded-full shadow-sm flex items-center justify-center mb-4 relative z-10">
                    {step.icon}
                  </div>
                  <h3 className="font-heading font-bold text-2xl text-primary mb-3">
                    {step.title}
                  </h3>
                  <p className="text-text-muted leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>
              <div className="w-full md:w-1/2 h-64 md:h-80 rounded-2xl overflow-hidden shadow-card relative">
                <div className="absolute inset-0 bg-primary/10 flex items-center justify-center">
                   <span className="text-text-muted font-medium">Process Step {index + 1}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </Container>
    </Section>
  );
}