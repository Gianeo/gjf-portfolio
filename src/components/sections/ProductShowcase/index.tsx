"use client";

import { ArrowRightIcon } from "@phosphor-icons/react";
import { SectionHeader } from "@/components/primitives/SectionHeader";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ExternalLinkIcon } from "lucide-react";
import { ProductShowcaseDesktop } from "./ProductShowcaseDesktop";
import { ProductShowcaseMobile } from "./ProductShowcaseMobile";
import { galleryItems, sampleProject, type ProjectData } from "./data";
import { FadeReveal } from "@/components/motion";

interface ProjectShowcaseProps {
  project?: ProjectData;
}

export default function ProductShowcase({
  project = sampleProject,
}: ProjectShowcaseProps) {
  return (
    <section className="text-foreground bg-background pb-8 lg:pb-32">
      <SectionHeader
        icon={<ArrowRightIcon size={16} />}
        label="Latest"
      />
      <div className="relative grid grid-cols-1 lg:grid-cols-12 lg:py-8 xl:py-20 px-6 lg:px-0">
        <div className="lg:col-start-2 lg:col-span-8 xl:col-start-3 xl:col-span-5 space-y-6">
          <div className="space-y-2">
            <FadeReveal>
              <p className="body-label text-muted mb-8">
                {project.category}
              </p>
            </FadeReveal>
            <FadeReveal>
              <h1 className="heading-display text-primary">
                {project.title}.
              </h1>
            </FadeReveal>
            <FadeReveal>
              <h2 className="heading-display text-muted/75">
                Where an idea found its form and voice.
              </h2>
            </FadeReveal>
          </div>
        </div>
        <div className="lg:col-start-2 xl:col-start-3 py-8 lg:py-24">
            <Button asChild size="lg" variant="accent" className="btn">
              <Link
                href="https://justscore.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Visit Justscore website (opens in new tab)"
              >
                <ExternalLinkIcon size={16} aria-hidden="true" />
                justscore.com
              </Link>
            </Button>
        </div>
        <div className="lg:col-start-6 xl:col-start-6 lg:col-span-4 pb-8 lg:pt-24 lg:pb-16">
          <FadeReveal>
            <div className="font-copy text-lg lg:text-lg text-muted-foreground leading-relaxed prose-optimized">
              {project.description}
            </div>
          </FadeReveal>
        </div>
      </div>

      {/* Gallery */}
      <div className="lg:hidden">
        <ProductShowcaseMobile project={project} items={galleryItems} />
      </div>
      <div className="hidden lg:block">
        <ProductShowcaseDesktop project={project} items={galleryItems} />
      </div>
    </section>
  );
}
