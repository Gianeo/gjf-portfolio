"use client";

import { m, useReducedMotion, useScroll, useSpring, useTransform } from "motion/react";
import { useMemo, useRef, type PropsWithChildren } from "react";
import { springPresets } from "@/system/motion-presets";
import { cn } from "@/lib/utils";

type SpringPreset = keyof typeof springPresets;
type ScrollOffset = NonNullable<Parameters<typeof useScroll>[0]>["offset"];

interface FadeRevealProps extends PropsWithChildren {
  className?: string;
  spring?: SpringPreset;
  offset?: ScrollOffset;
}

export function FadeReveal({
  children,
  className,
  spring = "soft",
  offset = ["start 90%", "start 60%"],
}: FadeRevealProps) {
  const reduceMotion = useReducedMotion();
  const ref = useRef<HTMLDivElement | null>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset,
  });
  const opacity = useTransform(scrollYProgress, [0, 1], [0, 1], { clamp: true });
  const springConfig = useMemo(() => springPresets[spring], [spring]);
  const smoothOpacity = useSpring(opacity, springConfig);

  return (
    <m.div
      ref={ref}
      className={cn("relative", className)}
      style={reduceMotion ? undefined : { opacity: smoothOpacity, willChange: "opacity" }}
    >
      {children}
    </m.div>
  );
}
