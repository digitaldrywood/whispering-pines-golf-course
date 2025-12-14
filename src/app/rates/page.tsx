import { Metadata } from "next";
import Link from "next/link";
import { courseInfo } from "@/lib/course-data";

export const metadata: Metadata = {
  title: "Rates & Membership | Whispering Pines Golf Course",
  description:
    "View daily rates and membership options at Whispering Pines Golf Course. Affordable golf in the Chippewa Valley.",
};

const dailyRates = {
  weekday: [
    { description: "18 Holes with Cart", price: 45 },
    { description: "18 Holes Walking", price: 30 },
    { description: "9 Holes with Cart", price: 30 },
    { description: "9 Holes Walking", price: 20 },
  ],
  weekend: [
    { description: "18 Holes with Cart", price: 50 },
    { description: "18 Holes Walking", price: 35 },
    { description: "9 Holes with Cart", price: 35 },
    { description: "9 Holes Walking", price: 23 },
  ],
  twilight: [
    { description: "After 3pm (18 Holes w/Cart)", price: 35 },
    { description: "After 3pm (Walking)", price: 25 },
  ],
  special: [
    { description: "Senior Rate (62+) - 18 Holes w/Cart", price: 40 },
    { description: "Junior Rate (17 & Under) - 18 Holes w/Cart", price: 30 },
    { description: "Cart Rental (per person)", price: 15 },
    { description: "Pull Cart Rental", price: 5 },
  ],
};

const membershipTiers = [
  {
    name: "Single Membership",
    price: 850,
    period: "per year",
    features: [
      "Unlimited green fees",
      "Member guest rates",
      "Reciprocal course privileges",
      "Priority tee times",
      "Member events & tournaments",
      "10% pro shop discount",
    ],
    popular: false,
  },
  {
    name: "Family Membership",
    price: 1200,
    period: "per year",
    features: [
      "All Single membership benefits",
      "Spouse included",
      "Children under 18 included",
      "Junior golf programs",
      "Family events access",
      "15% pro shop discount",
    ],
    popular: true,
  },
  {
    name: "Senior Single (62+)",
    price: 700,
    period: "per year",
    features: [
      "Unlimited green fees",
      "Member guest rates",
      "Reciprocal course privileges",
      "Priority tee times",
      "Senior events & tournaments",
      "10% pro shop discount",
    ],
    popular: false,
  },
  {
    name: "Senior Couple (62+)",
    price: 1000,
    period: "per year",
    features: [
      "Both spouses included",
      "Unlimited green fees",
      "Member guest rates",
      "Reciprocal course privileges",
      "Senior events & tournaments",
      "15% pro shop discount",
    ],
    popular: false,
  },
];

const memberBenefits = [
  {
    title: "Reciprocal Course Access",
    description:
      "Enjoy playing privileges at partner courses throughout Wisconsin and beyond.",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
        />
      </svg>
    ),
  },
  {
    title: "Priority Booking",
    description:
      "Book tee times before the general public and secure your preferred playing times.",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
        />
      </svg>
    ),
  },
  {
    title: "Exclusive Events",
    description:
      "Access member-only tournaments, social events, and club championships.",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"
        />
      </svg>
    ),
  },
  {
    title: "Pro Shop Discounts",
    description:
      "Save on equipment, apparel, and accessories with your member discount.",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
        />
      </svg>
    ),
  },
];

