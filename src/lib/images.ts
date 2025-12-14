// Whispering Pines Golf Course - Local Image Paths
// Images downloaded from whisperingpinesgc.net

export const images = {
  // Logo and Branding
  logo: {
    header: "/images/logos/logo-header.png",
    footer: "/images/logos/logo-footer.png",
    background: "/images/logos/header-bg.jpg",
  },

  // Homepage Slider Images
  slider: [
    "/images/slider/slider-1.jpg",
    "/images/slider/slider-2.jpg",
    "/images/slider/slider-3.jpg",
    "/images/slider/slider-4.jpg",
    "/images/slider/slider-5.jpg",
    "/images/slider/slider-6.jpg",
  ],

  // Course Map and Scorecard
  courseMap: {
    outside: "/images/features/driving-range.jpg",
    inside: "/images/features/driving-range.jpg",
  },

  // Feature Images
  features: {
    food: "/images/features/food.jpg",
    proShop: "/images/features/pro-shop.jpg",
    bookOnline: "/images/features/book-online.jpg",
    events: "/images/features/events.jpg",
    crossCountrySki: "/images/features/cross-country-ski.jpg",
    courseOverview: "/images/features/driving-range.jpg",
    driving_range: "/images/features/driving-range.jpg",
    hole8Pond: "/images/features/hole-8-pond.jpg",
  },

  // Gallery photos
  gallery: [
    "/images/gallery/gallery-1.jpg",
    "/images/gallery/gallery-2.jpg",
    "/images/gallery/gallery-3.jpg",
    "/images/gallery/gallery-4.jpg",
    "/images/gallery/gallery-5.jpg",
    "/images/gallery/gallery-6.jpg",
  ],

  // Hole Images - Real photos from Whispering Pines
  holes: {
    1: {
      photo: "/images/holes/hole-1.jpg",
      layout: "/images/holes/hole-1.jpg",
      thumbnail: "/images/holes/hole-1.jpg",
    },
    2: {
      photo: "/images/holes/hole-2.jpg",
      layout: "/images/holes/hole-2.jpg",
      thumbnail: "/images/holes/hole-2.jpg",
    },
    3: {
      photo: "/images/holes/hole-3.jpg",
      layout: "/images/holes/hole-3.jpg",
      thumbnail: "/images/holes/hole-3.jpg",
    },
    4: {
      photo: "/images/holes/hole-4.jpg",
      layout: "/images/holes/hole-4.jpg",
      thumbnail: "/images/holes/hole-4.jpg",
    },
    5: {
      photo: "/images/holes/hole-5.jpg",
      layout: "/images/holes/hole-5.jpg",
      thumbnail: "/images/holes/hole-5.jpg",
    },
    6: {
      photo: "/images/holes/hole-6.jpg",
      layout: "/images/holes/hole-6.jpg",
      thumbnail: "/images/holes/hole-6.jpg",
    },
    7: {
      photo: "/images/holes/hole-7.jpg",
      layout: "/images/holes/hole-7.jpg",
      thumbnail: "/images/holes/hole-7.jpg",
    },
    8: {
      photo: "/images/holes/hole-8.jpg",
      layout: "/images/holes/hole-8.jpg",
      thumbnail: "/images/holes/hole-8.jpg",
      pond: "/images/features/hole-8-pond.jpg",
    },
    9: {
      photo: "/images/holes/hole-9.jpg",
      layout: "/images/holes/hole-9.jpg",
      thumbnail: "/images/holes/hole-9.jpg",
    },
    10: {
      photo: "/images/holes/hole-10.jpg",
      layout: "/images/holes/hole-10.jpg",
      thumbnail: "/images/holes/hole-10.jpg",
    },
    11: {
      photo: "/images/holes/hole-11.jpg",
      layout: "/images/holes/hole-11.jpg",
      thumbnail: "/images/holes/hole-11.jpg",
    },
    12: {
      photo: "/images/holes/hole-12.jpg",
      layout: "/images/holes/hole-12.jpg",
      thumbnail: "/images/holes/hole-12.jpg",
    },
    13: {
      photo: "/images/holes/hole-13.jpg",
      layout: "/images/holes/hole-13.jpg",
      thumbnail: "/images/holes/hole-13.jpg",
    },
    14: {
      photo: "/images/holes/hole-14.jpg",
      layout: "/images/holes/hole-14.jpg",
      thumbnail: "/images/holes/hole-14.jpg",
    },
    15: {
      photo: "/images/holes/hole-15.jpg",
      layout: "/images/holes/hole-15.jpg",
      thumbnail: "/images/holes/hole-15.jpg",
    },
    16: {
      photo: "/images/holes/hole-16.jpg",
      layout: "/images/holes/hole-16.jpg",
      thumbnail: "/images/holes/hole-16.jpg",
    },
    17: {
      photo: "/images/holes/hole-17.jpg",
      layout: "/images/holes/hole-17.jpg",
      thumbnail: "/images/holes/hole-17.jpg",
    },
    18: {
      photo: "/images/holes/hole-18.jpg",
      layout: "/images/holes/hole-18.jpg",
      thumbnail: "/images/holes/hole-18.jpg",
    },
  },
};

export const getHoleImage = (holeNumber: number) => {
  return images.holes[holeNumber as keyof typeof images.holes] || null;
};
