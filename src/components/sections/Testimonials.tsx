"use client";

import { Star } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { motion } from "framer-motion";

const testimonials = [
  {
    quote:
      "They transformed our backyard into an oasis. The team was professional and finished ahead of schedule. Our neighbors keep asking who did the work!",
    name: "Maria L.",
    role: "Homeowner, Westlake",
    rating: 5,
  },
  {
    quote:
      "Best landscaping company in Austin. Been using them for 3 years. Always on time, always thorough. Worth every penny.",
    name: "James T.",
    role: "Residential Client",
    rating: 5,
  },
  {
    quote:
      "We had a complete irrigation system installed. Zero issues in 2 years. Their attention to detail is unmatched.",
    name: "Sandra K.",
    role: "Homeowner, Tarrytown",
    rating: 5,
  },
];

export default function Testimonials() {
  return (
    <section className="py-24 bg-primary relative overflow-hidden">
      {/* Decorative Background Elements */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-accent/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-secondary/20 rounded-full blur-3xl" />

      <Container className="relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 font-accent">
            What Our Neighbors Say
          </h2>
          <div className="flex justify-center gap-1 mb-6">
            {[...Array(5)].map((_, i) => (
              <Star
                key={i}
                className="w-6 h-6 fill-accent text-accent"
              />
            ))}
          </div>
          <p className="text-white/70 text-lg">
            Our reputation is built on trust and quality workmanship.
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
              className="bg-white/5 backdrop-blur-sm border border-white/10 p-8 rounded-xl hover:bg-white/10 transition-colors"
            >
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star
                    key={i}
                    className="w-5 h-5 fill-accent text-accent"
                  />
                ))}
              </div>
              <blockquote className="text-white/90 text-lg leading-relaxed mb-6 italic">
                &ldquo;{testimonial.quote}&rdquo;
              </blockquote>
              <div>
                <div className="font-bold text-white">{testimonial.name}</div>
                <div className="text-accent text-sm">{testimonial.role}</div>
              </div>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
}