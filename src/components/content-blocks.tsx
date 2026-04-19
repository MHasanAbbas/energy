import Image from "next/image";

import { ButtonLink } from "@/components/button-link";
import { Reveal } from "@/components/reveal";
import { SectionHeading } from "@/components/section-heading";
import { cn } from "@/lib/utils";

export type FeatureCardItem = {
  title: string;
  description: string;
  tag?: string;
  imageSrc?: string;
  imageAlt?: string;
  href?: string;
};

export function SectionShell({
  children,
  tone = "light",
  className,
  id,
}: {
  children: React.ReactNode;
  tone?: "light" | "soft" | "dark";
  className?: string;
  id?: string;
}) {
  return (
    <section
      id={id}
      className={cn(
        "relative px-4 py-12 sm:px-6 sm:py-16 md:py-20 lg:px-8 lg:py-24",
        tone === "soft" &&
          "bg-[radial-gradient(circle_at_top_left,rgba(18,123,105,0.07),transparent_24%),linear-gradient(180deg,rgba(220,235,221,0.5),rgba(255,255,255,0)),var(--sand-soft)]",
        tone === "dark" &&
          "bg-[radial-gradient(circle_at_top_right,rgba(240,201,120,0.16),transparent_24%),radial-gradient(circle_at_bottom_left,rgba(18,123,105,0.12),transparent_28%),linear-gradient(180deg,#10343a_0%,#0c252b_100%)] text-white",
        className,
      )}
    >
      <div className="mx-auto flex max-w-[1240px] flex-col gap-8 sm:gap-9 md:gap-10">{children}</div>
    </section>
  );
}

export function FeatureGridSection({
  eyebrow,
  title,
  description,
  items,
  columns = 3,
  dark = false,
}: {
  eyebrow: string;
  title: string;
  description: string;
  items: FeatureCardItem[];
  columns?: 2 | 3 | 4;
  dark?: boolean;
}) {
  return (
    <>
      <SectionHeading
        eyebrow={eyebrow}
        title={title}
        description={description}
        className={dark ? "[&_*]:text-inherit [&_p]:text-white/72 [&_.eyebrow]:text-white/72" : undefined}
      />

      <div
        className={cn(
          "grid gap-4 sm:gap-5 md:gap-6",
          columns === 2 && "sm:grid-cols-2 lg:grid-cols-2",
          columns === 3 && "sm:grid-cols-2 lg:grid-cols-3",
          columns === 4 && "sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4",
        )}
      >
        {items.map((item, index) => {
          const CardWrapper = item.href ? "a" : "div";
          return (
            <CardWrapper
              key={item.title}
              href={item.href}
              className={item.href ? "no-underline block" : undefined}
            >
              <Reveal
                delay={index * 70}
                className={cn(
                  "surface-card group overflow-hidden rounded-2xl transition-all hover:shadow-xl hover:-translate-y-2 h-full",
                  dark && "border-white/12 bg-white/6 shadow-none",
                  item.href && "hover:border-[var(--gulf-teal)] hover:border-opacity-50 cursor-pointer",
                )}
              >
                {item.imageSrc ? (
                  <div className="relative h-40 sm:h-48 md:h-56 overflow-hidden border-b border-[rgba(26,155,142,0.12)]">
                    <Image
                      src={item.imageSrc}
                      alt={item.imageAlt || `${item.title} placeholder visual`}
                      fill
                      className="object-cover transition duration-700 ease-out group-hover:scale-110"
                      sizes="(min-width: 1280px) 26vw, (min-width: 768px) 48vw, 100vw"
                    />
                    <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(15,43,53,0.08),rgba(15,43,53,0.32))]" />
                    {item.tag ? (
                      <span className="absolute left-4 top-4 rounded-full border border-white/20 bg-white/15 px-3 py-1 text-[0.7rem] font-extrabold uppercase tracking-[0.22em] text-white/90 backdrop-blur-md">
                        {item.tag}
                      </span>
                    ) : null}
                  </div>
                ) : null}
                <div className={cn("relative p-5 sm:p-6 md:p-7", !item.imageSrc && "before:absolute before:inset-x-6 before:top-0 before:h-px before:bg-[linear-gradient(90deg,transparent,var(--mint-line),transparent)]")}>
                  {item.tag && !item.imageSrc ? <div className="kicker text-xs">{item.tag}</div> : null}
                  <h3 className={cn("card-title text-base sm:text-lg font-bold text-[var(--ink)]", dark && "text-white")}>{item.title}</h3>
                  <p className={cn("mt-2 sm:mt-3 text-sm leading-6 sm:leading-7", dark ? "text-white/72" : "text-[var(--ink-soft)]")}>
                    {item.description}
                  </p>
                  {item.href && (
                    <div className="mt-4 sm:mt-5 inline-flex items-center gap-2 text-sm font-semibold text-[var(--gulf-teal)] group-hover:gap-3 transition-all">
                      Learn More
                      <span className="transition-transform group-hover:translate-x-1">→</span>
                    </div>
                  )}
                </div>
              </Reveal>
            </CardWrapper>
          );
        })}
      </div>
    </>
  );
}

