"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, ChevronDown, ExternalLink, LogIn, Search } from "lucide-react";
import { cn, getFileUrl } from "@/lib/utils";
import { NAV_LINKS, LOGIN_LINKS } from "@/lib/constants";
import { buttonVariants } from "@/components/ui/button";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { ModeToggle } from "@/components/mode-toggle";

function hasTarget(item: unknown): item is { target: string } {
  return (
    typeof item === "object" &&
    item !== null &&
    "target" in item &&
    typeof (item as Record<string, unknown>).target === "string"
  );
}

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={cn(
        "sticky top-0 z-50 w-full border-b transition-all duration-300",
        isScrolled
          ? "bg-background/96 backdrop-blur-xl border-border/70 shadow-md"
          : "bg-background border-border/40"
      )}
    >
      {/* ── Main bar ─────────────────────────────────────────────── */}
      <div className="w-full px-4 sm:px-6 lg:px-8 h-16">
        {/*
          Flexbox layout:
          [Logo — left] ···· [Nav — fills center] ···· [Actions — right]
          Logo sits at its natural width on the left.
          Actions sit at their natural width on the right.
          Nav stretches the remaining space and centers itself.
        */}
        <div className="h-full flex items-center max-w-screen-xl mx-auto gap-4">

          {/* ── Logo · pinned left at natural width ────────────── */}
          <Link href="/" className="flex items-center group shrink-0">
            <div className="h-14 w-52 rounded-lg overflow-hidden group-hover:scale-[1.02] transition-transform shrink-0">
              <Image
                src="/logo.jpg"
                alt="Shri Venkatesh Stock Broker Services India Pvt. Ltd."
                width={208}
                height={56}
                className="object-contain w-full h-full"
                priority
              />
            </div>
          </Link>

          {/* ── Desktop Nav · centers itself in remaining space ── */}
          <nav className="hidden lg:flex flex-1 items-center justify-center">
            <NavigationMenu>
              <NavigationMenuList className="gap-0">
                {NAV_LINKS.map((link) => (
                  <NavigationMenuItem key={link.label}>
                    {link.isMegaMenu && "categories" in link ? (
                      <>
                        <NavigationMenuTrigger
                          className={cn(
                            "bg-transparent text-sm font-bold text-foreground/85",
                            "hover:bg-primary/10 hover:text-primary",
                            "focus:bg-primary/10 focus:text-primary",
                            "data-[state=open]:bg-primary/10 data-[state=open]:text-primary",
                            "h-9 px-3.5 rounded-lg transition-colors"
                          )}
                        >
                          {link.label}
                        </NavigationMenuTrigger>
                        <NavigationMenuContent>
                          <div className="grid w-[800px] gap-6 p-6 md:grid-cols-3 bg-background border border-border/70 rounded-3xl shadow-xl">
                            {link.categories.map((category) => (
                              <div key={category.title} className="space-y-3">
                                <h4 className="text-xs font-black uppercase tracking-wider text-muted-foreground border-b border-border/40 pb-2">
                                  {category.title}
                                </h4>
                                <ul className="space-y-1">
                                  {category.links.map((child) => (
                                    <li key={child.label}>
                                      <NavigationMenuLink
                                        href={getFileUrl(child.href)}
                                        target={hasTarget(child) ? child.target : undefined}
                                        rel={hasTarget(child) && child.target === "_blank" ? "noopener noreferrer" : undefined}
                                        className={cn(
                                          "flex rounded-lg px-2.5 py-1.5 no-underline outline-none transition-colors",
                                          "text-xs font-bold text-foreground/80",
                                          "hover:bg-primary/10 hover:text-primary"
                                        )}
                                      >
                                        {child.label}
                                      </NavigationMenuLink>
                                    </li>
                                  ))}
                                </ul>
                              </div>
                            ))}
                          </div>
                        </NavigationMenuContent>
                      </>
                    ) : link.children ? (
                      <>
                        <NavigationMenuTrigger
                          className={cn(
                            "bg-transparent text-sm font-bold text-foreground/85",
                            "hover:bg-primary/10 hover:text-primary",
                            "focus:bg-primary/10 focus:text-primary",
                            "data-[state=open]:bg-primary/10 data-[state=open]:text-primary",
                            "h-9 px-3.5 rounded-lg transition-colors"
                          )}
                        >
                          {link.label}
                        </NavigationMenuTrigger>
                        <NavigationMenuContent>
                          <ul className="grid w-[440px] gap-1.5 p-3 md:w-[540px] md:grid-cols-2 bg-background border border-border/70 rounded-2xl shadow-xl">
                            {link.children.map((child) => (
                              <li key={child.label}>
                                <NavigationMenuLink
                                  href={getFileUrl(child.href)}
                                  target={hasTarget(child) ? child.target : undefined}
                                  rel={hasTarget(child) && child.target === "_blank" ? "noopener noreferrer" : undefined}
                                  className={cn(
                                    "flex rounded-xl px-4 py-2.5 no-underline outline-none transition-colors",
                                    "text-sm font-bold text-foreground/80",
                                    "hover:bg-primary/10 hover:text-primary"
                                  )}
                                >
                                  {child.label}
                                </NavigationMenuLink>
                              </li>
                            ))}
                          </ul>
                        </NavigationMenuContent>
                      </>
                    ) : (
                      <NavigationMenuLink
                        href={link.href}
                        className={cn(
                          navigationMenuTriggerStyle(),
                          "bg-transparent text-sm font-bold text-foreground/85",
                          "hover:bg-primary/10 hover:text-primary",
                          "h-9 px-3.5 rounded-lg transition-colors"
                        )}
                      >
                        {link.label}
                      </NavigationMenuLink>
                    )}
                  </NavigationMenuItem>
                ))}
              </NavigationMenuList>
            </NavigationMenu>
          </nav>

          {/* ── Desktop Actions · pinned right ───────────────────── */}
          <div className="hidden lg:flex items-center gap-2 shrink-0 ml-auto">
            <ModeToggle />

            {/* Login dropdown */}
            <DropdownMenu>
              <DropdownMenuTrigger className="inline-flex items-center gap-1 rounded-lg px-3 py-2 text-sm font-bold text-foreground/75 hover:bg-primary/10 hover:text-primary transition-colors outline-none">
                <LogIn className="h-4 w-4 mr-1 opacity-70" />
                Login
                <ChevronDown className="h-3.5 w-3.5 ml-0.5 opacity-50" />
              </DropdownMenuTrigger>
              <DropdownMenuContent
                align="end"
                className="w-52 bg-background border border-border/70 rounded-xl shadow-xl"
              >
                {LOGIN_LINKS.map((link) => (
                  <DropdownMenuItem key={link.label} className="rounded-lg cursor-pointer my-0.5 focus:bg-primary/10 focus:text-primary p-0">
                    <a
                      href={link.href}
                      target={link.target}
                      className="flex items-center justify-between py-2.5 px-2 font-medium text-sm w-full"
                    >
                      {link.label}
                      <span className="sr-only">(opens in new tab)</span>
                      <ExternalLink aria-hidden="true" className="h-3.5 w-3.5 text-muted-foreground" />
                    </a>
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>

            <div className="h-5 w-px bg-border/70 mx-1" />

            {/* Search box */}
            <form role="search" action="/search" method="GET" className="hidden lg:flex items-center mr-2 border border-border/70 rounded-lg px-2 h-9 bg-muted/20">
              <label htmlFor="site-search" className="sr-only">Search</label>
              <input
                type="search"
                id="site-search"
                name="q"
                placeholder="Search..."
                autoComplete="off"
                aria-label="Search this website"
                className="bg-transparent border-none outline-none text-sm w-24 focus:w-40 transition-all px-1 text-foreground"
              />
              <button type="submit" aria-label="Submit search" className="text-muted-foreground hover:text-primary">
                <Search className="w-4 h-4" />
              </button>
            </form>

            <div className="h-5 w-px bg-border/70 mx-1" />

            {/* Open Account CTA */}
            <Link
              href="/open-account"
              className={cn(
                buttonVariants({ variant: "default" }),
                "rounded-lg shadow-md shadow-primary/20 hover:shadow-primary/30 hover:scale-[1.02] transition-all px-5 h-9 text-sm font-semibold whitespace-nowrap"
              )}
            >
              Open Account
            </Link>
          </div>

          {/* ── Mobile Actions · pinned right ──────────────────── */}
          <div className="lg:hidden flex items-center gap-2 shrink-0 ml-auto">
            <ModeToggle />
            <Link
              href="/open-account"
              className={cn(
                buttonVariants({ variant: "default", size: "sm" }),
                "rounded-lg px-3 text-xs h-8 font-semibold shadow-md shadow-primary/20"
              )}
            >
              Open
            </Link>
            <Sheet>
              <SheetTrigger className={cn(
                buttonVariants({ variant: "outline", size: "icon" }),
                "rounded-lg border-border/60 h-8 w-8"
              )}>
                <Menu className="h-4 w-4" />
              </SheetTrigger>
              <SheetContent side="right" className="w-[85vw] sm:w-[380px] p-0 bg-background border-l border-border/60">

                {/* Mobile Sheet Header */}
                <SheetHeader className="p-4 border-b border-border/50">
                  <div className="flex items-center gap-3">
                    <div className="h-10 w-28 rounded-lg overflow-hidden shrink-0">
                      <Image
                        src="/logo.jpg"
                        alt="Shri Venkatesh Stock Broker Services India Pvt. Ltd."
                        width={112}
                        height={40}
                        className="object-contain w-full h-full"
                      />
                    </div>
                    <SheetTitle className="leading-tight text-left">
                      <span className="text-xs font-bold text-muted-foreground block leading-relaxed">
                        Shri Venkatesh Stock Broker<br />Services India Pvt. Ltd.
                      </span>
                    </SheetTitle>
                  </div>
                </SheetHeader>

                <div className="flex flex-col h-[calc(100vh-73px)]">
                  <div className="flex-1 overflow-y-auto p-4 space-y-1">
                    {NAV_LINKS.map((link) => (
                      <div key={link.label}>
                        {link.children ? (
                          <div className="mb-3">
                            {/* Section label */}
                            <p className="text-[10px] font-bold tracking-[0.2em] uppercase text-muted-foreground px-3 py-2">
                              {link.label}
                            </p>
                            {link.children.map((child) => (
                              <Link
                                key={child.label}
                                href={getFileUrl(child.href)}
                                target={hasTarget(child) ? child.target : undefined}
                                rel={hasTarget(child) && child.target === "_blank" ? "noopener noreferrer" : undefined}
                                className="flex items-center gap-2.5 text-sm text-foreground/75 hover:text-primary hover:bg-primary/10 px-3 py-2.5 rounded-lg transition-colors font-medium"
                              >
                                <span className="w-1.5 h-1.5 rounded-full bg-primary/50 shrink-0" />
                                {child.label}
                              </Link>
                            ))}
                          </div>
                        ) : link.isMegaMenu && "categories" in link ? (
                          <div className="mb-3">
                            {/* Section label */}
                            <p className="text-[10px] font-bold tracking-[0.2em] uppercase text-muted-foreground px-3 py-2">
                              {link.label}
                            </p>
                            {link.categories.map((cat) => (
                              <div key={cat.title} className="pl-2 mb-2">
                                <p className="text-[9px] font-extrabold uppercase text-primary px-3 py-1 bg-primary/5 rounded-md w-fit mb-1">
                                  {cat.title}
                                </p>
                                {cat.links.map((child) => (
                                  <Link
                                    key={child.label}
                                    href={getFileUrl(child.href)}
                                    target={hasTarget(child) ? child.target : undefined}
                                    rel={hasTarget(child) && child.target === "_blank" ? "noopener noreferrer" : undefined}
                                    className="flex items-center gap-2.5 text-xs text-foreground/75 hover:text-primary hover:bg-primary/10 px-3 py-2 rounded-lg transition-colors font-medium"
                                  >
                                    <span className="w-1.5 h-1.5 rounded-full bg-primary/40 shrink-0" />
                                    {child.label}
                                  </Link>
                                ))}
                              </div>
                            ))}
                          </div>
                        ) : (
                          <Link
                            href={link.href}
                            className="flex items-center text-[15px] font-semibold text-foreground hover:text-primary hover:bg-primary/10 px-3 py-2.5 rounded-lg transition-colors"
                          >
                            {link.label}
                          </Link>
                        )}
                      </div>
                    ))}

                    {/* Login section */}
                    <div className="pt-2 border-t border-border/50 mt-3">
                      <p className="text-[10px] font-bold tracking-[0.2em] uppercase text-muted-foreground px-3 py-2">
                        Portal Logins
                      </p>
                      {LOGIN_LINKS.map((link) => (
                        <a
                          key={link.label}
                          href={link.href}
                          target={link.target}
                          className="flex items-center justify-between text-sm text-foreground/75 hover:text-primary hover:bg-primary/10 px-3 py-2.5 rounded-lg transition-colors font-medium"
                        >
                          {link.label}
                          <span className="sr-only">(opens in new tab)</span>
                          <ExternalLink aria-hidden="true" className="h-3.5 w-3.5 text-muted-foreground" />
                        </a>
                      ))}
                    </div>
                  </div>

                  <div className="p-4 border-t border-border/50">
                    <Link
                      href="/open-account"
                      className={cn(
                        buttonVariants({ variant: "default" }),
                        "w-full rounded-xl h-12 text-base font-semibold shadow-lg shadow-primary/20 justify-center"
                      )}
                    >
                      Open An Account →
                    </Link>
                  </div>
                </div>

              </SheetContent>
            </Sheet>
          </div>

        </div>
      </div>
    </header>
  );
}
