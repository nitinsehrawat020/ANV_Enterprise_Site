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
  cursor: pointer;
  transition: transform 0.2s ease;

  &:hover {
    transform: scale(1.05);
  }
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
  position: ${(props) => (props.isSticky ? "fixed" : "relative")};
  top: ${(props) => (props.isSticky ? "0" : "auto")};
  left: ${(props) => (props.isSticky ? "0" : "auto")};
  right: ${(props) => (props.isSticky ? "0" : "auto")};
  background: ${(props) =>
    props.isSticky ? "rgba(245, 245, 245, 0.98)" : "var(--color-whitesmoke)"};
  transition: all 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94);
  box-shadow: ${(props) =>
    props.isSticky
      ? "0 8px 32px rgba(0, 0, 0, 0.06), 0 4px 16px rgba(0, 0, 0, 0.04), 0 2px 8px rgba(0, 0, 0, 0.02)"
      : "0 1px 3px rgba(0, 0, 0, 0.02)"};
  backdrop-filter: ${(props) =>
    props.isSticky ? "blur(12px) saturate(120%)" : "none"};
  border-bottom: ${(props) =>
    props.isSticky ? "1px solid rgba(255, 255, 255, 0.2)" : "none"};

  @media ${device.tablet} {
    height: 48px;
    margin-top: ${(props) => (props.isSticky ? "0" : "1rem")};
  }
  @media ${device.mobile} {
    height: 48px;
  }
