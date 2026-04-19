import { CTABanner, FeatureGridSection, SectionShell } from "@/components/content-blocks";
import { PageHero } from "@/components/page-hero";
import { createMetadata } from "@/lib/metadata";

export const metadata = createMetadata({
  title: "OEnergy | Renewable Energy Solutions",
  description:
    "Custom renewable energy solutions for solar PV, wind energy, hybrid systems, and battery storage. Design consultancy and operation & maintenance services tailored to your needs.",
  path: "/",
});

// Main solutions - with links to individual pages
const solutionCards = [
  {
    title: "Solar PV Solutions",
    description:
      "Harness the power of the sun with our tailor-made photovoltaic systems. From residential rooftops to utility-scale farms, we design efficient solutions for maximum output.",
    imageSrc: "/images/photo-solar.jpg",
    imageAlt: "Solar PV installation with photovoltaic panels",
    href: "/solutions/solar-pv",
  },
  {
    title: "Wind Energy Solutions",
    description:
      "Capture clean energy from the wind. Our customizable wind turbine solutions are optimized for your site conditions and resource potential.",
    imageSrc: "/images/photo-wind.jpg",
    imageAlt: "Wind turbines in landscape",
    href: "/solutions/wind-energy",
  },
  {
    title: "Hybrid Systems",
    description:
      "Combine solar, wind, and storage into one powerful system. Maximize reliability with diversified renewable generation and energy storage.",
    imageSrc: "/images/photo-solar-farm.jpg",
    imageAlt: "Hybrid renewable energy system",
    href: "/solutions/hybrid-systems",
  },
  {
    title: "Battery Storage Solutions",
    description:
      "Store renewable energy for complete power independence. Advanced battery systems provide 24/7 availability and peak load management.",
    imageSrc: "/images/photo-bess.jpg",
    imageAlt: "Battery energy storage system",
    href: "/solutions/battery-storage",
  },
  {
    title: "Design & Consultancy",
    description:
      "Expert planning and feasibility assessment. We shape renewable projects from concept to detailed engineering with commercial focus.",
    imageSrc: "/images/photo-engineer.jpg",
    imageAlt: "Design consultancy and project planning",
    href: "/solutions/design-consultancy",
  },
  {
    title: "Operation & Maintenance",
    description:
      "Professional O&M services keeping your system at peak performance. 24/7 monitoring, maintenance, and optimization for long-term value.",
    imageSrc: "/images/photo-solar-technician.jpg",
    imageAlt: "Operation and maintenance services",
    href: "/solutions/operation-maintenance",
  },
];

const aboutContent = {
  eyebrow: "About OEnergy",
  title: "We deliver forward-thinking, sustainable energy solutions",
  description:
    "Specializing in Solar PV, Wind Energy, and cutting-edge Hybrid Systems for a cleaner tomorrow.",
  body: "At OEnergy, we offer comprehensive engineering, procurement, construction, operation and maintenance services for clean energy infrastructure. We specialize in wind energy, solar PV, and energy storage, designing integrated renewable energy systems that meet specific energy needs while promoting environmental sustainability. Our goal is to create cost-effective, reliable, and clean energy solutions that support a sustainable green future.",
};

export default function HomePage() {
  return (
    <>
      <PageHero
        eyebrow="Sustainable Energy Solutions"
        title="Energizing a Sustainable Green Future"
        description="At OEnergy, we deliver custom renewable energy solutions for commercial, residential, and industrial settings. Specializing in wind, solar PV, hybrid systems and battery storage, we design efficient, cost-effective systems tailored to your specific site and energy needs."
        imageSrc="/images/hero-home.svg"
        imageAlt="Solar PV panels and renewable energy infrastructure"
        imageLabel="Custom Renewable Energy Solutions"
        primaryCta={{ href: "/contact", label: "Get Started" }}
        secondaryCta={{ href: "/solutions", label: "Explore Solutions" }}
      />

      <SectionShell>
        <FeatureGridSection
          eyebrow="Our Core Solutions"
          title="Forward-thinking renewable energy solutions"
          description="We specialize in Solar PV, Wind Energy, Hybrid Systems and cutting-edge energy storage solutions tailored for a cleaner tomorrow."
          items={solutionCards}
          columns={3}
        />
      </SectionShell>

      <SectionShell tone="soft">
        <div className="max-w-3xl mx-auto text-center">
          <div className="eyebrow mb-6">{aboutContent.eyebrow}</div>
          <h2 className="text-4xl font-bold mb-6 text-[var(--ink)]">{aboutContent.title}</h2>
          <p className="text-xl leading-8 text-[var(--gulf-teal)] mb-6 font-semibold">{aboutContent.description}</p>
          <p className="text-lg leading-8 text-[var(--ink-soft)] mb-8">{aboutContent.body}</p>
          <a 
            href="/about" 
            className="inline-block px-8 py-3 bg-[var(--gulf-teal)] text-white rounded-lg font-semibold hover:bg-[var(--basin-blue)] transition-colors"
          >
            Learn More About Us
          </a>
        </div>
      </SectionShell>

      <SectionShell>
        <CTABanner
          eyebrow="Ready to Transform Your Energy?"
          title="Let's discuss your renewable energy needs"
          description="Whether you're interested in solar PV, wind energy, hybrid systems, or containerized units, our team is ready to help you find the right solution."
          primary={{ href: "/contact", label: "Contact Us Today" }}
          secondary={{ href: "/projects", label: "View Our Projects" }}
        />
      </SectionShell>
    </>
  );
}
