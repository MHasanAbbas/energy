import { CTABanner, FeatureGridSection, SectionShell } from "@/components/content-blocks";
import { PageHero } from "@/components/page-hero";
import { SolutionExplorer, type SolutionExplorerItem } from "@/components/solution-explorer";
import { createMetadata } from "@/lib/metadata";

export const metadata = createMetadata({
  title: "Solutions",
  description:
    "Solar PV, wind energy, hybrid systems, battery storage, containerized units, feasibility support and O&M for commercial, industrial and remote energy projects.",
  path: "/solutions",
});

const solutionItems: SolutionExplorerItem[] = [
  {
    id: "solar-pv",
    title: "Solar PV",
    shortLabel: "Solar PV",
    summary: "Photovoltaic systems for commercial, industrial, utility and remote applications.",
    body:
      "Solar PV can be delivered across rooftops, ground arrays and larger field installations, provided the design reflects how the site uses power and how the system is expected to grow. The objective is not simply generation output, but a solar asset that sits properly within the wider energy strategy.",
    bullets: [
      "Rooftop, ground-mount and distributed field configurations",
      "Applicable to commercial, industrial and utility-scale programs",
      "Can be structured for on-grid, off-grid and storage-integrated use",
      "Designed around land, access, operating profile and future upgrades",
    ],
    applications: ["Commercial", "Industrial", "Utility", "Distributed Energy"],
    imageSrc: "/images/photo-solar.jpg",
    imageAlt: "Placeholder photo showing utility-scale solar panels in daylight",
  },
  {
    id: "wind-energy",
    title: "Wind Energy",
    shortLabel: "Wind Energy",
    summary: "Resource-led wind development for sites where the case is technically and commercially sound.",
    body:
      "Wind should be approached with selectivity. Where resource quality, site logic and integration planning support the case, it can contribute meaningful diversity and scale inside a renewable portfolio.",
    bullets: [
      "Opportunity-led rather than template-led development",
      "Useful within larger renewable or hybrid power frameworks",
      "Long-horizon planning around system performance and integration",
      "Best suited to sites where resource conditions justify the route",
    ],
    applications: ["Energy Developers", "Utility Programs", "Hybrid Portfolios", "Large Assets"],
    imageSrc: "/images/photo-wind.jpg",
    imageAlt: "Placeholder photo showing wind turbines across an open landscape",
  },
  {
    id: "hybrid-systems",
    title: "Hybrid Systems",
    shortLabel: "Hybrid Systems",
    summary: "Integrated solar, wind, storage and backup systems built for continuity and control.",
    body:
      "Hybrid systems are designed to coordinate multiple energy sources as one operating plant. They are especially useful for remote, rural and continuity-sensitive sites where reliability depends on how sources are balanced, monitored and dispatched over time.",
    bullets: [
      "Combines solar, wind, BESS and conventional support where needed",
      "Suitable for off-grid, weak-grid and remote applications",
      "Improves resilience and operating flexibility",
      "Requires a stronger focus on controls, monitoring and system integration",
    ],
    applications: ["Remote Sites", "Weak Grid", "Telecom", "Critical Loads"],
    imageSrc: "/images/hero-projects.svg",
    imageAlt: "Placeholder visual showing hybrid renewable energy system architecture",
  },
  {
    id: "battery-storage",
    title: "Battery Storage",
    shortLabel: "Battery Storage",
    summary: "Energy storage for reserve support, renewable balancing and operational flexibility.",
    body:
      "Battery storage can improve how renewable power is used, smooth daily operation and support continuity for assets that cannot rely on a single generation source. Its value depends on how well it is matched to the operating brief rather than how prominently it appears in the specification.",
    bullets: [
      "Supports peak shaving, reserve support and continuity planning",
      "Strengthens solar and hybrid system performance",
      "Helps improve flexibility in commercial and industrial power use",
      "Can be deployed inside fixed or modular system formats",
    ],
    applications: ["BESS", "Peak Management", "Power Flexibility", "Resilience"],
    imageSrc: "/images/hero-sustainability.svg",
    imageAlt: "Placeholder visual showing battery storage and monitoring interface",
  },
  {
    id: "containerized-units",
    title: "Containerized Units",
    shortLabel: "Containerized Units",
    summary: "Modular power packages for fast-track, remote and constrained deployment conditions.",
    body:
      "Containerized units offer a practical route where transport, site access and schedule control are central to delivery. They can be used to package storage, controls and broader hybrid support systems in a format that is easier to move, stage and maintain.",
    bullets: [
      "Useful where modularity simplifies logistics and commissioning",
      "Can support solar-linked storage and hybrid power architecture",
      "Well suited to field assets, distributed sites and remote programs",
      "Creates a more controlled path for constrained or staged deployment",
    ],
    applications: ["Modular Deployment", "Remote Assets", "Fast-Track", "Field Operations"],
    imageSrc: "/images/photo-port.jpg",
    imageAlt: "Placeholder photo showing containerized industrial infrastructure and logistics environment",
  },
  {
    id: "consultancy-om",
    title: "Feasibility, Consultancy and O&M",
    shortLabel: "Project Support",
    summary: "Project definition and lifecycle support from early review to long-term asset oversight.",
    body:
      "Feasibility and consultancy help shape the project before capital is committed. Monitoring and O&M help protect performance once the system is live. Bringing those functions into the renewable strategy earlier results in better project decisions and more stable long-term outcomes.",
    bullets: [
      "Feasibility reviews and early-stage system option analysis",
      "Consultancy support aligned to project structure and operating need",
      "Monitoring, visibility and service planning across the asset lifecycle",
      "Operational support designed to protect continuity and long-term value",
    ],
    applications: ["Feasibility", "Consultancy", "Monitoring", "O&M"],
    imageSrc: "/images/photo-engineer.jpg",
    imageAlt: "Placeholder photo showing engineer inspecting solar energy infrastructure",
  },
];

