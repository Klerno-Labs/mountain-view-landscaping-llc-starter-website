"use client";

import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { Star, Quote } from "lucide-react";
import { motion } from "framer-motion";

const testimonials = [
  {
    name: "Maria L.",
    location: "Westlake, TX",
    quote: "They transformed our backyard into an oasis. The team was professional and finished ahead of schedule. Our neighbors keep asking who did the work!",
  },
  {
    name: "James T.",
    location: "Tarrytown, TX",
    quote: "Best landscaping company in Austin. Been using them for 3 years. Always on time, always thorough. Worth every penny.",
  },
  {
    name: "Sandra K.",
    location: "Barton Hills, TX",
    quote: "We had a complete irrigation system installed. Zero issues in 2 years. Their attention to detail is unmatched.",
  },
];

export default function Testimonials() {
  return (
    <Section bgColor="white">
      <Container>
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="font-heading font-bold text-3xl md:text-4xl text-primary mb-4">
            What Neighbors Say
          </h2>
          <p className="text-lg text-text-muted">
            Our reputation is built on trust, quality, and happy customers across Austin.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-background p-8 rounded-xl shadow-card relative"
            >
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={18} className="fill-accent text-accent" />
                ))}
              </div>
              <Quote className="absolute top-6 right-6 text-secondary/10 w-12 h-12" />
              <p className="text-text-main mb-6 italic leading-relaxed">
                "{testimonial.quote}"
              </p>
              <div>
                <p className="font-heading font-bold text-primary">
                  {testimonial.name}
                </p>
                <p className="text-sm text-text-muted">{testimonial.location}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </Container>
    </Section>
  );
}