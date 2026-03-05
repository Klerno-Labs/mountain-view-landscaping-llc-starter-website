"use client";

import { useState } from "react";
import { Button } from "@/components/ui/Button";
import { siteConfig } from "@/config/site";

export default function LeadForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    setIsSuccess(true);
    setIsSubmitting(false);
  };

  if (isSuccess) {
    return (
      <div className="bg-primary text-white p-8 rounded-xl text-center">
        <h3 className="font-heading font-bold text-2xl mb-2">Thanks!</h3>
        <p>We'll be in touch shortly to discuss your project.</p>
      </div>
    );
  }

  return (
    <div className="bg-white p-8 rounded-xl shadow-card max-w-2xl mx-auto">
      <div className="text-center mb-8">
        <h3 className="font-heading font-bold text-2xl text-primary mb-2">Quick Estimate</h3>
        <p className="text-text-muted">Tell us what you need and we'll get back to you.</p>
      </div>
      
      <form onSubmit={handleSubmit} className="space-y-4">
        <input type="text" name="_gotcha" className="hidden" tabIndex={-1} autoComplete="off" />
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label htmlFor="name" className="block text-xs font-bold text-secondary uppercase mb-2">Name</label>
            <input 
              type="text" 
              id="name" 
              required
              className="w-full bg-background border border-gray-300 rounded-md p-3 focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all"
              placeholder="John Doe"
            />
          </div>
          <div>
            <label htmlFor="phone" className="block text-xs font-bold text-secondary uppercase mb-2">Phone</label>
            <input 
              type="tel" 
              id="phone" 
              required
              className="w-full bg-background border border-gray-300 rounded-md p-3 focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all"
              placeholder="(512) 555-0123"
            />
          </div>
        </div>
        
        <div>
          <label htmlFor="service" className="block text-xs font-bold text-secondary uppercase mb-2">Service Needed</label>
          <select 
            id="service"
            className="w-full bg-background border border-gray-300 rounded-md p-3 focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all"
          >
            <option value="Lawn Mowing">Lawn Mowing</option>
            <option value="Landscape Design">Landscape Design</option>
            <option value="Tree Trimming">Tree Trimming</option>
            <option value="Irrigation">Irrigation Installation</option>
            <option value="Cleanup">Seasonal Cleanup</option>
            <option value="Other">Other</option>
          </select>
        </div>
        
        <Button type="submit" className="w-full" size="lg" disabled={isSubmitting}>
          {isSubmitting ? "Sending..." : "Get Free Estimate"}
        </Button>
        
        <p className="text-xs text-center text-text-muted mt-4">
          We respect your privacy. No spam, ever.
        </p>
      </form>
    </div>
  );
}