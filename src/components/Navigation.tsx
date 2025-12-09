"use client";

import Link from "next/link";
import { useState } from "react";
import { courseInfo } from "@/lib/course-data";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/course", label: "The Course" },
  { href: "/clubhouse", label: "Clubhouse" },
  { href: "/rates", label: "Rates" },
  { href: "/simulator", label: "Simulator" },
  { href: "/events", label: "Events" },
  { href: "/contact", label: "Contact" },
];

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3">
            <div className="w-12 h-12 bg-[var(--pine-green)] rounded-full flex items-center justify-center">
              <svg
                className="w-8 h-8 text-white"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M12 2L8 8h3v4H8l4 6 4-6h-3V8h3L12 2zm-2 14v6h4v-6h-4z" />
              </svg>
            </div>
            <div className="hidden sm:block">
              <div className="text-xl font-bold text-[var(--pine-green)]">
                Whispering Pines
              </div>
              <div className="text-xs text-[var(--gold)] tracking-wider uppercase">
                Golf Course
              </div>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-gray-700 hover:text-[var(--pine-green)] font-medium transition-colors relative group"
              >
                {link.label}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[var(--gold)] transition-all group-hover:w-full" />
              </Link>
            ))}
          </div>

          {/* CTA Button */}
          <div className="hidden lg:block">
            <a
              href="https://foreupsoftware.com/index.php/booking/19498/1021#/teetimes"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary px-6 py-3 rounded-full font-semibold inline-flex items-center gap-2"
            >
              <svg
                className="w-5 h-5"
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
            className="lg:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
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
        className={`lg:hidden transition-all duration-300 overflow-hidden ${
          isOpen ? "max-h-[500px] border-t border-gray-100" : "max-h-0"
        }`}
      >
        <div className="px-4 py-4 space-y-2 bg-white">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="block px-4 py-3 rounded-lg text-gray-700 hover:bg-[var(--cream)] hover:text-[var(--pine-green)] font-medium transition-colors"
              onClick={() => setIsOpen(false)}
            >
              {link.label}
            </Link>
          ))}
          <a
            href="https://foreupsoftware.com/index.php/booking/19498/1021#/teetimes"
            target="_blank"
            rel="noopener noreferrer"
            className="block w-full mt-4 btn-primary px-6 py-3 rounded-full font-semibold text-center"
          >
            Book Tee Time
          </a>
        </div>
      </div>
    </nav>
  );
}
