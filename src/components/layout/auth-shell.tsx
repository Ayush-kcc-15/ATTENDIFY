import { type ReactNode } from "react";
import { Link } from "react-router-dom";
import { CalendarCheck, Cloud, ShieldCheck } from "lucide-react";
import { Logo } from "@/components/brand/logo";
import { ThemeToggle } from "@/components/layout/theme-toggle";

export function AuthShell({
  title,
  subtitle,
  children,
}: {
  title: string;
  subtitle: string;
  children: ReactNode;
}) {
  return (
    <div className="grid min-h-screen lg:grid-cols-2">
      {/* Illustration side */}
      <div className="relative hidden overflow-hidden bg-primary lg:flex lg:flex-col lg:justify-between lg:p-12">
        <div className="absolute inset-0 hero-grid opacity-10" />
        <div className="absolute -bottom-24 -right-24 h-96 w-96 rounded-full bg-white/10 blur-3xl" />
        <Link to="/" className="relative z-10 inline-flex">
          <Logo className="[&_span]:text-primary-foreground [&>span:first-child]:bg-white [&>span:first-child]:text-primary" />
        </Link>
        <div className="relative z-10 max-w-md">
          <h2 className="text-3xl font-bold text-primary-foreground">
            Smart cloud attendance, beautifully simple.
          </h2>
          <p className="mt-4 text-primary-foreground/80">
            Join institutions worldwide using Attendify to track attendance,
            manage classes, and unlock real-time insights.
          </p>
          <ul className="mt-8 space-y-4">
            {[
              { icon: Cloud, text: "Always-available cloud records" },
              { icon: CalendarCheck, text: "Attendance in seconds" },
              { icon: ShieldCheck, text: "Role-based security by default" },
            ].map((f) => (
              <li key={f.text} className="flex items-center gap-3 text-primary-foreground">
                <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-white/15">
                  <f.icon className="h-4 w-4" />
                </span>
                {f.text}
              </li>
            ))}
          </ul>
        </div>
        <p className="relative z-10 text-sm text-primary-foreground/70">
          © {new Date().getFullYear()} Attendify
        </p>
      </div>

      {/* Form side */}
      <div className="relative flex flex-col px-4 py-8 sm:px-6">
        <div className="flex items-center justify-between">
          <Link to="/" className="lg:hidden">
            <Logo />
          </Link>
          <div className="ml-auto">
            <ThemeToggle />
          </div>
        </div>
        <div className="flex flex-1 items-center justify-center">
          <div className="w-full max-w-sm animate-fade-up">
            <h1 className="text-2xl font-bold tracking-tight">{title}</h1>
            <p className="mt-1.5 text-sm text-muted-foreground">{subtitle}</p>
            <div className="mt-8">{children}</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export function SocialButtons() {
  return (
    <div className="grid grid-cols-2 gap-3">
      <button
        type="button"
        className="flex h-10 items-center justify-center gap-2 rounded-xl border border-input bg-background text-sm font-medium transition-colors hover:bg-accent"
      >
        <svg className="h-4 w-4" viewBox="0 0 24 24">
          <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92a5.06 5.06 0 0 1-2.2 3.32v2.77h3.57c2.08-1.92 3.27-4.74 3.27-8.1Z" />
          <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84A11 11 0 0 0 12 23Z" />
          <path fill="#FBBC05" d="M5.84 14.1a6.6 6.6 0 0 1 0-4.2V7.06H2.18a11 11 0 0 0 0 9.88l3.66-2.84Z" />
          <path fill="#EA4335" d="M12 4.75c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 1.46 14.97.5 12 .5A11 11 0 0 0 2.18 7.06L5.84 9.9C6.71 7.3 9.14 4.75 12 4.75Z" />
        </svg>
        Google
      </button>
      <button
        type="button"
        className="flex h-10 items-center justify-center gap-2 rounded-xl border border-input bg-background text-sm font-medium transition-colors hover:bg-accent"
      >
        <svg className="h-4 w-4 fill-foreground" viewBox="0 0 24 24">
          <path d="M16.36 1.43c0 1.14-.42 2.2-1.13 3-.78.9-2.06 1.6-3.13 1.5a3.7 3.7 0 0 1 1.07-2.93C13.94 2.06 15.2 1.5 16.36 1.43ZM20.5 17.2c-.55 1.26-.81 1.82-1.52 2.94-.99 1.56-2.39 3.5-4.12 3.51-1.54.02-1.93-1-4.02-.99-2.09.01-2.52 1.01-4.06.99-1.73-.01-3.05-1.76-4.04-3.32C-.16 16.7-.44 11.3 1.27 8.43c.99-1.65 2.55-2.7 4.04-2.7 1.51 0 2.46 1 3.96 1 1.45 0 2.34-1 4.09-1 1.32 0 2.72.72 3.72 1.96-3.27 1.79-2.74 6.46.42 7.5Z" />
        </svg>
        Apple
      </button>
    </div>
  );
}