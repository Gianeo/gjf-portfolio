"use client";

import { cn } from "@/lib/utils";

interface DotListProps {
  items: string[];
  className?: string;
  tone?: "primary" | "neutral";
}

export function DotList({ items, className, tone = "primary" }: DotListProps) {
  const dotClass = tone === "primary" ? "bg-primary" : "bg-muted-foreground";

  return (
    <ul className={cn("space-y-2", className)}>
      {items.map((item, index) => (
        <li key={`${item}-${index}`} className="flex items-start gap-2 text-sm">
          <div className={cn("w-1 h-1 rounded-full mt-2 shrink-0", dotClass)} />
          <span className="font-copy text-muted-foreground hover:text-foreground transition-colors">
            {item}
          </span>
        </li>
      ))}
    </ul>
  );
}
