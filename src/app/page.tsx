import Link from "next/link";
import {
  courseInfo,
  holes,
  amenities,
  simulatorInfo,
  getTotalPar,
  getTotalYardage,
} from "@/lib/course-data";
import { images } from "@/lib/images";
import ImageSlider from "@/components/ImageSlider";

function HeroSection() {
  return (
    <section className="relative h-[100svh] min-h-[600px] sm:min-h-[700px] flex items-center justify-center overflow-hidden group">
      {/* Background Image Slider */}
      <ImageSlider autoPlayInterval={6000} />
      <div className="absolute inset-0 hero-overlay z-10" />

      {/* Animated pine trees silhouette - hidden on mobile */}
      <div className="absolute bottom-0 left-0 right-0 h-24 sm:h-32 opacity-20 z-10 hidden sm:block">
        <svg viewBox="0 0 1440 120" fill="currentColor" className="text-black w-full h-full">
          <path d="M0,120 L0,80 L30,80 L45,40 L60,80 L90,80 L90,120 Z M100,120 L100,60 L130,60 L150,20 L170,60 L200,60 L200,120 Z M220,120 L220,70 L250,70 L270,30 L290,70 L320,70 L320,120 Z M350,120 L350,85 L380,85 L395,50 L410,85 L440,85 L440,120 Z M480,120 L480,65 L510,65 L530,25 L550,65 L580,65 L580,120 Z M620,120 L620,75 L650,75 L670,35 L690,75 L720,75 L720,120 Z M760,120 L760,80 L790,80 L805,45 L820,80 L850,80 L850,120 Z M890,120 L890,60 L920,60 L940,15 L960,60 L990,60 L990,120 Z M1030,120 L1030,70 L1060,70 L1080,30 L1100,70 L1130,70 L1130,120 Z M1170,120 L1170,85 L1200,85 L1215,50 L1230,85 L1260,85 L1260,120 Z M1300,120 L1300,65 L1330,65 L1350,20 L1370,65 L1400,65 L1400,120 Z M1440,120 L1440,75 L1410,75 L1395,40 L1380,75 L1350,75 Z" />
        </svg>
      </div>

      {/* Content */}
      <div className="relative z-20 text-center text-white px-4 sm:px-6 max-w-5xl mx-auto pt-16 sm:pt-0">
        <p className="text-[var(--gold)] text-sm sm:text-lg md:text-xl tracking-[0.2em] sm:tracking-[0.3em] uppercase mb-3 sm:mb-4 animate-fade-in">
          Welcome to
        </p>
        <h1 className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-bold mb-4 sm:mb-6 animate-fade-in animate-delay-100">
          Whispering Pines
        </h1>
        <p className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-light italic mb-6 sm:mb-8 animate-fade-in animate-delay-200">
          {courseInfo.tagline}
        </p>
        <p className="text-base sm:text-lg md:text-xl text-white/80 max-w-2xl mx-auto mb-8 sm:mb-12 animate-fade-in animate-delay-300 px-2">
          Experience premier 18-hole golf in Wisconsin&apos;s beautiful Chippewa Valley,
          just 12 miles east of Eau Claire.
        </p>
        <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center animate-fade-in animate-delay-300 px-4 sm:px-0">
          <a
            href="https://foreupsoftware.com/index.php/booking/19498/1021#/teetimes"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-secondary px-6 sm:px-8 py-3.5 sm:py-4 rounded-full font-semibold text-base sm:text-lg inline-flex items-center justify-center gap-2"
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
            Book Your Tee Time
          </a>
          <Link
            href="/course"
            className="px-6 sm:px-8 py-3.5 sm:py-4 rounded-full font-semibold text-base sm:text-lg border-2 border-white text-white hover:bg-white hover:text-[var(--pine-green)] transition-all inline-flex items-center justify-center gap-2"
          >
            Explore the Course
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
          </Link>
        </div>
      </div>

      {/* Scroll indicator - hidden on very small screens */}
      <div className="absolute bottom-6 sm:bottom-8 left-1/2 -translate-x-1/2 animate-bounce z-20 hidden sm:block">
        <svg
          className="w-6 h-6 sm:w-8 sm:h-8 text-white/50"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19 14l-7 7m0 0l-7-7m7 7V3"
          />
        </svg>
      </div>
    </section>
  );
}

