import { useState } from "react";
import useMobile from "../../hooks/useMobile";
import Logo from "./Logo";
import {
  MenuAndLogoGroup,
  DesktopNavContainer,
  MenuContainer,
  MenuButton,
  ExploreDesignButton,
  DropdownMenu,
  DropdownItem,
  FavAndSignUpGroup,
  Favbutton,
  UserDropdownContainer,
  UserButton,
  UserAvatar,
  UserName,
  UserDropdownMenu,
  UserDropdownItem,
  LogoutButton,
} from "./StyleNavBar";
import { GrFavorite } from "react-icons/gr";
import { FaArrowRightLong, FaIndianRupeeSign, FaUser } from "react-icons/fa6";
import { FaChevronDown, FaShoppingBag, FaSignOutAlt } from "react-icons/fa";
import Button from "../../ui/Button";
import { useUser } from "../LoginAndSignup/useUser";
import { useLogout } from "../LoginAndSignup/useLogin";

function DesktopNav() {
  const { isMobile } = useMobile();
  const { user, isAdminAuthenticated, isAuthenticated } = useUser();

  const [designDropdown, setDesignDropdown] = useState(false);
  const [userDropdown, setUserDropdown] = useState(false);
  const { logout, isLoading } = useLogout();

  const handleLogout = () => {
    // Add your logout logic here
    logout();
    setUserDropdown(false);
  };

  const closeUserDropdown = () => {
    setUserDropdown(false);
  };

  const getUserInitials = (name) => {
    return (
      name
        ?.split(" ")
        .map((word) => word[0])
        .join("")
        .toUpperCase()
        .slice(0, 2) || "U"
    );
  };
  return (
    <DesktopNavContainer>
      <MenuAndLogoGroup isMobile={isMobile}>
        <Logo />
        <MenuContainer>
          <MenuButton to="/"> Home</MenuButton>
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
          <MenuButton to="/aboutUs">About Us</MenuButton>
        </MenuContainer>
      </MenuAndLogoGroup>
      <FavAndSignUpGroup>
        <MenuButton to={"/favortie"}>
          <Favbutton>
            Fav <GrFavorite />
          </Favbutton>
        </MenuButton>
        {!isMobile &&
          (isAuthenticated ? (
            <UserDropdownContainer>
              <UserButton
                onClick={() => setUserDropdown(!userDropdown)}
                onBlur={(e) => {
                  // Only close if clicking outside the dropdown
                  if (!e.currentTarget.contains(e.relatedTarget)) {
                    setTimeout(() => setUserDropdown(false), 150);
                  }
                }}
              >
                <UserAvatar>
                  {user?.avatar ? (
                    <img src={user.avatar} alt="User Avatar" />
                  ) : (
                    getUserInitials(user?.name || user?.email)
                  )}
                </UserAvatar>
                <UserName>
                  {user?.firstName + " " + user?.lastName || "User"}
                </UserName>
                <FaChevronDown
                  style={{
                    transform: userDropdown ? "rotate(180deg)" : "rotate(0deg)",
                    transition: "transform 0.2s ease",
                  }}
                />
              </UserButton>

              <UserDropdownMenu show={userDropdown}>
                <UserDropdownItem
                  to="/my-account/profile"
                  onClick={closeUserDropdown}
                >
                  <FaUser />
                  My Account
                </UserDropdownItem>
                <UserDropdownItem
                  to="/my-account/order-history"
                  onClick={closeUserDropdown}
                >
                  <FaShoppingBag />
                  Orders
                </UserDropdownItem>
                <UserDropdownItem
                  to="/my-account/payment-history"
                  onClick={closeUserDropdown}
                >
                  <FaIndianRupeeSign />
                  Payment History
                </UserDropdownItem>
                {isAdminAuthenticated && (
                  <UserDropdownItem to="/dashboard" onClick={closeUserDropdown}>
                    <FaUser />
                    Admin
                  </UserDropdownItem>
                )}
                <LogoutButton onClick={handleLogout}>
                  <FaSignOutAlt />
                  Logout
                </LogoutButton>
              </UserDropdownMenu>
            </UserDropdownContainer>
          ) : (
            <MenuButton to="/login">
              <Button variation="filled">
                Sign Up <FaArrowRightLong fill="" />
              </Button>
            </MenuButton>
          ))}
      </FavAndSignUpGroup>
    </DesktopNavContainer>
  );
}

export default DesktopNav;
