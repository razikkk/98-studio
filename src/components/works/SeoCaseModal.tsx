import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import type { SeoCase } from "@/data/seoCases";
import { Download } from "lucide-react";

type Props = {
  caseStudy: SeoCase | null;
  open: boolean;
  onOpenChange: (v: boolean) => void;
};

export function SeoCaseModal({ caseStudy, open, onOpenChange }: Props) {
  if (!caseStudy) return null;
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-5xl max-h-[90vh] overflow-y-auto p-0 gap-0 border-none">
        <div className="grid gap-0 sm:grid-cols-5">
          <div className="sm:col-span-2 bg-foreground text-background p-8 sm:p-10">
            <p className="text-xs uppercase tracking-[0.22em] text-background/60">
              SEO case · {caseStudy.year}
            </p>
            <DialogHeader className="text-left mt-3">
              <DialogTitle className="text-2xl sm:text-3xl font-semibold tracking-tight text-background">
                {caseStudy.title}
              </DialogTitle>
              <DialogDescription className="text-background/70 text-pretty mt-3">
                {caseStudy.client}
              </DialogDescription>
            </DialogHeader>
            <div className="mt-10">
              <p className="text-5xl sm:text-6xl font-semibold text-accent tracking-tight">
                {caseStudy.metric}
              </p>
              <p className="mt-2 text-sm text-background/60">{caseStudy.metricLabel}</p>
            </div>
            <p className="mt-10 text-sm text-background/80 text-pretty">{caseStudy.summary}</p>
            {caseStudy.pdfUrl && (
              <a
                href={caseStudy.pdfUrl}
                target="_blank"
                rel="noreferrer"
                className="mt-8 inline-flex items-center gap-2 rounded-full bg-accent px-4 py-2.5 text-sm font-medium text-accent-foreground"
              >
                <Download className="h-4 w-4" />
                Download PDF
              </a>
            )}
          </div>
          <div className="sm:col-span-3 bg-secondary min-h-[420px]">
            {caseStudy.pdfUrl ? (
              <iframe
                src={caseStudy.pdfUrl}
                title={`${caseStudy.title} PDF`}
                className="h-full min-h-[420px] w-full"
              />
            ) : (
              <div className="flex h-full min-h-[420px] flex-col items-center justify-center gap-3 p-10 text-center text-sm text-muted-foreground">
                <div className="h-10 w-10 rounded-full border-2 border-foreground/20 border-t-accent animate-spin" />
                <p>PDF placeholder — add a URL in src/data/seoCases.ts</p>
              </div>
            )}
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
