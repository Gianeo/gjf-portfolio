"use client";

import { useState, useCallback, useMemo, memo } from "react";
import Image from "next/image";
import Link from "next/link";
import { useInView } from "react-intersection-observer";
import {
  ArrowRightIcon,
  TrendUpIcon,
  TrendDownIcon,
  GlobeIcon,
} from "@phosphor-icons/react";
import { ExternalLinkIcon } from "lucide-react";

// Import the updated data structure
import { workHistoryData, WorkExperience, GridItem } from "./data";
import { Button } from "@/components/ui/button";

interface WorkHistoryProps {
  experiences?: WorkExperience[];
}

// Memoized optimized image component
const OptimizedImageContainer = memo(({
  item,
  experienceId,
  className = "",
  priority = false
}: {
  item: GridItem;
  experienceId: string;
  className?: string;
  priority?: boolean;
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
    setIsLoaded(true);
  }, []);

  const handleError = useCallback(() => {
    setHasError(true);
  }, []);

  // Don't render if there's an error
  if (hasError) return null;

  const shouldLoad = priority || inView;

  return (
    <figure 
      ref={ref} 
      className={`relative overflow-hidden bg-neutral-100 rounded-lg ${className}`}
      role="img"
      aria-label={item.alt || `Work sample from ${experienceId}`}
    >
      {/* Simple loading placeholder */}
      {!isLoaded && shouldLoad && (
        <div className="absolute inset-0 bg-gradient-to-br from-neutral-200 to-neutral-300 animate-pulse z-10" />
      )}

      {/* Hover effect - only render when loaded and for images */}
      {isLoaded && item.type === 'image' && (
        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-accent/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-20" />
      )}

      {/* Image container - only load when in view or priority */}
      {shouldLoad && item.type === 'image' && item.src && (
        <div className="absolute inset-0 z-30">
          <div className="relative w-full h-full overflow-hidden rounded-lg">
            <Image
              src={item.src}
              alt={item.alt || `Work sample showcasing ${experienceId} project deliverables`}
              fill
              onLoad={handleLoad}
              onError={handleError}
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              className="object-contain rounded-lg transition-all duration-700 group-hover:scale-105"
              priority={priority}
              quality={85}
            />
          </div>
        </div>
      )}
    </figure>
  );
});

OptimizedImageContainer.displayName = 'OptimizedImageContainer';

