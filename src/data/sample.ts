// Realistic sample data for the Attendify frontend (no backend yet).

export type AttendanceStatus = "present" | "absent" | "late" | "leave";
export type Role = "admin" | "teacher" | "student";

export interface Student {
  id: string;
  name: string;
  email: string;
  roll: string;
  className: string;
  section: string;
  attendance: number;
  status: "active" | "inactive";
}

export interface Teacher {
  id: string;
  name: string;
  email: string;
  employeeId: string;
  department: string;
  designation: string;
  classes: number;
  status: "active" | "inactive";
}

export const students: Student[] = [
  { id: "S-1024", name: "Aarav Sharma", email: "aarav.sharma@uni.edu", roll: "CS21-001", className: "BSc CS — Year 3", section: "A", attendance: 96, status: "active" },
  { id: "S-1025", name: "Priya Patel", email: "priya.patel@uni.edu", roll: "CS21-002", className: "BSc CS — Year 3", section: "A", attendance: 88, status: "active" },
  { id: "S-1026", name: "Rohan Mehta", email: "rohan.mehta@uni.edu", roll: "CS21-003", className: "BSc CS — Year 3", section: "B", attendance: 73, status: "active" },
  { id: "S-1027", name: "Ananya Singh", email: "ananya.singh@uni.edu", roll: "CS21-004", className: "BSc CS — Year 3", section: "A", attendance: 91, status: "active" },
  { id: "S-1028", name: "Vikram Nair", email: "vikram.nair@uni.edu", roll: "CS21-005", className: "BSc CS — Year 3", section: "B", attendance: 64, status: "active" },
  { id: "S-1029", name: "Isha Gupta", email: "isha.gupta@uni.edu", roll: "CS21-006", className: "BSc CS — Year 3", section: "A", attendance: 99, status: "active" },
  { id: "S-1030", name: "Kabir Khan", email: "kabir.khan@uni.edu", roll: "CS21-007", className: "BSc CS — Year 3", section: "B", attendance: 81, status: "active" },
  { id: "S-1031", name: "Meera Joshi", email: "meera.joshi@uni.edu", roll: "CS21-008", className: "BSc CS — Year 3", section: "A", attendance: 85, status: "active" },
  { id: "S-1032", name: "Arjun Reddy", email: "arjun.reddy@uni.edu", roll: "CS21-009", className: "BSc CS — Year 3", section: "B", attendance: 58, status: "inactive" },
  { id: "S-1033", name: "Diya Kapoor", email: "diya.kapoor@uni.edu", roll: "CS21-010", className: "BSc CS — Year 3", section: "A", attendance: 94, status: "active" },
  { id: "S-1034", name: "Aditya Verma", email: "aditya.verma@uni.edu", roll: "CS21-011", className: "BSc CS — Year 3", section: "B", attendance: 77, status: "active" },
  { id: "S-1035", name: "Saanvi Rao", email: "saanvi.rao@uni.edu", roll: "CS21-012", className: "BSc CS — Year 3", section: "A", attendance: 90, status: "active" },
];

export const teachers: Teacher[] = [
  { id: "T-201", name: "Dr. Neha Bansal", email: "neha.bansal@uni.edu", employeeId: "EMP-2201", department: "Computer Science", designation: "Professor", classes: 5, status: "active" },
  { id: "T-202", name: "Prof. Sanjay Iyer", email: "sanjay.iyer@uni.edu", employeeId: "EMP-2202", department: "Mathematics", designation: "Associate Professor", classes: 4, status: "active" },
  { id: "T-203", name: "Dr. Pooja Desai", email: "pooja.desai@uni.edu", employeeId: "EMP-2203", department: "Physics", designation: "Assistant Professor", classes: 3, status: "active" },
  { id: "T-204", name: "Mr. Rahul Chopra", email: "rahul.chopra@uni.edu", employeeId: "EMP-2204", department: "Computer Science", designation: "Lecturer", classes: 6, status: "active" },
  { id: "T-205", name: "Dr. Kavya Menon", email: "kavya.menon@uni.edu", employeeId: "EMP-2205", department: "Electronics", designation: "Professor", classes: 4, status: "inactive" },
];

