export interface SiteConfig {
  name: string;
  description: string;
  url: string;
  ogImage: string;
  links: {
    twitter: string;
    instagram: string;
    linkedin: string;
  };
  contact: {
    phone: string;
    email: string;
    address: string;
    hours: string;
  };
  nav: {
    title: string;
    href: string;
  }[];
}