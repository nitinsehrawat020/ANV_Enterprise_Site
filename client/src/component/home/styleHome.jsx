import styled from "styled-components";
import { device } from "../../Styles/Theme";

//HERO SECTION
export const StyleHeroSection = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;

  @media ${device.tablet} {
    flex-direction: column-reverse;
  }
`;

export const HeroGroup = styled.div`
  width: 100%;

  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
  flex-direction: column;
  position: relative;
  min-width: 17.5rem;
  text-align: left;
  font-family: var(--font-poppins);
  gap: 1rem;
`;

export const HeroBanner = styled.div`
  width: 100%;
  border-radius: 24px;
  display: flex;
  align-items: center;
  justify-content: center;
  max-width: 590px;
  max-height: 640px;
  overflow: hidden;

  @media ${device.tablet} {
    max-width: 100%;
    max-height: 540px;
  }
  @media ${device.mobile} {
    max-width: 100%;
    max-height: 440px;
  }
`;

export const HeroTextAndButton = styled.div`
  position: relative;
  width: 100%;
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  flex-direction: column;
  gap: 2.5rem;
`;
export const HeroText = styled.div``;

export const HeroHeading = styled.div`
  position: relative;
  text-align: left;
  display: inline-block;
  font-size: var(--font-size-48);
  color: var(--color-gray);
  font-family: var(--font-poppins);
  font-weight: 800;
  max-width: 600px;

  span {
    color: var(--color-orange);
  }

  @media ${device.tablet} {
    font-size: 24px;
    text-align: center;
  }
  @media ${device.laptop} {
    font-size: 32px;
  }
`;

export const HeroParagraph = styled.p`
  max-width: 600px;
  font-family: var(--font-poppin);
  font-size: 17px;
  @media ${device.tablet} {
    font-size: 14px;
    text-align: center;
  }
  @media ${device.laptop} {
    font-size: 15px;
  }
`;
export const HappyUser = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-start;

  @media ${device.tablet} {
    align-items: center;
    justify-content: center;
    gap: 4px;
  }
`;
export const UserImg = styled.img`
  width: 100px;

  @media ${device.tablet} {
    width: 80px;
  }
`;

export const UserText = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: flex-start;
  span {
    font-size: 12px;
  }

  @media ${device.tablet} {
  }
`;

export const HeroButtonGroup = styled.div`
  width: fit-content;
  height: fit-content;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  gap: var(--gap-24);

  @media ${device.tablet} {
    width: 100%;
  }
`;

export const BannerImage = styled.img`
  width: 590px;
  height: 640px;

  @media ${device.laptop} {
    width: 425px;
    height: 445px;
  }
  @media ${device.tablet} {
    width: 325px;
    height: 345px;
    border-radius: 24px;
  }
`;

// STATS SECTION

export const StyleStatsSection = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
  padding: 1.5rem 2.5rem;
  gap: 2rem;
  background-color: var(--color-white);
  border-radius: 24px;
`;

export const StatCard = styled.div`
  width: 88px;
  height: fit-content;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  flex-direction: column;

  span {
    font-size: 48px;

    @media ${device.tablet} {
      font-size: 32px;
    }
    @media ${device.mobile} {
      font-size: 24px;
    }
  }
  p {
    font-size: 20px;
    font-family: var(--font-poppins);
    @media ${device.tablet} {
      font-size: 18px;
    }
    @media ${device.mobile} {
      font-size: 18px;
    }
  }
`;

//Design Section
export const AppContainer = styled.div`
  min-height: fit-content;
  width: 100%;
  max-width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 2rem;
  box-sizing: border-box;
  overflow-x: hidden;

  @media ${device.tablet} {
    padding: 1.5rem;
  }

  @media ${device.mobile} {
    padding: 1rem;
    max-width: 100vw;
  }
`;

export const ContentWrapper = styled.div`
  width: 100%;
  max-width: 72rem; /* 1152px */
  margin: 0 auto;
  box-sizing: border-box;

  @media ${device.tablet} {
    max-width: 100%;
    padding: 0 1rem;
  }

  @media ${device.mobile} {
    padding: 0 0.5rem;
    max-width: 100%;
    overflow-x: hidden;
  }
`;

export const Header = styled.header`
  text-align: center;
  margin-bottom: 3rem;

  @media ${device.tablet} {
    margin-bottom: 2rem;
  }

  @media ${device.mobile} {
    margin-bottom: 1.5rem;
  }
`;

