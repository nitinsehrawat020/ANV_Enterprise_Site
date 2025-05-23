import { FaBars } from "react-icons/fa6";
import { ImCross } from "react-icons/im";
import { FaAngleDown, FaAngleUp, FaHeart } from "react-icons/fa6";

import {
  NavMenu,
  MobileIcon,
  Nav,
  NavContainer,
  NavItem,
  NavLinks,
  NavBtn,
  NavBtnLink,
  AccountButton,
  AccountContainer,
  FavDesign,
  FavAndAccountContainer,
  Divider,
} from "./StyleNavBar";
import Logo from "./Logo";
import Aside from "../aside/Aside";
import { useState } from "react";
import { useUser } from "../LoginAndSignup/useUser";
import LoginDropdown from "./LoginDropdown";
import useMobile from "../../hooks/useMobile.jsx";
import { useOutsideClick } from "../../hooks/useOutsideClick.jsx";

function NavBar() {
  const [isMobile] = useMobile();
  const { user, isAdminAuthenticated } = useUser();

  const [accountToggle, setAccountToggle] = useState(false);
  const ref = useOutsideClick(() => {
    setAccountToggle(false);
  });
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

        <FavAndAccountContainer>
          <FavDesign>
            <FaHeart color="pink" />
            {isMobile ? "" : "Favorite"}
          </FavDesign>

          {user?._id ? (
            <AccountContainer ref={ref}>
              <AccountButton onClick={() => setAccountToggle((prev) => !prev)}>
                <img src={user.avatar} width="35px" />
                {isMobile ? "" : "Account"}{" "}
                {accountToggle ? <FaAngleUp /> : <FaAngleDown />}
              </AccountButton>

              {accountToggle && (
                <LoginDropdown
                  onFlip={setAccountToggle}
                  isAdmin={isAdminAuthenticated}
                />
              )}
            </AccountContainer>
          ) : (
            <NavBtn>
              <NavBtnLink type="signup" to="/signup">
                Sign Up{" "}
              </NavBtnLink>
              <NavBtnLink type="login" to="/login">
                Login{" "}
              </NavBtnLink>
            </NavBtn>
          )}
        </FavAndAccountContainer>
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
