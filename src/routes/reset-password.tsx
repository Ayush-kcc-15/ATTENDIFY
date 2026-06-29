import { useState } from "react";
import { createFileRoute, Link, useNavigate } from "@tanstack/react-router";
import { Eye, EyeOff, Loader2 } from "lucide-react";
import { AuthShell } from "@/components/layout/auth-shell";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export const Route = createFileRoute("/reset-password")({
  head: () => ({ meta: [{ title: "Set new password — Attendify" }] }),
  component: ResetPasswordPage,
});

function ResetPasswordPage() {
  const navigate = useNavigate();
  const [show, setShow] = useState(false);
  const [loading, setLoading] = useState(false);

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => navigate({ to: "/login" }), 700);
  };

  return (
    <AuthShell title="Set a new password" subtitle="Choose a strong password for your account.">
      <form onSubmit={submit} className="space-y-4">
        <div className="space-y-1.5">
          <label className="text-sm font-medium">New password</label>
          <div className="relative">
            <Input type={show ? "text" : "password"} required placeholder="New password" className="rounded-xl pr-10" />
            <button type="button" onClick={() => setShow(!show)} className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground" aria-label="Toggle password">
              {show ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
            </button>
          </div>
        </div>
        <div className="space-y-1.5">
          <label className="text-sm font-medium">Confirm password</label>
          <Input type={show ? "text" : "password"} required placeholder="Confirm password" className="rounded-xl" />
        </div>
        <Button type="submit" className="w-full rounded-xl" disabled={loading}>
          {loading && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
          Update password
        </Button>
      </form>
      <Link to="/login" className="mt-6 block text-center text-sm font-medium text-muted-foreground hover:text-foreground">
        Back to sign in
      </Link>
    </AuthShell>
  );
}
