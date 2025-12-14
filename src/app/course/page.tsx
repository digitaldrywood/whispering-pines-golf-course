import Link from "next/link";
import { Metadata } from "next";
import {
  holes,
  frontNine,
  backNine,
  getTotalPar,
  getTotalYardage,
  courseInfo,
  HoleData,
} from "@/lib/course-data";
import { images, getHoleImage } from "@/lib/images";

export const metadata: Metadata = {
  title: "The Course | Whispering Pines Golf Course",
  description:
    "Explore all 18 holes at Whispering Pines Golf Course. Featuring the longest par 5 in the Chippewa Valley and our signature hole #8.",
};

function HoleCard({ hole }: { hole: HoleData }) {
  const holeImage = getHoleImage(hole.number);
  return (
    <Link
      href={`/course/hole/${hole.number}`}
      className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all hover:-translate-y-1"
    >
      {/* Hole Image */}
      {holeImage && (
        <div className="relative h-40 overflow-hidden">
          <img
            src={holeImage.thumbnail}
            alt={`Hole ${hole.number}`}
            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
          <div className="absolute top-3 left-3 w-12 h-12 bg-[var(--pine-green)] rounded-full flex items-center justify-center text-white font-bold text-xl shadow-lg">
            {hole.number}
          </div>
          {hole.signature && (
            <span className="absolute top-3 right-3 bg-[var(--gold)] text-[var(--pine-green-dark)] text-xs font-bold px-3 py-1 rounded-full shadow-lg">
              SIGNATURE
            </span>
          )}
          <div className="absolute bottom-3 left-3 flex gap-4 text-white">
            <div>
              <div className="text-xs uppercase tracking-wider text-white/70">Par</div>
              <div className="text-xl font-bold">{hole.par}</div>
            </div>
            <div>
              <div className="text-xs uppercase tracking-wider text-white/70">Yards</div>
              <div className="text-xl font-bold">{hole.yardage.white || hole.yardage.tips}</div>
            </div>
          </div>
        </div>
      )}

      {/* Hole Details */}
      <div className="p-5">
        <p className="text-gray-600 text-sm line-clamp-2 mb-3">{hole.description}</p>
        <div className="text-[var(--pine-green)] font-semibold text-sm group-hover:translate-x-2 transition-transform inline-flex items-center gap-1">
          View Details
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
              d="M9 5l7 7-7 7"
            />
          </svg>
        </div>
      </div>
    </Link>
  );
}

