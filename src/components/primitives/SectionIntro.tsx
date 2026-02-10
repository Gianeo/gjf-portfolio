"use client";

import { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface SectionIntroProps {
  eyebrow?: ReactNode;
  title: string;
  description?: ReactNode;
  className?: string;
  titleClassName?: string;
}

export function SectionIntro({
  eyebrow,
  title,
  description,
  className,
  titleClassName,
}: SectionIntroProps) {
  return (
    <section className={cn("space-y-4", className)}>
      {eyebrow && <div className="flex gap-4 text-xs text-muted-foreground font-mono">{eyebrow}</div>}
      <h1
        className={cn(
          "font-heading font-semibold text-4xl md:text-5xl lg:text-4xl heading-tight",
          titleClassName
        )}
      >
        {title}
      </h1>
      {description && (
        <div className="font-copy text-lg md:text-lg text-muted-foreground leading-relaxed prose-optimized">
          {description}
        </div>
      )}
    </section>
  );
}
