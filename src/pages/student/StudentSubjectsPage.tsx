import { PageHeader } from "@/components/dashboard/page-header";
import { SectionCard } from "@/components/dashboard/section-card";
import { subjects } from "@/data/sample";

export default function StudentSubjectsPage() {
  return (
    <div>
      <PageHeader title="My Subjects" description="Your enrolled courses and schedules." />
      <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
        {subjects.map((subject) => (
          <SectionCard key={subject.id} title={subject.name} description={subject.teacher}>
            <div className="mt-3 space-y-2 text-sm text-muted-foreground">
              <p>{subject.code}</p>
              <p>{subject.schedule}</p>
            </div>
          </SectionCard>
        ))}
      </div>
    </div>
  );
}
