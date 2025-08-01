import { useState } from "react";
import useMobile from "../../hooks/useMobile";
import Logo from "./Logo";
import {
  MenuAndLogoGroup,
  DesktopNavContainer,
  MenuContainer,
  MenuButton,
  ExploreDesignButton,
  SignupButton,
  ChevronIcon,
  DropdownMenu,
  DropdownItem,
} from "./StyleNavBar";

import { FaArrowRightLong } from "react-icons/fa6";
import Button from "../../ui/Button";

function DesktopNav() {
  const { isMobile } = useMobile();

  const [designDropdown, setDesignDropdown] = useState();
  return (
    <DesktopNavContainer>
      <MenuAndLogoGroup isMobile={isMobile}>
        <Logo />
        <MenuContainer>
          <MenuButton to="/"> Home</MenuButton>
          <MenuButton to="/aboutUs">About Us</MenuButton>
          <ExploreDesignButton
            onMouseEnter={() => setDesignDropdown(true)}
            onMouseLeave={() => setDesignDropdown(false)}
          >
            <ExploreDesignButton>Explore design</ExploreDesignButton>

            {/* Dropdown Menu */}
            <DropdownMenu show={designDropdown}>
              <DropdownItem to="/design/false-ceil">
                FalseCeil Design
              </DropdownItem>
              <DropdownItem to="/design/molding">Molding Design</DropdownItem>
            </DropdownMenu>
          </ExploreDesignButton>
        </MenuContainer>
      </MenuAndLogoGroup>
      {!isMobile && (
        <Button variation="filled">
          Sign Up <FaArrowRightLong />
        </Button>
      )}
    </DesktopNavContainer>
  );
}

export default DesktopNav;
