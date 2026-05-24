export const experienceData = [
  {
    id: "schemaphic",
    company: "Schemaphic Systems",
    role: "Full Stack Developer",
    duration: "Jun 2024 – Present",
    impactMetrics: [
      "150+ APIs Built",
      "50+ Features Delivered",
      "4 Production Deployments",
      "3 Realtime Workflows",
      "5 Integrations",
    ],
    projects: [
      {
        name: "Client Operations Dashboard",
        description:
          "Admin panel for tracking deliverables, invoices, and sprint status across active client accounts.",
      },
      {
        name: "Service Booking Platform",
        description:
          "End-to-end booking flow with slot management, payment hooks, and automated email triggers.",
      },
    ],
    features: [
      "Role-based access for admin and client users",
      "REST APIs with validation and error logging",
      "Responsive dashboards with live status updates",
      "Deployed builds with environment-based config",
    ],
    techStack: ["React", "Node.js", "Express", "MongoDB", "JWT", "AWS"],
    challenge:
      "Legacy PHP booking module had inconsistent session handling. Rebuilt auth on JWT with a parallel-run period so existing users were not logged out during migration.",
  },
  {
    id: "digital-mitro",
    company: "Digital Mitro",
    role: "Full Stack Developer",
    duration: "Jan 2024 – May 2024",
    impactMetrics: [
      "2 Production Systems",
      "4 Production Deployments",
      "25+ Features Delivered",
      "5 Integrations",
      "100+ APIs Built",
    ],
    projects: [
      {
        name: "E-commerce Store (WooCommerce)",
        description:
          "Custom product catalog, checkout flow, and admin order panel for a retail client launch.",
      },
      {
        name: "Marketing Analytics Dashboard",
        description:
          "Campaign performance views pulling ad spend, CTR, and conversion data into one screen.",
      },
    ],
    features: [
      "Custom WordPress themes with mobile-first layouts",
      "Payment gateway and shipping rule integration",
      "SEO-ready page structure and meta handling",
      "Client handoff docs and post-launch bug fixes",
    ],
    techStack: ["WordPress", "WooCommerce", "React", "TypeScript", "PHP", "MySQL"],
    challenge:
      "Checkout dropped 30% on mobile due to a heavy plugin stack. Stripped unused scripts and lazy-loaded product galleries — mobile completion rate recovered within two weeks.",
  },
  // {
  //   id: "creatara",
  //   company: "Creatara",
  //   role: "Frontend Developer",
  //   duration: "Aug 2023 – Dec 2023",
  //   impactMetrics: [
  //     "30+ Features Delivered",
  //     "2 Production Systems",
  //     "3 Production Deployments",
  //     "2 Realtime Workflows",
  //   ],
  //   projects: [
  //     {
  //       name: "3D Vehicle Configurator",
  //       description:
  //         "Web-based color and trim selector with real-time 3D model preview for pre-booking flows.",
  //     },
  //     {
  //       name: "Product Landing & CMS",
  //       description:
  //         "WordPress-powered marketing site with animated hero sections and pre-order form integration.",
  //     },
  //   ],
  //   features: [
  //     "Three.js model viewer with custom material swaps",
  //     "Silhouette animation sequences on scroll",
  //     "CMS-driven content blocks for non-dev updates",
  //     "Optimized asset loading for low-bandwidth devices",
  //   ],
  //   techStack: ["React", "Three.js", "WordPress", "JavaScript", "GSAP", "Blender"],
  //   challenge:
  //     "3D assets exceeded 15 MB and stalled first paint on mobile. Split models into LOD tiers and deferred non-critical textures — initial load dropped to under 4 seconds on 4G.",
  // },
];

export const achievementsData = [
  {
    id: "dsa",
    title: "500+ DSA Problems Solved",
    description:
      "Consistent practice across arrays, graphs, DP, and trees on LeetCode and GFG — built problem-solving speed for production debugging.",
    icon: "code",
    accent: "#c770f0",
  },
  {
    id: "bootcamp",
    title: "Full Stack Bootcamp — AccioJob",
    description:
      "Intensive MERN training with live projects, code reviews, and deployment workflows across the full stack.",
    icon: "certificate",
    accent: "#be50f4",
  },
  {
    id: "summit",
    title: "3rd Place — St. Xavier's Economic Summit",
    description:
      "Team case study on market strategy — ranked 3rd among participating colleges for analysis and presentation.",
    icon: "trophy",
    accent: "#a855f7",
  },
  {
    id: "swimming",
    title: "3rd Place — Swimming Competition",
    description:
      "State-level meet — 3rd in freestyle sprint. Trains discipline, pacing under pressure, and consistent daily practice.",
    icon: "swim",
    accent: "#9333ea",
  },
  {
    id: "yoga",
    title: "5th Place — Bengal Yogasan Championship",
    description:
      "State championship in yogasan — 5th rank. Focus, body control, and sustained training over months.",
    icon: "yoga",
    accent: "#7c3aed",
  },
];
