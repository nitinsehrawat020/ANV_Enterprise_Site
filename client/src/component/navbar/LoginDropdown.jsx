import { Button } from "@mui/material";
import { AccountMenu, Divider, Group1, NavItem, NavLinks } from "./StyleNavBar";
import { useLogout } from "../LoginAndSignup/useLogin";

function LoginDropdown({ onFlip, isAdmin }) {
  const { logout, isLoading } = useLogout();
  function handleClick() {
    onFlip(false);
    logout();
  }
  return (
    <AccountMenu>
      <NavLinks to="myAccount">My Account</NavLinks>
      <Divider />
      <Group1>
        <NavLinks to="/order">Order</NavLinks>
        <NavLinks to="/user/site">Site</NavLinks>
        {isAdmin && <NavLinks to="/dashboard">Admin</NavLinks>}
      </Group1>
      <Divider />
      <Button onClick={handleClick}>Logout</Button>
    </AccountMenu>
  );
}

export default LoginDropdown;
