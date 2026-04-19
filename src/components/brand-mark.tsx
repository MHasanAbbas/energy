import { cn } from "@/lib/utils";

export function BrandMark({ className }: { className?: string }) {
  return (
    <span
      aria-hidden="true"
      className={cn(
        "relative inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/20 shadow-lg overflow-hidden",
        className,
      )}
    >
      {/* Gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-[var(--gulf-teal)] via-[#0d7b6f] to-[var(--basin-blue)]" />
      
      {/* Inner circle for depth */}
      <div className="absolute inset-1.5 rounded-full border border-white/30" />
      
      {/* Center "O" with shine */}
      <div className="relative z-10 flex items-center justify-center w-full h-full">
        <span className="text-white font-bold text-lg font-display tracking-tight select-none">O</span>
        
        {/* Top-left shine for glass effect */}
        <div className="absolute top-0 left-0 w-1/2 h-1/2 rounded-full bg-white/20 blur-sm pointer-events-none" />
      </div>
    </span>
  );
}
