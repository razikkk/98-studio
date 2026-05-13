import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import type { Project } from "@/data/projects";
import { ArrowUpRight } from "lucide-react";

type Props = {
  project: Project | null;
  open: boolean;
  onOpenChange: (v: boolean) => void;
};

export function ProjectModal({ project, open, onOpenChange }: Props) {
  if (!project) return null;
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-5xl max-h-[90vh] overflow-y-auto p-0 gap-0 border-none">
        <div className="relative">
          <img
            src={project.cover}
            alt={`${project.title} cover`}
            className="aspect-[16/9] w-full object-cover"
          />
        </div>
        <div className="p-6 sm:p-10">
          <DialogHeader className="text-left">
            <p className="text-xs uppercase tracking-[0.22em] text-muted-foreground">
              {project.client} · {project.year}
            </p>
            <DialogTitle className="mt-3 text-3xl sm:text-4xl font-semibold tracking-tight">
              {project.title}
            </DialogTitle>
            <DialogDescription className="mt-4 text-base text-muted-foreground text-pretty">
              {project.longDescription}
            </DialogDescription>
          </DialogHeader>

          <div className="mt-6 flex flex-wrap gap-2">
            {project.services.map((s) => (
              <span
                key={s}
                className="rounded-full border hairline px-3 py-1 text-xs text-muted-foreground"
              >
                {s}
              </span>
            ))}
          </div>

          <a
            href={project.liveUrl}
            target="_blank"
            rel="noreferrer"
            className="mt-8 inline-flex items-center gap-2 rounded-full bg-foreground px-5 py-3 text-sm font-medium text-background"
          >
            Visit live site <ArrowUpRight className="h-4 w-4" />
          </a>

          {project.gallery.length > 1 && (
            <div className="mt-10 grid gap-4 sm:grid-cols-2">
              {project.gallery.slice(1).map((g, i) => (
                <img
                  key={i}
                  src={g}
                  alt={`${project.title} gallery ${i + 1}`}
                  className="w-full rounded-xl border hairline object-cover"
                />
              ))}
            </div>
          )}
        </div>
      </DialogContent>
    </Dialog>
  );
}
