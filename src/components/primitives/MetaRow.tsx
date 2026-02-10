"use client";

import { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface MetaItem {
  icon?: ReactNode;
  label: string;
}

interface MetaRowProps {
  items: MetaItem[];
  className?: string;
}

export function MetaRow({ items, className }: MetaRowProps) {
  return (
    <div className={cn("flex flex-wrap gap-4 text-xs text-muted-foreground", className)}>
      {items.map((item, idx) => (
        <div key={`${item.label}-${idx}`} className="flex items-center gap-2 font-mono">
          {item.icon}
          {item.label}
        </div>
      ))}
    </div>
  );
}
