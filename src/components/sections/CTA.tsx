import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";

interface CTAProps {
  className?: string;
}

export default function CTA({ className }: CTAProps) {
  return (
    <section className={cn("relative bg-primary py-24 overflow-hidden", className)}>
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]"></div>
      </div>
      
      <Container className="relative z-10 text-center">
        <h2 className="font-heading font-bold text-3xl md:text-5xl text-white mb-6">
          Ready to Transform Your Yard?
        </h2>
        <p className="text-white/80 text-lg max-w-2xl mx-auto mb-10">
          Get a free, no-obligation quote today. We'll assess your needs and provide a transparent plan.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Button size="lg" variant="accent" asChild>
            <a href="/contact">
              Get Free Quote <ArrowRight className="ml-2 w-4 h-4" />
            </a>
          </Button>
          <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-primary" asChild>
            <a href={`tel:${process.env.NEXT_PUBLIC_PHONE || "(512) 555-0147"}`}>
              Call (512) 555-0147
            </a>
          </Button>
        </div>
      </Container>
    </section>
  );
}