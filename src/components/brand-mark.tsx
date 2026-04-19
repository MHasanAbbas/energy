import { cn } from "@/lib/utils";

export function BrandMark({ className }: { className?: string }) {
  return (
    <span
      aria-hidden="true"
      className={cn(
        "relative inline-flex h-11 w-11 overflow-hidden rounded-2xl border border-white/10 bg-[linear-gradient(160deg,rgba(197,127,75,0.25),rgba(15,102,102,0.18))] shadow-[0_12px_30px_rgba(8,18,23,0.24)]",
        className,
      )}
    >
      <span className="absolute inset-0 bg-[linear-gradient(130deg,transparent_42%,rgba(15,102,102,0.95)_42%,rgba(15,102,102,0.95)_55%,transparent_55%)]" />
      <span className="absolute inset-0 bg-[linear-gradient(34deg,transparent_32%,rgba(243,189,106,0.94)_32%,rgba(243,189,106,0.94)_46%,transparent_46%)]" />
      <span className="absolute inset-[5px] rounded-[14px] border border-white/10" />
    </span>
  );
}
