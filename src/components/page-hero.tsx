import Image from "next/image";

import { ButtonLink } from "@/components/button-link";
import { Reveal } from "@/components/reveal";

type HeroMetric = {
  label: string;
  value: string;
};

type PageHeroProps = {
  eyebrow: string;
  title: string;
  description: string;
  imageSrc: string;
  imageAlt: string;
  primaryCta: { href: string; label: string };
  secondaryCta?: { href: string; label: string };
  metrics?: HeroMetric[];
  imageLabel?: string;
  imageSubLabel?: string;
};

export function PageHero({
  eyebrow,
  title,
  description,
  imageSrc,
  imageAlt,
  primaryCta,
  secondaryCta,
  metrics,
  imageLabel,
  imageSubLabel,
}: PageHeroProps) {
  return (
    <section className="relative overflow-hidden w-full">
      {/* Full-width background image with improved mobile responsiveness */}
      <div className="absolute inset-0 h-[500px] sm:h-[650px] md:h-[800px] lg:h-[850px]">
        <Image
          src={imageSrc}
          alt={imageAlt}
          fill
          priority
          className="object-cover"
          sizes="100vw"
        />
        {/* Dark gradient overlay for text readability */}
        <div className="absolute inset-0 bg-gradient-to-r from-[rgba(17,35,45,0.65)] via-[rgba(17,35,45,0.45)] to-[rgba(17,35,45,0.25)]" />
        <div className="absolute inset-0 bg-gradient-to-b from-[rgba(17,35,45,0.1)] via-transparent to-[rgba(17,35,45,0.3)]" />
      </div>

      {/* Content overlay - positioned on top of image */}
      <div className="relative z-10 px-4 sm:px-6 md:px-8 lg:px-8">
        <div className="mx-auto max-w-[1240px]">
          <Reveal className="flex flex-col justify-center gap-6 sm:gap-8 py-16 sm:py-24 md:py-32 lg:py-40">
            <span className="eyebrow text-white/80 max-w-fit text-sm sm:text-base">{eyebrow}</span>
            <h1 className="max-w-3xl font-display text-[clamp(1.875rem,5.5vw,5.5rem)] leading-[1.1] font-bold uppercase tracking-[-0.07em] text-white">
              {title}
            </h1>
            <p className="max-w-2xl text-base sm:text-lg md:text-xl leading-7 sm:leading-8 text-white/90">
              {description}
            </p>
            
            <div className="flex flex-col gap-2 sm:gap-3 sm:flex-row pt-2 sm:pt-4">
              <ButtonLink href={primaryCta.href}>{primaryCta.label}</ButtonLink>
              {secondaryCta ? (
                <ButtonLink href={secondaryCta.href} variant="secondary">
                  {secondaryCta.label}
                </ButtonLink>
              ) : null}
            </div>

            {metrics?.length ? (
              <div className="mt-6 sm:mt-8 grid gap-3 sm:gap-4 grid-cols-1 xs:grid-cols-2 sm:grid-cols-3 max-w-2xl">
                {metrics.map((metric, index) => (
                  <Reveal
                    key={metric.label}
                    delay={120 * index}
                    className="rounded-[1.4rem] border border-white/20 bg-white/10 p-3 sm:p-4 backdrop-blur-md"
                  >
                    <div className="font-display text-2xl sm:text-3xl font-bold uppercase tracking-[-0.06em] text-white">
                      {metric.value}
                    </div>
                    <div className="mt-1 sm:mt-2 text-xs sm:text-sm leading-5 sm:leading-6 text-white/72">{metric.label}</div>
                  </Reveal>
                ))}
              </div>
            ) : null}
          </Reveal>
        </div>
      </div>

      {/* Image label at bottom */}
      {(imageLabel || imageSubLabel) && (
        <div className="relative z-20 px-4 sm:px-6 md:px-8 pb-6 sm:pb-8">
          <div className="mx-auto max-w-[1240px]">
            <div className="rounded-[1.4rem] border border-white/12 bg-[rgba(17,35,45,0.4)] p-4 sm:p-5 backdrop-blur-md max-w-md">
              {imageLabel ? (
                <div className="font-display text-base sm:text-lg font-bold uppercase tracking-[-0.04em] text-white">{imageLabel}</div>
              ) : null}
              {imageSubLabel ? <div className="mt-1 text-xs sm:text-sm text-white/72">{imageSubLabel}</div> : null}
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
