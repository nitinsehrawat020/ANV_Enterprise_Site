import { preloadImages } from "../util/imageOptimization";

// Critical images that should be preloaded for better performance
export const CRITICAL_IMAGES = {
  HERO_BANNER: "/pictures/banner/HeroBanner.png",
  LOGO: "/pictures/logo/Logo.png",
  HERO_CAROUSEL: [
    "/pictures/banner/image1.webp",
    "/pictures/banner/image2.webp",
    "/pictures/banner/image3.webp",
  ],
};

// Background images that should be preloaded
export const BACKGROUND_IMAGES = {
  DESIGN: "/pictures/image/DesignBackground.png",
  CONTACT: "/pictures/image/contactUs.png",
  ABOUT_BANNER: "/pictures/aboutUS/AboutUsBanner2.png",
};

// Initialize critical image preloading
export const initializeImagePreloading = async () => {
  try {
    // Preload hero banner and logo immediately (above-the-fold)
    await preloadImages([CRITICAL_IMAGES.HERO_BANNER, CRITICAL_IMAGES.LOGO], {
      quality: 90,
    });

    // Preload carousel images with slight delay
    setTimeout(() => {
      preloadImages(CRITICAL_IMAGES.HERO_CAROUSEL, { quality: 80 });
    }, 1000);

    // Preload background images with longer delay
    setTimeout(() => {
      preloadImages(Object.values(BACKGROUND_IMAGES), { quality: 70 });
    }, 2000);

    console.log("🏗️ Critical images preloaded successfully");
  } catch (error) {
    console.warn("⚠️ Some images failed to preload:", error);
  }
};

// Preload images for a specific route
export const preloadRouteImages = {
  home: () =>
    preloadImages([
      CRITICAL_IMAGES.HERO_BANNER,
      ...CRITICAL_IMAGES.HERO_CAROUSEL,
      BACKGROUND_IMAGES.CONTACT,
    ]),

  about: () =>
    preloadImages([
      BACKGROUND_IMAGES.ABOUT_BANNER,
      "/pictures/aboutUS/image1.png",
      "/pictures/aboutUS/image2.png",
    ]),

  designs: () =>
    preloadImages([
      BACKGROUND_IMAGES.DESIGN,
      "/pictures/banner/molding1.webp",
      "/pictures/banner/molding2.webp",
    ]),

  admin: () => preloadImages([CRITICAL_IMAGES.LOGO]),
};

export default initializeImagePreloading;
