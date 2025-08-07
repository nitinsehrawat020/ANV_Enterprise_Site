import styled from "styled-components";
import { device } from "../../Styles/Theme";

export const Main = styled.main`
  grid-area: main;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  gap: 2rem;
  padding: 0rem 1rem;

  @media ${device.phnAndTab} {
    gap: 1rem;
  }

  /* iPhone 15/16 specific fix - reduce top gap */
  @media only screen and (device-width: 393px) and (device-height: 852px) and (-webkit-device-pixel-ratio: 3) {
    gap: 0.5rem;
    margin-top: -8px;
  }

  /* iPhone 16 Plus specific fix */
  @media only screen and (device-width: 430px) and (device-height: 932px) and (-webkit-device-pixel-ratio: 3) {
    gap: 0.5rem;
    margin-top: -8px;
  }
`;
