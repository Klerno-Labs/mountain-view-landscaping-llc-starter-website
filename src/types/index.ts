export interface Service {
  id: string;
  title: string;
  description: string;
  price: string;
  image: string;
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  quote: string;
  rating: number;
}

export interface Project {
  id: string;
  title: string;
  category: string;
  location: string;
  image: string;
  beforeImage?: string;
}