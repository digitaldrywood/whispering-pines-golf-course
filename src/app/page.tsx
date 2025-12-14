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

// Sponsors data
const sponsors = [
  { name: "Local Business 1", logo: "https://images.unsplash.com/photo-1599305445671-ac291c95aaa9?w=200&h=100&fit=crop" },
  { name: "Local Business 2", logo: "https://images.unsplash.com/photo-1599305445671-ac291c95aaa9?w=200&h=100&fit=crop" },
  { name: "Local Business 3", logo: "https://images.unsplash.com/photo-1599305445671-ac291c95aaa9?w=200&h=100&fit=crop" },
  { name: "Local Business 4", logo: "https://images.unsplash.com/photo-1599305445671-ac291c95aaa9?w=200&h=100&fit=crop" },
  { name: "Local Business 5", logo: "https://images.unsplash.com/photo-1599305445671-ac291c95aaa9?w=200&h=100&fit=crop" },
  { name: "Local Business 6", logo: "https://images.unsplash.com/photo-1599305445671-ac291c95aaa9?w=200&h=100&fit=crop" },
];

function HeroSection() {
  return (
    <section className="relative h-[100svh] min-h-[600px] flex items-center justify-center overflow-hidden group">
      {/* Background Image Slider */}
      <ImageSlider autoPlayInterval={6000} />
      <div className="absolute inset-0 hero-overlay z-10" />

      {/* Decorative Elements */}
      <div className="absolute top-0 left-0 w-64 h-64 bg-[var(--accent)]/10 rounded-full -translate-x-1/2 -translate-y-1/2 blur-3xl z-10" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-[var(--pine-green)]/20 rounded-full translate-x-1/3 translate-y-1/3 blur-3xl z-10" />

      {/* Content */}
      <div className="relative z-20 text-center text-white px-4 sm:px-6 max-w-5xl mx-auto pt-16 sm:pt-0">
        <div className="animate-fade-in">
          <span className="inline-block px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full text-sm tracking-wider uppercase mb-6 border border-white/20">
            Cadott, Wisconsin
          </span>
        </div>

        <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold mb-4 sm:mb-6 animate-fade-in animate-delay-100 text-shadow-lg">
          Whispering Pines
        </h1>

        <p className="text-xl sm:text-2xl md:text-3xl font-light mb-3 animate-fade-in animate-delay-200 text-white/90">
          Golf Course
        </p>

        <p className="text-[var(--accent)] text-lg sm:text-xl italic mb-8 animate-fade-in animate-delay-200">
          &ldquo;{courseInfo.tagline}&rdquo;
        </p>

        <p className="text-base sm:text-lg text-white/70 max-w-2xl mx-auto mb-10 animate-fade-in animate-delay-300">
          Experience premier 18-hole golf in Wisconsin&apos;s beautiful Chippewa Valley.
          Just 12 miles east of Eau Claire.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in animate-delay-400">
          <a
            href="https://foreupsoftware.com/index.php/booking/19498/1021#/teetimes"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary px-8 py-4 rounded-full text-lg inline-flex items-center justify-center gap-3 shadow-lg"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
            </svg>
            Book Tee Time
          </a>
          <Link
            href="/course"
            className="btn-outline px-8 py-4 rounded-full text-lg inline-flex items-center justify-center gap-3"
          >
            Explore Course
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 hidden sm:block animate-bounce">
        <div className="w-8 h-12 border-2 border-white/30 rounded-full flex items-start justify-center p-2">
          <div className="w-1.5 h-3 bg-white/60 rounded-full animate-pulse" />
        </div>
      </div>
    </section>
  );
}

