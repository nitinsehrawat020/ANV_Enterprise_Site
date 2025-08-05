// Image optimization utilities and constants

// Image format priorities for modern browsers
export const SUPPORTED_FORMATS = {
  WEBP: "webp",
  AVIF: "avif",
  JPEG: "jpeg",
  PNG: "png",
};

// Default image optimization settings
export const IMAGE_DEFAULTS = {
  QUALITY: 80,
  LAZY_THRESHOLD: 0.1,
  LAZY_ROOT_MARGIN: "50px",
  TRANSITION_DURATION: "0.3s",
};

// Utility function to convert legacy image paths to optimized formats
export const getOptimizedImagePath = (originalPath, options = {}) => {
  const {
    format = SUPPORTED_FORMATS.WEBP,
    quality = IMAGE_DEFAULTS.QUALITY,
    width,
    height,
    fallback = true,
  } = options;

  // If it's already a Cloudinary URL, return as is
  if (originalPath.includes("cloudinary.com")) {
    return originalPath;
  }

  // For local images, we'll use them as is but with proper loading strategies
  // In production, you might want to integrate with a service like Cloudinary
  // or implement server-side image optimization

  // Future enhancement: Add query parameters for dynamic resizing
  // e.g., originalPath + `?w=${width}&h=${height}&q=${quality}&f=${format}`

  return originalPath;
};

// Generate srcSet for responsive images
export const generateSrcSet = (basePath, sizes = [400, 800, 1200, 1600]) => {
  return sizes
    .map(
      (size) => `${getOptimizedImagePath(basePath, { width: size })} ${size}w`
    )
    .join(", ");
};

// Generate sizes attribute for responsive images
export const generateSizes = (
  breakpoints = {
    mobile: "100vw",
    tablet: "50vw",
    desktop: "33vw",
  }
) => {
  return Object.entries(breakpoints)
    .map(([device, size]) => {
      const mediaQuery =
        device === "mobile"
          ? ""
          : device === "tablet"
          ? "(min-width: 768px)"
          : "(min-width: 1024px)";
      return mediaQuery ? `${mediaQuery} ${size}` : size;
    })
    .join(", ");
};

// Check if browser supports a specific image format
export const supportsImageFormat = (format) => {
  const canvas = document.createElement("canvas");
  canvas.width = 1;
  canvas.height = 1;

  try {
    return canvas
      .toDataURL(`image/${format}`)
      .startsWith(`data:image/${format}`);
  } catch {
    return false;
  }
};

// Get the best supported image format
export const getBestImageFormat = () => {
  if (supportsImageFormat(SUPPORTED_FORMATS.AVIF)) {
    return SUPPORTED_FORMATS.AVIF;
  }
  if (supportsImageFormat(SUPPORTED_FORMATS.WEBP)) {
    return SUPPORTED_FORMATS.WEBP;
  }
  return SUPPORTED_FORMATS.JPEG;
};

// Preload critical images
export const preloadImage = (src, options = {}) => {
  return new Promise((resolve, reject) => {
    const link = document.createElement("link");
    link.rel = "preload";
    link.as = "image";
    link.href = getOptimizedImagePath(src, options);

    if (options.crossOrigin) {
      link.crossOrigin = options.crossOrigin;
    }

    link.onload = () => resolve(link);
    link.onerror = reject;

    document.head.appendChild(link);
  });
};

// Batch preload multiple images
export const preloadImages = async (imagePaths, options = {}) => {
  const promises = imagePaths.map((path) => preloadImage(path, options));
  return Promise.allSettled(promises);
};

// Image compression quality recommendations by use case
export const QUALITY_PRESETS = {
  thumbnail: 60,
  gallery: 75,
  hero: 85,
  banner: 80,
  logo: 95,
  avatar: 70,
  background: 70,
};
