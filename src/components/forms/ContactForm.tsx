"use client";

import { useState } from "react";
import { Button } from "@/components/ui/Button";
import { cn } from "@/lib/utils";
import { CheckCircle2, Loader2, AlertCircle } from "lucide-react";

export function ContactForm() {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
    service: "",
    budget: "",
    message: "",
    _gotcha: "",
  });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const validateStep = () => {
    const newErrors: Record<string, string> = {};

    if (step === 1) {
      if (!formData.name) newErrors.name = "Name is required";
      if (!formData.email) newErrors.email = "Email is required";
      else if (!/\S+@\S+\.\S+/.test(formData.email))
        newErrors.email = "Email is invalid";
      if (!formData.phone) newErrors.phone = "Phone is required";
    }

    if (step === 2) {
      if (!formData.service) newErrors.service = "Please select a service";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleNext = () => {
    if (validateStep()) setStep(step + 1);
  };

  const handleBack = () => {
    setStep(step - 1);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateStep()) return;

    setIsSubmitting(true);
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (res.ok) {
        setIsSuccess(true);
      } else {
        setErrors({ form: "Something went wrong. Please try again." });
      }
    } catch (err) {
      setErrors({ form: "Network error. Please try again." });
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isSuccess) {
    return (
      <div className="py-12 text-center">
        <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6 text-green-600">
          <CheckCircle2 className="w-10 h-10" />
        </div>
        <h3 className="text-2xl font-bold text-primary mb-2">
          Thank you for contacting us!
        </h3>
        <p className="text-muted">
          We have received your inquiry and will be in touch within 24 hours.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit}>
      {/* Progress Bar */}
      <div className="w-full h-2 bg-gray-200 rounded-full mb-8">
        <div
          className="h-full bg-primary transition-all duration-300 rounded-full"
          style={{ width: `${(step / 3) * 100}%` }}
        />
      </div>

      {errors.form && (
        <div className="mb-6 p-4 bg-red-50 border border-red-200 text-red-700 rounded-lg flex items-start gap-3">
          <AlertCircle className="w-5 h-5 mt-0.5 shrink-0" />
          {errors.form}
        </div>
      )}

      {/* Step 1: Contact Info */}
      {step === 1 && (
        <div className="space-y-6 animate-in fade-in slide-in-from-bottom-2 duration-300">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Full Name
              </label>
              <input
                type="text"
                className={cn(
                  "w-full p-3 border rounded-lg focus:ring-2 focus:ring-primary outline-none transition-all",
                  errors.name ? "border-red-500" : "border-gray-300"
                )}
                placeholder="John Doe"
                value={formData.name}
                onChange={(e) =>
                  setFormData({ ...formData, name: e.target.value })
                }
              />
              {errors.name && (
                <p className="text-red-500 text-sm mt-1">{errors.name}</p>
              )}
            </div>
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Phone Number
              </label>
              <input
                type="tel"
                className={cn(
                  "w-full p-3 border rounded-lg focus:ring-2 focus:ring-primary outline-none transition-all",
                  errors.phone ? "border-red-500" : "border-gray-300"
                )}
                placeholder="(512) 555-0147"
                value={formData.phone}
                onChange={(e) =>
                  setFormData({ ...formData, phone: e.target.value })
                }
              />
              {errors.phone && (
                <p className="text-red-500 text-sm mt-1">{errors.phone}</p>
              )}
            </div>
          </div>

          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">
              Email Address
            </label>
            <input
              type="email"
              className={cn(
                "w-full p-3 border rounded-lg focus:ring-2 focus:ring-primary outline-none transition-all",
                errors.email ? "border-red-500" : "border-gray-300"
              )}
              placeholder="john@example.com"
              value={formData.email}
              onChange={(e) =>
                setFormData({ ...formData, email: e.target.value })
              }
            />
            {errors.email && (
              <p className="text-red-500 text-sm mt-1">{errors.email}</p>
            )}
          </div>
          
          {/* Honeypot */}
          <input type="text" name="_gotcha" className="hidden" tabIndex={-1} autoComplete="off" value={formData._gotcha} onChange={e => setFormData({...formData, _gotcha: e.target.value})} />

          <div className="flex justify-end">
            <Button type="button" variant="primary" onClick={handleNext}>
              Next Step
            </Button>
          </div>
        </div>
      )}

      {/* Step 2: Project Details */}
      {step === 2 && (
        <div className="space-y-6 animate-in fade-in slide-in-from-bottom-2 duration-300">
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">
              Service Type
            </label>
            <select
              className={cn(
                "w-full p-3 border rounded-lg focus:ring-2 focus:ring-primary outline-none bg-white transition-all",
                errors.service ? "border-red-500" : "border-gray-300"
              )}
              value={formData.service}
              onChange={(e) =>
                setFormData({ ...formData, service: e.target.value })
              }
            >
              <option value="">Select a service...</option>
              <option value="Lawn Mowing">Lawn Mowing</option>
              <option value="Landscape Design">Landscape Design</option>
              <option value="Tree Trimming">Tree Trimming</option>
              <option value="Irrigation">Irrigation Installation</option>
              <option value="Seasonal Cleanup">Seasonal Cleanup</option>
            </select>
            {errors.service && (
              <p className="text-red-500 text-sm mt-1">{errors.service}</p>
            )}
          </div>

          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">
              Project Address
            </label>
            <input
              type="text"
              className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary outline-none transition-all"
              placeholder="123 Main St, Austin, TX"
              value={formData.address}
              onChange={(e) =>
                setFormData({ ...formData, address: e.target.value })
              }
            />
          </div>

          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">
              Estimated Budget
            </label>
            <select
              className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary outline-none bg-white transition-all"
              value={formData.budget}
              onChange={(e) =>
                setFormData({ ...formData, budget: e.target.value })
              }
            >
              <option value="">Select budget range...</option>
              <option value="Under $1,000">Under $1,000</option>
              <option value="$1,000 - $5,000">$1,000 - $5,000</option>
              <option value="$5,000 - $10,000">$5,000 - $10,000</option>
              <option value="$10,000+">$10,000+</option>
            </select>
          </div>

          <div className="flex justify-between">
            <Button type="button" variant="ghost" onClick={handleBack}>
              Back
            </Button>
            <Button type="button" variant="primary" onClick={handleNext}>
              Next Step
            </Button>
          </div>
        </div>
      )}

      {/* Step 3: Message */}
      {step === 3 && (
        <div className="space-y-6 animate-in fade-in slide-in-from-bottom-2 duration-300">
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">
              Additional Details
            </label>
            <textarea
              rows={5}
              className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary outline-none transition-all resize-none"
              placeholder="Tell us more about your project goals..."
              value={formData.message}
              onChange={(e) =>
                setFormData({ ...formData, message: e.target.value })
              }
            />
          </div>

          <div className="flex justify-between">
            <Button type="button" variant="ghost" onClick={handleBack}>
              Back
            </Button>
            <Button
              type="submit"
              variant="accent"
              disabled={isSubmitting}
              className="min-w-[140px]"
            >
              {isSubmitting ? (
                <>
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                  Sending...
                </>
              ) : (
                "Send Message"
              )}
            </Button>
          </div>
        </div>
      )}
    </form>
  );
}
export default ContactForm;