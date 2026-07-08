import type { ReactNode } from "react";

export default function Pill({ children }: { children: ReactNode }) {
  return (
    <span className="inline-flex items-center gap-2 rounded-md border border-ink/15 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-ink/60">
      {children}
    </span>
  );
}
