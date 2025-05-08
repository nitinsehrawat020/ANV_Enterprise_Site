import styled from "styled-components";
import { device } from "../../Styles/Theme";
export const StyleTitleContainer = styled.div`
  width: 100vw;
  max-width: 1200px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 1.375rem;
  color: var(--color-white-500);
`;
export const Paragrah = styled.p`
  width: 100%;
  max-width: 500px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  flex-direction: column;
  font-size: var(--font-size-xs);
  color: var(--color-white-500);
  font-weight: 500;
  margin: 0;
  padding: 1rem;
  text-align: center;

  span {
    display: block;
  }
`;

export const StyleCardContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: auto 1fr;
  grid-template-areas: "category" "card";
  width: 100vw;
  max-width: 1200px;
  padding: 0rem 1rem;
  margin: 2rem 0rem;
`;

export const Category = styled.div`
  grid-area: category;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: var(--color-background-400);
  border-radius: var(--br-l) var(--br-l) 0px 0px;
  padding: 0.625rem;
`;

export const CardContainer = styled.div`
  grid-area: card;
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  gap: 15px;
  background-color: var(--color-background-800);
  padding: 1rem;
  border-radius: 0px 0px var(--br-l) var(--br-l);
  /* Prevent horizontal scrolling by default */

  @media ${device.tablet} {
    /* max-width: 720px; */
    justify-content: start;
    display: flex;
    flex-wrap: nowrap; /* Prevent wrapping on mobile and tablet */
    overflow-x: auto; /* Enable horizontal scrolling on mobile and tablet */
  }
  @media ${device.mobile} {
    /* max-width: 320px; */
    justify-content: start;

    display: flex;
    flex-wrap: nowrap; /* Prevent wrapping on mobile and tablet */
    overflow-x: auto; /* Enable horizontal scrolling on mobile and tablet */
  }
`;

export const StyleCard = styled.div`
  width: 250px;
  min-width: 250px;
  height: 250px;
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: center;
  background-image: url(${(props) => props.img});
  background-size: cover;
  background-position: center;
  padding: 0.4rem 0rem;
  border-radius: 15px;
  color: var(--color-white-500);
  text-align: center;
  cursor: pointer;
  transition: box-shadow 0.5s ease-in-out;
  &:hover {
    box-shadow: var(--shadow-lg);
  }
`;

export const CardInformation = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  background-color: var(--color-background-400);
  padding: 0.5rem 1rem;
  gap: 0.4rem;
  font-size: 0.6rem;
  border-radius: var(--br-l);

  @media ${device.phnAndTab} {
    padding: 0.2rem 0.5rem;
    gap: 0.2rem;
  }
`;

export const PaginationContainer = styled.div`
  background: var(--surface-card);
  padding: 0rem;
  border-radius: 10px;
  margin-bottom: 1rem;
`;

export const InformationContainer = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: 450px 1fr;
  grid-template-areas: "image content";

  @media ${device.phnAndTab} {
    grid-template-columns: 1fr;
    grid-template-areas: "image" "content";
  }
`;

export const ImageContainer = styled.div`
  grid-area: image;
  display: flex;
  justify-content: center;
  align-items: center;
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  @media ${device.phnAndTab} {
    img {
      width: 80%;
      height: 80%;
    }
  }
`;

export const Content = styled.div`
  grid-area: content;
  display: grid;
  grid-template-rows: auto 1fr auto;

  justify-content: center;
  align-items: center;
  gap: 1rem;
  padding: 1rem;
  h2 {
    font-size: clamp(1rem, 2vw, 1.5rem);
    text-align: center;
  }
  p {
    font-size: 1rem;
    text-align: justify;
  }
  span {
    font-size: 0.8rem;
  }

  @media ${device.phnAndTab} {
    /* grid-template-columns: 1fr 1fr;
    grid-template-areas: "heading heading" "content footer"; */
  }
`;

export const Header = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1rem;

  @media ${device.phnAndTab} {
    flex-direction: column;
    gap: 0.5rem;
  }
`;

export const Describtion = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Fotter = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;

  span {
    font-size: 0.8rem;
    display: flex;
    gap: 1rem;
  }
`;