// Memoized text container component
const TextContainer = memo(({
  content,
  className = ""
}: {
  content: string;
  className?: string;
}) => {
  const lines = content.split('\n').filter(line => line.trim());

  return (
    <div 
      className={`rounded-lg w-full bg-neutral-100 flex items-center text-xs text-neutral-600 aspect-[4/3] p-4 ${className}`}
      role="text"
      aria-label={`Key metrics: ${lines.join(', ')}`}
    >
      <div className="font-mono text-left max-w-sm mx-auto">
        <div className="space-y-1">
          {lines.map((line, index) => (
            <div
              key={index}
              className="text-xs font-normal">
              {line}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
});

TextContainer.displayName = 'TextContainer';

// Memoized achievement value renderer
const AchievementValue = memo(({ value }: { value: string }) => {
  switch (value) {
    case "Significant":
      return <TrendUpIcon size={24} className="text-primary" aria-label="Significant improvement" />;
    case "Reduced":
      return <TrendDownIcon size={24} className="text-primary" aria-label="Reduced metrics" />;
    case "International":
      return <GlobeIcon size={24} className="text-primary" aria-label="International scope" />;
    default:
      return <span className="text-2xl font-heading font-medium text-primary">{value}</span>;
  }
});

AchievementValue.displayName = 'AchievementValue';

// Memoized external link button component
const ExternalLinkButton = memo(({ 
  url, 
  company 
}: { 
  url: string; 
  company: string; 
}) => (
  <Button asChild size="lg" variant="default" className="btn">
    <Link 
      href={url} 
      target="_blank" 
      rel="noopener noreferrer"
      aria-label={`Visit ${company} website (opens in new tab)`}
    >
      <ExternalLinkIcon size={16} aria-hidden="true" />
      Visit {company}
    </Link>
  </Button>
));

ExternalLinkButton.displayName = 'ExternalLinkButton';

// Memoized grid gallery component
const GridGallery = memo(({
  gridItems,
  experienceId,
  companyName,
  priority = false
}: {
  gridItems: GridItem[];
  experienceId: string;
  companyName: string;
  priority?: boolean;
}) => {
  if (gridItems.length === 0) return null;

  return (
    <div 
      className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-1"
      role="region"
      aria-label={`${companyName} project gallery`}
    >
      <div className="sr-only">
        <h4>Project Gallery for {companyName}</h4>
        <p>Visual examples and key metrics from work completed at {companyName}</p>
      </div>
      
      {gridItems.map((item, index) => (
        <div key={`${experienceId}-${item.id}`} className="w-full aspect-[4/3] group">
          {item.type === 'image' ? (
            <OptimizedImageContainer
              item={item}
              experienceId={experienceId}
              className="w-full h-full"
              priority={priority && index === 0}
            />
          ) : (
            <TextContainer
              content={item.content || ''}
              className="w-full h-full"
            />
          )}
        </div>
      ))}
    </div>
  );
});

GridGallery.displayName = 'GridGallery';

// Memoized work experience entry component
const WorkExperienceEntry = memo(({
  experience,
  isFirst = false
}: {
  experience: WorkExperience;
  isFirst?: boolean;
}) => {
  // Generate structured data for this work experience
  const workExperienceStructuredData = useMemo(() => ({
    "@context": "https://schema.org",
    "@type": "WorkExperience",
    "identifier": experience.id,
    "name": `${experience.role} at ${experience.company}`,
    "description": experience.description,
    "startDate": experience.startDate,
    "endDate": experience.endDate === 'current' ? new Date().toISOString().split('T')[0] : experience.endDate,
    "employer": {
      "@type": "Organization",
      "name": experience.company,
      "url": experience.buttonUrl || `https://${experience.company.toLowerCase().replace(/\s+/g, '')}.com`
    },
    "jobTitle": experience.role,
    "workLocation": experience.location || "London, UK",
    "responsibilities": experience.keyResponsibilities,
    "skills": experience.keyResponsibilities.map(resp => 
      resp.includes('design') ? 'Design Leadership' :
      resp.includes('team') ? 'Team Management' :
      resp.includes('system') ? 'Design Systems' :
      'Product Strategy'
    ).filter((skill, index, self) => self.indexOf(skill) === index)
  }), [experience]);

  // Memoized company info section
  const CompanyInfo = memo(() => (
    <aside className="col-span-12 lg:col-span-2">
      <div className="sticky top-24 px-6 lg:px-12">
        <time 
          className="text-xs font-mono text-muted-foreground mb-2 block"
          dateTime={`${experience.startDate}/${experience.endDate}`}
          aria-label={`Employment period: ${experience.duration}`}
        >
          {experience.duration}
        </time>
        <h3 className="font-copy font-semibold text-xl lg:text-base xl:text-xl tracking-normal leading-none mb-1">
          {experience.company}
        </h3>
        <p className="text-sm text-muted-foreground font-mono sr-only">
          Role: {experience.role}
        </p>
      </div>
    </aside>
  ));

  CompanyInfo.displayName = 'CompanyInfo';

  // Memoized content section
  const ContentSection = memo(() => (
    <div className="col-span-12 lg:col-span-4">
      <article className="space-y-6 md:space-y-10">
        {/* Work experience header */}
        <header className="space-y-8">
          <h3 
            className="font-heading font-semibold text-5xl heading-normal leading-13 max-w-lg lg:-mt-1.5"
            id={`work-${experience.id}`}
          >
            {experience.title}
          </h3>

          <div 
            className="font-copy text-muted-foreground text-base prose-optimized max-w-lg"
            aria-describedby={`work-${experience.id}`}
          >
            {experience.description.split('\n').map((paragraph, index) => (
              <p key={index} className={index > 0 ? 'mt-4' : ''}>
                {paragraph}
              </p>
            ))}
          </div>
        </header>

        {/* Key Responsibilities */}
        <section aria-labelledby={`responsibilities-${experience.id}`}>
          <h4 id={`responsibilities-${experience.id}`} className="sr-only">
            Key Responsibilities at {experience.company}
          </h4>
          <div className="max-w-4xl">
            <ul 
              className="space-y-1.5 grid grid-cols-2 md:grid-cols-3 gap-6 md:gap-10"
              role="list"
              aria-label={`Key achievements and responsibilities at ${experience.company}`}
            >
              {experience.keyResponsibilities.map((responsibility, index) => (
                <li
                  key={index}
                  className="flex items-start gap-3 text-base font-copy text-muted-foreground p-4"
                  role="listitem"
                >
                  <span 
                    className="size-2 rounded-full bg-primary mt-2 flex-shrink-0" 
                    aria-hidden="true"
                  />
                  <span>{responsibility}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* External Link Button */}
        {experience.buttonUrl && (
          <div className="pt-4">
            <ExternalLinkButton 
              url={experience.buttonUrl} 
              company={experience.company} 
            />
          </div>
        )}
      </article>
    </div>
  ));

  ContentSection.displayName = 'ContentSection';

  return (
    <article 
      className="grid grid-cols-1 lg:grid-cols-12 gap-4 sm:gap-6 xl:gap-8"
      aria-labelledby={`work-${experience.id}`}
    >
      {/* Structured data for this work experience */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(workExperienceStructuredData),
        }}
      />

      <CompanyInfo />
      <div className="col-span-12 lg:col-span-10 px-6 lg:px-0 space-y-10 md:space-y-14">
        <ContentSection />

        {/* Project Gallery */}
        {experience.gridItems && experience.gridItems.length > 0 && (
          <GridGallery
            gridItems={experience.gridItems}
            experienceId={experience.id}
            companyName={experience.company}
            priority={isFirst}
          />
        )}
      </div>
    </article>
  );
});

WorkExperienceEntry.displayName = 'WorkExperienceEntry';

export default function WorkHistory({
  experiences = workHistoryData,
}: WorkHistoryProps) {
  // Generate overall work history structured data
  const workHistoryStructuredData = useMemo(() => ({
    "@context": "https://schema.org",
    "@type": "Person",
    "name": "Gianni Favaretto",
    "hasOccupation": experiences.map(exp => ({
      "@type": "Occupation",
      "name": exp.role,
      "occupationLocation": exp.location || "London, UK",
      "employer": {
        "@type": "Organization",
        "name": exp.company
      },
      "startDate": exp.startDate,
      "endDate": exp.endDate === 'current' ? new Date().toISOString().split('T')[0] : exp.endDate
    })),
    "workExample": experiences.map(exp => ({
      "@type": "CreativeWork",
      "name": exp.title,
      "description": exp.description,
      "creator": "Gianni Favaretto",
      "dateCreated": exp.startDate,
      "industry": exp.company.includes('Bank') ? 'Financial Services' :
                  exp.company.includes('Ocado') ? 'E-commerce' :
                  exp.company.includes('Chargebee') ? 'SaaS' : 'Technology'
    }))
  }), [experiences]);

  // Memoized header component
  const HeaderSection = memo(() => (
    <header className="sticky top-0 z-50 glass border-b border-border/50">
      <div className="flex justify-between px-6 lg:px-12 py-4">
        <div className="flex items-center gap-4 text-xs font-mono text-muted-foreground">
          <ArrowRightIcon size={16} aria-hidden="true" />
          <span>Work History</span>
        </div>
      </div>
    </header>
  ));

  HeaderSection.displayName = 'HeaderSection';

  // Memoize experiences to prevent unnecessary recalculations
  const memoizedExperiences = useMemo(() => experiences, [experiences]);

  return (
    <section className="min-h-screen bg-background text-foreground">
      {/* Overall work history structured data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(workHistoryStructuredData),
        }}
      />

      <HeaderSection />

      {/* Work Experience Entries */}
      <div 
        className="py-6 sm:py-8 space-y-16 sm:space-y-24 lg:space-y-32 xl:space-y-48"
        role="main"
        aria-label="Professional work experience and portfolio"
      >
        <div className="sr-only">
          <h2>Professional Work Experience</h2>
          <p>Detailed overview of {memoizedExperiences.length} professional positions spanning {new Date().getFullYear() - 1999}+ years of design and leadership experience.</p>
        </div>

        {memoizedExperiences.map((experience, index) => (
          <WorkExperienceEntry
            key={experience.id}
            experience={experience}
            isFirst={index === 0}
          />
        ))}
      </div>
    </section>
  );
}