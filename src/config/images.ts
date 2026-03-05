// ── Image Configuration ──────────────────────────────────────────────
// ✏️  HOW TO CHANGE IMAGES:
// 1. Find the slot you want to change below (e.g. "hero", "about", "service-1")
// 2. Replace the "src" URL with your own image URL
// 3. Update the "alt" text to describe the new image
// 4. Save — every component on the site updates automatically

export const images = {
  // Homepage hero banner — Lush green modern home lawn
  "hero": {
    src: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?q=80&w=1200&auto=format&fit=crop",
    alt: "Professional home landscaping project with lush green lawn",
    width: 1200,
    height: 800,
  },

  // Alternative hero image (Inner pages) — Stone patio seating area
  "hero-alt": {
    src: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=1200&auto=format&fit=crop",
    alt: "Modern outdoor patio with stone furniture",
    width: 1200,
    height: 800,
  },

  // About section — Team working in garden
  "about": {
    src: "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?q=80&w=1200&auto=format&fit=crop",
    alt: "Mountain View Landscaping team working in a garden",
    width: 1200,
    height: 800,
  },

  // Service 1: Lawn Mowing — Close up of freshly cut grass
  "service-1": {
    src: "https://images.unsplash.com/photo-1592417817098-8fd3d9eb14a5?q=80&w=1200&auto=format&fit=crop",
    alt: "Freshly cut green grass lawn",
    width: 1200,
    height: 800,
  },

  // Service 2: Hardscapes — Stone pathway and patio
  "service-2": {
    src: "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?q=80&w=1200&auto=format&fit=crop",
    alt: "Elegant stone patio hardscaping",
    width: 1200,
    height: 800,
  },

  // Service 3: Irrigation — Sprinkler system on lawn
  "service-3": {
    src: "https://images.unsplash.com/photo-1416879595882-3373a0480b5b?q=80&w=1200&auto=format&fit=crop",
    alt: "Lawn irrigation system sprinkler",
    width: 1200,
    height: 800,
  },

  // Gallery 1: Modern backyard design
  "gallery-1": {
    src: "https://images.unsplash.com/photo-1595854341625-f33ee10dbf94?q=80&w=1200&auto=format&fit=crop",
    alt: "Modern backyard with fire pit",
    width: 1200,
    height: 800,
  },

  // Gallery 2: Front yard curb appeal
  "gallery-2": {
    src: "https://images.unsplash.com/photo-1622185135505-2d795003994a?q=80&w=1200&auto=format&fit=crop",
    alt: "Beautiful front yard landscaping",
    width: 1200,
    height: 800,
  },

  // Gallery 3: Garden flower beds
  "gallery-3": {
    src: "https://images.unsplash.com/photo-1558904541-efa843a96f01?q=80&w=1200&auto=format&fit=crop",
    alt: "Vibrant flower garden bed",
    width: 1200,
    height: 800,
  },
  
  // Gallery 4: Garden pathway
  "gallery-4": {
    src: "https://images.unsplash.com/photo-1504609813442-a8924e83f76e?q=80&w=1200&auto=format&fit=crop",
    alt: "Garden pathway with stones and plants",
    width: 1200,
    height: 800,
  },

  // CTA Section Background
  "cta": {
    src: "https://images.unsplash.com/photo-1596547609652-9cf5d8d76921?q=80&w=1200&auto=format&fit=crop",
    alt: "Beautiful home exterior at golden hour",
    width: 1200,
    height: 800,
  },

  // Testimonial Background
  "testimonial-bg": {
    src: "https://images.unsplash.com/photo-1564415637254-92c662996b48?q=80&w=1200&auto=format&fit=crop",
    alt: "Landscaped garden background",
    width: 1200,
    height: 800,
  },
} as const;

export type ImageSlot = keyof typeof images;