import { Metadata } from "next";
import Container from "@/components/ui/Container";
import Section from "@/components/ui/Section";
import Image from "next/image";
import { images } from "@/config/images";
import { Award, Users, Leaf } from "lucide-react";
import CTA from "@/components/sections/CTA";
import { motion } from "framer-motion";

export const metadata: Metadata = {
  title: "About Us",
  description: "Learn about Mountain View Landscaping. Family-owned since 2015, serving Austin with pride and passion.",
};

const stats = [
  { number: "500+", label: "Yards Transformed" },
  { number: "8", label: "Years Experience" },
  { number: "100%", label: "Satisfaction Rate" },
];

const team = [
  {
    name: "Michael Ross",
    role: "Founder & Lead Designer",
    bio: "Michael founded Mountain View with a vision to bring sustainable, beautiful landscapes to Austin.",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop",
  },
  {
    name: "Sarah Jenkins",
    role: "Operations Manager",
    bio: "Sarah ensures every project runs smoothly and every client is happy with the result.",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=400&fit=crop",
  },
  {
    name: "David Chen",
    role: "Head Horticulturist",
    bio: "David is our plant expert. He knows exactly what thrives in the Texas climate.",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop",
  },
];

export default function AboutPage() {
  return (
    <>
      <Section>
        <Container>
          <div className="flex flex-col md:flex-row gap-12 items-center mb-20">
            <div className="w-full md:w-1/2">
              <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-xl">
                <Image
                  src={images.about.src}
                  alt="Our Team"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
            </div>
            <div className="w-full md:w-1/2">
              <h1 className="text-4xl font-bold text-primary mb-6 font-accent">
                Creating Outdoor Sanctuaries Since 2015
              </h1>
              <p className="text-lg text-muted mb-6">
                Mountain View Landscaping started with a simple idea: that every
                home deserves a beautiful, functional outdoor space. What began
                as a one-man operation has grown into Austin's most trusted
                landscaping team.
              </p>
              <p className="text-lg text-muted mb-8">
                We are a family-owned business that treats your property like
                our own. We believe in sustainable practices, transparent
                pricing, and quality that speaks for itself.
              </p>
              <div className="flex flex-col gap-4">
                <div className="flex items-start gap-4">
                  <div className="p-2 bg-primary/10 rounded-lg text-primary">
                    <Award className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="font-bold text-primary">Award Winning</h4>
                    <p className="text-sm text-muted">
                      Recognized by Austin Home & Garden Show 2022
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="p-2 bg-primary/10 rounded-lg text-primary">
                    <Users className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="font-bold text-primary">Expert Team</h4>
                    <p className="text-sm text-muted">
                      Fully licensed, bonded, and insured professionals
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Stats */}
          <div className="bg-primary text-white rounded-2xl p-12 grid grid-cols-1 md:grid-cols-3 gap-8 text-center mb-20">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="text-5xl font-bold text-accent mb-2 font-heading">
                  {stat.number}
                </div>
                <div className="text-white/80 uppercase tracking-wider text-sm font-semibold">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </div>

          {/* Team */}
          <div>
            <h2 className="text-3xl font-bold text-primary mb-12 text-center font-accent">
              Meet The Team
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {team.map((member, index) => (
                <div
                  key={index}
                  className="bg-white p-6 rounded-xl shadow-md text-center border border-gray-100 hover:shadow-lg transition-all"
                >
                  <div className="w-32 h-32 mx-auto mb-6 rounded-full overflow-hidden border-4 border-bone">
                    <Image
                      src={member.image}
                      alt={member.name}
                      width={128}
                      height={128}
                      className="object-cover"
                    />
                  </div>
                  <h3 className="text-xl font-bold text-primary">
                    {member.name}
                  </h3>
                  <p className="text-accent font-medium mb-3">{member.role}</p>
                  <p className="text-muted text-sm">{member.bio}</p>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </Section>
      <CTA />
    </>
  );
}