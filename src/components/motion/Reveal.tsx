"use client";

import { m, useReducedMotion, useScroll, useSpring, useTransform, type MotionValue } from "motion/react";
import { useMemo, useRef, type PropsWithChildren } from "react";
import { revealPresets, springPresets } from "@/system/motion-presets";
import { cn } from "@/lib/utils";

type RevealPreset = keyof typeof revealPresets;
type SpringPreset = keyof typeof springPresets;
type ScrollOffset = NonNullable<Parameters<typeof useScroll>[0]>["offset"];

interface RevealProps extends PropsWithChildren {
  className?: string;
  preset?: RevealPreset;
  spring?: SpringPreset;
  start?: number;
  progress?: MotionValue<number>;
  smooth?: boolean;
  offset?: ScrollOffset;
}

export function Reveal({
  children,
  className,
  preset = "slow",
  spring = "calm",
  start = 0.2,
  progress,
  smooth = true,
  offset = ["start end", "end start"],
}: RevealProps) {
  const reduceMotion = useReducedMotion();
  const ref = useRef<HTMLDivElement | null>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset,
  });

  const targetProgress = progress ?? scrollYProgress;
  const { range, fromY } = revealPresets[preset];
  const springConfig = useMemo(() => springPresets[spring], [spring]);
  const end = Math.min(1, start + range);

  const opacity = useTransform(targetProgress, [start, end], [0, 1]);
  const y = useTransform(targetProgress, [start, end], [fromY, 0]);
  const springOpacity = useSpring(opacity, springConfig);
  const springY = useSpring(y, springConfig);
  const useSpringMotion = smooth && !progress;
  const smoothOpacity = useSpringMotion ? springOpacity : opacity;
  const smoothY = useSpringMotion ? springY : y;

  return (
    <m.div
      ref={ref}
      className={cn("relative", className)}
      style={
        reduceMotion
          ? undefined
          : {
              opacity: smoothOpacity,
              y: fromY === 0 ? undefined : smoothY,
              willChange: fromY === 0 ? "opacity" : "transform, opacity",
            }
      }
    >
      {children}
    </m.div>
  );
}
