import { useState, useEffect, useRef } from "react";
import styled from "styled-components";
import {
  getOptimizedImagePath,
  IMAGE_DEFAULTS,
} from "../util/imageOptimization";

// Optimized Image Component with Lazy Loading and Modern Formats
const ImageContainer = styled.div`
  position: relative;
  overflow: hidden;
  display: inline-block;
  width: ${(props) => props.width || "auto"};
  height: ${(props) => props.height || "auto"};
`;

const StyledImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: ${(props) => props.objectFit || "cover"};
  transition: opacity 0.3s ease, transform 0.3s ease;
  opacity: ${(props) => (props.loaded ? 1 : 0)};
  transform: ${(props) => (props.loaded ? "scale(1)" : "scale(1.05)")};

  ${(props) =>
    props.rounded &&
    `
    border-radius: ${typeof props.rounded === "string" ? props.rounded : "8px"};
  `}

  ${(props) =>
    props.shadow &&
    `
    box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
  `}
`;

const PlaceholderContainer = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(
    90deg,
    var(--color-background-100, #f3f4f6) 0%,
    var(--color-background-200, #e5e7eb) 50%,
    var(--color-background-100, #f3f4f6) 100%
  );
  background-size: 200% 100%;
  animation: shimmer 1.5s infinite;
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: ${(props) => (props.loaded ? 0 : 1)};
  transition: opacity 0.3s ease;

  @keyframes shimmer {
    0% {
      background-position: -200% 0;
    }
    100% {
      background-position: 200% 0;
    }
  }
`;

const PlaceholderIcon = styled.div`
  width: 24px;
  height: 24px;
  color: var(--color-text-400, #9ca3af);

  &::before {
    content: "🏗️";
    font-size: 24px;
  }
`;

const ErrorContainer = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: var(--color-background-100, #f3f4f6);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: var(--color-text-500, #6b7280);
  font-size: 0.875rem;
  text-align: center;
  padding: 1rem;
`;

// Hook for intersection observer (lazy loading)
const useIntersectionObserver = (ref, options = {}) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      {
        threshold: IMAGE_DEFAULTS.LAZY_THRESHOLD,
        rootMargin: IMAGE_DEFAULTS.LAZY_ROOT_MARGIN,
        ...options,
      }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, [ref, options]);

  return isVisible;
};

// Main OptimizedImage Component
function OptimizedImage({
  src,
  alt,
  width,
  height,
  objectFit = "cover",
  lazy = true,
  placeholder = true,
  rounded = false,
  shadow = false,
  fallbackSrc,
  quality = 80,
  format = "webp",
  className,
  style,
  onClick,
  ...props
}) {
  const [loaded, setLoaded] = useState(false);
  const [error, setError] = useState(false);
  const [currentSrc, setCurrentSrc] = useState("");
  const imgRef = useRef();
  const containerRef = useRef();

  const isVisible = useIntersectionObserver(containerRef, { threshold: 0.1 });

  // Generate optimized source URLs
  const optimizedSrc = getOptimizedImagePath(src, {
    format,
    quality,
    width,
    height,
  });
  const fallbackPath = fallbackSrc || src;

  useEffect(() => {
    if (lazy && !isVisible) return;

    setCurrentSrc(optimizedSrc);
  }, [isVisible, lazy, optimizedSrc]);

  const handleLoad = () => {
    setLoaded(true);
    setError(false);
  };

  const handleError = () => {
    if (currentSrc !== fallbackPath && fallbackPath) {
      setCurrentSrc(fallbackPath);
      setError(false);
    } else {
      setError(true);
      setLoaded(false);
    }
  };

  return (
    <ImageContainer
      ref={containerRef}
      width={width}
      height={height}
      className={className}
      style={style}
      onClick={onClick}
    >
      {placeholder && !loaded && !error && (
        <PlaceholderContainer loaded={loaded}>
          <PlaceholderIcon />
        </PlaceholderContainer>
      )}

      {error && (
        <ErrorContainer>
          <PlaceholderIcon />
          <div>Image not available</div>
        </ErrorContainer>
      )}

      {currentSrc && (
        <picture>
          {/* Only add source if we have a valid optimized src */}
          {optimizedSrc &&
            optimizedSrc !== src &&
            optimizedSrc.includes(".") &&
            optimizedSrc.trim() !== "" && (
              <source srcSet={optimizedSrc} type={`image/${format}`} />
            )}
          <StyledImage
            ref={imgRef}
            src={currentSrc}
            alt={alt}
            loaded={loaded}
            objectFit={objectFit}
            rounded={rounded}
            shadow={shadow}
            onLoad={handleLoad}
            onError={handleError}
            loading={lazy ? "lazy" : "eager"}
            decoding="async"
            {...props}
          />
        </picture>
      )}
    </ImageContainer>
  );
}

// Prebuilt components for common use cases
export const HeroImage = (props) => (
  <OptimizedImage objectFit="cover" lazy={false} quality={90} {...props} />
);

export const ThumbnailImage = (props) => (
  <OptimizedImage objectFit="cover" quality={70} rounded="4px" {...props} />
);

export const BannerImage = (props) => (
  <OptimizedImage objectFit="cover" quality={85} shadow={true} {...props} />
);

export const LogoImage = (props) => (
  <OptimizedImage
    objectFit="contain"
    lazy={false}
    quality={95}
    placeholder={false}
    {...props}
  />
);

export default OptimizedImage;
