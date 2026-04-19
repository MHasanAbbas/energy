import { CTABanner, FeatureGridSection, SectionShell, SplitSection } from "@/components/content-blocks";
import { PageHero } from "@/components/page-hero";
import { createMetadata } from "@/lib/metadata";

export const metadata = createMetadata({
  title: "Wind Energy Solutions | Awtad Energy",
  description:
    "Customizable wind turbine solutions tailored to site conditions. Utility-scale and large asset wind power systems.",
  path: "/solutions/wind-energy",
});

const relatedSolutions = [
  {
    title: "Hybrid Systems",
    description: "Combine wind with solar and storage for optimal performance.",
    imageSrc: "/images/photo-solar-farm.jpg",
    imageAlt: "Hybrid renewable system",
  },
  {
    title: "Battery Storage",
    description: "Store wind power efficiently for 24/7 availability.",
    imageSrc: "/images/photo-bess.jpg",
    imageAlt: "Battery storage system",
  },
  {
    title: "Design & Consultancy",
    description: "Expert feasibility assessment for wind projects.",
    imageSrc: "/images/photo-engineer.jpg",
    imageAlt: "Engineering consultancy",
  },
];

export default function WindEnergyPage() {
  return (
    <>
      <PageHero
        eyebrow="Wind Energy"
        title="Harness the Power of Wind"
        description="We design and implement wind energy solutions that work with your site's unique conditions and resource potential. Our expertise spans turbine selection, foundation design, grid integration, and performance monitoring."
        imageSrc="/images/photo-wind.jpg"
        imageAlt="Wind turbines in landscape"
        imageLabel="Professional Wind Energy"
        primaryCta={{ href: "/contact", label: "Request Assessment" }}
        secondaryCta={{ href: "/solutions", label: "All Solutions" }}
      />

      <SectionShell>
        <SplitSection
          eyebrow="Customized Wind Solutions"
          title="Wind Turbines Tailored to Your Site"
          description="At Awtad Energy, we understand that every customer has unique wind energy requirements. That's why we offer customizable wind turbine solutions tailored to site conditions, environmental factors, and regulatory standards."
          body="From detailed wind resource assessment to turbine selection, installation, and ongoing monitoring, we ensure your wind energy system operates at peak efficiency. Our approach combines advanced engineering with proven technology to deliver reliable, cost-effective renewable power generation."
          points={[
            "Customized to your site conditions",
            "Professional wind resource assessment",
            "Regulatory compliance and standards",
            "Efficient and reliable power generation",
            "Comprehensive installation and support",
            "Long-term performance monitoring",
          ]}
          imageSrc="/images/photo-wind.jpg"
          imageAlt="Modern wind turbines in field"
          imageLabel="Utility-Scale Wind Installation"
          reverse
        />
      </SectionShell>

      <SectionShell tone="soft">
        <div className="max-w-4xl mx-auto">
          <div className="eyebrow mb-6">Our Expertise</div>
          <h2 className="text-4xl font-bold mb-8 text-[var(--ink)]">Wind Project Development</h2>
          
          <div className="grid gap-8 md:grid-cols-3">
            <div className="rounded-2xl border border-[var(--mint-line)] bg-white/60 p-8 backdrop-blur">
              <div className="text-5xl font-bold text-[var(--gulf-teal)] mb-4">1</div>
              <h3 className="text-2xl font-bold mb-3 text-[var(--ink)]">Resource Analysis</h3>
              <p className="text-[var(--ink-soft)]">Detailed wind resource assessment using meteorological data and historical analysis to determine project viability.</p>
            </div>
            
            <div className="rounded-2xl border border-[var(--mint-line)] bg-white/60 p-8 backdrop-blur">
              <div className="text-5xl font-bold text-[var(--success-green)] mb-4">2</div>
              <h3 className="text-2xl font-bold mb-3 text-[var(--ink)]">Site Development</h3>
              <p className="text-[var(--ink-soft)]">Comprehensive planning including environmental impact, regulatory compliance, and optimal turbine placement.</p>
            </div>
            
            <div className="rounded-2xl border border-[var(--mint-line)] bg-white/60 p-8 backdrop-blur">
              <div className="text-5xl font-bold text-[var(--copper)] mb-4">3</div>
              <h3 className="text-2xl font-bold mb-3 text-[var(--ink)]">Integration & Operation</h3>
              <p className="text-[var(--ink-soft)]">Professional commissioning, grid integration, and long-term performance monitoring and maintenance.</p>
            </div>
          </div>
        </div>
      </SectionShell>

      <SectionShell>
        <FeatureGridSection
          eyebrow="Complementary Solutions"
          title="Maximize Wind Generation"
          description="Combine wind with other renewable technologies to create a more resilient energy system."
          items={relatedSolutions}
          columns={3}
        />
      </SectionShell>

      <SectionShell>
        <CTABanner
          eyebrow="Wind Power Opportunity?"
          title="Evaluate Your Wind Potential"
          description="Let our experts assess your site's wind resources and develop a customized wind energy solution."
          primary={{ href: "/contact", label: "Request Wind Assessment" }}
          secondary={{ href: "/solutions", label: "View All Solutions" }}
        />
      </SectionShell>
    </>
  );
}
