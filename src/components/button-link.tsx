import Link from "next/link";

import { cn } from "@/lib/utils";

type ButtonLinkProps = {
  href: string;
  children: React.ReactNode;
  variant?: "primary" | "secondary" | "ghost";
  className?: string;
};

const variants = {
  primary:
    "bg-[linear-gradient(135deg,#0f6666_0%,#0e3744_100%)] text-white shadow-[0_16px_42px_rgba(12,34,42,0.22)] hover:-translate-y-0.5 hover:shadow-[0_20px_46px_rgba(12,34,42,0.28)]",
  secondary:
    "border border-[rgba(17,35,45,0.16)] bg-white/70 text-[var(--ink)] backdrop-blur-md hover:-translate-y-0.5 hover:border-[rgba(17,35,45,0.26)] hover:bg-white",
  ghost:
    "border border-white/15 bg-white/6 text-white backdrop-blur-md hover:-translate-y-0.5 hover:bg-white/10",
} as const;

export function ButtonLink({
  href,
  children,
  variant = "primary",
  className,
}: ButtonLinkProps) {
  const classes = cn(
    "inline-flex min-h-12 items-center justify-center rounded-full px-5 text-sm font-extrabold tracking-[-0.02em] transition duration-200 ease-out",
    variants[variant],
    className,
  );

  if (href.startsWith("mailto:") || href.startsWith("http")) {
    return (
      <a
        href={href}
        className={classes}
        target={href.startsWith("http") ? "_blank" : undefined}
        rel={href.startsWith("http") ? "noreferrer" : undefined}
      >
        {children}
      </a>
    );
  }

  return (
    <Link href={href} className={classes}>
      {children}
    </Link>
  );
}
