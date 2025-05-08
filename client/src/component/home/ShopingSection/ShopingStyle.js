import styled from "styled-components";
import { device } from "../../../Styles/Theme";

//shoping section
export const StyledShoping = styled.section`
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;
export const BackgroundConnect = styled.div`
  width: 100%;
  height: 20%;
  max-width: 1200px;

  position: absolute;

  z-index: 0;
  background-color: var(--color-background-400);

  @media ${device.mobile} {
    /* opacity: 0; */
    height: 20%;
    width: 90%;
  }
`;

export const ShopingContainer = styled.div`
  width: 100%;
  max-width: 1200px;
  display: flex;
  align-items: center;
  flex-direction: column;
  gap: 2rem;
  @media ${device.tablet} {
    gap: 1.5rem;
  }
  @media ${device.mobile} {
    gap: 1.5rem;
  }
`;
export const ShopingTitle = styled.div`
  /* background: linear-gradient(180deg, #e7c067, #816b3a); */
  border-radius: var(--br-l);
  padding: 0.7rem;
  display: flex;
  justify-content: center;
  align-items: center;
  color: var(--color-white-500);
`;

//FalseCeilDesign

export const StyledModle = styled.div`
  display: flex;
  width: 100%;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

export const ModleContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 3rem;
  /* padding: 3rem; */

  @media ${device.laptop} {
    padding: 1rem;
  }
  @media ${device.tablet} {
    flex-direction: ${(props) => (props.reverse ? `column-reverse` : `column`)};
    gap: 1rem;
  }
  @media ${device.mobile} {
    flex-direction: ${(props) => (props.reverse ? `column-reverse` : `column`)};
    gap: 1rem;
  }
`;

export const ModleTitle = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: var(--padding-ls) var(--padding-s);
  color: #fff;
  background: var(--color-background-800);
  border-radius: var(--br-l);
  gap: 1rem;
  z-index: 1;

  @media ${device.laptop} {
    padding: 1.8rem 1.3rem;
  }
  @media ${device.tablet} {
    padding: 1rem 1rem;
  }
  @media ${device.mobile} {
    padding: 1rem 1rem;
  }
`;

export const Title = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  /* min-width: 280px; */

  span {
    color: #e7c067;
    text-align: center;
  }
`;

export const CardBox = styled.div`
  display: flex;
  align-self: center;
  gap: 1.2rem;
  justify-content: space-between;
  z-index: 1;
  @media ${device.laptop} {
    margin: 0rem;
  }
  @media ${device.tablet} {
    margin: 0rem 1rem;
    gap: 0.9rem;
  }
  @media ${device.mobile} {
    margin: 0rem 1rem;
    gap: 0.7rem;
  }
`;

export const CardContainer = styled.div`
  display: flex;
  overflow: hidden;
  align-items: center;
  justify-content: center;

  img {
    width: 100%;
    height: auto;
    max-width: 15rem;
    border-radius: 0.4rem;
    border: 5px solid var(--color-background-800);

    @media ${device.mobile} {
      width: 80%;
    }
  }
`;
