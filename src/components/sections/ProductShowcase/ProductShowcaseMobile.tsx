"use client";

import { LazyImage } from "@/components/media/LazyImage";
import { BlindReveal, FadeReveal } from "@/components/motion";
import type { GalleryItem, ProjectData } from "./data";
import { getHoverSrc } from "./data";

interface ProductShowcaseMobileProps {
  project: ProjectData;
  items: GalleryItem[];
}

export function ProductShowcaseMobile({
  project,
  items,
}: ProductShowcaseMobileProps) {
  return (
    <div className="space-y-16 sm:py-12">
      {items.map((item, index) => {
        const image = project.images[item.imageIndex];
        const hoverSrc = image?.src ? getHoverSrc(image.src) : "";
        return (
          <article key={item.title} className="space-y-6">
            <FadeReveal className="space-y-4 px-6">
              <h3 className="heading-base text-primary">{item.title}</h3>
              <FadeReveal>
                <p className="body-sm text-muted">{item.description}</p>
              </FadeReveal>
            </FadeReveal>

            <BlindReveal
              className="relative overflow-hidden bg-background"
              index={index}
              total={items.length}
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
                    showPlaceholder={false}
                    overlayClassName="opacity-0 group-hover:opacity-0"
                    disableHoverScale
                  />
                ) : (
                  <div className="w-full aspect-4/3" aria-hidden="true" />
                )}
              </div>
            </BlindReveal>

            <BlindReveal
              className="relative overflow-hidden bg-background"
              index={index + items.length}
              total={items.length * 2}
              stagger="none"
            >
              <div
                className="absolute z-50 bottom-0 h-px w-full bg-neutral-darker"
                aria-hidden="true"
              />
              <div className="relative z-10 pb-10">
                {hoverSrc ? (
                  <LazyImage
                    image={{ src: hoverSrc, alt: image?.alt ?? "" }}
                    className="w-full aspect-4/3"
                    containerClassName=""
                    showPlaceholder={false}
                    overlayClassName="opacity-0 group-hover:opacity-0"
                    disableHoverScale
                  />
                ) : (
                  <div className="w-full aspect-4/3" aria-hidden="true" />
                )}
              </div>
            </BlindReveal>
          </article>
        );
      })}
    </div>
  );
}
