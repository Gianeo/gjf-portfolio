"use client";

import { useState } from "react";
import { useMotionValueEvent, type MotionValue } from "motion/react";

interface MotionRangeOverlayProps {
  title?: string;
  progress: MotionValue<number>;
  ranges: { label: string; start: number; end: number }[];
}

export function MotionRangeOverlay({
  title = "Ranges",
  progress,
  ranges,
}: MotionRangeOverlayProps) {
  const [current, setCurrent] = useState(progress.get());

  useMotionValueEvent(progress, "change", (latest) => {
    setCurrent(latest);
  });

  const clamped = Math.max(0, Math.min(1, current));

  return (
    <div className="fixed bottom-4 left-4 z-[9999] w-56 rounded-lg bg-black/75 px-4 py-3 text-xs text-white shadow-lg">
      <div className="mb-2 font-semibold">{title}</div>
      <div className="mb-3 flex items-center gap-3">
        <div className="relative h-24 w-2 rounded-full bg-white/20">
          <div
            className="absolute left-0 w-2 rounded-full bg-white/80"
            style={{ height: `${clamped * 100}%`, bottom: 0 }}
          />
        </div>
        <div className="text-[11px] opacity-70">progress {clamped.toFixed(3)}</div>
      </div>
      <div className="space-y-1">
        {ranges.map((range) => (
          <div key={range.label} className="flex justify-between gap-3">
            <span className="opacity-70">{range.label}</span>
            <span>
              {range.start.toFixed(2)}–{range.end.toFixed(2)}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
