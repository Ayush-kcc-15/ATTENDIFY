import { type LucideIcon } from "lucide-react";
import { ArrowDownRight, ArrowUpRight } from "lucide-react";
import { Card } from "@/components/ui/card";
import { cn } from "@/lib/utils";

interface StatCardProps {
  label: string;
  value: string;
  icon: LucideIcon;
  trend?: number;
  hint?: string;
}

export function StatCard({ label, value, icon: Icon, trend, hint }: StatCardProps) {
  const positive = (trend ?? 0) >= 0;
  return (
    <Card className="group relative overflow-hidden p-5 shadow-soft transition-all duration-300 hover:-translate-y-0.5 hover:shadow-card">
      <div className="flex items-start justify-between">
        <div className="space-y-1.5">
          <p className="text-sm font-medium text-muted-foreground">{label}</p>
          <p className="text-2xl font-semibold tracking-tight">{value}</p>
        </div>
        <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-secondary text-primary">
          <Icon className="h-5 w-5" />
        </span>
      </div>
      {(trend !== undefined || hint) && (
        <div className="mt-3 flex items-center gap-2 text-xs">
          {trend !== undefined && (
            <span
              className={cn(
                "inline-flex items-center gap-0.5 font-medium",
                positive ? "text-success" : "text-destructive",
              )}
            >
              {positive ? (
                <ArrowUpRight className="h-3.5 w-3.5" />
              ) : (
                <ArrowDownRight className="h-3.5 w-3.5" />
              )}
              {Math.abs(trend)}%
            </span>
          )}
          {hint && <span className="text-muted-foreground">{hint}</span>}
        </div>
      )}
    </Card>
  );
}