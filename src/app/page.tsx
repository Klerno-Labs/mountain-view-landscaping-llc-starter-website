import { Metadata } from "next";
import { Hero } from "@/components/sections/Hero";
import { Features } from "@/components/sections/Features";
import { Process } from "@/components/sections/Process";
import { PortfolioTeaser } from "@/components/sections/PortfolioTeaser";
import { Testimonials } from "@/components/sections/Testimonials";
import { LeadForm } from "@/components/forms/LeadForm";
import { CTA } from "@/components/sections/CTA";

export const metadata: Metadata = {
  title: "Home",
  description: "Professional landscaping and lawn care services in Austin, Texas. Family-owned since 2015.",
};

export default function Home() {
  return (
    <>
      <Hero />
      
      {/* Trust Badge Bar */}
      <div className="bg-primary text-white py-4 border-b border-white/10">
        <div className="max-w-[1280px] mx-auto px-4 flex flex-wrap justify-center gap-6 md:gap-12 text-sm font-medium tracking-wide">
          <span className="flex items-center gap-2">
            ★★★★★ <span className="opacity-80">5-Star Rated</span>
          </span>
          <span className="flex items-center gap-2">
            ✓ <span className="opacity-80">Licensed & Insured</span>
          </span>
          <span className="flex items-center gap-2">
            📍 <span className="opacity-80">Proudly Serving Austin</span>
          </span>
        </div>
      </div>

      <Features />
      <Process />
      
      <section id="quote" className="py-24 bg-white">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6 font-accent">
              Get Your Free Estimate Today
            </h2>
            <p className="text-muted text-lg mb-8 leading-relaxed">
              Ready to transform your outdoor space? Fill out the form to get a
              no-obligation quote. Whether you need weekly lawn care or a
              complete landscape redesign, our team is ready to help.
            </p>
            <ul className="space-y-4 mb-8">
              {[
                "Free on-site consultations",
                "Transparent pricing, no hidden fees",
                "Flexible scheduling for your convenience",
              ].map((item, index) => (
                <li key={index} className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center mt-0.5">
                    <svg className="w-4 h-4 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span className="text-charcoal">{item}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="lg:ml-auto">
            <LeadForm />
          </div>
        </div>
      </section>

      <PortfolioTeaser />
      <Testimonials />
      <CTA />
    </>
  );
}