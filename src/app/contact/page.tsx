import { CTABanner, FeatureGridSection, SectionShell } from "@/components/content-blocks";
import { ContactForm } from "@/components/contact-form";
import { PageHero } from "@/components/page-hero";
import { createMetadata } from "@/lib/metadata";
import { siteConfig } from "@/lib/site";

export const metadata = createMetadata({
  title: "Contact OEnergy | Get In Touch",
  description:
    "Get in touch with OEnergy to discuss your renewable energy project. We're here to help you find the right solution.",
  path: "/contact",
});

const contactRoutes = [
  {
    title: "New Projects",
    description: "Ready to start a renewable energy project? Let's discuss your requirements and goals.",
    tag: "Project",
  },
  {
    title: "Partnerships",
    description: "Interested in working together? We collaborate with partners and service providers.",
    tag: "Partner",
  },
  {
    title: "General Enquiries",
    description: "Have questions about our services or solutions? We're happy to help.",
    tag: "General",
  },
];

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Get In Touch"
        title="Ready to transform your energy?"
        description="Contact our team to discuss your renewable energy needs. Whether you're exploring solar PV, wind energy, hybrid systems, or battery storage solutions, we're here to help you find the right path forward."
        imageSrc="/images/photo-engineer.jpg"
        imageAlt="Renewable energy professional on site"
        imageLabel="Expert Consultation Available"
        primaryCta={{ href: "#contact-form", label: "Send Message" }}
        secondaryCta={{ href: `mailto:${siteConfig.email}`, label: "Email Us" }}
      />

      <SectionShell>
        <FeatureGridSection
          eyebrow="How to Reach Us"
          title="Multiple ways to connect"
          description="Whether you have a specific project in mind or just want to explore possibilities, we're ready to help."
          items={contactRoutes}
          columns={3}
        />
      </SectionShell>

      <SectionShell tone="soft" id="contact-form">
        <div className="grid gap-8 lg:grid-cols-2">
          <div className="flex flex-col justify-center">
            <div className="eyebrow mb-4">Contact Information</div>
            <h2 className="text-4xl font-bold mb-6 text-[var(--ink)]">Let's start a conversation</h2>
            <p className="text-lg leading-8 text-[var(--ink-soft)] mb-8">
              Tell us about your project, and we'll respond with relevant insights and next steps.
            </p>
            
            <div className="space-y-6">
              <div className="flex gap-4">
                <div className="text-3xl text-[var(--gulf-teal)]">📍</div>
                <div>
                  <h3 className="font-bold text-[var(--ink)] mb-1">Location</h3>
                  <p className="text-[var(--ink-soft)]">{siteConfig.location}</p>
                </div>
              </div>
              
              <div className="flex gap-4">
                <div className="text-3xl text-[var(--gulf-teal)]">📧</div>
                <div>
                  <h3 className="font-bold text-[var(--ink)] mb-1">Email</h3>
                  <a href={`mailto:${siteConfig.email}`} className="text-[var(--gulf-teal)] hover:text-[var(--basin-blue)] font-semibold">
                    {siteConfig.email}
                  </a>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="text-3xl text-[var(--gulf-teal)]">🌐</div>
                <div>
                  <h3 className="font-bold text-[var(--ink)] mb-1">Website</h3>
                  <a href={siteConfig.url} className="text-[var(--gulf-teal)] hover:text-[var(--basin-blue)] font-semibold">
                    {siteConfig.url}
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="surface-card p-8">
            <ContactForm />
          </div>
        </div>
      </SectionShell>

      <SectionShell>
        <CTABanner
          eyebrow="Questions?"
          title="We're here to help"
          description="Our team is ready to discuss your specific renewable energy needs and identify the best solution for your project."
          primary={{ href: "#contact-form", label: "Start Conversation" }}
          secondary={{ href: "/solutions", label: "Explore Solutions" }}
        />
      </SectionShell>
    </>
  );
}