export const Title = styled.h1`
  font-size: 2.25rem; /* 36px */
  font-weight: 700;
  color: #111827;
  line-height: 1.2;

  @media ${device.tablet} {
    font-size: 2rem; /* 32px */
  }

  @media ${device.mobile} {
    font-size: 1.75rem; /* 28px */
  }
`;

export const Subtitle = styled.p`
  margin-top: 0.75rem;
  font-size: 1.125rem; /* 18px */
  color: #4b5563;
  max-width: 42rem;
  margin-left: auto;
  margin-right: auto;
  line-height: 1.6;

  @media ${device.tablet} {
    font-size: 1rem; /* 16px */
    max-width: 100%;
    padding: 0 1rem;
  }

  @media ${device.mobile} {
    font-size: 0.875rem; /* 14px */
    padding: 0 0.5rem;
  }
`;

export const MainContent = styled.main`
  display: flex;
  gap: 3rem;
  align-items: flex-start;
  width: 100%;
  max-width: 100%;
  overflow: hidden;

  @media ${device.laptop} {
    flex-direction: column;
    align-items: center;
    gap: 2rem;
    padding: 0 1rem;
  }

  @media ${device.tablet} {
    flex-direction: column;
    align-items: center;
    gap: 2rem;
  }

  @media ${device.mobile} {
    gap: 1.5rem;
  }
`;

export const CarouselContainer = styled.div`
  width: 100%;
  flex-shrink: 0;
  max-width: 100%;
  overflow: hidden;

  @media (min-width: 1024px) {
    width: 75%;
  }

  @media ${device.laptop} {
    width: 100%;
    max-width: 100%;
    padding: 0 1rem;
  }

  @media ${device.tablet} {
    width: 100%;
    order: 2;
    padding: 0 0.5rem;
  }

  @media ${device.mobile} {
    width: 100%;
    padding: 0;
  }
`;

export const CategoryContainer = styled.div`
  display: flex;
  flex-direction: row;
  gap: 1rem;
  width: 100%;
  justify-content: center;

  @media (min-width: 1024px) {
    flex-direction: column;
    width: auto;
  }

  @media ${device.tablet} {
    flex-direction: row;
    width: 100%;
    order: 1;
    gap: 0.75rem;
  }

  @media ${device.mobile} {
    flex-direction: column;
    gap: 0.5rem;
    align-items: center;
  }
`;

export const CategoryButton = styled.button`
  padding: 0.75rem 2rem;
  width: 12rem;
  border-radius: 9999px;
  font-size: 1.125rem;
  font-weight: 600;
  transition: all 0.3s ease-in-out;
  cursor: pointer;
  border: 2px solid transparent;

  &:focus {
    outline: none;
    box-shadow: 0 0 0 2px #f9f7f5, 0 0 0 4px #fbbf24;
  }

  @media ${device.tablet} {
    padding: 0.625rem 1.5rem;
    width: 10rem;
    font-size: 1rem;
  }

  @media ${device.mobile} {
    padding: 0.5rem 1rem;
    width: 8rem;
    font-size: 0.875rem;
  }

  ${({ $isActive }) =>
    $isActive
      ? `
        background-color: #F59E0B; /* yellow-500 */
        color: white;
        box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05);
      `
      : `
        background-color: white;
        color: #1F2937; /* gray-800 */
        border-color: #D1D5DB; /* gray-300 */
        &:hover {
          background-color: #F3F4F6; /* gray-100 */
        }
      `}
`;

export const InfoIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    style={{
      height: "1.5rem",
      width: "1.5rem",
      marginRight: "0.75rem",
      color: "#374151",
    }}
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
    strokeWidth={2}
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
    />
  </svg>
);

export const PrevIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    style={{ height: "1.5rem", width: "1.5rem" }}
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
    strokeWidth={2}
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M10 19l-7-7m0 0l7-7m-7 7h18"
    />
  </svg>
);

export const NextIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    style={{ height: "1.5rem", width: "1.5rem" }}
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
    strokeWidth={2}
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M14 5l7 7m0 0l-7 7m7-7H3"
    />
  </svg>
);

