import { Metadata } from "next";
import Link from "next/link";
import { courseInfo } from "@/lib/course-data";

export const metadata: Metadata = {
  title: "Location & Directions | Whispering Pines Golf Course",
  description:
    "Find Whispering Pines Golf Course at 24700 County Highway X, Cadott, WI 54727. Located 12 miles east of Eau Claire on Highway 29.",
};

export default function LocationPage() {
  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="relative py-24 bg-[var(--pine-green)]">
        <div className="absolute inset-0 opacity-10">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
            }}
          />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center text-white">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">Location</h1>
            <p className="text-xl text-white/80 max-w-3xl mx-auto">
              Easy to find, hard to leave. We&apos;re conveniently located just
              12 miles east of Eau Claire.
            </p>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Map */}
            <div className="bg-[var(--cream)] rounded-3xl overflow-hidden shadow-xl h-[500px]">
              <iframe
                src="https://maps.google.com/maps?q=Whispering+Pines+Golf+Course+24700+County+Highway+X+Cadott+WI&t=&z=14&ie=UTF8&iwloc=&output=embed"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Whispering Pines Golf Course Location"
              />
            </div>

            {/* Contact Info */}
            <div>
              <h2 className="text-4xl font-bold text-[var(--pine-green)] mb-8">
                Find Us
              </h2>

              <div className="space-y-8">
                {/* Address */}
                <div className="flex items-start gap-4">
                  <div className="w-14 h-14 bg-[var(--cream)] rounded-xl flex items-center justify-center flex-shrink-0">
                    <svg
                      className="w-7 h-7 text-[var(--pine-green)]"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                      />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                      />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-bold text-[var(--pine-green)] text-lg mb-1">
                      Address
                    </h3>
                    <p className="text-gray-600 text-lg">
                      {courseInfo.address}
                    </p>
                    <a
                      href={`https://maps.google.com/maps?q=${encodeURIComponent(
                        courseInfo.address
                      )}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[var(--pine-green)] font-semibold hover:underline inline-flex items-center gap-1 mt-2"
                    >
                      Get Directions
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
                          d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                        />
                      </svg>
                    </a>
                  </div>
                </div>

                {/* Phone */}
                <div className="flex items-start gap-4">
                  <div className="w-14 h-14 bg-[var(--cream)] rounded-xl flex items-center justify-center flex-shrink-0">
                    <svg
                      className="w-7 h-7 text-[var(--pine-green)]"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                      />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-bold text-[var(--pine-green)] text-lg mb-1">
                      Phone
                    </h3>
                    <a
                      href={`tel:${courseInfo.phone.replace(/[^\d]/g, "")}`}
                      className="text-gray-600 text-lg hover:text-[var(--pine-green)] transition-colors"
                    >
                      {courseInfo.phone}
                    </a>
                  </div>
                </div>

                {/* Email */}
                <div className="flex items-start gap-4">
                  <div className="w-14 h-14 bg-[var(--cream)] rounded-xl flex items-center justify-center flex-shrink-0">
                    <svg
                      className="w-7 h-7 text-[var(--pine-green)]"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                      />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-bold text-[var(--pine-green)] text-lg mb-1">
                      Email
                    </h3>
                    <a
                      href={`mailto:${courseInfo.email}`}
                      className="text-gray-600 text-lg hover:text-[var(--pine-green)] transition-colors"
                    >
                      {courseInfo.email}
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Directions Section */}
      <section className="py-16 bg-[var(--cream)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-[var(--pine-green)] mb-4">
              Directions
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Located approximately 15 miles east of Eau Claire, Wisconsin on
              Highway 29 or 1½ miles west of Cadott on County Trunk X.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* From Eau Claire */}
            <div className="bg-white rounded-2xl p-8 shadow-sm">
              <h3 className="text-xl font-bold text-[var(--pine-green)] mb-4 flex items-center gap-2">
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7"
                  />
                </svg>
                From Eau Claire
              </h3>
              <ol className="space-y-3 text-gray-600">
                <li className="flex gap-3">
                  <span className="w-6 h-6 bg-[var(--pine-green)] text-white rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0">
                    1
                  </span>
                  <span>Head east on US Highway 29</span>
                </li>
                <li className="flex gap-3">
                  <span className="w-6 h-6 bg-[var(--pine-green)] text-white rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0">
                    2
                  </span>
                  <span>Continue for approximately 12 miles</span>
                </li>
                <li className="flex gap-3">
                  <span className="w-6 h-6 bg-[var(--pine-green)] text-white rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0">
                    3
                  </span>
                  <span>Take the County Highway X exit</span>
                </li>
                <li className="flex gap-3">
                  <span className="w-6 h-6 bg-[var(--pine-green)] text-white rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0">
                    4
                  </span>
                  <span>
                    Turn right onto County Highway X - course is on your left
                  </span>
                </li>
              </ol>
            </div>

            {/* From Cadott */}
            <div className="bg-white rounded-2xl p-8 shadow-sm">
              <h3 className="text-xl font-bold text-[var(--pine-green)] mb-4 flex items-center gap-2">
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7"
                  />
                </svg>
                From Cadott
              </h3>
              <ol className="space-y-3 text-gray-600">
                <li className="flex gap-3">
                  <span className="w-6 h-6 bg-[var(--pine-green)] text-white rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0">
                    1
                  </span>
                  <span>Head west on County Highway X</span>
                </li>
                <li className="flex gap-3">
                  <span className="w-6 h-6 bg-[var(--pine-green)] text-white rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0">
                    2
                  </span>
                  <span>Continue for approximately 1.5 miles</span>
                </li>
                <li className="flex gap-3">
                  <span className="w-6 h-6 bg-[var(--pine-green)] text-white rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0">
                    3
                  </span>
                  <span>Whispering Pines Golf Course will be on your right</span>
                </li>
              </ol>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-[var(--pine-green)] text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Visit?</h2>
          <p className="text-xl text-white/80 mb-8">
            Book your tee time today and experience Whispering Pines!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/booking"
              className="btn-secondary px-8 py-4 rounded-full font-semibold inline-flex items-center justify-center gap-2"
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
            </Link>
            <a
              href={`tel:${courseInfo.phone.replace(/[^\d]/g, "")}`}
              className="px-8 py-4 rounded-full font-semibold border-2 border-white text-white hover:bg-white hover:text-[var(--pine-green)] transition-all inline-flex items-center justify-center gap-2"
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
                  d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                />
              </svg>
              Call Us
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
