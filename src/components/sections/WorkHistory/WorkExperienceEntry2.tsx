"use client";

import { memo, useMemo } from "react";
import Image from "next/image";
import { Quote } from "lucide-react";
import Link from "next/link";
import { ExternalLinkIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { LazyImage } from "@/components/media/LazyImage";
import { GridItem, WorkExperience } from "./data";
import { BlindReveal, FadeReveal } from "@/components/motion";

const highlightSlots = [
  { span: "lg:col-span-4" },
  { span: "lg:col-span-8 lg:row-span-2" },
  { span: "lg:col-span-4" },
  { span: "lg:col-span-8 lg:row-span-2" },
  { span: "lg:col-span-4" },
  { span: "lg:col-span-4" },
  { span: "lg:col-span-6 lg:row-span-2" },
  { span: "lg:col-span-6 lg:row-span-2" },
];

const ExternalLinkButton = memo(({
  url,
  company
}: {
  url: string;
  company: string;
}) => (
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

const GridGallery = memo(({ gridItems, experienceId, companyName }: {
  gridItems: GridItem[];
  experienceId: string;
  companyName: string;
}) => {
  if (gridItems.length === 0) return null;

  const orderedItems = [...gridItems].sort((a, b) => (a.id ?? 0) - (b.id ?? 0));
  const totalSlots = orderedItems.length;
  const resolvedSlots = (() => {
    if (totalSlots <= 1) {
      return [{ span: "lg:col-span-12" }];
    }
    if (totalSlots === 2) {
      return [{ span: "lg:col-span-6" }, { span: "lg:col-span-6" }];
    }
    if (totalSlots <= 5) {
      return [
        highlightSlots[0],
        highlightSlots[1],
        highlightSlots[2],
        { span: "lg:col-span-6" },
        { span: "lg:col-span-6" },
      ].slice(0, totalSlots);
    }
    return highlightSlots;
  })();

  return (
    <div role="region" aria-label={`${companyName} project gallery`} className="space-y-2">
      <div className="sr-only">
        <h4>Project Gallery for {companyName}</h4>
        <p>Visual examples and key metrics from work completed at {companyName}</p>
      </div>
      <div className="grid lg:grid-cols-12 w-full h-full gap-12 lg:gap-24">
        {orderedItems.map((item, idx) => {
          const slot = resolvedSlots[idx % resolvedSlots.length];
          const captionText = item.type === "image" ? (item.captionText || "") : "";
          const isQuote = item.type === "quote";
          return (
            <div key={`${experienceId}-${item.id ?? idx}`} className={slot.span}>
              <div className="flex flex-col gap-4 pb-0">
                <BlindReveal
                  className={`overflow-hidden rounded-none ${isQuote ? "" : " aspect-4/3"}`}
                  index={idx}
                  total={totalSlots}
                  stagger="none"
                >
                  {item.type === "image" && item.src ? (
                    <LazyImage
                      image={{ src: item.src, alt: item.alt || `Work sample showcasing ${experienceId}` }}
                      className="h-full w-full"
                      containerClassName="h-full w-full"
                      overlayClassName="opacity-0 group-hover:opacity-0"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      quality={88}
                    />
                  ) : item.type === "quote" ? (
                    <div className="w-full bg-background flex flex-col gap-6 px-6 lg:px-0 lg:pr-8">
                      <div>
                        {item.avatar ? (
                          <Image
                            src={item.avatar}
                            alt={item.name ? `${item.name} portrait` : "Quote author portrait"}
                            width={40}
                            height={40}
                            className="h-12 w-12 rounded-full object-cover"
                          />
                        ) : (
                          <div className="size-12 flex items-center justify-center" aria-hidden="true">
                            <Quote className="size-12 text-accent stroke-1" />
                          </div>
                        )}
                      </div>
                      <FadeReveal>
                        <p className="body-base text-muted max-w-sm whitespace-pre-line">
                          {item.content}
                        </p>
                      </FadeReveal>
                      <FadeReveal>
                        <div className="flex items-center gap-3">
                          <div>
                            <p className="body-sm text-primary font-medium">
                              {item.name || "Anonymous"}
                            </p>
                            {item.title && (
                              <p className="body-sm text-muted">{item.title}</p>
                            )}
                          </div>
                        </div>
                      </FadeReveal>
                    </div>
                  ) : (
                    <div className="h-full w-full bg-neutral-lighter dark:bg-neutral-darker" aria-hidden="true" />
                  )}
                </BlindReveal>
                {captionText && (
                  <FadeReveal>
                    <p className="body-sm text-muted max-w-sm px-6 py-4 xl:p-0 xl:pr-8">
                      {captionText}
                    </p>
                  </FadeReveal>
                )}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
});

GridGallery.displayName = "GridGallery";

export const WorkExperienceEntry2 = memo(({
  experience,
  index,
  total,
}: {
  experience: WorkExperience;
  index: number;
  total: number;
}) => {
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
    <aside className="lg:col-start-2 lg:col-span-10 xl:col-span-2 px-6 lg:px-0 xl:px-6">
      <div className="xl:sticky top-24">
        <FadeReveal>
          <time
            className="body-sm mb-2 block"
            dateTime={`${experience.startDate}/${experience.endDate}`}
            aria-label={`Employment period: ${experience.duration}`}
          >
            {experience.duration}
          </time>
        </FadeReveal>
        <FadeReveal>
          <h3 className="heading-sm text-primary leading-none mb-1">
            {experience.company}
          </h3>
        </FadeReveal>
        <p className="body-sm font-mono sr-only">
          Role: {experience.role}
        </p>
      </div>
    </aside>
  ));

  CompanyInfo.displayName = "CompanyInfo";

  const ContentSection = memo(() => (
    <div className="lg:col-span-12 xl:col-span-4 xl:-mt-25 relative">
      <div className="hidden xl:block heading-base leading-4 text-muted/75 pb-8">
        {index + 1}/{total}
      </div>
      <div className="hidden xl:block size-10 bg-decoration absolute top-3 right-0" />
      <article className="space-y-4 pt-8 xl:pt-0">
        <div className="grid grid-cols-1 lg:grid-cols-12 xl:gap-16 px-6 lg:px-0">
          <header className="lg:row-start-1 lg:col-start-2 lg:col-span-10 xl:col-start-1 xl:col-span-7 space-y-8 pb-8 xl:pb-0">
            <FadeReveal>
              <h3
                className="heading-display text-primary max-w-4xl xl:-mt-1.5"
                id={`work-${experience.id}`}
              >
                {experience.title}
              </h3>
            </FadeReveal>
            {experience.buttonUrl && (
              <FadeReveal className="xl:pt-4">
                <ExternalLinkButton
                  url={experience.buttonUrl}
                  company={experience.company}
                />
              </FadeReveal>
            )}
          </header>
          <div
            className="lg:row-start-2 xl:row-start-1 lg:col-start-2 lg:col-span-10 xl:col-start-8 xl:col-span-4"
            aria-describedby={`work-${experience.id}`}
          >
            {experience.description.split('\n').map((paragraph, paragraphIndex) => (
              <FadeReveal
                key={paragraphIndex}
                className={`body-base ${paragraphIndex > 0 ? 'mt-4' : ''}`}
              >
                {paragraph}
              </FadeReveal>
            ))}
          </div>
        </div>
        {/* <section aria-labelledby={`responsibilities-${experience.id}`} className="grid grid-cols-10">
          <div className="hidden row-start-2 col-start-1 col-span-12">
            <ul
              className="space-y-1.5 grid grid-cols-12 pt-16 gap-6 lg:gap-16"
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
        </section> */}
      </article>
    </div>
  ));

  ContentSection.displayName = "ContentSection";

  return (
    <article
      className="grid grid-cols-1 lg:grid-cols-12 pb-32 xl:pb-24"
      aria-labelledby={`work-${experience.id}`}
    >
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(workExperienceStructuredData),
        }}
      />

      <CompanyInfo />

      <div className="xl:col-start-3 lg:col-span-12 xl:col-span-10 space-y-10 lg:space-y-20">
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

WorkExperienceEntry2.displayName = "WorkExperienceEntry2";
