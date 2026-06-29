import { useState } from "react";
import { Check, Save } from "lucide-react";
import { toast } from "sonner";
import { PageHeader } from "@/components/dashboard/page-header";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { students, type AttendanceStatus } from "@/data/sample";
import { cn } from "@/lib/utils";

const statusOptions: { value: AttendanceStatus; label: string; active: string }[] = [
  { value: "present", label: "Present", active: "bg-success text-success-foreground" },
  { value: "absent", label: "Absent", active: "bg-destructive text-destructive-foreground" },
  { value: "late", label: "Late", active: "bg-warning text-warning-foreground" },
  { value: "leave", label: "Leave", active: "bg-primary text-primary-foreground" },
];

export default function TeacherTakeAttendancePage() {
  const roster = students.slice(0, 8);
  const [marks, setMarks] = useState<Record<string, AttendanceStatus>>(
    Object.fromEntries(roster.map((s) => [s.id, "present"])),
  );

  const setAll = (status: AttendanceStatus) =>
    setMarks(Object.fromEntries(roster.map((s) => [s.id, status])));

  const presentCount = Object.values(marks).filter((m) => m === "present").length;

  return (
    <div>
      <PageHeader
        title="Take Attendance"
        description="Select a class and mark attendance for each student."
        action={
          <Button className="rounded-xl" onClick={() => toast.success("Attendance saved successfully")}>
            <Save className="mr-1.5 h-4 w-4" /> Submit Attendance
          </Button>
        }
      />

      <Card className="mb-6 p-5 shadow-soft">
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          <div className="space-y-1.5">
            <label className="text-sm font-medium">Class</label>
            <Select defaultValue="cs3">
              <SelectTrigger className="rounded-xl"><SelectValue /></SelectTrigger>
              <SelectContent>
                <SelectItem value="cs3">BSc CS — Year 3</SelectItem>
                <SelectItem value="cs2">BSc CS — Year 2</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div className="space-y-1.5">
            <label className="text-sm font-medium">Section</label>
            <Select defaultValue="a">
              <SelectTrigger className="rounded-xl"><SelectValue /></SelectTrigger>
              <SelectContent>
                <SelectItem value="a">Section A</SelectItem>
                <SelectItem value="b">Section B</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div className="space-y-1.5">
            <label className="text-sm font-medium">Subject</label>
            <Select defaultValue="cloud">
              <SelectTrigger className="rounded-xl"><SelectValue /></SelectTrigger>
              <SelectContent>
                <SelectItem value="cloud">Cloud Computing</SelectItem>
                <SelectItem value="os">Operating Systems</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div className="space-y-1.5">
            <label className="text-sm font-medium">Date</label>
            <Input type="date" defaultValue="2026-06-28" className="rounded-xl" />
          </div>
        </div>
      </Card>

      <div className="mb-4 flex flex-wrap items-center justify-between gap-3">
        <p className="text-sm text-muted-foreground">
          <span className="font-medium text-foreground">{presentCount}</span> of {roster.length} present
        </p>
        <div className="flex flex-wrap gap-2">
          <Button size="sm" variant="outline" className="rounded-lg" onClick={() => setAll("present")}>
            <Check className="mr-1 h-3.5 w-3.5" /> Mark all present
          </Button>
          <Button size="sm" variant="outline" className="rounded-lg" onClick={() => setAll("absent")}>
            Mark all absent
          </Button>
          <Button size="sm" variant="outline" className="rounded-lg" onClick={() => setAll("late")}>
            Mark all late
          </Button>
        </div>
      </div>

      <Card className="divide-y divide-border shadow-soft">
        {roster.map((s) => (
          <div key={s.id} className="flex flex-col gap-3 p-4 sm:flex-row sm:items-center sm:justify-between">
            <div className="flex items-center gap-3">
              <Avatar className="h-9 w-9">
                <AvatarFallback className="bg-secondary text-xs font-semibold text-primary">
                  {s.name.split(" ").map((n) => n[0]).slice(0, 2).join("")}
                </AvatarFallback>
              </Avatar>
              <div>
                <p className="text-sm font-medium">{s.name}</p>
                <p className="text-xs text-muted-foreground">{s.roll}</p>
              </div>
            </div>
            <div className="flex flex-wrap gap-1.5">
              {statusOptions.map((o) => (
                <button
                  key={o.value}
                  onClick={() => setMarks((m) => ({ ...m, [s.id]: o.value }))}
                  className={cn(
                    "rounded-lg px-3 py-1.5 text-xs font-medium transition-all",
                    marks[s.id] === o.value
                      ? o.active
                      : "bg-muted text-muted-foreground hover:bg-accent",
                  )}
                >
                  {o.label}
                </button>
              ))}
            </div>
          </div>
        ))}
      </Card>
    </div>
  );
}
