"use client";

import { memo, useMemo } from "react";
import Link from "next/link";
import { ExternalLinkIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { LazyImage } from "@/components/media/LazyImage";

const highlightSlots = [
  { span: "md:col-span-4" },
  { span: "md:col-span-8 md:row-span-2" },
  { span: "md:col-span-4" },
  { span: "md:col-span-8 md:row-span-2" },
  { span: "md:col-span-4" },
  { span: "md:col-span-4" },
  { span: "md:col-span-6 md:row-span-2" },
  { span: "md:col-span-6 md:row-span-2" },
];

const TextContainer = memo(({ content, source, className = "" }) => {
  const lines = content.split('\n').filter(line => line.trim());
  const sourceParts = source?.split(" - ").map((part) => part.trim()).filter(Boolean) || [];
  const sourceName = sourceParts[0];
  const sourceTitle = sourceParts.slice(1).join(" - ");

  return (
    <div
      className={` w-full bg-neutral-lighter dark:bg-neutral-darker flex items-start body-base text-muted aspect-4/3 p-4 ${className}`}
      role="text"
      aria-label={`Key metrics: ${lines.join(', ')}`}
    >
      <div className="max-w-md md:max-w-sm xl:max-w-md p-4 lg:p-6 xl:p-8">
        <div className="space-y-1">
          {lines.map((line, index) => (
            <p key={index} className="body-base-responsive">
              {line}
            </p>
          ))}
        </div>
        {source && (
          <div className="body-sm mt-6 md:mt-4 xl:mt-6">
            {sourceName && <span className="font-semibold text-primary">{sourceName}</span>}
            {sourceTitle && (
              <>
                {" "}
                <span className="italic text-muted">{sourceTitle}</span>
              </>
            )}
            {!sourceName && <span className="italic">{source}</span>}
          </div>
        )}
      </div>
    </div>
  );
});

TextContainer.displayName = "TextContainer";

const ExternalLinkButton = memo(({ url, company }) => (
  <Button asChild size="lg" variant="accent" className="btn">
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

ExternalLinkButton.displayName = "ExternalLinkButton";

const GridGallery = memo(({ gridItems, experienceId, companyName }) => {
  if (gridItems.length === 0) return null;

  const orderedItems = [...gridItems].sort((a, b) => (a.id ?? 0) - (b.id ?? 0));

  return (
    <div role="region" aria-label={`${companyName} project gallery`} className="space-y-2">
      <div className="sr-only">
        <h4>Project Gallery for {companyName}</h4>
        <p>Visual examples and key metrics from work completed at {companyName}</p>
      </div>
      <div className="grid w-full h-full gap-1 md:grid-cols-12">
        {orderedItems.map((item, idx) => {
          const slot = highlightSlots[idx % highlightSlots.length];
          if (item.type === "image" && item.src) {
            return (
              <div
                key={`${experienceId}-${item.id ?? idx}`}
                className={`overflow-hidden ${slot.span}`}
                style={{ aspectRatio: "4 / 3" }}
              >
                <LazyImage
                  image={{ src: item.src, alt: item.alt || `Work sample showcasing ${experienceId}` }}
                  className="h-full w-full"
                  containerClassName="h-full w-full"
                  overlayClassName="from-primary/10 to-accent/10"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  quality={88}
                />
              </div>
            );
          }

          return (
            <div key={`${experienceId}-${item.id ?? idx}`} className={slot.span}>
              <TextContainer
                content={item.content || ""}
                source={item.source}
                className="w-full h-full"
              />
            </div>
          );
        })}
      </div>
    </div>
  );
});

GridGallery.displayName = "GridGallery";

export const WorkExperienceEntry = memo(({ experience, index, total }) => {
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
    ).filter((skill, skillIndex, self) => self.indexOf(skill) === skillIndex)
  }), [experience]);

  const CompanyInfo = memo(() => (
    <aside className="col-start-2 col-span-10 lg:col-span-2 lg:px-8">
      <div className="lg:sticky top-24">
        <time
          className="body-sm mb-2 block"
          dateTime={`${experience.startDate}/${experience.endDate}`}
          aria-label={`Employment period: ${experience.duration}`}
        >
          {experience.duration}
        </time>
        <h3 className="heading-sm text-primary leading-none mb-1">
          {experience.company}
        </h3>
        <p className="body-sm font-mono sr-only">
          Role: {experience.role}
        </p>
      </div>
    </aside>
  ));

  CompanyInfo.displayName = "CompanyInfo";

  const ContentSection = memo(() => (
    <div className="col-span-12 lg:col-span-4 lg:-mt-25 relative">
      <div className="hidden lg:block heading-base leading-4 text-muted/75 pb-8">
        {index + 1}/{total}
      </div>
      <div className="hidden lg:block size-10 bg-decoration absolute top-3 right-0" />
      <article className="space-y-4 pt-8 lg:pt-0">
        <div className="grid grid-cols-12 lg:gap-16">
          <header className="row-start-1 col-start-2 lg:col-start-1 col-span-10 lg:col-span-6 space-y-8 pb-8 lg:pb-0">
            <h3
              className="heading-base text-primary max-w-2xl lg:-mt-1.5"
              id={`work-${experience.id}`}
            >
              {experience.title}
            </h3>
            {experience.buttonUrl && (
              <div className="lg:pt-4">
                <ExternalLinkButton
                  url={experience.buttonUrl}
                  company={experience.company}
                />
              </div>
            )}
          </header>
          <div
            className="row-start-2 lg:row-start-1 col-start-2 lg:col-start-7 col-span-10 lg:col-span-5"
            aria-describedby={`work-${experience.id}`}
          >
            {experience.description.split('\n').map((paragraph, paragraphIndex) => (
              <p key={paragraphIndex} className={`body-base ${paragraphIndex > 0 ? 'mt-4' : ''}`}>
                {paragraph}
              </p>
            ))}
          </div>
        </div>
        <section aria-labelledby={`responsibilities-${experience.id}`} className="grid grid-cols-10">
          <div className="hidden row-start-2 col-start-1 col-span-12">
            <ul
              className="space-y-1.5 grid grid-cols-12 pt-16 gap-6 md:gap-16"
              role="list"
              aria-label={`Key achievements and responsibilities at ${experience.company}`}
            >
              {experience.keyResponsibilities.map((responsibility, responsibilityIndex) => (
                <li
                  key={responsibilityIndex}
                  className="col-span-2 flex items-start gap-3 body-sm text-muted px-4 relative"
                  role="listitem"
                >
                  <span>{responsibility}</span>
                  <div className="absolute top-1 -left-4 size-4 bg-neutral-darker rounded-full"></div>
                </li>
              ))}
            </ul>
          </div>
        </section>
      </article>
    </div>
  ));

  ContentSection.displayName = "ContentSection";

  return (
    <article
      className="grid grid-cols-12 pb-32 xl:pb-24"
      aria-labelledby={`work-${experience.id}`}
    >
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(workExperienceStructuredData),
        }}
      />

      <CompanyInfo />

      <div className="lg:col-start-3 col-span-12 lg:col-span-10 space-y-10 md:space-y-20">
        <ContentSection />

        {experience.gridItems && experience.gridItems.length > 0 && (
          <GridGallery
            gridItems={experience.gridItems}
            experienceId={experience.id}
            companyName={experience.company}
          />
        )}
      </div>
    </article>
  );
});

WorkExperienceEntry.displayName = "WorkExperienceEntry";
