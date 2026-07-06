"use client";

import { useState } from "react";
import PageHero from "@/components/layout/PageHero";
import { Briefcase, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

const OPEN_POSITIONS = [
  {
    title: "Equity Dealer",
    description: "Trade execution, client advisory, and market analysis for the equity segment. NISM certifications preferred.",
    location: "Raipur Office",
    type: "Full-Time",
  },
  {
    title: "Insurance Agent / Wealth Adviser",
    description: "Distribution of life and general insurance products, mutual funds, and custom financial planning.",
    location: "Raipur & Bhilai",
    type: "Full-Time / Agent",
  },
  {
    title: "Tele Caller & Customer Relationship Executive",
    description: "Client outreach, onboarding support, and resolving customer queries regarding demat accounts.",
    location: "Raipur Office",
    type: "Full-Time",
  },
  {
    title: "Market Executive",
    description: "Field marketing, strategic alliance acquisition, sub-broker partnerships, and client relationship building.",
    location: "Chhattisgarh Region",
    type: "Full-Time",
  },
];

export default function CareersPage() {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    qualification: "",
    address: "",
    city: "",
    mobile: "",
    email: "",
    experience: "Fresher",
    additionalInfo: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({
        name: "",
        qualification: "",
        address: "",
        city: "",
        mobile: "",
        email: "",
        experience: "Fresher",
        additionalInfo: "",
      });
      alert("Application submitted successfully! Our HR team will get in touch soon.");
    }, 1000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="bg-background min-h-screen">
      <PageHero
        title="Careers"
        subtitle="We are always searching for dynamic individuals who build their careers with talent, dedication, and professional excellence."
        breadcrumbs={[{ label: "Careers" }]}
      />

      <div className="container mx-auto px-4 max-w-7xl py-16 md:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">

          {/* Left: Open Positions */}
          <div className="lg:col-span-7 space-y-8">
            <div>
              <h2 className="text-3xl font-display font-bold text-foreground mb-4">Open Positions</h2>
              <p className="text-muted-foreground text-base max-w-2xl">
                Explore our current openings and find your fit in a leading wealth and broking firm.
              </p>
            </div>

            <div className="grid gap-6">
              {OPEN_POSITIONS.map((pos, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                  className="p-6 bg-muted/30 border border-border/50 rounded-2xl hover:border-primary/40 hover:shadow-md transition-all group"
                >
                  <div className="flex items-start justify-between gap-4 flex-wrap sm:flex-nowrap">
                    <div className="flex items-start gap-4">
                      <div className="p-3 bg-primary/10 rounded-xl text-primary mt-1 group-hover:scale-110 transition-transform">
                        <Briefcase className="w-5 h-5" />
                      </div>
                      <div>
                        <h3 className="font-bold text-lg text-foreground mb-1 group-hover:text-primary transition-colors">
                          {pos.title}
                        </h3>
                        <p className="text-sm text-muted-foreground mb-4 leading-relaxed">
                          {pos.description}
                        </p>
                        <div className="flex items-center gap-4 text-xs font-bold uppercase tracking-wider text-muted-foreground">
                          <span className="flex items-center gap-1">📍 {pos.location}</span>
                          <span className="flex items-center gap-1">🕒 {pos.type}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Corporate Culture / Perks Banner */}
            <div className="bg-gradient-to-br from-brand-blue to-brand-navy rounded-3xl p-8 text-white relative overflow-hidden shadow-lg">
              <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 rounded-full blur-2xl"></div>
              <h3 className="text-xl font-display font-bold mb-4">Why Shri Venkatesh?</h3>
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm font-medium text-white/95">
                <li className="flex items-center gap-2">✨ Collaborative workspace culture</li>
                <li className="flex items-center gap-2">📈 Professional growth path</li>
                <li className="flex items-center gap-2">🏅 Incentives & performance bonuses</li>
                <li className="flex items-center gap-2">🛡️ Complete regulatory compliance training</li>
              </ul>
            </div>
          </div>

          {/* Right: Resume Form */}
          <div className="lg:col-span-5 lg:sticky lg:top-24 bg-muted/40 p-8 md:p-10 rounded-3xl border border-border/50 shadow-xs">
            <h2 className="text-2xl font-display font-bold text-foreground mb-2">Drop Your Resume</h2>
            <p className="text-sm text-muted-foreground mb-8">
              Fill in your details and apply today. Our recruitment team will evaluate and reach out.
            </p>

            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="space-y-2">
                <label className="text-xs font-bold uppercase tracking-widest text-muted-foreground">
                  Applicant Name *
                </label>
                <input
                  type="text"
                  name="name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Your Full Name"
                  className="w-full bg-background border border-border/50 rounded-lg h-11 px-4 focus:ring-2 focus:ring-primary outline-hidden transition-all text-foreground"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase tracking-widest text-muted-foreground">
                    Qualification *
                  </label>
                  <input
                    type="text"
                    name="qualification"
                    required
                    value={formData.qualification}
                    onChange={handleChange}
                    placeholder="e.g. MBA, B.Com, CA"
                    className="w-full bg-background border border-border/50 rounded-lg h-11 px-4 focus:ring-2 focus:ring-primary outline-hidden transition-all text-foreground"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase tracking-widest text-muted-foreground">
                    Experience *
                  </label>
                  <select
                    name="experience"
                    value={formData.experience}
                    onChange={handleChange}
                    className="w-full bg-background border border-border/50 rounded-lg h-11 px-4 focus:ring-2 focus:ring-primary outline-hidden transition-all text-foreground"
                  >
                    <option value="Fresher">Fresher</option>
                    <option value="1-2 Years">1-2 Years</option>
                    <option value="3-5 Years">3-5 Years</option>
                    <option value="5+ Years">5+ Years</option>
                  </select>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase tracking-widest text-muted-foreground">
                    Mobile Number *
                  </label>
                  <input
                    type="tel"
                    name="mobile"
                    required
                    pattern="[0-9]{10}"
                    value={formData.mobile}
                    onChange={handleChange}
                    placeholder="10-digit number"
                    className="w-full bg-background border border-border/50 rounded-lg h-11 px-4 focus:ring-2 focus:ring-primary outline-hidden transition-all text-foreground"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase tracking-widest text-muted-foreground">
                    Email ID *
                  </label>
                  <input
                    type="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="email@example.com"
                    className="w-full bg-background border border-border/50 rounded-lg h-11 px-4 focus:ring-2 focus:ring-primary outline-hidden transition-all text-foreground"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase tracking-widest text-muted-foreground">
                    City *
                  </label>
                  <input
                    type="text"
                    name="city"
                    required
                    value={formData.city}
                    onChange={handleChange}
                    placeholder="Raipur, Bilaspur, etc."
                    className="w-full bg-background border border-border/50 rounded-lg h-11 px-4 focus:ring-2 focus:ring-primary outline-hidden transition-all text-foreground"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase tracking-widest text-muted-foreground">
                    Address *
                  </label>
                  <input
                    type="text"
                    name="address"
                    required
                    value={formData.address}
                    onChange={handleChange}
                    placeholder="Current Address"
                    className="w-full bg-background border border-border/50 rounded-lg h-11 px-4 focus:ring-2 focus:ring-primary outline-hidden transition-all text-foreground"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-xs font-bold uppercase tracking-widest text-muted-foreground">
                  Additional Information
                </label>
                <textarea
                  name="additionalInfo"
                  rows={3}
                  value={formData.additionalInfo}
                  onChange={handleChange}
                  placeholder="Tell us about your background or certifications..."
                  className="w-full bg-background border border-border/50 rounded-lg p-3 focus:ring-2 focus:ring-primary outline-hidden transition-all text-foreground resize-none"
                ></textarea>
              </div>

              <Button
                type="submit"
                disabled={submitted}
                className="w-full h-12 rounded-full font-bold shadow-lg mt-3 flex items-center justify-center gap-2 text-white"
              >
                {submitted ? "Submitting..." : (
                  <>
                    Submit Application <Send className="w-4 h-4" />
                  </>
                )}
              </Button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
