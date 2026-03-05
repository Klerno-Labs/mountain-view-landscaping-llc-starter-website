import { SiteConfig } from "@/types";

export const siteConfig: SiteConfig = {
  name: "Mountain View Landscaping",
  description: "Professional landscaping and lawn care services in Austin, Texas. Family-owned since 2015.",
  url: "https://mountainviewlandscaping.com",
  ogImage: "/og-image.jpg",
  links: {
    twitter: "https://twitter.com",
    instagram: "https://instagram.com",
    linkedin: "https://linkedin.com",
  },
  contact: {
    phone: "(512) 555-0147",
    email: "info@mountainviewlandscaping.com",
    address: "4821 Westlake Dr, Austin, TX 78746",
    hours: "Mon-Fri: 7am-6pm, Sat: 8am-4pm, Sun: Closed",
  },
  nav: [
    { title: "Home", href: "/" },
    { title: "Services", href: "/services" },
    { title: "Gallery", href: "/gallery" },
    { title: "About", href: "/about" },
    { title: "Contact", href: "/contact" },
  ],
};