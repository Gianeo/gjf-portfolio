import { useEffect, useMemo, useRef, useState } from "react";
import { useScroll, useSpring, useTransform } from "motion/react";
import { springPresets } from "@/system/motion-presets";

type SpringPreset = keyof typeof springPresets;
type ScrollOffset = NonNullable<Parameters<typeof useScroll>[0]>["offset"];

interface ScrollRangeOptions {
  offset?: ScrollOffset;
  spring?: SpringPreset;
  endOffsetPx?: number;
  endOffsetRem?: number;
}

export function useScrollRange<T extends HTMLElement>(
  options: ScrollRangeOptions = {}
) {
  const ref = useRef<T | null>(null);
  const {
    offset = ["start end", "end end"],
    spring = "calm",
    endOffsetPx,
    endOffsetRem = 10,
  } = options;
  const [viewportHeight, setViewportHeight] = useState(1);
  const [rootRem, setRootRem] = useState(16);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset,
  });

  useEffect(() => {
    const update = () => setViewportHeight(window.innerHeight || 1);
    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, []);

  useEffect(() => {
    if (typeof window === "undefined") return;
    const rem = parseFloat(getComputedStyle(document.documentElement).fontSize || "16");
    setRootRem(Number.isFinite(rem) ? rem : 16);
  }, []);

  const resolvedOffsetPx = useMemo(
    () => endOffsetPx ?? (endOffsetRem ? endOffsetRem * rootRem : 0),
    [endOffsetPx, endOffsetRem, rootRem]
  );
  const endShift = useMemo(
    () => Math.min(0.95, resolvedOffsetPx / viewportHeight),
    [resolvedOffsetPx, viewportHeight]
  );

  const springConfig = useMemo(() => springPresets[spring], [spring]);
  const adjustedRawProgress = useTransform(
    scrollYProgress,
    [0, Math.max(0.01, 1 - endShift)],
    [0, 1],
    { clamp: true }
  );
  const rawProgress = endShift > 0 ? adjustedRawProgress : scrollYProgress;
  const progress = useSpring(rawProgress, springConfig);

  return { ref, progress, rawProgress };
}
