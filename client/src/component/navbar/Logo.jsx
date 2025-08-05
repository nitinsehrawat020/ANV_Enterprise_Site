import { Img, StyledLogo } from "./StyleNavBar";
import { Link } from "react-router-dom";

function Logo() {
  return (
    <Link to="/" style={{ textDecoration: "none" }}>
      <StyledLogo>
        <Img src="\pictures\logo\Logo.png" alt="the Logo" />
      </StyledLogo>
    </Link>
  );
}

export default Logo;
