"use client";

import { memo, useMemo } from "react";
import {
  ArrowRightIcon,
  ChartBarIcon,
  PaletteIcon,
  CodeIcon,
  BuildingIcon,
  BriefcaseIcon,
  StarIcon,
} from "@phosphor-icons/react";

// Import the data structure
import { studioServicesData } from "./data";
import type { StudioServices, Capability } from "./data";

interface ServicesProps {
  studioData?: StudioServices;
}

// Memoized capability list component
const CapabilityList = memo(({ 
  capabilities,
  title 
}: { 
  capabilities: Capability[];
  title: string;
}) => (
  <div>
    <h3 className="font-heading font-semibold text-base mb-4">
      {title}
    </h3>
    <ul className="space-y-1">
      {capabilities.map((capability, index) => (
        <li key={`${capability.category}-${index}`} className="flex items-start gap-2 text-sm">
          <div className="size-1 rounded-full bg-primary mt-2 flex-shrink-0" />
          <span className="font-copy text-muted-foreground hover:text-primary transition-colors cursor-pointer">
            {capability.name}
          </span>
        </li>
      ))}
    </ul>
  </div>
));

CapabilityList.displayName = 'CapabilityList';

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
    <ul className="space-y-2">
      {industries.map((industry, index) => (
        <li key={`industry-${index}`} className="flex items-start gap-2 text-sm">
          <div className="w-1 h-1 rounded-full bg-primary mt-2 flex-shrink-0" />
          <span className="font-copy font-medium">{industry.name}</span>
        </li>
      ))}
    </ul>
  </div>
));

IndustryList.displayName = 'IndustryList';

// Memoized header section - consistent with other components
const HeaderSection = memo(({ tagline }: { tagline: string }) => (
  <header className="sticky top-0 z-50 glass border-b border-border/50">
    <div className="flex justify-between px-6 lg:px-12 py-4">
      <div className="flex items-center gap-4 text-xs font-mono text-muted-foreground">
        <ArrowRightIcon size={16} />
        Studio Services
      </div>
    </div>
  </header>
));

HeaderSection.displayName = 'HeaderSection';

// Memoized hero section
const HeroSection = memo(({ 
  tagline,
  philosophy 
}: { 
  tagline: string;
  philosophy: string;
}) => (
  <section className="relative grid grid-cols-1 lg:grid-cols-12 pt-8 lg:pt-20 px-6 lg:px-1">
    <div className="lg:col-start-3 lg:col-span-8 space-y-12">
      <div>
        <div className="flex gap-4 mb-8 text-xs text-muted-foreground">
          <div className="flex gap-2 font-mono">
            <BuildingIcon size={16} />
            {tagline}
          </div>
        </div>

        <h1 className="font-heading font-semibold text-4xl md:text-5xl lg:text-4xl heading-tight mb-8">
          How can we help
        </h1>

        <p className="font-copy text-lg md:text-lg text-muted-foreground leading-relaxed mb-8 lg:mb-16 max-w-2xl prose-optimized">
          {philosophy}
        </p>
      </div>
    </div>
  </section>
));

HeroSection.displayName = 'HeroSection';

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
        <CapabilityList 
          capabilities={capabilities.strategy}
          title={categoryTitles.strategy}
        />

        {/* Technology */}
        <CapabilityList 
          capabilities={capabilities.technology}
          title={categoryTitles.technology}
        />

        {/* Design */}
        <CapabilityList 
          capabilities={capabilities.design}
          title={categoryTitles.design}
        />
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
      <HeaderSection tagline={memoizedStudioData.tagline} />

      <HeroSection 
        tagline={memoizedStudioData.tagline}
        philosophy={memoizedStudioData.philosophy}
      />

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