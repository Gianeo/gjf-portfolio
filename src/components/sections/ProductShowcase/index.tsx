"use client";

import { useState, useCallback, useMemo, memo } from "react";
import Image from "next/image";
import { useInView } from "react-intersection-observer";
import {
  ArrowRight,
  Calendar,
  User,
  Tag,
  Link as ExternalLink,
} from "phosphor-react";

interface ProjectData {
  title: string;
  description: string;
  category: string;
  client: string;
  date: string;
  images: {
    id: number;
    src: string;
    alt: string;
    aspectRatio: "square" | "landscape" | "portrait";
  }[];
}

const sampleProject: ProjectData = {
  title: "JustScore",
  description:
    "JustScore is an AI-powered performance management tool that helps team leaders score real-time actions and behaviours—turning quick observations into clear, data-driven insights. It replaces gut-feel evaluations and delayed feedback with a simple, human-friendly interface that delivers consistent, actionable reviews in minutes.",
  category: "Product ideation, Brand development, Go to Market.",
  client: "JustScore",
  date: "2025",
  images: Array.from({ length: 8 }, (_, i) => ({
    id: i + 1,
    src: `/images/products/justscore/${i + 1}.webp`,
    alt: `Showcase image ${i + 1}`,
    aspectRatio: "square" as const,
  })),
};

interface ProjectShowcaseProps {
  project?: ProjectData;
  onBack?: () => void;
}

// Memoized optimized image component with lazy loading
const OptimizedImageContainer = memo(({ 
  image, 
  className = "",
  priority = false 
}: {
  image: { id: number; src: string; alt: string };
  className?: string;
  priority?: boolean;
}) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [hasError, setHasError] = useState(false);
  
  // Lazy loading with intersection observer
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
    skip: priority, // Skip intersection observer for priority images
  });

  // Memoized callbacks to prevent re-renders
  const handleLoad = useCallback(() => {
    setIsLoaded(true);
  }, []);

  const handleError = useCallback(() => {
    setHasError(true);
  }, []);

  const shouldLoad = priority || inView;

  // Always show container, even for errors
  return (
    <div ref={ref} className={`group relative overflow-hidden bg-neutral-100 rounded-lg ${className}`}>
      {/* Loading placeholder - show when loading or error */}
      {(!isLoaded || hasError) && (
        <div className="absolute inset-0 bg-gradient-to-br from-neutral-200 to-neutral-300 animate-pulse z-10" />
      )}

      {/* Hover effect - only render when loaded and no error */}
      {isLoaded && !hasError && (
        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-accent/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-20" />
      )}

      {/* Image container - only load when in view or priority, and no error */}
      {shouldLoad && !hasError && (
        <div className="absolute inset-0 z-30">
          <div className="relative w-full h-full overflow-hidden rounded-lg">
            <Image
              src={image.src}
              alt={image.alt}
              fill
              onLoad={handleLoad}
              onError={handleError}
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              className="object-cover transition-all duration-700 group-hover:scale-105"
              priority={priority}
              quality={85}
            />
          </div>
        </div>
      )}
    </div>
  );
});

OptimizedImageContainer.displayName = 'OptimizedImageContainer';

export default function ProductShowcase({
  project = sampleProject,
  onBack,
}: ProjectShowcaseProps) {
  
  // Memoize image organization to prevent recalculation
  const imageRows = useMemo(() => {
    // Just return all images as one array - let CSS grid handle the responsive layout
    return {
      allImages: project.images.slice(0, 6), // Take first 6 images
    };
  }, [project.images]);

  // Memoized header component
  const HeaderSection = memo(() => (
    <header className="sticky top-0 z-50 glass border-b border-border/50">
      <div className="flex justify-between px-6 lg:px-12 py-4">
        <div className="flex items-center justify-end gap-4 text-xs font-mono text-muted-foreground">
          <ArrowRight size={16} />
          Latest Ideation and Development
        </div>
      </div>
    </header>
  ));

  HeaderSection.displayName = 'HeaderSection';

  // Memoized project info section
  const ProjectInfo = memo(() => (
    <section className="relative grid grid-cols-12 py-8 lg:py-20 px-6 lg:px-1">
      <div className="col-span-12 lg:col-start-2 lg:col-span-5 xl:col-start-3 xl:col-span-4">
        <div className="flex flex-wrap gap-4 mb-6 text-xs text-muted-foreground">
          <div className="flex items-center gap-2 font-mono">
            <Tag size={16} />
            {project.category}
          </div>
          <div className="flex items-center gap-2 font-mono">
            <Calendar size={16} />
            {project.date}
          </div>
        </div>

        <h1 className="font-heading font-semibold text-4xl md:text-4xl lg:text-4xl heading-tight mb-6 bg-gradient-to-r from-foreground via-primary to-accent bg-clip-text text-transparent">
          {project.title}
        </h1>

        <p className="font-copy text-lg md:text-base text-muted-foreground leading-relaxed max-w-3xl prose-optimized">
          {project.description}
        </p>
      </div>
    </section>
  ));

  ProjectInfo.displayName = 'ProjectInfo';

  // Memoized image row component
  const ImageRow = memo(({ 
    images, 
    gridCols = "grid-cols-1 md:grid-cols-2 xl:grid-cols-3" 
  }: { 
    images: typeof project.images; 
    gridCols?: string;
  }) => {
    if (images.length === 0) return null;

    return (
      <div className={`grid gap-1 ${gridCols}`}>
        {images.map((image, index) => (
          <OptimizedImageContainer
            key={`image-${image.id}`}
            image={image}
            className="w-full aspect-[4/3]"
            priority={index === 0} // Only first image is priority
          />
        ))}
      </div>
    );
  });

  ImageRow.displayName = 'ImageRow';

  return (
    <div className="bg-background text-foreground">
      <HeaderSection />
      <ProjectInfo />

      {/* Optimized Image Gallery */}
      <section className="px-6 lg:px-1 pb-20">
        {/* Single responsive grid - let CSS handle the layout */}
        <div className="grid gap-1 grid-cols-1 md:grid-cols-2 xl:grid-cols-3">
          {imageRows.allImages.map((image, index) => (
            <OptimizedImageContainer
              key={`image-${image.id}`}
              image={image}
              className="w-full aspect-[4/3]"
              priority={index === 0} // Only first image is priority
            />
          ))}
        </div>
      </section>
    </div>
  );
}