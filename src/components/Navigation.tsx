"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/course", label: "Course" },
  { href: "/events", label: "Events" },
  { href: "/rates", label: "Rates" },
  { href: "/location", label: "Location" },
  { href: "/pro-shop", label: "Pro Shop" },
  { href: "/menu", label: "Menu" },
  { href: "/weather", label: "Weather" },
];

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  // Close mobile menu when navigating
  const handleLinkClick = () => {
    setIsOpen(false);
  };

  // Prevent body scroll when menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 sm:h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 sm:gap-3">
            <div className="w-10 h-10 sm:w-12 sm:h-12 bg-[var(--pine-green)] rounded-full flex items-center justify-center flex-shrink-0">
              <svg
                className="w-6 h-6 sm:w-8 sm:h-8 text-white"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M12 2L8 8h3v4H8l4 6 4-6h-3V8h3L12 2zm-2 14v6h4v-6h-4z" />
              </svg>
            </div>
            <div className="hidden sm:block">
              <div className="text-lg sm:text-xl font-bold text-[var(--pine-green)]">
                Whispering Pines
              </div>
              <div className="text-xs text-[var(--gold)] tracking-wider uppercase">
                Golf Course
              </div>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-6 xl:gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`text-sm xl:text-base font-medium transition-colors relative group ${
                  pathname === link.href
                    ? "text-[var(--pine-green)]"
                    : "text-gray-700 hover:text-[var(--pine-green)]"
                }`}
              >
                {link.label}
                <span
                  className={`absolute -bottom-1 left-0 h-0.5 bg-[var(--gold)] transition-all ${
                    pathname === link.href ? "w-full" : "w-0 group-hover:w-full"
                  }`}
                />
              </Link>
            ))}
          </div>

          {/* CTA Button */}
          <div className="hidden lg:block">
            <a
              href="https://foreupsoftware.com/index.php/booking/19498/1021#/teetimes"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary px-5 py-2.5 xl:px-6 xl:py-3 rounded-full font-semibold text-sm xl:text-base inline-flex items-center gap-2"
            >
              <svg
                className="w-4 h-4 xl:w-5 xl:h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                />
              </svg>
              Book Tee Time
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2 -mr-2 rounded-lg hover:bg-gray-100 transition-colors"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
            aria-expanded={isOpen}
          >
            <svg
              className="w-6 h-6 text-[var(--pine-green)]"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {isOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      <div
        className={`lg:hidden fixed inset-x-0 bg-white transition-all duration-300 ease-in-out ${
          isOpen
            ? "top-16 sm:top-20 bottom-0 opacity-100"
            : "top-16 sm:top-20 bottom-full opacity-0 pointer-events-none"
        }`}
      >
        <div className="h-full overflow-y-auto px-4 py-6 space-y-1">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={handleLinkClick}
              className={`block px-4 py-3.5 rounded-xl font-medium transition-colors ${
                pathname === link.href
                  ? "bg-[var(--pine-green)] text-white"
                  : "text-gray-700 hover:bg-[var(--cream)] hover:text-[var(--pine-green)]"
              }`}
            >
              {link.label}
            </Link>
          ))}
          <div className="pt-4">
            <a
              href="https://foreupsoftware.com/index.php/booking/19498/1021#/teetimes"
              target="_blank"
              rel="noopener noreferrer"
              onClick={handleLinkClick}
              className="block w-full btn-primary px-6 py-4 rounded-full font-semibold text-center text-lg"
            >
              Book Tee Time
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}
