// Performance monitoring and optimization utilities

// Web Vitals monitoring
export const reportWebVitals = (onPerfEntry) => {
  if (onPerfEntry && onPerfEntry instanceof Function) {
    import("web-vitals").then(({ getCLS, getFID, getFCP, getLCP, getTTFB }) => {
      getCLS(onPerfEntry);
      getFID(onPerfEntry);
      getFCP(onPerfEntry);
      getLCP(onPerfEntry);
      getTTFB(onPerfEntry);
    });
  }
};

// Image performance analytics
export const trackImagePerformance = (imageSrc, loadTime) => {
  // In production, send to analytics service
  if (import.meta.env.DEV) {
    console.log(`🖼️ Image loaded: ${imageSrc} in ${loadTime}ms`);
  }
};

// Lazy loading performance tracker
export const trackLazyLoadPerformance = () => {
  const observer = new PerformanceObserver((list) => {
    for (const entry of list.getEntries()) {
      if (entry.entryType === "element" && entry.identifier?.includes("lazy")) {
        console.log(
          `⚡ Lazy element loaded: ${entry.identifier} in ${entry.loadTime}ms`
        );
      }
    }
  });

  observer.observe({ entryTypes: ["element"] });

  return () => observer.disconnect();
};

// Bundle size monitoring
export const logBundleInfo = () => {
  if (import.meta.env.DEV) {
    console.log("📦 Bundle optimization enabled");
    console.log("🏗️ Code splitting: Active");
    console.log("🖼️ Image optimization: Active");
    console.log("⚡ Lazy loading: Active");
  }
};

// Critical resource hints
export const addResourceHints = () => {
  // Add DNS prefetch for external domains
  const dnsPrefetch = [
    "https://res.cloudinary.com",
    "https://fonts.googleapis.com",
    "https://fonts.gstatic.com",
  ];

  dnsPrefetch.forEach((domain) => {
    const link = document.createElement("link");
    link.rel = "dns-prefetch";
    link.href = domain;
    document.head.appendChild(link);
  });

  // Add preconnect for critical resources
  const preconnect = ["https://res.cloudinary.com"];

  preconnect.forEach((domain) => {
    const link = document.createElement("link");
    link.rel = "preconnect";
    link.href = domain;
    link.crossOrigin = "anonymous";
    document.head.appendChild(link);
  });
};

// Service Worker registration for caching
export const registerSW = () => {
  if ("serviceWorker" in navigator && import.meta.env.PROD) {
    window.addEventListener("load", () => {
      navigator.serviceWorker
        .register("/sw.js")
        .then((registration) => {
          console.log("🔧 SW registered: ", registration);
        })
        .catch((registrationError) => {
          console.log("❌ SW registration failed: ", registrationError);
        });
    });
  }
};

// Initialize all performance optimizations
export const initializePerformanceOptimizations = () => {
  // Add resource hints
  addResourceHints();

  // Register service worker
  registerSW();

  // Log bundle info
  logBundleInfo();

  // Track lazy loading performance
  trackLazyLoadPerformance();

  // Report web vitals
  reportWebVitals((metric) => {
    if (import.meta.env.DEV) {
      console.log(`📊 ${metric.name}: ${metric.value}`);
    }
    // In production, send to analytics
  });
};

export default initializePerformanceOptimizations;
