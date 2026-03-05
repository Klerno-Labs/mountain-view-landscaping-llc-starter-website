"use client";

import { useState } from "react";
import Image from "next/image";
import { images } from "@/config/images";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { Button } from "@/components/ui/Button";
import { X, ArrowLeft, ArrowRight } from "lucide-react";
import BeforeAfter from "@/components/ui/BeforeAfter";
import { cn } from "@/lib/utils";
import { motion, AnimatePresence } from "framer-motion";

const projects = [
  {
    id: 1,
    title: "Westlake Oasis",
    category: "Hardscaping",
    image: images["gallery-2"],
    description: "Complete backyard renovation including a natural stone patio, fire pit, and drought-tolerant plantings.",
    hasBeforeAfter: true,
  },
  {
    id: 2,
    title: "Tarrytown Japanese Garden",
    category: "Landscape Design",
    image: images["gallery-1"],
    description: "A serene retreat featuring bamboo, maples, and a custom water feature designed for relaxation.",
    hasBeforeAfter: false,
  },
  {
    id: 3,
    title: "Barton Hills Modern",
    category: "Renovation",
    image: images["gallery-4"],
    description: "Updated curb appeal with new architectural limestone borders, fresh sod, and modern walkway.",
    hasBeforeAfter: false,
  },
  {
    id: 4,
    title: "Rollingwood Irrigation",
    category: "Irrigation",
    image: images["gallery-3"],
    description: "Installation of a smart irrigation system with rain sensors and zone control.",
    hasBeforeAfter: false,
  },
];

const categories = ["All", "Hardscaping", "Landscape Design", "Renovation", "Irrigation"];

export default function GalleryPage() {
  const [filter, setFilter] = useState("All");
  const [selectedProject, setSelectedProject] = useState<typeof projects[0] | null>(null);

  const filteredProjects =
    filter === "All"
      ? projects
      : projects.filter((p) => p.category === filter);

  return (
    <>
      <Section className="pt-32 pb-8">
        <Container>
          <h1 className="font-heading font-bold text-4xl md:text-5xl text-primary mb-6 text-center">
            Our Portfolio
          </h1>
          <p className="text-center text-text-muted max-w-2xl mx-auto mb-12">
            Browse our recent work across Austin. From modern hardscapes to traditional gardens, 
            we bring outdoor visions to life.
          </p>

          {/* Filter Bar */}
          <div className="flex flex-wrap justify-center gap-2 mb-12">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={cn(
                  "px-4 py-2 rounded-full text-sm font-bold transition-all",
                  filter === cat
                    ? "bg-primary text-white"
                    : "bg-white text-text-muted border border-gray-200 hover:border-primary"
                )}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Grid */}
          <motion.div layout className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <AnimatePresence>
              {filteredProjects.map((project) => (
                <motion.div
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.3 }}
                  key={project.id}
                  className="group relative aspect-[4/5] rounded-xl overflow-hidden shadow-card cursor-pointer"
                  onClick={() => setSelectedProject(project)}
                >
                  <Image
                    src={project.image.src}
                    alt={project.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                    <span className="text-accent text-xs font-bold uppercase mb-1">
                      {project.category}
                    </span>
                    <h3 className="text-white font-heading font-bold text-lg">
                      {project.title}
                    </h3>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        </Container>
      </Section>

      {/* Modal */}
      <AnimatePresence>
        {selectedProject && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 20 }}
              className="bg-white rounded-2xl max-w-5xl w-full max-h-[90vh] overflow-hidden flex flex-col md:flex-row shadow-modal"
            >
              <button
                onClick={() => setSelectedProject(null)}
                className="absolute top-4 right-4 z-10 p-2 bg-white/80 rounded-full text-primary hover:bg-white transition-colors"
                aria-label="Close modal"
              >
                <X size={24} />
              </button>

              <div className="w-full md:w-3/5 bg-gray-100 relative">
                {selectedProject.hasBeforeAfter ? (
                  <div className="absolute inset-0">
                    <BeforeAfter
                      beforeSrc={images["ba-1-before"].src}
                      afterSrc={images["ba-1-after"].src}
                      beforeAlt="Before renovation"
                      afterAlt="After renovation"
                      className="w-full h-full"
                    />
                  </div>
                ) : (
                  <Image
                    src={selectedProject.image.src}
                    alt={selectedProject.title}
                    width={800}
                    height={1000}
                    className="w-full h-full object-cover"
                  />
                )}
              </div>

              <div className="w-full md:w-2/5 p-8 md:p-12 flex flex-col overflow-y-auto">
                <span className="text-accent text-xs font-bold uppercase tracking-wider mb-2">
                  {selectedProject.category}
                </span>
                <h2 className="font-heading font-bold text-3xl text-primary mb-4">
                  {selectedProject.title}
                </h2>
                <p className="text-text-muted leading-relaxed mb-8">
                  {selectedProject.description}
                </p>
                {selectedProject.hasBeforeAfter && (
                  <div className="bg-background p-4 rounded-lg border border-gray-100 mb-8">
                    <p className="text-sm font-bold text-primary mb-1">Interactive View</p>
                    <p className="text-xs text-text-muted">
                      Drag the slider left or right to see the transformation.
                    </p>
                  </div>
                )}
                <div className="mt-auto">
                  <Button className="w-full" variant="primary">
                    Get This Look
                  </Button>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  );
}