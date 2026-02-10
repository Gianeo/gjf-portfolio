"use client";

import { useMemo } from "react";
import { ArrowRightIcon } from "@phosphor-icons/react";

import { workHistoryData, WorkExperience } from "./data";
import { SectionHeader } from "@/components/primitives/SectionHeader";
import { WorkExperienceEntry2 } from "./WorkExperienceEntry2";

interface WorkHistoryProps {
  experiences?: WorkExperience[];
}

export default function WorkHistory({
  experiences = workHistoryData,
}: WorkHistoryProps) {
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

  const memoizedExperiences = useMemo(() => experiences, [experiences]);

  return (
    <section className="min-h-screen bg-background">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(workHistoryStructuredData),
        }}
      />

      <SectionHeader icon={<ArrowRightIcon size={16} aria-hidden="true" />} label="History" className="mb-8 md:mb-16" />

      <div
        className="py-6 sm:py-24 space-y-16 sm:space-y-24 md:space-y-32 xl:space-y-64"
        role="main"
        aria-label="Professional work experience and portfolio"
      >
        <div className="sr-only">
          <h2>Professional Work Experience</h2>
          <p>Detailed overview of {memoizedExperiences.length} professional positions spanning {new Date().getFullYear() - 1999}+ years of design and leadership experience.</p>
        </div>

        {memoizedExperiences.map((experience, index) => (
          <WorkExperienceEntry2
            key={experience.id}
            experience={experience}
            index={index}
            total={memoizedExperiences.length}
          />
        ))}
      </div>
    </section>
  );
}
