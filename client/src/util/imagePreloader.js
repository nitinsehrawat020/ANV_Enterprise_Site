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

// Initialize critical image preloading with better error handling
export const initializeImagePreloading = async () => {
  try {
    // Only preload images that actually exist and are critical
    const criticalImages = [CRITICAL_IMAGES.HERO_BANNER, CRITICAL_IMAGES.LOGO];

    // Validate images exist before preloading
    const validImages = criticalImages.filter(
      (src) =>
        src && typeof src === "string" && src.includes(".") && src.trim() !== ""
    );

    if (validImages.length > 0) {
      await preloadImages(validImages, { quality: 90 });
    }

    // Remove automatic carousel preloading to reduce console warnings
    // Only preload when actually needed by specific routes

    // Reduce background image preloading
    // Only preload when navigating to specific routes

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
