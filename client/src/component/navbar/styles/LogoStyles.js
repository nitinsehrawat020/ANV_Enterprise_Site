import styled from "styled-components";
import { device } from "../../../Styles/Theme";

//Logo
export const StyledLogo = styled.div`
  display: flex;
  align-items: center;
  left: 20px;
`;

export const Img = styled.img`
  height: 4rem;
  width: auto;
  @media ${device.tablet} {
    height: 3rem;
  }
  @media ${device.mobile} {
    height: 3rem;
  }
`;
