import { useState, type ReactNode } from "react";
import { Link, useLocation } from "react-router-dom";
import {
  Bell,
  ChevronRight,
  LogOut,
  Menu,
  Search,
  Settings,
  User,
} from "lucide-react";
import { Logo, LogoMark } from "@/components/brand/logo";
import { ThemeToggle } from "@/components/layout/theme-toggle";
import type { NavItem } from "@/components/layout/nav-config";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Sheet, SheetContent, SheetTitle } from "@/components/ui/sheet";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { notifications } from "@/data/sample";
import { cn } from "@/lib/utils";

interface DashboardShellProps {
  nav: NavItem[];
  roleLabel: string;
  userName: string;
  children: ReactNode;
}

function NavLinks({ nav, onNavigate, pathname }: { nav: NavItem[]; onNavigate?: () => void; pathname: string }) {
  return (
    <nav className="flex flex-col gap-1 px-3">
      {nav.map((item) => {
        const active =
          item.to === pathname ||
          (item.to !== "/admin" &&
            item.to !== "/teacher" &&
            item.to !== "/student" &&
            pathname.startsWith(item.to));
        return (
          <Link
            key={item.to}
            to={item.to}
            onClick={onNavigate}
            className={cn(
              "group flex items-center gap-3 rounded-xl px-3 py-2.5 text-sm font-medium transition-all duration-200",
              active
                ? "bg-secondary text-primary shadow-soft"
                : "text-sidebar-foreground hover:bg-sidebar-accent hover:text-sidebar-accent-foreground",
            )}
          >
            <item.icon className="h-[18px] w-[18px] shrink-0" />
            <span>{item.label}</span>
          </Link>
        );
      })}
    </nav>
  );
}

function unreadCount() {
  return notifications.filter((n) => !n.read).length;
}

export function DashboardShell({
  nav,
  roleLabel,
  userName,
  children,
}: DashboardShellProps) {
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();
  const pathname = location.pathname;
  const current = nav.find(
    (n) => n.to === pathname || (n.to !== `/${roleLabel.toLowerCase()}` && pathname.startsWith(n.to)),
  );
  const initials = userName
    .split(" ")
    .map((p) => p[0])
    .slice(0, 2)
    .join("");

  return (
    <div className="min-h-screen bg-background">
      {/* Desktop sidebar */}
      <aside className="fixed inset-y-0 left-0 z-40 hidden w-64 flex-col border-r border-sidebar-border bg-sidebar lg:flex">
        <div className="flex h-16 items-center px-6">
          <Link to="/">
            <Logo />
          </Link>
        </div>
        <div className="px-6 pb-3">
          <span className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
            {roleLabel} Portal
          </span>
        </div>
        <div className="flex-1 overflow-y-auto pb-4">
          <NavLinks nav={nav} pathname={pathname} />
        </div>
        <div className="border-t border-sidebar-border p-3">
          <Link
            to="/"
            className="flex items-center gap-3 rounded-xl px-3 py-2.5 text-sm font-medium text-muted-foreground transition-colors hover:bg-sidebar-accent"
          >
            <LogOut className="h-[18px] w-[18px]" />
            Sign out
          </Link>
        </div>
      </aside>

      {/* Mobile sidebar */}
      <Sheet open={mobileOpen} onOpenChange={setMobileOpen}>
        <SheetContent side="left" className="w-72 bg-sidebar p-0">
          <SheetTitle className="sr-only">Navigation</SheetTitle>
          <div className="flex h-16 items-center px-6">
            <Logo />
          </div>
          <div className="px-6 pb-3">
            <span className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
              {roleLabel} Portal
            </span>
          </div>
          <NavLinks nav={nav} pathname={pathname} onNavigate={() => setMobileOpen(false)} />
        </SheetContent>
      </Sheet>

      <div className="lg:pl-64">
        {/* Topbar */}
        <header className="sticky top-0 z-30 flex h-16 items-center gap-3 border-b border-border glass px-4 sm:px-6">
          <Button
            variant="ghost"
            size="icon"
            className="lg:hidden"
            onClick={() => setMobileOpen(true)}
            aria-label="Open menu"
          >
            <Menu className="h-5 w-5" />
          </Button>

          <div className="hidden items-center gap-1.5 text-sm text-muted-foreground md:flex">
            <span>{roleLabel}</span>
            <ChevronRight className="h-4 w-4" />
            <span className="font-medium text-foreground">
              {current?.label ?? "Dashboard"}
            </span>
          </div>

          <div className="relative ml-auto hidden w-full max-w-xs sm:block">
            <Search className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
            <Input
              placeholder="Search..."
              className="h-9 rounded-xl pl-9"
              aria-label="Search"
            />
          </div>

          <ThemeToggle />

          <Popover>
            <PopoverTrigger asChild>
              <Button variant="ghost" size="icon" className="relative rounded-full" aria-label="Notifications">
                <Bell className="h-5 w-5" />
                {unreadCount() > 0 && (
                  <span className="absolute right-1.5 top-1.5 flex h-4 w-4 items-center justify-center rounded-full bg-destructive text-[10px] font-bold text-destructive-foreground">
                    {unreadCount()}
                  </span>
                )}
              </Button>
            </PopoverTrigger>
            <PopoverContent align="end" className="w-80 p-0">
              <div className="flex items-center justify-between border-b border-border px-4 py-3">
                <span className="text-sm font-semibold">Notifications</span>
                <Badge variant="secondary" className="rounded-full">{unreadCount()} new</Badge>
              </div>
              <div className="max-h-80 overflow-y-auto">
                {notifications.map((n) => (
                  <div
                    key={n.id}
                    className="flex gap-3 border-b border-border px-4 py-3 last:border-0 hover:bg-muted/50"
                  >
                    <span
                      className={cn(
                        "mt-1.5 h-2 w-2 shrink-0 rounded-full",
                        n.read ? "bg-muted-foreground/30" : "bg-primary",
                      )}
                    />
                    <div className="space-y-0.5">
                      <p className="text-sm font-medium leading-tight">{n.title}</p>
                      <p className="text-xs text-muted-foreground">{n.message}</p>
                      <p className="text-[11px] text-muted-foreground">{n.time}</p>
                    </div>
                  </div>
                ))}
              </div>
            </PopoverContent>
          </Popover>

          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <button className="flex items-center gap-2 rounded-full outline-none ring-ring focus-visible:ring-2">
                <Avatar className="h-9 w-9">
                  <AvatarFallback className="bg-primary text-primary-foreground text-xs font-semibold">
                    {initials}
                  </AvatarFallback>
                </Avatar>
              </button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="w-56">
              <DropdownMenuLabel>
                <div className="flex flex-col">
                  <span className="text-sm font-medium">{userName}</span>
                  <span className="text-xs text-muted-foreground">{roleLabel}</span>
                </div>
              </DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem>
                <User className="mr-2 h-4 w-4" /> Profile
              </DropdownMenuItem>
              <DropdownMenuItem>
                <Settings className="mr-2 h-4 w-4" /> Settings
              </DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem asChild>
                <Link to="/">
                  <LogOut className="mr-2 h-4 w-4" /> Sign out
                </Link>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </header>

        <main className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">{children}</main>
      </div>
    </div>
  );
}

export function ShellFallbackLogo() {
  return <LogoMark />;
}