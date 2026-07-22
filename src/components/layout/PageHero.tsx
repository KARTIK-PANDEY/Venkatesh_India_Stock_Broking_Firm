"use client";

import Link from "next/link";
import { ChevronRight, Home } from "lucide-react";
import { motion } from "framer-motion";

interface BreadcrumbItem {
  label: string;
  href?: string;
}

interface PageHeroProps {
  title: string;
  subtitle?: string;
  breadcrumbs?: BreadcrumbItem[];
}

export default function PageHero({ title, subtitle, breadcrumbs }: PageHeroProps) {
  return (
    <div className="relative overflow-hidden bg-gradient-to-br from-brand-navy via-brand-blue to-primary/90 text-white py-16 md:py-24 border-b border-border/10">
      {/* Decorative Glows */}
      <div className="absolute top-0 right-0 w-80 h-80 bg-accent/20 rounded-full blur-[80px] -z-10 animate-pulse"></div>
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-primary/20 rounded-full blur-[80px] -z-10"></div>
      
      {/* Grid Pattern */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{ backgroundImage: 'linear-gradient(to right, white 1px, transparent 1px), linear-gradient(to bottom, white 1px, transparent 1px)', backgroundSize: '32px 32px' }}>
      </div>

      <div className="container mx-auto px-4 max-w-7xl relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="max-w-3xl"
        >
          {/* Breadcrumbs */}
          {breadcrumbs && breadcrumbs.length > 0 && (
            <nav aria-label="Breadcrumb" className="mb-6">
              <ol className="flex flex-wrap items-center gap-1.5 text-xs md:text-sm font-bold uppercase tracking-wider text-accent">
                <li className="flex items-center gap-1.5">
                  <Link 
                    href="/" 
                    className="hover:text-white transition-colors flex items-center gap-1 focus-visible:ring-2 focus-visible:ring-accent rounded-sm px-1 py-0.5"
                  >
                    <Home className="w-3.5 h-3.5" aria-hidden="true" />
                    <span>Home</span>
                  </Link>
                </li>
                {breadcrumbs.map((item, idx) => {
                  const isLast = idx === breadcrumbs.length - 1;
                  return (
                    <li key={idx} className="flex items-center gap-1.5" aria-current={isLast ? "page" : undefined}>
                      <ChevronRight className="w-3.5 h-3.5 text-white/40 shrink-0" aria-hidden="true" />
                      {item.href && !isLast ? (
                        <Link 
                          href={item.href} 
                          className="hover:text-white transition-colors focus-visible:ring-2 focus-visible:ring-accent rounded-sm px-1 py-0.5"
                        >
                          {item.label}
                        </Link>
                      ) : (
                        <span className="text-white/80 font-semibold">{item.label}</span>
                      )}
                    </li>
                  );
                })}
              </ol>
            </nav>
          )}

          {/* Title */}
          <h1 className="text-3xl md:text-5xl lg:text-6xl font-display font-bold leading-tight mb-4 tracking-tight">
            {title}
          </h1>

          {/* Subtitle */}
          {subtitle && (
            <p className="text-white/80 text-base md:text-lg lg:text-xl font-medium max-w-2xl leading-relaxed">
              {subtitle}
            </p>
          )}
        </motion.div>
      </div>
    </div>
  );
}
