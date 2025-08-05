import { useState, useEffect } from "react";

const useMediaQuery = (query) => {
  const [matches, setMatches] = useState(false);

  useEffect(() => {
    const media = window.matchMedia(query);

    const updateMatch = () => {
      setMatches(media.matches);
    };

    // Set initial value
    updateMatch();

    // Listen for changes
    media.addEventListener("change", updateMatch);

    // Cleanup
    return () => {
      media.removeEventListener("change", updateMatch);
    };
  }, [query]);

  return matches;
};

export default useMediaQuery;
