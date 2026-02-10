"use client";

import { useReducedMotion, useSpring, useMotionValue } from "motion/react";
import { BlindReveal, FadeReveal } from "@/components/motion";
import { springPresets } from "@/system/motion-presets";
import { useScrollRange } from "@/hooks/useScrollRange";

export function Statement() {
  const reduceMotion = useReducedMotion();
  const totalSlots = 3;
  const { ref: sectionRef, progress: smoothProgress } = useScrollRange<HTMLElement>({
    offset: ["start end", "end end"],
    endOffsetRem: 10,
  });
  const staticProgress = useMotionValue(1);
  const springProgress = useSpring(smoothProgress, springPresets.calm);
  const revealProgress = reduceMotion ? staticProgress : springProgress;

  return (
    <section ref={sectionRef} className="relative text-foreground py-16 lg:pt-16 lg:pb-40">
      <div className="relative grid grid-cols-1 lg:grid-cols-12 px-6 lg:px-0">

        {/* Decoration 1 */}
        <BlindReveal
          className="hidden lg:block col-span-1 bg-decoration pointer-events-none"
          index={0}
          total={totalSlots}
          progress={revealProgress}
        >
          <div className="h-full w-full" aria-hidden="true" />
        </BlindReveal>

        {/* main content */}
        <div className="lg:col-start-3 lg:col-span-8 relative mx-auto w-full flex flex-col gap-4">
          <FadeReveal className="body-label text-muted">
            Experience
          </FadeReveal>
          <FadeReveal className="heading-display text-muted/75 max-w-4xl">
            Playing at the intersection of design and technology.
          </FadeReveal>
        </div>

        {/* Decoration 2 */}
        <BlindReveal
          className="hidden lg:block lg:col-start-12 xl:col-start-11 xl:col-span-2 bg-decoration pointer-events-none"
          index={2}
          total={totalSlots}
          progress={revealProgress}
        >
          <div className="h-full w-full" aria-hidden="true" />
        </BlindReveal>
      </div>
    </section>
  );
}

export default Statement;
