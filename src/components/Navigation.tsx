"use client";

import Link from "next/link";
import { useState, useEffect, useRef } from "react";
import { usePathname } from "next/navigation";

const navLinks = [
  { href: "/", label: "Home" },
  {
    href: "/course",
    label: "Course",
    dropdown: true,
    items: Array.from({ length: 18 }, (_, i) => ({
      href: `/course/hole/${i + 1}`,
      label: `Hole ${i + 1}`,
    })),
  },
  { href: "/events", label: "Events" },
  { href: "/rates", label: "Rates" },
  { href: "/location", label: "Location" },
  { href: "/pro-shop", label: "Pro Shop" },
  { href: "/menu", label: "Menu" },
  { href: "/weather", label: "Weather" },
];

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [courseDropdownOpen, setCourseDropdownOpen] = useState(false);
  const [mobileCourseOpen, setMobileCourseOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const pathname = usePathname();

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu when navigating
  const handleLinkClick = () => {
    setIsOpen(false);
    setMobileCourseOpen(false);
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

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setCourseDropdownOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-[var(--pine-green)]/95 shadow-[0_16px_40px_rgba(0,0,0,0.25)] py-2 border-b border-white/10"
          : "bg-[var(--pine-green)]/80 backdrop-blur-md py-3 border-b border-white/5"
      }`}
    >
      <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 group">
            <div className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center flex-shrink-0 group-hover:bg-white/20 transition-colors ring-1 ring-white/15">
              <svg
                className="w-7 h-7 text-[var(--accent)]"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M12 2L8 8h3v4H8l4 6 4-6h-3V8h3L12 2zm-2 14v6h4v-6h-4z" />
              </svg>
            </div>
            <div className="hidden sm:block">
              <div className="text-xl font-bold text-white group-hover:text-[var(--accent)] transition-colors">
                Whispering Pines
              </div>
              <div className="text-xs text-[var(--accent)] tracking-[0.2em] uppercase font-medium">
                Golf Course
              </div>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) =>
              link.dropdown ? (
                <div key={link.href} className="relative" ref={dropdownRef}>
                  <button
                    onClick={() => setCourseDropdownOpen(!courseDropdownOpen)}
                    onMouseEnter={() => setCourseDropdownOpen(true)}
                    className={`px-4 py-2 text-sm font-medium transition-colors rounded-lg flex items-center gap-1 ${
                      pathname.startsWith("/course")
                        ? "text-[var(--accent)]"
                        : "text-white/90 hover:text-white hover:bg-white/10"
                    }`}
                  >
                    {link.label}
                    <svg
                      className={`w-4 h-4 transition-transform ${
                        courseDropdownOpen ? "rotate-180" : ""
                      }`}
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M19 9l-7 7-7-7"
                      />
                    </svg>
                  </button>

                  {/* Dropdown Menu */}
                  <div
                    onMouseLeave={() => setCourseDropdownOpen(false)}
                    className={`absolute top-full left-0 mt-1 bg-white rounded-xl shadow-2xl overflow-hidden transition-all duration-200 ${
                      courseDropdownOpen
                        ? "opacity-100 visible translate-y-0"
                        : "opacity-0 invisible -translate-y-2"
                    }`}
                    style={{ minWidth: "200px" }}
                  >
                    <Link
                      href="/course"
                      onClick={() => setCourseDropdownOpen(false)}
                      className="block px-4 py-3 text-sm font-semibold text-[var(--pine-green)] hover:bg-[var(--cream)] border-b border-gray-100"
                    >
                      View All Holes
                    </Link>
                    <div className="grid grid-cols-2 p-2 gap-1 max-h-80 overflow-y-auto">
                      {link.items?.map((item) => (
                        <Link
                          key={item.href}
                          href={item.href}
                          onClick={() => setCourseDropdownOpen(false)}
                          className={`px-3 py-2 text-sm rounded-lg transition-colors ${
                            pathname === item.href
                              ? "bg-[var(--accent)] text-white"
                              : "text-gray-700 hover:bg-[var(--cream)] hover:text-[var(--pine-green)]"
                          }`}
                        >
                          {item.label}
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>
              ) : (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`px-4 py-2 text-sm font-medium transition-colors rounded-lg ${
                    pathname === link.href
                      ? "text-[var(--accent)]"
                      : "text-white/90 hover:text-white hover:bg-white/10"
                  }`}
                >
                  {link.label}
                </Link>
              )
            )}
          </div>

          {/* CTA Button */}
          <div className="hidden lg:block">
            <Link
              href="/booking"
              className="btn-primary px-6 py-2.5 rounded-full text-sm inline-flex items-center gap-2"
            >
              <svg
                className="w-4 h-4"
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
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2 rounded-lg hover:bg-white/10 transition-colors"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
            aria-expanded={isOpen}
          >
            <svg
              className="w-6 h-6 text-white"
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
        className={`lg:hidden fixed inset-x-0 bg-[var(--pine-green)] transition-all duration-300 ease-in-out ${
          isOpen
            ? "top-[60px] bottom-0 opacity-100"
            : "top-[60px] bottom-full opacity-0 pointer-events-none"
        }`}
      >
        <div className="h-full overflow-y-auto px-4 py-6 space-y-1">
          {navLinks.map((link) =>
            link.dropdown ? (
              <div key={link.href}>
                <button
                  onClick={() => setMobileCourseOpen(!mobileCourseOpen)}
                  className={`w-full flex items-center justify-between px-4 py-3.5 rounded-xl font-medium transition-colors ${
                    pathname.startsWith("/course")
                      ? "bg-[var(--accent)] text-white"
                      : "text-white/90 hover:bg-white/10"
                  }`}
                >
                  {link.label}
                  <svg
                    className={`w-5 h-5 transition-transform ${
                      mobileCourseOpen ? "rotate-180" : ""
                    }`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </button>
                <div
                  className={`overflow-hidden transition-all duration-300 ${
                    mobileCourseOpen ? "max-h-[500px] mt-2" : "max-h-0"
                  }`}
                >
                  <Link
                    href="/course"
                    onClick={handleLinkClick}
                    className="block px-6 py-2.5 text-[var(--accent)] font-medium"
                  >
                    View All Holes
                  </Link>
                  <div className="grid grid-cols-3 gap-2 px-4">
                    {link.items?.map((item) => (
                      <Link
                        key={item.href}
                        href={item.href}
                        onClick={handleLinkClick}
                        className={`px-3 py-2 text-sm text-center rounded-lg transition-colors ${
                          pathname === item.href
                            ? "bg-[var(--accent)] text-white"
                            : "text-white/70 hover:bg-white/10"
                        }`}
                      >
                        {item.label.replace("Hole ", "")}
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            ) : (
              <Link
                key={link.href}
                href={link.href}
                onClick={handleLinkClick}
                className={`block px-4 py-3.5 rounded-xl font-medium transition-colors ${
                  pathname === link.href
                    ? "bg-[var(--accent)] text-white"
                    : "text-white/90 hover:bg-white/10"
                }`}
              >
                {link.label}
              </Link>
            )
          )}
          <div className="pt-4">
            <Link
              href="/booking"
              onClick={handleLinkClick}
              className="block w-full btn-primary px-6 py-4 rounded-full font-semibold text-center text-lg"
            >
              Book Tee Time
            </Link>
          </div>

          {/* Contact Info in Mobile Menu */}
          <div className="pt-6 border-t border-white/10 mt-4">
            <a
              href="tel:7152894653"
              className="flex items-center gap-3 px-4 py-3 text-white/80 hover:text-white"
            >
              <svg className="w-5 h-5 text-[var(--accent)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              (715) 289-4653
            </a>
            <a
              href="https://www.facebook.com/WhisperingPinesGolfCourse"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 px-4 py-3 text-white/80 hover:text-white"
            >
              <svg className="w-5 h-5 text-[var(--accent)]" fill="currentColor" viewBox="0 0 24 24">
                <path d="M18.77,7.46H14.5v-1.9c0-.9.6-1.1,1-1.1h3V.5h-4.33C10.24.5,9.5,3.44,9.5,5.32v2.15h-3v4h3v12h5v-12h3.85l.42-4Z" />
              </svg>
              Follow on Facebook
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}
