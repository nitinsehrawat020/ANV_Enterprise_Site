import styled, { css } from "styled-components";
import { device } from "../Styles/Theme";

// const test = css`
//   text-align: center;
//   ${10 > 5 && "background-color: yellow"}
// `;

const Heading = styled.h1`
  ${(props) =>
    props.as === "h1" &&
    css`
      font-size: 3rem;
      font-weight: 600;
      @media ${device.laptop} {
        font-size: 2.5rem;
      }
      @media ${device.tablet} {
        font-size: 2.2rem;
      }
      @media ${device.mobile} {
        font-size: 2rem;
      }
    `}

  ${(props) =>
    props.as === "h2" &&
    css`
      font-size: 2rem;
      font-weight: 600;

      @media ${device.mobile} {
        font-size: 1rem;
      }
    `}
    
  ${(props) =>
    props.as === "h3" &&
    css`
      font-size: 2rem;
      font-weight: 400;

      @media ${device.laptop} {
        font-size: 1.5rem;
      }

      @media ${device.mobile} {
        font-size: 1rem;
      }
    `}
  ${(props) =>
    props.as === "h4" &&
    css`
      font-size: 1rem;
      font-weight: 600;
      text-align: center;
    `}
    
  line-height:1.4;
  z-index: 5;
  @media ${device.phone} {
    line-height: 1;
  }
`;
export default Heading;
