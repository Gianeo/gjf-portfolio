// types/services.ts

export interface Capability {
    name: string;
    category: 'strategy' | 'technology' | 'design';
  }
  
  export interface Industry {
    name: string;
    description?: string;
  }
  
  export interface StudioServices {
    studioName: string;
    tagline: string;
    philosophy: string;
    industriesIntro: string;
    industries: Industry[];
    capabilities: {
      strategy: Capability[];
      technology: Capability[];
      design: Capability[];
    };
  }
  
  // Updated data structure focused on industries and capabilities
  export const studioServicesData: StudioServices = {
    studioName: "The Design Studio",
    tagline: "Digital Experiences with Architectural Precision",
    philosophy: "Like architects who shape spaces that define human experience, we craft digital environments that fundamentally transform how people interact with technology. Every pixel placed with intention, every interaction designed with purpose.",
    industriesIntro: "Regardless of the industry, we care about working with organizations that share our commitment to exceptional user experiences and meaningful innovation. We partner with companies that value design thinking and are ready to invest in creating products that truly matter to their users.",
    industries: [
      { name: "B2B SaaS" },
      { name: "E-commerce" },
      { name: "Technology" },
      { name: "Financial Services" },
      { name: "Startups" },
      { name: "Green" },
      { name: "Institutions" }
    ],
    capabilities: {
      strategy: [
        { name: "Brand", category: "strategy" },
        { name: "Social Media", category: "strategy" },
        { name: "Design systems", category: "strategy" },
        { name: "User research & testing", category: "strategy" },
        { name: "Organizational design", category: "strategy" },
      ],
      technology: [
        { name: "Generative AI", category: "technology" },
        { name: "LLM strategy and implementation", category: "technology" },
        { name: "Full stack mobile & web development", category: "technology" },
        { name: "API & CMS development", category: "technology" },
        { name: "Accessibility", category: "technology" }
      ],
      design: [
        { name: "UX and UI design", category: "design" },
        { name: "Product concepting", category: "design" },
        { name: "Rapid prototyping", category: "design" },
        { name: "Brand design", category: "design" },
        { name: "Content design", category: "design" },
        { name: "Information architecture", category: "design" },
        { name: "Motion design", category: "design" },
        { name: "Voice interfaces", category: "design" }
      ]
    }
  };
  
  // Helper functions
  export const getAllCapabilities = (): Capability[] => {
    return [
      ...studioServicesData.capabilities.strategy,
      ...studioServicesData.capabilities.technology,
      ...studioServicesData.capabilities.design
    ];
  };
  
  export const getCapabilitiesByCategory = (category: 'strategy' | 'technology' | 'design'): Capability[] => {
    return studioServicesData.capabilities[category];
  };