"use client";

import { useState } from "react";
import Image from "next/image";
import Container from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { images } from "@/config/images";
import { X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { BeforeAfter } from "@/components/ui/BeforeAfter";
import { Metadata } from "next";

// Static export metadata workaround for client component pages would usually happen in parent,
// but for this single file output we'll treat this as a regular page but with for interactivity.
// In a real Next.js app, this might be split or metadata handled differently, but we follow instructions.

const galleryItems = [
  { id: 1, title: "Westlake Oasis", category: "Residential", imageKey: "gallery-1" as const },
  { id: 2, title: "Tarrytown Retreat", category: "Residential", imageKey: "gallery-2" as const },
  { id: 3, title: "Native Plant Garden", category: "Residential", imageKey: "gallery-3" as const },
  { id: 4, title: "Stone Pathway", category: "Hardscape", imageKey: "gallery-4" as const },
  { id: 5, title: "Modern Patio", category: "Hardscape", imageKey: "cta" as const },
  { id: 6, title: "Lawn Transformation", category: "Lawn Care", imageKey: "service-1" as const },
];

export default function GalleryPage() {
  const [filter, setFilter] = useState("All");
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const filteredItems =
    filter === "All"
      ? galleryItems
      : galleryItems.filter((item) => item.category === filter);

  return (
    <>
      <Section className="bg-white">
        <Container>
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-primary mb-6 font-accent">
              Our Portfolio
            </h1>
            <p className="text-lg text-muted">
              Browse our recent projects in Austin and surrounding areas.
            </p>
          </div>

          {/* Before/After Feature */}
          <div className="mb-20">
            <h2 className="text-2xl font-bold text-primary mb-6 text-center">
              See The Difference
            </h2>
            <BeforeAfter 
              beforeKey="service-1" 
              afterKey="gallery-1" 
              className="max-w-4xl mx-auto"
            />
          </div>

          {/* Filters */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {["All", "Residential", "Hardscape", "Lawn Care"].map((cat) => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={`px-6 py-2 rounded-full font-medium transition-all ${
                  filter === cat
                    ? "bg-primary text-white"
                    : "bg-bone text-primary hover:bg-gray-200"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredItems.map((item) => (
              <motion.div
                layout
                key={item.id}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="group relative aspect-[4/3] rounded-xl overflow-hidden cursor-pointer"
                onClick={() => setSelectedImage(item.imageKey)}
              >
                <Image
                  src={images[item.imageKey].src}
                  alt={item.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                  <span className="text-accent text-xs font-bold uppercase tracking-wider mb-1">
                    {item.category}
                  </span>
                  <h3 className="text-white text-xl font-bold">{item.title}</h3>
                </div>
              </motion.div>
            ))}
          </div>
        </Container>
      </Section>

      {/* Lightbox */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4"
            onClick={() => setSelectedImage(null)}
          >
            <button
              className="absolute top-4 right-4 text-white p-2 hover:bg-white/10 rounded-full transition-colors"
              aria-label="Close lightbox"
            >
              <X className="w-8 h-8" />
            </button>
            <div className="relative max-w-5xl max-h-[90vh] w-full">
              <Image
                src={images[selectedImage as keyof typeof images].src}
                alt="Enlarged view"
                width={1200}
                height={800}
                className="w-full h-auto object-contain rounded-lg"
              />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}