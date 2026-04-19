import { CTABanner, FeatureGridSection, SectionShell, SplitSection } from "@/components/content-blocks";
import { PageHero } from "@/components/page-hero";
import { createMetadata } from "@/lib/metadata";

export const metadata = createMetadata({
  title: "Design & Consultancy Services | Awtad Energy",
  description:
    "Professional design, feasibility studies, and consultancy services for renewable energy projects.",
  path: "/solutions/design-consultancy",
});

const relatedSolutions = [
  {
    title: "Solar PV",
    description: "Customized solar design for your site.",
    imageSrc: "/images/photo-solar.jpg",
    imageAlt: "Solar design",
  },
  {
    title: "Wind Energy",
    description: "Professional wind resource and feasibility assessment.",
    imageSrc: "/images/photo-wind.jpg",
    imageAlt: "Wind assessment",
  },
  {
    title: "Hybrid Systems",
    description: "Optimize multiple renewable sources together.",
    imageSrc: "/images/photo-solar-farm.jpg",
    imageAlt: "Hybrid design",
  },
];

export default function DesignConsultancyPage() {
  return (
    <>
      <PageHero
        eyebrow="Design & Consultancy"
        title="Strategic Planning For Energy Success"
        description="Our consultancy and design services guide your project from initial concept through detailed engineering. We analyze your site, resources, and objectives to develop optimized solutions that deliver technical excellence and commercial value."
        imageSrc="/images/photo-engineer.jpg"
        imageAlt="Professional engineering consultation"
        imageLabel="Expert Engineering Design"
        primaryCta={{ href: "/contact", label: "Start Your Project" }}
        secondaryCta={{ href: "/solutions", label: "All Solutions" }}
      />

      <SectionShell>
        <SplitSection
          eyebrow="Specialized Services"
          title="Design & Consultancy Expertise"
          description="Awtad Energy offers specialized design, consultancy, and feasibility services to support the successful development of solar PV, wind turbines, and battery energy storage systems (BESS)."
          body="Our expertise ensures optimized project planning, regulatory compliance, and maximum return on investment. From initial assessment through detailed engineering and ongoing support, we guide every aspect of your renewable energy project to ensure technical excellence and commercial success."
          points={[
            "Site and resource assessment",
            "Feasibility studies and analysis",
            "Detailed technical design",
            "Regulatory compliance support",
            "Project optimization",
            "On-site technical expertise",
            "Cost-benefit analysis",
            "Maintenance and operations planning",
          ]}
          imageSrc="/images/photo-engineer.jpg"
          imageAlt="Engineering team planning"
          imageLabel="Professional Consultation"
        />
      </SectionShell>

      <SectionShell tone="soft">
        <div className="max-w-4xl mx-auto">
          <div className="eyebrow mb-6">Consultancy Services</div>
          <h2 className="text-4xl font-bold mb-8 text-[var(--ink)]">What We Offer</h2>
          
          <div className="grid gap-8 md:grid-cols-2">
            <div className="rounded-2xl border border-[var(--mint-line)] bg-white/60 p-8 backdrop-blur">
              <h3 className="text-2xl font-bold mb-4 text-[var(--gulf-teal)]">Feasibility Services</h3>
              <ul className="space-y-3 text-[var(--ink-soft)]">
                <li>✓ Site resource assessment</li>
                <li>✓ Technology evaluation</li>
                <li>✓ Environmental review</li>
                <li>✓ Economic viability analysis</li>
                <li>✓ Risk identification</li>
              </ul>
            </div>
            
            <div className="rounded-2xl border border-[var(--mint-line)] bg-white/60 p-8 backdrop-blur">
              <h3 className="text-2xl font-bold mb-4 text-[var(--success-green)]">Design Services</h3>
              <ul className="space-y-3 text-[var(--ink-soft)]">
                <li>✓ Detailed system design</li>
                <li>✓ Equipment selection</li>
                <li>✓ Integration planning</li>
                <li>✓ Technical specifications</li>
                <li>✓ Engineering drawings</li>
              </ul>
            </div>
          </div>
        </div>
      </SectionShell>

      <SectionShell>
        <FeatureGridSection
          eyebrow="Design Solutions"
          title="Technology Expertise"
          description="We design solutions across all major renewable energy technologies tailored to your specific needs."
          items={relatedSolutions}
          columns={3}
        />
      </SectionShell>

      <SectionShell>
        <CTABanner
          eyebrow="Planning Your Project?"
          title="Expert Guidance from Concept to Completion"
          description="Let our consultancy team help define and optimize your renewable energy project from initial assessment through implementation."
          primary={{ href: "/contact", label: "Start Consultation" }}
          secondary={{ href: "/solutions", label: "View All Solutions" }}
        />
      </SectionShell>
    </>
  );
}
