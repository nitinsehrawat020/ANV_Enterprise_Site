import { useEffect, useState } from "react";

const useTablet = (breakpoint = 768) => {
  const [isTablet, setIsTablet] = useState(window.innerWidth < breakpoint);

  const handleResize = () => {
    const checkpoint =
      window.innerWidth < breakpoint && window.innerWidth > 480;
    setIsTablet(checkpoint);
  };

  useEffect(() => {
    handleResize();

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return { isTablet };
};

export default useTablet;
