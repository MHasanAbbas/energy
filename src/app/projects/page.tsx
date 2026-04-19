import { CTABanner, FeatureGridSection, SectionShell } from "@/components/content-blocks";
import { PageHero } from "@/components/page-hero";
import { createMetadata } from "@/lib/metadata";

export const metadata = createMetadata({
  title: "Projects",
  description:
    "Representative renewable project and use-case scenarios for industrial, remote, campus and logistics applications across the Gulf.",
  path: "/projects",
});

const useCaseCards = [
  {
    title: "Coastal Industrial Estate",
    description:
      "Solar and storage strategy for high-utilisation facilities facing environmental exposure, cost pressure and continuity requirements.",
    tag: "Coastal",
    imageSrc: "/images/photo-solar.jpg",
    imageAlt: "Placeholder photo showing solar infrastructure for an industrial estate",
  },
  {
    title: "Remote Operations Hub",
    description:
      "Hybrid power architecture for sites where access is difficult, logistics matter and dependence on a single energy source creates risk.",
    tag: "Remote",
    imageSrc: "/images/photo-wind.jpg",
    imageAlt: "Placeholder photo showing remote renewable landscape for hybrid power planning",
  },
  {
    title: "Campus or Institutional Asset",
    description:
      "Phased renewable planning for facilities that need continuity, better visibility and a gradual transition path.",
    tag: "Campus",
    imageSrc: "/images/photo-engineer.jpg",
    imageAlt: "Placeholder photo showing on-site renewable operations review",
  },
  {
    title: "Logistics or Port Asset",
    description:
      "Renewable and storage infrastructure for logistics environments preparing for higher electrical demand and tighter resilience expectations.",
    tag: "Logistics",
    imageSrc: "/images/photo-port.jpg",
    imageAlt: "Placeholder photo showing shipping containers and industrial port operations",
  },
];

const frameworkCards = [
  {
    title: "Site Conditions",
    description: "Environmental exposure, access constraints and physical context come before technology selection.",
    tag: "Lens 01",
  },
  {
    title: "Load Profile",
    description: "Energy strategy must reflect how the asset behaves through the day and what the operation needs to protect.",
    tag: "Lens 02",
  },
  {
    title: "Delivery Constraints",
    description: "Deployment timing, modularity and service access shape what a practical project path looks like.",
    tag: "Lens 03",
  },
  {
    title: "Lifecycle Value",
    description: "Maintainability, monitoring and future expansion remain part of the decision from the start.",
    tag: "Lens 04",
  },
];

export default function ProjectsPage() {
  return (
    <>
      <PageHero
        eyebrow="Projects / Use Cases"
        title="Renewable strategies shaped by the way the asset actually works."
        description="We use realistic project scenarios to show how solar, wind, storage, hybrid systems and modular deployment can be structured around different operating conditions."
        imageSrc="/images/photo-port.jpg"
        imageAlt="Placeholder photo showing industrial and logistics infrastructure for renewable planning"
        imageLabel="Scenario-led project thinking"
        imageSubLabel="Image placeholder for representative renewable project types"
        primaryCta={{ href: "/contact", label: "Compare Your Project" }}
        secondaryCta={{ href: "/solutions", label: "View Solution Mix" }}
      />

      <SectionShell tone="soft">
        <FeatureGridSection
          eyebrow="Use Cases"
          title="We focus on fit, not formula."
          description="No two projects begin from the same position. Site environment, load behavior, continuity needs and delivery constraints all influence what a sensible energy strategy should look like."
          items={useCaseCards}
        />
      </SectionShell>

      <SectionShell>
        <FeatureGridSection
          eyebrow="Evaluation Framework"
          title="Each project is assessed through the same disciplined lens."
          description="We evaluate site conditions, load profile, continuity requirements, deployment constraints and lifecycle priorities before recommending a solution pathway."
          items={frameworkCards}
          columns={4}
        />
      </SectionShell>

      <SectionShell>
        <CTABanner
          eyebrow="Project Review"
          title="Your site will not match a template. The strategy should not either."
          description="If you are assessing a project in this region, we can help define the renewable pathway that best fits the operating reality of the asset."
          primary={{ href: "/contact", label: "Start a Project Review" }}
          secondary={{ href: "/industries", label: "Match Your Sector" }}
        />
      </SectionShell>
    </>
  );
}
