"use client";

import { useSearchParams, useRouter } from "next/navigation";
import { useState, useEffect, useMemo, Suspense } from "react";
import Link from "next/link";
import { Search, ArrowRight, FileText, Tag, ChevronRight, Sparkles } from "lucide-react";
import PageHero from "@/components/layout/PageHero";
import { searchWebsite, SEARCH_INDEX, SearchableItem } from "@/lib/search-index";
import { cn } from "@/lib/utils";

const CATEGORIES: Array<"All" | SearchableItem["category"]> = [
  "All",
  "Company",
  "Products",
  "SEBI & Compliance",
  "Investor Resources",
  "Market & News",
  "Forms & Downloads",
  "Legal & Policies",
];

function SearchContent() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const initialQuery = searchParams.get("q") || "";

  const [searchQuery, setSearchQuery] = useState(initialQuery);
  const [activeCategory, setActiveCategory] = useState<string>("All");

  useEffect(() => {
    setSearchQuery(initialQuery);
  }, [initialQuery]);

  const rawResults = useMemo(() => {
    if (!searchQuery.trim()) {
      // If query is empty, show all indexed items
      return SEARCH_INDEX;
    }
    return searchWebsite(searchQuery);
  }, [searchQuery]);

  const filteredResults = useMemo(() => {
    if (activeCategory === "All") return rawResults;
    return rawResults.filter((item) => item.category === activeCategory);
  }, [rawResults, activeCategory]);

  const handleSearchSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const params = new URLSearchParams();
    if (searchQuery.trim()) {
      params.set("q", searchQuery.trim());
    }
    router.push(`/search?${params.toString()}`);
  };

  return (
    <div className="bg-background min-h-screen">
      <PageHero
        title="Search Portal"
        subtitle="Find pages, regulatory documents, investment products, market reports, and forms."
        breadcrumbs={[{ label: "Search" }]}
      />

      <div className="container mx-auto px-4 max-w-5xl py-12 md:py-16 space-y-10">
        
        {/* Prominent Search Bar (WCAG 2.4.5) */}
        <section aria-labelledby="search-box-heading" className="bg-muted/40 p-6 md:p-8 rounded-3xl border border-border/60 shadow-lg">
          <h2 id="search-box-heading" className="text-xl md:text-2xl font-display font-bold text-foreground mb-4">
            Search Website Content
          </h2>
          <form onSubmit={handleSearchSubmit} role="search" aria-label="Portal search" className="space-y-4">
            <div className="relative flex items-center">
              <label htmlFor="portal-search-input" className="sr-only">
                Search query
              </label>
              <Search className="absolute left-4 w-5 h-5 text-muted-foreground pointer-events-none" aria-hidden="true" />
              <input
                id="portal-search-input"
                name="q"
                type="search"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search by keywords (e.g. Demat, USCNBA, Grievance, Equity, KYC, Complaint Data)..."
                autoComplete="off"
                className="w-full bg-background border border-border/70 rounded-2xl h-14 pl-12 pr-32 text-sm md:text-base font-medium text-foreground placeholder:text-muted-foreground/70 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all shadow-inner"
              />
              <button
                type="submit"
                className="absolute right-2 bg-primary hover:bg-primary/90 text-primary-foreground font-bold text-xs md:text-sm px-5 h-10 rounded-xl transition-all shadow-md shadow-primary/20 flex items-center gap-1.5 cursor-pointer"
              >
                <span>Search</span>
                <ArrowRight className="w-3.5 h-3.5" aria-hidden="true" />
              </button>
            </div>

            {/* Quick suggested tags */}
            <div className="flex flex-wrap items-center gap-2 pt-2 text-xs">
              <span className="font-semibold text-muted-foreground flex items-center gap-1">
                <Tag className="w-3.5 h-3.5 text-primary" aria-hidden="true" />
                Popular:
              </span>
              {["Demat", "USCNBA", "Complaints", "Escalation Matrix", "Equity Trading", "Downloads", "SCORES", "KYC"].map((term) => (
                <button
                  key={term}
                  type="button"
                  onClick={() => {
                    setSearchQuery(term);
                    router.push(`/search?q=${encodeURIComponent(term)}`);
                  }}
                  className="px-2.5 py-1 rounded-full bg-background hover:bg-primary/10 hover:text-primary border border-border/60 text-muted-foreground font-medium transition-colors cursor-pointer"
                >
                  {term}
                </button>
              ))}
            </div>
          </form>
        </section>

        {/* Category Filters */}
        <div className="space-y-4">
          <div className="flex items-center justify-between flex-wrap gap-3 border-b border-border/40 pb-3">
            <h3 className="text-sm font-bold uppercase tracking-wider text-muted-foreground">
              Filter by Category
            </h3>
            <span className="text-xs font-semibold text-muted-foreground">
              Showing <strong>{filteredResults.length}</strong> {filteredResults.length === 1 ? "result" : "results"}
              {searchQuery.trim() && <> for &quot;<strong>{searchQuery}</strong>&quot;</>}
            </span>
          </div>

          <div className="flex flex-wrap gap-2" role="tablist" aria-label="Search categories">
            {CATEGORIES.map((category) => {
              const isSelected = activeCategory === category;
              const count = category === "All" ? rawResults.length : rawResults.filter((r) => r.category === category).length;

              return (
                <button
                  key={category}
                  role="tab"
                  aria-selected={isSelected}
                  onClick={() => setActiveCategory(category)}
                  className={cn(
                    "px-4 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer flex items-center gap-1.5",
                    isSelected
                      ? "bg-primary text-primary-foreground shadow-sm shadow-primary/20"
                      : "bg-muted/50 hover:bg-muted text-muted-foreground hover:text-foreground border border-border/50"
                  )}
                >
                  <span>{category}</span>
                  <span className={cn("text-[10px] px-1.5 py-0.5 rounded-full font-mono", isSelected ? "bg-white/20 text-white" : "bg-background text-muted-foreground")}>
                    {count}
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Search Results List */}
        <section aria-label="Search results" className="space-y-4">
          {filteredResults.length > 0 ? (
            <ul className="space-y-4 list-none p-0 m-0">
              {filteredResults.map((item) => (
                <li key={item.id}>
                  <Link
                    href={item.href}
                    className="group block p-6 bg-muted/30 hover:bg-muted/60 border border-border/60 hover:border-primary/40 rounded-2xl transition-all shadow-xs hover:shadow-md relative overflow-hidden"
                  >
                    <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-3">
                      <div className="space-y-2 flex-1">
                        <div className="flex items-center gap-2">
                          <span className="text-[10px] font-bold uppercase tracking-wider text-primary bg-primary/10 px-2.5 py-0.5 rounded-md">
                            {item.category}
                          </span>
                          <span className="text-xs text-muted-foreground font-mono truncate max-w-xs">
                            {item.href}
                          </span>
                        </div>
                        <h4 className="text-lg md:text-xl font-bold font-display text-foreground group-hover:text-primary transition-colors flex items-center gap-1.5">
                          {item.title}
                          <ChevronRight className="w-4 h-4 text-muted-foreground group-hover:text-primary group-hover:translate-x-1 transition-all opacity-0 group-hover:opacity-100 shrink-0" aria-hidden="true" />
                        </h4>
                        <p className="text-xs md:text-sm text-muted-foreground leading-relaxed">
                          {item.description}
                        </p>
                      </div>

                      <div className="sm:self-center shrink-0">
                        <span className="inline-flex items-center gap-1 text-xs font-bold text-primary bg-background border border-border/60 group-hover:border-primary/40 px-3 py-1.5 rounded-xl transition-colors">
                          Visit Page <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" aria-hidden="true" />
                        </span>
                      </div>
                    </div>
                  </Link>
                </li>
              ))}
            </ul>
          ) : (
            <div className="text-center py-16 px-4 bg-muted/20 border border-dashed border-border/60 rounded-3xl space-y-4">
              <div className="w-14 h-14 bg-muted rounded-full flex items-center justify-center mx-auto text-muted-foreground">
                <FileText className="w-7 h-7 opacity-60" aria-hidden="true" />
              </div>
              <h4 className="text-lg font-bold text-foreground">No matching results found</h4>
              <p className="text-sm text-muted-foreground max-w-md mx-auto">
                We couldn&apos;t find any pages matching &quot;{searchQuery}&quot;. Try checking for spelling mistakes or explore our complete sitemap.
              </p>
              <div className="pt-2 flex justify-center gap-4">
                <button
                  onClick={() => {
                    setSearchQuery("");
                    setActiveCategory("All");
                    router.push("/search");
                  }}
                  className="px-4 py-2 text-xs font-bold bg-primary text-primary-foreground rounded-xl shadow-xs"
                >
                  View All Pages
                </button>
                <Link
                  href="/sitemap"
                  className="px-4 py-2 text-xs font-bold bg-background border border-border text-foreground hover:bg-muted rounded-xl transition-colors"
                >
                  Go to Sitemap →
                </Link>
              </div>
            </div>
          )}
        </section>

        {/* Alternative Navigation Callout (WCAG 2.4.5) */}
        <div className="bg-gradient-to-r from-primary/10 via-background to-accent/10 p-6 md:p-8 rounded-3xl border border-border/60 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="space-y-1.5 text-center sm:text-left">
            <h4 className="text-base font-bold text-foreground flex items-center justify-center sm:justify-start gap-2">
              <Sparkles className="w-4 h-4 text-primary" aria-hidden="true" />
              Prefer a structured directory?
            </h4>
            <p className="text-xs md:text-sm text-muted-foreground">
              Browse our complete sitemap to view all corporate pages, regulatory documents, and investor resources organized hierarchically.
            </p>
          </div>
          <Link
            href="/sitemap"
            className="shrink-0 bg-background hover:bg-muted text-foreground border border-border/70 font-bold text-xs px-5 py-2.5 rounded-xl shadow-xs transition-colors"
          >
            Open Complete Sitemap →
          </Link>
        </div>

      </div>
    </div>
  );
}

export default function SearchPage() {
  return (
    <Suspense
      fallback={
        <div className="min-h-screen bg-background flex items-center justify-center">
          <div className="text-center space-y-3">
            <div className="w-8 h-8 border-3 border-primary border-t-transparent rounded-full animate-spin mx-auto" />
            <p className="text-sm font-semibold text-muted-foreground">Loading Search Portal...</p>
          </div>
        </div>
      }
    >
      <SearchContent />
    </Suspense>
  );
}
