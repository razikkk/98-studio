import { Link } from "@tanstack/react-router";
import { ArrowUpRight } from "lucide-react";

export function FloatingCTA() {
  return (
    <div className="fixed bottom-5 left-1/2 z-40 -translate-x-1/2 sm:left-auto sm:right-6 sm:translate-x-0">
      <Link
        to="/contact"
        className="group inline-flex items-center gap-2 rounded-full bg-foreground px-5 py-3.5 text-sm font-medium text-background accent-glow transition-all"
      >
        <span className="relative flex h-2 w-2">
          <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent opacity-75" />
          <span className="relative inline-flex h-2 w-2 rounded-full bg-accent" />
        </span>
        Book a call
        <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
      </Link>
    </div>
  );
}
