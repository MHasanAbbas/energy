import { CTABanner, FeatureGridSection, SectionShell } from "@/components/content-blocks";
import { PageHero } from "@/components/page-hero";
import { createMetadata } from "@/lib/metadata";

export const metadata = createMetadata({
  title: "Industries",
  description:
    "Sector-specific renewable energy strategies for utilities, industrial facilities, ports, remote assets and critical infrastructure.",
  path: "/industries",
});

const sectorCards = [
  {
    title: "Utilities and Developers",
    description:
      "Larger energy programs require structured planning, system-level thinking and a delivery approach that supports long-term value.",
    tag: "Scale",
    imageSrc: "/images/photo-solar.jpg",
    imageAlt: "Placeholder photo showing a large renewable energy installation",
  },
  {
    title: "Industrial and Manufacturing",
    description:
      "Power strategies that protect continuity, reduce exposure and fit demanding operating profiles without disrupting the asset.",
    tag: "Operations",
    imageSrc: "/images/photo-engineer.jpg",
    imageAlt: "Placeholder photo showing technical operations support at a solar site",
  },
  {
    title: "Logistics and Ports",
    description:
      "Coastal assets and heavy-use sites increasingly need energy systems that support resilience and phased electrification.",
    tag: "Coastal",
    imageSrc: "/images/photo-port.jpg",
    imageAlt: "Placeholder photo showing shipping containers and port infrastructure",
  },
  {
    title: "Remote and Distributed Assets",
    description:
      "Hybrid systems and modular units for sites where service access, logistics and resilience must be planned together.",
    tag: "Remote",
    imageSrc: "/images/photo-wind.jpg",
    imageAlt: "Placeholder photo showing remote wind energy landscape",
  },
  {
    title: "Public and Essential Infrastructure",
    description:
      "Renewable planning for assets that need resilience, visibility and operational confidence before they need marketing language.",
    tag: "Critical",
    imageSrc: "/images/hero-sustainability.svg",
    imageAlt: "Placeholder visual showing service campus and public infrastructure energy planning",
  },
];

export default function IndustriesPage() {
  return (
    <>
      <PageHero
        eyebrow="Industries"
        title="Energy strategies shaped by sector demands, not generic assumptions."
        description="Different industries operate under different performance pressures. We align renewable solutions with the site, the load profile and the commercial reality of the sector."
        imageSrc="/images/photo-port.jpg"
        imageAlt="Placeholder photo showing coastal logistics and industrial infrastructure"
        imageLabel="Sector-specific energy planning"
        imageSubLabel="Image placeholder for operating sectors across the regional market"
        primaryCta={{ href: "/contact", label: "Find Your Sector" }}
        secondaryCta={{ href: "/solutions", label: "Explore Solutions" }}
      />

      <SectionShell>
        <FeatureGridSection
          eyebrow="Sector Focus"
          title="The sector changes the brief. The brief should change the solution."
          description="We do not treat industry pages as marketing categories. They exist to help clients connect their operating environment to a more appropriate renewable strategy."
          items={sectorCards}
        />
      </SectionShell>

      <SectionShell tone="dark">
        <div className="grid gap-5 lg:grid-cols-3">
          {[
            {
              title: "Sector context influences system design",
              text: "A logistics asset, an industrial process site and a remote operations hub should not be approached through the same decision frame.",
            },
            {
              title: "Continuity requirements shape technology selection",
              text: "The right system mix changes when uptime, reserve support and service response become operational priorities.",
            },
            {
              title: "Delivery model follows site reality",
              text: "Deployment sequencing, modularity and monitoring logic should reflect how the asset is reached, maintained and expanded.",
            },
          ].map((item) => (
            <div key={item.title} className="rounded-[1.7rem] border border-white/12 bg-white/6 p-7 backdrop-blur-md">
              <h3 className="font-display text-[1.55rem] uppercase tracking-[-0.05em] text-white">{item.title}</h3>
              <p className="mt-3 text-sm leading-7 text-white/72">{item.text}</p>
            </div>
          ))}
        </div>
      </SectionShell>

      <SectionShell>
        <CTABanner
          eyebrow="Industry Brief"
          title="If the operating environment is complex, the energy strategy should be more precise."
          description="Tell us what sector you operate in, what the site needs to protect and where the current pressure points are."
          primary={{ href: "/contact", label: "Start an Industry Brief" }}
          secondary={{ href: "/projects", label: "Review Project Types" }}
        />
      </SectionShell>
    </>
  );
}
