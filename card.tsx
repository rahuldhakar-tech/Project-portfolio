import { cn } from "@/lib/utils";
import type { ReactNode } from "react";

export function Card({ className, children }: { className?: string; children: ReactNode }) {
  return <div className={cn("p-6 rounded-xl bg-white/10 border border-gray-200 shadow-md", className)}>{children}</div>;
}