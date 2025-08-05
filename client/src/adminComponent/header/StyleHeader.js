import styled from "styled-components";
import { device } from "../../Styles/Theme";

export const StyleHeader = styled.div`
  grid-area: header;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 20px;
  background-color: var(--color-background-200);
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
  position: ${(props) => (props.isSticky ? "fixed" : "relative")};
  top: ${(props) => (props.isSticky ? "0" : "auto")};
  left: ${(props) => (props.isSticky ? "0" : "auto")};
  right: ${(props) => (props.isSticky ? "0" : "auto")};
  z-index: ${(props) => (props.isSticky ? "999" : "auto")};
  background: ${(props) =>
    props.isSticky
      ? "rgba(244, 244, 246, 0.98)"
      : "var(--color-background-200)"};
  backdrop-filter: ${(props) =>
    props.isSticky ? "blur(12px) saturate(120%)" : "none"};
  box-shadow: ${(props) =>
    props.isSticky
      ? "0 8px 32px rgba(0, 0, 0, 0.06), 0 4px 16px rgba(0, 0, 0, 0.04), 0 2px 8px rgba(0, 0, 0, 0.02)"
      : "0 1px 3px rgba(0, 0, 0, 0.1)"};
  transition: all 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94);

  @media ${device.phnAndTab} {
    padding: 0 15px;
  }

  @media ${device.mobile} {
    padding: 0 10px;
  }
`;

// Placeholder to prevent layout shift when header becomes fixed
export const HeaderPlaceholder = styled.div`
  height: ${(props) => (props.isSticky ? "60px" : "0")};
  width: 100%;
  transition: height 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94);
  opacity: 0; /* Invisible placeholder */

  @media ${device.phnAndTab} {
    height: ${(props) => (props.isSticky ? "55px" : "0")};
  }

  @media ${device.mobile} {
    height: ${(props) => (props.isSticky ? "50px" : "0")};
  }
`;

export const Title = styled.div`
  width: 100%;
  font-size: 1.5rem;
  font-weight: 500;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;

  @media ${device.phnAndTab} {
    width: 80%;
    font-size: 1.3rem;
  }

  @media ${device.mobile} {
    width: 70%;
    font-size: 1.1rem;
  }
`;
