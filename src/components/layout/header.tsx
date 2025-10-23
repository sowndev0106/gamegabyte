"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";

const navItems = [
  { href: "/", label: "HOME" },
  { href: "/services", label: "OUR SERVICES" },
  { href: "/academy", label: "GABYTE ACADEMY" },
  { href: "/case-studies", label: "CASE STUDIES" },
  { href: "/about", label: "ABOUT US" },
];

export function Header() {
  const pathname = usePathname();

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-dark border-b border-primary/20">
      <div className="flex items-center h-[70px]">
        {/* Logo - Left Side */}
        <div className="pl-8">
          <Link href="/" className="flex-shrink-0">
            <Image
              src="/images/logos/logo-gamegabite.svg"
              alt="GameGabite"
              width={120}
              height={40}
              className="h-10 w-auto"
              priority
            />
          </Link>
        </div>

        {/* Spacer */}
        <div className="flex-1" />

        {/* Navigation - Right Side */}
        <nav className="hidden lg:flex items-center gap-12 pr-8">
          {navItems.map((item) => {
            const isActive = pathname === item.href;
            return (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  "font-schibsted uppercase transition-colors whitespace-nowrap",
                  "text-[16px] leading-[24px] tracking-[0.2px]",
                  isActive
                    ? "font-bold text-primary"
                    : "font-normal text-light-60 hover:text-primary hover:font-bold"
                )}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>

        {/* CTA Button - Full Height, Right Edge */}
        <div className="h-full flex items-stretch">
          <Link
            href="/contact"
            className="h-full flex items-center bg-primary hover:bg-primary/90 transition-colors px-8 group"
          >
            <span className="font-schibsted font-bold text-dark uppercase text-[16px] tracking-[0.2px] mr-2">
              Let&apos;s Talk
            </span>
            <svg
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="transition-transform group-hover:translate-x-1 group-hover:-translate-y-1"
            >
              <path
                d="M5 15L15 5M15 5H7M15 5V13"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="text-dark"
              />
            </svg>
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="lg:hidden text-light p-4 ml-auto"
          aria-label="Toggle menu"
        >
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <line x1="3" y1="12" x2="21" y2="12" />
            <line x1="3" y1="6" x2="21" y2="6" />
            <line x1="3" y1="18" x2="21" y2="18" />
          </svg>
        </button>
      </div>
    </header>
  );
}
