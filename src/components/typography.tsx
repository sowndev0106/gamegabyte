import * as React from "react";
import { cn } from "@/lib/utils";

interface TypographyProps extends React.HTMLAttributes<HTMLElement> {
  as?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "p" | "span" | "div";
  children: React.ReactNode;
}

export function Hero({ as: Component = "h1", className, children, ...props }: TypographyProps) {
  return (
    <Component className={cn("text-hero", className)} {...props}>
      {children}
    </Component>
  );
}

export function H1({ as: Component = "h1", className, children, ...props }: TypographyProps) {
  return (
    <Component className={cn("text-h1", className)} {...props}>
      {children}
    </Component>
  );
}

export function H2({ as: Component = "h2", className, children, ...props }: TypographyProps) {
  return (
    <Component className={cn("text-h2", className)} {...props}>
      {children}
    </Component>
  );
}

export function H3({ as: Component = "h3", className, children, ...props }: TypographyProps) {
  return (
    <Component className={cn("text-h3", className)} {...props}>
      {children}
    </Component>
  );
}

export function H4({ as: Component = "h4", className, children, ...props }: TypographyProps) {
  return (
    <Component className={cn("text-h4", className)} {...props}>
      {children}
    </Component>
  );
}

export function H5({ as: Component = "h5", className, children, ...props }: TypographyProps) {
  return (
    <Component className={cn("text-h5", className)} {...props}>
      {children}
    </Component>
  );
}

export function Description({ as: Component = "p", className, children, ...props }: TypographyProps) {
  return (
    <Component className={cn("text-description", className)} {...props}>
      {children}
    </Component>
  );
}

export function Body({ as: Component = "p", className, children, ...props }: TypographyProps) {
  return (
    <Component className={cn("text-body", className)} {...props}>
      {children}
    </Component>
  );
}

export function Small({ as: Component = "span", className, children, ...props }: TypographyProps) {
  return (
    <Component className={cn("text-small", className)} {...props}>
      {children}
    </Component>
  );
}
