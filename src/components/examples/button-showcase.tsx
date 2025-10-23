"use client";

import Link from "next/link";
import { ActionButton } from "@/components/ui/action-button";

/**
 * Button Showcase Component
 *
 * Demonstrates the 4 main button variants from the design system:
 * 1. White - CASE STUDY style
 * 2. Primary - CONNECT WITH US style (lime green)
 * 3. Secondary - VIEW OUR PORTFOLIO style (purple)
 * 4. Dark - CONNECT WITH US dark style (black with lime border)
 */
export function ButtonShowcase() {
  return (
    <div className="flex flex-col gap-8 p-12 bg-gradient-to-br from-dark via-dark/95 to-accent/20">
      <div className="mb-8">
        <h2 className="font-schibsted text-light text-4xl font-bold mb-2">
          ActionButton Component
        </h2>
        <p className="font-schibsted text-light/60 text-lg">
          4 main button variants from the design system
        </p>
      </div>

      {/* 1. White Button - CASE STUDY */}
      <div className="space-y-3">
        <h3 className="font-schibsted text-light text-sm uppercase tracking-wider opacity-60">
          1. White Button (Case Study style)
        </h3>
        <div className="p-6 bg-dark/50 rounded-lg flex items-center gap-4">
          <Link href="/case-studies">
            <ActionButton variant="white" arrowDirection="right" size="md">
              CASE STUDY
            </ActionButton>
          </Link>
          <code className="text-light/40 text-xs font-mono">
            variant=&quot;white&quot; arrowDirection=&quot;right&quot;
          </code>
        </div>
      </div>

      {/* 2. Primary Button - CONNECT WITH US (Lime Green) */}
      <div className="space-y-3">
        <h3 className="font-schibsted text-light text-sm uppercase tracking-wider opacity-60">
          2. Primary Button (Lime Green)
        </h3>
        <div className="p-6 bg-dark/50 rounded-lg flex items-center gap-4">
          <Link href="/contact">
            <ActionButton variant="primary" arrowDirection="up-right" size="md">
              CONNECT WITH US
            </ActionButton>
          </Link>
          <code className="text-light/40 text-xs font-mono">
            variant=&quot;primary&quot; arrowDirection=&quot;up-right&quot;
          </code>
        </div>
      </div>

      {/* 3. Secondary Button - VIEW OUR PORTFOLIO (Purple) */}
      <div className="space-y-3">
        <h3 className="font-schibsted text-light text-sm uppercase tracking-wider opacity-60">
          3. Secondary Button (Purple)
        </h3>
        <div className="p-6 bg-light/10 rounded-lg flex items-center gap-4">
          <Link href="/portfolio">
            <ActionButton variant="secondary" arrowDirection="right" size="md">
              VIEW OUR PORTFOLIO
            </ActionButton>
          </Link>
          <code className="text-light/40 text-xs font-mono">
            variant=&quot;secondary&quot; arrowDirection=&quot;right&quot;
          </code>
        </div>
      </div>

      {/* 4. Dark Button - CONNECT WITH US (Black with lime border) */}
      <div className="space-y-3">
        <h3 className="font-schibsted text-light text-sm uppercase tracking-wider opacity-60">
          4. Dark Button (Black with Lime Border)
        </h3>
        <div className="p-6 bg-primary/10 rounded-lg flex items-center gap-4 border-2 border-primary/20">
          <Link href="/contact">
            <ActionButton variant="dark" arrowDirection="up-right" size="md">
              CONNECT WITH US
            </ActionButton>
          </Link>
          <code className="text-light/40 text-xs font-mono">
            variant=&quot;dark&quot; arrowDirection=&quot;up-right&quot;
          </code>
        </div>
      </div>

      {/* Size Variants */}
      <div className="space-y-3 mt-8">
        <h3 className="font-schibsted text-light text-sm uppercase tracking-wider opacity-60">
          Size Variants
        </h3>
        <div className="p-6 bg-dark/50 rounded-lg flex items-center gap-4 flex-wrap">
          <ActionButton variant="primary" size="sm">
            Small
          </ActionButton>
          <ActionButton variant="primary" size="md">
            Medium
          </ActionButton>
          <ActionButton variant="primary" size="lg">
            Large
          </ActionButton>
          <ActionButton variant="primary" size="xl">
            Extra Large
          </ActionButton>
        </div>
      </div>

      {/* Arrow Directions */}
      <div className="space-y-3">
        <h3 className="font-schibsted text-light text-sm uppercase tracking-wider opacity-60">
          Arrow Directions
        </h3>
        <div className="p-6 bg-dark/50 rounded-lg flex items-center gap-4 flex-wrap">
          <ActionButton variant="primary" arrowDirection="right">
            Right Arrow
          </ActionButton>
          <ActionButton variant="primary" arrowDirection="up-right">
            Up-Right Arrow
          </ActionButton>
          <ActionButton variant="primary" arrowDirection="down">
            Down Arrow
          </ActionButton>
        </div>
      </div>

      {/* Additional Variants */}
      <div className="space-y-3">
        <h3 className="font-schibsted text-light text-sm uppercase tracking-wider opacity-60">
          Additional Variants
        </h3>
        <div className="p-6 bg-dark/50 rounded-lg flex items-center gap-4 flex-wrap">
          <ActionButton variant="outlineLight">
            Outline Light
          </ActionButton>
          <ActionButton variant="outline">
            Outline
          </ActionButton>
          <ActionButton variant="light">
            Light
          </ActionButton>
        </div>
      </div>
    </div>
  );
}
