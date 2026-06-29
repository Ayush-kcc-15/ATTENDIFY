import { FileText, FileSpreadsheet, FileBarChart, Printer, Download } from "lucide-react";
import { toast } from "sonner";
import { PageHeader } from "@/components/dashboard/page-header";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const reports = [
  { icon: FileBarChart, title: "Student Attendance Report", desc: "Per-student attendance summary with percentages." },
  { icon: FileText, title: "Class Attendance Report", desc: "Attendance aggregated by class and section." },
  { icon: FileSpreadsheet, title: "Subject Attendance Report", desc: "Attendance broken down by subject." },
  { icon: FileBarChart, title: "Monthly Report", desc: "Institution-wide monthly attendance overview." },
  { icon: FileText, title: "Weekly Report", desc: "Weekly attendance trends and outliers." },
  { icon: FileSpreadsheet, title: "Custom Date Report", desc: "Generate a report for any date range." },
];

export default function AdminReportsPage() {
  return (
    <div>
      <PageHeader title="Reports" description="Generate and export attendance reports." />
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {reports.map((r) => (
          <Card key={r.title} className="flex flex-col p-5 shadow-soft">
            <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-secondary text-primary">
              <r.icon className="h-5 w-5" />
            </span>
            <h3 className="mt-4 font-semibold">{r.title}</h3>
            <p className="mt-1 flex-1 text-sm text-muted-foreground">{r.desc}</p>
            <div className="mt-4 flex flex-wrap gap-2">
              <Button size="sm" variant="outline" className="rounded-lg" onClick={() => toast.success("PDF exported")}>
                <Download className="mr-1 h-3.5 w-3.5" /> PDF
              </Button>
              <Button size="sm" variant="outline" className="rounded-lg" onClick={() => toast.success("Excel exported")}>
                <FileSpreadsheet className="mr-1 h-3.5 w-3.5" /> Excel
              </Button>
              <Button size="sm" variant="outline" className="rounded-lg" onClick={() => toast.info("Printing")}>
                <Printer className="mr-1 h-3.5 w-3.5" /> Print
              </Button>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
}
