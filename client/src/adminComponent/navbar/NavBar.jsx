import Account from "../../ui/Account";
import Logo from "./Logo";
import Menu from "./Menu";
import { StyleNavBar, StyleNavBarContainer } from "./StyleNavBar";

function NavBar() {
  return (
    <StyleNavBar>
      <StyleNavBarContainer>
        <Logo parent="navbar" />
        <Menu />
        <Account display="false" />
      </StyleNavBarContainer>
    </StyleNavBar>
  );
}

export default NavBar;