function CourseHighlights() {
  return (
    <section className="py-12 sm:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Stats Bar */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-8 mb-12 sm:mb-20">
          <div className="text-center p-4 sm:p-0">
            <div className="text-3xl sm:text-5xl font-bold text-[var(--pine-green)] mb-1 sm:mb-2">18</div>
            <div className="text-gray-600 uppercase tracking-wider text-xs sm:text-sm">Holes</div>
          </div>
          <div className="text-center p-4 sm:p-0">
            <div className="text-3xl sm:text-5xl font-bold text-[var(--pine-green)] mb-1 sm:mb-2">
              {getTotalPar(holes)}
            </div>
            <div className="text-gray-600 uppercase tracking-wider text-xs sm:text-sm">Par</div>
          </div>
          <div className="text-center p-4 sm:p-0">
            <div className="text-3xl sm:text-5xl font-bold text-[var(--pine-green)] mb-1 sm:mb-2">
              {getTotalYardage(holes).toLocaleString()}
            </div>
            <div className="text-gray-600 uppercase tracking-wider text-xs sm:text-sm">Yards</div>
          </div>
          <div className="text-center p-4 sm:p-0">
            <div className="text-3xl sm:text-5xl font-bold text-[var(--pine-green)] mb-1 sm:mb-2">50+</div>
            <div className="text-gray-600 uppercase tracking-wider text-xs sm:text-sm">Years</div>
          </div>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center">
          {/* Text Content */}
          <div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[var(--pine-green)] mb-4 sm:mb-6">
              A Championship Experience
            </h2>
            <p className="text-base sm:text-lg text-gray-600 mb-4 sm:mb-6 leading-relaxed">
              {courseInfo.description}
            </p>
            <p className="text-base sm:text-lg text-gray-600 mb-6 sm:mb-8 leading-relaxed">
              Our course features challenging holes through towering 50-year-old pine
              trees, strategic water hazards, and meticulously maintained greens that
              will test golfers of all skill levels.
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
                <span className="text-gray-700">
                  Longest par 5 in the Chippewa Valley
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
                <span className="text-gray-700">
                  Signature hole #8 - A true test of skill
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
                <span className="text-gray-700">
                  Well-maintained greens with challenging slopes
                </span>
              </div>
            </div>
            <Link
              href="/course"
              className="btn-primary px-8 py-4 rounded-full font-semibold inline-flex items-center gap-2"
            >
              View All 18 Holes
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
            </Link>
          </div>

          {/* Featured Holes Preview */}
          <div className="grid grid-cols-2 gap-4">
            {[8, 3, 9, 14].map((holeNum) => {
              const hole = holes.find((h) => h.number === holeNum)!;
              const holeImage = images.holes[holeNum as keyof typeof images.holes];
              return (
                <Link
                  key={hole.number}
                  href={`/course/hole/${hole.number}`}
                  className="group relative bg-[var(--cream)] rounded-2xl overflow-hidden hover:shadow-xl transition-all hover:-translate-y-1"
                >
                  {/* Hole Image */}
                  <div className="relative h-32 overflow-hidden">
                    <img
                      src={holeImage.thumbnail}
                      alt={`Hole ${hole.number}`}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                    <div className="absolute top-3 right-3 w-10 h-10 bg-[var(--pine-green)] rounded-full flex items-center justify-center text-white font-bold shadow-lg">
                      {hole.number}
                    </div>
                  </div>
                  <div className="p-4">
                    <div className="text-sm text-[var(--gold)] font-semibold uppercase tracking-wider mb-1">
                      {hole.signature ? "Signature Hole" : `Par ${hole.par}`}
                    </div>
                    <div className="text-gray-700 font-medium mb-2">
                      {hole.yardage.white || hole.yardage.tips} yards
                    </div>
                    <div className="text-gray-500 text-sm line-clamp-2">
                      {hole.description.split(".")[0]}.
                    </div>
                    <div className="mt-3 text-[var(--pine-green)] font-semibold text-sm group-hover:translate-x-2 transition-transform inline-flex items-center gap-1">
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
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

function PhotoGallery() {
  // Select 6 scenic hole photos for the gallery
  const galleryPhotos = [
    { src: images.holes[8].photo, alt: "Hole 8 - Signature Hole", caption: "Hole #8" },
    { src: images.holes[3].photo, alt: "Hole 3", caption: "Hole #3" },
    { src: images.holes[14].photo, alt: "Hole 14", caption: "Hole #14" },
    { src: images.holes[9].photo, alt: "Hole 9", caption: "Hole #9" },
    { src: images.holes[18].photo, alt: "Hole 18", caption: "Hole #18" },
    { src: images.features.courseOverview, alt: "Course Overview", caption: "Course View" },
  ];

  return (
    <section className="py-20 bg-[var(--pine-green)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Course Gallery
          </h2>
          <p className="text-lg text-white/70 max-w-2xl mx-auto">
            Take a visual tour of Whispering Pines and see what makes our course
            one of the finest in the Chippewa Valley.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {galleryPhotos.map((photo, index) => (
            <div
              key={index}
              className={`relative overflow-hidden rounded-2xl group ${
                index === 0 ? "col-span-2 row-span-2" : ""
              }`}
            >
              <img
                src={photo.src}
                alt={photo.alt}
                className={`w-full object-cover transition-transform duration-500 group-hover:scale-110 ${
                  index === 0 ? "h-[400px] md:h-[500px]" : "h-48 md:h-64"
                }`}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="absolute bottom-4 left-4 text-white font-semibold opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                {photo.caption}
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link
            href="/course"
            className="btn-secondary px-8 py-4 rounded-full font-semibold inline-flex items-center gap-2"
          >
            Explore All 18 Holes
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
          </Link>
        </div>
      </div>
    </section>
  );
}

function AmenitiesSection() {
  const iconMap: Record<string, React.ReactNode> = {
    "shopping-bag": (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
      </svg>
    ),
    utensils: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
      </svg>
    ),
    tv: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
    users: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
      </svg>
    ),
    trophy: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
      </svg>
    ),
    calendar: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
      </svg>
    ),
  };

  return (
    <section className="py-20 bg-[var(--cream)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-[var(--pine-green)] mb-4">
            More Than Just Golf
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Discover everything Whispering Pines has to offer beyond our championship
            course.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {amenities.map((amenity) => (
            <div
              key={amenity.title}
              className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-lg transition-shadow"
            >
              <div className="w-16 h-16 bg-[var(--pine-green)]/10 rounded-2xl flex items-center justify-center text-[var(--pine-green)] mb-6">
                {iconMap[amenity.icon]}
              </div>
              <h3 className="text-xl font-bold text-[var(--pine-green)] mb-3">
                {amenity.title}
              </h3>
              <p className="text-gray-600">{amenity.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function SimulatorCTA() {
  return (
    <section className="py-20 bg-[var(--pine-green)] text-white relative overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-5">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="inline-flex items-center gap-2 bg-white/10 px-4 py-2 rounded-full text-sm mb-6">
              <span className="w-2 h-2 bg-[var(--gold)] rounded-full animate-pulse" />
              Open All Winter
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Play Year-Round with Our Indoor Simulator
            </h2>
            <p className="text-xl text-white/80 mb-8 leading-relaxed">
              {simulatorInfo.description}
            </p>
            <div className="grid sm:grid-cols-2 gap-6 mb-8">
              <div className="bg-white/10 rounded-xl p-6">
                <div className="text-3xl font-bold text-[var(--gold)] mb-1">
                  ${simulatorInfo.pricing[0].price}
                </div>
                <div className="text-white/70">
                  per {simulatorInfo.pricing[0].duration}
                </div>
              </div>
              <div className="bg-white/10 rounded-xl p-6">
                <div className="text-3xl font-bold text-[var(--gold)] mb-1">
                  ${simulatorInfo.pricing[1].price}
                </div>
                <div className="text-white/70">
                  per {simulatorInfo.pricing[1].duration}
                </div>
              </div>
            </div>
            <Link
              href="/simulator"
              className="btn-secondary px-8 py-4 rounded-full font-semibold text-lg inline-flex items-center gap-2"
            >
              Learn More & Book
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
            </Link>
          </div>

          {/* Feature list */}
          <div className="bg-white/5 rounded-3xl p-8 backdrop-blur-sm">
            <h3 className="text-2xl font-bold mb-6 text-[var(--gold)]">
              Simulator Features
            </h3>
            <ul className="space-y-4">
              {simulatorInfo.features.map((feature, index) => (
                <li key={index} className="flex items-start gap-3">
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
                  <span className="text-white/90">{feature}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

function LocationPreview() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Map */}
          <div className="bg-[var(--cream)] rounded-3xl overflow-hidden h-[400px] relative">
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

          <div>
            <h2 className="text-4xl md:text-5xl font-bold text-[var(--pine-green)] mb-6">
              Easy to Find, Hard to Leave
            </h2>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              Located just 12 miles east of Eau Claire on Highway 29, Whispering Pines
              is easily accessible from anywhere in the Chippewa Valley.
            </p>

            <div className="space-y-6 mb-8">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-[var(--cream)] rounded-xl flex items-center justify-center flex-shrink-0">
                  <svg
                    className="w-6 h-6 text-[var(--pine-green)]"
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
                  <div className="font-semibold text-[var(--pine-green)] mb-1">
                    Address
                  </div>
                  <div className="text-gray-600">{courseInfo.address}</div>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-[var(--cream)] rounded-xl flex items-center justify-center flex-shrink-0">
                  <svg
                    className="w-6 h-6 text-[var(--pine-green)]"
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
                  <div className="font-semibold text-[var(--pine-green)] mb-1">
                    Phone
                  </div>
                  <a
                    href={`tel:${courseInfo.phone.replace(/[^\d]/g, "")}`}
                    className="text-gray-600 hover:text-[var(--pine-green)] transition-colors"
                  >
                    {courseInfo.phone}
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-[var(--cream)] rounded-xl flex items-center justify-center flex-shrink-0">
                  <svg
                    className="w-6 h-6 text-[var(--pine-green)]"
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
                  <div className="font-semibold text-[var(--pine-green)] mb-1">
                    Email
                  </div>
                  <a
                    href={`mailto:${courseInfo.email}`}
                    className="text-gray-600 hover:text-[var(--pine-green)] transition-colors"
                  >
                    {courseInfo.email}
                  </a>
                </div>
              </div>
            </div>

            <Link
              href="/contact"
              className="btn-primary px-8 py-4 rounded-full font-semibold inline-flex items-center gap-2"
            >
              Get Directions
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
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

function CTASection() {
  return (
    <section className="py-20 bg-[var(--sand)]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-4xl md:text-5xl font-bold text-[var(--pine-green)] mb-6">
          Ready to Play?
        </h2>
        <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
          Book your tee time today and experience the beauty and challenge of
          Whispering Pines Golf Course.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="https://foreupsoftware.com/index.php/booking/19498/1021#/teetimes"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary px-8 py-4 rounded-full font-semibold text-lg inline-flex items-center justify-center gap-2"
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
          </a>
          <a
            href={`tel:${courseInfo.phone.replace(/[^\d]/g, "")}`}
            className="px-8 py-4 rounded-full font-semibold text-lg border-2 border-[var(--pine-green)] text-[var(--pine-green)] hover:bg-[var(--pine-green)] hover:text-white transition-all inline-flex items-center justify-center gap-2"
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
  );
}

export default function Home() {
  return (
    <>
      <HeroSection />
      <CourseHighlights />
      <PhotoGallery />
      <AmenitiesSection />
      <SimulatorCTA />
      <LocationPreview />
      <CTASection />
    </>
  );
}
