"use client";

import Image from "next/image";
import Link from "next/link";
import { images } from "@/config/images";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { ChevronDown, ShieldCheck, Star, Clock } from "lucide-react";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="relative h-screen min-h-[600px] flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <Image
          src={images.hero.src}
          alt={images.hero.alt}
          fill
          priority
          className="object-cover"
          quality={90}
        />
        <div className="absolute inset-0 bg-primary/70" />
      </div>

      <Container className="relative z-10 text-center text-white px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <div className="inline-flex items-center gap-2 bg-accent/20 border border-accent/40 text-accent px-4 py-1.5 rounded-full text-sm font-semibold mb-6 backdrop-blur-sm">
            <Star size={16} className="fill-accent text-accent" />
            Top Rated in Austin, TX
          </div>
          
          <h1 className="font-heading font-bold text-4xl sm:text-5xl lg:text-7xl mb-6 leading-tight">
            Your Yard, <br />
            <span className="text-accent font-accent italic">Our Passion.</span>
          </h1>
          
          <p className="font-body text-lg sm:text-xl text-gray-100 max-w-2xl mx-auto mb-10 leading-relaxed">
            Professional landscaping and lawn care services designed to elevate your 
            outdoor living experience. Family-owned since 2015.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button size="lg" variant="accent" asChild>
              <Link href="/contact">Get a Free Quote</Link>
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-primary" asChild>
              <Link href="/gallery">View Our Work</Link>
            </Button>
          </div>
        </motion.div>

        {/* Trust Bar */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.8 }}
          className="mt-16 pt-8 border-t border-white/20 grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-3xl mx-auto"
        >
          <div className="flex flex-col items-center gap-2">
            <ShieldCheck className="text-accent w-6 h-6" />
            <span className="text-sm font-medium">Licensed & Insured</span>
          </div>
          <div className="flex flex-col items-center gap-2">
            <Star className="text-accent w-6 h-6 fill-accent" />
            <span className="text-sm font-medium">5-Star Rated Service</span>
          </div>
          <div className="flex flex-col items-center gap-2">
            <Clock className="text-accent w-6 h-6" />
            <span className="text-sm font-medium">Reliable & Punctual</span>
          </div>
        </motion.div>
      </Container>

      {/* Scroll Indicator */}
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white/70"
      >
        <ChevronDown size={32} />
      </motion.div>
    </section>
  );
}