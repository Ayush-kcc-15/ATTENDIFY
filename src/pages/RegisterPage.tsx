import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Eye, EyeOff, Loader2 } from "lucide-react";
import { AuthShell, SocialButtons } from "@/components/layout/auth-shell";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";

export default function RegisterPage() {
  const navigate = useNavigate();
  const [show, setShow] = useState(false);
  const [loading, setLoading] = useState(false);

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => navigate("/login"), 700);
  };

  return (
    <AuthShell title="Create your account" subtitle="Start managing attendance in minutes.">
      <form onSubmit={submit} className="space-y-4">
        <div className="grid grid-cols-2 gap-3">
          <div className="space-y-1.5">
            <label className="text-sm font-medium">First name</label>
            <Input required placeholder="Jane" className="rounded-xl" />
          </div>
          <div className="space-y-1.5">
            <label className="text-sm font-medium">Last name</label>
            <Input required placeholder="Doe" className="rounded-xl" />
          </div>
        </div>
        <div className="space-y-1.5">
          <label className="text-sm font-medium">Email</label>
          <Input type="email" required placeholder="you@institution.edu" className="rounded-xl" />
        </div>
        <div className="space-y-1.5">
          <label className="text-sm font-medium">Institution</label>
          <Input required placeholder="Northgate University" className="rounded-xl" />
        </div>
        <div className="space-y-1.5">
          <label className="text-sm font-medium">Password</label>
          <div className="relative">
            <Input type={show ? "text" : "password"} required placeholder="Create a password" className="rounded-xl pr-10" />
            <button type="button" onClick={() => setShow(!show)} className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground" aria-label="Toggle password">
              {show ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
            </button>
          </div>
        </div>
        <label className="flex items-start gap-2 text-sm text-muted-foreground">
          <Checkbox required className="mt-0.5" />
          <span>
            I agree to the{" "}
            <a href="#" className="font-medium text-primary hover:underline">Terms</a> and{" "}
            <a href="#" className="font-medium text-primary hover:underline">Privacy Policy</a>.
          </span>
        </label>
        <Button type="submit" className="w-full rounded-xl" disabled={loading}>
          {loading && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
          Create account
        </Button>
      </form>

      <div className="my-6 flex items-center gap-3">
        <span className="h-px flex-1 bg-border" />
        <span className="text-xs text-muted-foreground">or sign up with</span>
        <span className="h-px flex-1 bg-border" />
      </div>
      <SocialButtons />

      <p className="mt-6 text-center text-sm text-muted-foreground">
        Already have an account?{" "}
        <Link to="/login" className="font-medium text-primary hover:underline">
          Sign in
        </Link>
      </p>
    </AuthShell>
  );
}
