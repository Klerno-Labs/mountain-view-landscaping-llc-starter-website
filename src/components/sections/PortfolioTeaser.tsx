"use client";

import Image from "next/image";
import Link from "next/link";
import { images } from "@/config/images";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

const projects = [
  {
    title: "Westlake Residence",
    category: "Hardscaping",
    image: images["gallery-2"],
  },
  {
    title: "Tarrytown Oasis",
    category: "Landscape Design",
    image: images["gallery-1"],
  },
  {
    title: "Barton Hills Makeover",
    category: "Full Renovation",
    image: images["gallery-4"],
  },
];

export default function PortfolioTeaser() {
  return (
    <Section bgColor="bone">
      <Container>
        <div className="flex flex-col md:flex-row justify-between items-end mb-12">
          <div className="max-w-2xl">
            <h2 className="font-heading font-bold text-3xl md:text-4xl text-primary mb-4">
              Recent Projects
            </h2>
            <p className="text-lg text-text-muted">
              We take pride in every project. Explore some of our recent transformations in the Austin area.
            </p>
          </div>
          <Link 
            href="/gallery" 
            className="hidden md:flex items-center gap-2 text-primary font-bold hover:text-accent transition-colors mt-4 md:mt-0"
          >
            View Full Gallery <ArrowRight size={18} />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group relative overflow-hidden rounded-xl shadow-card aspect-[4/5] cursor-pointer"
            >
              <Image
                src={project.image.src}
                alt={project.title}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-80 group-hover:opacity-90 transition-opacity" />
              <div className="absolute bottom-0 left-0 p-6 translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                <span className="text-accent text-xs font-bold uppercase tracking-wider mb-2 block">
                  {project.category}
                </span>
                <h3 className="text-white font-heading font-bold text-xl">
                  {project.title}
                </h3>
              </div>
            </motion.div>
          ))}
        </div>
        
        <div className="mt-8 text-center md:hidden">
          <Button variant="outline" asChild>
            <Link href="/gallery">View All Projects</Link>
          </Button>
        </div>
      </Container>
    </Section>
  );
}