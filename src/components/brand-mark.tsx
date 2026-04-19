import { cn } from "@/lib/utils";

export function BrandMark({ className }: { className?: string }) {
  return (
    <span
      aria-hidden="true"
      className={cn(
        "relative inline-flex h-11 w-11 items-center justify-center rounded-2xl border border-white/20 bg-gradient-to-br from-[var(--gulf-teal)]/90 to-[var(--basin-blue)]/90 shadow-lg",
        className,
      )}
    >
      <span className="text-white font-bold text-lg font-display tracking-tight">O</span>
      <span className="absolute inset-0 rounded-2xl bg-gradient-to-br from-white/20 via-transparent to-transparent pointer-events-none" />
    </span>
  );
}