export const subjects = [
  { id: "SUB-01", name: "Cloud Computing", code: "CS-501", teacher: "Dr. Neha Bansal", credits: 4, classes: 3 },
  { id: "SUB-02", name: "Data Structures", code: "CS-302", teacher: "Mr. Rahul Chopra", credits: 4, classes: 4 },
  { id: "SUB-03", name: "Linear Algebra", code: "MA-201", teacher: "Prof. Sanjay Iyer", credits: 3, classes: 2 },
  { id: "SUB-04", name: "Quantum Physics", code: "PH-410", teacher: "Dr. Pooja Desai", credits: 3, classes: 2 },
  { id: "SUB-05", name: "Operating Systems", code: "CS-405", teacher: "Dr. Neha Bansal", credits: 4, classes: 3 },
  { id: "SUB-06", name: "Digital Electronics", code: "EC-210", teacher: "Dr. Kavya Menon", credits: 3, classes: 2 },
];

export const classes = [
  { id: "C-01", name: "BSc CS — Year 3", year: "2024-25", teacher: "Dr. Neha Bansal", students: 64, sections: 2 },
  { id: "C-02", name: "BSc CS — Year 2", year: "2024-25", teacher: "Mr. Rahul Chopra", students: 72, sections: 2 },
  { id: "C-03", name: "BSc Physics — Year 1", year: "2024-25", teacher: "Dr. Pooja Desai", students: 48, sections: 1 },
  { id: "C-04", name: "BTech ECE — Year 4", year: "2024-25", teacher: "Dr. Kavya Menon", students: 56, sections: 2 },
];

export const attendanceRecords = [
  { id: "A-9001", student: "Aarav Sharma", subject: "Cloud Computing", className: "BSc CS — Year 3", date: "2026-06-26", status: "present" as AttendanceStatus, teacher: "Dr. Neha Bansal" },
  { id: "A-9002", student: "Priya Patel", subject: "Cloud Computing", className: "BSc CS — Year 3", date: "2026-06-26", status: "present" as AttendanceStatus, teacher: "Dr. Neha Bansal" },
  { id: "A-9003", student: "Rohan Mehta", subject: "Cloud Computing", className: "BSc CS — Year 3", date: "2026-06-26", status: "late" as AttendanceStatus, teacher: "Dr. Neha Bansal" },
  { id: "A-9004", student: "Ananya Singh", subject: "Data Structures", className: "BSc CS — Year 3", date: "2026-06-26", status: "present" as AttendanceStatus, teacher: "Mr. Rahul Chopra" },
  { id: "A-9005", student: "Vikram Nair", subject: "Data Structures", className: "BSc CS — Year 3", date: "2026-06-26", status: "absent" as AttendanceStatus, teacher: "Mr. Rahul Chopra" },
  { id: "A-9006", student: "Isha Gupta", subject: "Operating Systems", className: "BSc CS — Year 3", date: "2026-06-25", status: "present" as AttendanceStatus, teacher: "Dr. Neha Bansal" },
  { id: "A-9007", student: "Kabir Khan", subject: "Operating Systems", className: "BSc CS — Year 3", date: "2026-06-25", status: "leave" as AttendanceStatus, teacher: "Dr. Neha Bansal" },
  { id: "A-9008", student: "Meera Joshi", subject: "Linear Algebra", className: "BSc CS — Year 3", date: "2026-06-25", status: "present" as AttendanceStatus, teacher: "Prof. Sanjay Iyer" },
  { id: "A-9009", student: "Arjun Reddy", subject: "Linear Algebra", className: "BSc CS — Year 3", date: "2026-06-25", status: "absent" as AttendanceStatus, teacher: "Prof. Sanjay Iyer" },
  { id: "A-9010", student: "Diya Kapoor", subject: "Quantum Physics", className: "BSc CS — Year 3", date: "2026-06-24", status: "present" as AttendanceStatus, teacher: "Dr. Pooja Desai" },
];

