import styled from "styled-components";
import { device } from "../../Styles/Theme";

export const Content = styled.main`
  grid-area: main;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  padding: 0rem 1rem;
  &::-webkit-scrollbar {
    width: 0px;
  }

  @media ${device.phnAndTab} {
    /* gap: 1rem; */
  }
`;
