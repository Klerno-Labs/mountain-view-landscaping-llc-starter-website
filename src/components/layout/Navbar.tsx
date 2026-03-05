"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { siteConfig } from "@/config/site";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/Button";
import { Menu, X, Phone } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={cn(
        "sticky top-0 z-50 w-full transition-all duration-300",
        isScrolled || pathname !== "/"
          ? "bg-white/90 backdrop-blur-md shadow-sm border-b border-gray-100 py-3"
          : "bg-transparent py-5 text-white"
      )}
    >
      <Container>
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link
            href="/"
            className="flex items-center space-x-2 font-heading font-bold text-xl tracking-tight hover:opacity-80 transition-opacity"
          >
            <span className={cn(isScrolled || pathname !== "/" ? "text-primary" : "text-white")}>
              Mountain View
            </span>
            <span className="hidden sm:inline-block text-accent">Landscaping</span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8">
            {siteConfig.nav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  "text-sm font-medium transition-colors hover:text-accent",
                  isScrolled || pathname !== "/"
                    ? "text-primary"
                    : "text-white/90"
                )}
              >
                {item.title}
              </Link>
            ))}
          </nav>

          {/* Desktop CTA */}
          <div className="hidden md:flex items-center gap-4">
            <a
              href={`tel:${siteConfig.contact.phone}`}
              className={cn(
                "flex items-center gap-2 text-sm font-bold",
                isScrolled || pathname !== "/" ? "text-primary" : "text-white"
              )}
            >
              <Phone size={18} />
              {siteConfig.contact.phone}
            </a>
            <Button
              variant="accent"
              size="sm"
              asChild
            >
              <Link href="/contact">Get Quote</Link>
            </Button>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            className="md:hidden p-2"
            onClick={() => setIsOpen(true)}
            aria-label="Open menu"
          >
            <Menu className={cn(isScrolled || pathname !== "/" ? "text-primary" : "text-white")} size={28} />
          </button>
        </div>
      </Container>

      {/* Mobile Menu Drawer */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", damping: 25, stiffness: 200 }}
            className="fixed inset-y-0 right-0 z-50 w-full max-w-sm bg-background p-6 shadow-xl md:hidden flex flex-col"
          >
            <div className="flex items-center justify-between mb-8">
              <span className="font-heading font-bold text-xl text-primary">Menu</span>
              <button
                onClick={() => setIsOpen(false)}
                className="p-2 text-primary"
                aria-label="Close menu"
              >
                <X size={24} />
              </button>
            </div>

            <nav className="flex-1 flex flex-col space-y-6">
              {siteConfig.nav.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setIsOpen(false)}
                  className="text-xl font-heading font-medium text-primary hover:text-accent transition-colors"
                >
                  {item.title}
                </Link>
              ))}
            </nav>

            <div className="mt-8 pt-8 border-t border-gray-200 space-y-4">
              <a
                href={`tel:${siteConfig.contact.phone}`}
                className="flex items-center justify-center gap-2 text-lg font-bold text-primary"
              >
                <Phone size={20} />
                {siteConfig.contact.phone}
              </a>
              <Button className="w-full" variant="primary" asChild>
                <Link href="/contact" onClick={() => setIsOpen(false)}>Get Free Quote</Link>
              </Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
      
      {/* Backdrop */}
      {isOpen && (
        <div 
          className="fixed inset-0 bg-black/50 z-40 md:hidden"
          onClick={() => setIsOpen(false)}
        />
      )}
    </header>
  );
}