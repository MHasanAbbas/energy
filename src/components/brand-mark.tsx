import { cn } from "@/lib/utils";

export function BrandMark({ className }: { className?: string }) {
  return (
    <span
      aria-hidden="true"
      className={cn(
        "relative inline-flex h-11 w-11 items-center justify-center rounded-full overflow-hidden shadow-2xl",
        className,
      )}
    >
      {/* Premium gradient background - Ocean energy inspired */}
      <div className="absolute inset-0 bg-gradient-to-135 from-[#0a9d7d] via-[#1bb8a3] to-[#0d5f7a]" />
      
      {/* Animated inner rings for energy effect */}
      <div className="absolute inset-3 rounded-full border-1.5 border-white/40" />
      <div className="absolute inset-5 rounded-full border opacity-60 border-white/25" />
      
      {/* Dynamic center element - combining O with energy wave */}
      <div className="relative z-10 flex items-center justify-center w-full h-full">
        {/* Main "O" letter */}
        <div className="text-white font-bold text-lg font-display tracking-tight select-none leading-none">
          O
        </div>
        
        {/* Top-left premium shine - strengthened for more luxury feel */}
        <div className="absolute top-1 left-1 w-2.5 h-2.5 rounded-full bg-white/30 blur-sm pointer-events-none" />
        
        {/* Bottom-right subtle shine */}
        <div className="absolute bottom-1.5 right-1.5 w-1.5 h-1.5 rounded-full bg-white/15 blur-sm pointer-events-none" />
      </div>
      
      {/* Top border highlight for premium depth */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/40 to-transparent opacity-60" />
    </span>
  );
}
