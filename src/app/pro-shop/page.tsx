import { Metadata } from "next";
import Link from "next/link";
import { courseInfo } from "@/lib/course-data";
import { images } from "@/lib/images";

export const metadata: Metadata = {
  title: "Pro Shop | Whispering Pines Golf Course",
  description:
    "Visit the Whispering Pines Pro Shop for the latest golf equipment, apparel, and accessories. Book your tee time today.",
};

export default function ProShopPage() {
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
            <h1 className="text-5xl md:text-6xl font-bold mb-6">Pro Shop</h1>
            <p className="text-xl text-white/80 max-w-3xl mx-auto">
              Your one-stop shop for golf equipment, apparel, and accessories.
              Our knowledgeable staff is ready to help you find exactly what you
              need.
            </p>
          </div>
        </div>
      </section>

      {/* Pro Shop Content */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Image */}
            <div className="rounded-3xl overflow-hidden shadow-xl">
              <img
                src={images.features.proShop}
                alt="Whispering Pines Pro Shop"
                className="w-full h-auto object-cover"
              />
            </div>

            {/* Content */}
            <div>
              <h2 className="text-4xl font-bold text-[var(--pine-green)] mb-6">
                Everything You Need for Your Round
              </h2>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                The Whispering Pines Pro Shop offers a wide selection of golf
                equipment, apparel, and accessories for golfers of all skill
                levels. Whether you need a new driver, a fresh sleeve of balls,
                or some course-branded gear, we&apos;ve got you covered.
              </p>

              <div className="space-y-4 mb-8">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-[var(--cream)] rounded-full flex items-center justify-center">
                    <svg
                      className="w-5 h-5 text-[var(--pine-green)]"
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
                  <span className="text-gray-700">Golf Clubs & Equipment</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-[var(--cream)] rounded-full flex items-center justify-center">
                    <svg
                      className="w-5 h-5 text-[var(--pine-green)]"
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
                  <span className="text-gray-700">Golf Balls & Accessories</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-[var(--cream)] rounded-full flex items-center justify-center">
                    <svg
                      className="w-5 h-5 text-[var(--pine-green)]"
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
                  <span className="text-gray-700">Apparel & Footwear</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-[var(--cream)] rounded-full flex items-center justify-center">
                    <svg
                      className="w-5 h-5 text-[var(--pine-green)]"
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
                    Whispering Pines Branded Merchandise
                  </span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-[var(--cream)] rounded-full flex items-center justify-center">
                    <svg
                      className="w-5 h-5 text-[var(--pine-green)]"
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
                  <span className="text-gray-700">Gift Cards Available</span>
                </div>
              </div>

              <div className="bg-[var(--cream)] rounded-2xl p-6 mb-8">
                <h3 className="font-bold text-[var(--pine-green)] mb-2">
                  Member Discount
                </h3>
                <p className="text-gray-600">
                  Members receive 10-15% off all pro shop merchandise. Not a
                  member yet? Ask about our membership options!
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Book Online Section */}
      <section className="py-16 bg-[var(--cream)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-[var(--pine-green)] mb-6">
                Book Your Tee Time Online
              </h2>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                Reserve your spot on the course with our easy online booking
                system. Choose your preferred date, time, and number of players,
                and you&apos;re all set!
              </p>
              <Link
                href="/booking"
                className="btn-primary px-8 py-4 rounded-full font-semibold text-lg inline-flex items-center gap-2"
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
                Book Online Now
              </Link>
            </div>
            <div className="rounded-3xl overflow-hidden shadow-xl">
              <img
                src={images.features.bookOnline}
                alt="Book Online"
                className="w-full h-auto object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 bg-[var(--pine-green)] text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-6">Questions?</h2>
          <p className="text-xl text-white/80 mb-8">
            Our pro shop staff is happy to help. Give us a call or stop by!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href={`tel:${courseInfo.phone.replace(/[^\d]/g, "")}`}
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
