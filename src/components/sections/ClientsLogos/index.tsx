'use client';

import { useState, useCallback, useMemo, memo } from "react";
import Image from "next/image";
import { useInView } from "react-intersection-observer";
import { ArrowRight } from "phosphor-react";

interface ClientsLogosProps {
  className?: string;
}

// Enhanced client data with additional metadata for SEO
const clients = [
  { 
    name: 'Adobe', 
    filename: 'adobe.svg',
    industry: 'Creative Software',
    description: 'Global leader in creative and digital marketing software solutions',
    founded: '1982',
    website: 'https://adobe.com'
  },
  { 
    name: 'Argos', 
    filename: 'argos.svg',
    industry: 'Retail & E-commerce',
    description: 'UK digital retail catalogue company and part of Sainsbury\'s Group',
    founded: '1973',
    website: 'https://argos.co.uk'
  },
  { 
    name: 'Chargebee', 
    filename: 'chargebee.svg',
    industry: 'SaaS & Subscription Management',
    description: 'Leading subscription billing and revenue management platform',
    founded: '2011',
    website: 'https://chargebee.com'
  },
  { 
    name: 'Eni', 
    filename: 'eni.svg',
    industry: 'Energy & Oil',
    description: 'Italian multinational energy company and one of the oil and gas supermajors',
    founded: '1953',
    website: 'https://eni.com'
  },
  { 
    name: 'Thomson Reuters', 
    filename: 'thomson.svg',
    industry: 'Information Services',
    description: 'Multinational information conglomerate serving professionals in legal, tax, accounting, and compliance markets',
    founded: '2008',
    website: 'https://thomsonreuters.com'
  },
  { 
    name: 'Fetch', 
    filename: 'fetch.svg',
    industry: 'Pet E-commerce',
    description: 'Online pet supplies retailer, part of Ocado Group',
    founded: '2018',
    website: 'https://fetch.co.uk'
  },
  { 
    name: 'Fila', 
    filename: 'fila.svg',
    industry: 'Sportswear & Fashion',
    description: 'Italian sportswear manufacturer known for athletic shoes, apparel and accessories',
    founded: '1911',
    website: 'https://fila.com'
  },
  { 
    name: 'Lovable', 
    filename: 'lovable.svg',
    industry: 'AI & Development Tools',
    description: 'AI-powered software development platform and code generation tool',
    founded: '2024',
    website: 'https://lovable.dev'
  },
  { 
    name: 'Macromedia', 
    filename: 'macromedia.svg',
    industry: 'Software Development',
    description: 'Former American graphics, multimedia, and web development software company, acquired by Adobe in 2005',
    founded: '1992',
    website: null // Historical company
  },
  { 
    name: 'NASA', 
    filename: 'nasa.svg',
    industry: 'Aerospace & Space Exploration',
    description: 'United States government agency responsible for civilian space program and aeronautics research',
    founded: '1958',
    website: 'https://nasa.gov'
  },
  { 
    name: 'Novartis', 
    filename: 'novartis.svg',
    industry: 'Pharmaceuticals',
    description: 'Swiss multinational pharmaceutical corporation and one of the largest pharmaceutical companies worldwide',
    founded: '1996',
    website: 'https://novartis.com'
  },
  { 
    name: 'Ocado', 
    filename: 'ocado.svg',
    industry: 'E-commerce & Technology',
    description: 'British online grocery retailer and technology platform provider for grocery e-commerce',
    founded: '2000',
    website: 'https://ocado.com'
  },
  { 
    name: 'Sun Microsystems', 
    filename: 'sun.svg',
    industry: 'Computer Systems',
    description: 'Former American computer technology company known for workstations, servers and Java programming language, acquired by Oracle in 2010',
    founded: '1982',
    website: null // Historical company
  },
  { 
    name: 'Zopa', 
    filename: 'zopa.svg',
    industry: 'Digital Banking & Fintech',
    description: 'UK digital bank and peer-to-peer lending pioneer, now a fully licensed digital bank',
    founded: '2005',
    website: 'https://zopa.com'
  },
];

// Memoized optimized logo component with enhanced accessibility
// Replace the OptimizedLogoContainer component in ClientsLogos with this fixed version:

// Replace the OptimizedLogoContainer component in ClientsLogos with this fixed version:

const OptimizedLogoContainer = memo(({ 
  client,
  priority = false,
  delay = 0
}: {
  client: typeof clients[0];
  priority?: boolean;
  delay?: number;
}) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [hasError, setHasError] = useState(false);

  // Lazy loading with intersection observer
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
    skip: priority,
    rootMargin: '50px',
  });

  // Memoized callbacks to prevent re-renders
  const handleLoad = useCallback(() => {
    // Add staggered loading delay for smooth loading experience
    setTimeout(() => {
      setIsLoaded(true);
    }, delay);
  }, [delay]);

  const handleError = useCallback(() => {
    setHasError(true);
  }, []);

  const shouldLoad = priority || inView;

  return (
    <figure 
      ref={ref} 
      className="group relative flex items-center justify-center rounded-lg aspect-[3/2] w-full"
      role="img"
      aria-label={`${client.name} logo - ${client.industry} company`}
    >
      {/* Logo Container with semantic meaning */}
      <div 
        className="relative bg-neutral-100 flex items-center justify-center w-full h-full p-1 lg:p-6 z-30"
        role="presentation"
      >
        <div className="relative w-full h-full flex items-center justify-center">
          {/* Company logo with enhanced alt text and proper CSS-only sizing */}
          {shouldLoad && !hasError && (
            <Image
              src={`/images/logos/clients/${client.filename}`}
              alt={`${client.name} company logo - ${client.description}`}
              width={100}
              height={32}
              onLoad={handleLoad}
              onError={handleError}
              className={`w-auto h-auto object-contain transition-all duration-500 filter grayscale group-hover:grayscale-0
                max-w-[100px] sm:max-w-[131px] lg:max-w-[163px] 
                max-h-[32px] sm:max-h-[42px] lg:max-h-[52px] ${
                isLoaded ? 'opacity-60 group-hover:opacity-100' : 'opacity-0'
              }`}
              priority={priority}
              quality={90}
              sizes="(max-width: 640px) 60px, (max-width: 1024px) 80px, 100px"
            />
          )}

          {/* Loading placeholder with better UX */}
          {shouldLoad && (!isLoaded || hasError) && (
            <div 
              className="absolute inset-0 bg-neutral-200 animate-pulse rounded-lg"
              aria-label={hasError ? `Failed to load ${client.name} logo` : `Loading ${client.name} logo`}
            />
          )}
        </div>
      </div>

      {/* Hidden caption for screen readers */}
      <figcaption className="sr-only">
        {client.name} - {client.industry} company founded in {client.founded}. {client.description}
      </figcaption>
    </figure>
  );
});

