import { Button } from "@mui/material";
import { AccountMenu, Divider, Group1, NavItem, NavLinks } from "./StyleNavBar";
import { useLogout } from "../LoginAndSignup/useLogin";
import { useUser } from "../LoginAndSignup/useUser";

function LoginDropdown({ onFlip, isAdmin }) {
  const { logout, isLoading } = useLogout();
  const { user, isLoading: isUserLoading } = useUser();
  function handleClick() {
    onFlip(false);
    logout();
  }
  return (
    <AccountMenu>
      <NavLinks to={`/myAccount/info`} onClick={() => onFlip(false)}>
        My Account
      </NavLinks>

      <Group1>
        <NavLinks to="/user/site" onClick={() => onFlip(false)}>
          Site
        </NavLinks>
        {isAdmin && (
          <NavLinks to="/dashboard" onClick={() => onFlip(false)}>
            Admin
          </NavLinks>
        )}
      </Group1>

      <Button onClick={handleClick}>Logout</Button>
    </AccountMenu>
  );
}

export default LoginDropdown;
