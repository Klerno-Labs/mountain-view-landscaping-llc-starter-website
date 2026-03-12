"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, Phone } from "lucide-react";
import { siteConfig } from "@/config/site";
import { Button } from "@/components/ui/Button";
import { cn } from "@/lib/utils";

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [pathname]);

  const navClasses = cn(
    "sticky top-0 z-50 transition-all duration-300 border-b",
    isScrolled || pathname !== "/"
      ? "bg-white/95 backdrop-blur-lg shadow-sm border-gray-100"
      : "bg-transparent border-transparent text-white"
  );

  const linkClasses = cn(
    "text-sm font-medium transition-colors hover:text-accent",
    isScrolled || pathname !== "/" ? "text-primary" : "text-white/90"
  );

  return (
    <header className={navClasses}>
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-[90px] md:h-[100px]">
          {/* Logo */}
          <Link
            href="/"
            className={cn(
              "font-heading font-bold text-xl tracking-tight",
              isScrolled || pathname !== "/" ? "text-primary" : "text-white"
            )}
          >
            Mountain View
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            {siteConfig.nav.map((item) => (
              <Link key={item.href} href={item.href} className={linkClasses}>
                {item.title}
              </Link>
            ))}
          </nav>

          {/* CTA Button (Desktop) */}
          <div className="hidden md:flex items-center gap-4">
            <a href={`tel:${siteConfig.contact.phone}`} className="flex items-center gap-2 text-sm font-semibold hover:text-accent transition-colors">
              <Phone className="w-4 h-4" />
              {siteConfig.contact.phone}
            </a>
            <Link href="/contact">
              <Button variant="accent" size="sm">
                Get a Quote
              </Button>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
          >
            {isMobileMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu Drawer */}
      <div
        className={cn(
          "fixed inset-0 bg-bone z-40 transform transition-transform duration-300 md:hidden flex flex-col pt-24 px-6 gap-6",
          isMobileMenuOpen ? "translate-x-0" : "translate-x-full"
        )}
      >
        {siteConfig.nav.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            className="text-2xl font-heading font-bold text-primary"
          >
            {item.title}
          </Link>
        ))}
        <div className="mt-4 pt-6 border-t border-secondary/20">
           <a href={`tel:${siteConfig.contact.phone}`} className="flex items-center gap-3 text-xl font-heading font-bold text-primary mb-4">
            <Phone className="w-5 h-5" />
            {siteConfig.contact.phone}
          </a>
          <Link href="/contact" className="block">
            <Button variant="primary" size="lg" className="w-full">
              Get Free Quote
            </Button>
          </Link>
        </div>
      </div>
    </header>
  );
}
export default Navbar;