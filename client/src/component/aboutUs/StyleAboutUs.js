import styled from "styled-components";
import { device } from "../../Styles/Theme";
export const AboutUsContainer = styled.div`
  width: 100%;
  max-width: 1200px;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-areas: "heading heading" "content carousel";
  gap: 1rem;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    grid-template-areas: "heading" "carousel" "content";
  }
`;
export const Title = styled.div`
  align-self: center;
  display: flex;
  grid-area: heading;
  justify-content: center;
`;
export const Content = styled.div`
  width: 100%;
  grid-area: content;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 1rem;
  text-align: center;
  padding: 2rem;
  @media ${device.tablet} {
  }
`;
export const CarouselContainer = styled.div`
  grid-area: carousel;
  display: flex;
  justify-content: center;
  align-items: center;
`;
export const Span = styled.span``;
export const Span1 = styled.span`
  color: var(--color-black);
`;
export const Numbers = styled.b`
  position: relative;
  line-height: 2.895rem;
`;
export const Description = styled.b`
  position: relative;
  font-size: 0.724rem;
  line-height: 0.772rem;
`;
export const InfoBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: var(--gap-8xs-6);
  border: 2px solid var(--color-background-800);
  padding: 0.6rem;
`;

export const InfoBoxConatiner = styled.div`
  position: relative;
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: 2rem;
  text-align: center;
  font-size: 2rem;
`;
