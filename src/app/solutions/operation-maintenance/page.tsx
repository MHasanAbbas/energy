import { CTABanner, FeatureGridSection, SectionShell, SplitSection } from "@/components/content-blocks";
import { PageHero } from "@/components/page-hero";
import { createMetadata } from "@/lib/metadata";

export const metadata = createMetadata({
  title: "Operation & Maintenance Services | OEnergy",
  description:
    "Professional O&M services ensuring optimal renewable energy system performance and long-term value.",
  path: "/solutions/operation-maintenance",
});

const relatedSolutions = [
  {
    title: "Solar PV",
    description: "Complete solar system maintenance and monitoring.",
    imageSrc: "/images/photo-solar.jpg",
    imageAlt: "Solar maintenance",
  },
  {
    title: "Wind Energy",
    description: "Professional wind turbine operation and servicing.",
    imageSrc: "/images/photo-wind.jpg",
    imageAlt: "Wind servicing",
  },
  {
    title: "Battery Storage",
    description: "BESS monitoring and performance optimization.",
    imageSrc: "/images/photo-bess.jpg",
    imageAlt: "Battery management",
  },
];

export default function OperationMaintenancePage() {
  return (
    <>
      <PageHero
        eyebrow="Operation & Maintenance"
        title="Maintain Peak Performance"
        description="Our comprehensive O&M services ensure your renewable energy system operates at optimal efficiency throughout its lifecycle. With 24/7 monitoring, preventive maintenance, and expert support, we maximize returns on your energy investment."
        imageSrc="/images/photo-solar-technician.jpg"
        imageAlt="Technician performing maintenance"
        imageLabel="Professional Asset Management"
        primaryCta={{ href: "/contact", label: "Discuss O&M Services" }}
        secondaryCta={{ href: "/solutions", label: "All Solutions" }}
      />

      <SectionShell>
        <SplitSection
          eyebrow="Asset Management"
          title="Operation, Maintenance & Monitoring"
          description="OEnergy offers specialized operation, maintenance, and monitoring services to support the long-term success of your renewable energy systems. Professional asset management ensures optimized performance and maximum return on investment."
          body="Our comprehensive O&M capabilities include 24/7 system monitoring, preventive maintenance programs, performance optimization, and rapid response support. We ensure regulatory compliance, asset protection, and consistent system performance throughout the operational lifetime of your installation."
          points={[
            "24/7 monitoring and performance tracking",
            "Preventive maintenance programs",
            "Performance optimization",
            "Rapid response capabilities",
            "Regulatory compliance support",
            "Long-term asset value protection",
            "Component maintenance and replacement",
            "Detailed performance reporting",
          ]}
          imageSrc="/images/photo-solar-technician.jpg"
          imageAlt="Maintenance team at work"
          imageLabel="Professional Service Excellence"
        />
      </SectionShell>

      <SectionShell tone="soft">
        <div className="max-w-4xl mx-auto">
          <div className="eyebrow mb-6">Service Overview</div>
          <h2 className="text-4xl font-bold mb-8 text-[var(--ink)]">Comprehensive O&M Programs</h2>
          
          <div className="grid gap-8 md:grid-cols-3">
            <div className="rounded-2xl border border-[var(--mint-line)] bg-white/60 p-8 backdrop-blur">
              <div className="text-5xl font-bold text-[var(--gulf-teal)] mb-4">📊</div>
              <h3 className="text-2xl font-bold mb-3 text-[var(--ink)]">Monitoring</h3>
              <p className="text-[var(--ink-soft)]">Real-time system monitoring with instant alerts for any performance issues or anomalies.</p>
            </div>
            
            <div className="rounded-2xl border border-[var(--mint-line)] bg-white/60 p-8 backdrop-blur">
              <div className="text-5xl font-bold text-[var(--success-green)] mb-4">🔧</div>
              <h3 className="text-2xl font-bold mb-3 text-[var(--ink)]">Maintenance</h3>
              <p className="text-[var(--ink-soft)]">Scheduled preventive maintenance and rapid response to minimize downtime and maximize output.</p>
            </div>
            
            <div className="rounded-2xl border border-[var(--mint-line)] bg-white/60 p-8 backdrop-blur">
              <div className="text-5xl font-bold text-[var(--copper)] mb-4">📈</div>
              <h3 className="text-2xl font-bold mb-3 text-[var(--ink)]">Optimization</h3>
              <p className="text-[var(--ink-soft)]">Performance analytics and system optimization ensuring peak efficiency and ROI.</p>
            </div>
          </div>
        </div>
      </SectionShell>

      <SectionShell>
        <div className="max-w-4xl mx-auto">
          <div className="eyebrow mb-6">Why Maintenance Matters</div>
          <h2 className="text-3xl font-bold mb-8 text-[var(--ink)]">Protect Your Investment</h2>
          
          <div className="grid gap-6 md:grid-cols-2">
            <div className="p-6 rounded-xl border border-[var(--mint-line)] bg-[var(--success-green)]/5">
              <h3 className="text-xl font-bold mb-2 text-[var(--ink)]">⚡ Peak Performance</h3>
              <p className="text-[var(--ink-soft)]">Properly maintained systems generate 15-20% more power than neglected installations.</p>
            </div>
            
            <div className="p-6 rounded-xl border border-[var(--mint-line)] bg-[var(--gulf-teal)]/5">
              <h3 className="text-xl font-bold mb-2 text-[var(--ink)]">🛡️ Extended Lifespan</h3>
              <p className="text-[var(--ink-soft)]">Preventive maintenance extends equipment life and protects your long-term investment.</p>
            </div>
            
            <div className="p-6 rounded-xl border border-[var(--mint-line)] bg-[var(--copper)]/5">
              <h3 className="text-xl font-bold mb-2 text-[var(--ink)]">📉 Lower Costs</h3>
              <p className="text-[var(--ink-soft)]">Proactive maintenance prevents expensive emergency repairs and system failures.</p>
            </div>
            
            <div className="p-6 rounded-xl border border-[var(--mint-line)] bg-[var(--sun-metal)]/5">
              <h3 className="text-xl font-bold mb-2 text-[var(--ink)]">✓ Peace of Mind</h3>
              <p className="text-[var(--ink-soft)]">Focus on your business while we ensure your energy system operates flawlessly.</p>
            </div>
          </div>
        </div>
      </SectionShell>

      <SectionShell>
        <FeatureGridSection
          eyebrow="We Maintain All"
          title="Technology-Specific Support"
          description="Our maintenance expertise covers all renewable energy technologies and integrated systems."
          items={relatedSolutions}
          columns={3}
        />
      </SectionShell>

      <SectionShell>
        <CTABanner
          eyebrow="Need Maintenance Support?"
          title="Ensure Long-Term System Performance"
          description="Establish a professional O&M program to keep your renewable energy system operating at peak efficiency."
          primary={{ href: "/contact", label: "Create Maintenance Plan" }}
          secondary={{ href: "/solutions", label: "View All Solutions" }}
        />
      </SectionShell>
    </>
  );
}
