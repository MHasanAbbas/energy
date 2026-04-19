import { CTABanner, FeatureGridSection, SectionShell, SplitSection } from "@/components/content-blocks";
import { PageHero } from "@/components/page-hero";
import { createMetadata } from "@/lib/metadata";

export const metadata = createMetadata({
  title: "Hybrid Energy Systems | Awtad Energy",
  description:
    "Integrated solar, wind and battery storage systems for resilient, reliable energy solutions.",
  path: "/solutions/hybrid-systems",
});

const relatedSolutions = [
  {
    title: "Solar PV",
    description: "Solar power generation for daytime energy production.",
    imageSrc: "/images/photo-solar.jpg",
    imageAlt: "Solar installation",
  },
  {
    title: "Wind Energy",
    description: "Wind power generation for consistent energy supply.",
    imageSrc: "/images/photo-wind.jpg",
    imageAlt: "Wind turbines",
  },
  {
    title: "Battery Storage",
    description: "Energy storage for reliable 24/7 power availability.",
    imageSrc: "/images/photo-bess.jpg",
    imageAlt: "Battery storage",
  },
];

export default function HybridSystemsPage() {
  return (
    <>
      <PageHero
        eyebrow="Hybrid Systems"
        title="Maximize Reliability With Diversified Generation"
        description="Combine solar, wind, and storage into one integrated system. Our hybrid approaches deliver consistent power availability by leveraging multiple renewable sources, ensuring your energy demands are met in all conditions."
        imageSrc="/images/photo-solar-farm.jpg"
        imageAlt="Hybrid renewable energy system"
        imageLabel="Integrated Energy Systems"
        primaryCta={{ href: "/contact", label: "Request Assessment" }}
        secondaryCta={{ href: "/solutions", label: "All Solutions" }}
      />

      <SectionShell>
        <SplitSection
          eyebrow="The Future of Energy"
          title="Hybrid Systems for Reliable Power"
          description="At Awtad Energy, we believe hybrid renewable energy systems are the future of sustainable power. By integrating solar PV, wind turbines, and battery energy storage systems (BESS), we create fully decentralized and reliable energy solutions."
          body="Hybrid systems combine the strengths of multiple technologies to deliver consistent, renewable power in all conditions. Our integrated approach ensures maximum energy yield, reliability, and long-term economic returns through optimized design and intelligent control."
          points={[
            "Fully decentralized energy generation",
            "Multiple renewable sources working together",
            "Integrated battery energy storage",
            "Reliable power in all conditions",
            "Maximum energy yield and efficiency",
            "Cost-effective and sustainable solution",
            "Advanced monitoring and control systems",
          ]}
          imageSrc="/images/photo-solar-farm.jpg"
          imageAlt="Integrated hybrid renewable system"
          imageLabel="Complete Hybrid Solution"
        />
      </SectionShell>

      <SectionShell tone="soft">
        <div className="max-w-4xl mx-auto">
          <div className="eyebrow mb-6">System Architecture</div>
          <h2 className="text-4xl font-bold mb-8 text-[var(--ink)]">Hybrid System Components</h2>
          
          <div className="grid gap-8 md:grid-cols-2">
            <div className="rounded-2xl border border-[var(--mint-line)] bg-white/60 p-8 backdrop-blur">
              <h3 className="text-2xl font-bold mb-4 text-[var(--gulf-teal)]">Generation</h3>
              <ul className="space-y-3 text-[var(--ink-soft)]">
                <li>✓ Solar PV arrays for daytime power</li>
                <li>✓ Wind turbines for consistent generation</li>
                <li>✓ Backup generators if needed</li>
                <li>✓ Multi-source load balancing</li>
              </ul>
            </div>
            
            <div className="rounded-2xl border border-[var(--mint-line)] bg-white/60 p-8 backdrop-blur">
              <h3 className="text-2xl font-bold mb-4 text-[var(--success-green)]">Storage & Control</h3>
              <ul className="space-y-3 text-[var(--ink-soft)]">
                <li>✓ Advanced battery storage systems</li>
                <li>✓ Intelligent energy management</li>
                <li>✓ Real-time monitoring and control</li>
                <li>✓ Predictive dispatch optimization</li>
              </ul>
            </div>
          </div>
        </div>
      </SectionShell>

      <SectionShell>
        <FeatureGridSection
          eyebrow="System Components"
          title="Integrated Technologies"
          description="Each component plays a vital role in your hybrid energy system's performance and reliability."
          items={relatedSolutions}
          columns={3}
        />
      </SectionShell>

      <SectionShell>
        <CTABanner
          eyebrow="Need Reliable Power?"
          title="Hybrid Systems for Maximum Resilience"
          description="Design your perfect hybrid energy solution combining solar, wind, and storage for 24/7 power reliability."
          primary={{ href: "/contact", label: "Design Your System" }}
          secondary={{ href: "/solutions", label: "Explore Solutions" }}
        />
      </SectionShell>
    </>
  );
}
