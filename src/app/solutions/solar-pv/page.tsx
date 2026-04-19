import { CTABanner, FeatureGridSection, SectionShell, SplitSection } from "@/components/content-blocks";
import { PageHero } from "@/components/page-hero";
import { createMetadata } from "@/lib/metadata";

export const metadata = createMetadata({
  title: "Solar PV Solutions | OEnergy",
  description:
    "Tailor-made Solar PV solutions designed for maximum efficiency. Rooftop, ground-mount, and utility-scale photovoltaic systems.",
  path: "/solutions/solar-pv",
});

const relatedSolutions = [
  {
    title: "Hybrid Systems",
    description: "Combine solar with wind and storage for maximum reliability and continuous power generation.",
    imageSrc: "/images/photo-wind-farm.jpg",
    imageAlt: "Wind and solar hybrid system",
  },
  {
    title: "Battery Storage",
    description: "Store solar energy for 24/7 availability and peak load management.",
    imageSrc: "/images/photo-bess.jpg",
    imageAlt: "Battery energy storage system",
  },
  {
    title: "Design & Consultancy",
    description: "Expert design and feasibility studies for your solar project.",
    imageSrc: "/images/photo-engineer.jpg",
    imageAlt: "Solar system engineering and planning",
  },
];

export default function SolarPVPage() {
  return (
    <>
      <PageHero
        eyebrow="Solar PV"
        title="Convert Sunlight Into Power"
        description="From rooftop systems to utility-scale installations, our solar PV solutions provide reliable, cost-effective renewable energy for residential, commercial, and industrial applications. We design systems that maximize efficiency while delivering long-term value."
        imageSrc="/images/photo-solar.jpg"
        imageAlt="Solar PV panels in sunlight"
        imageLabel="Efficient Solar Generation"
        primaryCta={{ href: "/contact", label: "Request Assessment" }}
        secondaryCta={{ href: "/solutions", label: "All Solutions" }}
      />

      <SectionShell>
        <SplitSection
          eyebrow="Tailor-Made Solutions"
          title="Solar PV Designed for Your Site"
          description="At OEnergy, we provide tailor-made Solar PV solutions designed to meet the specific needs of each site, ensuring maximum efficiency and compliance with environmental and regulatory standards."
          body="Whether you're looking for residential rooftop installations, commercial ground-mounted arrays, or utility-scale photovoltaic farms, we design systems that optimize energy production while delivering long-term value. Our approach combines site-specific engineering with proven technology to ensure peak performance."
          points={[
            "Tailored to your specific site conditions",
            "Maximum energy yield and efficiency",
            "Environmental and regulatory compliance",
            "Designed for long-term performance",
            "Cost-effective and reliable power generation",
            "Comprehensive support from design to operation",
          ]}
          imageSrc="/images/photo-solar.jpg"
          imageAlt="Large scale solar farm installation"
          imageLabel="Professional Solar Implementation"
        />
      </SectionShell>

      <SectionShell tone="soft">
        <div className="max-w-4xl mx-auto">
          <div className="eyebrow mb-6">Our Approach</div>
          <h2 className="text-4xl font-bold mb-8 text-[var(--ink)]">Solar Solution Process</h2>
          
          <div className="grid gap-8 md:grid-cols-3">
            <div className="rounded-2xl border border-[var(--mint-line)] bg-white/60 p-8 backdrop-blur">
              <div className="text-5xl font-bold text-[var(--gulf-teal)] mb-4">1</div>
              <h3 className="text-2xl font-bold mb-3 text-[var(--ink)]">Site Assessment</h3>
              <p className="text-[var(--ink-soft)]">Comprehensive evaluation of your location, solar potential, space availability, and grid connection options.</p>
            </div>
            
            <div className="rounded-2xl border border-[var(--mint-line)] bg-white/60 p-8 backdrop-blur">
              <div className="text-5xl font-bold text-[var(--success-green)] mb-4">2</div>
              <h3 className="text-2xl font-bold mb-3 text-[var(--ink)]">System Design</h3>
              <p className="text-[var(--ink-soft)]">Custom system design optimized for your energy requirements, budget, and environmental conditions.</p>
            </div>
            
            <div className="rounded-2xl border border-[var(--mint-line)] bg-white/60 p-8 backdrop-blur">
              <div className="text-5xl font-bold text-[var(--copper)] mb-4">3</div>
              <h3 className="text-2xl font-bold mb-3 text-[var(--ink)]">Installation & Support</h3>
              <p className="text-[var(--ink-soft)]">Professional installation with ongoing monitoring, maintenance, and performance optimization support.</p>
            </div>
          </div>
        </div>
      </SectionShell>

      <SectionShell>
        <FeatureGridSection
          eyebrow="Complementary Solutions"
          title="Enhance Your Solar System"
          description="Combine solar with other renewable technologies for maximum performance and reliability."
          items={relatedSolutions}
          columns={3}
        />
      </SectionShell>

      <SectionShell>
        <CTABanner
          eyebrow="Ready for Solar?"
          title="Start Your Solar Energy Journey"
          description="Let our experts assess your site and provide a customized solar PV solution designed for your specific needs."
          primary={{ href: "/contact", label: "Request Consultation" }}
          secondary={{ href: "/solutions", label: "View All Solutions" }}
        />
      </SectionShell>
    </>
  );
}
