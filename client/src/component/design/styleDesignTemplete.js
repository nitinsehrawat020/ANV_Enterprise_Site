import styled from "styled-components";
import { device } from "../../Styles/Theme";
export const StyleDesignTemplete = styled.div`
  width: 100%;
  max-width: 1200px;
  height: fit-content;
  display: flex;
  align-items: flex-start;
  justify-content: center;
  gap: 40px;
  padding: 1rem 0rem;
  flex-direction: column;
`;

export const HeadingImage = styled.div`
  width: 100%;
  height: 440px;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 1rem;
  flex-direction: column;
  background-image: url("/pictures/image/DesignBackground.png");
  background-repeat: no-repeat;
  background-size: cover;
  border-radius: 2rem;
  @media ${device.mobile} {
    height: 380px;
  }
`;

export const HeadingTitle = styled.div`
  font-size: 42px;
  font-weight: 700;
  text-transform: capitalize;
  color: var(--color-orange);
  text-align: center;
`;

export const HeadingPara = styled.div`
  width: 60%;
  text-align: center;
  color: var(--color-white);
  font-size: clamp(1rem, 2vw, 1.5rem);

  @media ${device.tablet} {
    width: 70%;
  }
  @media ${device.mobile} {
    width: 100%;
  }
`;

export const DesignContainer = styled.div`
  width: 100%;
  height: fit-content;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 24px;
`;

export const DesignFilterContainer = styled.div`
  width: 100%;
  height: fit-content;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  flex-direction: row;
`;

export const DesignFilter = styled.div`
  width: fit-content;
  height: fit-content;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0px;
  background-color: var(--color-white);
  padding: 8px;
  border-radius: 8px;
  border: 1px solid var(--color-black);
`;
export const DesignFilterSelect = styled.select`
  width: fit-content;
  height: fit-content;
  border: none;
  outline: none;
  border-radius: 4px;
  padding: 4px;
  background-color: transparent;
  font-size: 24px;

  &:focus {
    outline: none;
    border: none;
    box-shadow: none;
  }
`;

export const DesignOption = styled.option`
  font-size: 24px;
  width: fit-content;
  height: fit-content;
  border-radius: 4px;
`;

export const CardDesignContainer = styled.div`
  width: 100%;
  height: 950px; /* Fixed height to contain 6 designs (2 rows × 420px + gaps) */
  display: flex;
  align-items: flex-start;
  justify-content: space-evenly;
  flex-wrap: wrap;
  gap: 2rem;
  padding: 2rem;
  border-radius: 24px;
  overflow-y: auto; /* Enable scrolling if content exceeds fixed height */
  background-color: var(--color-floralwhite);

  @media ${device.tablet} {
    height: 1350px; /* Adjusted for tablet view (3 rows × 420px + gaps) */
  }

  @media ${device.mobile} {
    height: 2200px; /* Adjusted for mobile view (5 rows × 420px + gaps) */
    justify-content: center;
  }
`;

export const DesignCard = styled.div`
  width: 300px;
  position: relative;
  border-radius: 20px;
  height: 420px;
  overflow: hidden;

  text-align: center;
  font-size: var(--font-size-16);
  color: var(--color-gray);
  font-family: var(--font-roboto);
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.25);
`;

export const DesignImage = styled.div`
  width: 100%;
  height: 70%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: stretch;
  background-image: ${(props) => `url("${props.img}")`};
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  position: relative;

  span {
    position: absolute;
    display: flex;
    align-items: center;
    justify-content: center;
    top: 12px;
    right: 12px;
    padding: 8px;
    border-radius: 8px;
    background-color: var(--color-white);
    cursor: pointer;
    transition: all 0.3s ease;

    &:hover {
      background-color: var(--color-floralwhite);
      transform: scale(1.1);
      box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
    }
  }
  p {
    background-color: var(--color-gray-100);
    position: absolute;
    bottom: 10px;
    left: 15px;
    padding: 4px 12px;
    border-radius: 8px;
    text-transform: capitalize;
    color: var(--color-white);
    font-size: 12px;
    font-weight: 200;
  }
`;