export function SplitSection({
  eyebrow,
  title,
  description,
  body,
  points,
  imageSrc,
  imageAlt,
  imageLabel,
  cta,
  reverse = false,
}: {
  eyebrow: string;
  title: string;
  description: string;
  body: string;
  points: string[];
  imageSrc: string;
  imageAlt: string;
  imageLabel: string;
  cta?: { href: string; label: string };
  reverse?: boolean;
}) {
  return (
    <div className={cn("grid gap-6 sm:gap-7 md:gap-8 lg:grid-cols-2 lg:items-center", reverse && "[&>*:first-child]:lg:order-2")}>
      <Reveal className="surface-card overflow-hidden p-0">
        <div className="relative min-h-[280px] sm:min-h-[340px] md:min-h-[380px]">
          <Image src={imageSrc} alt={imageAlt} fill className="object-cover" sizes="(min-width: 1024px) 44vw, 100vw" />
          <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(17,35,45,0.04),rgba(17,35,45,0.52))]" />
          <div className="absolute left-3 sm:left-5 bottom-3 sm:bottom-5 rounded-[1.2rem] border border-white/12 bg-[rgba(17,35,45,0.24)] px-3 sm:px-4 py-2 sm:py-3 text-xs sm:text-sm font-bold tracking-[0.08em] text-white backdrop-blur-md">
            {imageLabel}
          </div>
        </div>
      </Reveal>

      <Reveal className="surface-card p-5 sm:p-6 md:p-8" delay={80}>
        <div className="eyebrow text-xs sm:text-sm">{eyebrow}</div>
        <h3 className="mt-3 sm:mt-4 font-display text-[clamp(1.75rem,4vw,3.2rem)] leading-[0.95] font-bold uppercase tracking-[-0.06em] text-[var(--ink)]">
          {title}
        </h3>
        <p className="mt-3 sm:mt-4 text-base sm:text-lg leading-7 sm:leading-8 text-[var(--ink-soft)]">{description}</p>
        <p className="mt-4 sm:mt-5 text-sm sm:text-base leading-6 sm:leading-7 text-[var(--ink-soft)]">{body}</p>
        <ul className="mt-5 sm:mt-6 grid gap-2 sm:gap-3 text-xs sm:text-sm leading-6 sm:leading-7 text-[var(--ink-soft)]">
          {points.map((point) => (
            <li key={point} className="flex gap-2 sm:gap-3">
              <span className="mt-1 sm:mt-2 inline-block h-2 w-2 flex-shrink-0 rounded-full bg-[var(--gulf-teal)]" />
              <span>{point}</span>
            </li>
          ))}
        </ul>
        {cta ? (
          <div className="mt-5 sm:mt-7">
            <ButtonLink href={cta.href} variant="secondary">
              {cta.label}
            </ButtonLink>
          </div>
        ) : null}
      </Reveal>
    </div>
  );
}

export function ProcessStrip({
  eyebrow,
  title,
  description,
  steps,
}: {
  eyebrow: string;
  title: string;
  description: string;
  steps: Array<{ title: string; description: string }>;
}) {
  return (
    <>
      <SectionHeading
        eyebrow={eyebrow}
        title={title}
        description={description}
        className="[&_*]:text-inherit [&_p]:text-white/72 [&_.eyebrow]:text-white/72"
      />
      <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
        {steps.map((step, index) => (
          <Reveal
            key={step.title}
            delay={index * 80}
            className="rounded-[1.6rem] border border-white/12 bg-white/6 p-6 backdrop-blur-md"
          >
            <div className="inline-flex h-11 w-11 items-center justify-center rounded-full bg-[rgba(243,189,106,0.14)] font-display text-lg font-bold text-[var(--sun-metal)]">
              {String(index + 1).padStart(2, "0")}
            </div>
            <h3 className="mt-5 font-display text-2xl font-bold uppercase tracking-[-0.05em] text-white">
              {step.title}
            </h3>
            <p className="mt-3 text-sm leading-7 text-white/72">{step.description}</p>
          </Reveal>
        ))}
      </div>
    </>
  );
}

export function CTABanner({
  eyebrow,
  title,
  description,
  primary,
  secondary,
}: {
  eyebrow: string;
  title: string;
  description: string;
  primary: { href: string; label: string };
  secondary?: { href: string; label: string };
}) {
  return (
    <Reveal className="rounded-[2rem] border border-[rgba(22,49,59,0.08)] bg-[radial-gradient(circle_at_top_right,rgba(240,201,120,0.18),transparent_28%),radial-gradient(circle_at_bottom_left,rgba(18,123,105,0.08),transparent_28%),linear-gradient(160deg,rgba(255,255,255,0.92),rgba(248,252,249,0.84))] p-7 shadow-[0_24px_60px_rgba(22,49,59,0.12)] md:p-9">
      <div className="grid gap-6 lg:grid-cols-[1fr,auto] lg:items-center">
        <div>
          <div className="eyebrow">{eyebrow}</div>
          <h2 className="mt-4 max-w-4xl font-display text-[clamp(2rem,4vw,3.8rem)] leading-[0.94] font-bold uppercase tracking-[-0.06em] text-[var(--ink)]">
            {title}
          </h2>
          <p className="mt-4 max-w-2xl text-base leading-7 text-[var(--ink-soft)]">{description}</p>
        </div>
        <div className="flex flex-col gap-3 sm:flex-row lg:flex-col">
          <ButtonLink href={primary.href}>{primary.label}</ButtonLink>
          {secondary ? (
            <ButtonLink href={secondary.href} variant="secondary">
              {secondary.label}
            </ButtonLink>
          ) : null}
        </div>
      </div>
    </Reveal>
  );
}
