"use client";

import { LazyImage } from "@/components/media/LazyImage";
import { BlindReveal, FadeReveal } from "@/components/motion";
import type { GalleryItem, ProjectData } from "./data";
import { getHoverSrc } from "./data";

interface ProductShowcaseDesktopProps {
  project: ProjectData;
  items: GalleryItem[];
}

export function ProductShowcaseDesktop({
  project,
  items,
}: ProductShowcaseDesktopProps) {
  const GalleryText = ({
    title,
    description,
    className = "",
  }: {
    title?: string;
    description?: string;
    className?: string;
  }) => (
    <FadeReveal className={`flex h-full flex-col p-6 pb-16 lg:px-16 lg:py-0 xl:px-24 xl:py-0 space-y-4 lg:space-y-0 ${className}`}>
      <div className="flex flex-1 items-center">
        <h3 className="heading-base text-primary">{title}</h3>
      </div>
      <FadeReveal>
        <p className="body-sm text-muted max-w-md mt-auto">{description}</p>
      </FadeReveal>
    </FadeReveal>
  );

  const GalleryImage = ({
    image,
    index,
    total,
    priority,
  }: {
    image?: ProjectData["images"][number];
    index: number;
    total: number;
    priority?: boolean;
  }) => (
    <BlindReveal
      className="relative overflow-hidden bg-background"
      index={index}
      total={total}
      stagger="none"
    >
      <div
        className="absolute z-50 bottom-0 h-px w-full bg-neutral-darker"
        aria-hidden="true"
      />
      <div className="relative z-10">
        {image?.src ? (
          <LazyImage
            image={{ src: image.src, alt: image.alt }}
            className="w-full aspect-4/3"
            containerClassName=""
            priority={priority}
            showPlaceholder={false}
            overlayClassName="opacity-0 group-hover:opacity-0"
            hoverSrc={getHoverSrc(image.src)}
            disableHoverScale
          />
        ) : (
          <div className="w-full aspect-4/3" aria-hidden="true" />
        )}
      </div>
    </BlindReveal>
  );

  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 space-y-32 lg:pb-24 bg-background">
      <div className="lg:col-start-1 xl:col-start-3 lg:col-span-12 xl:col-span-10">
        <div className="grid grid-cols-1 lg:grid-cols-12">
          <div className="col-span-1 lg:col-span-7">
            <GalleryImage
              image={project.images[items[0]?.imageIndex ?? 0]}
              index={0}
              total={items.length}
              priority
            />
          </div>
          <div className="col-span-1 lg:col-start-8 lg:col-span-5 self-stretch">
            <GalleryText
              title={items[0]?.title}
              description={items[0]?.description}
            />
          </div>
        </div>
      </div>

      <div className="lg:col-start-1 xl:col-start-3 lg:col-span-12 xl:col-span-10">
        <div className="grid grid-cols-1 lg:grid-cols-12">
          <div className="col-span-1 lg:col-span-5 self-stretch">
            <GalleryText
              title={items[1]?.title}
              description={items[1]?.description}
              className="lg:text-right lg:items-end"
            />
          </div>
          <div className="col-span-1 lg:col-start-6 lg:col-span-7">
            <GalleryImage
              image={project.images[items[1]?.imageIndex ?? 0]}
              index={1}
              total={items.length}
            />
          </div>
        </div>
      </div>

      <div className="lg:col-start-1 xl:col-start-3 lg:col-span-12 xl:col-span-10">
        <div className="grid grid-cols-1 lg:grid-cols-12">
          <div className="col-span-1 lg:col-span-7">
            <GalleryImage
              image={project.images[items[2]?.imageIndex ?? 0]}
              index={2}
              total={items.length}
            />
          </div>
          <div className="col-span-1 lg:col-start-8 lg:col-span-5 self-stretch">
            <GalleryText
              title={items[2]?.title}
              description={items[2]?.description}
            />
          </div>
        </div>
      </div>

      <div className="lg:col-start-1 xl:col-start-3 lg:col-span-12 xl:col-span-10">
        <div className="grid grid-cols-1 lg:grid-cols-12">
          <div className="col-span-1 lg:col-span-5 self-stretch">
            <GalleryText
              title={items[3]?.title}
              description={items[3]?.description}
              className="lg:text-right lg:items-end"
            />
          </div>
          <div className="col-span-1 lg:col-start-6 lg:col-span-7">
            <GalleryImage
              image={project.images[items[3]?.imageIndex ?? 0]}
              index={3}
              total={items.length}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
