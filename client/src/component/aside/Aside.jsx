import { ImCross } from "react-icons/im";
import {
  CloseButton,
  ListItem,
  ListLink,
  StyledAside,
  StyledList,
} from "./styleAside";

function Aside({ display, onClose }) {
  return (
    <StyledAside display={display}>
      <CloseButton>
        <ImCross onClick={onClose} />
      </CloseButton>
      <StyledList>
        <ListItem>
          <ListLink to="/" onClick={onClose}>
            Home
          </ListLink>
        </ListItem>
        <ListItem>
          <ListLink onClick={onClose} to="/designFalseCeil">
            False Ceil Design
          </ListLink>
        </ListItem>
        <ListItem>
          <ListLink onClick={onClose} to="designMolding">
            Molding Design
          </ListLink>
        </ListItem>
        <ListItem>
          <ListLink onClick={onClose} to="/AboutUs">
            About Us
          </ListLink>
        </ListItem>
      </StyledList>
    </StyledAside>
  );
}

export default Aside;