export const FavoriteButton = styled.span`
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  top: 12px;
  right: 12px;
  padding: 8px;
  border-radius: 8px;
  background-color: var(--color-white);
  cursor: pointer;
  transition: all 0.3s ease;
  color: ${(props) => (props.$isFavorite ? "#ff4444" : "#666")};
  font-size: 24px;

  &:hover {
    background-color: var(--color-floralwhite);
    transform: scale(1.1);
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
    color: ${(props) => (props.$isFavorite ? "#ff2222" : "#ff4444")};
  }

  &:active {
    transform: scale(0.95);
  }
`;

export const CardDetails = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: stretch;
  flex-direction: column;
  padding: 1rem;
  height: 30%; /* Take remaining height of the card */
`;

export const CardInfo = styled.div`
  width: 100%;
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
  flex-direction: column;
  flex: 1; /* This will make it grow to fill available space */
  gap: 0.5rem;
`;

export const CardHeading = styled.div`
  width: 100%;
  height: fit-content;
  text-align: left;
  display: flex;
  font-weight: 700;
  text-transform: capitalize;
  flex-shrink: 0; /* Prevent shrinking */
`;

export const CardDesc = styled.div`
  flex: 1; /* This will take all available space */
  text-align: left;
  display: flex;
  align-items: flex-start;
  overflow: hidden;
  text-overflow: ellipsis;
  font-size: 12px;
  font-weight: 300;
`;

export const CardButton = styled.button`
  align-self: flex-end;
  flex-shrink: 0; /* Prevent shrinking */
  padding: 0.5rem 1rem;
  background-color: var(--color-orange);
  color: white;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  font-weight: 500;
  margin-top: auto; /* Push to bottom */

  &:hover {
    background-color: var(--color-orange-dark);
    transform: translateY(-2px);
  }

  transition: all 0.2s ease;
`;

// Design Modal Styles
export const DesignModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.5);
  backdrop-filter: blur(4px);
  z-index: 1000;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 20px;
`;

export const DesignModalContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
  max-width: 900px;
  width: 100%;
  background-color: var(--color-floralwhite);
  border-radius: 16px;
  overflow: hidden;
  position: relative;

  @media ${device.tablet} {
    max-width: 700px;
    gap: 20px;
  }

  @media ${device.mobile} {
    max-width: 100%;
    gap: 16px;
    border-radius: 12px;
  }
`;

export const DesignModalCloseButton = styled.button`
  position: absolute;
  top: 12px;
  right: 12px;
  background: rgba(255, 255, 255, 0.9);
  border: none;
  border-radius: 50%;
  width: 32px;
  height: 32px;
  cursor: pointer;
  font-size: 18px;
  z-index: 10;
  display: flex;
  align-items: center;
  justify-content: center;

  &:hover {
    background: rgba(255, 255, 255, 1);
    transform: scale(1.1);
  }
`;

export const ModalCarouselContainer = styled.div`
  width: 100%;
  height: 400px;
  position: relative;
  overflow: hidden;
  border-radius: 12px 12px 0 0;

  @media ${device.tablet} {
    height: 350px;
  }

  @media ${device.mobile} {
    height: 300px;
  }
`;

// Carousel styled components
export const CarouselContainer = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  overflow: hidden;
`;

export const CarouselImageContainer = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
`;

export const CarouselImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: opacity 0.3s ease;
`;

export const CarouselButton = styled.button`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  background-color: rgba(255, 255, 255, 0.6);
  border: none;
  border-radius: 50%;
  width: 32px;
  height: 32px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  z-index: 10;
  transition: all 0.3s ease;
  padding: 0;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);

  svg {
    font-size: 18px;
  }

  &:hover {
    background-color: rgba(255, 255, 255, 0.9);
    transform: translateY(-50%) scale(1.05);
  }

  &.prev {
    left: 10px;
  }

  &.next {
    right: 10px;
  }

  @media ${device.mobile} {
    width: 28px;
    height: 28px;

    svg {
      font-size: 16px;
    }
  }
`;

export const CarouselDots = styled.div`
  position: absolute;
  bottom: 15px;
  left: 0;
  right: 0;
  display: flex;
  justify-content: center;
  gap: 8px;
`;

