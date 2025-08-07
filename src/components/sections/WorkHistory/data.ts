// types/work-history.ts

export interface Achievement {
    metric: string;
    value: string;
    description: string;
    category: 'team' | 'revenue' | 'growth' | 'efficiency' | 'product';
  }

export interface GridItem {
  id: number;
  type: 'image' | 'text';
  src?: string;
  alt?: string;
  aspectRatio?: "square" | "landscape" | "portrait";
  content?: string;
}
  
  export interface WorkExperience {
    id: string;
    company: string;
    role: string;
    duration: string;
    startDate: string;
    endDate: string;
    location?: string;
    title: string;
    description: string;
    keyResponsibilities: string[];
    caseStudyUrl?: string;
    buttonUrl?: string; // Added buttonUrl property
    gridItems: GridItem[];
  }
  
  // Sample data structure based on your CV
  export const workHistoryData: WorkExperience[] = [
    {
      id: "justscore-2025",
      company: "JustScore",
      role: "Co-founder",
      duration: "Jan 2025 - Today",
      startDate: "2025-01",
      endDate: "current",
      title: "From proof-of-concept to product.",
      description: "I led the creation of JustScore end-to-end—from brand and UX to a polished, production-ready UI. The goal? A performance management platform that's simple, actionable, and genuinely motivating. I shaped not just the product, but the business: defining the model, pricing, and go-to-market. On the engineering side, I partnered closely with developers to keep the codebase scalable, performant, and clean. I also built reusable UI components to ensure design integrity carried through to production. \nAlong the way, I've been supported by my daughter—now growing into a confident co-founder, learning fast, and making decisions of her own. It's been part mentorship, part adventure.",
      keyResponsibilities: [
        "Bootstrapped the business to learn fast and hands-on.",
        "Coded the UI—no handoff, no gaps.",
        "Designed AI experience that feels natural.",
        "Owned the business strategy end to end.",
        "Shaped the brand, voice, and tone from scratch.",
        "Designed and coded the Marketing website",
      ],
      buttonUrl: "https://justscore.com",
      gridItems: [
        {
          id: 1,
          type: 'image',
          src: '/images/work/justscore/1.webp',
          alt: 'JustScore project 1',
          aspectRatio: 'landscape'
        },
        {
          id: 2,
          type: 'image',
          src: '/images/work/justscore/2.webp',
          alt: 'JustScore project 2',
          aspectRatio: 'landscape'
        },
        {
          id: 3,
          type: 'text',
          content: '0 to 1\nSaaS\nAI'
        },
        {
          id: 4,
          type: 'image',
          src: '/images/work/justscore/3.webp',
          alt: 'JustScore project 3',
          aspectRatio: 'landscape'
        },
        {
          id: 5,
          type: 'text',
          content: 'Web App\nMobile Native\nAPIs first\n+'
        },
        {
          id: 6,
          type: 'image',
          src: '/images/work/justscore/4.webp',
          alt: 'JustScore project 4',
          aspectRatio: 'landscape'
        },
        {
          id: 7,
          type: 'image',
          src: '/images/work/justscore/5.webp',
          alt: 'JustScore project 5',
          aspectRatio: 'landscape'
        },
        {
          id: 8,
          type: 'image',
          src: '/images/work/justscore/6.webp',
          alt: 'JustScore project 5',
          aspectRatio: 'landscape'
        },
        {
          id: 9,
          type: 'text',
          content: 'Product Design\nBranding\nMarketing\n+'
        }
      ]
    },
    {
      id: "chargebee-2024",
      company: "Chargebee",
      role: "From Director to Senior Director",
      duration: "Nov 2020 - Dec 2024",
      startDate: "2020-11",
      endDate: "2024-12",
      title: "Leading Product Design, Research, and Design Technology.",
      description: "At Chargebee, I led Product Designers, UX Writers, Researchers, and Design Technologists across a complex, multi-product SaaS platform used by startups, scale-ups, and enterprise teams worldwide. My role spanned hands-on product leadership, cross-regional team building, and systems thinking—helping shape not just how the platform worked, but how the design org itself scaled. I worked closely with teams across the US, Europe, and India, creating space for designers to thrive while pushing the products and business forward.",
      keyResponsibilities: [
        "Moved from Director of Product Design to Senior Director of Product Design, Research, and Design Technology.",
        "Scaled and led a global design team across the US, Europe, and India.",
        "Directed design of multi-product SaaS platform and contributed with the rebranding.",
        "Redesigned the design system and streamlined workflows.",
        "Designed the Next Generation Checkout experience.",
        "Designed the platform's AI Co-pilot experience.",
      ],
      caseStudyUrl: "#",
      // buttonUrl: "https://chargebee.com",
      gridItems: [
        {
          id: 1,
          type: 'image',
          src: '/images/work/chargebee/1.webp',
          alt: 'Chargebee project 1',
          aspectRatio: 'landscape'
        },
        {
          id: 2,
          type: 'text',
          content: 'Scale-Up\nSaaS\nSubscription'
        },
        {
          id: 3,
          type: 'image',
          src: '/images/work/chargebee/2.webp',
          alt: 'Chargebee project 2',
          aspectRatio: 'landscape'
        },
        {
          id: 4,
          type: 'text',
          content: '57 badges in\nhigh customer satisfaction\nProduct excellence'
        },
        {
          id: 5,
          type: 'image',
          src: '/images/work/chargebee/3.webp',
          alt: 'Chargebee project 3',
          aspectRatio: 'portrait'
        },
        {
          id: 6,
          type: 'image',
          src: '/images/work/chargebee/4.webp',
          alt: 'Chargebee project 4',
          aspectRatio: 'landscape'
        },
        {
          id: 7,
          type: 'image',
          src: '/images/work/chargebee/5.webp',
          alt: 'Chargebee project 4',
          aspectRatio: 'landscape'
        },
        {
          id: 8,
          type: 'image',
          src: '/images/work/chargebee/7.webp',
          alt: 'Chargebee project 4',
          aspectRatio: 'landscape'
        },
        {
          id: 9,
          type: 'text',
          content: '+40% operation efficiency\nscaled team from 12 to 30\n92% employee retention'
        },
        {
          id: 10,
          type: 'image',
          src: '/images/work/chargebee/6.webp',
          alt: 'Chargebee project 4',
          aspectRatio: 'landscape'
        },
        {
          id: 11,
          type: 'text',
          content: 'Ranked #1\nin 39 subscription\ncategories'
        },
        {
          id: 12,
          type: 'image',
          src: '/images/work/chargebee/8.webp',
          alt: 'Chargebee project 4',
          aspectRatio: 'landscape'
        },
      ]
    },
    {
      id: "zopa-2020",
      company: "Zopa Bank",
      role: "Head of Experience Design",
      duration: "Oct 2019 - Oct 2020",
      startDate: "2019-10",
      endDate: "2020-10",
      title: "First Zopa's Head of Experience Design.",
      description: "At Zopa, I led the experience design efforts during its transition from peer-to-peer lender to fully licensed digital bank. With a tight deadline to launch, we moved fast—and hit every milestone. I scaled the design team from 4 to 8, coached them through rapid delivery cycles, and helped bring to life new savings and credit products that felt clear, modern, and trustworthy. Beyond UI, I introduced service design practices to improve the full end-to-end journey and stepped in to support branding and the launch of the marketing website.",
      keyResponsibilities: [
        "Launched FSCS-protected savings and credit card products on time.",
        "Scaled the design team from 4 to 8 in three months and introduced a new hiring process.",
        "Introduced service design to improve experiences beyond the screen.",
        "Helped shape the brand and marketing website for bank launch.",
        "Initiated and facilitated a design (thinking) training program."
      ],
      caseStudyUrl: "#",
      // buttonUrl: "https://zopa.com",
      gridItems: [
        {
          id: 1,
          type: 'image',
          src: '/images/work/zopa/1.webp',
          alt: 'Zopa Bank project 1',
          aspectRatio: 'square'
        },
        {
          id: 2,
          type: 'text',
          content: 'Scale-up\nFintech\nBank\n+'
        },
        {
          id: 3,
          type: 'image',
          src: '/images/work/zopa/2.webp',
          alt: 'Zopa Bank project 2',
          aspectRatio: 'square'
        },
        {
          id: 4,
          type: 'image',
          src: '/images/work/zopa/4.webp',
          alt: 'Zopa Bank project 3',
          aspectRatio: 'square'
        },
        {
          id: 5,
          type: 'image',
          src: '/images/work/zopa/3.webp',
          alt: 'Zopa Bank project 3',
          aspectRatio: 'square'
        },
        {
          id: 6,
          type: 'text',
          content: '+27%\nincrease in\nCustomers'
        },
        {
          id: 7,
          type: 'text',
          content: '4.5/5\nCustomer\nsatisfaction'
        },
        {
          id: 8,
          type: 'image',
          src: '/images/work/zopa/6.webp',
          alt: 'Zopa Bank project 3',
          aspectRatio: 'square'
        },
        {
          id: 9,
          type: 'image',
          src: '/images/work/zopa/5.webp',
          alt: 'Zopa Bank project 3',
          aspectRatio: 'square'
        },
      ]
    },
    {
      id: "argos-2019",
      company: "Sainsbury's Argos",
      role: "Head of UX and Product Design",
      duration: "Jan - Oct 2019",
      startDate: "2019-01",
      endDate: "2019-10",
      title: "Leading UX & Product Design across the Argos multi-brand portfolio.",
      description: "I was brought in during a delicate transition—Argos shifting from independent business into the Sainsbury's group. My mandate: steady the design ship. I led a multidisciplinary team of 16 through organisation challenges, resolving internal friction and rebuilding trust across design, research, and content. Alongside this, I improved cross-functional collaboration with engineering, enhanced the design system, and led an initiative that saved the business a couple million pounds through assets optimisation.",
      keyResponsibilities: [
        "Led the UX design of Argos, Argos Financial Services, Tu Clothing, and Habitat.",
        "Resolved internal team conflict during merger transition.",
        "Coached and stabilised a multidisciplinary team of 16.",
        "Achieved approx. £2m annual savings through optimisation.",
        "Led initiative to improve the look and feel of the web experience.",
        "Supported design org restructure across Sainsbury's and Argos",
      ],
      caseStudyUrl: "#",
      // buttonUrl: "https://argos.co.uk",
      gridItems: [
        {
          id: 1,
          type: 'image',
          src: '/images/work/argos/1.webp',
          alt: 'Sainsbury\'s Argos project 1',
          aspectRatio: 'landscape'
        },
        {
          id: 2,
          type: 'text',
          content: 'Enterprise\nEcommerce\nFintech\nIn-Store\n+'
        },
        {
          id: 3,
          type: 'image',
          src: '/images/work/argos/2.webp',
          alt: 'Sainsbury\'s Argos project 2',
          aspectRatio: 'square'
        },
        {
          id: 4,
          type: 'text',
          content: 'Argos Financial Services\nTu Clothing\nHabitat'
        },
        {
          id: 5,
          type: 'image',
          src: '/images/work/argos/3.webp',
          alt: 'Sainsbury\'s Argos project 3',
          aspectRatio: 'landscape'
        },
        {
          id: 6,
          type: 'image',
          src: '/images/work/argos/7.webp',
          alt: 'Sainsbury\'s Argos project 3',
          aspectRatio: 'landscape'
        },
        {
          id: 7,
          type: 'image',
          src: '/images/work/argos/4.webp',
          alt: 'Sainsbury\'s Argos project 3',
          aspectRatio: 'landscape'
        },
        {
          id: 8,
          type: 'image',
          src: '/images/work/argos/5.webp',
          alt: 'Sainsbury\'s Argos project 3',
          aspectRatio: 'landscape'
        },
        {
          id: 9,
          type: 'text',
          content: 'Design Systems\nOptimization\nEfficiency\n+'
        },
      ]
    },
    {
      id: "ocado-tech-2019",
      company: "Ocado Technology",
      role: "UX and Design Chapter Lead (Head)",
      duration: "Mar 2015 - Jan 2019",
      startDate: "2015-03",
      endDate: "2019-01",
      title: "Designing the Ocado Smart Platform experience.",
      description: "I built from scratch and led the UX Design Chapter for the Ocado Smart Platform (OSP), a global online grocery solution built atop robotics, cloud, and big data. Starting with no design capability, I built a lean, international UX team across the UK, Poland, and Barcelona. Under tight timelines, we defined a unified user‑centred vision, introduced dual design systems (Aeris for B2B and Fraisy for B2C), and helped OSP mature into a cohesive, high‑trust product—key to securing partnerships with major retailers like Kroger (US), Sobeys (Canada) and Coles (Australia)",
      keyResponsibilities: [
        "Built and led a multidisciplinary UX team across UK, Poland, and Barcelona.",
        "Defined and drove the end-to-end UX vision for OSP (B2B and B2C).",
        "Created and scaled a B2B and B2C design systems.",
        "Facilitated close collaboration between designers, developers, and product owners, embedding design thinking into technology-heavy culture. ",
        "Contributed to winning global retail partnerships with Kroger (US), ICA (Sweden), and Bon Preu (Catalonia) through clarity and cohesion of the platform experience."
      ],
      caseStudyUrl: "#",
      // buttonUrl: "https://ocadogroup.com/technology/",
      gridItems: [
        {
          id: 1,
          type: 'image',
          src: '/images/work/osp/1.webp',
          alt: 'Ocado Technology project 1',
          aspectRatio: 'landscape'
        },
        {
          id: 2,
          type: 'image',
          src: '/images/work/osp/2.webp',
          alt: 'Ocado Technology project 2',
          aspectRatio: 'landscape'
        },
        {
          id: 3,
          type: 'text',
          content: '0-1\nRaaS/PaaS\nEcommerce\n+'
        },
        {
          id: 4,
          type: 'text',
          content: '95%\nEmployee\nretention'
        },
        {
          id: 5,
          type: 'image',
          src: '/images/work/osp/3.webp',
          alt: 'Ocado Technology project 3',
          aspectRatio: 'landscape'
        },
        {
          id: 6,
          type: 'image',
          src: '/images/work/osp/4.webp',
          alt: 'Ocado Technology project 4',
          aspectRatio: 'landscape'
        },
        {
          id: 7,
          type: 'image',
          src: '/images/work/osp/5.webp',
          alt: 'Ocado Technology project 4',
          aspectRatio: 'landscape'
        },
        {
          id: 8,
          type: 'text',
          content: 'Kroger\nSobeys\nGroupe Casino\nMorrisons\nBon Preu\nIca\n+'
        },
        {
          id: 9,
          type: 'image',
          src: '/images/work/osp/6.webp',
          alt: 'Ocado Technology project 4',
          aspectRatio: 'landscape'
        },
        {
          id: 10,
          type: 'text',
          content: 'Growth\n593%\nShare Value'
        },
        {
          id: 11,
          type: 'image',
          src: '/images/work/osp/7.webp',
          alt: 'Ocado Technology project 4',
          aspectRatio: 'landscape'
        },
        {
          id: 12,
          type: 'image',
          src: '/images/work/osp/8.webp',
          alt: 'Ocado Technology project 4',
          aspectRatio: 'landscape'
        },
      ]
    },
    {
      id: "ocado-gm-2016",
      company: "Ocado - General Merchandise",
      role: "UX and Design Chapter Lead (Head)",
      duration: "Sep 2012 - Apr 2016",
      startDate: "2012-09",
      endDate: "2016-04",
      title: "Designing the Ocado General Merchandise Platform.",
      description: "At Ocado, I led UX and product design for the General Merchandise vertical—spanning beauty (Fabled), pet supplies (Fetch), and kitchenware (Sizzle). I shaped all UX, UI, and brand identity across these destination sites, collaborating with merchandisers, marketers, engineering, and brand teams. We built mobile-first, visually compelling, and accessible commerce platforms that broke new ground in niche markets",
      keyResponsibilities: [
        "Launched Fabled, Fetch, and Sizzle, each with a unique brand and design language.",
        "Built and coached a UX team across product and brand.",
        "Defined UX vision and design systems across all platforms.",
        "Partnered with marketing and merch teams to align brand, content, and product.",
        "Implemented full accessibility standards and service design practices."
      ],
      gridItems: [
        {
          id: 1,
          type: 'image',
          src: '/images/work/ogm/1.webp',
          alt: 'Ocado General Merchandise project 1',
          aspectRatio: 'square'
        },
        {
          id: 2,
          type: 'text',
          content: '0-1\nRetail\nEcommerce\n+'
        },
        {
          id: 3,
          type: 'image',
          src: '/images/work/ogm/2.webp',
          alt: 'Ocado General Merchandise project 2',
          aspectRatio: 'square'
        },
        {
          id: 4,
          type: 'image',
          src: '/images/work/ogm/5.webp',
          alt: 'Ocado General Merchandise project 3',
          aspectRatio: 'square'
        },
        {
          id: 5,
          type: 'image',
          src: '/images/work/ogm/3.webp',
          alt: 'Ocado General Merchandise project 3',
          aspectRatio: 'square'
        },
        {
          id: 6,
          type: 'image',
          src: '/images/work/ogm/4.webp',
          alt: 'Ocado General Merchandise project 3',
          aspectRatio: 'square'
        },
        {
          id: 7,
          type: 'text',
          content: '>34% YoY growth\nin general merchandise\nrevenue'
        },
        {
          id: 8,
          type: 'image',
          src: '/images/work/ogm/6.webp',
          alt: 'Ocado General Merchandise project 3',
          aspectRatio: 'square'
        },
        {
          id: 9,
          type: 'text',
          content: 'Platform as a Service\nDesign System\nIn-store tech\n+'
        },
        {
          id: 10,
          type: 'image',
          src: '/images/work/ogm/7.webp',
          alt: 'Ocado General Merchandise project 3',
          aspectRatio: 'square'
        },
        {
          id: 11,
          type: 'image',
          src: '/images/work/ogm/8.webp',
          alt: 'Ocado General Merchandise project 3',
          aspectRatio: 'square'
        },
        {
          id: 12,
          type: 'image',
          src: '/images/work/ogm/9.webp',
          alt: 'Ocado General Merchandise project 3',
          aspectRatio: 'square'
        },
        {
          id: 13,
          type: 'image',
          src: '/images/work/ogm/10.webp',
          alt: 'Ocado General Merchandise project 3',
          aspectRatio: 'square'
        },
        {
          id: 14,
          type: 'image',
          src: '/images/work/ogm/12.webp',
          alt: 'Ocado General Merchandise project 3',
          aspectRatio: 'square'
        },
        {
          id: 15,
          type: 'image',
          src: '/images/work/ogm/11.webp',
          alt: 'Ocado General Merchandise project 3',
          aspectRatio: 'square'
        },
      ]
    },
    {
      id: "ocado-2012",
      company: "Ocado.com",
      role: "UX Manager",
      duration: "Mar 2010 - Sep 2012",
      startDate: "2010-03",
      endDate: "2012-09",
      title: "Redesigning Ocado's ecommerce experience at scale.",
      description: "I drove major UX enhancements at Ocado.com—optimizing search, navigation, and checkout to support rapid growth. Working cross-functionally with product, analytics, and engineering teams, we deployed data-informed improvements that significantly lifted conversion rates and reduced friction. Ocado moved from launch phase into industry leadership, going public and winning awards—all while I helped shape the experience foundations that underpinned that success.",
      keyResponsibilities: [
        "Redesigned search and navigation, improving findability and funnel efficiency.",
        "Streamlined checkout process, leveraging cross-functional collaboration to reduce friction.",
        "Supported Ocado's LSE listing in 2010 and helped increase weekly orders to over 100,000 by 2011.",
        "Delivered 35%+ growth in orders year over year, supporting Ocado's accelerating scale.",
        "Supported Ocado's 2010 IPO, during which weekly orders surged from ~90K to 100K+ in 2011 and beyond."
      ],
      // buttonUrl: "https://ocado.com",
      gridItems: [
        {
          id: 1,
          type: 'image',
          src: '/images/work/ocado/1.webp',
          alt: 'Ocado.com project 1',
          aspectRatio: 'landscape'
        },
        {
          id: 2,
          type: 'image',
          src: '/images/work/ocado/2.webp',
          alt: 'Ocado.com project 2',
          aspectRatio: 'landscape'
        },
        {
          id: 3,
          type: 'text',
          content: 'Scale-up\nRetail\nEcommerce\n+'
        },
      ]
    },
    {
      id: "freelance-2010",
      company: "Freelance",
      role: "Freelance",
      duration: "1999 - 2010",
      startDate: "1999-01",
      endDate: "2010-12",
      title: "Designer, UI Developer, Trainer, Consultant.",
      description: "Before moving into leadership roles, I built my foundations working across industries as a designer, UI developer, and consultant. I partnered with global brands—helping shape digital products, brand identities, and design strategy in fast-moving, often complex environments. These years gave me hands-on experience, adaptability, and a cross-industry lens I still bring to my work today.",
      keyResponsibilities: [
        "Collaborated with global leaders including Adobe, NASA, Sun Microsystems, ENI, Novartis, and Thomson Reuters.",
        "Designed user experiences and brand assets tailored to diverse sectors and audiences.",
        "Worked across international teams.",
        "Awarded Macromedia Site of the Month for accessibility and design.",
        "Recognised for accessibility excellence in government portals."
      ],
      gridItems: []
    }
  ];
  
  // Helper functions for data manipulation
  export const getExperienceByCompany = (company: string): WorkExperience | undefined => {
    return workHistoryData.find(exp => exp.company.toLowerCase().includes(company.toLowerCase()));
  };
  
  export const getExperiencesByDateRange = (startYear: number, endYear: number): WorkExperience[] => {
    return workHistoryData.filter(exp => {
      const expStartYear = parseInt(exp.startDate.split('-')[0]);
      const expEndYear = exp.endDate === 'current' ? new Date().getFullYear() : parseInt(exp.endDate.split('-')[0]);
      return expStartYear >= startYear && expEndYear <= endYear;
    });
  };
  
  export const getTotalYearsOfExperience = (): number => {
    const startYear = 1999; // From your freelance start
    const currentYear = new Date().getFullYear();
    return currentYear - startYear;
  };