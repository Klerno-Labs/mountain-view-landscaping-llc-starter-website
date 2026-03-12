import Image from "next/image";
import Container from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { images } from "@/config/images";

export default function CTA() {
  return (
    <section className="relative py-24 bg-bone">
      <Container>
        <div className="relative rounded-2xl overflow-hidden bg-primary shadow-2xl">
          <div className="absolute inset-0">
            <Image
              src={images.cta.src}
              alt={images.cta.alt}
              fill
              className="object-cover mix-blend-overlay opacity-40"
              sizes="(max-width: 768px) 100vw, 1200px"
            />
          </div>
          
          <div className="relative z-10 px-8 py-16 md:py-24 text-center">
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6 font-accent">
              Ready to Transform Your Yard?
            </h2>
            <p className="text-white/90 text-lg md:text-xl mb-10 max-w-2xl mx-auto">
              Get a free, no-obligation quote today. We’ll assess your needs
              and provide a detailed plan tailored to your budget.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="accent" size="lg" asChild>
                <a href="/contact">Get Free Estimate</a>
              </Button>
              <Button variant="outline" size="lg" className="text-white border-white hover:bg-white hover:text-primary" asChild>
                <a href={`tel:${process.env.NEXT_PUBLIC_PHONE || "(512) 555-0147"}`}>
                  Call Now
                </a>
              </Button>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}