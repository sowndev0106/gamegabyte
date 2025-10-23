import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

/**
 * Action Button Variants
 * Based on your design system with arrow indicators
 */
const actionButtonVariants = cva(
  "inline-flex items-center justify-center gap-3 font-bold uppercase tracking-wide transition-all duration-300 disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        // Primary lime green button
        primary:
          "bg-primary text-dark hover:bg-primary/90 hover:shadow-lg hover:shadow-primary/50",

        // Dark button with primary outline
        dark: "bg-dark text-light border-2 border-primary hover:bg-dark/90 hover:shadow-lg hover:shadow-primary/30",

        // Outlined button
        outline:
          "bg-transparent text-dark border-2 border-dark hover:bg-dark hover:text-light",

        // Light button (for dark backgrounds)
        light:
          "bg-light text-dark hover:bg-light/90 hover:shadow-lg",

        // Secondary purple button
        secondary:
          "bg-accent text-light hover:bg-accent/90 hover:shadow-lg hover:shadow-accent/50",
      },
      size: {
        sm: "px-4 py-2 text-xs",
        md: "px-6 py-3 text-sm",
        lg: "px-8 py-4 text-base",
        xl: "px-10 py-5 text-lg",
      },
      rounded: {
        none: "rounded-none",
        sm: "rounded-sm",
        md: "rounded-md",
        lg: "rounded-lg",
      },
    },
    defaultVariants: {
      variant: "primary",
      size: "md",
      rounded: "none",
    },
  }
);

export interface ActionButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof actionButtonVariants> {
  asChild?: boolean;
  showArrow?: boolean;
  arrowDirection?: "right" | "up-right" | "down";
}

/**
 * ActionButton Component
 *
 * @example
 * // Primary button with arrow
 * <ActionButton variant="primary">View All</ActionButton>
 *
 * @example
 * // Dark button with custom arrow
 * <ActionButton variant="dark" showArrow>Connect With Us</ActionButton>
 *
 * @example
 * // As a link
 * <ActionButton asChild variant="outline">
 *   <a href="/portfolio">View Our Portfolio</a>
 * </ActionButton>
 */
const ActionButton = React.forwardRef<HTMLButtonElement, ActionButtonProps>(
  (
    {
      className,
      variant,
      size,
      rounded,
      asChild = false,
      showArrow = true,
      arrowDirection = "right",
      children,
      ...props
    },
    ref
  ) => {
    const Comp = asChild ? Slot : "button";

    // Arrow icons based on direction
    const arrows = {
      right: (
        <svg
          width="16"
          height="16"
          viewBox="0 0 16 16"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="transition-transform group-hover:translate-x-1"
        >
          <path
            d="M3 8H13M13 8L9 4M13 8L9 12"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      ),
      "up-right": (
        <svg
          width="16"
          height="16"
          viewBox="0 0 16 16"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
        >
          <path
            d="M4 12L12 4M12 4H6M12 4V10"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      ),
      down: (
        <svg
          width="16"
          height="16"
          viewBox="0 0 16 16"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="transition-transform group-hover:translate-y-1"
        >
          <path
            d="M8 3V13M8 13L4 9M8 13L12 9"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      ),
    };

    return (
      <Comp
        className={cn(
          actionButtonVariants({ variant, size, rounded, className }),
          "group"
        )}
        ref={ref}
        {...props}
      >
        <span>{children}</span>
        {showArrow && arrows[arrowDirection]}
      </Comp>
    );
  }
);

ActionButton.displayName = "ActionButton";

export { ActionButton, actionButtonVariants };
