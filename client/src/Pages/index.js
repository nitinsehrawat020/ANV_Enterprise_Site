import styled from "styled-components";
import { device } from "../Styles/Theme";

export const Main = styled.main`
  grid-area: main;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 2rem;
  /* padding: 0rem 1rem; */

  @media ${device.phnAndTab} {
    gap: 1rem;
  }
`;