export const CarouselWrapper = styled.div`
  position: relative;
  width: 100%;
  max-width: 100%;
  box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.25);
  border-radius: 1rem;
  overflow: hidden;
  padding-top: 56.25%; /* 16:9 Aspect Ratio */

  @media ${device.laptop} {
    border-radius: 0.875rem;
    box-shadow: 0 22px 45px -12px rgba(0, 0, 0, 0.22);
    padding-top: 55%; /* Better aspect ratio for laptop screens */
    max-width: 100%;
    margin: 0 auto;
  }

  @media ${device.tablet} {
    border-radius: 0.75rem;
    box-shadow: 0 20px 40px -12px rgba(0, 0, 0, 0.2);
    padding-top: 65%;
  }

  @media ${device.mobile} {
    border-radius: 0.5rem;
    box-shadow: 0 15px 30px -8px rgba(0, 0, 0, 0.15);
    padding-top: 75%; /* Taller aspect ratio for mobile - more square */
  }
`;

export const ImageContainer = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  transition: opacity 1s ease-in-out;
  opacity: ${({ $isActive }) => ($isActive ? 1 : 0)};
`;

export const StyledImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

export const Overlay = styled.div`
  position: absolute;
  bottom: 1.5rem;
  left: 1.5rem;
  right: 1.5rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 1rem;
  z-index: 10;

  @media ${device.laptop} {
    bottom: 1.25rem;
    left: 1.25rem;
    right: 1.25rem;
    gap: 0.875rem;
  }

  @media ${device.tablet} {
    bottom: 1rem;
    left: 1rem;
    right: 1rem;
    gap: 0.75rem;
  }

  @media ${device.mobile} {
    display: none; /* Hide overlay on mobile */
  }
`;

export const InfoBox = styled.div`
  background-color: rgba(255, 255, 255, 0.9);
  backdrop-filter: blur(4px);
  border-radius: 9999px;
  padding: 0.5rem 1rem;
  display: flex;
  align-items: center;
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1),
    0 2px 4px -1px rgba(0, 0, 0, 0.06);
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;

  @media ${device.laptop} {
    padding: 0.4375rem 0.875rem;
  }

  @media ${device.tablet} {
    padding: 0.375rem 0.75rem;
  }

  @media ${device.mobile} {
    padding: 0.25rem 0.5rem;
    margin-bottom: 0.5rem;
  }
`;

export const InfoText = styled.span`
  font-weight: 600;
  color: #1f2937;

  @media ${device.laptop} {
    font-size: 0.9375rem;
  }

  @media ${device.tablet} {
    font-size: 0.875rem;
  }

  @media ${device.mobile} {
    font-size: 0.75rem;
  }
`;

export const ControlsContainer = styled.div`
  display: flex;
  gap: 0.75rem;

  @media ${device.tablet} {
    gap: 0.5rem;
  }

  @media ${device.mobile} {
    gap: 0.375rem;
  }
`;

export const NavButton = styled.button`
  background-color: rgba(255, 255, 255, 0.9);
  backdrop-filter: blur(4px);
  border-radius: 9999px;
  padding: 0.75rem;
  color: #1f2937;
  border: none;
  cursor: pointer;
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1),
    0 2px 4px -1px rgba(0, 0, 0, 0.06);
  transition: transform 0.2s, background-color 0.2s;
  display: flex;
  align-items: center;
  justify-content: center;

  &:hover {
    background-color: white;
    transform: scale(1.1);
  }

  &:focus {
    outline: none;
    box-shadow: 0 0 0 2px #f9f7f5, 0 0 0 4px #1f2937;
  }

  @media ${device.tablet} {
    padding: 0.625rem;
  }

  @media ${device.mobile} {
    padding: 0.5rem;

    &:hover {
      transform: scale(1.05); /* Reduced scale for mobile */
    }
  }
`;

// Mobile-specific carousel components
export const MobileInfoIcon = styled.div`
  position: absolute;
  top: 1rem;
  right: 1rem;
  background-color: rgba(255, 255, 255, 0.9);
  backdrop-filter: blur(4px);
  border-radius: 50%;
  padding: 0.5rem;
  cursor: pointer;
  z-index: 20;
  transition: all 0.2s ease;
  display: none;

  @media ${device.mobile} {
    display: flex;
    align-items: center;
    justify-content: center;
  }

  &:hover {
    background-color: white;
    transform: scale(1.05);
  }
`;

export const MobileInfoOverlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 30%; /* Only cover top portion */
  background: linear-gradient(
    to bottom,
    rgba(0, 0, 0, 0.7) 0%,
    rgba(0, 0, 0, 0.3) 70%,
    transparent 100%
  );
  display: flex;
  align-items: flex-start;
  justify-content: center;
  padding-top: 2rem;
  z-index: 30;
  opacity: ${(props) => (props.$isVisible ? 1 : 0)};
  visibility: ${(props) => (props.$isVisible ? "visible" : "hidden")};
  transition: all 0.3s ease;
`;

