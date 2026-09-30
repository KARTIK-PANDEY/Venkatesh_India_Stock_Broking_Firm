"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, ChevronDown, ChevronRight, ExternalLink, LogIn, Search, X } from "lucide-react";
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
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openSections, setOpenSections] = useState<Record<string, boolean>>({
    "SEBI Documents": false,
    "About Us": false,
    "Products & Services": false,
    "Market & News": false,
  });

  const toggleSection = (label: string) => {
    setOpenSections((prev) => ({
      ...prev,
      [label]: !prev[label],
    }));
  };

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={cn(
        "sticky top-0 z-50 w-full border-b transition-all duration-200",
        isScrolled
          ? "bg-background/95 backdrop-blur-md border-border/70 shadow-sm"
          : "bg-background border-border/40"
      )}
    >
      {/* ── Main Bar ─────────────────────────────────────────────── */}
      <div className="w-full px-2.5 sm:px-4 lg:px-6 h-14 lg:h-15">
        <div className="h-full flex items-center justify-between max-w-7xl mx-auto gap-2 lg:gap-4">

          {/* ── Logo ──────────────────────────────────────────────── */}
          <Link href="/" className="flex items-center group shrink-0" aria-label="Home page">
            <div className="h-7.5 w-28 min-[380px]:h-8 min-[380px]:w-32 sm:h-8.5 sm:w-36 lg:h-9 lg:w-40 rounded overflow-hidden group-hover:opacity-90 transition-opacity shrink-0 flex items-center">
              <Image
                src="/logo.jpg"
                alt="Shri Venkatesh Stock Broker Services India Pvt. Ltd. company logo"
                width={160}
                height={40}
                className="object-contain w-full h-full max-h-full"
                priority
              />
            </div>
          </Link>

          {/* ── Desktop Navigation ────────────────────────────────── */}
          <nav className="hidden xl:flex flex-1 items-center justify-center px-1" aria-label="Primary Navigation">
            <NavigationMenu>
              <NavigationMenuList className="gap-0.5">
                {NAV_LINKS.map((link) => (
                  <NavigationMenuItem key={link.label}>
                    {link.isMegaMenu && "categories" in link ? (
                      <>
                        <NavigationMenuTrigger
                          className={cn(
                            "bg-transparent text-xs lg:text-[13px] font-semibold text-foreground/80",
                            "hover:bg-primary/10 hover:text-primary",
                            "focus:bg-primary/10 focus:text-primary",
                            "data-[state=open]:bg-primary/10 data-[state=open]:text-primary",
                            "h-8 px-2 lg:px-2.5 rounded-md transition-colors"
                          )}
                        >
                          {link.label}
                        </NavigationMenuTrigger>
                        <NavigationMenuContent>
                          <div className="grid w-[720px] max-w-[85vw] gap-4 p-4 md:grid-cols-3 bg-background/98 backdrop-blur-xl border border-border/80 rounded-2xl shadow-xl">
                            {link.categories.map((category) => (
                              <div key={category.title} className="space-y-2">
                                <h3 className="text-[11px] font-bold uppercase tracking-wider text-primary border-b border-border/40 pb-1.5">
                                  {category.title}
                                </h3>
                                <ul className="space-y-0.5">
                                  {category.links.map((child) => (
                                    <li key={child.label}>
                                      <NavigationMenuLink
                                        href={getFileUrl(child.href)}
                                        target={hasTarget(child) ? child.target : undefined}
                                        rel={hasTarget(child) && child.target === "_blank" ? "noopener noreferrer" : undefined}
                                        className={cn(
                                          "flex items-center justify-between rounded-md px-2 py-1.5 no-underline outline-none transition-colors",
                                          "text-xs font-medium text-foreground/75 hover:text-primary hover:bg-primary/10"
                                        )}
                                      >
                                        <span className="truncate">{child.label}</span>
                                        {hasTarget(child) && child.target === "_blank" && (
                                          <ExternalLink className="size-3 text-muted-foreground shrink-0 ml-1.5 opacity-60" aria-hidden="true" />
                                        )}
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
                            "bg-transparent text-xs lg:text-[13px] font-semibold text-foreground/80",
                            "hover:bg-primary/10 hover:text-primary",
                            "focus:bg-primary/10 focus:text-primary",
                            "data-[state=open]:bg-primary/10 data-[state=open]:text-primary",
                            "h-8 px-2.5 lg:px-3 rounded-md transition-colors"
                          )}
                        >
                          {link.label}
                        </NavigationMenuTrigger>
                        <NavigationMenuContent>
                          <ul className="grid w-[380px] md:w-[440px] gap-1 p-2.5 md:grid-cols-2 bg-background/98 backdrop-blur-xl border border-border/80 rounded-xl shadow-xl">
                            {link.children.map((child) => (
                              <li key={child.label}>
                                <NavigationMenuLink
                                  href={getFileUrl(child.href)}
                                  target={hasTarget(child) ? child.target : undefined}
                                  rel={hasTarget(child) && child.target === "_blank" ? "noopener noreferrer" : undefined}
                                  className={cn(
                                    "flex items-center justify-between rounded-lg px-2.5 py-2 no-underline outline-none transition-colors",
                                    "text-xs font-medium text-foreground/75 hover:text-primary hover:bg-primary/10"
                                  )}
                                >
                                  <span className="truncate">{child.label}</span>
                                  {hasTarget(child) && child.target === "_blank" && (
                                    <ExternalLink className="size-3 text-muted-foreground shrink-0 ml-1.5 opacity-60" aria-hidden="true" />
                                  )}
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
                          "bg-transparent text-xs lg:text-[13px] font-semibold text-foreground/80",
                          "hover:bg-primary/10 hover:text-primary",
                          "h-8 px-2.5 lg:px-3 rounded-md transition-colors"
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

          {/* ── Desktop Actions ───────────────────────────────────── */}
          <div className="hidden xl:flex items-center gap-2 shrink-0">
            <ModeToggle />

            {/* Login dropdown */}
            <DropdownMenu>
              <DropdownMenuTrigger className="inline-flex items-center gap-1 rounded-md px-2.5 py-1.5 text-xs font-semibold text-foreground/80 hover:bg-primary/10 hover:text-primary transition-colors outline-none cursor-pointer h-8">
                <LogIn className="size-3.5 opacity-70" />
                <span>Login</span>
                <ChevronDown className="size-3 opacity-50" />
              </DropdownMenuTrigger>
              <DropdownMenuContent
                align="end"
                className="w-48 bg-background/98 backdrop-blur-xl border border-border/80 rounded-xl shadow-xl p-1"
              >
                {LOGIN_LINKS.map((link) => (
                  <DropdownMenuItem key={link.label} className="rounded-md cursor-pointer focus:bg-primary/10 focus:text-primary p-0">
                    <a
                      href={link.href}
                      target={link.target}
                      rel="noopener noreferrer"
                      className="flex items-center justify-between py-2 px-2.5 font-medium text-xs w-full text-foreground/85 hover:text-primary"
                    >
                      <span>{link.label}</span>
                      <ExternalLink aria-hidden="true" className="size-3 text-muted-foreground opacity-60" />
                    </a>
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>

            <div className="h-4 w-px bg-border/60 mx-0.5" />

            {/* Compact Search Box */}
            <form
              role="search"
              action="/search"
              method="GET"
              aria-label="Site search"
              className="flex items-center border border-border/60 rounded-md px-2 h-8 bg-muted/30 focus-within:border-primary/50 focus-within:bg-background transition-all shrink-0"
            >
              <label htmlFor="site-search" className="sr-only">
                Search
              </label>
              <input
                id="site-search"
                name="q"
                type="search"
                placeholder="Search"
                autoComplete="off"
                className="bg-transparent border-none outline-none text-xs w-16 focus:w-28 transition-all px-1 text-foreground placeholder:text-muted-foreground/70"
              />
              <button
                type="submit"
                aria-label="Submit site search"
                title="Search"
                className="text-muted-foreground hover:text-primary transition-colors cursor-pointer"
              >
                <Search className="size-3.5" aria-hidden="true" />
              </button>
            </form>

            <div className="h-4 w-px bg-border/60 mx-0.5" />

            {/* Open Account CTA */}
            <Link
              href="/open-account"
              className={cn(
                buttonVariants({ variant: "default", size: "sm" }),
                "shrink-0 rounded-md shadow-sm shadow-primary/20 hover:shadow-primary/30 transition-all px-3 h-8 text-xs font-semibold whitespace-nowrap"
              )}
            >
              Open Account
            </Link>
          </div>

          {/* ── Mobile / Tablet Actions ───────────────────────────── */}
          <div className="xl:hidden flex items-center gap-1.5 shrink-0">
            <ModeToggle />

            {/* Open Account - compact on small screens */}
            <Link
              href="/open-account"
              className={cn(
                buttonVariants({ variant: "default", size: "sm" }),
                "inline-flex shrink-0 rounded-md px-2.5 text-[11px] h-7.5 font-semibold shadow-sm shadow-primary/20 whitespace-nowrap"
              )}
            >
              <span className="min-[380px]:hidden">Open A/c</span>
              <span className="hidden min-[380px]:inline">Open Account</span>
            </Link>

            {/* Mobile Sheet Drawer */}
            <Sheet open={mobileOpen} onOpenChange={setMobileOpen}>
              <SheetTrigger
                aria-label="Open mobile navigation menu"
                className={cn(
                  buttonVariants({ variant: "outline", size: "icon" }),
                  "shrink-0 rounded-md border-border/60 size-8 cursor-pointer"
                )}
              >
                <Menu className="size-4" aria-hidden="true" />
              </SheetTrigger>
              <SheetContent side="right" className="w-[85vw] max-w-[340px] p-0 bg-background border-l border-border/70 flex flex-col h-full">

                {/* Mobile Sheet Header */}
                <SheetHeader className="p-3.5 border-b border-border/50">
                  <div className="flex items-center gap-2.5">
                    <div className="h-7 w-24 rounded overflow-hidden shrink-0 flex items-center">
                      <Image
                        src="/logo.jpg"
                        alt="Shri Venkatesh Stock Broker logo"
                        width={90}
                        height={30}
                        className="object-contain w-full h-full"
                        priority
                      />
                    </div>
                    <SheetTitle className="leading-tight text-left">
                      <span className="text-[10px] font-semibold text-muted-foreground block leading-tight">
                        Shri Venkatesh Stock Broker
                        <br />
                        Services India Pvt. Ltd.
                      </span>
                    </SheetTitle>
                  </div>
                </SheetHeader>

                {/* Mobile Search Bar inside Drawer */}
                <div className="px-3 pt-3">
                  <form
                    role="search"
                    action="/search"
                    method="GET"
                    onSubmit={() => setMobileOpen(false)}
                    aria-label="Site search"
                    className="flex items-center border border-border/70 rounded-md px-2.5 h-8 bg-muted/40 focus-within:border-primary/50 focus-within:bg-background transition-all"
                  >
                    <label htmlFor="mobile-site-search" className="sr-only">
                      Search
                    </label>
                    <Search className="size-3.5 text-muted-foreground mr-1.5 shrink-0" aria-hidden="true" />
                    <input
                      id="mobile-site-search"
                      name="q"
                      type="search"
                      placeholder="Search pages, reports, forms..."
                      autoComplete="off"
                      className="bg-transparent border-none outline-none text-xs w-full text-foreground placeholder:text-muted-foreground/70"
                    />
                    <button
                      type="submit"
                      aria-label="Submit site search"
                      title="Search"
                      className="text-muted-foreground hover:text-primary transition-colors cursor-pointer shrink-0 ml-1"
                    >
                      <span className="sr-only">Search</span>
                      <ChevronRight className="size-3.5" aria-hidden="true" />
                    </button>
                  </form>
                </div>

                {/* Mobile Scrollable Navigation List */}
                <div className="flex-1 overflow-y-auto px-3 py-2 space-y-1">
                  <nav aria-label="Mobile Navigation">
                    <ul className="space-y-1 list-none p-0 m-0">
                      {NAV_LINKS.map((link) => {
                        const hasChildren = Boolean(link.children || (link.isMegaMenu && "categories" in link));
                        const isExpanded = openSections[link.label] ?? false;

                        if (link.isMegaMenu && "categories" in link) {
                          return (
                            <li key={link.label} className="border-b border-border/30 pb-1">
                              <button
                                type="button"
                                onClick={() => toggleSection(link.label)}
                                className="flex items-center justify-between w-full text-xs font-semibold text-foreground/90 hover:text-primary py-2 px-2 rounded-md hover:bg-primary/5 transition-colors text-left"
                              >
                                <span>{link.label}</span>
                                <ChevronRight
                                  className={cn(
                                    "size-3.5 text-muted-foreground transition-transform duration-200",
                                    isExpanded && "rotate-90 text-primary"
                                  )}
                                />
                              </button>
                              {isExpanded && (
                                <div className="pl-2 space-y-2 mt-1 mb-2">
                                  {link.categories.map((cat) => (
                                    <div key={cat.title} className="space-y-1">
                                      <p className="text-[10px] font-bold uppercase tracking-wider text-primary px-2 py-0.5 bg-primary/5 rounded w-fit">
                                        {cat.title}
                                      </p>
                                      <ul className="space-y-0.5 list-none p-0 m-0 pl-1.5">
                                        {cat.links.map((child) => (
                                          <li key={child.label}>
                                            <Link
                                              href={getFileUrl(child.href)}
                                              target={hasTarget(child) ? child.target : undefined}
                                              rel={hasTarget(child) && child.target === "_blank" ? "noopener noreferrer" : undefined}
                                              onClick={() => setMobileOpen(false)}
                                              className="flex items-center justify-between text-xs text-foreground/75 hover:text-primary hover:bg-primary/10 px-2 py-1.5 rounded-md transition-colors font-medium"
                                            >
                                              <span className="truncate">{child.label}</span>
                                              {hasTarget(child) && child.target === "_blank" && (
                                                <ExternalLink className="size-2.5 text-muted-foreground shrink-0 ml-1 opacity-60" aria-hidden="true" />
                                              )}
                                            </Link>
                                          </li>
                                        ))}
                                      </ul>
                                    </div>
                                  ))}
                                </div>
                              )}
                            </li>
                          );
                        }

                        if (link.children) {
                          return (
                            <li key={link.label} className="border-b border-border/30 pb-1">
                              <button
                                type="button"
                                onClick={() => toggleSection(link.label)}
                                className="flex items-center justify-between w-full text-xs font-semibold text-foreground/90 hover:text-primary py-2 px-2 rounded-md hover:bg-primary/5 transition-colors text-left"
                              >
                                <span>{link.label}</span>
                                <ChevronRight
                                  className={cn(
                                    "size-3.5 text-muted-foreground transition-transform duration-200",
                                    isExpanded && "rotate-90 text-primary"
                                  )}
                                />
                              </button>
                              {isExpanded && (
                                <ul className="space-y-0.5 list-none p-0 m-0 pl-3 mt-0.5 mb-1.5">
                                  {link.children.map((child) => (
                                    <li key={child.label}>
                                      <Link
                                        href={getFileUrl(child.href)}
                                        target={hasTarget(child) ? child.target : undefined}
                                        rel={hasTarget(child) && child.target === "_blank" ? "noopener noreferrer" : undefined}
                                        onClick={() => setMobileOpen(false)}
                                        className="flex items-center justify-between text-xs text-foreground/75 hover:text-primary hover:bg-primary/10 px-2 py-1.5 rounded-md transition-colors font-medium"
                                      >
                                        <span className="truncate">{child.label}</span>
                                        {hasTarget(child) && child.target === "_blank" && (
                                          <ExternalLink className="size-2.5 text-muted-foreground shrink-0 ml-1 opacity-60" aria-hidden="true" />
                                        )}
                                      </Link>
                                    </li>
                                  ))}
                                </ul>
                              )}
                            </li>
                          );
                        }

                        return (
                          <li key={link.label}>
                            <Link
                              href={link.href}
                              onClick={() => setMobileOpen(false)}
                              className="flex items-center text-xs font-semibold text-foreground/90 hover:text-primary hover:bg-primary/10 px-2 py-2 rounded-md transition-colors"
                            >
                              {link.label}
                            </Link>
                          </li>
                        );
                      })}
                    </ul>

                    {/* Login portal section */}
                    <div className="pt-2.5 border-t border-border/50 mt-2">
                      <p className="text-[10px] font-bold tracking-wider uppercase text-muted-foreground px-2 py-1">
                        Client Portals
                      </p>
                      <ul className="space-y-0.5 list-none p-0 m-0">
                        {LOGIN_LINKS.map((link) => (
                          <li key={link.label}>
                            <a
                              href={link.href}
                              target={link.target}
                              rel="noopener noreferrer"
                              className="flex items-center justify-between text-xs text-foreground/75 hover:text-primary hover:bg-primary/10 px-2 py-1.5 rounded-md transition-colors font-medium"
                            >
                              <span>{link.label}</span>
                              <ExternalLink aria-hidden="true" className="size-3 text-muted-foreground opacity-60" />
                            </a>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </nav>
                </div>

                {/* Mobile Drawer Footer CTA */}
                <div className="p-3 border-t border-border/50 mt-auto bg-muted/20">
                  <Link
                    href="/open-account"
                    onClick={() => setMobileOpen(false)}
                    className={cn(
                      buttonVariants({ variant: "default" }),
                      "w-full rounded-lg h-9 text-xs font-semibold shadow-md shadow-primary/20 justify-center"
                    )}
                  >
                    Open An Account →
                  </Link>
                </div>

              </SheetContent>
            </Sheet>
          </div>

        </div>
      </div>
    </header>
  );
}
