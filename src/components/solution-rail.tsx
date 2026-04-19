import Link from "next/link";

import { solutions } from "@/content/solutions";
import { cn } from "@/lib/utils";

export function SolutionRail({ currentSlug }: { currentSlug?: string }) {
  return (
    <div className="no-scrollbar flex gap-3 overflow-x-auto pb-2">
      {solutions.map((solution) => {
        const active = solution.slug === currentSlug;

        return (
          <Link
            key={solution.slug}
            href={`/solutions/${solution.slug}`}
            className={cn(
              "inline-flex shrink-0 items-center rounded-full border px-4 py-2.5 text-sm font-bold transition",
              active
                ? "border-[rgba(18,123,105,0.24)] bg-[rgba(18,123,105,0.1)] text-[var(--ink)] shadow-[0_16px_32px_rgba(22,49,59,0.08)]"
                : "border-[rgba(22,49,59,0.1)] bg-white/84 text-[var(--ink-soft)] hover:border-[rgba(18,123,105,0.18)] hover:text-[var(--ink)]",
            )}
          >
            {solution.navLabel}
          </Link>
        );
      })}
    </div>
  );
}
