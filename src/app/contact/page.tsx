import { Metadata } from "next";
import Link from "next/link";
import { courseInfo } from "@/lib/course-data";

export const metadata: Metadata = {
  title: "Contact & Location | Whispering Pines Golf Course",
  description:
    "Find Whispering Pines Golf Course at 24700 County Highway X, Cadott, WI. Get directions, contact info, and hours of operation.",
};

const hours = [
  { day: "Monday", hours: "10:00 AM - Dusk" },
  { day: "Tuesday", hours: "10:00 AM - Dusk" },
  { day: "Wednesday", hours: "10:00 AM - Dusk" },
  { day: "Thursday", hours: "10:00 AM - Dusk" },
  { day: "Friday", hours: "10:00 AM - Dusk" },
  { day: "Saturday", hours: "7:00 AM - Dusk" },
  { day: "Sunday", hours: "7:00 AM - Dusk" },
];

const faq = [
  {
    question: "Do I need to book a tee time in advance?",
    answer:
      "While walk-ins are welcome when available, we recommend booking a tee time in advance, especially on weekends and holidays. You can book online through our ForeUp system or call the pro shop.",
  },
  {
    question: "What should I wear on the course?",
    answer:
      "We maintain a relaxed dress code. Collared shirts are preferred, and golf or athletic shorts are acceptable. Please no denim jeans, tank tops, or athletic shorts with pockets below the knee.",
  },
  {
    question: "Do you have rental clubs available?",
    answer:
      "Yes, we have rental clubs available in the pro shop. Please call ahead to ensure availability, especially during peak times.",
  },
  {
    question: "Can I bring my own food and beverages?",
    answer:
      "Outside food and beverages are not permitted on the course. We offer a full menu and beverage service at the clubhouse and on-course beverage cart.",
  },
  {
    question: "Is the course open year-round?",
    answer:
      "The course is typically open from April through October, weather permitting. Our indoor golf simulator is available year-round, Wednesday through Sunday during winter months.",
  },
  {
    question: "Do you offer lessons?",
    answer:
      "Yes, we offer individual and group lessons. Contact the pro shop for availability and pricing.",
  },
];