function QuickInfo() {
  const stats = [
    { value: "18", label: "Holes", icon: "M3 21v-4m0 0V5a2 2 0 012-2h6.5l1 1H21l-3 6 3 6h-8.5l-1-1H5a2 2 0 00-2 2zm9-13.5V9" },
    { value: getTotalPar(holes).toString(), label: "Par", icon: "M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" },
    { value: getTotalYardage(holes).toLocaleString(), label: "Yards", icon: "M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" },
    { value: "50+", label: "Years", icon: "M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" },
  ];

  return (
    <section className="bg-[var(--pine-green)] py-6">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8">
          {stats.map((stat) => (
            <div key={stat.label} className="text-center py-4">
              <div className="inline-flex items-center gap-3">
                <svg className="w-6 h-6 text-[var(--accent)] hidden sm:block" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={stat.icon} />
                </svg>
                <div>
                  <div className="text-3xl sm:text-4xl font-bold text-white">{stat.value}</div>
                  <div className="text-white/60 uppercase tracking-wider text-xs sm:text-sm">{stat.label}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function WelcomeSection() {
  return (
    <section className="py-16 sm:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Text Content */}
          <div>
            <span className="text-[var(--accent)] font-semibold tracking-wider uppercase text-sm">
              Welcome to Whispering Pines
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[var(--pine-green)] mt-3 mb-6">
              A Championship Experience in the Heart of Wisconsin
            </h2>
            <p className="text-gray-600 text-lg leading-relaxed mb-6">
              {courseInfo.description}
            </p>
            <p className="text-gray-600 leading-relaxed mb-8">
              Our course features challenging holes through towering 50-year-old pine trees,
              strategic water hazards, and meticulously maintained greens that will test
              golfers of all skill levels.
            </p>

            <div className="space-y-4 mb-8">
              {[
                "Longest par 5 in the Chippewa Valley",
                "Signature hole #8 - A true test of skill",
                "Well-maintained greens with challenging slopes",
                "Full-service pro shop and restaurant",
              ].map((feature) => (
                <div key={feature} className="flex items-center gap-3">
                  <div className="w-6 h-6 bg-[var(--accent)] rounded-full flex items-center justify-center flex-shrink-0">
                    <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <span className="text-gray-700">{feature}</span>
                </div>
              ))}
            </div>

            <Link
              href="/course"
              className="btn-primary px-8 py-4 rounded-full inline-flex items-center gap-2"
            >
              View All 18 Holes
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>

          {/* Image Grid */}
          <div className="relative">
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <div className="rounded-2xl overflow-hidden shadow-lg">
                  <img
                    src={images.holes[8].photo}
                    alt="Hole 8"
                    className="w-full h-48 sm:h-64 object-cover img-zoom"
                  />
                </div>
                <div className="rounded-2xl overflow-hidden shadow-lg">
                  <img
                    src={images.holes[3].photo}
                    alt="Hole 3"
                    className="w-full h-32 sm:h-40 object-cover img-zoom"
                  />
                </div>
              </div>
              <div className="space-y-4 pt-8">
                <div className="rounded-2xl overflow-hidden shadow-lg">
                  <img
                    src={images.holes[14].photo}
                    alt="Hole 14"
                    className="w-full h-32 sm:h-40 object-cover img-zoom"
                  />
                </div>
                <div className="rounded-2xl overflow-hidden shadow-lg">
                  <img
                    src={images.holes[9].photo}
                    alt="Hole 9"
                    className="w-full h-48 sm:h-64 object-cover img-zoom"
                  />
                </div>
              </div>
            </div>

            {/* Floating Badge */}
            <div className="absolute -bottom-6 -left-6 bg-[var(--accent)] text-white p-6 rounded-2xl shadow-xl hidden lg:block">
              <div className="text-4xl font-bold">50+</div>
              <div className="text-sm">Years of Excellence</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function FeaturedHoles() {
  const featuredHoles = [8, 3, 9, 14];

  return (
    <section className="py-16 sm:py-24 bg-[var(--cream)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <span className="text-[var(--accent)] font-semibold tracking-wider uppercase text-sm">
            Course Highlights
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[var(--pine-green)] mt-3 mb-4">
            Featured Holes
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Discover what makes Whispering Pines one of the finest courses in the Chippewa Valley.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {featuredHoles.map((holeNum) => {
            const hole = holes.find((h) => h.number === holeNum)!;
            const holeImage = images.holes[holeNum as keyof typeof images.holes];
            return (
              <Link
                key={hole.number}
                href={`/course/hole/${hole.number}`}
                className="group bg-white rounded-2xl overflow-hidden shadow-md card-hover"
              >
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={holeImage.photo}
                    alt={`Hole ${hole.number}`}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  <div className="absolute top-4 right-4 w-12 h-12 bg-[var(--accent)] rounded-full flex items-center justify-center text-white font-bold text-lg shadow-lg">
                    {hole.number}
                  </div>
                  {hole.signature && (
                    <div className="absolute top-4 left-4 bg-[var(--pine-green)] text-white px-3 py-1 rounded-full text-xs font-semibold">
                      Signature
                    </div>
                  )}
                </div>
                <div className="p-5">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-[var(--accent)] font-bold">Par {hole.par}</span>
                    <span className="text-gray-500 text-sm">{hole.yardage.white || hole.yardage.tips} yds</span>
                  </div>
                  <p className="text-gray-600 text-sm line-clamp-2 mb-3">
                    {hole.description.split(".")[0]}.
                  </p>
                  <span className="text-[var(--pine-green)] font-semibold text-sm inline-flex items-center gap-1 group-hover:gap-2 transition-all">
                    View Details
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </span>
                </div>
              </Link>
            );
          })}
        </div>

        <div className="text-center mt-10">
          <Link href="/course" className="btn-secondary px-8 py-4 rounded-full inline-flex items-center gap-2">
            View All 18 Holes
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
}

function PhotoGallery() {
  const galleryPhotos = [
    { src: images.holes[8].photo, alt: "Hole 8 - Signature Hole", span: "col-span-2 row-span-2" },
    { src: images.holes[3].photo, alt: "Hole 3" },
    { src: images.holes[14].photo, alt: "Hole 14" },
    { src: images.holes[9].photo, alt: "Hole 9" },
    { src: images.holes[18].photo, alt: "Hole 18" },
  ];

  return (
    <section className="py-16 sm:py-24 bg-[var(--pine-green)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <span className="text-[var(--accent)] font-semibold tracking-wider uppercase text-sm">
            Gallery
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mt-3 mb-4">
            Scenic Views
          </h2>
          <p className="text-white/70 max-w-2xl mx-auto">
            Take a visual tour of our beautiful course and see what awaits you.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4">
          {galleryPhotos.map((photo, index) => (
            <div
              key={index}
              className={`relative overflow-hidden rounded-xl group ${photo.span || ""}`}
            >
              <img
                src={photo.src}
                alt={photo.alt}
                className={`w-full object-cover transition-transform duration-700 group-hover:scale-110 ${
                  index === 0 ? "h-full min-h-[300px] md:min-h-[400px]" : "h-40 sm:h-48"
                }`}
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-colors duration-300" />
              <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                <p className="text-white font-medium text-shadow">{photo.alt}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function AmenitiesSection() {
  const iconMap: Record<string, string> = {
    "shopping-bag": "M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z",
    utensils: "M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z",
    tv: "M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z",
    users: "M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z",
    trophy: "M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z",
    calendar: "M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z",
  };

  return (
    <section className="py-16 sm:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <span className="text-[var(--accent)] font-semibold tracking-wider uppercase text-sm">
            Amenities
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[var(--pine-green)] mt-3 mb-4">
            More Than Just Golf
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Discover everything Whispering Pines has to offer beyond our championship course.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {amenities.map((amenity) => (
            <div
              key={amenity.title}
              className="bg-[var(--cream)] rounded-2xl p-6 sm:p-8 card-hover"
            >
              <div className="w-14 h-14 bg-[var(--accent)] rounded-xl flex items-center justify-center mb-5">
                <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={iconMap[amenity.icon]} />
                </svg>
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

function SimulatorSection() {
  return (
    <section className="py-16 sm:py-24 bg-[var(--pine-green)] relative overflow-hidden">
      {/* Background Pattern */}
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
            <div className="inline-flex items-center gap-2 bg-white/10 px-4 py-2 rounded-full text-sm mb-6 text-white">
              <span className="w-2 h-2 bg-[var(--accent)] rounded-full animate-pulse" />
              Open All Winter
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6">
              Play Year-Round with Our Indoor Simulator
            </h2>
            <p className="text-white/80 text-lg mb-8 leading-relaxed">
              {simulatorInfo.description}
            </p>

            <div className="grid grid-cols-2 gap-4 mb-8">
              {simulatorInfo.pricing.map((price) => (
                <div key={price.duration} className="bg-white/10 rounded-xl p-5 backdrop-blur-sm border border-white/10">
                  <div className="text-3xl font-bold text-[var(--accent)] mb-1">
                    ${price.price}
                  </div>
                  <div className="text-white/70 text-sm">per {price.duration}</div>
                </div>
              ))}
            </div>

            <Link
              href="/simulator"
              className="btn-primary px-8 py-4 rounded-full inline-flex items-center gap-2"
            >
              Learn More & Book
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>

          <div className="bg-white/5 rounded-3xl p-6 sm:p-8 backdrop-blur-sm border border-white/10">
            <h3 className="text-xl font-bold text-[var(--accent)] mb-6">Simulator Features</h3>
            <ul className="space-y-4">
              {simulatorInfo.features.map((feature, index) => (
                <li key={index} className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-[var(--accent)] rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
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

function SponsorsSection() {
  return (
    <section className="py-12 sm:py-16 bg-[var(--cream)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8">
          <h2 className="text-xl sm:text-2xl font-bold text-[var(--pine-green)]">
            Our Sponsors
          </h2>
          <p className="text-gray-500 text-sm mt-2">Thank you to our valued partners</p>
        </div>

        <div className="grid grid-cols-3 md:grid-cols-6 gap-6 items-center">
          {sponsors.map((sponsor, index) => (
            <div
              key={index}
              className="bg-white rounded-xl p-4 flex items-center justify-center h-20 shadow-sm hover:shadow-md transition-shadow"
            >
              <img
                src={sponsor.logo}
                alt={sponsor.name}
                className="max-h-12 max-w-full object-contain grayscale hover:grayscale-0 transition-all"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function LocationSection() {
  return (
    <section className="py-16 sm:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Map */}
          <div className="bg-[var(--cream)] rounded-3xl overflow-hidden h-[350px] sm:h-[400px] shadow-lg">
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
            <span className="text-[var(--accent)] font-semibold tracking-wider uppercase text-sm">
              Visit Us
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[var(--pine-green)] mt-3 mb-6">
              Easy to Find, Hard to Leave
            </h2>
            <p className="text-gray-600 text-lg mb-8 leading-relaxed">
              Located just 12 miles east of Eau Claire on Highway 29, Whispering Pines is
              easily accessible from anywhere in the Chippewa Valley.
            </p>

            <div className="space-y-5 mb-8">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-[var(--accent)] rounded-xl flex items-center justify-center flex-shrink-0">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <div>
                  <div className="font-semibold text-[var(--pine-green)] mb-1">Address</div>
                  <div className="text-gray-600">{courseInfo.address}</div>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-[var(--accent)] rounded-xl flex items-center justify-center flex-shrink-0">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <div>
                  <div className="font-semibold text-[var(--pine-green)] mb-1">Phone</div>
                  <a href={`tel:${courseInfo.phone.replace(/[^\d]/g, "")}`} className="text-gray-600 hover:text-[var(--accent)] transition-colors">
                    {courseInfo.phone}
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-[var(--accent)] rounded-xl flex items-center justify-center flex-shrink-0">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <div>
                  <div className="font-semibold text-[var(--pine-green)] mb-1">Email</div>
                  <a href={`mailto:${courseInfo.email}`} className="text-gray-600 hover:text-[var(--accent)] transition-colors">
                    {courseInfo.email}
                  </a>
                </div>
              </div>
            </div>

            <a
              href={`https://maps.google.com/maps?q=${encodeURIComponent(courseInfo.address)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-secondary px-8 py-4 rounded-full inline-flex items-center gap-2"
            >
              Get Directions
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

function CTASection() {
  return (
    <section className="py-16 sm:py-24 bg-[var(--sand)] relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-[var(--accent)]/10 rounded-full translate-x-1/2 -translate-y-1/2" />
      <div className="absolute bottom-0 left-0 w-48 h-48 bg-[var(--pine-green)]/10 rounded-full -translate-x-1/2 translate-y-1/2" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[var(--pine-green)] mb-6">
          Ready to Play?
        </h2>
        <p className="text-lg text-gray-600 mb-10 max-w-2xl mx-auto">
          Book your tee time today and experience the beauty and challenge of
          Whispering Pines Golf Course.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="https://foreupsoftware.com/index.php/booking/19498/1021#/teetimes"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary px-10 py-5 rounded-full text-lg inline-flex items-center justify-center gap-3 shadow-lg"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
            </svg>
            Book Online
          </a>
          <a
            href={`tel:${courseInfo.phone.replace(/[^\d]/g, "")}`}
            className="px-10 py-5 rounded-full text-lg border-2 border-[var(--pine-green)] text-[var(--pine-green)] hover:bg-[var(--pine-green)] hover:text-white transition-all inline-flex items-center justify-center gap-3"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
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
      <QuickInfo />
      <WelcomeSection />
      <FeaturedHoles />
      <PhotoGallery />
      <AmenitiesSection />
      <SimulatorSection />
      <SponsorsSection />
      <LocationSection />
      <CTASection />
    </>
  );
}
