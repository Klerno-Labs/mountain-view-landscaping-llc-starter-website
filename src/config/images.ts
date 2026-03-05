// ── Image Configuration ──────────────────────────────────────────────
// ✏️  HOW TO CHANGE IMAGES:
// 1. Find the slot you want to change below (e.g. "hero", "about", "service-1")
// 2. Replace the "src" URL with your own image URL
// 3. Update the "alt" text to describe the new image
// 4. Save — every component on the site updates automatically
//
// All components import from this file. This is the ONLY file you need
// to edit to swap any image on the entire website.

export const images = {
  // Homepage hero banner — the first image visitors see — REPLACE with a real Unsplash URL matching: "Professional home renovation project"
  "hero": {
    src: "https://images.unsplash.com/photo-1558904541-efa843a96f01?q=80&w=2070&auto=format&fit=crop",
    alt: "Lush green lawn with modern Austin home",
    width: 2070,
    height: 1380,
  },

  // Alternative hero image (used on inner pages or as fallback) — REPLACE with a real Unsplash URL matching: "Modern kitchen renovation with marble countertops"
  "hero-alt": {
    src: "https://images.unsplash.com/photo-1595246140625-573b715d11dc?q=80&w=2070&auto=format&fit=crop",
    alt: "Detailed landscaping close up",
    width: 2070,
    height: 1380,
  },

  // About page or About section on homepage — REPLACE with a real Unsplash URL matching: "Craftsman working on home improvement"
  "about": {
    src: "https://images.unsplash.com/photo-1584636633449-6135db7e5e6a?q=80&w=2070&auto=format&fit=crop",
    alt: "Landscaping team working on a project",
    width: 2070,
    height: 1380,
  },

  // First service card image — REPLACE with a real Unsplash URL matching: "Beautiful modern home exterior"
  "service-1": {
    src: "https://images.unsplash.com/photo-1595246140625-573b715d11dc?q=80&w=800&auto=format&fit=crop",
    alt: "Lawn mowing service",
    width: 800,
    height: 600,
  },

  // Second service card image — REPLACE with a real Unsplash URL matching: "Luxurious modern bathroom renovation"
  "service-2": {
    src: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?q=80&w=800&auto=format&fit=crop",
    alt: "Landscape design plans",
    width: 800,
    height: 600,
  },

  // Third service card image — REPLACE with a real Unsplash URL matching: "Professional tradesperson at work"
  "service-3": {
    src: "https://images.unsplash.com/photo-1628172978378-51a632e1475e?q=80&w=800&auto=format&fit=crop",
    alt: "Tree trimming service",
    width: 800,
    height: 600,
  },

  // Gallery image 1 — REPLACE with a real Unsplash URL matching: "Modern home interior with natural light"
  "gallery-1": {
    src: "https://images.unsplash.com/photo-1416879595882-3373a0480b5b?q=80&w=800&auto=format&fit=crop",
    alt: "Japanese inspired garden design",
    width: 800,
    height: 1000,
  },

  // Gallery image 2 — REPLACE with a real Unsplash URL matching: "Elegant living room with contemporary design"
  "gallery-2": {
    src: "https://images.unsplash.com/photo-1564419320461-6870880221ad?q=80&w=800&auto=format&fit=crop",
    alt: "Modern backyard patio with fire pit",
    width: 800,
    height: 600,
  },

  // Gallery image 3 — REPLACE with a real Unsplash URL matching: "Clean organized workshop tools"
  "gallery-3": {
    src: "https://images.unsplash.com/photo-1598902108854-10e335adac99?q=80&w=800&auto=format&fit=crop",
    alt: "Irrigation system installation",
    width: 800,
    height: 600,
  },

  // Call-to-action section background — REPLACE with a real Unsplash URL matching: "Stunning home exterior at golden hour"
  "cta": {
    src: "https://images.unsplash.com/photo-1475855581690-80accde3ae2b?q=80&w=2070&auto=format&fit=crop",
    alt: "Stunning garden path at sunset",
    width: 2070,
    height: 1380,
  },

  // Testimonials section background or decoration — REPLACE with a real Unsplash URL matching: "Modern home with landscaped garden"
  "testimonial-bg": {
    src: "https://images.unsplash.com/photo-1563909033498-3717022df3bd?q=80&w=2070&auto=format&fit=crop",
    alt: "Beautiful green lawn background",
    width: 2070,
    height: 1380,
  },

  // Gallery image 4 — REPLACE with a real Unsplash URL matching: "Contemporary house front entrance"
  "gallery-4": {
    src: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=800&auto=format&fit=crop",
    alt: "Contemporary house front entrance landscaping",
    width: 800,
    height: 600,
  },

  // Before/After 1
  "ba-1-before": {
    src: "https://images.unsplash.com/photo-1592419044706-39796d40f98c?q=80&w=800&auto=format&fit=crop",
    alt: "Backyard before renovation",
    width: 800,
    height: 600,
  },
  "ba-1-after": {
    src: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&w=800&auto=format&fit=crop",
    alt: "Backyard after renovation",
    width: 800,
    height: 600,
  },
} as const;

export type ImageSlot = keyof typeof images;