import { useState } from "react";
import Logo from "./Logo";
import {
  MobileNavContainer,
  SignupButton,
  MenuAndLogoGroup,
  HamburgerIcon,
  MobileMenuOverlay,
  MobileMenuContainer,
  MobileMenuHeader,
  CloseButton,
  MobileMenuList,
  MobileMenuItem,
  MobileMenuLink,
  MobileMenuButton,
  MobileSubMenu,
  MobileSubMenuItem,
  MobileChevronIcon,
} from "./StyleNavBar";
import { FaUserLarge, FaArrowRightLong } from "react-icons/fa6";
import useMobile from "../../hooks/useMobile";
import useTablet from "../../hooks/useTablet";
import Button from "../../ui/Button";

function MobileNav() {
  const { isMobile } = useMobile(480);
  const { isTablet } = useTablet();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isExploreOpen, setIsExploreOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    setIsExploreOpen(false); // Close submenu when main menu closes
  };

  const toggleExplore = () => {
    setIsExploreOpen(!isExploreOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
    setIsExploreOpen(false);
  };

  const handleOverlayClick = () => {
    closeMenu();
  };

  return (
    <>
      <MobileNavContainer>
        <MenuAndLogoGroup isMobile={isMobile}>
          <HamburgerIcon onClick={toggleMenu} />
          <Logo />
        </MenuAndLogoGroup>

        {!isTablet ? (
          <SignupButton isMobile={isMobile}>
            <FaUserLarge size={16} />
          </SignupButton>
        ) : (
          <Button variation="filled">
            Sign Up <FaArrowRightLong />
          </Button>
        )}
      </MobileNavContainer>

      <MobileMenuOverlay $isOpen={isMenuOpen} onClick={handleOverlayClick} />

      <MobileMenuContainer $isOpen={isMenuOpen}>
        <MobileMenuHeader>
          <Logo />
          <CloseButton onClick={closeMenu} />
        </MobileMenuHeader>

        <MobileMenuList>
          <MobileMenuItem>
            <MobileMenuLink to="/" onClick={closeMenu}>
              Home
            </MobileMenuLink>
          </MobileMenuItem>

          <MobileMenuItem>
            <MobileMenuLink to="/about-us" onClick={closeMenu}>
              About Us
            </MobileMenuLink>
          </MobileMenuItem>

          <MobileMenuItem>
            <MobileMenuButton onClick={toggleExplore}>
              Explore Design
              <MobileChevronIcon $isOpen={isExploreOpen} />
            </MobileMenuButton>
            <MobileSubMenu $isOpen={isExploreOpen}>
              <MobileSubMenuItem to="/design/false-ceil" onClick={closeMenu}>
                False Ceil Design
              </MobileSubMenuItem>
              <MobileSubMenuItem to="/design/molding" onClick={closeMenu}>
                Molding Design
              </MobileSubMenuItem>
            </MobileSubMenu>
          </MobileMenuItem>
        </MobileMenuList>
      </MobileMenuContainer>
    </>
  );
}

export default MobileNav;
