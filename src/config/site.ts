import { Metadata } from "next";

export const siteConfig = {
  name: "Mountain View Landscaping",
  description: "Professional landscaping and lawn care services in Austin, Texas. Family-owned since 2015.",
  url: "https://mountainviewlandscaping.com",
  ogImage: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1200&h=630&fit=crop",
  links: {
    twitter: "https://twitter.com",
    instagram: "https://instagram.com",
    facebook: "https://facebook.com",
  },
  contact: {
    phone: "(512) 555-0147",
    email: "info@mountainviewlandscaping.com",
    address: "4821 Westlake Dr, Austin, TX 78746",
  },
  nav: [
    { title: "Home", href: "/" },
    { title: "Services", href: "/services" },
    { title: "About", href: "/about" },
    { title: "Gallery", href: "/gallery" },
    { title: "Contact", href: "/contact" },
  ],
};

export type SiteConfig = typeof siteConfig;