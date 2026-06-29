import { useMemo, useState, type ReactNode } from "react";
import { ArrowUpDown, ChevronLeft, ChevronRight, Download, Search } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { EmptyState } from "@/components/dashboard/empty-state";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { cn } from "@/lib/utils";

export interface Column<T> {
  key: string;
  header: string;
  sortable?: boolean;
  className?: string;
  render?: (row: T) => ReactNode;
  accessor?: (row: T) => string | number;
}

interface DataTableProps<T> {
  title?: string;
  description?: string;
  columns: Column<T>[];
  data: T[];
  searchKeys?: (keyof T)[];
  pageSize?: number;
  toolbar?: ReactNode;
  onExport?: () => void;
}

export function DataTable<T>({
  title,
  description,
  columns,
  data,
  searchKeys,
  pageSize = 8,
  toolbar,
  onExport,
}: DataTableProps<T>) {
  const [query, setQuery] = useState("");
  const [page, setPage] = useState(1);
  const [sort, setSort] = useState<{ key: string; dir: "asc" | "desc" } | null>(null);

  const filtered = useMemo(() => {
    let rows = data;
    if (query && searchKeys) {
      const q = query.toLowerCase();
      rows = rows.filter((r) =>
        searchKeys.some((k) =>
          String((r as Record<string, unknown>)[k as string] ?? "")
            .toLowerCase()
            .includes(q),
        ),
      );
    }
    if (sort) {
      const col = columns.find((c) => c.key === sort.key);
      rows = [...rows].sort((a, b) => {
        const av = col?.accessor
          ? col.accessor(a)
          : ((a as Record<string, unknown>)[sort.key] as string | number);
        const bv = col?.accessor
          ? col.accessor(b)
          : ((b as Record<string, unknown>)[sort.key] as string | number);
        if (av < bv) return sort.dir === "asc" ? -1 : 1;
        if (av > bv) return sort.dir === "asc" ? 1 : -1;
        return 0;
      });
    }
    return rows;
  }, [data, query, searchKeys, sort, columns]);

  const totalPages = Math.max(1, Math.ceil(filtered.length / pageSize));
  const current = Math.min(page, totalPages);
  const paged = filtered.slice((current - 1) * pageSize, current * pageSize);

  const toggleSort = (key: string) => {
    setSort((prev) =>
      prev?.key === key
        ? { key, dir: prev.dir === "asc" ? "desc" : "asc" }
        : { key, dir: "asc" },
    );
  };

  return (
    <Card className="overflow-hidden shadow-soft">
      {(title || searchKeys || onExport || toolbar) && (
        <div className="flex flex-col gap-3 border-b border-border p-4 sm:flex-row sm:items-center sm:justify-between">
          <div>
            {title && <h3 className="font-semibold">{title}</h3>}
            {description && <p className="text-sm text-muted-foreground">{description}</p>}
          </div>
          <div className="flex flex-wrap items-center gap-2">
            {toolbar}
            {searchKeys && (
              <div className="relative">
                <Search className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
                <Input
                  value={query}
                  onChange={(e) => {
                    setQuery(e.target.value);
                    setPage(1);
                  }}
                  placeholder="Search..."
                  className="h-9 w-full rounded-xl pl-9 sm:w-56"
                />
              </div>
            )}
            {onExport && (
              <Button variant="outline" size="sm" className="rounded-xl" onClick={onExport}>
                <Download className="mr-1.5 h-4 w-4" /> Export
              </Button>
            )}
          </div>
        </div>
      )}

      {paged.length === 0 ? (
        <EmptyState
          title="No results found"
          description="Try adjusting your search or filters."
        />
      ) : (
        <div className="overflow-x-auto">
          <Table>
            <TableHeader>
              <TableRow className="hover:bg-transparent">
                {columns.map((c) => (
                  <TableHead key={c.key} className={c.className}>
                    {c.sortable ? (
                      <button
                        onClick={() => toggleSort(c.key)}
                        className="inline-flex items-center gap-1 font-medium hover:text-foreground"
                      >
                        {c.header}
                        <ArrowUpDown className="h-3.5 w-3.5 text-muted-foreground" />
                      </button>
                    ) : (
                      c.header
                    )}
                  </TableHead>
                ))}
              </TableRow>
            </TableHeader>
            <TableBody>
              {paged.map((row, i) => (
                <TableRow key={i} className="transition-colors">
                  {columns.map((c) => (
                    <TableCell key={c.key} className={cn(c.className)}>
                      {c.render
                        ? c.render(row)
                        : String((row as Record<string, unknown>)[c.key] ?? "")}
                    </TableCell>
                  ))}
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      )}

      {filtered.length > 0 && (
        <div className="flex items-center justify-between border-t border-border px-4 py-3 text-sm">
          <span className="text-muted-foreground">
            Showing {(current - 1) * pageSize + 1}–
            {Math.min(current * pageSize, filtered.length)} of {filtered.length}
          </span>
          <div className="flex items-center gap-1">
            <Button
              variant="outline"
              size="icon"
              className="h-8 w-8 rounded-lg"
              disabled={current <= 1}
              onClick={() => setPage(current - 1)}
            >
              <ChevronLeft className="h-4 w-4" />
            </Button>
            <span className="px-2 text-muted-foreground">
              {current} / {totalPages}
            </span>
            <Button
              variant="outline"
              size="icon"
              className="h-8 w-8 rounded-lg"
              disabled={current >= totalPages}
              onClick={() => setPage(current + 1)}
            >
              <ChevronRight className="h-4 w-4" />
            </Button>
          </div>
        </div>
      )}
    </Card>
  );
}