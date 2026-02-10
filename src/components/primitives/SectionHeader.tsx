"use client";

import { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface SectionHeaderProps {
  icon?: ReactNode;
  label: string;
  className?: string;
  sticky?: boolean;
}

export function SectionHeader({ icon, label, className, sticky = true }: SectionHeaderProps) {
  return (
    <header
      className={cn(
        "z-50 mb-8",
        sticky && "sticky top-0",
        !sticky && "relative",
        className
      )}
    >
      <div className="border-t border-muted/50">
        <div className="py-4 flex items-center gap-3 body-label text-accent px-6">
          {icon}
          {label}
        </div>
        {/* <div className="col-span-9"><div className="bg-decoration h-0.5" /></div> */}
      </div>
    </header>
  );
}
