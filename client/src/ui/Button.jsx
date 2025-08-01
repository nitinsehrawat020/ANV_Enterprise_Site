import styled, { css } from "styled-components";
import { device } from "../Styles/Theme";
const StyleButton = styled.button`
  ${(props) =>
    props.variation === "filled" &&
    css`
      position: relative;
      border-radius: 16px;
      background-color: var(--color-orange);
      border: 3px solid var(--color-orange);
      box-sizing: border-box;
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: center;
      padding: 0.25rem 1.5rem;
      text-align: left;
      font-size: 1.5rem;
      color: var(--color-gray-100);
      font-family: var(--font-poppins);
      font-weight: 500;
      transition: all 0.2s ease;
      gap: 1rem;

      @media ${device.tablet} {
        font-size: 1rem;
        padding: 0.25rem 1rem;
      }

      @media ${device.laptop} {
        font-size: 1.1rem;
        padding: 0.25rem 1.1rem;
      }

      &:hover {
        border: 3px solid var(--color-gray-100);
      }
    `}

  ${(props) =>
    props.variation === "unfilled" &&
    css`
      width: fit-content
      position: relative;
      border-radius: 16px;
      background-color: var(--color-white);
      border: 3px solid var(--color-gray-100);
      box-sizing: border-box;
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: center;
      padding: 0.25rem 1.5rem;
      text-align: left;
      font-size: 1.5rem;
      color: var(--color-gray-100);
      font-family: var(--font-poppins);
      font-weight: 500;
      transition: all 0.2s ease;
      gap: 1rem;

      @media ${device.tablet} {
        font-size: 1rem;
        padding: 0.25rem 1rem;
      }
       @media ${device.laptop} {
            font-size: 1.1rem;
            padding: 0.25rem 1.1rem;
        }

      &:hover {
        border: 3px solid var(--color-gray-100);
        background-color: var(--color-orange);
      }
    `}
`;

function Button({ children, variation }) {
  return <StyleButton variation={variation}>{children}</StyleButton>;
}

export default Button;
