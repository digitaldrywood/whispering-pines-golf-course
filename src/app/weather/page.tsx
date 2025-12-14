import { Metadata } from "next";
import Link from "next/link";
import { courseInfo } from "@/lib/course-data";
import WeatherWidget from "@/components/WeatherWidget";

export const metadata: Metadata = {
  title: "Weather | Whispering Pines Golf Course",
  description:
    "Check the current weather conditions at Whispering Pines Golf Course in Cadott, Wisconsin before your round.",
};

export default function WeatherPage() {
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
            <h1 className="text-5xl md:text-6xl font-bold mb-6">Weather</h1>
            <p className="text-xl text-white/80 max-w-3xl mx-auto">
              Check current conditions at Whispering Pines Golf Course before
              heading out for your round.
            </p>
          </div>
        </div>
      </section>

      {/* Live Weather Widget Section */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-[var(--pine-green)] mb-4">
              Current Conditions
            </h2>
            <p className="text-gray-600">
              Cadott, Wisconsin · Live weather updates every 15 minutes
            </p>
          </div>

          {/* Weather Widget */}
          <WeatherWidget />
        </div>
      </section>

      {/* Golf Weather Tips */}
      <section className="py-16 bg-[var(--cream)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-[var(--pine-green)] mb-4">
              Golf Weather Tips
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Make the most of your round by understanding how weather affects your game.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white rounded-2xl p-6 shadow-sm">
              <div className="w-14 h-14 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">💨</span>
              </div>
              <h3 className="font-bold text-[var(--pine-green)] text-center mb-2">
                Wind Strategy
              </h3>
              <ul className="text-gray-600 text-sm space-y-2">
                <li>• Into the wind: Club up 1-2 clubs</li>
                <li>• Downwind: Club down, ball will roll more</li>
                <li>• Crosswind: Aim into the wind or play a shape</li>
                <li>• Gusty: Keep the ball low with punch shots</li>
              </ul>
            </div>

            <div className="bg-white rounded-2xl p-6 shadow-sm">
              <div className="w-14 h-14 bg-yellow-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🌡️</span>
              </div>
              <h3 className="font-bold text-[var(--pine-green)] text-center mb-2">
                Temperature Effects
              </h3>
              <ul className="text-gray-600 text-sm space-y-2">
                <li>• Cold air: Ball travels shorter distances</li>
                <li>• Hot air: Ball travels farther</li>
                <li>• Morning dew: Clean clubs and ball often</li>
                <li>• Humid conditions: Ball may fly slightly less</li>
              </ul>
            </div>

            <div className="bg-white rounded-2xl p-6 shadow-sm">
              <div className="w-14 h-14 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">☀️</span>
              </div>
              <h3 className="font-bold text-[var(--pine-green)] text-center mb-2">
                Sun & Visibility
              </h3>
              <ul className="text-gray-600 text-sm space-y-2">
                <li>• Early morning: Longer shadows, cooler temps</li>
                <li>• Midday: Peak UV exposure, stay hydrated</li>
                <li>• Evening: Watch for low sun in your eyes</li>
                <li>• Overcast: Consistent light, easier to read greens</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Course Conditions Notice */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-[var(--cream)] rounded-3xl p-8 shadow-lg">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-[var(--gold)]/20 rounded-full flex items-center justify-center flex-shrink-0">
                <svg
                  className="w-6 h-6 text-[var(--gold)]"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
              <div>
                <h3 className="text-xl font-bold text-[var(--pine-green)] mb-2">
                  Course Conditions
                </h3>
                <p className="text-gray-600 mb-4">
                  Weather conditions may affect course playability. Please call
                  the pro shop for current course conditions, especially after
                  heavy rain or during extreme weather. Cart restrictions may
                  apply during wet conditions.
                </p>
                <a
                  href={`tel:${courseInfo.phone.replace(/[^\d]/g, "")}`}
                  className="text-[var(--pine-green)] font-semibold hover:underline inline-flex items-center gap-2"
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
                      d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                    />
                  </svg>
                  Call Pro Shop: {courseInfo.phone}
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-[var(--pine-green)] text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-6">Looking Good Out There?</h2>
          <p className="text-xl text-white/80 mb-8">
            Book your tee time now and enjoy a great day of golf!
          </p>
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
            Book Tee Time
          </Link>
        </div>
      </section>
    </div>
  );
}
