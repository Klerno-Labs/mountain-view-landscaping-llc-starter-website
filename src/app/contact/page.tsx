import { Metadata } from "next";
import Container from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { ContactForm } from "@/components/forms/ContactForm";
import { MapPin, Mail, Phone, Clock } from "lucide-react";
import { siteConfig } from "@/config/site";

export const metadata: Metadata = {
  title: "Contact Us",
  description: "Get in touch with Mountain View Landscaping for a free quote. Call us at (512) 555-0147 or visit our office in Austin, TX.",
};

export default function ContactPage() {
  return (
    <>
      <Section>
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
            {/* Info Side */}
            <div>
              <h1 className="text-4xl font-bold text-primary mb-6 font-accent">
                Get In Touch
              </h1>
              <p className="text-lg text-muted mb-10">
                Ready to start your project? Contact us today for a free
                consultation. We are available Monday through Saturday.
              </p>

              <div className="space-y-8">
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-primary/10 rounded-lg text-primary">
                    <Phone className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="font-bold text-primary mb-1">Phone</h3>
                    <a
                      href={`tel:${siteConfig.contact.phone}`}
                      className="text-muted hover:text-accent transition-colors text-lg"
                    >
                      {siteConfig.contact.phone}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="p-3 bg-primary/10 rounded-lg text-primary">
                    <Mail className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="font-bold text-primary mb-1">Email</h3>
                    <a
                      href={`mailto:${siteConfig.contact.email}`}
                      className="text-muted hover:text-accent transition-colors text-lg"
                    >
                      {siteConfig.contact.email}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="p-3 bg-primary/10 rounded-lg text-primary">
                    <MapPin className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="font-bold text-primary mb-1">Address</h3>
                    <p className="text-muted text-lg">
                      {siteConfig.contact.address}
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="p-3 bg-primary/10 rounded-lg text-primary">
                    <Clock className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="font-bold text-primary mb-1">Hours</h3>
                    <ul className="text-muted space-y-1">
                      <li>Mon-Fri: 7am - 6pm</li>
                      <li>Saturday: 8am - 4pm</li>
                      <li>Sunday: Closed</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="mt-12 p-6 bg-bone rounded-xl">
                <h3 className="font-bold text-primary mb-3">Areas We Serve</h3>
                <div className="flex flex-wrap gap-2">
                  {[
                    "Westlake",
                    "Tarrytown",
                    "Barton Hills",
                    "Rollingwood",
                    "Austin",
                    "Lakeway",
                  ].map((area) => (
                    <span
                      key={area}
                      className="px-3 py-1 bg-white border border-gray-200 rounded-full text-sm text-muted"
                    >
                      {area}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Form Side */}
            <div className="bg-white p-8 md:p-10 rounded-2xl shadow-xl border border-gray-100">
              <h2 className="text-2xl font-bold text-primary mb-6">
                Send us a Message
              </h2>
              <ContactForm />
            </div>
          </div>
        </Container>
      </Section>
    </>
  );
}