import { useState, useEffect, useRef, useCallback } from "react";
import { BsChevronLeft, BsChevronRight } from "react-icons/bs";
import {
  CarouselContainer,
  CarouselImageContainer,
  CarouselImage,
  CarouselButton,
  CarouselDots,
  CarouselDot,
} from "./styleDesignTemplete";
import { CAROUSEL_ADVANCE_TIME, MIN_SWIPE_DISTANCE } from "./designConstants";

/**
 * Custom carousel component for design modal
 * @param {Array} images - Array of image URLs or objects with imageUrl property
 * @returns {JSX.Element} Carousel component
 */
const DesignCarousel = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const touchStartRef = useRef(null);
  const touchEndRef = useRef(null);

  // Go to next image
  const goNext = useCallback(() => {
    if (images && images.length > 0) {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }
  }, [images]);

  // Go to previous image
  const goPrev = useCallback(() => {
    if (images && images.length > 0) {
      setCurrentIndex(
        (prevIndex) => (prevIndex - 1 + images.length) % images.length
      );
    }
  }, [images]);

  // Touch handlers for mobile swipe
  const handleTouchStart = (e) => {
    touchStartRef.current = e.targetTouches[0].clientX;
  };

  const handleTouchMove = (e) => {
    touchEndRef.current = e.targetTouches[0].clientX;
  };

  const handleTouchEnd = () => {
    if (!touchStartRef.current || !touchEndRef.current) return;

    const distance = touchStartRef.current - touchEndRef.current;

    if (Math.abs(distance) < MIN_SWIPE_DISTANCE) return;

    if (distance > 0) {
      goNext(); // Swipe left - go to next image
    } else {
      goPrev(); // Swipe right - go to previous image
    }

    touchStartRef.current = null;
    touchEndRef.current = null;
  };

  // Auto-advance carousel
  useEffect(() => {
    if (images && images.length > 1) {
      const interval = setInterval(goNext, CAROUSEL_ADVANCE_TIME);
      return () => clearInterval(interval);
    }
  }, [goNext, images]);

  if (!images || images.length === 0) {
    return (
      <CarouselContainer>
        <div
          style={{
            textAlign: "center",
            height: "100%",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            backgroundColor: "#f5f5f5",
            color: "#666",
          }}
        >
          No images available
        </div>
      </CarouselContainer>
    );
  }

  return (
    <CarouselContainer
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
    >
      <CarouselImageContainer>
        <CarouselImage
          src={
            typeof images[currentIndex] === "string"
              ? images[currentIndex]
              : images[currentIndex]?.imageUrl || ""
          }
          alt={`Design view ${currentIndex + 1}`}
        />
      </CarouselImageContainer>

      {/* Navigation buttons */}
      {images.length > 1 && (
        <>
          <CarouselButton
            className="prev"
            onClick={goPrev}
            aria-label="Previous image"
          >
            <BsChevronLeft size={18} />
          </CarouselButton>
          <CarouselButton
            className="next"
            onClick={goNext}
            aria-label="Next image"
          >
            <BsChevronRight size={18} />
          </CarouselButton>
        </>
      )}

      {/* Dots indicator */}
      {images.length > 1 && (
        <CarouselDots>
          {images.map((_, index) => (
            <CarouselDot
              key={index}
              $active={index === currentIndex}
              onClick={() => setCurrentIndex(index)}
              aria-label={`Go to image ${index + 1}`}
            />
          ))}
        </CarouselDots>
      )}
    </CarouselContainer>
  );
};

export default DesignCarousel;
