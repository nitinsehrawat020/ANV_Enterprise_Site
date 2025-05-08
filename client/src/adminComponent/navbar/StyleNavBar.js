import { NavLink } from "react-router-dom";
import styled from "styled-components";
export const StyleNavBar = styled.nav`
  grid-area: navbar;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;

  background-color: var(--color-background-800);

  @media (max-width: 768px) {
    position: fixed;
    bottom: 0;
    width: 100%;
    z-index: 100;
    height: 80px;
  }
`;

export const StyleNavBarContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 100%;
  max-height: 80vh;
  flex-direction: column;
  overflow: hidden;
  gap: 1rem;

  @media (max-width: 768px) {
    padding: 0 1rem;
    flex-direction: row;
    min-height: 80px;
  }
`;

export const StyleNavBarLogo = styled(NavLink)`
  display: ${(props) => (props.parent === "navbar" ? "flex" : "none")};
  align-items: center;
  justify-content: center;

  cursor: pointer;

  @media (max-width: 768px) {
    display: ${(props) => (props.parent === "header" ? "flex" : "none")};
  }
`;

export const Img = styled.img`
  height: 4rem;
  width: auto;

  @media (max-width: 768px) {
    height: 3rem;
  }

  @media (max-width: 480px) {
    height: 3rem;
  }
`;

export const StyleNavBarMenu = styled.div`
  width: 100%;
  align-self: stretch;

  display: flex;

  align-items: center;
  justify-content: center;

  padding: 1rem;

  @media (max-width: 768px) {
  }
`;

export const StyleNavBarMenuList = styled.ul`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  list-style: none;
  gap: 1rem;

  @media (max-width: 768px) {
    flex-direction: row;
  }
`;

export const StyleNavBarAccount = styled.div`
  display: ${(props) => (props.display === "false" ? "flex" : "none")};
  align-items: center;
  justify-content: center;
  padding: 0.6rem 1rem;
  border-radius: var(--br-l);
  background-color: var(--color-background-200);
  gap: 0.5rem;
  @media (max-width: 768px) {
    display: ${(props) => (props.display === "true" ? "flex" : "none")};
    gap: 0.2rem;
  }

  @media (max-width: 480px) {
    display: ${(props) => (props.display === "true" ? "flex" : "none")};
    gap: 0.2rem;
  }
`;
