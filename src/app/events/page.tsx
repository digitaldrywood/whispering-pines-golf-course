import { Metadata } from "next";
import Link from "next/link";
import { courseInfo } from "@/lib/course-data";

export const metadata: Metadata = {
  title: "Events & Leagues | Whispering Pines Golf Course",
  description:
    "Join our golf leagues, tournaments, and events at Whispering Pines. Host your corporate outing or private event at our beautiful facility.",
};

const leagues = [
  {
    name: "Monday Night Men's League",
    day: "Monday",
    time: "Evening",
    description:
      "Weekly 9-hole league for men of all skill levels. Great way to start your week on the course.",
  },
  {
    name: "Tuesday Night Men's League & Teams",
    day: "Tuesday",
    time: "Evening",
    description:
      "Competitive team format for men. Individual and team competitions throughout the season.",
  },
  {
    name: "Tuesday Night Lake Lover's",
    day: "Tuesday",
    time: "Evening",
    description:
      "A fun, relaxed league perfect for those who love both golf and the lakeside atmosphere.",
  },
  {
    name: "Wednesday Night Men's League",
    day: "Wednesday",
    time: "Evening",
    description:
      "Weekly 9-hole league for men. Mid-week competition to keep your game sharp.",
  },
  {
    name: "OWL Wednesday Night Men's League",
    day: "Wednesday",
    time: "Evening",
    description:
      "Special Wednesday evening league with unique format and great camaraderie.",
  },
  {
    name: "Thursday Night Ladies League",
    day: "Thursday",
    time: "Evening",
    description:
      "Weekly 9-hole league for women. Fun, friendly competition with a focus on improving your game.",
  },
  {
    name: "Thursday Night 4 Person Scramble League",
    day: "Thursday",
    time: "Evening",
    description:
      "Team scramble format perfect for groups of friends. Low-pressure, high-fun format for all skill levels.",
  },
];

const events = [
  {
    name: "Club Championship",
    date: "Annual",
    description:
      "Our premier event of the year. Compete for the title of Club Champion across multiple flights.",
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
    name: "Pat Schroeder Hospice Fundraiser",
    date: "Annual",
    description:
      "A meaningful charity golf event supporting Hospice in memory of Pat Schroeder. Golf for a great cause and support our community.",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
        />
      </svg>
    ),
  },
  {
    name: "Member-Guest Tournament",
    date: "Summer",
    description:
      "Invite your favorite golfing buddy for this annual two-person team event. Great prizes and camaraderie.",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
        />
      </svg>
    ),
  },
  {
    name: "Junior Golf Programs",
    date: "Summer",
    description:
      "Supporting the next generation of golfers through The First Tee program. Teaching life skills through golf.",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
        />
      </svg>
    ),
  },
];

const outingFeatures = [
  {
    title: "Custom Packages",
    description:
      "Tailored golf packages to fit your group size and budget. From simple tee times to full-day events.",
  },
  {
    title: "Food & Beverage",
    description:
      "On-course beverage service and post-round meals. Full menu available in our clubhouse.",
  },
  {
    title: "Tournament Support",
    description:
      "Scoring, signage, contests, and prizes. We handle the details so you can enjoy the event.",
  },
  {
    title: "Professional Staff",
    description:
      "Dedicated event coordinator to ensure your outing runs smoothly from start to finish.",
  },
];

