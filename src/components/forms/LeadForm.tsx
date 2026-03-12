"use client";

import { useState } from "react";
import { Button } from "@/components/ui/Button";

export function LeadForm() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    service: "Lawn Mowing",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1000));
    
    setIsSuccess(true);
    setIsSubmitting(false);
  };

  if (isSuccess) {
    return (
      <div className="bg-primary text-white p-8 rounded-xl text-center">
        <div className="w-16 h-16 bg-accent rounded-full flex items-center justify-center mx-auto mb-4 text-primary">
          <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
          </svg>
        </div>
        <h3 className="text-2xl font-bold mb-2">Request Received!</h3>
        <p>We&apos;ll call you shortly to discuss your project.</p>
      </div>
    );
  }

  return (
    <div className="bg-white p-8 rounded-xl shadow-lg border border-gray-100">
      <h3 className="text-2xl font-bold text-primary mb-2 font-heading">
        Get a Quick Quote
      </h3>
      <p className="text-muted mb-6">
        Fill out the form below and we&apos;ll get back to you within 24 hours.
      </p>
      
      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="text"
          name="_gotcha"
          className="hidden"
          tabIndex={-1}
          autoComplete="off"
        />
        
        <div>
          <label htmlFor="lead-name" className="block text-sm font-medium text-gray-700 mb-1">
            Name
          </label>
          <input
            id="lead-name"
            required
            className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all"
            placeholder="John Doe"
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
          />
        </div>

        <div>
          <label htmlFor="lead-phone" className="block text-sm font-medium text-gray-700 mb-1">
            Phone Number
          </label>
          <input
            id="lead-phone"
            type="tel"
            required
            className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all"
            placeholder="(512) 555-0147"
            value={formData.phone}
            onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
          />
        </div>

        <div>
          <label htmlFor="lead-service" className="block text-sm font-medium text-gray-700 mb-1">
            Service Needed
          </label>
          <select
            id="lead-service"
            className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all bg-white"
            value={formData.service}
            onChange={(e) => setFormData({ ...formData, service: e.target.value })}
          >
            <option value="Lawn Mowing">Lawn Mowing</option>
            <option value="Landscape Design">Landscape Design</option>
            <option value="Tree Trimming">Tree Trimming</option>
            <option value="Irrigation">Irrigation Installation</option>
            <option value="Seasonal Cleanup">Seasonal Cleanup</option>
          </select>
        </div>

        <Button variant="primary" size="lg" className="w-full" disabled={isSubmitting}>
          {isSubmitting ? "Sending..." : "Get My Free Quote"}
        </Button>
      </form>
      
      <p className="text-xs text-gray-400 mt-4 text-center">
        By submitting, you agree to receive text messages at the number provided.
      </p>
    </div>
  );
}
export default LeadForm;