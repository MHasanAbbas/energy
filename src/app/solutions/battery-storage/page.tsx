import { CTABanner, FeatureGridSection, SectionShell, SplitSection } from "@/components/content-blocks";
import { PageHero } from "@/components/page-hero";
import { createMetadata } from "@/lib/metadata";

export const metadata = createMetadata({
  title: "Battery Energy Storage | OEnergy",
  description:
    "Advanced battery energy storage systems (BESS) for renewable energy optimization and grid reliability.",
  path: "/solutions/battery-storage",
});

const relatedSolutions = [
  {
    title: "Solar PV",
    description: "Store solar energy for use 24/7.",
    imageSrc: "/images/photo-solar.jpg",
    imageAlt: "Solar panels",
  },
  {
    title: "Wind Energy",
    description: "Balance wind power generation throughout the day.",
    imageSrc: "/images/photo-wind.jpg",
    imageAlt: "Wind turbines",
  },
  {
    title: "Hybrid Systems",
    description: "Essential component of integrated renewable systems.",
    imageSrc: "/images/photo-wind-farm.jpg",
    imageAlt: "Hybrid system",
  },
];

export default function BatteryStoragePage() {
  return (
    <>
      <PageHero
        eyebrow="Energy Storage"
        title="Store Power For Complete Control"
        description="Battery energy storage systems that capture renewable power for use whenever needed. Whether managing peak loads, providing backup power, or maximizing self-consumption, our BESS solutions deliver flexibility and independence."
        imageSrc="/images/photo-bess.jpg"
        imageAlt="Battery energy storage system"
        imageLabel="Advanced Storage Technology"
        primaryCta={{ href: "/contact", label: "Request Assessment" }}
        secondaryCta={{ href: "/solutions", label: "All Solutions" }}
      />

      <SectionShell>
        <SplitSection
          eyebrow="Energy Storage Systems"
          title="Battery Storage for Energy Independence"
          description="Battery energy storage systems (BESS) are essential for capturing renewable energy and using it when needed. OEnergy designs integrated storage solutions that maximize efficiency and energy independence."
          body="Our BESS solutions work seamlessly with solar PV, wind, and hybrid systems to provide reliable, dispatchable power. Advanced monitoring, intelligent control systems, and professional maintenance ensure optimal performance and maximum return on your investment."
          points={[
            "Captures renewable energy for later use",
            "Peak load management and shaving",
            "Backup power and grid resilience",
            "Energy independence and control",
            "Advanced monitoring and optimization",
            "Professional maintenance and support",
            "Scalable for any application size",
          ]}
          imageSrc="/images/photo-bess.jpg"
          imageAlt="Battery storage installation"
          imageLabel="Modern BESS Implementation"
          reverse
        />
      </SectionShell>

      <SectionShell tone="soft">
        <div className="max-w-4xl mx-auto">
          <div className="eyebrow mb-6">Storage Benefits</div>
          <h2 className="text-4xl font-bold mb-8 text-[var(--ink)]">Energy Storage Applications</h2>
          
          <div className="grid gap-8 md:grid-cols-3">
            <div className="rounded-2xl border border-[var(--mint-line)] bg-white/60 p-8 backdrop-blur">
              <div className="text-4xl mb-4">⚡</div>
              <h3 className="text-2xl font-bold mb-3 text-[var(--ink)]">Peak Management</h3>
              <p className="text-[var(--ink-soft)]">Reduce peak demand charges and optimize energy consumption patterns with intelligent storage management.</p>
            </div>
            
            <div className="rounded-2xl border border-[var(--mint-line)] bg-white/60 p-8 backdrop-blur">
              <div className="text-4xl mb-4">🔋</div>
              <h3 className="text-2xl font-bold mb-3 text-[var(--ink)]">Backup Power</h3>
              <p className="text-[var(--ink-soft)]">Seamless power continuity during grid outages or renewable generation shortfalls.</p>
            </div>
            
            <div className="rounded-2xl border border-[var(--mint-line)] bg-white/60 p-8 backdrop-blur">
              <div className="text-4xl mb-4">📊</div>
              <h3 className="text-2xl font-bold mb-3 text-[var(--ink)]">Load Balancing</h3>
              <p className="text-[var(--ink-soft)]">Match power supply to demand patterns for maximum efficiency and cost savings.</p>
            </div>
          </div>
        </div>
      </SectionShell>

      <SectionShell>
        <FeatureGridSection
          eyebrow="Complementary Solutions"
          title="Storage-Enhanced Systems"
          description="Combine batteries with renewable generation for complete energy independence and reliability."
          items={relatedSolutions}
          columns={3}
        />
      </SectionShell>

      <SectionShell>
        <CTABanner
          eyebrow="Need Energy Storage?"
          title="Advanced Battery Systems for Reliability"
          description="Implement battery storage to maximize renewable efficiency and achieve energy independence."
          primary={{ href: "/contact", label: "Request Storage Assessment" }}
          secondary={{ href: "/solutions", label: "View All Solutions" }}
        />
      </SectionShell>
    </>
  );
}
