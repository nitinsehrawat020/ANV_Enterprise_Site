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
  // Validate basePath to prevent invalid srcset
  if (!basePath || typeof basePath !== "string" || basePath.trim() === "") {
    console.warn("Invalid basePath provided to generateSrcSet:", basePath);
    return "";
  }

  // Ensure basePath includes file extension
  if (!basePath.includes(".")) {
    console.warn(
      "basePath should include file extension for generateSrcSet:",
      basePath
    );
    return basePath; // Return as single src instead of srcset
  }

  return sizes
    .map((size) => {
      const optimizedPath = getOptimizedImagePath(basePath, { width: size });
      return `${optimizedPath} ${size}w`;
    })
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

// Preload critical images with better performance
export const preloadImage = (src, options = {}) => {
  return new Promise((resolve, reject) => {
    // Validate src before creating preload link
    if (!src || typeof src !== "string" || src.trim() === "") {
      reject(new Error("Invalid image source"));
      return;
    }

    const link = document.createElement("link");
    link.rel = "preload";
    link.as = "image";
    link.href = getOptimizedImagePath(src, options);

    // Add importance hint to prioritize critical images
    if (options.critical) {
      link.setAttribute("fetchpriority", "high");
    }

    if (options.crossOrigin) {
      link.crossOrigin = options.crossOrigin;
    }

    // Set a timeout to prevent hanging promises
    const timeout = setTimeout(() => {
      document.head.removeChild(link);
      reject(new Error("Preload timeout"));
    }, 10000);

    link.onload = () => {
      clearTimeout(timeout);
      resolve(link);
    };

    link.onerror = () => {
      clearTimeout(timeout);
      document.head.removeChild(link);
      reject(new Error(`Failed to preload image: ${src}`));
    };

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
