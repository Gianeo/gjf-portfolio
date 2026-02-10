// types/work-history.ts

export interface Achievement {
    metric: string;
    value: string;
    description: string;
    category: 'team' | 'revenue' | 'growth' | 'efficiency' | 'product';
  }

export interface GridItem {
  id: number;
  type: 'image' | 'quote';
  src?: string;
  alt?: string;
  captionText?: string;
  aspectRatio?: "square" | "landscape" | "portrait";
  content?: string;
  name?: string;
  title?: string;
  avatar?: string;
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
      id: "chargebee-2024",
      company: "Chargebee",
      role: "From Director to Senior Director",
      duration: "Nov 2020 - Dec 2024",
      startDate: "2020-11",
      endDate: "2024-12",
      title: "Scaling a Revenue Growth Management Platform.",
      description: "At Chargebee, I led Product Designers, UX Writers, Researchers, and Design Technologists across a complex, multi-product SaaS platform used by startups, scale-ups, and enterprise teams worldwide. I combined hands-on product leadership with systems thinking and cross-regional team building—shaping both how the platform evolved and how the design organisation scaled alongside the business.",
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
          src: '/images/work/chargebee/cb01.webp',
          alt: 'Chargebee project 1',
          captionText: 'Chargebee is a subscription and revenue management platform that helps SaaS businesses launch, scale, and optimise recurring revenue. It supports companies from early growth to enterprise scale, handling billing, pricing, payments, and financial operations across global markets.',
          aspectRatio: 'landscape'
        },
        // {
        //   id: 2,
        //   type: 'text',
        //   content: 'Scale-Up\nSaaS\nSubscription'
        // },
        {
          id: 2,
          type: 'image',
          src: '/images/work/chargebee/cb02.webp',
          alt: 'Chargebee project 2',
          captionText: 'At Chargebee, we redefined the user experience during a period of rapid growth—very much rebuilding the aeroplane while flying it. Working closely with my team, we evolved the platform across billing, payments, CPQ, and approvals, scaling it from a billing system into a cohesive revenue growth engine.',
          aspectRatio: 'landscape'
        },
        {
          id: 3,
          type: 'image',
          src: '/images/work/chargebee/cb03.webp',
          alt: 'Chargebee project 3',
          captionText: 'Under tight timelines, I worked hands-on with the team to redesign Chargebee’s Next Generation Checkout—building a custom system to deliver a polished B2C experience. Providing UI-ready production code helped accelerate delivery, reduce costs, and maintain a checkout flow customers already trusted.',
          aspectRatio: 'landscape'
        },
        {
          id: 4,
          type: 'image',
          src: '/images/work/chargebee/cb04.webp',
          alt: 'Chargebee project 4',
          captionText: 'During a critical scaling phase, I worked hands-on with the team to redesign Chargebee’s design system—enabling faster delivery, consistent UX, and smoother integration of newly acquired products.',
          aspectRatio: 'landscape'
        },
        {
          id: 5,
          type: 'image',
          src: '/images/work/chargebee/cb08.webp',
          alt: 'Chargebee project 4',
          captionText: 'My first move at Chargebee was redesigning the team itself—forming small, diverse groups to balance skills and seniority, eliminate silos, and consistently deliver high-quality work.',
          aspectRatio: 'landscape'
        },
        {
          id: 6,
          type: 'quote',
          content: 'During my two years reporting to Gianni, I was consistently energized by his talent for transforming inefficiencies into opportunities.\nGianni brings a rare combination of bias for action, philosophical wisdom, technical insight, and authentic leadership that would be an invaluable asset to any organization serious about building impactful user experiences at scale.',
          name: 'Julia Hassing',
          title: 'Snr Manager, Research',
          avatar: ''
        },
        {
          id: 7,
          type: 'quote',
          content: 'From our very first conversation, it was evident that Gianni was anything but conventional. His leadership style was a breath of fresh air, combining autonomy with meticulous attention to the finer details of delivery. Gianni has been an incredible guide - keenly listening, asking the right questions to help me arrive at solutions independently, and creating the space for me to establish myself.\n\nAmong Gianni’s remarkable contributions, one stands out as truly trend-setting: establishing the role of front-end design technologists within the team to ensure consistency and control over deliveries. It’s a sustainable model that I deeply admire.',
          name: 'Aparna Ravikumaran',
          title: 'Snr Manager, Product Design',
          avatar: ''
        },
        {
          id: 8,
          type: 'image',
          src: '/images/work/chargebee/cb06.webp',
          alt: 'Chargebee project 4',
          captionText: 'Chargebee Copilot marked the platform’s first step into AI. With limited resources, I partnered closely with AI engineers—defining the UX and establishing a visual identity in days.',
          aspectRatio: 'landscape'
        },
        // {
        //   id: 9,
        //   type: 'text',
        //   content: '+40% operation efficiency\nscaled team from 12 to 30\n92% employee retention'
        // },
        {
          id: 9,
          type: 'image',
          src: '/images/work/chargebee/cb07.webp',
          alt: 'Chargebee project 4',
          captionText: 'As Chargebee rebranded, I played a leadership role in defining the visual direction—working hands-on with the brand design team to refine and consistently apply the new identity across products, marketing, and the wider ecosystem.',
          aspectRatio: 'landscape'
        },
        // {
        //   id: 11,
        //   type: 'text',
        //   content: 'Ranked #1\nin 39 subscription\ncategories'
        // },
        {
          id: 10,
          type: 'image',
          src: '/images/work/chargebee/cb05.webp',
          alt: 'Chargebee project 4',
          captionText: 'With new acquisitions came fragmented experiences. I partnered with designers to demonstrate how these products could be improved by adopting Chargebee’s design guidelines—beginning with the Retention product.',
          aspectRatio: 'landscape'
        },
        {
          id: 11,
          type: 'quote',
          content: 'Gianni introduced the concept of Design Technology at Chargebee, building a specialized team that seamlessly blended design and engineering expertise to address long-standing challenges.\n\nBeyond his technical brilliance, Gianni is an outstanding mentor and craftsman. His leadership empowers teams to innovate boldly while ensuring a sharp focus on business goals.',
          name: 'Jayaraj Elaraj',
          title: 'Manager, Design Technology',
          avatar: ''
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
      description: "At Zopa, I led experience design during its transition from peer-to-peer lender to fully licensed digital bank. Working against an immovable launch deadline, we moved fast and hit every milestone. I scaled the design team from four to eight, coached them through rapid delivery cycles, and helped bring new savings and credit products to life—clear, modern, and built on trust.",
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
          captionText: 'Zopa is a UK-based digital bank offering savings and credit products designed to be transparent, fair, and easy to use. Originally founded as a peer-to-peer lender, Zopa evolved into a fully licensed bank focused on building long-term trust with customers.',
          aspectRatio: 'landscape'
        },
        {
          id: 2,
          type: 'image',
          src: '/images/work/zopa/2.webp',
          alt: 'Zopa Bank project 3',
          captionText: 'The mobile app was central to Zopa’s shift into digital banking. We began by rethinking the Borrowing Power experience, using it as the foundation to redesign the app’s UX and UI—delivering a clearer, more confident product while building a shared design system to support future scale.',
          aspectRatio: 'landscape'
        },
        {
          id: 3,
          type: 'quote',
          content: 'Gianni was instrumental in setting up our user experience design practice at Zopa – as soon as he came in, he managed to get the best out of the existing designers thanks to a set of effective design processes. \n\nI can highly recommend Gianni if you are trying to create an effective design team that works well with the rest of the business. Gianni is also a very effective mentor and manager for the designers themselves.',
          name: 'Didier Baclin',
          title: 'Chief Product Officer',
          avatar: ''
        },
        {
          id: 4,
          type: 'image',
          src: '/images/work/zopa/3.webp',
          alt: 'Zopa Bank project 3',
          captionText: 'In parallel, we redesigned and launched Zopa’s marketing website to reflect the new brand and business direction. Built alongside the product, the site introduced a clearer voice and visual language—supported by a design system shared with the app to ensure consistency across every touchpoint.',
          aspectRatio: 'landscape'
        },
        {
          id: 5,
          type: 'image',
          src: '/images/work/zopa/4.webp',
          alt: 'Zopa Bank project 3',
          captionText: 'Team building was as important as product delivery. Through workshops and collaborative design sessions, I fostered stronger cross-team relationships and a shared way of thinking that carried through into the work.',
          aspectRatio: 'landscape'
        },
        {
          id: 6,
          type: 'quote',
          content: 'Gianni built the experience design team from the ground up, bringing us together and creating a team culture where we could all thrive - a mix of challenge and trust.',
          name: 'Millie Findlay',
          title: 'Design Lead',
          avatar: ''
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
      title: "Leading Design in a multi-brand portfolio.",
      description: "As Argos entered the Sainsbury’s Group, I focused on stabilising the design team. Leading 16 designers, researchers, and content specialists, I addressed organisational friction, rebuilt trust, and improved cross-functional collaboration—while driving systemic improvements that delivered significant cost savings.",
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
          captionText: 'Sainsbury\'s Argos is one of the UK’s largest multichannel retailers, offering a wide range of products across home, technology, and everyday essentials. As part of the Sainsbury’s Group, Argos operates at national scale, serving millions of customers through digital, catalogue, and in-store experiences.1',
          aspectRatio: 'landscape'
        },
        {
          id: 2,
          type: 'image',
          src: '/images/work/argos/2.webp',
          alt: 'Sainsbury\'s Argos project 2',
          captionText: 'Alongside restoring cross-functional collaboration, I partnered with designers to define a renewed UX and UI direction—using craft as a lever to rebuild momentum and confidence in the platform.',
          aspectRatio: 'landscape'
        },
        {
          id: 3,
          type: 'image',
          src: '/images/work/argos/3.webp',
          alt: 'Sainsbury\'s Argos project 3',
          captionText: 'Weekly workshops became a cornerstone for the team. Through design thinking and collaborative decision-making, we built trust, shared ownership, and stronger skills—together.',
          aspectRatio: 'landscape'
        },
        {
          id: 4,
          type: 'image',
          src: '/images/work/argos/4.webp',
          alt: 'Sainsbury\'s Argos project 3',
          captionText: 'Alongside Argos’s ecommerce platform, I led design across Argos Financial Services, Tu Clothing, and Habitat—aligning multiple brands under a cohesive experience strategy.',
          aspectRatio: 'landscape'
        },
        {
          id: 5,
          type: 'quote',
          content: 'During the time Gianni and I worked together at Argos, I was impressed with his professionalism, ability to spot key issues, and ability to "roll up his sleeves" and teach by doing.\n\nWhen Gianni started at Argos he immediately identified opportunities in our ways of working; proposed and gained support for necessary changes; and then guided the team through the transition in a way that gave every team member a way to feel good about the process.\n\nGianni frequently wrote his own UX prototypes to ensure the changes proposed were workable for the organisation before presenting them to the team. He also held brown bags and open design meetings including Product Management and members of other organisational UX teams, including merchandising and brand.​',
          name: 'Melissa Dunn',
          title: 'Director Product Development',
          avatar: ''
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
      title: "From a blank canvas to the Ocado Smart Platform.",
      description: "I built and led the UX Design Chapter for Ocado Smart Platform from the ground up. Starting with no design capability, I formed a lean, international team across the UK, Poland, and Barcelona. Under tight timelines, we defined a unified, user-centred vision and introduced dual design systems—for B2B and for B2C—helping OSP mature into a cohesive, high-trust product central to partnerships with retailers such as Kroger, Sobeys, and Coles.",
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
          captionText: 'Ocado Smart Platform is a global online grocery solution combining robotics, cloud infrastructure, and data science. It enables retailers to power end-to-end ecommerce, fulfilment, and last-mile operations at scale, supporting some of the world’s largest grocery businesses.',
          aspectRatio: 'landscape'
        },
        {
          id: 2,
          type: 'image',
          src: '/images/work/osp/2.webp',
          alt: 'Ocado Technology project 2',
          captionText: 'Drawing from my work on ocado.com, I shaped the OSP B2C shopping experience—combining Ocado’s proven strengths with a scalable, system-led approach to support customisation and modern commerce needs.',
          aspectRatio: 'landscape'
        },
        {
          id: 3,
          type: 'image',
          src: '/images/work/osp/3.webp',
          alt: 'Ocado Technology project 3',
          captionText: 'From a team of one, I grew the UX organisation to twenty across B2C and B2B—introducing design thinking as a shared language to unlock collaboration, ownership, and better ideas across disciplines.',
          aspectRatio: 'landscape'
        },
        {
          id: 4,
          type: 'image',
          src: '/images/work/osp/4.webp',
          alt: 'Ocado Technology project 4',
          captionText: 'Brand customisation was core to OSP’s success. We designed a flexible UI system that allowed each retailer’s brand to shine—successfully adapting the experience for Kroger, Morrisons, ICA, Groupe Casino, Sobeys, Panda Retail Company, AEON, and more.',
          aspectRatio: 'landscape'
        },
        {
          id: 5,
          type: 'image',
          src: '/images/work/osp/5.webp',
          alt: 'Ocado Technology project 4',
          captionText: 'OSP wasn’t just a shopper-facing platform. We also designed the B2B experience—defining how retailers onboard, configure, and operate their businesses end to end within Ocado Smart Platform.',
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
      title: "From nothing to a set of brands, built as one.",
      description: "Ocado’s General Merchandise work focused on building brands, not just sites. I led UX, UI, and brand design across Fabled, Fetch, and Sizzle—partnering closely with cross-functional teams to launch distinctive, mobile-first commerce experiences in emerging categories.",
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
          captionText: 'Fabled by Marie Claire is a curated beauty destination created with Marie Claire, focused on discovery, quality, and trusted editorial voice. It brings together emerging and established beauty brands in a refined, content-led shopping experience.',
          aspectRatio: 'landscape'
        },
        {
          id: 2,
          type: 'image',
          src: '/images/work/ogm/2.webp',
          alt: 'Ocado General Merchandise project 2',
          captionText: 'I led the design of Fabled’s UX and UI in close collaboration with the team, extending the work into clear design guidelines for marketing—so product and brand spoke with one voice.',
          aspectRatio: 'landscape'
        },
        {
          id: 3,
          type: 'image',
          src: '/images/work/ogm/3.webp',
          alt: 'Ocado General Merchandise project 2',
          captionText: 'Fetch is an online pet store offering food, toys, and essentials for cats and dogs. Designed for convenience and trust, Fetch combines a simple shopping experience with carefully selected products to support everyday pet care.',
          aspectRatio: 'landscape'
        },
        {
          id: 4,
          type: 'image',
          src: '/images/work/ogm/4.webp',
          alt: 'Ocado General Merchandise project 3',
          captionText: 'I led the design of Fetch’s UX and UI in close collaboration with the team, extending the work into marketing design guidelines to keep the brand cohesive wherever it showed up.',
          aspectRatio: 'landscape'
        },
        {
          id: 5,
          type: 'image',
          src: '/images/work/ogm/5.webp',
          alt: 'Ocado General Merchandise project 3',
          captionText: 'Sizzle is a kitchenware brand offering well-designed tools for everyday cooking. Focused on quality, usability, and modern aesthetics, Sizzle brings together functional products that make cooking simpler and more enjoyable.',
          aspectRatio: 'landscape'
        },
        {
          id: 6,
          type: 'image',
          src: '/images/work/ogm/6.webp',
          alt: 'Ocado General Merchandise project 3',
          captionText: 'I led the design of Sizzle’s UX and UI with the team, extending the work into marketing design guidelines to keep the brand consistent across product and communications.',
          aspectRatio: 'landscape'
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
      title: "Reinventing a grocery online experience at scale.",
      description: "I played a key role in evolving ocado.com during a period of rapid growth—improving core journeys such as search, navigation, and checkout. Through close collaboration with analytics, product, and engineering, we delivered measurable UX gains as Ocado scaled into a market leader and public company.",
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
          captionText: 'Ocado was an early pioneer of online grocery in the UK, known for its technology-led approach to ecommerce and fulfilment. At the time, ocado.com was scaling rapidly—setting new standards for usability, logistics, and data-driven retail while shaping customer expectations for online food shopping.',
          aspectRatio: 'landscape'
        },
        {
          id: 2,
          type: 'image',
          src: '/images/work/ocado/2.webp',
          alt: 'Ocado.com project 2',
          captionText: 'I worked across Ocado.com’s main customer touchpoints, refining the experience to reduce friction, support rapid growth, and make online grocery shopping feel faster, clearer, and more dependable.',
          aspectRatio: 'landscape'
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
      title: "From design to code, from teaching to guiding.",
      description: "Before moving into leadership roles, I built my foundations as a designer, UI engineer, and consultant working across industries and international teams. I collaborated with global organisations including Adobe, NASA, Sun Microsystems, ENI, Novartis, and Thomson Reuters—designing user experiences and brand assets for diverse sectors and audiences. During this time, my work was recognised with a Macromedia Site of the Month award for accessibility and design, selection as a Macromedia Specialist Consultant in Italy, and recognition for accessibility excellence in government portals.",
      keyResponsibilities: [
        "Collaborated with global leaders including Adobe, NASA, Sun Microsystems, ENI, Novartis, and Thomson Reuters.",
        "Designed user experiences and brand assets tailored to diverse sectors and audiences.",
        "Worked across international teams.",
        "Awarded Macromedia Site of the Month for accessibility and design.",
        "Selected to be one of the few Macromedia spacialist consultants in Italy.",
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
