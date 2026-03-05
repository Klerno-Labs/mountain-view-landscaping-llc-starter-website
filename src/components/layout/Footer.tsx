import Link from "next/link";
import { siteConfig } from "@/config/site";
import { Container } from "@/components/ui/Container";
import { Facebook, Instagram, Twitter, MapPin, Mail, Phone, Clock } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-primary text-white pt-16 pb-8">
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Brand Column */}
          <div className="space-y-4">
            <h3 className="font-heading font-bold text-2xl text-accent">Mountain View</h3>
            <p className="text-white/80 leading-relaxed">
              Professional landscaping and lawn care services in Austin, Texas. 
              Family-owned since 2015. Your yard, our passion.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-heading font-bold text-lg mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {siteConfig.nav.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-white/70 hover:text-accent transition-colors"
                  >
                    {item.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-heading font-bold text-lg mb-4">Services</h4>
            <ul className="space-y-2 text-white/70">
              <li>Lawn Maintenance</li>
              <li>Landscape Design</li>
              <li>Hardscaping</li>
              <li>Irrigation</li>
              <li>Tree Care</li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-heading font-bold text-lg mb-4">Contact Us</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                <span className="text-white/80">{siteConfig.contact.address}</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-accent flex-shrink-0" />
                <a href={`tel:${siteConfig.contact.phone}`} className="text-white/80 hover:text-accent">
                  {siteConfig.contact.phone}
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-accent flex-shrink-0" />
                <a href={`mailto:${siteConfig.contact.email}`} className="text-white/80 hover:text-accent">
                  {siteConfig.contact.email}
                </a>
              </li>
              <li className="flex items-start gap-3">
                <Clock className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                <span className="text-white/80">{siteConfig.contact.hours}</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-white/60 text-sm">
            &copy; {currentYear} {siteConfig.name}. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <a 
              href={siteConfig.links.twitter} 
              target="_blank" 
              rel="noopener noreferrer"
              aria-label="Visit our Twitter page"
              className="text-white/60 hover:text-accent transition-colors"
            >
              <Twitter size={20} />
            </a>
            <a 
              href={siteConfig.links.instagram} 
              target="_blank" 
              rel="noopener noreferrer"
              aria-label="Visit our Instagram page"
              className="text-white/60 hover:text-accent transition-colors"
            >
              <Instagram size={20} />
            </a>
            <a 
              href={siteConfig.links.linkedin} 
              target="_blank" 
              rel="noopener noreferrer"
              aria-label="Visit our LinkedIn page"
              className="text-white/60 hover:text-accent transition-colors"
            >
              <Facebook size={20} />
            </a>
          </div>
        </div>
      </Container>
    </footer>
  );
}