export default function ContactPage() {
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
            <h1 className="text-5xl md:text-6xl font-bold mb-6">Contact & Location</h1>
            <p className="text-xl text-white/80 max-w-3xl mx-auto">
              Find us in the heart of Wisconsin&apos;s beautiful Chippewa Valley, just 12
              miles east of Eau Claire on Highway 29.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Info & Map */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div>
              <h2 className="text-3xl font-bold text-[var(--pine-green)] mb-8">
                Get in Touch
              </h2>

              <div className="space-y-6 mb-8">
                <div className="flex items-start gap-4">
                  <div className="w-14 h-14 bg-[var(--cream)] rounded-2xl flex items-center justify-center flex-shrink-0">
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
                    <p className="text-gray-600">{courseInfo.address}</p>
                    <a
                      href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
                        courseInfo.address
                      )}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[var(--pine-green)] font-semibold text-sm hover:underline inline-flex items-center gap-1 mt-2"
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

                <div className="flex items-start gap-4">
                  <div className="w-14 h-14 bg-[var(--cream)] rounded-2xl flex items-center justify-center flex-shrink-0">
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
                      className="text-gray-600 hover:text-[var(--pine-green)] transition-colors text-lg"
                    >
                      {courseInfo.phone}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-14 h-14 bg-[var(--cream)] rounded-2xl flex items-center justify-center flex-shrink-0">
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
                      className="text-gray-600 hover:text-[var(--pine-green)] transition-colors"
                    >
                      {courseInfo.email}
                    </a>
                    <br />
                    <a
                      href={`mailto:${courseInfo.alternateEmail}`}
                      className="text-gray-600 hover:text-[var(--pine-green)] transition-colors"
                    >
                      {courseInfo.alternateEmail}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-14 h-14 bg-[var(--cream)] rounded-2xl flex items-center justify-center flex-shrink-0">
                    <svg
                      className="w-7 h-7 text-[var(--pine-green)]"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M18.77,7.46H14.5v-1.9c0-.9.6-1.1,1-1.1h3V.5h-4.33C10.24.5,9.5,3.44,9.5,5.32v2.15h-3v4h3v12h5v-12h3.85l.42-4Z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-bold text-[var(--pine-green)] text-lg mb-1">
                      Follow Us
                    </h3>
                    <a
                      href="https://www.facebook.com/WhisperingPinesGolfCourse"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-600 hover:text-[var(--pine-green)] transition-colors inline-flex items-center gap-2"
                    >
                      Facebook
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
              </div>

              <Link
                href="/booking"
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
                    d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                  />
                </svg>
                Book Tee Time Online
              </Link>
            </div>

            {/* Map */}
            <div className="bg-[var(--cream)] rounded-3xl overflow-hidden h-[500px]">
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
          </div>
        </div>
      </section>

      {/* Hours Section */}
      <section className="py-16 bg-[var(--cream)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Course Hours */}
            <div className="bg-white rounded-2xl p-8 shadow-sm">
              <h2 className="text-2xl font-bold text-[var(--pine-green)] mb-6 flex items-center gap-3">
                <svg
                  className="w-7 h-7 text-[var(--gold)]"
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
                Course Hours (In Season)
              </h2>
              <div className="space-y-3">
                {hours.map((item) => (
                  <div
                    key={item.day}
                    className="flex justify-between items-center py-2 border-b border-gray-100 last:border-0"
                  >
                    <span className="font-medium text-gray-700">{item.day}</span>
                    <span className="text-[var(--pine-green)]">{item.hours}</span>
                  </div>
                ))}
              </div>
              <p className="text-gray-500 text-sm mt-4">
                * Hours may vary based on weather and daylight. Course typically open
                April through October.
              </p>
            </div>

            {/* Restaurant & Simulator Hours */}
            <div className="space-y-6">
              <div className="bg-white rounded-2xl p-8 shadow-sm">
                <h2 className="text-2xl font-bold text-[var(--pine-green)] mb-4 flex items-center gap-3">
                  <svg
                    className="w-7 h-7 text-[var(--gold)]"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 6v6m0 0v6m0-6h6m-6 0H6"
                    />
                  </svg>
                  Restaurant & Bar
                </h2>
                <p className="text-gray-600">
                  <span className="font-semibold text-[var(--pine-green)]">
                    Monday - Sunday:
                  </span>{" "}
                  10:00 AM - Close
                </p>
                <p className="text-gray-500 text-sm mt-2">
                  Full menu available. On-course beverage service during play.
                </p>
              </div>

              <div className="bg-white rounded-2xl p-8 shadow-sm">
                <h2 className="text-2xl font-bold text-[var(--pine-green)] mb-4 flex items-center gap-3">
                  <svg
                    className="w-7 h-7 text-[var(--gold)]"
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
                  Indoor Simulator (Winter)
                </h2>
                <p className="text-gray-600">
                  <span className="font-semibold text-[var(--pine-green)]">
                    Wednesday - Sunday:
                  </span>{" "}
                  10:00 AM - Close
                </p>
                <p className="text-gray-500 text-sm mt-2">
                  Play year-round! $20/30 min or $40/hour.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Directions */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-[var(--pine-green)] mb-8 text-center">
            Getting Here
          </h2>
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="bg-[var(--cream)] rounded-2xl p-6">
              <h3 className="font-bold text-[var(--pine-green)] mb-3 flex items-center gap-2">
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
                    d="M17 8l4 4m0 0l-4 4m4-4H3"
                  />
                </svg>
                From Eau Claire
              </h3>
              <p className="text-gray-600 text-sm">
                Head east on Highway 29 for approximately 12 miles. Take the County
                Highway X exit and turn right. The course will be on your left in about
                1.5 miles.
              </p>
            </div>
            <div className="bg-[var(--cream)] rounded-2xl p-6">
              <h3 className="font-bold text-[var(--pine-green)] mb-3 flex items-center gap-2">
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
                    d="M7 16l-4-4m0 0l4-4m-4 4h18"
                  />
                </svg>
                From Cadott
              </h3>
              <p className="text-gray-600 text-sm">
                Head west on County Highway X for approximately 1.5 miles. The course
                will be on your right.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-[var(--cream)]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-[var(--pine-green)] mb-8 text-center">
            Frequently Asked Questions
          </h2>
          <div className="space-y-4">
            {faq.map((item, index) => (
              <div key={index} className="bg-white rounded-2xl p-6 shadow-sm">
                <h3 className="font-bold text-[var(--pine-green)] mb-2">
                  {item.question}
                </h3>
                <p className="text-gray-600">{item.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-[var(--pine-green)] text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Tee Off?</h2>
          <p className="text-xl text-white/80 mb-8">
            We look forward to welcoming you to Whispering Pines Golf Course.
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
