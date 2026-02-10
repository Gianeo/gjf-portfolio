"use client";

import { memo, useMemo } from "react";
import {
  ArrowRightIcon,
  BuildingIcon,
} from "@phosphor-icons/react";

// Import the data structure
import { studioServicesData } from "./data";
import type { StudioServices } from "./data";
import { SectionHeader } from "@/components/primitives/SectionHeader";
import { SectionIntro } from "@/components/primitives/SectionIntro";
import { DotList } from "@/components/primitives/DotList";

interface ServicesProps {
  studioData?: StudioServices;
}

// Memoized industry list component
const IndustryList = memo(({ 
  industries,
  intro 
}: { 
  industries: StudioServices['industries'];
  intro: string;
}) => (
  <div className="space-y-6">
    <p className="font-copy text-muted-foreground leading-relaxed text-sm max-w-2xl">
      {intro}
    </p>
    <DotList
      tone="primary"
      items={industries.map((industry) => industry.name)}
      className="space-y-2"
    />
  </div>
));

IndustryList.displayName = 'IndustryList';

// Memoized capabilities grid
const CapabilitiesGrid = memo(({ 
  capabilities 
}: { 
  capabilities: StudioServices['capabilities'];
}) => {
  // Memoize category titles to prevent recalculation
  const categoryTitles = useMemo(() => ({
    strategy: "PM & Strategy",
    technology: "Technology", 
    design: "Design"
  }), []);

  return (
    <div className="space-y-12">
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 lg:gap-16">
        {/* PM & Strategy */}
        <div>
          <h3 className="font-heading font-semibold text-base mb-4">
            {categoryTitles.strategy}
          </h3>
          <DotList items={capabilities.strategy.map((c) => c.name)} />
        </div>

        {/* Technology */}
        <div>
          <h3 className="font-heading font-semibold text-base mb-4">
            {categoryTitles.technology}
          </h3>
          <DotList items={capabilities.technology.map((c) => c.name)} />
        </div>

        {/* Design */}
        <div>
          <h3 className="font-heading font-semibold text-base mb-4">
            {categoryTitles.design}
          </h3>
          <DotList items={capabilities.design.map((c) => c.name)} />
        </div>
      </div>
    </div>
  );
});

CapabilitiesGrid.displayName = 'CapabilitiesGrid';

export default function Services({
  studioData = studioServicesData,
}: ServicesProps) {

  // Memoize studio data to prevent unnecessary recalculations
  const memoizedStudioData = useMemo(() => studioData, [studioData]);

  return (
    <div className="bg-background text-foreground">
      <SectionHeader
        icon={<ArrowRightIcon size={16} />}
        label="Studio Services"
      />

      <section className="relative grid grid-cols-1 lg:grid-cols-12 pt-8 lg:pt-20 px-6 lg:px-1">
        <div className="lg:col-start-3 lg:col-span-8 space-y-12">
          <SectionIntro
            eyebrow={(
              <div className="flex gap-2 font-mono text-xs text-muted-foreground">
                <BuildingIcon size={16} />
                {memoizedStudioData.tagline}
              </div>
            )}
            title="How can we help"
            description={<p className="mb-8 lg:mb-16">{memoizedStudioData.philosophy}</p>}
          />
        </div>
      </section>

      {/* Capabilities Section */}
      <section className="relative grid grid-cols-1 lg:grid-cols-12 pb-16 px-6 lg:px-1">
        <div className="lg:col-start-3 lg:col-span-8 space-y-12">
          <CapabilitiesGrid capabilities={memoizedStudioData.capabilities} />

          {/* Industries Section */}
          <IndustryList 
            industries={memoizedStudioData.industries}
            intro={memoizedStudioData.industriesIntro}
          />
        </div>
      </section>
    </div>
  );
}
