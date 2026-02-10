"use client";

import { useEffect, useState } from "react";
import { useMotionValueEvent, type MotionValue } from "motion/react";

interface MotionDebugOverlayProps {
  items: { label: string; value: MotionValue<number> }[];
}

function MotionDebugItem({ label, value }: { label: string; value: MotionValue<number> }) {
  const [current, setCurrent] = useState(value.get());

  useMotionValueEvent(value, "change", (latest) => {
    setCurrent(latest);
  });

  return (
    <div className="flex justify-between gap-4">
      <span className="opacity-70">{label}</span>
      <span>{current.toFixed(3)}</span>
    </div>
  );
}

export function MotionDebugOverlay({ items }: MotionDebugOverlayProps) {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key.toLowerCase() === "d") {
        setVisible((prev) => !prev);
      }
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, []);

  if (!visible) return null;

  return (
    <div className="fixed bottom-4 right-4 z-[9999] rounded-lg bg-black/75 px-4 py-3 text-xs text-white shadow-lg">
      <div className="mb-2 font-semibold">Motion Debug</div>
      {items.map((item) => (
        <MotionDebugItem key={item.label} label={item.label} value={item.value} />
      ))}
      <div className="mt-2 text-[10px] opacity-60">Press “d” to toggle</div>
    </div>
  );
}
