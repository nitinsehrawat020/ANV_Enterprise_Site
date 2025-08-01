import { NavLink } from "react-router-dom";
import styled from "styled-components";
import { device } from "../../Styles/Theme";
import { FaChevronDown } from "react-icons/fa6";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoClose } from "react-icons/io5";

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

  background: var(--color-whitesmoke);

  @media ${device.tablet} {
    height: 48px;
    /* padding: var(--padding-4) var(--padding-24); */
    margin-top: 1rem;
  }
  @media ${device.mobile} {
    height: 48px;
  }
`;

export const DesktopNavContainer = styled.div`
  width: 100%;
  max-width: 1200px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: auto;
  z-index: 1;
  /* padding: 0 var(--padding-s); */

  transition: all 1sec ease-in-out;
`;
export const MobileNavContainer = styled.div`
  width: 100%;
  max-width: 1200px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: auto;
  z-index: 1;
  padding: 0 var(--padding-s);
  transition: all 1sec ease-in-out;
`;
export const SignupButton = styled.div`
  border-radius: ${(props) => (props.isMobile ? "20px" : "12px")};
  border: 2px solid var(--color-black);
  box-sizing: border-box;
  width: fit-content;
  height: ${(props) => (!props.isMobile ? "2.5rem" : "fit-content")};
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  padding: ${(props) => (props.isMobile ? "0.5rem 1rem" : "0px 1rem ")};
  gap: 0.5rem;
  text-align: left;
  font-size: 1.5rem;
  color: var(--color-black);
  font-family: var(--font-poppins);
  background-color: ${(props) =>
    !props.isMobile ? "var(--color-orange)" : ""};
`;
export const MenuAndLogoGroup = styled.div`
  width: fit-content;
  height: fit-content;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: ${(props) => (props.isMobile ? "var(--gap-16)" : "53px")};
`;
export const MenuContainer = styled.div`
  width: fit-content;
  height: fit-content;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: row;
  gap: var(--gap-24);
  padding: 0 var() (--padding-24);
  color: var(--color-black);
`;
export const MenuButton = styled(NavLink)`
  width: fit-content;
  height: fit-content;
  font-size: var(--font-size-24);
  display: flex;
  align-items: center;
  justify-content: center;
  gap: var(--gap-8);
`;

export const ExploreDesignButton = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: fit-content;
  height: fit-content;
  font-size: var(--font-size-24);
  position: relative;
`;

export const ExploreDesignDropdown = styled.div`
  width: fit-content;
  height: fit-content;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: var(--padding-4);
  position: absolute;
`;

export const DropdownMenu = styled.div`
  width: fit-content;
  position: absolute;
  top: 100%;
  left: 0;
  background-color: var(--color-floralwhite);
  border: 1px solid var(--color-background-400);
  border-radius: 0px 0px 8px 8px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
  min-width: 160px;
  z-index: 1000;
  padding: 8px 0;
  margin-top: 4px;
  opacity: ${(props) => (props.show ? "1" : "0")};
  visibility: ${(props) => (props.show ? "visible" : "hidden")};
  transform: ${(props) => (props.show ? "translateY(0)" : "translateY(-10px)")};
  transition: all 0.2s ease;
`;

export const DropdownItem = styled(MenuButton)`
  display: block;
  padding: 12px 20px;
  width: 100%;
  text-align: left;
  border-radius: 0;
  margin: 0;
  transition: background-color 0.2s ease;
  font-size: 1rem;
  &:hover {
    background-color: var(--color-gray-200);
  }
`;

export const ChevronIcon = styled(FaChevronDown)`
  margin-left: 8px;
  font-size: 12px;
  transform: ${(props) => (props.isOpen ? "rotate(180deg)" : "rotate(0deg)")};
  transition: transform 0.2s ease;
`;

// Mobile Menu Components
export const HamburgerIcon = styled(GiHamburgerMenu)`
  cursor: pointer;
  color: var(--color-black);
  font-size: 24px;
  transition: transform 0.2s ease;

  &:hover {
    transform: scale(1.1);
  }
`;

export const MobileMenuOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 998;
  opacity: ${(props) => (props.$isOpen ? "1" : "0")};
  visibility: ${(props) => (props.$isOpen ? "visible" : "hidden")};
  transition: all 0.3s ease;
`;

export const MobileMenuContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 280px;
  height: 100%;
  background-color: var(--color-white);
  z-index: 999;
  transform: translateX(${(props) => (props.$isOpen ? "0" : "-100%")});
  transition: transform 0.3s ease;
  box-shadow: 2px 0 10px rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: column;
`;

export const MobileMenuHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
  border-bottom: 1px solid var(--color-gray-200);
  background-color: var(--color-whitesmoke);
`;

export const CloseButton = styled(IoClose)`
  cursor: pointer;
  color: var(--color-black);
  font-size: 24px;
  transition: transform 0.2s ease;

  &:hover {
    transform: scale(1.1);
  }
`;

export const MobileMenuList = styled.div`
  flex: 1;
  padding: 20px 0;
  display: flex;
  flex-direction: column;
`;

export const MobileMenuItem = styled.div`
  width: 100%;
`;

export const MobileMenuLink = styled(NavLink)`
  display: block;
  padding: 15px 20px;
  color: var(--color-black);
  text-decoration: none;
  font-size: var(--font-size-24);
  font-weight: 500;
  border-bottom: 1px solid var(--color-gray-200);
  transition: all 0.2s ease;

  &:hover {
    background-color: var(--color-whitesmoke);
    color: var(--color-orange);
  }

  &.active {
    background-color: var(--color-orange);
    color: var(--color-white);
  }
`;

export const MobileMenuButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  padding: 15px 20px;
  background: none;
  border: none;
  color: var(--color-black);
  font-size: var(--font-size-24);
  font-weight: 500;
  border-bottom: 1px solid var(--color-gray-200);
  cursor: pointer;
  transition: all 0.2s ease;

  &:hover {
    background-color: var(--color-whitesmoke);
    color: var(--color-orange);
  }
`;

export const MobileSubMenu = styled.div`
  max-height: ${(props) => (props.$isOpen ? "200px" : "0")};
  overflow: hidden;
  transition: max-height 0.3s ease;
  background-color: var(--color-floralwhite);
`;

export const MobileSubMenuItem = styled(NavLink)`
  display: block;
  padding: 12px 40px;
  color: var(--color-black);
  text-decoration: none;
  font-size: 1rem;
  border-bottom: 1px solid var(--color-gray-200);
  transition: all 0.2s ease;

  &:hover {
    background-color: var(--color-whitesmoke);
    color: var(--color-orange);
  }

  &.active {
    background-color: var(--color-orange);
    color: var(--color-white);
  }
`;

export const MobileChevronIcon = styled(FaChevronDown)`
  font-size: 16px;
  transform: ${(props) => (props.$isOpen ? "rotate(180deg)" : "rotate(0deg)")};
  transition: transform 0.2s ease;
`;
