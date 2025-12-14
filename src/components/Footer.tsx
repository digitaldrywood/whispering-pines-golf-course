import Link from "next/link";
import { courseInfo } from "@/lib/course-data";

const quickLinks = [
  { href: "/course", label: "The Course" },
  { href: "/rates", label: "Rates & Membership" },
  { href: "/simulator", label: "Indoor Simulator" },
  { href: "/events", label: "Events & Leagues" },
  { href: "/pro-shop", label: "Pro Shop" },
  { href: "/menu", label: "Menu" },
];

const courseLinks = [
  { href: "/course/hole/1", label: "Front Nine (1-9)" },
  { href: "/course/hole/10", label: "Back Nine (10-18)" },
  { href: "/course/hole/8", label: "Signature Hole #8" },
  { href: "/weather", label: "Course Weather" },
];

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[var(--pine-green-dark)]">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-12">
          {/* Brand Column */}
          <div className="lg:col-span-1">
            <Link href="/" className="flex items-center gap-3 mb-6 group">
              <div className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center flex-shrink-0 group-hover:bg-white/20 transition-colors">
                <svg
                  className="w-7 h-7 text-[var(--accent)]"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 2L8 8h3v4H8l4 6 4-6h-3V8h3L12 2zm-2 14v6h4v-6h-4z" />
                </svg>
              </div>
              <div>
                <div className="text-xl font-bold text-white group-hover:text-[var(--accent)] transition-colors">
                  Whispering Pines
                </div>
                <div className="text-xs text-[var(--accent)] tracking-[0.15em] uppercase font-medium">
                  Golf Course
                </div>
              </div>
            </Link>
            <p className="text-white/60 text-sm leading-relaxed mb-6">
              {courseInfo.tagline}. A premier 18-hole golf course in the heart of
              Wisconsin&apos;s beautiful Chippewa Valley.
            </p>

            {/* Social Links */}
            <div className="flex gap-3">
              <a
                href="https://www.facebook.com/WhisperingPinesGolfCourse"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-[var(--accent)] transition-colors group"
                aria-label="Facebook"
              >
                <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M18.77,7.46H14.5v-1.9c0-.9.6-1.1,1-1.1h3V.5h-4.33C10.24.5,9.5,3.44,9.5,5.32v2.15h-3v4h3v12h5v-12h3.85l.42-4Z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-bold text-lg mb-5">Quick Links</h3>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-white/60 hover:text-[var(--accent)] transition-colors inline-flex items-center gap-2 text-sm group"
                  >
                    <svg
                      className="w-3 h-3 text-[var(--accent)] opacity-0 -ml-5 group-hover:opacity-100 group-hover:ml-0 transition-all"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Course Links */}
          <div>
            <h3 className="text-white font-bold text-lg mb-5">The Course</h3>
            <ul className="space-y-3">
              {courseLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-white/60 hover:text-[var(--accent)] transition-colors inline-flex items-center gap-2 text-sm group"
                  >
                    <svg
                      className="w-3 h-3 text-[var(--accent)] opacity-0 -ml-5 group-hover:opacity-100 group-hover:ml-0 transition-all"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-white font-bold text-lg mb-5">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <div className="w-8 h-8 bg-[var(--accent)]/20 rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5">
                  <svg className="w-4 h-4 text-[var(--accent)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <div>
                  <span className="text-white/60 text-sm leading-relaxed">
                    {courseInfo.address}
                  </span>
                </div>
              </li>
              <li className="flex items-center gap-3">
                <div className="w-8 h-8 bg-[var(--accent)]/20 rounded-lg flex items-center justify-center flex-shrink-0">
                  <svg className="w-4 h-4 text-[var(--accent)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <a
                  href={`tel:${courseInfo.phone.replace(/[^\d]/g, "")}`}
                  className="text-white/60 hover:text-[var(--accent)] transition-colors text-sm"
                >
                  {courseInfo.phone}
                </a>
              </li>
              <li className="flex items-center gap-3">
                <div className="w-8 h-8 bg-[var(--accent)]/20 rounded-lg flex items-center justify-center flex-shrink-0">
                  <svg className="w-4 h-4 text-[var(--accent)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <a
                  href={`mailto:${courseInfo.email}`}
                  className="text-white/60 hover:text-[var(--accent)] transition-colors text-sm"
                >
                  {courseInfo.email}
                </a>
              </li>
            </ul>

            {/* CTA Button */}
            <div className="mt-6">
              <Link
                href="/booking"
                className="btn-primary px-6 py-3 rounded-full text-sm inline-flex items-center gap-2 w-full justify-center sm:w-auto"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
                Book Tee Time
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-white/40 text-sm text-center md:text-left">
              &copy; {currentYear} Whispering Pines Golf Course. All rights reserved.
            </p>
            <div className="flex items-center gap-6 text-sm">
              <span className="text-white/40">
                12 miles east of Eau Claire, Wisconsin
              </span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
