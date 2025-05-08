import styled, { css } from "styled-components";
import { device } from "../Styles/Theme";

export const Button = styled.button`
  ${(props) =>
    props.variant === "filled" &&
    css`
      & {
        border-radius: var(--br-m);
        background-color: ${props.color ? props.color : "var(--color-primary)"};
        overflow: hidden;
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: center;
        padding: var(--padding-xs-1) var(--padding-xs-1);
        cursor: pointer;
        font-size: ${props.size ? `${props.size}rem` : "1rem"};
        border: none;
        transition: all 0.3s ease;

        @media ${device.laptop} {
          font-size: ${props.size ? `${props.size / 1.5}rem` : "0.75rem"};
        }
        @media ${device.tablet} {
          font-size: ${props.size ? `${props.size / 1.5}rem` : "0.75rem"};
        }
        @media ${device.mobile} {
          font-size: ${props.size ? `${props.size / 2}rem` : "0.75rem"};
        }
      }
      &:hover {
        background-color: ${props.hoverColor
          ? props.hoverColor
          : "var(--color-primary)"};
        border: 2px solid var(--color-primary);
        background-color: transparent;
        color: var(--color-primary);
      }
    `}
  ${(props) =>
    props.variant === "outlined" &&
    css`
      background-color: transparent;
      border-radius: var(--br-m);
      border: 2px solid var(--color-primary);
      overflow: hidden;
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: center;
      padding: var(--padding-xs-1) var(--padding-xs-1);
      color: var(--color-primary);
      cursor: pointer;

      font-size: ${props.size ? `${props.size}rem` : "1rem"};

      @media ${device.laptop} {
        font-size: ${props.size ? `${props.size / 2}rem` : "0.75rem"};
      }

      @media ${device.tablet} {
        font-size: ${props.size ? `${props.size / 2}rem` : "0.75rem"};
      }
      @media ${device.mobile} {
        font-size: ${props.size ? `${props.size / 2}rem` : "0.75rem"};
      }

      &:hover {
        background-color: ${props.hoverColor
          ? props.hoverColor
          : "var(--color-primary)"};
        color: var(--color-white-500);
        background-color: ${props.color ? props.color : "var(--color-primary)"};
      }
    `}
`;
