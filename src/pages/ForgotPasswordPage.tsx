import { useState } from "react";
import { Link } from "react-router-dom";
import { ArrowLeft, Loader2, MailCheck } from "lucide-react";
import { AuthShell } from "@/components/layout/auth-shell";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export default function ForgotPasswordPage() {
  const [loading, setLoading] = useState(false);
  const [sent, setSent] = useState(false);

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSent(true);
    }, 700);
  };

  return (
    <AuthShell title="Forgot password?" subtitle="Enter your email and we'll send you a reset link.">
      {sent ? (
        <div className="rounded-2xl border border-border bg-card p-6 text-center">
          <span className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-success/15 text-success">
            <MailCheck className="h-6 w-6" />
          </span>
          <p className="mt-4 font-medium">Check your inbox</p>
          <p className="mt-1 text-sm text-muted-foreground">
            We've sent a password reset link to your email address.
          </p>
        </div>
      ) : (
        <form onSubmit={submit} className="space-y-4">
          <div className="space-y-1.5">
            <label className="text-sm font-medium">Email</label>
            <Input type="email" required placeholder="you@institution.edu" className="rounded-xl" />
          </div>
          <Button type="submit" className="w-full rounded-xl" disabled={loading}>
            {loading && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
            Send reset link
          </Button>
        </form>
      )}
      <Link to="/login" className="mt-6 flex items-center justify-center gap-1.5 text-sm font-medium text-muted-foreground hover:text-foreground">
        <ArrowLeft className="h-4 w-4" /> Back to sign in
      </Link>
    </AuthShell>
  );
}