export const CarouselDot = styled.button`
  width: 10px;
  height: 10px;
  border-radius: 50%;
  border: none;
  background-color: ${(props) =>
    props.$active ? "var(--color-orange)" : "rgba(255, 255, 255, 0.7)"};
  cursor: pointer;
  padding: 0;
  transition: all 0.3s ease;

  &:hover {
    transform: scale(1.2);
  }
`;

export const DesignDetailsContent = styled.div`
  padding: 24px;
  display: flex;
  flex-direction: column;
  gap: 20px;

  @media ${device.tablet} {
    padding: 20px;
    gap: 16px;
  }

  @media ${device.mobile} {
    padding: 16px;
    gap: 12px;
  }
`;

export const DesignTitle = styled.h2`
  font-size: 28px;
  font-weight: 700;
  color: var(--color-gray-100);
  margin: 0;
  text-transform: capitalize;

  @media ${device.tablet} {
    font-size: 24px;
  }

  @media ${device.mobile} {
    font-size: 20px;
  }
`;

export const DesignDescription = styled.p`
  font-size: 16px;
  color: var(--color-dimgray);
  line-height: 1.6;
  margin: 0;

  @media ${device.mobile} {
    font-size: 14px;
  }
`;

export const DesignMeta = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 16px;
  align-items: center;

  @media ${device.mobile} {
    gap: 12px;
  }
`;

export const DesignCategory = styled.span`
  background-color: var(--color-orange);
  color: var(--color-white);
  padding: 6px 12px;
  border-radius: 20px;
  font-size: 14px;
  font-weight: 500;
  text-transform: capitalize;

  @media ${device.mobile} {
    font-size: 12px;
    padding: 4px 8px;
  }
`;

export const DesignRating = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  font-size: 16px;
  color: var(--color-gray-100);

  @media ${device.mobile} {
    font-size: 14px;
    gap: 6px;
  }
`;

export const StarRating = styled.div`
  display: flex;
  gap: 2px;
  color: #ffa500;
`;

export const ModalActionButtons = styled.div`
  display: flex;
  gap: 16px;
  margin-top: 16px;
  width: 100%;

  @media ${device.mobile} {
    flex-direction: column;
    gap: 12px;
  }
`;

export const ModalFavoriteButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 6px;
  padding: 10px 16px;
  border: 1px solid
    ${(props) => (props.$isFavorite ? "#ff4444" : "var(--color-gray-100)")};
  background-color: ${(props) =>
    props.$isFavorite ? "#ff4444" : "transparent"};
  color: ${(props) => (props.$isFavorite ? "white" : "var(--color-gray-100)")};
  border-radius: 6px;
  font-size: 14px;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.3s ease;
  flex: 1;
  white-space: nowrap;
  min-width: 0;

  svg {
    flex-shrink: 0;
    font-size: 16px;
  }

  span {
    overflow: hidden;
    text-overflow: ellipsis;
  }

  &:hover {
    background-color: ${(props) => (props.$isFavorite ? "#ff2222" : "#ff4444")};
    color: white;
    border-color: ${(props) => (props.$isFavorite ? "#ff2222" : "#ff4444")};
    transform: translateY(-1px);
  }

  @media ${device.mobile} {
    padding: 8px 12px;
    font-size: 13px;
  }
`;

export const ModalRequestButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 6px;
  padding: 10px 16px;
  border: none;
  background-color: var(--color-orange);
  color: white;
  border-radius: 6px;
  font-size: 14px;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.3s ease;
  flex: 1;

  &:hover {
    background-color: #ff8c42;
    transform: translateY(-1px);
    box-shadow: 0 2px 8px rgba(255, 140, 66, 0.3);
  }

  @media ${device.mobile} {
    padding: 8px 12px;
    font-size: 13px;
  }
`;

export const PaginationContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;

  padding: 20px 0;

  @media ${device.tablet} {
    margin-top: 30px;
    padding: 15px 0;
  }

  @media ${device.mobile} {
    margin-top: 20px;
    padding: 10px 0;
  }
`;
