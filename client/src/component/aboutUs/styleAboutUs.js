import styled from "styled-components";
import { device } from "../../Styles/Theme";

export const StyleAboutUs = styled.div`
  width: 100%;
  height: fit-content;
  max-width: 1200px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  padding: 1rem;
  gap: 2rem;
`;
export const StyleAboutUsBanner = styled.div`
  width: 100%;
  height: 400px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-image: url("/pictures/aboutUS/AboutUsBanner2.png");
  background-position: center;
  background-repeat: no-repeat;
  border-radius: 24px;
`;

export const AboutUsHeading = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: clamp(1.5rem, 4vw, 4rem);
  font-weight: 700;
  color: var(--color-white);
  text-align: center;
`;

export const AboutUsSubHeading = styled.div`
  width: 70%;
  font-size: clamp(1rem, 2vw, 1.5rem);
  font-weight: 400;
  color: var(--color-white);
  text-align: center;
`;

export const StyleBannerSection = styled.div`
  width: 100%;
  height: fit-content;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: row;
  gap: 1rem;
  @media ${device.tablet} {
    flex-direction: column-reverse;
  }
`;

export const BannerText = styled.div`
  width: 45%;
  height: fit-content;
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  flex-direction: column;
  gap: 1rem;
  @media ${device.tablet} {
    width: 80%;
  }
`;

export const BannerImages = styled.div`
  width: 55%;
  height: fit-content;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  gap: 1rem 2rem;

  @media ${device.tablet} {
    width: 100%;
    gap: 0.75rem 1rem;
  }
`;
export const BannerParagraph = styled.p`
  width: 100%;
  height: fit-content;
  font-size: 1rem;
  font-weight: 300;
`;

export const BannerTextHeading = styled.div`
  font-size: 32px;
  font-weight: 600;
`;

export const ImageStyle = styled.img`
  width: 248px;
  height: 165px;
  border-radius: 12px;
  @media ${device.tablet} {
    width: 155px;
    height: 90px;
  }
`;

export const StyleOurValues = styled.div`
  width: 100%;
  height: fit-content;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  background-color: var(--color-floralwhite);
  padding: 2rem 0rem;
  padding: 2rem;
  border-radius: 24px;
  gap: 2rem;
`;

export const OVHeadingContainer = styled.div`
  width: 100%;
  height: fit-content;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 0.5rem;
`;

export const HeadingOurValues = styled.div`
  height: fit-content;
  display: flex;
  justify-items: center;
  align-items: center;
  font-size: 48px;
  font-weight: 600;
  text-align: center;
`;

export const SubHeadingOurValues = styled.div`
  height: fit-content;
  display: flex;
  justify-items: center;
  align-items: center;
  font-size: 20px;
  font-weight: 300;
  text-align: center;
`;

export const OVCardConatiner = styled.div`
  width: 100%;
  height: fit-content;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  gap: 2rem;
`;

export const StyleOVCard = styled.div`
  width: 280px;
  height: 300px;
  min-width: 280px;
  display: flex;
  align-items: flex-start;
  justify-content: center;
  padding: 48px 16px;
  text-align: center;
  background-color: var(--color-white);
  border-radius: 24px;
  box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.5);
  transform: scale(1);
  animation: all 3sec fade;
  &:hover {
    transform: scale(1.1);
  }
`;

export const OVContainer = styled.div`
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

export const OVCardHeading = styled.div`
  font-size: 20px;
  font-weight: 600;
`;

export const CardDesc = styled.div``;
