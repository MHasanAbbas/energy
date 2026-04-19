export const siteConfig = {
  name: "Awtad Energy",
  shortName: "Awtad",
  description:
    "Renewable energy company delivering solar PV, wind, hybrid systems, battery storage, containerized units, consultancy, O&M and transition-ready infrastructure strategy.",
  url: "https://www.awtadenergy.com",
  ogImage: "/opengraph-image",
  email: "projectdesk@awtadenergy.om",
  phone: "+968 0000 0000",
  location: "Muscat, Sultanate of Oman",
  nav: [
    { href: "/", label: "Home" },
    { href: "/about", label: "About" },
    {
      href: "/solutions",
      label: "Solutions",
      children: [
        { href: "/solutions#solution-explorer", label: "Solar PV" },
        { href: "/solutions#solution-explorer", label: "Wind Energy" },
        { href: "/solutions#solution-explorer", label: "Hybrid Systems" },
        { href: "/solutions#solution-explorer", label: "Battery Storage" },
        { href: "/solutions#solution-explorer", label: "Containerized Units" },
        { href: "/solutions#support-services", label: "Consultancy & O&M" },
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
    addressLocality: "Muscat",
    addressCountry: "OM",
  },
  areaServed: ["Oman", "Gulf Region"],
  description: siteConfig.description,
};
