import { CTABanner, FeatureGridSection, SectionShell, SplitSection } from "@/components/content-blocks";
import { PageHero } from "@/components/page-hero";
import { createMetadata } from "@/lib/metadata";

export const metadata = createMetadata({
  title: "About OEnergy | Renewable Energy Solutions",
  description:
    "Learn about OEnergy - a renewable energy company providing comprehensive clean energy solutions including solar PV, wind energy, hybrid systems and battery storage.",
  path: "/about",
});

const valueCards = [
  {
    title: "Custom Solutions",
    description: "Every project is tailored to your specific site conditions, energy needs, and performance requirements.",
  },
  {
    title: "Quality & Reliability",
    description: "We design systems built to last, with proper maintenance planning and long-term performance monitoring.",
  },
  {
    title: "Regional Expertise",
    description: "Deep understanding of local conditions, regulations, and infrastructure requirements for renewable energy.",
  },
  {
    title: "End-to-End Support",
    description: "From feasibility studies through design, installation, and ongoing maintenance - we support you throughout.",
  },
];

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About OEnergy"
        title="Delivering Sustainable Energy Solutions"
        description="OEnergy is committed to providing high-quality, reliable renewable energy solutions. We specialize in solar PV, wind energy, hybrid systems, and battery storage designed to meet the specific needs of commercial, industrial, and residential applications."
        imageSrc="/images/photo-engineer.jpg"
        imageAlt="Engineer inspecting renewable energy installation"
        imageLabel="Renewable Energy Expertise"
        primaryCta={{ href: "/contact", label: "Get In Touch" }}
        secondaryCta={{ href: "/solutions", label: "View Solutions" }}
      />

      <SectionShell tone="soft">
        <SplitSection
          eyebrow="Our Mission"
          title="Energizing a sustainable green future"
          description="We believe renewable energy should be accessible, reliable, and tailored to your unique needs."
          body="At OEnergy, we combine technical expertise with commercial understanding to deliver renewable energy solutions that work. From design through installation and ongoing maintenance, we ensure your renewable energy system performs optimally and delivers real value."
          points={[
            "Customized solutions for your specific site and requirements",
            "Expert design and engineering from experienced professionals",
            "Comprehensive support throughout the project lifecycle",
            "Long-term commitment to optimal performance",
          ]}
          imageSrc="/images/photo-solar.jpg"
          imageAlt="Solar panel installation"
          imageLabel="Quality Solar Solutions"
          cta={{ href: "/solutions", label: "Explore Our Solutions" }}
        />
      </SectionShell>

      <SectionShell>
        <FeatureGridSection
          eyebrow="Why Choose OEnergy"
          title="Our Core Values"
          description="We are committed to delivering exceptional renewable energy solutions backed by expertise, reliability, and customer success."
          items={valueCards}
          columns={4}
        />
      </SectionShell>

      <SectionShell tone="dark">
        <div className="grid gap-8 lg:grid-cols-3 text-center">
          <div className="rounded-2xl border border-white/12 bg-white/6 p-8 backdrop-blur-md">
            <div className="text-5xl font-bold text-[var(--sun-metal)] mb-3">10+</div>
            <h3 className="text-xl font-semibold text-white mb-2">Years Experience</h3>
            <p className="text-white/72">Proven track record in renewable energy deployment</p>
          </div>
          <div className="rounded-2xl border border-white/12 bg-white/6 p-8 backdrop-blur-md">
            <div className="text-5xl font-bold text-[var(--sun-metal)] mb-3">500+</div>
            <h3 className="text-xl font-semibold text-white mb-2">Projects Delivered</h3>
            <p className="text-white/72">Successful installations across multiple sectors</p>
          </div>
          <div className="rounded-2xl border border-white/12 bg-white/6 p-8 backdrop-blur-md">
            <div className="text-5xl font-bold text-[var(--sun-metal)] mb-3">100%</div>
            <h3 className="text-xl font-semibold text-white mb-2">Client Satisfaction</h3>
            <p className="text-white/72">Dedicated to exceeding client expectations</p>
          </div>
        </div>
      </SectionShell>

      <SectionShell>
        <CTABanner
          eyebrow="Ready to Go Green?"
          title="Let's transform your energy future"
          description="Contact our team to discuss your renewable energy needs and explore custom solutions designed for your success."
          primary={{ href: "/contact", label: "Start Your Project" }}
          secondary={{ href: "/projects", label: "View Case Studies" }}
        />
      </SectionShell>
    </>
  );
}
