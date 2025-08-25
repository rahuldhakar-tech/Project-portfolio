import { cn } from "@/lib/utils";
import * as React from "react";

export function Button({ className, ...props }: React.ButtonHTMLAttributes<HTMLButtonElement>) {
  return (
    <button className={cn("px-4 py-2 rounded-lg font-medium bg-accent text-white hover:opacity-90 transition", className)} {...props} />
  );
}