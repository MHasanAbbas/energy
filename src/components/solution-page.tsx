import { CTABanner, FeatureGridSection, SectionShell, SplitSection } from "@/components/content-blocks";
import { PageHero } from "@/components/page-hero";
import { SolutionRail } from "@/components/solution-rail";
import type { Solution } from "@/content/solutions";

export function SolutionPage({ solution }: { solution: Solution }) {
  return (
    <>
      <PageHero
        eyebrow={solution.hero.eyebrow}
        title={solution.hero.title}
        description={solution.hero.description}
        imageSrc={solution.hero.imageSrc}
        imageAlt={solution.hero.imageAlt}
        imageLabel={solution.hero.imageLabel}
        imageSubLabel={solution.hero.imageSubLabel}
        primaryCta={{ href: "/contact", label: "Discuss This Solution" }}
        secondaryCta={{ href: "/solutions", label: "Back to Solutions" }}
      />

      <SectionShell className="pb-8 pt-6 md:pt-8">
        <SolutionRail currentSlug={solution.slug} />
      </SectionShell>

      <SectionShell>
        <SplitSection
          eyebrow={solution.detail.eyebrow}
          title={solution.detail.title}
          description={solution.detail.description}
          body={solution.detail.body}
          points={solution.detail.points}
          imageSrc={solution.detail.imageSrc}
          imageAlt={solution.detail.imageAlt}
          imageLabel={solution.detail.imageLabel}
          cta={{ href: "/contact", label: "Request a Project Review" }}
        />
      </SectionShell>

      <SectionShell tone="soft">
        <FeatureGridSection
          eyebrow="What We Focus On"
          title={`Key delivery priorities for ${solution.title.toLowerCase()}.`}
          description={solution.summary}
          items={solution.modules}
        />
      </SectionShell>

      <SectionShell tone="dark">
        <FeatureGridSection
          eyebrow="Application Fit"
          title="Where this solution tends to create the most value."
          description="The best fit depends on operating conditions, continuity expectations, site access and the wider energy strategy."
          items={solution.applications}
          dark
        />
      </SectionShell>

      <SectionShell>
        <CTABanner
          eyebrow="Next Step"
          title={solution.cta.title}
          description={solution.cta.description}
          primary={{ href: "/contact", label: "Start a Project Brief" }}
          secondary={{ href: "/projects", label: "Review Use Cases" }}
        />
      </SectionShell>
    </>
  );
}

