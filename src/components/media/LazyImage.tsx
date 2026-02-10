"use client";

import { useCallback, useEffect, useState, CSSProperties } from "react";
import Image from "next/image";
import { useInView } from "react-intersection-observer";
import { cn } from "@/lib/utils";

interface LazyImageProps {
  image: { src: string; alt: string };
  className?: string;
  priority?: boolean;
  forceLoad?: boolean;
  showPlaceholder?: boolean;
  overlayClassName?: string;
  containerClassName?: string;
  sizes?: string;
  quality?: number;
  style?: CSSProperties;
  hoverSrc?: string;
  autoSwapOnMobile?: boolean;
  autoSwapDelayMs?: number;
  disableHoverScale?: boolean;
}

/**
 * Shared lazy-loaded image with placeholder + optional hover overlay.
 * Keeps the design identical across sections while reducing duplication.
 */
export function LazyImage({
  image,
  className,
  priority = false,
  forceLoad = false,
  showPlaceholder = true,
  overlayClassName = "from-primary/10 to-accent/10",
  containerClassName,
  sizes = "(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw",
  quality = 88,
  style,
  hoverSrc,
  autoSwapOnMobile = false,
  autoSwapDelayMs = 320,
  disableHoverScale = false,
}: LazyImageProps) {
  const [isLoaded, setIsLoaded] = useState(false);
  const [hasError, setHasError] = useState(false);
  const [showHover, setShowHover] = useState(false);

  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
    skip: priority,
  });

  const handleLoad = useCallback(() => setIsLoaded(true), []);
  const handleError = useCallback(() => setHasError(true), []);

  const shouldLoad = forceLoad || priority || inView;
  useEffect(() => {
    setShowHover(false);
  }, [image.src, hoverSrc]);

  useEffect(() => {
    if (!autoSwapOnMobile || !hoverSrc || !isLoaded || hasError) return;
    if (typeof window === "undefined") return;
    const media = window.matchMedia("(max-width: 767px)");
    if (!media.matches) return;
    const delay = Math.max(0, autoSwapDelayMs ?? 0);
    const timer = window.setTimeout(() => setShowHover(true), delay);
    return () => window.clearTimeout(timer);
  }, [autoSwapOnMobile, autoSwapDelayMs, hoverSrc, isLoaded, hasError]);

  return (
    <div
      ref={ref}
      className={cn(
        "group relative overflow-hidden",
        containerClassName,
        className
      )}
      style={style}
    >
      {showPlaceholder && (!isLoaded || hasError) && (
        <div className="absolute inset-0 z-10 animate-pulse bg-linear-to-br from-neutral-200 to-neutral-300" />
      )}

      {isLoaded && !hasError && (
        <div
          className={cn(
            "absolute inset-0 z-20 bg-linear-to-br opacity-0 transition-opacity duration-500 group-hover:opacity-100",
            overlayClassName
          )}
        />
      )}

      {shouldLoad && !hasError && (
        <div className="absolute inset-0 z-30">
          <div className="relative h-full w-full overflow-hidden">
            <Image
              src={image.src}
              alt={image.alt}
              fill
              onLoad={handleLoad}
              onError={handleError}
              sizes={sizes}
              className={`h-full w-full object-cover transition-all duration-700${disableHoverScale ? "" : " group-hover:scale-105"}${hoverSrc ? " group-hover:opacity-0" : ""}${showHover ? " opacity-0" : ""}`}
              priority={priority}
              quality={quality}
            />
            {hoverSrc && (
              <Image
                src={hoverSrc}
                alt={image.alt}
                fill
                sizes={sizes}
                className={`h-full w-full object-cover opacity-0 transition-opacity duration-500 group-hover:opacity-100${showHover ? " opacity-100" : ""}`}
                priority={priority}
                quality={quality}
              />
            )}
          </div>
        </div>
      )}
    </div>
  );
}
