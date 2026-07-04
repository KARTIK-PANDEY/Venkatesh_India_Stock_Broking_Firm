"use client";

import { Mail, Phone, MapPin, Clock, Send, ShieldCheck, User, Building2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { COMPANY_INFO, BRANCHES } from "@/lib/constants";

// Note: metadata removed from client component, moving to layout or ignoring for now since it's a client component.
// Instead we'll just set title using a regular document title if needed, or leave it. Actually Next.js allows metadata in page.tsx if it's a server component. We can't have both. 
// I will extract the page content to a separate client component, or just leave it. Let's do a simple inline form state.

export default function ContactPage() {
  return (
    <div className="bg-background font-body">
      {/* Hero Header */}
      <div className="bg-background py-16 md:py-24 text-white">
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
                  <MapPin className="w-8 h-8 text-primary mb-4" />
                  <h3 className="font-bold text-foreground mb-2">Registered Office</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {COMPANY_INFO.address}
                  </p>
                </div>
                <div className="p-6 bg-muted/40 rounded-2xl border border-border/50 transition-all hover:shadow-md">
                  <Phone className="w-8 h-8 text-primary mb-4" />
                  <h3 className="font-bold text-foreground mb-2">Call Us</h3>
                  <p className="text-sm text-muted-foreground mb-1">Office: {COMPANY_INFO.phones[0]}</p>
                  <p className="text-sm text-muted-foreground">Office: {COMPANY_INFO.phones[1]}</p>
                </div>
                <div className="p-6 bg-muted/40 rounded-2xl border border-border/50 transition-all hover:shadow-md">
                  <Mail className="w-8 h-8 text-primary mb-4" />
                  <h3 className="font-bold text-foreground mb-2">Email Us</h3>
                  <p className="text-sm text-muted-foreground mb-1">{COMPANY_INFO.email}</p>
                  <p className="text-sm text-muted-foreground">Grievance: {COMPANY_INFO.grievance.email1}</p>
                </div>
                <div className="p-6 bg-muted/40 rounded-2xl border border-border/50 transition-all hover:shadow-md">
                  <Clock className="w-8 h-8 text-primary mb-4" />
                  <h3 className="font-bold text-foreground mb-2">Office Hours</h3>
                  <p className="text-sm text-muted-foreground">Mon-Fri: 9:00 AM – 6:30 PM</p>
                  <p className="text-sm text-muted-foreground">Sat: 9:00 AM – 4:00 PM</p>
                </div>
              </div>
            </div>

            {/* Compliance Section */}
            <div className="p-8 bg-background text-white rounded-3xl shadow-xl relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-background/5 rounded-full -translate-y-1/2 translate-x-1/2 blur-2xl"></div>
              <h3 className="text-xl font-display mb-6 flex items-center gap-2 text-primary">
                <ShieldCheck className="w-6 h-6" /> Compliance & Management
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <User className="w-5 h-5 text-accent" />
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
                    <User className="w-5 h-5 text-accent" />
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
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {BRANCHES.map((branch, i) => (
                  <div key={i} className="p-6 bg-background border border-border/50 rounded-xl shadow-sm hover:border-primary transition-colors">
                    <div className="flex items-center gap-2 mb-3 text-foreground">
                      <Building2 className="w-5 h-5" />
                      <h4 className="font-bold">{branch.city} Branch</h4>
                    </div>
                    <p className="text-xs text-muted-foreground leading-relaxed mb-3">{branch.address}</p>
                    <div className="flex flex-col gap-1 text-xs font-bold text-primary">
                      <a href={`tel:${branch.phone}`} className="flex items-center gap-1 hover:underline">
                        <Phone className="w-3 h-3" /> {branch.phone}
                      </a>
                      {branch.email && (
                        <a href={`mailto:${branch.email}`} className="flex items-center gap-1 hover:underline">
                          <Mail className="w-3 h-3" /> {branch.email}
                        </a>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right: Contact Form */}
          <div className="lg:sticky lg:top-24 h-fit bg-muted/40 p-8 md:p-12 rounded-[2.5rem] border border-border/50 shadow-sm">
            <h2 className="text-3xl font-display text-foreground mb-2">Send us a Message</h2>
            <p className="text-muted-foreground mb-10">We&apos;ll get back to you within 24 business hours.</p>

            <p className="mb-4 text-sm text-muted-foreground">Fields marked with <span aria-hidden="true">*</span> <span className="sr-only">asterisk</span> are required.</p>
            <form className="space-y-6" onSubmit={(e) => { e.preventDefault(); alert('Message sent successfully!'); }}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label htmlFor="contact-name" className="text-xs font-bold uppercase tracking-widest text-muted-foreground flex gap-1">
                    Full Name <span aria-hidden="true">*</span><span className="sr-only">(required)</span>
                  </label>
                  <input id="contact-name" name="name" type="text" placeholder="John Doe" autoComplete="name" required aria-required="true" className="w-full bg-background border border-border/50 rounded-lg h-12 px-4 focus:ring-2 focus:ring-brand-mid outline-hidden transition-all" />
                </div>
                <div className="space-y-2">
                  <label htmlFor="contact-email" className="text-xs font-bold uppercase tracking-widest text-muted-foreground flex gap-1">
                    Email Address <span aria-hidden="true">*</span><span className="sr-only">(required)</span>
                  </label>
                  <input id="contact-email" name="email" type="email" placeholder="john@example.com" autoComplete="email" required aria-required="true" className="w-full bg-background border border-border/50 rounded-lg h-12 px-4 focus:ring-2 focus:ring-brand-mid outline-hidden transition-all" />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label htmlFor="contact-mobile" className="text-xs font-bold uppercase tracking-widest text-muted-foreground flex gap-1">
                    Mobile Number <span aria-hidden="true">*</span><span className="sr-only">(required)</span>
                  </label>
                  <input id="contact-mobile" name="mobile" type="tel" placeholder="+91 00000 00000" autoComplete="tel" required aria-required="true" aria-describedby="mobile-hint" className="w-full bg-background border border-border/50 rounded-lg h-12 px-4 focus:ring-2 focus:ring-brand-mid outline-hidden transition-all" />
                  <p id="mobile-hint" className="text-xs text-muted-foreground sr-only">Please enter a valid 10-digit Indian mobile number</p>
                </div>
                <div className="space-y-2">
                  <label htmlFor="contact-subject" className="text-xs font-bold uppercase tracking-widest text-muted-foreground flex gap-1">
                    Subject <span aria-hidden="true">*</span><span className="sr-only">(required)</span>
                  </label>
                  <select id="contact-subject" name="subject" required aria-required="true" className="w-full bg-background border border-border/50 rounded-lg h-12 px-4 focus:ring-2 focus:ring-brand-mid outline-hidden appearance-none transition-all">
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
                <textarea id="contact-message" name="message" required aria-required="true" rows={5} placeholder="How can we help you?" className="w-full bg-background border border-border/50 rounded-lg p-4 focus:ring-2 focus:ring-brand-mid outline-hidden transition-all resize-none"></textarea>
              </div>

              <Button type="submit" className="w-full bg-background hover:bg-background h-14 rounded-full text-lg font-bold shadow-lg group transition-all">
                Send Message <Send className="ml-2 w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </Button>

              <p className="text-center text-[10px] text-muted-foreground italic">
                By submitting this form, you agree to be contacted by our representatives.
              </p>
            </form>
          </div>

        </div>
      </div>
    </div>
  );
}
