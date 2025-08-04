import { useState } from "react";
import Logo from "./Logo";
import {
  MobileNavContainer,
  MenuAndLogoGroup,
  HamburgerIcon,
  MobileMenuOverlay,
  MobileMenuContainer,
  MobileMenuHeader,
  CloseButton,
  MobileMenuList,
  MobileMenuItem,
  MobileMenuLink,
  MobileLoginLink,
  MobileMenuButton,
  MobileSubMenu,
  MobileSubMenuItem,
  MobileChevronIcon,
  FavAndSignUpGroup,
  MenuButton,
  Favbutton,
  MobileAdminContainer,
  MobileAdminLink,
  MobileLogoutContainer,
  MobileLogoutLink,
} from "./StyleNavBar";
import {
  FaIndianRupeeSign,
  FaLock,
  FaUser,
  FaUserLarge,
} from "react-icons/fa6";
import useMobile from "../../hooks/useMobile";
import useTablet from "../../hooks/useTablet";

import { GrFavorite } from "react-icons/gr";
import { useUser } from "../LoginAndSignup/useUser";
import { useLogout } from "../LoginAndSignup/useLogin";
import { FaShoppingBag } from "react-icons/fa";

function MobileNav() {
  const { isMobile } = useMobile(480);
  const { isTablet } = useTablet();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isExploreOpen, setIsExploreOpen] = useState(false);
  const [isMyAccount, setIsMyAccount] = useState(false);
  const { user, isAdminAuthenticated, isAuthenticated } = useUser();
  const { logout, isLoading } = useLogout();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    setIsExploreOpen(false);
  };

  const toggleExplore = () => {
    setIsExploreOpen(!isExploreOpen);
  };
  const toggleAccount = () => {
    setIsMyAccount(!isMyAccount);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
    setIsExploreOpen(false);
  };

  const handleOverlayClick = () => {
    closeMenu();
  };
  const handleLogout = () => {
    logout();
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
          <MenuButton to={"/favortie"}>
            <Favbutton>
              Fav <GrFavorite />
            </Favbutton>
          </MenuButton>
        ) : (
          <FavAndSignUpGroup>
            <MenuButton to={"/favortie"}>
              <Favbutton>
                Fav <GrFavorite />
              </Favbutton>
            </MenuButton>
          </FavAndSignUpGroup>
        )}
      </MobileNavContainer>

      <MobileMenuOverlay $isOpen={isMenuOpen} onClick={handleOverlayClick} />

      <MobileMenuContainer $isOpen={isMenuOpen}>
        <MobileMenuHeader>
          <Logo />
          <CloseButton onClick={closeMenu} />
        </MobileMenuHeader>

        <MobileMenuItem>
          <MobileLoginLink
            to={user ? "/my-account/profile" : "/login"}
            onClick={closeMenu}
          >
            {isAuthenticated ? (
              user.avatar ? (
                <img
                  src={user.avatar}
                  alt="User Avatar"
                  className="user-avatar"
                />
              ) : (
                <div className="login-icon">
                  <FaUserLarge />
                </div>
              )
            ) : (
              <div className="login-icon">
                <FaUserLarge />
              </div>
            )}
            {user ? user.firstName + " " + user.lastName : "Login"}
          </MobileLoginLink>

          {isAuthenticated && isAdminAuthenticated && (
            <MobileAdminContainer>
              <MobileAdminLink to="/admin" onClick={closeMenu}>
                🔧 Admin Panel
              </MobileAdminLink>
            </MobileAdminContainer>
          )}
        </MobileMenuItem>

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
          <MobileMenuItem>
            <MobileMenuButton onClick={toggleAccount}>
              My Account
              <MobileChevronIcon $isOpen={isMyAccount} />
            </MobileMenuButton>
            <MobileSubMenu $isOpen={isMyAccount}>
              <MobileSubMenuItem to="/my-account/profile" onClick={closeMenu}>
                <FaUser />
                Profile
              </MobileSubMenuItem>
              <MobileSubMenuItem
                to="/my-account/order-history"
                onClick={closeMenu}
              >
                <FaShoppingBag />
                Orders
              </MobileSubMenuItem>
              <MobileSubMenuItem
                to="/my-account/payment-history"
                onClick={closeMenu}
              >
                <FaIndianRupeeSign />
                Payment History
              </MobileSubMenuItem>
              <MobileSubMenuItem to="/my-account/password" onClick={closeMenu}>
                <FaLock />
                Password
              </MobileSubMenuItem>
            </MobileSubMenu>
          </MobileMenuItem>
        </MobileMenuList>

        {/* Logout at bottom with padding */}
        {isAuthenticated && (
          <MobileLogoutContainer>
            <MobileMenuItem>
              <MobileLogoutLink to="/logout" onClick={handleLogout}>
                🚪 Logout
              </MobileLogoutLink>
            </MobileMenuItem>
          </MobileLogoutContainer>
        )}
      </MobileMenuContainer>
    </>
  );
}

export default MobileNav;
