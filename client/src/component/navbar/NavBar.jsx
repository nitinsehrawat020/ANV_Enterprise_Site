import { FaBars } from "react-icons/fa6";
import { ImCross } from "react-icons/im";

import {
  NavMenu,
  MobileIcon,
  Nav,
  NavContainer,
  NavItem,
  NavLinks,
  NavBtn,
  NavBtnLink,
} from "./StyleNavBar";
import Logo from "./Logo";
import Aside from "../aside/Aside";
import { useState } from "react";

function NavBar() {
  const [menuToggle, setMenuToggle] = useState("false");
  function openMenu() {
    setMenuToggle("true");
  }
  function closeMenu() {
    setMenuToggle("false");
  }

  return (
    <Nav>
      <NavContainer>
        <Logo />

        <NavMenu>
          <NavItem>
            <NavLinks to="/"> Home</NavLinks>
          </NavItem>

          <NavItem>
            <NavLinks to="/designFalseCeil">False-Ceil Design</NavLinks>
          </NavItem>
          <NavItem>
            <NavLinks to="/designMolding">Molding Design</NavLinks>
          </NavItem>

          <NavItem>
            <NavLinks to="aboutUs"> About Us</NavLinks>
          </NavItem>
        </NavMenu>
        <NavBtn>
          <NavBtnLink type="signup" to="/login">
            Sign Up{" "}
          </NavBtnLink>
          <NavBtnLink type="login" to="/login">
            Login{" "}
          </NavBtnLink>
        </NavBtn>
        <MobileIcon>
          {menuToggle === "true" ? (
            <ImCross onClick={closeMenu} />
          ) : (
            <FaBars onClick={openMenu} />
          )}
        </MobileIcon>
      </NavContainer>
      <Aside display={menuToggle} onClose={closeMenu} />
    </Nav>
  );
}

export default NavBar;
