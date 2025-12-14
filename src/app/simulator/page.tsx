import { Metadata } from "next";
import Link from "next/link";
import { simulatorInfo, courseInfo } from "@/lib/course-data";

export const metadata: Metadata = {
  title: "Indoor Golf Simulator | Whispering Pines Golf Course",
  description:
    "Play year-round with our state-of-the-art Uneekor EYE XO SwingBay Golf Simulator. Access hundreds of courses worldwide.",
};

const dataPoints = [
  "Ball Speed",
  "Club Head Speed",
  "Launch Angle",
  "Spin Rate",
  "Back Spin",
  "Side Spin",
  "Carry Distance",
  "Total Distance",
  "Smash Factor",
  "Attack Angle",
  "Club Path",
  "Face Angle",
];

export default function SimulatorPage() {
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
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="text-white">
              <div className="inline-flex items-center gap-2 bg-white/10 px-4 py-2 rounded-full text-sm mb-6">
                <span className="w-2 h-2 bg-[var(--gold)] rounded-full animate-pulse" />
                Open All Winter
              </div>
              <h1 className="text-5xl md:text-6xl font-bold mb-6">
                Indoor Golf Simulator
              </h1>
              <p className="text-xl text-white/80 mb-8 leading-relaxed">
                {simulatorInfo.description}
              </p>
              <div className="flex flex-wrap gap-4">
                <Link
                  href="/booking"
                  className="btn-secondary px-8 py-4 rounded-full font-semibold inline-flex items-center gap-2"
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
                  Book Simulator Time
                </Link>
                <a
                  href={`tel:${courseInfo.phone.replace(/[^\d]/g, "")}`}
                  className="px-8 py-4 rounded-full font-semibold border-2 border-white text-white hover:bg-white hover:text-[var(--pine-green)] transition-all inline-flex items-center gap-2"
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
                  Call to Book
                </a>
              </div>
            </div>

            {/* Pricing Cards */}
            <div className="grid sm:grid-cols-2 gap-6">
              {simulatorInfo.pricing.map((option) => (
                <div
                  key={option.duration}
                  className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 text-center"
                >
                  <div className="text-white/70 text-sm uppercase tracking-wider mb-2">
                    {option.duration}
                  </div>
                  <div className="text-5xl font-bold text-[var(--gold)] mb-4">
                    ${option.price}
                  </div>
                  <div className="text-white/70 text-sm">
                    Per session (up to 4 players)
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Hours Section */}
      <section className="py-12 bg-[var(--gold)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center justify-center gap-8 text-[var(--pine-green-dark)]">
            <div className="flex items-center gap-3">
              <svg
                className="w-8 h-8"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
              <div>
                <div className="font-bold text-lg">Winter Hours</div>
                <div className="text-sm">{simulatorInfo.hours}</div>
              </div>
            </div>
            <div className="hidden md:block w-px h-12 bg-[var(--pine-green-dark)]/20" />
            <div className="flex items-center gap-3">
              <svg
                className="w-8 h-8"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                />
              </svg>
              <div>
                <div className="font-bold text-lg">Group Play</div>
                <div className="text-sm">Up to 4 players per session</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-[var(--pine-green)] mb-4">
              {simulatorInfo.equipment}
            </h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              Experience the most advanced golf simulation technology available. Our
              all-in-one system combines premium hardware with cutting-edge software
              for an unmatched indoor golf experience.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {simulatorInfo.features.map((feature, index) => (
              <div
                key={index}
                className="bg-[var(--cream)] rounded-2xl p-6 flex items-start gap-4"
              >
                <div className="w-10 h-10 bg-[var(--pine-green)] rounded-full flex items-center justify-center flex-shrink-0">
                  <svg
                    className="w-5 h-5 text-white"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
                <p className="text-gray-700">{feature}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Data Points Section */}
      <section className="py-16 bg-[var(--cream)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-[var(--pine-green)] mb-4">
              22+ Performance Metrics
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Get detailed feedback on every aspect of your swing with real-time data
              tracking.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {dataPoints.map((point) => (
              <div
                key={point}
                className="bg-white rounded-xl p-4 text-center shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="w-10 h-10 bg-[var(--pine-green)]/10 rounded-full flex items-center justify-center mx-auto mb-3">
                  <svg
                    className="w-5 h-5 text-[var(--pine-green)]"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
                    />
                  </svg>
                </div>
                <div className="font-semibold text-[var(--pine-green)]">{point}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What to Expect */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-[var(--pine-green)] mb-6">
                What to Expect
              </h2>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-[var(--pine-green)] rounded-full flex items-center justify-center flex-shrink-0 text-white font-bold">
                    1
                  </div>
                  <div>
                    <h3 className="font-bold text-[var(--pine-green)] mb-2">
                      Book Your Session
                    </h3>
                    <p className="text-gray-600">
                      Reserve your time slot online through our ForeUp booking system
                      or call the clubhouse directly.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-[var(--pine-green)] rounded-full flex items-center justify-center flex-shrink-0 text-white font-bold">
                    2
                  </div>
                  <div>
                    <h3 className="font-bold text-[var(--pine-green)] mb-2">
                      Bring Your Clubs
                    </h3>
                    <p className="text-gray-600">
                      Use your own clubs for the most realistic experience. No marked
                      balls required with our overhead launch monitor.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-[var(--pine-green)] rounded-full flex items-center justify-center flex-shrink-0 text-white font-bold">
                    3
                  </div>
                  <div>
                    <h3 className="font-bold text-[var(--pine-green)] mb-2">
                      Play Any Course
                    </h3>
                    <p className="text-gray-600">
                      Choose from hundreds of world-famous courses or play Whispering
                      Pines virtually when the weather won&apos;t cooperate.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-[var(--pine-green)] rounded-full flex items-center justify-center flex-shrink-0 text-white font-bold">
                    4
                  </div>
                  <div>
                    <h3 className="font-bold text-[var(--pine-green)] mb-2">
                      Improve Your Game
                    </h3>
                    <p className="text-gray-600">
                      Use the detailed swing data and slow-motion replay to identify
                      areas for improvement.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Image placeholder - simulated simulator view */}
            <div className="bg-[var(--cream)] rounded-3xl p-8 aspect-video flex items-center justify-center">
              <div className="text-center">
                <div className="w-24 h-24 bg-[var(--pine-green)]/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg
                    className="w-12 h-12 text-[var(--pine-green)]"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    />
                  </svg>
                </div>
                <p className="text-[var(--pine-green)] font-semibold">
                  State-of-the-Art Simulator Bay
                </p>
                <p className="text-gray-500 text-sm mt-2">
                  High-definition projection with premium turf mat
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-[var(--pine-green)] text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Play Year-Round?</h2>
          <p className="text-xl text-white/80 mb-8">
            Book your simulator session today and keep your game sharp all winter
            long.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/booking"
              className="btn-secondary px-8 py-4 rounded-full font-semibold text-lg inline-flex items-center justify-center gap-2"
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
              Book Online
            </Link>
            <a
              href={`tel:${courseInfo.phone.replace(/[^\d]/g, "")}`}
              className="px-8 py-4 rounded-full font-semibold text-lg border-2 border-white text-white hover:bg-white hover:text-[var(--pine-green)] transition-all inline-flex items-center justify-center gap-2"
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
              Call {courseInfo.phone}
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
