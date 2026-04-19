import { CTABanner, FeatureGridSection, SectionShell } from "@/components/content-blocks";
import { PageHero } from "@/components/page-hero";
import { createMetadata } from "@/lib/metadata";

export const metadata = createMetadata({
  title: "Sustainability",
  description:
    "A practical view of sustainability, ESG thinking and energy transition readiness for renewable infrastructure across the Gulf.",
  path: "/sustainability",
});

const impactCards = [
  {
    title: "Lower Carbon Intensity",
    description:
      "Renewable generation can reduce dependence on higher-emission energy sources when applied in a commercially sensible way.",
    tag: "Impact 01",
  },
  {
    title: "Better Energy Efficiency",
    description:
      "Integrated systems improve how energy is used, stored and managed across the site rather than adding disconnected assets.",
    tag: "Impact 02",
  },
  {
    title: "Stronger Resilience",
    description:
      "Storage, hybrid design and continuity planning support more dependable long-term operations in demanding environments.",
    tag: "Impact 03",
  },
  {
    title: "Longer Asset Value",
    description:
      "Well-structured systems are easier to maintain, adapt and extend as energy needs and project expectations evolve.",
    tag: "Impact 04",
  },
];

const articleCards = [
  {
    title: "How storage changes the quality of a renewable power strategy",
    description: "A sharper look at reserve support, flexibility and what resilience should mean in practice.",
    tag: "Insight",
    imageSrc: "/images/photo-engineer.jpg",
    imageAlt: "Placeholder photo showing technical renewable site inspection",
  },
  {
    title: "Why hybrid systems should be designed around operations, not only components",
    description: "A more disciplined framework for dispatch logic, continuity and serviceability.",
    tag: "Insight",
    imageSrc: "/images/photo-wind.jpg",
    imageAlt: "Placeholder photo showing wind energy landscape for hybrid systems discussion",
  },
  {
    title: "Planning renewable infrastructure for industrial and logistics assets in Gulf conditions",
    description: "How environmental context and operating pressure change the project brief.",
    tag: "Insight",
    imageSrc: "/images/photo-port.jpg",
    imageAlt: "Placeholder photo showing industrial port environment for renewable planning",
  },
];

export default function SustainabilityPage() {
  return (
    <>
      <PageHero
        eyebrow="Sustainability / Insights"
        title="A practical view of sustainability, shaped by performance and long-term value."
        description="For Awtad Energy, sustainability is not a separate narrative. It is part of how projects reduce exposure, improve efficiency, support resilience and prepare clients for the next stage of the regional energy transition."
        imageSrc="/images/photo-engineer.jpg"
        imageAlt="Placeholder photo showing technical sustainability and energy transition planning"
        imageLabel="Operational sustainability"
        imageSubLabel="Image placeholder for ESG and energy transition perspective"
        primaryCta={{ href: "/contact", label: "Read Our Perspective" }}
        secondaryCta={{ href: "/contact", label: "Talk About Your Project" }}
      />

      <SectionShell>
        <div className="surface-card p-6 md:p-8">
          <div className="eyebrow">Sustainability Philosophy</div>
          <h2 className="mt-4 font-display text-[clamp(2rem,4vw,3.7rem)] leading-[0.94] font-bold uppercase tracking-[-0.06em] text-[var(--ink)]">
            Responsible energy transition begins with better project decisions.
          </h2>
          <p className="mt-4 max-w-4xl text-base leading-8 text-[var(--ink-soft)]">
            We believe sustainability should be understood through the decisions that shape the asset over time.
            That includes how efficiently energy is used, how resilient the system is, how well the project fits
            the environment and whether the result remains useful as energy needs evolve.
          </p>
        </div>
      </SectionShell>

      <SectionShell tone="soft">
        <FeatureGridSection
          eyebrow="Impact Areas"
          title="Impact is built through how the system is planned, delivered and maintained."
          description="Our sustainability lens is applied through the structure of the project itself, not through broad claims disconnected from operations."
          items={impactCards}
          columns={4}
        />
      </SectionShell>

      <SectionShell>
        <FeatureGridSection
          eyebrow="Insights"
          title="Insights for teams making real energy decisions."
          description="Our perspective pieces are written for clients, partners and stakeholders who need clearer frameworks for evaluating renewable infrastructure in this region."
          items={articleCards}
        />
      </SectionShell>

      <SectionShell tone="dark">
        <div className="grid gap-5 lg:grid-cols-2">
          <div className="rounded-[1.8rem] border border-white/12 bg-white/6 p-7 backdrop-blur-md">
            <div className="eyebrow !text-white/72 before:!bg-white/72">Reports and Briefings</div>
            <h2 className="mt-4 font-display text-[clamp(2rem,4vw,3.5rem)] leading-[0.94] font-bold uppercase tracking-[-0.06em] text-white">
              Useful materials for project planning and internal alignment.
            </h2>
            <p className="mt-4 text-base leading-7 text-white/72">
              Sector notes, project-readiness packs and concise strategy briefings can help teams align technical,
              commercial and operational priorities earlier.
            </p>
          </div>
          <div className="rounded-[1.8rem] border border-white/12 bg-white/6 p-7 backdrop-blur-md">
            <div className="eyebrow !text-white/72 before:!bg-white/72">Future Readiness</div>
            <h2 className="mt-4 font-display text-[clamp(2rem,4vw,3.5rem)] leading-[0.94] font-bold uppercase tracking-[-0.06em] text-white">
              Today’s projects should be ready for tomorrow’s energy landscape.
            </h2>
            <p className="mt-4 text-base leading-7 text-white/72">
              Future readiness is about making decisions that leave room for growth, adaptation and stronger
              integration as infrastructure demands across the regional market continue to evolve.
            </p>
          </div>
        </div>
      </SectionShell>

      <SectionShell>
        <CTABanner
          eyebrow="Next Move"
          title="Insight matters when it improves the next decision."
          description="If you are shaping a renewable project, upgrade or energy roadmap, we can help translate analysis into a more actionable strategy."
          primary={{ href: "/contact", label: "Talk About Your Project" }}
          secondary={{ href: "/projects", label: "Review Use Cases" }}
        />
      </SectionShell>
    </>
  );
}
