import { ImCross } from "react-icons/im";
import { ListItem, ListLink, StyledAside, StyledList } from "./styleAside";
import { useUser } from "../LoginAndSignup/useUser";
import { useLogout } from "../LoginAndSignup/useLogin";
import { Divider } from "../navbar/StyleNavBar";

function Aside({ display, onClose }) {
  const { user, isAdminAuthenticated } = useUser();

  const { logout } = useLogout();

  function handleClick() {
    onClose();
    logout();
  }

  return (
    <StyledAside display={display}>
      {/* <CloseButton>
        <ImCross onClick={onClose} />
      </CloseButton> */}
      <StyledList>
        <ListLink to="/" onClick={onClose}>
          <ListItem>Home</ListItem>
        </ListLink>
        <ListLink onClick={onClose} to="/designFalseCeil">
          <ListItem>False Ceil Design</ListItem>
        </ListLink>
        <ListLink onClick={onClose} to="designMolding">
          <ListItem>Molding Design</ListItem>
        </ListLink>
        <ListLink onClick={onClose} to="/AboutUs">
          <ListItem>About Us</ListItem>
        </ListLink>
        <Divider />

        {user?._id ? (
          <>
            <ListLink onClick={onClose} to={`/myAccount/${user.name}`}>
              <ListItem>My Account</ListItem>
            </ListLink>
            <ListLink onClick={onClose} to="/order">
              <ListItem>Order</ListItem>
            </ListLink>
            <ListLink onClick={onClose} to="/user/site">
              <ListItem>My Site</ListItem>
            </ListLink>
            <ListLink onClick={handleClick}>
              <ListItem>Logout</ListItem>
            </ListLink>
          </>
        ) : (
          <>
            <ListLink onClick={onClose} to="/login">
              <ListItem>Login</ListItem>
            </ListLink>
            <ListLink onClick={onClose} to="/signup">
              <ListItem>Signup</ListItem>
            </ListLink>
          </>
        )}
      </StyledList>
    </StyledAside>
  );
}

export default Aside;
