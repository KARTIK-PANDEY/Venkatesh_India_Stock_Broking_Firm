"use client";

import { useState } from "react";
import { Mail, Phone, MapPin, Clock, Send, ShieldCheck, User, Building2, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { COMPANY_INFO, BRANCHES } from "@/lib/constants";
import { AccessibleCaptcha } from "@/components/ui/AccessibleCaptcha";

export default function ContactPage() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [mobile, setMobile] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  
  const [mobileError, setMobileError] = useState("");
  const [captchaInput, setCaptchaInput] = useState("");
  const [captchaCode, setCaptchaCode] = useState("");
  const [captchaError, setCaptchaError] = useState("");
  const [success, setSuccess] = useState(false);

  const handleMobileChange = (val: string) => {
    const digitsOnly = val.replace(/[^0-9]/g, "").slice(0, 10);
    setMobile(digitsOnly);

    if (val && /[^0-9]/.test(val)) {
      setMobileError("Mobile number can only contain numeric digits.");
    } else if (digitsOnly && digitsOnly.length < 10) {
      setMobileError("Mobile number must be exactly 10 numeric digits.");
    } else {
      setMobileError("");
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Final validation checks
    if (/[a-zA-Z]/.test(mobile)) {
      setMobileError("Mobile number cannot contain letters.");
      return;
    }
    if (mobile.replace(/[^0-9]/g, "").length < 10) {
      setMobileError("Mobile number must be at least 10 digits.");
      return;
    }
    if (mobileError) {
      return;
    }

    // Accessible CAPTCHA validation
    if (!captchaInput.trim() || captchaInput.trim().toUpperCase() !== captchaCode.trim().toUpperCase()) {
      setCaptchaError("Incorrect verification code. Please check the image or use the audio button to listen to the code.");
      return;
    }
    setCaptchaError("");

    setSuccess(true);
    // Reset form states
    setName("");
    setEmail("");
    setMobile("");
    setSubject("");
    setMessage("");
    setMobileError("");
    setCaptchaInput("");
    setCaptchaError("");

    setTimeout(() => {
      setSuccess(false);
    }, 5000);
  };

  return (
    <div className="bg-background font-body">
      {/* Hero Header */}
      <div className="bg-gradient-to-br from-brand-navy via-brand-blue to-primary text-white py-16 md:py-24">
        <div className="container mx-auto px-4 text-center">
          <nav className="text-accent text-sm font-bold uppercase tracking-widest mb-4">
            Home &gt; Contact Us
          </nav>
          <h1 className="text-4xl md:text-6xl font-display leading-tight">Get in Touch</h1>
          <p className="text-accent text-lg mt-4 max-w-2xl mx-auto">
            Have questions about our services or need support? Our team in Raipur is here to help you.
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-16 md:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">

          {/* Left: Contact Information */}
          <div className="space-y-12">
            <div>
              <h2 className="text-3xl font-display text-foreground mb-8">Contact Information</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="p-6 bg-muted/40 rounded-2xl border border-border/50 transition-all hover:shadow-md">
                  <MapPin className="w-8 h-8 text-primary mb-4" aria-hidden="true" />
                  <h3 className="font-bold text-foreground mb-2">Registered Office</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {COMPANY_INFO.address}
                  </p>
                </div>
                <div className="p-6 bg-muted/40 rounded-2xl border border-border/50 transition-all hover:shadow-md">
                  <Phone className="w-8 h-8 text-primary mb-4" aria-hidden="true" />
                  <h3 className="font-bold text-foreground mb-2">Call Us</h3>
                  <p className="text-sm text-muted-foreground mb-1">Office: {COMPANY_INFO.phones[0]}</p>
                  <p className="text-sm text-muted-foreground">Office: {COMPANY_INFO.phones[1]}</p>
                </div>
                <div className="p-6 bg-muted/40 rounded-2xl border border-border/50 transition-all hover:shadow-md">
                  <Mail className="w-8 h-8 text-primary mb-4" aria-hidden="true" />
                  <h3 className="font-bold text-foreground mb-2">Email Us</h3>
                  <p className="text-sm text-muted-foreground mb-1">
                    <a href={`mailto:${COMPANY_INFO.email}`} aria-label={`Email us at ${COMPANY_INFO.email}`} className="inline-flex items-center min-h-[24px] hover:underline">{COMPANY_INFO.email}</a>
                  </p>
                  <p className="text-sm text-muted-foreground mb-1">
                    <a href={`mailto:${COMPANY_INFO.email2}`} aria-label={`Email us at ${COMPANY_INFO.email2}`} className="inline-flex items-center min-h-[24px] hover:underline">{COMPANY_INFO.email2}</a>
                  </p>
                  <p className="text-sm text-muted-foreground">
                    Grievance: <a href={`mailto:${COMPANY_INFO.grievance.email1}`} aria-label={`Email grievance desk at ${COMPANY_INFO.grievance.email1}`} className="inline-flex items-center min-h-[24px] hover:underline">{COMPANY_INFO.grievance.email1}</a>
                  </p>
                </div>
                <div className="p-6 bg-muted/40 rounded-2xl border border-border/50 transition-all hover:shadow-md">
                  <Clock className="w-8 h-8 text-primary mb-4" aria-hidden="true" />
                  <h3 className="font-bold text-foreground mb-2">Office Hours</h3>
                  <p className="text-sm text-muted-foreground">Mon-Fri: 9:00 AM – 6:30 PM</p>
                  <p className="text-sm text-muted-foreground">Sat: 9:00 AM – 4:00 PM</p>
                </div>
              </div>
            </div>

            {/* Compliance Section */}
            <div className="p-8 bg-muted/40 border border-border/50 text-foreground rounded-3xl shadow-sm relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-background/5 rounded-full -translate-y-1/2 translate-x-1/2 blur-2xl"></div>
              <h3 className="text-xl font-display mb-6 flex items-center gap-2 text-primary">
                <ShieldCheck className="w-6 h-6" aria-hidden="true" /> Compliance & Management
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <User className="w-5 h-5 text-accent" aria-hidden="true" />
                    <div>
                      <p className="text-[10px] uppercase font-bold text-accent">Compliance Officer</p>
                      <p className="font-bold text-foreground mb-3">{COMPANY_INFO.compliance.name}</p>
                      <p className="text-sm text-muted-foreground mb-1">{COMPANY_INFO.compliance.email}</p>
                      <p className="text-sm text-muted-foreground mb-1">{COMPANY_INFO.compliance.phone}</p>
                    </div>
                  </div>
                </div>
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <User className="w-5 h-5 text-accent" aria-hidden="true" />
                    <div>
                      <p className="text-[10px] uppercase font-bold text-accent">CEO / Managing Director</p>
                      <p className="font-bold text-foreground mb-3">{COMPANY_INFO.ceo.name}</p>
                      <p className="text-sm text-muted-foreground mb-1">{COMPANY_INFO.ceo.email}</p>
                      <p className="text-sm text-muted-foreground mb-1">{COMPANY_INFO.ceo.phone}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Branch Offices */}
            <div>
              <h2 className="text-2xl font-display text-foreground mb-6">Our Branch Network</h2>
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-6 list-none p-0 m-0">
                {BRANCHES.map((branch, i) => (
                  <li key={i} className="p-6 bg-background border border-border/50 rounded-xl shadow-sm hover:border-primary transition-colors">
                    <div className="flex items-center gap-2 mb-3 text-foreground">
                      <Building2 className="w-5 h-5" aria-hidden="true" />
                      <h3 className="font-bold">{branch.city} Branch</h3>
                    </div>
                    <p className="text-xs text-muted-foreground leading-relaxed mb-3">{branch.address}</p>
                    <div className="flex flex-col gap-1.5 text-xs font-bold text-primary">
                      <a href={`tel:${branch.phone}`} aria-label={`Call ${branch.city} branch at ${branch.phone}`} className="inline-flex items-center gap-1 min-h-[24px] hover:underline">
                        <Phone className="w-3 h-3" aria-hidden="true" /> {branch.phone}
                      </a>
                      {branch.email && (
                        <a href={`mailto:${branch.email}`} aria-label={`Email ${branch.city} branch at ${branch.email}`} className="inline-flex items-center gap-1 min-h-[24px] hover:underline">
                          <Mail className="w-3 h-3" aria-hidden="true" /> {branch.email}
                        </a>
                      )}
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Right: Contact Form */}
          <div className="lg:sticky lg:top-24 h-fit bg-muted/40 p-8 md:p-12 rounded-[2.5rem] border border-border/50 shadow-sm">
            <h2 className="text-3xl font-display text-foreground mb-2">Send us a Message</h2>
            <p className="text-muted-foreground mb-10">We&apos;ll get back to you within 24 business hours.</p>

            {success ? (
              <div className="p-6 bg-emerald-500/10 border border-emerald-500/30 rounded-2xl space-y-3 text-center">
                <CheckCircle2 className="w-12 h-12 text-emerald-700 dark:text-emerald-400 mx-auto" aria-hidden="true" />
                <h3 className="text-lg font-bold text-foreground">Message Sent!</h3>
                <p className="text-sm text-muted-foreground">Thank you for reaching out. We will get back to you shortly.</p>
              </div>
            ) : (
              <>
                <p className="mb-4 text-sm text-muted-foreground">Fields marked with <span aria-hidden="true">*</span> <span className="sr-only">asterisk</span> are required.</p>
                <form className="space-y-6" onSubmit={handleSubmit}>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label htmlFor="contact-name" className="text-xs font-bold uppercase tracking-widest text-muted-foreground flex gap-1">
                        Full Name <span aria-hidden="true">*</span><span className="sr-only">(required)</span>
                      </label>
                      <input 
                        id="contact-name" 
                        name="name" 
                        type="text" 
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        placeholder="John Doe" 
                        autoComplete="name" 
                        required 
                        aria-required="true" 
                        className="w-full bg-background border border-border/50 rounded-lg h-12 px-4 focus:ring-2 focus:ring-brand-mid outline-hidden transition-all text-foreground" 
                      />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="contact-email" className="text-xs font-bold uppercase tracking-widest text-muted-foreground flex gap-1">
                        Email Address <span aria-hidden="true">*</span><span className="sr-only">(required)</span>
                      </label>
                      <input 
                        id="contact-email" 
                        name="email" 
                        type="email" 
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="john@example.com" 
                        autoComplete="email" 
                        required 
                        aria-required="true" 
                        className="w-full bg-background border border-border/50 rounded-lg h-12 px-4 focus:ring-2 focus:ring-brand-mid outline-hidden transition-all text-foreground" 
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label htmlFor="contact-mobile" className="text-xs font-bold uppercase tracking-widest text-muted-foreground flex gap-1">
                        Mobile Number <span aria-hidden="true">*</span><span className="sr-only">(required)</span>
                      </label>
                      <input 
                        id="contact-mobile" 
                        name="mobile" 
                        type="tel" 
                        inputMode="numeric"
                        pattern="[0-9]*"
                        maxLength={10}
                        value={mobile}
                        onChange={(e) => handleMobileChange(e.target.value)}
                        placeholder="10-digit mobile number" 
                        autoComplete="tel" 
                        required 
                        aria-required="true" 
                        aria-describedby="mobile-error mobile-hint" 
                        aria-invalid={!!mobileError}
                        className={`w-full bg-background border rounded-lg h-12 px-4 focus:ring-2 focus:ring-primary outline-hidden transition-all text-foreground font-medium ${
                          mobileError ? "border-red-500 focus:ring-red-500" : "border-border/50"
                        }`} 
                      />
                      {mobileError ? (
                        <p id="mobile-error" className="text-xs text-red-600 dark:text-red-400 font-bold" aria-live="polite">{mobileError}</p>
                      ) : (
                        <p id="mobile-hint" className="text-[11px] text-muted-foreground">Please enter a valid 10-digit mobile number</p>
                      )}
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="contact-subject" className="text-xs font-bold uppercase tracking-widest text-muted-foreground flex gap-1">
                        Subject <span aria-hidden="true">*</span><span className="sr-only">(required)</span>
                      </label>
                      <select 
                        id="contact-subject" 
                        name="subject" 
                        value={subject}
                        onChange={(e) => setSubject(e.target.value)}
                        required 
                        aria-required="true" 
                        className="w-full bg-background border border-border/50 rounded-lg h-12 px-4 focus:ring-2 focus:ring-brand-mid outline-hidden appearance-none transition-all text-foreground"
                      >
                        <option value="">Select a subject...</option>
                        <option value="General Enquiry">General Enquiry</option>
                        <option value="Account Opening">Account Opening</option>
                        <option value="Product Support">Product Support</option>
                        <option value="Grievance / Complaint">Grievance / Complaint</option>
                      </select>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="contact-message" className="text-xs font-bold uppercase tracking-widest text-muted-foreground flex gap-1">
                      Message <span aria-hidden="true">*</span><span className="sr-only">(required)</span>
                    </label>
                    <textarea 
                      id="contact-message" 
                      name="message" 
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      required 
                      aria-required="true" 
                      rows={5} 
                      placeholder="How can we help you?" 
                      className="w-full bg-background border border-border/50 rounded-lg p-4 focus:ring-2 focus:ring-brand-mid outline-hidden transition-all resize-none text-foreground"
                    ></textarea>
                  </div>

                  <AccessibleCaptcha
                    idPrefix="contact"
                    value={captchaInput}
                    onChange={(val) => {
                      setCaptchaInput(val);
                      if (captchaError) setCaptchaError("");
                    }}
                    onCodeChange={(code) => setCaptchaCode(code)}
                    error={captchaError}
                  />

                  <Button 
                    type="submit" 
                    disabled={!!mobileError || !mobile || !name || !email || !subject || !message || !captchaInput.trim()}
                    className="w-full bg-primary hover:bg-primary/90 text-primary-foreground h-14 rounded-full text-lg font-bold shadow-lg group transition-all disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer"
                  >
                    Send Message <Send className="ml-2 w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" aria-hidden="true" />
                  </Button>

                  <p className="text-center text-[10px] text-muted-foreground italic">
                    By submitting this form, you agree to be contacted by our representatives.
                  </p>
                </form>
              </>
            )}
          </div>

        </div>
      </div>
    </div>
  );
}
