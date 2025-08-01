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
  height: fit-content;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  gap: 1rem;
  padding: 1rem;
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