export default function RatesPage() {
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
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Rates & Membership
            </h1>
            <p className="text-xl text-white/80 max-w-3xl mx-auto">
              Affordable golf in Wisconsin&apos;s beautiful Chippewa Valley. Choose from
              daily rates or become a member for unlimited play.
            </p>
          </div>
        </div>
      </section>

      {/* Daily Rates Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-[var(--pine-green)] mb-4">
              2026 Daily Rates
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              All rates are per person. Cart fees included where indicated.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Weekday Rates */}
            <div className="bg-[var(--cream)] rounded-2xl overflow-hidden">
              <div className="bg-[var(--pine-green)] text-white px-6 py-4">
                <h3 className="text-xl font-bold">Weekday</h3>
                <p className="text-white/70 text-sm">Monday - Thursday</p>
              </div>
              <div className="p-6 space-y-4">
                {dailyRates.weekday.map((rate, index) => (
                  <div key={index} className="flex justify-between items-center">
                    <span className="text-gray-700 text-sm">
                      {rate.description}
                    </span>
                    <span className="font-bold text-[var(--pine-green)]">
                      ${rate.price}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Weekend Rates */}
            <div className="bg-[var(--cream)] rounded-2xl overflow-hidden">
              <div className="bg-[var(--pine-green)] text-white px-6 py-4">
                <h3 className="text-xl font-bold">Weekend</h3>
                <p className="text-white/70 text-sm">Friday - Sunday</p>
              </div>
              <div className="p-6 space-y-4">
                {dailyRates.weekend.map((rate, index) => (
                  <div key={index} className="flex justify-between items-center">
                    <span className="text-gray-700 text-sm">
                      {rate.description}
                    </span>
                    <span className="font-bold text-[var(--pine-green)]">
                      ${rate.price}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Twilight Rates */}
            <div className="bg-[var(--cream)] rounded-2xl overflow-hidden">
              <div className="bg-[var(--gold)] text-[var(--pine-green-dark)] px-6 py-4">
                <h3 className="text-xl font-bold">Twilight</h3>
                <p className="text-[var(--pine-green-dark)]/70 text-sm">
                  After 3:00 PM
                </p>
              </div>
              <div className="p-6 space-y-4">
                {dailyRates.twilight.map((rate, index) => (
                  <div key={index} className="flex justify-between items-center">
                    <span className="text-gray-700 text-sm">
                      {rate.description}
                    </span>
                    <span className="font-bold text-[var(--pine-green)]">
                      ${rate.price}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Special Rates */}
            <div className="bg-[var(--cream)] rounded-2xl overflow-hidden">
              <div className="bg-[var(--pine-green-dark)] text-white px-6 py-4">
                <h3 className="text-xl font-bold">Special Rates</h3>
                <p className="text-white/70 text-sm">Seniors & Juniors</p>
              </div>
              <div className="p-6 space-y-4">
                {dailyRates.special.map((rate, index) => (
                  <div key={index} className="flex justify-between items-center">
                    <span className="text-gray-700 text-sm">
                      {rate.description}
                    </span>
                    <span className="font-bold text-[var(--pine-green)]">
                      ${rate.price}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="mt-8 text-center">
            <p className="text-gray-500 text-sm">
              * Rates subject to change. Contact us for group rates and special
              events.
            </p>
          </div>
        </div>
      </section>

      {/* Membership Section */}
      <section className="py-16 bg-[var(--cream)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-[var(--pine-green)] mb-4">
              2026 Membership Options
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Become a member and enjoy unlimited golf, exclusive events, and member
              perks all season long.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {membershipTiers.map((tier) => (
              <div
                key={tier.name}
                className={`bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-shadow relative ${
                  tier.popular ? "ring-2 ring-[var(--gold)]" : ""
                }`}
              >
                {tier.popular && (
                  <div className="absolute top-4 right-4 bg-[var(--gold)] text-[var(--pine-green-dark)] text-xs font-bold px-3 py-1 rounded-full">
                    POPULAR
                  </div>
                )}
                <div className="p-6">
                  <h3 className="text-xl font-bold text-[var(--pine-green)] mb-2">
                    {tier.name}
                  </h3>
                  <div className="flex items-baseline gap-1 mb-6">
                    <span className="text-4xl font-bold text-[var(--pine-green)]">
                      ${tier.price}
                    </span>
                    <span className="text-gray-500 text-sm">{tier.period}</span>
                  </div>
                  <ul className="space-y-3 mb-6">
                    {tier.features.map((feature, index) => (
                      <li key={index} className="flex items-start gap-2">
                        <svg
                          className="w-5 h-5 text-[var(--pine-green)] flex-shrink-0 mt-0.5"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path
                            fillRule="evenodd"
                            d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                            clipRule="evenodd"
                          />
                        </svg>
                        <span className="text-gray-600 text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="px-6 pb-6">
                  <a
                    href={`tel:${courseInfo.phone.replace(/[^\d]/g, "")}`}
                    className={`block w-full py-3 rounded-full font-semibold text-center transition-all ${
                      tier.popular
                        ? "btn-secondary"
                        : "bg-[var(--cream)] text-[var(--pine-green)] hover:bg-[var(--pine-green)] hover:text-white"
                    }`}
                  >
                    Inquire Now
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Member Benefits */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-[var(--pine-green)] mb-4">
              Member Benefits
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Membership at Whispering Pines comes with exclusive perks and
              privileges.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {memberBenefits.map((benefit) => (
              <div key={benefit.title} className="text-center">
                <div className="w-16 h-16 bg-[var(--cream)] rounded-2xl flex items-center justify-center text-[var(--pine-green)] mx-auto mb-4">
                  {benefit.icon}
                </div>
                <h3 className="text-lg font-bold text-[var(--pine-green)] mb-2">
                  {benefit.title}
                </h3>
                <p className="text-gray-600 text-sm">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-[var(--pine-green)] text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-6">Questions About Rates?</h2>
          <p className="text-xl text-white/80 mb-8">
            Contact us to learn more about our rates, membership options, or to book
            a tee time.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/booking"
              className="btn-secondary px-8 py-4 rounded-full font-semibold inline-flex items-center justify-center gap-2"
            >
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
              Call {courseInfo.phone}
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
