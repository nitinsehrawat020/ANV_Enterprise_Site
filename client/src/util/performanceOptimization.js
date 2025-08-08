// Performance monitoring and optimization utilities

// Simple performance observer fallback
const simplePerformanceMonitor = (onPerfEntry) => {
  if (typeof PerformanceObserver !== "undefined") {
    try {
      // Monitor paint metrics
      const paintObserver = new PerformanceObserver((list) => {
        for (const entry of list.getEntries()) {
          onPerfEntry({
            name: entry.name.includes("first-contentful-paint") ? "FCP" : "FP",
            value: entry.startTime,
          });
        }
      });
      paintObserver.observe({ entryTypes: ["paint"] });
    } catch (error) {
      console.warn("Performance observer not available:", error);
    }
  }
};

// Web Vitals monitoring (compatible with web-vitals v5.x)
export const reportWebVitals = (onPerfEntry) => {
  if (onPerfEntry && onPerfEntry instanceof Function) {
    import("web-vitals")
      .then((webVitals) => {
        // Try new API first (v5.x)
        if (webVitals.onCLS) {
          webVitals.onCLS(onPerfEntry);
          webVitals.onFID && webVitals.onFID(onPerfEntry);
          webVitals.onFCP(onPerfEntry);
          webVitals.onLCP(onPerfEntry);
          webVitals.onTTFB(onPerfEntry);
        }
        // Fallback to old API (v4.x)
        else if (webVitals.getCLS) {
          webVitals.getCLS(onPerfEntry);
          webVitals.getFID && webVitals.getFID(onPerfEntry);
          webVitals.getFCP(onPerfEntry);
          webVitals.getLCP(onPerfEntry);
          webVitals.getTTFB(onPerfEntry);
        }
      })
      .catch((error) => {
        console.warn("Web Vitals not available, using fallback:", error);
        // Use simple fallback
        simplePerformanceMonitor(onPerfEntry);
      });
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

  // Track lazy loading performance
  trackLazyLoadPerformance();

  // Report web vitals (with error handling)
  try {
    reportWebVitals((metric) => {
      // In production, send to analytics
    });
  } catch (error) {
    console.warn("Performance monitoring not available:", error);
  }
};

export default initializePerformanceOptimizations;
