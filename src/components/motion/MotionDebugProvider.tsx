"use client";

import { createContext, useContext, useEffect, useMemo, useState, type ReactNode } from "react";
import { MotionDebugOverlay } from "@/components/motion/MotionDebugOverlay";
import { MotionRangeOverlay } from "@/components/motion/MotionRangeOverlay";
import type { MotionValue } from "motion/react";

type Range = { label: string; start: number; end: number };

interface MotionDebugState {
  enabled: boolean;
  toggle: () => void;
}

const MotionDebugContext = createContext<MotionDebugState | null>(null);

export function useMotionDebug() {
  const context = useContext(MotionDebugContext);
  if (!context) return null;
  return context;
}

export function MotionDebugProvider({ children }: { children: ReactNode }) {
  const [enabled, setEnabled] = useState(false);
  const toggle = () => setEnabled((prev) => !prev);

  const value = useMemo(
    () => ({
      enabled,
      toggle,
    }),
    [enabled]
  );

  useEffect(() => {
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key.toLowerCase() === "d") {
        setEnabled((prev) => !prev);
      }
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, []);

  return (
    <MotionDebugContext.Provider value={value}>
      {children}
    </MotionDebugContext.Provider>
  );
}

export function useMotionDebugToggle() {
  const context = useMotionDebug();
  return context?.toggle;
}

export function MotionDebugBar({
  items,
}: {
  items: { label: string; value: MotionValue<number> }[];
}) {
  const context = useMotionDebug();
  if (!context || !context.enabled || process.env.NODE_ENV === "production") {
    return null;
  }
  return (
    <div className="fixed bottom-4 right-4 z-[9999] pointer-events-none">
      <MotionDebugOverlay items={items} />
    </div>
  );
}

export function MotionRangePanel({
  title,
  progress,
  ranges,
}: {
  title?: string;
  progress: MotionValue<number>;
  ranges: Range[];
}) {
  const context = useMotionDebug();
  if (!context || !context.enabled || process.env.NODE_ENV === "production") {
    return null;
  }
  return (
    <div className="fixed bottom-4 left-4 z-[9999] pointer-events-none">
      <MotionRangeOverlay title={title} progress={progress} ranges={ranges} />
    </div>
  );
}