function Scorecard({
  holes,
  title,
}: {
  holes: HoleData[];
  title: string;
}) {
  return (
    <div className="bg-white rounded-xl sm:rounded-2xl overflow-hidden shadow-lg">
      <div className="bg-[var(--pine-green)] text-white px-4 sm:px-6 py-3 sm:py-4 flex items-center justify-between">
        <h3 className="text-lg sm:text-xl font-bold">{title}</h3>
        <span className="text-xs sm:text-sm text-white/70 sm:hidden">Scroll &rarr;</span>
      </div>
      <div className="overflow-x-auto">
        <table className="w-full min-w-[600px]">
          <thead>
            <tr className="bg-[var(--cream)]">
              <th className="px-2 sm:px-4 py-2 sm:py-3 text-left text-xs sm:text-sm font-semibold text-gray-600 sticky left-0 bg-[var(--cream)] z-10">
                Hole
              </th>
              {holes.map((hole) => (
                <th
                  key={hole.number}
                  className="px-2 sm:px-3 py-2 sm:py-3 text-center text-xs sm:text-sm font-semibold text-gray-600 min-w-[40px] sm:min-w-[50px]"
                >
                  {hole.number}
                </th>
              ))}
              <th className="px-2 sm:px-4 py-2 sm:py-3 text-center text-xs sm:text-sm font-semibold text-[var(--pine-green)] bg-[var(--sand)]">
                Total
              </th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-b border-gray-100">
              <td className="px-2 sm:px-4 py-2 sm:py-3 text-xs sm:text-sm font-medium text-gray-700 sticky left-0 bg-white z-10">
                Par
              </td>
              {holes.map((hole) => (
                <td
                  key={hole.number}
                  className="px-2 sm:px-3 py-2 sm:py-3 text-center text-xs sm:text-sm text-gray-600"
                >
                  {hole.par}
                </td>
              ))}
              <td className="px-2 sm:px-4 py-2 sm:py-3 text-center text-xs sm:text-sm font-bold text-[var(--pine-green)] bg-[var(--cream)]">
                {getTotalPar(holes)}
              </td>
            </tr>
            <tr className="border-b border-gray-100">
              <td className="px-2 sm:px-4 py-2 sm:py-3 text-xs sm:text-sm font-medium text-gray-700 sticky left-0 bg-white z-10">
                White
              </td>
              {holes.map((hole) => (
                <td
                  key={hole.number}
                  className="px-2 sm:px-3 py-2 sm:py-3 text-center text-xs sm:text-sm text-gray-600"
                >
                  {hole.yardage.white || "-"}
                </td>
              ))}
              <td className="px-2 sm:px-4 py-2 sm:py-3 text-center text-xs sm:text-sm font-bold text-[var(--pine-green)] bg-[var(--cream)]">
                {getTotalYardage(holes, "white")}
              </td>
            </tr>
            {holes.some((h) => h.yardage.tips) && (
              <tr>
                <td className="px-2 sm:px-4 py-2 sm:py-3 text-xs sm:text-sm font-medium text-gray-700 sticky left-0 bg-white z-10">
                  Tips
                </td>
                {holes.map((hole) => (
                  <td
                    key={hole.number}
                    className="px-2 sm:px-3 py-2 sm:py-3 text-center text-xs sm:text-sm text-gray-600"
                  >
                    {hole.yardage.tips || "-"}
                  </td>
                ))}
                <td className="px-2 sm:px-4 py-2 sm:py-3 text-center text-xs sm:text-sm font-bold text-[var(--pine-green)] bg-[var(--cream)]">
                  {getTotalYardage(holes, "tips")}
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default function CoursePage() {
  return (
    <div className="pt-16 sm:pt-20">
      {/* Hero Section */}
      <section className="relative py-16 sm:py-24 bg-[var(--pine-green)]">
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
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4 sm:mb-6">The Course</h1>
            <p className="text-base sm:text-xl text-white/80 max-w-3xl mx-auto mb-6 sm:mb-8">
              {courseInfo.description}
            </p>
            <div className="flex flex-wrap justify-center gap-6 sm:gap-8">
              <div className="text-center">
                <div className="text-3xl sm:text-4xl font-bold text-[var(--gold)]">18</div>
                <div className="text-white/70 text-xs sm:text-sm uppercase tracking-wider">
                  Holes
                </div>
              </div>
              <div className="text-center">
                <div className="text-3xl sm:text-4xl font-bold text-[var(--gold)]">
                  {getTotalPar(holes)}
                </div>
                <div className="text-white/70 text-xs sm:text-sm uppercase tracking-wider">
                  Par
                </div>
              </div>
              <div className="text-center">
                <div className="text-3xl sm:text-4xl font-bold text-[var(--gold)]">
                  {getTotalYardage(holes).toLocaleString()}
                </div>
                <div className="text-white/70 text-xs sm:text-sm uppercase tracking-wider">
                  Yards
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Course Map Section */}
      <section className="py-10 sm:py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl font-bold text-[var(--pine-green)] mb-6 sm:mb-8 text-center">
            Course Map & Scorecard
          </h2>
          <div className="grid lg:grid-cols-2 gap-4 sm:gap-8 mb-8 sm:mb-12">
            <div className="bg-[var(--cream)] rounded-xl sm:rounded-2xl p-3 sm:p-4 shadow-lg">
              <h3 className="text-base sm:text-lg font-semibold text-[var(--pine-green)] mb-3 sm:mb-4 text-center">Course Layout</h3>
              <img
                src={images.courseMap.outside}
                alt="Whispering Pines Golf Course Map"
                className="w-full h-auto rounded-lg"
              />
            </div>
            <div className="bg-[var(--cream)] rounded-xl sm:rounded-2xl p-3 sm:p-4 shadow-lg">
              <h3 className="text-base sm:text-lg font-semibold text-[var(--pine-green)] mb-3 sm:mb-4 text-center">Scorecard</h3>
              <img
                src={images.courseMap.inside}
                alt="Whispering Pines Scorecard"
                className="w-full h-auto rounded-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Scorecard Section */}
      <section className="py-10 sm:py-16 bg-[var(--cream)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl font-bold text-[var(--pine-green)] mb-6 sm:mb-8 text-center">
            Detailed Scorecard
          </h2>
          <div className="space-y-4 sm:space-y-8">
            <Scorecard holes={frontNine} title="Front Nine" />
            <Scorecard holes={backNine} title="Back Nine" />
          </div>
        </div>
      </section>

      {/* Front Nine */}
      <section className="py-10 sm:py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-3 sm:gap-4 mb-8 sm:mb-12">
            <div className="w-12 h-12 sm:w-16 sm:h-16 bg-[var(--pine-green)] rounded-full flex items-center justify-center flex-shrink-0">
              <span className="text-white text-lg sm:text-2xl font-bold">1-9</span>
            </div>
            <div>
              <h2 className="text-2xl sm:text-3xl font-bold text-[var(--pine-green)]">
                Front Nine
              </h2>
              <p className="text-gray-600 text-sm sm:text-base">
                Par {getTotalPar(frontNine)} | {getTotalYardage(frontNine)} yards
              </p>
            </div>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            {frontNine.map((hole) => (
              <HoleCard key={hole.number} hole={hole} />
            ))}
          </div>
        </div>
      </section>

      {/* Back Nine */}
      <section className="py-10 sm:py-16 bg-[var(--cream)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-3 sm:gap-4 mb-8 sm:mb-12">
            <div className="w-12 h-12 sm:w-16 sm:h-16 bg-[var(--pine-green)] rounded-full flex items-center justify-center flex-shrink-0">
              <span className="text-white text-lg sm:text-2xl font-bold">10-18</span>
            </div>
            <div>
              <h2 className="text-2xl sm:text-3xl font-bold text-[var(--pine-green)]">
                Back Nine
              </h2>
              <p className="text-gray-600 text-sm sm:text-base">
                Par {getTotalPar(backNine)} | {getTotalYardage(backNine)} yards
              </p>
            </div>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            {backNine.map((hole) => (
              <HoleCard key={hole.number} hole={hole} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 sm:py-16 bg-[var(--pine-green)] text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4 sm:mb-6">Ready to Take on the Course?</h2>
          <p className="text-base sm:text-xl text-white/80 mb-6 sm:mb-8">
            Book your tee time today and experience the challenge and beauty of
            Whispering Pines.
          </p>
          <Link
            href="/booking"
            className="btn-secondary px-6 sm:px-8 py-3.5 sm:py-4 rounded-full font-semibold text-base sm:text-lg inline-flex items-center gap-2"
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
