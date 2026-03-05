import Hero from "@/components/sections/Hero";
import Features from "@/components/sections/Features";
import Process from "@/components/sections/Process";
import PortfolioTeaser from "@/components/sections/PortfolioTeaser";
import Testimonials from "@/components/sections/Testimonials";
import CTA from "@/components/sections/CTA";
import LeadForm from "@/components/forms/LeadForm";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Home",
  description: "Professional landscaping and lawn care services in Austin, Texas.",
};

export default function Home() {
  return (
    <>
      <Hero />
      <Features />
      <Process />
      <PortfolioTeaser />
      <Section bgColor="bone">
        <Container>
          <LeadForm />
        </Container>
      </Section>
      <Testimonials />
      <CTA />
    </>
  );
}