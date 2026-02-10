import { useMemo } from "react";
import { createRevealSequence } from "@/system/motion-presets";

type SequenceItem = { label: string; start: number };

export function useRevealSequence(
  sequence: readonly SequenceItem[],
  range: number
) {
  const ranges = useMemo(() => createRevealSequence(sequence, range), [sequence, range]);
  const starts = useMemo(() => {
    const map = new Map<string, number>();
    sequence.forEach((item) => map.set(item.label, item.start));
    return map;
  }, [sequence]);

  const getStart = (label: string) => starts.get(label) ?? 0;

  return { ranges, getStart };
}
