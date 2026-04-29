import { ShieldCheck, TrendingUp, Users, Award } from "lucide-react";
import { COMPANY_INFO, REGISTRATION_DETAILS } from "@/lib/constants";

export default function CompanyIntro() {
  return (
    <div className="w-full border-b border-border/40 bg-muted/30">
      {/* Top row — full company name */}
      <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="py-3 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">

          {/* Company full name */}
          <div className="flex items-center gap-2.5">
            <ShieldCheck className="h-4 w-4 text-primary shrink-0" />
            <p className="text-sm font-bold text-foreground leading-none">
              {COMPANY_INFO.name}
            </p>
          </div>

          {/* Quick reg badges */}
          <div className="flex items-center gap-3 flex-wrap">
            <span className="inline-flex items-center gap-1 text-[10px] font-bold uppercase tracking-wider text-muted-foreground bg-background border border-border/50 rounded-full px-2.5 py-1">
              <TrendingUp className="h-3 w-3 text-primary" />
              SEBI Reg: INZ000231135
            </span>
            <span className="hidden sm:inline-flex items-center gap-1 text-[10px] font-bold uppercase tracking-wider text-muted-foreground bg-background border border-border/50 rounded-full px-2.5 py-1">
              <Users className="h-3 w-3 text-primary" />
              BSE · CDSL Depository

            </span>
            <span className="inline-flex items-center gap-1 text-[10px] font-bold uppercase tracking-wider text-green-700 bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-full px-2.5 py-1">
              <Award className="h-3 w-3" />
              Est. 2010
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
