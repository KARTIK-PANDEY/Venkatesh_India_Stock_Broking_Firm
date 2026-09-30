import { ShieldCheck, TrendingUp, Users, Award } from "lucide-react";
import { COMPANY_INFO } from "@/lib/constants";

export default function CompanyIntro() {
  return (
    <div className="w-full border-b border-border/50 bg-muted/40 text-foreground">
      {/* Top row — company title & badges */}
      <div className="max-w-7xl mx-auto px-2.5 sm:px-4 lg:px-6">
        <div className="py-2 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1.5 sm:gap-3">

          {/* Company full name */}
          <div className="flex items-center gap-2">
            <ShieldCheck className="size-3.5 text-primary shrink-0" aria-hidden="true" />
            <p className="text-xs sm:text-[13px] font-semibold text-foreground/90 leading-tight">
              {COMPANY_INFO.name}
            </p>
          </div>

          {/* Quick reg badges */}
          <div className="flex items-center gap-1.5 sm:gap-2 flex-wrap">
            <span className="inline-flex items-center gap-1 text-[9px] sm:text-[10px] font-semibold uppercase tracking-wider text-muted-foreground bg-background border border-border/60 rounded-full px-2 py-0.5 shadow-2xs">
              <TrendingUp className="size-2.5 text-primary" aria-hidden="true" />
              SEBI Reg: INZ000231135
            </span>
            <span className="hidden sm:inline-flex items-center gap-1 text-[9px] sm:text-[10px] font-semibold uppercase tracking-wider text-muted-foreground bg-background border border-border/60 rounded-full px-2 py-0.5 shadow-2xs">
              <Users className="size-2.5 text-primary" aria-hidden="true" />
              BSE · CDSL Depository
            </span>
            <span className="inline-flex items-center gap-1 text-[9px] sm:text-[10px] font-semibold uppercase tracking-wider text-green-800 dark:text-green-300 bg-green-50 dark:bg-green-950/40 border border-green-200 dark:border-green-800 rounded-full px-2 py-0.5 shadow-2xs">
              <Award className="size-2.5" aria-hidden="true" />
              Est. 2010
            </span>
          </div>

        </div>
      </div>
    </div>
  );
}