const supportCards = [
  {
    title: "On-Grid and Off-Grid Planning",
    description:
      "Some projects need full grid interaction, while others need more autonomous power strategy. The design logic changes with the operating environment.",
    tag: "System Planning",
  },
  {
    title: "Commercial, Residential and Rural Applications",
    description:
      "Renewable solutions can be adapted across different asset classes when the system scope and lifecycle expectations are clearly defined.",
    tag: "Application Range",
  },
  {
    title: "Future Transition Readiness",
    description:
      "Projects should be designed with enough flexibility to support broader electrification, stronger controls and deeper energy transition requirements later.",
    tag: "Future-Facing",
  },
];

export default function SolutionsPage() {
  return (
    <>
      <PageHero
        eyebrow="Solutions"
        title="A cleaner view of the renewable technologies and services behind the platform."
        description="Our solution structure covers solar PV, wind energy, hybrid systems, battery storage, containerized power units and the consultancy and lifecycle support needed to make them perform in practice."
        imageSrc="/images/photo-wind.jpg"
        imageAlt="Placeholder photo showing wind turbines as part of a renewable energy landscape"
        imageLabel="Technology, controls and support"
        imageSubLabel="A more visual and navigable solution structure"
        primaryCta={{ href: "/contact", label: "Discuss Your Requirements" }}
        secondaryCta={{ href: "/projects", label: "Review Use Cases" }}
      />

      <SectionShell>
        <SolutionExplorer
          eyebrow="Interactive Solutions"
          title="Select a solution to open the detail view."
          description="This interaction pattern keeps the page easier to scan while still giving each solution enough room to explain where it fits, how it is used and what it supports."
          items={solutionItems}
          cta={{ href: "/contact", label: "Talk to the Team" }}
        />
      </SectionShell>

      <SectionShell tone="soft" id="support-services">
        <FeatureGridSection
          eyebrow="Support Services"
          title="Renewable projects also depend on how they are reviewed, delivered and supported."
          description="Feasibility, consultancy, monitoring and O&M should not sit outside the solution story. They are part of what makes the project more viable and more durable over time."
          items={supportCards}
        />
      </SectionShell>

      <SectionShell>
        <CTABanner
          eyebrow="Solution Review"
          title="The right system mix starts with a clearer understanding of the site."
          description="Share the operating context, the energy challenge and the deployment conditions, and we will help frame the most suitable renewable pathway."
          primary={{ href: "/contact", label: "Start a Solution Review" }}
          secondary={{ href: "/industries", label: "Explore Industries" }}
        />
      </SectionShell>
    </>
  );
}