export const MobileInfoCard = styled.div`
  background-color: white;
  border-radius: 0.75rem;
  padding: 1rem 1.25rem;
  margin: 0 1rem;
  max-width: 250px;
  text-align: center;
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.15);
  backdrop-filter: blur(10px);
`;

export const MobileInfoTitle = styled.h3`
  margin: 0;
  font-size: 1rem;
  font-weight: 600;
  color: #1f2937;
  line-height: 1.4;
`;

export const MobileInfoClose = styled.button`
  background: none;
  border: none;
  font-size: 1.25rem;
  color: #6b7280;
  cursor: pointer;
  padding: 0.5rem;
  margin-top: 0.75rem;
  border-radius: 0.375rem;
  transition: all 0.2s ease;

  &:hover {
    color: #374151;
    background-color: #f3f4f6;
  }
`;

export const ImageCounter = styled.div`
  display: none;
  text-align: center;
  margin-top: 1rem;

  @media ${device.mobile} {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 0.5rem;
  }
`;

export const DotIndicator = styled.div`
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background-color: ${(props) => (props.$isActive ? "#F59E0B" : "#D1D5DB")};
  transition: all 0.3s ease;
  cursor: pointer;

  &:hover {
    background-color: ${(props) => (props.$isActive ? "#F59E0B" : "#9CA3AF")};
    transform: scale(1.1);
  }

  @media ${device.laptop} {
    width: 10px;
    height: 10px;
  }

  @media ${device.mobile} {
    width: 12px;
    height: 12px;
  }
`;

export const SwipeableCarousel = styled.div`
  position: relative;
  width: 100%;
  max-width: 100%;
  touch-action: pan-y;
  overflow: hidden;

  @media ${device.mobile} {
    touch-action: pan-y;
    width: 100%;
    max-width: 100%;
  }
`;

//How it works

export const StyleHowItWork = styled.div`
  width: 100%;
  height: fit-content;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  flex-direction: column;
  gap: 32px;
`;

export const HIWHeadingContainer = styled.div`
  width: fit-content;
  height: fit-content;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  flex-direction: column;
`;

export const HIWHeading = styled.div`
  color: var(--color-black);
  font-size: 48px;
  span {
    color: var(--color-orange);
  }
`;

export const HIWSubHeading = styled.div`
  width: fit-content;
  font-size: 20px;
  padding: 1rem;
`;
export const CardContainer = styled.div`
  width: 100%;
  height: fit-content;
  display: flex;
  align-items: center;
  justify-content: stretch;
  gap: 1.5rem;
  overflow-x: scroll;

  /* Hide scrollbar for Chrome, Safari and Opera */
  &::-webkit-scrollbar {
    display: none;
  }

  /* Hide scrollbar for IE, Edge and Firefox */
  -ms-overflow-style: none;
  scrollbar-width: none;

  @media ${device.desktop} {
    width: 100%;
  }
  @media ${device.laptop} {
    width: 768px;
  }
  @media ${device.tablet} {
    width: 480px;
  }
  @media ${device.mobile} {
    width: 320px;
  }
`;

export const DisplaySpace = styled.div`
  width: 100%;
  height: fit-content;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 24px;
  overflow: scroll;

  /* Hide scrollbar for Chrome, Safari and Opera */
  &::-webkit-scrollbar {
    display: none;
  }

  /* Hide scrollbar for IE, Edge and Firefox */
  -ms-overflow-style: none;
  scrollbar-width: none;
`;

export const StyleHIWCard = styled.div`
  width: 280px;
  height: 380px;
  min-width: 280px;
  display: flex;
  align-items: flex-start;
  justify-content: center;
  padding: 48px 16px;
  text-align: center;
  background-color: var(--color-white);
  border-radius: 24px;
  box-shadow: 0px 4px 2px rgba(0, 0, 0, 0.1);
`;

export const HIWContainer = styled.div`
  width: 100%;
  height: fit-content;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  gap: 1rem;
`;

export const HeadingAndIcon = styled.div`
  width: fit-content;
  height: fit-content;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 1rem;
`;

export const Icon = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 80px;
`;

export const HIWCardHeading = styled.div`
  font-size: 24px;
  font-weight: 500;
`;

export const CardDesc = styled.div``;

export const StyleContactUs = styled.div`
  width: 100%;
  height: fit-content;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 32px;
