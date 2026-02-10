"use client";

import clsx from "clsx";
import { LazyImage } from "@/components/media/LazyImage";

export type GalleryImage = {
  id: string | number;
  src: string;
  alt: string;
  aspectRatio?: number | string;
};

type GalleryLayout = "simple" | "highlight";

interface GalleryGridProps {
  images: GalleryImage[];
  layout?: GalleryLayout;
  className?: string;
}

const highlightSlots = [
  // Matches the provided mosaic (alternating pairs of rows)
  { span: "md:col-span-4" },
  { span: "md:col-span-8 md:row-span-2" },
  { span: "md:col-span-4" },
  { span: "md:col-span-8 md:row-span-2" },
  { span: "md:col-span-4" },
  { span: "md:col-span-4" },
  { span: "md:col-span-6 md:row-span-2" },
  { span: "md:col-span-6 md:row-span-2" },
];

export function GalleryGrid({ images, layout = "simple", className }: GalleryGridProps) {
  const normalized = images.map((img, idx) => ({
    ...img,
    id: img.id ?? idx,
  }));

  if (layout === "highlight") {
    return (
      <div
        className={clsx(
          "grid w-full h-full gap-2 md:grid-cols-12",
          className
        )}
      >
        {normalized.map((image, idx) => {
          const slot = highlightSlots[idx % highlightSlots.length];
          const aspect = image.aspectRatio ?? "4 / 3";
          return (
            <div
              key={image.id}
              className={clsx("overflow-hidden", slot.span)}
              style={{ aspectRatio: typeof aspect === "number" ? `${aspect}` : aspect }}
            >
              <LazyImage
                image={{ src: image.src, alt: image.alt }}
                className="h-full w-full"
                containerClassName="h-full w-full"
                overlayClassName="from-primary/10 to-accent/10"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                quality={88}
              />
            </div>
          );
        })}
      </div>
    );
  }

  // Simple grid
  return (
    <div className={clsx("grid w-full h-full gap-2 grid-cols-2 md:grid-cols-3 lg:grid-cols-4", className)}>
      {normalized.map((image, idx) => (
        (() => {
          const aspect = image.aspectRatio ?? "4 / 3";
          return (
        <LazyImage
          key={image.id}
          image={{ src: image.src, alt: image.alt }}
          className="w-full h-full"
          containerClassName="h-full w-full"
          style={{ aspectRatio: typeof aspect === "number" ? `${aspect}` : aspect }}
          priority={idx === 0}
        />
          );
        })()
      ))}
    </div>
  );
}

export default GalleryGrid;
