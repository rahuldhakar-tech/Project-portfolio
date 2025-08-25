import * as React from "react";

export function Label({ children, htmlFor, className }: { children: React.ReactNode; htmlFor?: string; className?: string; }) {
  return <label htmlFor={htmlFor} className={`mb-1 block text-sm text-muted-foreground ${className || ""}`}>{children}</label>;
}