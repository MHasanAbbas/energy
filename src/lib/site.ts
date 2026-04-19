export const siteConfig = {
  name: "OEnergy",
  shortName: "OEnergy",
  description:
    "Renewable energy solutions delivering solar PV, wind energy, hybrid systems, battery storage, design consultancy, and operation & maintenance services for a sustainable future.",
  url: "https://www.oenergy.com",
  ogImage: "/opengraph-image",
  email: "hello@oenergy.com",
  phone: "+1 (800) OENRGY-1",
  location: "Global Energy Solutions",
  nav: [
    { href: "/", label: "Home" },
    { href: "/about", label: "About" },
    {
      href: "/solutions",
      label: "Solutions",
      children: [
        { href: "/solutions/solar-pv", label: "Solar PV" },
        { href: "/solutions/wind-energy", label: "Wind Energy" },
        { href: "/solutions/hybrid-systems", label: "Hybrid Systems" },
        { href: "/solutions/battery-storage", label: "Battery Storage" },
        { href: "/solutions/design-consultancy", label: "Design & Consultancy" },
        { href: "/solutions/operation-maintenance", label: "Operation & Maintenance" },
      ],
    },
    { href: "/industries", label: "Industries" },
    { href: "/projects", label: "Projects" },
    { href: "/sustainability", label: "Sustainability" },
    { href: "/contact", label: "Contact" },
  ],
} as const;

export const companyJsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: siteConfig.name,
  url: siteConfig.url,
  email: siteConfig.email,
  address: {
    "@type": "PostalAddress",
    addressLocality: "Global",
    addressCountry: "Global",
  },
  areaServed: ["Global"],
  description: siteConfig.description,
};
