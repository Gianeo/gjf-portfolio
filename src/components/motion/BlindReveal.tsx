"use client";

import { m, useReducedMotion, useScroll, useSpring, useTransform, type MotionValue } from "motion/react";
import { useMemo, useRef, type PropsWithChildren } from "react";
import { getBlindClipPath, getStaggerRange, springPresets, staggerPresets } from "@/system/motion-presets";
import { cn } from "@/lib/utils";

type SpringPreset = keyof typeof springPresets;
type StaggerPreset = keyof typeof staggerPresets;
type BlindStagger = StaggerPreset | "none";
type ScrollOffset = NonNullable<Parameters<typeof useScroll>[0]>["offset"];

interface BlindRevealProps extends PropsWithChildren {
  className?: string;
  index: number;
  total: number;
  progress?: MotionValue<number>;
  spring?: SpringPreset;
  stagger?: BlindStagger;
  offset?: ScrollOffset;
}

export function BlindReveal({
  children,
  className,
  index,
  total,
  progress,
  spring = "calm",
  stagger = "blinds",
  offset = ["start end", "start 40%"],
}: BlindRevealProps) {
  const reduceMotion = useReducedMotion();
  const ref = useRef<HTMLDivElement | null>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset,
  });
  const springConfig = useMemo(() => springPresets[spring], [spring]);
  const springProgress = useSpring(scrollYProgress, springConfig);
  const resolvedProgress = progress ?? springProgress;

  const [start, end] =
    stagger === "none"
      ? ([0, 1] as const)
      : getStaggerRange(index, total, staggerPresets[stagger]);
  const reveal = useTransform(
    resolvedProgress,
    [start, end],
    [0, 1],
    { clamp: true }
  );
  const clipPath = useTransform(reveal, (value) => getBlindClipPath(value));

  return (
    <m.div
      ref={ref}
      className={cn("relative", className)}
      style={
        reduceMotion
          ? undefined
          : { clipPath, willChange: "clip-path" }
      }
    >
      {children}
    </m.div>
  );
}
