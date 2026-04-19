"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

import { BrandMark } from "@/components/brand-mark";
import { ButtonLink } from "@/components/button-link";
import { siteConfig } from "@/lib/site";
import { cn } from "@/lib/utils";

export function SiteHeader() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-[rgba(22,49,59,0.08)] bg-[rgba(248,252,249,0.86)] backdrop-blur-xl">
      <div className="mx-auto flex w-full max-w-[1240px] items-center justify-between gap-4 px-4 py-3 md:px-6 lg:px-8">
        <Link href="/" className="flex items-center gap-3" onClick={() => setOpen(false)}>
          <BrandMark />
          <span className="grid gap-0.5">
            <span className="font-display text-[1.35rem] font-bold uppercase tracking-[-0.06em] text-[var(--ink)]">
              OEnergy
            </span>
            <span className="text-[0.72rem] font-bold uppercase tracking-[0.24em] text-[var(--ink-muted)]">
              Renewable Solutions
            </span>
          </span>
        </Link>

        <nav className="hidden items-center gap-7 lg:flex">
          {siteConfig.nav.map((item) => {
            const active = pathname === item.href;
            const children = "children" in item ? item.children : undefined;

            return (
              <div key={item.href} className="group relative">
                <Link
                  href={item.href}
                  className={cn(
                    "relative text-sm font-bold text-[var(--ink-soft)] transition hover:text-[var(--ink)]",
                    "after:absolute after:-bottom-2 after:left-0 after:h-0.5 after:w-full after:origin-left after:scale-x-0 after:bg-[linear-gradient(90deg,#127b69,#f0c978)] after:transition-transform after:duration-200 hover:after:scale-x-100",
                    active && "text-[var(--ink)] after:scale-x-100",
                  )}
                >
                  {item.label}
                </Link>

                {children?.length ? (
                  <div className="pointer-events-none absolute left-1/2 top-full z-20 mt-5 hidden w-[340px] -translate-x-1/2 rounded-[1.6rem] border border-[rgba(22,49,59,0.12)] bg-white/98 p-4 opacity-0 shadow-[0_26px_60px_rgba(22,49,59,0.16)] backdrop-blur-xl transition duration-200 group-hover:pointer-events-auto group-hover:block group-hover:opacity-100 group-focus-within:pointer-events-auto group-focus-within:block group-focus-within:opacity-100">
                    <div className="mb-3 px-3 pt-1 text-[0.7rem] font-extrabold uppercase tracking-[0.2em] text-[var(--ink-muted)]">
                      Solutions
                    </div>
                    <div className="grid gap-2">
                      {children.map((child) => (
                        <Link
                          key={`${item.href}-${child.label}`}
                          href={child.href}
                          className="rounded-[1.1rem] px-4 py-3 text-sm font-semibold text-[var(--ink-soft)] transition hover:bg-[rgba(18,123,105,0.1)] hover:text-[var(--gulf-teal)]"
                        >
                          {child.label}
                        </Link>
                      ))}
                    </div>
                  </div>
                ) : null}
              </div>
            );
          })}
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          <ButtonLink href="/contact">Start a Project</ButtonLink>
        </div>

        <button
          type="button"
          aria-expanded={open}
          aria-label="Toggle navigation"
          className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-[rgba(22,49,59,0.12)] bg-white/84 text-[var(--ink)] lg:hidden"
          onClick={() => setOpen((current) => !current)}
        >
          <span className="sr-only">Menu</span>
          <div className="flex flex-col gap-1.5">
            <span className={cn("h-0.5 w-5 bg-current transition", open && "translate-y-2 rotate-45")} />
            <span className={cn("h-0.5 w-5 bg-current transition", open && "opacity-0")} />
            <span className={cn("h-0.5 w-5 bg-current transition", open && "-translate-y-2 -rotate-45")} />
          </div>
        </button>
      </div>

      <div
        className={cn(
          "overflow-hidden border-t border-[rgba(22,49,59,0.08)] bg-[rgba(255,255,255,0.96)] backdrop-blur-xl transition-[max-height,opacity] duration-300 lg:hidden",
          open ? "max-h-[420px] opacity-100" : "max-h-0 opacity-0",
        )}
      >
        <div className="mx-auto flex max-w-[1240px] flex-col gap-2 px-4 py-4 md:px-6">
          {siteConfig.nav.map((item) => {
            const active = pathname === item.href;
            const children = "children" in item ? item.children : undefined;

            return (
              <div key={item.href} className="rounded-2xl">
                <Link
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className={cn(
                    "block rounded-2xl px-4 py-3 text-sm font-bold text-[var(--ink-soft)] transition",
                    active
                      ? "bg-[rgba(18,123,105,0.1)] text-[var(--ink)]"
                      : "hover:bg-[rgba(17,35,45,0.04)] hover:text-[var(--ink)]",
                  )}
                >
                  {item.label}
                </Link>
                {children?.length ? (
                  <div className="mt-1 grid gap-1 rounded-[1.2rem] bg-[rgba(17,35,45,0.03)] p-3">
                    {children.map((child) => (
                      <Link
                        key={`${item.href}-${child.label}`}
                        href={child.href}
                        onClick={() => setOpen(false)}
                        className="rounded-[0.95rem] px-4 py-3 text-sm font-semibold text-[var(--ink-soft)] transition hover:bg-[rgba(18,123,105,0.12)] hover:text-[var(--gulf-teal)]"
                      >
                        {child.label}
                      </Link>
                    ))}
                  </div>
                ) : null}
              </div>
            );
          })}

          <ButtonLink href="/contact" className="mt-2">
            Start a Project
          </ButtonLink>
        </div>
      </div>
    </header>
  );
}
