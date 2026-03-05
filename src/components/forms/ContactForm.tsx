"use client";

import { useState } from "react";
import { Button } from "@/components/ui/Button";
import { Mail, Phone, MapPin, CheckCircle2, Loader2 } from "lucide-react";

export default function ContactForm() {
  const [step, setStep] = useState(1);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
    service: "Lawn Mowing",
    message: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (step < 3) {
      setStep(step + 1);
      return;
    }

    setIsSubmitting(true);
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      if (res.ok) setIsSuccess(true);
    } catch (err) {
      console.error(err);
    } finally {
      setIsSubmitting(false);
    }
  };

  const goBack = () => setStep(step - 1);

  if (isSuccess) {
    return (
      <div className="bg-white p-10 rounded-2xl shadow-card text-center max-w-lg mx-auto">
        <CheckCircle2 className="w-16 h-16 text-green-500 mx-auto mb-6" />
        <h3 className="font-heading font-bold text-2xl text-primary mb-2">Message Sent!</h3>
        <p className="text-text-muted mb-6">
          Thank you for contacting Mountain View Landscaping. We will review your request and get back to you within 24 hours.
        </p>
        <Button variant="outline" onClick={() => window.location.reload()}>
          Send Another
        </Button>
      </div>
    );
  }

  return (
    <div className="bg-white p-8 rounded-2xl shadow-card max-w-2xl mx-auto">
      {/* Progress Bar */}
      <div className="w-full h-1 bg-gray-100 mb-8 rounded-full overflow-hidden">
        <div 
          className="h-full bg-primary transition-all duration-300 ease-out"
          style={{ width: `${(step / 3) * 100}%` }}
        />
      </div>

      <form onSubmit={handleSubmit}>
        <input type="text" name="_gotcha" className="hidden" tabIndex={-1} autoComplete="off" />

        {/* Step 1: Contact Info */}
        {step === 1 && (
          <div className="space-y-4 animate-in fade-in slide-in-from-bottom-4 duration-500">
            <h3 className="text-xl font-bold text-primary mb-4">Contact Information</h3>
            <div>
              <label htmlFor="name" className="block text-xs font-bold text-secondary uppercase mb-2">Full Name</label>
              <input 
                type="text" 
                id="name" 
                name="name"
                required
                value={formData.name}
                onChange={handleChange}
                className="w-full bg-background border border-gray-300 rounded-md p-3 focus:border-primary focus:ring-1 focus:ring-primary outline-none"
                placeholder="e.g. Jane Doe"
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-xs font-bold text-secondary uppercase mb-2">Email Address</label>
              <input 
                type="email" 
                id="email" 
                name="email"
                required
                value={formData.email}
                onChange={handleChange}
                className="w-full bg-background border border-gray-300 rounded-md p-3 focus:border-primary focus:ring-1 focus:ring-primary outline-none"
                placeholder="jane@example.com"
              />
            </div>
            <div>
              <label htmlFor="phone" className="block text-xs font-bold text-secondary uppercase mb-2">Phone Number</label>
              <input 
                type="tel" 
                id="phone" 
                name="phone"
                required
                value={formData.phone}
                onChange={handleChange}
                className="w-full bg-background border border-gray-300 rounded-md p-3 focus:border-primary focus:ring-1 focus:ring-primary outline-none"
                placeholder="(512) 555-0123"
              />
            </div>
          </div>
        )}

        {/* Step 2: Service Details */}
        {step === 2 && (
          <div className="space-y-4 animate-in fade-in slide-in-from-bottom-4 duration-500">
            <h3 className="text-xl font-bold text-primary mb-4">Service Details</h3>
            <div>
              <label htmlFor="service" className="block text-xs font-bold text-secondary uppercase mb-2">Service Type</label>
              <select 
                id="service"
                name="service"
                value={formData.service}
                onChange={handleChange}
                className="w-full bg-background border border-gray-300 rounded-md p-3 focus:border-primary focus:ring-1 focus:ring-primary outline-none"
              >
                <option value="Lawn Mowing">Lawn Mowing ($45-85/visit)</option>
                <option value="Landscape Design">Landscape Design ($500-2000)</option>
                <option value="Tree Trimming">Tree Trimming ($150-400)</option>
                <option value="Irrigation Installation">Irrigation Installation ($800-2500)</option>
                <option value="Seasonal Cleanup">Seasonal Cleanup ($200-500)</option>
              </select>
            </div>
            <div>
              <label htmlFor="address" className="block text-xs font-bold text-secondary uppercase mb-2">Service Address</label>
              <input 
                type="text" 
                id="address" 
                name="address"
                value={formData.address}
                onChange={handleChange}
                className="w-full bg-background border border-gray-300 rounded-md p-3 focus:border-primary focus:ring-1 focus:ring-primary outline-none"
                placeholder="123 Main St, Austin, TX"
              />
            </div>
            <div>
              <label htmlFor="message" className="block text-xs font-bold text-secondary uppercase mb-2">Additional Details</label>
              <textarea 
                id="message" 
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows={4}
                className="w-full bg-background border border-gray-300 rounded-md p-3 focus:border-primary focus:ring-1 focus:ring-primary outline-none"
                placeholder="Tell us about your project..."
              />
            </div>
          </div>
        )}

        {/* Step 3: Review */}
        {step === 3 && (
          <div className="space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-500">
            <h3 className="text-xl font-bold text-primary mb-4">Review & Submit</h3>
            <div className="space-y-3 text-sm">
              <div className="flex justify-between border-b pb-2">
                <span className="text-text-muted">Name:</span>
                <span className="font-medium text-primary">{formData.name}</span>
              </div>
              <div className="flex justify-between border-b pb-2">
                <span className="text-text-muted">Email:</span>
                <span className="font-medium text-primary">{formData.email}</span>
              </div>
              <div className="flex justify-between border-b pb-2">
                <span className="text-text-muted">Phone:</span>
                <span className="font-medium text-primary">{formData.phone}</span>
              </div>
              <div className="flex justify-between border-b pb-2">
                <span className="text-text-muted">Service:</span>
                <span className="font-medium text-primary">{formData.service}</span>
              </div>
            </div>
            <p className="text-xs text-text-muted bg-gray-50 p-3 rounded-md">
              By clicking Submit, you agree to be contacted by Mountain View Landscaping regarding your quote request.
            </p>
          </div>
        )}

        {/* Navigation */}
        <div className="flex gap-4 mt-8 pt-6 border-t border-gray-100">
          {step > 1 && (
            <Button type="button" variant="ghost" onClick={goBack} className="flex-1">
              Back
            </Button>
          )}
          <Button type="submit" className="flex-1" disabled={isSubmitting}>
            {isSubmitting ? (
              <>
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                Sending...
              </>
            ) : step === 3 ? (
              "Submit Request"
            ) : (
              "Continue"
            )}
          </Button>
        </div>
      </form>
    </div>
  );
}