OptimizedLogoContainer.displayName = 'OptimizedLogoContainer';

// Memoized "and many more" component with semantic meaning
const AndManyMoreBox = memo(() => (
  <div 
    className="relative flex items-center justify-center rounded-lg aspect-[3/2] w-full"
    role="text"
    aria-label="Additional client relationships beyond those displayed"
  >
    <div className="bg-neutral-100 text-[10px] sm:text-xs text-neutral-600 text-left font-mono flex items-center justify-center w-full h-full p-1 lg:p-6">
      <div className="max-w-sm mx-auto" role="presentation">
        and many more
      </div>
    </div>
  </div>
));

AndManyMoreBox.displayName = 'AndManyMoreBox';

// Memoized header section with semantic navigation
const HeaderSection = memo(() => (
  <header className="sticky top-0 z-50 glass border-b border-border/50">
    <div className="flex justify-between px-6 lg:px-12 py-4">
      <div 
        className="flex items-center justify-end gap-4 text-xs font-mono text-muted-foreground"
        role="banner"
        aria-label="Client section navigation"
      >
        <ArrowRight size={16} aria-hidden="true" />
        <span>From 0-1 to Enterprises</span>
      </div>
    </div>
  </header>
));

HeaderSection.displayName = 'HeaderSection';

// Memoized logo grid component with enhanced semantics
const LogoGrid = memo(({ validClients }: { validClients: typeof clients }) => {
  // Create staggered loading delays for smooth loading experience
  const clientsWithDelays = useMemo(() => 
    validClients.map((client, index) => ({
      ...client,
      delay: Math.floor(index / 3) * 100, // 100ms delay every 3 logos
      priority: index < 3, // First 3 logos are priority
    }))
  , [validClients]);

  return (
    <section 
      className="grid grid-cols-3 lg:grid-cols-5 gap-1 auto-rows-fr"
      role="region"
      aria-label="Client companies and partnerships"
    >
      <div className="sr-only">
        <h3>Client Companies</h3>
        <p>
          A selection of {validClients.length} notable companies across industries including 
          technology, finance, retail, and aerospace that I have collaborated with throughout my career.
        </p>
      </div>

      {clientsWithDelays.map((client) => (
        <OptimizedLogoContainer
          key={`client-${client.name}`}
          client={client}
          priority={client.priority}
          delay={client.delay}
        />
      ))}
      <AndManyMoreBox />
    </section>
  );
});

LogoGrid.displayName = 'LogoGrid';

export default function ClientsLogos({ className = '' }: ClientsLogosProps) {
  
  // Memoize clients data to prevent recreation
  const memoizedClients = useMemo(() => clients, []);

  // Generate structured data for client organizations
  const clientsStructuredData = useMemo(() => ({
    "@context": "https://schema.org",
    "@type": "Person",
    "name": "Gianni Favaretto",
    "hasCredential": {
      "@type": "EducationalOccupationalCredential",
      "name": "Professional Client Portfolio",
      "description": "Extensive client portfolio spanning technology, finance, retail, and aerospace industries"
    },
    "worksFor": memoizedClients
      .filter(client => client.website) // Only include active companies
      .map(client => ({
        "@type": "Organization",
        "name": client.name,
        "url": client.website,
        "foundingDate": client.founded,
        "industry": client.industry,
        "description": client.description
      })),
    "clientOf": memoizedClients.map(client => ({
      "@type": "Organization", 
      "name": client.name,
      "industry": client.industry,
      "foundingDate": client.founded,
      "description": client.description,
      ...(client.website && { "url": client.website })
    }))
  }), [memoizedClients]);

  // For now, assume all clients are valid
  const validClients = useMemo(() => memoizedClients, [memoizedClients]);

  return (
    <section className="bg-background text-foreground">
      {/* Structured data for client relationships */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(clientsStructuredData),
        }}
      />

      <HeaderSection />
      
      <main className={`grid grid-cols-7 m-6 lg:m-12 pb-16 lg:pb-0 ${className}`}>
        <div className="col-span-7">
          <div className="mb-6 sr-only">
            <h2>Client Portfolio Overview</h2>
            <p>
              Professional relationships spanning {new Date().getFullYear() - 1999}+ years across diverse industries 
              including Fortune 500 companies, government agencies, startups, and international corporations.
            </p>
          </div>
          <LogoGrid validClients={validClients} />
        </div>
      </main>
    </section>
  );
}