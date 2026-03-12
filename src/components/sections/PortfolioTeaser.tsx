"use client";

import { useState } from "react";
import Image from "next/image";
import Container from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { images } from "@/config/images";
import { ArrowRight, MapPin } from "lucide-react";
import { motion } from "framer-motion";

const projects = [
  {
    title: "Westlake Oasis",
    location: "Westlake, Austin",
    imageKey: "gallery-1",
  },
  {
    title: "Tarrytown Retreat",
    location: "Tarrytown, Austin",
    imageKey: "gallery-2",
  },
  {
    title: "Barton Hills Native",
    location: "Barton Hills, Austin",
    imageKey: "gallery-3",
  },
];

export function PortfolioTeaser() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <section className="py-24 bg-bone">
      <Container>
        <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
          <div className="max-w-2xl">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4 font-accent">
              Our Recent Work
            </h2>
            <p className="text-muted text-lg">
              Browse our portfolio of transformations. From small residential
              updates to complete estate overhauls.
            </p>
          </div>
          <Button variant="outline" asChild>
            <a href="/gallery" className="group">
              View All Projects
              <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>
          </Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group relative h-[400px] rounded-xl overflow-hidden cursor-pointer"
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
              onClick={() => (window.location.href = "/gallery")}
            >
              <Image
                src={images[project.imageKey as keyof typeof images].src}
                alt={project.title}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-110"
                sizes="(max-width: 768px) 100vw, 33vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/90 to-primary/0 opacity-80 transition-opacity duration-300 group-hover:opacity-90" />
              
              <div className="absolute bottom-0 left-0 w-full p-6 transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                <div className="flex items-center gap-2 text-accent text-sm font-bold mb-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-75">
                  <MapPin className="w-3 h-3" />
                  {project.location}
                </div>
                <h3 className="text-2xl font-bold text-white mb-2">
                  {project.title}
                </h3>
                <span className="text-white/80 text-sm inline-flex items-center gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-100">
                  View Project <ArrowRight className="w-4 h-4" />
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
}
export default PortfolioTeaser;