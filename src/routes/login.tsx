import { useState } from "react";
import { createFileRoute, Link, useNavigate } from "@tanstack/react-router";
import { Eye, EyeOff, Loader2 } from "lucide-react";
import { AuthShell, SocialButtons } from "@/components/layout/auth-shell";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";
import { cn } from "@/lib/utils";

export const Route = createFileRoute("/login")({
  head: () => ({ meta: [{ title: "Sign in — Attendify" }] }),
  component: LoginPage,
});

const roles = [
  { id: "admin", label: "Admin", to: "/admin" },
  { id: "teacher", label: "Teacher", to: "/teacher" },
  { id: "student", label: "Student", to: "/student" },
] as const;

function LoginPage() {
  const navigate = useNavigate();
  const [show, setShow] = useState(false);
  const [loading, setLoading] = useState(false);
  const [role, setRole] = useState<(typeof roles)[number]>(roles[0]);

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => navigate({ to: role.to }), 700);
  };

  return (
    <AuthShell title="Welcome back" subtitle="Sign in to your Attendify account.">
      <div className="mb-6">
        <p className="mb-2 text-xs font-medium text-muted-foreground">Sign in as</p>
        <div className="grid grid-cols-3 gap-2 rounded-xl bg-muted p-1">
          {roles.map((r) => (
            <button
              key={r.id}
              type="button"
              onClick={() => setRole(r)}
              className={cn(
                "rounded-lg py-1.5 text-sm font-medium transition-all",
                role.id === r.id
                  ? "bg-card text-foreground shadow-soft"
                  : "text-muted-foreground hover:text-foreground",
              )}
            >
              {r.label}
            </button>
          ))}
        </div>
      </div>

      <form onSubmit={submit} className="space-y-4">
        <div className="space-y-1.5">
          <label className="text-sm font-medium">Email</label>
          <Input type="email" required placeholder="you@institution.edu" defaultValue="demo@attendify.io" className="rounded-xl" />
        </div>
        <div className="space-y-1.5">
          <div className="flex items-center justify-between">
            <label className="text-sm font-medium">Password</label>
            <Link to="/forgot-password" className="text-xs font-medium text-primary hover:underline">
              Forgot password?
            </Link>
          </div>
          <div className="relative">
            <Input type={show ? "text" : "password"} required defaultValue="password" className="rounded-xl pr-10" />
            <button type="button" onClick={() => setShow(!show)} className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground" aria-label="Toggle password">
              {show ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
            </button>
          </div>
        </div>
        <label className="flex items-center gap-2 text-sm">
          <Checkbox defaultChecked /> Remember me
        </label>
        <Button type="submit" className="w-full rounded-xl" disabled={loading}>
          {loading && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
          Sign in
        </Button>
      </form>

      <div className="my-6 flex items-center gap-3">
        <span className="h-px flex-1 bg-border" />
        <span className="text-xs text-muted-foreground">or continue with</span>
        <span className="h-px flex-1 bg-border" />
      </div>
      <SocialButtons />

      <p className="mt-6 text-center text-sm text-muted-foreground">
        Don't have an account?{" "}
        <Link to="/register" className="font-medium text-primary hover:underline">
          Create one
        </Link>
      </p>
    </AuthShell>
  );
}
