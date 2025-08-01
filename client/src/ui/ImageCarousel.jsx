import { useState, useEffect, useRef, useCallback } from "react";
import useMobile from "../hooks/useMobile";
import {
  CarouselWrapper,
  ControlsContainer,
  ImageContainer,
  InfoBox,
  InfoIcon,
  InfoText,
  NavButton,
  NextIcon,
  Overlay,
  PrevIcon,
  StyledImage,
  MobileInfoIcon,
  MobileInfoOverlay,
  MobileInfoCard,
  MobileInfoTitle,
  MobileInfoClose,
  ImageCounter,
  DotIndicator,
  SwipeableCarousel,
} from "../component/home/styleHome.jsx";

export const ImageCarousel = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [showMobileInfo, setShowMobileInfo] = useState(false);
  const timeoutRef = useRef(null);
  const touchStartRef = useRef(null);
  const touchEndRef = useRef(null);
  const { isMobile } = useMobile(480);

  const resetTimeout = useCallback(() => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
  }, []);

  const goNext = useCallback(() => {
    if (images.length > 0) {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }
  }, [images.length]);

  const goPrev = useCallback(() => {
    if (images.length > 0) {
      setCurrentIndex(
        (prevIndex) => (prevIndex - 1 + images.length) % images.length
      );
    }
  }, [images.length]);

  // Touch/swipe handlers for mobile
  const handleTouchStart = (e) => {
    if (!isMobile) return;
    touchStartRef.current = e.targetTouches[0].clientX;
  };

  const handleTouchMove = (e) => {
    if (!isMobile) return;
    touchEndRef.current = e.targetTouches[0].clientX;
  };

  const handleTouchEnd = () => {
    if (!isMobile || !touchStartRef.current || !touchEndRef.current) return;

    const distance = touchStartRef.current - touchEndRef.current;
    const minSwipeDistance = 50;

    if (Math.abs(distance) < minSwipeDistance) return;

    if (distance > 0) {
      // Swipe left - go to next image
      goNext();
    } else {
      // Swipe right - go to previous image
      goPrev();
    }

    touchStartRef.current = null;
    touchEndRef.current = null;
  };

  const toggleMobileInfo = () => {
    setShowMobileInfo(!showMobileInfo);
  };

  const closeMobileInfo = () => {
    setShowMobileInfo(false);
  };

  const goToImage = (index) => {
    setCurrentIndex(index);
  };

  useEffect(() => {
    resetTimeout();
    if (images.length > 1 && !showMobileInfo) {
      timeoutRef.current = window.setTimeout(goNext, 5000);
    }
    return () => {
      resetTimeout();
    };
  }, [currentIndex, images.length, goNext, resetTimeout, showMobileInfo]);

  if (!images || images.length === 0) {
    return (
      <div style={{ textAlign: "center", padding: "2rem" }}>
        No images to display.
      </div>
    );
  }

  return (
    <SwipeableCarousel>
      <CarouselWrapper
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
      >
        {images.map((image, index) => (
          <ImageContainer key={image.id} $isActive={index === currentIndex}>
            <StyledImage src={image.imageUrl} alt={image.title} />
          </ImageContainer>
        ))}

        {/* Mobile Info Icon - Top Right */}
        {isMobile && (
          <MobileInfoIcon onClick={toggleMobileInfo}>
            <InfoIcon />
          </MobileInfoIcon>
        )}

        {/* Mobile Info Overlay */}
        {isMobile && (
          <MobileInfoOverlay
            $isVisible={showMobileInfo}
            onClick={closeMobileInfo}
          >
            <MobileInfoCard onClick={(e) => e.stopPropagation()}>
              <MobileInfoTitle>{images[currentIndex].title}</MobileInfoTitle>
              <MobileInfoClose onClick={closeMobileInfo}>✕</MobileInfoClose>
            </MobileInfoCard>
          </MobileInfoOverlay>
        )}

        {/* Desktop Overlay - Hidden on Mobile */}
        <Overlay>
          <InfoBox>
            <InfoIcon />
            <InfoText>{images[currentIndex].title}</InfoText>
          </InfoBox>

          {images.length > 1 && (
            <ControlsContainer>
              <NavButton onClick={goPrev} aria-label="Previous image">
                <PrevIcon />
              </NavButton>
              <NavButton onClick={goNext} aria-label="Next image">
                <NextIcon />
              </NavButton>
            </ControlsContainer>
          )}
        </Overlay>
      </CarouselWrapper>

      {/* Mobile Image Dots */}
      {isMobile && images.length > 1 && (
        <ImageCounter>
          {images.map((_, index) => (
            <DotIndicator
              key={index}
              $isActive={index === currentIndex}
              onClick={() => goToImage(index)}
            />
          ))}
        </ImageCounter>
      )}
    </SwipeableCarousel>
  );
};
