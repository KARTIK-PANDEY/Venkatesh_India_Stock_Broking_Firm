"use client";

import Link from "next/link";
import {
  LineChart,
  TrendingUp,
  PieChart,
  Rocket,
  ShieldCheck,
  ArrowRight,
} from "lucide-react";
import { motion, type Variants } from "framer-motion";

const PRODUCTS = [
  {
    title: "Equity Trading",
    description:
      "Buy and sell shares on BSE in cash and intraday segments with expert guidance.",
    icon: LineChart,
    href: "/products/equity",
  },
  {
    title: "Derivatives (F&O)",
    description:
      "Trade Index and Stock Futures & Options with advanced hedging strategies.",
    icon: TrendingUp,
    href: "/products/derivatives",
  },
  {
    title: "Mutual Funds",
    description:
      "Invest in equity, debt and hybrid mutual funds via SIP or lump sum.",
    icon: PieChart,
    href: "/products/mutual-funds",
  },
  {
    title: "IPO Services",
    description:
      "Apply for upcoming IPOs easily via ASBA/UPI mandate through your account.",
    icon: Rocket,
    href: "/products/ipo",
  },
  {
    title: "Depository Services",
    description:
      "Hold your securities safely in a CDSL Demat account with e-DIS facility.",
    icon: ShieldCheck,
    href: "/products/depository",
  },
];

export default function ProductsGrid() {
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  return (
    <section
      aria-labelledby="products-heading"
      className="py-24 md:py-32 relative overflow-hidden bg-background"
    >
      {/* Background Gradient */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-[600px] bg-primary/5 rounded-[100%] blur-[120px] -z-10 pointer-events-none" />

      <div className="container mx-auto px-4 max-w-7xl">
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <motion.h2
            id="products-heading"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-foreground mb-6"
          >
            Comprehensive <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">
              Financial Services
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg md:text-xl text-muted-foreground font-medium"
          >
            From cutting-edge trading to secure depository services, we offer
            everything you need to compound your wealth under one roof.
          </motion.p>
        </div>

        {/* Product Cards */}
        <motion.ul
  className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 list-none p-0 m-0"
  variants={containerVariants}
  initial={false}
  animate="visible"
>
          {PRODUCTS.map((product, idx) => (
            <motion.li
  key={product.title}
  variants={itemVariants}
  initial={false}
  className="flex"
>
              <Link
                href={product.href}
                aria-labelledby={`product-title-${idx}`}
                aria-describedby={`product-desc-${idx}`}
                className="group relative flex flex-col w-full bg-background/50 backdrop-blur-xl p-8 rounded-3xl border border-border/50 shadow-lg shadow-primary/5 hover:shadow-2xl hover:shadow-primary/20 transition-all duration-500 hover:-translate-y-2 overflow-hidden focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"
              >
                {/* Hover Glow */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10" />

                {/* Top Accent Line */}
                <div className="absolute top-0 left-0 w-0 h-1 bg-gradient-to-r from-primary to-accent transition-all duration-500 group-hover:w-full" />

                {/* Icon (decorative) */}
                <div
                  className="mb-8 inline-flex p-4 rounded-2xl bg-muted/50 text-foreground border border-border/50 group-hover:bg-primary group-hover:text-primary-foreground group-hover:border-primary transition-all duration-500 shadow-sm"
                  aria-hidden="true"
                >
                  <product.icon
                    className="w-8 h-8 stroke-[1.5]"
                    aria-hidden="true"
                    focusable="false"
                  />
                </div>

                {/* Product Heading */}
                <h3
                  id={`product-title-${idx}`}
                  className="text-2xl font-bold text-foreground mb-4 group-hover:text-primary transition-colors"
                >
                  {product.title}
                </h3>

                {/* Product Description */}
                <p
                  id={`product-desc-${idx}`}
                  className="text-muted-foreground leading-relaxed mb-8 flex-1 font-medium"
                >
                  {product.description}
                </p>

                {/* Decorative CTA */}
                <div
                  aria-hidden="true"
                  className="text-primary font-bold text-sm flex items-center gap-2 group-hover:gap-3 transition-all mt-auto uppercase tracking-wider"
                >
                  Learn More
                  <ArrowRight className="w-4 h-4" />
                </div>
              </Link>
            </motion.li>
          ))}
        </motion.ul>
      </div>
    </section>
  );
}

