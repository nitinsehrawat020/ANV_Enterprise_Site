import { useState, useEffect, useCallback, useMemo } from "react";

const useScrollSticky = (threshold = 0.5) => {
  const [isSticky, setIsSticky] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  const handleScroll = useCallback(() => {
    const scrollPosition = window.scrollY;
    const viewportHeight = window.innerHeight;
    const triggerPoint = viewportHeight * threshold;

    // Calculate progress for smoother transitions
    const progress = Math.min(
      Math.max((scrollPosition - triggerPoint + 50) / 100, 0),
      1
    );
    setScrollProgress(progress);

    // Use a small buffer zone to prevent flickering
    const stickyState = scrollPosition > triggerPoint + 10;

    if (stickyState !== isSticky) {
      setIsSticky(stickyState);
    }
  }, [threshold, isSticky]);

  // Throttled scroll handler for better performance
  const throttledScrollHandler = useMemo(() => {
    let timeoutId;
    let lastExecTime = 0;

    return function (...args) {
      const currentTime = Date.now();
      const delay = 8; // ~120fps for smoother animation

      if (currentTime - lastExecTime > delay) {
        handleScroll.apply(this, args);
        lastExecTime = currentTime;
      } else {
        clearTimeout(timeoutId);
        timeoutId = setTimeout(() => {
          handleScroll.apply(this, args);
          lastExecTime = Date.now();
        }, delay - (currentTime - lastExecTime));
      }
    };
  }, [handleScroll]);

  useEffect(() => {
    // Add scroll event listener with throttling
    window.addEventListener("scroll", throttledScrollHandler, {
      passive: true,
    });

    // Call once to set initial state
    handleScroll();

    // Cleanup event listener on unmount
    return () => {
      window.removeEventListener("scroll", throttledScrollHandler);
    };
  }, [throttledScrollHandler, handleScroll]);

  return { isSticky, scrollProgress };
};

export default useScrollSticky;
