import { cn } from "@/lib/utils";
import { HTMLAttributes } from "react";

interface SectionWrapperProps extends HTMLAttributes<HTMLElement> {
  id?: string;
  children: React.ReactNode;
  container?: boolean;
  containerSize?: "sm" | "md" | "lg" | "xl" | "full";
}

/**
 * Wrapper component cho sections
 * Provides consistent spacing and structure
 */
export function SectionWrapper({
  id,
  className,
  children,
  container = false,
  containerSize = "xl",
  ...props
}: SectionWrapperProps) {
  const content = container ? (
    <Container size={containerSize}>{children}</Container>
  ) : (
    children
  );

  return (
    <section
      id={id}
      className={cn("relative", className)}
      {...props}
    >
      {content}
    </section>
  );
}

/**
 * Container component
 */
interface ContainerProps extends HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  size?: "sm" | "md" | "lg" | "xl" | "full";
}

export function Container({
  className,
  children,
  size = "xl",
  ...props
}: ContainerProps) {
  const sizes = {
    sm: "max-w-3xl",
    md: "max-w-5xl",
    lg: "max-w-6xl",
    xl: "max-w-7xl",
    full: "max-w-full",
  };

  return (
    <div
      className={cn("container mx-auto px-4", sizes[size], className)}
      {...props}
    >
      {children}
    </div>
  );
}
