export type SolutionCard = {
  title: string;
  description: string;
  tag: string;
  imageSrc?: string;
  imageAlt?: string;
};

export type SolutionDetail = {
  eyebrow: string;
  title: string;
  description: string;
  body: string;
  points: string[];
  imageSrc: string;
  imageAlt: string;
  imageLabel: string;
};

export type Solution = {
  slug: string;
  navLabel: string;
  shortLabel: string;
  title: string;
  summary: string;
  metaDescription: string;
  card: SolutionCard;
  hero: {
    eyebrow: string;
    title: string;
    description: string;
    imageSrc: string;
    imageAlt: string;
    imageLabel: string;
    imageSubLabel: string;
  };
  detail: SolutionDetail;
  modules: SolutionCard[];
  applications: SolutionCard[];
  cta: {
    title: string;
    description: string;
  };
};

export const solutions: Solution[] = [
  {
    slug: "solar-pv",
    navLabel: "Solar PV",
    shortLabel: "Solar PV",
    title: "Solar PV",
    summary:
      "Grid-connected and off-grid photovoltaic systems for commercial, industrial, utility and remote energy applications.",
    metaDescription:
      "Solar PV solutions for commercial, industrial, utility and remote sites, structured around load profile, land use, access and long-term performance.",
    card: {
      title: "Solar PV",
      description:
        "Photovoltaic systems planned around the site, the operating load and the way the asset is expected to grow over time.",
      tag: "Core Platform",
      imageSrc: "/images/photo-solar-farm.jpg",
      imageAlt: "Large-scale solar photovoltaic array in a dry open landscape",
    },
    hero: {
      eyebrow: "Solutions / Solar PV",
      title: "Solar power that is engineered around the asset, not added as an afterthought.",
      description:
        "We develop photovoltaic systems for facilities, field assets and larger renewable programs where generation performance has to align with land use, energy demand, maintenance access and commercial logic.",
      imageSrc: "/images/photo-solar-farm.jpg",
      imageAlt: "Large-scale solar photovoltaic array in a dry open landscape",
      imageLabel: "Utility, commercial and distributed PV",
      imageSubLabel: "Planned for real site conditions, expansion paths and operational visibility.",
    },
    detail: {
      eyebrow: "Solar PV",
      title: "Designed around the way the site uses power.",
      description:
        "The right solar project is shaped by the load profile, the physical site and the level of control the client wants over energy costs, continuity and future expansion.",
      body:
        "Solar PV can be deployed across rooftops, ground-mounted arrays and field-scale installations, but the value comes from how well it fits the operating brief. We focus on project definition, system architecture and practical delivery planning so solar becomes useful infrastructure rather than a disconnected add-on.",
      points: [
        "Suitable for on-grid, weak-grid and off-grid operating models",
        "Can be combined with storage, hybrid controls and staged expansion",
        "Structured around environmental exposure, access and maintenance logic",
      ],
      imageSrc: "/images/photo-solar-technician.jpg",
      imageAlt: "Technician carrying a solar panel on a rooftop installation",
      imageLabel: "Project definition and site-fit design",
    },
    modules: [
      {
        title: "Rooftop and Canopy Applications",
        description:
          "For facilities that need generation capacity without compromising the wider operating footprint of the site.",
        tag: "Built Assets",
      },
      {
        title: "Ground-Mount and Field Arrays",
        description:
          "For sites with available land, stronger generation targets or phased renewable expansion requirements.",
        tag: "Open-Site",
      },
      {
        title: "Storage-Ready PV Architecture",
        description:
          "For projects that expect battery integration now or want the option to add it later without reworking the whole system.",
        tag: "Future-Ready",
      },
    ],
    applications: [
      {
        title: "Commercial Portfolios",
        description:
          "Useful where energy costs, operating margins and portfolio-wide visibility are under pressure.",
        tag: "Commercial",
      },
      {
        title: "Industrial Facilities",
        description:
          "A strong fit for sites with daytime demand, defined loads and a clear commercial case for lower grid dependence.",
        tag: "Industrial",
      },
      {
        title: "Remote Infrastructure",
        description:
          "Can reduce fuel dependence when paired with storage or hybrid controls for remote assets and field operations.",
        tag: "Remote",
      },
    ],
    cta: {
      title: "Start with the operating profile and the site conditions.",
      description:
        "If solar PV is part of the answer, we can help define the right configuration, delivery path and support model before the project moves further.",
    },
  },
  {
    slug: "wind-energy",
    navLabel: "Wind Energy",
    shortLabel: "Wind",
    title: "Wind Energy",
    summary:
      "Resource-led wind projects for sites where generation diversity, land context and long-term performance justify the investment.",
    metaDescription:
      "Wind energy projects for utility and large-asset applications, evaluated through resource quality, integration strategy and long-horizon operating performance.",
    card: {
      title: "Wind Energy",
      description:
        "Wind development approached selectively, with stronger attention to resource quality, integration and long-term operating value.",
      tag: "Core Platform",
      imageSrc: "/images/photo-wind-farm.jpg",
      imageAlt: "Wind turbines in an agricultural landscape under open sky",
    },
    hero: {
      eyebrow: "Solutions / Wind Energy",
      title: "Wind power where the resource case and the integration case both hold up.",
      description:
        "Wind is not a universal answer, but where the resource, land profile and delivery context are aligned, it can add meaningful renewable capacity and diversify the wider power strategy.",
      imageSrc: "/images/photo-wind-farm.jpg",
      imageAlt: "Wind turbines in an agricultural landscape under open sky",
      imageLabel: "Selective, resource-led wind planning",
      imageSubLabel: "Developed where generation quality and system integration support the business case.",
    },
    detail: {
      eyebrow: "Wind Energy",
      title: "Evaluated with discipline before it is specified.",
      description:
        "Wind projects perform best when they are treated as part of a broader energy strategy rather than as a standalone technology choice.",
      body:
        "We review wind opportunities through the lens of resource quality, land constraints, grid context, hybrid potential and long-term maintainability. That creates a more credible route for clients who need clarity on whether wind should be part of the portfolio and how it should integrate with the rest of the system.",
      points: [
        "Suitable for larger renewable programs and energy-intensive assets",
        "Can strengthen generation diversity inside hybrid or storage-backed systems",
        "Requires careful review of site, dispatch logic and lifecycle support",
      ],
      imageSrc: "/images/photo-bess.jpg",
      imageAlt: "Containerized battery energy storage units at a utility-scale project site",
      imageLabel: "Integration and dispatch planning",
    },
    modules: [
      {
        title: "Resource and Site Review",
        description:
          "Assessment of whether local conditions support a serious wind development case rather than a conceptual one.",
        tag: "Feasibility",
      },
      {
        title: "Grid and Hybrid Integration",
        description:
          "Planning for how wind generation interacts with storage, solar assets and wider power requirements.",
        tag: "Integration",
      },
      {
        title: "Long-Horizon Delivery Logic",
        description:
          "Wind projects require stronger consideration of access, maintenance strategy and operating exposure from the start.",
        tag: "Lifecycle",
      },
    ],
    applications: [
      {
        title: "Utility and Developer Programs",
        description:
          "Where scale, project life and energy yield justify a formal wind development pathway.",
        tag: "Scale",
      },
      {
        title: "Hybrid Renewable Plants",
        description:
          "Where wind can complement solar profiles and improve generation diversity across the operating day.",
        tag: "Hybrid",
      },
      {
        title: "Large Remote Assets",
        description:
          "Where continuity and fuel displacement benefit from combining multiple renewable sources.",
        tag: "Remote",
      },
    ],
    cta: {
      title: "Bring the site context first. The wind case should follow from that.",
      description:
        "We can help evaluate whether wind belongs in the project, how it should be integrated and what delivery conditions need to be resolved early.",
    },
  },
  {
    slug: "hybrid-systems",
    navLabel: "Hybrid Systems",
    shortLabel: "Hybrid",
    title: "Hybrid Systems",
    summary:
      "Integrated multi-source power systems combining renewable generation, storage and backup for resilient site performance.",
    metaDescription:
      "Hybrid energy systems combining solar, wind, storage and backup to support remote assets, weak-grid locations and continuity-sensitive sites.",
    card: {
      title: "Hybrid Systems",
      description:
        "Coordinated solar, wind, storage and backup architectures for sites that need stronger resilience and better dispatch control.",
      tag: "Core Platform",
      imageSrc: "/images/photo-bess.jpg",
      imageAlt: "Containerized battery energy storage units installed on a utility project site",
    },
    hero: {
      eyebrow: "Solutions / Hybrid Systems",
      title: "Multiple energy sources, one operating strategy.",
      description:
        "Hybrid systems are designed for sites where continuity, fuel exposure and dispatch control matter as much as renewable generation itself. The objective is a more stable plant, not a more complicated one.",
      imageSrc: "/images/photo-bess.jpg",
      imageAlt: "Containerized battery energy storage units installed on a utility project site",
      imageLabel: "Solar, storage and backup in one architecture",
      imageSubLabel: "Built for remote operations, weak-grid assets and power continuity requirements.",
    },
    detail: {
      eyebrow: "Hybrid Systems",
      title: "Built for sites that cannot depend on a single energy source.",
      description:
        "Hybrid design becomes valuable when uptime, logistics and operating resilience create a stronger requirement than simple generation offset.",
      body:
        "We configure hybrid systems by coordinating solar, storage and conventional support around the real power profile of the site. That includes control philosophy, dispatch priorities, maintenance access and how the plant should respond under changing loads or lower renewable output.",
      points: [
        "Useful for weak-grid, off-grid and logistics-constrained environments",
        "Supports steadier energy performance across changing operating conditions",
        "Relies on controls, monitoring and service planning as much as equipment choice",
      ],
      imageSrc: "/images/photo-solar-farm.jpg",
      imageAlt: "Large-scale solar photovoltaic array in a dry open landscape",
      imageLabel: "Generation diversity with practical controls",
    },
    modules: [
      {
        title: "Solar and Storage Coordination",
        description:
          "Pairing solar generation with battery support to smooth site performance and reduce avoidable generator runtime.",
        tag: "Generation Mix",
      },
      {
        title: "Backup Power Integration",
        description:
          "Bringing conventional support into the operating model where continuity requirements demand it.",
        tag: "Resilience",
      },
      {
        title: "Controls and Monitoring",
        description:
          "Turning several energy assets into one manageable system with clearer dispatch logic and operational visibility.",
        tag: "Control Layer",
      },
    ],
    applications: [
      {
        title: "Remote Industrial Sites",
        description:
          "Where fuel logistics, site access and uptime pressure make a coordinated energy strategy more valuable.",
        tag: "Industrial",
      },
      {
        title: "Telecom and Field Networks",
        description:
          "Where distributed assets need more reliable power and stronger visibility across locations.",
        tag: "Telecom",
      },
      {
        title: "Remote Communities and Services",
        description:
          "Where a hybrid plant can improve continuity and reduce dependence on isolated diesel-only systems.",
        tag: "Community",
      },
    ],
    cta: {
      title: "Hybrid projects work best when the operating logic is clear early.",
      description:
        "Share the site load, the reliability requirement and the logistics constraints, and we can help define a hybrid pathway that remains practical to deploy and support.",
    },
  },
  {
    slug: "battery-storage",
    navLabel: "Battery Storage",
    shortLabel: "BESS",
    title: "Battery Storage",
    summary:
      "Battery energy storage systems that improve continuity, dispatch flexibility and the value of renewable generation across the operating day.",
    metaDescription:
      "Battery energy storage systems for reserve support, renewable balancing, peak management and operational resilience across commercial and infrastructure assets.",
    card: {
      title: "Battery Storage",
      description:
        "BESS platforms for peak management, reserve support, renewable balancing and stronger control over site continuity.",
      tag: "Core Platform",
      imageSrc: "/images/photo-bess.jpg",
      imageAlt: "Containerized battery energy storage units installed on a utility project site",
    },
    hero: {
      eyebrow: "Solutions / Battery Storage",
      title: "Storage that improves how the whole energy system behaves.",
      description:
        "Battery storage adds value when it is sized and integrated around the actual operating profile of the site. We treat BESS as strategic infrastructure, not a line item added for appearance.",
      imageSrc: "/images/photo-bess.jpg",
      imageAlt: "Containerized battery energy storage units installed on a utility project site",
      imageLabel: "Reserve support, load flexibility and continuity",
      imageSubLabel: "Configured to support renewable output, operating resilience and future system upgrades.",
    },
    detail: {
      eyebrow: "Battery Storage",
      title: "A control asset as much as an energy asset.",
      description:
        "Storage can improve continuity, peak management and renewable utilisation, but only when the use case is properly defined and tied to the daily operating pattern of the site.",
      body:
        "We support BESS integration across solar projects, hybrid systems and stand-alone applications where better control over power quality, reserve capacity or dispatch timing creates real commercial value. The design brief covers power requirements, cycling expectations, site conditions and long-term support needs.",
      points: [
        "Supports continuity, reserve response and renewable smoothing",
        "Can be delivered as fixed infrastructure or modular packaged systems",
        "Should be evaluated through use case, duty cycle and lifecycle support",
      ],
      imageSrc: "/images/photo-port-containers.jpg",
      imageAlt: "Stacked freight containers in a logistics environment",
      imageLabel: "Modular deployment options",
    },
    modules: [
      {
        title: "Peak and Load Management",
        description:
          "For sites that need more control over peak demand, reserve response and the quality of power supplied to the asset.",
        tag: "Power Use",
      },
      {
        title: "Renewable Balancing",
        description:
          "For solar and hybrid systems that need stronger continuity and a more usable renewable output profile.",
        tag: "Renewables",
      },
      {
        title: "Modular Storage Packages",
        description:
          "For projects where transport, staging or fast-track deployment makes packaged BESS a more practical route.",
        tag: "Deployment",
      },
    ],
    applications: [
      {
        title: "Commercial and Industrial Sites",
        description:
          "Where continuity, power quality and load control support the business case for storage.",
        tag: "C&I",
      },
      {
        title: "Renewable Plants",
        description:
          "Where storage improves the usefulness and controllability of solar or hybrid generation assets.",
        tag: "Generation",
      },
      {
        title: "Critical Infrastructure",
        description:
          "Where reserve support and operational resilience need to be addressed through a clearer energy strategy.",
        tag: "Critical",
      },
    ],
    cta: {
      title: "Define the storage use case before you define the system.",
      description:
        "We can help structure battery storage around continuity, peak management, renewable integration or a broader site resilience brief.",
    },
  },
  {
    slug: "containerized-units",
    navLabel: "Containerized Units",
    shortLabel: "Containerized",
    title: "Containerized Units",
    summary:
      "Modular energy rooms and packaged power systems for remote, staged and fast-track deployment conditions.",
    metaDescription:
      "Containerized power units for modular renewable and storage deployment where logistics, transport, staging and remote access shape the project path.",
    card: {
      title: "Containerized Units",
      description:
        "Packaged renewable, storage and control systems built for remote access, staged deployment and logistics-led delivery.",
      tag: "Core Platform",
      imageSrc: "/images/photo-port-containers.jpg",
      imageAlt: "Stacked freight containers in a logistics environment",
    },
    hero: {
      eyebrow: "Solutions / Containerized Units",
      title: "Modular power systems for projects where logistics matter as much as technology.",
      description:
        "Containerized units create a more controlled route for projects that need transportable, stageable and serviceable energy infrastructure. They are especially useful where site access, programme pressure or modular deployment logic shapes the job.",
      imageSrc: "/images/photo-port-containers.jpg",
      imageAlt: "Stacked freight containers in a logistics environment",
      imageLabel: "Packaged renewable and storage infrastructure",
      imageSubLabel: "Built for field assets, remote projects and faster deployment environments.",
    },
    detail: {
      eyebrow: "Containerized Units",
      title: "A practical route where site conditions compress the delivery window.",
      description:
        "Modular units are valuable when the project benefits from factory-prepared systems, easier mobilisation and more controlled installation sequencing.",
      body:
        "We use containerized formats to house battery storage, controls, power conversion equipment and broader hybrid support systems where transport and site logistics need to be simplified. The goal is faster readiness without losing control of serviceability, maintainability or system integration.",
      points: [
        "Useful for constrained, remote and fast-track project environments",
        "Can package storage, controls and hybrid balance-of-system functions",
        "Supports staged rollout and easier relocation where project needs change",
      ],
      imageSrc: "/images/photo-bess.jpg",
      imageAlt: "Containerized battery energy storage units installed on a utility project site",
      imageLabel: "Controlled, modular deployment",
    },
    modules: [
      {
        title: "Remote Asset Packages",
        description:
          "For field-based operations where a compact, serviceable power room reduces mobilisation complexity.",
        tag: "Remote",
      },
      {
        title: "Fast-Track Installations",
        description:
          "For projects that need more off-site preparation and a shorter on-site build window.",
        tag: "Programme",
      },
      {
        title: "Storage and Control Housings",
        description:
          "For battery systems and hybrid control packages that benefit from integrated enclosure design.",
        tag: "Systems",
      },
    ],
    applications: [
      {
        title: "Telecom and Distributed Networks",
        description:
          "Where multiple sites need repeatable packaged energy systems with a cleaner service model.",
        tag: "Networked Assets",
      },
      {
        title: "Industrial Field Operations",
        description:
          "Where access, relocation and environmental exposure make modular deployment more practical.",
        tag: "Field Use",
      },
      {
        title: "Logistics and Staged Projects",
        description:
          "Where project sequencing benefits from containerized rooms that can be mobilised in phases.",
        tag: "Logistics",
      },
    ],
    cta: {
      title: "If the project is constrained by access or programme, start there.",
      description:
        "We can help decide whether a modular unit is the right delivery format and what should be integrated inside it from the outset.",
    },
  },
  {
    slug: "feasibility-consultancy",
    navLabel: "Feasibility & Consultancy",
    shortLabel: "Consultancy",
    title: "Feasibility & Consultancy",
    summary:
      "Early-stage review, project definition and technical-commercial advisory support for renewable and transition-ready energy infrastructure.",
    metaDescription:
      "Feasibility and consultancy services for renewable energy projects, covering early-stage definition, option review, site strategy and technical-commercial alignment.",
    card: {
      title: "Feasibility & Consultancy",
      description:
        "Project definition, option review and strategic advisory support before technology choices and capital decisions are locked in.",
      tag: "Support Service",
      imageSrc: "/images/photo-solar-technician.jpg",
      imageAlt: "Technician carrying a solar panel on a rooftop installation",
    },
    hero: {
      eyebrow: "Solutions / Feasibility & Consultancy",
      title: "Clearer projects begin with clearer questions.",
      description:
        "Not every client starts with a fixed technology path. We support early-stage review, system option analysis and project shaping so the renewable strategy is better defined before delivery decisions are made.",
      imageSrc: "/images/photo-solar-technician.jpg",
      imageAlt: "Technician carrying a solar panel on a rooftop installation",
      imageLabel: "Project definition before procurement",
      imageSubLabel: "Technical and commercial guidance aligned with the realities of the site.",
    },
    detail: {
      eyebrow: "Feasibility & Consultancy",
      title: "The brief should be tested before it becomes a specification.",
      description:
        "Early-stage advisory work reduces avoidable uncertainty, exposes weak assumptions and helps clients compare solution paths on a more disciplined basis.",
      body:
        "We support feasibility and consultancy across renewable generation, storage, hybrid planning and transition-readiness questions. That includes site context review, high-level option screening, operating-priority alignment and the work needed to move from broad ambition to a more structured project brief.",
      points: [
        "Useful where the solution path is still being defined",
        "Helps align commercial, technical and operational priorities early",
        "Creates a more credible basis for procurement and delivery planning",
      ],
      imageSrc: "/images/photo-solar-farm.jpg",
      imageAlt: "Large-scale solar photovoltaic array in a dry open landscape",
      imageLabel: "Option review and project framing",
    },
    modules: [
      {
        title: "Site and Energy Review",
        description:
          "Initial examination of resource potential, site conditions, operating constraints and likely solution pathways.",
        tag: "Review",
      },
      {
        title: "Technology Path Comparison",
        description:
          "Structured comparison of solar, storage, hybrid and modular options against the project brief.",
        tag: "Options",
      },
      {
        title: "Decision Support",
        description:
          "Clearer inputs for client teams that need to align capital, delivery and operating priorities before moving ahead.",
        tag: "Advisory",
      },
    ],
    applications: [
      {
        title: "Early Feasibility",
        description:
          "Where the project direction is still open and the business case needs sharper framing.",
        tag: "Early Stage",
      },
      {
        title: "Upgrade Planning",
        description:
          "Where an existing asset needs a renewable pathway, storage review or stronger transition roadmap.",
        tag: "Existing Assets",
      },
      {
        title: "Portfolio Screening",
        description:
          "Where several sites need to be reviewed and prioritised before deeper technical work begins.",
        tag: "Portfolio",
      },
    ],
    cta: {
      title: "If the project is still being shaped, this is the right point to engage.",
      description:
        "We can help test the brief, compare pathways and build a more reliable foundation for the next technical and commercial decision.",
    },
  },
  {
    slug: "om-monitoring",
    navLabel: "O&M / Monitoring",
    shortLabel: "O&M",
    title: "O&M / Monitoring",
    summary:
      "Operational support, monitoring visibility and lifecycle planning designed to protect renewable asset performance over time.",
    metaDescription:
      "Operations, maintenance and monitoring services for renewable energy assets, structured around visibility, service response and long-term performance.",
    card: {
      title: "O&M / Monitoring",
      description:
        "Lifecycle support for renewable assets with stronger attention to visibility, service response and long-term operating confidence.",
      tag: "Support Service",
      imageSrc: "/images/photo-solar-technician.jpg",
      imageAlt: "Technician carrying a solar panel on a rooftop installation",
    },
    hero: {
      eyebrow: "Solutions / O&M / Monitoring",
      title: "Renewable assets only create value if they stay visible and supportable.",
      description:
        "Operations and maintenance should be designed into the project from the start. We support monitoring, service planning and lifecycle oversight so the asset remains workable long after commissioning.",
      imageSrc: "/images/photo-solar-technician.jpg",
      imageAlt: "Technician carrying a solar panel on a rooftop installation",
      imageLabel: "Lifecycle visibility and service planning",
      imageSubLabel: "Operational support shaped around response, continuity and long-term asset value.",
    },
    detail: {
      eyebrow: "O&M / Monitoring",
      title: "Long-term performance depends on what happens after handover.",
      description:
        "Asset visibility, maintenance response and operational discipline are central to whether a renewable project continues to deliver on its promise.",
      body:
        "We approach O&M and monitoring as part of the project architecture rather than a separate service added later. That means thinking early about access, service intervals, fault visibility, performance review and how the client team wants to manage the asset over time.",
      points: [
        "Monitoring pathways built around usable operational visibility",
        "Maintenance planning that reflects site access and environmental exposure",
        "Support structures designed to protect continuity and asset value",
      ],
      imageSrc: "/images/photo-bess.jpg",
      imageAlt: "Containerized battery energy storage units installed on a utility project site",
      imageLabel: "Visibility, response and support continuity",
    },
    modules: [
      {
        title: "Performance Monitoring",
        description:
          "Structured visibility into how the system is behaving, where attention is needed and how the asset is trending over time.",
        tag: "Visibility",
      },
      {
        title: "Maintenance Planning",
        description:
          "Service frameworks shaped around environmental exposure, asset criticality and the practicalities of site access.",
        tag: "Service",
      },
      {
        title: "Operational Review",
        description:
          "Periodic review of system behaviour, recurring issues and opportunities to strengthen performance or resilience.",
        tag: "Improvement",
      },
    ],
    applications: [
      {
        title: "Distributed Site Networks",
        description:
          "Where multiple renewable assets need a cleaner service model and stronger visibility across the portfolio.",
        tag: "Portfolio",
      },
      {
        title: "Industrial Renewable Assets",
        description:
          "Where maintenance and fault response have to fit around demanding site operations and continuity needs.",
        tag: "Industrial",
      },
      {
        title: "Remote Renewable Systems",
        description:
          "Where site access is difficult and visibility matters even more because intervention windows are limited.",
        tag: "Remote",
      },
    ],
    cta: {
      title: "Plan for the asset lifecycle, not only for the commissioning date.",
      description:
        "If supportability, visibility and long-term performance are part of the brief, we can help structure the right monitoring and O&M approach.",
    },
  },
];

export function getSolution(slug: string) {
  return solutions.find((solution) => solution.slug === slug);
}

export const solutionRoutes = solutions.map((solution) => `/solutions/${solution.slug}`);

