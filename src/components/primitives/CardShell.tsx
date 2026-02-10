"use client";

import { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface CardShellProps {
  children: ReactNode;
  className?: string;
  interactive?: boolean;
}

export function CardShell({ children, className, interactive = false }: CardShellProps) {
  return (
    <div
      className={cn(
        "rounded-xl border border-border bg-neutral-lighter dark:bg-neutral-darker shadow-sm",
        interactive && "transition hover:-translate-y-[1px] hover:shadow-md",
        className
      )}
    >
      {children}
    </div>
  );
}