`;

export const ContactHeadingContainer = styled.div`
  width: 100%;
  height: fit-content;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

export const ContactHeading = styled.div`
  color: var(--color-black);
  font-size: 48px;
  text-align: center;

  span {
    color: var(--color-orange);
  }

  @media ${device.tablet} {
    font-size: 36px;
  }

  @media ${device.mobile} {
    font-size: 28px;
  }
`;

export const ContactSubHeading = styled.div`
  width: fit-content;
  font-size: 20px;
  padding: 0rem 1rem;
  text-align: center;

  @media ${device.tablet} {
    font-size: 18px;
  }

  @media ${device.mobile} {
    font-size: 16px;
  }
`;

export const FornAndImageConatiner = styled.div`
  width: 100%;
  height: fit-content;
  display: flex;
  flex-direction: row;
  align-items: stretch;
  justify-content: center;
  padding: 34px;
  gap: 26px;
  background-color: var(--color-floralwhite);
  border-radius: 12px;

  @media ${device.laptop} {
    padding: 24px;
    gap: 20px;
  }

  @media ${device.tablet} {
    flex-direction: column;
    padding: 20px;
    gap: 24px;
  }

  @media ${device.mobile} {
    padding: 16px;
    gap: 20px;
  }
`;

export const ContactImageContainer = styled.div`
  width: 548px;
  height: 536px;
  display: flex;
  flex-direction: column;
  justify-content: end;
  align-items: flex-start;
  padding: 24px 24px;
  background-image: url("/pictures/image/contactUs.png");
  background-size: cover;
  background-position: center;
  color: var(--color-white);
  border-radius: 8px;

  span {
    display: flex;
    align-items: center;
    justify-content: flex-start;
    font-size: 24px;
    gap: 8px;
  }

  @media ${device.laptop} {
    width: 450px;
    height: 450px;
    padding: 20px;
  }

  @media ${device.tablet} {
    width: 100%;
    height: 400px;
    padding: 16px;

    span {
      font-size: 20px;
    }
  }

  @media ${device.mobile} {
    height: 350px;

    span {
      font-size: 16px;
      gap: 4px;
    }
  }
`;

export const FormContainer = styled.div`
  width: 569px;
  height: fit-content;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  @media ${device.laptop} {
    width: 450px;
  }

  @media ${device.tablet} {
    width: 100%;
  }
`;

export const ContactForm = styled.form`
  width: 100%;
  height: fit-content;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 24px;

  @media ${device.mobile} {
    gap: 16px;
  }
`;

export const FieldGroup = styled.div`
  width: 100%;
  height: fit-content;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 1rem;
`;

export const FeildAndLabelGroup = styled.div`
  width: 100%;
  height: fit-content;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  flex-direction: column;
`;

export const StyleLabel = styled.label`
  text-align: left;
  font-size: 20px;

  @media ${device.tablet} {
    font-size: 18px;
  }

  @media ${device.mobile} {
    font-size: 16px;
  }
`;

export const StyleInput = styled.input`
  width: 100%;
  position: relative;
  border-radius: 8px;
  background-color: var(--color-gray);
  border: 2px solid var(--color-black);
  box-sizing: border-box;
  height: 3rem;
  padding: 0 10px;
  font-size: 16px;

  @media ${device.mobile} {
    height: 2.5rem;
    font-size: 14px;
  }
`;

export const StyleTextArea = styled.textarea`
  width: 100%;
  position: relative;
  border-radius: 8px;
  background-color: var(--color-gray);
  border: 2px solid var(--color-black);
  box-sizing: border-box;
  padding: 10px;
  font-size: 16px;
  font-family: inherit;

  @media ${device.mobile} {
    font-size: 14px;
  }
`;

export const StyleSubmit = styled.button`
  width: fit-content;
  height: 48px;
  border-radius: 8px;
  background-color: var(--color-white);
  border: 2px solid var(--color-gray-100);
  box-sizing: border-box;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  padding: 0.25rem 2rem;
  gap: 0.5rem;
  text-align: left;
  font-size: 1.5rem;
  color: var(--color-gray);
  font-family: var(--font-poppins);
  cursor: pointer;
  transition: all 0.2s ease-in-out;

  &:hover {
    background-color: var(--color-gray-100);
    transform: translateY(-2px);
  }

  @media ${device.mobile} {
    height: 40px;
    font-size: 1.2rem;
    padding: 0.25rem 1.5rem;
  }
`;
