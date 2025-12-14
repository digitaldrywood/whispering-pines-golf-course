import Link from "next/link";
import { notFound } from "next/navigation";
import { Metadata } from "next";
import { holes } from "@/lib/course-data";
import { getHoleImage } from "@/lib/images";

interface PageProps {
  params: Promise<{ number: string }>;
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const resolvedParams = await params;
  const holeNumber = parseInt(resolvedParams.number);
  const hole = holes.find((h) => h.number === holeNumber);

  if (!hole) {
    return {
      title: "Hole Not Found | Whispering Pines Golf Course",
    };
  }

  return {
    title: `Hole ${hole.number} - Par ${hole.par} | Whispering Pines Golf Course`,
    description: hole.description,
  };
}

export function generateStaticParams() {
  return holes.map((hole) => ({
    number: hole.number.toString(),
  }));
}

export default async function HolePage({ params }: PageProps) {
  const resolvedParams = await params;
  const holeNumber = parseInt(resolvedParams.number);
  const hole = holes.find((h) => h.number === holeNumber);

  if (!hole) {
    notFound();
  }

  const prevHole = holes.find((h) => h.number === holeNumber - 1);
  const nextHole = holes.find((h) => h.number === holeNumber + 1);
  const holeImages = getHoleImage(holeNumber);

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="relative py-16 bg-[var(--pine-green)]">
        <div className="absolute inset-0 opacity-10">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
            }}
          />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          {/* Breadcrumb */}
          <nav className="mb-8">
            <ol className="flex items-center gap-2 text-white/70 text-sm">
              <li>
                <Link href="/" className="hover:text-white transition-colors">
                  Home
                </Link>
              </li>
              <li>/</li>
              <li>
                <Link href="/course" className="hover:text-white transition-colors">
                  Course
                </Link>
              </li>
              <li>/</li>
              <li className="text-white">Hole {hole.number}</li>
            </ol>
          </nav>

          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-8">
            <div className="text-white">
              {hole.signature && (
                <span className="inline-flex items-center gap-2 bg-[var(--gold)] text-[var(--pine-green-dark)] text-sm font-bold px-4 py-2 rounded-full mb-4">
                  <svg
                    className="w-4 h-4"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                  Signature Hole
                </span>
              )}
              <h1 className="text-6xl md:text-7xl font-bold mb-4">
                Hole {hole.number}
              </h1>
              <p className="text-xl text-white/80">{hole.description}</p>
            </div>

            {/* Stats Cards */}
            <div className="flex gap-4">
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 text-center min-w-[100px]">
                <div className="text-white/70 text-sm uppercase tracking-wider mb-1">
                  Par
                </div>
                <div className="text-4xl font-bold text-[var(--gold)]">
                  {hole.par}
                </div>
              </div>
              {hole.yardage.white && (
                <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 text-center min-w-[100px]">
                  <div className="text-white/70 text-sm uppercase tracking-wider mb-1">
                    White
                  </div>
                  <div className="text-4xl font-bold text-white">
                    {hole.yardage.white}
                  </div>
                </div>
              )}
              {hole.yardage.tips && (
                <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 text-center min-w-[100px]">
                  <div className="text-white/70 text-sm uppercase tracking-wider mb-1">
                    Tips
                  </div>
                  <div className="text-4xl font-bold text-white">
                    {hole.yardage.tips}
                  </div>
                </div>
              )}
              {hole.yardage.blue && (
                <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 text-center min-w-[100px]">
                  <div className="text-white/70 text-sm uppercase tracking-wider mb-1">
                    Blue
                  </div>
                  <div className="text-4xl font-bold text-white">
                    {hole.yardage.blue}
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Hole Images Section */}
      {holeImages && (
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-8">
              {/* Hole Photo */}
              <div>
                <h2 className="text-2xl font-bold text-[var(--pine-green)] mb-6 flex items-center gap-3">
                  <div className="w-10 h-10 bg-[var(--cream)] rounded-full flex items-center justify-center">
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
                        d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
                      />
                    </svg>
                  </div>
                  Hole View
                </h2>
                <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-lg">
                  <img
                    src={holeImages.photo}
                    alt={`Hole ${hole.number} at Whispering Pines Golf Course`}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>

              {/* Hole Layout Map */}
              <div>
                <h2 className="text-2xl font-bold text-[var(--pine-green)] mb-6 flex items-center gap-3">
                  <div className="w-10 h-10 bg-[var(--gold)]/20 rounded-full flex items-center justify-center">
                    <svg
                      className="w-5 h-5 text-[var(--gold)]"
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
                  </div>
                  Hole Layout
                </h2>
                <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-lg bg-white">
                  <img
                    src={holeImages.layout}
                    alt={`Hole ${hole.number} layout map`}
                    className="w-full h-full object-contain"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Details Section */}
      <section className="py-16 bg-[var(--cream)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Features */}
            <div>
              <h2 className="text-2xl font-bold text-[var(--pine-green)] mb-6 flex items-center gap-3">
                <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center">
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
                      d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"
                    />
                  </svg>
                </div>
                Hole Features
              </h2>
              <ul className="space-y-3">
                {hole.features.map((feature, index) => (
                  <li key={index} className="flex items-start gap-3">
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
                    <span className="text-gray-700">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Tips */}
            <div>
              <h2 className="text-2xl font-bold text-[var(--pine-green)] mb-6 flex items-center gap-3">
                <div className="w-10 h-10 bg-[var(--gold)]/20 rounded-full flex items-center justify-center">
                  <svg
                    className="w-5 h-5 text-[var(--gold)]"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
                    />
                  </svg>
                </div>
                Playing Tips
              </h2>
              <div className="bg-white rounded-2xl p-6 shadow-sm">
                <p className="text-gray-700 leading-relaxed">{hole.tips}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Navigation */}
      <section className="py-8 bg-[var(--cream)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center">
            {prevHole ? (
              <Link
                href={`/course/hole/${prevHole.number}`}
                className="flex items-center gap-3 text-[var(--pine-green)] hover:text-[var(--pine-green-dark)] transition-colors group"
              >
                <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-sm group-hover:shadow-md transition-shadow">
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
                      d="M15 19l-7-7 7-7"
                    />
                  </svg>
                </div>
                <div>
                  <div className="text-sm text-gray-500">Previous</div>
                  <div className="font-semibold">Hole {prevHole.number}</div>
                </div>
              </Link>
            ) : (
              <div />
            )}

            <Link
              href="/course"
              className="btn-primary px-6 py-3 rounded-full font-semibold inline-flex items-center gap-2"
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
                  d="M4 6h16M4 10h16M4 14h16M4 18h16"
                />
              </svg>
              All Holes
            </Link>

            {nextHole ? (
              <Link
                href={`/course/hole/${nextHole.number}`}
                className="flex items-center gap-3 text-[var(--pine-green)] hover:text-[var(--pine-green-dark)] transition-colors group"
              >
                <div>
                  <div className="text-sm text-gray-500 text-right">Next</div>
                  <div className="font-semibold">Hole {nextHole.number}</div>
                </div>
                <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-sm group-hover:shadow-md transition-shadow">
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
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </div>
              </Link>
            ) : (
              <div />
            )}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-[var(--pine-green)] text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Play Hole {hole.number}?</h2>
          <p className="text-lg text-white/80 mb-8">
            Book your tee time and experience this {hole.signature ? "signature" : "challenging"} hole for yourself.
          </p>
          <a
            href="https://foreupsoftware.com/index.php/booking/19498/1021#/teetimes"
            target="_blank"
            rel="noopener noreferrer"
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
            Book Tee Time
          </a>
        </div>
      </section>
    </div>
  );
}
