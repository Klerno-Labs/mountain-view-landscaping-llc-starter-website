import { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { Award, Users, Heart } from "lucide-react";
import Image from "next/image";
import { images } from "@/config/images";
import CTA from "@/components/sections/CTA";

export const metadata: Metadata = {
  title: "About Us",
  description: "Learn more about Mountain View Landscaping, a family-owned business serving Austin since 2015.",
};

const stats = [
  { label: "Years Experience", value: "10+", icon: <Award className="w-6 h-6 text-accent" /> },
  { label: "Happy Clients", value: "500+", icon: <Users className="w-6 h-6 text-accent" /> },
  { label: "Projects Completed", value: "1200+", icon: <Heart className="w-6 h-6 text-accent" /> },
];

export default function AboutPage() {
  return (
    <>
      <Section className="pt-32 pb-16 bg-white">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="relative aspect-[4/5] rounded-2xl overflow-hidden shadow-card">
              <Image
                src={images.about.src}
                alt={images.about.alt}
                fill
                className="object-cover"
              />
            </div>
            <div>
              <h1 className="font-heading font-bold text-4xl md:text-5xl text-primary mb-6">
                Rooted in Austin, <br />Growing With You.
              </h1>
              <div className="prose prose-lg text-text-muted mb-8">
                <p className="mb-4">
                  Mountain View Landscaping began in 2015 with a simple mission: to provide Austin homeowners 
                  with reliable, high-quality lawn care services they could trust.
                </p>
                <p>
                  As a family-owned business, we treat every yard as if it were our own. We understand that 
                  your outdoor space is an extension of your home—a place to relax, play, and make memories. 
                  That's why we combine horticultural expertise with a personal touch.
                </p>
              </div>
              
              <div className="grid grid-cols-3 gap-6 border-t border-gray-100 pt-8">
                {stats.map((stat, index) => (
                  <div key={index} className="text-center">
                    <div className="flex justify-center mb-2">{stat.icon}</div>
                    <div className="font-heading font-bold text-3xl text-primary mb-1">{stat.value}</div>
                    <div className="text-xs font-bold text-secondary uppercase tracking-wider">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </Container>
      </Section>

      <Section bgColor="bone">
        <Container>
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="font-heading font-bold text-3xl text-primary mb-6">Our Values</h2>
            <div className="space-y-6 text-left">
              <div className="bg-white p-6 rounded-xl shadow-sm">
                <h3 className="font-bold text-primary text-lg mb-2">Integrity</h3>
                <p className="text-text-muted text-sm">We provide honest quotes and stick to them. No hidden fees, no surprises.</p>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-sm">
                <h3 className="font-bold text-primary text-lg mb-2">Quality</h3>
                <p className="text-text-muted text-sm">From the plants we select to the cuts we make, we never compromise on quality.</p>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-sm">
                <h3 className="font-bold text-primary text-lg mb-2">Respect</h3>
                <p className="text-text-muted text-sm">We respect your time, your property, and your privacy while we work.</p>
              </div>
            </div>
          </div>
        </Container>
      </Section>
      <CTA />
    </>
  );
}