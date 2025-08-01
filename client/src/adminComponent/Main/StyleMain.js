import styled from "styled-components";
import { device } from "../../Styles/Theme";

export const StyledMain = styled.div`
  grid-area: main;
  justify-self: stretch;
  align-self: stretch;
  background-color: var(--color-background-400);
  overflow: auto;
  position: relative;

  @media ${device.phnAndTab} {
    margin-bottom: 80px;
  }

  @media ${device.mobile} {
    margin-bottom: 70px;
  }
`;
