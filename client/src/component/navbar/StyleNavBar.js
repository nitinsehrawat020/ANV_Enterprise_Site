import { NavLink } from "react-router-dom";
import styled, { css } from "styled-components";
import { device } from "../../Styles/Theme";

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

//NavBars
export const Nav = styled.nav`
  grid-area: navbar;
  height: 80px;
  width: 100%;
  display: flex;
  justify-content: Center;
  align-items: center;
  font-size: var(--font-size-xs);
  z-index: 999;
  position: sticky;
  top: 0;
  background: var(--color-background-500);

  @media ${device.tablet} {
    height: 60px;
  }
  @media ${device.mobile} {
    height: 60px;
  }
`;

export const NavContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: auto;
  z-index: 1;
  width: 100%;
  padding: 0 var(--padding-s);
  max-width: 1200px;
  gap: 23px;
  transition: all 1sec ease-in-out;
`;
export const MobileIcon = styled.div`
  display: none;

  @media screen and (max-width: 768px) {
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(-100%, 40%);
    font-size: 1.8rem;
    cursor: pointer;
    color: var(--color-white-500);
  }
`;

export const NavMenu = styled.ul`
  display: flex;
  align-items: center;
  list-style: none;
  text-align: center;
  margin: -22px;
  color: var(--color-white-500);

  @media screen and (max-width: 768px) {
    display: none;
  }
`;

export const Dropdown = styled.div`
  display: flex;
  flex-direction: column;
  position: absolute;
  top: 60px;

  background: var(--color-background-800);
  border-radius: var(--br-m);
  box-shadow: 0 1px 6px rgba(0, 0, 0, 0.1);
  color: var(--color-white-500);
  padding: 10px;
`;
export const NavItem = styled.li`
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 5px;
`;
export const NavLinks = styled(NavLink)`
  display: flex;

  color: #fff;
  align-items: center;
  padding: 0 1rem;
  height: 100%;
  cursor: pointer;
  text-decoration: none;
  gap: 5px;

  &.active {
    border-bottom: 2px solid var(--color-primary-500);
    background-image: linear-gradient(180deg, #6c9eca 0%, transparent 90%);
    border-radius: 8px;
    font-size: 1rem;
  }
`;

export const NavBtn = styled.div`
  display: flex;
  align-items: center;

  @media ${device.tablet} {
    display: none;
  }

  @media ${device.mobile} {
    display: none;
  }
`;

export const NavBtnLink = styled(NavLink)`
  ${(props) =>
    props.type === "signup" &&
    css`
      display: flex;
      padding: 10px 16px;
      justify-content: center;
      align-items: center;
      border-radius: 8px;
      border: 1px solid #fff;
      margin-left: 30px;
      color: #fff;

      @media ${device.tablet} {
        padding: 6px 12px;
      }

      @media ${device.tablet} {
        margin-right: 0.2rem;
      }

      &:hover {
        background-color: rgb(44, 44, 44);
      }
    `}
  ${(props) =>
    props.type === "login" &&
    css`
      display: flex;
      padding: 10px 16px;
      justify-content: center;
      align-items: center;
      border-radius: 8px;
      border: 1px solid rgb(0, 0, 0);
      margin-left: 15px;
      background-color: #fff;
      color: #000;

      @media ${device.tablet} {
        padding: 6px 12px;
      }

      &:hover {
        background-color: rgb(44, 44, 44);
        color: #fff;
        border: 1px solid #fff;
      }

      @media ${device.tablet} {
      }
    `}
`;
export const AccountContainer = styled.div`
  position: relative;
`;
export const AccountMenu = styled.div`
  width: 160px;
  background-color: var(--color-background-400);
  position: absolute;
  top: 50px;
  right: -10px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 10px;
  gap: 0.8rem;
  border-radius: 0px 0px 8px 8px;
`;
export const AccountButton = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  border: 2px solid var(--color-background-800);
  padding: 4px;
  border-radius: 8px;
  @media ${device.tablet} {
    display: none;
  }
`;
export const Group1 = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  flex-direction: column;
`;

export const Divider = styled.div`
  width: 100%;
  height: 2px;
  background-color: white;
  opacity: 0.2;
`;

export const FavDesign = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 8px;
  right: 30px;
  gap: 10px;
  border: 2px solid var(--color-background-800);
  border-radius: 8px;

  @media ${device.tablet} {
    position: relative;
  }
`;

export const FavAndAccountContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
`;
