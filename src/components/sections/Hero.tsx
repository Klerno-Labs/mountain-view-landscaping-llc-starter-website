import Image from "next/image";
import { Button } from "@/components/ui/Button";
import { images } from "@/config/images";
import { ChevronDown } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative h-[90vh] min-h-[600px] flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src={images.hero.src}
          alt={images.hero.alt}
          fill
          priority
          className="object-cover"
          sizes="100vw"
        />
        {/* Overlay */}
        <div className="absolute inset-0 bg-primary/70 mix-blend-multiply" />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center max-w-4xl px-4 sm:px-6 lg:px-8">
        <span className="inline-block py-1 px-3 rounded-full bg-accent/20 border border-accent text-accent font-bold text-xs tracking-wider mb-6 uppercase">
          Austin's Premier Landscaping
        </span>
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight font-accent">
          Your Yard, <br /> Our Passion.
        </h1>
        <p className="text-lg sm:text-xl text-gray-200 mb-10 max-w-2xl mx-auto font-light">
          Transforming outdoor spaces into living sanctuaries. Professional
          lawn care, custom hardscapes, and landscape design.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Button variant="accent" size="lg" asChild>
            <a href="#quote">Get Free Estimate</a>
          </Button>
          <Button variant="outline" size="lg" className="text-white border-white hover:bg-white hover:text-primary" asChild>
            <a href="/gallery">View Portfolio</a>
          </Button>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <ChevronDown className="w-8 h-8 text-white/80" />
      </div>
    </section>
  );
}