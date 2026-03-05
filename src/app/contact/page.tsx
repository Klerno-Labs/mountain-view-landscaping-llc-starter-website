import { Metadata } from "next";
import ContactForm from "@/components/forms/ContactForm";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { MapPin, Mail, Phone, Clock } from "lucide-react";
import { siteConfig } from "@/config/site";

export const metadata: Metadata = {
  title: "Contact Us",
  description: "Get in touch with Mountain View Landscaping for a free quote.",
};

const contactItems = [
  {
    icon: <Phone className="w-6 h-6 text-accent" />,
    label: "Phone",
    value: siteConfig.contact.phone,
    href: `tel:${siteConfig.contact.phone}`,
  },
  {
    icon: <Mail className="w-6 h-6 text-accent" />,
    label: "Email",
    value: siteConfig.contact.email,
    href: `mailto:${siteConfig.contact.email}`,
  },
  {
    icon: <MapPin className="w-6 h-6 text-accent" />,
    label: "Address",
    value: siteConfig.contact.address,
    href: "https://maps.google.com/?q=4821+Westlake+Dr+Austin+TX+78746",
    target: "_blank",
  },
];

export default function ContactPage() {
  return (
    <>
      <Section className="pt-32 pb-16">
        <Container>
          <div className="text-center mb-16">
            <h1 className="font-heading font-bold text-4xl md:text-5xl text-primary mb-4">
              Get In Touch
            </h1>
            <p className="text-xl text-text-muted max-w-2xl mx-auto">
              Ready to start your project? Fill out the form below or contact us directly.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <div className="lg:col-span-1 space-y-8">
              <div className="space-y-6">
                {contactItems.map((item, index) => (
                  <a
                    key={index}
                    href={item.href}
                    target={item.target || "_self"}
                    rel="noopener noreferrer"
                    className="flex items-start gap-4 group"
                  >
                    <div className="w-12 h-12 bg-background rounded-full flex items-center justify-center flex-shrink-0 group-hover:bg-accent/10 transition-colors">
                      {item.icon}
                    </div>
                    <div>
                      <p className="text-xs font-bold text-secondary uppercase mb-1">{item.label}</p>
                      <p className="text-primary font-medium group-hover:text-accent transition-colors">
                        {item.value}
                      </p>
                    </div>
                  </a>
                ))}
              </div>

              <div className="bg-background p-6 rounded-xl border border-gray-100">
                <div className="flex items-center gap-3 mb-2">
                  <Clock className="w-5 h-5 text-primary" />
                  <h3 className="font-bold text-primary">Business Hours</h3>
                </div>
                <ul className="text-sm text-text-muted space-y-1">
                  <li className="flex justify-between">
                    <span>Mon - Fri:</span>
                    <span>7am - 6pm</span>
                  </li>
                  <li className="flex justify-between">
                    <span>Saturday:</span>
                    <span>8am - 4pm</span>
                  </li>
                  <li className="flex justify-between text-text-muted/60">
                    <span>Sunday:</span>
                    <span>Closed</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="lg:col-span-2">
              <ContactForm />
            </div>
          </div>
        </Container>
      </Section>

      {/* Map Section */}
      <section className="h-96 w-full bg-gray-200 grayscale hover:grayscale-0 transition-all duration-500">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3446.995562488455!2d-97.7973896848825!3d30.271129981468635!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8644ca0d0d954745%3A0x62a2e37a5c1b0!2s4821%20Westlake%20Dr%2C%20Austin%2C%20TX%2078746!5e0!3m2!1sen!2sus!4v1684321234567!5m2!1sen!2sus"
          width="100%"
          height="100%"
          style={{ border: 0, filter: "grayscale(100%) hover:grayscale(0%)" }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="Map of Mountain View Landscaping"
        ></iframe>
      </section>
    </>
  );
}