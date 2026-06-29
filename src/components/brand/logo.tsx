import { cn } from "@/lib/utils";

export function LogoMark({ className }: { className?: string }) {
  return (
    <span
      className={cn(
        "inline-flex h-9 w-9 items-center justify-center rounded-xl bg-primary text-primary-foreground shadow-soft",
        className,
      )}
      aria-hidden="true"
    >
      <svg
        viewBox="0 0 24 24"
        fill="none"
        className="h-5 w-5"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M7 18h9.5a3.5 3.5 0 0 0 .6-6.95 5 5 0 0 0-9.67-1.4A4 4 0 0 0 7 18Z"
          fill="currentColor"
          fillOpacity="0.25"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinejoin="round"
        />
        <path
          d="m9.5 12.5 2 2 3.5-3.8"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </span>
  );
}

export function Logo({
  className,
  showText = true,
}: {
  className?: string;
  showText?: boolean;
}) {
  return (
    <span className={cn("inline-flex items-center gap-2.5", className)}>
      <LogoMark />
      {showText && (
        <span className="text-lg font-semibold tracking-tight text-foreground">
          Attendify
        </span>
      )}
    </span>
  );
}