export const leaveRequests = [
  { id: "L-301", student: "Rohan Mehta", reason: "Medical appointment", from: "2026-06-29", to: "2026-06-30", status: "pending" as const },
  { id: "L-302", student: "Vikram Nair", reason: "Family function", from: "2026-07-02", to: "2026-07-04", status: "approved" as const },
  { id: "L-303", student: "Arjun Reddy", reason: "Sports tournament", from: "2026-06-27", to: "2026-06-28", status: "rejected" as const },
  { id: "L-304", student: "Meera Joshi", reason: "Personal", from: "2026-07-05", to: "2026-07-05", status: "pending" as const },
];

export const notifications = [
  { id: "N-1", title: "Attendance submitted", message: "Cloud Computing attendance for BSc CS — Year 3 was recorded.", time: "12m ago", read: false },
  { id: "N-2", title: "Leave approved", message: "Vikram Nair's leave request was approved.", time: "1h ago", read: false },
  { id: "N-3", title: "New announcement", message: "Mid-term schedule published for all classes.", time: "3h ago", read: false },
  { id: "N-4", title: "Profile updated", message: "Your profile details were updated successfully.", time: "Yesterday", read: true },
  { id: "N-5", title: "Password changed", message: "Your account password was changed.", time: "2 days ago", read: true },
];

export const announcements = [
  { id: "AN-1", title: "Mid-term exam schedule", body: "Mid-term examinations begin July 14th. Check your dashboard for the full timetable.", author: "Admin Office", date: "2026-06-27", pinned: true },
  { id: "AN-2", title: "Cloud Computing lab rescheduled", body: "Friday's lab session has moved to the Innovation Hub, Block C.", author: "Dr. Neha Bansal", date: "2026-06-26", pinned: false },
  { id: "AN-3", title: "Library hours extended", body: "The central library will stay open until 11 PM during exam week.", author: "Admin Office", date: "2026-06-24", pinned: false },
];

export const recentActivity = [
  { id: "act-1", actor: "Dr. Neha Bansal", action: "submitted attendance for Cloud Computing", time: "12m ago" },
  { id: "act-2", actor: "Priya Patel", action: "applied for leave", time: "48m ago" },
  { id: "act-3", actor: "Admin Office", action: "published a new announcement", time: "3h ago" },
  { id: "act-4", actor: "Mr. Rahul Chopra", action: "updated Data Structures attendance", time: "5h ago" },
  { id: "act-5", actor: "Arjun Reddy", action: "logged in", time: "6h ago" },
];

// Chart data
export const weeklyAttendance = [
  { day: "Mon", present: 312, absent: 28 },
  { day: "Tue", present: 298, absent: 42 },
  { day: "Wed", present: 326, absent: 14 },
  { day: "Thu", present: 305, absent: 35 },
  { day: "Fri", present: 289, absent: 51 },
  { day: "Sat", present: 271, absent: 69 },
];

export const monthlyTrend = [
  { month: "Jan", rate: 88 },
  { month: "Feb", rate: 91 },
  { month: "Mar", rate: 86 },
  { month: "Apr", rate: 93 },
  { month: "May", rate: 90 },
  { month: "Jun", rate: 94 },
];

export const statusBreakdown = [
  { name: "Present", value: 1801, color: "var(--color-chart-1)" },
  { name: "Late", value: 142, color: "var(--color-chart-4)" },
  { name: "Leave", value: 96, color: "var(--color-chart-2)" },
  { name: "Absent", value: 239, color: "var(--color-chart-5)" },
];

export const studentMonthly = [
  { month: "Jan", present: 18, absent: 2 },
  { month: "Feb", present: 19, absent: 1 },
  { month: "Mar", present: 16, absent: 4 },
  { month: "Apr", present: 20, absent: 0 },
  { month: "May", present: 17, absent: 3 },
  { month: "Jun", present: 19, absent: 1 },
];

export const universities = [
  "Northgate University",
  "Riverside Institute",
  "Crestview College",
  "Summit Tech",
  "Vanguard University",
  "Meridian School",
];