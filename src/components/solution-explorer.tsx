"use client";

import Image from "next/image";
import { useMemo, useState } from "react";

import { ButtonLink } from "@/components/button-link";
import { Reveal } from "@/components/reveal";
import { SectionHeading } from "@/components/section-heading";
import { cn } from "@/lib/utils";

export type SolutionExplorerItem = {
  id: string;
  title: string;
  shortLabel: string;
  summary: string;
  body: string;
  bullets: string[];
  applications: string[];
  imageSrc: string;
  imageAlt: string;
};

export function SolutionExplorer({
  eyebrow,
  title,
  description,
  items,
  cta,
}: {
  eyebrow: string;
  title: string;
  description: string;
  items: SolutionExplorerItem[];
  cta?: { href: string; label: string };
}) {
  const [activeId, setActiveId] = useState(items[0]?.id ?? "");

  const activeItem = useMemo(
    () => items.find((item) => item.id === activeId) ?? items[0],
    [activeId, items],
  );

  return (
    <div id="solution-explorer" className="scroll-mt-24">
      <SectionHeading eyebrow={eyebrow} title={title} description={description} />

      <div className="mt-8 hidden gap-4 lg:grid lg:grid-cols-[0.9fr,1.1fr]">
        <div className="grid gap-3">
          {items.map((item, index) => {
            const isActive = item.id === activeItem.id;

            return (
              <Reveal key={item.id} delay={index * 60}>
                <button
                  type="button"
                  onClick={() => setActiveId(item.id)}
                  className={cn(
                    "w-full rounded-[1.45rem] border px-5 py-5 text-left transition duration-200",
                    isActive
                      ? "border-[rgba(18,123,105,0.28)] bg-[linear-gradient(180deg,rgba(18,123,105,0.1),rgba(255,255,255,0.92))] shadow-[0_20px_48px_rgba(22,49,59,0.12)]"
                      : "border-[rgba(22,49,59,0.08)] bg-white/78 hover:-translate-y-0.5 hover:border-[rgba(18,123,105,0.18)] hover:bg-white",
                  )}
                >
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <div className="kicker">{item.shortLabel}</div>
                      <h3 className="mt-2 font-display text-[1.5rem] uppercase tracking-[-0.05em] text-[var(--ink)]">
                        {item.title}
                      </h3>
                    </div>
                    <span
                      className={cn(
                        "inline-flex h-10 w-10 items-center justify-center rounded-full border text-lg font-bold transition",
                        isActive
                          ? "border-[rgba(18,123,105,0.28)] bg-[rgba(18,123,105,0.12)] text-[var(--gulf-teal)]"
                          : "border-[rgba(22,49,59,0.1)] bg-white/80 text-[var(--ink-soft)]",
                      )}
                    >
                      +
                    </span>
                  </div>
                  <p className="mt-3 text-sm leading-7 text-[var(--ink-soft)]">{item.summary}</p>
                </button>
              </Reveal>
            );
          })}
        </div>

        <Reveal className="surface-card overflow-hidden p-0" delay={120}>
          <div className="relative min-h-[560px]">
            <Image
              src={activeItem.imageSrc}
              alt={activeItem.imageAlt}
              fill
              className="object-cover"
              sizes="(min-width: 1024px) 50vw, 100vw"
            />
            <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(17,35,45,0.08),rgba(17,35,45,0.74))]" />
            <div className="absolute inset-x-0 bottom-0 p-6 md:p-8">
              <div className="max-w-2xl rounded-[1.6rem] border border-white/12 bg-[rgba(17,35,45,0.32)] p-6 backdrop-blur-md">
                <div className="kicker !text-white/74 before:!bg-white/40">{activeItem.shortLabel}</div>
                <h3 className="mt-3 font-display text-[2.4rem] leading-[0.94] uppercase tracking-[-0.06em] text-white">
                  {activeItem.title}
                </h3>
                <p className="mt-4 text-base leading-7 text-white/80">{activeItem.body}</p>
                <div className="mt-5 grid gap-3 md:grid-cols-2">
                  {activeItem.bullets.map((bullet) => (
                    <div key={bullet} className="flex gap-3 text-sm leading-7 text-white/78">
                      <span className="mt-2 inline-block h-2 w-2 rounded-full bg-[var(--sun-metal)]" />
                      <span>{bullet}</span>
                    </div>
                  ))}
                </div>
                <div className="mt-6 flex flex-wrap gap-2">
                  {activeItem.applications.map((application) => (
                    <span
                      key={application}
                      className="rounded-full border border-white/12 bg-white/10 px-3 py-1.5 text-[0.72rem] font-extrabold uppercase tracking-[0.18em] text-white/80"
                    >
                      {application}
                    </span>
                  ))}
                </div>
                {cta ? (
                  <div className="mt-7">
                    <ButtonLink href={cta.href} variant="ghost">
                      {cta.label}
                    </ButtonLink>
                  </div>
                ) : null}
              </div>
            </div>
          </div>
        </Reveal>
      </div>

      <div className="mt-8 grid gap-4 lg:hidden">
        {items.map((item, index) => {
          const isActive = item.id === activeId;

          return (
            <Reveal key={item.id} delay={index * 60} className="surface-card overflow-hidden p-0">
              <button
                type="button"
                onClick={() => setActiveId(isActive ? "" : item.id)}
                className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left"
              >
                <div>
                  <div className="kicker">{item.shortLabel}</div>
                  <h3 className="mt-2 font-display text-[1.45rem] uppercase tracking-[-0.05em] text-[var(--ink)]">
                    {item.title}
                  </h3>
                </div>
                <span className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-[rgba(18,123,105,0.18)] bg-[rgba(18,123,105,0.08)] text-lg font-bold text-[var(--gulf-teal)]">
                  {isActive ? "−" : "+"}
                </span>
              </button>
              {isActive ? (
                <div className="border-t border-[rgba(22,49,59,0.08)]">
                  <div className="relative h-52">
                    <Image
                      src={item.imageSrc}
                      alt={item.imageAlt}
                      fill
                      className="object-cover"
                      sizes="100vw"
                    />
                    <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(17,35,45,0.04),rgba(17,35,45,0.42))]" />
                  </div>
                  <div className="px-5 py-5">
                    <p className="text-sm leading-7 text-[var(--ink-soft)]">{item.body}</p>
                    <div className="mt-4 grid gap-3">
                      {item.bullets.map((bullet) => (
                        <div key={bullet} className="flex gap-3 text-sm leading-7 text-[var(--ink-soft)]">
                          <span className="mt-2 inline-block h-2 w-2 rounded-full bg-[var(--gulf-teal)]" />
                          <span>{bullet}</span>
                        </div>
                      ))}
                    </div>
                    <div className="mt-5 flex flex-wrap gap-2">
                      {item.applications.map((application) => (
                        <span
                          key={application}
                          className="rounded-full border border-[rgba(18,123,105,0.14)] bg-[rgba(18,123,105,0.06)] px-3 py-1.5 text-[0.7rem] font-extrabold uppercase tracking-[0.18em] text-[var(--ink-soft)]"
                        >
                          {application}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              ) : null}
            </Reveal>
          );
        })}
      </div>
    </div>
  );
}
