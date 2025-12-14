import { Metadata } from "next";
import Link from "next/link";
import { images } from "@/lib/images";

export const metadata: Metadata = {
  title: "Clubhouse | Whispering Pines Golf Course",
  description:
    "Experience our newly renovated clubhouse featuring a full-service pro shop, restaurant & bar, and event hosting facilities at Whispering Pines Golf Course.",
};

export default function ClubhousePage() {
  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section
        className="relative py-24 bg-cover bg-center"
        style={{ backgroundImage: `url('${images.slider[2]}')` }}
      >
        <div className="absolute inset-0 bg-[var(--pine-green)]/80" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <nav className="mb-8">
            <ol className="flex items-center gap-2 text-white/70 text-sm">
              <li>
                <Link href="/" className="hover:text-white transition-colors">
                  Home
                </Link>
              </li>
              <li>/</li>
              <li className="text-white">Clubhouse</li>
            </ol>
          </nav>
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
            The Clubhouse
          </h1>
          <p className="text-xl text-white/90 max-w-2xl">
            Your home away from home at Whispering Pines. Relax, refuel, and
            prepare for your round in our welcoming clubhouse facilities.
          </p>
        </div>
      </section>

      {/* Pro Shop Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-xl">
              <img
                src={images.features.proShop}
                alt="Whispering Pines Pro Shop"
                className="w-full h-full object-cover"
              />
            </div>
            <div>
              <div className="inline-flex items-center gap-2 bg-[var(--cream)] text-[var(--pine-green)] text-sm font-semibold px-4 py-2 rounded-full mb-4">
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
                    d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"
                  />
                </svg>
                Pro Shop
              </div>
              <h2 className="text-4xl font-bold text-[var(--pine-green)] mb-6">
                Fully Stocked Pro Shop
              </h2>
              <p className="text-lg text-gray-600 mb-6">
                Our pro shop offers everything you need for your round and
                beyond. From the latest equipment and apparel to accessories and
                gifts, we have you covered.
              </p>
              <ul className="space-y-4 mb-8">
                <li className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-[var(--pine-green)] rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <svg
                      className="w-4 h-4 text-white"
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
                  <span className="text-gray-700">
                    Latest golf clubs, balls, and accessories
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-[var(--pine-green)] rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <svg
                      className="w-4 h-4 text-white"
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
                  <span className="text-gray-700">
                    Quality golf apparel for men and women
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-[var(--pine-green)] rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <svg
                      className="w-4 h-4 text-white"
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
                  <span className="text-gray-700">
                    Whispering Pines branded merchandise and souvenirs
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-[var(--pine-green)] rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <svg
                      className="w-4 h-4 text-white"
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
                  <span className="text-gray-700">
                    Expert staff to help with equipment selection
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Restaurant & Bar Section */}
      <section className="py-20 bg-[var(--cream)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1">
              <div className="inline-flex items-center gap-2 bg-[var(--pine-green)] text-white text-sm font-semibold px-4 py-2 rounded-full mb-4">
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
                    d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
                  />
                </svg>
                Restaurant & Bar
              </div>
              <h2 className="text-4xl font-bold text-[var(--pine-green)] mb-6">
                Delicious Food & Refreshing Drinks
              </h2>
              <p className="text-lg text-gray-600 mb-6">
                Whether you&apos;re grabbing a quick bite before your round or
                celebrating after, our restaurant and bar has something for
                everyone. Enjoy great food, cold drinks, and stunning views of
                the course.
              </p>
              <div className="bg-white rounded-2xl p-6 shadow-sm mb-8">
                <h3 className="font-semibold text-[var(--pine-green)] mb-3">
                  Hours of Operation
                </h3>
                <p className="text-gray-600">
                  Open Monday through Sunday from 10:00 AM to Close
                </p>
              </div>
              <div className="flex flex-wrap gap-4">
                <div className="bg-white px-4 py-2 rounded-full text-sm font-medium text-gray-700">
                  Breakfast Items
                </div>
                <div className="bg-white px-4 py-2 rounded-full text-sm font-medium text-gray-700">
                  Lunch Specials
                </div>
                <div className="bg-white px-4 py-2 rounded-full text-sm font-medium text-gray-700">
                  Appetizers
                </div>
                <div className="bg-white px-4 py-2 rounded-full text-sm font-medium text-gray-700">
                  Cold Beverages
                </div>
                <div className="bg-white px-4 py-2 rounded-full text-sm font-medium text-gray-700">
                  Full Bar
                </div>
              </div>
            </div>
            <div className="order-1 lg:order-2 relative aspect-[4/3] rounded-2xl overflow-hidden shadow-xl">
              <img
                src={images.features.food}
                alt="Food and drinks at Whispering Pines"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Event Hosting Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-xl">
              <img
                src={images.features.events}
                alt="Events at Whispering Pines"
                className="w-full h-full object-cover"
              />
            </div>
            <div>
              <div className="inline-flex items-center gap-2 bg-[var(--gold)] text-[var(--pine-green-dark)] text-sm font-semibold px-4 py-2 rounded-full mb-4">
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
                Event Hosting
              </div>
              <h2 className="text-4xl font-bold text-[var(--pine-green)] mb-6">
                Host Your Special Event
              </h2>
              <p className="text-lg text-gray-600 mb-6">
                Looking for the perfect venue for your next event? Whispering
                Pines offers a beautiful setting for corporate outings, charity
                tournaments, private parties, and more.
              </p>
              <ul className="space-y-4 mb-8">
                <li className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-[var(--gold)] rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <svg
                      className="w-4 h-4 text-[var(--pine-green-dark)]"
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
                  <span className="text-gray-700">Corporate golf outings</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-[var(--gold)] rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <svg
                      className="w-4 h-4 text-[var(--pine-green-dark)]"
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
                  <span className="text-gray-700">
                    Charity tournaments and fundraisers
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-[var(--gold)] rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <svg
                      className="w-4 h-4 text-[var(--pine-green-dark)]"
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
                  <span className="text-gray-700">
                    Private parties and celebrations
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-[var(--gold)] rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <svg
                      className="w-4 h-4 text-[var(--pine-green-dark)]"
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
                  <span className="text-gray-700">
                    Customizable catering options
                  </span>
                </li>
              </ul>
              <Link
                href="/contact"
                className="btn-primary px-8 py-4 rounded-full font-semibold inline-flex items-center gap-2"
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
                    d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>
                Inquire About Events
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Amenities Overview */}
      <section className="py-20 bg-[var(--pine-green)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-white mb-4">
              Clubhouse Amenities
            </h2>
            <p className="text-lg text-white/80 max-w-2xl mx-auto">
              Everything you need for a great day at the course
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"
                  />
                ),
                title: "Pro Shop",
                description:
                  "Full-service shop with equipment, apparel, and accessories.",
              },
              {
                icon: (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
                  />
                ),
                title: "Restaurant",
                description: "Delicious food and refreshments before or after your round.",
              },
              {
                icon: (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                ),
                title: "Indoor Simulator",
                description:
                  "Play year-round with our Uneekor EYE XO golf simulator.",
              },
              {
                icon: (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                  />
                ),
                title: "Event Space",
                description: "Perfect venue for corporate outings and private events.",
              },
              {
                icon: (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z"
                  />
                ),
                title: "Full Bar",
                description:
                  "Cold beer, wine, and cocktails to enjoy after your round.",
              },
              {
                icon: (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 21v-4m0 0V5a2 2 0 012-2h6.5l1 1H21l-3 6 3 6h-8.5l-1-1H5a2 2 0 00-2 2zm9-13.5V9"
                  />
                ),
                title: "First Tee",
                description:
                  "Convenient access to the course right from the clubhouse.",
              },
            ].map((amenity, index) => (
              <div
                key={index}
                className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 text-center"
              >
                <div className="w-14 h-14 bg-[var(--gold)] rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg
                    className="w-7 h-7 text-[var(--pine-green-dark)]"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    {amenity.icon}
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">
                  {amenity.title}
                </h3>
                <p className="text-white/70">{amenity.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-[var(--cream)]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-[var(--pine-green)] mb-6">
            Ready to Visit?
          </h2>
          <p className="text-lg text-gray-600 mb-8">
            Come experience the warm hospitality and excellent facilities at
            Whispering Pines. Book your tee time today and see why golfers love
            our clubhouse.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/booking"
              className="btn-primary px-8 py-4 rounded-full font-semibold inline-flex items-center justify-center gap-2"
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
            <Link
              href="/contact"
              className="btn-outline px-8 py-4 rounded-full font-semibold inline-flex items-center justify-center gap-2"
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
              Contact Us
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
