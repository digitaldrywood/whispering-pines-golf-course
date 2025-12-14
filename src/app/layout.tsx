import type { Metadata, Viewport } from "next";
import { Playfair_Display, Lato } from "next/font/google";
import "./globals.css";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  display: "swap",
});

const lato = Lato({
  variable: "--font-lato",
  subsets: ["latin"],
  weight: ["300", "400", "700", "900"],
  display: "swap",
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  themeColor: "#3d4222",
};

export const metadata: Metadata = {
  title: {
    default: "Whispering Pines Golf Course | Cadott, Wisconsin",
    template: "%s | Whispering Pines Golf Course",
  },
  description:
    "Experience premier 18-hole golf at Whispering Pines Golf Course in Cadott, Wisconsin. Located just 12 miles east of Eau Claire in the beautiful Chippewa Valley. Book your tee time today!",
  keywords: [
    "golf course",
    "Cadott Wisconsin",
    "Eau Claire golf",
    "Chippewa Valley golf",
    "18 hole golf",
    "Wisconsin golf course",
    "golf simulator",
    "tee times",
    "golf lessons",
    "pro shop",
    "golf events",
    "golf leagues",
  ],
  authors: [{ name: "Whispering Pines Golf Course" }],
  creator: "Whispering Pines Golf Course",
  publisher: "Whispering Pines Golf Course",
  formatDetection: {
    telephone: true,
    email: true,
    address: true,
  },
  openGraph: {
    title: "Whispering Pines Golf Course | Cadott, Wisconsin",
    description:
      "Where the pines meet the sky. Experience premier 18-hole golf in Wisconsin's beautiful Chippewa Valley.",
    type: "website",
    locale: "en_US",
    url: "https://whisperingpinesgc.net",
    siteName: "Whispering Pines Golf Course",
    images: [
      {
        url: "https://images.unsplash.com/photo-1587174486073-ae5e5cff23aa?w=1200&h=630&fit=crop",
        width: 1200,
        height: 630,
        alt: "Whispering Pines Golf Course",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Whispering Pines Golf Course | Cadott, Wisconsin",
    description:
      "Where the pines meet the sky. Experience premier 18-hole golf in Wisconsin's beautiful Chippewa Valley.",
    images: ["https://images.unsplash.com/photo-1587174486073-ae5e5cff23aa?w=1200&h=630&fit=crop"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: "https://whisperingpinesgc.net",
  },
};

// JSON-LD structured data for local business
const jsonLd = {
  "@context": "https://schema.org",
  "@type": "GolfCourse",
  name: "Whispering Pines Golf Course",
  description:
    "An 18-hole championship golf course located in Cadott, Wisconsin, 12 miles east of Eau Claire in the Chippewa Valley.",
  url: "https://whisperingpinesgc.net",
  telephone: "(715) 289-4653",
  email: "todd@whisperingpinesgc.net",
  address: {
    "@type": "PostalAddress",
    streetAddress: "24700 County Highway X",
    addressLocality: "Cadott",
    addressRegion: "WI",
    postalCode: "54727",
    addressCountry: "US",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 44.9483,
    longitude: -91.1513,
  },
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
      opens: "07:00",
      closes: "20:00",
    },
  ],
  amenityFeature: [
    { "@type": "LocationFeatureSpecification", name: "Pro Shop" },
    { "@type": "LocationFeatureSpecification", name: "Restaurant" },
    { "@type": "LocationFeatureSpecification", name: "Indoor Golf Simulator" },
    { "@type": "LocationFeatureSpecification", name: "Golf Lessons" },
  ],
  priceRange: "$$",
  image: "https://images.unsplash.com/photo-1587174486073-ae5e5cff23aa?w=1200&h=630&fit=crop",
  sameAs: ["https://www.facebook.com/WhisperingPinesGolfCourse"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="apple-touch-icon" href="/favicon.ico" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className={`${playfair.variable} ${lato.variable} antialiased`}>
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 bg-[var(--accent)] text-white px-4 py-2 rounded-lg z-[100] focus:outline-none"
        >
          Skip to main content
        </a>
        <Navigation />
        <main id="main-content">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
