import { cn } from "@/lib/utils";

export function SectionHeading({
  eyebrow,
  title,
  description,
  className,
}: {
  eyebrow: string;
  title: string;
  description: string;
  className?: string;
}) {
  return (
    <div className={cn("grid gap-5 lg:grid-cols-[1.1fr,0.9fr] lg:items-end", className)}>
      <div>
        <span className="eyebrow">{eyebrow}</span>
        <h2 className="mt-4 max-w-4xl font-display text-[clamp(2.1rem,5vw,4.4rem)] leading-[0.94] font-bold uppercase tracking-[-0.06em] text-[var(--ink)]">
          {title}
        </h2>
      </div>
      <p className="max-w-2xl text-base leading-7 text-[var(--ink-soft)] md:text-lg">{description}</p>
    </div>
  );
}
