import {
  LayoutDashboard,
  Users,
  GraduationCap,
  BookOpen,
  Layers,
  CalendarCheck,
  FileBarChart,
  PieChart,
  CalendarClock,
  Bell,
  Settings,
  History,
  ClipboardCheck,
  CalendarDays,
  User,
  Plane,
  type LucideIcon,
} from "lucide-react";

export interface NavItem {
  label: string;
  to: string;
  icon: LucideIcon;
}

export const adminNav: NavItem[] = [
  { label: "Dashboard", to: "/admin", icon: LayoutDashboard },
  { label: "Teachers", to: "/admin/teachers", icon: GraduationCap },
  { label: "Students", to: "/admin/students", icon: Users },
  { label: "Classes", to: "/admin/classes", icon: Layers },
  { label: "Subjects", to: "/admin/subjects", icon: BookOpen },
  { label: "Attendance", to: "/admin/attendance", icon: CalendarCheck },
  { label: "Reports", to: "/admin/reports", icon: FileBarChart },
  { label: "Analytics", to: "/admin/analytics", icon: PieChart },
  { label: "Leave Requests", to: "/admin/leave", icon: Plane },
  { label: "Notifications", to: "/admin/notifications", icon: Bell },
  { label: "Settings", to: "/admin/settings", icon: Settings },
];

export const teacherNav: NavItem[] = [
  { label: "Dashboard", to: "/teacher", icon: LayoutDashboard },
  { label: "Today's Classes", to: "/teacher/classes", icon: CalendarClock },
  { label: "Take Attendance", to: "/teacher/take-attendance", icon: ClipboardCheck },
  { label: "Attendance History", to: "/teacher/history", icon: History },
  { label: "Students", to: "/teacher/students", icon: Users },
  { label: "Subjects", to: "/teacher/subjects", icon: BookOpen },
  { label: "Reports", to: "/teacher/reports", icon: FileBarChart },
  { label: "Leave Requests", to: "/teacher/leave", icon: Plane },
  { label: "Notifications", to: "/teacher/notifications", icon: Bell },
  { label: "Profile", to: "/teacher/profile", icon: User },
];

export const studentNav: NavItem[] = [
  { label: "Dashboard", to: "/student", icon: LayoutDashboard },
  { label: "Attendance", to: "/student/attendance", icon: CalendarCheck },
  { label: "Subjects", to: "/student/subjects", icon: BookOpen },
  { label: "Calendar", to: "/student/calendar", icon: CalendarDays },
  { label: "Leave Requests", to: "/student/leave", icon: Plane },
  { label: "Notifications", to: "/student/notifications", icon: Bell },
  { label: "Profile", to: "/student/profile", icon: User },
];