`;

// Placeholder to prevent layout shift when navbar becomes fixed
export const NavPlaceholder = styled.div`
  height: ${(props) => (props.isSticky ? "80px" : "0")};
  width: 100%;
  transition: height 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94);
  opacity: 0; /* Invisible placeholder */

  @media ${device.tablet} {
    height: ${(props) => (props.isSticky ? "48px" : "0")};
  }
  @media ${device.mobile} {
    height: ${(props) => (props.isSticky ? "48px" : "0")};
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

// User Dropdown Components
export const UserDropdownContainer = styled.div`
  position: relative;
  display: inline-block;
`;

export const UserButton = styled.button`
  display: flex;
  align-items: center;
  gap: var(--gap-8);
  padding: var(--padding-4) var(--padding-16);
  background: none;
  border: none;
  cursor: pointer;
  border-radius: var(--br-8);
  transition: background-color 0.2s ease;

  &:hover {
    background-color: var(--color-whitesmoke);
  }
`;

export const UserAvatar = styled.div`
  width: 36px;
  height: 36px;
  border-radius: 50%;
  background-color: var(--color-orange);
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--color-white);
  font-size: var(--font-size-16);
  font-weight: 600;

  img {
    width: 100%;
    height: 100%;
    border-radius: 50%;
    object-fit: cover;
  }
`;

export const UserName = styled.span`
  font-size: var(--font-size-16);
  font-weight: 500;
  color: var(--color-black);
`;

export const UserDropdownMenu = styled.div`
  position: absolute;
  top: 100%;
  right: 0;
  background-color: var(--color-white);
  border: 1px solid var(--color-gray-200);
  border-radius: var(--br-8);
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
  min-width: 180px;
  z-index: 1000;
  padding: var(--padding-4) 0;
  margin-top: var(--padding-4);
  opacity: ${(props) => (props.show ? "1" : "0")};
  visibility: ${(props) => (props.show ? "visible" : "hidden")};
  transform: ${(props) => (props.show ? "translateY(0)" : "translateY(-10px)")};
  transition: all 0.2s ease;
`;

export const UserDropdownItem = styled(NavLink)`
  display: flex;
  align-items: center;
  gap: var(--gap-16);
  padding: var(--padding-16);
  width: 100%;
  text-decoration: none;
  border-radius: 0;
  margin: 0;
  transition: background-color 0.2s ease;
  font-size: var(--font-size-16);
  color: var(--color-black);

  svg {
    font-size: var(--font-size-16);
    color: var(--color-dimgray);
  }

  &:hover {
    background-color: var(--color-whitesmoke);
  }

  &:focus {
    outline: none;
    background-color: var(--color-whitesmoke);
  }
`;

export const LogoutButton = styled.button`
  display: flex;
  align-items: center;
  gap: var(--gap-16);
  padding: var(--padding-16);
  width: 100%;
  text-align: left;
  border: none;
  background: none;
  cursor: pointer;
  transition: background-color 0.2s ease;
  font-size: var(--font-size-16);
  color: var(--color-orange);
  border-top: 1px solid var(--color-gray-200);

  svg {
    font-size: var(--font-size-16);
    color: var(--color-orange);
  }

  &:hover {
    background-color: var(--color-floralwhite);
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
  height: 100vh; /* Ensure it stays within viewport height */
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
  position: sticky;
  top: 0;
  z-index: 2;
  flex-shrink: 0; /* Prevent shrinking */
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
  overflow-y: auto; /* Enable scrolling */
  scrollbar-width: thin; /* For Firefox */

  /* Custom scrollbar styling */
  &::-webkit-scrollbar {
    width: 5px;
  }

  &::-webkit-scrollbar-track {
    background: transparent;
  }

  &::-webkit-scrollbar-thumb {
    background: var(--color-gray-200);
    border-radius: 10px;
  }

  &::-webkit-scrollbar-thumb:hover {
    background: var(--color-orange);
  }
`;

export const MobileMenuItem = styled.div`
  width: 100%;
  flex-shrink: 0; /* Prevent shrinking */
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

export const MobileLoginLink = styled(NavLink)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 20px;
  color: var(--color-black);
  text-decoration: none;
  font-size: var(--font-size-16);
  font-weight: 600;
  border-bottom: 2px solid var(--color-gray-200);
  transition: all 0.2s ease;
  gap: 8px;
  background-color: var(--color-whitesmoke);

  .login-icon {
    width: 50px;
    height: 50px;
    border-radius: 50%;
    background-color: var(--color-orange);
    display: flex;
    align-items: center;
    justify-content: center;
    color: white;
    font-size: 20px;
    transition: all 0.2s ease;
  }

  .user-avatar {
    width: 50px;
    height: 50px;
    border-radius: 50%;
    object-fit: cover;
    border: 2px solid var(--color-orange);
  }

  &:hover {
    background-color: var(--color-orange);
    color: var(--color-white);

    .login-icon {
      background-color: var(--color-white);
      color: var(--color-orange);
    }
  }

  &.active {
    background-color: var(--color-orange);
    color: var(--color-white);

    .login-icon {
      background-color: var(--color-white);
      color: var(--color-orange);
    }
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
  max-height: ${(props) => (props.$isOpen ? "300px" : "0")};
  overflow: hidden;
  transition: max-height 0.3s ease;
  background-color: var(--color-floralwhite);
  overflow-y: auto; /* Enable scrolling if content exceeds height */
`;

export const MobileSubMenuItem = styled(NavLink)`
  display: flex;
  padding: 12px 40px;
  justify-content: flex-start;
  align-items: center;
  color: var(--color-black);
  text-decoration: none;
  font-size: 1rem;
  border-bottom: 1px solid var(--color-gray-200);
  transition: all 0.2s ease;
  gap: 8px;

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
export const FavAndSignUpGroup = styled.div`
  width: fit-content;
  height: fit-content;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 24px;
`;

export const Favbutton = styled.div`
  position: relative;
  border-radius: 16px;
  background-color: var(--color-white);
  border: 3px solid var(--color-orange);
  box-sizing: border-box;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  padding: 0.25rem 1rem;
  text-align: left;
  font-size: 1.5rem;
  color: var(--color-gray-100);
  font-family: var(--font-poppins);
  font-weight: 500;
  transition: all 0.2s ease;
  gap: 0.5rem;
  @media ${device.tablet} {
    font-size: 1rem;
    padding: 0.25rem 0.6rem;
  }
  @media ${device.laptop} {
    font-size: 1.1rem;
    padding: 0.25rem 1.1rem;
  }
`;

// Mobile Admin Section
export const MobileAdminContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 10px;
  padding-top: var(--padding-4);
  border-top: 1px solid rgba(0, 0, 0, 0.1);
`;

export const MobileAdminLink = styled(NavLink)`
  font-size: 13px;
  padding: 6px var(--padding-16);
  background-color: var(--color-orange);
  color: var(--color-white);
  border-radius: var(--br-16);
  font-weight: 500;
  text-decoration: none;
  transition: all 0.2s ease;

  &:hover {
    background-color: var(--color-dimgray);
    transform: scale(1.05);
  }
`;

// Mobile Logout Section
export const MobileLogoutContainer = styled.div`
  margin-top: auto; /* Pushes to the bottom */
  padding-bottom: var(--padding-24);
  padding-top: var(--padding-16);
  border-top: 1px solid rgba(0, 0, 0, 0.1);
  position: sticky;
  bottom: 0;
  background-color: var(--color-white); /* Match container background */
  width: 100%;
`;

export const MobileLogoutLink = styled(NavLink)`
  text-align: center;
  color: var(--color-orange);
  font-weight: 600;
  text-decoration: none;
  transition: all 0.2s ease;

  &:hover {
    color: var(--color-dimgray);
    transform: scale(1.05);
  }
`;
