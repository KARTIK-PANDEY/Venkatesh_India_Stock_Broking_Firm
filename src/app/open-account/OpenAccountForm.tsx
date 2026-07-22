"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";

export default function OpenAccountForm() {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    name: "",
    mobile: "",
    city: "",
    services: [] as string[],
    riskAgree: false,
  });

  const [mobileError, setMobileError] = useState("");

  const handleMobileChange = (val: string) => {
    // Only accept numeric digits up to 10 characters
    const digitsOnly = val.replace(/[^0-9]/g, "").slice(0, 10);
    setFormData(prev => ({ ...prev, mobile: digitsOnly }));

    if (val && /[^0-9]/.test(val)) {
      setMobileError("Mobile number can only contain numeric digits.");
    } else if (digitsOnly && digitsOnly.length < 10) {
      setMobileError("Mobile number must be exactly 10 numeric digits.");
    } else {
      setMobileError("");
    }
  };

  const handleServiceChange = (service: string) => {
    setFormData(prev => ({
      ...prev,
      services: prev.services.includes(service)
        ? prev.services.filter(s => s !== service)
        : [...prev.services, service]
    }));
  };

  const handleSubmitStep1 = (e: React.FormEvent) => {
    e.preventDefault();
    if (formData.mobile.length !== 10) {
      setMobileError("Mobile number must be exactly 10 numeric digits.");
      return;
    }
    if (mobileError) return;
    setStep(2);
  };

  const handleFinalSubmit = () => {
    alert("Application submitted successfully!");
    setStep(1);
    setFormData({ name: "", mobile: "", city: "", services: [], riskAgree: false });
    setMobileError("");
  };

  return (
    <>
      <ol aria-label="Form progress" className="flex gap-4 mb-8 text-sm font-medium border-b border-border/50 pb-4">
        <li aria-current={step === 1 ? "step" : undefined} className={step === 1 ? "text-primary font-bold" : "text-muted-foreground"}>
          1. Your Details
        </li>
        <li aria-current={step === 2 ? "step" : undefined} className={step === 2 ? "text-primary font-bold" : "text-muted-foreground"}>
          2. Review
        </li>
      </ol>

      {step === 1 && (
        <form className="space-y-6" onSubmit={handleSubmitStep1}>
          <p className="text-sm text-muted-foreground mb-4">Fields marked with <span aria-hidden="true">*</span> <span className="sr-only">asterisk</span> are required.</p>
          
          <div className="space-y-2">
            <label htmlFor="oa-name" className="text-xs font-bold uppercase tracking-widest text-muted-foreground flex gap-1">
              Full Name <span aria-hidden="true">*</span><span className="sr-only">(required)</span>
            </label>
            <input 
              id="oa-name" 
              type="text" 
              value={formData.name} 
              onChange={e => setFormData({...formData, name: e.target.value})} 
              placeholder="Your Name" 
              autoComplete="name" 
              className="w-full bg-muted/40 border border-border/50 rounded-lg h-12 px-4 focus:ring-2 focus:ring-primary text-foreground outline-hidden font-medium" 
              required 
              aria-required="true" 
            />
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <label htmlFor="oa-mobile" className="text-xs font-bold uppercase tracking-widest text-muted-foreground flex gap-1">
                Mobile Number <span aria-hidden="true">*</span><span className="sr-only">(required)</span>
              </label>
              <input 
                id="oa-mobile" 
                type="tel" 
                inputMode="numeric"
                pattern="[0-9]*"
                maxLength={10}
                value={formData.mobile} 
                onChange={e => handleMobileChange(e.target.value)} 
                placeholder="10-digit mobile number" 
                autoComplete="tel" 
                aria-describedby="oa-mobile-error oa-mobile-hint" 
                aria-invalid={!!mobileError}
                className={`w-full bg-muted/40 border rounded-lg h-12 px-4 focus:ring-2 focus:ring-primary text-foreground outline-hidden font-medium ${
                  mobileError ? "border-red-500 focus:ring-red-500" : "border-border/50"
                }`} 
                required 
                aria-required="true" 
              />
              {mobileError ? (
                <p id="oa-mobile-error" className="text-xs text-red-600 font-bold" aria-live="polite">
                  {mobileError}
                </p>
              ) : (
                <p id="oa-mobile-hint" className="text-[11px] text-muted-foreground">
                  Please enter a valid 10-digit Indian mobile number
                </p>
              )}
            </div>
            
            <div className="space-y-2">
              <label htmlFor="oa-city" className="text-xs font-bold uppercase tracking-widest text-muted-foreground flex gap-1">
                City / Location <span aria-hidden="true">*</span><span className="sr-only">(required)</span>
              </label>
              <input 
                id="oa-city" 
                type="text" 
                value={formData.city} 
                onChange={e => setFormData({...formData, city: e.target.value})} 
                placeholder="Raipur" 
                autoComplete="address-level2" 
                className="w-full bg-muted/40 border border-border/50 rounded-lg h-12 px-4 focus:ring-2 focus:ring-primary text-foreground outline-hidden font-medium" 
                required 
                aria-required="true" 
              />
            </div>
          </div>

          <fieldset className="space-y-2 border-0 p-0 m-0">
            <legend className="text-xs font-bold uppercase tracking-widest text-muted-foreground">Services Interested In</legend>
            <div className="grid grid-cols-2 gap-3 mt-2">
              {["Equity Trading", "Derivatives", "Mutual Funds", "IPO", "Demat Account"].map((service) => (
                <label key={service} className="flex items-center gap-2 cursor-pointer p-3 bg-muted/40 border border-border/50 rounded-lg hover:bg-muted transition-colors">
                  <input 
                    type="checkbox" 
                    checked={formData.services.includes(service)} 
                    onChange={() => handleServiceChange(service)} 
                    className="w-4 h-4 text-primary focus:ring-primary rounded-sm" 
                  />
                  <span className="text-xs font-semibold text-foreground">{service}</span>
                </label>
              ))}
            </div>
          </fieldset>

          <div className="space-y-2 pt-4">
            <div className="flex gap-3 items-start">
              <input 
                type="checkbox" 
                id="risk-agree" 
                checked={formData.riskAgree} 
                onChange={e => setFormData({...formData, riskAgree: e.target.checked})} 
                className="w-5 h-5 mt-0.5 text-primary focus:ring-primary rounded-sm shrink-0" 
                required 
                aria-required="true" 
              />
              <label htmlFor="risk-agree" className="text-xs text-muted-foreground leading-relaxed cursor-pointer font-medium">
                I have read and agree to the <span className="text-primary underline font-bold">Risk Disclosure Document</span> and consent to being contacted by Shri Venkatesh stock broker representatives.
              </label>
            </div>
          </div>
          
          <Button 
            type="submit" 
            disabled={!!mobileError || formData.mobile.length !== 10 || !formData.name || !formData.city || !formData.riskAgree}
            className="w-full bg-primary hover:bg-primary/95 text-primary-foreground h-14 rounded-full text-lg font-bold shadow-xl transition-all cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed"
          >
            Review Details →
          </Button>
          
          <p className="text-center text-[10px] text-muted-foreground uppercase font-bold tracking-widest">
            Trusted by 50,000+ Investors
          </p>
        </form>
      )}

      {step === 2 && (
        <section aria-label="Review your details before submitting" className="space-y-6 animate-in fade-in slide-in-from-right-4 duration-300">
          <h3 className="text-xl font-display text-foreground font-bold">Review Your Application</h3>
          <p className="text-sm text-muted-foreground">Please check all details carefully before submitting.</p>
          
          <div className="bg-muted/40 border border-border/50 rounded-2xl p-6 shadow-xs">
            <table className="w-full text-sm text-left">
              <caption className="sr-only">Your Application Details Summary</caption>
              <tbody>
                <tr className="border-b border-border/40 last:border-0">
                  <th scope="row" className="py-3 pr-4 font-semibold text-muted-foreground w-1/3">Full Name</th>
                  <td className="py-3 font-medium text-foreground">{formData.name}</td>
                </tr>
                <tr className="border-b border-border/40 last:border-0">
                  <th scope="row" className="py-3 pr-4 font-semibold text-muted-foreground w-1/3">Mobile Number</th>
                  <td className="py-3 font-medium text-foreground">{formData.mobile}</td>
                </tr>
                <tr className="border-b border-border/40 last:border-0">
                  <th scope="row" className="py-3 pr-4 font-semibold text-muted-foreground w-1/3">City</th>
                  <td className="py-3 font-medium text-foreground">{formData.city}</td>
                </tr>
                <tr className="border-b border-border/40 last:border-0">
                  <th scope="row" className="py-3 pr-4 font-semibold text-muted-foreground w-1/3">Services</th>
                  <td className="py-3 font-medium text-foreground">{formData.services.length > 0 ? formData.services.join(", ") : "None selected"}</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="flex gap-4">
            <Button type="button" variant="outline" onClick={() => setStep(1)} className="flex-1 h-14 rounded-full text-base font-bold">
              ← Edit Details
            </Button>
            <Button type="button" onClick={handleFinalSubmit} className="flex-1 bg-primary hover:bg-primary/95 text-primary-foreground h-14 rounded-full text-base font-bold shadow-xl">
              Confirm & Submit
            </Button>
          </div>
        </section>
      )}
    </>
  );
}