export default function EventsPage() {
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
            <h1 className="text-5xl md:text-6xl font-bold mb-6">Events & Leagues</h1>
            <p className="text-xl text-white/80 max-w-3xl mx-auto">
              Join our vibrant golf community with leagues for every skill level,
              exciting tournaments, and memorable events throughout the season.
            </p>
          </div>
        </div>
      </section>

      {/* Leagues Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-[var(--pine-green)] mb-4">
              Golf Leagues
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Our leagues offer weekly competition, camaraderie, and a great way to
              improve your game. All skill levels welcome.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {leagues.map((league) => (
              <div
                key={league.name}
                className="bg-[var(--cream)] rounded-2xl p-8 hover:shadow-lg transition-shadow"
              >
                <div className="flex items-start justify-between mb-4">
                  <h3 className="text-2xl font-bold text-[var(--pine-green)]">
                    {league.name}
                  </h3>
                  <div className="bg-[var(--pine-green)] text-white px-4 py-2 rounded-full text-sm font-semibold">
                    {league.day}
                  </div>
                </div>
                <div className="flex items-center gap-2 text-[var(--gold)] font-semibold mb-4">
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
                      d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                  <span>Starts at {league.time}</span>
                </div>
                <p className="text-gray-600">{league.description}</p>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <a
              href={`tel:${courseInfo.phone.replace(/[^\d]/g, "")}`}
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
                  d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                />
              </svg>
              Join a League - Call Today
            </a>
          </div>
        </div>
      </section>

      {/* Events Section */}
      <section className="py-16 bg-[var(--cream)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-[var(--pine-green)] mb-4">
              Tournaments & Events
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              From our annual club championship to charity fundraisers, we host
              events that bring golfers together for competition and community.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {events.map((event) => (
              <div
                key={event.name}
                className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-lg transition-shadow"
              >
                <div className="flex items-start gap-4">
                  <div className="w-14 h-14 bg-[var(--pine-green)]/10 rounded-2xl flex items-center justify-center text-[var(--pine-green)] flex-shrink-0">
                    {event.icon}
                  </div>
                  <div>
                    <div className="flex items-center gap-3 mb-2">
                      <h3 className="text-xl font-bold text-[var(--pine-green)]">
                        {event.name}
                      </h3>
                      <span className="bg-[var(--gold)]/20 text-[var(--gold)] px-3 py-1 rounded-full text-xs font-semibold">
                        {event.date}
                      </span>
                    </div>
                    <p className="text-gray-600">{event.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Corporate/Private Outings */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-[var(--pine-green)] mb-6">
                Host Your Event at Whispering Pines
              </h2>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                Whether you&apos;re planning a corporate golf outing, charity
                tournament, bachelor party, or family reunion, our beautiful course
                and dedicated staff will make your event unforgettable.
              </p>

              <div className="grid sm:grid-cols-2 gap-6 mb-8">
                {outingFeatures.map((feature) => (
                  <div key={feature.title}>
                    <h3 className="font-bold text-[var(--pine-green)] mb-2">
                      {feature.title}
                    </h3>
                    <p className="text-gray-600 text-sm">{feature.description}</p>
                  </div>
                ))}
              </div>

              <div className="flex flex-wrap gap-4">
                <a
                  href={`mailto:${courseInfo.email}?subject=Event Inquiry`}
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
                  Request Event Info
                </a>
                <a
                  href={`tel:${courseInfo.phone.replace(/[^\d]/g, "")}`}
                  className="px-8 py-4 rounded-full font-semibold border-2 border-[var(--pine-green)] text-[var(--pine-green)] hover:bg-[var(--pine-green)] hover:text-white transition-all inline-flex items-center gap-2"
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
                  Call to Discuss
                </a>
              </div>
            </div>

            {/* Event Image Placeholder */}
            <div className="bg-[var(--cream)] rounded-3xl p-8 aspect-square flex items-center justify-center">
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
                      d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                    />
                  </svg>
                </div>
                <p className="text-[var(--pine-green)] font-semibold">
                  Your Event Awaits
                </p>
                <p className="text-gray-500 text-sm mt-2">
                  Beautiful course, professional staff, memorable experiences
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-[var(--pine-green)] text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Get Involved?</h2>
          <p className="text-xl text-white/80 mb-8">
            Join a league, sign up for an event, or book your next round at
            Whispering Pines.
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
              Call {courseInfo.phone}
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
